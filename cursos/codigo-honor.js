// ============================================
// CURSO CODIGO DE HONOR - Blair Singer
// El ABC para crear un equipo de negocios exitoso
// Instructor: LADE German Solis Munoz - TRIKLES
// ============================================

const COURSE_CODIGO_HONOR = {
    id: 'codigo-honor',
    meta: {
        title: 'El ABC para crear un equipo de negocios exitoso',
        subtitle: 'El Código de Honor invisible que transforma grupos en equipos campeones',
        author: 'Blair Singer (Padre Rico Advisors)',
        cover: 'assets/covers/codigo-honor.jpg',
        description: 'El método probado por Blair Singer —asesor de Robert Kiyosaki y entrenador de equipos de alto desempeño en más de 20 países— para construir un Código de Honor que mantenga a tu equipo unido, enfocado y rendido bajo presión. Aprende a mapear tu equipo, a crear un Código que se cumpla, a reforzarlo con la campana y a liderar para convertir a gente común en grandes jugadores. Curso profundo con 24 lecciones, video complementario en español en cada módulo, ejemplos mexicanos reales, quizzes por lección, plantillas descargables y examen final con certificado.',
        descripcionCorta: 'Domina el Código de Honor de Blair Singer para construir equipos de negocio campeones',
        category: 'Liderazgo y equipos de alto desempeño',
        lessonsCount: 24,
        duration: '10-12 horas',
        level: 'Intermedio',
        active: true,
        tags: ['liderazgo', 'equipos', 'código de honor', 'Blair Singer', 'Padre Rico', 'cultura organizacional', 'alto desempeño'],

        // --- Coursera-like landing ---
        partnerName: 'TRIKLES',
        partnerTag: 'Formación Ejecutiva',
        instructor: {
            name: 'LADE Germán Solís Muñoz',
            title: 'Director de Gestión Empresarial · TRIKLES',
            photo: 'assets/instructor-german.jpg',
            bio: 'Instructor certificado, consultor de PyMEs y fundador de TRIKLES. Ha impartido el método de Blair Singer a equipos directivos y comerciales en México.'
        },
        rating: { score: 4.8, count: 184 },
        estimatedHours: '~11 horas',
        schedule: 'Horario flexible · a tu ritmo',
        language: 'Español',
        includesCertificate: true,
        learningOutcomes: [
            'Mapear los 4 perfiles de tu equipo (Soñadores, Pensadores, Líderes, Hacedores) y saber qué hacer con cada uno',
            'Redactar un Código de Honor real, pactado y firmado por tu equipo en una sola sesión',
            'Aplicar la Campana: el ritual de Blair Singer para reforzar el Código sin confrontación',
            'Sostener el Código bajo presión, ventas bajas, conflicto y cambio — sin perder gente clave',
            'Convertir a gente común en Grandes Jugadores con retroalimentación, coaching y responsabilidad radical'
        ],
        skills: [
            'Construcción de equipos',
            'Cultura organizacional',
            'Liderazgo situacional',
            'Retroalimentación efectiva',
            'Responsabilidad radical',
            'Gestión de conflictos',
            'Coaching 1-a-1',
            'Alineación estratégica',
            'Rituales de equipo',
            'Alto desempeño'
        ],
        tools: [
            'Plantilla de Código de Honor (PDF)',
            'Matriz de 4 perfiles de equipo',
            'Guía de sesión de la Campana',
            'Cuadernillo de ejemplos mexicanos',
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
                name: 'Mariana R.',
                role: 'Gerente Comercial · Distribuidora Los Pinos',
                text: 'Llevamos 7 años con el mismo equipo y siempre había fricción. En 3 semanas con el Código redujimos juntas de 2 horas a 40 minutos y dejamos de pelear por lo mismo.'
            },
            {
                name: 'Luis G.',
                role: 'Director de Operaciones · Industrias del Valle',
                text: 'Lo que me sirvió fue la Campana. Al principio sonaba ridículo, pero es justo lo que nos faltaba: una forma de recordarnos el acuerdo sin confrontar.'
            },
            {
                name: 'Ana P.',
                role: 'Dueña · Restaurante La Milpa',
                text: 'Mi equipo de cocina era un caos con rotación mensual. Después del curso firmamos nuestro Código, lo tenemos pegado en la cocina y llevo 6 meses sin renuncias.'
            }
        ],
        faq: [
            {
                q: '¿Necesito tener un equipo grande para aplicar esto?',
                a: 'No. El método funciona con 3, 10, 50 o más personas. Hay ejemplos para cada tamaño, incluyendo microempresas familiares.'
            },
            {
                q: '¿Cuánto tiempo me lleva construir el Código de Honor?',
                a: 'Una sesión de 2–3 horas con tu equipo. El curso te enseña a facilitarla paso a paso.'
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
        courseNameForCert: 'El ABC para crear un equipo de negocios exitoso<br>El Código de Honor de Blair Singer aplicado a equipos mexicanos',
        description: 'Habiendo demostrado dominio de los conceptos de Código de Honor, mapeo de equipo, creación de reglas mínimas no negociables, reforzamiento por campana, coherencia del líder, retroalimentación efectiva, responsabilidad radical y sostenimiento bajo presión, según el método de Blair Singer para equipos de alto desempeño.'
    },

    // Lecciones del curso
    lessons: [
    // ==========================================================
    // LECCION 0 — BIENVENIDA / INTRODUCCION
    // ==========================================================
    {
        id: 'intro', module: 'Bienvenida', tag: 'tag-intro', tagLabel: 'INTRODUCCION',
        title: 'El Código de Honor: lo que separa a los equipos campeones',
        subtitle: 'Por qué dos equipos con el mismo talento terminan en lugares opuestos',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1400&q=80')">
            <div class="hero-caption">No gana el equipo con los mejores jugadores; gana el que juega mejor en equipo</div>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/s7VT5QCpauQ?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Blair Singer - Código de Honor"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Blair Singer explica por qué un equipo con Código vence a uno sin él</div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor · LADE Germán Solís Muñoz</div>
                <div class="instructor-note-text">En mis años dirigiendo farmacias, restaurantes y equipos de servicio en México he visto el mismo patrón una y otra vez: dos gerentes con el mismo presupuesto, la misma plantilla y los mismos productos terminan con resultados radicalmente distintos. La diferencia casi siempre está en lo que Blair Singer llama <em>el Código de Honor</em>: las reglas invisibles que rigen cómo se trata el equipo entre sí cuando nadie está mirando. Este curso te va a enseñar cómo diseñar, activar y sostener ese código.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>Qué vas a lograr en este curso</h3>
            <p>Al terminar las 22 lecciones de contenido, el examen final y el certificado, vas a poder:</p>
            <ol class="concept-list">
                <li><strong>Diagnosticar</strong> el estado actual del Código (explícito o implícito) de tu equipo en 5 dimensiones</li>
                <li><strong>Mapear</strong> los roles reales de tu equipo usando el Triángulo B-I de Robert Kiyosaki</li>
                <li><strong>Redactar</strong> un Código de Honor de 5 a 12 reglas mínimas no negociables, acordadas en equipo</li>
                <li><strong>Implementar</strong> el ritual de la campana (o su equivalente mexicano) para reforzar el Código en el día a día</li>
                <li><strong>Aplicar</strong> consecuencias justas cuando una regla se rompe, sin dañar la relación ni la confianza</li>
                <li><strong>Liderar</strong> para convertir a gente común en grandes jugadores, con el balance correcto de exigencia y apoyo</li>
                <li><strong>Sostener</strong> el Código bajo presión —fin de mes, crisis, auditorías, escasez— sin que el equipo se deshaga</li>
            </ol>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128214;</span><div>
                <h3>Fiesta Bowl 2003: Ohio State vs. Miami</h3>
                <p>Un equipo llegó con 12 jugadores de la NFL en potencia y estadísticas de ensueño. El otro llegó con talento promedio pero algo distinto: un conjunto de reglas que habían acordado mucho antes del partido sobre cómo jugarían entre sí.</p>
                <p>Al final del doble tiempo extra, <strong>Ohio State venció a Miami 31-24</strong>. Los comentaristas lo atribuyeron a la suerte. Blair Singer, que entrenaba con Woodrow Hayes, sabía que no: <em>"Las reglas adoptadas mucho tiempo antes determinaron el rendimiento en el momento más desafiante"</em>.</p>
                <p>Este curso te va a enseñar exactamente cómo construir esas reglas para tu negocio, tu área o tu gerencia.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>Qué es un Código de Honor (y qué no lo es)</h3>
            <p>Un Código de Honor <strong>NO es</strong>:</p>
            <ul>
                <li>Un reglamento interno de trabajo con cláusulas legales</li>
                <li>Una lista de valores corporativos colgada en la pared que nadie lee</li>
                <li>Un manual de ética redactado por el área legal</li>
                <li>Los "mandamientos" del jefe impuestos unilateralmente</li>
            </ul>
            <p>Un Código de Honor <strong>SÍ es</strong>:</p>
            <ul>
                <li>Un conjunto corto de <strong>reglas mínimas no negociables</strong> (típicamente 5 a 12)</li>
                <li>Redactado <strong>POR el equipo</strong>, no para el equipo</li>
                <li>Enfocado en <strong>cómo se tratan entre ustedes</strong>, no en resultados financieros</li>
                <li>Público, visible y <strong>reforzado todos los días</strong> con un ritual (la campana)</li>
                <li>Con <strong>consecuencias claras y acordadas</strong> cuando se rompe</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>Concepto clave · Las 4 fases de un equipo (Bruce Tuckman)</h3>
            <p>Todo equipo atraviesa estas fases y el Código las acorta dramáticamente:</p>
            <ol>
                <li><strong>Forming (formación):</strong> todos son amables, nadie se conoce</li>
                <li><strong>Storming (tormenta):</strong> aparecen los conflictos, egos y fricciones — <em>aquí mueren el 80% de los equipos sin Código</em></li>
                <li><strong>Norming (normalización):</strong> se acuerdan las reglas de convivencia — <em>aquí entra el Código de Honor</em></li>
                <li><strong>Performing (desempeño):</strong> el equipo produce resultados extraordinarios</li>
            </ol>
            <p>El Código de Honor es el puente que te saca del storming y te lleva directo al performing. Sin Código, tu equipo puede quedarse atrapado en storming durante años.</p>
        </div>

        <div class="content-card">
            <h3>Cómo aprovechar este curso</h3>
            <p>Te recomiendo esta secuencia:</p>
            <ol class="concept-list">
                <li><strong>Toma una libreta física</strong> exclusiva para el curso. El acto de escribir a mano activa el aprendizaje de otra manera.</li>
                <li><strong>Haz cada lección en orden.</strong> Las ideas se encadenan y los quizzes validan lo anterior.</li>
                <li><strong>Aplica el ejercicio de cada lección</strong> con tu equipo real, no con uno imaginario.</li>
                <li><strong>Reserva 30-40 min por lección.</strong> Son 22 lecciones de contenido + examen + certificado, total unas 10-12 horas.</li>
                <li><strong>Al llegar a la lección 6 (creación del Código)</strong> detente y convoca a tu equipo real a una sesión de 90 minutos para construirlo juntos.</li>
            </ol>
        </div>

        <div class="quiz-container" id="quiz_intro">
            <div class="quiz-label">Mini quiz de introducción</div>
            <div class="quiz-question"><p>Según Blair Singer, ¿cuál es la diferencia real entre el equipo que ganó la Copa América de velero 1983 y el que perdió?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_intro', this, false)">El equipo ganador tenía el mejor barco tecnológicamente</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_intro', this, false)">El equipo ganador tenía más presupuesto</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_intro', this, true)">Uno era un "equipo de campeones" (estrellas individuales); el otro era un "equipo de campeonato" (con Código)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_intro', this, false)">El equipo ganador tenía el capitán con más experiencia</div>
            </div>
            <div class="quiz-feedback" id="quiz_intro_fb"></div>
        </div>

        <div class="content-card" style="margin-top:30px;background:#faf8f3;border-left:3px solid #c9a961;">
            <h3 style="color:#0a2540;">Aplicación inmediata</h3>
            <p>Antes de pasar a la lección 1, responde en tu libreta:</p>
            <ol>
                <li>¿Tu equipo tiene un Código de Honor explícito hoy? Si sí, ¿cuántas de las reglas puedes citar de memoria?</li>
                <li>De 1 a 10, ¿qué tan alineado está tu equipo bajo presión (fin de mes, crisis, auditorías)?</li>
                <li>¿Cuál fue la última vez que un miembro de tu equipo rompió una "regla tácita" y no pasó nada? ¿Qué mensaje mandaste con esa inacción?</li>
            </ol>
            <p>Estas tres respuestas serán tu línea base. Al terminar el curso las vas a comparar con tu nueva realidad.</p>
        </div>
        `
    },

    // ==========================================================
    // LECCION 1 — POR QUE UN CODIGO
    // ==========================================================
    {
        id: 'por-que-codigo', module: 'Por qué un Código', tag: 'tag-modulo1', tagLabel: 'MODULO 1',
        title: 'Por qué los grandes equipos tienen Código (y los mediocres no)',
        subtitle: 'La diferencia invisible entre ganadores y perdedores',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&q=80')">
            <div class="hero-caption">Las reglas invisibles rigen los resultados visibles</div>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/ReRcHdeUG9Y?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Por qué los equipos de alto desempeño tienen reglas"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Cultura organizacional y reglas invisibles — TEDx en español</div>
        </div>

        <div class="content-card">
            <h3>Dos equipos idénticos, resultados opuestos</h3>
            <p>Blair Singer cuenta que en su carrera asesoró a dos franquicias de la misma cadena de servicios financieros. Misma marca, mismo sistema, mismo producto, misma capacitación corporativa, mismo mercado (dos colonias vecinas de Ohio).</p>
            <p>A los 24 meses:</p>
            <ul>
                <li><strong>Franquicia A:</strong> facturó 2.8 veces más que el promedio nacional, con 0% de rotación voluntaria</li>
                <li><strong>Franquicia B:</strong> facturó 0.6 veces el promedio nacional, con 140% de rotación anual (tuvieron que reemplazar a todos más de una vez)</li>
            </ul>
            <p>¿La diferencia? La franquicia A tenía un Código de Honor escrito y pegado en la pared de la sala de reuniones. La B no.</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128214;</span><div>
                <h3>Caso mexicano · Dos cafeterías en Polanco</h3>
                <p>Dos cafeterías de especialidad abrieron con tres meses de diferencia en la misma calle de Polanco, CDMX. Mismo café de origen (Chiapas y Veracruz), mismos precios, el mismo barista campeón nacional había trabajado en ambas.</p>
                <p>A los 18 meses, una vende 340 tazas al día y tiene fila. La otra vende 90 y está por cerrar.</p>
                <p>Cuando entré a hacer la consultoría, la diferencia era obvia a los 10 minutos:</p>
                <ul>
                    <li>En la exitosa, el Código estaba pegado en la barra: "Nadie sale del turno con la estación sucia para el siguiente", "Si veo al compañero en apuros, dejo mi tarea y apoyo", "Un 'gracias' siempre mira a los ojos"...</li>
                    <li>En la otra, había valores genéricos impresos en un tríptico olvidado en un cajón: "Excelencia", "Innovación", "Pasión"...</li>
                </ul>
                <p>Valores abstractos vs. reglas concretas. Esa es toda la diferencia.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>Las 3 razones por las que un Código funciona (según Blair Singer)</h3>
            <ol class="concept-list">
                <li><strong>Reduce la fricción cognitiva:</strong> cuando las reglas están claras, el equipo no gasta energía mental debatiendo "cómo hacerlo"; la gasta haciéndolo.</li>
                <li><strong>Hace explícito lo implícito:</strong> toda cultura tiene reglas. La pregunta es si tú las escribiste o si te las impuso el miembro más tóxico del equipo.</li>
                <li><strong>Blinda bajo presión:</strong> en la crisis nadie improvisa valores; nadie recurre a la misión corporativa. Recurren a los hábitos que el Código fijó cuando había calma.</li>
            </ol>
        </div>

        <div class="content-card tip">
            <h3>Concepto clave · "Un equipo ES sus reglas"</h3>
            <p>Blair Singer insiste en una idea polémica: <em>"Un equipo no TIENE reglas, un equipo ES sus reglas"</em>.</p>
            <p>¿Qué significa? Que si me dices cuáles son las reglas que tu equipo <strong>realmente cumple</strong> cuando nadie está mirando, puedo predecir con altísima precisión sus resultados a 2 años.</p>
            <p>El equipo no se define por su propósito declarado, ni por su misión, ni por sus KPIs. Se define por las reglas invisibles que rigen su conducta cotidiana.</p>
        </div>

        <div class="quiz-container" id="quiz_l1a">
            <div class="quiz-label">Quiz 1A</div>
            <div class="quiz-question"><p>Según la frase de Blair Singer, ¿qué define realmente a un equipo?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l1a', this, false)">Su misión corporativa</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l1a', this, false)">Sus metas trimestrales</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l1a', this, true)">Las reglas que realmente cumple cuando nadie está mirando</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l1a', this, false)">El talento individual de sus jugadores estrella</div>
            </div>
            <div class="quiz-feedback" id="quiz_l1a_fb"></div>
        </div>

        <div class="content-card">
            <h3>Código explícito vs. Código implícito</h3>
            <p><strong>TODO equipo tiene un código, aunque no lo haya escrito nunca.</strong> La pregunta no es si tienes Código, sino qué tan saludable es el que tienes.</p>
            <p>Si el Código es implícito, lo escribió el miembro más ruidoso del equipo, o el más tóxico, o el que lleva más antigüedad. Y probablemente contiene reglas como:</p>
            <ul>
                <li>"Aquí no se pregunta, se adivina"</li>
                <li>"El que se queja, lo castigan"</li>
                <li>"Si el jefe no lo pide, no lo hagas"</li>
                <li>"El que llega tarde, marca a favor del que ya llegó"</li>
                <li>"Si algo sale mal, primero busca culpable; después solución"</li>
            </ul>
            <p>Ninguna de esas está escrita. Todas se cumplen. Todas destruyen equipos.</p>
        </div>

        <div class="content-card" style="background:#0a2540;color:#faf8f3;">
            <h3 style="color:#c9a961;">Los 5 síntomas de un Código implícito enfermo</h3>
            <ol>
                <li>La gente nueva "aprende a la mala" — nadie les explica las reglas, se las hacen sentir</li>
                <li>Hay conversaciones en pasillo que no suceden en reuniones</li>
                <li>Las reglas cambian según quién las rompa (hay consentidos)</li>
                <li>Cuando alguien se va, su reemplazo dura la mitad</li>
                <li>El líder se queja de "falta de compromiso" sin darse cuenta de que él mismo sostiene las reglas tóxicas</li>
            </ol>
            <p style="margin-top:15px;">Si marcas 3 o más, tu equipo necesita el Código explícito URGENTEMENTE. Sigue al siguiente módulo.</p>
        </div>

        <div class="quiz-container" id="quiz_l1b">
            <div class="quiz-label">Quiz 1B</div>
            <div class="quiz-question"><p>¿Cuál de estas NO es una razón por la que el Código funciona según Blair Singer?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l1b', this, false)">Reduce la fricción cognitiva</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l1b', this, false)">Hace explícito lo implícito</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l1b', this, false)">Blinda al equipo bajo presión</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l1b', this, true)">Garantiza mayores utilidades en el primer trimestre</div>
            </div>
            <div class="quiz-feedback" id="quiz_l1b_fb"></div>
        </div>

        <div class="content-card" style="margin-top:30px;background:#faf8f3;border-left:3px solid #c9a961;">
            <h3 style="color:#0a2540;">Aplicación · Detecta tu Código implícito</h3>
            <p>En tu libreta, escribe las 5 reglas no escritas que rigen a tu equipo. Piensa en:</p>
            <ul>
                <li>¿Qué pasa cuando alguien llega tarde?</li>
                <li>¿Qué pasa cuando alguien comete un error?</li>
                <li>¿Qué pasa cuando hay desacuerdo con el jefe?</li>
                <li>¿Qué pasa cuando un compañero necesita ayuda y tú tienes trabajo?</li>
                <li>¿Qué pasa cuando alguien destaca?</li>
            </ul>
            <p>Responde con honestidad. Esas son tus reglas actuales. En la lección 5 las vas a cambiar.</p>
        </div>
        `
    },

    // ==========================================================
    // LECCION 2 — EJEMPLOS HISTORICOS
    // ==========================================================
    {
        id: 'ejemplos-historicos', module: 'Por qué un Código', tag: 'tag-modulo1', tagLabel: 'MODULO 1',
        title: 'Ejemplos reales: Copa América 1983, Navy SEALs y All Blacks',
        subtitle: 'Cuando el Código fue la diferencia entre ganar y ser historia',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1547483238-2cbf881a559f?w=1400&q=80')">
            <div class="hero-caption">En los momentos decisivos, el Código hace el trabajo del líder</div>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/pYKH2uSax8U?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Cultura de equipos de alto rendimiento"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Cultura y disciplina en equipos de élite — análisis en español</div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#9981;</span><div>
                <h3>Caso 1 · Copa América de velero, 1983</h3>
                <p>El equipo estadounidense llevaba <strong>132 años consecutivos</strong> ganando la Copa América de velero. La copa más antigua del deporte mundial. Nadie había podido arrebatársela jamás.</p>
                <p>En 1983 apareció John Bertrand, capitán australiano con un barco y una tripulación objetivamente inferiores. Pero con una diferencia: un Código que habían acordado 8 meses antes.</p>
                <p>Durante seis días corrieron siete regatas. Al llegar a la séptima, los estadounidenses iban arriba. En el último tramo, después de <strong>21 horas acumuladas de competencia</strong>, los australianos remontaron y ganaron por <strong>42 segundos</strong>. 132 años de hegemonía rotos en 42 segundos.</p>
                <p>Bertrand en la conferencia de prensa: <em>"Los estadounidenses tenían un equipo de campeones. Nosotros éramos un equipo de campeonato"</em>. Esa frase resumía su Código: cada uno podía ser reemplazado; el conjunto no.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>Caso 2 · Navy SEALs — el equipo de operaciones especiales de EE.UU.</h3>
            <p>Los Navy SEALs tienen una regla central en su Código no negociable: <strong>"No dejamos a un hermano atrás, vivo o muerto, sin importar el costo"</strong>.</p>
            <p>Parece una frase de película, pero es operacional. En la práctica significa:</p>
            <ul>
                <li>Se entrena a todos los SEALs para cargar a un herido sobre una distancia de hasta 5 km bajo fuego</li>
                <li>Se ha diseñado protocolos de rescate que cuestan 10 veces más que la misión original</li>
                <li>Se ha arriesgado equipos enteros para recuperar un solo cuerpo</li>
            </ul>
            <p>¿Por qué esta regla? Porque genera una calidad específica de confianza que <em>no se puede comprar</em>. Un SEAL cumple misiones imposibles porque sabe con certeza matemática que si cae, sus compañeros vienen por él. Esa certeza cambia lo que está dispuesto a hacer.</p>
            <p>Blair Singer pregunta a sus clientes: <em>"¿Qué regla en tu Código genera esa calidad de confianza en tu equipo?"</em>. Casi nadie puede responder.</p>
        </div>

        <div class="content-card tip">
            <h3>Caso 3 · All Blacks de Nueva Zelanda · "Better people make better All Blacks"</h3>
            <p>Los All Blacks son el equipo deportivo más ganador de la historia en cualquier disciplina: más del 77% de victorias en 120 años. Su Código incluye reglas como:</p>
            <ol>
                <li>"Sweep the sheds" — los propios jugadores barren el vestuario después de cada partido. Nadie está por encima del trabajo humilde.</li>
                <li>"No dickheads" — cero tolerancia a egos tóxicos, sin importar el talento individual</li>
                <li>"Leave the jersey better than you found it" — cada jugador debe devolver la camiseta mejor que como la recibió</li>
                <li>"Train to win" — no se entrena para participar, se entrena para ganar</li>
            </ol>
            <p>Observa: son reglas de conducta, no de resultados. Los resultados son consecuencia.</p>
        </div>

        <div class="quiz-container" id="quiz_l2a">
            <div class="quiz-label">Quiz 2A</div>
            <div class="quiz-question"><p>¿Cuál es la regla central del Código de los Navy SEALs?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l2a', this, false)">Obedecer al superior sin cuestionar</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l2a', this, true)">No dejar a un hermano atrás, vivo o muerto, sin importar el costo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l2a', this, false)">Terminar la misión antes que nada</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l2a', this, false)">Ganar a cualquier precio</div>
            </div>
            <div class="quiz-feedback" id="quiz_l2a_fb"></div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#127465;&#127465;</span><div>
                <h3>Caso 4 · Ejemplo mexicano · Selección Mexicana femenil de softbol 2021</h3>
                <p>La selección mexicana femenil de softbol llegó a los Juegos Olímpicos de Tokio 2020 (disputados en 2021) con la cuarta mejor plantilla del torneo. Venció a Italia y Canadá; derrotaron al equipo olímpico australiano. Pero lo más interesante fue cómo lo hicieron.</p>
                <p>La entrenadora Erika Blanco instauró un Código muy simple de 7 reglas, redactado por las jugadoras en un retiro de pretemporada. Una de ellas era: <strong>"Nadie celebra un home run sola; todas bajamos a la plancha de home"</strong>. Parece trivial. No lo es.</p>
                <p>Esa regla, bien instalada, convirtió cada home run en una celebración colectiva. Generó un reflejo emocional de pertenencia que, según testimonios de las propias jugadoras, les permitió sostener tres innings seguidos perdiendo sin descomponerse.</p>
                <p>Terminaron en <strong>4º lugar olímpico</strong> —el mejor resultado del softbol mexicano en la historia—. El Código no dio los home runs; dio la capacidad de no quebrarse cuando venían abajo en el marcador.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>Qué tienen en común los 4 casos</h3>
            <ol class="concept-list">
                <li><strong>Reglas concretas, no valores abstractos:</strong> "barre el vestuario", no "humildad"</li>
                <li><strong>Cantidad limitada:</strong> entre 5 y 15 reglas. Nunca 50 valores corporativos.</li>
                <li><strong>Escritas y visibles:</strong> pegadas en el vestuario, en el barco, en el puesto de mando</li>
                <li><strong>Reforzadas con ritual:</strong> en los SEALs al recitar el Creed, en los All Blacks al barrer, en Australia al formar círculo antes de cada regata</li>
                <li><strong>Con consecuencia para el que las rompa,</strong> sin importar su estatus, talento o antigüedad</li>
            </ol>
        </div>

        <div class="quiz-container" id="quiz_l2b">
            <div class="quiz-label">Quiz 2B</div>
            <div class="quiz-question"><p>¿Cuál es el patrón común en los Códigos de los equipos ganadores (SEALs, All Blacks, Australianos 83, softbol mexicano)?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l2b', this, false)">Reglas abstractas como "excelencia" y "pasión"</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l2b', this, false)">Más de 30 reglas detalladas para cada situación</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l2b', this, true)">Reglas concretas, pocas, escritas, reforzadas con ritual y con consecuencias reales</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l2b', this, false)">Reglas impuestas por el líder sin participación del equipo</div>
            </div>
            <div class="quiz-feedback" id="quiz_l2b_fb"></div>
        </div>

        <div class="content-card" style="margin-top:30px;background:#faf8f3;border-left:3px solid #c9a961;">
            <h3 style="color:#0a2540;">Aplicación · Investiga 1 Código real</h3>
            <p>Antes de la siguiente lección, dedica 30 minutos a investigar en profundidad <strong>1 de estos 4 equipos</strong> (el que más te llame): su historia, sus reglas, cómo las refuerzan.</p>
            <p>Objetivo: quiero que cuando llegues a la lección 5-6 (construcción del Código), tengas un ejemplo real vivo en la cabeza, no una teoría abstracta.</p>
            <p>Opcional: comparte una regla que te haya impactado con alguien de tu equipo. Observa su reacción.</p>
        </div>
        `
    },

    // ==========================================================
    // LECCION 3 — POR QUE LOS EQUIPOS SE DESHACEN BAJO PRESION
    // ==========================================================
    {
        id: 'torbellino-presion', module: 'Por qué un Código', tag: 'tag-modulo1', tagLabel: 'MODULO 1',
        title: 'Por qué los equipos se deshacen bajo presión',
        subtitle: 'El momento exacto en que el Código hace o rompe al equipo',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=1400&q=80')">
            <div class="hero-caption">Cuando sube la presión, caes al nivel de tu entrenamiento — no al nivel de tus intenciones</div>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/1co6zpbmvOk?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Las 5 disfunciones de un equipo — Lencioni"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Las 5 disfunciones de un equipo de Patrick Lencioni — Coach Pepe Villacís</div>
        </div>

        <div class="content-card">
            <h3>La mecánica invisible: por qué la presión rompe equipos</h3>
            <p>Blair Singer explica que bajo presión, el cerebro humano hace algo predecible: pasa del modo "pensante" (corteza prefrontal) al modo "supervivencia" (sistema límbico y reptiliano). Esto se llama <strong>amygdala hijack</strong> y pasa en 300 milisegundos.</p>
            <p>En ese modo, tú y tu equipo:</p>
            <ul>
                <li>Dejan de ver matices — todo es blanco o negro</li>
                <li>Atacan, huyen o se paralizan — no hay espacio para deliberación</li>
                <li>Recurren a los hábitos más arraigados — los buenos y los malos</li>
                <li>Olvidan valores abstractos — sólo recuerdan rutinas específicas</li>
            </ul>
            <p>El Código de Honor se juega precisamente ahí. Un Código bien instalado se convierte en un hábito automático que sobrevive al secuestro emocional.</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128293;</span><div>
                <h3>Caso mexicano · La taquería de Coyoacán</h3>
                <p>Asesoré a una taquería familiar en Coyoacán, CDMX. 3 mesas buenas, un camión de carga que llegaba con suministros los martes y los viernes. Su problema: los viernes por la noche (el día de mayor venta) había peleas en la cocina, los cocineros se gritaban, los meseros tardaban 40 minutos en entregar platos y se perdían clientes.</p>
                <p>Los lunes, cuando había poca gente, eran un equipo dulce, amable, colaborativo. Los viernes eran otro equipo.</p>
                <p>El diagnóstico: no tenían Código. Tenían "buenas intenciones". Las buenas intenciones se evaporan a los 300 ms del primer cliente que reclama por un pastor tardío.</p>
                <p>Instalamos un Código de 6 reglas, con ritual de "briefing" antes de abrir el viernes (3 minutos, círculo en la cocina, cada uno dice cómo va a cumplir 2 reglas del Código ese día). A las 6 semanas: <strong>0 peleas viernes, tiempo promedio de entrega bajó a 12 minutos, propinas subieron 38%</strong>.</p>
                <p>El Código no cambió a la gente. Cambió lo que hacía la gente cuando el cerebro les fallaba.</p>
            </div></div>
        </div>

        <div class="content-card tip">
            <h3>Concepto clave · Los 5 momentos que revelan el Código</h3>
            <p>Según Blair Singer, hay cinco momentos en los que siempre se ve el Código real de un equipo:</p>
            <ol>
                <li><strong>Cuando entra un cliente difícil o un inspector</strong> — ¿quién da la cara, quién se esconde?</li>
                <li><strong>Cuando algo sale muy mal</strong> — ¿primero busca culpable o primero busca solución?</li>
                <li><strong>Cuando un miembro destaca</strong> — ¿lo celebran o lo sabotean?</li>
                <li><strong>Cuando un compañero tiene un problema personal</strong> — ¿lo cargan o lo señalan?</li>
                <li><strong>Cuando el jefe no está</strong> — ¿siguen el Código o se relajan?</li>
            </ol>
            <p>Pregúntate honestamente cómo responde hoy tu equipo en cada uno. Vas a tener tu diagnóstico real.</p>
        </div>

        <div class="quiz-container" id="quiz_l3a">
            <div class="quiz-label">Quiz 3A</div>
            <div class="quiz-question"><p>¿Por qué los equipos pierden coherencia bajo presión, según la neurociencia que cita Blair Singer?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l3a', this, false)">Porque se cansan físicamente</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l3a', this, true)">Porque el cerebro pasa del modo pensante al modo supervivencia y recurre a los hábitos más arraigados</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l3a', this, false)">Porque la presión les hace ser más racionales</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l3a', this, false)">Porque los valores abstractos los sostienen</div>
            </div>
            <div class="quiz-feedback" id="quiz_l3a_fb"></div>
        </div>

        <div class="content-card">
            <h3>"El Código hace el trabajo del líder cuando el líder no está"</h3>
            <p>Esta es quizá la frase más importante del libro de Blair Singer.</p>
            <p>Un líder no puede estar presente 24/7. No puede vigilar cada decisión. No puede revisar cada interacción con el cliente. Entonces, ¿qué rige al equipo en ausencia del líder?</p>
            <p>Dos opciones:</p>
            <ol>
                <li><strong>La personalidad dominante del equipo</strong> (que puede o no ser la que tú quieres)</li>
                <li><strong>Un Código explícito que todos aceptaron</strong> y que se refuerza con ritual</li>
            </ol>
            <p>Si optas por la #1, estás dejando el destino de tu empresa en manos del azar.</p>
        </div>

        <div class="content-card" style="background:#0a2540;color:#faf8f3;">
            <h3 style="color:#c9a961;">Auditoría rápida · Estado de tu equipo bajo presión</h3>
            <p>Responde SI / NO honestamente:</p>
            <ol>
                <li>En el cierre del mes, ¿tu equipo se trata igual de bien que el día 3 del mes?</li>
                <li>Cuando llega una auditoría, ¿cada uno da la cara por su área?</li>
                <li>Cuando alguien comete un error grave, ¿la conversación empieza con "¿qué aprendimos?" o con "¿quién tuvo la culpa?"</li>
                <li>Cuando el jefe sale de vacaciones 2 semanas, ¿la productividad sube, baja o se mantiene?</li>
                <li>Si un cliente hace un reclamo fuerte, ¿el primer instinto del equipo es "entender" o "defenderse"?</li>
            </ol>
            <p style="margin-top:15px;">Si tienes menos de 4 SI claros, el Código no está haciendo su trabajo bajo presión. El resto del curso es para ti.</p>
        </div>

        <div class="quiz-container" id="quiz_l3b">
            <div class="quiz-label">Quiz 3B</div>
            <div class="quiz-question"><p>Según Blair Singer, ¿cuál es la función más importante del Código cuando el líder no está presente?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l3b', this, false)">Mantener la disciplina laboral mediante sanciones</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l3b', this, false)">Reemplazar al líder por otro jefe temporal</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l3b', this, true)">Hacer el trabajo del líder — orientar la conducta del equipo sin supervisión directa</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l3b', this, false)">Aumentar la carga de trabajo para compensar</div>
            </div>
            <div class="quiz-feedback" id="quiz_l3b_fb"></div>
        </div>

        <div class="content-card" style="margin-top:30px;background:#faf8f3;border-left:3px solid #c9a961;">
            <h3 style="color:#0a2540;">Aplicación · Diario de presión</h3>
            <p>Durante los próximos 7 días, anota en tu libreta cada vez que tu equipo enfrente uno de "los 5 momentos que revelan el Código". Sólo describe qué pasó, sin juzgar.</p>
            <p>Al final de la semana tendrás un documento brutal sobre tu Código real. Esa será tu materia prima para las lecciones 5 y 6.</p>
        </div>
        `
    },

    // ==========================================================
    // LECCION 4 — QUIENES ESTAN EN TU EQUIPO
    // ==========================================================
    {
        id: 'mapeo-equipo', module: 'Quién está en tu equipo', tag: 'tag-modulo2', tagLabel: 'MODULO 2',
        title: '¿Quiénes están realmente en tu equipo?',
        subtitle: 'El mapa del equipo antes de cambiar el Código',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=1400&q=80')">
            <div class="hero-caption">Antes de cambiar el Código, mapea quién juega realmente</div>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/PJ1N5NmTySI?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Las cinco disfunciones de un equipo — Lencioni"</iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Las cinco disfunciones de un equipo de Patrick Lencioni — IOX Asesores</div>
        </div>

        <div class="content-card">
            <h3>Primer error al construir un Código: creer que todos son "el equipo"</h3>
            <p>Blair Singer advierte algo que sorprende a la mayoría: <strong>en casi ningún negocio "el equipo" es lo que el dueño cree</strong>.</p>
            <p>Un dueño típico de PyME mexicana piensa en su equipo como "los que cobran nómina aquí". Pero el equipo real incluye:</p>
            <ul>
                <li>Tus empleados directos</li>
                <li>Tu contador externo</li>
                <li>Tu abogado</li>
                <li>Tu agente de seguros</li>
                <li>Tus proveedores clave (los que, si se van, te paralizan)</li>
                <li>Tu banquero o asesor financiero</li>
                <li>Tu socio (si lo hay)</li>
                <li>Tu pareja (en el 70% de las PyMEs el cónyuge influye decisiones)</li>
            </ul>
            <p>Si tu Código de Honor sólo aplica a los de nómina pero no a tu contador que llega tarde con las declaraciones, estás construyendo sobre arena.</p>
        </div>

        <div class="content-card tip">
            <h3>Concepto clave · El equipo es todo el que afecta tus resultados</h3>
            <p>Blair Singer: <em>"Un equipo de negocios exitoso no es el que tiene nómina juntos; es el que acordó reglas juntos"</em>.</p>
            <p>Este curso usa una definición operativa: <strong>equipo = conjunto de personas cuya acción u omisión afecta directamente tus resultados mensuales</strong>.</p>
            <p>Bajo esa definición, probablemente tu equipo es más grande de lo que pensabas.</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#127969;</span><div>
                <h3>Caso mexicano · El restaurante que echaba la culpa al proveedor</h3>
                <p>Restaurante de comida internacional en Monterrey. Facturaba bien pero tenía 3% de quejas por calidad (cuando lo sano es menos de 0.5%).</p>
                <p>El dueño convocó al Código con su equipo operativo: chef, sous chef, meseros, cajeros, recepcionistas. Redactaron reglas. Todo mejoró en cocina y servicio.</p>
                <p>Pero las quejas por calidad seguían. ¿Por qué? Porque el proveedor de vegetales llegaba los martes a las 11 AM cuando la cocina ya había arrancado el menú del día. Los chefs improvisaban con producto viejo.</p>
                <p>Cuando el dueño <strong>sentó al proveedor en la mesa del Código</strong> e incluyó una regla ("las entregas son antes de las 8 AM, sin excepción"), las quejas bajaron de 3% a 0.4% en un mes.</p>
                <p>El proveedor no era "externo". Era parte del equipo. Sólo faltaba que lo reconociera todo el mundo.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>Ejercicio · Mapa de tu equipo real</h3>
            <p>Toma una hoja en blanco. Dibuja un círculo al centro con tu nombre.</p>
            <p>Alrededor, 3 capas concéntricas:</p>
            <ol>
                <li><strong>Capa 1 (la más cercana):</strong> las personas sin las cuales tu negocio no opera 24 horas — socios, mano derecha, chef, gerente general</li>
                <li><strong>Capa 2 (media):</strong> personas sin las cuales no pasa la semana — empleados clave, proveedores críticos, contador</li>
                <li><strong>Capa 3 (externa):</strong> personas cuya ausencia se nota en 1 mes — asesores, consultor, banquero, personal de apoyo</li>
            </ol>
            <p>Agrega a todos los que apliquen. El Código de Honor va a aplicar a las 3 capas, con distintas reglas específicas por capa si hace falta.</p>
        </div>

        <div class="quiz-container" id="quiz_l4a">
            <div class="quiz-label">Quiz 4A</div>
            <div class="quiz-question"><p>Según Blair Singer, ¿a quiénes debe incluir el Código de Honor?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l4a', this, false)">Sólo a los empleados directos con nómina</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l4a', this, false)">Sólo a los socios y directivos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l4a', this, true)">A todos los que afectan directamente tus resultados mensuales (nómina, proveedores, asesores, pareja influyente)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l4a', this, false)">Sólo al dueño del negocio</div>
            </div>
            <div class="quiz-feedback" id="quiz_l4a_fb"></div>
        </div>

        <div class="content-card">
            <h3>Las 4 categorías de personas en tu equipo</h3>
            <p>Blair Singer clasifica a los integrantes en 4 grupos:</p>
            <ol class="concept-list">
                <li><strong>A+ (Alineados y performantes):</strong> cumplen el Código y producen resultados. Son el 10-20%.</li>
                <li><strong>A- (Alineados pero sin resultados todavía):</strong> están en formación, necesitan coaching, se ajustan al Código. 40-60%.</li>
                <li><strong>B (Performantes pero no alineados):</strong> producen resultados pero violan el Código. Son los más peligrosos — el "cáncer talentoso". 10-20%.</li>
                <li><strong>C (Ni alineados ni performantes):</strong> deben salir del equipo lo antes posible. 5-15%.</li>
            </ol>
            <p>La decisión más difícil del líder es con los <strong>grupo B</strong>: el vendedor estrella que maltrata a administración, el chef brillante que grita al equipo, el gerente productivo que humilla al equipo operativo. Blair Singer es categórico: <em>"Conservar a un B es declararle a todo el equipo que el talento compra permiso para violar el Código. Es la muerte del Código"</em>.</p>
        </div>

        <div class="quiz-container" id="quiz_l4b">
            <div class="quiz-label">Quiz 4B</div>
            <div class="quiz-question"><p>¿Cuál es la categoría más peligrosa de miembros de equipo según Blair Singer?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l4b', this, false)">Los C — no alineados y sin resultados</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l4b', this, true)">Los B — performantes pero que violan el Código ("cáncer talentoso")</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l4b', this, false)">Los A- — alineados sin resultados todavía</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l4b', this, false)">Los A+ — alineados y performantes</div>
            </div>
            <div class="quiz-feedback" id="quiz_l4b_fb"></div>
        </div>

        <div class="content-card" style="margin-top:30px;background:#faf8f3;border-left:3px solid #c9a961;">
            <h3 style="color:#0a2540;">Aplicación · Categoriza tu equipo hoy</h3>
            <p>Con el mapa que hiciste, categoriza a cada persona en A+, A-, B o C. Sé brutal y honesto.</p>
            <p>Escribe para cada uno:</p>
            <ul>
                <li>Nombre</li>
                <li>Categoría</li>
                <li>2 conductas específicas que justifican la categoría</li>
                <li>Acción recomendada para los próximos 90 días</li>
            </ul>
            <p>Este documento es confidencial. Guárdalo bien. Lo vas a usar en la lección 13.</p>
        </div>
        `
    },

    // ==========================================================
    // LECCION 5 — TRIANGULO B-I DE KIYOSAKI
    // ==========================================================
    {
        id: 'triangulo-bi', module: 'Quién está en tu equipo', tag: 'tag-modulo2', tagLabel: 'MODULO 2',
        title: 'El Triángulo B-I de Kiyosaki aplicado a tu equipo',
        subtitle: 'Los 8 puestos críticos que cubren la base de un negocio sólido',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1400&q=80')">
            <div class="hero-caption">Un negocio sólido se para en 8 puestos, no en 1</div>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/pYmUjlm-nNo?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Libro de la Semana: Las cinco disfunciones"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Libro de la Semana: Las 5 disfunciones de un equipo — ActionCOACH Magallanes</div>
        </div>

        <div class="content-card">
            <h3>El Triángulo B-I de Robert Kiyosaki</h3>
            <p>Blair Singer es socio de Robert Kiyosaki en Padre Rico Advisors y usa el "Triángulo B-I" (Business/Investor) como herramienta de diagnóstico obligatoria antes de crear el Código.</p>
            <p>El Triángulo tiene <strong>3 lados exteriores</strong> (los que sostienen la estructura) y <strong>5 niveles interiores</strong> (las operaciones).</p>
        </div>

        <div class="content-card tip">
            <h3>Los 3 lados exteriores (el marco del negocio)</h3>
            <ol>
                <li><strong>MISIÓN:</strong> la razón espiritual del negocio. Por qué existe. Si muere la misión, muere el alma.</li>
                <li><strong>EQUIPO:</strong> las personas que ejecutan la misión. El Código de Honor vive en este lado.</li>
                <li><strong>LIDERAZGO:</strong> quien orquesta misión y equipo. Sin liderazgo, equipo y misión se desconectan.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>Los 5 niveles interiores (la operación)</h3>
            <p>De arriba hacia abajo, los 5 pisos que todo negocio sólido debe cubrir:</p>
            <ol class="concept-list">
                <li><strong>PRODUCTO:</strong> qué vendes — bien o servicio</li>
                <li><strong>LEGAL:</strong> estructura societaria, contratos, cumplimiento fiscal y regulatorio</li>
                <li><strong>SISTEMAS:</strong> procesos y tecnología repetibles</li>
                <li><strong>COMUNICACIÓN:</strong> ventas, marketing, relaciones públicas</li>
                <li><strong>CASH FLOW:</strong> contabilidad, tesorería, finanzas — el oxígeno del negocio</li>
            </ol>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128200;</span><div>
                <h3>Caso mexicano · La farmacia que no cerraba</h3>
                <p>En una consultoría a una farmacia independiente en Cuernavaca, descubrí que el dueño (un médico general) hacía personalmente: atención al cliente, compras, pagos a proveedores, contabilidad con Excel, publicidad en Facebook, trámites COFEPRIS, entrevistas de reclutamiento y hasta pintura anual del local. Todo él. Facturaba 180 mil pesos al mes y trabajaba 14 horas diarias.</p>
                <p>Usamos el Triángulo B-I para mapear qué puestos estaban cubiertos:</p>
                <ul>
                    <li>Producto ✓ (medicamentos con buen surtido)</li>
                    <li>Legal ✗ (no había contador, usaba factura a mano)</li>
                    <li>Sistemas ✗ (sin software de inventarios, perdía caducidades)</li>
                    <li>Comunicación ✗ (publicidad ad-hoc sin plan)</li>
                    <li>Cash flow ✗ (sin presupuesto ni control)</li>
                </ul>
                <p>De 5 niveles, 4 estaban en rojo. Recomendé contratar un contador externo, un sistema POS y un community manager part-time. A los 9 meses: facturación subió a 340 mil/mes, el dueño bajó a 9 horas y pudo pensar estratégicamente.</p>
                <p>El Código de Honor vino después. Sin los puestos cubiertos, ningún Código aguanta.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>Antes del Código: diagnostica tu Triángulo</h3>
            <p>Pregúntate, para cada uno de los 8 puestos (3 exteriores + 5 interiores):</p>
            <ol>
                <li>¿Tengo persona responsable específica?</li>
                <li>¿Esa persona tiene tiempo suficiente para el rol?</li>
                <li>¿Esa persona tiene capacitación mínima?</li>
                <li>¿Esa persona rinde cuentas a alguien?</li>
                <li>¿Esa persona conoce y acepta su parte del Código?</li>
            </ol>
            <p>Si hay menos de 3 SI en cualquier puesto, ese puesto es una bomba de tiempo. Blair Singer recomienda no intentar construir Código hasta que los 8 puestos tengan persona responsable identificada.</p>
        </div>

        <div class="quiz-container" id="quiz_l5a">
            <div class="quiz-label">Quiz 5A</div>
            <div class="quiz-question"><p>¿Cuáles son los 3 lados exteriores del Triángulo B-I de Kiyosaki?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l5a', this, false)">Producto, Legal, Cash Flow</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l5a', this, true)">Misión, Equipo, Liderazgo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l5a', this, false)">Ventas, Marketing, Operaciones</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l5a', this, false)">Capital, Talento, Mercado</div>
            </div>
            <div class="quiz-feedback" id="quiz_l5a_fb"></div>
        </div>

        <div class="content-card tip">
            <h3>Concepto clave · Orden correcto de construcción</h3>
            <p>Blair Singer advierte un error común: los dueños suelen construir de adentro hacia afuera (del producto hacia la misión). El Triángulo debe construirse <strong>de fuera hacia adentro</strong>:</p>
            <ol>
                <li>Primero la MISIÓN (¿para qué existe este negocio?)</li>
                <li>Luego el EQUIPO (¿quiénes ejecutarán la misión?)</li>
                <li>Luego el LIDERAZGO (¿quién orquesta?)</li>
                <li>Sólo entonces construyes los 5 niveles operativos</li>
            </ol>
            <p>Negocios construidos al revés son los que colapsan cuando algo falla: no tienen columna vertebral.</p>
        </div>

        <div class="quiz-container" id="quiz_l5b">
            <div class="quiz-label">Quiz 5B</div>
            <div class="quiz-question"><p>Según Blair Singer, ¿en qué orden se debe construir el Triángulo B-I?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l5b', this, false)">De adentro hacia afuera: primero producto, después misión</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l5b', this, true)">De afuera hacia adentro: primero misión, equipo y liderazgo; después los 5 niveles operativos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l5b', this, false)">Simultáneamente en todos los niveles</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l5b', this, false)">Empezando por el cash flow y terminando en la misión</div>
            </div>
            <div class="quiz-feedback" id="quiz_l5b_fb"></div>
        </div>

        <div class="content-card" style="margin-top:30px;background:#faf8f3;border-left:3px solid #c9a961;">
            <h3 style="color:#0a2540;">Aplicación · Diagnóstico de Triángulo B-I</h3>
            <p>Calificate en cada uno de los 8 puestos del 1 al 10 (10 = responsable claro, con tiempo, capacidad y alineación al Código):</p>
            <ol>
                <li>Misión: ___</li>
                <li>Equipo: ___</li>
                <li>Liderazgo: ___</li>
                <li>Producto: ___</li>
                <li>Legal: ___</li>
                <li>Sistemas: ___</li>
                <li>Comunicación: ___</li>
                <li>Cash Flow: ___</li>
            </ol>
            <p>Suma total (sobre 80) y divide entre 8. Si tu promedio es menor a 6, detén el Código hasta fortalecer los puestos débiles.</p>
        </div>
        `
    },

    // ==========================================================
    // LECCION 6 — CREAR EL CODIGO PARTE 1
    // ==========================================================
    {
        id: 'crear-codigo-01', module: 'Cómo crear tu Código', tag: 'tag-modulo3', tagLabel: 'MODULO 3',
        title: 'Los 5 pasos para crear tu Código · Paso 1, 2 y 3',
        subtitle: 'Cómo diseñar la sesión fundacional del Código con tu equipo',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1512626120412-faf41adb4874?w=1400&q=80')">
            <div class="hero-caption">El Código se redacta en equipo o no se redacta</div>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/3gp8Nkq3I58?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Claves del trabajo en equipo — 5 disfunciones"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Claves del trabajo en equipo — Coach Eulàlia Tort</div>
        </div>

        <div class="content-card">
            <h3>Regla de oro: el Código se redacta POR el equipo, no PARA el equipo</h3>
            <p>Este es el error más común y más costoso que comete un dueño o gerente: redactar el Código él solo, imprimirlo bonito y pegarlo en la pared esperando que todos lo sigan.</p>
            <p>Blair Singer es categórico: <em>"Un Código impuesto es un Código muerto. La magia no está en las reglas, está en el proceso de acordarlas"</em>.</p>
            <p>¿Por qué? Porque la gente no cumple reglas que no ayudó a redactar. En cambio, defiende con su vida las reglas que escribió.</p>
        </div>

        <div class="content-card tip">
            <h3>Los 5 pasos del proceso (resumen)</h3>
            <ol class="concept-list">
                <li><strong>Paso 1:</strong> Convoca al equipo completo, explica el propósito, crea seguridad emocional</li>
                <li><strong>Paso 2:</strong> Lluvia de ideas sin filtro — reglas que el equipo quisiera tener</li>
                <li><strong>Paso 3:</strong> Destilación y votación — reducir a 5-12 reglas</li>
                <li><strong>Paso 4:</strong> Redactar con verbos concretos y consecuencias claras</li>
                <li><strong>Paso 5:</strong> Firma simbólica y ritualización</li>
            </ol>
            <p>Esta lección cubre los primeros 3. La siguiente cubre los pasos 4 y 5.</p>
        </div>

        <div class="content-card">
            <h3>Paso 1 · La convocatoria y el marco</h3>
            <p><strong>Antes de la sesión:</strong></p>
            <ul>
                <li>Envía invitación formal con asunto "Sesión fundacional del Código del equipo"</li>
                <li>Bloquea 90-120 minutos en un espacio sin interrupciones — NO en la oficina habitual</li>
                <li>Sin celulares en la mesa (caja en la entrada)</li>
                <li>Pizarrón blanco o rotafolio visible, post-its de 3 colores, plumones</li>
                <li>Asistencia obligatoria — si falta alguien, se reagenda</li>
            </ul>
            <p><strong>Los primeros 10 minutos de la sesión:</strong></p>
            <ol>
                <li>Abres explicando POR QUÉ están ahí (usa una historia personal, no una diapositiva)</li>
                <li>Compartes brevemente 1 ejemplo de Código externo (Navy SEALs, All Blacks, Copa América 83)</li>
                <li>Declaras una <strong>amnistía total</strong>: nada de lo que se diga será usado en su contra; es un espacio seguro</li>
                <li>Pones las 5 "reglas de la sesión": hablar sin interrumpir, escuchar sin juzgar, criticar la idea no a la persona, celular fuera, todos hablan</li>
            </ol>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128233;</span><div>
                <h3>Caso mexicano · Sesión fundacional en una concesionaria de autos</h3>
                <p>Asesoré a una agencia Nissan en Veracruz, 45 empleados. El dueño me dijo "necesito que me redactes el Código". Le dije que no, que lo íbamos a facilitar juntos con todo el equipo.</p>
                <p>Rentamos una palapa en una quinta cerca del puerto. De 9 AM a 1 PM. Sin celulares.</p>
                <p>Primeros 20 minutos: tensión. La gente no hablaba, esperaba que el dueño dijera algo. A los 25 minutos, una cajera se animó y dijo: "Me cuesta cuando un asesor me habla mal delante del cliente". El dueño, en vez de defender a sus vendedores, escribió eso en el pizarrón.</p>
                <p>A partir de ese momento, todos empezaron a hablar. En 2.5 horas salieron 34 ideas. Las destilamos a 11 reglas.</p>
                <p>A los 6 meses, esa agencia pasó del puesto 23 al 4 en CSI (Customer Satisfaction Index) nacional. La rotación bajó de 38% anual a 9%.</p>
                <p>El Código funcionó porque el equipo lo escribió. Pero el Código se pudo escribir porque el dueño, en los primeros 25 minutos, demostró que podía recibir una crítica sin castigar.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>Paso 2 · Lluvia de ideas sin filtro</h3>
            <p><strong>Pregunta guía:</strong> "Si pudieras inventar 5 reglas mágicas que TODOS en este equipo cumpliéramos, ¿cuáles serían?"</p>
            <p>No preguntes "¿qué reglas necesitamos?" — es muy frío. Pregunta lo anterior — evoca el deseo.</p>
            <p><strong>Técnica de 3 rondas:</strong></p>
            <ol>
                <li><strong>Ronda 1 individual (10 min):</strong> cada persona escribe en post-its amarillos sus ideas, una por post-it</li>
                <li><strong>Ronda 2 pegada (15 min):</strong> todos pasan al pizarrón y pegan sus post-its; se permite leer los de otros y agregar post-its nuevos en verde</li>
                <li><strong>Ronda 3 agrupada (15 min):</strong> facilitador (tú) agrupa los post-its por temas comunes en la pared — sale el "mapa de temas"</li>
            </ol>
            <p>Resultado esperado: entre 20 y 45 ideas, agrupadas en 8-15 temas.</p>
        </div>

        <div class="quiz-container" id="quiz_l6a">
            <div class="quiz-label">Quiz 6A</div>
            <div class="quiz-question"><p>Según Blair Singer, ¿cuál es el error más costoso al crear un Código de Honor?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l6a', this, false)">Incluir demasiadas reglas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l6a', this, true)">Redactarlo el jefe solo e imponerlo, en vez de co-crearlo con el equipo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l6a', this, false)">Usar ejemplos de equipos deportivos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l6a', this, false)">Hacer la sesión en menos de 2 horas</div>
            </div>
            <div class="quiz-feedback" id="quiz_l6a_fb"></div>
        </div>

        <div class="content-card">
            <h3>Paso 3 · Destilación y votación</h3>
            <p>Tienes muchos post-its en la pared. Ahora toca reducir.</p>
            <p><strong>Método de 3 votos dots:</strong></p>
            <ol>
                <li>Dale a cada persona <strong>3 stickers de colores</strong> (3 votos por cabeza)</li>
                <li>Pídeles que pongan sus 3 votos en las 3 reglas/temas que les parezcan MÁS importantes. Pueden concentrarlos (3 al mismo) o repartirlos.</li>
                <li>Cuenta votos. Toma las <strong>12 reglas/temas más votados</strong>.</li>
            </ol>
            <p><strong>Prueba de "reglas mínimas":</strong> de esas 12, aplica dos preguntas filtro:</p>
            <ol>
                <li>¿Si esta regla no existiera, habría daño real para el equipo?</li>
                <li>¿Es una conducta observable (no un valor abstracto)?</li>
            </ol>
            <p>Las que pasen ambos filtros son tu Código borrador. Debes quedar con entre <strong>5 y 12 reglas</strong>.</p>
        </div>

        <div class="content-card tip">
            <h3>Pregunta poderosa · "¿Qué regla falta que nadie dijo?"</h3>
            <p>Antes de cerrar la destilación, haz esta pregunta al equipo en silencio (2 minutos para pensar):</p>
            <p style="font-style:italic;background:#faf8f3;padding:15px;border-left:3px solid #c9a961;">"¿Hay algo que no esté escrito ahí pero que te impida dar el 100% en este equipo? Algo que, si se pusiera como regla, cambiaría tu experiencia aquí."</p>
            <p>Esta pregunta saca las "reglas ocultas" más dolorosas y valiosas. Frecuentemente son reglas que atacan la toxicidad del propio líder. Por eso <strong>debes estar dispuesto a escucharlas y aceptarlas públicamente</strong>.</p>
        </div>

        <div class="quiz-container" id="quiz_l6b">
            <div class="quiz-label">Quiz 6B</div>
            <div class="quiz-question"><p>¿Cuál es el rango ideal de reglas que debe tener un Código de Honor según Blair Singer?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l6b', this, false)">Entre 2 y 4 reglas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l6b', this, true)">Entre 5 y 12 reglas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l6b', this, false)">Entre 20 y 30 reglas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l6b', this, false)">Entre 50 y 100 reglas</div>
            </div>
            <div class="quiz-feedback" id="quiz_l6b_fb"></div>
        </div>

        <div class="content-card" style="margin-top:30px;background:#faf8f3;border-left:3px solid #c9a961;">
            <h3 style="color:#0a2540;">Aplicación · Agenda tu sesión fundacional</h3>
            <p>Agenda <strong>ya</strong> en tu calendario una fecha para la sesión fundacional con tu equipo. Criterios:</p>
            <ul>
                <li>Día bueno (no lunes ni viernes, ni fin de mes)</li>
                <li>Horario sin prisa (idealmente 9-12 o 15-18)</li>
                <li>Espacio fuera de la oficina si es posible</li>
                <li>Bloquea 3 horas aunque uses sólo 2</li>
                <li>No invites a clientes, asesores externos ni directores de "arriba" — sólo tu equipo inmediato</li>
            </ul>
            <p>En la siguiente lección vemos cómo rematar el proceso con los pasos 4 y 5.</p>
        </div>
        `
    },

    // ==========================================================
    // LECCION 7 — CREAR EL CODIGO PARTE 2
    // ==========================================================
    {
        id: 'crear-codigo-02', module: 'Cómo crear tu Código', tag: 'tag-modulo3', tagLabel: 'MODULO 3',
        title: 'Los 5 pasos para crear tu Código · Paso 4 y 5',
        subtitle: 'Redactar con precisión y ritualizar el compromiso',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80')">
            <div class="hero-caption">La redacción precisa es la diferencia entre un Código que vive y uno que muere</div>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/BBcP2FuKBmc?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Las 5 disfunciones de un equipo — Torre Conecta"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Las 5 disfunciones de un equipo de Patrick Lencioni — Torre Conecta</div>
        </div>

        <div class="content-card">
            <h3>Paso 4 · La redacción precisa (verbos, no adjetivos)</h3>
            <p>Ya tienes 5-12 temas votados. Ahora hay que convertirlos en reglas redactadas con precisión.</p>
            <p><strong>Regla de oro de la redacción:</strong></p>
            <ul>
                <li>✓ Verbo + objeto + contexto ("SALUDAMOS a cada compañero al entrar")</li>
                <li>✗ Adjetivo o valor abstracto ("RESPETO" — no dice qué hacer)</li>
                <li>✓ Conducta observable ("Entregamos antes de las 18:00 los reportes diarios")</li>
                <li>✗ Intención interna ("Nos esforzamos")</li>
                <li>✓ Con sujeto plural ("NOSOTROS", "EL EQUIPO")</li>
                <li>✗ En segunda persona ("Tú debes...")</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>Ejemplos · De mal a bien redactado</h3>
            <table style="width:100%;border-collapse:collapse;">
                <thead style="background:#0a2540;color:#faf8f3;">
                    <tr>
                        <th style="padding:8px;text-align:left;">Mal (abstracto)</th>
                        <th style="padding:8px;text-align:left;">Bien (conductual)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom:1px solid #ddd;">
                        <td style="padding:8px;">"Tratamos al cliente con respeto"</td>
                        <td style="padding:8px;">"Saludamos al cliente mirando a los ojos, con su nombre si lo conocemos, en menos de 10 segundos tras entrar"</td>
                    </tr>
                    <tr style="border-bottom:1px solid #ddd;">
                        <td style="padding:8px;">"Somos puntuales"</td>
                        <td style="padding:8px;">"Llegamos 5 minutos antes del horario de apertura. Si vamos a llegar tarde, avisamos por WhatsApp al equipo antes de la hora"</td>
                    </tr>
                    <tr style="border-bottom:1px solid #ddd;">
                        <td style="padding:8px;">"Trabajamos en equipo"</td>
                        <td style="padding:8px;">"Cuando un compañero está saturado, dejamos lo nuestro y apoyamos. Nadie cierra su turno si deja el trabajo del siguiente atrás"</td>
                    </tr>
                    <tr style="border-bottom:1px solid #ddd;">
                        <td style="padding:8px;">"Somos honestos"</td>
                        <td style="padding:8px;">"Si cometemos un error, lo decimos antes de que alguien lo descubra. El primer responsable es quien lo reporta"</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="content-card">
            <h3>Las 3 preguntas filtro para cada regla</h3>
            <p>Antes de aprobar una regla como final, pásenla por estos 3 filtros juntos, con el equipo:</p>
            <ol class="concept-list">
                <li><strong>Test del espía:</strong> "Si alguien externo con cámara oculta me observara, ¿podría distinguir si estoy cumpliendo esta regla?" Si no se puede observar, está mal redactada.</li>
                <li><strong>Test del miércoles a las 4 PM:</strong> "¿Esta regla aplica en un día normal, no sólo en la junta fundacional?" Si es muy abstracta o aspiracional, no pasa.</li>
                <li><strong>Test del castigo sin abuso:</strong> "¿Podemos acordar una consecuencia justa si alguien la rompe, sin humillar?" Si no hay consecuencia posible, la regla es decorativa.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>Paso 5 · Ritualización y firma</h3>
            <p>Una regla que no se ritualiza muere. Aquí hay 3 rituales básicos obligatorios:</p>
            <ol class="concept-list">
                <li><strong>Firma física:</strong> imprimen el Código completo en papel. Cada persona lo firma con su nombre y fecha. Luego se enmarca y se pega en un lugar visible.</li>
                <li><strong>Primera lectura pública:</strong> al terminar la sesión, uno por uno lee en voz alta una regla del Código. Todos repiten "aceptado" entre regla y regla.</li>
                <li><strong>Declaración de la campana:</strong> se define qué objeto o señal se usará cuando se rompa una regla (ver lección 10). Campana, silbato, palmada acordada.</li>
            </ol>
            <p>Es preferible que la firma sea en papel físico, aunque también lo escaneen y guarden digitalmente. El acto físico de firmar tiene un peso psicológico que una firma electrónica no genera.</p>
        </div>

        <div class="quiz-container" id="quiz_l7a">
            <div class="quiz-label">Quiz 7A</div>
            <div class="quiz-question"><p>¿Cuál es la forma correcta de redactar una regla del Código?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l7a', this, false)">Usar valores abstractos como "respeto", "excelencia", "pasión"</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l7a', this, false)">Escribir intenciones internas ("nos esforzamos")</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l7a', this, true)">Verbos + conducta observable + contexto (ej. "Saludamos al cliente mirando a los ojos en menos de 10 segundos")</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l7a', this, false)">Redactarlas en segunda persona ("Tú debes...")</div>
            </div>
            <div class="quiz-feedback" id="quiz_l7a_fb"></div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128220;</span><div>
                <h3>Caso mexicano · Las 9 reglas de una clínica dental en Guadalajara</h3>
                <p>Un Código real, firmado por los 14 miembros del equipo después de una sesión fundacional de 3.5 horas:</p>
                <ol>
                    <li>Llegamos 10 minutos antes de la primera cita del día, en uniforme completo</li>
                    <li>Saludamos al paciente por su nombre en menos de 30 segundos de haber entrado</li>
                    <li>Si cometemos un error clínico o administrativo, lo reportamos el mismo día al director</li>
                    <li>No hablamos de pacientes ausentes en tono de queja. Si hay tema real, lo conversamos en privado con el jefe de área</li>
                    <li>Cada viernes a las 5 PM revisamos el Código juntos (10 minutos). Sin excepción.</li>
                    <li>Las críticas se dan en privado, los reconocimientos en público</li>
                    <li>Ningún paciente se va sin que un miembro del equipo le pregunte "¿cómo se sintió hoy?"</li>
                    <li>El instrumental se esteriliza sólo después de ser inspeccionado por 2 personas distintas</li>
                    <li>Si un miembro del equipo está saturado, cualquier otro puede pedir ayuda a cualquier otro miembro sin pasar por el director</li>
                </ol>
                <p>A los 9 meses: NPS subió de 62 a 89. Rotación: 0% (en el año previo habían perdido 4 personas).</p>
            </div></div>
        </div>

        <div class="quiz-container" id="quiz_l7b">
            <div class="quiz-label">Quiz 7B</div>
            <div class="quiz-question"><p>¿Cuál de estos elementos NO es parte del paso 5 (ritualización)?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l7b', this, false)">Firma física del Código en papel</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l7b', this, false)">Lectura pública en voz alta por todos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l7b', this, false)">Definir el ritual de la campana</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l7b', this, true)">Registrar el Código en el notario para darle validez legal</div>
            </div>
            <div class="quiz-feedback" id="quiz_l7b_fb"></div>
        </div>

        <div class="content-card" style="margin-top:30px;background:#faf8f3;border-left:3px solid #c9a961;">
            <h3 style="color:#0a2540;">Aplicación · Tu Código borrador v1</h3>
            <p>Ya tienes el proceso completo. Antes de la lección 8:</p>
            <ol>
                <li>Redacta tu borrador de 5-12 reglas basado en lo que ya tienes de las lecciones 1-5</li>
                <li>Aplícale los 3 tests (espía, miércoles, castigo)</li>
                <li>Llévalo a la sesión fundacional con tu equipo</li>
            </ol>
            <p>Un buen borrador del líder es un mapa, no el destino. El Código final lo redactará el equipo contigo.</p>
        </div>
        `
    },

    // ==========================================================
    // LECCION 8 — TU CODIGO PERSONAL
    // ==========================================================
    {
        id: 'codigo-personal', module: 'Tu Código personal', tag: 'tag-modulo4', tagLabel: 'MODULO 4',
        title: 'Tu Código personal: antes que el del equipo',
        subtitle: 'No puedes liderar un Código que tú no vives',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1400&q=80')">
            <div class="hero-caption">El líder lidera con lo que es, no con lo que dice</div>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/7HvYUlH4mkA?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Cómo los grandes líderes inspiran la acción"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">TED Simon Sinek: Cómo los grandes líderes inspiran la acción (español)</div>
        </div>

        <div class="content-card">
            <h3>La regla incómoda: tu Código personal viene primero</h3>
            <p>Blair Singer tiene una pregunta que suele incomodar a líderes ambiciosos: <em>"¿Cuál es TU Código personal? No el de tu empresa, no el de tu equipo. El tuyo, íntimo, que rige tu conducta cuando nadie mira"</em>.</p>
            <p>Casi nadie lo tiene escrito. Casi nadie lo ha pensado.</p>
            <p>Y ahí está el problema: <strong>no puedes liderar un Código que tú no vives</strong>. Si el Código del equipo dice "llegamos puntuales" y tú eres el que llega 15 minutos tarde "porque soy el jefe", el Código muere en la primera semana.</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#127775;</span><div>
                <h3>Historia personal de Blair Singer</h3>
                <p>Blair Singer cuenta que su Código personal empezó con una lista de 3 reglas que su padre le dijo a los 12 años, después de que él (Blair) rompiera accidentalmente una ventana en la granja y tratara de esconderlo:</p>
                <ol>
                    <li>"Di la verdad aunque te tiemble la voz"</li>
                    <li>"Trabaja más duro que el que esté a tu lado"</li>
                    <li>"Defiende al que no puede defenderse"</li>
                </ol>
                <p>Él reporta que en 60+ años esas 3 reglas se mantienen. Les agregó otras después (cuidar la salud física, honrar la palabra dada, no cobrar antes de entregar valor), pero las 3 originales siguen siendo la columna.</p>
                <p>La pregunta que te debes hacer es: <strong>¿cuáles son TUS 3 reglas centrales?</strong></p>
            </div></div>
        </div>

        <div class="content-card tip">
            <h3>Ejercicio · Escribe tu Código personal en 30 minutos</h3>
            <p>Responde honestamente en tu libreta:</p>
            <ol>
                <li>¿Qué 3 personas te han marcado más en tu vida? ¿Qué regla central vivían?</li>
                <li>¿Cuáles son los 3 momentos de tu vida de los que más te arrepientes? ¿Qué regla hubieras necesitado tener?</li>
                <li>¿Cuáles son los 3 momentos de tu vida de los que estás más orgulloso? ¿Qué regla estabas cumpliendo?</li>
                <li>Si te quedaran 12 meses de vida, ¿cuáles serían las 5 reglas que querrías cumplir hasta el final?</li>
            </ol>
            <p>De todas las respuestas, destila entre <strong>5 y 8 reglas personales</strong>. Escríbelas con verbos, con contexto, con ejemplos de cómo las vas a cumplir esta semana.</p>
        </div>

        <div class="content-card">
            <h3>Ejemplo · Código personal de un gerente mexicano</h3>
            <p>Este es el Código personal real que escribió en una sesión de coaching un gerente de operaciones de una cadena de tiendas de conveniencia en Puebla (compartido con su permiso):</p>
            <ol class="concept-list">
                <li>"Llego siempre 15 minutos antes a cualquier compromiso. Siempre."</li>
                <li>"Si me equivoco, lo digo antes de que alguien lo descubra. Sin excepciones."</li>
                <li>"No hablo mal de nadie ausente. Si tengo algo que decir, lo hablo con esa persona directamente."</li>
                <li>"Pago puntualmente — a proveedores, empleados, mis hijos, mis padres, mi esposa. La palabra dada es sagrada."</li>
                <li>"Duermo 7 horas. La fatiga es la antesala del mal carácter."</li>
                <li>"Lleno mi vaso espiritual antes de llenar los de otros — leo 30 minutos al día."</li>
                <li>"Pido perdón cuando me equivoco. Y con la misma fuerza reconozco cuando aciertan otros."</li>
            </ol>
            <p>¿Qué notas? Son conductas específicas, medibles, observables. Puede evaluarse cada semana si las está cumpliendo.</p>
        </div>

        <div class="quiz-container" id="quiz_l8a">
            <div class="quiz-label">Quiz 8A</div>
            <div class="quiz-question"><p>¿Por qué Blair Singer insiste en que el Código personal viene ANTES que el del equipo?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l8a', this, false)">Porque el líder tiene derecho a reglas diferentes al resto del equipo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l8a', this, true)">Porque no se puede liderar un Código que uno mismo no vive — la coherencia es no negociable</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l8a', this, false)">Porque el Código personal es más fácil de cumplir</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l8a', this, false)">Porque el Código del equipo es opcional</div>
            </div>
            <div class="quiz-feedback" id="quiz_l8a_fb"></div>
        </div>

        <div class="content-card" style="background:#0a2540;color:#faf8f3;">
            <h3 style="color:#c9a961;">La auditoría semanal de tu Código personal</h3>
            <p>Blair Singer recomienda un ritual personal: cada domingo por la noche, 15 minutos, en solitario. Tomas tu Código personal escrito y te evalúas regla por regla en la semana que termina.</p>
            <p><strong>Preguntas:</strong></p>
            <ol>
                <li>De las 5-8 reglas, ¿cuáles cumplí al 100%? (celébralo)</li>
                <li>¿Cuáles rompí y cuál fue el costo (visible e invisible)?</li>
                <li>¿Qué ajuste concreto hago esta semana para recuperar?</li>
            </ol>
            <p>Este ritual, sostenido 3 meses, cambia la relación del líder con su propio Código — deja de ser una idea y se convierte en identidad.</p>
        </div>

        <div class="quiz-container" id="quiz_l8b">
            <div class="quiz-label">Quiz 8B</div>
            <div class="quiz-question"><p>¿Qué ritual personal recomienda Blair Singer para sostener el Código personal?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l8b', this, false)">Publicarlo en redes sociales</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l8b', this, true)">Auditarlo semanalmente en solitario (15 minutos), regla por regla</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l8b', this, false)">Cambiar las reglas cada mes</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l8b', this, false)">No mencionarlo jamás a nadie</div>
            </div>
            <div class="quiz-feedback" id="quiz_l8b_fb"></div>
        </div>

        <div class="content-card" style="margin-top:30px;background:#faf8f3;border-left:3px solid #c9a961;">
            <h3 style="color:#0a2540;">Aplicación · Tu Código personal v1</h3>
            <p>Escribe tu Código personal en máximo 8 reglas. Incluye:</p>
            <ul>
                <li>3 reglas centrales (las no negociables)</li>
                <li>2-3 reglas de conducta interpersonal</li>
                <li>1-2 reglas de cuidado propio (físico/mental)</li>
            </ul>
            <p>Después: escríbelo a mano, fírmalo, fechalo. Pegalo donde lo veas al despertar (baño, refrigerador, escritorio).</p>
            <p>Cambio de juego: el líder que comparte su Código personal con su equipo en la sesión fundacional genera un respeto que ningún título organizacional puede comprar.</p>
        </div>
        `
    },

    // ==========================================================
    // LECCION 9 — COHERENCIA DEL LIDER
    // ==========================================================
    {
        id: 'coherencia-lider', module: 'Tu Código personal', tag: 'tag-modulo4', tagLabel: 'MODULO 4',
        title: 'Coherencia del líder: el Código se rompe por arriba',
        subtitle: 'El 80% de los Códigos muere porque el líder lo viola el primer mes',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1559526324-c1f275fbfa32?w=1400&q=80')">
            <div class="hero-caption">El equipo copia lo que el líder hace, no lo que dice</div>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/4bcB5FJq80Q?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Simon Sinek: líderes inspiran la acción"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Simon Sinek — Cómo los grandes líderes inspiran la acción (en español)</div>
        </div>

        <div class="content-card">
            <h3>El dato duro: 80% de los Códigos mueren por incoherencia del líder</h3>
            <p>Blair Singer, después de asesorar a más de 3,000 equipos, reporta que el 80% de los Códigos de Honor que fracasan NO fracasan por mala redacción, mal proceso o mala gente. Fracasan porque <strong>el líder rompió la primera regla del Código en el primer mes y nadie se atrevió a marcárselo</strong>.</p>
            <p>El líder es el primer violador. Y si es el primer violador sin consecuencia, el Código está muerto. Punto.</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128205;</span><div>
                <h3>Caso mexicano · "Llegamos puntuales" — menos el dueño</h3>
                <p>Consultoría con una distribuidora de autopartes en Ciudad de México. Armaron su Código con 9 reglas, una era "Todos llegamos 10 minutos antes del horario de apertura".</p>
                <p>Funcionó 11 días. Al día 12, el dueño llegó a las 9:35 (horario de apertura 9 AM). Sin decir nada.</p>
                <p>Nadie lo marcó. Nadie tocó la campana. El silencio hizo el trabajo.</p>
                <p>Día 15, 2 vendedores empezaron a llegar tarde "porque el jefe llega tarde". Día 30, el Código estaba descaradamente muerto.</p>
                <p>Cuando el dueño me llamó a pedirme otra sesión, le dije que no. Le dije: <em>"La siguiente sesión será cuando tú estés dispuesto a que el primer día que llegues tarde, alguien toque la campana y tú públicamente pidas disculpas. Sin eso, no hay Código posible"</em>.</p>
                <p>Seis meses después me llamó. Había hecho exactamente eso la segunda vez. El Código se sostuvo 3 años.</p>
            </div></div>
        </div>

        <div class="content-card tip">
            <h3>Concepto clave · "El líder es un espejo amplificador"</h3>
            <p>Blair Singer usa esta metáfora: el líder no es un modelo, es un <strong>amplificador</strong>. Todo lo que hace se magnifica 10 veces en el equipo.</p>
            <ul>
                <li>Si llegas 5 minutos tarde, tu equipo llegará 15</li>
                <li>Si hablas mal de un proveedor en privado, tu equipo hablará mal de ti en el estacionamiento</li>
                <li>Si toleras un error grave, tu equipo tolerará 5 errores medianos</li>
                <li>Si pides perdón sinceramente por un error, tu equipo aprenderá a pedirlo también</li>
            </ul>
            <p>Esta es la razón por la que el Código personal (lección 8) viene PRIMERO. Si tu Código personal no está limpio, el del equipo va a heredar tus defectos amplificados.</p>
        </div>

        <div class="content-card">
            <h3>Los 3 momentos en los que la coherencia del líder se prueba</h3>
            <ol class="concept-list">
                <li><strong>Cuando el Código te obliga a perder algo:</strong> ganar menos dinero, soltar un cliente tóxico, renunciar a un bono. Ahí el equipo ve si tus reglas son reales o decorativas.</li>
                <li><strong>Cuando el Código te obliga a disciplinar a tu favorito:</strong> el vendedor estrella que rompió el Código. El equipo ve si el talento compra permiso.</li>
                <li><strong>Cuando tú mismo rompes el Código:</strong> ¿pides disculpas públicamente y te aplicas la consecuencia? ¿O lo ignoras y esperas que nadie lo note?</li>
            </ol>
            <p>En los 3 momentos, todo el equipo está mirando. El Código sobrevive o muere en esos tres momentos.</p>
        </div>

        <div class="quiz-container" id="quiz_l9a">
            <div class="quiz-label">Quiz 9A</div>
            <div class="quiz-question"><p>Según Blair Singer, ¿cuál es la razón principal por la que mueren los Códigos de Honor?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l9a', this, false)">Mala redacción de las reglas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l9a', this, true)">Incoherencia del líder — viola una regla en el primer mes y nadie lo marca</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l9a', this, false)">Demasiadas reglas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l9a', this, false)">Falta de presupuesto para capacitación</div>
            </div>
            <div class="quiz-feedback" id="quiz_l9a_fb"></div>
        </div>

        <div class="content-card" style="background:#0a2540;color:#faf8f3;">
            <h3 style="color:#c9a961;">El protocolo de disculpa pública del líder</h3>
            <p>Cuando rompes una regla del Código (y vas a romperla, eres humano), Blair Singer recomienda este protocolo:</p>
            <ol>
                <li><strong>Reconocimiento explícito</strong> — en la siguiente reunión del equipo, el primer punto: "Ayer rompí la regla #3. Llegué tarde sin avisar."</li>
                <li><strong>Nombrar el daño</strong> — "Eso le mandó al equipo el mensaje de que la regla es negociable. No lo es."</li>
                <li><strong>Asumir consecuencia</strong> — la misma que aplicarías a cualquier miembro (si hay multa simbólica, la pagas; si hay servicio al equipo, lo haces)</li>
                <li><strong>Compromiso concreto</strong> — "Esta es mi corrección para los próximos 30 días: saldré 20 min antes de casa para no repetirlo."</li>
                <li><strong>Agradecimiento</strong> — "Gracias a quien tuvo el valor de tocar la campana. Esta es la clase de equipo que queremos ser."</li>
            </ol>
            <p style="margin-top:15px;">Sostener este protocolo como líder es el acto más poderoso que puedes hacer por tu Código. Cada disculpa pública fortalece el Código en 10x.</p>
        </div>

        <div class="quiz-container" id="quiz_l9b">
            <div class="quiz-label">Quiz 9B</div>
            <div class="quiz-question"><p>¿Cuál es el protocolo correcto cuando el líder rompe una regla del Código?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l9b', this, false)">Ignorarlo y esperar que nadie lo note</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l9b', this, false)">Explicar en privado al equipo por qué el líder es la excepción</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l9b', this, true)">Reconocimiento público + nombrar el daño + asumir consecuencia + compromiso concreto + agradecer</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l9b', this, false)">Reescribir la regla para que ya no aplique al líder</div>
            </div>
            <div class="quiz-feedback" id="quiz_l9b_fb"></div>
        </div>

        <div class="content-card" style="margin-top:30px;background:#faf8f3;border-left:3px solid #c9a961;">
            <h3 style="color:#0a2540;">Aplicación · Compromiso público</h3>
            <p>Antes de la sesión fundacional con tu equipo, prepara una declaración para los primeros 5 minutos de la sesión:</p>
            <p style="font-style:italic;padding:10px;background:#fff;border-left:3px solid #c9a961;">"Quiero comprometerme con ustedes públicamente: el Código que armemos hoy me aplica primero a mí. Si yo rompo alguna regla, espero que cualquiera de ustedes, sin importar antigüedad o puesto, tenga el valor de marcármelo. Les prometo que cuando eso pase, pediré disculpas públicamente y aplicaré la consecuencia que acordemos hoy."</p>
            <p>Leerla en voz alta cambia la sesión desde el minuto uno.</p>
        </div>
        `
    },

    // ==========================================================
    // LECCION 10 — LA CAMPANA (RITUAL CENTRAL)
    // ==========================================================
    {
        id: 'campana-ritual', module: 'Reforzar el Código', tag: 'tag-modulo5', tagLabel: 'MODULO 5',
        title: 'La Campana: el ritual central del Código',
        subtitle: 'Sin ritual, el Código es sólo un papel',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1400&q=80')">
            <div class="hero-caption">La campana es el órgano que mantiene vivo al Código</div>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/lVWZXojr1p8?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Resumen visual: Simon Sinek"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Resumen visual del TED de Simon Sinek — Pensamiento Visual</div>
        </div>

        <div class="content-card">
            <h3>Qué es la campana y por qué funciona</h3>
            <p>Blair Singer introduce el concepto de "la campana" como el ritual central que refuerza el Código. Literalmente puede ser una campana física (como las de antiguas tiendas), o puede ser cualquier otro objeto simbólico acordado por el equipo.</p>
            <p>Función: cuando alguien detecta que otro miembro (o el líder) acaba de romper una regla del Código, toca la campana. <strong>Ese sonido detiene la conversación, señala el momento y llama al equipo a reflexionar</strong>.</p>
            <p>La magia: la campana <strong>no juzga, no castiga, no señala</strong>. Sólo interrumpe. El que la tocó dice "tocamos la campana por la regla X". El que rompió la regla la reconoce, agradece y corrige.</p>
        </div>

        <div class="content-card tip">
            <h3>Por qué funciona (neurociencia del ritual)</h3>
            <ol class="concept-list">
                <li><strong>Interrumpe el piloto automático:</strong> el sonido físico de la campana saca al cerebro del modo inconsciente</li>
                <li><strong>Neutraliza la confrontación personal:</strong> no es "fulano te está llamando la atención", es "la campana habló"</li>
                <li><strong>Hace visible lo invisible:</strong> los micro-quiebres del Código quedan marcados públicamente</li>
                <li><strong>Crea memoria emocional:</strong> el sonido se asocia con la conducta correcta — el condicionamiento pavloviano en positivo</li>
                <li><strong>Democratiza la voz:</strong> cualquiera puede tocarla, incluido el más junior, al líder</li>
            </ol>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128276;</span><div>
                <h3>Caso mexicano · La campana del banco en Querétaro</h3>
                <p>Sucursal bancaria en Querétaro, 32 empleados. Instalaron una campana de barco chica (comprada en un mercado de Veracruz) sobre el escritorio del gerente.</p>
                <p>Reglas del Código incluían: "No hablamos mal de ningún cliente a sus espaldas" y "Si cometemos un error operativo, lo reportamos antes de cerrar caja".</p>
                <p>A la tercera semana, una cajera tocó la campana cuando escuchó a un asesor comentar con sarcasmo sobre un cliente difícil que acababa de salir. El asesor, un empleado con 8 años de antigüedad, primero se puso rojo. Después, dijo: <em>"Tiene razón. Rompí la regla 3. Pido disculpas al equipo"</em>.</p>
                <p>Ese acto cambió todo. A los 3 meses, el NPS subió 21 puntos. La rotación bajó. Y lo más importante: los propios clientes empezaron a comentar que "aquí se siente distinto".</p>
                <p>La campana costó 340 pesos. El valor que generó fue incuantificable.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>Alternativas a la campana (para contextos mexicanos)</h3>
            <p>No siempre una campana es apropiada. Algunos equipos usan alternativas:</p>
            <ul>
                <li><strong>Palmada acordada:</strong> 3 palmadas sincronizadas (útil en cocinas ruidosas)</li>
                <li><strong>Silbato de árbitro:</strong> funciona bien en equipos deportivos y ventas</li>
                <li><strong>Tarjeta amarilla simbólica:</strong> se muestra sin palabras (útil cuando hay clientes presentes)</li>
                <li><strong>Cantar un tono acordado:</strong> 2 notas específicas (en ambientes donde no se puede hacer ruido)</li>
                <li><strong>Levantar un objeto visual:</strong> un pañuelo amarillo, una pelota pequeña</li>
                <li><strong>Frase-código:</strong> "Tocamos la campana" dicho sin más contexto</li>
            </ul>
            <p>Lo importante no es el objeto. Es que sea:</p>
            <ol>
                <li>Inequívoco (no se confunde con otra cosa)</li>
                <li>Accesible (todos pueden usarlo)</li>
                <li>No humillante (no señala a la persona, sólo la conducta)</li>
                <li>Ritualizado (siempre sigue el mismo protocolo)</li>
            </ol>
        </div>

        <div class="quiz-container" id="quiz_l10a">
            <div class="quiz-label">Quiz 10A</div>
            <div class="quiz-question"><p>¿Cuál es la función principal de la campana según Blair Singer?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l10a', this, false)">Castigar públicamente al que rompe la regla</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l10a', this, false)">Reemplazar al líder para que no tenga que disciplinar</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l10a', this, true)">Interrumpir el piloto automático, hacer visible el micro-quiebre del Código sin confrontación personal</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l10a', this, false)">Medir cuántas reglas se rompen al día</div>
            </div>
            <div class="quiz-feedback" id="quiz_l10a_fb"></div>
        </div>

        <div class="content-card">
            <h3>El protocolo de la campana (paso a paso)</h3>
            <ol class="concept-list">
                <li><strong>Detección:</strong> cualquier miembro percibe un quiebre del Código</li>
                <li><strong>Toque:</strong> toca la campana sin acusar — sólo el sonido</li>
                <li><strong>Silencio:</strong> se detiene la actividad por 5 segundos</li>
                <li><strong>Nombrar:</strong> quien tocó dice "tocamos la campana por la regla #X" (sólo el número, no el nombre del que la rompió)</li>
                <li><strong>Auto-reconocimiento:</strong> quien rompió la regla se identifica voluntariamente: "fui yo, disculpen"</li>
                <li><strong>Consecuencia:</strong> se aplica la consecuencia acordada (si hay)</li>
                <li><strong>Compromiso:</strong> quien rompió la regla dice qué hará distinto</li>
                <li><strong>Cierre:</strong> el equipo agradece, se reanuda la actividad</li>
            </ol>
            <p>Todo el protocolo dura entre 60 y 120 segundos. No es una ceremonia larga.</p>
        </div>

        <div class="content-card tip">
            <h3>Errores comunes al implementar la campana</h3>
            <ul>
                <li><strong>Mal uso:</strong> tocarla para molestar o hacer chistes — destruye el Código en 3 días</li>
                <li><strong>No se usa:</strong> se instala pero nadie la toca — el Código se vuelve decorativo</li>
                <li><strong>La toca sólo el jefe:</strong> indica que el equipo tiene miedo; hay que trabajar la seguridad psicológica antes</li>
                <li><strong>Se toca y se evita nombrar:</strong> pierde potencia; siempre hay que nombrar la regla (sin nombrar a la persona)</li>
                <li><strong>Castigo desproporcionado:</strong> la consecuencia no debe ser humillante ni permanente</li>
            </ul>
        </div>

        <div class="quiz-container" id="quiz_l10b">
            <div class="quiz-label">Quiz 10B</div>
            <div class="quiz-question"><p>En el protocolo de la campana, cuando alguien toca la campana, ¿qué dice primero?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l10b', this, false)">El nombre de la persona que rompió la regla</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l10b', this, true)">"Tocamos la campana por la regla #X" — sólo el número de regla, no el nombre del que la rompió</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l10b', this, false)">"Te vi rompiendo la regla"</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l10b', this, false)">La consecuencia que debe pagar</div>
            </div>
            <div class="quiz-feedback" id="quiz_l10b_fb"></div>
        </div>

        <div class="content-card" style="margin-top:30px;background:#faf8f3;border-left:3px solid #c9a961;">
            <h3 style="color:#0a2540;">Aplicación · Elige tu campana</h3>
            <p>Antes de la sesión fundacional, piensa en 2-3 opciones de "campana" apropiadas para tu contexto. En la sesión, el equipo decide cuál usar. Adquiere el objeto físico y colócalo en un lugar accesible a todos.</p>
            <p>Opciones típicas para contextos mexicanos:</p>
            <ul>
                <li>Farmacia/clínica: campana de recepción</li>
                <li>Restaurante: silbato de cocinero</li>
                <li>Oficina: campana de escritorio de servicio</li>
                <li>Agencia de autos: tarjeta amarilla de estilo árbitro</li>
                <li>Equipo remoto: emoji específico en Slack o Teams (ej. 🔔)</li>
            </ul>
            <p>En la próxima lección vemos cómo aplicar consecuencias justas cuando una regla se rompe.</p>
        </div>
        `
    },

    // ==========================================================
    // LECCION 11 — CONSECUENCIAS JUSTAS
    // ==========================================================
    {
        id: 'consecuencias-justas', module: 'Reforzar el Código', tag: 'tag-modulo5', tagLabel: 'MODULO 5',
        title: 'Consecuencias justas: ni blandas ni punitivas',
        subtitle: 'Cómo cerrar el ciclo sin destruir la relación',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1400&q=80')">
            <div class="hero-caption">Sin consecuencia, no hay Código. Con consecuencia excesiva, no hay equipo</div>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/DRzAqMgzxtA?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="TED Simon Sinek: líderes inspiran la acción"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Simon Sinek — TED Talk con subtítulos en español</div>
        </div>

        <div class="content-card">
            <h3>La trampa de las dos extremos: laxitud y punición</h3>
            <p>Blair Singer identifica dos errores simétricos que matan al Código:</p>
            <ul>
                <li><strong>Error 1 · Laxitud:</strong> se rompe la regla, el líder dice "no pasa nada, la próxima", y el Código se convierte en letra muerta en 3 semanas</li>
                <li><strong>Error 2 · Punición excesiva:</strong> se rompe una regla menor, el líder convierte el momento en humillación pública, y el equipo empieza a temer la campana. Se vuelve herramienta de abuso.</li>
            </ul>
            <p>La consecuencia justa vive en el equilibrio: suficiente para marcar que la regla importa, pero sin humillar, sin descompensar, sin romper la dignidad de la persona.</p>
        </div>

        <div class="content-card tip">
            <h3>Principios de la consecuencia justa</h3>
            <ol class="concept-list">
                <li><strong>Acordada con anticipación:</strong> la consecuencia se define en la sesión fundacional, NO se inventa cuando ya pasó</li>
                <li><strong>Proporcional:</strong> llegar 10 min tarde ≠ mentir sobre un error grave</li>
                <li><strong>Restaurativa, no punitiva:</strong> la consecuencia debe reparar el daño al equipo, no vengar</li>
                <li><strong>Temporal y finita:</strong> tiene fecha de inicio y fin; no es permanente</li>
                <li><strong>Uniforme:</strong> aplica igual al líder, al estrella, al junior</li>
                <li><strong>Privada cuando es posible:</strong> la reprimenda en privado, el reconocimiento en público (regla inversa de la cultura cobarde)</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>Tipos de consecuencias por nivel de gravedad</h3>
            <p><strong>Nivel 1 · Micro-quiebre (llegar 5 min tarde, no saludar):</strong></p>
            <ul>
                <li>Toque de campana + auto-reconocimiento + compromiso</li>
                <li>Opcional: pequeña "multa" simbólica a un bote común (20-50 pesos, se usa para cafés del equipo)</li>
                <li>Duración: 60-90 segundos, cierre inmediato</li>
            </ul>
            <p><strong>Nivel 2 · Quiebre mediano (hablar mal de un compañero ausente, dejar al siguiente turno con trabajo acumulado):</strong></p>
            <ul>
                <li>Conversación 1-a-1 con el líder (20-30 minutos)</li>
                <li>Plan de corrección concreto a 30 días</li>
                <li>Seguimiento en la siguiente reunión de equipo</li>
            </ul>
            <p><strong>Nivel 3 · Quiebre grave (mentir sobre resultados, humillar a un compañero, ocultar un error crítico):</strong></p>
            <ul>
                <li>Conversación formal con líder (documentada)</li>
                <li>Plan de restitución explícito — cómo se va a reparar el daño al equipo</li>
                <li>Período de observación de 60-90 días</li>
                <li>Consecuencia final posible: salida del equipo</li>
            </ul>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128272;</span><div>
                <h3>Caso mexicano · El vendedor estrella que tuvo que irse</h3>
                <p>Consultoría a una empresa inmobiliaria en CDMX con 22 agentes. Su Código incluía: "Nunca hablamos mal de un cliente o de otro agente. Nunca."</p>
                <p>Un vendedor, el #1 en facturación, con bonos jugosos, rompió esa regla 3 veces en 2 meses — en cada caso humillando a un agente junior delante de clientes.</p>
                <p>El dueño dudó. Ese vendedor facturaba el 18% del total de la empresa.</p>
                <p>En sesión de coaching le dije: <em>"Si conservas a este vendedor, en 6 meses vas a tener 21 agentes que hablan mal de otros porque el Código murió. La pérdida va a ser mucho mayor al 18% que produce el vendedor estrella"</em>.</p>
                <p>Aplicó la consecuencia final: el vendedor salió. El primer mes, la empresa facturó 22% menos. Al tercer mes, había recuperado todo: otros agentes absorbieron su cartera y un nuevo agente entró.</p>
                <p>Al año: la empresa facturaba 34% más. Los agentes se quedaban más tiempo. La rotación bajó 60%. El Código se había vuelto real.</p>
                <p>Lección: conservar un "B" (talentoso pero rompe Código) cuesta más caro de lo que produce.</p>
            </div></div>
        </div>

        <div class="quiz-container" id="quiz_l11a">
            <div class="quiz-label">Quiz 11A</div>
            <div class="quiz-question"><p>¿Cuál es el principio central de la consecuencia justa según Blair Singer?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l11a', this, false)">Máxima severidad para cualquier quiebre</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l11a', this, false)">Mínima consecuencia para no incomodar</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l11a', this, true)">Proporcional, restaurativa, acordada con anticipación, uniforme para todos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l11a', this, false)">Dejar al líder decidir caso por caso según su criterio</div>
            </div>
            <div class="quiz-feedback" id="quiz_l11a_fb"></div>
        </div>

        <div class="content-card">
            <h3>"La crítica en privado, el reconocimiento en público"</h3>
            <p>Blair Singer invierte una costumbre cultural muy común: muchos líderes hacen al revés — critican en público (llaman la atención delante de todos) y reconocen en privado (felicitan a escondidas para no incomodar al resto).</p>
            <p>El resultado es un equipo miedoso y envidioso. El correcto es:</p>
            <ul>
                <li><strong>Crítica/consecuencia:</strong> en privado, con dignidad, sin testigos innecesarios</li>
                <li><strong>Reconocimiento:</strong> en público, frente al equipo, explícito, con nombre y apellido</li>
            </ul>
            <p>Este simple cambio transforma la energía del equipo en 6-8 semanas.</p>
        </div>

        <div class="content-card tip">
            <h3>El "banco de la restitución"</h3>
            <p>Blair Singer sugiere una técnica poderosa para consecuencias de nivel 2-3: en vez de multas monetarias o descuentos, la persona que rompió la regla <strong>hace una acción de restitución al equipo</strong>.</p>
            <p>Ejemplos:</p>
            <ul>
                <li>Llegar 30 minutos antes durante 2 semanas y preparar el café del equipo</li>
                <li>Capacitar a un miembro junior durante 3 sesiones de 45 min</li>
                <li>Presentar al equipo un informe de aprendizajes sobre la regla que rompió</li>
                <li>Cubrir el turno más difícil de otro miembro una vez</li>
            </ul>
            <p>La restitución repara el tejido del equipo. Las multas lo rasgan más.</p>
        </div>

        <div class="quiz-container" id="quiz_l11b">
            <div class="quiz-label">Quiz 11B</div>
            <div class="quiz-question"><p>Según Blair Singer, la regla correcta sobre dónde dar crítica y reconocimiento es:</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l11b', this, false)">Crítica en público, reconocimiento en privado</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l11b', this, false)">Todo en público, máxima transparencia</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l11b', this, true)">Crítica/consecuencia en privado, reconocimiento en público</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l11b', this, false)">Todo en privado, siempre</div>
            </div>
            <div class="quiz-feedback" id="quiz_l11b_fb"></div>
        </div>

        <div class="content-card" style="margin-top:30px;background:#faf8f3;border-left:3px solid #c9a961;">
            <h3 style="color:#0a2540;">Aplicación · Matriz de consecuencias</h3>
            <p>Para cada una de tus reglas (5-12), define en la sesión fundacional:</p>
            <table style="width:100%;border-collapse:collapse;margin-top:10px;">
                <thead style="background:#0a2540;color:#faf8f3;">
                    <tr>
                        <th style="padding:8px;text-align:left;">Regla</th>
                        <th style="padding:8px;text-align:left;">Micro (nivel 1)</th>
                        <th style="padding:8px;text-align:left;">Mediano (nivel 2)</th>
                        <th style="padding:8px;text-align:left;">Grave (nivel 3)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom:1px solid #ddd;">
                        <td style="padding:8px;">Puntualidad</td>
                        <td style="padding:8px;">Campana + 20 pesos al fondo</td>
                        <td style="padding:8px;">3 tardanzas en mes: charla con líder + plan</td>
                        <td style="padding:8px;">Repetitivo 2 meses: revisión seria</td>
                    </tr>
                </tbody>
            </table>
            <p>Rellena una fila por regla. Publica la matriz junto al Código.</p>
        </div>
        `
    },

    // ==========================================================
    // LECCION 12 — MANTENER EL CODIGO VIVO
    // ==========================================================
    {
        id: 'mantener-vivo', module: 'Reforzar el Código', tag: 'tag-modulo5', tagLabel: 'MODULO 5',
        title: 'Mantener el Código vivo: la operación del día a día',
        subtitle: 'Rituales, revisiones, onboarding y cómo evitar el decaimiento',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1400&q=80')">
            <div class="hero-caption">El Código es un organismo vivo que necesita oxígeno diario</div>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/1M0B5evfhC4?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Simon Sinek: Empieza con PORQUÉ"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Simon Sinek en Las Vegas: Empieza con PORQUÉ (subtítulos en español)</div>
        </div>

        <div class="content-card">
            <h3>La curva del decaimiento: qué pasa con un Código sin mantenimiento</h3>
            <p>Blair Singer documentó con sus clientes este patrón típico si el Código no se mantiene activamente:</p>
            <ul>
                <li><strong>Semanas 1-3:</strong> altísimo entusiasmo, la campana suena seguido, el equipo se siente orgulloso</li>
                <li><strong>Semanas 4-6:</strong> baja el entusiasmo; la campana suena menos; aparecen micro-violaciones que nadie marca</li>
                <li><strong>Semanas 7-10:</strong> la gente ya no recuerda la regla #7; el Código se vuelve decorativo</li>
                <li><strong>Semana 11+:</strong> Código muerto; el equipo vuelve a la cultura implícita anterior</li>
            </ul>
            <p>Para evitar esta curva, hay que implementar rituales de mantenimiento <strong>desde la primera semana</strong>.</p>
        </div>

        <div class="content-card tip">
            <h3>Los 4 rituales de mantenimiento obligatorios</h3>
            <ol class="concept-list">
                <li><strong>Revisión semanal de 10 minutos:</strong> cada viernes (o día final de turno), el equipo dedica 10 min a leer el Código en voz alta, celebrar lo bien cumplido y reconocer campanas de la semana</li>
                <li><strong>Revisión trimestral de 60 minutos:</strong> cada 3 meses, el equipo revisa si alguna regla ya no aplica, si falta alguna y vota cambios (máximo cambiar 2 reglas por trimestre)</li>
                <li><strong>Onboarding de nuevos:</strong> toda persona nueva recibe el Código el primer día, firma aceptación, es emparejada con un "padrino del Código" que le enseña la cultura real en sus primeros 30 días</li>
                <li><strong>Off-site anual:</strong> una vez al año, 4-6 horas fuera de la oficina, se hace una re-alineación profunda del Código</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>Ritual #1 · La revisión de los viernes</h3>
            <p>Formato de 10 minutos, cada viernes a la misma hora (recomendado: 30 min antes del cierre):</p>
            <ol>
                <li><strong>2 min · Lectura:</strong> una persona distinta cada semana lee el Código en voz alta</li>
                <li><strong>3 min · Celebración:</strong> cada uno nombra 1 regla que vio cumplirse ejemplarmente esta semana (con nombre y apellido)</li>
                <li><strong>3 min · Campanas de la semana:</strong> se cuentan cuántas campanas hubo y por qué (sin nombres)</li>
                <li><strong>2 min · Compromiso:</strong> cada uno elige 1 regla para enfocar la siguiente semana</li>
            </ol>
            <p>Este ritual, sostenido 12 meses, cambia la cultura de una organización permanentemente.</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#127925;</span><div>
                <h3>Caso mexicano · La cafetería de Oaxaca que no deja morir su Código</h3>
                <p>Cafetería de especialidad en Oaxaca, 9 empleados, abierta desde 2021.</p>
                <p>Su Código tiene 7 reglas. Lo sostienen con dos rituales específicos:</p>
                <ul>
                    <li><strong>Ritual de apertura (6 AM):</strong> el primer barista que llega toca 7 veces la campana (una por regla). Cada toque nombra en voz alta la regla correspondiente. Tarda 40 segundos.</li>
                    <li><strong>Ritual de cierre (10 PM):</strong> el último en salir lee el Código en el libro donde todos firmaron. Tarda 1 minuto.</li>
                </ul>
                <p>Resultado: 4 años después, siguen con ese Código intacto. Los 3 empleados originales siguen ahí. NPS = 92. Facturación aumentó 340% respecto del primer año.</p>
                <p>El ritual diario es corto, pero tiene un efecto acumulativo que ningún entrenamiento anual puede generar.</p>
            </div></div>
        </div>

        <div class="quiz-container" id="quiz_l12a">
            <div class="quiz-label">Quiz 12A</div>
            <div class="quiz-question"><p>Sin rituales de mantenimiento, ¿cuánto tarda típicamente en morir un Código según Blair Singer?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l12a', this, false)">1-2 años</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l12a', this, false)">6-12 meses</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l12a', this, true)">8-11 semanas (2-3 meses)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l12a', this, false)">Nunca muere si está bien redactado</div>
            </div>
            <div class="quiz-feedback" id="quiz_l12a_fb"></div>
        </div>

        <div class="content-card">
            <h3>Onboarding del Código: los primeros 30 días del nuevo</h3>
            <p>Una persona nueva es el momento más delicado para el Código. Si no se integra bien, puede:</p>
            <ul>
                <li>Ignorar el Código por no conocerlo</li>
                <li>Traer una cultura anterior incompatible</li>
                <li>Ser visto como "forastero" y desconectar emocionalmente</li>
            </ul>
            <p><strong>Protocolo de onboarding al Código:</strong></p>
            <ol class="concept-list">
                <li><strong>Día 1:</strong> lectura conjunta del Código con el líder (20 min); firma en el libro; foto grupal de bienvenida</li>
                <li><strong>Día 2-7:</strong> emparejamiento con un "padrino del Código" (miembro con más de 6 meses en el equipo). El padrino desayuna o come con el nuevo 2 veces esa semana y le explica la cultura real, los matices, los "por qué" detrás de cada regla</li>
                <li><strong>Día 30:</strong> revisión 1-a-1 con el líder. Preguntas: ¿qué regla te ha costado más? ¿qué regla te ha sorprendido? ¿qué regla agregarías si pudieras?</li>
                <li><strong>Día 60:</strong> el nuevo presenta al equipo 2 aprendizajes personales sobre el Código (en la revisión de los viernes)</li>
                <li><strong>Día 90:</strong> ingreso formal como "miembro pleno" — a partir de aquí puede tocar la campana a cualquiera, incluido el líder</li>
            </ol>
        </div>

        <div class="content-card tip">
            <h3>Señales de que tu Código está decayendo (actúa YA)</h3>
            <ol>
                <li>La campana no suena en 2 semanas</li>
                <li>Las revisiones de los viernes se cancelan por "urgencias"</li>
                <li>El equipo ya no puede recitar las 5-12 reglas de memoria</li>
                <li>Nuevos miembros se integran sin ritual de onboarding</li>
                <li>El líder empieza a hacer excepciones "por circunstancias especiales"</li>
                <li>Aparecen grupitos que hablan mal del Código en pasillos</li>
            </ol>
            <p>Si marcas 2 o más, convoca <strong>hoy mismo</strong> una sesión de re-alineación.</p>
        </div>

        <div class="quiz-container" id="quiz_l12b">
            <div class="quiz-label">Quiz 12B</div>
            <div class="quiz-question"><p>¿Cuál es el propósito del "padrino del Código" en el onboarding?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l12b', this, false)">Vigilar al nuevo y reportar sus errores al jefe</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l12b', this, false)">Hacer todo el trabajo del nuevo mientras aprende</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l12b', this, true)">Transmitir al nuevo la cultura real, matices y "por qué" de cada regla durante sus primeros 30 días</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l12b', this, false)">Reemplazar al líder en las evaluaciones</div>
            </div>
            <div class="quiz-feedback" id="quiz_l12b_fb"></div>
        </div>

        <div class="content-card" style="margin-top:30px;background:#faf8f3;border-left:3px solid #c9a961;">
            <h3 style="color:#0a2540;">Aplicación · Calendario anual del Código</h3>
            <p>Agenda en tu calendario para los próximos 12 meses:</p>
            <ul>
                <li>52 revisiones semanales (viernes, 10 min)</li>
                <li>4 revisiones trimestrales (60 min)</li>
                <li>1 off-site anual (4-6 horas)</li>
                <li>Protocolo de onboarding activado para cualquier ingreso nuevo</li>
            </ul>
            <p>Bloquea todo ahora. Si no está en el calendario, no va a pasar.</p>
        </div>
        `
    },

    // ==========================================================
    // LECCION 13 — LIDERAR PARA HACER GRANDES (PARTE 1)
    // ==========================================================
    {
        id: 'liderar-grandes-01', module: 'Liderar para hacer grandes', tag: 'tag-modulo6', tagLabel: 'MODULO 6',
        title: 'Liderar para convertir gente común en grandes jugadores',
        subtitle: 'El líder como multiplicador, no como crítico',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1573496546620-c27a0bc23eed?w=1400&q=80')">
            <div class="hero-caption">Un gran líder hace que gente promedio produzca resultados extraordinarios</div>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/nqyHYUcEcZY?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Simon Sinek: How great leaders inspire action"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Simon Sinek TED — How great leaders inspire action (subtitulado)</div>
        </div>

        <div class="content-card">
            <h3>Los 2 tipos de líder según Blair Singer</h3>
            <p>En su trabajo con miles de equipos, Blair Singer identifica dos tipos opuestos de líder:</p>
            <ol>
                <li><strong>El líder disminuidor:</strong> hace que sus subordinados sean menos de lo que podrían ser. Se centra en sus errores, controla, micromanagea, habla el 80% del tiempo en reuniones, no escucha.</li>
                <li><strong>El líder multiplicador:</strong> hace que sus subordinados rindan 2x-3x lo que rendirían con cualquier otro jefe. Pregunta más de lo que contesta, delega con confianza, reconoce, reta con altura.</li>
            </ol>
            <p>Ambos son capaces, ambos pueden ser exitosos a corto plazo. Pero a 3-5 años, el multiplicador tiene un equipo mucho más fuerte. El disminuidor, un equipo roto.</p>
        </div>

        <div class="content-card tip">
            <h3>Las 3 preguntas del líder multiplicador</h3>
            <p>Blair Singer recomienda que el líder se haga estas 3 preguntas diarias antes de entrar a una reunión con su equipo:</p>
            <ol class="concept-list">
                <li><strong>¿Cómo voy a hacer que cada persona aquí se sienta 10% más capaz saliendo que entrando?</strong></li>
                <li><strong>¿Qué regla del Código voy a reconocer hoy públicamente?</strong> (con nombre y apellido de quien la cumplió)</li>
                <li><strong>¿Qué pregunta poderosa voy a hacer que nadie ha hecho todavía?</strong> (en vez de dar respuestas)</li>
            </ol>
            <p>Estas 3 preguntas, sostenidas durante 90 días, cambian el tono de cualquier equipo.</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#127936;</span><div>
                <h3>Historia · Blair Singer y el vendedor "acabado"</h3>
                <p>Blair Singer cuenta una historia personal. A principios de los 90, siendo ya consultor, le tocó trabajar con un equipo de ventas en Phoenix. Había un vendedor, Carl, que los demás consideraban "acabado". Tenía 5 meses sin cerrar una venta significativa y estaba por ser despedido.</p>
                <p>Blair le dedicó 30 minutos 1-a-1. La pregunta que le hizo fue: <em>"¿Cuándo fue la última vez que te sentiste realmente bueno vendiendo?"</em></p>
                <p>Carl pensó 40 segundos y contestó: "Hace 3 años, cuando vendía seguros para un cliente que me traía prospectos calientes".</p>
                <p>Blair le preguntó: "¿Qué hacías tú distinto entonces? ¿Qué entorno te ponía en tu mejor?". Carl lo describió: prospectos calificados, poco tiempo en administración, reuniones cortas.</p>
                <p>Blair le propuso al equipo: "Carl va a hacer sólo un tipo de venta, el que produce cuando está en su mejor. Los demás asumen las otras". En 90 días, Carl había cerrado más ventas que el resto del equipo combinado.</p>
                <p>Blair no lo "motivó". Le preguntó. Le permitió re-encontrarse con su propia capacidad.</p>
                <p>Esa es la esencia del líder multiplicador: ver la grandeza dormida y preguntarle cómo despertarla.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>El error clásico del líder A+ con equipo A- o B</h3>
            <p>Muchos líderes fueron el empleado estrella antes de ser jefe. Su trampa: <strong>esperan que su equipo piense como ellos, trabaje como ellos, produzca como ellos</strong>.</p>
            <p>No pueden. Y ahí el líder se frustra, micromanagea, corrige, habla de más. Y el equipo se apaga.</p>
            <p>El líder multiplicador entiende una cosa brutal: <strong>mi trabajo no es hacer de todos otros "yo", sino descubrir qué clase de jugador único es cada uno y ponerlo en la posición correcta</strong>.</p>
            <p>Metáfora: un entrenador de fútbol no convierte a todos en delanteros. Pone a cada uno en la posición donde más rinde.</p>
        </div>

        <div class="content-card" style="background:#0a2540;color:#faf8f3;">
            <h3 style="color:#c9a961;">Las 5 conversaciones que todo líder multiplicador tiene con su equipo</h3>
            <ol>
                <li><strong>Conversación de propósito:</strong> "¿Qué te motiva realmente de este trabajo? ¿Qué quieres aprender aquí?"</li>
                <li><strong>Conversación de fortalezas:</strong> "¿Cuándo te sientes en tu mejor? ¿Qué estás haciendo cuando el tiempo vuela?"</li>
                <li><strong>Conversación de crecimiento:</strong> "¿Qué habilidad te gustaría desarrollar este trimestre? ¿Cómo te apoyo?"</li>
                <li><strong>Conversación de retroalimentación:</strong> "Necesito que cambies X conducta específica. ¿Cómo te apoyo para lograrlo?"</li>
                <li><strong>Conversación de reconocimiento:</strong> "Quiero nombrarte algo que hiciste especialmente bien y por qué importa..."</li>
            </ol>
            <p style="margin-top:15px;">Estas conversaciones deben existir con cada miembro del equipo, al menos cada trimestre. Si no las tienes, no eres líder — eres capataz.</p>
        </div>

        <div class="quiz-container" id="quiz_l13a">
            <div class="quiz-label">Quiz 13A</div>
            <div class="quiz-question"><p>¿Cuál es la diferencia central entre un líder disminuidor y un líder multiplicador?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l13a', this, false)">El nivel de experiencia técnica</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l13a', this, false)">El carisma personal</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l13a', this, true)">El multiplicador hace que cada subordinado rinda 2x-3x lo que rendirían con cualquier otro jefe; el disminuidor los vuelve menos de lo que podrían ser</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l13a', this, false)">La antigüedad en la empresa</div>
            </div>
            <div class="quiz-feedback" id="quiz_l13a_fb"></div>
        </div>

        <div class="content-card">
            <h3>Caso práctico · Conversación de fortalezas</h3>
            <p>Usa este guión para tu próxima 1-a-1 con un miembro de tu equipo. 30 minutos, sin interrupciones.</p>
            <ol>
                <li><strong>Abre:</strong> "Quiero usar esta sesión para entender tus fortalezas, no para revisar pendientes"</li>
                <li><strong>Pregunta 1:</strong> "Piensa en el último mes — ¿cuándo te sentiste en tu mejor momento en el trabajo? Describe ese momento con detalle"</li>
                <li><strong>Escucha:</strong> no interrumpas, no evalúes, solo toma notas</li>
                <li><strong>Pregunta 2:</strong> "¿Qué tenía ese momento? ¿Qué estabas haciendo? ¿Con quién? ¿En qué entorno?"</li>
                <li><strong>Pregunta 3:</strong> "Si pudieras hacer más de lo que hiciste ahí, ¿en qué parte de tu rol actual cabría?"</li>
                <li><strong>Acuerden:</strong> 1 ajuste específico para que esa persona pueda tener más momentos así</li>
                <li><strong>Cierra:</strong> "Gracias por compartir. Vamos a revisar en 4 semanas cómo va el ajuste"</li>
            </ol>
            <p>Esta sesión, bien hecha, genera un compromiso 10x superior al de 10 sesiones de "evaluación de desempeño" tradicional.</p>
        </div>

        <div class="quiz-container" id="quiz_l13b">
            <div class="quiz-label">Quiz 13B</div>
            <div class="quiz-question"><p>¿Cuántas conversaciones estructuradas con cada miembro debe tener el líder multiplicador al año según Blair Singer?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l13b', this, false)">1 conversación anual formal</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l13b', this, false)">Sólo cuando hay problemas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l13b', this, true)">Las 5 conversaciones (propósito, fortalezas, crecimiento, retroalimentación, reconocimiento) al menos cada trimestre</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l13b', this, false)">Diariamente, en reuniones de 5 minutos</div>
            </div>
            <div class="quiz-feedback" id="quiz_l13b_fb"></div>
        </div>

        <div class="content-card" style="margin-top:30px;background:#faf8f3;border-left:3px solid #c9a961;">
            <h3 style="color:#0a2540;">Aplicación · Agenda tus 5 conversaciones del trimestre</h3>
            <p>Con la lista de tu equipo (de la lección 4), agenda en tu calendario:</p>
            <ul>
                <li>1 conversación de propósito con cada miembro en las próximas 2 semanas</li>
                <li>1 conversación de fortalezas con cada miembro en el mes siguiente</li>
                <li>Patrones similares para las otras 3 conversaciones, distribuidas en el trimestre</li>
            </ul>
            <p>Bloquea 45-60 min por sesión. Protege el tiempo como si fueran citas con tu mejor cliente. Son más importantes que eso.</p>
        </div>
        `
    },

    // ==========================================================
    // LECCION 14 — LIDERAR PARA HACER GRANDES (PARTE 2)
    // ==========================================================
    {
        id: 'liderar-grandes-02', module: 'Liderar para hacer grandes', tag: 'tag-modulo6', tagLabel: 'MODULO 6',
        title: 'Exigencia alta + apoyo alto: el cuadrante del líder-coach',
        subtitle: 'Por qué la mayoría de los líderes viven en cuadrantes que no sirven',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1400&q=80')">
            <div class="hero-caption">Exigir sin apoyar quema; apoyar sin exigir acomoda</div>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/PZuSrV0hsnA?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Mettaliderazgo: líderes de alto desempeño"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Mettaliderazgo — creando líderes de alto desempeño · TEDx Barrio del Encino</div>
        </div>

        <div class="content-card">
            <h3>El modelo de los 4 cuadrantes del liderazgo</h3>
            <p>Blair Singer utiliza un modelo muy claro:</p>
            <ul>
                <li><strong>Cuadrante A (exigencia alta + apoyo bajo):</strong> el líder "caporal". Pide y grita. Equipo quemado en 12 meses.</li>
                <li><strong>Cuadrante B (exigencia baja + apoyo bajo):</strong> el líder "ausente". Ni empuja ni ayuda. Equipo perdido, sin rumbo.</li>
                <li><strong>Cuadrante C (exigencia baja + apoyo alto):</strong> el líder "bonachón". Todos se sienten cómodos pero no producen. Equipo acomodado.</li>
                <li><strong>Cuadrante D (exigencia alta + apoyo alto):</strong> el líder-coach. Exige mucho Y apoya mucho. Equipo de alto rendimiento.</li>
            </ul>
            <p>El único cuadrante que produce equipos de verdad es el D. Los otros tres matan organizaciones.</p>
        </div>

        <div class="content-card tip">
            <h3>Por qué la mayoría vive en A o C</h3>
            <p>El cuadrante A (exigencia alta + apoyo bajo) es cómodo para líderes técnicos que fueron buenos empleados: saben exigir porque se exigieron a sí mismos, pero no saben apoyar porque nunca los apoyaron a ellos.</p>
            <p>El cuadrante C (exigencia baja + apoyo alto) es cómodo para líderes que odian el conflicto: prefieren mantener paz social a costa de resultados.</p>
            <p>Moverse al cuadrante D requiere desarrollar la habilidad que NO tienes — si eres del A, aprender apoyo; si eres del C, aprender a exigir con límites.</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128126;</span><div>
                <h3>Caso mexicano · Dos gerentes del mismo banco</h3>
                <p>Mismo banco, misma ciudad (Monterrey), dos sucursales a 3 km una de la otra. Mismo producto, mismo presupuesto, mismo tipo de cliente.</p>
                <p><strong>Sucursal A</strong> tenía al gerente "caporal" (cuadrante A): imponía metas, gritaba en reuniones, humillaba errores, pero también capacitaba duro y conocía el producto a profundidad. Resultados: 120% de meta el primer año, 60% al segundo, rotación de 140% al tercer año.</p>
                <p><strong>Sucursal B</strong> tenía al gerente-coach (cuadrante D): exigía metas altas Y dedicaba 2 horas semanales a 1-a-1 con cada asesor, reconocía públicamente, aplicaba el Código con rigor pero también con calor. Resultados: 95% de meta el primer año, 130% al segundo, 160% al tercer año. Rotación: 8%.</p>
                <p>Lección: el cuadrante A produce chispazo; el cuadrante D produce hoguera sostenida.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>Las 4 conductas del líder-coach (Cuadrante D)</h3>
            <ol class="concept-list">
                <li><strong>Exigencia explícita:</strong> "La meta de este trimestre es X. No es negociable. Vamos a lograrlo."</li>
                <li><strong>Apoyo explícito:</strong> "Para lograrlo, yo me comprometo a: darte 30 min semanales 1-a-1, escalarme cualquier bloqueo en menos de 24 hrs, capacitarte en Y y Z."</li>
                <li><strong>Retroalimentación oportuna y específica:</strong> NO esperar a la evaluación anual; dar feedback en las 72 horas del hecho</li>
                <li><strong>Consecuencia proporcional:</strong> celebrar victorias y aplicar consecuencia cuando el Código se rompe, sin hacer de nada un drama</li>
            </ol>
        </div>

        <div class="quiz-container" id="quiz_l14a">
            <div class="quiz-label">Quiz 14A</div>
            <div class="quiz-question"><p>¿Cuál de los 4 cuadrantes de liderazgo genera equipos de verdadero alto rendimiento?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l14a', this, false)">Cuadrante A — alta exigencia, bajo apoyo (el caporal)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l14a', this, false)">Cuadrante B — baja exigencia, bajo apoyo (el ausente)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l14a', this, false)">Cuadrante C — baja exigencia, alto apoyo (el bonachón)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l14a', this, true)">Cuadrante D — alta exigencia, alto apoyo (el líder-coach)</div>
            </div>
            <div class="quiz-feedback" id="quiz_l14a_fb"></div>
        </div>

        <div class="content-card" style="background:#0a2540;color:#faf8f3;">
            <h3 style="color:#c9a961;">Test rápido · ¿En qué cuadrante estás?</h3>
            <p>Responde SÍ / NO:</p>
            <ol>
                <li>¿Establezco metas específicas con fecha y medida para cada miembro?</li>
                <li>¿Tengo 1-a-1 semanales o quincenales con cada miembro directo?</li>
                <li>¿Doy retroalimentación correctiva en menos de 72 horas del hecho?</li>
                <li>¿Celebro públicamente al menos 1 logro por persona al mes?</li>
                <li>¿Conozco el "por qué" personal de cada miembro del equipo?</li>
                <li>¿He dejado ir a alguien del equipo en los últimos 24 meses por incumplir el Código, a pesar de su talento técnico?</li>
                <li>¿Mi equipo se acerca a reportarme errores sin miedo?</li>
                <li>¿Puedo listar las 3 fortalezas y 1 área de crecimiento específico de cada uno?</li>
            </ol>
            <p style="margin-top:15px;">
                <strong>7-8 SÍ:</strong> Cuadrante D, líder-coach auténtico<br>
                <strong>5-6 SÍ:</strong> Tendiendo al D, pero con zonas débiles<br>
                <strong>3-4 SÍ:</strong> Probablemente en A o C — tienes trabajo<br>
                <strong>0-2 SÍ:</strong> Cuadrante B, líder ausente
            </p>
        </div>

        <div class="quiz-container" id="quiz_l14b">
            <div class="quiz-label">Quiz 14B</div>
            <div class="quiz-question"><p>¿Cuál es el principal riesgo del líder en el cuadrante A (alta exigencia, bajo apoyo)?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l14b', this, false)">Que el equipo no cumpla metas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l14b', this, true)">Genera resultados en corto plazo pero quema al equipo, con rotación elevada a 2-3 años</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l14b', this, false)">Que el equipo se vuelva perezoso</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l14b', this, false)">Que el líder no sea respetado</div>
            </div>
            <div class="quiz-feedback" id="quiz_l14b_fb"></div>
        </div>

        <div class="content-card" style="margin-top:30px;background:#faf8f3;border-left:3px solid #c9a961;">
            <h3 style="color:#0a2540;">Aplicación · Plan de movimiento de cuadrante</h3>
            <p>Basado en tu test anterior, elabora un plan:</p>
            <ul>
                <li>Si estás en A: elige 2 conductas de apoyo que vas a agregar en los próximos 30 días (1-a-1 semanales, reconocimiento público, coaching de fortalezas)</li>
                <li>Si estás en C: elige 2 conductas de exigencia que vas a agregar (metas con fecha, consecuencias por incumplimiento, reuniones de rendición de cuentas)</li>
                <li>Si estás en B: elige 1 de cada lado</li>
                <li>Si ya estás en D: elige 1 conducta para afinar</li>
            </ul>
            <p>Escríbelo. Compártelo con un par de confianza. Revísalo a 30 días.</p>
        </div>
        `
    },

    // ==========================================================
    // LECCION 15 — RETROALIMENTACION QUE SUBE EL NIVEL
    // ==========================================================
    {
        id: 'retroalimentacion', module: 'Liderar para hacer grandes', tag: 'tag-modulo6', tagLabel: 'MODULO 6',
        title: 'Retroalimentación que sube el nivel sin herir',
        subtitle: 'El arte de corregir sin romper',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1573164713712-03790a178651?w=1400&q=80')">
            <div class="hero-caption">La retroalimentación bien dada es el regalo más valioso del líder</div>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/AMk6yiFaoxM?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Liderazgo y gestión de equipos"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Liderazgo y gestión de equipos — conferencia completa</div>
        </div>

        <div class="content-card">
            <h3>El dilema de la retroalimentación</h3>
            <p>La mayoría de los líderes fallan en uno de dos extremos:</p>
            <ul>
                <li><strong>Evasión:</strong> no dan feedback correctivo por miedo al conflicto. Resultado: problemas crónicos, equipo que no crece.</li>
                <li><strong>Dureza:</strong> dan feedback como bofetada — sin contexto, sin preparar, sin ofrecer vía de mejora. Resultado: gente que se apaga, que se va, que teme.</li>
            </ul>
            <p>La retroalimentación efectiva es un arte que combina firmeza y calor.</p>
        </div>

        <div class="content-card tip">
            <h3>El modelo SBI (Situation - Behavior - Impact)</h3>
            <p>Blair Singer recomienda el modelo SBI, originalmente del Center for Creative Leadership. Se compone de 3 partes:</p>
            <ol class="concept-list">
                <li><strong>Situation (Situación):</strong> describe el momento concreto (no la persona, no el patrón). "Ayer a las 3 PM, en la reunión con el cliente López..."</li>
                <li><strong>Behavior (Conducta):</strong> describe la conducta específica y observable (no inferencias sobre intención). "...cuando el cliente preguntó por la factura, respondiste 'eso lo ve administración' y te volteaste hacia tu celular..."</li>
                <li><strong>Impact (Impacto):</strong> describe el efecto que tuvo esa conducta, idealmente en primera persona. "...y sentí que le dimos al cliente la impresión de que no nos importa. Perdimos un punto de confianza."</li>
            </ol>
            <p>Luego: pregunta abierta — "¿qué piensas tú?"</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128172;</span><div>
                <h3>Caso mexicano · El gerente que no sabía dar feedback</h3>
                <p>Consultoría con un gerente de una cadena de farmacias en Guadalajara, 12 empleados. Tenía un problema con una cajera que hablaba mal de pacientes cuando salían. Él llevaba 7 meses sin decirle nada directo; sólo se quejaba con los otros gerentes.</p>
                <p>Le enseñé el modelo SBI. Lo ensayó conmigo. Al día siguiente la llamó a una conversación privada:</p>
                <p style="background:#faf8f3;padding:12px;border-left:3px solid #c9a961;font-style:italic;">"Marta, quiero compartirte una observación. Ayer a las 4 de la tarde, después de que salió la señora del jarabe (situación), te escuché decirle al otro cajero 'qué pesada viene esa mujer' (conducta). Eso rompe la regla 3 del Código. A mí personalmente me puso en una situación incómoda, porque es una paciente que conozco y aprecio. ¿Qué piensas tú de lo que acabo de compartir?"</p>
                <p>Marta primero se sorprendió, después lloró un poco, después agradeció. Dijo: "Gracias por no contárselo a nadie. Tiene razón, prometo trabajar en esto".</p>
                <p>A las 4 semanas, Marta había cambiado. Al mes 3, era una de las cajeras más cálidas con los pacientes. 7 meses después, la ascendieron a encargada de turno.</p>
                <p>Ese momento de 3 minutos de retroalimentación, bien hecha, transformó una carrera. Nada de evasión, nada de dureza.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>Las 5 reglas del feedback efectivo</h3>
            <ol class="concept-list">
                <li><strong>Oportuno:</strong> dentro de las 72 horas del hecho. Más tiempo = menos poder.</li>
                <li><strong>Específico:</strong> un hecho, una conducta, un momento. No generalidades.</li>
                <li><strong>Privado:</strong> 1-a-1, sin testigos, sin ser interrumpido</li>
                <li><strong>Bidireccional:</strong> siempre termina con pregunta abierta al otro</li>
                <li><strong>Con vía de mejora:</strong> nunca dejes a la persona sin saber qué se espera de ella distinto</li>
            </ol>
        </div>

        <div class="content-card tip">
            <h3>Feedback positivo: no subestimes su poder</h3>
            <p>Muchos líderes creen que sólo se da feedback para corregir. Error. Según Blair Singer, el líder-coach da <strong>3 feedbacks positivos por cada feedback correctivo</strong> (ratio 3:1).</p>
            <p>El feedback positivo también usa SBI:</p>
            <ul>
                <li><strong>S:</strong> "Ayer en la llamada con el cliente grande..."</li>
                <li><strong>B:</strong> "...cuando el cliente preguntó por el plazo y tú te tomaste 10 segundos para pensar antes de comprometer una fecha real..."</li>
                <li><strong>I:</strong> "...eso me generó mucha confianza porque se vio profesional. Además, la fecha que diste la cumplimos."</li>
            </ul>
            <p>El feedback positivo específico (no "eres un crack" genérico) fortalece la conducta. El positivo genérico no hace nada.</p>
        </div>

        <div class="quiz-container" id="quiz_l15a">
            <div class="quiz-label">Quiz 15A</div>
            <div class="quiz-question"><p>¿Cuáles son los 3 componentes del modelo SBI para dar retroalimentación?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l15a', this, false)">Sentimiento, Bueno, Importante</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l15a', this, true)">Situation (situación) + Behavior (conducta) + Impact (impacto)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l15a', this, false)">Start, Begin, Improve</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l15a', this, false)">Sincero, Breve, Insistente</div>
            </div>
            <div class="quiz-feedback" id="quiz_l15a_fb"></div>
        </div>

        <div class="content-card">
            <h3>Técnicas específicas por tipo de feedback</h3>
            <p><strong>Para corregir conducta:</strong> SBI + "¿cómo lo ves tú?" + acuerdo de cambio</p>
            <p><strong>Para reconocer logro:</strong> SBI positivo + agradecimiento explícito + multiplicación ("cuando puedas, enséñaselo a otros")</p>
            <p><strong>Para señalar un patrón repetido:</strong> Menciona 2-3 ejemplos concretos de SBI + pide perspectiva del otro + acuerden seguimiento</p>
            <p><strong>Para dar feedback difícil (posible salida del equipo):</strong> SBI + consecuencia clara + plan de mejora con plazo + revisión formal en fecha X</p>
        </div>

        <div class="content-card" style="background:#0a2540;color:#faf8f3;">
            <h3 style="color:#c9a961;">Error mortal: el "sandwich feedback"</h3>
            <p>Durante años se enseñó el "sandwich": positivo + corrección + positivo. Blair Singer y casi toda la literatura moderna lo desaconseja:</p>
            <ul>
                <li>Suena hipócrita: la persona siente que el positivo es relleno</li>
                <li>Diluye la corrección: el mensaje se pierde</li>
                <li>Destruye la credibilidad del positivo futuro</li>
            </ul>
            <p>Lo correcto: feedback positivo separado del correctivo. En momentos distintos, no como estrategia para "ablandar".</p>
        </div>

        <div class="quiz-container" id="quiz_l15b">
            <div class="quiz-label">Quiz 15B</div>
            <div class="quiz-question"><p>Según Blair Singer, ¿cuál es el ratio ideal de feedback positivo vs. correctivo del líder-coach?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l15b', this, false)">1:1 (mismo número de cada uno)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l15b', this, false)">1:3 (más correctivo que positivo)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l15b', this, true)">3:1 (tres feedbacks positivos por cada correctivo)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l15b', this, false)">10:0 (sólo positivo, nada correctivo)</div>
            </div>
            <div class="quiz-feedback" id="quiz_l15b_fb"></div>
        </div>

        <div class="content-card" style="margin-top:30px;background:#faf8f3;border-left:3px solid #c9a961;">
            <h3 style="color:#0a2540;">Aplicación · Práctica de SBI</h3>
            <p>Antes de la próxima semana:</p>
            <ol>
                <li>Identifica <strong>3 conductas</strong> específicas que quieres reconocer en miembros de tu equipo (positivo)</li>
                <li>Identifica <strong>1 conducta</strong> específica que necesitas corregir</li>
                <li>Redacta los 4 SBIs completos en tu libreta (situación, conducta, impacto)</li>
                <li>Dalos en 1-a-1 durante la próxima semana</li>
                <li>Al final de la semana, registra cómo se sintió cada conversación</li>
            </ol>
            <p>Esta práctica, repetida 4 semanas, cambia radicalmente tu relación con tu equipo.</p>
        </div>
        `
    },

    // ==========================================================
    // LECCION 16 — SINERGIA DE EQUIPO
    // ==========================================================
    {
        id: 'sinergia-equipo', module: 'El impacto colectivo', tag: 'tag-modulo7', tagLabel: 'MODULO 7',
        title: 'De grupo a equipo: la aritmética de la sinergia',
        subtitle: 'Por qué 1+1+1 puede ser 5 o puede ser 0.5',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1400&q=80')">
            <div class="hero-caption">Un grupo suma talento; un equipo lo multiplica</div>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/YfYZdnX-E5s?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Equipos de Alto Rendimiento"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Podcast de Liderazgo y Gerencia — Equipos de Alto Rendimiento</div>
        </div>

        <div class="content-card">
            <h3>La diferencia brutal entre grupo y equipo</h3>
            <p>Blair Singer pone ejemplos claros para distinguir:</p>
            <ul>
                <li><strong>Grupo:</strong> personas con tarea común pero intereses divergentes. Cada uno optimiza lo suyo.</li>
                <li><strong>Equipo:</strong> personas con tarea común Y compromiso con los resultados del otro. Optimizan el conjunto.</li>
            </ul>
            <p>La aritmética del grupo: 1+1+1+1 = 4 (a lo mucho). A veces 1+1+1+1 = 3 porque la fricción destruye valor.</p>
            <p>La aritmética del equipo: 1+1+1+1 = 10, 15, 25. La sinergia multiplica porque cada uno libera capacidades que no tendría solo.</p>
        </div>

        <div class="content-card tip">
            <h3>Concepto · "El equipo rinde por el que está a su lado, no por el jefe"</h3>
            <p>En los equipos con Código sólido, la motivación principal de cada miembro ya no es el jefe ni el bono. Es <strong>no defraudar al compañero que está a su lado</strong>.</p>
            <p>Los Navy SEALs lo expresan así: "No quieres ser el que deja atrás al compañero que confió en ti".</p>
            <p>Los All Blacks: "Better people make better All Blacks" — sabes que tu esfuerzo individual hace mejor a todo el equipo.</p>
            <p>El Código de Honor construye precisamente esta calidad de compromiso lateral (entre pares), no vertical (hacia el jefe).</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#129512;</span><div>
                <h3>Caso mexicano · La cocina del restaurante de Puebla</h3>
                <p>Restaurante poblano, cocina con 8 personas. Antes del Código: cada cocinero preparaba sus platos sin preocuparse del otro. Si un mesero pedía 3 platos del mismo chef y ese chef estaba saturado, los otros no ayudaban. Tiempo promedio de entrega: 28 minutos. Quejas recurrentes.</p>
                <p>Con el Código instalado, se agregó una regla: "Si un compañero está saturado, yo dejo lo mío y apoyo. Nunca salgo del turno dejando el trabajo del siguiente".</p>
                <p>En 4 semanas, el tiempo de entrega bajó a 14 minutos (la mitad). Los cocineros decían: <em>"Antes pensaba 'mi plato, mi plato'. Ahora pienso 'el servicio, el servicio'. Es más rico trabajar así"</em>.</p>
                <p>Los dueños pensaron que había sido por mejor organización o capacitación. Les aclaré: el secreto fue la regla que alineó los intereses. La sinergia apareció sola.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>Los 4 enemigos de la sinergia (y cómo combatirlos con el Código)</h3>
            <ol class="concept-list">
                <li><strong>Silos:</strong> "mi área es mi área, la tuya la tuya" → Regla del Código: "El resultado es del equipo, no del área"</li>
                <li><strong>Ego-comparación:</strong> cada uno quiere destacar a costa del otro → Regla: "Reconocemos públicamente a quien nos haya ayudado esta semana"</li>
                <li><strong>Información retenida:</strong> guardar saber como poder → Regla: "Compartimos lo que aprendimos en los viernes de revisión"</li>
                <li><strong>Competencia interna mal gestionada:</strong> rankings que dividen → Regla: "Competimos contra la meta, no entre nosotros"</li>
            </ol>
        </div>

        <div class="quiz-container" id="quiz_l16a">
            <div class="quiz-label">Quiz 16A</div>
            <div class="quiz-question"><p>¿Cuál es la diferencia central entre un "grupo" y un "equipo" según Blair Singer?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l16a', this, false)">El tamaño — el grupo es más chico, el equipo más grande</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l16a', this, false)">La formalidad — el grupo es informal, el equipo es formal</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l16a', this, true)">El grupo tiene tarea común pero intereses divergentes; el equipo tiene compromiso con los resultados del otro (sinergia)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l16a', this, false)">Los grupos duran poco, los equipos mucho</div>
            </div>
            <div class="quiz-feedback" id="quiz_l16a_fb"></div>
        </div>

        <div class="content-card">
            <h3>3 indicadores de que tu grupo está evolucionando a equipo</h3>
            <ol class="concept-list">
                <li><strong>El lenguaje cambia:</strong> de "mi proyecto" / "mi cliente" a "nuestro proyecto" / "nuestro cliente"</li>
                <li><strong>La ayuda lateral aparece sin pedirla:</strong> ves a miembros apoyándose sin que nadie lo ordene</li>
                <li><strong>El equipo celebra logros de otros miembros tanto como los propios:</strong> aplausos espontáneos, no forzados</li>
            </ol>
        </div>

        <div class="content-card" style="background:#0a2540;color:#faf8f3;">
            <h3 style="color:#c9a961;">El "test del WhatsApp" para medir sinergia</h3>
            <p>Un test simple que Blair Singer recomienda a sus clientes:</p>
            <p>Revisa el chat grupal del equipo (WhatsApp, Teams, Slack) de los últimos 7 días. Cuenta:</p>
            <ol>
                <li>Mensajes ofreciendo ayuda voluntariamente</li>
                <li>Mensajes celebrando logros de otros</li>
                <li>Mensajes preguntando cómo alguien está o cómo le fue</li>
            </ol>
            <p>Luego cuenta:</p>
            <ol>
                <li>Mensajes de queja sobre otros (aunque indirectos)</li>
                <li>Mensajes defensivos o justificativos</li>
                <li>Silencio de 2+ días</li>
            </ol>
            <p style="margin-top:15px;">Ratio sano: 3:1 a favor del primer grupo. Si tu ratio es 1:1 o peor, tienes un grupo, no un equipo.</p>
        </div>

        <div class="quiz-container" id="quiz_l16b">
            <div class="quiz-label">Quiz 16B</div>
            <div class="quiz-question"><p>¿Cuál es uno de los 4 enemigos principales de la sinergia?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l16b', this, false)">Demasiados recursos económicos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l16b', this, true)">Silos organizacionales ("mi área es mi área, la tuya la tuya")</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l16b', this, false)">Horarios flexibles</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l16b', this, false)">Reuniones frecuentes</div>
            </div>
            <div class="quiz-feedback" id="quiz_l16b_fb"></div>
        </div>

        <div class="content-card" style="margin-top:30px;background:#faf8f3;border-left:3px solid #c9a961;">
            <h3 style="color:#0a2540;">Aplicación · Aplica el test del WhatsApp esta semana</h3>
            <p>Revisa hoy mismo el chat grupal de tu equipo. Haz el conteo. Obtén tu ratio.</p>
            <p>Si el ratio es malo, identifica qué regla de sinergia agregar al Código en la próxima revisión trimestral.</p>
            <p>Posibles reglas de sinergia:</p>
            <ul>
                <li>"Cada lunes compartimos 1 cosa que aprendimos la semana anterior"</li>
                <li>"Cuando reconocemos a alguien en el chat, mencionamos qué regla cumplió"</li>
                <li>"Si vemos a un compañero en apuros, preguntamos '¿en qué puedo apoyar?' antes de continuar lo nuestro"</li>
            </ul>
        </div>
        `
    },

    // ==========================================================
    // LECCION 17 — MISION Y VISION ALINEADAS AL CODIGO
    // ==========================================================
    {
        id: 'mision-vision', module: 'El impacto colectivo', tag: 'tag-modulo7', tagLabel: 'MODULO 7',
        title: 'Alinear misión, visión y Código',
        subtitle: 'El Código no vive solo: se enmarca en un propósito mayor',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1400&q=80')">
            <div class="hero-caption">Misión es el para qué; Visión es el hacia dónde; Código es el cómo</div>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/6e9fMej5w3A?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Simon Sinek: Start with WHY"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Simon Sinek TED — Start with WHY con subtítulos en español</div>
        </div>

        <div class="content-card">
            <h3>Los 3 elementos que sostienen un equipo</h3>
            <ol class="concept-list">
                <li><strong>MISIÓN:</strong> el PARA QUÉ. La razón profunda por la que existe el equipo. Respondes a: "¿Qué problema del mundo resolvemos nosotros?"</li>
                <li><strong>VISIÓN:</strong> el HACIA DÓNDE. El futuro concreto al que aspiramos. Respondes a: "¿Cómo se ve este equipo en 5 años?"</li>
                <li><strong>CÓDIGO DE HONOR:</strong> el CÓMO. Las reglas de conducta que nos permiten cumplir la misión y llegar a la visión. Respondes a: "¿Cómo nos tratamos para lograrlo?"</li>
            </ol>
            <p>Un equipo con Código pero sin misión clara se siente mecánico. Un equipo con misión pero sin Código se disuelve bajo presión. Los tres son necesarios.</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128293;</span><div>
                <h3>Caso mexicano · Farmacia que recuperó el alma</h3>
                <p>Farmacia independiente en San Luis Potosí, 6 empleados. Llevaban 12 años operando, ganaban dinero, pero el equipo estaba apagado. El dueño describía su situación: "parecen que vinieran por obligación".</p>
                <p>Cuando les pregunté "¿para qué existe esta farmacia?", no supieron responder. "Para ganar dinero" dijo uno. "Para vender medicinas" dijo otro.</p>
                <p>Facilité una sesión de 3 horas para definir la misión. Después de mucho trabajo, salió: <em>"Somos la farmacia que cuida a los enfermos de esta colonia como si fueran de nuestra familia. Nadie sale con dudas, nadie sale sin saludo, nadie sale sin sentir que nos importa"</em>.</p>
                <p>A partir de ahí, las reglas del Código salieron naturales — ya no eran reglas abstractas, eran la forma de cumplir esa misión.</p>
                <p>A los 6 meses, las ventas habían subido 28%. Pero lo más interesante: el equipo decía que trabajar ahí se había vuelto "significativo". La fatiga desapareció. La rotación también.</p>
            </div></div>
        </div>

        <div class="content-card tip">
            <h3>Cómo formular una misión potente</h3>
            <p>Una misión efectiva cumple 3 criterios:</p>
            <ol>
                <li><strong>Concreta:</strong> puedes visualizar qué hacen en un día normal</li>
                <li><strong>Significativa:</strong> va más allá de "ganar dinero" — habla del impacto en otras personas</li>
                <li><strong>Generadora de emoción:</strong> al leerla, despierta algo dentro</li>
            </ol>
            <p><strong>Fórmula:</strong> "Somos [sujeto específico] que [verbo de acción] a [beneficiario concreto] para que [impacto medible o emocional]"</p>
            <p>Ejemplo: "Somos la taquería de Coyoacán que alimenta a trabajadores honestos con platos que les recuerden a su casa, para que terminen su día mejor de como lo empezaron"</p>
        </div>

        <div class="content-card">
            <h3>Cómo formular una visión potente</h3>
            <p>Una visión efectiva cumple 3 criterios:</p>
            <ol>
                <li><strong>Temporal:</strong> tiene horizonte claro (3, 5 o 10 años)</li>
                <li><strong>Específica:</strong> números, magnitudes, imagen visual</li>
                <li><strong>Inspiradora:</strong> despierta ganas de avanzar</li>
            </ol>
            <p><strong>Fórmula:</strong> "En [año] seremos [logro específico], reconocidos por [algo único], con [equipo/magnitud]"</p>
            <p>Ejemplo: "En 2031 seremos la red de farmacias independientes más confiable de la región Bajío, con 8 sucursales, atendiendo a 25,000 familias, con cero accidentes farmacológicos y con un equipo que decide quedarse con nosotros el resto de su carrera"</p>
        </div>

        <div class="quiz-container" id="quiz_l17a">
            <div class="quiz-label">Quiz 17A</div>
            <div class="quiz-question"><p>¿Cuál es la diferencia entre misión, visión y Código de Honor?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l17a', this, false)">Son lo mismo con diferente nombre</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l17a', this, true)">Misión = para qué existimos; Visión = hacia dónde vamos; Código = cómo nos tratamos para lograrlo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l17a', this, false)">Misión es para el jefe; visión para empleados; Código para clientes</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l17a', this, false)">Visión es corto plazo, misión largo plazo, Código es fiscal</div>
            </div>
            <div class="quiz-feedback" id="quiz_l17a_fb"></div>
        </div>

        <div class="content-card">
            <h3>Check de alineación: misión - visión - Código</h3>
            <p>Toma tu misión, tu visión y tu Código. Aplícales esta prueba:</p>
            <ol class="concept-list">
                <li><strong>Coherencia interna:</strong> ¿cada regla del Código sirve directamente para cumplir la misión?</li>
                <li><strong>Congruencia temporal:</strong> ¿la visión es un destino al que te llevan misión + Código?</li>
                <li><strong>Prueba del nuevo:</strong> si muestras los 3 documentos a alguien nuevo, ¿entiende en 5 minutos qué espera ese equipo de él?</li>
                <li><strong>Prueba del cliente:</strong> si la misión es real, ¿tu cliente siente la diferencia al entrar?</li>
            </ol>
            <p>Si alguna falla, trabaja en alinear.</p>
        </div>

        <div class="content-card" style="background:#0a2540;color:#faf8f3;">
            <h3 style="color:#c9a961;">Ejemplo completo · Una cafetería de especialidad</h3>
            <p><strong>Misión:</strong> "Somos la cafetería que transforma una taza en un momento — hecha con café mexicano, servida con alma, para que nuestros clientes vuelvan a casa distintos"</p>
            <p><strong>Visión 2030:</strong> "Ser la cafetería referente de colonia Roma, con 3 sucursales, 100% café de productores mexicanos, y con un equipo que lleva en promedio 4 años con nosotros"</p>
            <p><strong>Código (extracto):</strong></p>
            <ol>
                <li>"Saludamos a cada cliente mirando a los ojos, con su nombre si lo conocemos"</li>
                <li>"Cada taza que sale debe ser la que nosotros querríamos recibir"</li>
                <li>"Si un compañero está saturado, dejamos lo nuestro y apoyamos"</li>
                <li>"Pagamos a los productores antes de pagarnos a nosotros mismos"</li>
            </ol>
            <p style="margin-top:15px;">Observa cómo cada regla del Código sirve directamente a la misión. Esa es la alineación que buscas.</p>
        </div>

        <div class="quiz-container" id="quiz_l17b">
            <div class="quiz-label">Quiz 17B</div>
            <div class="quiz-question"><p>¿Cuál es el "check de alineación" más importante entre misión, visión y Código?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l17b', this, false)">Que los 3 documentos sean del mismo largo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l17b', this, false)">Que estén firmados por un abogado</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l17b', this, true)">Que cada regla del Código sirva directamente para cumplir la misión y acercar a la visión</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l17b', this, false)">Que usen las mismas palabras exactas</div>
            </div>
            <div class="quiz-feedback" id="quiz_l17b_fb"></div>
        </div>

        <div class="content-card" style="margin-top:30px;background:#faf8f3;border-left:3px solid #c9a961;">
            <h3 style="color:#0a2540;">Aplicación · Redacta tu misión y visión</h3>
            <p>Si aún no tienes misión y visión formales, redacta borradores ahora con las fórmulas anteriores. Lleva ambos a la sesión fundacional del Código.</p>
            <p>Si ya tienes, léelos a la luz del Código que estás construyendo. Si no están alineados, es momento de actualizarlos.</p>
            <p>Recomendación: la misión se revisa cada 3-5 años; la visión cada 3 años; el Código cada trimestre. Mantén los 3 vivos.</p>
        </div>
        `
    },

    // ==========================================================
    // LECCION 18 — RESPONSABILIDAD RADICAL
    // ==========================================================
    {
        id: 'responsabilidad', module: 'Responsabilidad, lealtad y confianza', tag: 'tag-modulo8', tagLabel: 'MODULO 8',
        title: 'Responsabilidad radical: adiós a las excusas',
        subtitle: 'La conducta que marca la diferencia entre campeones y víctimas',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1400&q=80')">
            <div class="hero-caption">Responsabilidad = habilidad de responder, sin culpar a nadie más</div>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/c3mrpMdo7t0?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Kiyosaki: Si tuviera que empezar de cero"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Robert Kiyosaki — Si tuviera que empezar de cero (en español)</div>
        </div>

        <div class="content-card">
            <h3>La diferencia entre el que se responsabiliza y el que culpa</h3>
            <p>Blair Singer divide a las personas en dos tipos según su respuesta cuando algo sale mal:</p>
            <ul>
                <li><strong>El "víctima":</strong> busca culpables fuera — "el cliente no entendió", "mi compañero no me avisó", "el sistema está lento", "no me capacitaron bien", "no hay apoyo de arriba"</li>
                <li><strong>El "responsable":</strong> busca su parte en el problema — "¿qué pude haber hecho yo distinto? ¿qué aprendo? ¿cómo lo corrijo?"</li>
            </ul>
            <p>Los equipos de campeonato están compuestos por responsables. Una sola víctima en el equipo contamina a los demás rápido.</p>
        </div>

        <div class="content-card tip">
            <h3>Concepto clave · Las 3 fases de la responsabilidad radical</h3>
            <ol class="concept-list">
                <li><strong>Reconocimiento:</strong> "Esto pasó. No voy a minimizarlo ni exagerarlo"</li>
                <li><strong>Propiedad:</strong> "Aquí está mi parte. Aunque hubo otros factores, estos son los míos"</li>
                <li><strong>Corrección:</strong> "Esto voy a hacer distinto la próxima vez. Concreto, observable, medible"</li>
            </ol>
            <p>Nota qué NO incluye: no incluye "esto voy a hacer para que el otro cambie". Eso es imposible. Sólo puedes cambiar tu conducta.</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128293;</span><div>
                <h3>Caso mexicano · El gerente que culpaba al corporativo</h3>
                <p>Gerente de un restaurante de cadena en Querétaro. Facturación 12% bajo la meta durante 5 meses seguidos. Su argumento: "el corporativo no me manda suficiente marketing", "los competidores abrieron cerca", "el horario que me impuso el dueño es malo", "mi personal no es el que yo escogí".</p>
                <p>En coaching le pregunté: <em>"Aceptemos que todas tus quejas son ciertas. Aun así, hay gerentes en situaciones similares que facturan 30% sobre meta. ¿Qué estás tú haciendo distinto a ellos, independientemente de las condiciones?"</em></p>
                <p>La pregunta lo incomodó profundamente. Después de 2 semanas de resistencia, empezó a responsabilizarse. Identificó 4 cosas que él podía cambiar sin depender del corporativo: reentrenar a 2 cocineros específicos, cambiar la rotación del turno, negociar mejor con un proveedor local, instalar una campana para el Código.</p>
                <p>A los 4 meses, facturación 8% sobre meta. Las condiciones externas eran las mismas. Lo que cambió fue su postura.</p>
                <p>Blair Singer resume: <em>"La víctima puede tener razón, pero no tiene poder. El responsable puede o no tener razón, pero siempre tiene poder"</em>.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>La regla del Código sobre responsabilidad</h3>
            <p>Muchos Códigos incluyen alguna versión de esta regla. Ejemplos reales:</p>
            <ul>
                <li>"Si algo sale mal, primero buscamos aprendizaje y solución; los culpables pueden esperar"</li>
                <li>"Cuando cometo un error, lo digo antes de que alguien lo descubra"</li>
                <li>"No hay 'ellos', sólo 'nosotros'. Los problemas del área de al lado son también míos"</li>
                <li>"Si el cliente está insatisfecho, el primer responsable soy yo — sin importar quién cometió el error"</li>
            </ul>
            <p>Esta regla tiene efectos profundos. Cuando se cumple, el equipo deja de perder energía en justificaciones y empieza a resolver.</p>
        </div>

        <div class="quiz-container" id="quiz_l18a">
            <div class="quiz-label">Quiz 18A</div>
            <div class="quiz-question"><p>¿Cuál es la frase que resume la postura del responsable según Blair Singer?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l18a', this, false)">"No es mi culpa, son las circunstancias"</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l18a', this, false)">"Si no me apoyan, no puedo"</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l18a', this, true)">"La víctima puede tener razón, pero no tiene poder; el responsable puede o no tener razón, pero siempre tiene poder"</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l18a', this, false)">"Yo sólo hago mi parte"</div>
            </div>
            <div class="quiz-feedback" id="quiz_l18a_fb"></div>
        </div>

        <div class="content-card">
            <h3>Las 3 preguntas que activan la responsabilidad</h3>
            <p>Cuando alguien en tu equipo venga con una queja o excusa, usa estas 3 preguntas (sin sarcasmo, en tono genuino):</p>
            <ol class="concept-list">
                <li><strong>"Entiendo. ¿Qué parte de esto está bajo tu control?"</strong></li>
                <li><strong>"Si nada cambia externamente, ¿qué puedes hacer tú distinto?"</strong></li>
                <li><strong>"Si esto se repite en 3 meses, ¿cuál será tu primera acción?"</strong></li>
            </ol>
            <p>Estas preguntas, hechas con calma, devuelven el poder a la persona. Le ayudan a ver que aun en circunstancias difíciles, hay palancas bajo su control.</p>
        </div>

        <div class="content-card" style="background:#0a2540;color:#faf8f3;">
            <h3 style="color:#c9a961;">La cultura de "no hay ellos, sólo nosotros"</h3>
            <p>Una de las reglas más transformadoras que puedes instalar en tu Código:</p>
            <p style="padding:15px;background:rgba(201,169,97,0.1);border-left:3px solid #c9a961;font-style:italic;">"En este equipo no existe 'ellos'. Los problemas del área de al lado, del proveedor, del cliente, del corporativo — si nos afectan, son también nuestros. Nadie señala hacia otro lado. Nosotros asumimos, buscamos solución, escalamos si hace falta, pero no culpamos."</p>
            <p style="margin-top:15px;">Equipos con esta regla se vuelven imparables. Equipos sin esta regla se pasan la vida buscando culpables.</p>
        </div>

        <div class="quiz-container" id="quiz_l18b">
            <div class="quiz-label">Quiz 18B</div>
            <div class="quiz-question"><p>¿Cuáles son las 3 fases de la responsabilidad radical según Blair Singer?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l18b', this, false)">Negar, debatir, aceptar</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l18b', this, false)">Reclamar, exigir, compensar</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l18b', this, true)">Reconocimiento + Propiedad + Corrección</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l18b', this, false)">Planear, esperar, culpar</div>
            </div>
            <div class="quiz-feedback" id="quiz_l18b_fb"></div>
        </div>

        <div class="content-card" style="margin-top:30px;background:#faf8f3;border-left:3px solid #c9a961;">
            <h3 style="color:#0a2540;">Aplicación · Auditoria de víctima vs. responsable</h3>
            <p>Durante 7 días, registra en tu libreta cada vez que escuches en tu equipo:</p>
            <ul>
                <li>Una queja que NO termine en propuesta de solución</li>
                <li>Una justificación externa ("es que...")</li>
                <li>Un "no me corresponde a mí"</li>
                <li>Un "ellos son los que..."</li>
            </ul>
            <p>Al mismo tiempo, registra cuando escuches:</p>
            <ul>
                <li>"Déjame ver qué puedo hacer yo"</li>
                <li>"Asumo mi parte"</li>
                <li>"Voy a cambiar X en mi conducta"</li>
            </ul>
            <p>Al final de la semana, tienes tu diagnóstico cultural. Cambia lo que necesita cambiar con la regla de responsabilidad.</p>
        </div>
        `
    },

    // ==========================================================
    // LECCION 19 — LEALTAD Y CONFIANZA
    // ==========================================================
    {
        id: 'lealtad-confianza', module: 'Responsabilidad, lealtad y confianza', tag: 'tag-modulo8', tagLabel: 'MODULO 8',
        title: 'Lealtad y confianza: los cimientos emocionales del equipo',
        subtitle: 'Sin confianza no hay equipo; sin lealtad no hay duración',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1494887205043-c5f291293cf6?w=1400&q=80')">
            <div class="hero-caption">La confianza se gana con consistencia de conductas, no con intenciones</div>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/pVeq-0dIqpk?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="La confianza como cimiento del equipo"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Confianza organizacional — cómo construirla y mantenerla</div>
        </div>

        <div class="content-card">
            <h3>La fórmula de la confianza</h3>
            <p>Blair Singer cita la fórmula clásica de David Maister:</p>
            <p style="text-align:center;padding:20px;background:#0a2540;color:#faf8f3;border-radius:2px;font-size:1.2em;">
                <strong>Confianza = (Credibilidad + Fiabilidad + Intimidad) / Auto-orientación</strong>
            </p>
            <ul>
                <li><strong>Credibilidad:</strong> confían en tus palabras (sabes de lo que hablas)</li>
                <li><strong>Fiabilidad:</strong> confían en tus acciones (haces lo que dices)</li>
                <li><strong>Intimidad:</strong> confían en compartir contigo lo vulnerable (no juzgas, no traicionas)</li>
                <li><strong>Auto-orientación:</strong> cuánto buscas tu propio beneficio antes que el común (mientras más alto este factor, menos confianza)</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>Cómo aumenta cada factor en un equipo</h3>
            <ul>
                <li><strong>Credibilidad:</strong> cumple tus compromisos técnicos, da datos precisos, admite cuando no sabes</li>
                <li><strong>Fiabilidad:</strong> lo que prometes lo cumples, especialmente en lo chico (reunión de 10 minutos, reporte que mandarías el miércoles)</li>
                <li><strong>Intimidad:</strong> comparte algo de ti, escucha sin juzgar, guarda lo confidencial, recuerda lo personal</li>
                <li><strong>Baja auto-orientación:</strong> habla más del otro que de ti, pregunta más de lo que respondes, da crédito al colectivo en logros y tómalo tú en fallos</li>
            </ul>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128195;</span><div>
                <h3>Caso mexicano · El contador que rompió la confianza</h3>
                <p>Empresa mediana en Puebla, 45 empleados. El dueño tenía un contador externo que llevaba 6 años con él. Un día, en una auditoría, descubrieron que el contador había estado facturando por servicios no prestados y se había apropiado de $340,000 en 2 años.</p>
                <p>El dueño no sólo perdió dinero. Perdió algo más grave: durante 18 meses después, desconfió de TODO su equipo interno. Revisaba cada compra, cada factura, cada movimiento. El equipo se sintió bajo sospecha constante y la productividad cayó 22%.</p>
                <p>El Código se tuvo que reconstruir. Incluyeron una regla específica: "Los números están abiertos — cualquier miembro del equipo operativo puede solicitar ver cualquier cuenta de la empresa en 24 hrs".</p>
                <p>Esa transparencia radical recuperó la confianza en 6 meses. Pero el precio había sido alto.</p>
                <p>Lección: la confianza se construye despacio y se destruye rápido. El Código la protege.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>La lealtad va en dos direcciones</h3>
            <p>La mayoría de los líderes exigen lealtad pero no la devuelven. Blair Singer es claro: <strong>la lealtad real del equipo es el reflejo directo de la lealtad que demuestra el líder</strong>.</p>
            <p>Conductas de lealtad del líder hacia su equipo:</p>
            <ol class="concept-list">
                <li>Defenderlos ante críticas externas (corporativo, clientes difíciles, otras áreas) aunque tengan parte de razón</li>
                <li>Corregirlos en privado, nunca en público ni delante del cliente</li>
                <li>Cumplir su palabra en bonos, promociones, vacaciones, descansos</li>
                <li>Compartir el éxito (el bono de equipo es del equipo, no del líder)</li>
                <li>Asumir el costo de los fracasos (el líder da la cara antes que señalar a alguien)</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>Conductas de lealtad del equipo hacia el líder (y entre sí)</h3>
            <ol class="concept-list">
                <li>No hablar mal del líder a sus espaldas (si hay queja real, se habla de frente)</li>
                <li>Dar aviso cuando detectan algo que podría afectar al líder antes de que explote</li>
                <li>Cubrir al compañero en turno que está en apuros sin esperar reciprocidad inmediata</li>
                <li>Mantener confidencialidades del equipo</li>
                <li>Dar la cara por decisiones del equipo ante terceros, aunque individualmente uno no haya estado 100% de acuerdo</li>
            </ol>
        </div>

        <div class="quiz-container" id="quiz_l19a">
            <div class="quiz-label">Quiz 19A</div>
            <div class="quiz-question"><p>Según la fórmula de Maister, ¿qué factor disminuye la confianza cuando aumenta?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l19a', this, false)">Credibilidad</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l19a', this, false)">Fiabilidad</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l19a', this, false)">Intimidad</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l19a', this, true)">Auto-orientación (buscar el beneficio propio antes que el común)</div>
            </div>
            <div class="quiz-feedback" id="quiz_l19a_fb"></div>
        </div>

        <div class="content-card" style="background:#0a2540;color:#faf8f3;">
            <h3 style="color:#c9a961;">Las 3 "cuentas bancarias emocionales"</h3>
            <p>Stephen Covey introdujo la metáfora de la "cuenta bancaria emocional", y Blair Singer la aplica al equipo. Cada relación entre 2 miembros del equipo es una cuenta:</p>
            <ul>
                <li><strong>Depósitos:</strong> cumplir la palabra, escuchar sin juzgar, apoyar en crisis, reconocer logros, pedir perdón sinceramente</li>
                <li><strong>Retiros:</strong> romper promesas, criticar en público, olvidar cosas importantes, actuar con doblez, llegar tarde sistemáticamente</li>
            </ul>
            <p>Una sola traición grande puede vaciar una cuenta que llevó años construir. Por eso el Código protege mediante reglas específicas esas cuentas.</p>
        </div>

        <div class="quiz-container" id="quiz_l19b">
            <div class="quiz-label">Quiz 19B</div>
            <div class="quiz-question"><p>¿Cuál de estas conductas NO es un "depósito" en la cuenta bancaria emocional del equipo?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l19b', this, false)">Cumplir la palabra en lo pequeño</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l19b', this, false)">Reconocer públicamente un logro</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l19b', this, true)">Corregir al compañero en público delante del cliente</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l19b', this, false)">Escuchar sin juzgar</div>
            </div>
            <div class="quiz-feedback" id="quiz_l19b_fb"></div>
        </div>

        <div class="content-card" style="margin-top:30px;background:#faf8f3;border-left:3px solid #c9a961;">
            <h3 style="color:#0a2540;">Aplicación · Revisión de cuentas emocionales</h3>
            <p>Toma los nombres de tu equipo. Para cada uno, califica de 1 a 10:</p>
            <ul>
                <li>Credibilidad técnica que percibe de ti</li>
                <li>Fiabilidad (cumples lo que le prometes)</li>
                <li>Intimidad (qué tanto siente que puede hablar contigo de cosas vulnerables)</li>
                <li>Qué tan bajo ve tu auto-orientación (sientes el equipo, no sólo a ti mismo)</li>
            </ul>
            <p>Los miembros con calificación promedio menor a 6 necesitan "depósitos" urgentes — conversaciones auténticas, cumplimiento de promesas chicas, reconocimientos específicos.</p>
        </div>
        `
    },

    // ==========================================================
    // LECCION 20 — SOSTENER EL CODIGO BAJO PRESION
    // ==========================================================
    {
        id: 'presion-crisis', module: 'Aguantar el calor', tag: 'tag-modulo9', tagLabel: 'MODULO 9',
        title: 'Sostener el Código bajo presión: el momento de la verdad',
        subtitle: 'Rutinas específicas para cuando la crisis llega',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=80')">
            <div class="hero-caption">Los equipos campeones se hacen en los momentos de mayor presión</div>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/vrovJIftuwc?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Cómo liderar equipos en tiempos de cambio"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Liderar equipos en tiempos de cambio — CENSA Costa Rica</div>
        </div>

        <div class="content-card">
            <h3>Los 5 momentos de máxima presión en un negocio</h3>
            <ol class="concept-list">
                <li><strong>Fin de mes / cierre de período:</strong> metas sin cumplir, facturación atrasada, nómina por pagar</li>
                <li><strong>Auditoría / inspección externa:</strong> inspector, cliente grande, corporativo de regreso</li>
                <li><strong>Crisis pública:</strong> queja viral, error que llega a prensa, cliente influyente molesto</li>
                <li><strong>Escasez de recursos:</strong> falta personal, producto agotado, proveedor que no entregó</li>
                <li><strong>Conflicto interno agudo:</strong> pelea entre 2 miembros clave, renuncia sorpresiva, decisión polémica del líder</li>
            </ol>
            <p>En estos 5 momentos, el Código se pone a prueba. Un Código débil se rompe. Un Código fuerte hace al equipo más fuerte.</p>
        </div>

        <div class="content-card tip">
            <h3>Las 4 rutinas de presión</h3>
            <p>Blair Singer recomienda tener 4 rutinas pre-acordadas para momentos de presión:</p>
            <ol>
                <li><strong>Huddle de 5 minutos:</strong> el equipo se reúne rápidamente en círculo. El líder nombra la situación. Cada uno dice cómo va a cumplir UNA regla del Código específica esa jornada. Cierre rápido.</li>
                <li><strong>Respiración de 60 segundos:</strong> antes de la reunión tensa o el momento crítico, el equipo hace 60 segundos de respiración consciente juntos (el ritual lo baja del modo supervivencia al modo pensante)</li>
                <li><strong>Frase-código:</strong> cuando alguien detecta que el equipo empieza a fracturarse bajo la tensión, dice una frase acordada (ej. "Estamos en código"). Activa la conciencia colectiva.</li>
                <li><strong>Revisión post-crisis:</strong> máximo 24 horas después de la crisis, el equipo se reúne 30 min. Preguntas: ¿qué cumplimos bien? ¿qué regla se nos olvidó? ¿qué ajuste hacemos para la próxima?</li>
            </ol>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#127974;</span><div>
                <h3>Caso mexicano · Hotel boutique en Tulum durante huracán</h3>
                <p>Hotel boutique en Tulum, 18 empleados, 24 habitaciones. En octubre de 2023 les cayó un huracán categoría 2. 72 horas sin electricidad, 11 huéspedes atrapados, acceso cortado.</p>
                <p>Tenían un Código implementado 8 meses antes. Incluía rutinas de presión. Al llegar la alerta, aplicaron las rutinas:</p>
                <ul>
                    <li>Huddle de 5 min: cada uno dijo qué regla personal iba a cumplir (ej. "Voy a mantener la calma y no levantar la voz", "Voy a apoyar al que se vea rebasado")</li>
                    <li>Frase-código acordada: "Estamos en código" — se usó 7 veces en las 72 horas para centrar al equipo</li>
                    <li>Revisión post-crisis al tercer día con todos los huéspedes ya evacuados</li>
                </ul>
                <p>Resultado: los 11 huéspedes salieron ilesos, escribieron reseñas 5 estrellas describiendo al equipo como "héroes". El hotel facturó 28% más en los 3 meses siguientes porque el boca a boca fue viral.</p>
                <p>Lo que hizo funcionar al equipo bajo la presión no fue capacitación técnica sobre huracanes. Fue el Código instalado 8 meses antes.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>El huddle de 5 minutos (paso a paso)</h3>
            <p>Este ritual de 5 minutos, bien hecho, cambia el tono de cualquier situación tensa:</p>
            <ol class="concept-list">
                <li><strong>Minuto 1 · Centrar:</strong> el líder pide al equipo que forme círculo (no filas, no mesas — círculo). Silencio de 10 segundos. Cada uno pone una mano en el hombro de quien está al lado.</li>
                <li><strong>Minuto 2 · Nombrar:</strong> el líder nombra la situación sin dramatizar. "Tenemos X horas para Y. Está difícil. Lo vamos a hacer."</li>
                <li><strong>Minuto 3-4 · Compromiso individual:</strong> cada uno dice en 10 segundos qué regla específica del Código va a cumplir hoy. Ej: "Voy a llegar cuando me llamen sin queja", "Voy a saludar a cada cliente mirando a los ojos aunque esté rebasado"</li>
                <li><strong>Minuto 5 · Cierre:</strong> una palabra acordada, un aplauso sincronizado, o tocar la campana 3 veces. El equipo rompe el círculo y va a la acción.</li>
            </ol>
            <p>Cinco minutos. Impacto enorme.</p>
        </div>

        <div class="quiz-container" id="quiz_l20a">
            <div class="quiz-label">Quiz 20A</div>
            <div class="quiz-question"><p>¿Cuál es el propósito principal del "huddle de 5 minutos" en momentos de presión?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l20a', this, false)">Asignar tareas técnicas específicas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l20a', this, true)">Centrar al equipo, activar compromisos individuales con el Código y bajar del modo supervivencia al modo pensante</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l20a', this, false)">Revisar presupuesto</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l20a', this, false)">Buscar culpables de la crisis</div>
            </div>
            <div class="quiz-feedback" id="quiz_l20a_fb"></div>
        </div>

        <div class="content-card" style="background:#0a2540;color:#faf8f3;">
            <h3 style="color:#c9a961;">Cuando la crisis involucra al propio equipo (conflicto interno)</h3>
            <p>Si el conflicto es INTERNO (pelea entre miembros, renuncia sorpresiva, acusación cruzada), el protocolo es distinto:</p>
            <ol>
                <li><strong>Pausa operacional:</strong> si es posible, pausa 30 minutos la operación. Algunas crisis no permiten pausa (atender cliente); en ese caso se difiere al final del turno.</li>
                <li><strong>Reunión con afectados directos:</strong> sólo los involucrados + líder + un testigo neutral del equipo</li>
                <li><strong>Protocolo de escucha:</strong> cada parte habla 3 minutos sin ser interrumpida. Los demás sólo escuchan.</li>
                <li><strong>Identificar regla del Código aplicable:</strong> ¿qué regla se rompió? (ambas partes revisan)</li>
                <li><strong>Acordar restitución:</strong> cada parte propone cómo restituir al equipo, no al otro</li>
                <li><strong>Compromiso de no-repetición:</strong> por escrito, firmado por ambos</li>
                <li><strong>Comunicación al resto del equipo:</strong> se informa que hubo conflicto, que se resolvió con el Código, que ambas partes firmaron compromiso. No se revelan detalles. Transmite que el Código funciona incluso en lo difícil.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>La crisis como oportunidad de fortalecer el Código</h3>
            <p>Los grandes equipos no son los que nunca tienen crisis. Son los que salen MÁS unidos después de cada crisis. Blair Singer apunta:</p>
            <p style="padding:15px;background:#faf8f3;border-left:3px solid #c9a961;font-style:italic;">"Un equipo que no ha sido probado no es un equipo — es un grupo con suerte. La presión revela lo que hay; el Código te permite salir fortalecido. Después de cada crisis superada con Código, el equipo es más fuerte que antes."</p>
            <p>Por eso la revisión post-crisis (las 24 horas siguientes) es fundamental. Es donde se consolida el aprendizaje y el vínculo.</p>
        </div>

        <div class="quiz-container" id="quiz_l20b">
            <div class="quiz-label">Quiz 20B</div>
            <div class="quiz-question"><p>Cuando hay conflicto interno agudo entre 2 miembros del equipo, ¿qué debe hacer el líder primero?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l20b', this, false)">Despedir inmediatamente al que parece más agresivo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l20b', this, false)">Ignorar el conflicto para que se resuelva solo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l20b', this, true)">Reunir a los involucrados con un testigo neutral, aplicar protocolo de escucha, identificar la regla del Código rota y acordar restitución</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l20b', this, false)">Anunciar a todo el equipo los detalles del conflicto para que juzguen</div>
            </div>
            <div class="quiz-feedback" id="quiz_l20b_fb"></div>
        </div>

        <div class="content-card" style="margin-top:30px;background:#faf8f3;border-left:3px solid #c9a961;">
            <h3 style="color:#0a2540;">Aplicación · Diseña tu protocolo de crisis</h3>
            <p>Con tu equipo, define antes de la próxima crisis:</p>
            <ul>
                <li>Cuál será tu "frase-código" (ej. "Estamos en código", "Centremos", "Vuelta al círculo")</li>
                <li>Cómo y dónde se hará el huddle de 5 min (lugar físico específico)</li>
                <li>Quién convoca el huddle (¿sólo el líder o cualquiera puede hacerlo?)</li>
                <li>Cómo se hace la revisión post-crisis (agenda, duración, formato)</li>
            </ul>
            <p>Documéntalo. Imprímelo. Téngalo visible junto al Código.</p>
        </div>
        `
    },

    // ==========================================================
    // LECCION 21 — PLAN DE ACCION DE 7 DIAS
    // ==========================================================
    {
        id: 'plan-accion', module: 'Síntesis y plan', tag: 'tag-modulo10', tagLabel: 'MODULO 10',
        title: 'Tu Código en 7 días: plan de acción paso a paso',
        subtitle: 'De la teoría a la realidad con un plan concreto',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1400&q=80')">
            <div class="hero-caption">La única diferencia entre sueño y realidad es un plan con fecha</div>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/5ubXCsPkS8M?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Liderar un equipo de alto rendimiento"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">5 ideas para liderar un equipo de alto rendimiento — Jesús Soler</div>
        </div>

        <div class="content-card">
            <h3>Plan de implementación · 7 días para activar tu Código</h3>
            <p>Este es el plan concreto que Blair Singer recomienda a sus clientes para pasar de "entendí la teoría" a "lo estamos viviendo":</p>
        </div>

        <div class="content-card tip">
            <h3>Día 1 (Lunes) · Preparación personal</h3>
            <ol>
                <li>Escribe tu Código personal (lección 8) — 5 a 8 reglas</li>
                <li>Fírmalo, fechalo, pégalo donde lo veas cada mañana</li>
                <li>Mapa tu equipo real completo (lección 4) — las 3 capas</li>
                <li>Categoriza a cada uno (A+, A-, B, C)</li>
                <li>Diagnostica tu Triángulo B-I (lección 5)</li>
            </ol>
            <p><strong>Tiempo estimado:</strong> 2-3 horas en un bloque sin interrupciones</p>
        </div>

        <div class="content-card tip">
            <h3>Día 2 (Martes) · Convocatoria</h3>
            <ol>
                <li>Envía correo/WhatsApp formal a tu equipo convocando a la "sesión fundacional del Código"</li>
                <li>Agenda 3 horas en un espacio fuera de la oficina si es posible</li>
                <li>Compra: campana o equivalente, plumones, post-its, libreta A4 para firmar</li>
                <li>Redacta tu borrador de 5-12 reglas (lecciones 6-7) — sólo como mapa, no como destino</li>
                <li>Prepara tu "declaración de compromiso" para los primeros 5 min (lección 9)</li>
            </ol>
            <p><strong>Tiempo estimado:</strong> 2 horas</p>
        </div>

        <div class="content-card tip">
            <h3>Día 3-4 (Miércoles-Jueves) · Sesión fundacional</h3>
            <ol>
                <li>Hora cero: recibe al equipo, entrega libretas, cierra celulares</li>
                <li>Minuto 1-10: lee tu declaración de compromiso del líder</li>
                <li>Minuto 11-30: explica por qué el Código (casos históricos)</li>
                <li>Minuto 31-90: lluvia de ideas con post-its (paso 2)</li>
                <li>Minuto 91-120: destilación y votación (paso 3)</li>
                <li>Minuto 121-150: redacción colaborativa (paso 4)</li>
                <li>Minuto 151-180: firma física, definición de campana, matriz de consecuencias (paso 5)</li>
            </ol>
            <p><strong>Tiempo estimado:</strong> 3 horas</p>
        </div>

        <div class="content-card tip">
            <h3>Día 5 (Viernes) · Instalación física</h3>
            <ol>
                <li>Imprime el Código firmado en formato grande (tipo A3)</li>
                <li>Pégalo en el lugar más visible del equipo (sala de juntas, cocina, pasillo)</li>
                <li>Instala la campana en su lugar acordado</li>
                <li>Pega la matriz de consecuencias junto al Código</li>
                <li>Pega el calendario de revisiones (semanales, trimestrales, anual) junto</li>
                <li>Tomar foto grupal del equipo junto al Código firmado — subirla a redes sociales</li>
            </ol>
            <p><strong>Tiempo estimado:</strong> 2 horas</p>
        </div>

        <div class="content-card tip">
            <h3>Día 6-7 (Sábado-Domingo) · Primer ciclo</h3>
            <ol>
                <li>Si tu equipo opera sábados/domingos, ya se aplica el Código desde el Día 5</li>
                <li>Si no opera, usa el fin de semana para tu propia preparación mental</li>
                <li>El lunes siguiente: aplica la revisión semanal de 10 minutos (primera vez)</li>
                <li>Si surge una situación que requiere campana, úsala correctamente</li>
                <li>Haz una conversación 1-a-1 con cada uno de los A- (los que necesitan más apoyo)</li>
            </ol>
            <p><strong>Tiempo estimado en el lunes siguiente:</strong> 1-2 horas total</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128198;</span><div>
                <h3>Caso · Implementación en 7 días de una agencia de viajes</h3>
                <p>Agencia de viajes en Cancún, 11 empleados. Implementaron este plan de 7 días exactamente.</p>
                <p><strong>Semana 1 (implementación):</strong> intensa, algunos se resistían, el dueño tuvo que ser firme.</p>
                <p><strong>Semana 2-4:</strong> la campana sonó 14 veces. El Código se sentía "nuevo" y "extraño".</p>
                <p><strong>Mes 2:</strong> el lenguaje del equipo empezó a cambiar. Menos quejas, más compromisos.</p>
                <p><strong>Mes 3-6:</strong> la facturación subió 34% trimestre tras trimestre. NPS pasó de 48 a 82. Rotación bajó a 0% en 6 meses.</p>
                <p><strong>Año 1:</strong> contrataron 4 personas más para atender demanda. Siguen con el mismo Código.</p>
                <p>Todo empezó con un plan de 7 días ejecutado con disciplina.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>Los 4 obstáculos típicos del Día 1 al 30</h3>
            <ol class="concept-list">
                <li><strong>Resistencia pasiva:</strong> "sí jefe" pero no cumplen. Solución: toque de campana por micro-violaciones, pero sin drama.</li>
                <li><strong>El cínico vocal:</strong> "esto es puro rollo corporativo". Solución: invita a que participe en la revisión trimestral y proponga cambios.</li>
                <li><strong>El líder que cede ante la primera presión:</strong> "ahorita estamos ocupados, dejemos el Código para después". Solución: recordarse que el Código existe precisamente para cuando está ocupado.</li>
                <li><strong>La "luna de miel":</strong> las primeras 2 semanas todos emocionados, a la 3 decae. Solución: ritualizar las revisiones de viernes sin excepción desde la primera semana.</li>
            </ol>
        </div>

        <div class="quiz-container" id="quiz_l21a">
            <div class="quiz-label">Quiz 21A</div>
            <div class="quiz-question"><p>¿Cuál es el rol del Día 1 en el plan de implementación de 7 días?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l21a', this, false)">Anunciar a todo el equipo el cambio</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l21a', this, true)">Preparación personal del líder — Código personal, mapeo del equipo, categorización, diagnóstico del Triángulo B-I</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l21a', this, false)">Imprimir la campana</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l21a', this, false)">Hacer capacitación externa</div>
            </div>
            <div class="quiz-feedback" id="quiz_l21a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_l21b">
            <div class="quiz-label">Quiz 21B</div>
            <div class="quiz-question"><p>¿Cuál es la clave para superar la "luna de miel" (cuando decae la energía a las 2-3 semanas)?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l21b', this, false)">Reemplazar el Código por uno más simple</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l21b', this, false)">Organizar una fiesta para el equipo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l21b', this, true)">Ritualizar las revisiones semanales de 10 minutos sin excepción desde la primera semana</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l21b', this, false)">Esperar a que pase solo</div>
            </div>
            <div class="quiz-feedback" id="quiz_l21b_fb"></div>
        </div>

        <div class="content-card" style="margin-top:30px;background:#faf8f3;border-left:3px solid #c9a961;">
            <h3 style="color:#0a2540;">Aplicación · Agenda los 7 días ahora</h3>
            <p>Abre tu calendario. Bloquea los 7 días de implementación en fechas concretas (las próximas 2 semanas recomendado). Asigna horas específicas a cada actividad.</p>
            <p>Compartir el plan con al menos 1 persona de tu equipo de confianza para que te ayude a mantener el compromiso.</p>
            <p>Después del Día 7, bloquea las 52 revisiones semanales y 4 trimestrales del primer año como compromisos inamovibles.</p>
            <p><strong>Tienes en tus manos un sistema probado. Sólo te falta ejecutarlo.</strong></p>
        </div>
        `
    },

    // ==========================================================
    // LECCION 22 — CASOS MEXICANOS APLICADOS
    // ==========================================================
    {
        id: 'casos-reales', module: 'Síntesis y plan', tag: 'tag-modulo10', tagLabel: 'MODULO 10',
        title: 'Casos mexicanos reales: antes y después del Código',
        subtitle: 'Lo que pasa cuando un equipo mexicano implementa el método Singer',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=1400&q=80')">
            <div class="hero-caption">El método funciona en México cuando se adapta con inteligencia cultural</div>
        </div>

        <div class="content-card video-embed-card" style="background:#0a2540;padding:18px;border-radius:2px;border:1px solid rgba(201,169,97,0.3);">
            <div style="color:#c9a961;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:2px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/SAB35VyjkTk?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="Kiyosaki: Despierta tu mente financiera"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#faf8f3;font-size:0.88em;font-style:italic;">Robert Kiyosaki — Despierta tu mente financiera (en español)</div>
        </div>

        <div class="content-card">
            <h3>Adaptación cultural del Código al contexto mexicano</h3>
            <p>El método de Blair Singer fue diseñado originalmente para equipos estadounidenses. Al aplicarlo en México hay consideraciones culturales específicas:</p>
            <ul>
                <li><strong>Aprovechar el sentido de familia:</strong> en México el equipo funciona como "familia de trabajo". El Código puede construirse sobre esa base emocional.</li>
                <li><strong>Manejar la jerarquía con respeto:</strong> cambiar costumbre de "el jefe manda" requiere explicar claramente POR QUÉ el Código aplica al líder primero.</li>
                <li><strong>Suavizar la confrontación:</strong> la campana puede percibirse como "llamada de atención" (negativo). Requiere ritualización cuidadosa para mantener la dignidad.</li>
                <li><strong>Aprovechar el humor:</strong> el equipo mexicano responde bien al humor respetuoso. Se pueden crear rituales humorísticos ligados al Código.</li>
                <li><strong>Respetar tiempos:</strong> los cambios se aceleran después de las primeras 2-3 violaciones importantes, no antes.</li>
            </ul>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#127962;</span><div>
                <h3>Caso 1 · La cadena de panaderías en Yucatán</h3>
                <p><strong>Antes:</strong> 4 sucursales, 28 empleados, rotación anual 95%, quejas por "mal trato" constantes, NPS 52.</p>
                <p><strong>Diagnóstico:</strong> Código implícito enfermo. Los gerentes de sucursal trataban mal a los panaderos; los panaderos al personal de piso; el personal de piso a los clientes.</p>
                <p><strong>Intervención:</strong> sesión fundacional en cada sucursal + sesión intersucursal + Código común de 9 reglas + campana física en cada sucursal.</p>
                <p><strong>A los 12 meses:</strong></p>
                <ul>
                    <li>Rotación bajó a 18%</li>
                    <li>NPS subió a 89</li>
                    <li>Facturación aumentó 42% (sin abrir nuevas sucursales)</li>
                    <li>3 panaderos se volvieron gerentes internos</li>
                    <li>La cadena abrió 2 sucursales más financiadas con utilidades</li>
                </ul>
                <p><strong>Costo de la intervención:</strong> 3 sesiones presenciales + 4 visitas de seguimiento. Total ~ 80 mil pesos. ROI: varias veces la inversión en el primer año.</p>
            </div></div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128664;</span><div>
                <h3>Caso 2 · Concesionaria de autos en Monterrey</h3>
                <p><strong>Antes:</strong> 55 empleados, CSI (Customer Satisfaction Index) nacional puesto 47 de 52. Competencia interna destructiva — los vendedores se peleaban por prospectos.</p>
                <p><strong>Diagnóstico:</strong> Sin misión clara. Código implícito: "el que se lleva al cliente primero, se queda con la comisión".</p>
                <p><strong>Intervención:</strong> definir misión + redactar Código con regla central ("un cliente, un asesor, por todo el ciclo de vida del auto") + instalar matriz de consecuencias + programa de reconocimiento mensual.</p>
                <p><strong>A los 18 meses:</strong></p>
                <ul>
                    <li>CSI subió del puesto 47 al puesto 5 nacional</li>
                    <li>Ventas mensuales +28% en promedio</li>
                    <li>Retención de clientes para servicio post-venta +65%</li>
                    <li>3 empleados ascendidos internamente a gerencias</li>
                </ul>
            </div></div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#127822;</span><div>
                <h3>Caso 3 · Empresa familiar agrícola en Michoacán</h3>
                <p><strong>Antes:</strong> Negocio familiar de aguacate, 38 empleados, tensión entre 3 hermanos que eran socios. Código implícito era "el mayor decide, los demás obedecen". Uno de los hermanos estaba por salir del negocio.</p>
                <p><strong>Intervención:</strong> sesión fundacional SÓLO con los 3 hermanos (6 horas) para crear un Código de socios. Después sesión con el equipo operativo (3 horas).</p>
                <p><strong>Reglas clave del Código de socios:</strong> "Toda decisión mayor a X se decide por unanimidad", "Nunca hablamos mal de un hermano delante del equipo", "Cada trimestre tenemos 4 horas de conversación sólo entre socios".</p>
                <p><strong>A los 8 meses:</strong></p>
                <ul>
                    <li>Los 3 hermanos seguían como socios</li>
                    <li>Productividad subió 22%</li>
                    <li>Abrieron un segundo mercado de exportación (US East Coast)</li>
                    <li>Uno de los hermanos le dijo al instructor: "Me habías salvado el matrimonio familiar"</li>
                </ul>
            </div></div>
        </div>

        <div class="content-card">
            <h3>Patrón común de éxito en los 3 casos</h3>
            <ol class="concept-list">
                <li><strong>El líder se comprometió primero:</strong> redactó y firmó su Código personal antes de convocar al equipo</li>
                <li><strong>La sesión fundacional se hizo bien:</strong> tiempo suficiente (3+ horas), espacio adecuado, facilitación real</li>
                <li><strong>Se instaló ritual visible:</strong> campana física + revisiones semanales sin excepción</li>
                <li><strong>El líder aplicó consecuencias pareja:</strong> incluso a sí mismo y a sus favoritos</li>
                <li><strong>Se revisó cada trimestre:</strong> el Código evolucionó con el equipo</li>
            </ol>
            <p>Cuando uno de estos 5 faltó, los resultados fueron mediocres. Cuando estuvieron los 5, los resultados fueron espectaculares.</p>
        </div>

        <div class="quiz-container" id="quiz_l22a">
            <div class="quiz-label">Quiz 22A</div>
            <div class="quiz-question"><p>¿Cuál es una consideración cultural específica al implementar el Código en México según esta lección?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l22a', this, false)">El Código no funciona en México</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l22a', this, false)">Se debe imprimir el Código en inglés para respeto</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l22a', this, true)">Aprovechar el sentido de "familia de trabajo" y ritualizar la campana cuidadosamente para no parecer humillación</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l22a', this, false)">Pagar bonos extra por cumplir el Código</div>
            </div>
            <div class="quiz-feedback" id="quiz_l22a_fb"></div>
        </div>

        <div class="content-card" style="background:#0a2540;color:#faf8f3;">
            <h3 style="color:#c9a961;">Errores comunes que NO dieron resultado</h3>
            <p>También he asesorado empresas donde el Código no funcionó. Los patrones de fracaso son:</p>
            <ol>
                <li><strong>El dueño redactó el Código solo</strong> y lo "bajó" al equipo — muere en 3 semanas</li>
                <li><strong>No se definieron consecuencias</strong> — el Código queda decorativo</li>
                <li><strong>El dueño violó el Código en el primer mes</strong> sin disculparse — el equipo aprendió que es opcional</li>
                <li><strong>No hubo revisión semanal</strong> — el Código se olvidó en 6 semanas</li>
                <li><strong>El Código tenía 25 reglas</strong> (demasiadas) — nadie las recordaba, se volvió caos</li>
            </ol>
            <p style="margin-top:15px;">Si evitas estos 5 errores, tu probabilidad de éxito es muy alta. Si caes en 2 o más, el Código va a fracasar — mejor no empezar hasta estar listo.</p>
        </div>

        <div class="quiz-container" id="quiz_l22b">
            <div class="quiz-label">Quiz 22B</div>
            <div class="quiz-question"><p>¿Cuál de estos NO es un patrón común de éxito identificado en los casos mexicanos?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l22b', this, false)">El líder se comprometió primero con su Código personal</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l22b', this, false)">Se instaló ritual visible (campana y revisiones semanales)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l22b', this, true)">El Código tenía al menos 25 reglas detalladas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l22b', this, false)">Se aplicaron consecuencias iguales a todos, incluido el líder</div>
            </div>
            <div class="quiz-feedback" id="quiz_l22b_fb"></div>
        </div>

        <div class="content-card" style="margin-top:30px;background:#faf8f3;border-left:3px solid #c9a961;">
            <h3 style="color:#0a2540;">Aplicación · Tu plan final</h3>
            <p>Ya tienes toda la teoría, los ejemplos, las herramientas. Lo único que falta es <strong>tu ejecución</strong>.</p>
            <p>Antes del examen final, completa:</p>
            <ol>
                <li>¿Cuál es tu fecha de sesión fundacional? (día y hora específicos)</li>
                <li>¿Cuáles son tus 5-12 reglas borrador? (escríbelas ya)</li>
                <li>¿Qué objeto será tu campana?</li>
                <li>¿Quién será tu "aliado del Código" — persona con quien revisarás mes a mes el avance?</li>
                <li>¿Qué te vas a comprometer públicamente hoy para no echarte para atrás?</li>
            </ol>
            <p>Responde los 5 puntos con honestidad. Luego presenta el examen final del curso.</p>
        </div>
        `
    },

    // ==========================================================
    // LECCION 22 — EXAMEN FINAL
    // ==========================================================
    {
        id: 'examen-final', module: 'Examen final', tag: 'tag-examen', tagLabel: 'EXAMEN',
        title: 'Examen final del curso',
        subtitle: '15 preguntas · Aprobar con 11 o más para obtener certificado',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1400&q=80')">
            <div class="hero-caption">El último paso antes del certificado</div>
        </div>

        <div class="content-card" style="background:#0a2540;color:#faf8f3;">
            <h3 style="color:#c9a961;">Instrucciones del examen</h3>
            <ul>
                <li>15 preguntas de opción múltiple</li>
                <li>Necesitas <strong>11 respuestas correctas</strong> (73%) para aprobar</li>
                <li>Puedes consultar tus notas del curso</li>
                <li>Si no apruebas, puedes repetirlo cuando quieras</li>
                <li>Al aprobar, se habilita tu certificado en la siguiente lección</li>
            </ul>
        </div>

        <div class="quiz-container" id="final_q1">
            <div class="quiz-label">Pregunta 1 de 15</div>
            <div class="quiz-question"><p>Según Blair Singer, ¿qué define realmente a un equipo?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q1', this, false)">Su misión corporativa oficial</div>
                <div class="quiz-option" onclick="checkFinal('final_q1', this, false)">Sus metas financieras trimestrales</div>
                <div class="quiz-option" onclick="checkFinal('final_q1', this, true)">Las reglas que realmente cumple cuando nadie está mirando</div>
                <div class="quiz-option" onclick="checkFinal('final_q1', this, false)">El talento individual de sus miembros estrella</div>
            </div>
            <div class="quiz-feedback" id="final_q1_fb"></div>
        </div>

        <div class="quiz-container" id="final_q2">
            <div class="quiz-label">Pregunta 2 de 15</div>
            <div class="quiz-question"><p>¿Cuál es el rango óptimo de reglas que debe tener un Código de Honor?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q2', this, false)">Entre 2 y 4 reglas</div>
                <div class="quiz-option" onclick="checkFinal('final_q2', this, true)">Entre 5 y 12 reglas</div>
                <div class="quiz-option" onclick="checkFinal('final_q2', this, false)">Entre 20 y 30 reglas</div>
                <div class="quiz-option" onclick="checkFinal('final_q2', this, false)">Más de 50 reglas para cubrir todos los escenarios</div>
            </div>
            <div class="quiz-feedback" id="final_q2_fb"></div>
        </div>

        <div class="quiz-container" id="final_q3">
            <div class="quiz-label">Pregunta 3 de 15</div>
            <div class="quiz-question"><p>En la categorización de Blair Singer (A+, A-, B, C), ¿cuál es la categoría más peligrosa para el Código?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q3', this, false)">Los C (no alineados, sin resultados)</div>
                <div class="quiz-option" onclick="checkFinal('final_q3', this, true)">Los B (performantes pero violan el Código) — "cáncer talentoso"</div>
                <div class="quiz-option" onclick="checkFinal('final_q3', this, false)">Los A- (alineados sin resultados todavía)</div>
                <div class="quiz-option" onclick="checkFinal('final_q3', this, false)">Los A+ (alineados y performantes)</div>
            </div>
            <div class="quiz-feedback" id="final_q3_fb"></div>
        </div>

        <div class="quiz-container" id="final_q4">
            <div class="quiz-label">Pregunta 4 de 15</div>
            <div class="quiz-question"><p>¿Cuáles son los 3 lados exteriores del Triángulo B-I de Kiyosaki?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q4', this, false)">Producto, Sistemas, Cash Flow</div>
                <div class="quiz-option" onclick="checkFinal('final_q4', this, true)">Misión, Equipo, Liderazgo</div>
                <div class="quiz-option" onclick="checkFinal('final_q4', this, false)">Ventas, Marketing, Operaciones</div>
                <div class="quiz-option" onclick="checkFinal('final_q4', this, false)">Capital, Talento, Mercado</div>
            </div>
            <div class="quiz-feedback" id="final_q4_fb"></div>
        </div>

        <div class="quiz-container" id="final_q5">
            <div class="quiz-label">Pregunta 5 de 15</div>
            <div class="quiz-question"><p>¿Cuál es el error más costoso al crear un Código de Honor?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q5', this, false)">Incluir demasiadas reglas</div>
                <div class="quiz-option" onclick="checkFinal('final_q5', this, true)">Que el líder lo redacte solo e imponga al equipo, en vez de co-crear</div>
                <div class="quiz-option" onclick="checkFinal('final_q5', this, false)">Usar ejemplos de equipos deportivos</div>
                <div class="quiz-option" onclick="checkFinal('final_q5', this, false)">Hacer la sesión en una ubicación fuera de la oficina</div>
            </div>
            <div class="quiz-feedback" id="final_q5_fb"></div>
        </div>

        <div class="quiz-container" id="final_q6">
            <div class="quiz-label">Pregunta 6 de 15</div>
            <div class="quiz-question"><p>¿Cuál es la forma correcta de redactar una regla del Código?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q6', this, false)">Usar valores abstractos como "respeto" o "excelencia"</div>
                <div class="quiz-option" onclick="checkFinal('final_q6', this, false)">Redactar en segunda persona ("Tú debes...")</div>
                <div class="quiz-option" onclick="checkFinal('final_q6', this, true)">Verbo + conducta observable + contexto (ej. "Saludamos al cliente mirando a los ojos en menos de 10 segundos")</div>
                <div class="quiz-option" onclick="checkFinal('final_q6', this, false)">Expresar intenciones internas ("nos esforzamos por...")</div>
            </div>
            <div class="quiz-feedback" id="final_q6_fb"></div>
        </div>

        <div class="quiz-container" id="final_q7">
            <div class="quiz-label">Pregunta 7 de 15</div>
            <div class="quiz-question"><p>¿Por qué Blair Singer insiste en que el Código personal del líder viene antes que el del equipo?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q7', this, false)">Porque el líder tiene derecho a reglas distintas</div>
                <div class="quiz-option" onclick="checkFinal('final_q7', this, true)">Porque no se puede liderar un Código que uno mismo no vive — la coherencia es no negociable</div>
                <div class="quiz-option" onclick="checkFinal('final_q7', this, false)">Porque el Código personal se crea más rápido</div>
                <div class="quiz-option" onclick="checkFinal('final_q7', this, false)">Porque el Código del equipo es opcional</div>
            </div>
            <div class="quiz-feedback" id="final_q7_fb"></div>
        </div>

        <div class="quiz-container" id="final_q8">
            <div class="quiz-label">Pregunta 8 de 15</div>
            <div class="quiz-question"><p>¿Cuál es la función central de "la campana" como ritual?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q8', this, false)">Castigar públicamente al que rompe una regla</div>
                <div class="quiz-option" onclick="checkFinal('final_q8', this, true)">Interrumpir el piloto automático y hacer visible el micro-quiebre sin confrontación personal</div>
                <div class="quiz-option" onclick="checkFinal('final_q8', this, false)">Medir métricas de productividad</div>
                <div class="quiz-option" onclick="checkFinal('final_q8', this, false)">Reemplazar al líder en la disciplina</div>
            </div>
            <div class="quiz-feedback" id="final_q8_fb"></div>
        </div>

        <div class="quiz-container" id="final_q9">
            <div class="quiz-label">Pregunta 9 de 15</div>
            <div class="quiz-question"><p>Sin rituales de mantenimiento, ¿en cuánto tiempo típicamente muere un Código según Blair Singer?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q9', this, false)">Nunca muere si está bien redactado</div>
                <div class="quiz-option" onclick="checkFinal('final_q9', this, true)">En 8-11 semanas (2-3 meses)</div>
                <div class="quiz-option" onclick="checkFinal('final_q9', this, false)">En 2-3 años</div>
                <div class="quiz-option" onclick="checkFinal('final_q9', this, false)">En 5-10 años</div>
            </div>
            <div class="quiz-feedback" id="final_q9_fb"></div>
        </div>

        <div class="quiz-container" id="final_q10">
            <div class="quiz-label">Pregunta 10 de 15</div>
            <div class="quiz-question"><p>¿Cuál es la diferencia central entre un líder multiplicador y uno disminuidor?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q10', this, false)">El nivel de experiencia técnica</div>
                <div class="quiz-option" onclick="checkFinal('final_q10', this, true)">El multiplicador hace que cada subordinado rinda 2x-3x más; el disminuidor los vuelve menos de lo que podrían ser</div>
                <div class="quiz-option" onclick="checkFinal('final_q10', this, false)">La antigüedad en la empresa</div>
                <div class="quiz-option" onclick="checkFinal('final_q10', this, false)">El presupuesto asignado</div>
            </div>
            <div class="quiz-feedback" id="final_q10_fb"></div>
        </div>

        <div class="quiz-container" id="final_q11">
            <div class="quiz-label">Pregunta 11 de 15</div>
            <div class="quiz-question"><p>En el modelo de cuadrantes del líder, ¿cuál genera equipos de verdadero alto rendimiento?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q11', this, false)">Alta exigencia + bajo apoyo (caporal)</div>
                <div class="quiz-option" onclick="checkFinal('final_q11', this, false)">Baja exigencia + bajo apoyo (ausente)</div>
                <div class="quiz-option" onclick="checkFinal('final_q11', this, false)">Baja exigencia + alto apoyo (bonachón)</div>
                <div class="quiz-option" onclick="checkFinal('final_q11', this, true)">Alta exigencia + alto apoyo (líder-coach)</div>
            </div>
            <div class="quiz-feedback" id="final_q11_fb"></div>
        </div>

        <div class="quiz-container" id="final_q12">
            <div class="quiz-label">Pregunta 12 de 15</div>
            <div class="quiz-question"><p>¿Cuáles son los 3 componentes del modelo SBI para dar retroalimentación?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q12', this, true)">Situation (situación) + Behavior (conducta) + Impact (impacto)</div>
                <div class="quiz-option" onclick="checkFinal('final_q12', this, false)">Start + Begin + Improve</div>
                <div class="quiz-option" onclick="checkFinal('final_q12', this, false)">Sincero + Breve + Insistente</div>
                <div class="quiz-option" onclick="checkFinal('final_q12', this, false)">Silencio + Bondad + Indulgencia</div>
            </div>
            <div class="quiz-feedback" id="final_q12_fb"></div>
        </div>

        <div class="quiz-container" id="final_q13">
            <div class="quiz-label">Pregunta 13 de 15</div>
            <div class="quiz-question"><p>Según la fórmula de Maister, ¿qué factor disminuye la confianza cuando aumenta?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q13', this, false)">Credibilidad</div>
                <div class="quiz-option" onclick="checkFinal('final_q13', this, false)">Fiabilidad</div>
                <div class="quiz-option" onclick="checkFinal('final_q13', this, false)">Intimidad</div>
                <div class="quiz-option" onclick="checkFinal('final_q13', this, true)">Auto-orientación (buscar el beneficio propio)</div>
            </div>
            <div class="quiz-feedback" id="final_q13_fb"></div>
        </div>

        <div class="quiz-container" id="final_q14">
            <div class="quiz-label">Pregunta 14 de 15</div>
            <div class="quiz-question"><p>¿Cuál es el propósito del "huddle de 5 minutos" en momentos de presión?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q14', this, false)">Asignar tareas técnicas específicas</div>
                <div class="quiz-option" onclick="checkFinal('final_q14', this, true)">Centrar al equipo, activar compromisos individuales y bajar del modo supervivencia al modo pensante</div>
                <div class="quiz-option" onclick="checkFinal('final_q14', this, false)">Revisar el presupuesto del trimestre</div>
                <div class="quiz-option" onclick="checkFinal('final_q14', this, false)">Identificar al culpable de la crisis</div>
            </div>
            <div class="quiz-feedback" id="final_q14_fb"></div>
        </div>

        <div class="quiz-container" id="final_q15">
            <div class="quiz-label">Pregunta 15 de 15</div>
            <div class="quiz-question"><p>¿Cuál es el ratio ideal de feedback positivo vs. correctivo del líder-coach según Blair Singer?</p></div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkFinal('final_q15', this, false)">1:1 (mismo número)</div>
                <div class="quiz-option" onclick="checkFinal('final_q15', this, true)">3:1 (3 positivos por cada correctivo)</div>
                <div class="quiz-option" onclick="checkFinal('final_q15', this, false)">1:3 (más correctivo que positivo)</div>
                <div class="quiz-option" onclick="checkFinal('final_q15', this, false)">Sólo positivo, nada correctivo</div>
            </div>
            <div class="quiz-feedback" id="final_q15_fb"></div>
        </div>

        <div class="content-card" style="margin-top:30px;background:#0a2540;color:#faf8f3;">
            <h3 style="color:#c9a961;">Al completar las 15 preguntas</h3>
            <p>Verás automáticamente tu puntaje. Si obtuviste 11 o más correctas, ¡felicidades! Se habilita tu certificado en la siguiente lección.</p>
            <p>Si obtuviste menos de 11, revisa las lecciones que te generaron más dudas y presenta el examen nuevamente. No hay límite de intentos.</p>
        </div>
        `
    },

    // ==========================================================
    // LECCION 23 — CERTIFICADO
    // ==========================================================
    {
        id: 'certificado', module: 'Certificado', tag: 'tag-cert', tagLabel: 'CERTIFICADO',
        title: 'Tu certificado del curso',
        subtitle: 'Reconocimiento oficial de TRIKLES',
        content: `
        <div class="cert-container">
            <div class="cert-frame">
                <div class="cert-border-outer">
                    <div class="cert-border-inner">
                        <div class="cert-seal">T</div>
                        <div class="cert-header">TRIKLES · Academia de Gerencia</div>
                        <div class="cert-title">Certificado de Finalización</div>
                        <div class="cert-otorga">Se otorga el presente a</div>
                        <div class="cert-name" id="certName">[Nombre del participante]</div>
                        <div class="cert-course">Por haber completado exitosamente el curso</div>
                        <div class="cert-course-name">El ABC para crear un equipo de negocios exitoso<br><small>El Código de Honor de Blair Singer aplicado a equipos mexicanos</small></div>
                        <div class="cert-description">Habiendo demostrado dominio de los conceptos de Código de Honor, mapeo de equipo, creación de reglas mínimas no negociables, reforzamiento por campana, coherencia del líder, retroalimentación efectiva, responsabilidad radical y sostenimiento bajo presión, según el método de Blair Singer para equipos de alto desempeño.</div>
                        <div class="cert-signatures">
                            <div class="cert-sig-line">
                                <div class="cert-sig-name">LADE Germán Solís Muñoz</div>
                                <div class="cert-sig-title">Instructor · TRIKLES</div>
                            </div>
                            <div class="cert-sig-line">
                                <div class="cert-sig-name" id="certDate">22 de Abril, 2026</div>
                                <div class="cert-sig-title">Fecha de expedición</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="cert-actions">
            <button class="btn btn-primary" onclick="window.print()">Imprimir / Guardar PDF</button>
        </div>

        <div class="content-card" style="margin-top:30px;background:#faf8f3;border-left:3px solid #c9a961;">
            <h3 style="color:#0a2540;">¿Qué sigue ahora?</h3>
            <ol class="concept-list">
                <li><strong>Implementa tu Código:</strong> agenda tu sesión fundacional en las próximas 2 semanas</li>
                <li><strong>Instala la campana:</strong> compra o designa el objeto, ubícalo físicamente</li>
                <li><strong>Bloquea las 52 revisiones semanales</strong> de los próximos 12 meses en tu calendario</li>
                <li><strong>Comparte este curso</strong> con socios, gerentes o líderes de otras áreas. Un Código funciona mejor cuando varios líderes hablan el mismo lenguaje.</li>
                <li><strong>Regresa a este curso</strong> cada vez que enfrentes una crisis. Las lecciones 19-20 (presión) son especialmente útiles.</li>
            </ol>
        </div>

        <div class="content-card" style="margin-top:20px;background:#0a2540;color:#faf8f3;">
            <h3 style="color:#c9a961;">Un mensaje final del instructor</h3>
            <p>Has llegado al final del curso, pero al principio del cambio real. El Código de Honor de Blair Singer no es una idea para contemplar — es un sistema para ejecutar.</p>
            <p>Durante los próximos 90 días, tu equipo puede transformarse más profundamente de lo que creías posible. O puede quedarse exactamente igual. La diferencia está en una sola cosa: <strong>qué tanto te comprometes con este método</strong>.</p>
            <p>Te deseo lo mejor. Cuando tu equipo empiece a rendir al nivel que sabes que puede, vas a entender por qué Blair Singer lleva más de 30 años predicando lo mismo: <em>un equipo con Código es imparable</em>.</p>
            <p style="margin-top:15px;font-style:italic;">— LADE Germán Solís Muñoz<br>TRIKLES · Academia de Gerencia</p>
        </div>
        `
    }
]
};

// Registro global
if (typeof window !== 'undefined') {
    window.COURSE_CODIGO_HONOR = COURSE_CODIGO_HONOR;
    window.TRIKLES_COURSES = window.TRIKLES_COURSES || {};
    window.TRIKLES_COURSES['codigo-honor'] = COURSE_CODIGO_HONOR;
}
