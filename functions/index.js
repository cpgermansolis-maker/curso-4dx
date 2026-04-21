/* =========================================================
   TRIKLES — Cloud Functions
   =========================================================
   1) onLowRating:            email cuando un alumno deja una reseña ≤ 2 estrellas.
   2) createStripeCheckout:   crea una sesión de Stripe Checkout para pagos online.
   3) stripeWebhook:          recibe la confirmación de pago e inscribe al alumno.
   4) sendInactiveReminders:  corre diario a las 10 AM y recuerda a alumnos inactivos 30+ días.
   5) unsubscribeReminders:   endpoint de opt-out desde el link del correo.

   Secretos requeridos (configurar con `firebase functions:secrets:set`):
   - GMAIL_USER             correo Gmail emisor (ej. cpgermansolis@gmail.com)
   - GMAIL_APP_PASSWORD     App Password de Google (16 chars)
   - ADMIN_EMAIL            destino del alerta
   - STRIPE_SECRET_KEY      sk_live_... o sk_test_... de Stripe
   - STRIPE_WEBHOOK_SECRET  whsec_... de la configuración del endpoint webhook

   Despliegue:
     cd functions && npm install && cd .. && firebase deploy --only functions
   ========================================================= */
const {onDocumentWritten} = require('firebase-functions/v2/firestore');
const {onCall, onRequest, HttpsError} = require('firebase-functions/v2/https');
const {onSchedule} = require('firebase-functions/v2/scheduler');
const {defineSecret} = require('firebase-functions/params');
const logger = require('firebase-functions/logger');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

// Inicializar Firebase Admin una sola vez (comparte instancia entre funciones)
if (!admin.apps.length) admin.initializeApp();

const GMAIL_USER = defineSecret('GMAIL_USER');
const GMAIL_APP_PASSWORD = defineSecret('GMAIL_APP_PASSWORD');
const ADMIN_EMAIL = defineSecret('ADMIN_EMAIL');
const STRIPE_SECRET_KEY = defineSecret('STRIPE_SECRET_KEY');
const STRIPE_WEBHOOK_SECRET = defineSecret('STRIPE_WEBHOOK_SECRET');

// Umbral: cualquier reseña con estas estrellas o menos dispara alerta
const LOW_RATING_THRESHOLD = 2;

// Catálogo local (fuente de verdad de títulos, precios e inventario para Stripe)
const COURSE_TITLES = {
    '4dx': 'Las 4 Disciplinas de la Ejecución',
    'habitos': 'Los 7 Hábitos de la Gente Altamente Efectiva',
    'feum-inventarios': 'Administración de Inventarios Farmacéuticos (FEUM)',
    'gerencia-efectiva': 'La Gerencia Efectiva (Drucker)',
    'la-paradoja': 'La Paradoja (James C. Hunter)',
    'coaching': 'Coaching (Sir John Whitmore)',
    'food-beverage': 'Control de Costos en Alimentos y Bebidas (Dopson & Hayes)'
};

// Precios en centavos MXN (Stripe trabaja en la unidad más pequeña)
// Mantener en sync con el objeto PRICING de index.html
const COURSE_PRICES_CENTS = {
    '4dx':               49900,   // $499.00
    'habitos':           49900,   // $499.00
    'feum-inventarios':  129900,  // $1,299.00
    'gerencia-efectiva': 79900,   // $799.00
    'la-paradoja':       59900,   // $599.00
    'coaching':          79900,   // $799.00
    'food-beverage':     159900   // $1,599.00
};
const BUNDLE_PRICE_CENTS = 399900;  // $3,999.00
const BUNDLE_TITLE = 'Bundle completo TRIKLES — 7 cursos';

// Dominio base para success_url / cancel_url (Firebase Hosting)
const APP_BASE_URL = 'https://trikles-cursos.web.app';

// Metadatos adicionales para recordatorios de inactividad
// Número de lecciones de CONTENIDO (sin examen ni certificado)
const COURSE_LESSON_COUNTS = {
    '4dx':               8,
    'habitos':           10,
    'feum-inventarios':  22,
    'gerencia-efectiva': 22,
    'la-paradoja':       18,
    'coaching':          23,
    'food-beverage':     30
};
const COURSE_PASS_SCORES = {
    '4dx': 7, 'habitos': 7, 'feum-inventarios': 7, 'gerencia-efectiva': 7,
    'la-paradoja': 7, 'coaching': 7, 'food-beverage': 12
};

