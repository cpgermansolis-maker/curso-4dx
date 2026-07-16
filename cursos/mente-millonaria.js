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
        cover: 'assets/covers/mente-millonaria.svg',
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

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO · T. HARV EKER</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/OD2oebWHgR0?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="T. Harv Eker en español - ¿Quién es?"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">¿Quién es T. Harv Eker? Conoce al autor que inspiró este curso (canal Eres Rico)</div>
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
            <div class="quiz-feedback" id="quiz_intro_fb"></div>
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
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">Tu programación lleva a tus pensamientos; éstos a tus sentimientos; tus sentimientos, a tus acciones; y tus acciones, a tus resultados.</div>
            <div class="pq-author">— T. Harv Eker, Fórmula del Manifiesto corregida</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué es exactamente un "patrón financiero" y por qué se llama así</li>
                <li>La fórmula completa de Eker: Programación → Pensamientos → Sentimientos → Acciones → Resultados</li>
                <li>El caso de Stephen: $800,000 al año, fortuna neta cero. Por qué.</li>
                <li>Cómo aplicar el primer auto-diagnóstico de tu termostato</li>
            </ul>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/pHY6FX3oJjc?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Los Secretos de la Mente Millonaria - Aldea Financiera"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Resumen del concepto de patrón financiero (canal Aldea Financiera)</div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA IDEA QUE LO EXPLICA TODO</div>
            <div class="aha-quote">"Cuando el subconsciente debe elegir entre emociones profundamente arraigadas y la lógica, casi siempre ganan las primeras."</div>
            <div class="aha-author">— T. Harv Eker · Principio de Riqueza</div>
            <div class="aha-body">Por eso saber qué hacer no basta. Por eso miles de cursos financieros no producen ricos. La lógica sabe lo correcto. La emoción ejecuta. Y la emoción viene del patrón. El curso entero existe para reprogramar la emoción — porque la lógica ya la tienes.</div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128176;</span><div>
                <h3>El caso Stephen: $800,000 al año, fortuna neta cero</h3>
                <p>Stephen llegó al Seminario Intensivo Mente Millonaria de Eker ganando <strong>$800,000 dólares al año durante 9 años</strong>. Pese a ello, vivía endeudado. Gastaba, prestaba o perdía cada dólar en malas inversiones. Su fortuna neta era exactamente cero.</p>
                <p>Su madre repetía cuando él era niño: <em>"Los ricos son avariciosos y mezquinos. Su dinero sale del sudor de los pobres. Se debería tener sólo lo suficiente para ir tirando. Si tienes más, eres un cerdo."</em></p>
                <p>Conclusión de Eker: el subconsciente de Stephen había aprendido que <strong>rico = avaricioso = cerdo = malo</strong>. Y como Stephen amaba a su madre y no quería decepcionarla, su subconsciente saboteaba cada acumulación. Cambió cuando Eker le ayudó a entender que esas creencias eran de su madre, no suyas. <strong>En 2 años, de cero a millonario.</strong></p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>Qué es exactamente tu patrón financiero</h3>
            <p>Tu patrón financiero (Eker lo llama <em>blueprint</em> en inglés) es el <strong>conjunto de creencias inconscientes sobre el dinero</strong> que opera como un termostato:</p>
            <ul>
                <li>Sube tu ingreso hasta cierto punto y baja la temperatura — empiezas a auto-sabotearte.</li>
                <li>Baja tu ingreso por debajo del nivel cómodo y sube la temperatura — actúas para recuperarlo.</li>
                <li>El termostato no sabe distinguir entre $30,000 al mes y $300,000 al mes. Solo conoce <strong>tu nivel calibrado</strong>.</li>
            </ul>
            <p>Por eso ganadores de la lotería terminan quebrados (su termostato no soporta tanto dinero) y millonarios que pierden todo se recuperan rápido (su termostato sí soporta).</p>
        </div>

        <div class="content-card tip">
            <h3>Concepto clave · Los 3 canales de programación</h3>
            <p>Tu patrón financiero quedó instalado por 3 canales — todos antes de los 7 años:</p>
            <ol class="concept-list">
                <li><strong>Programación verbal:</strong> lo que <em>oíste</em> sobre el dinero (lección 2)</li>
                <li><strong>Modelaje:</strong> lo que <em>viste</em> hacer a tus padres con el dinero (lección 3)</li>
                <li><strong>Incidentes específicos:</strong> lo que <em>experimentaste</em> directamente (lección 4)</li>
            </ol>
            <p>Las próximas 3 lecciones te llevarán de la mano por cada canal con un ejercicio práctico para desenterrar tu programación específica.</p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Ingeniera, 35 años, CDMX</div>
            <div class="case-body">
                <p>Salario formal: $45,000 al mes. Cada vez que la promovían y subía a $52,000, en menos de 6 meses cambiaba de empleo a uno que pagaba… $45,000. Decía: <em>"No me gustó el ambiente"</em> o <em>"el viaje era muy pesado"</em>. Cuatro empleos en 5 años, mismo techo.</p>
                <p>En consultoría rastreamos la programación: su padre, profesor de secundaria, repetía en voz baja a su esposa: <em>"Quien gana mucho, gana mal."</em> El termostato de la ingeniera estaba calibrado: arriba de $45-50K = "gano mal" = inconscientemente repelente. El cuerpo "encuentra" razones para regresar.</p>
                <p>Una vez identificado el patrón verbal, hizo el ejercicio de disociación (lección 4) y aceptó un puesto de $68,000. Ya lleva 14 meses ahí, sin renunciar.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l1a">
            <div class="quiz-label">Pregunta 1 de 2</div>
            <div class="quiz-question">¿Cuál es la fórmula del manifiesto CORREGIDA de Eker?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l1a', this, false)">Pensamientos → Sentimientos → Acciones → Resultados</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l1a', this, true)">Programación → Pensamientos → Sentimientos → Acciones → Resultados</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l1a', this, false)">Educación → Esfuerzo → Suerte → Resultados</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l1a', this, false)">Acción → Reflexión → Aprendizaje → Resultados</div>
            </div>
            <div class="quiz-feedback" id="quiz_l1a_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Auto-diagnóstico de tu termostato (10 minutos):</strong></p>
                <ol>
                    <li>Pregúntate: en los últimos 5 años, ¿en qué rango ha oscilado mi ingreso mensual?</li>
                    <li>¿Cada vez que subo, algo "me pasa" para regresar? (cliente que se va, gasto inesperado, oportunidad que se cae)</li>
                    <li>¿Cuál es el techo emocional con el que NO te sientes "raro" recibiendo dinero?</li>
                    <li>Escribe ese número. Es tu calibración actual.</li>
                </ol>
                <p>No intentes cambiarlo todavía. <strong>Solo obsérvalo.</strong> Las próximas 3 lecciones te dan las herramientas.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l1b">
            <div class="quiz-label">Pregunta 2 de 2</div>
            <div class="quiz-question">En el caso Stephen, ¿por qué un hombre que ganaba $800K al año tenía fortuna neta cero?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l1b', this, false)">Porque tenía mala suerte con sus inversiones</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l1b', this, false)">Porque era un mal administrador por naturaleza</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l1b', this, true)">Porque su patrón heredado decía "rico = cerdo" y su subconsciente saboteaba para no decepcionar a su madre</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l1b', this, false)">Porque no había leído los libros correctos</div>
            </div>
            <div class="quiz-feedback" id="quiz_l1b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Que tu patrón financiero es un termostato subconsciente, no una decisión consciente</li>
                <li>Que la emoción gana a la lógica casi siempre — por eso saber no basta</li>
                <li>Que se programó por 3 canales: verbal, modelaje, incidentes</li>
                <li>Cuál es tu nivel actual calibrado (lo escribiste en el ejercicio 24h)</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 2</strong> exploramos el primer canal — la programación verbal. Vas a desenterrar las frases exactas que oíste sobre el dinero antes de los 7 años.</div>
        </div>
        `
    },
    {
        id: 'l2', module: 'Módulo I · Tu plano financiero', tag: 'tag-modulo1', tagLabel: 'MÓDULO I',
        title: 'Programación verbal: lo que oíste de niño',
        subtitle: 'Las frases sobre dinero que tus padres repetían — y que tu subconsciente sigue obedeciendo',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">Todas las afirmaciones que oíste sobre el dinero cuando eras niño permanecen en tu subconsciente como parte del patrón que está rigiendo tu vida económica.</div>
            <div class="pq-author">— T. Harv Eker · Primera Influencia</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Las 15 frases tóxicas sobre el dinero más comunes (literales del libro de Eker)</li>
                <li>Cómo identificar las TUYAS específicas — no las genéricas</li>
                <li>Por qué la lógica adulta no las anula automáticamente</li>
                <li>El ejercicio del "Inventario verbal de la infancia"</li>
            </ul>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/cj-k2sQXcds?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Mente Millonaria - Resumen animado"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Resumen animado del libro — incluye programación de infancia (canal El Camino Del Networker)</div>
        </div>

        <div class="content-card warning">
            <h3>⚠️ Las 15 frases tóxicas (literales del libro)</h3>
            <p>Eker lista las frases más comunes que dañan el patrón financiero desde la infancia. Lee con calma. Marca mentalmente cuáles oíste alguna vez:</p>
            <ul>
                <li>"El dinero es el origen de todos los males"</li>
                <li>"Los ricos son avariciosos y mezquinos"</li>
                <li>"Los ricos son malvados / corruptos"</li>
                <li>"Está podrido de dinero"</li>
                <li>"Para juntar algún dinero tienes que matarte trabajando"</li>
                <li>"El dinero no crece en los árboles"</li>
                <li>"No puedes ser rico y espiritual"</li>
                <li>"La felicidad no se compra"</li>
                <li>"Los ricos son cada vez más ricos y los pobres cada vez más pobres"</li>
                <li>"No todo el mundo puede ser rico"</li>
                <li>"Nunca se puede llegar a todo"</li>
                <li>"Eso no es para nosotros"</li>
                <li>"¿De qué estoy hecho yo, de dinero?"</li>
                <li>"El dinero no alcanza"</li>
                <li>"Hay que ser realista"</li>
            </ul>
            <p>Si marcaste 3 o más, hay programación verbal instalada. <em>(Casi todo el mundo marca 5+).</em></p>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL EXPERIMENTO DE JESSE</div>
            <div class="aha-quote">"Mi hijo Jesse, de 3 años, vino corriendo y me dijo nervioso: 'Papi, vamos a ver la película de las Tortugas Ninja. La ponen muy cerca de casa'."</div>
            <div class="aha-author">— T. Harv Eker</div>
            <div class="aha-body">Eker no podía imaginar cómo su hijo de 3 años conocía la ubicación del cine. Horas después vio el anuncio en TV — terminaba con el eslogan: <em>"Ya puedes verla en un cine muy cerca de tu casa"</em>. Un niño de 3 años, sin razonamiento crítico, absorbió esa frase como si fuera información factual. <strong>Así absorbiste tú las frases sobre el dinero antes de los 7 años. Sin filtro.</strong></div>
        </div>

        <div class="content-card">
            <h3>Por qué la lógica adulta no las anula</h3>
            <p>Te puedes decir, racionalmente: <em>"yo sé que ser rico no es malo, eso es ridículo"</em>. Y aún así, cuando llega el dinero, lo gastas, lo prestas o lo pierdes. ¿Por qué?</p>
            <p>Porque las frases se grabaron <strong>antes de que tuvieras pensamiento crítico</strong>. Tu cerebro infantil las archivó como hechos, no como opiniones. Y los hechos no se discuten conscientemente: simplemente operan.</p>
            <p>La única forma de desactivarlas es <em>traerlas a consciencia</em> (esta lección), <em>entender de dónde vienen</em> (lección 3), <em>disociarse de ellas</em> (lección 4) y <em>reacondicionar</em> (lecciones del Módulo II). La lógica sola no funciona.</p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Contador, 41 años, Puebla</div>
            <div class="case-body">
                <p>Llegó a consultoría diciendo: <em>"No sé qué me pasa con el dinero. Cada vez que me lo dan, me lo gasto en cosas que ni necesito. Como si me quemara en las manos."</em></p>
                <p>Hicimos el inventario verbal. Su abuela, con quien creció, repetía: <em>"El dinero se hizo para gastarse — si lo guardas, se pudre."</em> Esa frase, instalada antes de los 5 años, operaba como instrucción literal: dinero ahorrado = problema. Por eso lo gastaba en cuanto entraba.</p>
                <p>Después de identificar la frase, la formuló al revés: <em>"El dinero crece cuando descansa."</em> Repetida diariamente durante 60 días + el sistema de las 6 cuentas (lección 18) = ahorró $24,000 en un año por primera vez en su vida.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l2a">
            <div class="quiz-label">Pregunta 1 de 2</div>
            <div class="quiz-question">Según Eker, ¿por qué las frases de la infancia siguen operando aunque sepamos que son falsas?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l2a', this, false)">Porque los padres tienen autoridad moral permanente sobre nosotros</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l2a', this, true)">Porque se grabaron antes de que tuviéramos pensamiento crítico y el cerebro las archivó como hechos, no opiniones</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l2a', this, false)">Porque genéticamente heredamos las creencias</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l2a', this, false)">Porque la cultura latinoamericana las refuerza socialmente</div>
            </div>
            <div class="quiz-feedback" id="quiz_l2a_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Inventario Verbal de la Infancia (15 minutos):</strong></p>
                <ol>
                    <li>Toma una hoja y escribe arriba: <em>"Lo que oía sobre el dinero antes de los 12 años"</em></li>
                    <li>Anota TODAS las frases que recuerdes — de mamá, papá, abuelos, tíos. No filtres, no juzgues.</li>
                    <li>Lee la lista en voz alta. Subraya las 3 frases que <em>todavía sientes verdaderas</em>, aunque tu adulto sepa que no.</li>
                    <li>Esas 3 son tu programación principal. Guarda la hoja.</li>
                </ol>
                <p>En la <strong>lección 4</strong> usaremos esta hoja para hacer el ejercicio de disociación de Eker.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l2b">
            <div class="quiz-label">Pregunta 2 de 2</div>
            <div class="quiz-question">¿Cuántas de las 15 frases tóxicas listadas oye alguien que no recibió programación negativa?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l2b', this, false)">Las 15, todo el mundo crece igual</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l2b', this, false)">8 a 10 en promedio</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l2b', this, false)">3 a 5 — depende del país</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l2b', this, true)">Casi nadie marca menos de 5 — la mayoría marca 5 o más</div>
            </div>
            <div class="quiz-feedback" id="quiz_l2b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Las 15 frases tóxicas más comunes (literales del libro de Eker)</li>
                <li>Cuáles oíste tú y cuáles siguen operando en ti</li>
                <li>Por qué la lógica adulta no las apaga automáticamente</li>
                <li>Tu inventario verbal completo (lo escribiste, lo tienes en papel)</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 3</strong> exploramos el segundo canal: el modelaje. No es lo que te dijeron, sino lo que viste hacer.</div>
        </div>
        `
    },
    {
        id: 'l3', module: 'Módulo I · Tu plano financiero', tag: 'tag-modulo1', tagLabel: 'MÓDULO I',
        title: 'Modelaje: lo que viste hacer con el dinero',
        subtitle: 'Tus padres como modelo financiero — para imitarlos o para rebelarte (y por qué ambas cosas te atrapan)',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">La mayoría se convierte financieramente en uno de sus padres, o en el opuesto exacto. Ninguno de los dos resultados es libertad.</div>
            <div class="pq-author">— T. Harv Eker · Segunda Influencia</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Las 4 grandes categorías de "modelo financiero parental" (gastador, ahorrador, evasor, monje)</li>
                <li>Por qué rebelarse contra el modelo NO te libera — solo invierte el problema</li>
                <li>Cómo identificar cuál modelaste tú: el de tu papá, el de tu mamá, o un híbrido</li>
                <li>El ejercicio de "Mapa de modelos" en 8 minutos</li>
            </ul>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/Hv_B46zpbHs?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="¿Quién es T. Harv Eker?"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">La historia familiar de Eker — cómo modeló a su padre y luego se rebeló (canal Ley De Atracción)</div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA TRAMPA DE LA REBELDÍA</div>
            <div class="aha-quote">"Rebelarse contra el modelo de tus padres NO es libertad — sigues siendo definido por ellos, solo que en negativo."</div>
            <div class="aha-author">— Síntesis de la enseñanza de Eker</div>
            <div class="aha-body">Si tu papá fue avaro y tú gastas como pirata: <strong>no eres libre, eres el opuesto reactivo</strong>. Tu identidad financiera sigue construida ALREDEDOR de la suya. La verdadera libertad es <em>elegir conscientemente</em>, no automáticamente <em>contra él</em>. Y eso requiere ver el modelo con claridad — sin idealizar ni demonizar.</div>
        </div>

        <div class="rich-vs-poor">
            <div class="rvp-title">⚖️ LOS 4 MODELOS PARENTALES TÍPICOS</div>
            <div class="rvp-cols">
                <div class="rvp-rich">
                    <div class="rvp-tag">EL GASTADOR</div>
                    <div class="rvp-line">"El dinero es para disfrutarse hoy"</div>
                    <ul>
                        <li>Gasta en cuanto entra</li>
                        <li>Tiene deudas crónicas</li>
                        <li>Vive al día, regalos generosos</li>
                        <li>Hijos: aprenden a gastar O a temer al dinero</li>
                    </ul>
                </div>
                <div class="rvp-poor">
                    <div class="rvp-tag">EL AHORRADOR ANSIOSO</div>
                    <div class="rvp-line">"Hay que guardar para la vejez"</div>
                    <ul>
                        <li>Cuenta cada peso</li>
                        <li>Se priva incluso pudiendo</li>
                        <li>Acumula sin invertir</li>
                        <li>Hijos: heredan miedo o se rebelan al exceso</li>
                    </ul>
                </div>
            </div>
            <div class="rvp-cols" style="margin-top:14px;">
                <div class="rvp-rich">
                    <div class="rvp-tag">EL EVASOR</div>
                    <div class="rvp-line">"Mejor no hablar de dinero"</div>
                    <ul>
                        <li>Silencio total sobre finanzas</li>
                        <li>Discute con la pareja por dinero pero sin transparencia</li>
                        <li>No enseña a sus hijos</li>
                        <li>Hijos: crecen analfabetos financieros</li>
                    </ul>
                </div>
                <div class="rvp-poor">
                    <div class="rvp-tag">EL MONJE</div>
                    <div class="rvp-line">"El dinero corrompe"</div>
                    <ul>
                        <li>Desprecia explícitamente la riqueza</li>
                        <li>Hace voto implícito de pobreza</li>
                        <li>Critica a los ricos</li>
                        <li>Hijos: culpa al acumular, autosabotaje</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="content-card">
            <h3>Tu mapa: imitación, oposición o herencia mixta</h3>
            <p>Cuando observas tu propia relación con el dinero, una de tres cosas suele ocurrir:</p>
            <ol class="concept-list">
                <li><strong>Imitación directa:</strong> haces exactamente lo que tu padre/madre hacía. <em>"Soy igualito a mi mamá: no puedo ver dinero parado."</em></li>
                <li><strong>Oposición reactiva:</strong> haces exactamente lo OPUESTO. <em>"Mi papá nunca gastó en nada — yo soy el contrario, gasto en cuanto puedo."</em></li>
                <li><strong>Mixto:</strong> imitas a uno (típicamente del mismo género) y te opones al otro. <em>"Ahorro como mi papá pero gasto en cosas tontas como mi mamá."</em></li>
            </ol>
            <p>Las tres opciones tienen el mismo problema: <strong>no estás eligiendo conscientemente</strong>. Estás respondiendo a un guion que escribió otra persona hace 30 años.</p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Dentista, 39 años, Guadalajara</div>
            <div class="case-body">
                <p>Consultorio exitoso, $130,000 al mes. Pero: cero patrimonio acumulado. Cada peso entra y sale. Llegó diciendo: <em>"Soy lo opuesto a mi papá. Él era tacaño hasta lo absurdo — no compró un refrigerador en 20 años. Yo NO voy a vivir así."</em></p>
                <p>Diagnóstico: oposición reactiva pura. Su identidad financiera era <em>"no ser mi papá"</em>. El problema: no ser tu papá te lleva a ser su sombra invertida — gastas para demostrar que NO eres como él. Sigues atrapado.</p>
                <p>El ejercicio fue separar: ¿qué de tu papá realmente tiene sentido conservar (ahorrar parte) y qué descartar (la obsesión por no gastar nada)? Una vez separados, dejó de gastar reactivamente y empezó a invertir. En 18 meses construyó su primer fondo de emergencia.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l3a">
            <div class="quiz-label">Pregunta 1 de 2</div>
            <div class="quiz-question">Según Eker, ¿por qué rebelarse contra el modelo financiero de tus padres NO te libera?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l3a', this, false)">Porque los genes son más fuertes que la voluntad</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l3a', this, true)">Porque tu identidad sigue construida alrededor de la suya, solo que en negativo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l3a', this, false)">Porque la cultura te obliga a regresar al modelo familiar</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l3a', this, false)">No es cierto — rebelarse SÍ libera, según Eker</div>
            </div>
            <div class="quiz-feedback" id="quiz_l3a_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Mapa de Modelos (8 minutos):</strong></p>
                <ol>
                    <li>Anota: ¿en qué categoría caía tu PAPÁ? (gastador, ahorrador, evasor, monje, mixto)</li>
                    <li>¿En qué categoría caía tu MAMÁ?</li>
                    <li>¿En cuál cae tu pareja actual (si aplica)?</li>
                    <li>¿En cuál caes TÚ HOY?</li>
                    <li>¿Imitación, oposición o mezcla?</li>
                </ol>
                <p>No buscamos cambiarlo todavía — solo verlo con claridad sin idealizar ni demonizar.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l3b">
            <div class="quiz-label">Pregunta 2 de 2</div>
            <div class="quiz-question">¿Cuál de estas tres opciones es la verdadera libertad financiera respecto al modelo parental?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l3b', this, false)">Imitar al padre/madre exitoso</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l3b', this, false)">Ser exactamente lo opuesto a ambos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l3b', this, true)">Elegir conscientemente qué conservar y qué descartar, sin idealizar ni demonizar</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l3b', this, false)">Mezclar lo mejor de cada uno automáticamente</div>
            </div>
            <div class="quiz-feedback" id="quiz_l3b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Las 4 categorías típicas de modelo parental (gastador, ahorrador, evasor, monje)</li>
                <li>Las 3 respuestas posibles: imitación, oposición, mezcla — todas no-libres</li>
                <li>En cuál caes tú HOY y por qué</li>
                <li>Que la libertad es elección consciente, no rebeldía</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 4</strong> cerramos el Módulo I con el tercer canal: incidentes específicos. Y aprendes las 4 estrategias de Eker para reprogramarte.</div>
        </div>
        `
    },
    {
        id: 'l4', module: 'Módulo I · Tu plano financiero', tag: 'tag-modulo1', tagLabel: 'MÓDULO I',
        title: 'Incidentes específicos y los 4 pasos para reprogramarte',
        subtitle: 'Los eventos puntuales que dejaron huella + el método de Eker: conciencia, comprensión, disociación, reacondicionamiento',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">No puedes cambiar lo que no ves. La conciencia es el primer paso — sin ella, los otros tres no existen.</div>
            <div class="pq-author">— T. Harv Eker · Las 4 estrategias para reprogramar</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué son los "incidentes específicos" y por qué pesan más que mil frases</li>
                <li>Las 4 estrategias de Eker para reprogramar tu patrón: Conciencia → Comprensión → Disociación → Reacondicionamiento</li>
                <li>Por qué saltarse cualquiera de los 4 pasos vuelve permanente el sabotaje</li>
                <li>El ejercicio integral del Módulo I (cierra los 3 canales)</li>
            </ul>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/t1UUx-6Hvj4?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Mente Millonaria - Resumen Animado"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Resumen animado con las 4 estrategias de reprogramación (canal Visual Ananda)</div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#127942;</span><div>
                <h3>Qué es un "incidente específico"</h3>
                <p>Un incidente específico es un <strong>evento único y emocionalmente cargado</strong> que se quedó grabado como verdad universal sobre el dinero. Ejemplos clásicos:</p>
                <ul>
                    <li>"Mi padre perdió todo cuando yo tenía 9 años. Vi a mi madre llorar 3 noches seguidas."</li>
                    <li>"En la primaria me humillaron porque mi mamá no pudo pagar la excursión."</li>
                    <li>"Mis papás se divorciaron y todos decían que era por dinero."</li>
                    <li>"Un familiar rico se aprovechó de mi mamá viuda. Aprendí que rico = abusador."</li>
                </ul>
                <p>Estos incidentes pesan más que mil frases porque vienen <em>con carga emocional</em>. Y el cerebro almacena experiencias emocionales con prioridad. Por eso un solo evento traumático puede dictar 40 años de comportamiento.</p>
            </div></div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LAS 4 ESTRATEGIAS DE EKER (EN ORDEN ESTRICTO)</div>
            <div class="aha-quote">"Cada paso requiere el anterior. No puedes desinstalar lo que no ves, ni cambiar lo que no entiendes."</div>
            <div class="aha-author">— T. Harv Eker</div>
            <div class="aha-body">Eker no inventó la psicología — pero estructuró un proceso reproducible con 4 fases:</div>
            <ol style="margin-top:12px;padding-left:20px;">
                <li><strong>Conciencia:</strong> identificar la creencia/frase/incidente específico que opera (lecciones 2-3 ya te lo dieron).</li>
                <li><strong>Comprensión:</strong> entender de dónde viene, quién te la dio, por qué tenía sentido para esa persona en ese contexto.</li>
                <li><strong>Disociación:</strong> reconocer que <em>esa creencia NO es tuya — era de tu mamá / papá / abuela</em>. Tú simplemente la heredaste sin elegirla.</li>
                <li><strong>Reacondicionamiento:</strong> instalar deliberadamente una creencia nueva. Aquí entran los 17 Archivos del Módulo II.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>El paso 3 (disociación) es donde casi todos fallan</h3>
            <p>La conciencia es fácil — basta una libreta. La comprensión también — entender por qué tu mamá creía X requiere empatía, pero es manejable. El reacondicionamiento (paso 4) la mayoría sabe hacerlo con afirmaciones.</p>
            <p>El paso 3, la <strong>disociación</strong>, es donde el método se cae para casi todos. Porque disociarte de una creencia heredada implica decir, explícitamente:</p>
            <div style="margin:14px 0;padding:18px;background:#fff8e1;border-left:4px solid #c9a961;border-radius:6px;font-style:italic;color:#5a4a1f;">
                <strong>"Esto que pienso sobre el dinero no es mío. Es de mi madre. Era de ella en su contexto y tenía sentido para su vida. Yo la honro y la respeto, Y elijo no cargar esto. Es de ella. La devuelvo."</strong>
            </div>
            <p>Decir eso en voz alta —incluso solos— activa un mecanismo emocional que la mente racional sola no logra. Eker insiste: <em>"hazlo aunque te sientas ridículo. La ridiculez es la sensación exacta de un patrón viejo siendo desafiado."</em></p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Pequeña empresaria, 44 años, Querétaro</div>
            <div class="case-body">
                <p>Llevaba 3 años "intentando ahorrar" sin lograrlo. Conocía los 4 pasos del método de Eker pero solo aplicaba los pasos 1, 2 y 4 — leía afirmaciones diarias. No funcionaba.</p>
                <p>El incidente: a los 11 años, su abuelo le quitó su alcancía rota porque "los niños no necesitan dinero, eso es de adultos." Lloró durante una semana. La creencia instalada: <em>"el dinero no es para mí, alguien me lo quitará."</em></p>
                <p>El paso 3 (disociación) en voz alta — <em>"Esa creencia es de mi abuelo. Era de su época. La honro y la devuelvo. El dinero es para mí"</em> — repetido 30 días lo desbloqueó. <strong>En 6 meses ahorró $48,000.</strong> Lo que no podía en 3 años, en 6 meses.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l4a">
            <div class="quiz-label">Pregunta 1 de 2</div>
            <div class="quiz-question">¿Cuál es el orden correcto de las 4 estrategias de Eker para reprogramar el patrón financiero?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l4a', this, false)">Comprensión → Conciencia → Reacondicionamiento → Disociación</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l4a', this, true)">Conciencia → Comprensión → Disociación → Reacondicionamiento</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l4a', this, false)">Reacondicionamiento → Conciencia → Comprensión → Disociación</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l4a', this, false)">Conciencia → Disociación → Comprensión → Reacondicionamiento</div>
            </div>
            <div class="quiz-feedback" id="quiz_l4a_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Ejercicio integrador del Módulo I (30 minutos):</strong></p>
                <ol>
                    <li>Toma tu inventario verbal (lección 2) y tu mapa de modelos (lección 3).</li>
                    <li>Anota: <em>"El incidente específico con dinero que más recuerdo de mi infancia es…"</em></li>
                    <li>De esos 3 ejercicios, identifica <strong>UNA creencia que claramente NO es tuya</strong>.</li>
                    <li>En voz alta, di: <em>"Esta creencia es de [nombre]. La honro y la devuelvo. Yo elijo lo contrario."</em></li>
                    <li>Repite ese ritual diariamente por 30 días. Apunta el ritual en tu calendario AHORA.</li>
                </ol>
                <p>Sin este paso, lo que sigue en el Módulo II queda en teoría bonita.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l4b">
            <div class="quiz-label">Pregunta 2 de 2</div>
            <div class="quiz-question">¿Por qué un incidente específico pesa más que mil frases verbales, según Eker?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l4b', this, false)">Porque ocurre con más frecuencia</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l4b', this, false)">Porque proviene de un adulto autorizado</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l4b', this, true)">Porque viene con carga emocional, y el cerebro prioriza experiencias emocionales sobre las solo verbales</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l4b', this, false)">Porque los incidentes son más recientes que las frases</div>
            </div>
            <div class="quiz-feedback" id="quiz_l4b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Qué son los incidentes específicos y por qué pesan más</li>
                <li>Las 4 estrategias de Eker en orden estricto (cualquier salto rompe el proceso)</li>
                <li>Por qué el paso 3 (disociación) es donde casi todos fallan</li>
                <li>Tu creencia heredada principal y el ritual diario para devolverla</li>
            </ul>
            <div class="okr-next">→ <strong>Fin del Módulo I.</strong> Ya completaste la base — sabes cuál es tu patrón actual y cómo desinstalarlo. En el <strong>Módulo II</strong> empezamos a INSTALAR los 17 Archivos de la Riqueza, empezando por el más fundamental de todos.</div>
        </div>
        `
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

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO · PRINCIPIOS DE RIQUEZA</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/mZNmz92ctiA?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Principios de Riqueza - T. Harv Eker en español"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">T. Harv Eker presenta sus Principios de Riqueza — el corazón de los 17 Archivos (canal DINERO D7)</div>
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
            <div class="quiz-feedback" id="quiz_l5a_fb"></div>
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
            <div class="quiz-feedback" id="quiz_l5b_fb"></div>
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
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">La gente rica juega al juego del dinero para ganar. La gente pobre juega para no perder.</div>
            <div class="pq-author">— T. Harv Eker · Archivo de Riqueza N.º 2</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>La diferencia entre objetivos defensivos y ofensivos con dinero</li>
                <li>Por qué "que me alcance" es la meta más peligrosa del mundo financiero</li>
                <li>La pregunta de Eker para diagnosticar tu modo actual (defensa u ofensa)</li>
                <li>Cómo reformular tu próxima meta económica en modo ofensivo</li>
            </ul>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/FpLllDhrK8E?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="10 Mejores Frases de T. Harv Eker"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Frases clave de Eker sobre mentalidad ofensiva (canal Diverdocus - Finanzas Personales)</div>
        </div>

        <div class="rich-vs-poor">
            <div class="rvp-title">⚖️ JUGADOR OFENSIVO vs. JUGADOR DEFENSIVO</div>
            <div class="rvp-cols">
                <div class="rvp-rich">
                    <div class="rvp-tag">💰 OFENSIVO</div>
                    <div class="rvp-line">"Voy a hacer $5M en patrimonio neto"</div>
                    <ul>
                        <li>Meta concreta y AMBICIOSA</li>
                        <li>Plazos definidos</li>
                        <li>Acciones específicas semanales</li>
                        <li>Mide patrimonio, no ingreso</li>
                    </ul>
                </div>
                <div class="rvp-poor">
                    <div class="rvp-tag">🪙 DEFENSIVO</div>
                    <div class="rvp-line">"Que me alcance para pagar todo"</div>
                    <ul>
                        <li>Meta vaga y modesta</li>
                        <li>Sin plazos ni medición</li>
                        <li>Foco en gastos, no en construir</li>
                        <li>Mide ingreso, gasta todo</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA PREGUNTA DIAGNÓSTICA</div>
            <div class="aha-quote">"Si te preguntan '¿cuál es tu objetivo financiero?', ¿respondes con un número grande y específico, o con palabras suaves como 'estar tranquilo' y 'que no falte nada'?"</div>
            <div class="aha-author">— Adaptado de T. Harv Eker</div>
            <div class="aha-body">Si tu respuesta es <em>"estar tranquilo"</em>, juegas a no perder. <strong>Y al juego de no perder, no se gana — solo se sobrevive.</strong> Toda persona que ha acumulado patrimonio responde con un número específico y una fecha. Los pobres responden con sentimientos.</div>
        </div>

        <div class="content-card">
            <h3>Por qué "que me alcance" es peligroso</h3>
            <p>"Que me alcance" suena humilde y prudente. En realidad es <strong>la meta más limitante posible</strong>:</p>
            <ul>
                <li>"Alcanzar" implica un piso — apenas cubrir lo necesario. El universo te entrega exactamente eso: lo justo, ni un peso más.</li>
                <li>No tienes margen para invertir, para acumular, para crear.</li>
                <li>Te programa la mente para vivir al borde de la insuficiencia. Y como aprendiste, lo que enfocas se expande.</li>
            </ul>
            <p>La ofensiva en cambio define un número, una fecha, y una identidad: <em>"voy a tener $X de patrimonio neto en Y años porque soy alguien que construye riqueza"</em>.</p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Pareja, 32 y 34 años, CDMX</div>
            <div class="case-body">
                <p>Ingreso combinado: $95,000/mes. Cuando les preguntamos su meta: <em>"Que nos alcance para pagar la renta y de vez en cuando algo extra."</em> Llevaban 4 años así. Cero ahorro.</p>
                <p>Ejercicio: reformular en modo ofensivo. Después de 90 minutos llegaron a: <em>"Patrimonio neto de $2,000,000 MXN para el 31 de diciembre de 2030."</em> Específico, con fecha, ambicioso.</p>
                <p>El cambio no fue de comportamiento inmediato — fue de identidad. Pasaron de <em>"somos una pareja que paga renta"</em> a <em>"somos una pareja que construye $2M para 2030"</em>. En 18 meses ya llevaban $310,000 ahorrados / invertidos. La meta cambió, los hábitos siguieron.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l6a">
            <div class="quiz-label">Pregunta 1 de 2</div>
            <div class="quiz-question">Según el Archivo #2 de Eker, ¿por qué "que me alcance" es una meta peligrosa?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l6a', this, false)">Porque es demasiado fácil de lograr y aburre</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l6a', this, true)">Porque programa la mente para vivir al borde de la suficiencia, sin margen para acumular</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l6a', this, false)">Porque genera ansiedad por la falta</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l6a', this, false)">Porque los expertos dicen que es mejor no tener metas</div>
            </div>
            <div class="quiz-feedback" id="quiz_l6a_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Reformula tu meta en modo ofensivo (12 minutos):</strong></p>
                <ol>
                    <li>Escribe tu meta financiera actual tal como la formularías a un amigo.</li>
                    <li>Subraya las palabras vagas (alcance, tranquilo, suficiente, decente, etc.).</li>
                    <li>Reformula con: NÚMERO específico + FECHA específica + tipo de medición (patrimonio neto, ingreso mensual, monto invertido, etc.).</li>
                    <li>Léela en voz alta. Si te suena ambiciosa pero alcanzable, está bien escrita.</li>
                </ol>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l6b">
            <div class="quiz-label">Pregunta 2 de 2</div>
            <div class="quiz-question">¿Cuál de estas metas está formulada en modo OFENSIVO según Eker?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l6b', this, false)">"Quiero estar tranquilo financieramente en algunos años"</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l6b', this, false)">"Quiero ganar más para vivir mejor"</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l6b', this, true)">"Quiero $1,500,000 MXN de patrimonio neto para diciembre de 2029"</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l6b', this, false)">"Quiero ahorrar lo suficiente para mi retiro"</div>
            </div>
            <div class="quiz-feedback" id="quiz_l6b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>La diferencia entre meta defensiva ("alcance") y ofensiva (número + fecha + tipo)</li>
                <li>Por qué "que me alcance" garantiza la mediocridad financiera</li>
                <li>Tu meta financiera reformulada en modo ofensivo (la escribiste)</li>
                <li>Que el cambio empieza en la formulación, no en la acción</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 7 (Archivo #3)</strong>: la diferencia entre <em>desear</em> y <em>comprometerse</em>. Por qué casi todos solo desean.</div>
        </div>
        `
    },
    {
        id: 'l7', module: 'Módulo II · Archivo #3', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #3',
        title: '"Comprometerse a ser rico" vs. "Desear ser rico"',
        subtitle: 'La diferencia entre querer algo y comprometerse — y por qué eso explica los resultados',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">La razón número uno por la que la mayoría de la gente no obtiene lo que quiere es que no sabe lo que quiere.</div>
            <div class="pq-author">— T. Harv Eker · Archivo de Riqueza N.º 3</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Los 10 mensajes contradictorios típicos que envías sin saberlo al universo sobre el dinero</li>
                <li>Por qué la "ambivalencia secreta" hacia la riqueza es el sabotaje más común</li>
                <li>La diferencia entre "deseo" y "compromiso": criterio de Eker</li>
                <li>Cómo escribir tu declaración de compromiso (no de deseo)</li>
            </ul>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/pA1Vz-WNwWk?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Los secretos de la mente millonaria - OwlCast"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">El compromiso vs. el deseo en la obra de Eker (canal OwlCast)</div>
        </div>

        <div class="content-card warning">
            <h3>⚠️ Los 10 mensajes contradictorios típicos (literales del libro)</h3>
            <p>Eker pide a sus alumnos enumerar los "aspectos negativos" que ellos mismos asocian con ser rico. Lee con honestidad:</p>
            <ul>
                <li>"¿Y si lo pierdo todo? Sería un fracasado."</li>
                <li>"Nunca sabré si gusto a la gente por mí o por mi dinero."</li>
                <li>"Pagaré la mitad en impuestos."</li>
                <li>"Es demasiado trabajo."</li>
                <li>"Mi salud se resentiría."</li>
                <li>"Mis amigos dirán '¿quién te crees que eres?'"</li>
                <li>"Todos van a querer que les dé dinero."</li>
                <li>"Podrían robarme."</li>
                <li>"Podrían secuestrar a mis hijos."</li>
                <li>"Es demasiada responsabilidad — contadores, abogados, inversiones, ¡vaya rollo!"</li>
            </ul>
            <p>Si marcaste 2 o más en silencio, <strong>tienes ambivalencia secreta</strong>. Y la ambivalencia es lo que cancela el compromiso.</p>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA METÁFORA DEL DEPARTAMENTO DE VENTAS</div>
            <div class="aha-quote">"El universo es un departamento de ventas por correo: te entrega lo que ordenas. Pero si en tu archivo hay mensajes contradictorios, no puede saber qué quieres."</div>
            <div class="aha-author">— T. Harv Eker</div>
            <div class="aha-body">Hoy ordenas <em>"quiero ser rico"</em>. Mañana piensas <em>"los ricos son insufribles"</em>. Pasado mañana sientes <em>"el dinero corrompe"</em>. El universo, mareado, te entrega lo que confirma todos los mensajes a la vez: <strong>una vida de oportunidades a medias y resultados a medias.</strong> El compromiso significa enviar UN solo mensaje, consistente, durante meses y años.</div>
        </div>

        <div class="content-card">
            <h3>Deseo vs. compromiso — el test de Eker</h3>
            <p>Eker propone una forma simple de distinguirlos:</p>
            <ul>
                <li><strong>Deseo:</strong> <em>"Me gustaría tener más dinero."</em> Pasivo. Condicional. Permite contradicciones.</li>
                <li><strong>Intención:</strong> <em>"Voy a tener más dinero."</em> Más fuerte. Hay dirección. Aún no garantiza.</li>
                <li><strong>Compromiso:</strong> <em>"Voy a tener $X para Y fecha. Haré lo que sea legal, moral y ético para lograrlo. Nadie va a pararme."</em> Absoluto. Sin escapes.</li>
            </ul>
            <p>El compromiso elimina el plan B. Y eso, paradójicamente, libera energía mental enorme. Mientras tengas plan B, parte de tu mente está reservándolo.</p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Vendedor de seguros, 28 años, Monterrey</div>
            <div class="case-body">
                <p>"Quería ser top-1 de su compañía pero llevaba 3 años empatado en el lugar 18. Decía: <em>'es que la zona que me tocó es difícil'</em> / <em>'es que mis clientes no compran lo grande'</em>. Cuando le preguntamos: <strong>¿estás 100% comprometido a ser top-1?</strong>, dudó. Confesó: <em>'no, porque si soy top-1 me van a envidiar y voy a perder amigos'</em>."</p>
                <p>Ese era el mensaje contradictorio. Una vez identificado, hizo un compromiso por escrito firmado: <em>"Seré top-3 de la compañía para diciembre 2026. Si pierdo amigos en el camino, no eran amigos. Estoy dispuesto a pagar ese precio."</em></p>
                <p>En 14 meses llegó a <strong>top-2</strong>. Cuando le preguntamos qué cambió, respondió: <em>"nada que pudiera ver desde afuera. Lo que cambió fue que dejé de hacerme el bobo conmigo mismo."</em></p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l7a">
            <div class="quiz-label">Pregunta 1 de 2</div>
            <div class="quiz-question">Según la metáfora del "departamento de ventas" de Eker, ¿qué pasa cuando envías mensajes contradictorios sobre el dinero?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l7a', this, false)">El universo elige el mensaje más reciente</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l7a', this, false)">No pasa nada — los mensajes se cancelan</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l7a', this, true)">El universo entrega una vida de oportunidades a medias y resultados a medias — confirmando todos los mensajes a la vez</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l7a', this, false)">El universo te castiga por indeciso</div>
            </div>
            <div class="quiz-feedback" id="quiz_l7a_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Tu Declaración de Compromiso (15 minutos):</strong></p>
                <ol>
                    <li>Toma tu meta reformulada de la lección anterior (número + fecha).</li>
                    <li>Escribe ahora una declaración de compromiso con esta estructura: <em>"Yo, [tu nombre], voy a tener [cantidad] de [tipo] para [fecha]. Haré lo que sea legal, moral y ético para lograrlo. No tengo plan B."</em></li>
                    <li>Fírmala. Ponla en algún lugar donde la veas diariamente.</li>
                    <li>Léela en voz alta cada mañana durante 30 días.</li>
                </ol>
                <p>El compromiso público (aunque sea solo contigo) cambia tu identidad. Y la identidad dicta las acciones.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l7b">
            <div class="quiz-label">Pregunta 2 de 2</div>
            <div class="quiz-question">¿Cuál es la diferencia clave entre "deseo" y "compromiso" según Eker?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l7b', this, false)">El deseo es emocional, el compromiso es racional</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l7b', this, true)">El compromiso elimina el plan B — el deseo permite contradicciones</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l7b', this, false)">El compromiso es para ricos, el deseo es para principiantes</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l7b', this, false)">Son sinónimos prácticamente</div>
            </div>
            <div class="quiz-feedback" id="quiz_l7b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Los 10 mensajes contradictorios típicos que generan ambivalencia secreta</li>
                <li>La metáfora del universo como departamento de ventas — y por qué necesita UN solo mensaje</li>
                <li>La diferencia entre deseo, intención y compromiso (3 niveles distintos)</li>
                <li>Tu declaración de compromiso firmada y visible</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 8 (Archivo #4)</strong>: por qué los ricos piensan en grande y la Ley de los Ingresos.</div>
        </div>
        `
    },
    {
        id: 'l8', module: 'Módulo II · Archivo #4', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #4',
        title: '"Pensar en grande" vs. "Pensar en pequeño"',
        subtitle: 'La Ley de los Ingresos: cuánta gente quieres servir y cómo se traduce en tu cheque',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">Se te pagará en proporción directa al valor de lo que tú das, según el mercado.</div>
            <div class="pq-author">— T. Harv Eker · Ley de los Ingresos</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>La Ley de los Ingresos completa de Eker (4 variables, no solo "trabaja más")</li>
                <li>Por qué los pobres se enfocan en horas y los ricos en escala</li>
                <li>La pregunta "¿a cuántos sirves?" como diagnóstico</li>
                <li>Cómo aplicarla a tu trabajo/negocio actual</li>
            </ul>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/kalRAwphKWM?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="T. Harv Eker - Aprender a ser financieramente libre"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Cómo pensar en grande según Eker (canal Tony Robbins en Español)</div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LAS 4 VARIABLES DE LA LEY DE INGRESOS</div>
            <div class="aha-quote">"Tu ingreso es el resultado matemático de: cuán bien lo haces × cuánto haces × a cuántos sirves × cuánto te paga el mercado por eso."</div>
            <div class="aha-author">— Síntesis de la enseñanza de Eker</div>
            <div class="aha-body">Los pobres solo pueden mover la variable <strong>cuánto haces</strong> (trabajar más horas). Los ricos juegan con las cuatro — especialmente <strong>a cuántos sirves</strong>, que es la única exponencial. Servir a 10 personas vs. 10,000 personas con la misma habilidad es la diferencia entre un sueldo y una fortuna.</div>
        </div>

        <div class="rich-vs-poor">
            <div class="rvp-title">⚖️ ESCALA DE PENSAMIENTO</div>
            <div class="rvp-cols">
                <div class="rvp-rich">
                    <div class="rvp-tag">PIENSA EN GRANDE</div>
                    <div class="rvp-line">"¿A cuántos puedo servir?"</div>
                    <ul>
                        <li>Pregunta por escala desde el inicio</li>
                        <li>Sistematiza para multiplicar</li>
                        <li>Apalancamiento: gente, tecnología, capital</li>
                        <li>Foco en valor entregado, no en horas</li>
                    </ul>
                </div>
                <div class="rvp-poor">
                    <div class="rvp-tag">PIENSA EN PEQUEÑO</div>
                    <div class="rvp-line">"¿Cuánto puedo trabajar?"</div>
                    <ul>
                        <li>Pregunta por esfuerzo</li>
                        <li>Hace todo personalmente</li>
                        <li>Sin apalancamiento</li>
                        <li>Foco en horas, intercambio tiempo por dinero</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="content-card">
            <h3>El experimento mental de Eker</h3>
            <p>Imagina un dentista. Buen profesional. Atiende a 8 pacientes al día, gana bien. Pero hay un techo claro: <em>tiempo</em>. Como mucho atenderá a 10-12 pacientes al día.</p>
            <p>Ahora imagina un autor de libros de odontología que <strong>sirve a 100,000 dentistas con un solo libro</strong>. Mismo conocimiento. Trabajo invertido una vez. Servicio escalado. Su ingreso anual puede ser 30-50x el del dentista.</p>
            <p>La pregunta correcta NO es <em>"¿cómo trabajo más?"</em>. Es: <strong>"¿cómo sirvo a más con lo que ya sé?"</strong></p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Coach de ventas, 36 años, CDMX</div>
            <div class="case-body">
                <p>Cobraba $1,500 por sesión 1-a-1. Atendía a 5 clientes por semana = $30,000 al mes. Frustrada por años, pensaba que "ya estaba al máximo".</p>
                <p>Ejercicio: aplicar las 4 variables. Decidió grabar su metodología en un curso online, lanzarlo a su lista de email. Mismo contenido, una sola creación, escala infinita.</p>
                <p>Resultado del primer lanzamiento: 87 inscritos × $1,990 MXN = $173,000 MXN en 5 días. Más que 5 meses de su trabajo anterior. Y el curso sigue generando ingresos pasivos sin que ella haga otra grabación. <strong>De pensar "cuánto trabajo" pasó a "cuánta gente sirvo".</strong></p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l8a">
            <div class="quiz-label">Pregunta 1 de 2</div>
            <div class="quiz-question">¿Cuáles son las 4 variables de la Ley de los Ingresos de Eker?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l8a', this, false)">Talento, esfuerzo, suerte, contactos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l8a', this, true)">Cuán bien lo haces × cuánto haces × a cuántos sirves × cuánto paga el mercado</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l8a', this, false)">Educación, experiencia, network, geografía</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l8a', this, false)">Ingresos, ahorro, inversión, deuda</div>
            </div>
            <div class="quiz-feedback" id="quiz_l8a_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Aplica las 4 variables a tu situación actual (10 minutos):</strong></p>
                <ol>
                    <li>Anota tu trabajo o negocio actual.</li>
                    <li>Para cada variable, califica del 1 al 10: <strong>(a)</strong> qué tan bien lo haces, <strong>(b)</strong> cuánto haces, <strong>(c)</strong> a cuántos sirves hoy, <strong>(d)</strong> qué paga el mercado.</li>
                    <li>¿Cuál es la más baja? Esa es tu palanca.</li>
                    <li>Anota UNA idea concreta para subir esa variable este mes.</li>
                </ol>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l8b">
            <div class="quiz-label">Pregunta 2 de 2</div>
            <div class="quiz-question">De las 4 variables, ¿cuál es la única realmente <em>exponencial</em>?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l8b', this, false)">Cuán bien lo haces (calidad)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l8b', this, false)">Cuánto haces (horas trabajadas)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l8b', this, true)">A cuántos sirves (escala)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l8b', this, false)">Cuánto paga el mercado (precio)</div>
            </div>
            <div class="quiz-feedback" id="quiz_l8b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>La Ley de los Ingresos completa (4 variables, no solo trabajar más)</li>
                <li>Por qué la escala es la única variable exponencial</li>
                <li>El experimento mental dentista vs. autor</li>
                <li>Tu palanca específica (la variable más baja en tu situación)</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 9 (Archivo #5)</strong>: mismo paisaje, ojos distintos. Cómo los ricos ven oportunidades donde otros ven obstáculos.</div>
        </div>
        `
    },
    {
        id: 'l9', module: 'Módulo II · Archivo #5', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #5',
        title: 'Oportunidades vs. obstáculos',
        subtitle: 'Mismo paisaje, ojos distintos: por qué unos ven recompensas y otros ven riesgos',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">Los ricos ven oportunidades. Los pobres ven obstáculos. Los ricos ven crecimiento potencial; los pobres, pérdida potencial.</div>
            <div class="pq-author">— T. Harv Eker · Archivo de Riqueza N.º 5</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>La diferencia entre "preparación" y "duda permanente" — y cuál es disfraz de la otra</li>
                <li>Por qué los ricos actúan con información incompleta (y los pobres esperan certeza que nunca llega)</li>
                <li>La regla "Listo, dispara, apunta" de Eker — y por qué funciona</li>
                <li>El antídoto contra la parálisis por análisis</li>
            </ul>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/wfzFyljSWNo?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Actúa a Pesar del Miedo - Salvador Mingo"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Cómo vencer la parálisis por análisis y actuar (Salvador Mingo)</div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA REGLA "LISTO, DISPARA, APUNTA"</div>
            <div class="aha-quote">"Los ricos disparan primero, apuntan después. Los pobres apuntan tanto que nunca disparan."</div>
            <div class="aha-author">— T. Harv Eker</div>
            <div class="aha-body">Suena temerario. No lo es. La regla de Eker es: <strong>actúa con la información que ya tienes (suficiente, no perfecta) → corrige sobre la marcha</strong>. Los pobres esperan a saberlo todo antes de moverse — y nunca se sabe todo. El "apuntar perfecto" es la forma más sofisticada de NO actuar.</div>
        </div>

        <div class="rich-vs-poor">
            <div class="rvp-title">⚖️ ANTE LA MISMA OPORTUNIDAD</div>
            <div class="rvp-cols">
                <div class="rvp-rich">
                    <div class="rvp-tag">VE OPORTUNIDAD</div>
                    <div class="rvp-line">"¿Y si funciona?"</div>
                    <ul>
                        <li>Pregunta por upside</li>
                        <li>Estima escenario positivo</li>
                        <li>Actúa con info incompleta</li>
                        <li>Corrige rápido si se equivoca</li>
                    </ul>
                </div>
                <div class="rvp-poor">
                    <div class="rvp-tag">VE OBSTÁCULO</div>
                    <div class="rvp-line">"¿Y si fracasa?"</div>
                    <ul>
                        <li>Pregunta por downside</li>
                        <li>Estima escenario negativo</li>
                        <li>Espera certeza (que nunca llega)</li>
                        <li>Cuando se mueve, es tarde</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="content-card">
            <h3>Preparación vs. duda — el disfraz favorito</h3>
            <p>"Es que me estoy preparando" es la frase más común de quien evita actuar. La preparación tiene <strong>objetivo, plazo y métrica</strong>. La duda permanente no:</p>
            <ul>
                <li><strong>Preparación real:</strong> "Voy a leer 3 libros sobre X en 2 meses para arrancar el negocio en mayo."</li>
                <li><strong>Duda disfrazada:</strong> "Quiero entender bien el tema antes de moverme." (sin plazo, sin métrica, sin acción concreta)</li>
            </ul>
            <p>Si llevas más de 6 meses "preparándote" para algo sin un primer paso de acción, es duda. Es miedo. <strong>Es el obstáculo invisible.</strong></p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Arquitecta, 33 años, Guadalajara</div>
            <div class="case-body">
                <p>Llevaba 4 años "preparándose" para abrir su despacho propio. Tomaba diplomados, leía sobre fiscal, juntaba dinero, comparaba modelos. Cada vez que un compañero abría el suyo, ella pensaba: <em>"se está apresurando, le va a ir mal"</em>.</p>
                <p>El diagnóstico fue duro: estaba viendo la oportunidad como obstáculo. Su miedo se disfrazaba de prudencia. Decidió aplicar "Listo, dispara, apunta": abrir el despacho en 60 días con $40,000 ahorrados (no los $200,000 que decía necesitar).</p>
                <p>Resultado: primer cliente en mes 2, break-even en mes 5, hoy lleva 3 años con 6 colaboradores. <strong>Lo que en 4 años de "preparación" no logró, en 60 días de acción imperfecta lo arrancó.</strong></p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l9a">
            <div class="quiz-label">Pregunta 1 de 2</div>
            <div class="quiz-question">Según Eker, ¿cuál es la regla de acción de los ricos?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l9a', this, false)">Apunta perfectamente, luego dispara</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l9a', this, true)">Listo, dispara, apunta — actúa con info incompleta y corrige sobre la marcha</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l9a', this, false)">Espera la oportunidad perfecta antes de actuar</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l9a', this, false)">Solo actúa cuando tengas el 100% de la información</div>
            </div>
            <div class="quiz-feedback" id="quiz_l9a_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Identifica tu "preparación disfrazada" (8 minutos):</strong></p>
                <ol>
                    <li>Anota algo que llevas más de 6 meses "preparándote" para hacer pero no has dado el primer paso real.</li>
                    <li>Pregúntate: ¿qué es el MENOR primer paso que puedo dar EN LOS PRÓXIMOS 7 DÍAS?</li>
                    <li>Agéndalo. Ponlo en el calendario con día y hora exacta.</li>
                    <li>Cuando llegue ese día: dispara. Aunque la información esté incompleta. Aunque te sientas raro.</li>
                </ol>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l9b">
            <div class="quiz-label">Pregunta 2 de 2</div>
            <div class="quiz-question">¿Cuál es la diferencia entre preparación real y duda disfrazada de preparación?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l9b', this, false)">No hay diferencia, son lo mismo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l9b', this, false)">La preparación real cuesta dinero, la duda no</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l9b', this, true)">La preparación real tiene objetivo, plazo y métrica concretos. La duda no — es vaga e indefinida.</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l9b', this, false)">La preparación real toma menos de 1 mes</div>
            </div>
            <div class="quiz-feedback" id="quiz_l9b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Que los ricos preguntan por upside, los pobres por downside</li>
                <li>La regla "Listo, dispara, apunta" — actuar con info incompleta es la norma de los ricos</li>
                <li>Cómo distinguir preparación real (objetivo + plazo + métrica) de duda disfrazada</li>
                <li>Tu primer paso de 7 días para algo que llevas postergando</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 10 (Archivo #6)</strong>: por qué admirar a los ricos te acerca a la riqueza — y criticarlos te aleja.</div>
        </div>
        `
    },
    {
        id: 'l10', module: 'Módulo II · Archivo #6', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #6',
        title: 'Admirar a los ricos vs. resentirlos',
        subtitle: 'Lo que criticas, te aleja. Lo que admiras, te acerca. Por qué.',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">La gente rica admira a la gente rica y próspera. A la gente pobre le molesta la gente rica y próspera.</div>
            <div class="pq-author">— T. Harv Eker · Archivo de Riqueza N.º 6</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Por qué criticar a los ricos es subconscientemente un voto contra tu propia riqueza</li>
                <li>La filosofía Huna que Eker importó: "Bendice lo que quieras"</li>
                <li>El ejercicio de los 3 ricos que admiras (y por qué)</li>
                <li>Cómo cambiar de chip social en redes y conversaciones</li>
            </ul>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/EmfqGSX-O4Y?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="De la Escasez a la Abundancia - Marta Salerno"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Cómo cambiar de mentalidad de escasez a abundancia (Marta Salerno)</div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 BENDICE LO QUE QUIERAS — FILOSOFÍA HUNA</div>
            <div class="aha-quote">"Si quieres ser rico, debes admirar a los ricos. Si los criticas, le declaras a tu subconsciente: 'no quiero ser eso'."</div>
            <div class="aha-author">— T. Harv Eker citando la tradición Huna de Hawai</div>
            <div class="aha-body">Tu subconsciente NO distingue entre "lo que critico" y "lo que rechazo de mí mismo". Si pasas el día criticando a empresarios, banqueros y celebridades por su dinero, tu mente registra: <strong>no quiero ser como ellos</strong>. Y como obedece literalmente, te aleja del éxito que pides en la otra vereda del cerebro.</div>
        </div>

        <div class="rich-vs-poor">
            <div class="rvp-title">⚖️ ANTE UN RICO QUE PASA</div>
            <div class="rvp-cols">
                <div class="rvp-rich">
                    <div class="rvp-tag">ADMIRA</div>
                    <div class="rvp-line">"¿Cómo lo hizo? Quiero aprender."</div>
                    <ul>
                        <li>Curiosidad genuina por el método</li>
                        <li>Asume buena fe primero</li>
                        <li>Busca aprender, no juzgar</li>
                        <li>Lo ve como modelo, no como amenaza</li>
                    </ul>
                </div>
                <div class="rvp-poor">
                    <div class="rvp-tag">RESIENTE</div>
                    <div class="rvp-line">"Seguro robó / heredó / engañó."</div>
                    <ul>
                        <li>Asume mala fe automáticamente</li>
                        <li>Justifica su propia situación criticando</li>
                        <li>Cree que el éxito ajeno le quita algo</li>
                        <li>Resentimiento crónico</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Vendedor independiente, 41 años, Mérida</div>
            <div class="case-body">
                <p>Pasaba 30+ horas a la semana viendo videos políticos donde se criticaba a empresarios mexicanos. Su frase favorita: <em>"esos cabrones se hacen ricos a costa de nosotros"</em>. Ingreso personal: $18,000/mes, estancado 7 años.</p>
                <p>Ejercicio: 30 días sin un solo comentario crítico sobre ricos. En vez de criticar, investigar cómo lograron lo suyo. Le tomó 3 intentos completar los 30 días.</p>
                <p>Al día 21 confesó algo inesperado: <em>"empecé a notar que muchos de los que critico empezaron como yo o peor."</em> En 4 meses, su ingreso subió a $34,000 porque cambió de "vendedor que critica" a "vendedor que estudia a quienes le admira". Mismo trabajo, distinta actitud, resultados distintos.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l10a">
            <div class="quiz-label">Pregunta 1 de 2</div>
            <div class="quiz-question">Según la filosofía Huna que Eker integra, ¿qué pasa cuando criticas a los ricos?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l10a', this, false)">Nada — son personas independientes a ti</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l10a', this, true)">Tu subconsciente registra "no quiero ser eso" y te aleja del éxito que dices querer</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l10a', this, false)">Te haces inmune al éxito</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l10a', this, false)">Atraes karma negativo según la tradición</div>
            </div>
            <div class="quiz-feedback" id="quiz_l10a_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Los 3 ricos que admiras (15 minutos):</strong></p>
                <ol>
                    <li>Anota 3 personas ricas reales (no de ficción) que admiras profesionalmente.</li>
                    <li>Para cada uno: ¿qué hace bien? ¿qué hábito específico podrías adoptar?</li>
                    <li>Reto de 30 días: <strong>cero comentarios negativos sobre ricos</strong>. Si alguien empieza esa conversación, cambia el tema.</li>
                    <li>Cuando se te ocurra criticar a un rico, sustituye por: <em>"me pregunto cómo lo logró"</em>.</li>
                </ol>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l10b">
            <div class="quiz-label">Pregunta 2 de 2</div>
            <div class="quiz-question">¿Cuál es la diferencia entre admirar y resentir, ante un mismo rico?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l10b', this, false)">La admiración es ingenua, el resentimiento es realismo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l10b', this, true)">El admirador pregunta "¿cómo lo hizo?"; el resentido asume mala fe automáticamente</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l10b', this, false)">Depende del nivel educativo de cada uno</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l10b', this, false)">No hay diferencia real, son perspectivas válidas</div>
            </div>
            <div class="quiz-feedback" id="quiz_l10b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Por qué tu subconsciente registra criticar como "no quiero ser eso"</li>
                <li>La filosofía Huna: "Bendice lo que quieras"</li>
                <li>Tus 3 ricos referentes específicos y qué adoptar de cada uno</li>
                <li>Tu reto de 30 días sin críticas a ricos</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 11 (Archivo #7)</strong>: tu círculo cercano predice tu vida en 5 años. Cómo curarlo.</div>
        </div>
        `
    },
    {
        id: 'l11', module: 'Módulo II · Archivo #7', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #7',
        title: 'Rodearse de gente positiva y exitosa',
        subtitle: 'Promedio de tus 5 amigos cercanos = tu vida en 5 años. Cómo curar tu círculo.',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">La gente rica se relaciona con personas positivas y prósperas. La gente pobre se relaciona con personas negativas y sin éxito.</div>
            <div class="pq-author">— T. Harv Eker · Archivo de Riqueza N.º 7</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>El "Test de los 5" — predicción de tu vida en 5 años basada en tu círculo cercano</li>
                <li>Por qué la influencia de los pares supera a la motivación personal en el mediano plazo</li>
                <li>Cómo agregar 2 ricos a tu vida sin parecer interesado/oportunista</li>
                <li>Cuándo es ético "alejarte" de un amigo negativo (la regla de Eker)</li>
            </ul>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/9uXej9Kl0lI?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Cómo Rodearse de Gente Exitosa - Juan Diego Gómez"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">El poder del círculo social en tu éxito financiero (Juan Diego Gómez - Invertir Mejor)</div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL TEST DE LOS 5</div>
            <div class="aha-quote">"Eres el promedio de las 5 personas con las que pasas más tiempo. Suma sus ingresos. Divide entre 5. Ese es tu rango previsible."</div>
            <div class="aha-author">— Jim Rohn, citado y validado por Eker</div>
            <div class="aha-body">No es una metáfora: es estadística. Tu círculo cercano define tu lenguaje, tus referencias, tus límites mentales, tus oportunidades y tus reacciones. <strong>Si tus 5 cercanos ganan $25K al mes, tú ganarás entre $20K y $30K, casi sin excepción.</strong> La salida no es abandonar a nadie — es agregar al círculo gente que opere en el rango siguiente.</div>
        </div>

        <div class="content-card">
            <h3>Por qué la influencia de pares supera a la motivación</h3>
            <p>Puedes estar motivadísimo después de leer un libro o tomar un curso. Pero al regresar a tu entorno habitual, en 7-14 días el efecto se diluye. ¿Por qué?</p>
            <ul>
                <li>Tu cerebro está cableado para <strong>pertenecer al grupo</strong> — fue clave para la supervivencia evolutiva.</li>
                <li>Hacer algo distinto al grupo activa una alarma de "amenaza social".</li>
                <li>Sin saberlo, retrocedes para sentir nuevamente la pertenencia.</li>
            </ul>
            <p>Por eso la receta de Eker NO es solo "tener metas" — es <strong>cambiar el grupo de referencia</strong>. Cuando tu grupo opera a otro nivel, tu cerebro reajusta su zona de pertenencia.</p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Empresario pequeño, 38 años, Tijuana</div>
            <div class="case-body">
                <p>Diagnóstico inicial: sus 5 amigos cercanos ganaban en promedio $22,000/mes. Él ganaba $24,000. Llevaba 5 años empatado.</p>
                <p>Plan: agregar 2 personas a su círculo cercano que ganaran $80K+. Eker recomienda hacerlo por aporte, no por interés: <strong>"ofrécete a ayudar antes de pedir"</strong>. Se inscribió a un club de empresarios local, ayudó voluntariamente con tareas operativas durante 6 meses. Eso le dio acceso natural a relaciones reales con miembros de mayor ingreso.</p>
                <p>En 18 meses, su ingreso subió a $48,000/mes — porque empezó a operar como ellos: precios distintos, decisiones distintas, tolerancia al riesgo distinta. <strong>Sin cambiar de industria, sin tomar un curso de ventas. Solo cambiar el grupo.</strong></p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l11a">
            <div class="quiz-label">Pregunta 1 de 2</div>
            <div class="quiz-question">Según el "Test de los 5", ¿qué predice tu ingreso de los próximos años?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l11a', this, false)">Tu nivel educativo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l11a', this, false)">Tu industria</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l11a', this, true)">El promedio del ingreso de las 5 personas con las que pasas más tiempo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l11a', this, false)">Tu IQ</div>
            </div>
            <div class="quiz-feedback" id="quiz_l11a_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Tu Test de los 5 (10 minutos):</strong></p>
                <ol>
                    <li>Anota las 5 personas con las que pasas más tiempo (familia, amigos, trabajo).</li>
                    <li>Estima el ingreso mensual de cada una. Promédialo.</li>
                    <li>¿Está cerca del tuyo? Casi siempre sí.</li>
                    <li>Identifica 1-2 lugares (clubs, cursos, grupos profesionales, eventos) donde encontrar gente del siguiente nivel. Agéndate ir este mes.</li>
                </ol>
                <p>Regla de oro de Eker: <strong>aporta primero. Pide después. Nunca al revés.</strong></p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l11b">
            <div class="quiz-label">Pregunta 2 de 2</div>
            <div class="quiz-question">¿Por qué la motivación personal NO basta para cambiar tu nivel financiero a largo plazo?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l11b', this, false)">Porque la motivación es siempre falsa</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l11b', this, true)">Porque al regresar a tu grupo habitual, tu cerebro retrocede para mantener la pertenencia social</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l11b', this, false)">Porque la motivación es caprichosa</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l11b', this, false)">No es cierto — la motivación sí basta</div>
            </div>
            <div class="quiz-feedback" id="quiz_l11b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>El Test de los 5 y tu rango previsible actual</li>
                <li>Por qué la influencia de pares supera a la motivación personal</li>
                <li>La regla "aporta primero, pide después" para integrarte a círculos de mayor nivel</li>
                <li>1-2 espacios concretos donde puedes hacer este cambio</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 12 (Archivo #8)</strong>: por qué los pobres consideran que "vender es vulgar" — y por qué eso los condena.</div>
        </div>
        `
    },
    {
        id: 'l12', module: 'Módulo II · Archivo #8', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #8',
        title: 'Disposición a promocionarse',
        subtitle: 'Por qué los ricos venden sin pudor y los pobres consideran que "vender es vulgar"',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">Si crees en lo que ofreces, tienes la obligación moral de hacerlo saber.</div>
            <div class="pq-author">— T. Harv Eker · Archivo de Riqueza N.º 8</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Las 3 razones inconscientes por las que crees que "vender es vulgar"</li>
                <li>La reformulación de Eker: vender = servir, no manipular</li>
                <li>Por qué "el buen producto se vende solo" es mito (y peligroso)</li>
                <li>Cómo promoverte profesionalmente sin sentirte cínico</li>
            </ul>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/2BFxDuNm7xc?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Marca Personal y Ventas - Sin Atajos Podcast"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Cómo promoverte sin sentirte cínico — vender es servir (Sin Atajos Podcast)</div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 VENDER = SERVIR, NO MANIPULAR</div>
            <div class="aha-quote">"Si tu producto o servicio realmente ayuda a alguien y tú no se lo dices, lo estás privando de la solución. Eso no es modesto. Es egoísta disfrazado."</div>
            <div class="aha-author">— Adaptado de T. Harv Eker</div>
            <div class="aha-body">La aversión a venderse viene casi siempre de la programación: <em>"presumir es feo"</em>, <em>"el que se promueve es interesado"</em>, <em>"el buen producto se vende solo"</em>. Reformulación: si tu trabajo realmente sirve, callarte es no permitir que llegue a quien lo necesita. <strong>La modestia mal entendida es la causa #1 de los profesionales subpagados.</strong></div>
        </div>

        <div class="rich-vs-poor">
            <div class="rvp-title">⚖️ ANTE LA OPORTUNIDAD DE PROMOVERSE</div>
            <div class="rvp-cols">
                <div class="rvp-rich">
                    <div class="rvp-tag">SE PROMUEVE</div>
                    <div class="rvp-line">"Si no lo digo yo, no llega"</div>
                    <ul>
                        <li>Publica casos, resultados, opiniones</li>
                        <li>Pide referidos sin pena</li>
                        <li>Asume que vender es servir</li>
                        <li>Cobra lo que vale, sin descuento culposo</li>
                    </ul>
                </div>
                <div class="rvp-poor">
                    <div class="rvp-tag">SE OCULTA</div>
                    <div class="rvp-line">"Mi trabajo habla por mí"</div>
                    <ul>
                        <li>Espera ser descubierto</li>
                        <li>Le da pena pedir referidos</li>
                        <li>Cree que vender es manipular</li>
                        <li>Da descuentos por culpa</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="content-card">
            <h3>Las 3 razones inconscientes del rechazo a vender</h3>
            <ol class="concept-list">
                <li><strong>Programación cultural:</strong> "el que se promueve es interesado" — frase típica latinoamericana que confunde humildad con invisibilidad.</li>
                <li><strong>Miedo al rechazo:</strong> si vendes y te dicen no, lo internalizas como "no valgo". Solución: separar persona de oferta.</li>
                <li><strong>Confusión vender = manipular:</strong> aprendiste a desconfiar del vendedor agresivo. Pero hay una diferencia entre vender desde el servicio y vender desde la presión.</li>
            </ol>
            <p>Identifica cuál te toca. La mayoría tiene las 3 mezcladas.</p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Psicóloga clínica, 45 años, CDMX</div>
            <div class="case-body">
                <p>15 años de experiencia, excelente práctica. Cobraba $700 por sesión, agenda llena pero apenas alcanzaba. Su frase: <em>"darme a conocer me parece cínico, prefiero que los pacientes me encuentren por boca a boca."</em></p>
                <p>Resultado real: solo la conocían sus pacientes actuales. Sus pares en CDMX, con la mitad de su experiencia, cobraban $1,800 y tenían más visibilidad. ¿Por qué? Porque hablaban de su trabajo en redes, daban entrevistas, publicaban casos (anonimizados, claro).</p>
                <p>Ejercicio: 30 días publicando UNA reflexión profesional diaria en LinkedIn. Subió tarifa a $1,400. En 6 meses: agenda llena al nuevo precio + lista de espera. <strong>El conocimiento siempre estuvo ahí. Lo que cambió fue permitirse decirlo.</strong></p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l12a">
            <div class="quiz-label">Pregunta 1 de 2</div>
            <div class="quiz-question">Según Eker, ¿qué pasa cuando NO te promueves si tu trabajo realmente sirve?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l12a', this, false)">Eres modesto y eso es admirable</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l12a', this, true)">Privas a quien lo necesita de la solución — la modestia mal entendida es egoísmo disfrazado</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l12a', this, false)">No pasa nada, la gente te encuentra de todos modos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l12a', this, false)">Acumulas karma positivo</div>
            </div>
            <div class="quiz-feedback" id="quiz_l12a_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Tu primer acto de promoción consciente (12 minutos):</strong></p>
                <ol>
                    <li>Identifica un logro/resultado de tu trabajo que NO has compartido con nadie por pena.</li>
                    <li>Redáctalo como un mensaje corto (3-5 párrafos) para LinkedIn o tu medio social profesional.</li>
                    <li>Publícalo HOY. Sin filtrar. Sin pedir aprobación a nadie.</li>
                    <li>Anota qué sentiste al publicarlo. Esa sensación es el patrón viejo siendo desafiado.</li>
                </ol>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l12b">
            <div class="quiz-label">Pregunta 2 de 2</div>
            <div class="quiz-question">¿Cuál es la diferencia entre vender desde el servicio vs. vender desde la presión?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l12b', this, false)">Ninguna, vender es vender</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l12b', this, true)">Vender desde el servicio comparte una solución para quien la necesite. Vender desde la presión empuja a quien no la necesita.</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l12b', this, false)">El precio: caro = servicio, barato = presión</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l12b', this, false)">El servicio es para profesionales, la presión es para vendedores</div>
            </div>
            <div class="quiz-feedback" id="quiz_l12b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Las 3 razones inconscientes que paralizan tu auto-promoción</li>
                <li>La reformulación vender = servir, no manipular</li>
                <li>Por qué "el buen producto se vende solo" es mito peligroso</li>
                <li>Publicaste tu primer acto consciente de promoción</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 13 (Archivo #9)</strong>: ser más grande que tus problemas — la fórmula completa de Eker.</div>
        </div>
        `
    },
    {
        id: 'l13', module: 'Módulo II · Archivo #9', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #9',
        title: 'Ser más grande que tus problemas',
        subtitle: 'La fórmula de Eker: nunca cambies el problema — cambia el tamaño de quien lo enfrenta',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">El secreto del éxito NO es tratar de evitar, deshacerse o achicar tus problemas. El secreto del éxito es crecer hasta ser más grande que cualquier problema.</div>
            <div class="pq-author">— T. Harv Eker · Archivo de Riqueza N.º 9</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>La fórmula completa: Carácter del individuo vs. Tamaño del problema</li>
                <li>Por qué resolver problemas es la actividad que GENERA riqueza (no la que la consume)</li>
                <li>El reframe del problema: de "¿por qué a mí?" a "¿quién tendría que ser yo para que esto sea fácil?"</li>
                <li>El ejercicio diario para fortalecerte como "solucionador"</li>
            </ul>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/s7kuFi0Hgg4?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Sé Más Fuerte que Tus Problemas - Evan en Español"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Zig Ziglar: cómo volverse más grande que tus problemas (Evan en Español)</div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA FÓRMULA</div>
            <div class="aha-quote">"Tu vida es lo que es porque tú eres lo que eres. Si quieres una vida más grande, tienes que crecer tú primero."</div>
            <div class="aha-author">— T. Harv Eker</div>
            <div class="aha-body">Mucha gente intenta resolver sus problemas reduciéndolos: posponen, evaden, niegan. Eker enseña lo contrario: <strong>cada problema es una invitación a crecer. Sin problemas mayores no hay personas mayores</strong>. Los ricos no tienen menos problemas — tienen problemas más grandes y la capacidad para resolverlos. Esa capacidad ES la fortuna.</div>
        </div>

        <div class="content-card">
            <h3>El reframe maestro de Eker</h3>
            <p>Cuando enfrentes un problema, prohíbete dos preguntas:</p>
            <ul>
                <li>❌ <em>"¿Por qué a mí?"</em> — te pone en víctima.</li>
                <li>❌ <em>"¿Por qué este problema es tan difícil?"</em> — te pone en quejido.</li>
            </ul>
            <p>Sustitúyelas por la pregunta de Eker:</p>
            <div style="margin:14px 0;padding:18px;background:#fff8e1;border-left:4px solid #c9a961;border-radius:6px;font-style:italic;color:#5a4a1f;">
                <strong>"¿Quién tendría que ser yo para que este problema sea fácil?"</strong>
            </div>
            <p>Esa pregunta automáticamente saca a tu cerebro del modo víctima y lo pone en modo crecimiento. La respuesta — habilidades, hábitos, recursos, mentalidad — define tu próximo paso.</p>
        </div>

        <div class="rich-vs-poor">
            <div class="rvp-title">⚖️ ANTE UN PROBLEMA GRANDE</div>
            <div class="rvp-cols">
                <div class="rvp-rich">
                    <div class="rvp-tag">SE AGRANDA</div>
                    <div class="rvp-line">"¿Quién tengo que ser?"</div>
                    <ul>
                        <li>Asume responsabilidad sobre el resultado</li>
                        <li>Pregunta por habilidades faltantes</li>
                        <li>Ve el problema como entrenamiento</li>
                        <li>Crece de nivel después de resolverlo</li>
                    </ul>
                </div>
                <div class="rvp-poor">
                    <div class="rvp-tag">SE ACHICA</div>
                    <div class="rvp-line">"¿Por qué a mí?"</div>
                    <ul>
                        <li>Asume rol de víctima</li>
                        <li>Busca culpables externos</li>
                        <li>Ve el problema como castigo</li>
                        <li>Se queda igual o peor</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Restaurantero, 51 años, Cancún</div>
            <div class="case-body">
                <p>Pandemia 2020: cerró por 4 meses. Cuando reabrió, enfrentaba: 60% menos comensales, deuda con proveedores, 8 empleados que sostener, propietario del local exigiendo renta retroactiva. Llegó a consultoría diciendo: <em>"Esto me supera. No puedo con todo."</em></p>
                <p>Aplicamos la pregunta de Eker: <em>"¿Quién tendrías que ser para que esto sea fácil?"</em>. Su respuesta tras 30 minutos de reflexión: alguien con (a) habilidades digitales para delivery propio, (b) negociación dura, (c) capacidad de despedir gente sin culparse, (d) creatividad de menú para platillos rentables.</p>
                <p>En 11 meses, no solo sobrevivió: lanzó delivery propio, renegoció renta, redujo planta a 5 personas, rediseñó menú con 40% mejor margen. <strong>Hoy su negocio gana más que pre-pandemia</strong>. La crisis lo forzó a ser una versión más grande de sí mismo.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l13a">
            <div class="quiz-label">Pregunta 1 de 2</div>
            <div class="quiz-question">Según Eker, ¿cuál es el secreto del éxito al enfrentar problemas?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l13a', this, false)">Evitar problemas a toda costa</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l13a', this, false)">Tener mucho dinero para comprar la solución</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l13a', this, true)">Crecer hasta ser más grande que cualquier problema</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l13a', this, false)">Delegar todos los problemas a otros</div>
            </div>
            <div class="quiz-feedback" id="quiz_l13a_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>El reframe del problema más grande (10 minutos):</strong></p>
                <ol>
                    <li>Anota el problema profesional/financiero más grande que enfrentas hoy.</li>
                    <li>NO escribas todavía "por qué". Escribe en cambio: <strong>"¿Quién tendría que ser yo para que este problema sea fácil?"</strong></li>
                    <li>Anota las 5-7 características de esa persona ideal.</li>
                    <li>De esas 5-7, elige UNA que puedas empezar a desarrollar esta semana.</li>
                </ol>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l13b">
            <div class="quiz-label">Pregunta 2 de 2</div>
            <div class="quiz-question">¿Cuál es la pregunta clave que Eker recomienda hacerse ante un problema?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l13b', this, false)">"¿Por qué a mí?"</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l13b', this, false)">"¿Quién es el culpable?"</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l13b', this, true)">"¿Quién tendría que ser yo para que este problema sea fácil?"</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l13b', this, false)">"¿Cómo puedo evitar este problema en el futuro?"</div>
            </div>
            <div class="quiz-feedback" id="quiz_l13b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>La fórmula: vida grande = persona grande</li>
                <li>El reframe maestro: de "¿por qué a mí?" a "¿quién tengo que ser?"</li>
                <li>Por qué resolver problemas grandes ES generar riqueza</li>
                <li>Tu característica clave a desarrollar esta semana</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 14 (Archivo #10)</strong>: saber recibir — la razón #1 (según Eker) por la que la mayoría no alcanza su potencial.</div>
        </div>
        `
    },
    {
        id: 'l14', module: 'Módulo II · Archivo #10', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #10',
        title: 'Saber recibir',
        subtitle: 'La razón #1 por la que la gente no alcanza su potencial económico, según Eker',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">Los ricos son excelentes receptores. Los pobres son malos receptores. Si tuviese que establecer la razón número uno por la que la mayoría no alcanza su pleno potencial económico, sería ésta.</div>
            <div class="pq-author">— T. Harv Eker · Archivo de Riqueza N.º 10</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Las 4 formas en que rechazas dinero sin darte cuenta</li>
                <li>Por qué decir "no es necesario" cuando te elogian es auto-sabotaje</li>
                <li>El experimento del billete de $20 (clásico de los seminarios de Eker)</li>
                <li>Cómo entrenarte para recibir — desde elogios hasta dinero</li>
            </ul>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/AmKMiO3QJe8?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Los Secretos de la Mente Millonaria - Audiolibro"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Audiolibro completo — sobre el arte de recibir (canal Finanzas inteligentes)</div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL EXPERIMENTO DEL BILLETE DE $20</div>
            <div class="aha-quote">"En cada seminario saco un billete de $100 y pregunto: '¿quién lo quiere?'. La mayoría duda. Algunos lo levantan, lo bajan. Solo unos pocos vienen rápido y lo toman. Esos son mis futuros millonarios."</div>
            <div class="aha-author">— T. Harv Eker</div>
            <div class="aha-body">El experimento es revelador: ante dinero gratis, la mayoría duda, busca el truco, se pregunta "por qué a mí", o lo rechaza por pena. <strong>Esa duda es la misma que opera cuando una oportunidad real aparece</strong>. La gente que no sabe recibir gratuito tampoco sabe recibir merecido. Y el universo se rinde.</div>
        </div>

        <div class="content-card warning">
            <h3>⚠️ Las 4 formas en que rechazas dinero sin saberlo</h3>
            <ol class="concept-list">
                <li><strong>Diciendo "no es necesario":</strong> alguien te quiere pagar más, te quiere invitar, te quiere regalar. Tú: "no, no es necesario". Le acabas de cerrar la puerta.</li>
                <li><strong>Sintiéndote culpable al recibir:</strong> te dan una comisión más alta, una promoción, un descuento. En lugar de agradecer, te incomoda. El universo registra: "no quiere esto".</li>
                <li><strong>Justificándote para los demás:</strong> cuando logras algo, lo minimizas. "Fue suerte", "cualquiera lo hubiera hecho". Le declaras al cosmos: lo logrado no fue mérito.</li>
                <li><strong>Negándote a pedir cuando puedes:</strong> tienes derecho a un aumento, un mejor trato, un favor — pero no pides por pena. La oferta sigue ahí, pero te dijiste no a ti mismo.</li>
            </ol>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Diseñador gráfico, 29 años, Querétaro</div>
            <div class="case-body">
                <p>Cliente importante le pagó la factura más una propina del 30% por excelente trabajo. Reacción: <em>"No, ¡es mucho! Lo justo está bien."</em> El cliente insistió, él aceptó incómodo y lo arrastró 3 días la culpa.</p>
                <p>Análisis: estaba rechazando dinero que el otro quería entregar libremente. ¿Por qué? Programación de mamá: <em>"el que recibe sin merecerse es aprovechado"</em>. Pero merecimiento es subjetivo — y el cliente claramente sí lo consideraba merecido.</p>
                <p>Su tarea: por 30 días, recibir TODO lo que le ofrecieran (cafés, propinas extras, elogios) con un simple <em>"gracias"</em>, sin justificación. Le costó las 2 primeras semanas. En el mes 3, otro cliente le ofreció duplicar su precio para un proyecto premium. Antes habría dicho "no, mejor te lo dejo más barato". Esta vez aceptó. Ese pago cubrió 2 meses de gastos.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l14a">
            <div class="quiz-label">Pregunta 1 de 2</div>
            <div class="quiz-question">Según Eker, ¿qué reveló el experimento del billete de $100 sobre los participantes?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l14a', this, false)">Que los más rápidos son los más codiciosos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l14a', this, true)">Que la duda ante dinero gratuito es la misma que opera ante oportunidades reales — y predice quién será rico</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l14a', this, false)">Que la gente honesta nunca toma el billete</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l14a', this, false)">Que es solo un truco, no significa nada</div>
            </div>
            <div class="quiz-feedback" id="quiz_l14a_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Reto de 21 días: solo "gracias" (sin justificar):</strong></p>
                <ol>
                    <li>Cuando alguien te elogie o te ofrezca algo, di solo: <em>"Gracias"</em>. Sin minimizar, sin justificar, sin "no era para tanto".</li>
                    <li>Si alguien te ofrece pagarte más, propina extra o un regalo, di: <em>"Gracias, lo recibo con gusto"</em>. Y punto.</li>
                    <li>Anota cuántas veces te sale el reflejo viejo de minimizar. Esa cuenta es tu calibración actual.</li>
                    <li>Al día 21, observa cómo te sientes al recibir.</li>
                </ol>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l14b">
            <div class="quiz-label">Pregunta 2 de 2</div>
            <div class="quiz-question">¿Cuál es la respuesta IDEAL ante un elogio, según el Archivo #10?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l14b', this, false)">"No es para tanto, fue suerte"</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l14b', this, false)">"Cualquiera lo hubiera hecho"</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l14b', this, true)">"Gracias" — sin justificar, sin minimizar</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l14b', this, false)">"No es necesario"</div>
            </div>
            <div class="quiz-feedback" id="quiz_l14b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Las 4 formas en que rechazas dinero sin darte cuenta</li>
                <li>El experimento del billete y por qué predice tu futuro económico</li>
                <li>Por qué "gracias" sin justificar es revolucionario para tu patrón</li>
                <li>Tu reto de 21 días activo</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 15 (Archivo #11)</strong>: la trampa del sueldo fijo y por qué los ricos cobran por resultados, no por horas.</div>
        </div>
        `
    },
    {
        id: 'l15', module: 'Módulo II · Archivo #11', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #11',
        title: 'Cobrar por resultados vs. cobrar por horas',
        subtitle: 'Jamás pongas techo a tus ingresos: la trampa del sueldo fijo',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">Jamás pongas techo a tus ingresos. Los ricos eligen que se les pague según los resultados; los pobres, según el tiempo empleado.</div>
            <div class="pq-author">— T. Harv Eker · Archivo de Riqueza N.º 11</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Por qué el sueldo fijo es psicológicamente un techo, no un piso</li>
                <li>Los 3 modelos de cobro: tiempo, resultado, propiedad — y cuál corresponde a cada nivel de riqueza</li>
                <li>Cómo introducir un componente variable a tu esquema actual</li>
                <li>El "consejo zombie" más peligroso: "consigue un buen trabajo seguro"</li>
            </ul>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/m475DwpI_bY?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="El Techo Salarial - Jonny vs System"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Por qué el sueldo fijo es un techo, no un piso (Jonny vs System)</div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL CONSEJO ZOMBIE MÁS PELIGROSO</div>
            <div class="aha-quote">"'Ve a la escuela, saca buenas notas, consigue un buen trabajo con sueldo fijo, sé puntual, trabaja mucho y vivirás feliz.' Por desgracia, ese sabio consejo procede directamente del Libro de cuentos de hadas, Volumen 1."</div>
            <div class="aha-author">— T. Harv Eker</div>
            <div class="aha-body">El sueldo fijo nació para empleados industriales del siglo XIX. Hoy garantiza una sola cosa: <strong>no enriquecerte</strong>. Te pone un techo idéntico al piso. Trabajes mucho o trabajes regular, ganas lo mismo. La única salida es introducir <em>componente variable</em>: bono por resultados, comisión, sociedad, propiedad de algo.</div>
        </div>

        <div class="rich-vs-poor">
            <div class="rvp-title">⚖️ LOS 3 MODELOS DE COBRO</div>
            <div class="rvp-cols">
                <div class="rvp-rich">
                    <div class="rvp-tag">RESULTADOS / PROPIEDAD</div>
                    <div class="rvp-line">"Cobro por lo que produzco"</div>
                    <ul>
                        <li>Sin techo: puedes ganar 10x</li>
                        <li>Comisión, royalty, participación</li>
                        <li>Riesgo y recompensa correlacionados</li>
                        <li>Camino directo a riqueza</li>
                    </ul>
                </div>
                <div class="rvp-poor">
                    <div class="rvp-tag">SOLO TIEMPO</div>
                    <div class="rvp-line">"Cobro por horas trabajadas"</div>
                    <ul>
                        <li>Techo idéntico al piso</li>
                        <li>Sueldo fijo, salario por hora</li>
                        <li>Sin upside aunque destaques</li>
                        <li>Estancamiento garantizado</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="content-card">
            <h3>Cómo introducir componente variable (sin renunciar)</h3>
            <p>No necesitas renunciar a tu empleo para incorporar el principio. 4 formas pragmáticas:</p>
            <ol class="concept-list">
                <li><strong>Propón un bono atado a resultados</strong> a tu jefe. "Si supero X meta, recibo Y bono." La mayoría de empresas acepta porque tú asumes el riesgo.</li>
                <li><strong>Side income basado en resultados:</strong> consultoría, freelance, comisión por referidos. Tu primera hora "fuera del sueldo".</li>
                <li><strong>Inversiones que pagan resultados:</strong> dividendos, rentas, regalías. Tu dinero produciendo sin tu tiempo.</li>
                <li><strong>Propiedad de algo:</strong> acciones, participación en negocios, propiedad intelectual. El nivel siguiente.</li>
            </ol>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Gerente de planta, 44 años, Aguascalientes</div>
            <div class="case-body">
                <p>Sueldo $58,000/mes fijo, llevaba 9 años empatado. Su empresa le pidió que liderara la implementación de un sistema que reduciría costos. Trabajo extra, sin pago extra prometido.</p>
                <p>Aplicó el principio. Propuso a la dirección: <em>"Implemento el sistema. Si en 12 meses la empresa ahorra más de $4M, me dan el 5% de ese ahorro como bono único. Si no llegamos, mi sueldo regular sigue igual."</em></p>
                <p>La dirección aceptó porque no había riesgo para ellos. El sistema ahorró $9.2M en 14 meses. Su bono: <strong>$460,000 MXN extras</strong>. Más que 8 meses de su sueldo. Y aprendió la lección: el componente variable es disponible incluso dentro del empleo tradicional, si lo pides.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l15a">
            <div class="quiz-label">Pregunta 1 de 2</div>
            <div class="quiz-question">¿Por qué Eker llama "consejo de cuento de hadas" al "consigue un trabajo con sueldo fijo y seguro"?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l15a', this, false)">Porque ese tipo de trabajos ya no existen</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l15a', this, true)">Porque el sueldo fijo pone techo idéntico al piso — garantiza no enriquecerte</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l15a', this, false)">Porque la escuela no enseña valores</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l15a', this, false)">Porque la felicidad no se logra trabajando</div>
            </div>
            <div class="quiz-feedback" id="quiz_l15a_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Identifica tu palanca variable (12 minutos):</strong></p>
                <ol>
                    <li>Anota qué porcentaje de tu ingreso actual es FIJO y qué porcentaje es VARIABLE.</li>
                    <li>¿Cuál de las 4 formas puedes activar este mes? (bono interno, side, inversión, propiedad)</li>
                    <li>Si está al 100% fijo: identifica UNA propuesta de bono que puedas presentar a tu jefe en 2 semanas.</li>
                    <li>Si ya tienes algo variable: ¿cómo aumentar su peso del 10% al 30% en 12 meses?</li>
                </ol>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l15b">
            <div class="quiz-label">Pregunta 2 de 2</div>
            <div class="quiz-question">¿Cuál de estos es un cobro por resultado/propiedad?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l15b', this, false)">Sueldo mensual fijo de $50,000</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l15b', this, false)">Pago por hora de $250/hr</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l15b', this, true)">5% de las ventas que genere personalmente</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l15b', this, false)">Pago por proyecto de $40,000 fijos</div>
            </div>
            <div class="quiz-feedback" id="quiz_l15b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Por qué el sueldo fijo es psicológica y matemáticamente un techo</li>
                <li>Los 3 modelos de cobro y cuál te corresponde escalar</li>
                <li>4 formas prácticas de introducir componente variable</li>
                <li>Tu propuesta concreta para incrementar la parte variable de tu ingreso</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 16 (Archivo #12)</strong>: salir de la escasez con el pensamiento "ambos/y" — ricos quieren las dos cosas, pobres eligen una.</div>
        </div>
        `
    },
    {
        id: 'l16', module: 'Módulo II · Archivo #12', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #12',
        title: 'Pensar "ambos/y" vs. "uno u otro"',
        subtitle: 'Salir de la escasez: cómo entrenarte para ver opciones donde otros ven dilemas',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">La gente rica vive en un mundo de abundancia. La gente pobre, en un mundo de limitaciones. Habitan el mismo planeta — la diferencia está en su punto de vista.</div>
            <div class="pq-author">— T. Harv Eker · Archivo de Riqueza N.º 12</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>La diferencia entre escasez (uno u otro) y abundancia (ambos/y)</li>
                <li>Por qué tu cerebro reacciona automáticamente desde la escasez (es default)</li>
                <li>El ejercicio "¿cómo puedo tener ambas?" para entrenar abundancia</li>
                <li>Aplicación práctica: dinero + tiempo, familia + carrera, ahorro + disfrute</li>
            </ul>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/uLQ7Vp-Fs_M?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Mentalidad de Abundancia vs Escasez - inconfundibleMENTE"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Pensar "ambos/y" en lugar de "uno u otro" — mentalidad de abundancia (inconfundibleMENTE)</div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA PREGUNTA DE ORO</div>
            <div class="aha-quote">"En vez de '¿cuál elijo?', pregúntate: '¿cómo puedo tener ambas?'."</div>
            <div class="aha-author">— T. Harv Eker</div>
            <div class="aha-body">Las pregunta default ante un dilema —familia o carrera, ahorrar o disfrutar, calidad o precio— es <em>cuál elijo</em>. Esa pregunta asume escasez. La pregunta del rico es <strong>cómo logro ambas</strong>. Casi siempre, formularla así abre el cerebro a soluciones que no existían en el modo "uno u otro". No es magia — es neurología aplicada.</div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#129504;</span><div>
                <h3>Por qué tu cerebro elige escasez por defecto</h3>
                <p>Evolutivamente, tu cerebro fue diseñado para detectar amenazas. Ante un dilema, su instinto es <strong>elegir uno y rechazar el otro</strong> rápido — eso ayudaba a sobrevivir cuando había un tigre cerca.</p>
                <p>En el mundo moderno, ese instinto te traiciona: limita tus opciones a 2 y te obliga a sacrificar una. La gente rica entrenó otro reflejo: <strong>"¿qué tercera opción no estoy viendo?"</strong> Y casi siempre la hay.</p>
                <p>Eker advierte: este reflejo no se cambia leyendo — se cambia practicando la pregunta diariamente, en decisiones pequeñas, hasta que se vuelva automática.</p>
            </div></div>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Madre profesionista, 36 años, Mérida</div>
            <div class="case-body">
                <p>Llegó a consultoría con un dilema clásico: <em>"Tengo que elegir entre ser una buena mamá presente para mis 2 hijos pequeños, o crecer profesionalmente como CFO. No puedo las dos."</em> Llevaba 4 años postergando el ascenso por culpa.</p>
                <p>Aplicamos la pregunta: <em>"¿Cómo logro ambas?"</em>. En 2 horas surgieron opciones que antes no veía: trabajo híbrido 2-3 días, equipo más autónomo con KPIs en vez de presencia, una niñera/familiar para tardes específicas, mudarse cerca de la escuela.</p>
                <p>Hoy es CFO, sus hijos están en escuela cerca del trabajo, y los recoge personalmente 3 de 5 días. <strong>El dilema NO era el dilema — era su pregunta.</strong></p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l16a">
            <div class="quiz-label">Pregunta 1 de 2</div>
            <div class="quiz-question">Según Eker, ¿cuál es la pregunta que diferencia la mentalidad de abundancia?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l16a', this, false)">"¿Cuál elijo?"</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l16a', this, false)">"¿Cuál es más importante?"</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l16a', this, true)">"¿Cómo logro ambas?"</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l16a', this, false)">"¿Cuál duele menos sacrificar?"</div>
            </div>
            <div class="quiz-feedback" id="quiz_l16a_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Reto de 30 días: pregunta "ambos/y":</strong></p>
                <ol>
                    <li>Identifica el dilema más recurrente en tu vida actual (escrito en una hoja).</li>
                    <li>Reformúlalo en <em>"¿Cómo logro ambas?"</em>.</li>
                    <li>Genera al menos 10 opciones — sin filtrar, sin juzgar. Lo bueno aparece después de las 7-8 obvias.</li>
                    <li>Por 30 días, cada vez que enfrentes un dilema diario, pregúntate primero: <em>"¿hay una tercera opción que no estoy viendo?"</em></li>
                </ol>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l16b">
            <div class="quiz-label">Pregunta 2 de 2</div>
            <div class="quiz-question">¿Por qué el cerebro humano tiende a la mentalidad de escasez por defecto?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l16b', this, false)">Porque la sociedad nos enseña a competir</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l16b', this, true)">Por herencia evolutiva: detectar amenazas y elegir rápido era clave para sobrevivir</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l16b', this, false)">Porque somos egoístas por naturaleza</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l16b', this, false)">Porque la abundancia es una ilusión moderna</div>
            </div>
            <div class="quiz-feedback" id="quiz_l16b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>La diferencia entre la pregunta de escasez ("¿cuál elijo?") y la de abundancia ("¿cómo logro ambas?")</li>
                <li>Por qué tu cerebro elige escasez por reflejo evolutivo</li>
                <li>Que generar 10 opciones desbloquea soluciones invisibles antes</li>
                <li>El dilema actual que vas a re-formular</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 17 (Archivo #13)</strong>: la pregunta que distingue a los ricos — fortuna neta, no ingresos.</div>
        </div>
        `
    },
    {
        id: 'l17', module: 'Módulo II · Archivo #13', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #13',
        title: 'Fortuna neta vs. ingresos del trabajo',
        subtitle: 'La pregunta que distingue a los ricos: "¿Cuál es tu fortuna neta?" — no "¿Cuánto ganas?"',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">Los ricos se centran en su fortuna neta. Los pobres se centran en lo que ganan con su trabajo.</div>
            <div class="pq-author">— T. Harv Eker · Archivo de Riqueza N.º 13</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>La fórmula exacta de fortuna neta (no es lo que tú crees)</li>
                <li>Los 4 factores que la multiplican (ingresos, ahorros, inversiones, simplificación)</li>
                <li>Cómo calcular tu fortuna neta ACTUAL en 15 minutos</li>
                <li>El cambio de pregunta que cambia tu enfoque toda la vida</li>
            </ul>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/bofw53r4Gq8?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Cómo administrar mi dinero - Eker"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Sobre patrimonio y administración (canal El Economista Youtuber)</div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA PREGUNTA QUE LO CAMBIA TODO</div>
            <div class="aha-quote">"En las fiestas la gente pregunta '¿en qué trabajas?'. En los clubes de campo preguntan '¿cuál es tu fortuna neta?'. Por algo será."</div>
            <div class="aha-author">— T. Harv Eker</div>
            <div class="aha-body">El ingreso es flujo. La fortuna neta es <strong>stock</strong>. El ingreso desaparece si dejas de trabajar. La fortuna neta sigue ahí. Por eso los ricos miden lo segundo y los pobres lo primero. Es el mismo dinero, pero ver el mundo desde la fortuna neta cambia <em>todo</em>: tus decisiones, tu prioridad, tu definición de éxito.</div>
        </div>

        <div class="content-card tip">
            <h3>La fórmula exacta</h3>
            <div style="margin:14px 0;padding:20px;background:#faf8f3;border-radius:8px;text-align:center;font-family:'Playfair Display',serif;font-size:1.15em;color:#0a2540;line-height:1.5;border-left:4px solid #c9a961;">
                <strong>Fortuna Neta = Activos − Pasivos</strong>
            </div>
            <p><strong>Activos</strong>: lo que posees y vale dinero (efectivo, inversiones, propiedades, acciones, negocios, vehículos a valor de mercado, etc.).</p>
            <p><strong>Pasivos</strong>: lo que debes (hipoteca, créditos, tarjetas, préstamos, deudas con personas).</p>
            <p>NO incluyas tu sueldo. NO incluyas el "podría ganar X". Solo activos reales menos pasivos reales en este momento.</p>
        </div>

        <div class="content-card">
            <h3>Los 4 factores que multiplican tu fortuna neta</h3>
            <ol class="concept-list">
                <li><strong>Ingresos:</strong> aumentar lo que entra (Archivos #4, #8, #11). Sin esto, los otros 3 no escalan.</li>
                <li><strong>Ahorros:</strong> guardar antes de gastar, no después (Archivo #14 — sistema 6 cuentas).</li>
                <li><strong>Inversiones:</strong> hacer que el ahorro produzca solo (Archivo #15).</li>
                <li><strong>Simplificación:</strong> reducir gasto innecesario sin sacrificar calidad de vida real.</li>
            </ol>
            <p>La mayoría se enfoca solo en (1). Los ricos juegan los 4 simultáneamente. Por eso un médico con ingreso modesto pero disciplinado en 2, 3, 4 puede tener más fortuna neta que un ejecutivo de alto ingreso que solo gasta.</p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Ejecutivo bancario, 46 años, CDMX</div>
            <div class="case-body">
                <p>Ingreso: $180,000/mes. Se sentía "rico". Le pedimos calcular su fortuna neta. Resultado: <strong>$340,000</strong> (auto + algo de ahorro − crédito hipotecario alto). Después de 18 años trabajando, su fortuna neta equivalía a 2 meses de su ingreso.</p>
                <p>El shock fue terapéutico. Cambió la pregunta: en lugar de <em>"¿cuánto gané este mes?"</em>, empezó a preguntarse cada mes <em>"¿cuánto sumé a mi fortuna neta?"</em>.</p>
                <p>Aplicó los 4 factores: subió ingreso (consultoría adicional), 15% directo a ahorro/inversión, simplificó gasto en lujos innecesarios. <strong>En 4 años, fortuna neta de $340K pasó a $3.2M.</strong> Mismo ingreso, distinta pregunta.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l17a">
            <div class="quiz-label">Pregunta 1 de 2</div>
            <div class="quiz-question">¿Cuál es la fórmula correcta de fortuna neta?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l17a', this, false)">Ingreso mensual × 12</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l17a', this, false)">Sueldo + propiedades + ahorros</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l17a', this, true)">Activos − Pasivos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l17a', this, false)">Tu sueldo anual + estimación de ingreso futuro</div>
            </div>
            <div class="quiz-feedback" id="quiz_l17a_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Calcula tu fortuna neta actual (20 minutos):</strong></p>
                <ol>
                    <li>Lista TODOS tus activos con valor real de mercado: cuentas, inversiones, propiedades, vehículos, equipos valiosos. Suma.</li>
                    <li>Lista TODAS tus deudas: hipoteca pendiente, créditos, tarjetas (saldo actual), préstamos. Suma.</li>
                    <li>Activos − Pasivos = tu fortuna neta HOY.</li>
                    <li>Anótala con la fecha. La revisarás cada mes y verás cómo cambia con el resto del curso.</li>
                </ol>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l17b">
            <div class="quiz-label">Pregunta 2 de 2</div>
            <div class="quiz-question">¿Cuáles son los 4 factores que multiplican tu fortuna neta, según Eker?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l17b', this, false)">Trabajo, suerte, herencia, networking</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l17b', this, true)">Ingresos, ahorros, inversiones, simplificación</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l17b', this, false)">Educación, contactos, disciplina, sacrificio</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l17b', this, false)">Ahorro, deuda, gasto, inversión</div>
            </div>
            <div class="quiz-feedback" id="quiz_l17b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>La fórmula exacta de fortuna neta (Activos − Pasivos)</li>
                <li>Por qué la pregunta correcta NO es "cuánto ganas" sino "cuál es tu fortuna neta"</li>
                <li>Los 4 factores multiplicadores</li>
                <li>Tu fortuna neta actual con fecha</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 18 (Archivo #14)</strong>: el sistema de las 6 cuentas — la herramienta operativa más importante del libro.</div>
        </div>
        `
    },
    {
        id: 'l18', module: 'Módulo II · Archivo #14', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #14',
        title: 'Administrar bien tu dinero — el Sistema de las 6 Cuentas',
        subtitle: 'La herramienta operativa más importante del libro: cómo dividir cada peso que entra',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">Los ricos administran muy bien su dinero. La gente pobre lo administra mal. No es cuestión de cuánto tienes — es de cómo lo divides.</div>
            <div class="pq-author">— T. Harv Eker, citando a Thomas Stanley · Archivo N.º 14</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>El Sistema de las 6 Cuentas (LIB, LP, EDU, JUE, GIV, NEC) con porcentajes exactos</li>
                <li>Por qué la cuenta de "Libertad Financiera" es intocable de por vida</li>
                <li>Cómo abrir físicamente las 6 cuentas con tu banco / app</li>
                <li>Errores comunes que destruyen el sistema</li>
            </ul>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO · LECCIÓN OPERATIVA</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/9vpuPioX5iw?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Cómo Administrar Mi Dinero según Eker"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">El método de administración paso a paso (canal Día Productivo)</div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL SISTEMA DE LAS 6 CUENTAS (PORCENTAJES EXACTOS)</div>
            <div class="aha-quote">"Tengas el dinero que tengas, divide así cada peso que entre. Sin excepción. Desde hoy."</div>
            <div class="aha-author">— T. Harv Eker</div>
            <ol style="margin-top:14px;padding-left:20px;line-height:1.8;">
                <li><strong>LIB · Libertad Financiera (10%):</strong> intocable de por vida. Se usa SOLO para invertir y generar ingresos pasivos. Jamás para gasto.</li>
                <li><strong>LP · Largo Plazo (10%):</strong> compras grandes (auto, casa, vacaciones soñadas, educación de hijos). Se ahorra hasta gastarse en algo específico.</li>
                <li><strong>EDU · Educación (10%):</strong> tu propia formación. Libros, cursos, mentores, conferencias.</li>
                <li><strong>JUE · Juego (10%):</strong> placer puro. Se debe gastar TODO cada mes en algo que disfrutes. Sin culpa.</li>
                <li><strong>GIV · Donación (5-10%):</strong> dar. Caridad, ayudar a alguien específico, regalos. Activa el músculo del recibir (Archivo #10).</li>
                <li><strong>NEC · Necesidades (50-55%):</strong> renta, comida, transporte, cuentas. Si no te alcanza con este porcentaje, hay que ajustar gastos, no aumentar el porcentaje.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>Por qué los 6 porcentajes son sagrados</h3>
            <p>El sistema NO funciona si tomas atajos. Errores comunes:</p>
            <ul>
                <li>"Sólo voy a usar 3 cuentas, no 6" — no funciona. Cada cuenta entrena un músculo financiero distinto.</li>
                <li>"Mi 10% de LIB lo usaré en una emergencia" — destruye el sistema. LIB es intocable de por vida. Para emergencias, hay LP.</li>
                <li>"Ahorraré primero y la cuenta de JUE puede esperar" — error. JUE entrena tu capacidad de recibir y disfrutar. Sin eso, el dinero te genera culpa.</li>
                <li>"Voy a empezar cuando gane más" — el peor error. El sistema funciona desde $5,000 al mes o desde $500,000 al mes. La proporción es lo importante.</li>
            </ul>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Empleada administrativa, 31 años, Toluca</div>
            <div class="case-body">
                <p>Ingreso: $16,000/mes. Llegó diciendo: <em>"No puedo ahorrar nada. Apenas me alcanza."</em> Llevaba 9 años en esa situación.</p>
                <p>Aplicó el sistema completo desde el primer día. Cada quincena: $800 a LIB, $800 a LP, $800 a EDU, $800 a JUE, $800 a GIV, $4,800 a NEC. Imposible para sus necesidades — tuvo que reducir gastos en suscripciones, comida fuera, ropa innecesaria. Lo logró en 3 meses ajustando.</p>
                <p>En 3 años: <strong>LIB acumulado $46,000 invertido en CETES y un FIBRA inmobiliario. Ya genera $400/mes pasivos.</strong> No es libertad financiera todavía. Pero es el primer flujo en su vida que no depende de su tiempo. Y eso lo construyó con $16K/mes de ingreso.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l18a">
            <div class="quiz-label">Pregunta 1 de 2</div>
            <div class="quiz-question">Según el Sistema de 6 Cuentas, ¿qué porcentaje exacto va a la cuenta de Libertad Financiera (LIB)?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l18a', this, false)">5%</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l18a', this, true)">10%</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l18a', this, false)">15%</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l18a', this, false)">20%</div>
            </div>
            <div class="quiz-feedback" id="quiz_l18a_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Abrir físicamente las 6 cuentas (90 minutos):</strong></p>
                <ol>
                    <li>Calcula los 6 montos con tu ingreso actual (LIB 10%, LP 10%, EDU 10%, JUE 10%, GIV 5-10%, NEC 50-55%).</li>
                    <li>Abre las 6 cuentas. Pueden ser sub-cuentas del mismo banco, apartados en una app (Nu, Klar, etc.) o cuentas separadas.</li>
                    <li>Configura traspaso automático el día que cobras. Si esperas a "decidirlo cada mes", fracasa.</li>
                    <li>Activa el sistema desde tu próximo ingreso. Aunque te incomode. <em>La incomodidad es el patrón viejo siendo desafiado.</em></li>
                </ol>
                <p><strong>Sin este paso, los Archivos siguientes quedan teóricos.</strong> Esta es LA lección operativa del curso.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l18b">
            <div class="quiz-label">Pregunta 2 de 2</div>
            <div class="quiz-question">¿Qué se hace con la cuenta de JUE (Juego)?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l18b', this, false)">Se ahorra junto con LP para compras grandes</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l18b', this, false)">Se usa solo si sobra de las otras cuentas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l18b', this, true)">Se gasta TODA cada mes en algo que disfrutes — sin culpa</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l18b', this, false)">Se invierte en activos especulativos</div>
            </div>
            <div class="quiz-feedback" id="quiz_l18b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>El Sistema de las 6 Cuentas completo con porcentajes exactos</li>
                <li>Por qué LIB es intocable de por vida</li>
                <li>Los 4 errores comunes que destruyen el sistema</li>
                <li>Tu plan concreto para abrir las cuentas en las próximas 24 horas</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 19 (Archivo #15)</strong>: cómo hacer que tu dinero trabaje para ti — el primer paso hacia el ingreso pasivo.</div>
        </div>
        `
    },
    {
        id: 'l19', module: 'Módulo II · Archivo #15', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #15',
        title: 'Tu dinero trabaja para ti, no al revés',
        subtitle: 'Ingresos pasivos: cómo construir el primer flujo que no depende de tu tiempo',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">Los ricos hacen que su dinero trabaje mucho para ellos. Los pobres trabajan mucho por su dinero.</div>
            <div class="pq-author">— T. Harv Eker · Archivo de Riqueza N.º 15</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>La diferencia entre ingreso activo (tu tiempo) e ingreso pasivo (tu capital)</li>
                <li>Los 4 vehículos típicos de ingreso pasivo para principiantes en México</li>
                <li>La meta del "Número de Libertad" — cuánto necesitas pasivo para no trabajar nunca más</li>
                <li>Cómo activar tu primer flujo pasivo este trimestre</li>
            </ul>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/P5SKpIa_ewg?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Gana Dinero Mientras Duermes - Franromerooriginal"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">5 fuentes de ingreso pasivo para que tu dinero trabaje para ti (Franromerooriginal)</div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL NÚMERO DE LIBERTAD</div>
            <div class="aha-quote">"Tu Número de Libertad es: tu gasto mensual actual ÷ 0.005 = tu capital invertido necesario para no trabajar nunca más."</div>
            <div class="aha-author">— Eker (regla del 4-6% anual aplicado mensualmente)</div>
            <div class="aha-body">Si gastas $40,000 al mes, necesitas <strong>$40,000 ÷ 0.005 = $8,000,000 MXN</strong> invertidos al 6% anual para cubrirlos pasivamente de por vida. Suena enorme. Pero conocer el número convierte algo abstracto ("ser rico") en una meta concreta. Y las metas concretas se logran. Las abstractas no.</div>
        </div>

        <div class="content-card">
            <h3>Los 4 vehículos pasivos para principiantes en México</h3>
            <ol class="concept-list">
                <li><strong>CETES / Bonos del Gobierno (riesgo bajo):</strong> rendimiento 9-11% anual históricamente. Punto de partida obligado para tu LIB. Plataforma: cetesdirecto.com</li>
                <li><strong>FIBRAs (rentas inmobiliarias):</strong> compras una participación en bienes raíces que rentan. Pagan dividendos mensuales. Riesgo medio. Plataforma: cualquier broker (GBM, Kuspit, Hapi).</li>
                <li><strong>ETF índices (ej. S&P 500, IPC):</strong> compras "todo el mercado" en una sola operación. Rendimiento histórico 7-10% anual. Riesgo medio. Plataforma: GBM, Kuspit.</li>
                <li><strong>Bienes raíces directos (cuando hay capital):</strong> compras una propiedad para rentar. Rendimiento neto 4-7% + plusvalía. Riesgo medio-bajo si está bien ubicada.</li>
            </ol>
            <p>Empezar con #1 incluso con $1,000 es el primer hito psicológico: ya tienes "algo que trabaja para ti".</p>
        </div>

        <div class="rich-vs-poor">
            <div class="rvp-title">⚖️ INGRESO ACTIVO vs. PASIVO</div>
            <div class="rvp-cols">
                <div class="rvp-rich">
                    <div class="rvp-tag">PASIVO</div>
                    <div class="rvp-line">"Mi capital trabaja por mí"</div>
                    <ul>
                        <li>No depende de mi tiempo</li>
                        <li>Sigue entrando aunque me enferme</li>
                        <li>Escalable: agregando capital, crece</li>
                        <li>Sostiene mi estilo de vida si paro</li>
                    </ul>
                </div>
                <div class="rvp-poor">
                    <div class="rvp-tag">SOLO ACTIVO</div>
                    <div class="rvp-line">"Si no trabajo, no entra"</div>
                    <ul>
                        <li>Depende 100% de mi tiempo</li>
                        <li>Para si me enfermo o me cansa</li>
                        <li>Techo de 24h al día</li>
                        <li>No tengo verdadera libertad</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Profesor universitario, 38 años, Monterrey</div>
            <div class="case-body">
                <p>Ingreso activo: $42,000/mes. Ahorraba $4,200 (10%) mensualmente. Lo metía en una cuenta de débito sin moverlo. Después de 5 años: $252,000 acumulados, cero rendimiento.</p>
                <p>Aplicó el principio: abrió CetesDirecto, movió los $252K a CETES a 28 días al ~10% anual. <strong>Eso solo generó $25,200 al año pasivos, es decir $2,100 al mes.</strong></p>
                <p>Pero el cambio mental fue mayor que el dinero: pasó de <em>"ahorrador pasivo"</em> a <em>"inversionista activo"</em>. En los siguientes 3 años aprendió ETFs, agregó FIBRAs, hoy tiene $980K invertidos generando ~$8K/mes pasivos. <strong>1/5 de su ingreso ya es pasivo</strong>. En 10 años proyecta 100%.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l19a">
            <div class="quiz-label">Pregunta 1 de 2</div>
            <div class="quiz-question">¿Cómo se calcula el "Número de Libertad" según la regla de Eker?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l19a', this, false)">Tu sueldo anual × 25</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l19a', this, true)">Tu gasto mensual actual ÷ 0.005 (asumiendo 6% anual)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l19a', this, false)">Tu sueldo mensual × 1000</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l19a', this, false)">No se puede calcular, depende de muchos factores</div>
            </div>
            <div class="quiz-feedback" id="quiz_l19a_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Activa tu primer flujo pasivo (45 minutos):</strong></p>
                <ol>
                    <li>Calcula tu Número de Libertad: gasto mensual ÷ 0.005. Anótalo.</li>
                    <li>Abre cuenta en CetesDirecto.com.mx (o tu plataforma preferida si ya tienes).</li>
                    <li>Mueve lo que tengas en tu cuenta de LIB (Archivo #14) a CETES de 28 días.</li>
                    <li>Cada mes, en cuanto se acrediten intereses, reinvierte. Es tu primera nieve cayendo en la bola.</li>
                </ol>
                <p>El primer ingreso pasivo, aunque sea de $50 al mes, te cambia la identidad: pasaste de "trabajador" a "inversionista". <strong>Eso lo cambia todo.</strong></p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l19b">
            <div class="quiz-label">Pregunta 2 de 2</div>
            <div class="quiz-question">¿Cuál de estos NO es un ingreso pasivo?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l19b', this, false)">Intereses de CETES</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l19b', this, false)">Renta de un departamento</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l19b', this, true)">Tu sueldo como profesor o consultor (depende de tus horas)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l19b', this, false)">Dividendos de FIBRAs</div>
            </div>
            <div class="quiz-feedback" id="quiz_l19b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>La diferencia matemática entre ingreso activo y pasivo</li>
                <li>Tu Número de Libertad — el capital concreto que necesitas</li>
                <li>Los 4 vehículos pasivos para empezar en México (CETES, FIBRAs, ETFs, raíces)</li>
                <li>Tu primer movimiento ya planeado en las próximas 24h</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 20 (Archivo #16)</strong>: actuar a pesar del miedo — los ricos no son valientes, solo actúan con miedo.</div>
        </div>
        `
    },
    {
        id: 'l20', module: 'Módulo II · Archivo #16', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #16',
        title: 'Actuar a pesar del miedo',
        subtitle: 'Los ricos no son valientes. Son personas con miedo que actúan de todos modos.',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">Los ricos actúan a pesar del miedo. Los pobres dejan que el miedo los detenga. Esa es toda la diferencia.</div>
            <div class="pq-author">— T. Harv Eker · Archivo de Riqueza N.º 16</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>El mito #1 sobre la valentía — y por qué te paraliza</li>
                <li>La diferencia entre "no tener miedo" y "actuar con miedo"</li>
                <li>El método "5 segundos de Mel Robbins" aplicado al dinero</li>
                <li>Cómo entrenar la acción ante incomodidad financiera</li>
            </ul>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/AyhtQrVI9vg?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Mente Millonaria - Actuar a pesar del miedo"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Sobre actuar a pesar del miedo (canal Diego Arévalo Consultor Financiero)</div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL MITO DE LA VALENTÍA</div>
            <div class="aha-quote">"Los millonarios no son menos miedosos que tú. Sienten el mismo nudo en el estómago antes de la decisión grande. La diferencia: actúan de todos modos."</div>
            <div class="aha-author">— T. Harv Eker</div>
            <div class="aha-body">Estás esperando a "no tener miedo" antes de actuar. Esa espera nunca termina. <strong>Nadie deja de tener miedo</strong>. Los ricos aprendieron a actuar con el miedo, no sin él. Sentir miedo y actuar = valentía operativa. Sentir miedo y NO actuar = parálisis disfrazada de prudencia.</div>
        </div>

        <div class="rich-vs-poor">
            <div class="rvp-title">⚖️ ANTE LA MISMA OPORTUNIDAD CON MIEDO</div>
            <div class="rvp-cols">
                <div class="rvp-rich">
                    <div class="rvp-tag">ACTÚA</div>
                    <div class="rvp-line">"Siento miedo. Lo hago igual."</div>
                    <ul>
                        <li>Reconoce el miedo sin dejarlo decidir</li>
                        <li>Toma acción mínima en 5 segundos</li>
                        <li>Aprende sobre la marcha</li>
                        <li>Cada acción reduce el miedo siguiente</li>
                    </ul>
                </div>
                <div class="rvp-poor">
                    <div class="rvp-tag">SE PARALIZA</div>
                    <div class="rvp-line">"Mejor cuando esté seguro."</div>
                    <ul>
                        <li>Espera a "no tener miedo" (nunca llega)</li>
                        <li>Procrastina indefinidamente</li>
                        <li>Inventa nuevas excusas cada semana</li>
                        <li>Cada espera aumenta el miedo siguiente</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="content-card tip">
            <h3>El método de 5 segundos aplicado al dinero</h3>
            <p>Mel Robbins propuso un truco neurológico simple: cuando dudes ante una decisión, cuenta hacia atrás <strong>5-4-3-2-1</strong> y al llegar a 1, actúa. Punto. Sin pensar más.</p>
            <p>Aplicado a dinero:</p>
            <ul>
                <li>Vas a llamar al banco para abrir CetesDirecto. Te entra duda. <strong>5-4-3-2-1 — marca.</strong></li>
                <li>Vas a pedir un aumento. Sientes nudo. <strong>5-4-3-2-1 — toca la puerta.</strong></li>
                <li>Vas a publicar tu servicio en LinkedIn. Te paralizas. <strong>5-4-3-2-1 — publica.</strong></li>
            </ul>
            <p>Funciona porque le ganas al cerebro reactivo (que va a sabotearte) la fracción de segundo necesaria para actuar antes de "pensarlo bien" (que es como llamamos a la procrastinación).</p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Vendedor de autos, 33 años, Mérida</div>
            <div class="case-body">
                <p>Llevaba 7 años queriendo abrir su propia agencia. Le tenía pavor: <em>"¿Y si fracaso? Tengo familia."</em> Estudió, ahorró, leyó. 7 años después, seguía vendiendo para otros.</p>
                <p>Aplicó "actuar con miedo": NO esperar a estar 100% seguro (nunca lo estaría). Hizo una lista de 5 acciones que postergaba por miedo. Para cada una, 5-4-3-2-1 y se ejecutó esa semana: rentar local pequeño, dar de alta su SAT como persona física con actividad empresarial, comprar 3 autos usados de inventario, abrir Facebook business, dar de baja del empleo formal.</p>
                <p>En mes 8 estaba a break-even. En mes 14, ganaba más que en su empleo anterior. <strong>Lo que en 7 años de preparación no logró, en 5 acciones con miedo en 1 semana se desbloqueó.</strong></p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l20a">
            <div class="quiz-label">Pregunta 1 de 2</div>
            <div class="quiz-question">Según el Archivo #16, ¿cuál es la diferencia entre ricos y pobres respecto al miedo?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l20a', this, false)">Los ricos no sienten miedo; los pobres sí</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l20a', this, true)">Ambos sienten miedo igual — la diferencia es que los ricos actúan a pesar de él</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l20a', this, false)">Los ricos eliminan el miedo con técnicas mentales</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l20a', this, false)">El miedo es una invención cultural de los pobres</div>
            </div>
            <div class="quiz-feedback" id="quiz_l20a_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Lista de 5 acciones que postergas por miedo:</strong></p>
                <ol>
                    <li>Anota 5 cosas que vienes postergando 6+ meses por miedo (pedir aumento, abrir cuenta de inversión, lanzar un proyecto, vender algo, hablar con alguien).</li>
                    <li>Para cada una, define el primer paso de MENOR esfuerzo (una llamada, un mensaje, una publicación, una visita).</li>
                    <li>Esta semana, ejecuta el primer paso de UNA de ellas. Usa 5-4-3-2-1.</li>
                    <li>La semana siguiente, otra. La siguiente, otra. En 5 semanas estarás en otro nivel.</li>
                </ol>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l20b">
            <div class="quiz-label">Pregunta 2 de 2</div>
            <div class="quiz-question">¿Para qué sirve el método "5-4-3-2-1" aplicado al dinero?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l20b', this, false)">Para entrar en trance antes de invertir</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l20b', this, true)">Para ganarle al cerebro reactivo la fracción de segundo y actuar antes de procrastinar</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l20b', this, false)">Para calmar el miedo antes de tomar decisiones</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l20b', this, false)">Para sincronizarte con la energía del universo</div>
            </div>
            <div class="quiz-feedback" id="quiz_l20b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Que esperar a "no tener miedo" es la trampa más sofisticada de la parálisis</li>
                <li>La diferencia entre valentía operativa y ausencia de miedo</li>
                <li>El método 5-4-3-2-1 aplicado a decisiones financieras</li>
                <li>Tus 5 acciones postergadas con su primer paso de menor esfuerzo</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 21 (Archivo #17, el último)</strong>: las tres palabras más peligrosas según Eker — "Ya lo sé".</div>
        </div>
        `
    },
    {
        id: 'l21', module: 'Módulo II · Archivo #17', tag: 'tag-modulo2', tagLabel: 'ARCHIVO #17',
        title: 'Aprender y crecer constantemente',
        subtitle: 'Las tres palabras más peligrosas según Eker: "Ya lo sé"',
        content: `
        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">Las tres palabras más peligrosas en mis seminarios son: 'Ya lo sé'. Si lo vives, lo sabes. Si no, has oído de ello — pero no lo sabes.</div>
            <div class="pq-author">— T. Harv Eker · Archivo de Riqueza N.º 17</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>La diferencia entre "saber" y "haber oído" — el filtro definitivo de Eker</li>
                <li>Por qué "ya lo sé" cancela el aprendizaje y por qué los ricos lo evitan</li>
                <li>El compromiso mínimo mensual de aprendizaje financiero</li>
                <li>Cómo armar tu propio "currículo de riqueza" para el próximo año</li>
            </ul>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/cklpzn_6_uc?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Los Ricos Trabajan para Aprender - ANUOR AGUILAR"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Por qué "ya lo sé" cancela el aprendizaje — los ricos estudian siempre (ANUOR AGUILAR)</div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL FILTRO DE EKER</div>
            <div class="aha-quote">"¿Lo sabes? ¿O lo has oído? Saber implica vivir. Si no lo vives, no lo sabes — independientemente de cuántos libros leíste."</div>
            <div class="aha-author">— T. Harv Eker</div>
            <div class="aha-body">El "ya lo sé" es la actitud que cierra el aprendizaje. Eker observa: los ricos llegan a sus seminarios con la mente abierta aunque ya sean millonarios. Los pobres llegan defendiéndose ("eso ya lo había oído"). <strong>La actitud predice el resultado mejor que el coeficiente intelectual.</strong></div>
        </div>

        <div class="content-card">
            <h3>El compromiso mínimo mensual de aprendizaje</h3>
            <p>Eker recomienda un mínimo no negociable de aprendizaje continuo en finanzas:</p>
            <ul>
                <li><strong>1 libro al mes</strong> sobre dinero, inversión, negocio, mentalidad financiera o un dominio relevante.</li>
                <li><strong>1 podcast/curso semanal</strong> sobre finanzas o desarrollo profesional.</li>
                <li><strong>1 seminario o curso al año</strong> en vivo o intensivo.</li>
                <li><strong>1 mentor</strong> con quien hablar al menos cada trimestre.</li>
            </ul>
            <p>Suena mucho. NO lo es. Calcula el tiempo: 30 min/día de podcast + 30 min/día de lectura = 1 hora/día. Es menos de lo que la mayoría dedica a redes sociales.</p>
        </div>

        <div class="rich-vs-poor">
            <div class="rvp-title">⚖️ ANTE UN CONCEPTO NUEVO</div>
            <div class="rvp-cols">
                <div class="rvp-rich">
                    <div class="rvp-tag">CURIOSIDAD</div>
                    <div class="rvp-line">"Cuéntame más"</div>
                    <ul>
                        <li>Asume que NO sabe del todo</li>
                        <li>Pregunta detalles</li>
                        <li>Toma notas activamente</li>
                        <li>Aplica antes de descartar</li>
                    </ul>
                </div>
                <div class="rvp-poor">
                    <div class="rvp-tag">"YA LO SÉ"</div>
                    <div class="rvp-line">"Eso ya lo había oído"</div>
                    <ul>
                        <li>Asume que ya domina</li>
                        <li>Defiende su posición actual</li>
                        <li>Distrae con anécdotas</li>
                        <li>Nunca aplica nada nuevo</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 CASO MÉXICO · Empresario maduro, 56 años, Querétaro</div>
            <div class="case-body">
                <p>30 años de empresa, ingreso millonario, fortuna neta estancada. Llegó a consultoría con la actitud de <em>"ya lo sé todo, vine porque me regalaron el curso"</em>. Los primeros 4 módulos los descartó: <em>"eso es para principiantes"</em>.</p>
                <p>En la lección de las 6 cuentas confesó: <em>"yo no tengo eso. Mi esposa administra todo."</em> Pregunta de Eker: <strong>si lo supieras, ¿lo vivirías?</strong> No lo vivía. No lo sabía.</p>
                <p>Bajó el "ya lo sé" y aplicó. <strong>En 18 meses recuperó control sobre sus finanzas personales, separó cuentas, abrió LIB, descubrió que su fortuna neta era 40% menor de lo que creía.</strong> El primer paso del crecimiento es admitir que algo no se sabe. Eso solo requiere humildad — no inteligencia.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l21a">
            <div class="quiz-label">Pregunta 1 de 2</div>
            <div class="quiz-question">Según Eker, ¿cuál es la diferencia entre "saber" y "haber oído"?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l21a', this, false)">Saber requiere título universitario, oír no</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l21a', this, true)">Saber implica vivirlo. Si no lo vives, lo has oído — pero no lo sabes</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l21a', this, false)">Saber es leer 10 libros del tema, oír es leer solo uno</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l21a', this, false)">Son sinónimos prácticamente</div>
            </div>
            <div class="quiz-feedback" id="quiz_l21a_fb"></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU SIGUIENTE PASO EN LAS PRÓXIMAS 24 HORAS</div>
            <div class="next-step-body">
                <p><strong>Arma tu currículo de riqueza del año (25 minutos):</strong></p>
                <ol>
                    <li>Lista 12 libros (uno por mes) sobre finanzas/negocio/mentalidad. Pide recomendaciones, busca rankings.</li>
                    <li>Selecciona 2 podcasts financieros para escuchar regularmente.</li>
                    <li>Identifica 1 curso o seminario presencial a tomar este año.</li>
                    <li>Anota 3 personas que admires que podrían ser tu mentor — y prepara cómo aproximarte (Archivo #7).</li>
                    <li>Calendariza la primera lectura HOY mismo.</li>
                </ol>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l21b">
            <div class="quiz-label">Pregunta 2 de 2</div>
            <div class="quiz-question">¿Cuál es el compromiso mínimo de aprendizaje financiero según Eker?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l21b', this, false)">1 libro al año basta</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l21b', this, true)">1 libro al mes, 1 podcast/curso semanal, 1 seminario al año, 1 mentor por trimestre</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l21b', this, false)">Solo lo que te enseñen en la escuela</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l21b', this, false)">Aprender es opcional si ya tienes éxito</div>
            </div>
            <div class="quiz-feedback" id="quiz_l21b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>El filtro de Eker: saber vs. haber oído</li>
                <li>Por qué "ya lo sé" cancela el aprendizaje</li>
                <li>El compromiso mínimo mensual de aprendizaje continuo</li>
                <li>Tu currículo personalizado de riqueza para los próximos 12 meses</li>
            </ul>
            <div class="okr-next">→ <strong>¡Has llegado al final de los 17 Archivos!</strong> En la <strong>Lección 22</strong> consolidamos todo con el <strong>examen final</strong> de 15 preguntas.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 22 — CIERRE + EXAMEN FINAL
    // ==========================================================
    {
        id: 'l22', module: 'Examen final', tag: 'tag-final', tagLabel: 'EXAMEN',
        title: 'Examen final del curso',
        subtitle: '15 preguntas · Aprobar con 11 o más para obtener tu certificado',
        content: `
        <div class="lesson-hero" style="background-image:linear-gradient(135deg,rgba(10,37,64,0.85),rgba(10,37,64,0.55)),url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80')">
            <div class="hero-caption">El último paso antes del certificado TRIKLES</div>
        </div>

        <div class="content-card" style="background:#0a2540;color:#faf8f3;padding:24px;">
            <h3 style="color:#c9a961;">📋 Instrucciones del examen</h3>
            <ul>
                <li>15 preguntas de opción múltiple sobre Módulo I y los 17 Archivos de Riqueza</li>
                <li>Necesitas <strong>11 respuestas correctas (73%)</strong> para aprobar</li>
                <li>Puedes consultar tus notas del curso libremente</li>
                <li>Si no apruebas, puedes repetirlo cuantas veces quieras</li>
                <li>Al aprobar, se habilita tu certificado TRIKLES en la siguiente lección</li>
            </ul>
        </div>

        <div class="quiz-container" id="final_q1">
            <div class="quiz-label">Pregunta 1 de 15 · Módulo I</div>
            <div class="quiz-question">¿Cuál es la fórmula del manifiesto corregida por Eker?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q1', this, false)">Esfuerzo → Suerte → Resultados</div>
                <div class="quiz-option" onclick="checkFinal('final_q1', this, true)">Programación → Pensamientos → Sentimientos → Acciones → Resultados</div>
                <div class="quiz-option" onclick="checkFinal('final_q1', this, false)">Pensamientos → Acciones → Resultados</div>
                <div class="quiz-option" onclick="checkFinal('final_q1', this, false)">Educación → Trabajo → Dinero</div>
            </div>
            <div class="quiz-feedback" id="final_q1_fb"></div>
        </div>

        <div class="quiz-container" id="final_q2">
            <div class="quiz-label">Pregunta 2 de 15 · Módulo I</div>
            <div class="quiz-question">¿Cuáles son los 3 canales de programación financiera según Eker?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q2', this, false)">Familia, escuela y trabajo</div>
                <div class="quiz-option" onclick="checkFinal('final_q2', this, true)">Programación verbal, modelaje e incidentes específicos</div>
                <div class="quiz-option" onclick="checkFinal('final_q2', this, false)">Genética, ambiente y carácter</div>
                <div class="quiz-option" onclick="checkFinal('final_q2', this, false)">Padre, madre y entorno social</div>
            </div>
            <div class="quiz-feedback" id="final_q2_fb"></div>
        </div>

        <div class="quiz-container" id="final_q3">
            <div class="quiz-label">Pregunta 3 de 15 · Archivo #1</div>
            <div class="quiz-question">¿Cuáles son los 3 idiomas del víctima según el Archivo #1?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q3', this, true)">Culpar, justificar y quejarse</div>
                <div class="quiz-option" onclick="checkFinal('final_q3', this, false)">Pedir, exigir y reclamar</div>
                <div class="quiz-option" onclick="checkFinal('final_q3', this, false)">Llorar, gritar y huir</div>
                <div class="quiz-option" onclick="checkFinal('final_q3', this, false)">Mentir, fingir y esconderse</div>
            </div>
            <div class="quiz-feedback" id="final_q3_fb"></div>
        </div>

        <div class="quiz-container" id="final_q4">
            <div class="quiz-label">Pregunta 4 de 15 · Archivo #2</div>
            <div class="quiz-question">"Que me alcance" como meta financiera es peligroso porque...</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q4', this, false)">Es muy ambiciosa</div>
                <div class="quiz-option" onclick="checkFinal('final_q4', this, true)">Programa la mente para vivir al borde de la suficiencia, sin margen para acumular</div>
                <div class="quiz-option" onclick="checkFinal('final_q4', this, false)">Es muy específica</div>
                <div class="quiz-option" onclick="checkFinal('final_q4', this, false)">Asusta a la gente cercana</div>
            </div>
            <div class="quiz-feedback" id="final_q4_fb"></div>
        </div>

        <div class="quiz-container" id="final_q5">
            <div class="quiz-label">Pregunta 5 de 15 · Archivo #3</div>
            <div class="quiz-question">Según Eker, el compromiso se distingue del deseo porque...</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q5', this, false)">Es más emocional</div>
                <div class="quiz-option" onclick="checkFinal('final_q5', this, true)">Elimina el plan B — no permite contradicciones</div>
                <div class="quiz-option" onclick="checkFinal('final_q5', this, false)">Cuesta dinero</div>
                <div class="quiz-option" onclick="checkFinal('final_q5', this, false)">Es para más expertos</div>
            </div>
            <div class="quiz-feedback" id="final_q5_fb"></div>
        </div>

        <div class="quiz-container" id="final_q6">
            <div class="quiz-label">Pregunta 6 de 15 · Archivo #4</div>
            <div class="quiz-question">Las 4 variables de la Ley de los Ingresos son:</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q6', this, true)">Cuán bien lo haces × cuánto haces × a cuántos sirves × cuánto paga el mercado</div>
                <div class="quiz-option" onclick="checkFinal('final_q6', this, false)">Talento × esfuerzo × suerte × contactos</div>
                <div class="quiz-option" onclick="checkFinal('final_q6', this, false)">Ingresos + ahorros + inversiones + deuda</div>
                <div class="quiz-option" onclick="checkFinal('final_q6', this, false)">Educación × experiencia × geografía × idioma</div>
            </div>
            <div class="quiz-feedback" id="final_q6_fb"></div>
        </div>

        <div class="quiz-container" id="final_q7">
            <div class="quiz-label">Pregunta 7 de 15 · Archivo #5</div>
            <div class="quiz-question">La regla "Listo, dispara, apunta" significa:</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q7', this, false)">Actuar sin pensar nunca</div>
                <div class="quiz-option" onclick="checkFinal('final_q7', this, true)">Actuar con información suficiente (no perfecta) y corregir sobre la marcha</div>
                <div class="quiz-option" onclick="checkFinal('final_q7', this, false)">Esperar a saberlo todo antes de moverse</div>
                <div class="quiz-option" onclick="checkFinal('final_q7', this, false)">Disparar muchas veces para acertar</div>
            </div>
            <div class="quiz-feedback" id="final_q7_fb"></div>
        </div>

        <div class="quiz-container" id="final_q8">
            <div class="quiz-label">Pregunta 8 de 15 · Archivo #7</div>
            <div class="quiz-question">El "Test de los 5" indica que tu nivel financiero próximo se predice por:</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q8', this, true)">El promedio del ingreso de las 5 personas con las que pasas más tiempo</div>
                <div class="quiz-option" onclick="checkFinal('final_q8', this, false)">Tu IQ multiplicado por 5</div>
                <div class="quiz-option" onclick="checkFinal('final_q8', this, false)">Los 5 libros que has leído más recientemente</div>
                <div class="quiz-option" onclick="checkFinal('final_q8', this, false)">Tu salario actual × 5</div>
            </div>
            <div class="quiz-feedback" id="final_q8_fb"></div>
        </div>

        <div class="quiz-container" id="final_q9">
            <div class="quiz-label">Pregunta 9 de 15 · Archivo #9</div>
            <div class="quiz-question">La pregunta clave de Eker ante un problema grande es:</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q9', this, false)">"¿Por qué a mí?"</div>
                <div class="quiz-option" onclick="checkFinal('final_q9', this, false)">"¿De quién es la culpa?"</div>
                <div class="quiz-option" onclick="checkFinal('final_q9', this, true)">"¿Quién tendría que ser yo para que este problema sea fácil?"</div>
                <div class="quiz-option" onclick="checkFinal('final_q9', this, false)">"¿Cómo evito esto la próxima vez?"</div>
            </div>
            <div class="quiz-feedback" id="final_q9_fb"></div>
        </div>

        <div class="quiz-container" id="final_q10">
            <div class="quiz-label">Pregunta 10 de 15 · Archivo #10</div>
            <div class="quiz-question">La respuesta ideal ante un elogio según Eker es:</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q10', this, false)">"No es para tanto"</div>
                <div class="quiz-option" onclick="checkFinal('final_q10', this, false)">"Cualquiera lo hubiera hecho"</div>
                <div class="quiz-option" onclick="checkFinal('final_q10', this, true)">"Gracias" — sin justificar ni minimizar</div>
                <div class="quiz-option" onclick="checkFinal('final_q10', this, false)">"Te lo agradezco pero exageras"</div>
            </div>
            <div class="quiz-feedback" id="final_q10_fb"></div>
        </div>

        <div class="quiz-container" id="final_q11">
            <div class="quiz-label">Pregunta 11 de 15 · Archivo #13</div>
            <div class="quiz-question">La fórmula correcta de Fortuna Neta es:</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q11', this, false)">Ingreso mensual × 12</div>
                <div class="quiz-option" onclick="checkFinal('final_q11', this, true)">Activos − Pasivos</div>
                <div class="quiz-option" onclick="checkFinal('final_q11', this, false)">Sueldo + activos</div>
                <div class="quiz-option" onclick="checkFinal('final_q11', this, false)">Ingresos − Gastos</div>
            </div>
            <div class="quiz-feedback" id="final_q11_fb"></div>
        </div>

        <div class="quiz-container" id="final_q12">
            <div class="quiz-label">Pregunta 12 de 15 · Archivo #14 (Sistema 6 cuentas)</div>
            <div class="quiz-question">¿Cuál es el porcentaje correcto para la cuenta de Libertad Financiera (LIB)?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q12', this, false)">5%</div>
                <div class="quiz-option" onclick="checkFinal('final_q12', this, true)">10%</div>
                <div class="quiz-option" onclick="checkFinal('final_q12', this, false)">25%</div>
                <div class="quiz-option" onclick="checkFinal('final_q12', this, false)">El que sobre al final del mes</div>
            </div>
            <div class="quiz-feedback" id="final_q12_fb"></div>
        </div>

        <div class="quiz-container" id="final_q13">
            <div class="quiz-label">Pregunta 13 de 15 · Archivo #14</div>
            <div class="quiz-question">La cuenta JUE (Juego) del sistema de 6 cuentas se utiliza para:</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q13', this, false)">Invertir en bolsa</div>
                <div class="quiz-option" onclick="checkFinal('final_q13', this, false)">Ahorrar para emergencias</div>
                <div class="quiz-option" onclick="checkFinal('final_q13', this, true)">Gastar TODO cada mes en algo que disfrutes, sin culpa</div>
                <div class="quiz-option" onclick="checkFinal('final_q13', this, false)">Pagar deudas pendientes</div>
            </div>
            <div class="quiz-feedback" id="final_q13_fb"></div>
        </div>

        <div class="quiz-container" id="final_q14">
            <div class="quiz-label">Pregunta 14 de 15 · Archivo #16</div>
            <div class="quiz-question">Según el Archivo #16, ¿qué diferencia a los ricos de los pobres respecto al miedo?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q14', this, false)">Los ricos no sienten miedo</div>
                <div class="quiz-option" onclick="checkFinal('final_q14', this, true)">Sienten el mismo miedo — la diferencia es que actúan a pesar de él</div>
                <div class="quiz-option" onclick="checkFinal('final_q14', this, false)">Los ricos eliminan el miedo con meditación</div>
                <div class="quiz-option" onclick="checkFinal('final_q14', this, false)">El miedo solo afecta a los pobres</div>
            </div>
            <div class="quiz-feedback" id="final_q14_fb"></div>
        </div>

        <div class="quiz-container" id="final_q15">
            <div class="quiz-label">Pregunta 15 de 15 · Archivo #17</div>
            <div class="quiz-question">Según Eker, ¿cuáles son "las tres palabras más peligrosas"?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q15', this, false)">"No tengo tiempo"</div>
                <div class="quiz-option" onclick="checkFinal('final_q15', this, false)">"Algún día lo haré"</div>
                <div class="quiz-option" onclick="checkFinal('final_q15', this, true)">"Ya lo sé"</div>
                <div class="quiz-option" onclick="checkFinal('final_q15', this, false)">"No es para mí"</div>
            </div>
            <div class="quiz-feedback" id="final_q15_fb"></div>
        </div>

        <div class="content-card tip" style="margin-top:30px;">
            <h3>🎯 Al completar las 15 preguntas</h3>
            <p>El sistema calcula automáticamente tu puntaje. Si obtienes <strong>11 o más correctas</strong>, se desbloquea tu certificado TRIKLES en la siguiente lección.</p>
            <p>Si no apruebas, no te preocupes: <em>el examen está diseñado para asegurar que dominas lo esencial</em>. Repasa las lecciones donde tuviste dificultad y vuelve a intentarlo cuando estés listo.</p>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 23 — CERTIFICADO
    // ==========================================================
    {
        id: 'certificate', module: 'Certificado', tag: 'tag-cert', tagLabel: 'CERTIFICADO',
        title: 'Tu certificado del curso',
        subtitle: 'Reconocimiento oficial de TRIKLES',
        // El certificado (con nombre real, fecha, folio y descargo legal) lo inyecta
        // curso.html vía ensureCertificateElement() al detectar id:'certificate'.
        // No incrustar aquí un bloque de certificado: sin #certificateEl el @media print
        // oculta toda la lección y la hoja sale en blanco.
        content: `
        <div class="content-card" style="margin-top:30px;background:#faf8f3;border-left:3px solid #c9a961;">
            <h3 style="color:#0a2540;">¿Qué sigue ahora?</h3>
            <ol class="concept-list">
                <li><strong>Abre tus 6 cuentas físicas</strong> si aún no lo hiciste (Lección 18). Sin esto, el curso queda en teoría.</li>
                <li><strong>Activa tu primer flujo pasivo</strong> con CETES o equivalente (Lección 19) — aunque sea con $1,000.</li>
                <li><strong>Identifica tus 3 ricos referentes</strong> (Lección 10) y agéndate alguna conversación cada trimestre.</li>
                <li><strong>Cura tu círculo</strong>: agrega 1-2 personas a tu Test de los 5 que operen en el siguiente nivel (Lección 11).</li>
                <li><strong>Repite este curso cada 12 meses.</strong> Eker recomienda revisitar los Archivos anualmente — la programación es trabajo de toda la vida, no de un sprint.</li>
            </ol>
        </div>

        <div class="content-card" style="margin-top:20px;background:#0a2540;color:#faf8f3;">
            <h3 style="color:#c9a961;">Un mensaje final del instructor</h3>
            <p>Has llegado al final del curso. Pero estás en el comienzo real del cambio.</p>
            <p>T. Harv Eker dice algo que conviene grabar: <em>"saber no basta. Si no lo vives, no lo sabes — lo oíste."</em> Las próximas 8 semanas son las más importantes: ahí tu cerebro decide si lo aprendido se vuelve hábito o se queda como recuerdo bonito.</p>
            <p>El 80% de los que terminan un curso así no aplica nada. El otro 20% — la <em>minoría disciplinada</em> — cambia su patrón financiero de por vida. La diferencia entre los dos grupos no es talento ni inteligencia. Es ejecución consistente de los pequeños ejercicios diarios que cada lección te dejó.</p>
            <p>Te deseo que estés en el 20%. Cuando dentro de 5 años revises tu patrimonio neto y veas que dobló o triplicó, vas a entender por qué Eker insiste tanto en que el dinero es resultado, no causa. <strong>Tú eres la causa. Tú eres la mente. Esto cambia todo.</strong></p>
            <p style="margin-top:15px;font-style:italic;">— LADE Germán Solís Muñoz<br>TRIKLES · Academia de Gerencia</p>
        </div>
        `
    }

    ] // fin lessons
};

// Registro global (igual que los demás cursos)
if (typeof window !== 'undefined') {
    window.COURSE_MENTE_MILLONARIA = COURSE_MENTE_MILLONARIA;
    window.TRIKLES_COURSES = window.TRIKLES_COURSES || {};
    window.TRIKLES_COURSES['mente-millonaria'] = COURSE_MENTE_MILLONARIA;
}
