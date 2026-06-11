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
    }

    // ==========================================================
    // PENDIENTE (ver blueprint): Módulo L (6-9), Módulo U (10-13),
    // Módulo I (14-17), Módulo R (18-21), Examen (22), Certificado (23)
    // ==========================================================

    ]
};

window.COURSE_DESTAPA_TU_NEGOCIO = COURSE_DESTAPA_TU_NEGOCIO;
