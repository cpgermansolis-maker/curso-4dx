// ============================================
// CURSO DESTAPA TU NEGOCIO — Obra original TRIKLES
// Método FLUIR® de gestión de restricciones para PYMES
// Inspirado en los principios de la Teoría de Restricciones
// popularizados por Eliyahu Goldratt. Método, estructura,
// casos y ejemplos 100% originales de German Solis / TRIKLES.
// Estado del build: lecciones 0-5 (Intro + Módulo F) COMPLETAS.
//                   Lecciones 6-21, examen y certificado: pendientes.
// NO publicar en CATALOG hasta terminar todas las lecciones.
// Blueprint: libros/LaMeta/blueprint-destapa-tu-negocio.md
// ============================================

const COURSE_DESTAPA_TU_NEGOCIO = {
    id: 'destapa-tu-negocio',
    meta: {
        title: 'Destapa tu Negocio',
        subtitle: 'Encuentra y rompe el freno que limita tus utilidades',
        author: 'LADE Germán Solís Muñoz · TRIKLES',
        cover: 'assets/covers/destapa-tu-negocio.svg',
        description: 'En todo negocio hay UN punto que decide cuánto ganas. Los demás solo hacen ruido. Este curso te enseña el Método FLUIR — un sistema de 5 fases para encontrar el freno que limita las utilidades de tu negocio, exprimirlo sin invertir un peso, poner toda la operación a su ritmo y romperlo una y otra vez. Para dueños de PYMES mexicanas: talleres, restaurantes, clínicas, comercios, despachos y fábricas. 22 lecciones con 7 casos de negocio que te acompañan de principio a fin, 43 quizzes, examen final y certificado. Inspirado en los principios de la Teoría de Restricciones popularizados por Eliyahu Goldratt, con método, casos y estructura originales de TRIKLES.',
        descripcionCorta: 'El Método FLUIR: encuentra el freno de tu negocio y conviértelo en tu palanca de crecimiento',
        category: 'Operación y rentabilidad de PYMES',
        lessonsCount: 24,
        duration: '10-12 horas',
        level: 'Todos los niveles',
        active: true,
        tags: ['restricciones', 'cuello de botella', 'operaciones', 'PYME', 'rentabilidad', 'flujo', 'método FLUIR', 'productividad'],

        // --- Coursera-like landing ---
        partnerName: 'TRIKLES',
        partnerTag: 'Formación Ejecutiva',
        instructor: {
            name: 'LADE Germán Solís Muñoz',
            title: 'Director de Gestión Empresarial · TRIKLES',
            photo: 'assets/instructor-german.jpg',
            bio: 'Instructor certificado, consultor de PyMEs y fundador de TRIKLES. Ha acompañado a dueños de negocio en México a encontrar el punto exacto donde su operación se atora — y a convertirlo en utilidades.'
        },
        estimatedHours: '~11 horas',
        schedule: 'Horario flexible · a tu ritmo',
        language: 'Español',
        includesCertificate: true,
        learningOutcomes: [
            'Diagnosticar en una semana dónde está el freno de tu negocio — sin software, sin consultores y sin datos perfectos',
            'Medir cualquier decisión con los 3 medidores del dinero: el que entra, el que está atrapado y el que sale',
            'Exprimir tu freno sin invertir un peso: recuperar la capacidad oculta en paradas, retrabajos y reglas viejas',
            'Poner todo el negocio al ritmo del freno para entregar a tiempo, liberar caja y eliminar la cultura de urgencias',
            'Aplicar el ciclo FLUIR completo como rutina de mejora continua — y detectar el siguiente freno antes de que te frene'
        ],
        skills: [
            'Diagnóstico de restricciones',
            'Los 3 medidores del dinero',
            'Lectura crítica de indicadores',
            'Gestión de flujo de trabajo',
            'Reducción de inventario y plazos',
            'Priorización operativa',
            'Decisiones de capacidad',
            'Costeo para decisiones',
            'Plazos de entrega confiables',
            'Mejora continua'
        ],
        tools: [
            'Test de los 3 "no" (filtro para cualquier inversión o "mejora")',
            'Mapa de los 3 cajones del dinero (plantilla de clasificación)',
            'Guía de las 3 señales para localizar tu freno en una semana',
            'Los 7 negocios de estudio (casos mexicanos completos)',
            'Examen final con certificado TRIKLES'
        ],
        details: [
            { label: 'Modalidad', value: 'Online · 100% asíncrono' },
            { label: 'Idioma', value: 'Español (MX)' },
            { label: 'Certificado', value: 'Certificado TRIKLES al aprobar examen final' },
            { label: 'Acceso', value: 'De por vida, incluye actualizaciones' },
            { label: 'Dispositivo', value: 'Computadora, tablet o celular' }
        ],
        faq: [
            {
                q: '¿Esto es solo para fábricas?',
                a: 'No. El método nació en la manufactura, pero el principio — un solo punto decide cuánto produce todo el sistema — aplica igual a un restaurante, una clínica, un despacho o una tienda. Los 7 casos del curso cubren giros distintos a propósito.'
            },
            {
                q: '¿Necesito saber de finanzas o tener un ERP?',
                a: 'No. El curso usa exactamente 3 medidores que se explican desde cero, y el diagnóstico del freno se hace con observación directa: dónde se apila el trabajo, qué falta en las urgencias y qué dicen tus encargados.'
            },
            {
                q: '¿Qué tan rápido se ven resultados?',
                a: 'El diagnóstico (Módulos F y L) se hace en 1-2 semanas. Las acciones del Módulo U — exprimir el freno sin invertir — suelen mostrar efecto en el mismo mes, porque atacan capacidad que ya pagaste y estás desperdiciando.'
            },
            {
                q: '¿Este curso está basado en algún libro?',
                a: 'El curso enseña principios de gestión de restricciones que popularizó el físico Eliyahu Goldratt y que hoy se estudian en universidades de todo el mundo. El método FLUIR, la estructura, los casos y todos los ejemplos son desarrollo original de TRIKLES. Si el tema te engancha, te recomendamos leer a Goldratt directamente — es una gran lectura.'
            }
        ],

        reflectionQuestions: [
            '¿Cuál es el freno de TU negocio hoy, y con qué señales lo identificaste?',
            '¿Qué vas a hacer en los próximos 30 días para exprimir ese freno sin invertir?',
            '¿Qué cifra de tu negocio vas a dejar de premiar a partir de hoy, y cuál vas a vigilar en su lugar?'
        ]
    },

    // Requisitos por POSICIÓN en lessons[] (reindexar si se inserta una lección)
    lessonRequirements: {
        0:  ['quiz_intro'],
        1:  ['quiz_l1a', 'quiz_l1b'],
        2:  ['quiz_l2a', 'quiz_l2b'],
        3:  ['quiz_l3a', 'quiz_l3b'],
        4:  ['quiz_l4a', 'quiz_l4b'],
        5:  ['quiz_l5a', 'quiz_l5b'],
        6:  ['quiz_l6a', 'quiz_l6b'],
        7:  ['quiz_l7a', 'quiz_l7b'],
        8:  ['quiz_l8a', 'quiz_l8b'],
        9:  ['quiz_l9a', 'quiz_l9b'],
        10: ['quiz_l10a', 'quiz_l10b'],
        11: ['quiz_l11a', 'quiz_l11b'],
        12: ['quiz_l12a', 'quiz_l12b'],
        13: ['quiz_l13a', 'quiz_l13b'],
        14: ['quiz_l14a', 'quiz_l14b'],
        15: ['quiz_l15a', 'quiz_l15b'],
        16: ['quiz_l16a', 'quiz_l16b'],
        17: ['quiz_l17a', 'quiz_l17b'],
        18: ['quiz_l18a', 'quiz_l18b'],
        19: ['quiz_l19a', 'quiz_l19b'],
        20: ['quiz_l20a', 'quiz_l20b'],
        21: ['quiz_l21a', 'quiz_l21b'],
        22: ['final_q1','final_q2','final_q3','final_q4','final_q5','final_q6','final_q7','final_q8','final_q9','final_q10'],
        23: []
    },

    examPassScore: 7,

    certificate: {
        courseNameForCert: 'Destapa tu Negocio<br>El Método FLUIR de gestión de restricciones',
        description: 'Habiendo demostrado dominio del Método FLUIR: la meta y los 3 medidores del dinero, la localización de la restricción del sistema, su aprovechamiento máximo sin inversión, la subordinación del flujo de trabajo y el ciclo de mejora continua aplicado a la pequeña y mediana empresa.'
    },

    lessons: [

    // ==========================================================
    // LECCIÓN 0 — INTRO · EL NEGOCIO OCUPADO
    // ==========================================================
    {
        id: 'intro', module: 'Introducción', tag: 'tag-intro', tagLabel: 'INTRODUCCIÓN',
        title: 'El negocio ocupado (que no gana más)',
        subtitle: 'Por qué todos trabajan al 100% y las utilidades siguen igual — y qué vamos a hacer al respecto',
        content: `
        <div class="lesson-hero" style="background-image:linear-gradient(135deg,rgba(11,61,58,0.88),rgba(11,61,58,0.55)),url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&q=80')">
            <div class="hero-caption">Tu negocio no necesita más esfuerzo. Necesita que lo <em>destapes</em>.</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Por qué un negocio puede estar lleno de trabajo y vacío de utilidades al mismo tiempo</li>
                <li>El test de los 3 "no": el filtro que delata cualquier "mejora" que no mejoró nada</li>
                <li>Los 5 síntomas del negocio tapado (vas a reconocer varios)</li>
                <li>El mapa completo del Método FLUIR — las 5 fases que recorreremos juntos</li>
            </ul>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor · LADE Germán Solís Muñoz</div>
                <div class="instructor-note-text">He visitado cientos de negocios en México y casi todos comparten la misma escena: todo el mundo trabajando, máquinas encendidas, teléfono sonando, el dueño apagando fuegos… y al final del mes, la utilidad no se mueve. Durante años creí lo mismo que ellos: que faltaba echarle más ganas. Hasta que entendí algo que me cambió la forma de ver cualquier operación: <em>en todo negocio hay un solo punto que decide cuánto dinero entra</em>. Si trabajas sobre ese punto, todo mejora. Si trabajas sobre cualquier otro, solo te cansas. Este curso existe para que encuentres el tuyo.</div>
            </div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA IDEA QUE LO EXPLICA TODO</div>
            <div class="aha-quote">"En todo negocio hay UN punto que decide cuánto ganas. Los demás solo hacen ruido."</div>
            <div class="aha-author">— Principio central del Método FLUIR</div>
            <div class="aha-body">Piensa en una manguera con un nudo. No importa cuánto abras la llave: el agua que sale la decide el nudo. Apretar la llave, comprar una manguera más larga o pintar la llave de dorado no cambia nada. Tu negocio funciona igual: las ventas que entran, los pedidos que salen y la caja que se libera los decide un solo punto — el freno. El problema es que casi ningún dueño sabe cuál es el suyo. Y entonces invierte, contrata y se desvela… en los lugares equivocados.</div>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · El taller de Rubén (Querétaro)</div>
            <div class="case-body">
                <p>Rubén tiene un taller mecánico con 6 técnicos. Todos ocupados, siempre. Los clientes esperan hasta dos semanas por una reparación, así que Rubén hizo lo que cualquiera haría: invirtió $180,000 en un elevador adicional para "aumentar capacidad".</p>
                <p>Seis meses después: los técnicos igual de saturados, los clientes esperando lo mismo, y la utilidad… igual. Pero ahora con una deuda de $180,000.</p>
                <p>¿Qué pasó? El freno de su taller nunca fueron los elevadores. Era <strong>una sola persona</strong>: el maestro especialista que diagnostica las fallas eléctricas, por donde pasaban casi todos los autos antes de repararse. Los 6 técnicos pasaban horas esperando su veredicto. Rubén compró fierros cuando su nudo era un cuello humano de 45 minutos por auto.</p>
                <p><strong>A lo largo del curso vamos a regresar con Rubén</strong> — y a ver cómo, sin gastar un peso más, su taller terminó entregando en 4 días lo que antes tardaba dos semanas.</p>
            </div>
        </div>

        <div class="content-card tip">
            <h3>Herramienta #1 · El test de los 3 "no"</h3>
            <p>Antes de aceptar que algo "mejoró" en tu negocio — una máquina nueva, un software, una reorganización — hazle estas tres preguntas:</p>
            <ol class="concept-list">
                <li>¿<strong>Vendimos más</strong>? (no produjimos más: <em>vendimos</em> más)</li>
                <li>¿<strong>Bajó el dinero atrapado</strong>? (inventario, trabajo a medias, cuentas por cobrar)</li>
                <li>¿<strong>Bajó el gasto</strong> de operar?</li>
            </ol>
            <p>Si las tres respuestas son "no", la mejora no mejoró nada — por más moderna que se vea, por más ocupados que estén todos. El elevador de Rubén reprobó las tres. <strong>Este test es el portero de todo el curso:</strong> lo vamos a usar una y otra vez.</p>
        </div>

        <div class="content-card">
            <h3>Los 5 síntomas del negocio tapado</h3>
            <p>Marca mentalmente los que vives hoy:</p>
            <ol class="concept-list">
                <li><strong>Todo es urgente.</strong> El día se gobierna por el cliente que grita más fuerte, no por un plan.</li>
                <li><strong>Las fechas no se cumplen</strong> — aunque cada persona, por separado, "hizo su parte".</li>
                <li><strong>La caja está apretada</strong> aunque las ventas "van bien". El dinero existe, pero está atorado en algún lugar del proceso.</li>
                <li><strong>Todos están ocupados todo el tiempo</strong>, y aun así los pedidos salen tarde.</li>
                <li><strong>El dueño es el bombero.</strong> Si tú no empujas personalmente un pedido, no sale.</li>
            </ol>
            <p>Si marcaste 3 o más, tu negocio está tapado. Y aquí va la buena noticia que desarrollaremos durante 22 lecciones: <strong>ninguno de esos síntomas se arregla con más esfuerzo, porque ninguno es un problema de esfuerzo.</strong> Son la firma visible de un flujo mal diseñado — y el flujo se rediseña.</p>
        </div>

        <div class="content-card">
            <h3>El mapa del curso · Método FLUIR</h3>
            <p>El curso recorre 5 fases. Cada letra es una fase, cada fase es un módulo:</p>
            <div style="margin:14px 0;padding:18px;background:#f0faf8;border-radius:8px;border-left:4px solid #0b3d3a;">
                <p style="margin:6px 0;"><strong style="color:#0b3d3a;">F · Fija la meta.</strong> Para qué existe tu negocio (la respuesta es más incómoda de lo que crees) y los 3 medidores que traducen cualquier decisión a dinero.</p>
                <p style="margin:6px 0;"><strong style="color:#0b3d3a;">L · Localiza el freno.</strong> Por qué todo sale tarde aunque nadie falle, y cómo encontrar tu freno en una semana con 3 señales simples.</p>
                <p style="margin:6px 0;"><strong style="color:#0b3d3a;">U · Úsalo al máximo.</strong> Exprimir el freno sin invertir: la capacidad gratis que ya pagaste y estás tirando.</p>
                <p style="margin:6px 0;"><strong style="color:#0b3d3a;">I · Integra el ritmo.</strong> Todo el negocio al paso del freno: fechas confiables, menos inventario, adiós urgencias.</p>
                <p style="margin:6px 0;"><strong style="color:#0b3d3a;">R · Rompe y repite.</strong> Elevar el freno, esquivar la trampa de la inercia y convertir tu operación en tu mejor vendedor.</p>
            </div>
            <p>Y no vas a recorrerlo solo: te acompañan <strong>7 negocios de estudio</strong> — el taller de Rubén, la tortillería La Espiga, la fonda de Doña Mary, la imprenta Grafix, la clínica dental Sonríe, la mueblería San José y un despacho contable en pleno marzo. Giros distintos a propósito: el freno vive en todos.</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128218;</span><div>
                <h3>De dónde viene este método</h3>
                <p>Los principios que vas a aprender pertenecen a un campo de la gestión llamado <strong>Teoría de Restricciones</strong>, que popularizó el físico israelí Eliyahu Goldratt en los años 80 y que hoy se estudia en universidades y se aplica en fábricas, hospitales, bancos y hasta ejércitos.</p>
                <p>El <strong>Método FLUIR</strong> es la adaptación original de TRIKLES de esos principios al terreno donde vivimos: la PYME mexicana — donde no hay ERP, no hay departamento de mejora continua, y el "sistema" eres tú con una libreta. Si al terminar el curso quieres ir más profundo, lee a Goldratt directamente: lo vas a disfrutar el doble porque ya hablarás su idioma.</p>
            </div></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Micro-ejercicio (10 minutos):</strong></p>
                <ol>
                    <li>Toma una hoja y escribe los <strong>5 síntomas del negocio tapado</strong>. Palomea los que vives. Sé honesto: nadie más va a ver esta hoja.</li>
                    <li>Abajo, contesta de memoria (sin revisar nada): <em>"Si tuviera que apostar, el punto donde mi negocio se atora es ________."</em></li>
                </ol>
                <p>Guarda la hoja. En el Módulo L vas a diagnosticar tu freno con método — y comparar contra tu intuición de hoy. A la mayoría de los dueños les espera una sorpresa.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_intro">
            <div class="quiz-label">Mini quiz de introducción</div>
            <div class="quiz-question">Una "mejora" en tu negocio solo cuenta como mejora real si…</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_intro', this, false)">El equipo está más ocupado y las máquinas no paran</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_intro', this, true)">Vendiste más, bajó el dinero atrapado o bajó el gasto de operar</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_intro', this, false)">Se usó tecnología más moderna que la anterior</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_intro', this, false)">Cada área cumplió su propia cuota de producción</div>
            </div>
            <div class="quiz-feedback" id="quiz_intro_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Que un solo punto — el freno — decide cuánto dinero entra a tu negocio</li>
                <li>Que el test de los 3 "no" desenmascara cualquier mejora falsa</li>
                <li>Reconocer los 5 síntomas del negocio tapado en tu propia operación</li>
                <li>El mapa de las 5 fases del Método FLUIR que vas a recorrer</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 1</strong> desmontamos la creencia más cara de la PYME mexicana: que más esfuerzo produce más utilidad. Spoiler: a veces produce lo contrario.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 1 — INTRO · MÁS ESFUERZO NO ES MÁS UTILIDAD
    // ==========================================================
    {
        id: 'l1', module: 'Introducción', tag: 'tag-intro', tagLabel: 'INTRODUCCIÓN',
        title: 'Más esfuerzo no es más utilidad',
        subtitle: 'Por qué cada área de tu negocio puede ser excelente por separado… mientras el conjunto pierde dinero',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">Un negocio donde cada área gana su propia medalla puede estar perdiendo el campeonato completo.</div>
            <div class="pq-author">— Método FLUIR · Lección 1</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué es un "óptimo local" y por qué es el enemigo silencioso de tu utilidad</li>
                <li>Por qué premiar a cada área por su propio número provoca decisiones que dañan al negocio completo</li>
                <li>La diferencia entre estar <em>ocupado</em> y estar <em>produciendo utilidad</em></li>
                <li>Cómo detectar qué conductas está premiando tu negocio hoy sin que te des cuenta</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>El enemigo tiene nombre: óptimo local</h3>
            <p>Un <strong>óptimo local</strong> es cuando una parte del negocio se optimiza a sí misma… a costa del resultado del conjunto. Suena abstracto, así que míralo en acción:</p>
            <ul>
                <li>El de compras consigue un <strong>descuentazo por volumen</strong> → la bodega se llena de material que tardará 8 meses en usarse → la caja se vacía hoy por un ahorro de mañana.</li>
                <li>El de producción <strong>fabrica lotes grandes</strong> "para no estar preparando la máquina a cada rato" → su eficiencia se ve preciosa → los pedidos chicos urgentes esperan atrás de un lote gigante que nadie pidió.</li>
                <li>El vendedor <strong>promete entrega en una semana</strong> para cerrar el trato → su comisión está a salvo → el taller revienta, el cliente recibe tarde y no vuelve.</li>
            </ul>
            <p>En los tres casos, la persona hizo <em>bien</em> su trabajo según <em>su</em> número. Y el negocio salió perdiendo. <strong>Ese es el patrón: nadie falló y el conjunto falló.</strong></p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Imprenta Grafix (Guadalajara)</div>
            <div class="case-body">
                <p>En Grafix, el prensista cobra un bono por <strong>metros impresos al mes</strong>. Lógico, ¿no? Mientras más imprime, más produce el negocio… en teoría.</p>
                <p>En la práctica, el prensista aprendió a maximizar su bono: prefiere los tirajes largos (miles de folletos idénticos, la máquina corre sin parar) y deja para "después" los trabajos cortos — tarjetas de presentación, lonas de a una, facturas foliadas. ¿El resultado?</p>
                <p>La bodega se llenó de tirajes enormes que los clientes recogen a cuentagotas. Los trabajos chicos — que son <strong>el 70% de los clientes y se cobran de contado</strong> — salen tarde, y esos clientes se van a la imprenta de enfrente.</p>
                <p><strong>El bono premiaba metros. El negocio vive de clientes.</strong> No era un mal empleado: era un buen empleado respondiendo a una mala medida.</p>
            </div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA IDEA QUE LO EXPLICA TODO</div>
            <div class="aha-quote">"Dime cómo me mides y te diré cómo me comporto."</div>
            <div class="aha-author">— La ley no escrita de todo equipo de trabajo</div>
            <div class="aha-body">Cada número que premias en tu negocio está fabricando una conducta — la veas o no. Si premias piezas por hora, tendrás piezas (vendibles o no). Si premias "máquinas siempre trabajando", tendrás bodegas llenas. Si premias al mesero más rápido, tendrás clientes presionados. La pregunta no es si tu gente trabaja duro. La pregunta es: <strong>¿hacia dónde está apuntado su esfuerzo?</strong></div>
        </div>

        <div class="content-card tip">
            <h3>Concepto clave · Ocupado ≠ productivo</h3>
            <p>Esta es la distinción que vas a usar el resto del curso:</p>
            <div style="margin:14px 0;padding:16px;background:#f0faf8;border-radius:8px;text-align:center;color:#0b3d3a;">
                <strong>Estar ocupado</strong> es mover las manos.<br>
                <strong>Ser productivo</strong> es acercar el negocio a su meta.
            </div>
            <p>Un técnico desarmando un motor que nadie va a pagar está ocupadísimo. Una cocinera preparando 40 guisados "por adelantado" que mañana serán merma está ocupadísima. El reflejo de "aquí nadie está de flojo" se siente bien — y no dice <em>nada</em> sobre si el negocio gana dinero. De hecho, en la Lección 14 vas a aprender algo que hoy te sonaría a herejía: <strong>a veces lo más rentable es que alguien esté parado.</strong> Paciencia: llegaremos.</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#127869;&#65039;</span><div>
                <h3>La fonda de Doña Mary: tres medallas, un problema</h3>
                <p>En la fonda, cada quien presume su número. La cocina "nunca para" (guisados por adelantado, ollas llenas). Los meseros son "los más rápidos del rumbo" (levantan platos antes de tiempo, apuran la mesa). La caja "cierra perfecto" (cuenta cada peso dos veces, aunque haya fila para pagar).</p>
                <p>Tres áreas, tres medallas. ¿Y el negocio? Merma de comida cada noche (lo preparado que no se vendió), clientes que se sienten corridos y no regresan, y una fila en la caja que desanima al de la entrada.</p>
                <p>Doña Mary no necesita gente más rápida. Necesita que las tres áreas jueguen <strong>el mismo partido</strong> — y eso requiere saber cuál es el marcador del partido completo. De eso se trata el Módulo F, que empieza en la siguiente lección.</p>
            </div></div>
        </div>

        <div class="quiz-container" id="quiz_l1a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">El prensista de Grafix priorizaba tirajes largos y dejaba los trabajos chicos para después. Según la lección, ¿cuál era la causa raíz?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l1a', this, false)">Era un empleado flojo que evitaba el trabajo difícil</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l1a', this, false)">La máquina no estaba diseñada para trabajos cortos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l1a', this, true)">El bono premiaba metros impresos, no clientes atendidos — respondía bien a una medida mal puesta</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l1a', this, false)">Faltaba supervisión del dueño en el área de prensa</div>
            </div>
            <div class="quiz-feedback" id="quiz_l1a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_l1b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿Qué es un "óptimo local"?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l1b', this, false)">El mejor proveedor disponible en tu zona geográfica</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l1b', this, true)">Cuando una parte del negocio mejora su propio número a costa del resultado del conjunto</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l1b', this, false)">El punto máximo de ventas que un negocio puede alcanzar en su mercado</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l1b', this, false)">Una meta alcanzable a corto plazo dentro de un plan anual</div>
            </div>
            <div class="quiz-feedback" id="quiz_l1b_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Auditoría de medallas (15 minutos):</strong> haz una tabla de dos columnas. En la izquierda, cada área o persona clave de tu negocio. En la derecha, contesta: <em>¿qué número celebra o presume esa área?</em> (piezas, rapidez, ventas cerradas, "nunca paramos", cero quejas…)</p>
                <p>Luego marca con ⚠️ cada número que pueda mejorar <strong>sin que el negocio gane más dinero</strong>. Esos son tus óptimos locales. Guarda la tabla: en la Lección 5 la vas a convertir en tu nuevo tablero.</p>
            </div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Que los óptimos locales hacen que "nadie falle" mientras el conjunto falla</li>
                <li>Que cada número que premias fabrica una conducta, la veas o no</li>
                <li>Distinguir entre estar ocupado y producir utilidad</li>
                <li>Detectar las "medallas" que tu negocio está premiando hoy</li>
            </ul>
            <div class="okr-next">→ Empieza el <strong>Módulo F · Fija la meta</strong>. Primera pregunta incómoda: ¿para qué existe tu negocio? Casi todos los dueños contestan mal — y esa respuesta equivocada les cuesta dinero todos los días.</div>
        </div>
        `
    },

    // ==========================================================
    // MÓDULO F — FIJA LA META (lecciones 2-5)
    // ==========================================================
    {
        id: 'l2', module: 'Módulo F · Fija la meta', tag: 'tag-d1', tagLabel: 'MÓDULO F',
        title: 'La única meta',
        subtitle: 'Para qué existe tu negocio — y por qué confundir la meta con los medios te cuesta dinero todos los días',
        content: `
        <div class="lesson-hero" style="background-image:linear-gradient(135deg,rgba(11,61,58,0.88),rgba(11,61,58,0.5)),url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=80')">
            <div class="hero-caption">Si no sabes cuál es la meta, no puedes saber si lo que haces te acerca o te aleja.</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>La única meta de un negocio con fines de lucro (y por qué da pena decirla en voz alta)</li>
                <li>Por qué calidad, servicio, empleo y prestigio son <em>medios</em>, no metas — y qué pasa cuando se confunden</li>
                <li>Los 3 lentes financieros: utilidad, retorno y liquidez — y por qué necesitas los tres a la vez</li>
                <li>Cómo un negocio rentable puede quebrar (le pasó a la mueblería San José)</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>El ejercicio del descarte</h3>
            <p>Pregúntale a 10 dueños de negocio "¿cuál es la meta de tu empresa?" y escucharás: dar el mejor servicio, ofrecer calidad, generar empleo, ser los líderes de la zona, que el cliente salga feliz. Todas suenan bien. Vamos a someterlas a prueba:</p>
            <ol class="concept-list">
                <li><strong>¿Calidad?</strong> Puedes tener la mejor calidad del estado y quebrar (pregúntale a tantos talleres artesanales que cerraron). La calidad es condición para vender, no la meta.</li>
                <li><strong>¿Servicio?</strong> Regalar servicio extraordinario que nadie paga es la ruta más amable a la quiebra.</li>
                <li><strong>¿Generar empleo?</strong> Noble — pero el empleo es consecuencia de un negocio que gana dinero, no al revés. Un negocio quebrado genera cero empleos.</li>
                <li><strong>¿Crecer, tener más sucursales?</strong> Crecer un negocio que pierde dinero solo hace que pierda dinero más rápido.</li>
            </ol>
            <p>Todas se caen por la misma razón: <strong>son medios.</strong> Importantísimos, sí. Pero medios. La meta — la que sobrevive a todos los descartes — es una sola:</p>
            <div style="margin:14px 0;padding:18px;background:#0b3d3a;border-radius:8px;text-align:center;color:#fff;font-size:1.1em;">
                <strong>Un negocio con fines de lucro existe para generar dinero — hoy y en el futuro.</strong>
            </div>
            <p>El "hoy y en el futuro" no es adorno: ordeñar el negocio hoy destruyendo el mañana (descuidar clientes, exprimir al equipo, no reinvertir) tampoco cumple la meta.</p>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA IDEA QUE LO EXPLICA TODO</div>
            <div class="aha-quote">"Cuando el dueño persigue seis metas a la vez, en realidad no persigue ninguna: deja que cada decisión se tome con un criterio distinto."</div>
            <div class="aha-author">— Método FLUIR · Módulo F</div>
            <div class="aha-body">¿Por qué importa tanto declarar UNA meta? Porque la meta es el criterio de decisión. Si hoy decides "por calidad", mañana "por mantener ocupada a la gente" y el viernes "por no perder a un cliente", tu negocio zigzaguea. Con una sola meta, toda decisión se somete a la misma prueba: <strong>¿esto nos acerca a generar dinero, hoy y en el futuro — sí o no?</strong> No es codicia: es claridad. Y de esa claridad viven los empleos, la calidad y el servicio que tanto te importan.</div>
        </div>

        <div class="content-card tip">
            <h3>Concepto clave · Los 3 lentes financieros</h3>
            <p>"Generar dinero" se mira con tres lentes a la vez — porque cada uno ve algo que los otros no:</p>
            <ol class="concept-list">
                <li><strong>Utilidad neta:</strong> ¿cuánto quedó después de todo? El lente absoluto.</li>
                <li><strong>Retorno sobre lo invertido:</strong> ¿cuánto quedó <em>en relación con lo que metiste</em>? Ganar $50,000 con una inversión de $100,000 es un negocio; ganarlos con $5,000,000 invertidos es un mal uso del dinero.</li>
                <li><strong>Liquidez:</strong> ¿hay caja para operar <em>hoy</em>? Este lente no mide qué tan bien vas: mide si sobrevives.</li>
            </ol>
            <p>Una decisión sana mejora los tres — o al menos no sacrifica gravemente uno por inflar otro. Y en la PYME mexicana, el lente que mata cuando se ignora es siempre el tercero.</p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Mueblería San José (Puebla)</div>
            <div class="case-body">
                <p>La mueblería San José fabricaba cocinas integrales hermosas con 35% de margen. En papel, un negocio rentable: el contador lo confirmaba cada mes. Para crecer, empezaron a vender a constructoras "a 90 días" — pedidos grandes, margen sano, futuro brillante.</p>
                <p>El problema: la madera, los herrajes y la nómina se pagan <strong>hoy</strong>. El cliente paga en 90 días… cuando paga a tiempo. A los ocho meses, San José tenía $1.4 millones en cuentas por cobrar, utilidades "récord" en papel — <strong>y no le alcanzaba para la nómina del viernes.</strong> Tuvieron que pedir un crédito caro para financiar sus propias ventas "exitosas".</p>
                <p>San José no tenía un problema de utilidad. Tenía un problema de <strong>liquidez</strong>: su dinero existía, pero vivía atrapado en pagarés de otros. Rentable y ahogado a la vez. Los tres lentes, o el cuadro completo no se ve.</p>
            </div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#9881;&#65039;</span><div>
                <h3>"Mis máquinas nunca paran"</h3>
                <p>Un dueño presume: "aquí las máquinas no descansan, trabajamos a tres turnos". Suena a éxito. Ahora pásalo por la meta: ¿eso generó más dinero — o generó más <em>cosas</em>?</p>
                <p>Si lo que producen esas máquinas se vende y se cobra: felicidades. Si se va apilando en la bodega "porque al rato se vende": esas máquinas no están generando dinero. Lo están <strong>enterrando</strong> — convirtiendo caja en bultos. Trabajar mucho y generar dinero pueden parecerse muchísimo desde la puerta del negocio. La meta es el único juez que los distingue.</p>
            </div></div>
        </div>

        <div class="quiz-container" id="quiz_l2a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">Según la lección, ¿por qué "dar el mejor servicio" NO es la meta de un negocio?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l2a', this, false)">Porque el servicio no le importa realmente a los clientes</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l2a', this, true)">Porque es un medio: condición para generar dinero, pero no el fin — un negocio puede dar servicio extraordinario y quebrar</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l2a', this, false)">Porque medir el servicio es imposible en una PYME</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l2a', this, false)">Porque el servicio solo aplica a negocios de giro comercial, no industrial</div>
            </div>
            <div class="quiz-feedback" id="quiz_l2a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_l2b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">La mueblería San José tenía utilidades récord en papel y no podía pagar la nómina. ¿Qué lente financiero estaba ignorando?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l2b', this, false)">La utilidad neta</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l2b', this, false)">El retorno sobre lo invertido</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l2b', this, true)">La liquidez — su dinero existía pero estaba atrapado en cuentas por cobrar</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l2b', this, false)">El margen de cada cocina vendida</div>
            </div>
            <div class="quiz-feedback" id="quiz_l2b_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>La prueba de la meta (10 minutos):</strong> anota las últimas 3 decisiones importantes que tomaste en tu negocio (una compra, una contratación, un precio, un cliente que aceptaste). Para cada una contesta con brutal honestidad:</p>
                <ol>
                    <li>¿Con qué criterio la tomé en su momento?</li>
                    <li>¿La habría tomado igual con el criterio de la meta — generar dinero hoy y en el futuro, visto con los 3 lentes?</li>
                </ol>
                <p>No te castigues por las respuestas. El punto es notar <em>cuántos criterios distintos</em> gobiernan tu negocio hoy. A partir de la próxima lección, vamos a instalar uno solo.</p>
            </div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Que la meta de un negocio con fines de lucro es generar dinero, hoy y en el futuro</li>
                <li>Que calidad, servicio, empleo y crecimiento son medios al servicio de esa meta</li>
                <li>Usar los 3 lentes: utilidad, retorno y liquidez — los tres a la vez</li>
                <li>Que un negocio rentable en papel puede morir por caja</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 3</strong> bajamos la meta al piso de tu negocio con los <strong>3 medidores del dinero</strong>: el que entra, el que está atrapado y el que sale. Es la herramienta central de todo el método.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 3 — MÓDULO F · LOS 3 MEDIDORES DEL DINERO
    // ==========================================================
    {
        id: 'l3', module: 'Módulo F · Fija la meta', tag: 'tag-d1', tagLabel: 'MÓDULO F',
        title: 'Los 3 medidores del dinero',
        subtitle: 'El que ENTRA, el que está ATRAPADO y el que SALE — el puente entre lo que pasa en el piso y lo que pasa en tu caja',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">Todo el dinero de tu negocio está haciendo una de tres cosas: entrando, atrapado o saliendo. No hay cuarta opción.</div>
            <div class="pq-author">— Método FLUIR · Los 3 medidores</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Los 3 medidores del dinero y la definición exacta de cada uno</li>
                <li>Por qué el dinero que ENTRA solo cuenta cuando el cliente paga — no cuando tú produces</li>
                <li>Cómo traducir cualquier decisión de tu negocio ("¿compro?", "¿contrato?", "¿hago horas extra?") a los 3 medidores</li>
                <li>La dinámica de los 3 cajones para clasificar cada peso de tu negocio</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>Los 3 medidores, sin contabilidad de por medio</h3>
            <p>Los 3 lentes de la lección pasada (utilidad, retorno, liquidez) son tablero de dirección: dicen cómo va el negocio, pero no le dicen nada al de la cocina, al del torno o al de la caja. Necesitamos medidores que funcionen <strong>en el piso</strong>. Son tres:</p>
            <div style="margin:14px 0;padding:18px;background:#f0faf8;border-radius:8px;border-left:4px solid #0b3d3a;">
                <p style="margin:8px 0;"><strong style="color:#0b3d3a;">1 · Dinero que ENTRA.</strong> El ritmo al que tu negocio genera dinero <em>a través de las ventas cobradas</em>. Ojo: ventas. No producción, no pedidos apartados, no promesas. Si no entró dinero del cliente, no entró nada.</p>
                <p style="margin:8px 0;"><strong style="color:#0b3d3a;">2 · Dinero ATRAPADO.</strong> Todo lo que tu negocio compró y aún espera convertirse en venta: materia prima, trabajo a medio hacer, producto terminado en bodega, anticipos a proveedores, cuentas por cobrar. Es tu dinero — pero hoy no lo puedes usar.</p>
                <p style="margin:8px 0;"><strong style="color:#0b3d3a;">3 · Dinero que SALE.</strong> Todo lo que gastas para convertir lo atrapado en entrante: rentas, nómina, luz, fletes, comisiones, intereses. El costo de mantener la maquinaria del negocio girando.</p>
            </div>
            <p>Y la meta, traducida a estos medidores, queda así de operativa: <strong>sube el que entra, baja el atrapado, baja el que sale.</strong> En ese orden de prioridad — y en el Módulo R verás por qué el orden importa tanto.</p>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA IDEA QUE LO EXPLICA TODO</div>
            <div class="aha-quote">"Producir sin vender no genera dinero: solo lo cambia de cajón — de la caja a la bodega."</div>
            <div class="aha-author">— Método FLUIR · Módulo F</div>
            <div class="aha-body">Esta es la trampa mental más cara de la PYME: sentir que "producir" ya es ganar. Cuando fabricas algo que no se ha vendido, tu dinero no creció — <strong>se mudó</strong>. Estaba líquido en tu cuenta y ahora está en forma de tela cortada, pan horneado o piezas torneadas, esperando (ojalá) un comprador. El medidor 1 no se movió. El medidor 2 engordó. Y probablemente el 3 también (horas extra, luz, almacenaje). Trabajaste mucho para quedar igual o peor.</div>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Tortillería La Espiga (Toluca)</div>
            <div class="case-body">
                <p>A Don Chuy, dueño de La Espiga, su proveedor le ofreció el trato del año: el maíz 18% más barato comprando por tonelada y media en lugar de por bulto semanal. "Es ahorro puro", pensó, y compró para dos meses y medio.</p>
                <p>Pásalo por los 3 medidores. ¿Dinero que entra? Igual: la tortillería vende las mismas tortillas que antes. ¿Dinero que sale? Casi igual (ahorra un poco en precio del maíz… pero ahora paga tambos, tarimas y fumigación). ¿Dinero atrapado? <strong>Se disparó:</strong> 10 semanas de maíz estacionado en bodega, más la merma del grano que se humedece al fondo.</p>
                <p>Resultado neto: Don Chuy le prestó su caja al proveedor a cambio de un descuento que la merma se comió. El "ahorro" reprobó el examen de los 3 medidores. <strong>Barato no es lo mismo que buen negocio.</strong></p>
            </div>
        </div>

        <div class="content-card tip">
            <h3>Herramienta #2 · La dinámica de los 3 cajones</h3>
            <p>Esta dinámica se hace con tu equipo en 30 minutos y cambia conversaciones para siempre. Dibuja tres cajones en un rotafolio: <strong>ENTRA · ATRAPADO · SALE</strong>. Luego, entre todos, metan cada cosa del negocio a su cajón:</p>
            <ul>
                <li>¿La camioneta de reparto? El gasto de gasolina y mantenimiento: SALE. Su valor de reventa: ATRAPADO.</li>
                <li>¿La mercancía de la bodega? ATRAPADO (aunque el contador la llame "activo" — para tu caja, está atrapada).</li>
                <li>¿La nómina? SALE — toda, la de producción y la de oficina por igual.</li>
                <li>¿El anticipo que te dio un cliente? ¡ENTRA! (y fíjate qué interesante: cobrar anticipos mueve el medidor bueno sin producir nada todavía).</li>
                <li>¿Las cuentas por cobrar? ATRAPADO. Son ventas hechas cuyo dinero sigue en la bolsa de otro.</li>
            </ul>
            <p>El descubrimiento típico al terminar: <strong>el cajón ATRAPADO es mucho más grande de lo que cualquiera imaginaba.</strong> Ese cajón es tu mina: cada peso que liberes de ahí regresa a tu caja sin necesidad de vender más.</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#129514;</span><div>
                <h3>Toda decisión cabe en los 3 medidores</h3>
                <p>La gracia de estos medidores es que convierten cualquier dilema en una pregunta contestable:</p>
                <p><em>"¿Meto horas extra el sábado?"</em> → ¿Eso que produciremos el sábado <strong>se vende ya</strong> (entra dinero) o se almacena (se atrapa dinero + sale dinero en horas extra)?</p>
                <p><em>"¿Compro la máquina nueva?"</em> → ¿Hará que <strong>entre</strong> más dinero (vendemos más), o solo que produzcamos más rápido lo que ya no se vende?</p>
                <p><em>"¿Acepto este pedido grande con descuento?"</em> → ¿Cuánto entra, cuánto atrapa (materiales financiados por mí) y cuánto sale (flete, horas extra)?</p>
                <p>Tres preguntas, cero contabilidad avanzada. Este es el idioma que hablaremos el resto del curso.</p>
            </div></div>
        </div>

        <div class="quiz-container" id="quiz_l3a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿Cuándo cuenta el "dinero que ENTRA" según el Método FLUIR?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l3a', this, false)">Cuando el producto queda terminado y pasa a la bodega</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l3a', this, false)">Cuando el cliente hace el pedido y se aparta la mercancía</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l3a', this, true)">Cuando la venta se cobra — si no entró dinero del cliente, no entró nada</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l3a', this, false)">Cuando la factura se emite, aunque se pague a 90 días</div>
            </div>
            <div class="quiz-feedback" id="quiz_l3a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_l3b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">Don Chuy compró maíz para 10 semanas con 18% de descuento. ¿Qué le pasó a sus 3 medidores?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l3b', this, true)">Entra: igual · Atrapado: se disparó · Sale: casi igual — el "ahorro" le congeló la caja</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l3b', this, false)">Entra: subió porque las tortillas ahora cuestan menos producirlas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l3b', this, false)">Atrapado: bajó porque consiguió mejor precio por tonelada</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l3b', this, false)">Los tres mejoraron: comprar barato siempre es buen negocio</div>
            </div>
            <div class="quiz-feedback" id="quiz_l3b_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Tu primer mapa de cajones (20 minutos):</strong> sin pedir reportes a nadie, estima a ojo de buen cubero cuánto dinero tiene tu negocio en cada cajón ahora mismo:</p>
                <ol>
                    <li><strong>ENTRA:</strong> ¿cuánto cobraste (no vendiste: cobraste) el mes pasado?</li>
                    <li><strong>ATRAPADO:</strong> suma gruesa de inventario + trabajo a medias + cuentas por cobrar + anticipos dados.</li>
                    <li><strong>SALE:</strong> ¿cuánto cuesta un mes de operación (nómina, renta, servicios, todo)?</li>
                </ol>
                <p>Compara ATRAPADO contra ENTRA. Si lo atrapado supera uno o dos meses de cobranza, acabas de encontrar dónde vive el oxígeno que le falta a tu caja.</p>
            </div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Definir los 3 medidores: dinero que entra, atrapado y que sale</li>
                <li>Que producir sin vender solo muda el dinero de la caja a la bodega</li>
                <li>Traducir decisiones cotidianas al idioma de los 3 medidores</li>
                <li>Hacer la dinámica de los 3 cajones con tu equipo</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 4</strong> atacamos de frente la trampa más vieja del manual: <em>"producir más para que salga más barato"</em>. La imprenta Grafix nos va a enseñar cuánto cuesta ese espejismo.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 4 — MÓDULO F · PRODUCIR NO ES VENDER
    // ==========================================================
    {
        id: 'l4', module: 'Módulo F · Fija la meta', tag: 'tag-d1', tagLabel: 'MÓDULO F',
        title: 'Producir no es vender',
        subtitle: 'La trampa del costo unitario y el inventario que se disfraza de riqueza',
        content: `
        <div class="lesson-hero" style="background-image:linear-gradient(135deg,rgba(11,61,58,0.88),rgba(11,61,58,0.5)),url('https://images.unsplash.com/photo-1553413077-190dd305871c?w=1400&q=80')">
            <div class="hero-caption">Una bodega llena no es un negocio próspero. Es una caja fuerte que nadie puede abrir.</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Por qué "producir más para abaratar el costo unitario" es la trampa más vieja del manual</li>
                <li>Cómo el inventario se disfraza de "activo" en papel mientras asfixia tu caja en la práctica</li>
                <li>Los costos invisibles de lo que se almacena: espacio, merma, moda, financiamiento</li>
                <li>La pregunta que desactiva la trampa antes de caer en ella</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>La aritmética seductora del costo unitario</h3>
            <p>El argumento suena impecable, y por eso lleva décadas vaciando cajas:</p>
            <p style="padding:12px 16px;background:#fdf6ec;border-left:4px solid #f59e0b;border-radius:6px;"><em>"Preparar la máquina cuesta lo mismo para 100 piezas que para 1,000. Si corro 1,000, el costo de preparación se reparte y cada pieza sale más barata. Entonces: mientras más grande el lote, mejor."</em></p>
            <p>El error no está en la división — está en el supuesto escondido: <strong>que las 1,000 piezas se van a vender.</strong> Si solo se venden 300:</p>
            <ul>
                <li>Las otras 700 son dinero ATRAPADO: material y horas pagadas hoy, estacionadas en la bodega.</li>
                <li>El costo "más barato por pieza" existe solo en el papel. En la caja hubo MÁS salida de dinero, no menos.</li>
                <li>Y las 700 empiezan a costar extra cada mes que pasan guardadas — eso lo vemos abajo.</li>
            </ul>
            <p>El costo unitario es una fracción: baja si haces crecer el denominador. <strong>Pero tu caja no vive de fracciones: vive de pesos que entran y salen.</strong></p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Imprenta Grafix, segunda visita</div>
            <div class="case-body">
                <p>¿Recuerdas el bono por metros impresos de la Lección 1? Veamos la otra mitad del problema. Un cliente pidió 2,000 folletos. El encargado de Grafix propuso: "imprimamos 5,000 — el millar sale 40% más barato y seguro los pide después".</p>
                <p>Seis meses después, los 3,000 folletos extra siguen en la bodega. En ese tiempo el cliente <strong>cambió de logotipo</strong>. Los folletos "baratos" hoy valen exactamente lo que pese el papel en el kilo de reciclaje.</p>
                <p>Cuenta completa: papel y tinta de 3,000 folletos pagados (dinero atrapado → ahora perdido), medio entrepaño de bodega ocupado seis meses, y el trabajo de otro cliente que SÍ habría pagado esperó su turno detrás de ese tiraje fantasma.</p>
                <p><strong>El costo por millar bajó 40%. El negocio perdió dinero por los tres medidores a la vez.</strong> Esa es la trampa completa, con moño.</p>
            </div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA IDEA QUE LO EXPLICA TODO</div>
            <div class="aha-quote">"El inventario es gasto congelado que el papel llama riqueza."</div>
            <div class="aha-author">— Método FLUIR · Módulo F</div>
            <div class="aha-body">En los estados financieros, el inventario aparece como <em>activo</em> — suma en la columna buena. Y contablemente es correcto. Pero esa palabra produce un efecto psicológico carísimo: el dueño ve la bodega llena y siente patrimonio, cuando debería ver <strong>caja congelada que además cobra renta</strong>. Peor: como reducir inventario "baja el activo" en papel, hacer lo correcto se ve mal en los reportes y hacer lo incorrecto se ve bien. En la Lección 5 aprenderás a leer estos números sin que te hipnoticen.</div>
        </div>

        <div class="content-card tip">
            <h3>Concepto clave · Los 4 costos invisibles de almacenar</h3>
            <p>Cada cosa que guardas "porque ya está pagada" sigue cobrando, todos los meses:</p>
            <ol class="concept-list">
                <li><strong>Espacio:</strong> metros cuadrados de renta dedicados a guardar en lugar de producir o atender.</li>
                <li><strong>Merma:</strong> lo guardado se humedece, se oxida, se rompe, caduca o se lo come el polvo (pregúntale al maíz de Don Chuy).</li>
                <li><strong>Obsolescencia:</strong> el modelo pasa de moda, el cliente cambia de logo, la temporada termina. Lo que era producto se vuelve estorbo.</li>
                <li><strong>Financiamiento:</strong> ese dinero atrapado alguien lo financia — tú, dejando de usarlo, o el banco, cobrándote intereses por el crédito que pediste porque "no hay caja".</li>
            </ol>
            <p>Por eso el medidor ATRAPADO no es neutral: <strong>todo lo atrapado gotea hacia el cajón de SALE.</strong></p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#129534;</span><div>
                <h3>La pregunta que desactiva la trampa</h3>
                <p>Antes de producir o comprar "de más porque conviene", una sola pregunta:</p>
                <p style="text-align:center;font-size:1.05em;"><strong>"¿Esto ya está vendido — o estoy apostando?"</strong></p>
                <p>Si está vendido (pedido en firme, anticipo cobrado, contrato), adelante: el lote grande puede ser excelente negocio. Si es apuesta, nómbrala como lo que es: estás invirtiendo la caja del negocio en un pronóstico. A veces se vale apostar — pero que sea una decisión consciente con monto y límite, no un reflejo disfrazado de "ahorro".</p>
            </div></div>
        </div>

        <div class="quiz-container" id="quiz_l4a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿Cuál es el supuesto escondido (y falso) en "producir lotes grandes abarata el costo unitario"?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l4a', this, false)">Que la máquina aguanta tirajes largos sin descomponerse</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l4a', this, true)">Que todo lo producido se va a vender — si no se vende, el "ahorro" es dinero atrapado en bodega</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l4a', this, false)">Que el precio de la materia prima se mantendrá estable</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l4a', this, false)">Que los empleados trabajan más rápido en lotes grandes</div>
            </div>
            <div class="quiz-feedback" id="quiz_l4a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_l4b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿Por qué el inventario "se disfraza de riqueza" en los reportes?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l4b', this, false)">Porque los contadores lo calculan mal a propósito</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l4b', this, false)">Porque el inventario siempre se puede vender al precio de lista</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l4b', this, true)">Porque en papel cuenta como activo, aunque en la práctica sea caja congelada que además genera costos cada mes</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l4b', this, false)">Porque el inventario no paga impuestos hasta venderse</div>
            </div>
            <div class="quiz-feedback" id="quiz_l4b_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Safari de bodega (15 minutos):</strong> camina físicamente por donde tu negocio guarda cosas — bodega, trastienda, refrigerador, archivero, "el cuartito". Localiza:</p>
                <ol>
                    <li>El objeto más viejo que sigas guardando "porque ya está pagado"</li>
                    <li>Algo que compraste o produjiste "de más porque salía más barato" y sigue ahí</li>
                    <li>Una estimación gruesa: ¿cuántos pesos hay dormidos en ese espacio?</li>
                </ol>
                <p>Anota la cifra. Cuando lleguemos al Módulo I vas a aprender a evitar que esa pila se regenere — porque vaciarla una vez es fácil; lo difícil es que no vuelva a crecer.</p>
            </div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Por qué el costo unitario barato puede ser caja cara</li>
                <li>Que el inventario es gasto congelado con 4 costos invisibles que gotean cada mes</li>
                <li>Que reducir inventario puede verse "mal" en papel siendo lo correcto para la caja</li>
                <li>Usar la pregunta "¿está vendido o estoy apostando?" antes de producir de más</li>
            </ul>
            <div class="okr-next">→ Cerramos el Módulo F con la <strong>Lección 5</strong>: las cifras que mienten. Vas a armar el filtro definitivo para que ningún número bonito vuelva a venderte una mejora falsa.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 5 — MÓDULO F · LAS CIFRAS QUE MIENTEN
    // ==========================================================
    {
        id: 'l5', module: 'Módulo F · Fija la meta', tag: 'tag-d1', tagLabel: 'MÓDULO F',
        title: 'Las cifras que mienten',
        subtitle: 'Eficiencias, porcentajes de uso y costos unitarios: cómo leer tus números sin que te hipnoticen',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">Hay negocios que mejoran todos sus indicadores camino a la quiebra.</div>
            <div class="pq-author">— Método FLUIR · Lección 5</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Cuáles son las 3 cifras locales que más mienten en una PYME — y qué esconde cada una</li>
                <li>Cómo usar el test de los 3 "no" como filtro para inversiones, compras y "mejoras"</li>
                <li>La pregunta previa a instalar cualquier indicador: ¿qué conducta va a fabricar?</li>
                <li>Cómo queda tu tablero mínimo al cierre del Módulo F</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>Las 3 mentirosas profesionales</h3>
            <p>No es que los números mientan por malos: mienten porque miden <em>una parte</em> y tú les crees <em>el todo</em>. Las tres más peligrosas:</p>
            <ol class="concept-list">
                <li><strong>El % de uso ("la máquina nunca para", "el personal siempre ocupado").</strong> Mide actividad, no utilidad. Puede estar al 100%… produciendo inventario que nadie pidió. Ya viste con Rubén y Don Chuy lo que cuesta confundirlas.</li>
                <li><strong>Las piezas por hora / clientes por día.</strong> Velocidad local. Sube apurando lo fácil y pateando lo difícil — como el prensista de Grafix. El sistema completo puede ir más lento mientras este número luce mejor.</li>
                <li><strong>El costo unitario.</strong> Una fracción que baja inflando el denominador. Premia lotes grandes, castiga la flexibilidad, e ignora si lo producido se vendió. La mentirosa más elegante de las tres, porque viene con decimales y parece ciencia.</li>
            </ol>
            <p>¿El antídoto? Ninguna cifra local se acepta sola. <strong>Toda cifra local se interroga con el resultado global:</strong> ¿y eso movió los 3 medidores?</p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Clínica dental Sonríe (Mérida)</div>
            <div class="case-body">
                <p>La administradora de Sonríe instaló un indicador moderno: <strong>"% de ocupación de sillones"</strong>. Meta: 90%. Sonaba profesionalísimo — ningún sillón ocioso, ningún hueco en la agenda.</p>
                <p>Para cumplirlo, las recepcionistas aprendieron a rellenar la agenda con lo que fuera más fácil de agendar: limpiezas y consultas de valoración, baratas y rápidas. ¿Las endodoncias, coronas e implantes — los tratamientos que dejan 10 veces más? Esos pacientes recibían cita "en tres semanas, es lo que hay", y un buen porcentaje se iba a otra clínica.</p>
                <p>El indicador: 91% de ocupación, celebrado en la junta mensual. La facturación: estancada. <strong>Los sillones estaban llenos de trabajo barato que les tapaba el paso a los tratamientos caros.</strong> La cifra local sonreía; la caja no. Cambiaron la meta de "sillones llenos" a "horas de sillón en tratamientos mayores" — y la facturación subió 30% con la MISMA ocupación.</p>
            </div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA IDEA QUE LO EXPLICA TODO</div>
            <div class="aha-quote">"Antes de instalar un indicador pregúntate: si mi equipo lo persigue al pie de la letra, ¿qué van a hacer? Porque eso — exactamente eso — es lo que van a hacer."</div>
            <div class="aha-author">— Método FLUIR · Módulo F</div>
            <div class="aha-body">Un indicador no es una foto: es una instrucción disfrazada. La gente no persigue tus intenciones; persigue el número con el que la mides. Mide rapidez y sacrificarán calidad. Mide ocupación y llenarán el espacio con lo que sea. Mide solo ventas y te traerán clientes que no pagan. No existe el indicador inocente — así que diseña cada uno imaginando primero la trampa que permitirá.</div>
        </div>

        <div class="content-card tip">
            <h3>Herramienta #1 (versión completa) · El test de los 3 "no" como filtro de inversiones</h3>
            <p>En la Lección 0 conociste el test para evaluar mejoras pasadas. Su versión más poderosa funciona <strong>hacia adelante</strong> — antes de gastar:</p>
            <div style="margin:14px 0;padding:16px;background:#f0faf8;border-radius:8px;border-left:4px solid #0b3d3a;">
                <p style="margin:6px 0;">Antes de comprar la máquina, el software, el local más grande, pregunta:</p>
                <p style="margin:6px 0;">1. ¿Esto hará que <strong>ENTRE más dinero</strong>? ¿Por qué vía exactamente — vendemos más, cobramos más rápido?</p>
                <p style="margin:6px 0;">2. ¿Esto hará que <strong>baje lo ATRAPADO</strong>? ¿Menos inventario, menos trabajo a medias, menos cuentas por cobrar?</p>
                <p style="margin:6px 0;">3. ¿Esto hará que <strong>SALGA menos dinero</strong>? ¿Gastos reales que desaparecen — no "ahorros por pieza" en el papel?</p>
            </div>
            <p>Si la respuesta honesta a las tres es "no" o "pues… en teoría", no es una inversión: es un gusto que te quieres dar. (El elevador de Rubén — $180,000 — habría reprobado este test en 5 minutos. Hacer el test es gratis.)</p>
        </div>

        <div class="content-card">
            <h3>Tu tablero mínimo al cierre del Módulo F</h3>
            <p>Con lo aprendido en estas 4 lecciones, tu tablero de dueño queda así de compacto:</p>
            <ol class="concept-list">
                <li><strong>La meta como juez:</strong> ¿esta decisión genera dinero, hoy y en el futuro?</li>
                <li><strong>Los 3 lentes</strong> para el rumbo del negocio: utilidad, retorno, liquidez.</li>
                <li><strong>Los 3 medidores</strong> para el día a día: que ENTRA ↑, ATRAPADO ↓, que SALE ↓.</li>
                <li><strong>El test de los 3 "no"</strong> como portero de toda compra, proyecto o "mejora".</li>
                <li><strong>La pregunta del indicador:</strong> ¿qué conducta fabrica este número?</li>
            </ol>
            <p>Nota lo que NO está en el tablero: % de uso, piezas por hora, costo unitario. Puedes seguir viéndolos — pero ya nunca más serán quienes manden.</p>
        </div>

        <div class="quiz-container" id="quiz_l5a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">La clínica Sonríe logró 91% de ocupación de sillones con facturación estancada. ¿Qué ilustra este caso?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l5a', this, false)">Que el sector dental tiene márgenes naturalmente bajos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l5a', this, true)">Que un indicador local puede cumplirse perfectamente mientras bloquea el resultado global — los sillones se llenaron de trabajo barato</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l5a', this, false)">Que las recepcionistas necesitaban capacitación en ventas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l5a', this, false)">Que 90% de ocupación era una meta demasiado baja</div>
            </div>
            <div class="quiz-feedback" id="quiz_l5a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_l5b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">Según el Método FLUIR, ¿qué pregunta debe hacerse ANTES de instalar cualquier indicador nuevo?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l5b', this, false)">¿Qué software necesito para medirlo automáticamente?</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l5b', this, false)">¿Qué indicador usa mi competencia más exitosa?</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l5b', this, false)">¿Es fácil de entender para todo el equipo?</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l5b', this, true)">Si mi equipo persigue este número al pie de la letra, ¿qué conducta va a fabricar?</div>
            </div>
            <div class="quiz-feedback" id="quiz_l5b_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Cirugía de tablero (15 minutos):</strong> recupera la tabla de "medallas" de la Lección 1. Para cada número que tu negocio celebra hoy:</p>
                <ol>
                    <li>Clasifícalo: ¿es cifra <strong>local</strong> (actividad, velocidad, costo unitario) o <strong>global</strong> (mueve los 3 medidores)?</li>
                    <li>Elige UNA cifra local que vas a degradar esta semana — deja de premiarla, deja de presumirla.</li>
                    <li>Anuncia a tu equipo el test de los 3 "no" como nuevo filtro para propuestas y compras. Una junta de 10 minutos basta.</li>
                </ol>
                <p>Con esto cierras el Módulo F: ya tienes la meta y el idioma. Lo que sigue es la cacería.</p>
            </div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Identificar las 3 cifras locales que más mienten: % de uso, velocidad local y costo unitario</li>
                <li>Aplicar el test de los 3 "no" hacia adelante, como filtro de inversiones</li>
                <li>Que todo indicador es una instrucción disfrazada que fabrica conducta</li>
                <li>Operar tu tablero mínimo de dueño: meta, 3 lentes, 3 medidores, test, pregunta del indicador</li>
            </ul>
            <div class="okr-next">→ Empieza el <strong>Módulo L · Localiza el freno</strong>. Primera parada: el misterio de por qué TODO sale tarde aunque NADIE falle — y la respuesta no es la que crees.</div>
        </div>
        `
    },

    // ==========================================================
    // MÓDULO L — LOCALIZA EL FRENO (lecciones 6-9)
    // ==========================================================
    {
        id: 'l6', module: 'Módulo L · Localiza el freno', tag: 'tag-d2', tagLabel: 'MÓDULO L',
        title: 'Por qué todo sale tarde (aunque nadie falle)',
        subtitle: 'Cadenas, variación y la matemática silenciosa que hace que los retrasos se hereden y los adelantos se desperdicien',
        content: `
        <div class="lesson-hero" style="background-image:linear-gradient(135deg,rgba(11,61,58,0.88),rgba(11,61,58,0.5)),url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=80')">
            <div class="hero-caption">Nadie llegó tarde. Y aun así, el pedido salió tarde. Esta lección explica el misterio.</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué son los pasos encadenados y por qué tu negocio está lleno de ellos aunque no lo veas</li>
                <li>Por qué planear con promedios es planear contra la realidad</li>
                <li>La regla de oro de las cadenas: los retrasos se heredan, los adelantos se desperdician</li>
                <li>Por qué "regañar al que se atrasó" no arregla nada (el problema es matemático, no de actitud)</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>Tu negocio es una cadena (aunque no parezca fábrica)</h3>
            <p>Todo negocio opera en <strong>pasos encadenados</strong>: el paso B no puede empezar hasta que A termina.</p>
            <ul>
                <li><strong>Taller:</strong> recibir → diagnosticar → conseguir refacción → reparar → cobrar → entregar.</li>
                <li><strong>Fonda:</strong> comprar → preparar → tomar orden → cocinar → servir → cobrar.</li>
                <li><strong>Despacho:</strong> recibir papeles del cliente → capturar → conciliar → declarar → facturar honorarios.</li>
            </ul>
            <p>Y cada paso tiene <strong>variación</strong>: a veces tarda 10 minutos, a veces 40. No porque alguien sea flojo — porque la realidad varía: el cliente que no manda sus papeles, el tornillo barrido, la comanda triple, el sistema del SAT caído. Nadie puede prometer que cada tarea durará "su promedio". Y de la mezcla de esas dos cosas — <strong>cadena + variación</strong> — nace el fenómeno que te tiene apagando fuegos.</p>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA IDEA QUE LO EXPLICA TODO</div>
            <div class="aha-quote">"En una cadena, los retrasos se heredan completos — y los adelantos se desperdician completos."</div>
            <div class="aha-author">— La regla de oro de las cadenas · Método FLUIR</div>
            <div class="aha-body">Piensa en una carrera de relevos. Si tu corredor de la segunda vuelta es rapidísimo pero el primero llega 20 segundos tarde, ¿de qué sirvió la velocidad del segundo? <strong>No puede arrancar antes de recibir la estafeta.</strong> El retraso del primero se hereda íntegro. Y si el primero llega 20 segundos ANTES… el segundo corre su vuelta normal: el adelanto no se acumula igual que el retraso. La cadena tiene un techo (lo que te entregan) pero no tiene piso. Por eso el resultado del conjunto siempre queda DEBAJO del promedio de sus partes. No es mala suerte: es aritmética.</div>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · El despacho contable en marzo (CDMX)</div>
            <div class="case-body">
                <p>El despacho de la contadora Leticia tiene 4 pasos por cliente: recibir papeles → capturar → conciliar → presentar declaración. Cada auxiliar cumple su norma <em>en promedio</em>. Leticia hizo la cuenta: "cada paso toma un día, son 4 días por cliente, marzo alcanza de sobra".</p>
                <p>Marzo real: el cliente A mandó sus facturas 3 días tarde (la captura no podía empezar — retraso heredado). La auxiliar de conciliación terminó al cliente B en medio día (¡adelanto!)… que se desperdició, porque el cliente C aún no salía de captura y ella se quedó esperando. El SAT se cayó un martes (variación pura). Resultado: <strong>declaraciones presentadas el último día, multas evitadas de panzazo, equipo desvelado — y nadie, NADIE, incumplió su norma individual.</strong></p>
                <p>Leticia regañó al equipo. El equipo se ofendió, con razón: cada quien hizo su parte. El problema no era de personas. Era que Leticia planeó con promedios una cadena que hereda retrasos y desperdicia adelantos. <strong>El promedio era real; el plan, fantasía.</strong></p>
            </div>
        </div>

        <div class="content-card tip">
            <h3>Concepto clave · El promedio no se hereda; el peor caso sí</h3>
            <p>Cuando un paso de tu cadena termina tarde, el siguiente paso ARRANCA tarde — y ya no hay forma de recuperar ese tiempo más adelante "compensando", porque los pasos siguientes también tienen su propia variación encima.</p>
            <div style="margin:14px 0;padding:16px;background:#f0faf8;border-radius:8px;text-align:center;color:#0b3d3a;">
                En una cadena de pasos que dependen entre sí,<br><strong>la desviación acumulada de un paso se vuelve el punto de partida del siguiente.</strong>
            </div>
            <p>Consecuencias prácticas inmediatas:</p>
            <ol class="concept-list">
                <li><strong>Sumar los promedios de cada paso te da una fecha que casi nunca se va a cumplir.</strong> Por eso tus plazos "calculados" fallan sistemáticamente.</li>
                <li><strong>Regañar al eslabón que "se atrasó" es injusto e inútil:</strong> casi siempre heredó el atraso de más atrás.</li>
                <li><strong>Acelerar un paso cualquiera no acelera la cadena</strong> (su adelanto se desperdicia esperando al de atrás). Esta consecuencia es ENORME y es la puerta de la siguiente lección.</li>
            </ol>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128666;</span><div>
                <h3>Lo ves todos los días en el tráfico</h3>
                <p>¿Has notado que en una avenida saturada basta que UN coche frene tantito para que, diez coches atrás, alguien tenga que frenar por completo? El pequeño retraso del primero se amplifica hacia atrás — cada conductor reacciona un poco tarde y un poco más fuerte.</p>
                <p>Y cuando el primero acelera de nuevo, ¿la fila completa acelera al instante? Jamás: cada quien arranca cuando ve arrancar al de adelante. <strong>El frenazo se transmite completo; el arrancón se transmite a cuentagotas.</strong> Tu operación es exactamente esa avenida. La pregunta del millón — la que contestamos en la Lección 8 — es: ¿cuál de todos los coches es el que está marcando el paso real de la fila?</p>
            </div></div>
        </div>

        <div class="quiz-container" id="quiz_l6a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">En el despacho de Leticia, cada auxiliar cumplió su norma individual y aun así las declaraciones salieron al límite. ¿Cuál fue la causa de fondo?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l6a', this, false)">El equipo trabajó con flojera en los días clave de marzo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l6a', this, true)">En una cadena con variación, los retrasos se heredan y los adelantos se desperdician — planear sumando promedios es fantasía</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l6a', this, false)">Faltó contratar un auxiliar más para el paso de captura</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l6a', this, false)">El SAT tiene la culpa por la caída de su sistema</div>
            </div>
            <div class="quiz-feedback" id="quiz_l6a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_l6b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿Por qué acelerar un paso cualquiera de la cadena normalmente NO acelera el resultado final?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l6b', this, false)">Porque los empleados se desmotivan si un área va más rápido que otra</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l6b', this, false)">Porque acelerar siempre sacrifica la calidad del trabajo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l6b', this, true)">Porque su adelanto se desperdicia: no puede avanzar más rápido de lo que el paso anterior le entrega, y el de adelante no necesariamente lo aprovecha</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l6b', this, false)">Porque ningún paso de una cadena puede medirse de forma individual</div>
            </div>
            <div class="quiz-feedback" id="quiz_l6b_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Dibuja tu cadena (15 minutos):</strong> toma el producto o servicio principal de tu negocio y dibuja sus pasos encadenados, desde que el cliente pide hasta que pagas y entregas. Sin software: cajitas y flechas en una hoja.</p>
                <ol>
                    <li>Anota debajo de cada paso cuánto tarda <strong>en un día bueno</strong> y cuánto <strong>en un día malo</strong> (la variación real, no el promedio).</li>
                    <li>Marca con una estrella el paso donde más seguido "se atora" la cosa, según tu instinto.</li>
                </ol>
                <p>Guarda el dibujo: es el mapa sobre el que vamos a cazar el freno en las Lecciones 8 y 9.</p>
            </div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Ver tu negocio como una cadena de pasos dependientes con variación</li>
                <li>Que los retrasos se heredan completos y los adelantos se desperdician</li>
                <li>Que sumar promedios produce fechas de fantasía</li>
                <li>Que el problema es de diseño del flujo, no de actitud de la gente</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 7</strong> derribamos el ídolo más respetado de la administración: el negocio "equilibrado" donde nada sobra. Spoiler: ese negocio, en la vida real, incumple y se ahoga.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 7 — MÓDULO L · EL MITO DEL NEGOCIO EQUILIBRADO
    // ==========================================================
    {
        id: 'l7', module: 'Módulo L · Localiza el freno', tag: 'tag-d2', tagLabel: 'MÓDULO L',
        title: 'El mito del negocio equilibrado',
        subtitle: 'Por qué recortar "toda la grasa" rompe el flujo — y la dinámica de los frijoles para demostrarlo en 20 minutos',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">La holgura que estás recortando por "desperdicio" es el colchón que mantiene tus promesas de entrega.</div>
            <div class="pq-author">— Método FLUIR · Lección 7</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué es el "negocio equilibrado" y por qué es un ideal que quiebra negocios reales</li>
                <li>La dinámica de los frijoles: cómo demostrarle a tu equipo, en 20 minutos, que un sistema "parejo" entrega menos de lo esperado</li>
                <li>Qué es la capacidad protectora y por qué NO es desperdicio</li>
                <li>El trade-off real: holgura vs. inventario vs. incumplimiento — algo vas a tener, elige cuál</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>El ideal que suena perfecto (y no funciona)</h3>
            <p>Dice la lógica tradicional: "dimensiona cada área <em>exactamente</em> a la demanda. Ni capacidad de sobra (desperdicio) ni capacidad de menos (cuello). Todo parejo, todo al 100%, cero grasa."</p>
            <p>Suena a buena administración. Ahora crúzalo con lo que aprendiste en la Lección 6: cada paso <strong>varía</strong>, y en cadena <strong>los retrasos se heredan y los adelantos se desperdician</strong>. ¿Qué le pasa a un sistema parejo, sin nada de sobra, cuando un paso tiene un día malo?</p>
            <ul>
                <li>El paso atrasado <strong>no tiene con qué reponerse</strong> — está dimensionado exacto, sin reserva.</li>
                <li>Los pasos siguientes heredan el atraso… y tampoco tienen con qué absorberlo.</li>
                <li>Los días buenos no compensan, porque el adelanto se desperdicia esperando a los demás.</li>
            </ul>
            <p>Resultado matemático e inevitable: <strong>el sistema "perfectamente equilibrado" entrega MENOS que el promedio de sus partes, acumula trabajo a medias en oleadas, e incumple fechas — sin que nadie falle.</strong> El equilibrio perfecto solo funciona en un mundo sin variación. O sea: en el papel.</p>
        </div>

        <div class="content-card tip">
            <h3>Herramienta #3 · La dinámica de los frijoles</h3>
            <p>Esta dinámica convence más que cualquier discurso. Necesitas: un puño de frijoles, una moneda y 5 personas en fila (cada una es un "área" del negocio: compras, producción, empaque, reparto, cobranza).</p>
            <ol class="concept-list">
                <li>Cada persona tiene un plato. El objetivo del equipo: pasar frijoles del costal (inicio) al frasco final (ventas), de plato en plato, por rondas.</li>
                <li>En cada ronda, cada persona lanza la moneda: <strong>águila = mueve 2 frijoles, sol = mueve 4</strong> al plato siguiente. (Promedio: 3 por ronda — todas las áreas "iguales".) Importante: solo puedes mover frijoles que YA estén en tu plato.</li>
                <li>Pregunta al equipo antes de empezar: "¿cuántos frijoles llegarán al frasco en 10 rondas?" Todos dirán: 3 × 10 = 30. Es el promedio, ¿no?</li>
                <li>Jueguen las 10 rondas y cuenten.</li>
            </ol>
            <p>El frasco tendrá <strong>22-26 frijoles, no 30</strong> — y habrá montoncitos atorados a media fila (¡eso es tu inventario en proceso!). ¿Por qué? Cuando te toca "4" pero tu plato solo tiene 2 (porque al de atrás le tocó "2"), mueves 2: <strong>tu capacidad sobrante se desperdició.</strong> Cuando te toca "2", frenas a todos los de adelante: <strong>tu mal turno se heredó.</strong> Diez minutos de frijoles explican lo que años de regaños no.</p>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA IDEA QUE LO EXPLICA TODO</div>
            <div class="aha-quote">"La capacidad de sobra no es grasa: es el sistema inmunológico de tus fechas de entrega."</div>
            <div class="aha-author">— Método FLUIR · Capacidad protectora</div>
            <div class="aha-body">Como la variación es inevitable (proveedores, clima, enfermedades, el SAT), un negocio sano necesita que casi todas sus áreas tengan capacidad DE SOBRA — para absorber el día malo y reponerse rápido. A esa holgura la llamamos <strong>capacidad protectora</strong>. El día que la recortas "porque ahí sobra gente/máquina", tus entregas empiezan a fallar y nadie entiende por qué: acabas de despedir al amortiguador. Lo que sí debe ir al 100% es UNA sola cosa — y la conocerás en la próxima lección.</div>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · La fonda de Doña Mary recorta "la grasa"</div>
            <div class="case-body">
                <p>Un sobrino que estudió administración auditó la fonda: "Tía, tienes desperdicio: la segunda cocinera se queda sin qué hacer como hora y media al día, y el chico de los mandados pasa ratos sentado. Recórtalos y queda un equipo eficiente, todo parejito."</p>
                <p>Doña Mary recortó. Las primeras dos semanas, pura ganancia: misma venta, menos nómina. Hasta que llegó un jueves normalito: la cocinera principal se cortó un dedo (variación), justo cuando cayó un pedido de 30 comidas para una oficina (variación). Antes, la segunda cocinera absorbía el golpe y el de los mandados volaba por las vendas y el cilantro extra. Ahora no había colchón: <strong>la cocina se atascó, 40 minutos de espera, seis mesas se levantaron y la oficina de los 30 pedidos no volvió a llamar.</strong></p>
                <p>La nómina "eficiente" le ahorró $6,000 al mes. El jueves sin colchón le costó un cliente de $4,500 mensuales y la fama de lenta en el rumbo. <strong>La hora y media "ociosa" de la segunda cocinera no era desperdicio: era el seguro de la fonda.</strong> Solo que el seguro no aparece en ningún reporte… hasta que lo cancelas.</p>
            </div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#9878;&#65039;</span><div>
                <h3>El trade-off que nadie te dijo: algo vas a tener</h3>
                <p>Contra la variación solo existen tres amortiguadores. Todo negocio tiene alguno — elegido o por accidente:</p>
                <p><strong>1. Capacidad de sobra</strong> (gente/equipo con holgura): absorbe los golpes en el momento. Cuesta nómina "ociosa" a ratos.</p>
                <p><strong>2. Inventario de colchón</strong> (material y producto "por si acaso"): absorbe los golpes con cosas. Cuesta caja atrapada, merma y bodega.</p>
                <p><strong>3. Tiempo del cliente</strong> (plazos largos, "se lo tengo en tres semanas"): absorbe los golpes haciéndolos esperar. Cuesta ventas y reputación.</p>
                <p>El negocio "equilibrado" que recorta el 1 y presume bajar el 2… termina pagando con el 3 sin darse cuenta. <strong>Elegir conscientemente tu amortiguador es una decisión de dueño.</strong> El Método FLUIR elige el 1 en casi todas las áreas — porque es el único que protege la venta sin congelar la caja. ¿Y dónde NO se necesita holgura? En un solo lugar. Siguiente lección.</p>
            </div></div>
        </div>

        <div class="quiz-container" id="quiz_l7a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">En la dinámica de los frijoles, todas las estaciones promedian 3 frijoles por ronda. ¿Por qué llegan al frasco menos de 30 en 10 rondas?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l7a', this, false)">Porque la moneda está cargada hacia el águila</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l7a', this, true)">Porque los turnos malos frenan a toda la fila y los turnos buenos se desperdician cuando el plato anterior no entregó suficiente</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l7a', this, false)">Porque las personas pierden frijoles al pasarlos de plato en plato</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l7a', this, false)">Porque 10 rondas son muy pocas para que el promedio se estabilice</div>
            </div>
            <div class="quiz-feedback" id="quiz_l7a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_l7b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿Qué es la "capacidad protectora"?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l7b', this, false)">Un seguro contra accidentes que contratan los negocios grandes</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l7b', this, false)">La capacidad máxima que una máquina puede alcanzar en emergencias</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l7b', this, true)">La holgura deliberada en las áreas del negocio que absorbe la variación inevitable y protege las fechas de entrega</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l7b', this, false)">El inventario mínimo de seguridad que exige cada proveedor</div>
            </div>
            <div class="quiz-feedback" id="quiz_l7b_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Identifica tu amortiguador accidental (10 minutos):</strong> de los tres amortiguadores — capacidad de sobra, inventario de colchón, tiempo del cliente — ¿cuál está usando tu negocio HOY para absorber la variación?</p>
                <ol>
                    <li>Si tus entregas casi siempre se cumplen pero la bodega está gorda: pagas con el 2.</li>
                    <li>Si la bodega está flaca pero el cliente espera semanas: pagas con el 3.</li>
                    <li>Si entregas rápido con bodega flaca: o tienes el 1 (felicidades), o vives del heroísmo del dueño — y eso no es amortiguador, es cuenta regresiva.</li>
                </ol>
                <p>Anótalo. Y si te animas: juega la dinámica de los frijoles con tu equipo esta semana. El momento en que cuentan el frasco vale oro.</p>
            </div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Por qué el negocio "perfectamente equilibrado" entrega menos e incumple más</li>
                <li>Demostrarlo con la dinámica de los frijoles en 20 minutos</li>
                <li>Que la capacidad protectora es un seguro, no un desperdicio</li>
                <li>Los 3 amortiguadores posibles y cuál usa tu negocio hoy</li>
            </ul>
            <div class="okr-next">→ <strong>Lección 8:</strong> si casi todo necesita holgura… ¿qué es lo ÚNICO que debe trabajar al 100%? Llegó la hora de conocer al freno cara a cara. Rubén nos espera en el taller.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 8 — MÓDULO L · EL FRENO: UN SOLO PUNTO DECIDE
    // ==========================================================
    {
        id: 'l8', module: 'Módulo L · Localiza el freno', tag: 'tag-d2', tagLabel: 'MÓDULO L',
        title: 'El freno: un solo punto decide',
        subtitle: 'La definición que convierte mil problemas en uno solo — y por qué una hora del freno vale más que mil horas de lo demás',
        content: `
        <div class="lesson-hero" style="background-image:linear-gradient(135deg,rgba(11,61,58,0.88),rgba(11,61,58,0.5)),url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80')">
            <div class="hero-caption">Deja de administrar mil cosas. Tu negocio se gobierna desde UN punto.</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>La definición exacta de freno (y por qué tener uno NO es un defecto)</li>
                <li>Por qué el dinero que entra a tu negocio lo decide el freno — y nada más que el freno</li>
                <li>La asimetría fundamental: una hora ganada en el freno lo gana todo; una hora ganada en otro lado no gana nada</li>
                <li>Cómo cambia tu trabajo como dueño cuando piensas en un solo punto en vez de mil pendientes</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>La definición (apréndetela: es el corazón del curso)</h3>
            <div style="margin:14px 0;padding:18px;background:#0b3d3a;border-radius:8px;text-align:center;color:#fff;font-size:1.05em;">
                <strong>El freno es el punto de tu negocio cuya capacidad es igual o menor<br>que la demanda que el mercado le pone enfrente.</strong>
            </div>
            <p>Tres aclaraciones que valen dinero:</p>
            <ol class="concept-list">
                <li><strong>Todo negocio tiene uno.</strong> Siempre hay un paso más limitado que los demás — como en toda cadena hay un eslabón más débil. No es señal de mala administración: es la naturaleza de los sistemas.</li>
                <li><strong>El freno no es "malo".</strong> No hay que avergonzarse de él ni eliminarlo a toda costa. Hay que CONOCERLO — porque quien controla el freno controla todo el sistema. Es tu palanca, no tu enemigo.</li>
                <li><strong>El freno no siempre es una máquina.</strong> Puede ser una persona (el único que sabe hacer X), un espacio (las 8 mesas de la fonda), un horario (las horas de sillón dental), un trámite, o incluso algo fuera de tus paredes — el mercado mismo. Eso lo afinamos en la Lección 9.</li>
            </ol>
            <p>Y la consecuencia que lo cambia todo, heredada directo de la regla de las cadenas: <strong>el ritmo al que tu negocio genera dinero es exactamente el ritmo del freno.</strong> Ni un peso más rápido. Los demás pasos pueden ir al doble — lo único que producirán es fila.</p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · El taller de Rubén: la revelación</div>
            <div class="case-body">
                <p>Volvamos al taller de la Lección 0, ahora con ojos nuevos. Rubén dibujó su cadena: recibir → <strong>diagnosticar</strong> → cotizar/autorizar → conseguir refacción → reparar (6 técnicos, 7 elevadores) → probar → entregar.</p>
                <p>Casi todos los autos pasan por el diagnóstico del maestro Genaro — el único que "oye" una falla eléctrica y atina. Genaro dedica unas 5 horas al día a diagnosticar (el resto se le va en interrupciones, buscar herramienta y explicar presupuestos), a unos 45 minutos por auto: <strong>6-7 autos diagnosticados al día. Esa es la capacidad del taller completo.</strong></p>
                <p>No importa que haya 6 técnicos y ahora 7 elevadores: si Genaro diagnostica 6-7 autos, el taller repara 6-7 autos. Los técnicos "ocupados" trabajaban en re-trabajos y pendientes menores mientras los autos sin diagnóstico hacían fila en el patio. El patio lleno que Rubén leía como "nos va bien" era, en realidad, <strong>la fila de espera de Genaro</strong> — dinero atrapado estacionado.</p>
                <p>Cuando Rubén lo vio, dijo la frase que dicen todos los dueños en este punto: <em>"Llevo años administrando el taller equivocado."</em> Administraba elevadores, técnicos y herramienta. Su negocio entero cabía en una agenda: <strong>las 5 horas diarias de Genaro.</strong></p>
            </div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA IDEA QUE LO EXPLICA TODO</div>
            <div class="aha-quote">"Una hora perdida en el freno es una hora perdida para TODO el negocio. Una hora ganada donde no está el freno es un espejismo."</div>
            <div class="aha-author">— La asimetría fundamental · Método FLUIR</div>
            <div class="aha-body">Si Genaro pierde una hora (junta, interrupción, buscar un escáner), el taller completo produce una hora menos — esa hora no se recupera jamás, porque atrás de Genaro todo espera. Si un técnico de reparación gana una hora siendo más veloz… no pasa nada: terminará antes y esperará, porque el flujo de autos lo dicta Genaro. <strong>Misma hora, valor radicalmente distinto según DÓNDE ocurre.</strong> Por eso invertir, capacitar o presionar "parejo" en todas las áreas es tirar el dinero parejo: solo lo que toca al freno mueve la aguja. Cuánto vale exactamente una hora del freno — en pesos — lo calcularemos en la Lección 10, y el número te va a quitar el sueño.</div>
        </div>

        <div class="content-card tip">
            <h3>Concepto clave · De mil pendientes a un solo punto</h3>
            <p>Aquí cambia tu trabajo como dueño. Antes del freno, diriges así: 40 pendientes, todos "importantes", el día se lo lleva el más gritón. Después del freno, diriges así:</p>
            <ol class="concept-list">
                <li><strong>¿El freno está trabajando ahora mismo?</strong> Si no, eso es lo más caro que está pasando hoy en tu negocio — atiéndelo primero.</li>
                <li><strong>¿Lo que el freno trabaja está vendido?</strong> Sus horas son las del negocio entero: no se gastan en "por si acaso".</li>
                <li><strong>¿Todo lo demás está al servicio del freno?</strong> Las demás áreas no compiten por brillar: alimentan, descargan y protegen al freno.</li>
            </ol>
            <p>Tres preguntas en vez de cuarenta pendientes. No es que el resto del negocio no importe — es que <strong>el resto del negocio se ordena solo cuando el freno gobierna.</strong> El Módulo I te enseñará exactamente cómo.</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#127921;</span><div>
                <h3>"¿Y si mejor elimino el freno?"</h3>
                <p>Reacción natural: "pues contrato otro Genaro y se acabó el problema". Calma. Tres cosas:</p>
                <p><strong>Primera:</strong> aunque lo hagas, el freno no desaparece — se MUEVE. Con dos Genaros, el taller diagnosticará 13 autos… y el nuevo freno serán los técnicos, o las refacciones, o el patio. Siempre hay un eslabón más débil; la pregunta es cuál te conviene que sea y dónde lo quieres tener.</p>
                <p><strong>Segunda:</strong> contratar/comprar es la solución CARA, y casi siempre prematura. En el Módulo U descubrirás que el freno típico desperdicia entre un cuarto y la mitad de su capacidad en tonterías evitables — capacidad que ya pagaste. Primero se exprime, luego se invierte.</p>
                <p><strong>Tercera:</strong> un freno bien elegido y bien administrado es una bendición: te dice exactamente dónde poner tu atención, tu dinero y tu siguiente contratación. Los negocios sin freno identificado invierten por corazonada — como Rubén y su elevador.</p>
            </div></div>
        </div>

        <div class="quiz-container" id="quiz_l8a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">El taller de Rubén tiene 6 técnicos y 7 elevadores, pero Genaro solo diagnostica 6-7 autos al día. ¿Cuántos autos puede reparar y cobrar el taller al día?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l8a', this, false)">Depende de qué tan rápido trabajen los 6 técnicos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l8a', this, true)">6-7: el ritmo del negocio completo es exactamente el ritmo de su freno</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l8a', this, false)">Hasta 14, usando los 7 elevadores en dos turnos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l8a', this, false)">No se puede saber sin un estudio de tiempos y movimientos</div>
            </div>
            <div class="quiz-feedback" id="quiz_l8a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_l8b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿Cuál enunciado expresa correctamente la asimetría fundamental?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l8b', this, false)">Toda hora ganada en cualquier área del negocio aumenta las utilidades por igual</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l8b', this, false)">Las horas del freno valen lo mismo que las demás, pero son más difíciles de programar</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l8b', this, false)">Una hora perdida en cualquier área se recupera trabajando horas extra el fin de semana</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l8b', this, true)">Una hora perdida en el freno la pierde el negocio entero y no se recupera; una hora ganada fuera del freno no aumenta lo que el negocio produce</div>
            </div>
            <div class="quiz-feedback" id="quiz_l8b_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>La hipótesis del freno (10 minutos):</strong> toma el dibujo de tu cadena (Lección 6) y la estrella que marcaste por instinto. Ahora ponla a prueba con la definición:</p>
                <ol>
                    <li>¿Ese paso tiene MENOS capacidad que lo que el mercado le pide? ¿Cuánta gente/horas/espacio tiene y cuánto le llega?</li>
                    <li>Si ese paso produjera el doble mañana, ¿el negocio vendería más — o solo se movería la fila a otro lado?</li>
                    <li>Escribe tu hipótesis: <em>"Creo que mi freno es ________ porque ________."</em></li>
                </ol>
                <p>Es solo hipótesis: en la próxima lección la vas a confirmar con las 3 señales — el método de diagnóstico que no necesita ni software ni consultores.</p>
            </div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>La definición de freno: capacidad ≤ demanda del mercado</li>
                <li>Que el dinero que entra lo decide el freno — los demás solo hacen fila</li>
                <li>La asimetría: una hora del freno es una hora del negocio entero</li>
                <li>Que el freno se administra y se elige, no se persigue ni se esconde</li>
            </ul>
            <div class="okr-next">→ <strong>Lección 9</strong>, cierre del Módulo L: las 3 señales para ENCONTRAR tu freno en una semana — y qué hacer cuando el freno no está adentro de tu negocio, sino afuera.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 9 — MÓDULO L · CÓMO ENCONTRARLO EN UNA SEMANA
    // ==========================================================
    {
        id: 'l9', module: 'Módulo L · Localiza el freno', tag: 'tag-d2', tagLabel: 'MÓDULO L',
        title: 'Cómo encontrar tu freno en una semana',
        subtitle: 'Las 3 señales que lo delatan sin software ni consultores — y el caso especial del freno que vive fuera de tu negocio',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">No necesitas datos perfectos para encontrar tu freno. El freno deja huellas — solo hay que saber leerlas.</div>
            <div class="pq-author">— Método FLUIR · Lección 9</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Las 3 señales que delatan al freno: la montaña, los faltantes y la voz del piso</li>
                <li>El protocolo de la semana de cacería, día por día</li>
                <li>Cómo saber si tu freno NO es interno: el freno de mercado y el freno de política</li>
                <li>Los 2 errores clásicos del diagnóstico (perseguir al gritón y confundir el atorón del día con el freno)</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>Las 3 señales (el freno no se esconde: se delata)</h3>
            <p>Olvídate de medir capacidades con cronómetro — las PYMES nunca tienen esos datos al día, y no los necesitas. El freno produce tres huellas visibles a simple vista:</p>
            <ol class="concept-list">
                <li><strong>Señal 1 · La montaña.</strong> ¿Frente a qué paso se acumula la fila más grande de trabajo en espera? Autos en el patio, expedientes en una bandeja, comandas clavadas en la cocina, telas cortadas esperando costura. El trabajo se apila exactamente donde la capacidad no alcanza — <em>la montaña señala al freno con el dedo.</em></li>
                <li><strong>Señal 2 · Los faltantes.</strong> Cuando un pedido urge y se arma la corredera, ¿qué es lo que SIEMPRE falta? ¿La firma de quién, el visto bueno de qué área, la pieza de qué proceso? Lo que persigues en cada urgencia es lo que pasa por el freno.</li>
                <li><strong>Señal 3 · La voz del piso.</strong> Pregunta a tus encargados, sin teatro: <em>"¿dónde empiezan los problemas aquí?"</em> La gente que opera la cadena todos los días sabe dónde se atora — casi siempre coinciden en el mismo punto, y casi nunca se los habíamos preguntado.</li>
            </ol>
            <p>La regla de confirmación: <strong>las 3 señales deben apuntar al mismo lugar.</strong> Si la montaña, los faltantes y la voz del piso coinciden — felicidades, encontraste tu freno. Si apuntan a lados distintos, suele ser que el freno es de los especiales (abajo) o que estás viendo un atorón pasajero, no el freno.</p>
        </div>

        <div class="content-card tip">
            <h3>Herramienta #4 · La semana de cacería</h3>
            <p>Protocolo concreto, de lunes a viernes, sin gastar un peso:</p>
            <div style="margin:14px 0;padding:16px;background:#f0faf8;border-radius:8px;border-left:4px solid #0b3d3a;">
                <p style="margin:6px 0;"><strong>Lunes:</strong> camina la operación con tu dibujo de la cadena. Fotografía (literal: con el celular) cada lugar donde haya trabajo esperando. La pila más grande es tu primera pista.</p>
                <p style="margin:6px 0;"><strong>Martes:</strong> rastrea las últimas 5 urgencias. ¿Qué faltaba en cada una? Anota el patrón.</p>
                <p style="margin:6px 0;"><strong>Miércoles:</strong> pregunta a 3-5 personas del piso, por separado: "¿dónde empiezan los problemas?". No defiendas, no expliques: anota.</p>
                <p style="margin:6px 0;"><strong>Jueves:</strong> cruza las 3 señales. ¿Coinciden? Verifica con números gruesos SOLO ese punto: ¿cuánto le llega al día y cuánto puede procesar?</p>
                <p style="margin:6px 0;"><strong>Viernes:</strong> escribe el veredicto en una frase: <em>"El freno de mi negocio es ________, le llegan ________ al día y puede con ________."</em> Compárala con tu hipótesis de la Lección 8 — y con tu corazonada de la Lección 0.</p>
            </div>
            <p>La mayoría de los dueños descubre que su corazonada original estaba equivocada — como Rubén con sus elevadores. Por eso el método manda sobre el instinto.</p>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA IDEA QUE LO EXPLICA TODO</div>
            <div class="aha-quote">"Si en tu negocio sobra capacidad por todos lados, tu freno no está en el piso: está en la calle o está en una regla."</div>
            <div class="aha-author">— Método FLUIR · Frenos externos</div>
            <div class="aha-body">¿Hiciste la cacería y no hay montaña, no hay faltantes, y el piso dice "aquí lo que falta es chamba"? Entonces tu freno no es interno. Es uno de estos dos: <strong>freno de mercado</strong> — tu operación puede con más de lo que estás vendiendo; el eslabón débil es conseguir pedidos, y ahí (no en otra máquina) debe ir toda tu atención. O <strong>freno de política</strong> — una regla tuya está estrangulando el flujo: "no producimos sin el 100% de anticipo", "solo el dueño autoriza descuentos", "no abrimos los sábados", "ese cliente solo lo atiende Genaro". Las reglas no aparecen en ninguna foto del lunes — y suelen ser los frenos más baratos de romper y los más difíciles de ver, porque las escribiste tú.</div>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Mueblería San José: el freno que no estaba en el taller</div>
            <div class="case-body">
                <p>Tras el susto de liquidez (Lección 2), el hijo de Don José tomó este método y salió de cacería al taller: ¿la montaña? No había — los carpinteros terminaban y quedaban esperando. ¿Faltantes? Tampoco: material de sobra. ¿La voz del piso? Unánime: <em>"aquí falta chamba, joven".</em></p>
                <p>Las 3 señales gritaban: <strong>el freno no está en el taller.</strong> ¿Estaba en el mercado? A medias. Revisando cómo entraban (y se perdían) los pedidos, apareció la regla de la casa: <em>"no se arranca ningún mueble sin el 70% de anticipo"</em> — una política que Don José puso en 2009 después de que un cliente lo dejó colgado. Las constructoras —sus clientes más grandes— no trabajan con anticipos de 70%, así que cotizaban… y se iban con el competidor.</p>
                <p>El freno de San José era <strong>un renglón escrito hace 15 años.</strong> Lo ajustaron (40% de anticipo con contrato firmado, solo para constructoras con historial), y el taller "sin chamba" se llenó en seis semanas. Costo de romper ese freno: cero pesos. Solo dolió el orgullo.</p>
            </div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128270;</span><div>
                <h3>Los 2 errores clásicos del diagnóstico</h3>
                <p><strong>Error 1: perseguir al gritón.</strong> El área que más se queja, el empleado más estresado o el cliente más enojado señalan donde DUELE — no necesariamente donde APRIETA. El dolor aparece río abajo del freno (los que esperan), pero el freno es donde nace la espera. Por eso seguimos huellas, no gritos.</p>
                <p><strong>Error 2: confundir el atorón del día con el freno.</strong> Que hoy se haya atascado el empaque porque faltó un empleado no convierte al empaque en tu freno: es variación normal. El freno es el punto donde el trabajo se apila <em>una semana tras otra</em>. Por eso la cacería dura una semana y busca patrones — no fotos de un mal día.</p>
            </div></div>
        </div>

        <div class="quiz-container" id="quiz_l9a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿Cuáles son las 3 señales que delatan al freno?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l9a', this, false)">Las quejas de clientes, la rotación de personal y el costo unitario</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l9a', this, true)">La montaña de trabajo en espera, lo que siempre falta en las urgencias y la voz del piso sobre dónde empiezan los problemas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l9a', this, false)">El reporte del contador, el inventario anual y la opinión del vendedor estrella</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l9a', this, false)">El área más ruidosa, el empleado más estresado y el cliente más enojado</div>
            </div>
            <div class="quiz-feedback" id="quiz_l9a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_l9b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">En la mueblería San José los carpinteros esperaban trabajo y había material de sobra. Su freno resultó ser…</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l9b', this, false)">El carpintero más lento del taller, aunque nadie quisiera señalarlo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l9b', this, false)">La falta de maquinaria moderna frente a la competencia</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l9b', this, true)">Una política propia — el anticipo del 70% — que espantaba a sus clientes más grandes: un freno de regla, no de piso</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l9b', this, false)">La temporada baja del sector construcción</div>
            </div>
            <div class="quiz-feedback" id="quiz_l9b_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Agenda tu semana de cacería — hoy.</strong> No la hagas hoy: agéndala hoy.</p>
                <ol>
                    <li>Abre tu calendario y bloquea 30-45 minutos diarios de lunes a viernes con el protocolo de esta lección (lunes montaña, martes faltantes, miércoles voz del piso, jueves cruce, viernes veredicto).</li>
                    <li>Prepara la pregunta del miércoles para 3-5 personas: <em>"¿dónde empiezan los problemas aquí?"</em> — y prométete solo escuchar.</li>
                    <li>Si tu negocio anda sobrado de capacidad, agrega al viernes la revisión de reglas: lista las políticas de la casa ("aquí no se hace X sin Y") y pregúntate cuál estrangula pedidos.</li>
                </ol>
                <p>Con el veredicto del viernes en la mano, el Módulo U te va a enseñar a exprimir ese freno sin gastar — Rubén y las 5 horas de Genaro nos esperan.</p>
            </div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Leer las 3 señales: la montaña, los faltantes y la voz del piso</li>
                <li>Ejecutar la semana de cacería, día por día, sin gastar un peso</li>
                <li>Reconocer frenos externos: de mercado y de política</li>
                <li>Esquivar los 2 errores clásicos: perseguir al gritón y confundir el atorón del día con el freno</li>
            </ul>
            <div class="okr-next">→ Empieza el <strong>Módulo U · Úsalo al máximo</strong>. Primera pregunta: ¿cuánto vale — en pesos — una hora de tu freno? Vas a hacer una división de primaria y el resultado te va a cambiar las prioridades para siempre.</div>
        </div>
        `
    },

    // ==========================================================
    // MÓDULO U — ÚSALO AL MÁXIMO (lecciones 10-13)
    // ==========================================================
    {
        id: 'l10', module: 'Módulo U · Úsalo al máximo', tag: 'tag-d3', tagLabel: 'MÓDULO U',
        title: 'Lo que de verdad cuesta una hora de tu freno',
        subtitle: 'Una división de primaria que te va a cambiar las prioridades para siempre',
        content: `
        <div class="lesson-hero" style="background-image:linear-gradient(135deg,rgba(11,61,58,0.88),rgba(11,61,58,0.5)),url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80')">
            <div class="hero-caption">No es lo que le pagas a esa persona o máquina. Es lo que cuesta tener parado al negocio entero.</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>La fórmula del costo real de una hora del freno (y por qué la contabilidad la subestima 20, 50 o 100 veces)</li>
                <li>Cómo calcularla para TU negocio en 10 minutos</li>
                <li>Por qué de pronto se vuelve rentabilísimo "gastar de más" en proteger el freno</li>
                <li>El cambio de chip: del "¿cuánto cuesta?" al "¿cuánto cuesta NO hacerlo?"</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>La fórmula (división de primaria, consecuencias de doctorado)</h3>
            <p>¿Cuánto cuesta una hora perdida de tu freno? La intuición contable contesta: "lo que gana esa persona en una hora" o "la tarifa-hora de esa máquina". Y es la respuesta equivocada — por mucho.</p>
            <p>Recuerda la asimetría de la Lección 8: cuando el freno se detiene, <strong>el negocio entero se detiene</strong> — todo lo demás solo hace fila. Entonces el costo de esa hora no es el sueldo de una persona: es el costo de tener TODA tu estructura (rentas, nómina completa, luz, créditos) girando sin producir una venta. La fórmula:</p>
            <div style="margin:14px 0;padding:18px;background:#0b3d3a;border-radius:8px;text-align:center;color:#fff;font-size:1.05em;">
                <strong>Costo real de una hora del freno =<br>Gasto total de operar el negocio al mes ÷ horas productivas del freno al mes</strong>
            </div>
            <p>Todo el gasto va arriba. ¿Por qué? Porque toda tu estructura existe para UNA cosa: convertir las horas del freno en ventas. Si el freno no produce, la estructura completa está pagándose sola sin generar nada.</p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · La cuenta que despertó a Rubén</div>
            <div class="case-body">
                <p>El taller de Rubén gasta al mes, contando todo — nómina de los 6 técnicos y oficina, renta, luz, herramienta, el crédito del famoso elevador — unos <strong>$264,000</strong>.</p>
                <p>Su freno, ya lo sabemos, son las horas de diagnóstico de Genaro: unas 5 horas al día, 22 días al mes = <strong>110 horas al mes</strong>.</p>
                <p style="text-align:center;font-size:1.1em;"><strong>$264,000 ÷ 110 horas = $2,400 por hora.</strong></p>
                <p>Rubén le paga a Genaro unos $120 por hora. Su contabilidad le decía que una hora de Genaro "cuesta" $120. La realidad: cada hora que Genaro no diagnostica, el taller completo quema $2,400 — <strong>veinte veces más.</strong></p>
                <p>Y entonces Rubén repasó la semana de Genaro con otros ojos: la junta de los lunes (1 hora = $2,400), ir él mismo por refacciones al centro (2 horas = $4,800), explicar presupuestos a clientes (1 hora diaria = $52,800 al mes)… <strong>Rubén estaba gastando horas de $2,400 en tareas de $120.</strong> Nadie lo veía, porque Genaro nunca estaba "de flojo". Estaba ocupadísimo — en lo que no era el freno.</p>
            </div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA IDEA QUE LO EXPLICA TODO</div>
            <div class="aha-quote">"En el freno no preguntes '¿cuánto cuesta esta ayuda?'. Pregunta '¿cuánto cuesta cada hora que NO la tiene?'"</div>
            <div class="aha-author">— Método FLUIR · El cambio de chip</div>
            <div class="aha-body">Con la cifra real en la mano, decisiones que parecían "lujos" se vuelven obvias. ¿Un ayudante de $9,000 al mes para que Genaro no pierda 2 horas diarias en talacha? Recupera $105,600 de horas de freno — el ayudante se paga solo 11 veces. ¿Pagar flete urgente de $800 por una refacción que destrababa una hora del freno? Carísimo según la contabilidad, regalado según la realidad. Esta es la lección completa del Módulo U en una frase: <strong>en el freno — y SOLO en el freno — lo "caro" suele ser baratísimo, y lo "ahorrado" suele ser carísimo.</strong></div>
        </div>

        <div class="content-card tip">
            <h3>Herramienta #5 · Calcula la tuya en 10 minutos</h3>
            <ol class="concept-list">
                <li><strong>Gasto total mensual:</strong> suma gruesa de TODO lo que cuesta operar tu negocio un mes (nómina completa, renta, servicios, fletes, intereses). No busques el centavo: redondea.</li>
                <li><strong>Horas productivas del freno al mes:</strong> horas que tu freno realmente trabaja en lo suyo (no las que está presente: las que produce). Sé honesto — la diferencia entre presente y productivo es justo el tesoro de la siguiente lección.</li>
                <li><strong>Divide.</strong> Escribe el resultado en grande y pégalo donde lo veas: <em>"Una hora de mi freno cuesta $______".</em></li>
            </ol>
            <p>Referencias típicas en PYME: la fonda de Doña Mary (gasto $95,000, freno = 130 horas-cocina pico) → $730/hora. La clínica Sonríe (gasto $180,000, freno = 120 horas de sillón mayor) → $1,500/hora. Tu cifra estará lejos de cualquier sueldo — siempre lo está.</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#129518;</span><div>
                <h3>Por qué tu contador no te lo había dicho</h3>
                <p>No es mala fe. La contabilidad de costos reparte los gastos entre productos y departamentos <em>como si todas las horas valieran lo mismo</em> — es su supuesto de fábrica. Para impuestos y estados financieros, funciona. Para DECIDIR — dónde invertir, qué pedido aceptar, si vale el ayudante — necesitas saber que las horas NO valen lo mismo: las del freno valen el negocio entero y las demás casi nada.</p>
                <p>Regla práctica: <strong>contabilidad para reportar, freno para decidir.</strong> Cuando las dos opinen distinto sobre una decisión operativa, ya sabes a cuál escuchar.</p>
            </div></div>
        </div>

        <div class="quiz-container" id="quiz_l10a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">El taller gasta $264,000 al mes y su freno (Genaro) produce 110 horas mensuales. ¿Cuánto cuesta realmente una hora perdida de Genaro?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l10a', this, false)">$120 — lo que gana Genaro por hora</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l10a', this, true)">$2,400 — el gasto total del negocio dividido entre las horas del freno, porque cuando el freno para, todo el sistema paga sin producir</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l10a', this, false)">$440 — el sueldo de Genaro más su parte proporcional de la renta</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l10a', this, false)">Nada, si los demás técnicos siguen trabajando mientras tanto</div>
            </div>
            <div class="quiz-feedback" id="quiz_l10a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_l10b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿Por qué un ayudante de $9,000/mes para el freno puede ser una de las mejores inversiones del negocio?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l10b', this, false)">Porque la mano de obra barata siempre conviene en una PYME</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l10b', this, false)">Porque así el freno puede descansar más y rendir mejor por las tardes</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l10b', this, true)">Porque cada hora que le libera al freno vale lo que el negocio entero produce en una hora — el ayudante se paga solo muchas veces</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l10b', this, false)">Porque reduce el costo unitario por pieza producida</div>
            </div>
            <div class="quiz-feedback" id="quiz_l10b_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Haz TU división (10 minutos):</strong> gasto total del mes ÷ horas productivas de tu freno. Escribe el resultado en una tarjeta y pégala en tu escritorio.</p>
                <p>Luego, la pregunta incómoda: lista 3 cosas en las que tu freno gastó horas esta semana <strong>que alguien de la mitad de sueldo podría hacer</strong>. Ponles precio con tu nueva cifra. Ese número es lo que vas a rescatar en la siguiente lección.</p>
            </div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Calcular el costo real de una hora de tu freno: gasto total ÷ horas del freno</li>
                <li>Por qué esa cifra es 20-100 veces lo que dice la nómina o la tarifa-hora</li>
                <li>Que en el freno, "gastar de más" en protegerlo suele ser la mejor inversión disponible</li>
                <li>Usar la contabilidad para reportar y el freno para decidir</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 11</strong> vamos por el tesoro escondido: la capacidad que tu freno ya tiene y estás tirando todos los días. Capacidad gratis — cero inversión, pura reorganización.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 11 — MÓDULO U · CAPACIDAD GRATIS
    // ==========================================================
    {
        id: 'l11', module: 'Módulo U · Úsalo al máximo', tag: 'tag-d3', tagLabel: 'MÓDULO U',
        title: 'Capacidad gratis: el freno nunca para',
        subtitle: 'Cómo recuperar entre un cuarto y la mitad de tu freno sin invertir un peso — solo reorganizando',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">Antes de comprar capacidad nueva, rescata la que ya pagaste y estás tirando.</div>
            <div class="pq-author">— Método FLUIR · Lección 11</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Dónde se esconden las horas muertas del freno (las 4 fugas clásicas)</li>
                <li>Las 4 jugadas para sellar esas fugas: relevos, preparador, blindaje y filtro</li>
                <li>Por qué las mejores ideas para exprimir el freno las tiene quien lo opera</li>
                <li>Cómo auditar las horas de tu freno con una hoja y un lápiz</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>Las 4 fugas clásicas (por donde se va el dinero del freno)</h3>
            <p>Cuando auditas qué hace tu freno minuto a minuto, aparece siempre el mismo patrón: una fracción enorme de su tiempo NO está en lo que solo él puede hacer. Las fugas típicas:</p>
            <ol class="concept-list">
                <li><strong>Pausas sincronizadas.</strong> El freno come cuando todos comen, descansa cuando todos descansan. Resultado: tu recurso de $2,400/hora parado una hora diaria… porque es la 1:30.</li>
                <li><strong>Talacha ajena.</strong> El freno prepara, carga, acomoda, busca herramienta, va por material — tareas de $120/hora ejecutadas por horas de $2,400.</li>
                <li><strong>Interrupciones.</strong> "Oye, una pregunta rápida": cada una roba el minuto que dura más el tiempo de volver a concentrarse. El freno es la persona/máquina que MENOS interrupciones debería recibir y casi siempre es la que más recibe (porque es la que más sabe).</li>
                <li><strong>Trabajo que no debía llegar.</strong> Cosas que pasan por el freno por costumbre, no por necesidad — esta fuga es tan grande que tiene su propia lección (la 13).</li>
            </ol>
        </div>

        <div class="content-card tip">
            <h3>Herramienta #6 · Las 4 jugadas para sellar fugas</h3>
            <div style="margin:14px 0;padding:16px;background:#f0faf8;border-radius:8px;border-left:4px solid #0b3d3a;">
                <p style="margin:6px 0;"><strong>1 · Relevos.</strong> El freno nunca come ni descansa al mismo tiempo que su cobertura. Alguien capacitado lo releva en lo básico — o al menos, sus pausas se escalonan para que la estación nunca quede vacía en horas de demanda.</p>
                <p style="margin:6px 0;"><strong>2 · Preparador.</strong> Alguien deja TODO listo para que el freno solo haga lo que solo él puede hacer: el paciente sentado y con radiografías tomadas, el auto con síntomas anotados y escáner conectado, los papeles completos y ordenados antes de capturar.</p>
                <p style="margin:6px 0;"><strong>3 · Blindaje.</strong> Horarios sagrados sin interrupciones para el freno. Las preguntas se juntan y se resuelven en un bloque (15 minutos, dos veces al día), no por gotero.</p>
                <p style="margin:6px 0;"><strong>4 · Filtro.</strong> Nada entra al freno sin revisión previa de que viene completo y correcto. (Esta jugada es tan importante que es la mitad de la Lección 12.)</p>
            </div>
            <p>Ninguna de las cuatro cuesta inversión. Todas cuestan algo más difícil: <strong>romper costumbres.</strong> "Siempre hemos comido a la 1:30 todos juntos" es una frase que cuesta $2,400 por hora.</p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Las 5 horas de Genaro se vuelven 8</div>
            <div class="case-body">
                <p>Rubén auditó la jornada de Genaro con una libreta, una semana completa. De 9 horas presentes, solo 5 eran diagnóstico. Las fugas: 1 hora de comida sincronizada con todo el taller, ~1.5 horas de talacha (conectar escáner, mover autos, buscar herramienta), ~1 hora de interrupciones y explicar presupuestos a clientes, ~0.5 de "juntitas".</p>
                <p>Las jugadas: <strong>(1) Relevos:</strong> Genaro come a las 12:30, antes que nadie; el técnico más experimentado cubre dudas básicas mientras tanto. <strong>(2) Preparador:</strong> el chavo nuevo del taller ahora recibe cada auto: lo estaciona en la bahía de diagnóstico, conecta el escáner, anota los síntomas con el cliente. Genaro llega y diagnostica, punto. <strong>(3) Blindaje:</strong> los presupuestos los explica Rubén o el encargado; a Genaro solo se le consulta en dos bloques de 15 minutos (11:00 y 16:00). <strong>(4)</strong> Las "juntitas" de lunes se mueven a las 8:15, antes de que llegue el primer auto.</p>
                <p>Resultado en tres semanas: <strong>de 5 horas productivas a casi 8. Un 55% más de capacidad del negocio completo</strong> — el equivalente a lo que Rubén soñaba comprar con el elevador — por el costo de un ayudante que ya tenía y un cambio de horario de comida. A ese descubrimiento le pusimos nombre en el taller: "el segundo Genaro estaba escondido adentro del primero".</p>
            </div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA IDEA QUE LO EXPLICA TODO</div>
            <div class="aha-quote">"Las mejores ideas para exprimir el freno no están en un libro ni en un consultor: están en la cabeza de quien lo opera todos los días."</div>
            <div class="aha-author">— Método FLUIR · La mina del piso</div>
            <div class="aha-body">Cuando le contaron el plan, Genaro agregó tres ideas que nadie había pensado: agrupar los autos por tipo de falla (el escáner ya configurado encadena diagnósticos similares en la mitad del tiempo), una pizarra con los códigos de falla más comunes para que los técnicos resuelvan solos lo repetido, y dejar listo desde la tarde el primer auto del día siguiente. ¿Por qué nunca lo había dicho? <em>"Nadie me había preguntado, patrón."</em> Pregunta, premia y presume las ideas de quien opera tu freno — esa persona lleva años viendo lo que tú acabas de descubrir.</div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#129466;</span><div>
                <h3>El sillón que nunca espera (clínica Sonríe)</h3>
                <p>Mismo principio, otro giro. El freno de Sonríe: las horas del odontólogo en tratamientos mayores. La auditoría mostró al doctor esperando: a que el paciente llegara del recibidor, a que se tomara la radiografía, a que se preparara el instrumental entre cita y cita — 15-20 minutos perdidos por paciente.</p>
                <p>La jugada del preparador: la asistente ahora recibe al paciente, toma radiografías y deja el cubículo armado ANTES de que el doctor entre. El doctor sale de un paciente y entra al siguiente sin pausa. <strong>Dos tratamientos mayores más al día, mismos sueldos, mismo local.</strong> A $4,000 el tratamiento promedio… haz la cuenta del mes.</p>
            </div></div>
        </div>

        <div class="quiz-container" id="quiz_l11a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿Cuáles son las 4 fugas clásicas de capacidad en el freno?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l11a', this, true)">Pausas sincronizadas, talacha ajena, interrupciones y trabajo que no debía llegarle</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l11a', this, false)">Impuntualidad, flojera, falta de capacitación y mala actitud</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l11a', this, false)">Maquinaria vieja, falta de software, local chico y pocos empleados</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l11a', this, false)">Clientes morosos, proveedores lentos, competencia desleal e inflación</div>
            </div>
            <div class="quiz-feedback" id="quiz_l11a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_l11b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">El taller pasó de 5 a casi 8 horas productivas de Genaro sin comprar nada. ¿Cuál fue la clave?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l11b', this, false)">Presionar a Genaro para que trabajara más rápido en cada diagnóstico</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l11b', this, false)">Pagarle horas extra a Genaro para quedarse después del cierre</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l11b', this, true)">Sellar las fugas: relevos en la comida, un preparador, blindaje contra interrupciones — más las ideas del propio Genaro</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l11b', this, false)">Contratar a un segundo especialista en diagnóstico</div>
            </div>
            <div class="quiz-feedback" id="quiz_l11b_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>La auditoría de la libreta (esta semana, 20 min/día):</strong></p>
                <ol>
                    <li>Durante 3 días, anota qué hace tu freno en bloques de media hora (sin software: libreta).</li>
                    <li>Clasifica cada bloque: <strong>LO SUYO</strong> (lo que solo él puede hacer) o <strong>FUGA</strong> (pausa sincronizada, talacha, interrupción, trabajo ajeno).</li>
                    <li>Suma las fugas y multiplícalas por tu cifra de la Lección 10. Ese es el dinero tirado por semana.</li>
                    <li>Pregúntale a quien opera el freno: <em>"¿qué te estorba para hacer solo lo tuyo?"</em> — y apunta TODO.</li>
                </ol>
                <p>Elige UNA jugada (relevos, preparador, blindaje o filtro) e impleméntala el lunes. Una. La que más fuga selle.</p>
            </div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Detectar las 4 fugas: pausas sincronizadas, talacha, interrupciones y trabajo ajeno</li>
                <li>Aplicar las 4 jugadas: relevos, preparador, blindaje y filtro</li>
                <li>Que quien opera el freno guarda las mejores ideas — si le preguntas</li>
                <li>Auditar tu freno con libreta y ponerle precio a cada fuga</li>
            </ul>
            <div class="okr-next">→ <strong>Lección 12:</strong> dos reglas de oro para que ni una sola hora rescatada se desperdicie — la calidad se revisa ANTES del freno, y el freno solo trabaja en lo que está VENDIDO.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 12 — MÓDULO U · CALIDAD ANTES, VENTAS DESPUÉS
    // ==========================================================
    {
        id: 'l12', module: 'Módulo U · Úsalo al máximo', tag: 'tag-d3', tagLabel: 'MÓDULO U',
        title: 'Calidad antes del freno, solo lo vendido adentro',
        subtitle: 'Las dos reglas que evitan que tu recurso más caro trabaje para el bote de basura o para la bodega',
        content: `
        <div class="lesson-hero" style="background-image:linear-gradient(135deg,rgba(11,61,58,0.88),rgba(11,61,58,0.5)),url('https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=1400&q=80')">
            <div class="hero-caption">Hay dos formas de tirar una hora del freno: dársela a un defecto, o dársela a algo que nadie compró.</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Por qué la revisión de calidad debe vivir ANTES del freno, no al final del proceso</li>
                <li>Por qué lo que ya pasó por el freno debe tratarse como oro (aunque la pieza valga centavos)</li>
                <li>La regla de "solo lo vendido": por qué el freno jamás trabaja para el "por si acaso"</li>
                <li>Cómo ordenar la fila del freno cuando todo parece urgente</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>Regla de oro #1 · La calidad se revisa ANTES del freno</h3>
            <p>La mayoría de los negocios revisa la calidad al final: el producto terminado, la declaración antes de enviarse, el platillo antes de salir. Suena lógico — y es carísimo. Mira por qué:</p>
            <p>Si una pieza defectuosa se detecta al final, perdiste material y algo de tiempo. Pero si esa pieza defectuosa <strong>pasó por el freno antes de detectarse</strong>, perdiste algo irremplazable: <strong>una hora del freno que pudo producir una venta y produjo basura.</strong> A $2,400 la hora, el defecto más caro de tu negocio no es el material: es el turno del freno que se gastó en él.</p>
            <p>De ahí las dos mitades de la regla:</p>
            <ol class="concept-list">
                <li><strong>Filtro de entrada:</strong> nada entra al freno sin verificar que viene completo y correcto (la jugada 4 de la lección pasada). El auto con la falla mal anotada, el expediente sin papeles, la tela con defecto de origen — se detectan y resuelven ANTES de tocar al freno.</li>
                <li><strong>Trato de oro a la salida:</strong> lo que ya pasó por el freno lleva adentro las horas más caras del negocio. Una pieza dañada DESPUÉS del freno obliga a repetir su turno. Por eso lo procesado por el freno se maneja, almacena y transporta con cuidado especial — aunque "sea una pieza cualquiera", ya no lo es.</li>
            </ol>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Imprenta Grafix: el error de $12,000 que costaba $300</div>
            <div class="case-body">
                <p>El freno de Grafix es la prensa grande. Un miércoles corrieron 4 horas de prensa para un catálogo de 5,000 ejemplares… y al empacar, alguien notó el teléfono equivocado en la contraportada. El cliente había enviado el archivo con el error, nadie lo revisó, y la prensa lo multiplicó por 5,000.</p>
                <p>Cuenta del desastre: papel y tinta ($12,000), más lo invisible y más grave — <strong>4 horas del freno</strong> (a su costo real: otros ~$10,000) que además retrasaron a los DEMÁS clientes de la semana. Total real: más de $22,000 y dos clientes enojados.</p>
                <p>La solución costaba $300 al mes: una checklist de pre-prensa — el cliente firma una prueba digital ANTES de que el trabajo toque la prensa: teléfonos marcados, textos leídos, colores aprobados. El error del cliente se atrapa cuando corregirlo cuesta 10 minutos de computadora, no cuando ya se multiplicó por 5,000. <strong>Desde entonces, en Grafix nada toca la prensa sin firma. Nada.</strong></p>
            </div>
        </div>

        <div class="content-card tip">
            <h3>Regla de oro #2 · El freno solo trabaja en lo VENDIDO</h3>
            <p>Las horas del freno son las horas del negocio entero. Entonces, ¿en qué se gastan? Solo hay dos opciones:</p>
            <div style="margin:14px 0;padding:16px;background:#f0faf8;border-radius:8px;text-align:center;color:#0b3d3a;">
                <strong>En pedidos reales</strong> (dinero que ENTRA)<br>o<br><strong>en "por si acaso"</strong> (dinero que se ATRAPA — y a veces se pudre)
            </div>
            <p>Cuando el freno trabaja para el almacén "aprovechando que hay un hueco", está cambiando ingresos seguros de hoy por una apuesta de bodega — y pagando con las horas más caras de la empresa. Recuerda la pregunta de la Lección 4: <em>¿está vendido o estoy apostando?</em> En el freno, esa pregunta es ley. ¿Y cómo se ordena la fila de lo vendido? Simple y poderoso: <strong>primero lo más atrasado contra fecha prometida.</strong> No el cliente que más grita, no el trabajo más cómodo: el más atrasado primero. Una regla pública que cualquiera puede aplicar sin preguntarle al dueño.</p>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA IDEA QUE LO EXPLICA TODO</div>
            <div class="aha-quote">"El comal lleno no es señal de venta. Es señal de apuesta — y las tortillas frías son apuestas perdidas."</div>
            <div class="aha-author">— Método FLUIR · La Espiga</div>
            <div class="aha-body">En La Espiga, el freno de las horas pico es la máquina tortilladora. Don Chuy la arrancaba desde temprano "para ir adelantando" — kilos y kilos antes de que llegara la clientela. ¿El resultado? A mediodía, tortillas frías que nadie quiere (el cliente de tortillería paga por calientitas) y la máquina ya cansada de producir… lo que se vende con descuento al final del día para las tortas de la esquina. Cuando entendió la regla, cambió el arranque: la máquina produce contra la fila y contra los pedidos fijos de las fondas del rumbo (eso SÍ está vendido). Mismas horas de máquina, menos merma, más tortillas calientes. <strong>El freno produce dinero cuando produce lo que alguien está esperando — no lo que alguien está suponiendo.</strong></div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128737;&#65039;</span><div>
                <h3>"¿Y si el freno se queda sin qué hacer?"</h3>
                <p>Pregunta justa: si solo trabaja lo vendido, ¿qué pasa cuando no hay pedidos suficientes? Respuesta en dos tiempos:</p>
                <p><strong>Tiempo uno:</strong> si tu freno se queda sin trabajo vendido con frecuencia, tu freno ya no es ese — es el mercado, y tu energía debe irse a vender, no a fabricar inventario para sentirte productivo (Lección 9, freno externo).</p>
                <p><strong>Tiempo dos:</strong> un hueco ocasional en el freno NO se rellena con "por si acaso" por reflejo. Se evalúa como decisión consciente: ¿hay un producto de venta segurísima y rotación rápida? Quizá. ¿Es para "aprovechar la máquina"? Jamás. El hueco también puede usarse en mantenimiento, en capacitar al relevo o en las ideas de mejora del operador — cosas que devuelven horas del freno mañana.</p>
            </div></div>
        </div>

        <div class="quiz-container" id="quiz_l12a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿Por qué el error del catálogo le costó a Grafix mucho más que los $12,000 de papel y tinta?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l12a', this, false)">Porque el cliente exigió un descuento adicional por la pena</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l12a', this, true)">Porque consumió 4 horas del freno — las horas más caras del negocio — en producir basura, y además retrasó a los demás clientes</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l12a', this, false)">Porque la tinta especial del catálogo no se podía reutilizar</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l12a', this, false)">Porque tuvieron que pagar horas extra para reponer el trabajo</div>
            </div>
            <div class="quiz-feedback" id="quiz_l12a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_l12b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">Según la regla de "solo lo vendido", ¿cómo se ordena la fila de trabajo del freno?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l12b', this, false)">Primero el cliente que más presiona, para quitárselo de encima</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l12b', this, false)">Primero los trabajos más rápidos, para sacar volumen</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l12b', this, false)">Primero los trabajos de mayor precio, para maximizar el ingreso del día</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l12b', this, true)">Primero el pedido real más atrasado contra su fecha prometida — una regla pública que no necesita al dueño</div>
            </div>
            <div class="quiz-feedback" id="quiz_l12b_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Instala el filtro de entrada (30 minutos):</strong></p>
                <ol>
                    <li>Lista los 5 errores/faltantes que más veces han llegado HASTA tu freno (archivo equivocado, papeles incompletos, pieza defectuosa, información a medias del cliente).</li>
                    <li>Convierte la lista en una checklist de UNA hoja: "esto se verifica antes de que el trabajo toque el freno". Asigna quién la aplica.</li>
                    <li>Y declara la regla de la fila: en el freno, primero lo vendido más atrasado. Comunícala a todos — es pública precisamente para que funcione sin ti.</li>
                </ol>
            </div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Por qué la calidad se filtra antes del freno y lo procesado se trata como oro</li>
                <li>Que el defecto más caro no es el material: es el turno del freno que se lo tragó</li>
                <li>Que el freno solo trabaja en lo vendido — y la fila se ordena por atraso real</li>
                <li>Qué hacer (y qué no) con los huecos ocasionales del freno</li>
            </ul>
            <div class="okr-next">→ Cerramos el Módulo U con la <strong>Lección 13</strong>: la fuga más grande de todas — el trabajo que pasa por tu freno y NO debería pasar por ahí. Descargarlo puede duplicar tu capacidad sin contratar a nadie.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 13 — MÓDULO U · DESCÁRGALO SIN COMPRAR NADA
    // ==========================================================
    {
        id: 'l13', module: 'Módulo U · Úsalo al máximo', tag: 'tag-d3', tagLabel: 'MÓDULO U',
        title: 'Descarga tu freno sin comprar nada',
        subtitle: 'Las 3 vías para quitarle trabajo al freno: cuestionar, revivir y subcontratar — donde lo "ineficiente" se vuelve rentabilísimo',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">La pregunta no es cómo hacer más rápido al freno. Es cuánto de lo que hace… no debería estar haciéndolo él.</div>
            <div class="pq-author">— Método FLUIR · Lección 13</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>La Vía 1 — Cuestionar: detectar el trabajo que pasa por el freno por costumbre, no por necesidad</li>
                <li>La Vía 2 — Revivir: por qué la máquina vieja "lenta" y el método "obsoleto" pueden valer oro</li>
                <li>La Vía 3 — Subcontratar: cuándo pagar caro afuera es baratísimo para el sistema</li>
                <li>El criterio que une las tres: eficiencia local no importa; horas del freno sí</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>Vía 1 · Cuestionar: ¿de verdad esto necesita al freno?</h3>
            <p>En todo negocio hay trabajo que pasa por el freno <strong>por una regla que alguien puso hace años y nadie ha vuelto a leer.</strong> Se detecta con una auditoría brutal de su fila: toma 20 trabajos que pasaron por tu freno esta semana y pregunta, uno por uno: <em>¿esto lo tenía que hacer ÉL?</em></p>
            <ul>
                <li>¿"Todo auto pasa por diagnóstico de Genaro"? ¿También el cambio de balatas que el cliente ya sabe que necesita?</li>
                <li>¿"Toda declaración la revisa la contadora titular"? ¿También la del cliente con 12 facturas al mes que lleva 5 años igual?</li>
                <li>¿"Todo platillo lo emplata la cocinera principal"? ¿También las quesadillas?</li>
            </ul>
            <p>La regla nació por una buena razón (un error viejo, un susto, un cliente perdido) — pero la razón prescribió y la regla se quedó. Típicamente, <strong>entre el 20 y el 40% de la fila del freno no necesita al freno.</strong> Quitarla es capacidad instantánea y gratuita.</p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · El taller de Rubén, tercera jugada</div>
            <div class="case-body">
                <p>Rubén auditó la fila de Genaro: de 20 autos de una semana, <strong>7 no necesitaban diagnóstico especializado.</strong> Frenos gastados que rechinan, afinaciones programadas, un foco de aceite que cualquier técnico interpreta. Pasaban por Genaro por la regla de 2018: "todo auto pasa por diagnóstico" — escrita cuando un técnico nuevo metió la pata con un sensor.</p>
                <p>La nueva regla: el preparador clasifica en la recepción. <strong>Falla evidente y mantenimiento programado → directo a técnicos. Falla eléctrica, intermitente o rara → Genaro.</strong> Con la duda, 5 minutos de Genaro deciden el camino (5 minutos de filtro ahorran 45 de diagnóstico completo innecesario).</p>
                <p>Resultado: un tercio de la fila desapareció del freno. Sumado a las fugas selladas de la Lección 11, el taller que entregaba en dos semanas <strong>ya entregaba en 4-5 días — sin contratar a nadie y sin compr… bueno, ya habían comprado el elevador.</strong> Ahora por fin tenía autos que subir.</p>
            </div>
        </div>

        <div class="content-card tip">
            <h3>Vía 2 · Revivir: la máquina vieja vale oro</h3>
            <p>Casi todo negocio tiene un plan B arrumbado: la tortilladora chica que se usaba antes, el horno viejo, la impresora anterior "que ya está lenta", el Excel de antes del sistema. Se arrumbaron por <strong>ineficientes</strong> — y la palabra es una trampa, porque la eficiencia se midió pieza por pieza, no en horas del freno.</p>
            <p>La cuenta correcta: si la tortilladora vieja de La Espiga produce a la MITAD de velocidad pero le quita a la grande los kilos de los pedidos de fondas en hora pica, la grande atiende la fila de mostrador sin reventarse. ¿La vieja es "ineficiente"? Por pieza, sí. <strong>¿El sistema completo vende más tortillas calientes por hora? Sí — y eso es lo único que cuenta.</strong> Lo mismo el técnico "lento" que sí puede hacer las afinaciones, o el método manual que descarga al sistema saturado. Eficiencia local: irrelevante. Horas devueltas al freno: oro puro.</p>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA IDEA QUE LO EXPLICA TODO</div>
            <div class="aha-quote">"Pagar $400 afuera por lo que 'te cuesta $150 adentro' puede ser el mejor negocio de tu mes — si esos $150 eran horas del freno."</div>
            <div class="aha-author">— Método FLUIR · Vía 3, subcontratar</div>
            <div class="aha-body">El reflejo PYME dice: "¿pagarle a un tercero? ¡Si aquí lo hacemos más barato!". El error está en QUÉ comparas. El costo "interno" de $150 es contable; si la tarea pasa por tu freno, su costo real es la hora de freno que consume — $2,400 en el taller de Rubén. La maquila, el laboratorio externo que reprograma módulos, el contador freelance que captura en marzo, la costurera del rumbo que hace los dobladillos: todos parecen caros por unidad y son regalados por sistema, PORQUE le devuelven horas al freno para que produzca lo que solo él puede. Eso sí: subcontratar lo que NO pasa por tu freno es gasto puro sin beneficio — el criterio es siempre el mismo: <strong>¿esto libera horas del freno, sí o no?</strong></div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128221;</span><div>
                <h3>El despacho de Leticia y el marzo que por fin durmió</h3>
                <p>El freno del despacho en temporada: las horas de revisión de Leticia (solo ella firma). Las tres vías aplicadas: <strong>Cuestionó</strong> — los 9 clientes "simples y repetidos" ya no pasan por revisión completa: el auxiliar senior revisa con una checklist que Leticia diseñó, y ella solo audita 1 de cada 4 al azar. <strong>Revivió</strong> — la plantilla de Excel "obsoleta" para conciliar clientes chicos resultó más rápida que el sistema para esos casos. <strong>Subcontrató</strong> — la pura captura de marzo se la dio a una capturista freelance ($6,000 el mes) — "carísimo" decía su socia, hasta que vieron que liberaba 25 horas de Leticia (a costo real de freno: el mejor dinero gastado del año).</p>
                <p>El marzo siguiente: cero multas, cero desvelos y — por primera vez — capacidad para aceptar 4 clientes nuevos en plena temporada. <strong>Mismo equipo. Mismo despacho. Otro freno: uno descargado.</strong></p>
            </div></div>
        </div>

        <div class="quiz-container" id="quiz_l13a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">En el taller, 7 de 20 autos pasaban por Genaro sin necesitarlo, por una regla de 2018. ¿Qué vía de descarga es esta y cuál es su lección?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l13a', this, true)">Cuestionar: parte del trabajo pasa por el freno por costumbre heredada, no por necesidad — auditar su fila libera capacidad gratis</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l13a', this, false)">Subcontratar: esos autos debían mandarse a otro taller</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l13a', this, false)">Revivir: faltaba usar el escáner viejo para esos casos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l13a', this, false)">Ninguna: la regla de que todo pase por diagnóstico es una buena práctica de calidad</div>
            </div>
            <div class="quiz-feedback" id="quiz_l13a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_l13b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿Cuándo conviene subcontratar una tarea aunque "salga más cara" que hacerla adentro?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l13b', this, false)">Siempre: subcontratar es más profesional y reduce la nómina</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l13b', this, false)">Nunca: en una PYME todo debe hacerse en casa para cuidar el margen</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l13b', this, true)">Cuando la tarea consume horas del freno: el sobreprecio externo es mínimo comparado con el valor de las horas que le devuelve al sistema</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l13b', this, false)">Cuando el proveedor externo ofrece factura deducible</div>
            </div>
            <div class="quiz-feedback" id="quiz_l13b_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Auditoría de la fila del freno (30 minutos):</strong></p>
                <ol>
                    <li>Toma los últimos 20 trabajos que pasaron por tu freno. Marca: ¿cuáles NO necesitaban al freno?</li>
                    <li>Encuentra la regla que los mandó ahí ("aquí todo lo revisa/hace X") y escribe su versión nueva: qué va directo, qué sí pasa por el freno, quién clasifica.</li>
                    <li>Lista tus recursos "jubilados" (máquina vieja, método anterior, ayudante posible) y pregúntate cuál puede tomar parte de la carga.</li>
                    <li>Identifica UNA tarea subcontratable que hoy consume horas del freno y pide una cotización esta semana. Compárala contra tu cifra de la Lección 10 — no contra el costo contable.</li>
                </ol>
                <p>Con esto cierras el Módulo U: tu freno ya trabaja más horas, solo en lo suyo, solo en lo vendido y solo en lo que de verdad lo necesita. Lo que sigue es sincronizar al RESTO del negocio con él.</p>
            </div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Cuestionar la fila del freno: 20-40% suele estar ahí por costumbre, no por necesidad</li>
                <li>Revivir recursos "ineficientes" que devuelven horas al freno</li>
                <li>Subcontratar con el criterio correcto: horas del freno liberadas, no costo unitario</li>
                <li>Que la eficiencia local es irrelevante: lo que cuenta es lo que el sistema vende</li>
            </ul>
            <div class="okr-next">→ Empieza el <strong>Módulo I · Integra el ritmo</strong>. Tu freno ya rinde al máximo — ahora el resto del negocio debe marchar a SU paso. Primera parada: la verdad incómoda sobre la gente "sin nada que hacer".</div>
        </div>
        `
    },

    // ==========================================================
    // MÓDULO I — INTEGRA EL RITMO (lecciones 14-17)
    // ==========================================================
    {
        id: 'l14', module: 'Módulo I · Integra el ritmo', tag: 'tag-d4', tagLabel: 'MÓDULO I',
        title: 'El ocio que conviene',
        subtitle: 'Activar no es utilizar: por qué un empleado parado a ratos es más barato que una bodega llena',
        content: `
        <div class="lesson-hero" style="background-image:linear-gradient(135deg,rgba(11,61,58,0.88),rgba(11,61,58,0.5)),url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1400&q=80')">
            <div class="hero-caption">La pregunta correcta nunca fue "¿está trabajando?". Es "¿el sistema necesita que trabaje AHORA?"</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>La diferencia entre ACTIVAR un recurso (que se mueva) y UTILIZARLO (que mueva al negocio)</li>
                <li>Por qué el nivel de trabajo de cada área lo fija el freno — no la capacidad de esa área</li>
                <li>La cuenta que libera de culpas: el empleado parado no cuesta más; lo que produce de más, sí</li>
                <li>Cómo manejar la incomodidad cultural de ver gente sin actividad a ratos</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>La distinción que faltaba: activar ≠ utilizar</h3>
            <p>En el Módulo U exprimiste tu freno. Ahora viene la mitad olvidada del método: ¿qué hacen las DEMÁS áreas — las que tienen capacidad de sobra?</p>
            <p>El reflejo tradicional: "que produzcan al máximo, para eso les pago". Y aquí se rompe todo lo construido, porque ya sabes (Lección 8) que el negocio vende exactamente lo que el freno procesa. Entonces, si un área no-freno produce a su máximo — más rápido que el freno — ¿a dónde va ese excedente? <strong>A ningún lado: se apila.</strong> Trabajo a medias, pasillos llenos, dinero atrapado. De ahí la distinción central del módulo:</p>
            <div style="margin:14px 0;padding:18px;background:#0b3d3a;border-radius:8px;text-align:center;color:#fff;font-size:1.05em;">
                <strong>ACTIVAR un recurso es ponerlo a producir algo.<br>UTILIZARLO es ponerlo a producir lo que el sistema necesita ahora.</strong>
            </div>
            <p>Activar sin utilizar no es productividad: es fabricar inventario con esfuerzo genuino. Y la consecuencia práctica es la regla del módulo: <strong>el nivel de trabajo de cada área NO lo fija su propia capacidad — lo fija el freno.</strong> La pregunta por área deja de ser "¿cuánto puede producir?" y se vuelve "¿cuánto necesita el freno que produzca?".</p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Los roperos fantasma de San José</div>
            <div class="case-body">
                <p>¿Recuerdas la mueblería con el taller "sin chamba" (Lección 9)? Hay un detalle que no te contamos. Durante esos meses flojos, Don José no soportaba ver a sus carpinteros parados — "les pago por trabajar, no por estar viendo el techo" — así que los ponía a fabricar roperos y comedores genéricos "para tener piso de venta".</p>
                <p>Cuando el hijo hizo las cuentas, el piso de exhibición y la bodega guardaban <strong>$380,000 en muebles sin cliente</strong> — madera, herrajes y barniz pagados de la caja, esperando un comprador casual que a veces llegaba… pidiendo otro color. Mientras tanto, la nómina que tanto le dolía a Don José "desperdiciar" era de $68,000 al mes.</p>
                <p>Esa es la cuenta completa de la lección: <strong>los carpinteros parados costaban $0 extra</strong> (su sueldo es el mismo trabajen o esperen). <strong>Los carpinteros "aprovechados" costaban $380,000 de caja congelada</strong> más bodega, polvo y descuentos de liquidación. La actividad que calmaba la ansiedad del dueño era la que se estaba comiendo su liquidez.</p>
            </div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA IDEA QUE LO EXPLICA TODO</div>
            <div class="aha-quote">"El sueldo del que espera ya lo pagaste. El material del que produce de más, no."</div>
            <div class="aha-author">— Método FLUIR · La cuenta del ocio</div>
            <div class="aha-body">Haz la cuenta fría: un empleado de área no-freno que espera 1 hora cuesta exactamente lo mismo que si trabaja esa hora — su sueldo es fijo. Pero si esa hora la usa en producir algo que el freno no pidió, ahora pagaste: el sueldo (igual) + el material (nuevo) + el espacio para guardarlo (nuevo) + el riesgo de que envejezca (nuevo). <strong>Producir de más es la única forma de gastar dinero pareciendo que lo ahorras.</strong> Por eso el ocio a ratos en las áreas no-freno no es un problema a corregir: es la señal de que tu capacidad protectora (Lección 7) existe y está lista para absorber el siguiente golpe.</div>
        </div>

        <div class="content-card tip">
            <h3>Concepto clave · ¿Y entonces qué hacen cuando no hay flujo?</h3>
            <p>"Ok, no producen de más. ¿Los dejo viendo el celular?" No. El tiempo de holgura de las áreas no-freno tiene usos que SÍ mueven los 3 medidores:</p>
            <ol class="concept-list">
                <li><strong>Proteger el flujo:</strong> mantenimiento de su equipo, orden de su estación, preparar el siguiente trabajo para arrancar sin fricción.</li>
                <li><strong>Fortalecer el sistema:</strong> capacitarse como relevo del freno (¡el relevo de la Lección 11 sale de aquí!), documentar cómo hacen lo que hacen.</li>
                <li><strong>Mejorar:</strong> las ideas de mejora del piso (la mina de la Lección 11) se trabajan justamente en estas horas.</li>
                <li><strong>Y a veces, simplemente esperar.</strong> Como el bombero: nadie le reclama "estar sin hacer nada" entre incendios. Su disponibilidad ES el servicio.</li>
            </ol>
            <p>Lo único prohibido: producir lo que el freno no pidió, para que la actividad "se vea".</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#129337;</span><div>
                <h3>La parte difícil no es la lógica: es la cultura</h3>
                <p>Prepárate: cuando dejes de exigir actividad permanente, alguien va a decir que el negocio "se está relajando". Tu suegro de visita verá a un empleado esperando y te lo comentará. El propio empleado se sentirá raro — años de "si el patrón te ve parado, te pone a barrer" pesan.</p>
                <p>La respuesta es explicar la cuenta, en junta, con los números de tu negocio: "una hora tuya esperando ya está pagada; una hora produciendo lo que no se vende nos cuesta material, espacio y caja. Prefiero pagarte por estar listo que pagar el triple por estar ocupado". La gente entiende — especialmente cuando ve que las fechas de entrega, por primera vez, se cumplen. Eso llega en la siguiente lección.</p>
            </div></div>
        </div>

        <div class="quiz-container" id="quiz_l14a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿Cuál es la diferencia entre ACTIVAR y UTILIZAR un recurso?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l14a', this, false)">Activar es encenderlo; utilizar es que un operador certificado lo maneje</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l14a', this, true)">Activar es ponerlo a producir algo; utilizar es ponerlo a producir lo que el sistema necesita ahora — activar sin utilizar solo fabrica inventario</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l14a', this, false)">Son sinónimos: ambos significan que el recurso no esté ocioso</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l14a', this, false)">Activar aplica a máquinas y utilizar aplica a personas</div>
            </div>
            <div class="quiz-feedback" id="quiz_l14a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_l14b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">Los carpinteros de San José fabricaban roperos "para no estar parados". ¿Cuál fue el costo real de esa decisión?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l14b', this, false)">Ninguno: los muebles eventualmente se venden y la nómina se aprovechó</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l14b', this, false)">El desgaste de las herramientas del taller</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l14b', this, true)">$380,000 de caja convertida en inventario sin cliente — pagaron material, espacio y riesgo por calmar la ansiedad de verlos ocupados</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l14b', this, false)">Horas extra que hubo que pagar para fabricar los roperos</div>
            </div>
            <div class="quiz-feedback" id="quiz_l14b_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Encuentra tu "ropero fantasma" (15 minutos):</strong></p>
                <ol>
                    <li>Identifica UNA cosa que tu negocio produce o hace principalmente "para que la gente no esté parada" o "para aprovechar la máquina".</li>
                    <li>Ponle número: ¿cuánto material, espacio y caja consume al mes?</li>
                    <li>Compárala contra el costo real de la alternativa: esa gente esperando (= $0 extra) o usando esas horas en mantenimiento, relevos o mejoras.</li>
                </ol>
                <p>Decide qué vas a dejar de producir. Y prepara tu explicación para la junta — la cultura se cambia con cuentas, no con regaños.</p>
            </div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Distinguir activar (moverse) de utilizar (mover al negocio)</li>
                <li>Que el nivel de trabajo de cada área lo fija el freno, no su capacidad</li>
                <li>Hacer la cuenta del ocio: el que espera ya está pagado; el que produce de más, no</li>
                <li>Darle uso inteligente a la holgura: mantenimiento, relevos, mejora — o simple disponibilidad</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 15</strong> armamos el mecanismo completo: soltar el trabajo al ritmo del freno, con un colchón calculado — y de regalo, el superpoder comercial de las fechas que SÍ se cumplen.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 15 — MÓDULO I · SUELTA EL TRABAJO AL RITMO DEL FRENO
    // ==========================================================
    {
        id: 'l15', module: 'Módulo I · Integra el ritmo', tag: 'tag-d4', tagLabel: 'MÓDULO I',
        title: 'Suelta el trabajo al ritmo del freno',
        subtitle: 'El mecanismo del marcapasos: cuánto trabajo entra, cuándo, y el colchón que protege todo el sistema',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">No controles lo que cada área produce. Controla lo que entra al sistema — el resto se ordena solo.</div>
            <div class="pq-author">— Método FLUIR · El marcapasos</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>El mecanismo del marcapasos: soltar trabajo al sistema SOLO al ritmo en que el freno lo procesa</li>
                <li>Cómo dimensionar el colchón del freno (suficiente para que nunca se quede sin trabajo; no más)</li>
                <li>Programar hacia atrás: el freno como reloj de todo el negocio</li>
                <li>El subproducto millonario: fechas de entrega que se cumplen — y lo que eso vale comercialmente</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>El mecanismo del marcapasos</h3>
            <p>Hasta hoy, tu negocio probablemente funciona así: todo pedido que entra se suelta DE INMEDIATO a la operación — "que vaya avanzando". Suena proactivo. Es la receta del caos: las áreas rápidas procesan todo al momento y lo apilan frente al freno; el patio/pasillo/bandeja se llena; todo parece urgente porque todo está empezado; nada tiene fecha confiable porque la fila del freno es una maraña.</p>
            <p>El Método FLUIR invierte el mecanismo. Como el freno marca el ritmo del sistema (es el marcapasos), <strong>el trabajo se suelta a la operación al ritmo del freno — ni antes, ni más:</strong></p>
            <ol class="concept-list">
                <li><strong>El freno tiene una agenda</strong> (su capacidad real, la de la Lección 11: horas productivas × su velocidad).</li>
                <li><strong>Cada pedido nuevo toma turno en esa agenda</strong> — no en el aire: en las horas reales disponibles del freno.</li>
                <li><strong>El trabajo se libera hacia atrás:</strong> los pasos previos arrancan justo a tiempo para que el pedido llegue al freno un poco antes de su turno. No semanas antes: un poco antes.</li>
            </ol>
            <p>Resultado físico inmediato: el trabajo a medias se desinfla (dinero des-atrapándose), las áreas dejan de ahogarse, y la fila del freno se vuelve corta y ordenada. <strong>No controlaste a nadie: controlaste la puerta de entrada.</strong></p>
        </div>

        <div class="content-card tip">
            <h3>Concepto clave · El colchón (la única fila buena del negocio)</h3>
            <p>Espera — si el trabajo llega "justo a tiempo" al freno y un paso previo falla (Lección 6: la variación existe), ¿el freno se queda parado? Ahí entra la pieza que completa el mecanismo:</p>
            <div style="margin:14px 0;padding:16px;background:#f0faf8;border-radius:8px;text-align:center;color:#0b3d3a;">
                <strong>Frente al freno — y SOLO frente al freno — se mantiene un colchón:<br>una fila pequeña y deliberada de trabajo listo para procesar.</strong>
            </div>
            <p>¿De qué tamaño? El suficiente para cubrir el tropiezo típico de tus pasos previos. Regla práctica: si tus áreas previas tardan medio día en reponerse de una falla normal, el colchón es de medio a un día de trabajo del freno. Se ajusta con la realidad: ¿el freno nunca ha estado cerca de quedarse sin trabajo? El colchón está gordo — adelgázalo. ¿Se ha quedado sin trabajo dos veces este mes? Engórdalo tantito o sella las fugas del paso que falla.</p>
            <p>Fíjate en la elegancia del diseño: <strong>holgura de capacidad en todas las áreas (Lección 7) + colchón de trabajo SOLO frente al freno.</strong> Inventario mínimo Y freno siempre alimentado. Las dos cosas que parecían imposibles de tener juntas.</p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · El patio vacío que vende más</div>
            <div class="case-body">
                <p>La última pieza del taller de Rubén. Antes: se recibía todo auto que llegara — el patio como estacionamiento de 30 autos "en proceso", clientes llamando diario, técnicos brincando de auto en auto según quién llamara más enojado.</p>
                <p>El cambio: la recepción ahora agenda contra <strong>la agenda de Genaro</strong> — 8 horas productivas, ~10 autos diarios. El cliente que llama no escucha "tráigalo cuando quiera": escucha <em>"tráigalo el jueves a las 9, se lo entrego el viernes a las 6"</em>. Frente a la bahía de Genaro, siempre 3-4 autos preparados (el colchón). El resto de los autos del mundo… siguen con sus dueños, no estorbando en el patio.</p>
                <p>Lo que pasó con los clientes fue contraintuitivo: Rubén temía que "vuelva el jueves" los espantara. <strong>Al revés: "me lo entregó el viernes a las 6, como dijo" se volvió la frase que llenó el taller.</strong> En su rubro — donde el estándar es "ahí le hablamos cuando esté" — la fecha cumplida resultó mejor publicidad que cualquier descuento. El patio vacío vendía más que el patio lleno.</p>
            </div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA IDEA QUE LO EXPLICA TODO</div>
            <div class="aha-quote">"Cuando el freno es el reloj, prometer fechas deja de ser adivinar: es leer la agenda."</div>
            <div class="aha-author">— Método FLUIR · Programar hacia atrás</div>
            <div class="aha-body">Esta es la recompensa grande del módulo. Con el marcapasos funcionando, la fecha de entrega de cualquier pedido se calcula, no se inventa: turno del pedido en la agenda del freno + lo que falta después del freno + un margen honesto. Antes, tus fechas eran deseos educados ("yo creo que para el viernes…") calculados sumando promedios — fantasía pura, como aprendiste en la Lección 6. Ahora son aritmética sobre el único recurso que de verdad manda. Y en casi cualquier mercado de PYMES — talleres, imprentas, muebles, despachos — <strong>el proveedor que cumple fechas es tan raro que cumplirlas es un superpoder comercial.</strong> En el Módulo R aprenderás a cobrarlo.</div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128336;</span><div>
                <h3>El mismo mecanismo en un despacho (sin máquinas)</h3>
                <p>¿Y si tu negocio es de servicios? Idéntico. El freno de Leticia son sus horas de revisión. Antes, marzo entraba "todo a la vez": 40 clientes soltaban sus papeles cuando querían, todo se capturaba de inmediato, y la bandeja de revisión de Leticia era una torre sin orden.</p>
                <p>Ahora marzo tiene marcapasos: a cada cliente se le asigna <strong>su semana de entrega de papeles</strong> (la puerta de entrada, controlada), la captura procesa al ritmo de la agenda de revisión de Leticia, y frente a ella siempre hay 2-3 expedientes completos listos (el colchón) — nunca cuarenta a medias. Mismo método: agenda del freno, puerta controlada, colchón chico. El "sistema" es una hoja de cálculo y una regla que se respeta.</p>
            </div></div>
        </div>

        <div class="quiz-container" id="quiz_l15a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿En qué consiste el mecanismo del marcapasos?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l15a', this, false)">En que cada área trabaje a su máxima velocidad para que nada se atrase</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l15a', this, false)">En soltar todos los pedidos de inmediato para que "vayan avanzando"</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l15a', this, true)">En soltar el trabajo al sistema al ritmo de la agenda del freno, de modo que llegue a él justo antes de su turno</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l15a', this, false)">En poner un supervisor que vigile los tiempos de cada estación</div>
            </div>
            <div class="quiz-feedback" id="quiz_l15a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_l15b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿Dónde debe existir una fila de trabajo deliberada — y por qué?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l15b', this, false)">En todas las áreas, para que nadie se quede sin qué hacer</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l15b', this, true)">Solo frente al freno: un colchón pequeño que lo protege de la variación de los pasos previos sin inflar el inventario</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l15b', this, false)">En la entrada del negocio, para presumir cartera de pedidos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l15b', this, false)">En ninguna: el ideal es cero filas en todo el sistema</div>
            </div>
            <div class="quiz-feedback" id="quiz_l15b_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Construye la agenda del freno (30 minutos):</strong></p>
                <ol>
                    <li>Calcula la capacidad diaria real de tu freno (horas productivas de la Lección 11 × trabajos por hora).</li>
                    <li>Dibuja su agenda de la próxima semana y asigna turno a cada pedido pendiente, el más atrasado primero (Lección 12).</li>
                    <li>Define tu colchón: ¿cuántas horas de trabajo listo deben esperar SIEMPRE frente al freno? Anótalo como regla.</li>
                    <li>Y la decisión valiente: el próximo pedido que entre, NO lo sueltes de inmediato — dale turno y suéltalo cuando le toque. Observa qué pasa con el resto del flujo.</li>
                </ol>
            </div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Operar el marcapasos: la puerta de entrada al ritmo de la agenda del freno</li>
                <li>Dimensionar y ajustar el colchón — la única fila buena del negocio</li>
                <li>Programar hacia atrás y prometer fechas leyendo la agenda, no adivinando</li>
                <li>Que el mecanismo funciona igual en taller, despacho, cocina o clínica</li>
            </ul>
            <div class="okr-next">→ <strong>Lección 16:</strong> el truco que reduce tus plazos casi a la mitad sin comprar nada — lotes chicos. Y la anatomía del tiempo: de las 3 semanas que tarda tu pedido, ¿cuántas horas son trabajo real? Te vas a sorprender.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 16 — MÓDULO I · LOTES CHICOS, PLAZOS CORTOS
    // ==========================================================
    {
        id: 'l16', module: 'Módulo I · Integra el ritmo', tag: 'tag-d4', tagLabel: 'MÓDULO I',
        title: 'Lotes chicos, plazos cortos',
        subtitle: 'La anatomía del tiempo: por qué tu pedido tarda 3 semanas si solo tiene 11 horas de trabajo — y cómo partir lotes lo arregla',
        content: `
        <div class="lesson-hero" style="background-image:linear-gradient(135deg,rgba(11,61,58,0.88),rgba(11,61,58,0.5)),url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1400&q=80')">
            <div class="hero-caption">Tu pedido no pasa semanas siendo trabajado. Pasa semanas ESPERANDO. Y la espera sí se puede recortar.</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Los 4 tiempos de cualquier trabajo: preparación, proceso, cola y espera de compañía</li>
                <li>Por qué la cola y la espera dominan tu plazo total (y quién las gobierna)</li>
                <li>El efecto mágico de partir los lotes a la mitad — y por qué no cuesta lo que crees</li>
                <li>Cómo aplicar lotes chicos también con proveedores (la revancha de Don Chuy)</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>La anatomía del tiempo: ¿en qué se va el plazo?</h3>
            <p>Toma un pedido cualquiera y desármalo: desde que entró hasta que se entregó, cada hora de su vida fue de uno de estos 4 tipos:</p>
            <ol class="concept-list">
                <li><strong>Preparación:</strong> alistar la máquina/estación para ESE trabajo (cambiar placas, limpiar el área, abrir el expediente).</li>
                <li><strong>Proceso:</strong> el trabajo real — lo único por lo que el cliente paga.</li>
                <li><strong>Cola:</strong> esperar a que el recurso se desocupe de OTROS trabajos. (La fila.)</li>
                <li><strong>Espera de compañía:</strong> el trabajo está listo… esperando a que lleguen sus otras partes para juntarse (las puertas esperan al barniz; la declaración espera un papel del cliente; la torta espera las papas).</li>
            </ol>
            <p>Ahora la proporción que nadie quiere ver. En la mueblería San José desarmaron el plazo de una cocina integral: 21 días de calendario. ¿Trabajo real (preparación + proceso)? <strong>11 horas.</strong> Todo lo demás — más del 95% del plazo — fue cola y espera de compañía. <strong>Tu plazo no está hecho de trabajo: está hecho de espera.</strong> Y la espera la gobiernan dos cosas que ya controlas: la fila del freno (Lección 15)… y el tamaño de tus lotes.</p>
        </div>

        <div class="content-card tip">
            <h3>Concepto clave · Parte el lote a la mitad (y mira lo que pasa)</h3>
            <p>El lote es cuánto trabajo viaja JUNTO por tu proceso: las 6 cocinas que se cortan todas → se arman todas → se barnizan todas; los 5,000 folletos que viajan en bloque; los 40 expedientes que se capturan antes de pasar nada a revisión.</p>
            <p>¿Qué pasa si partes el lote a la mitad (3 cocinas, 2,500 folletos, 20 expedientes — o mejor: de una en una)?</p>
            <ul>
                <li><strong>La cola de cada estación se encoge a la mitad</strong> — cada trabajo espera a que terminen 3 cocinas antes que él, no 6.</li>
                <li><strong>La espera de compañía se desploma</strong> — las puertas de la cocina 1 ya no esperan a que se barnicen las de la cocina 6.</li>
                <li><strong>El primer pedido sale MUCHO antes</strong> — y empieza a cobrarse mientras el resto avanza (¡dinero que ENTRA más pronto!).</li>
                <li><strong>El dinero atrapado en proceso baja a la mitad</strong> — el medidor 2 sonríe.</li>
            </ul>
            <p>San José pasó de "6 cocinas en bloque" a fluir de una en una: <strong>el plazo por cocina cayó de 21 a 9 días. Sin contratar, sin comprar, sin correr.</strong> Solo dejaron de hacer viajar el trabajo en caravana.</p>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA IDEA QUE LO EXPLICA TODO</div>
            <div class="aha-quote">"¿Más preparaciones? Sí. ¿Y qué? Esas horas extra viven en recursos a los que les sobra el tiempo."</div>
            <div class="aha-author">— Método FLUIR · La objeción desarmada</div>
            <div class="aha-body">La resistencia clásica a los lotes chicos: "¡vamos a preparar las máquinas el doble de veces — eso es ineficiencia!". Detente y pregunta lo único que importa: ¿DÓNDE ocurren esas preparaciones extra? Si es en áreas no-freno: les sobra capacidad (Lección 14) — convertir su tiempo ocioso en preparaciones no cuesta un peso real, solo ensucia un indicador que ya degradaste en la Lección 5. ¿Y en el freno? Ahí sí cuidado: sus preparaciones se minimizan con ingenio (agrupar trabajos compatibles — la idea de Genaro) o se acepta el lote un poco más grande SOLO ahí. <strong>Una hora "ahorrada" en un no-freno siempre fue un espejismo; una hora de espera recortada al cliente es una venta más pronta.</strong> El cambio es regalado — lo único que cobra es dejar de adorar la eficiencia local.</div>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · La revancha de Don Chuy (lotes chicos con proveedores)</div>
            <div class="case-body">
                <p>El principio funciona igual hacia atrás — con lo que COMPRAS. Don Chuy (el del maíz por tonelada y media, Lección 3) entendió por fin la cuenta completa y renegoció: entrega <strong>semanal</strong> de maíz, pagando un precio por bulto ligeramente mayor al del "ofertón" por volumen.</p>
                <p>Su nueva realidad: caja líquida (ya no presta su dinero al proveedor por 10 semanas), bodega chica (renta de menos espacio), merma casi cero (el grano no envejece), y — sorpresa — <strong>mejor relación con el proveedor</strong>, que ahora tiene un cliente fijo semanal y predecible en su propia agenda, en vez de un pedido gigante cada tres meses.</p>
                <p>La fórmula de la negociación, por si la necesitas: <em>"te compro lo mismo al año, en entregas chicas y fijas — tú ganas un cliente estable, yo gano caja".</em> Muchos proveedores aceptan sin mover el precio: la predictibilidad también vale para ellos. El descuento por volumen casi siempre es un préstamo disfrazado — que TÚ le haces a tu bodega.</p>
            </div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#9986;&#65039;</span><div>
                <h3>¿Hasta dónde partir? La regla del freno</h3>
                <p>"¿Entonces hago TODO de uno en uno?" Casi — con un solo límite. Parte los lotes hasta donde el freno lo permita: si los lotes ultra-chicos obligan al FRENO a preparar tantas veces que pierde capacidad de proceso, te pasaste — en el freno (y solo en él), busca el punto medio o agrupa trabajos compatibles para preparar una vez y procesar varios.</p>
                <p>En todas las demás estaciones: parte sin miedo. Su "ineficiencia" extra es tiempo que ya estaba pagado y ocioso. La prueba de que vas bien la dan los 3 medidores: plazo bajando (entra antes), pasillo despejándose (atrapado bajando), gasto igual. El test de los 3 "no", una vez más, es el juez.</p>
            </div></div>
        </div>

        <div class="quiz-container" id="quiz_l16a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">La cocina integral de San José tardaba 21 días con solo 11 horas de trabajo real. ¿De qué estaba hecho el resto del plazo?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l16a', this, false)">De los tiempos de secado del barniz, que son inevitables</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l16a', this, true)">De cola (esperar a que las estaciones se desocuparan) y espera de compañía (esperar a las demás piezas del lote)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l16a', this, false)">De retrabajos por errores de los carpinteros</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l16a', this, false)">De los días festivos y fines de semana del calendario</div>
            </div>
            <div class="quiz-feedback" id="quiz_l16a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_l16b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">"Partir lotes duplica las preparaciones — es ineficiente." ¿Cuál es la respuesta del Método FLUIR?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l16b', this, false)">Es cierto: por eso los lotes chicos solo funcionan en empresas grandes con muchas máquinas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l16b', this, false)">Las preparaciones deben eliminarse por completo antes de partir cualquier lote</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l16b', this, true)">Las preparaciones extra caen en recursos no-freno con tiempo de sobra ya pagado: no cuestan dinero real, solo ensucian un indicador local — en el freno sí se cuida el punto medio</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l16b', this, false)">Se compensa cobrando un cargo extra por urgencia a los clientes</div>
            </div>
            <div class="quiz-feedback" id="quiz_l16b_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Desarma un pedido y parte un lote (25 minutos):</strong></p>
                <ol>
                    <li>Toma tu último pedido entregado. Reconstruye su vida: ¿cuántos días de calendario? ¿Cuántas horas de trabajo REAL? Reparte el resto entre cola y espera de compañía. (El porcentaje te va a doler — úsalo.)</li>
                    <li>Identifica tu lote más grande: ¿qué viaja en caravana por tu proceso? ¿Qué pasaría si viajara en mitades?</li>
                    <li>Elige UN producto o servicio y pártele el lote a la mitad esta semana. Mide el plazo antes y después.</li>
                    <li>Bonus proveedor: ¿qué compra grande "por descuento" podrías volver entregas chicas y fijas? Llama y propón la fórmula de Don Chuy.</li>
                </ol>
            </div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Desarmar cualquier plazo en sus 4 tiempos: preparación, proceso, cola y espera de compañía</li>
                <li>Que el plazo está hecho de espera — y la espera se gobierna con la fila del freno y el tamaño del lote</li>
                <li>Partir lotes a la mitad: plazos casi a la mitad, sin invertir, con el freno como único límite</li>
                <li>Negociar entregas chicas y frecuentes con proveedores sin pagar de más</li>
            </ul>
            <div class="okr-next">→ Cierre del Módulo I, <strong>Lección 17:</strong> el funeral de la palabra "urgente" — un sistema de prioridades tan simple que funciona sin ti, y cómo sobrevivir al valle de los primeros quince días.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 17 — MÓDULO I · ADIÓS A LAS URGENCIAS
    // ==========================================================
    {
        id: 'l17', module: 'Módulo I · Integra el ritmo', tag: 'tag-d4', tagLabel: 'MÓDULO I',
        title: 'Adiós a las urgencias',
        subtitle: 'Un sistema de prioridades que funciona sin ti — y cómo atravesar el valle de los primeros quince días sin recaer',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">Cuando todo es urgente, nada lo es — y el negocio lo dirige el que grita más fuerte.</div>
            <div class="pq-author">— Método FLUIR · Lección 17</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Por qué la cultura de urgencias es un síntoma de diseño — y cómo el marcapasos la disuelve</li>
                <li>Las 3 reglas públicas que sustituyen al dueño-bombero</li>
                <li>El valle de los 15 días: por qué los indicadores se ven PEOR antes de mejorar, y cómo sostener el cambio</li>
                <li>Cuándo un sistema de prioridades caduca (y por qué a veces la mejor regla es la más simple de todas)</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>Las urgencias no son un problema de actitud: son un diseño</h3>
            <p>Repasa el mecanismo completo que ya construiste y nota algo: <strong>las urgencias eran el síntoma inevitable del diseño viejo.</strong> Todo se soltaba de inmediato (Lección 15) → todo estaba empezado a la vez → la fila del freno era una maraña → ningún pedido tenía fecha creíble → el cliente llamaba a presionar → el dueño "expeditaba" ese pedido brincándose la fila → lo cual atrasaba otros tres → que generaban tres llamadas más. El círculo perfecto.</p>
            <p>Con el marcapasos, el círculo se rompe de raíz: hay UNA fila (la agenda del freno), ordenada por UNA regla (lo vendido más atrasado primero), con fechas que se calculan. Pero queda rematar el sistema con reglas que cualquiera pueda aplicar <strong>sin preguntarte</strong> — porque mientras las prioridades vivan en tu cabeza, tú sigues siendo el cuello de botella de las decisiones.</p>
        </div>

        <div class="content-card tip">
            <h3>Herramienta #7 · Las 3 reglas públicas</h3>
            <div style="margin:14px 0;padding:16px;background:#f0faf8;border-radius:8px;border-left:4px solid #0b3d3a;">
                <p style="margin:6px 0;"><strong>Regla 1 · El orden lo dicta la agenda del freno.</strong> Visible para todos (pizarra, hoja impresa, grupo de WhatsApp del equipo): qué sigue, qué va después. Nadie reordena la fila — ni el dueño, salvo decisión EXPLÍCITA y anunciada.</p>
                <p style="margin:6px 0;"><strong>Regla 2 · "Urgente" tiene precio y dueño.</strong> Meter un pedido fuera de turno se puede — sabiendo qué pedidos se atrasan a cambio (la pizarra lo muestra) y quién lo autoriza (una sola persona). El 80% de las "urgencias" se desinfla cuando el solicitante ve el costo.</p>
                <p style="margin:6px 0;"><strong>Regla 3 · Las áreas no-freno: primero en llegar, primero en procesar.</strong> Sin sistemas de colores, sin niveles, sin comités. Tienen capacidad de sobra: su mejor regla es la más simple. La sofisticación solo se gana el derecho a existir en el freno.</p>
            </div>
            <p>Y una advertencia del oficio: <strong>los sistemas de prioridades caducan.</strong> Si un día notas que "lo normal" ya necesita tres niveles de urgente, no agregues un cuarto nivel — revisa el marcapasos, porque algo se rompió río arriba. Más semáforos nunca arreglan una avenida mal diseñada.</p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · La fonda sin gritos</div>
            <div class="case-body">
                <p>La cocina de Doña Mary a las 2:30 pm era un concierto de gritos: meseros "apurando" sus mesas, la cocinera haciendo tres platillos a la vez (todos a medias), comandas que se brincaban según quién gritara — y platos saliendo fríos, tarde o equivocados.</p>
                <p>Las 3 reglas, versión fonda: <strong>(1)</strong> un riel de comandas en ORDEN DE LLEGADA, a la vista de todos — la cocinera trabaja el riel, una comanda a la vez, sin negociar. <strong>(2)</strong> ¿Mesa especial que urge (el cliente que debe irse en 15 minutos)? Solo Doña Mary la adelanta, anunciándolo: "esta entra antes, estas dos se recorren". <strong>(3)</strong> Meseros y ayudante: primero en llegar, primero en servirse — cero criterio creativo.</p>
                <p>Dos semanas después, la cocinera lo resumió mejor que cualquier consultor: <em>"Ahora cocino. Antes me la pasaba decidiendo qué cocinar mientras se me quemaba lo que estaba cocinando."</em> <strong>El silencio en la cocina a las 2:30 se volvió el indicador favorito de Doña Mary</strong> — uno que, por cierto, sí mueve los 3 medidores: mesas más rápidas, menos merma, más clientela.</p>
            </div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA IDEA QUE LO EXPLICA TODO</div>
            <div class="aha-quote">"Los primeros quince días, el negocio se va a VER peor mientras se vuelve mejor. El que no lo sabe, recae."</div>
            <div class="aha-author">— Método FLUIR · El valle</div>
            <div class="aha-body">Te aviso lo que viene cuando implementes el módulo, porque a todos les pasa: al controlar la puerta de entrada, las áreas no-freno tendrán ratos visiblemente ociosos (es el diseño, Lección 14) — pero tus ojos, entrenados por años de "todos ocupados", van a gritar que el negocio se está cayendo. El inventario en proceso tarda en drenarse; las eficiencias locales (que ya no son tu medida, pero siguen ahí) caerán en picada; y alguien — un socio, tu contador, tu suegro — te dirá "esto no está funcionando". <strong>Ese es el valle. Dura una o dos quincenas: lo que tarda el trabajo viejo en salir del sistema y las primeras fechas cumplidas en llegar.</strong> Se atraviesa con dos cosas: los 3 medidores a la vista (que SÍ van a mejorar: plazo, atrapado, entregas) y haber avisado a todos ANTES de empezar que el valle vendría. Avisar es la diferencia entre "va según el plan" y "abortemos la misión".</div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128200;</span><div>
                <h3>El tablero del valle (qué mirar mientras cruzas)</h3>
                <p>Durante la transición, mide SOLO esto, semanal, en una hoja a la vista del equipo:</p>
                <p><strong>1. Pedidos entregados a tiempo</strong> (de los prometidos esta semana, ¿cuántos se cumplieron?) — subirá semana a semana.</p>
                <p><strong>2. Dinero atrapado en proceso</strong> (cuenta gruesa: ¿cuánto trabajo a medias hay en el piso?) — bajará a ojos vista.</p>
                <p><strong>3. Horas productivas del freno</strong> (la auditoría de la libreta, Lección 11) — tu nueva eficiencia, la única que importa.</p>
                <p>Lo que NO mirarás: % de ocupación de las demás áreas. Ya sabes por qué — y tu equipo también, si hiciste la junta de la Lección 14. El valle se cruza mirando el tablero correcto.</p>
            </div></div>
        </div>

        <div class="quiz-container" id="quiz_l17a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">Según la lección, ¿por qué la cultura de "todo es urgente" NO se arregla pidiendo más compromiso al equipo?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l17a', this, true)">Porque las urgencias son el síntoma del diseño viejo (todo se suelta a la vez, sin fila única ni fechas creíbles) — se disuelven cambiando el diseño, no la actitud</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l17a', this, false)">Porque los empleados de las PYMES no responden a los llamados de compromiso</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l17a', this, false)">Porque los clientes mexicanos son especialmente impacientes</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l17a', this, false)">Porque falta un software de gestión de pedidos en tiempo real</div>
            </div>
            <div class="quiz-feedback" id="quiz_l17a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_l17b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿Qué es "el valle" y cómo se atraviesa?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l17b', this, false)">La temporada baja de ventas: se atraviesa con promociones y descuentos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l17b', this, false)">El periodo en que el freno se cambia de lugar: se atraviesa contratando temporales</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l17b', this, true)">Las primeras semanas del cambio, cuando los indicadores viejos se ven peor antes de que el sistema mejore: se atraviesa avisando antes, mirando los 3 medidores y sosteniendo la decisión</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l17b', this, false)">La caída de ánimo del equipo al recibir nuevas reglas: se atraviesa con incentivos económicos</div>
            </div>
            <div class="quiz-feedback" id="quiz_l17b_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Publica las reglas y anuncia el valle (1 hora, esta semana):</strong></p>
                <ol>
                    <li>Escribe tus 3 reglas públicas adaptadas a tu negocio (la agenda visible, el "urgente" con precio y dueño, el primero-en-llegar para no-frenos). Una hoja, lenguaje llano.</li>
                    <li>Convoca la junta de 20 minutos: presenta las reglas, el tablero del valle y — crucial — <strong>anuncia el valle</strong>: "las próximas dos quincenas esto se va a ver raro; aquí está lo que vamos a mirar para saber que vamos bien".</li>
                    <li>Pega el tablero del valle donde todos lo vean y llénalo cada viernes.</li>
                </ol>
                <p>Con esto, el Módulo I está operando. Tu negocio ya tiene marcapasos, colchón, lotes chicos y reglas que funcionan sin ti. Lo que sigue es crecer: romper el freno — y elegir el siguiente.</p>
            </div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Que las urgencias eran síntoma del diseño viejo, no de la gente</li>
                <li>Instalar las 3 reglas públicas que sustituyen al dueño-bombero</li>
                <li>Anticipar y cruzar el valle de los 15 días con el tablero correcto</li>
                <li>Detectar cuándo un sistema de prioridades caducó (más semáforos nunca son la respuesta)</li>
            </ul>
            <div class="okr-next">→ Empieza el módulo final: <strong>R · Rompe y repite</strong>. Tu freno está exprimido y el negocio marcha a su ritmo — llegó la hora de ROMPERLO… y de aprender por qué las reglas de hoy serán tu próximo freno si no las vigilas.</div>
        </div>
        `
    }

    // ==========================================================
    // PENDIENTE (ver blueprint): Módulo R (18-21), Examen (22), Certificado (23)
    // ==========================================================

    ]
};

window.COURSE_DESTAPA_TU_NEGOCIO = COURSE_DESTAPA_TU_NEGOCIO;
