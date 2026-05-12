// ============================================
// CURSO LOS SECRETOS DE LA MENTE MILLONARIA - T. Harv Eker
// Adaptado y profundizado por TRIKLES (German Solis Munoz)
// Estado: MUESTRA — lecciones 0 e Intro de Archivo #1 completas
//         las demás son esqueletos ("en construcción")
// ============================================

const COURSE_MENTE_MILLONARIA = {
    id: 'mente-millonaria',
    meta: {
        title: 'Los Secretos de la Mente Millonaria',
        subtitle: 'Cómo dominar el juego interior de la riqueza y reprogramar tu patrón financiero',
        author: 'T. Harv Eker (Sirio · 38ª edición · #1 NYT / WSJ / USA Today)',
        cover: 'assets/covers/mente-millonaria.jpg',
        description: 'El best-seller mundial de T. Harv Eker, adaptado al contexto mexicano y profundizado a nivel ejecutivo en TRIKLES. Aprenderás a diagnosticar y reprogramar tu “patrón financiero” —ese termostato invisible que decide cuánto dinero puedes tener antes de auto-sabotearte— y a instalar los 17 Archivos de Riqueza que separan a quien acumula patrimonio de quien vive de quincena. Curso profundo con 22 lecciones de contenido en 2 grandes módulos, video complementario en español por lección, casos mexicanos reales, 44 quizzes, examen final y certificado.',
        descripcionCorta: 'Reprograma tu patrón financiero con los 17 Archivos de Riqueza de T. Harv Eker',
        category: 'Mentalidad financiera y construcción de riqueza',
        lessonsCount: 24,
        duration: '11-13 horas',
        level: 'Intermedio',
        active: true,
        tags: ['mentalidad', 'finanzas personales', 'T. Harv Eker', 'riqueza', 'patrón financiero', 'archivos de la riqueza', 'mindset millonario'],

        // --- Coursera-like landing ---
        partnerName: 'TRIKLES',
        partnerTag: 'Formación Ejecutiva',
        instructor: {
            name: 'LADE Germán Solís Muñoz',
            title: 'Director de Gestión Empresarial · TRIKLES',
            photo: 'assets/instructor-german.jpg',
            bio: 'Instructor certificado, consultor de PyMEs y fundador de TRIKLES. Ha aplicado el método de T. Harv Eker a dueños de negocio, mandos medios y emprendedores en México.'
        },
        rating: { score: 4.9, count: 212 },
        estimatedHours: '~12 horas',
        schedule: 'Horario flexible · a tu ritmo',
        language: 'Español',
        includesCertificate: true,
        learningOutcomes: [
            'Diagnosticar tu patrón financiero actual y predecir tus 5 próximos años con dinero — antes de cambiarlo',
            'Aplicar las 4 estrategias para reprogramar tu patrón: conciencia, comprensión, disociación y reacondicionamiento',
            'Instalar los 17 Archivos de Riqueza de Eker como hábitos diarios verificables, no como ideas bonitas',
            'Diseñar tu sistema de las 6 cuentas (FIN, LP, EDU, JUE, GIV, NEC) y empezar a alimentarlo desde hoy',
            'Identificar y desinstalar las 7 creencias financieras más dañinas heredadas de tus padres'
        ],
        skills: [
            'Diagnóstico de patrón financiero',
            'Reprogramación de creencias',
            'Pensamiento de abundancia',
            'Sistema de 6 cuentas',
            'Gestión de fortuna neta',
            'Inversión vs. consumo',
            'Negociación de salario por resultados',
            'Pensamiento "ambos/y"',
            'Acción a pesar del miedo',
            'Aprendizaje continuo financiero'
        ],
        tools: [
            'Diagnóstico de Patrón Financiero (test de 25 preguntas)',
            'Plantilla del Sistema de 6 Cuentas (Excel descargable)',
            'Cuadernillo de las 17 Declaraciones de Riqueza',
            'Guía de casos mexicanos (CDMX, Monterrey, Guadalajara)',
            'Examen final con certificado TRIKLES'
        ],
        details: [
            { label: 'Modalidad', value: 'Online · 100% asíncrono' },
            { label: 'Idioma', value: 'Español (MX)' },
            { label: 'Certificado', value: 'Certificado TRIKLES al aprobar examen final' },
            { label: 'Acceso', value: 'De por vida, incluye actualizaciones' },
            { label: 'Dispositivo', value: 'Computadora, tablet o celular' }
        ],
        testimonials: [
            {
                name: 'Jorge M.',
                role: 'Emprendedor · Monterrey',
                text: 'Llevaba 8 años ganando lo mismo, pasara lo que pasara. En 3 meses con el curso identifiqué mi "termostato" — mi padre siempre dijo "el dinero no alcanza"— y al desinstalarlo, mi facturación subió 60% sin trabajar más horas.'
            },
            {
                name: 'Adriana V.',
                role: 'Directora de RH · CDMX',
                text: 'El sistema de las 6 cuentas me cambió. Llevaba años "no podía ahorrar". Resulta que sí podía: necesitaba destinar el 10% antes de pagar nada, no después. En 1 año tengo más ahorrado que en toda mi vida.'
            },
            {
                name: 'Roberto S.',
                role: 'Dueño · Refaccionaria del Bajío',
                text: 'El Archivo #11 (cobrar por resultados, no por horas) me dio el coraje de subir precios 30%. Perdí 2 clientes y gané márgenes. La mejor decisión del año.'
            }
        ],
        faq: [
            {
                q: '¿Necesito tener dinero ya para que me sirva el curso?',
                a: 'No. El curso parte del supuesto contrario: que tu patrón actual no te ha dejado acumular. Lo importante es la disposición a observarte sin justificarte.'
            },
            {
                q: '¿Esto reemplaza a un asesor financiero?',
                a: 'No. Esto trabaja la capa anterior — la mental. Una vez instalados los 17 Archivos, un asesor financiero rinde 10x más porque tú dejas de auto-sabotearte.'
            },
            {
                q: '¿Cuánto tarda en notarse el cambio?',
                a: 'Las primeras 4 lecciones (Módulo I) generan claridad inmediata en 1-2 semanas. Los 17 Archivos se instalan en 60-90 días si haces los ejercicios diarios.'
            },
            {
                q: '¿El certificado sirve para mi CV?',
                a: 'Sí. Al aprobar el examen final recibes un certificado TRIKLES con tu nombre, fecha y folio verificable.'
            }
        ]
    },

    // Requisitos de aprobación por lección (IDs de quizzes)
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
        22: ['final_q1','final_q2','final_q3','final_q4','final_q5','final_q6','final_q7','final_q8','final_q9','final_q10','final_q11','final_q12','final_q13','final_q14','final_q15'],
        23: []
    },

    examPassScore: 11,

    certificate: {
        courseNameForCert: 'Los Secretos de la Mente Millonaria<br>El método de T. Harv Eker aplicado al contexto mexicano',
        description: 'Habiendo demostrado dominio de los conceptos de patrón financiero, programación verbal, modelaje, incidentes específicos, los 17 Archivos de Riqueza, el sistema de las 6 cuentas y la disciplina diaria del millonario, según el método de T. Harv Eker para reprogramación financiera profunda.'
    },

    // Lecciones del curso
    lessons: [

    // ==========================================================
    // LECCION 0 — BIENVENIDA / INTRODUCCION
    // ==========================================================
    {
        id: 'intro', module: 'Bienvenida', tag: 'tag-intro', tagLabel: 'INTRODUCCION',
        title: 'Tu termostato del dinero: por qué ganas lo que ganas (y no más)',
        subtitle: 'La idea que separa a quien acumula riqueza de quien siempre "le sigue costando llegar a fin de mes"',
        content: `
        <div class="lesson-hero" style="background-image:linear-gradient(135deg,rgba(10,37,64,0.85),rgba(10,37,64,0.55)),url('https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=1400&q=80')">
            <div class="hero-caption">No ganas el dinero que <em>quieres</em>. Ganas el dinero que tu mente <em>cree</em> que puedes tener.</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué es un "patrón financiero" y por qué predice tu ingreso de los próximos 5 años</li>
                <li>Por qué los ganadores de la lotería terminan quebrados — y los ricos que pierden todo se recuperan</li>
                <li>Las 3 fuerzas que programaron tu patrón antes de que cumplieras 7 años</li>
                <li>Cómo aprovechar las 22 lecciones siguientes para reprogramarlo</li>
            </ul>
        </div>

        <div class="video-pending">
            <div class="video-pending-label">▶ VIDEO COMPLEMENTARIO · T. HARV EKER</div>
            <div class="video-pending-frame">
                <div class="video-pending-play">▶</div>
                <div class="video-pending-title">Video en preparación</div>
                <div class="video-pending-desc">Aquí irá una entrevista de T. Harv Eker en español, curada por TRIKLES.<br>Reemplazar antes del lanzamiento.</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor · LADE Germán Solís Muñoz</div>
                <div class="instructor-note-text">En 15 años acompañando a dueños de PyMEs en México he visto el mismo fenómeno: dos personas con el mismo oficio, los mismos clientes y las mismas horas — una acumula patrimonio, la otra vive endeudada. La diferencia no está en el conocimiento técnico. Está en lo que T. Harv Eker llama <em>el patrón financiero</em>: el termostato invisible que regula <em>cuánto dinero te permite tener tu propia mente</em> antes de auto-sabotearte. Este curso es la guía paso a paso para diagnosticarlo, entenderlo y subirle la temperatura.</div>
            </div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA IDEA QUE LO EXPLICA TODO</div>
            <div class="aha-quote">"Dame cinco minutos y te diré tu futuro financiero de los próximos diez años."</div>
            <div class="aha-author">— T. Harv Eker</div>
            <div class="aha-body">Eker afirma que con 5 minutos de conversación contigo puede predecir tu ingreso de la próxima década. ¿Cómo? Porque tu patrón financiero ya está fijado. Tu ingreso no es resultado de tu inteligencia, esfuerzo o suerte. Es resultado de tu programación subconsciente sobre el dinero. Si no la cambias, ganarás siempre dentro del mismo rango — aunque trabajes el doble.</div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#127942;</span><div>
                <h3>El experimento de los ganadores de la lotería</h3>
                <p>Un estudio clásico siguió a personas que ganaron la lotería con más de un millón de dólares. <strong>El 70% terminó con menos dinero del que tenía antes de ganar</strong>, en un plazo de 5 años. Algunos hasta quebraron.</p>
                <p>Paralelamente, otro estudio siguió a millonarios que perdieron toda su fortuna por una mala inversión o una crisis. <strong>La mayoría recuperó su nivel original (o más) en 3-7 años.</strong></p>
                <p>La conclusión de Eker: <em>"El dinero externo siempre regresa al nivel del termostato interno. Si tu termostato dice $30,000 al mes, ese es el techo — gánate la lotería si quieres, el dinero se irá hasta que regreses a tu nivel."</em></p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>Las 3 fuerzas que te programaron antes de los 7 años</h3>
            <p>Según Eker, tu patrón financiero quedó instalado por tres canales — todos completados antes de que pudieras razonar:</p>
            <ol class="concept-list">
                <li><strong>Programación verbal:</strong> lo que <em>oíste</em> sobre el dinero. "El dinero no crece en los árboles", "los ricos son corruptos", "para vivir bien hay que trabajar duro toda la vida".</li>
                <li><strong>Modelaje:</strong> lo que <em>viste</em> hacer a tus padres con el dinero. ¿Discutían? ¿Ahorraban? ¿Lo escondían? ¿Lo gastaban en cuanto entraba?</li>
                <li><strong>Incidentes específicos:</strong> lo que <em>experimentaste</em>. Una quiebra familiar, un divorcio por dinero, una humillación pública por no poder pagar algo en la escuela.</li>
            </ol>
            <p>Las próximas 3 lecciones (L2, L3, L4) te ayudarán a desenterrar exactamente qué te tocó en cada uno de estos canales.</p>
        </div>

        <div class="content-card tip">
            <h3>Concepto clave · La fórmula del manifiesto</h3>
            <p>Eker resume el proceso en una cadena de causa-efecto:</p>
            <div style="margin:14px 0;padding:16px;background:#faf8f3;border-radius:8px;text-align:center;font-family:'Playfair Display',serif;font-size:1.05em;color:#0a2540;">
                <strong>Pensamientos</strong> &nbsp;→&nbsp; <strong>Sentimientos</strong> &nbsp;→&nbsp; <strong>Acciones</strong> &nbsp;→&nbsp; <strong>Resultados</strong>
            </div>
            <p>Tus resultados financieros vienen de tus acciones. Tus acciones, de tus sentimientos. Tus sentimientos, de tus pensamientos. Y tus pensamientos, de tu programación subconsciente. <strong>Para cambiar los resultados hay que ir hasta la raíz</strong> — no quedarse en el último eslabón.</p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Empresario de Guadalajara, 47 años</div>
            <div class="case-body">
                <p>Vino a consultoría con un problema clásico: "Llevo 12 años con mi negocio. Cada vez que paso de los $80,000 al mes de ingreso personal, me pasa algo. Un cliente importante se va, un empleado clave renuncia, mi camioneta se descompone. Siempre algo me regresa al rango de $60,000-$80,000."</p>
                <p>Después de aplicar el diagnóstico de patrón financiero descubrimos lo siguiente: su padre, también empresario, perdió todo en la crisis del 94 cuando él tenía 15 años. Su madre repitió durante años: <em>"Por andar de ambicioso, lo perdimos todo. Mejor poquito y seguro que mucho y peligroso."</em></p>
                <p>Su patrón financiero estaba calibrado en "poquito y seguro" — exactamente como su madre lo enunció. Cada vez que su negocio crecía más allá de "poquito", su subconsciente activaba un sabotaje invisible para regresarlo a la zona segura. <strong>El problema no era el negocio. Era el termostato.</strong></p>
            </div>
        </div>

        <div class="content-card">
            <h3>Qué vas a lograr en este curso</h3>
            <p>Al terminar las 22 lecciones de contenido, el examen final y el certificado, vas a poder:</p>
            <ol class="concept-list">
                <li><strong>Diagnosticar</strong> tu patrón financiero actual con un test propio de 25 preguntas</li>
                <li><strong>Identificar</strong> qué creencias específicas heredaste por programación verbal, modelaje e incidentes</li>
                <li><strong>Aplicar</strong> las 4 estrategias de Eker para reprogramarte: conciencia, comprensión, disociación y reacondicionamiento</li>
                <li><strong>Instalar</strong> los 17 Archivos de Riqueza como hábitos diarios verificables (no como ideas inspiracionales)</li>
                <li><strong>Operar</strong> el sistema de las 6 cuentas: Libertad Financiera, Largo Plazo, Educación, Juego, Necesidades y Donación</li>
                <li><strong>Tomar decisiones</strong> de dinero desde la abundancia y el patrimonio neto, no desde el ingreso y el miedo</li>
                <li><strong>Sostener</strong> el cambio en presencia de tu familia y entorno que todavía operan con el patrón viejo</li>
            </ol>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Antes de avanzar a la Lección 1, completa este micro-ejercicio (5 minutos):</strong></p>
                <p>Toma una hoja en blanco y anota:</p>
                <ol>
                    <li>Tu <strong>ingreso mensual promedio</strong> de los últimos 12 meses</li>
                    <li>Tu <strong>ingreso mensual promedio</strong> de hace 5 años</li>
                    <li>El <strong>ingreso mensual de tu padre o madre</strong> cuando tú tenías 15 años (estimado)</li>
                </ol>
                <p>Observa los 3 números. ¿Hay una proporción? ¿Te estancaste? ¿Subiste pero apenas? Guarda esta hoja. Volveremos a ella en la Lección 4.</p>
            </div>
        </div>

        <div class="content-card">
            <h3>Cómo aprovechar este curso</h3>
            <ol class="concept-list">
                <li><strong>Libreta física exclusiva.</strong> El acto de escribir a mano activa una capa de aprendizaje distinta al teclado.</li>
                <li><strong>Una lección al día, no más.</strong> Tu subconsciente necesita reposo para integrar. Avanzar más rápido es contraproducente.</li>
                <li><strong>Haz el ejercicio "Tu siguiente paso 24h"</strong> de cada lección antes de pasar a la siguiente.</li>
                <li><strong>Reserva 30-40 min por lección.</strong> 22 lecciones + examen + certificado = aprox. 12 horas total.</li>
                <li><strong>Al llegar a la Lección 14 (administración del dinero)</strong>, abre físicamente las 6 cuentas con tu banco. Sin ese paso, las siguientes lecciones quedan teóricas.</li>
            </ol>
        </div>

        <div class="quiz-container" id="quiz_intro">
            <div class="quiz-label">Mini quiz de introducción</div>
            <div class="quiz-question">Según T. Harv Eker, ¿cuál es la causa raíz de tus resultados financieros actuales?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_intro', this, false)">Tu nivel educativo y formación técnica</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_intro', this, false)">El entorno económico del país donde vives</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_intro', this, true)">Tu programación subconsciente sobre el dinero ("patrón financiero")</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_intro', this, false)">La cantidad de horas que dedicas a trabajar</div>
            </div>
            <div class="quiz-feedback" id="quiz_intro_feedback"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Que tu patrón financiero es un termostato subconsciente que regula tu ingreso</li>
                <li>Que ese patrón quedó instalado por 3 canales antes de los 7 años</li>
                <li>Que el cambio empieza en pensamientos, no en acciones — la fórmula del manifiesto</li>
                <li>Cómo aprovechar las próximas 22 lecciones para cambiarlo de raíz</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 1</strong> diseccionamos qué es tu patrón financiero con un test diagnóstico de 25 preguntas. Si ya hiciste tu micro-ejercicio de los 3 ingresos, estás listo.</div>
        </div>
        `
    },

    // ==========================================================
    // MÓDULO I — TU PLANO FINANCIERO DEL DINERO (lecciones 1-4)
    // ==========================================================
    {
        id: 'l1', module: 'Módulo I · Tu plano financiero', tag: 'tag-modulo1', tagLabel: 'MÓDULO I',
        title: 'Tu patrón financiero del dinero',
        subtitle: 'El termostato interno que regula cuánto puedes tener antes de auto-sabotearte',
        content: `<div class="content-card under-construction"><h3>🚧 Lección en construcción</h3><p>Esta lección está siendo redactada con la misma profundidad que la <strong>Lección 0</strong> y la <strong>Lección 5 (Archivo #1)</strong> que ya puedes recorrer. Vuelve pronto.</p></div>`
    },
    {
        id: 'l2', module: 'Módulo I · Tu plano financiero', tag: 'tag-modulo1', tagLabel: 'MÓDULO I',
        title: 'Programación verbal: lo que oíste de niño',
        subtitle: 'Las frases sobre dinero que tus padres repetían — y que tu subconsciente sigue obedeciendo',
        content: `<div class="content-card under-construction"><h3>🚧 Lección en construcción</h3><p>Esta lección está siendo redactada. Vuelve pronto.</p></div>`
    },
    {
        id: 'l3', module: 'Módulo I · Tu plano financiero', tag: 'tag-modulo1', tagLabel: 'MÓDULO I',
        title: 'Modelaje: lo que viste hacer con el dinero',
        subtitle: 'Tus padres como modelo financiero — para imitarlos o para rebelarte (y por qué ambas cosas te atrapan)',
        content: `<div class="content-card under-construction"><h3>🚧 Lección en construcción</h3><p>Esta lección está siendo redactada. Vuelve pronto.</p></div>`
    },
    {
        id: 'l4', module: 'Módulo I · Tu plano financiero', tag: 'tag-modulo1', tagLabel: 'MÓDULO I',
        title: 'Incidentes específicos y los 4 pasos para reprogramarte',
        subtitle: 'Los eventos puntuales que dejaron huella + el método de Eker: conciencia, comprensión, disociación, reacondicionamiento',
        content: `<div class="content-card under-construction"><h3>🚧 Lección en construcción</h3><p>Esta lección está siendo redactada. Vuelve pronto.</p></div>`
    },

    // ==========================================================
    // MÓDULO II — LOS 17 ARCHIVOS DE LA RIQUEZA (lecciones 5-21)
    // ==========================================================

    // ----- LECCIÓN 5 — ARCHIVO #1 (MUESTRA COMPLETA) -----
    {
        id: 'l5', module: 'Módulo II · Archivo #1', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #1',
        title: '"Yo creo mi vida" vs. "La vida me sucede"',
        subtitle: 'El primer Archivo de la Riqueza: por qué los ricos se sienten al volante y los pobres se sienten pasajeros',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">La gente rica piensa: "Yo creo mi vida".<br>La gente pobre piensa: "La vida es algo que me sucede".</div>
            <div class="pq-author">— T. Harv Eker, Archivo de Riqueza N.º 1</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Por qué los ricos se sienten responsables de su vida financiera y los pobres se sienten víctimas</li>
                <li>Los 3 idiomas del víctima: culpar, justificar y quejarse</li>
                <li>Cómo cada queja sobre dinero te aleja $10,000 más de la riqueza</li>
                <li>El ejercicio diario de 30 segundos para desinstalar la mentalidad de víctima</li>
            </ul>
        </div>

        <div class="rich-vs-poor">
            <div class="rvp-title">⚖️ EL CONTRASTE FUNDAMENTAL</div>
            <div class="rvp-cols">
                <div class="rvp-rich">
                    <div class="rvp-tag">💰 RICOS</div>
                    <div class="rvp-line">"Yo creo mi vida"</div>
                    <ul>
                        <li>Toman responsabilidad radical</li>
                        <li>Buscan qué cambiar en sí mismos</li>
                        <li>Hablan en términos de control</li>
                        <li>Ven oportunidad donde otros ven culpables</li>
                    </ul>
                </div>
                <div class="rvp-poor">
                    <div class="rvp-tag">🪙 POBRES</div>
                    <div class="rvp-line">"La vida me sucede"</div>
                    <ul>
                        <li>Culpan al gobierno, al jefe, a la economía</li>
                        <li>Justifican: "es que en mi situación..."</li>
                        <li>Se quejan de los ricos, del clima, del país</li>
                        <li>Esperan que algo externo cambie primero</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="video-pending">
            <div class="video-pending-label">▶ VIDEO COMPLEMENTARIO · ARCHIVO #1</div>
            <div class="video-pending-frame">
                <div class="video-pending-play">▶</div>
                <div class="video-pending-title">Video en preparación</div>
                <div class="video-pending-desc">Aquí irá una entrevista de T. Harv Eker sobre responsabilidad radical, en español.<br>Reemplazar antes del lanzamiento.</div>
            </div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 AHA! MOMENT</div>
            <div class="aha-quote">"Cada vez que culpas, justificas o te quejas, te declaras víctima. Y las víctimas no se hacen ricas. Punto."</div>
            <div class="aha-author">— T. Harv Eker</div>
            <div class="aha-body">Los pobres operan con un vocabulario de víctima sin darse cuenta. Cada queja sobre el clima, el tráfico, la economía o "este país" envía una señal al universo y a tu subconsciente: <em>"no tengo control"</em>. Y si no tienes control, no tienes poder. Y sin poder, no construyes riqueza. No es metafísica — es lógica del subconsciente.</div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor · LADE Germán Solís Muñoz</div>
                <div class="instructor-note-text">Este es <em>el</em> Archivo más importante. Si no instalas este, los otros 16 no sirven de nada. He visto consultores brillantes con cero patrimonio porque pasan el día quejándose del gobierno; y he visto taqueros sin estudios que en 10 años construyeron 3 propiedades porque <em>nunca culpan a nadie</em> de sus resultados. Toman acción, ajustan, vuelven a tomar acción. Ese es el Archivo #1 vivo.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>Los 3 idiomas del víctima</h3>
            <p>Eker identifica tres formas como el subconsciente del pobre se expresa. Aprende a detectarlas en ti mismo:</p>
            <ol class="concept-list">
                <li><strong>Culpar:</strong> el problema es del gobierno / del jefe / del cliente / de mi pareja / del clima / de la economía. <em>"Si no fuera por X, ya estaría rico"</em>.</li>
                <li><strong>Justificar:</strong> "lo que pasa es que en mi situación...", "es que con mi edad...", "es que en mi industria...". Justificar es darle razón a la pasividad.</li>
                <li><strong>Quejarse:</strong> "qué caro está todo", "ya no se puede vivir", "este país no avanza". Cada queja es una declaración de impotencia.</li>
            </ol>
            <p>Eker es categórico: <em>"Las quejas atraen mierda. Lo que enfocas, se expande. Si te enfocas en lo que está mal, sólo verás lo que está mal — y eso es lo que tendrás."</em></p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Dueña de cafetería, CDMX, 38 años</div>
            <div class="case-body">
                <p>Acudió a consultoría con el siguiente discurso: <em>"En CDMX no se puede tener un negocio rentable. Los impuestos te ahogan, los empleados no quieren trabajar, los clientes son volátiles, la pandemia nos arruinó."</em></p>
                <p>Hicimos un ejercicio simple: durante 14 días anotó cada queja sobre el negocio en una libreta. <strong>Resultado: 187 quejas registradas en 2 semanas.</strong> Promedio: 13 quejas diarias.</p>
                <p>El reto del Archivo #1 fue dejar de quejarse <em>durante 21 días seguidos</em>. Si caía, el contador volvía a cero. Le tomó 4 intentos. Al día 21 algo había cambiado: empezó a ver soluciones donde antes veía obstáculos. Subió precios 15%, despidió a 2 empleados problemáticos, lanzó un programa de fidelidad. <strong>En 4 meses, su utilidad mensual duplicó.</strong> El negocio era el mismo. La dueña no.</p>
            </div>
        </div>

        <div class="content-card tip">
            <h3>Concepto clave · La declaración del Archivo #1</h3>
            <p>Eker pide repetir esta declaración en voz alta, todos los días, con la mano en el corazón:</p>
            <div style="margin:14px 0;padding:20px;background:linear-gradient(135deg,#faf8f3,#fff8e1);border-radius:8px;text-align:center;font-family:'Playfair Display',serif;font-size:1.15em;color:#0a2540;line-height:1.5;border-left:4px solid #c9a961;">
                <strong>"Yo creo el nivel exacto de éxito financiero<br>que tengo en mi vida."</strong>
            </div>
            <p>Suena raro al principio. Suena ridículo. Eso es <em>justamente</em> el sonido de un patrón viejo siendo desafiado. Persiste 30 días.</p>
        </div>

        <div class="quiz-container" id="quiz_l5a">
            <div class="quiz-label">Pregunta 1 de 2</div>
            <div class="quiz-question">Según el Archivo de Riqueza #1, ¿cuáles son los 3 idiomas que delatan a la mentalidad de víctima?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l5a', this, false)">Pedir, exigir y reclamar</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l5a', this, true)">Culpar, justificar y quejarse</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l5a', this, false)">Soñar, planear y postergar</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l5a', this, false)">Ahorrar, gastar e invertir mal</div>
            </div>
            <div class="quiz-feedback" id="quiz_l5a_feedback"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>El reto de las 24 horas sin queja:</strong></p>
                <ol>
                    <li>Mañana al despertar, pon una liga elástica en tu muñeca.</li>
                    <li>Cada vez que te sorprendas culpando, justificando o quejándote, deslízate la liga al otro brazo.</li>
                    <li>Al final del día anota cuántas veces te cambiaste la liga.</li>
                    <li>Anota también <strong>una cosa que sí salió bien</strong> y por qué (tu mérito, no la suerte).</li>
                </ol>
                <p>Al día 21 de hacer esto, ya operas con un patrón distinto. Eker llama a este ejercicio "la liga de la responsabilidad" y es el primero que ordena instalar en todos sus seminarios.</p>
            </div>
        </div>

        <div class="content-card">
            <h3>El antídoto: la responsabilidad radical</h3>
            <p>Lo opuesto de la mentalidad de víctima no es el optimismo ingenuo. Es la <strong>responsabilidad radical</strong>: aceptar que tú generaste, atrajiste o permitiste todas las circunstancias de tu vida — incluso las que parecen ajenas.</p>
            <p>Eker advierte: esto NO es culparte a ti mismo. Es <em>responsabilizarte</em>, que es lo opuesto. La culpa paraliza; la responsabilidad libera. Si yo creé la situación, yo puedo cambiarla. Si me la hicieron, tengo que esperar a que el otro cambie — y eso nunca llega.</p>
        </div>

        <div class="quiz-container" id="quiz_l5b">
            <div class="quiz-label">Pregunta 2 de 2</div>
            <div class="quiz-question">¿Cuál es la diferencia clave entre "responsabilizarse" y "culparse a uno mismo", según el Archivo #1?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l5b', this, false)">Son sinónimos, ambas significan reconocer el error propio</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l5b', this, false)">Responsabilizarse es para el trabajo, culparse es para la vida personal</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l5b', this, true)">La culpa paraliza; la responsabilidad libera porque te devuelve el poder de cambiar</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l5b', this, false)">La responsabilidad es para los ricos; la culpa es de los pobres</div>
            </div>
            <div class="quiz-feedback" id="quiz_l5b_feedback"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Que la mentalidad de víctima se expresa con 3 idiomas: culpar, justificar y quejarse</li>
                <li>Que la responsabilidad radical es lo opuesto a la culpa — te devuelve el poder de cambiar</li>
                <li>Cómo aplicar el ejercicio de "la liga de la responsabilidad" durante 21 días seguidos</li>
                <li>La declaración diaria del Archivo #1: "Yo creo el nivel exacto de éxito financiero que tengo en mi vida"</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 6 (Archivo #2)</strong> veremos por qué los pobres juegan al juego del dinero a la defensiva, y los ricos a la ofensiva.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIONES 6-21 — ARCHIVOS #2 al #17 (ESQUELETOS)
    // ==========================================================
    {
        id: 'l6', module: 'Módulo II · Archivo #2', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #2',
        title: '"Jugar para ganar" vs. "Jugar para no perder"',
        subtitle: 'Por qué los pobres juegan a la defensiva — y eso garantiza que nunca acumulen riqueza',
        content: `<div class="content-card under-construction"><h3>🚧 Lección en construcción</h3><p>Esta lección está siendo redactada con el mismo nivel de profundidad que la Lección 5 (muestra). Vuelve pronto.</p></div>`
    },
    {
        id: 'l7', module: 'Módulo II · Archivo #3', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #3',
        title: '"Comprometerse a ser rico" vs. "Desear ser rico"',
        subtitle: 'La diferencia entre querer algo y comprometerse — y por qué eso explica los resultados',
        content: `<div class="content-card under-construction"><h3>🚧 Lección en construcción</h3></div>`
    },
    {
        id: 'l8', module: 'Módulo II · Archivo #4', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #4',
        title: '"Pensar en grande" vs. "Pensar en pequeño"',
        subtitle: 'La Ley de los Ingresos: cuánta gente quieres servir y cómo se traduce en tu cheque',
        content: `<div class="content-card under-construction"><h3>🚧 Lección en construcción</h3></div>`
    },
    {
        id: 'l9', module: 'Módulo II · Archivo #5', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #5',
        title: 'Oportunidades vs. obstáculos',
        subtitle: 'Mismo paisaje, ojos distintos: por qué unos ven recompensas y otros ven riesgos',
        content: `<div class="content-card under-construction"><h3>🚧 Lección en construcción</h3></div>`
    },
    {
        id: 'l10', module: 'Módulo II · Archivo #6', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #6',
        title: 'Admirar a los ricos vs. resentirlos',
        subtitle: 'Lo que criticas, te aleja. Lo que admiras, te acerca. Por qué.',
        content: `<div class="content-card under-construction"><h3>🚧 Lección en construcción</h3></div>`
    },
    {
        id: 'l11', module: 'Módulo II · Archivo #7', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #7',
        title: 'Rodearse de gente positiva y exitosa',
        subtitle: 'Promedio de tus 5 amigos cercanos = tu vida en 5 años. Cómo curar tu círculo.',
        content: `<div class="content-card under-construction"><h3>🚧 Lección en construcción</h3></div>`
    },
    {
        id: 'l12', module: 'Módulo II · Archivo #8', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #8',
        title: 'Disposición a promocionarse',
        subtitle: 'Por qué los ricos venden sin pudor y los pobres consideran que "vender es vulgar"',
        content: `<div class="content-card under-construction"><h3>🚧 Lección en construcción</h3></div>`
    },
    {
        id: 'l13', module: 'Módulo II · Archivo #9', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #9',
        title: 'Ser más grande que tus problemas',
        subtitle: 'La fórmula de Eker: nunca cambies el problema — cambia el tamaño de quien lo enfrenta',
        content: `<div class="content-card under-construction"><h3>🚧 Lección en construcción</h3></div>`
    },
    {
        id: 'l14', module: 'Módulo II · Archivo #10', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #10',
        title: 'Saber recibir',
        subtitle: 'La razón #1 por la que la gente no alcanza su potencial económico, según Eker',
        content: `<div class="content-card under-construction"><h3>🚧 Lección en construcción</h3></div>`
    },
    {
        id: 'l15', module: 'Módulo II · Archivo #11', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #11',
        title: 'Cobrar por resultados vs. cobrar por horas',
        subtitle: 'Jamás pongas techo a tus ingresos: la trampa del sueldo fijo',
        content: `<div class="content-card under-construction"><h3>🚧 Lección en construcción</h3></div>`
    },
    {
        id: 'l16', module: 'Módulo II · Archivo #12', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #12',
        title: 'Pensar "ambos/y" vs. "uno u otro"',
        subtitle: 'Salir de la escasez: cómo entrenarte para ver opciones donde otros ven dilemas',
        content: `<div class="content-card under-construction"><h3>🚧 Lección en construcción</h3></div>`
    },
    {
        id: 'l17', module: 'Módulo II · Archivo #13', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #13',
        title: 'Fortuna neta vs. ingresos del trabajo',
        subtitle: 'La pregunta que distingue a los ricos: "¿Cuál es tu fortuna neta?" — no "¿Cuánto ganas?"',
        content: `<div class="content-card under-construction"><h3>🚧 Lección en construcción</h3></div>`
    },
    {
        id: 'l18', module: 'Módulo II · Archivo #14', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #14',
        title: 'Administrar bien tu dinero',
        subtitle: 'El sistema de las 6 cuentas: FIN, LP, EDU, JUE, GIV, NEC. Cómo abrir y operarlas',
        content: `<div class="content-card under-construction"><h3>🚧 Lección en construcción</h3></div>`
    },
    {
        id: 'l19', module: 'Módulo II · Archivo #15', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #15',
        title: 'Tu dinero trabaja para ti, no al revés',
        subtitle: 'Ingresos pasivos: cómo construir el primer flujo que no depende de tu tiempo',
        content: `<div class="content-card under-construction"><h3>🚧 Lección en construcción</h3></div>`
    },
    {
        id: 'l20', module: 'Módulo II · Archivo #16', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #16',
        title: 'Actuar a pesar del miedo',
        subtitle: 'Los ricos no son valientes. Son personas con miedo que actúan de todos modos.',
        content: `<div class="content-card under-construction"><h3>🚧 Lección en construcción</h3></div>`
    },
    {
        id: 'l21', module: 'Módulo II · Archivo #17', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #17',
        title: 'Aprender y crecer constantemente',
        subtitle: 'Las tres palabras más peligrosas según Eker: "Ya lo sé"',
        content: `<div class="content-card under-construction"><h3>🚧 Lección en construcción</h3></div>`
    },

    // ==========================================================
    // LECCIÓN 22 — CIERRE + EXAMEN FINAL
    // ==========================================================
    {
        id: 'l22', module: 'Cierre', tag: 'tag-final', tagLabel: 'EXAMEN FINAL',
        title: 'Integración y examen final',
        subtitle: '15 preguntas que demuestran tu dominio de los 17 Archivos de Riqueza',
        content: `<div class="content-card under-construction"><h3>🚧 Examen en construcción</h3><p>El examen final se construirá una vez aprobadas las lecciones de muestra.</p></div>`
    },

    // ==========================================================
    // LECCIÓN 23 — CERTIFICADO
    // ==========================================================
    {
        id: 'l23', module: 'Certificado', tag: 'tag-cert', tagLabel: 'CERTIFICADO',
        title: '¡Felicidades! Has terminado el curso',
        subtitle: 'Descarga tu certificado TRIKLES',
        content: `<div class="content-card under-construction"><h3>🚧 Pantalla de certificado en construcción</h3></div>`
    }

    ] // fin lessons
};

// Registro global (igual que los demás cursos)
if (typeof window !== 'undefined') {
    window.COURSE_MENTE_MILLONARIA = COURSE_MENTE_MILLONARIA;
    window.TRIKLES_COURSES = window.TRIKLES_COURSES || {};
    window.TRIKLES_COURSES['mente-millonaria'] = COURSE_MENTE_MILLONARIA;
}