// Umbrales de recordatorio (en días)
const REMINDER_INACTIVE_DAYS = 30;   // se considera inactivo
const REMINDER_COOLDOWN_DAYS = 30;   // no enviar más de 1 recordatorio cada 30 días

function escapeHtml(s) {
    return String(s || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

exports.onLowRating = onDocumentWritten(
    {
        document: 'ratings/{ratingId}',
        secrets: [GMAIL_USER, GMAIL_APP_PASSWORD, ADMIN_EMAIL]
    },
    async (event) => {
        const after = event.data && event.data.after && event.data.after.exists ? event.data.after.data() : null;
        const before = event.data && event.data.before && event.data.before.exists ? event.data.before.data() : null;

        // Si se borró, no hacer nada
        if (!after) {
            logger.info('Rating eliminado, sin alerta');
            return null;
        }

        // Solo disparar si es una reseña baja
        const stars = after.stars || 0;
        if (stars > LOW_RATING_THRESHOLD) {
            return null;
        }

        // Evitar spam si solo cambiaron otros campos (ej. admin ocultó la reseña)
        // Solo alertamos si es creación O si las estrellas bajaron a ≤ umbral desde un valor superior
        if (before) {
            const prevStars = before.stars || 0;
            if (prevStars <= LOW_RATING_THRESHOLD) {
                // Ya era baja, ya alertamos antes
                logger.info('Rating ya era bajo antes, sin alerta duplicada');
                return null;
            }
        }

        const courseTitle = COURSE_TITLES[after.courseId] || after.courseId;
        const date = new Date(after.updatedAt || after.ratedAt).toLocaleString('es-MX', {
            timeZone: 'America/Mexico_City',
            year: 'numeric', month: 'long', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: GMAIL_USER.value(),
                pass: GMAIL_APP_PASSWORD.value()
            }
        });

        const subject = `⚠️ Reseña de ${stars} estrella${stars === 1 ? '' : 's'} en "${courseTitle}"`;

        const textBody = `Germán, recibiste una reseña baja.

Alumno: ${after.userName || 'Sin nombre'}
Empresa: ${after.userCompany || '-'}
Cargo: ${after.userRole || '-'}
Correo: ${after.userId}
Curso: ${courseTitle}
Calificación: ${stars} de 5 ⭐
Reseña:
${after.review || '(sin texto)'}

Fecha: ${date}

Ver en admin: https://trikles-cursos.web.app/admin.html
Responder al alumno: mailto:${after.userId}
`;

        const htmlBody = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
    <div style="background:linear-gradient(135deg,#b71c1c,#e53935);color:white;padding:24px;border-radius:12px 12px 0 0;">
        <h2 style="margin:0;">⚠️ Nueva reseña baja</h2>
        <div style="opacity:0.9;font-size:0.92em;margin-top:4px;">${stars} de 5 estrellas</div>
    </div>
    <div style="background:#fafafa;padding:20px;border-radius:0 0 12px 12px;">
        <p style="margin:0 0 16px;">Germán, un alumno acaba de calificar con ${stars} estrella${stars === 1 ? '' : 's'}. Te recomendamos contactarlo en las próximas 24 horas.</p>

        <table style="width:100%;border-collapse:collapse;font-size:0.94em;">
            <tr><td style="padding:8px;border-bottom:1px solid #eee;"><strong>Alumno:</strong></td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(after.userName || 'Sin nombre')}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;"><strong>Empresa:</strong></td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(after.userCompany || '-')}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;"><strong>Cargo:</strong></td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(after.userRole || '-')}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;"><strong>Correo:</strong></td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${escapeHtml(after.userId)}">${escapeHtml(after.userId)}</a></td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;"><strong>Curso:</strong></td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(courseTitle)}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;"><strong>Fecha:</strong></td><td style="padding:8px;border-bottom:1px solid #eee;">${date}</td></tr>
            <tr><td style="padding:8px;"><strong>Calificación:</strong></td><td style="padding:8px;color:#ffb300;font-size:1.4em;">${'★'.repeat(stars)}${'☆'.repeat(5 - stars)}</td></tr>
        </table>

        <div style="background:white;border-left:4px solid #e53935;padding:14px;margin-top:16px;border-radius:6px;">
            <div style="font-weight:700;color:#666;font-size:0.88em;margin-bottom:6px;">Reseña:</div>
            <div style="font-style:italic;color:#333;">${after.review ? escapeHtml(after.review).replace(/\n/g, '<br>') : '<span style="color:#999;">(sin texto)</span>'}</div>
        </div>

        <div style="margin-top:20px;text-align:center;">
            <a href="mailto:${escapeHtml(after.userId)}?subject=${encodeURIComponent('Sobre tu experiencia con ' + courseTitle)}"
               style="display:inline-block;background:#1a237e;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:700;margin-right:10px;">
                📧 Responder al alumno
            </a>
            <a href="https://trikles-cursos.web.app/admin.html"
               style="display:inline-block;background:#e65100;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:700;">
                🔧 Ver en admin
            </a>
        </div>

        <div style="margin-top:24px;padding-top:16px;border-top:1px solid #eee;font-size:0.82em;color:#888;text-align:center;">
            Este correo se generó automáticamente desde TRIKLES Cloud Functions.<br>
            Se envía solo cuando una reseña es de 1 o 2 estrellas.
        </div>
    </div>
</div>`;

        try {
            await transport.sendMail({
                from: `"TRIKLES Alertas" <${GMAIL_USER.value()}>`,
                to: ADMIN_EMAIL.value(),
                subject: subject,
                text: textBody,
                html: htmlBody
            });
            logger.info(`Email enviado por reseña baja: ${after.userId} → ${after.courseId} (${stars}⭐)`);
        } catch (err) {
            logger.error('Error enviando email de reseña baja:', err);
        }

        return null;
    }
);

// =========================================================
// STRIPE — checkout e inscripción automática
// =========================================================

/**
 * createStripeCheckout (HTTPS callable)
 * Invocado desde el cliente después de que el alumno hace click en "Pagar con tarjeta".
 * Crea una Stripe Checkout Session y devuelve la URL para redirigir al alumno.
 *
 * Entrada: { courseId: string }  (o 'BUNDLE' para comprar todos los cursos)
 * Salida:  { url: string }
 */
exports.createStripeCheckout = onCall(
    {
        secrets: [STRIPE_SECRET_KEY],
        cors: true
    },
    async (request) => {
        // El alumno debe estar autenticado
        if (!request.auth || !request.auth.token.email) {
            throw new HttpsError('unauthenticated', 'Debes iniciar sesión para pagar.');
        }
        const userEmail = String(request.auth.token.email).trim().toLowerCase();
        const courseId = (request.data && request.data.courseId) || '';

        // Validar producto
        let lineItems, amountCents, productName;
        if (courseId === 'BUNDLE' || courseId === '__bundle') {
            amountCents = BUNDLE_PRICE_CENTS;
            productName = BUNDLE_TITLE;
        } else if (COURSE_PRICES_CENTS[courseId]) {
            amountCents = COURSE_PRICES_CENTS[courseId];
            productName = COURSE_TITLES[courseId] || courseId;
        } else {
            throw new HttpsError('invalid-argument', 'Curso inválido: ' + courseId);
        }

        lineItems = [{
            price_data: {
                currency: 'mxn',
                product_data: {
                    name: productName,
                    description: 'Plataforma TRIKLES · Acceso de por vida · Certificado incluido'
                },
                unit_amount: amountCents
            },
            quantity: 1
        }];

        // Cargar Stripe SDK en runtime (evita costo de arranque)
        const stripe = require('stripe')(STRIPE_SECRET_KEY.value(), {apiVersion: '2024-06-20'});

        try {
            const session = await stripe.checkout.sessions.create({
                mode: 'payment',
                payment_method_types: ['card', 'oxxo'],
                line_items: lineItems,
                customer_email: userEmail,
                metadata: {
                    courseId: courseId,
                    userEmail: userEmail
                },
                success_url: APP_BASE_URL + '/pago-exitoso.html?session_id={CHECKOUT_SESSION_ID}',
                cancel_url: APP_BASE_URL + '/index.html',
                locale: 'es',
                allow_promotion_codes: true,
                // OXXO requiere que el cliente tenga un nombre — Stripe lo solicita automáticamente
                payment_intent_data: {
                    metadata: {
                        courseId: courseId,
                        userEmail: userEmail
                    }
                }
            });
            logger.info('Checkout creado', {userEmail, courseId, sessionId: session.id});
            return {url: session.url, sessionId: session.id};
        } catch (err) {
            logger.error('Error creando checkout de Stripe:', err);
            throw new HttpsError('internal', 'No se pudo crear el checkout: ' + err.message);
        }
    }
);

/**
 * stripeWebhook (HTTPS request)
 * Endpoint que Stripe invoca cuando un pago se completa.
 * Valida la firma con STRIPE_WEBHOOK_SECRET y escribe la inscripción en Firestore.
 *
 * Nota: debe retornar 200 rápidamente o Stripe reintenta.
 */
exports.stripeWebhook = onRequest(
    {
        secrets: [STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET],
        cors: false,
        timeoutSeconds: 30,
        invoker: 'public'
    },
    async (req, res) => {
        if (req.method !== 'POST') {
            res.status(405).send('Method not allowed');
            return;
        }

        const stripe = require('stripe')(STRIPE_SECRET_KEY.value(), {apiVersion: '2024-06-20'});
        const sig = req.headers['stripe-signature'];
        let event;

        try {
            // rawBody viene en requests Firebase/onRequest
            event = stripe.webhooks.constructEvent(req.rawBody, sig, STRIPE_WEBHOOK_SECRET.value());
        } catch (err) {
            logger.error('Firma de webhook inválida:', err.message);
            res.status(400).send('Webhook signature error: ' + err.message);
            return;
        }

        // Eventos relevantes:
        //   checkout.session.completed          → el cliente terminó el flow. Para tarjeta ya pagó (payment_status=paid);
        //                                          para OXXO/SPEI solo generó el voucher (payment_status=unpaid) y hay que esperar.
        //   checkout.session.async_payment_succeeded → el pago asíncrono (OXXO/SPEI) fue confirmado; ahora sí inscribir.
        //   checkout.session.async_payment_failed    → el voucher expiró sin pagarse; solo log.
        const VALID_EVENTS = [
            'checkout.session.completed',
            'checkout.session.async_payment_succeeded',
            'checkout.session.async_payment_failed'
        ];
        if (!VALID_EVENTS.includes(event.type)) {
            logger.info('Evento ignorado: ' + event.type);
            res.status(200).send('Ignored');
            return;
        }

        const session = event.data.object;

        if (event.type === 'checkout.session.async_payment_failed') {
            logger.warn('Pago asíncrono falló/expiró', {sessionId: session.id, metadata: session.metadata});
            res.status(200).send('Payment failed logged');
            return;
        }

        // Para checkout.session.completed: solo inscribir si el pago ya está confirmado.
        // OXXO/SPEI devuelven payment_status=unpaid y deben esperar a async_payment_succeeded.
        if (event.type === 'checkout.session.completed' && session.payment_status !== 'paid') {
            logger.info('Sesión creada pero pago aún pendiente (OXXO/SPEI)', {
                sessionId: session.id,
                payment_status: session.payment_status
            });
            res.status(200).send('Awaiting async payment');
            return;
        }

        const metadata = session.metadata || {};
        const userEmail = (metadata.userEmail || session.customer_email || '').trim().toLowerCase();
        const courseId = metadata.courseId;

        if (!userEmail || !courseId) {
            logger.error('Metadata incompleta en sesión:', session.id, metadata);
            res.status(200).send('Missing metadata');
            return;
        }

        const db = admin.firestore();
        const userRef = db.collection('users').doc(userEmail);

        // Preparar la(s) inscripción(es) a escribir
        const enrollmentBase = {
            enrolledAt: new Date().toISOString(),
            paidAt: new Date().toISOString(),
            stripeSessionId: session.id,
            amount: session.amount_total / 100, // en MXN
            currency: session.currency,
            method: 'stripe',
            voucher: null,
            progress: {
                xp: 0,
                completed: [],
                correctQuizzes: [],
                finalScore: null,
                completedDate: null
            }
        };

        try {
            // Si el doc del usuario no existe, crear uno mínimo para no fallar el update
            const userSnap = await userRef.get();
            if (!userSnap.exists) {
                await userRef.set({
                    email: userEmail,
                    name: session.customer_details?.name || userEmail,
                    registeredAt: new Date().toISOString(),
                    enrollments: {}
                }, {merge: true});
            }

            const patch = {};
            if (courseId === 'BUNDLE' || courseId === '__bundle') {
                // Inscribir a los 7 cursos
                for (const cid of Object.keys(COURSE_PRICES_CENTS)) {
                    patch['enrollments.' + cid] = Object.assign({}, enrollmentBase, {
                        bundlePurchase: true
                    });
                }
            } else {
                patch['enrollments.' + courseId] = enrollmentBase;
            }

            await userRef.update(patch);
            logger.info('Inscripción guardada', {userEmail, courseId, sessionId: session.id});

            // (Opcional) email de bienvenida / recibo — se puede agregar aquí con el mismo nodemailer
            res.status(200).send('OK');
        } catch (err) {
            logger.error('Error escribiendo enrollment:', err);
            // Devolver 500 hace que Stripe reintente — puede ser deseable o no.
            // Devolvemos 200 para no generar duplicados, pero logueamos el error.
            res.status(200).send('Error handled: ' + err.message);
        }
    }
);


// =========================================================
// RECORDATORIOS DE INACTIVIDAD
// =========================================================
// Corre todos los días a las 10:00 AM tiempo de Ciudad de México.
// Busca alumnos inactivos por 30+ días con cursos incompletos
// y les envía un correo amigable para retomar el curso.
// Evita spam: máximo 1 recordatorio por curso cada 30 días.
// =========================================================

// Helper: renderiza el email de recordatorio
function renderReminderEmail(userName, courseTitle, courseId, completedCount, totalLessons, daysInactive) {
    const firstName = (userName || 'Hola').split(' ')[0];
    const progressPct = Math.round((completedCount / totalLessons) * 100);
    const remaining = totalLessons - completedCount;
    const resumeUrl = APP_BASE_URL + '/curso.html?id=' + courseId;
    const unsubscribeUrl = APP_BASE_URL + '/baja-recordatorios.html?email=' +
        encodeURIComponent((userName || '').toLowerCase());

    let cheekyLine;
    if (progressPct === 0) {
        cheekyLine = 'Te inscribiste hace un rato pero no has entrado todavía. ¡Tu curso te está esperando!';
    } else if (progressPct < 30) {
        cheekyLine = 'Empezaste muy bien pero hace ' + daysInactive + ' días que no avanzas. ¿Retomamos?';
    } else if (progressPct < 70) {
        cheekyLine = 'Llevas un excelente avance (' + progressPct + '%) pero hace ' + daysInactive + ' días no entras. Cierra el ciclo — te faltan solo ' + remaining + ' lecciones.';
    } else {
        cheekyLine = '¡Estás a NADA de terminar! Te faltan apenas ' + remaining + ' lecciones para tu certificado TRIKLES.';
    }

    const text = firstName + ',\n\n' +
        cheekyLine + '\n\n' +
        'Curso: ' + courseTitle + '\n' +
        'Tu progreso: ' + completedCount + '/' + totalLessons + ' lecciones (' + progressPct + '%)\n' +
        'Última actividad: hace ' + daysInactive + ' días\n\n' +
        'Retoma tu curso aquí:\n' + resumeUrl + '\n\n' +
        '(El sistema te llevará directo a la lección donde quedaste.)\n\n' +
        '— LADE Germán Solís Muñoz · TRIKLES\n\n' +
        'Si no quieres más recordatorios: ' + unsubscribeUrl;

    const html =
'<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;background:#f5f5f5;padding:20px;">' +
  '<div style="background:white;border-radius:14px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">' +
    '<div style="background:linear-gradient(135deg,#1a237e,#3949ab,#ff8f00);color:white;padding:28px 24px;text-align:center;">' +
      '<div style="font-family:Georgia,serif;font-size:1.8em;font-weight:900;letter-spacing:2px;color:#ffd54f;">TRIKLES</div>' +
      '<div style="opacity:0.9;font-size:0.9em;margin-top:4px;">📚 ¡Retomemos tu curso!</div>' +
    '</div>' +
    '<div style="padding:28px 26px;color:#333;">' +
      '<p style="font-size:1.05em;margin:0 0 14px;">Hola <strong>' + escapeHtml(firstName) + '</strong>,</p>' +
      '<p style="margin:0 0 18px;line-height:1.5;">' + escapeHtml(cheekyLine) + '</p>' +

      '<div style="background:#f3e5f5;border-left:4px solid #7b1fa2;padding:14px 16px;border-radius:6px;margin:20px 0;">' +
        '<div style="font-size:0.82em;color:#4a148c;font-weight:700;letter-spacing:1px;margin-bottom:4px;">TU CURSO</div>' +
        '<div style="font-size:1.15em;font-weight:800;color:#1a237e;">' + escapeHtml(courseTitle) + '</div>' +
      '</div>' +

      '<div style="margin:20px 0;">' +
        '<div style="display:flex;justify-content:space-between;font-size:0.88em;color:#666;margin-bottom:6px;">' +
          '<span>Tu progreso</span>' +
          '<span><strong style="color:#1a237e;">' + completedCount + '</strong>/' + totalLessons + ' lecciones</span>' +
        '</div>' +
        '<div style="background:#e0e0e0;height:12px;border-radius:6px;overflow:hidden;">' +
          '<div style="background:linear-gradient(90deg,#ff9800,#ff6f00);height:100%;width:' + progressPct + '%;border-radius:6px;transition:width 0.6s;"></div>' +
        '</div>' +
        '<div style="text-align:right;font-size:0.82em;color:#888;margin-top:4px;">' + progressPct + '% completado</div>' +
      '</div>' +

      '<div style="text-align:center;margin:28px 0 20px;">' +
        '<a href="' + resumeUrl + '" style="display:inline-block;background:linear-gradient(135deg,#ff9800,#ff6f00);color:white;padding:16px 36px;border-radius:10px;text-decoration:none;font-weight:800;font-size:1.05em;box-shadow:0 4px 14px rgba(255,111,0,0.4);">' +
          '▶ Retomar mi curso' +
        '</a>' +
      '</div>' +

      '<div style="background:#e8f5e9;border-left:3px solid #2e7d32;padding:12px 14px;border-radius:6px;margin:20px 0;font-size:0.9em;color:#1b5e20;">' +
        '💡 <strong>Tip:</strong> al hacer clic, el sistema te lleva directamente a la lección donde quedaste — sin necesidad de buscar.' +
      '</div>' +

      '<div style="margin-top:24px;padding-top:16px;border-top:1px solid #eee;font-size:0.88em;color:#666;">' +
        '<p style="margin:0 0 6px;"><strong>LADE Germán Solís Muñoz</strong></p>' +
        '<p style="margin:0;opacity:0.8;">Director de Gestión Empresarial — TRIKLES</p>' +
      '</div>' +
    '</div>' +

    '<div style="padding:14px 24px;background:#fafafa;font-size:0.76em;color:#999;text-align:center;border-top:1px solid #eee;">' +
      'Recibes este correo porque te inscribiste a un curso TRIKLES.<br>' +
      'Si no quieres más recordatorios, <a href="' + unsubscribeUrl + '" style="color:#1976d2;">haz clic aquí para dejar de recibirlos</a>.' +
    '</div>' +
  '</div>' +
'</div>';

    return { text: text, html: html };
}

/**
 * sendInactiveReminders — corre diariamente a las 10 AM Ciudad de México.
 * Envía correos a alumnos inactivos por 30+ días con cursos incompletos.
 */
exports.sendInactiveReminders = onSchedule(
    {
        schedule: '0 10 * * *',                 // 10:00 todos los días
        timeZone: 'America/Mexico_City',
        secrets: [GMAIL_USER, GMAIL_APP_PASSWORD]
    },
    async () => {
        const db = admin.firestore();
        const now = Date.now();

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: GMAIL_USER.value(),
                pass: GMAIL_APP_PASSWORD.value()
            }
        });

        let scanned = 0, sent = 0, skipped = 0;

        try {
            const usersSnap = await db.collection('users').get();

            for (const docSnap of usersSnap.docs) {
                const user = docSnap.data();
                if (!user || !user.email) continue;

                // Respetar opt-out
                if (user.emailPreferences && user.emailPreferences.remindersEnabled === false) {
                    continue;
                }

                const enrollments = user.enrollments || {};
                for (const courseId of Object.keys(enrollments)) {
                    const enr = enrollments[courseId];
                    scanned++;

                    const title = COURSE_TITLES[courseId];
                    const totalLessons = COURSE_LESSON_COUNTS[courseId];
                    if (!title || !totalLessons) { skipped++; continue; }

                    const progress = enr.progress || {};
                    const passScore = COURSE_PASS_SCORES[courseId] || 7;
                    const completedCount = (progress.completed || []).length;

                    // Saltar si ya está certificado (completó + aprobó examen)
                    if (completedCount >= totalLessons && (progress.finalScore || 0) >= passScore) {
                        skipped++; continue;
                    }

                    // Saltar si el alumno lleva pocos días inactivo
                    const lastActive = progress.lastActiveAt || enr.enrolledAt;
                    if (!lastActive) { skipped++; continue; }
                    const daysInactive = Math.floor((now - new Date(lastActive).getTime()) / 86400000);
                    if (daysInactive < REMINDER_INACTIVE_DAYS) { skipped++; continue; }

                    // Cooldown: no enviar más de 1 recordatorio cada REMINDER_COOLDOWN_DAYS días
                    const lastReminder = enr.lastReminderAt;
                    if (lastReminder) {
                        const daysSinceReminder = (now - new Date(lastReminder).getTime()) / 86400000;
                        if (daysSinceReminder < REMINDER_COOLDOWN_DAYS) { skipped++; continue; }
                    }

                    // Componer y enviar el correo
                    const rendered = renderReminderEmail(
                        user.name, title, courseId, completedCount, totalLessons, daysInactive
                    );
                    const firstName = (user.name || '').split(' ')[0];
                    const subject = '📚 ' + firstName +
                        ', retomemos "' + title + '" — te faltan ' +
                        (totalLessons - completedCount) + ' lecciones';

                    try {
                        await transport.sendMail({
                            from: '"TRIKLES · Germán Solís" <' + GMAIL_USER.value() + '>',
                            to: user.email,
                            subject: subject,
                            text: rendered.text,
                            html: rendered.html
                        });
                        // Marcar el timestamp del recordatorio enviado
                        await docSnap.ref.update({
                            ['enrollments.' + courseId + '.lastReminderAt']: new Date().toISOString()
                        });
                        sent++;
                        logger.info('Recordatorio enviado', { to: user.email, courseId: courseId, daysInactive: daysInactive });
                    } catch (errSend) {
                        logger.error('Error enviando recordatorio', { to: user.email, courseId: courseId, error: errSend.message });
                    }
                }
            }
            logger.info('sendInactiveReminders completado', { scanned: scanned, sent: sent, skipped: skipped });
        } catch (err) {
            logger.error('Error en sendInactiveReminders:', err);
        }

        return null;
    }
);

/**
 * unsubscribeReminders (HTTPS request)
 * Endpoint simple para que un alumno se desuscriba de los recordatorios
 * haciendo clic en el link del correo.
 * Uso: GET /unsubscribeReminders?email=xxx
 */
exports.unsubscribeReminders = onRequest(
    { cors: true },
    async (req, res) => {
        const email = String(req.query.email || '').trim().toLowerCase();
        if (!email || !email.includes('@')) {
            res.status(400).send('Email inválido');
            return;
        }
        try {
            const db = admin.firestore();
            await db.collection('users').doc(email).set({
                emailPreferences: { remindersEnabled: false }
            }, { merge: true });
            res.status(200).send(
'<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8">' +
'<title>Recordatorios desactivados — TRIKLES</title>' +
'<style>body{font-family:sans-serif;background:linear-gradient(135deg,#1a237e,#3949ab);' +
'color:white;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;}' +
'.c{background:white;color:#333;padding:40px;border-radius:16px;max-width:420px;text-align:center;' +
'box-shadow:0 20px 60px rgba(0,0,0,0.3);}h1{color:#1a237e;font-size:1.3em;}' +
'.icon{font-size:3em;margin-bottom:10px;}p{line-height:1.5;color:#666;}' +
'a{display:inline-block;margin-top:20px;background:#ff9800;color:white;padding:12px 24px;' +
'border-radius:10px;text-decoration:none;font-weight:700;}</style></head><body>' +
'<div class="c"><div class="icon">✓</div><h1>Ya no recibirás recordatorios</h1>' +
'<p>Tu preferencia fue actualizada. Tus cursos siguen disponibles normalmente.</p>' +
'<a href="/index.html">Volver a TRIKLES</a></div></body></html>');
            logger.info('Unsubscribe aplicado', { email: email });
        } catch (err) {
            logger.error('Error en unsubscribeReminders:', err);
            res.status(500).send('Error procesando la solicitud.');
        }
    }
);
