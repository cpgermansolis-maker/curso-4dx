/* =========================================================
   TRIKLES — Cloud Functions
   =========================================================
   Función que envía un email a Germán cuando un alumno deja una
   reseña baja (≤ 2 estrellas).

   Variables de entorno requeridas (configurar con `firebase functions:secrets:set`):
   - GMAIL_USER             correo Gmail emisor (ej. cpgermansolis@gmail.com)
   - GMAIL_APP_PASSWORD     App Password de Google (16 chars, no el password normal)
   - ADMIN_EMAIL            destino del alerta (puede ser el mismo que GMAIL_USER)

   Despliegue:
     cd functions
     npm install
     firebase deploy --only functions
   ========================================================= */
const {onDocumentWritten} = require('firebase-functions/v2/firestore');
const {defineSecret} = require('firebase-functions/params');
const logger = require('firebase-functions/logger');
const nodemailer = require('nodemailer');

const GMAIL_USER = defineSecret('GMAIL_USER');
const GMAIL_APP_PASSWORD = defineSecret('GMAIL_APP_PASSWORD');
const ADMIN_EMAIL = defineSecret('ADMIN_EMAIL');

// Umbral: cualquier reseña con estas estrellas o menos dispara alerta
const LOW_RATING_THRESHOLD = 2;

// Catálogo local (solo para traducir id → título legible en el email)
const COURSE_TITLES = {
    '4dx': 'Las 4 Disciplinas de la Ejecución',
    'habitos': 'Los 7 Hábitos de la Gente Altamente Efectiva',
    'feum-inventarios': 'Administración de Inventarios Farmacéuticos (FEUM)',
    'gerencia-efectiva': 'La Gerencia Efectiva (Drucker)',
    'la-paradoja': 'La Paradoja (James C. Hunter)',
    'coaching': 'Coaching (Sir John Whitmore)',
    'food-beverage': 'Control de Costos en Alimentos y Bebidas (Dopson & Hayes)'
};

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
