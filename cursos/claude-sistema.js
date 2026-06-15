// ============================================
// CURSO CLAUDE SISTEMA — Domina los tres pilares de la IA más poderosa
// TRIKLES VIP · Nivel intermedio-avanzado · 27 lecciones
// Germán Solís Muñoz · Mayo 2026
// ============================================

const COURSE_CLAUDE_SISTEMA = {
    id: 'claude-sistema',
    meta: {
        title: 'CLAUDE SISTEMA',
        subtitle: 'Domina los tres pilares de la IA más poderosa',
        author: 'Curso original TRIKLES VIP · Nivel intermedio-avanzado',
        cover: 'assets/covers/claude-sistema.svg',
        description: 'El primer curso de nivel avanzado de TRIKLES sobre Claude: los tres pilares (Chat, Co-work y Code) convertidos en un sistema de trabajo personal que produce resultados predecibles. 27 lecciones con demos en vivo, ejercicios con criterio de éxito medible y un proyecto final que certifica que tienes un sistema funcionando — no solo el concepto.',
        descripcionCorta: 'Aprende a usar Chat, Co-work y Code como un sistema integrado — no como tres herramientas separadas',

        // Banda destacada en el landing (vende el módulo bonus)
        spotlight: {
            eyebrow: '🎁 Dos módulos bonus incluidos · sin costo extra',
            title: 'Incluye cómo elegir tu modelo y mantener tu sistema vigente cuando Claude cambia',
            text: 'Anthropic mueve su catálogo constantemente: salen modelos nuevos y se retiran otros. El curso incluye dos módulos bonus que te preparan para eso: uno sobre Claude Opus 4.8 y otro sobre cómo decidir qué modelo usar y adaptarte cuando el catálogo cambia — con el caso real de Fable 5, un modelo que salió y se retiró en semanas. Aprendes un sistema de trabajo que no caduca con la próxima versión.',
            bullets: [
                'Cómo decidir qué modelo usar para cada tarea (capacidad vs costo)',
                'La regla de escalar: empieza con el estándar, sube de modelo solo cuando hace falta',
                'El caso Fable 5: por qué no atas tu trabajo a un modelo concreto',
                'Tu sistema, a prueba de versiones y de familias enteras'
            ]
        },
        category: 'Productividad con inteligencia artificial',
        lessonsCount: 27,
        duration: '9-12 horas',
        level: 'Intermedio-avanzado',
        active: true,
        tags: ['Claude', 'IA', 'productividad', 'automatización', 'prompts', 'Claude Code', 'Co-work', 'Projects', 'MCP', 'flujos de trabajo'],

        partnerName: 'TRIKLES',
        partnerTag: 'Formación Ejecutiva VIP',
        instructor: {
            name: 'LADE Germán Solís Muñoz',
            title: 'Director de Gestión Empresarial · TRIKLES',
            photo: 'assets/instructor-german.jpg',
            bio: 'Instructor y fundador de TRIKLES. Ha integrado Claude como herramienta central de trabajo en consultoría de PyMEs y formación ejecutiva. Usa Claude Code a diario para construir y mantener la plataforma TRIKLES.'
        },
        rating: { score: 4.9, count: 38 },
        estimatedHours: '~10 horas',
        schedule: 'Horario flexible · a tu ritmo',
        language: 'Español',
        includesCertificate: true,
        learningOutcomes: [
            'Elegir la herramienta correcta (Chat, Co-work o Code) en menos de 10 segundos con el mapa de decisión',
            'Construir prompts de 5 elementos que generan resultados predecibles sin necesidad de correcciones',
            'Configurar Projects con instrucciones maestras que eliminan el 80% de las explicaciones repetitivas',
            'Aplicar el Revisor Crítico, el Motor de Contenido y el Pipeline Analítico como flujos profesionales',
            'Automatizar tareas repetitivas con Claude Code sin saber programar — usando lenguaje natural',
            'Conectar Claude con Google Drive, Slack y otras herramientas via integraciones y MCP',
            'Mantener un sistema de trabajo vivo que mejora cada mes con una auditoría de 30 minutos'
        ],
        skills: [
            'Mapa de decisión Chat/Co-work/Code',
            'Prompts de 5 elementos',
            'Projects con instrucciones maestras',
            'Knowledge base estratégico',
            'Memory y Skills configurados',
            'Research Mode avanzado',
            'Artifacts publicables',
            'Extended Thinking (cuándo sí/no)',
            'Revisor Crítico personalizado',
            'Motor de Contenido',
            'Pipeline Analítico en etapas',
            'CLAUDE.md como contrato de trabajo',
            'Automatizaciones sin código',
            'Integraciones MCP',
            'Flujos integrados de 3 pilares'
        ],
        tools: [
            'Mapa de Decisión imprimible (PDF descargable)',
            'Plantilla de instrucciones maestras para Projects',
            'Glosario de 20 términos técnicos de Claude',
            'Plantillas de los 5 prompts más frecuentes',
            'Examen de certificación con 15 preguntas'
        ],
        details: [
            { label: 'Modalidad', value: 'Online · 100% asíncrono' },
            { label: 'Idioma', value: 'Español (MX)' },
            { label: 'Nivel', value: 'Intermedio-avanzado' },
            { label: 'Certificado', value: 'Certificado VIP TRIKLES al aprobar examen final' },
            { label: 'Acceso', value: 'De por vida, incluye actualizaciones' },
            { label: 'Plataforma', value: 'Claude.ai + Claude Desktop App' }
        ],
        testimonials: [
            {
                name: 'Adriana M.',
                role: 'Consultora independiente · CDMX',
                text: 'Llevaba 2 años usando Claude de forma básica — preguntaba, copiaba, usaba. En este curso entendí que estaba usando el 20% de lo que es capaz. El cambio más grande fue el Revisor Crítico: nunca más envío una propuesta sin pasarla por él.'
            },
            {
                name: 'Roberto F.',
                role: 'Gerente de ventas · Guadalajara',
                text: 'La lección de CLAUDE.md me cambió la vida. Ahora Claude sabe exactamente cómo nombrar archivos, qué no tocar y en qué idioma responderme. Automaticé la extracción de datos de 60 PDFs que antes me tomaba 4 horas. Tardó 3 minutos.'
            },
            {
                name: 'Sandra P.',
                role: 'Coach ejecutiva · Monterrey',
                text: 'El mapa de decisión es exactamente lo que necesitaba. Ya no pregunto "¿uso Chat o Code?". En 10 segundos sé la respuesta. El Motor de Contenido me redujo de 4 horas de producción a 45 minutos — sin perder mi voz.'
            }
        ],
        faq: [
            {
                q: '¿Esto no quedará obsoleto cuando salga un modelo nuevo de Claude?',
                a: 'Al contrario: el curso te prepara justo para eso. Aprendes un sistema de trabajo, no trucos de una versión — el método sigue funcionando con cada modelo nuevo, y cada motor mejor lo vuelve más poderoso. Incluye dos módulos bonus sobre el tema: uno sobre Claude Opus 4.8 y otro sobre cómo elegir tu modelo y adaptarte cuando Anthropic cambia su catálogo, con el caso real de Fable 5 (un modelo que salió y se retiró en semanas). Y recibes las actualizaciones del curso sin costo.'
            },
            {
                q: '¿Necesito saber programar para este curso?',
                a: 'No. Las lecciones de Claude Code están diseñadas específicamente para profesionales que no escriben código. Usarás lenguaje natural en todo momento.'
            },
            {
                q: '¿Qué plan de Claude necesito?',
                a: 'Para los módulos de Chat y Co-work, Claude Pro (desde $20 USD/mes). Para Claude Code y las rutinas, también Pro. Algunas funciones avanzadas (Research Mode, Extended Thinking) requieren Pro.'
            },
            {
                q: '¿Es para usuarios totalmente nuevos en Claude?',
                a: 'No. Es para usuarios que ya usan Claude regularmente pero sienten que sus resultados son inconsistentes o que no están aprovechando todo su potencial. Si llevas menos de 2 semanas usando Claude, empieza con nuestros cursos de nivel básico.'
            },
            {
                q: '¿Qué pasa si Claude lanza algo nuevo después de que termino el curso?',
                a: 'El Módulo 4 incluye exactamente esto: cómo mantener tu sistema actualizado con los cambios de Claude. También recibirás actualizaciones del curso sin costo adicional.'
            }
        ]
    },

    lessonRequirements: {
        0:  ['quiz_intro'],
        1:  ['quiz_m0l1a', 'quiz_m0l1b'],
        2:  ['quiz_m0l2a', 'quiz_m0l2b'],
        3:  ['quiz_m0l3a', 'quiz_m0l3b'],
        4:  ['quiz_m0l4a', 'quiz_m0l4b'],
        5:  ['quiz_m1l5a', 'quiz_m1l5b'],
        6:  ['quiz_m1l6a', 'quiz_m1l6b'],
        7:  ['quiz_m1l7a', 'quiz_m1l7b'],
        8:  ['quiz_m1l8a', 'quiz_m1l8b'],
        9:  ['quiz_m1l9a', 'quiz_m1l9b'],
        10: ['quiz_m1l10a', 'quiz_m1l10b'],
        11: ['quiz_m1l11a', 'quiz_m1l11b'],
        12: ['quiz_m2l12a', 'quiz_m2l12b'],
        13: ['quiz_m2l13a', 'quiz_m2l13b'],
        14: ['quiz_m2l14a', 'quiz_m2l14b'],
        15: ['quiz_m2l15a', 'quiz_m2l15b'],
        16: ['quiz_m2l16a', 'quiz_m2l16b'],
        17: ['quiz_m2l17a', 'quiz_m2l17b'],
        18: ['quiz_m2l18a', 'quiz_m2l18b'],
        19: ['quiz_m3l19a', 'quiz_m3l19b'],
        20: ['quiz_m3l20a', 'quiz_m3l20b'],
        21: ['quiz_m3l21a', 'quiz_m3l21b'],
        22: ['quiz_m3l22a', 'quiz_m3l22b'],
        23: ['quiz_m3l23a', 'quiz_m3l23b'],
        24: ['quiz_m3l24a', 'quiz_m3l24b'],
        25: ['quiz_m4l25a', 'quiz_m4l25b'],
        26: ['quiz_m4l26a', 'quiz_m4l26b'],
        27: ['quiz_m4l27a', 'quiz_m4l27b'],
        28: ['quiz_bonus_a', 'quiz_bonus_b'],
        29: ['quiz_fable_a', 'quiz_fable_b'],
        30: ['final_q1','final_q2','final_q3','final_q4','final_q5','final_q6','final_q7','final_q8','final_q9','final_q10','final_q11','final_q12','final_q13','final_q14','final_q15'],
        31: []
    },

    examPassScore: 11,

    certificate: {
        courseNameForCert: 'CLAUDE SISTEMA<br>Domina los tres pilares de la IA más poderosa',
        description: 'Habiendo demostrado dominio del mapa de decisión Chat/Co-work/Code, construcción de prompts de 5 elementos, configuración de Projects con instrucciones maestras, aplicación del Revisor Crítico y el Pipeline Analítico, automatización con Claude Code y diseño de flujos de trabajo integrados con los tres pilares.'
    },

    lessons: [

    // ==========================================================
    // LECCIÓN 0 — BIENVENIDA
    // ==========================================================
    {
        id: 'intro', module: 'Bienvenida', tag: 'tag-intro', tagLabel: 'BIENVENIDA',
        title: 'Por qué la mayoría de los usuarios de Claude está usando el 20% de lo que es capaz',
        subtitle: 'El cambio de mentalidad que separa al usuario básico del usuario avanzado — antes de tocar cualquier herramienta',
        content: `
        <div class="lesson-hero" style="background-image:linear-gradient(135deg,rgba(8,28,56,0.88),rgba(8,28,56,0.60)),url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&q=80')">
            <div class="hero-caption">Tres pilares. Un sistema. Resultados predecibles — no por suerte.</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 EN ESTA LECCIÓN DE BIENVENIDA:</div>
            <ul>
                <li>Por qué usar Claude sin sistema produce resultados inconsistentes</li>
                <li>La diferencia entre Chat, Co-work y Code — y por qué importa elegir bien</li>
                <li>Qué vas a tener al terminar el curso: un sistema funcionando, no solo el concepto</li>
                <li>Cómo aprovechar cada lección al máximo</li>
            </ul>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor · LADE Germán Solís Muñoz</div>
                <div class="instructor-note-text">Llevo años trabajando con Claude en consultoría de PyMEs y construyendo TRIKLES. Lo que descubrí es que la diferencia entre un usuario básico y uno avanzado no es técnica. Es conceptual. El avanzado no conoce más funciones — sabe <em>cuándo usar cada una</em> y <em>cómo encadenarlas</em>. Este curso te da exactamente eso: el sistema, no el truco.</div>
            </div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL DIAGNÓSTICO</div>
            <div class="aha-quote">"Si tus resultados con Claude son inconsistentes, el problema no es Claude — es que no tienes un sistema."</div>
            <div class="aha-author">— El problema que este curso resuelve</div>
            <div class="aha-body">El usuario promedio abre Claude, escribe algo, lee la respuesta y cierra. A veces funciona, a veces no. No sabe exactamente por qué. Ese patrón no es falta de inteligencia — es falta de método. Este curso te da el método.</div>
        </div>

        <div class="content-card">
            <h3>Los tres pilares — y por qué no son lo mismo</h3>
            <p>Claude tiene tres modos de trabajo con lógicas completamente distintas. Usarlos sin entender la diferencia es como usar un bisturí como martillo:</p>
            <ol class="concept-list">
                <li><strong>Chat — el pensador:</strong> Claude.ai en modo conversacional. Para pensar, investigar, crear, generar entregables únicos. Tu socio de razonamiento.</li>
                <li><strong>Co-work — el socio intelectual:</strong> Claude configurado con roles, criterios y restricciones permanentes. Para trabajo que se repite con calidad consistente.</li>
                <li><strong>Code — el constructor:</strong> Claude Desktop App como agente autónomo. Para automatizar, procesar archivos masivamente, ejecutar tareas en tu computadora.</li>
            </ol>
            <p>La mayoría de los usuarios solo usa Chat. Y dentro de Chat, solo lo usa como buscador sofisticado. <strong>Este curso te da los tres.</strong></p>
        </div>

        <div class="content-card tip">
            <h3>Cómo aprovechar este curso</h3>
            <ol class="concept-list">
                <li><strong>Una lección al día es suficiente.</strong> Lo que importa no es la velocidad sino la aplicación. Haz el "Tu Turno" de cada lección antes de pasar a la siguiente.</li>
                <li><strong>Usa Claude mientras lo estudias.</strong> Abre una conversación paralela y ejecuta los ejercicios en tiempo real.</li>
                <li><strong>El Proyecto Final certifica que funciona.</strong> No hay nota de "¿entendiste el concepto?" — hay evidencia de que tienes un sistema funcionando.</li>
                <li><strong>El Módulo 0 es obligatorio.</strong> Aunque ya uses Claude. El modelo mental correcto cambia cómo procesas todo lo demás.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>Lo que vas a tener al terminar</h3>
            <ul>
                <li>Un <strong>mapa de decisión personal</strong>: 7 tipos de tareas tuyas, clasificadas con la herramienta correcta para cada una</li>
                <li>Un <strong>Project "Mi sistema Claude"</strong> con instrucciones maestras, glosario, plantillas y Skills configuradas</li>
                <li>Un <strong>flujo de trabajo documentado</strong> para un proceso real que repites regularmente</li>
                <li>Una <strong>automatización activa en tu computadora</strong> — ejecutada, no diseñada en teoría</li>
                <li>El <strong>hábito mensual</strong> de mantener tu sistema vivo</li>
            </ul>
        </div>

        <div class="quiz-container" id="quiz_intro">
            <div class="quiz-label">Pregunta de activación</div>
            <div class="quiz-question">¿Cuál es la diferencia principal entre un usuario básico y un usuario avanzado de Claude, según la introducción del curso?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_intro', this, false)">El usuario avanzado tiene suscripción Enterprise y acceso a más modelos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_intro', this, false)">El usuario avanzado conoce más comandos y funciones técnicas de Claude</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_intro', this, true)">El usuario avanzado sabe cuándo usar cada herramienta y cómo encadenarlas en un sistema</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_intro', this, false)">El usuario avanzado usa Claude más horas por día que el usuario básico</div>
            </div>
            <div class="quiz-feedback" id="quiz_intro_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Por qué los resultados inconsistentes no son culpa de Claude — son culpa de la falta de sistema</li>
                <li>La diferencia fundamental entre Chat, Co-work y Code</li>
                <li>Qué tendrás al terminar este curso (un sistema real, no solo el concepto)</li>
            </ul>
            <div class="okr-next">→ El <strong>Módulo 0</strong> instala el modelo mental correcto antes de tocar cualquier herramienta. No lo saltes aunque ya uses Claude — el 90% de los errores de los usuarios intermedios vienen de aquí.</div>
        </div>
        `
    },

    // ==========================================================
    // MÓDULO 0 — EL MODELO MENTAL (lecciones 1-4)
    // ==========================================================
    {
        id: 'l01', module: 'Módulo 0 · El Modelo Mental', tag: 'tag-m0', tagLabel: 'MÓDULO 0',
        title: 'Claude no es un buscador: el cambio de mentalidad que lo cambia todo',
        subtitle: 'La diferencia entre recibir respuestas genéricas y obtener resultados específicos y accionables',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Por qué el contexto es más importante que la pregunta</li>
                <li>La analogía del consultor senior que transforma cómo interactúas con Claude</li>
                <li>La diferencia medible entre una respuesta sin contexto y una con contexto</li>
                <li>Tu primera acción práctica: el experimento de contexto</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL CAMBIO QUE LO CAMBIA TODO</div>
            <div class="aha-quote">"Claude no sabe nada de ti hasta que tú se lo dices."</div>
            <div class="aha-author">— La frase que define al usuario avanzado</div>
            <div class="aha-body">Claude no busca en internet. Su conocimiento viene de entrenamiento. Cuando le preguntas sin contexto, razona con suposiciones genéricas. Cuando le das tu contexto real, razona con tu realidad. La misma pregunta, dos resultados radicalmente distintos.</div>
        </div>

        <div class="content-card">
            <h3>El consultor senior brillante</h3>
            <p>Imagina que contratas a un consultor senior brillante que acaba de llegar a tu empresa sin conocerla. Si le preguntas cómo mejorar tus ventas sin decirle nada de tu negocio, te dará consejos que podría darle a cualquiera.</p>
            <p>Si le das tu contexto — tus clientes, tus números, tus problemas reales — sus respuestas son extraordinarias.</p>
            <p><strong>Claude es ese consultor.</strong> La diferencia no es la inteligencia de Claude. Es cuánto contexto le das para trabajar.</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">🔬</span><div>
                <h3>El experimento en vivo</h3>
                <p><strong>Sin contexto:</strong> "¿Cómo puedo mejorar mis propuestas para clientes?" → Respuesta genérica: 5 consejos aplicables a cualquier profesional del mundo.</p>
                <p><strong>Con contexto:</strong> "Soy consultor independiente de estrategia para dueños de PyMEs en México. Mi propuesta actual tiene 4 páginas: resumen ejecutivo, diagnóstico, solución y precio. Los clientes me dicen que es muy técnica. ¿Cómo la mejoro?" → Respuesta específica: lenguaje ejecutivo, sin jerga, recomendaciones adaptadas a ese tipo de cliente.</p>
                <p><strong>La diferencia:</strong> misma pregunta, contexto diferente, resultado radicalmente distinto.</p>
            </div></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU TURNO</div>
            <div class="next-step-body">
                <p>Toma una pregunta que le hayas hecho a Claude esta semana. Escríbela exactamente como la escribiste. Luego agrégale tu contexto real: quién eres, qué haces, para quién, cuál es el problema específico.</p>
                <p>Compara las dos respuestas. <strong>Criterio de éxito:</strong> La segunda respuesta no requiere ninguna aclaración adicional para ser usable.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_m0l1a">
            <div class="quiz-label">Quiz · Lección 01</div>
            <div class="quiz-question">¿Cuál es la causa principal de que Claude dé respuestas genéricas?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l1a', this, false)">Claude usa una versión desactualizada de su modelo de lenguaje</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l1a', this, true)">El usuario no proporcionó contexto, así que Claude rellena los huecos con suposiciones genéricas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l1a', this, false)">Las preguntas cortas generan siempre mejores respuestas que las largas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l1a', this, false)">Claude no tiene acceso a información específica de ninguna industria</div>
            </div>
            <div class="quiz-feedback" id="quiz_m0l1a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m0l1b">
            <div class="quiz-label">Quiz · Lección 01</div>
            <div class="quiz-question">¿Con qué se compara a Claude en esta lección?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l1b', this, false)">Un motor de búsqueda con inteligencia artificial</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l1b', this, false)">Un asistente virtual que aprende de cada conversación</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l1b', this, true)">Un consultor senior brillante que llega a tu empresa sin conocerla</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l1b', this, false)">Una base de datos inteligente con respuestas predefinidas</div>
            </div>
            <div class="quiz-feedback" id="quiz_m0l1b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Que Claude no sabe nada de ti hasta que se lo dices</li>
                <li>Que el contexto transforma el tipo de respuesta que recibes</li>
                <li>Que la diferencia entre usuario básico y avanzado no es la pregunta — es cuánto contexto la acompaña</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 2</strong> vas a entender por qué Claude "se olvida" de lo que dijiste en conversaciones largas — y cómo evitarlo.</div>
        </div>
        `
    },

    {
        id: 'l02', module: 'Módulo 0 · El Modelo Mental', tag: 'tag-m0', tagLabel: 'MÓDULO 0',
        title: 'Por qué Claude "se olvida" de lo que dijiste — y cómo evitarlo',
        subtitle: 'Context Window, Context Rot y la regla de una conversación por tarea',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué es un token, un Context Window y por qué tienen límite</li>
                <li>Qué es el Context Rot y cómo reconocer sus síntomas</li>
                <li>La regla práctica que elimina este problema para siempre</li>
                <li>Cómo usar /compact para recuperar calidad en conversaciones largas</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL FENÓMENO QUE NADIE TE EXPLICÓ</div>
            <div class="aha-quote">"Claude no se volvió peor. Su escritorio se llenó."</div>
            <div class="aha-author">— La explicación del Context Rot</div>
            <div class="aha-body">Cuando Claude empieza a repetirse, a ignorar instrucciones que diste hace 20 mensajes, a dar respuestas más genéricas — no es un error de Claude. Es que el espacio de trabajo (context window) está tan lleno que perdió atención sobre el centro de la conversación.</div>
        </div>

        <div class="content-card">
            <h3>Tres conceptos que necesitas tener claros</h3>
            <ol class="concept-list">
                <li><strong>Token:</strong> unidad mínima de texto. Aproximadamente 3-4 caracteres. Cada palabra que escribes y cada respuesta de Claude consume tokens.</li>
                <li><strong>Context Window:</strong> el "escritorio de trabajo" de Claude. En Claude Pro: 200,000 tokens — equivalente a una novela entera. Todo el historial de la conversación ocupa ese espacio.</li>
                <li><strong>Context Rot:</strong> cuando el escritorio supera el 50-60% de capacidad, Claude pierde atención sobre el centro de la conversación. Recuerda bien el principio y los últimos mensajes — pero lo del medio se difumina.</li>
            </ol>
        </div>

        <div class="content-card tip">
            <h3>Los síntomas del Context Rot</h3>
            <ul>
                <li>Claude empieza a repetir información ya dada</li>
                <li>Ignora restricciones que pediste hace 15-20 mensajes</li>
                <li>Las respuestas se vuelven más genéricas y menos específicas</li>
                <li>Sientes que "se volvió peor" en comparación con el inicio de la conversación</li>
            </ul>
            <p><strong>La regla práctica:</strong> una conversación por tarea. Cuando terminas una tarea y empiezas otra, abres conversación nueva. Si la conversación se alargó, usas <code>/compact</code> para comprimir el historial y liberar espacio.</p>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU TURNO</div>
            <div class="next-step-body">
                <p>Revisa tus últimas 5 conversaciones con Claude. ¿Alguna tiene más de 20 intercambios? Identifica si tiene síntomas de Context Rot: instrucciones ignoradas, respuestas más genéricas, repetición.</p>
                <p><strong>Criterio de éxito:</strong> Puedes identificar al menos una conversación donde aplicarías la regla de "una conversación por tarea" si pudieras hacerlo de nuevo.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_m0l2a">
            <div class="quiz-label">Quiz · Lección 02</div>
            <div class="quiz-question">¿Qué es el "Context Rot" en Claude?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l2a', this, false)">Un error técnico que borra el historial de la conversación</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l2a', this, true)">La degradación de calidad que ocurre cuando el context window se llena demasiado y Claude pierde atención sobre el centro de la conversación</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l2a', this, false)">Un virus que afecta las respuestas de Claude en conversaciones largas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l2a', this, false)">El proceso automático de compresión que Claude aplica después de 100 mensajes</div>
            </div>
            <div class="quiz-feedback" id="quiz_m0l2a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m0l2b">
            <div class="quiz-label">Quiz · Lección 02</div>
            <div class="quiz-question">¿Cuál es la solución práctica principal para evitar el Context Rot?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l2b', this, false)">Escribir mensajes más cortos y concisos en cada turno</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l2b', this, false)">Usar Claude en ventanas de incógnito para reiniciar el contexto</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l2b', this, true)">Abrir una conversación nueva para cada tarea diferente y usar /compact cuando la conversación se alarga</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l2b', this, false)">Actualizar el plan de suscripción para obtener un context window mayor</div>
            </div>
            <div class="quiz-feedback" id="quiz_m0l2b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Qué es un token, un Context Window y el Context Rot</li>
                <li>Cómo reconocer los síntomas del Context Rot en una conversación</li>
                <li>La regla de una conversación por tarea y el comando /compact</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 3</strong> vas a entender qué cambió en Claude 4.x y por qué algunos usuarios sienten que "se volvió peor" cuando en realidad se volvió más preciso — pero requiere mejores prompts.</div>
        </div>
        `
    },

    {
        id: 'l03', module: 'Módulo 0 · El Modelo Mental', tag: 'tag-m0', tagLabel: 'MÓDULO 0',
        title: 'Claude no es el mismo de antes — esto cambió y nadie te lo dijo',
        subtitle: 'El cambio de Claude 3.x a 4.x y los 5 elementos del prompt efectivo',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué cambió exactamente entre Claude 3.x y Claude 4.x</li>
                <li>Por qué usuarios que migraron sienten que "se volvió peor" — y por qué están equivocados</li>
                <li>Los 5 elementos de un prompt efectivo en Claude 4.x</li>
                <li>El elemento más subestimado (que elimina el 80% de las correcciones)</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LO QUE CAMBIÓ</div>
            <div class="aha-quote">"Claude 4.x no adivina. Lo que no le pides, no lo hace."</div>
            <div class="aha-author">— La diferencia entre Claude 3.x y 4.x en una línea</div>
            <div class="aha-body">Claude 3.x era creativo por defecto: agregaba cosas que no pediste porque asumía que las querrías. Claude 4.x es literalmente obediente: hace exactamente lo que pediste, ni más, ni menos. Esto no es un error — es una decisión deliberada. Pero si nadie te lo explicó, llevas meses frustrado sin saber por qué.</div>
        </div>

        <div class="content-card">
            <h3>Los 5 elementos del prompt efectivo en Claude 4.x</h3>
            <ol class="concept-list">
                <li><strong>Rol</strong> — quién es Claude en esta conversación. <em>"Eres un consultor de ventas senior"</em> activa un tipo de razonamiento distinto a <em>"eres un copywriter"</em>.</li>
                <li><strong>Contexto</strong> — qué sabe que necesita saber. Tu industria, tu cliente, tu situación. Sin esto, Claude rellena con suposiciones genéricas.</li>
                <li><strong>Tarea</strong> — qué hace exactamente. Un verbo de acción + el objeto + el alcance. No "ayúdame" sino "redacta / analiza / genera / critica".</li>
                <li><strong>Formato</strong> — cómo entrega el resultado. Lista, tabla, párrafos, 3 opciones, máximo N palabras.</li>
                <li><strong>Restricción</strong> — qué NO debe hacer. Este es el elemento más subestimado. Elimina el 80% de las correcciones que hacías antes de tenerlo.</li>
            </ol>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">✉️</span><div>
                <h3>El mismo prompt, dos versiones</h3>
                <p><strong>Sin los 5 elementos:</strong> "Mejora este correo" → Respuesta mínima y literal. Claude no sabe para quién es el correo, qué tono quieres, qué no debe incluir.</p>
                <p><strong>Con los 5 elementos:</strong> "Eres experto en comunicación ejecutiva [ROL]. Tengo que reabrir conversación con un cliente que lleva 3 semanas sin responder [CONTEXTO]. Reescríbelo en tono profesional y cálido [TAREA], máximo 5 líneas [FORMATO], sin mencionar que lleva semanas sin responder y sin sonar desesperado [RESTRICCIÓN]."</p>
                <p><strong>Resultado:</strong> Un correo que enviarías sin editarlo.</p>
            </div></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU TURNO</div>
            <div class="next-step-body">
                <p>Toma el prompt más frecuente que usas con Claude — el que abres casi automáticamente. Reescríbelo con los 5 elementos. Envíalo y compara con tu versión anterior.</p>
                <p><strong>Criterio de éxito:</strong> La nueva respuesta no requiere ninguna corrección antes de poder usarla.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_m0l3a">
            <div class="quiz-label">Quiz · Lección 03</div>
            <div class="quiz-question">¿Cuál es el cambio principal de comportamiento entre Claude 3.x y Claude 4.x?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l3a', this, false)">Claude 4.x es más creativo y agrega información adicional que el usuario no pidió</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l3a', this, true)">Claude 4.x es literalmente obediente: hace exactamente lo pedido, sin agregar ni quitar nada no solicitado</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l3a', this, false)">Claude 4.x tiene acceso a internet en tiempo real para verificar datos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l3a', this, false)">Claude 4.x recuerda automáticamente todas las conversaciones anteriores</div>
            </div>
            <div class="quiz-feedback" id="quiz_m0l3a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m0l3b">
            <div class="quiz-label">Quiz · Lección 03</div>
            <div class="quiz-question">¿Cuál es el elemento más subestimado de los 5 en un prompt efectivo?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l3b', this, false)">El Rol que se le asigna a Claude</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l3b', this, false)">El Contexto que se le proporciona</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l3b', this, false)">El Formato del output esperado</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l3b', this, true)">La Restricción — lo que NO debe hacer, que elimina el 80% de las correcciones</div>
            </div>
            <div class="quiz-feedback" id="quiz_m0l3b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Por qué Claude 4.x requiere prompts más completos que la versión anterior</li>
                <li>Los 5 elementos: Rol, Contexto, Tarea, Formato, Restricción</li>
                <li>Que la Restricción es el elemento que más correcciones elimina</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 4</strong> aprendes el vocabulario técnico de 20 términos que separan al usuario básico del avanzado — y construyes tu Glosario Vivo.</div>
        </div>
        `
    },

    {
        id: 'l04', module: 'Módulo 0 · El Modelo Mental', tag: 'tag-m0', tagLabel: 'MÓDULO 0',
        title: '20 términos que separan al usuario básico del usuario avanzado',
        subtitle: 'El vocabulario técnico que necesitas para diagnosticar, aprender y evolucionar solo',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Los 20 términos técnicos de Claude organizados por módulo</li>
                <li>Cada término en el contexto de un problema real que ya viviste</li>
                <li>Cómo crear tu "Glosario Vivo" en el Project "Mi sistema Claude"</li>
                <li>Por qué el vocabulario técnico es la llave para seguir aprendiendo solo</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>Los primeros 5 — ya los conoces de este módulo</h3>
            <ul>
                <li><strong>Token</strong> — unidad mínima de texto (~3-4 caracteres). Todo en la conversación consume tokens.</li>
                <li><strong>Context Window</strong> — el escritorio de trabajo de Claude (200k tokens en Pro).</li>
                <li><strong>Context Rot</strong> — degradación de calidad cuando el escritorio se llena.</li>
                <li><strong>Hallucination</strong> — cuando Claude inventa información plausible pero falsa con aparente confianza.</li>
                <li><strong>Prompt Injection</strong> — instrucción maliciosa en contenido externo que intenta manipular a Claude.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>Los siguientes 8 — los verás en el Módulo 1 (Chat)</h3>
            <ul>
                <li><strong>Projects</strong> — workspace persistente con instrucciones maestras y knowledge base.</li>
                <li><strong>Memory</strong> — Claude recuerda tus preferencias entre sesiones (3 capas).</li>
                <li><strong>Skills</strong> — instrucciones reutilizables para tus procesos más frecuentes.</li>
                <li><strong>Artifacts</strong> — entregables autónomos (apps HTML, dashboards, SVGs) publicables con link.</li>
                <li><strong>Research Mode</strong> — investigación encadenada con búsquedas múltiples. Hasta 45 minutos.</li>
                <li><strong>Extended Thinking</strong> — razonamiento profundo. Consume 3-5x más tokens.</li>
                <li><strong>RAG</strong> — búsqueda relevante en tu base de documentos. Activo automáticamente en Projects.</li>
                <li><strong>System Prompt</strong> — instrucciones que Claude recibe antes de iniciar la conversación.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>Los siguientes 4 — los verás en el Módulo 2 (Co-work)</h3>
            <ul>
                <li><strong>Role Prompting</strong> — asignarle a Claude un rol de experto. Mejora el foco y la autoridad.</li>
                <li><strong>Few-Shot Prompting</strong> — dar 2-3 ejemplos para que Claude replique ese formato exacto.</li>
                <li><strong>Chain-of-Thought</strong> — pedirle que razone paso a paso antes de responder.</li>
                <li><strong>MCP</strong> — el "USB-C de la IA". Conecta Claude con herramientas externas. +300 servicios.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>Los últimos 4 — los verás en el Módulo 3 (Code)</h3>
            <ul>
                <li><strong>Agentic</strong> — modo donde Claude toma decisiones y ejecuta acciones en secuencia autónomamente.</li>
                <li><strong>CLAUDE.md</strong> — archivo que Claude Code lee al inicio de cada sesión. Su contrato maestro.</li>
                <li><strong>Sub-agent</strong> — múltiples instancias de Claude trabajando en paralelo bajo un agente líder.</li>
                <li><strong>Prompt Caching</strong> — Claude guarda partes repetitivas en memoria rápida. Reduce costos hasta 90%.</li>
            </ul>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU TURNO — Crea tu Glosario Vivo</div>
            <div class="next-step-body">
                <p><strong>Parte 1:</strong> Crea el Project "Mi sistema Claude" en Claude.ai. Instrucción inicial: "Este es mi espacio de aprendizaje del curso Claude Sistema. Guarda aquí mis notas, glosario y plantillas."</p>
                <p><strong>Parte 2:</strong> Dentro del Project, pídele a Claude que cree un Glosario Vivo con los 20 términos listados, dejando espacio en blanco después de cada nombre para que tú lo llenes con tus propias palabras.</p>
                <p><strong>Criterio de éxito:</strong> Tu Project existe, tiene el Glosario Vivo, y los primeros 5 términos están escritos en tus propias palabras — no copiados de una definición académica.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_m0l4a">
            <div class="quiz-label">Quiz · Lección 04</div>
            <div class="quiz-question">¿Qué es el "Few-Shot Prompting"?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l4a', this, false)">Usar Claude con mensajes muy cortos para obtener respuestas más rápidas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l4a', this, true)">Dar 2-3 ejemplos dentro del prompt para que Claude replique exactamente ese formato o estilo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l4a', this, false)">Hacer 3 preguntas simultáneas en un solo mensaje para mayor eficiencia</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l4a', this, false)">Aceptar solo las primeras respuestas de Claude sin solicitar revisiones</div>
            </div>
            <div class="quiz-feedback" id="quiz_m0l4a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m0l4b">
            <div class="quiz-label">Quiz · Lección 04</div>
            <div class="quiz-question">¿Qué es CLAUDE.md?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l4b', this, false)">Un documento de ayuda oficial de Anthropic sobre cómo usar Claude</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l4b', this, false)">Una extensión de archivo especial que Claude puede leer automáticamente en cualquier carpeta</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l4b', this, true)">Un archivo de texto en la carpeta de proyecto que Claude Code lee automáticamente al inicio de cada sesión — es su contrato maestro de comportamiento</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m0l4b', this, false)">La documentación técnica de la API de Claude para desarrolladores</div>
            </div>
            <div class="quiz-feedback" id="quiz_m0l4b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Los 20 términos técnicos de Claude organizados por módulo</li>
                <li>Cada término en contexto — no como definición abstracta</li>
                <li>Cómo crear y mantener tu Glosario Vivo en el Project "Mi sistema Claude"</li>
            </ul>
            <div class="okr-next">→ El <strong>Módulo 0 está completo.</strong> Antes de entrar al Módulo 1 (Chat), completa la auditoría personal: ¿cuál de los 4 dolores del usuario intermedio te ha costado más tokens? ¿Qué vas a hacer diferente desde mañana?</div>
        </div>
        `
    },

    // ==========================================================
    // MÓDULO 1 — CHAT: EL PENSADOR (lecciones 5-11)
    // ==========================================================
    {
        id: 'l05', module: 'Módulo 1 · Chat: El Pensador', tag: 'tag-m1', tagLabel: 'MÓDULO 1',
        title: 'Anatomía de un prompt efectivo — los 5 elementos que cambian todo',
        subtitle: 'El brief profesional que genera resultados predecibles en lugar de "a veces funciona, a veces no"',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>La diferencia entre un prompt vago y un brief profesional</li>
                <li>Los 5 elementos con ejemplos concretos de cada uno</li>
                <li>Cómo el mismo prompt con y sin los 5 elementos produce resultados radicalmente distintos</li>
                <li>El criterio de éxito para saber si tu prompt funciona</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA ANALOGÍA DE LA PAPELERÍA</div>
            <div class="aha-quote">"Claude no adivina — responde al brief que le das. Mejora el brief y el resultado se mejora solo."</div>
            <div class="aha-author">— El principio del Módulo 1</div>
            <div class="aha-body">Entras a una papelería y dices: "Necesito algo para escribir." El empleado te muestra marcadores de colores. Tú querías una pluma de firma para contratos. Ambos hicieron su trabajo — el problema fue el brief. Con los 5 elementos, el empleado te da exactamente lo que buscabas sin adivinanzas.</div>
        </div>

        <div class="content-card">
            <h3>Los 5 elementos — uno por uno</h3>
            <ol class="concept-list">
                <li><strong>ROL:</strong> Le dices a Claude desde qué perspectiva responder. No es decorativo — cambia el tipo de razonamiento que activa. "Actúa como consultor de estrategia" genera un resultado distinto a "actúa como copywriter de respuesta directa" para el mismo texto.</li>
                <li><strong>CONTEXTO:</strong> La información de fondo que necesita para no adivinar. Quién eres, cuál es la situación, qué ya intentaste, para quién es el entregable.</li>
                <li><strong>TAREA:</strong> Un verbo de acción + el objeto + el alcance. No "ayúdame con un texto" sino "redacta un correo de seguimiento de 150 palabras".</li>
                <li><strong>FORMATO:</strong> Cómo quieres el output. Lista con viñetas, tabla, párrafos, tres opciones, asunto incluido. Si no lo dices, Claude decide — y puede decidir distinto cada vez.</li>
                <li><strong>RESTRICCIÓN:</strong> Lo que NO quieres, el tono que no debe usar, la longitud máxima, los supuestos que no debe hacer. El elemento más subestimado. Elimina el 80% de las iteraciones innecesarias.</li>
            </ol>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">✉️</span><div>
                <h3>El correo de seguimiento — antes y después</h3>
                <p><strong>Sin los 5 elementos:</strong> "Escríbeme un correo para mi cliente." → Resultado genérico: "Estimado cliente, espero que se encuentre bien. Me permito hacerle seguimiento..."</p>
                <p><strong>Con los 5 elementos:</strong></p>
                <p>ROL: Consultor de comunicación especializado en clientes corporativos.<br>
                CONTEXTO: Consultor independiente de estrategia financiera. Llamada de diagnóstico hace 5 días. El cliente dijo que estaba interesado pero necesitaba consultarlo con su socio. Sin respuesta desde entonces.<br>
                TAREA: Redacta un correo de seguimiento.<br>
                FORMATO: Máximo 120 palabras. Asunto incluido. Un solo párrafo.<br>
                RESTRICCIÓN: Sin "espero que estés bien" ni "quería hacerte seguimiento". Sin sonar ansioso. Tono profesional y cálido.</p>
                <p><strong>Resultado:</strong> Un correo que lo enviarías hoy mismo, sin editarlo.</p>
            </div></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU TURNO</div>
            <div class="next-step-body">
                <p>Toma la última tarea que le pediste a Claude y que no te dio el resultado que esperabas. Reescríbela con los 5 elementos: ROL, CONTEXTO, TAREA, FORMATO, RESTRICCIÓN.</p>
                <p><strong>Criterio de éxito:</strong> La nueva respuesta no requiere más de un 20% de edición antes de poder usarla. Si todavía necesitas corregir más, ajusta la RESTRICCIÓN o el CONTEXTO y vuelve a enviarlo.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_m1l5a">
            <div class="quiz-label">Quiz · Lección 05</div>
            <div class="quiz-question">¿Cuál de estos prompts usa correctamente los 5 elementos?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l5a', this, false)">Escríbeme un correo de seguimiento para mi cliente</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l5a', this, true)">Eres consultor de comunicación ejecutiva. Tengo un cliente de servicios financieros que no respondió mi propuesta en 5 días. Redacta un correo de reactivación de máximo 100 palabras con asunto incluido. Sin frases de cortesía de apertura y sin mencionar los días transcurridos.</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l5a', this, false)">Necesito mejorar mi comunicación con clientes</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l5a', this, false)">Actúa como experto y ayúdame con mi correo de negocios</div>
            </div>
            <div class="quiz-feedback" id="quiz_m1l5a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m1l5b">
            <div class="quiz-label">Quiz · Lección 05</div>
            <div class="quiz-question">¿A qué se compara un prompt efectivo en esta lección?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l5b', this, false)">A una búsqueda de Google bien formulada con operadores booleanos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l5b', this, true)">A un brief profesional que le das a un nuevo contratado, con toda la información que necesita para entregar exactamente lo que buscas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l5b', this, false)">A una receta de cocina con ingredientes específicos y pasos detallados</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l5b', this, false)">A un contrato legal con términos, condiciones y penalidades</div>
            </div>
            <div class="quiz-feedback" id="quiz_m1l5b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Los 5 elementos del prompt efectivo: Rol, Contexto, Tarea, Formato, Restricción</li>
                <li>Por qué la Restricción es el elemento más impactante y más subestimado</li>
                <li>El criterio de éxito: respuesta usable con menos del 20% de edición</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 6</strong> vas a ver por qué trabajar en Claude sin Projects es el error más caro que comete el usuario intermedio — y cómo terminar con eso hoy.</div>
        </div>
        `
    },

    {
        id: 'l06', module: 'Módulo 1 · Chat: El Pensador', tag: 'tag-m1', tagLabel: 'MÓDULO 1',
        title: 'Projects: el error más caro que comete todo usuario intermedio',
        subtitle: 'Cómo eliminar los 250 setups innecesarios al año con instrucciones maestras persistentes',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Por qué trabajar sin Projects cuesta tiempo y tokens innecesariamente</li>
                <li>Los 3 componentes de un Project: instrucciones maestras, knowledge base, historial</li>
                <li>Las 4 partes de un contrato de comportamiento efectivo</li>
                <li>Cómo nombrar archivos del knowledge base para que Claude los encuentre mejor</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL COSTO OCULTO</div>
            <div class="aha-quote">"250 setups innecesarios al año — ese es el costo de no usar Projects."</div>
            <div class="aha-author">— El cálculo que cambia el comportamiento</div>
            <div class="aha-body">5 conversaciones al día × 5 días × 10 minutos de setup cada vez = 250 setups anuales. Cientos de tokens desperdiciados. Y resultados inconsistentes porque nunca das exactamente el mismo contexto dos veces. Los Projects terminan con eso.</div>
        </div>

        <div class="content-card">
            <h3>Los 3 componentes de un Project</h3>
            <ol class="concept-list">
                <li><strong>Instrucciones maestras</strong> — el contrato de comportamiento de Claude para ese contexto. Vive en cada conversación del Project sin que tengas que repetirlo.</li>
                <li><strong>Knowledge base</strong> — archivos que Claude puede consultar en cualquier conversación. Tu brief de cliente, tu guía de marca, tu propuesta estándar.</li>
                <li><strong>Historial de conversaciones</strong> — todas las sesiones del Project organizadas y buscables.</li>
            </ol>
        </div>

        <div class="content-card tip">
            <h3>Las 4 partes de las instrucciones maestras efectivas</h3>
            <ol class="concept-list">
                <li><strong>Rol:</strong> Qué eres en este contexto y desde qué perspectiva razonas.</li>
                <li><strong>Criterios de éxito:</strong> Cómo sabe Claude cuándo lo hizo bien.</li>
                <li><strong>Restricciones:</strong> Lo que nunca debe hacer en este Project.</li>
                <li><strong>Formato de output:</strong> La estructura estándar de las respuestas.</li>
            </ol>
            <p><strong>Regla del knowledge base:</strong> nombra los archivos como si le explicaras a un asistente qué hay adentro sin que pueda abrirlos. <code>Brief-cliente-EmpresaABC-finanzas-2026.pdf</code> es infinitamente mejor que <code>documento1.pdf</code>.</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">📁</span><div>
                <h3>Ejemplo de instrucciones maestras completas</h3>
                <p>ROL: Eres mi asistente senior de consultoría estratégica para empresas medianas del sector retail mexicano.</p>
                <p>CRITERIOS DE ÉXITO: Un entregable está listo cuando puede enviarse al cliente sin edición: lenguaje ejecutivo, sin jerga, concreto y con datos cuando los hay.</p>
                <p>RESTRICCIONES: No uses viñetas para todo. No des recomendaciones sin justificación. No uses las palabras "robusto" ni "sinergias".</p>
                <p>FORMATO: Si es documento: Situación → Diagnóstico → Recomendación → Siguiente paso. Si es correo: máximo 150 palabras, sin párrafo de apertura de cortesía.</p>
            </div></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU TURNO</div>
            <div class="next-step-body">
                <p>Crea tu primer Project para tu cliente más recurrente o área de trabajo principal:</p>
                <ol>
                    <li>Nombre: cliente o área + contexto específico</li>
                    <li>Instrucciones maestras con las 4 partes: rol, criterios, restricciones, formato</li>
                    <li>Al menos un documento en el knowledge base con nombre descriptivo</li>
                    <li>Haz la misma pregunta con y sin el Project — compara</li>
                </ol>
                <p><strong>Criterio de éxito:</strong> La respuesta dentro del Project no requiere que expliques ningún contexto adicional.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_m1l6a">
            <div class="quiz-label">Quiz · Lección 06</div>
            <div class="quiz-question">¿Cuál es la función principal de las instrucciones maestras en un Project?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l6a', this, false)">Guardar el historial de todas las conversaciones del Project</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l6a', this, true)">Definir el contrato de comportamiento permanente de Claude para ese contexto, sin tener que repetirlo en cada conversación</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l6a', this, false)">Subir y organizar los documentos de referencia del cliente</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l6a', this, false)">Establecer el límite máximo de tokens por conversación dentro del Project</div>
            </div>
            <div class="quiz-feedback" id="quiz_m1l6a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m1l6b">
            <div class="quiz-label">Quiz · Lección 06</div>
            <div class="quiz-question">¿Por qué importa el nombre que le das a los archivos del knowledge base?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l6b', this, false)">Por razones de seguridad: nombres descriptivos evitan accesos no autorizados</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l6b', this, false)">Para que el archivo ocupe menos espacio en el servidor de Anthropic</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l6b', this, true)">Porque Claude usa el nombre del archivo para entender qué contiene y cuándo es relevante consultarlo — un nombre descriptivo mejora la recuperación de información</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l6b', this, false)">Para que el historial de conversaciones sea más fácil de buscar por fecha</div>
            </div>
            <div class="quiz-feedback" id="quiz_m1l6b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Los 3 componentes de un Project y para qué sirve cada uno</li>
                <li>Las 4 partes de las instrucciones maestras efectivas</li>
                <li>Cómo nombrar archivos del knowledge base para que Claude los encuentre mejor</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 7</strong> aprendes Memory y Skills — las dos funciones que más confunde el usuario intermedio y que, bien usadas, hacen que Claude se comporte como un asistente que te conoce de años.</div>
        </div>
        `
    },

    {
        id: 'l07', module: 'Módulo 1 · Chat: El Pensador', tag: 'tag-m1', tagLabel: 'MÓDULO 1',
        title: 'Memory y Skills — haz que Claude te conozca y trabaje a tu manera',
        subtitle: 'La diferencia entre que Claude recuerde quién eres y que trabaje como tú trabajas',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>La diferencia entre Memory y Skills — no son lo mismo</li>
                <li>Las 3 capas de Memory y sus límites críticos</li>
                <li>Cómo construir una Skill que elimina el setup de tu proceso más repetitivo</li>
                <li>El criterio de éxito para una Skill bien configurada</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA DISTINCIÓN CLAVE</div>
            <div class="aha-quote">"Memory es tu perfil. Skills es tu manual de operaciones."</div>
            <div class="aha-author">— La diferencia en una línea</div>
            <div class="aha-body">Memory responde: ¿Quién soy yo? Skills responde: ¿Cómo trabajo yo? Confundirlos lleva a configuraciones que no funcionan como se espera. Entenderlos como complementarios permite que Claude actúe como un asistente que te conoce y sabe cómo colaborar contigo.</div>
        </div>

        <div class="content-card">
            <h3>Memory — las 3 capas</h3>
            <ol class="concept-list">
                <li><strong>Capa 1 — Automática:</strong> Claude detecta y guarda lo relevante: tu nombre, profesión, empresa, preferencias de tono expresadas en conversación.</li>
                <li><strong>Capa 2 — Directa:</strong> Tú le dices explícitamente: "Recuerda que mis propuestas siempre van en dos páginas máximo." Claude lo guarda como memoria etiquetada.</li>
                <li><strong>Capa 3 — Controlada:</strong> Tú revisas, editas o eliminas lo que Claude tiene guardado desde Configuración → Memory.</li>
            </ol>
            <p><strong>Límites críticos:</strong> No funciona en API ni en Claude Code. No es retroactiva. Es personal, no compartida. Tiene límite de capacidad.</p>
        </div>

        <div class="content-card tip">
            <h3>Skills — tu manual de operaciones</h3>
            <p>Skills son instrucciones empaquetadas para tus procesos más frecuentes. Ejemplos por perfil:</p>
            <ul>
                <li><strong>Consultor:</strong> Skill "Propuesta comercial" (estructura, tono, secciones obligatorias), Skill "Informe ejecutivo" (formato 3 páginas, gráfica primero)</li>
                <li><strong>Coach:</strong> Skill "Plan de sesión" (estructura por etapa), Skill "Resumen de avances" (qué incluir, cómo documentar)</li>
                <li><strong>Creador de contenido:</strong> Skill "Post LinkedIn" (hook + desarrollo + CTA), Skill "Newsletter" (estructura, apertura, cierre)</li>
            </ul>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU TURNO</div>
            <div class="next-step-body">
                <p><strong>Parte 1:</strong> Ve a Configuración → Memory. Revisa y limpia lo desactualizado. Agrega explícitamente 3 cosas que siempre quieres que Claude recuerde de cómo trabajas.</p>
                <p><strong>Parte 2:</strong> Crea un Skill para tu proceso más repetitivo de los últimos 30 días con: nombre claro, estructura del output, tono específico y al menos 2 restricciones concretas.</p>
                <p><strong>Criterio de éxito:</strong> Activa el Skill en conversación nueva y obtén el output en el formato correcto sin instrucciones adicionales sobre estructura o tono.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_m1l7a">
            <div class="quiz-label">Quiz · Lección 07</div>
            <div class="quiz-question">¿Cuál es la diferencia principal entre Memory y Skills en Claude?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l7a', this, false)">Memory guarda documentos; Skills guarda instrucciones de texto</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l7a', this, true)">Memory hace que Claude te recuerde a ti (tu perfil); Skills hace que Claude trabaje como tú trabajas (tu proceso)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l7a', this, false)">Memory funciona en todos los planes; Skills solo en Claude Pro</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l7a', this, false)">Memory se configura una vez; Skills hay que actualizarla en cada conversación</div>
            </div>
            <div class="quiz-feedback" id="quiz_m1l7a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m1l7b">
            <div class="quiz-label">Quiz · Lección 07</div>
            <div class="quiz-question">¿Cuál de estos es un límite crítico de Memory que debes conocer?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l7b', this, false)">Memory solo guarda hasta 10 preferencias simultáneas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l7b', this, true)">Memory no funciona en API ni en Claude Code — solo en Claude.ai</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l7b', this, false)">Memory se borra automáticamente cada 30 días si no se actualiza</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l7b', this, false)">Memory es compartida entre todos los usuarios de una misma organización</div>
            </div>
            <div class="quiz-feedback" id="quiz_m1l7b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>La diferencia entre Memory (tu perfil) y Skills (tu manual de operaciones)</li>
                <li>Las 3 capas de Memory y sus límites críticos</li>
                <li>Cómo construir una Skill que elimina el setup repetitivo de tu proceso principal</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 8</strong> aprendes Research Mode — la función que la mayoría de usuarios de pago no sabe que existe y que convierte a Claude en tu investigador personal de 45 minutos.</div>
        </div>
        `
    },

    {
        id: 'l08', module: 'Módulo 1 · Chat: El Pensador', tag: 'tag-m1', tagLabel: 'MÓDULO 1',
        title: 'Research Mode — tu investigador personal de 45 minutos',
        subtitle: 'Investigación encadenada con citas verificables: la diferencia entre un resumen y un análisis',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Por qué Research Mode es cualitativamente diferente a "Claude con internet"</li>
                <li>Research estándar vs. Advanced Research — cuándo usar cada uno</li>
                <li>Cuándo SÍ y cuándo definitivamente NO usar Research Mode</li>
                <li>El truco de las instrucciones de formato previas que multiplica la utilidad del output</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA DISTINCIÓN QUE IMPORTA</div>
            <div class="aha-quote">"Research Mode no es Claude con internet — es Claude como investigador que razona mientras busca."</div>
            <div class="aha-author">— La diferencia entre un resumen y un análisis</div>
            <div class="aha-body">Sin Research Mode, Claude responde con lo que ya sabe. Con Research Mode, descompone tu pregunta en subpreguntas, busca, analiza resultados, detecta contradicciones, cruza fuentes y repite el ciclo. Cada búsqueda informa la siguiente. El resultado no es un resumen — es una investigación.</div>
        </div>

        <div class="content-card">
            <h3>Cuándo SÍ usar Research Mode</h3>
            <ul>
                <li>Investigar un sector antes de una propuesta</li>
                <li>Analizar la competencia de un cliente antes de una sesión estratégica</li>
                <li>Verificar datos para un informe que vas a presentar</li>
                <li>Entender el contexto regulatorio de un tema</li>
                <li>Preparar preguntas inteligentes para una reunión importante</li>
            </ul>
            <h3>Cuándo definitivamente NO usar Research Mode</h3>
            <ul>
                <li>Cuando la respuesta ya está en el conocimiento de Claude</li>
                <li>Cuando necesitas el resultado ahora (tarda 5-45 minutos)</li>
                <li>Para tareas de creación pura: redactar, generar, analizar con información que ya tienes</li>
                <li>Cuando tu pregunta es ambigua — Research Mode amplifica la calidad de la pregunta, buena o mala</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>El truco que la mayoría no usa: instrucciones de formato previas</h3>
            <p>Antes de que empiece a trabajar, dile cómo quieres el output. Ejemplo:</p>
            <p><em>"Antes de empezar, quiero que el reporte final tenga esta estructura: 1) Resumen ejecutivo en 150 palabras, 2) Hallazgos clave con fuentes citadas, 3) Implicaciones para mi negocio, 4) Preguntas que quedaron sin responder."</em></p>
            <p>Eso es lo que recibes al final — listo para usar o compartir.</p>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU TURNO</div>
            <div class="next-step-body">
                <p>Identifica una decisión pendiente para los próximos 30 días que requiera información que no tienes. Activa Research Mode, escribe primero tus instrucciones de formato, luego la pregunta específica con alcance definido.</p>
                <p><strong>Criterio de éxito:</strong> El reporte puede compartirse con un cliente o usarse para tomar una decisión sin trabajo adicional de reformateo ni búsqueda de fuentes.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_m1l8a">
            <div class="quiz-label">Quiz · Lección 08</div>
            <div class="quiz-question">¿Qué hace diferente a Research Mode de una búsqueda web normal?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l8a', this, false)">Research Mode es más rápido y devuelve resultados en menos de 30 segundos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l8a', this, false)">Research Mode accede a bases de datos privadas no disponibles en internet</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l8a', this, true)">Research Mode descompone la pregunta en subpreguntas, razona sobre los resultados de cada búsqueda, cruza fuentes y retroalimenta cada búsqueda con lo aprendido antes — es investigación encadenada</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l8a', this, false)">Research Mode solo funciona en inglés para obtener mejores resultados</div>
            </div>
            <div class="quiz-feedback" id="quiz_m1l8a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m1l8b">
            <div class="quiz-label">Quiz · Lección 08</div>
            <div class="quiz-question">¿Cuál es el "truco" más útil al activar Research Mode?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l8b', this, false)">Activar Extended Thinking simultáneamente para mejor análisis</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l8b', this, true)">Proporcionar instrucciones de formato del output antes de que empiece a investigar</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l8b', this, false)">Escribir la pregunta en inglés para acceder a más fuentes internacionales</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l8b', this, false)">Subir documentos de contexto antes de activar el modo de investigación</div>
            </div>
            <div class="quiz-feedback" id="quiz_m1l8b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Por qué Research Mode es investigación encadenada, no "Google integrado"</li>
                <li>En qué casos usar Research Mode y en cuáles definitivamente no</li>
                <li>El truco de las instrucciones de formato previas que convierte el output en entregable directo</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 9</strong> aprendes Artifacts — la función que convierte a un profesional independiente en alguien que entrega herramientas interactivas, no solo documentos.</div>
        </div>
        `
    },

    {
        id: 'l09', module: 'Módulo 1 · Chat: El Pensador', tag: 'tag-m1', tagLabel: 'MÓDULO 1',
        title: 'Artifacts — crea y publica herramientas sin saber programar',
        subtitle: 'Calculadoras, dashboards y herramientas interactivas publicables con un link — sin código',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué es un Artifact y por qué es diferente a texto en el chat</li>
                <li>Los tipos de Artifacts que puedes crear: HTML, React, SVG, Markdown</li>
                <li>Cómo publicar un Artifact con link público sin que el receptor necesite cuenta</li>
                <li>Casos de uso concretos por perfil: consultor, coach, creador de contenido</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LO QUE LA MAYORÍA NO SABE</div>
            <div class="aha-quote">"Un Artifact con link público convierte tu conocimiento en una herramienta que trabaja sin ti."</div>
            <div class="aha-author">— Sin código, sin servidor, sin explicación</div>
            <div class="aha-body">En la esquina superior del panel de Artifact hay un botón "Publicar". Al hacer clic, obtienes un link. Ese link abre una página limpia, sin marca de Claude, sin que el receptor necesite cuenta. Solo ve la herramienta funcionando. Eso no lo sabe el 90% de los usuarios de Claude Pro.</div>
        </div>

        <div class="content-card">
            <h3>Casos de uso por perfil</h3>
            <p><strong>Para el consultor:</strong></p>
            <ul>
                <li>Calculadora de ROI personalizada para el cliente</li>
                <li>Evaluador de madurez organizacional con puntuación automática</li>
                <li>Comparador de escenarios: ingresa dos opciones y compara costos, tiempos y riesgos</li>
            </ul>
            <p><strong>Para el coach:</strong></p>
            <ul>
                <li>Rueda de la vida interactiva con barras deslizables</li>
                <li>Diagnóstico de saboteadores con perfil automático al final</li>
            </ul>
            <p><strong>Para el creador de contenido:</strong></p>
            <ul>
                <li>Generador de ideas: el usuario ingresa tema y audiencia, recibe estructuras</li>
                <li>Checklist de revisión de artículo con porcentaje de completitud</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>El límite práctico para no-programadores</h3>
            <p>Si puedes describir con palabras qué debe hacer la herramienta, Claude puede construirla.</p>
            <p>Ejemplo de prompt que funciona sin conocimientos técnicos:</p>
            <p><em>"Crea un Artifact HTML interactivo: una calculadora de tarifa por hora para consultores independientes. El usuario ingresa: ingresos mensuales objetivo, horas disponibles al mes para trabajo de cliente, porcentaje de horas que se pierde en ventas y administración. La calculadora muestra: tarifa mínima por hora y tarifa recomendada (mínima + 30% de margen). Diseño limpio, colores azul marino y blanco."</em></p>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU TURNO</div>
            <div class="next-step-body">
                <p>Piensa en una herramienta que tus clientes necesitan calcular, evaluar o visualizar — algo que hoy explicas en sesión o haces en Excel. Pídele a Claude que lo construya como Artifact HTML. Luego:</p>
                <ol>
                    <li>Prueba que la lógica funcione correctamente</li>
                    <li>Publícalo con el botón de Share</li>
                    <li>Abre el link en modo incógnito</li>
                </ol>
                <p><strong>Criterio de éxito:</strong> El link funciona sin login y podrías enviárselo a un cliente hoy mismo.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_m1l9a">
            <div class="quiz-label">Quiz · Lección 09</div>
            <div class="quiz-question">¿Qué característica hace que los Artifacts sean especialmente útiles para profesionales independientes?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l9a', this, false)">Que se guardan automáticamente en Google Drive para compartir con el equipo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l9a', this, true)">Que se pueden publicar con un link público que cualquier persona puede usar sin tener cuenta en Claude</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l9a', this, false)">Que permiten colaborar en tiempo real con múltiples usuarios simultáneamente</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l9a', this, false)">Que se integran automáticamente con Notion, Slack y otras herramientas de productividad</div>
            </div>
            <div class="quiz-feedback" id="quiz_m1l9a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m1l9b">
            <div class="quiz-label">Quiz · Lección 09</div>
            <div class="quiz-question">¿Cuál es el límite práctico para crear Artifacts sin saber programar?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l9b', this, false)">Solo se pueden crear documentos de texto; las herramientas interactivas requieren conocimientos de HTML</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l9b', this, false)">Los Artifacts interactivos solo están disponibles en el plan Enterprise de Claude</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l9b', this, true)">Si puedes describir con palabras qué debe hacer la herramienta, Claude puede construirla — no se requieren conocimientos técnicos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l9b', this, false)">Se requiere conocimiento básico de JavaScript para cualquier Artifact interactivo</div>
            </div>
            <div class="quiz-feedback" id="quiz_m1l9b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Que un Artifact es un entregable autónomo publicable con link — no texto en el chat</li>
                <li>Cómo pedir a Claude que construya una herramienta interactiva en lenguaje natural</li>
                <li>Que cualquier Artifact puede publicarse con un link público sin que el receptor necesite cuenta</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 10</strong> aprendes Extended Thinking — la función más poderosa de Claude 4 y también la más fácil de usar mal.</div>
        </div>
        `
    },

    {
        id: 'l10', module: 'Módulo 1 · Chat: El Pensador', tag: 'tag-m1', tagLabel: 'MÓDULO 1',
        title: 'Extended Thinking — cuándo sí y cuándo definitivamente no',
        subtitle: 'El criterio de decisión exacto para saber cuándo vale la pena y cuándo estás tirando tokens',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué activa Extended Thinking en Claude y por qué cuesta más tokens</li>
                <li>Los 4 niveles de Adaptive Reasoning y cuándo usar cada uno</li>
                <li>Las tareas donde SÍ justifica el costo y las que definitivamente no</li>
                <li>La tabla de decisión que resuelve la duda en 10 segundos</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 DOS MODOS DE RESOLVER PROBLEMAS</div>
            <div class="aha-quote">"Extended Thinking es para problemas donde el proceso de razonamiento importa tanto como la respuesta."</div>
            <div class="aha-author">— Cuándo activarlo y cuándo no</div>
            <div class="aha-body">Si te preguntan tu nombre, respondes inmediatamente — no necesitas pensar. Si te dan un caso de negocio con 8 variables interdependientes, necesitas papel, tiempo y esquemas. Extended Thinking activa ese segundo modo en Claude. Pero activarlo para redactar un correo no lo hace mejor — solo lo encarece 3-5 veces.</div>
        </div>

        <div class="content-card">
            <h3>Los 4 niveles de Adaptive Reasoning</h3>
            <div style="overflow-x:auto;">
                <table style="width:100%;border-collapse:collapse;margin:12px 0;">
                    <tr style="background:#0a2540;color:#faf8f3;">
                        <th style="padding:10px;text-align:left;border:1px solid #2d5016;">Nivel</th>
                        <th style="padding:10px;text-align:left;border:1px solid #2d5016;">Cuándo usar</th>
                    </tr>
                    <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Standard</strong></td><td style="padding:8px;border:1px solid #ddd;">Escritura, resúmenes, brainstorming, tareas simples</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd;"><strong>High</strong></td><td style="padding:8px;border:1px solid #ddd;">Problemas con 2-3 variables o pros y contras</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd;"><strong>xHigh</strong></td><td style="padding:8px;border:1px solid #ddd;">Decisiones con múltiples restricciones, análisis complejos</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Max</strong></td><td style="padding:8px;border:1px solid #ddd;">Los problemas más complejos. Uso de tokens muy alto.</td></tr>
                </table>
            </div>
        </div>

        <div class="content-card tip">
            <h3>La regla de decisión rápida</h3>
            <p>Antes de activar Extended Thinking, hazte esta pregunta: <strong>¿esta tarea requiere razonamiento encadenado o solo ejecución competente?</strong></p>
            <ul>
                <li><strong>SÍ vale la pena:</strong> Matemáticas complejas con varios pasos, análisis de trade-offs con múltiples variables interdependientes, decisiones estratégicas con escenarios, debugging de lógica no obvia</li>
                <li><strong>NO vale la pena:</strong> Escritura creativa, preguntas con respuesta factual, tareas operativas (resumir, traducir, reformatear), brainstorming, conversaciones iterativas rápidas</li>
            </ul>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU TURNO</div>
            <div class="next-step-body">
                <p>Toma la decisión más compleja que tienes pendiente — algo con al menos 3 variables que se afectan entre sí. Activa xHigh. Construye el prompt con los 5 elementos e incluye todas las variables. Luego haz la misma pregunta sin Extended Thinking.</p>
                <p><strong>Criterio de éxito:</strong> La respuesta con Extended Thinking identifica al menos una implicación o conflicto entre variables que la respuesta estándar no menciona.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_m1l10a">
            <div class="quiz-label">Quiz · Lección 10</div>
            <div class="quiz-question">¿Cuánto más tokens consume Extended Thinking en nivel xHigh o Max comparado con Standard?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l10a', this, false)">El doble (2x) — es un incremento moderado y casi siempre justificable</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l10a', this, false)">10 veces más — por eso debe usarse con mucho cuidado</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l10a', this, true)">Entre 3 y 5 veces más — lo que justifica usarlo solo para problemas con razonamiento encadenado real</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l10a', this, false)">El mismo número de tokens pero tarda más tiempo en responder</div>
            </div>
            <div class="quiz-feedback" id="quiz_m1l10a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m1l10b">
            <div class="quiz-label">Quiz · Lección 10</div>
            <div class="quiz-question">¿Para cuál de estas tareas se recomienda activar Extended Thinking?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l10b', this, false)">Redactar un correo de seguimiento para un cliente</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l10b', this, false)">Resumir los 3 puntos principales de un artículo de 2 páginas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l10b', this, true)">Analizar si estructurar el negocio como Persona Física, S de RL con socio, o S de RL unipersonal, considerando ingresos, proyección de crecimiento, necesidad de contratar y requisitos fiscales del cliente</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l10b', this, false)">Generar 10 ideas de temas para el newsletter del próximo mes</div>
            </div>
            <div class="quiz-feedback" id="quiz_m1l10b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Los 4 niveles de Adaptive Reasoning y cuándo usar cada uno</li>
                <li>Que Extended Thinking cuesta 3-5x más tokens y solo vale para razonamiento encadenado real</li>
                <li>La pregunta de decisión: ¿requiere razonamiento encadenado o solo ejecución competente?</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 11</strong> integramos todo el Módulo 1 en un caso práctico en vivo: configurar un Project completo para un cliente real, desde instrucciones maestras hasta la prueba de fuego.</div>
        </div>
        `
    },

    {
        id: 'l11', module: 'Módulo 1 · Chat: El Pensador', tag: 'tag-m1', tagLabel: 'CASO PRÁCTICO',
        title: 'Tu primer Project de cliente — en vivo',
        subtitle: 'Instrucciones maestras + knowledge base + prueba de fuego: antes y después en tiempo real',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 EN ESTE CASO PRÁCTICO:</div>
            <ul>
                <li>Configurar un Project completo para un cliente real — paso a paso</li>
                <li>Escribir instrucciones maestras con las 5 secciones obligatorias</li>
                <li>La prueba de fuego: misma pregunta dentro y fuera del Project</li>
                <li>Construir tu sistema completo del Módulo 1 (4 componentes)</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL PRINCIPIO</div>
            <div class="aha-quote">"Un Project bien configurado no ahorra tiempo en esta conversación — lo ahorra en las próximas cien."</div>
            <div class="aha-author">— Por qué el setup inicial vale el tiempo que le inviertes</div>
            <div class="aha-body">El brief ya está escrito y ya funciona. Cada nueva conversación dentro del Project empieza exactamente donde tu estándar de trabajo quedó establecido — sin repetir contexto, sin correcciones de tono, sin ajustes de formato.</div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">🏗️</span><div>
                <h3>El Project paso a paso — demo documentada</h3>
                <p><strong>Paso 1 — Crear el Project:</strong> Nombre con área + cliente. "Consultoría de Operaciones — Distribuidora del Norte". El nombre incluye la especialidad y el cliente — cuando tengas 15 Projects lo encontrarás de inmediato.</p>
                <p><strong>Paso 2 — Instrucciones maestras (5 secciones):</strong></p>
                <ul style="font-size:0.9em;">
                    <li>ROL: Tu co-consultor especializado en operaciones. 15 años en supply chain. Piensas como operador, no como teórico.</li>
                    <li>SOBRE EL CLIENTE: Empresa familiar, 85 empleados. El dueño (Roberto, 52) toma todas las decisiones. Lenguaje directo. Desconfía del consultor que habla bonito.</li>
                    <li>CRITERIOS DE ÉXITO: Entregable listo para Roberto cuando: puede leerse en menos de 3 minutos, tiene recomendación clara (no opciones), los números están presentes.</li>
                    <li>RESTRICCIONES: Sin "transformar", "potenciar", "siguiente nivel". No des marcos teóricos sin aplicación inmediata.</li>
                    <li>FORMATO: Correos máx 120 palabras. Análisis: Situación → Problema raíz → Recomendación → Siguiente paso.</li>
                </ul>
                <p><strong>Paso 3 — Knowledge base:</strong> Subir con nombres descriptivos: <code>Brief-DistribuidoraNorte-contexto-negocio-2026.pdf</code>, <code>Guia-comunicacion-Roberto-preferencias-tono.pdf</code></p>
                <p><strong>Paso 4 — La prueba de fuego:</strong> Misma pregunta dentro y fuera del Project. La respuesta genérica necesita 4-5 correcciones. La del Project necesita una, si acaso.</p>
            </div></div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">✅ TU TURNO — Sistema completo del Módulo 1 (4 componentes)</div>
            <div class="next-step-body">
                <p><strong>Componente 1:</strong> Instrucciones maestras con 5 secciones (mínimo 300 palabras)</p>
                <p><strong>Componente 2:</strong> Knowledge base con al menos un documento de nombre descriptivo</p>
                <p><strong>Componente 3:</strong> Un Skill para tu proceso más frecuente (estructura, tono, restricciones)</p>
                <p><strong>Componente 4:</strong> Una plantilla de prompt guardada con los 5 elementos — tan específica que si la copias en 6 meses todavía funcione sin cambios</p>
                <p><strong>Criterio de éxito global:</strong> Abre el Project en conversación nueva, haz una pregunta real sin contexto adicional — la respuesta no requiere más de una corrección menor y se la podrías enviar al destinatario hoy mismo.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_m1l11a">
            <div class="quiz-label">Quiz · Lección 11</div>
            <div class="quiz-question">¿Cuál es el elemento más diferenciador de las instrucciones maestras en el caso práctico?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l11a', this, false)">El nombre del Project, que debe incluir al cliente y la especialidad</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l11a', this, true)">La sección "Criterios de éxito" que define concretamente cuándo un entregable está listo para enviar al cliente</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l11a', this, false)">La cantidad de documentos en el knowledge base del Project</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l11a', this, false)">El idioma en que están escritas las instrucciones maestras</div>
            </div>
            <div class="quiz-feedback" id="quiz_m1l11a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m1l11b">
            <div class="quiz-label">Quiz · Lección 11</div>
            <div class="quiz-question">¿Qué demostró la "prueba de fuego" al hacer la misma pregunta dentro y fuera del Project?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l11b', this, false)">Que Claude responde más rápido dentro de los Projects configurados</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l11b', this, false)">Que las respuestas fuera del Project consumen 3x más tokens</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l11b', this, true)">Que la respuesta genérica necesitaba 4-5 correcciones antes de ser usable, mientras la del Project necesitaba una sola — o ninguna</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m1l11b', this, false)">Que los Projects permiten hacer preguntas más largas sin agotar el context window</div>
            </div>
            <div class="quiz-feedback" id="quiz_m1l11b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Cómo configurar un Project completo con las 5 secciones de instrucciones maestras</li>
                <li>La diferencia medible entre respuestas con y sin Project bien configurado</li>
                <li>Los 4 componentes del sistema completo del Módulo 1</li>
            </ul>
            <div class="okr-next">→ El <strong>Módulo 2 (Co-work)</strong> comienza con el cambio conceptual más importante: la diferencia entre pedirle cosas a Claude y trabajar genuinamente con él.</div>
        </div>
        `
    },

    // ==========================================================
    // MÓDULO 2 — CO-WORK: EL SOCIO INTELECTUAL (l12–l18)
    // ==========================================================

    {
        id: 'l12', module: 'MÓDULO 2 — CO-WORK: EL SOCIO INTELECTUAL', tag: 'tag-m2', tagLabel: 'MÓDULO 2',
        title: 'De ejecutor a socio — el cambio de mentalidad que multiplica tus resultados',
        subtitle: 'La diferencia entre pedirle cosas a Claude y trabajar genuinamente con él',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL TERMINAR ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>La diferencia concreta entre Modo Ejecutor y Modo Socio</li>
                <li>Cuándo usar cada modo — y por qué importa elegir bien</li>
                <li>Cómo estructurar una "conversación de trabajo" que co-construye resultados</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL INSIGHT CENTRAL</div>
            <div class="aha-quote">"No le pidas a Claude que haga lo que ya sabes hacer — pídele que te ayude a pensar lo que todavía no ves."</div>
            <div class="aha-body">Si usas Claude solo para ejecutar instrucciones, estás aprovechando el 20% de su capacidad. La diferencia entre el usuario promedio y el avanzado no es técnica — es conceptual. El avanzado trabaja <em>con</em> Claude, no <em>a través de</em> Claude.</div>
        </div>

        <div class="content-card">
            <h3>Modo Ejecutor vs. Modo Socio</h3>
            <p>Existe una diferencia fundamental entre dos formas de trabajar con Claude:</p>
            <ul>
                <li><strong>Modo Ejecutor:</strong> Le dices qué hacer. Claude lo hace. Fin. — <em>"Escríbeme un correo", "Resume este PDF", "Traduce este párrafo."</em></li>
                <li><strong>Modo Socio:</strong> Le das el contexto, el objetivo y el problema de fondo. Trabajan juntos para llegar a algo que ninguno hubiera producido solo. — <em>"Tengo una situación difícil con un cliente. Antes de escribir el correo, ayúdame a pensar qué está pasando."</em></li>
            </ul>
            <p>En el Modo Ejecutor, Claude ejecuta. En el Modo Socio, Claude <strong>piensa contigo</strong>.</p>
        </div>

        <div class="content-card">
            <h3>¿Cuándo usar cada modo?</h3>
            <ul>
                <li><strong>Modo Ejecutor:</strong> Cuando la tarea tiene una respuesta obvia y ya sabes cómo se ve un buen resultado. Rápido, directo.</li>
                <li><strong>Modo Socio:</strong> Cuando la tarea implica una decisión, una estrategia, un entregable importante, o cuando no estás seguro de que tu enfoque es el correcto. Más largo, mucho más valioso.</li>
            </ul>
            <p>Estructura para el Modo Socio: <em>"Tengo [contexto real]. El resultado que necesito es [X], pero antes de llegar ahí, ayúdame a pensar: ¿qué estoy posiblemente pasando por alto?"</em></p>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">⚡ TU TURNO — ANTES DE LA PRÓXIMA LECCIÓN</div>
            <div class="next-step-body">Toma una tarea pendiente esta semana. Antes de pedirle a Claude que la ejecute, abre la conversación con el Modo Socio: <em>"Tengo [contexto]. El resultado que necesito es [X], pero ayúdame a pensar qué podría estar pasando por alto."</em> Documenta al menos 2 consideraciones que Claude levantó y que tú no habías pensado.</div>
        </div>

        <div class="quiz-container" id="quiz_m2l12a">
            <div class="quiz-label">Quiz · Lección 12</div>
            <div class="quiz-question">¿Cuál es la diferencia fundamental entre el Modo Ejecutor y el Modo Socio?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l12a', this, false)">En el Modo Socio, Claude tiene acceso a internet y puede buscar información actualizada</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l12a', this, true)">En el Modo Ejecutor Claude hace lo que le pides; en el Modo Socio co-construyes algo que ninguno hubiera producido solo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l12a', this, false)">El Modo Socio solo funciona en Projects, no en conversaciones normales</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l12a', this, false)">El Modo Ejecutor es para tareas largas; el Modo Socio para tareas cortas</div>
            </div>
            <div class="quiz-feedback" id="quiz_m2l12a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m2l12b">
            <div class="quiz-label">Quiz · Lección 12</div>
            <div class="quiz-question">¿Cuándo es más útil el Modo Socio?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l12b', this, false)">Para tareas simples con respuesta obvia, donde ya sabes cómo luce un buen resultado</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l12b', this, false)">Solo para correos — es donde Claude demuestra mejor criterio</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l12b', this, true)">Cuando la tarea implica decisiones, estrategia o un entregable importante donde no estás seguro de que tu enfoque es el correcto</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l12b', this, false)">Cuando quieres que Claude sea más breve en sus respuestas</div>
            </div>
            <div class="quiz-feedback" id="quiz_m2l12b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>La diferencia entre Modo Ejecutor y Modo Socio — y por qué importa</li>
                <li>Cómo estructurar una conversación de trabajo que co-construye resultados</li>
                <li>Cuándo usar cada modo según el tipo de tarea</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 13</strong> construyes tu primera herramienta de Co-work: el Revisor Crítico — el abogado del diablo que revisa tu trabajo antes de que llegue a las manos equivocadas.</div>
        </div>
        `
    },

    {
        id: 'l13', module: 'MÓDULO 2 — CO-WORK: EL SOCIO INTELECTUAL', tag: 'tag-m2', tagLabel: 'MÓDULO 2',
        title: 'El Revisor Crítico — construye tu abogado del diablo personal',
        subtitle: 'Cómo configurar a Claude para que lea tu trabajo como lo hará el receptor más difícil que necesitas convencer',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL TERMINAR ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Por qué "revisa esto y dime qué mejorar" da resultados mediocres</li>
                <li>Cómo configurar el Revisor Crítico con el rol exacto del receptor más difícil</li>
                <li>Los 4 roles más útiles: Cliente Escéptico, CFO Conservador, Competidor, Abogado del Diablo</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL INSIGHT CENTRAL</div>
            <div class="aha-quote">"La propuesta que sobrevive al abogado del diablo llega al cliente lista para ganar."</div>
            <div class="aha-body">El problema con revisar tu propio trabajo es que ya sabes lo que quisiste decir — entonces lo lees como si lo dijera. Un revisor externo no tiene ese problema. Claude, bien configurado, puede leer tu entregable exactamente como lo hará la persona más difícil que necesitas convencer.</div>
        </div>

        <div class="content-card">
            <h3>La plantilla del Revisor Crítico</h3>
            <p>No es "revisa esto y dime qué mejorar" — eso da respuestas genéricas. Es configurar a Claude para pensar, hablar y objetar como el receptor real:</p>
            <pre style="background:#0a1628;color:#a8c4e8;padding:1rem;border-radius:8px;font-size:0.85rem;line-height:1.6;overflow-x:auto;">Eres [ROL ESPECÍFICO]. Tu trabajo es revisar este [documento] desde la perspectiva de alguien que:
- Tiene [característica del interlocutor real]
- Se preocupa principalmente por [preocupación central]
- Ha visto fracasar proyectos similares por [problema típico]

Tu revisión debe:
1. Identificar las 3-5 debilidades más serias
2. Señalar qué preguntas haría que el autor no ha respondido
3. Indicar qué partes generan desconfianza
4. Decir en qué momento dejarías de leer

No seas amable. Sé específico.</pre>
        </div>

        <div class="content-card">
            <h3>Los 4 roles más útiles</h3>
            <ul>
                <li><strong>El Cliente Escéptico:</strong> Director que contrató consultores antes y quedó decepcionado. Busca señales de que es más de lo mismo.</li>
                <li><strong>El CFO Conservador:</strong> Aprueba el presupuesto. Prioridad: ROI demostrable y riesgos financieros. Busca números que no cuadran.</li>
                <li><strong>El Competidor Directo:</strong> Si recibiera tu propuesta, ¿cómo la rebatiría en la suya? ¿Qué argumentaría que hace mejor?</li>
                <li><strong>El Abogado del Diablo Interno:</strong> El colega más crítico del equipo. Busca contradicciones internas y supuestos no declarados.</li>
            </ul>
            <p><strong>La clave:</strong> La especificidad del rol. "Revisa esto" da mediocridad. "Revísalo como lo haría [persona con motivaciones específicas]" da insights reales.</p>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">⚡ TU TURNO — ANTES DE LA PRÓXIMA LECCIÓN</div>
            <div class="next-step-body">Elige el rol que más te incomoda (Cliente Escéptico, CFO o Competidor). Adapta la plantilla a tu contexto. Toma el entregable más importante que tengas esta semana y pásalo por el Revisor Crítico. Documenta al menos 3 debilidades que Claude identificó y que tú no habías considerado.</div>
        </div>

        <div class="quiz-container" id="quiz_m2l13a">
            <div class="quiz-label">Quiz · Lección 13</div>
            <div class="quiz-question">¿Por qué el prompt "revisa esto y dime qué mejorar" es menos efectivo que el Revisor Crítico?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l13a', this, false)">Porque Claude no puede revisar documentos sin un rol específico asignado en el system prompt</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l13a', this, true)">Porque da respuestas genéricas y demasiado amables; el Revisor Crítico simula el filtro del receptor más difícil con motivaciones específicas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l13a', this, false)">Porque Claude solo puede revisar documentos en inglés de forma efectiva</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l13a', this, false)">Porque sin rol específico Claude consume más tokens y la respuesta es más lenta</div>
            </div>
            <div class="quiz-feedback" id="quiz_m2l13a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m2l13b">
            <div class="quiz-label">Quiz · Lección 13</div>
            <div class="quiz-question">¿Cuál es el elemento más importante al configurar el Revisor Crítico?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l13b', this, false)">La longitud del prompt — mientras más largo, más detallada la revisión</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l13b', this, false)">Que el rol sea siempre el del CFO, porque ese genera las críticas más útiles</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l13b', this, true)">La especificidad del rol: el rol concreto con sus motivaciones específicas determina la calidad de las críticas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l13b', this, false)">Que el prompt esté en el mismo idioma que el documento a revisar</div>
            </div>
            <div class="quiz-feedback" id="quiz_m2l13b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>La plantilla exacta para construir un Revisor Crítico efectivo</li>
                <li>Los 4 roles más útiles y cuándo aplicar cada uno</li>
                <li>Por qué la especificidad del rol es lo que separa una revisión mediocre de una que cambia el entregable</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 14</strong> construyes el Motor de Contenido — el sistema que transforma ideas sueltas en producción consistente sin perder tu voz.</div>
        </div>
        `
    },

    {
        id: 'l14', module: 'MÓDULO 2 — CO-WORK: EL SOCIO INTELECTUAL', tag: 'tag-m2', tagLabel: 'MÓDULO 2',
        title: 'El Motor de Contenido — de ideas sueltas a sistema de producción',
        subtitle: 'Un pipeline de 5 pasos que convierte lo que ya sabes en contenido consistente — sin perder tu voz',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL TERMINAR ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Los 5 pasos del Motor de Contenido: brainstorm → calendario → outline → borrador → revisión</li>
                <li>Cómo codificar tu voz de marca para que Claude suene como tú — no como IA genérica</li>
                <li>Las plantillas exactas para cada etapa del motor</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL INSIGHT CENTRAL</div>
            <div class="aha-quote">"No necesitas más tiempo para publicar — necesitas un sistema que convierta lo que ya sabes en contenido antes de que se lo digas a alguien más."</div>
            <div class="aha-body">El problema con el contenido no es la falta de ideas. Es la falta de sistema. Todo profesional independiente sabe más de lo que publica. El Motor de Contenido convierte ese conocimiento en producción consistente — con tu voz, no con la voz genérica de la IA.</div>
        </div>

        <div class="content-card">
            <h3>Los 5 pasos del Motor de Contenido</h3>
            <ol class="concept-list">
                <li><strong>Brainstorm:</strong> Claude como facilitador genera 20 ideas basadas en lo que conoces y lo que tu audiencia necesita.</li>
                <li><strong>Calendario editorial:</strong> Priorizas, ordenas y programas. Claude identifica brechas y la secuencia lógica.</li>
                <li><strong>Outline crítico:</strong> Antes de escribir, construyes la estructura del argumento. Claude la desafía: ¿el gancho engancha? ¿el argumento se sostiene?</li>
                <li><strong>Borrador con voz:</strong> Claude escribe con tus instrucciones de voz de marca — no un prompt genérico.</li>
                <li><strong>Revisión con Abogado del Diablo:</strong> El Revisor Crítico (Lección 13) lee el borrador antes de publicar.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>Cómo codificar tu voz de marca</h3>
            <p>El error más común: "Escribe en tono profesional pero cercano." Eso no es una instrucción de voz — es una descripción aspiracional vacía.</p>
            <p>Lo que funciona:</p>
            <ol class="concept-list">
                <li>Dale 3-5 piezas de tu contenido que consideres representativas de tu mejor trabajo.</li>
                <li>Pídele que identifique los patrones: estructura de oraciones, tipo de analogías, cómo abres, cómo cierras.</li>
                <li>Convierte eso en instrucción concreta: <em>"Usa oraciones cortas. Nunca más de 2 líneas por párrafo. Empieza siempre con pregunta o afirmación provocadora. Ejemplos de negocios latinoamericanos. Nunca uses 'sinergias'. Cierra con acción específica."</em></li>
            </ol>
            <p>Guarda esas instrucciones en las instrucciones de tu Project. Todo lo que generes desde ahí va a sonar como tú.</p>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">⚡ TU TURNO — ANTES DE LA PRÓXIMA LECCIÓN</div>
            <div class="next-step-body">Crea un Project "Motor de Contenido" en Claude. En las instrucciones del Project, pega tus instrucciones de voz de marca (o pídele a Claude que las identifique a partir de 3 piezas tuyas). Ejecuta el prompt de Brainstorm y genera tu primer lote de 20 ideas. Elige 4 y construye tu calendario para las próximas 4 semanas.</div>
        </div>

        <div class="quiz-container" id="quiz_m2l14a">
            <div class="quiz-label">Quiz · Lección 14</div>
            <div class="quiz-question">¿Por qué el prompt "escribe en tono profesional pero cercano" es insuficiente como instrucción de voz de marca?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l14a', this, false)">Porque Claude no puede procesar instrucciones de tono sin ejemplos en inglés</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l14a', this, true)">Porque es una descripción aspiracional vacía — Claude no sabe qué significa tu "cercano" sin instrucciones concretas de estructura, analogías y estilo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l14a', this, false)">Porque ese tipo de instrucción solo funciona en el paso de Outline, no en el de Borrador</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l14a', this, false)">Porque el tono profesional y el tono cercano son contradictorios y Claude no puede combinarlos</div>
            </div>
            <div class="quiz-feedback" id="quiz_m2l14a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m2l14b">
            <div class="quiz-label">Quiz · Lección 14</div>
            <div class="quiz-question">¿En qué paso del Motor de Contenido Claude desafía si el argumento central es original o si el cierre tiene fuerza suficiente?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l14b', this, false)">Paso 1 — Brainstorm, donde se evalúan las ideas antes de comprometerse con una</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l14b', this, false)">Paso 4 — Borrador, donde Claude ya tiene el outline aprobado y lo cuestiona al escribir</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l14b', this, true)">Paso 3 — Outline crítico, donde se evalúa la estructura antes de escribir una sola palabra</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l14b', this, false)">Paso 5 — Revisión con Abogado del Diablo, la última etapa antes de publicar</div>
            </div>
            <div class="quiz-feedback" id="quiz_m2l14b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Los 5 pasos del Motor de Contenido y el rol de Claude en cada uno</li>
                <li>Cómo construir instrucciones de voz de marca que hacen que los borradores suenen como tú</li>
                <li>Por qué el Motor produce más y mejor contenido que trabajar desde cero cada vez</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 15</strong> construyes el Pipeline Analítico — el sistema para procesar información compleja en etapas con calidad compuesta.</div>
        </div>
        `
    },

    {
        id: 'l15', module: 'MÓDULO 2 — CO-WORK: EL SOCIO INTELECTUAL', tag: 'tag-m2', tagLabel: 'MÓDULO 2',
        title: 'El Pipeline Analítico — procesa información como consultor senior',
        subtitle: 'El método de 5 etapas para convertir datos crudos en diagnósticos accionables sin perder el hilo',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL TERMINAR ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Por qué tirar toda la información en un solo prompt produce análisis superficial</li>
                <li>Las 5 etapas del Pipeline Analítico y por qué el orden importa</li>
                <li>Cómo mantener la "calidad compuesta" entre etapas en una sola conversación</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL INSIGHT CENTRAL</div>
            <div class="aha-quote">"El análisis que vale no es el que responde las preguntas que ya tenías — es el que descubre las preguntas que no sabías que necesitabas hacer."</div>
            <div class="aha-body">La diferencia entre un analista junior y un consultor senior no es inteligencia — es método. El consultor senior ordena la información, la audita, la interpreta y construye la narrativa antes del entregable. Claude puede hacer cada etapa — pero solo si tú estructuras el flujo correctamente.</div>
        </div>

        <div class="content-card">
            <h3>Las 5 etapas del Pipeline Analítico</h3>
            <ol class="concept-list">
                <li><strong>Auditoría de datos:</strong> "¿Qué tenemos? ¿Qué falta? ¿Qué parece inconsistente? ¿Qué no podemos responder con lo que tenemos?"</li>
                <li><strong>Limpieza y estructura:</strong> "Reorganiza la información de manera analizable. Señala qué datos ignoraste y por qué."</li>
                <li><strong>Análisis:</strong> "Identifica los patrones más relevantes. No los obvios — los que requieren ver más de una variable al mismo tiempo."</li>
                <li><strong>Narrativa de insights:</strong> "Convierte el análisis en una historia coherente. No una lista de hallazgos — qué está pasando y por qué importa."</li>
                <li><strong>Reporte entregable:</strong> "Con la narrativa aprobada, produce el reporte en formato [X]. Audiencia: [Y]. Tono: [Z]."</li>
            </ol>
        </div>

        <div class="content-card tip">
            <h3>Cómo evitar que Claude pierda el hilo entre etapas</h3>
            <p>Si usas conversaciones separadas, Claude pierde contexto. La solución: trabajar en una sola conversación larga, y al inicio de cada nueva etapa hacer un resumen explícito:</p>
            <p><em>"Hasta aquí hemos: [resumen de la etapa anterior]. Ahora vamos a la Etapa [X]."</em></p>
            <p>Esto mantiene la <strong>calidad compuesta</strong> intacta — cada etapa hereda el contexto y la profundidad de la anterior.</p>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">⚡ TU TURNO — ANTES DE LA PRÓXIMA LECCIÓN</div>
            <div class="next-step-body">Elige un conjunto de información acumulada: datos de un cliente, notas de un proyecto, resultados de una campaña. Ejecuta las primeras 3 etapas del Pipeline en una sola conversación de Claude. Criterio de éxito: al finalizar la Etapa 3 tienes al menos 3 insights que no eran evidentes al inicio y que requirieron ver más de una fuente.</div>
        </div>

        <div class="quiz-container" id="quiz_m2l15a">
            <div class="quiz-label">Quiz · Lección 15</div>
            <div class="quiz-question">¿Por qué es mejor ejecutar el Pipeline Analítico en una sola conversación larga que en conversaciones separadas por etapa?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l15a', this, false)">Porque Claude cobra más tokens cuando se abren múltiples conversaciones sobre el mismo tema</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l15a', this, true)">Porque en conversaciones separadas Claude pierde el contexto acumulado de etapas anteriores, reduciendo la calidad compuesta del análisis</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l15a', this, false)">Porque Claude no puede acceder a archivos subidos en conversaciones anteriores</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l15a', this, false)">Porque las conversaciones largas activan automáticamente el modo Extended Thinking</div>
            </div>
            <div class="quiz-feedback" id="quiz_m2l15a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m2l15b">
            <div class="quiz-label">Quiz · Lección 15</div>
            <div class="quiz-question">¿Qué hace especialmente valiosa la Etapa 1 (Auditoría) del Pipeline Analítico?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l15b', this, false)">Que genera automáticamente el reporte ejecutivo antes de que el análisis comience</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l15b', this, false)">Que elimina los datos duplicados del Excel antes de procesarlos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l15b', this, true)">Que detecta qué datos faltan o son inconsistentes antes de analizar — evitando conclusiones sobre bases incompletas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l15b', this, false)">Que divide automáticamente la información en subcarpetas según el tipo de archivo</div>
            </div>
            <div class="quiz-feedback" id="quiz_m2l15b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Las 5 etapas del Pipeline Analítico y por qué el orden produce calidad compuesta</li>
                <li>La técnica de resumen inter-etapas para mantener el contexto en conversaciones largas</li>
                <li>Tres casos de uso donde el Pipeline cambia radicalmente la calidad del análisis</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 16</strong> Claude sale de la pantalla y entra a tu computadora: Claude Cowork y el procesamiento masivo de archivos.</div>
        </div>
        `
    },

    {
        id: 'l16', module: 'MÓDULO 2 — CO-WORK: EL SOCIO INTELECTUAL', tag: 'tag-m2', tagLabel: 'MÓDULO 2',
        title: 'Claude Cowork — cuando Claude toca tus archivos directamente',
        subtitle: 'Del copy-paste al acceso directo: cómo procesar 50 documentos sin subirlos uno por uno',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL TERMINAR ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué es Claude Cowork y qué lo diferencia del modo Chat estándar</li>
                <li>Los casos de uso más valiosos para el profesional independiente</li>
                <li>Cómo activarlo y las limitaciones importantes que debes conocer antes de usarlo</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL INSIGHT CENTRAL</div>
            <div class="aha-quote">"Cowork no hace que Claude sea más inteligente — hace que tu información esté disponible sin el cuello de botella del copy-paste."</div>
            <div class="aha-body">Todo lo que viste hasta aquí sucede dentro de la conversación. Cowork es diferente: Claude accede directamente a archivos y carpetas en tu computadora. Para el profesional con docenas de documentos, esto no es una mejora menor — es un cambio de categoría.</div>
        </div>

        <div class="content-card">
            <h3>Qué es y qué NO es Cowork</h3>
            <ul>
                <li>✅ Acceso directo a archivos y carpetas que tú designas con permiso</li>
                <li>✅ Capacidad de leer, procesar y generar archivos en tu sistema local</li>
                <li>✅ Trabajo con volúmenes imposibles de manejar en conversación normal</li>
                <li>❌ No tiene acceso a todo tu computador — solo a las carpetas que tú designas</li>
                <li>❌ No ejecuta acciones por su cuenta sin tu autorización</li>
                <li>❌ No está disponible en el plan Free — requiere suscripción Pro</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>Casos de uso para el profesional independiente</h3>
            <ul>
                <li><strong>Procesamiento masivo:</strong> 50 facturas en PDF → una tabla con proveedor, fecha, monto, concepto en Excel. Sin subir uno por uno.</li>
                <li><strong>Organización de archivos:</strong> Carpeta desordenada con propuestas, contratos y entregables → estructura en subcarpetas según categoría.</li>
                <li><strong>Análisis consolidado:</strong> Múltiples Excel de ventas por trimestre → análisis de tendencia año sobre año en una sola tabla.</li>
                <li><strong>Extracción masiva de PDFs:</strong> 30 reportes de distintos clientes → tabla con KPIs, estado del proyecto y fechas.</li>
            </ul>
            <p><strong>Advertencia importante:</strong> Siempre revisa el output antes de que realice acciones de reorganización. Lo que hace en tus carpetas es real.</p>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">⚡ TU TURNO — ANTES DE LA PRÓXIMA LECCIÓN</div>
            <div class="next-step-body">Si tienes Pro: identifica una carpeta con al menos 5 archivos similares (facturas, propuestas, reportes). Activa Cowork, da acceso solo a esa carpeta y ejecuta un prompt de extracción. Si aún no tienes Pro: diseña el prompt que usarías — qué carpeta, qué datos extraerías, qué formato de output. Tendrás el sistema listo cuando actives Pro.</div>
        </div>

        <div class="quiz-container" id="quiz_m2l16a">
            <div class="quiz-label">Quiz · Lección 16</div>
            <div class="quiz-question">¿Cuál es la diferencia principal entre usar Claude Chat para analizar documentos vs. Claude Cowork?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l16a', this, false)">En Cowork Claude puede acceder a internet para buscar información adicional sobre los documentos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l16a', this, true)">Cowork tiene acceso directo a archivos en tu computadora sin copiarlos ni subirlos; Chat requiere que los copies, pegues o subas uno por uno</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l16a', this, false)">Cowork usa Extended Thinking automáticamente para procesar documentos largos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l16a', this, false)">En Cowork Claude guarda los documentos en la nube de Anthropic permanentemente</div>
            </div>
            <div class="quiz-feedback" id="quiz_m2l16a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m2l16b">
            <div class="quiz-label">Quiz · Lección 16</div>
            <div class="quiz-question">¿Qué advertencia práctica es fundamental antes de usar Cowork para reorganizar carpetas?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l16b', this, false)">Hay que desactivar el antivirus antes de dar acceso a Claude a las carpetas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l16b', this, false)">Cowork solo funciona correctamente si los archivos tienen nombres en inglés</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l16b', this, true)">Siempre revisar el output antes de que ejecute acciones de reorganización — lo que hace en tus carpetas es real e irreversible sin backup</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l16b', this, false)">Cowork no puede procesar más de 10 archivos por sesión en el plan Pro</div>
            </div>
            <div class="quiz-feedback" id="quiz_m2l16b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Qué es Claude Cowork y en qué se diferencia del Chat estándar</li>
                <li>Los 4 casos de uso más valiosos para el profesional independiente</li>
                <li>Las limitaciones importantes y la advertencia de reversibilidad</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 17</strong> conectas Claude con las herramientas que ya usas: Google Drive, Slack, Office 365 y MCP.</div>
        </div>
        `
    },

    {
        id: 'l17', module: 'MÓDULO 2 — CO-WORK: EL SOCIO INTELECTUAL', tag: 'tag-m2', tagLabel: 'MÓDULO 2',
        title: 'Integraciones — Claude en tu stack de trabajo',
        subtitle: 'Las 4 integraciones que generan impacto real — en orden de prioridad para el profesional independiente',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL TERMINAR ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>El criterio correcto para priorizar integraciones (no novedad — fricción eliminada)</li>
                <li>Las 4 integraciones de mayor impacto: Drive, Office, Slack y MCP</li>
                <li>Cómo instalar un servidor MCP sin saber programar</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL INSIGHT CENTRAL</div>
            <div class="aha-quote">"La mejor integración no es la más avanzada — es la que elimina el paso que más odias repetir."</div>
            <div class="aha-body">Hay una trampa clásica en productividad con IA: la trampa de la integración por novedad. El criterio correcto no es "¿puedo conectar Claude con X?" sino "¿qué fricción real en mi trabajo cotidiano se elimina si Claude está en X?"</div>
        </div>

        <div class="content-card">
            <h3>Las 4 integraciones — en orden de prioridad</h3>
            <ol class="concept-list">
                <li><strong>Google Drive:</strong> Claude lee documentos directamente desde tu Drive sin copy-paste. <em>Caso de uso: carpeta con propuesta + contrato + notas → "Lee todo y prepara la agenda de seguimiento."</em> Se activa en: Configuración → Integraciones → Google Drive.</li>
                <li><strong>Microsoft Word / Office 365:</strong> Claude edita documentos Word directamente en lugar de devolver texto que tienes que pegar. Disponible como extensión de Word o desde Configuración → Microsoft.</li>
                <li><strong>Slack:</strong> @Claude con contexto del canal de tu equipo. <em>"Resume los últimos 20 mensajes y sugiere próximos pasos."</em> Instalación: Apps en Slack → buscar "Claude for Slack".</li>
                <li><strong>MCP — el conector universal:</strong> Más de 300 herramientas conectadas como extensiones. Sin programar.</li>
            </ol>
        </div>

        <div class="content-card tip">
            <h3>Cómo instalar un MCP básico (Filesystem)</h3>
            <ol class="concept-list">
                <li>Asegúrate de tener Claude Desktop instalado (no claude.ai — la app de escritorio)</li>
                <li>Ve a Claude Desktop → Configuración → Developer → Edit Config</li>
                <li>Copia el código del servidor MCP del directorio oficial de MCP</li>
                <li>Pega en el archivo de configuración</li>
                <li>Reinicia Claude Desktop</li>
            </ol>
            <p><strong>Regla de priorización:</strong> Instala primero la integración que elimina la fricción que más repites. No instales todo a la vez — el objetivo es eliminar un cuello de botella específico.</p>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">⚡ TU TURNO — ANTES DE LA PRÓXIMA LECCIÓN</div>
            <div class="next-step-body">Elige UNA integración de la lista — la que elimine la fricción más frecuente en tu trabajo. Actívala esta semana. Úsala en al menos 3 tareas reales. Documenta: ¿cuánto tiempo tomaba esa tarea antes vs. después de la integración?</div>
        </div>

        <div class="quiz-container" id="quiz_m2l17a">
            <div class="quiz-label">Quiz · Lección 17</div>
            <div class="quiz-question">¿Cuál es el criterio correcto para priorizar qué integración activar primero?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l17a', this, false)">La integración más avanzada tecnológicamente, que demuestra que usas Claude al máximo de su capacidad</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l17a', this, false)">La que más usuarios tienen activa según las estadísticas de Anthropic</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l17a', this, true)">La que elimina la fricción más frecuente en tu trabajo cotidiano — no la más impresionante sino la que resuelve lo que más repites</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l17a', this, false)">La más nueva, porque Anthropic optimiza primero las integraciones lanzadas recientemente</div>
            </div>
            <div class="quiz-feedback" id="quiz_m2l17a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m2l17b">
            <div class="quiz-label">Quiz · Lección 17</div>
            <div class="quiz-question">¿Qué es MCP y cómo se diferencia de una integración estándar como Google Drive?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l17b', this, false)">MCP es una integración exclusiva de pago que reemplaza a Google Drive con más funciones</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l17b', this, false)">MCP significa "Multi-Claude Protocol" — permite usar varios modelos de Claude simultáneamente</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l17b', this, true)">MCP es un estándar abierto ("USB-C de la IA") que conecta Claude con más de 300 herramientas; las integraciones estándar son solo las disponibles en la interfaz nativa de Claude</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l17b', this, false)">MCP requiere saber programar en Python para instalarlo, a diferencia de Drive y Slack</div>
            </div>
            <div class="quiz-feedback" id="quiz_m2l17b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>El criterio correcto para priorizar integraciones: fricción eliminada, no novedad</li>
                <li>Las 4 integraciones de mayor impacto y cómo activar cada una</li>
                <li>Qué es MCP y cómo instalar un servidor básico sin programar</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 18</strong> ves todo el módulo funcionando sobre un entregable real: la propuesta que sobrevivió al abogado del diablo — sin filtros.</div>
        </div>
        `
    },

    {
        id: 'l18', module: 'MÓDULO 2 — CO-WORK: EL SOCIO INTELECTUAL', tag: 'tag-m2', tagLabel: 'MÓDULO 2',
        title: 'CASO PRÁCTICO — La propuesta que sobrevivió al abogado del diablo',
        subtitle: 'Caso documentado de principio a fin: Revisor Crítico sobre una propuesta de $45,000 USD — con las críticas reales que duelen',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 EN ESTE CASO PRÁCTICO VERÁS:</div>
            <ul>
                <li>El Revisor Crítico configurado para un cliente específico (no el genérico)</li>
                <li>Las 4 críticas exactas que Claude identificó — las que el instructor no había visto</li>
                <li>Cómo categorizar las críticas y decidir cuáles incorporar, cuáles responder y cuáles ignorar</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL INSIGHT DEL CASO</div>
            <div class="aha-quote">"El mejor entregable no es el que tú consideras listo — es el que sobrevivió al filtro del receptor más difícil."</div>
            <div class="aha-body">En 17 años de trabajo independiente, mis propuestas pasaban por un solo revisor: yo mismo. Y yo, después de 4 horas, ya no podía leerlo con ojos frescos. Enviaba oraciones ambiguas, promesas sin mecanismo, precios sin justificación suficiente. No por negligencia — por falta de revisor.</div>
        </div>

        <div class="content-card">
            <h3>El contexto del caso</h3>
            <ul>
                <li><strong>El entregable:</strong> Propuesta de consultoría de 6 páginas. Presupuesto: $45,000 USD.</li>
                <li><strong>El cliente:</strong> Director general de empresa familiar de segunda generación, escéptico de consultores externos, 2 experiencias previas que "prometieron y no entregaron."</li>
                <li><strong>El Revisor configurado:</strong> No el genérico — uno afinado para este cliente específico: sus antecedentes, su escepticismo particular, su criterio de decisión.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>Las 4 críticas que cambieron la propuesta</h3>
            <ol class="concept-list">
                <li><em>"La metodología dice qué van a hacer pero no por qué eso produce el resultado. Un director que ha visto fallar proyectos va a pensar: otra metodología que suena bien."</em></li>
                <li><em>"El riesgo de implementación no aparece en ningún lado. Un cliente conservador asume que lo están ocultando. Mejor nombrarlo y mostrar cómo se mitiga."</em></li>
                <li><em>"Los entregables son vagos: 'análisis completo', 'mapa actualizado'. ¿Quién decide cuándo está completo? Esto va a crear conflictos en la ejecución."</em></li>
                <li><em>"El precio aparece en la página 5 sin preparación. Si el cliente no entendió el valor en páginas 1-4, llega al precio sin el contexto correcto."</em></li>
            </ol>
            <p>Las cuatro críticas mejoraron el documento antes de que llegara al cliente. La propuesta fue aceptada.</p>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">⚡ TU TURNO — EJERCICIO DE CIERRE DEL MÓDULO 2</div>
            <div class="next-step-body">Toma el entregable más importante que hayas generado esta semana. 1) Configura el Revisor Crítico específico para ese documento: ¿quién lo va a leer? ¿Cuál es su escepticismo? 2) Pasa el documento por el Revisor. 3) Documenta en tabla: crítica / ¿incorporas? / ¿por qué? 4) Modifica el documento. Criterio de éxito: al menos 3 debilidades que Claude identificó que tú no habías visto. Al menos 2 se incorporan al final.</div>
        </div>

        <div class="quiz-container" id="quiz_m2l18a">
            <div class="quiz-label">Quiz · Lección 18</div>
            <div class="quiz-question">¿Por qué el Revisor Crítico del caso fue configurado específicamente para ese cliente y no con el template genérico?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l18a', this, false)">Porque el template genérico solo funciona para documentos de menos de 2 páginas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l18a', this, true)">Porque las críticas útiles vienen de simular el filtro específico de ese receptor — sus antecedentes, su escepticismo y su criterio de decisión particular</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l18a', this, false)">Porque el template genérico no está disponible para propuestas con presupuesto mayor a $10,000</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l18a', this, false)">Porque el instructor prefiere siempre el Revisor personalizado para documentos en español</div>
            </div>
            <div class="quiz-feedback" id="quiz_m2l18a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m2l18b">
            <div class="quiz-label">Quiz · Lección 18</div>
            <div class="quiz-question">¿Cuál de las 4 críticas del caso abordó un problema de estructura de la propuesta — no de contenido?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l18b', this, false)">La crítica sobre la metodología — que no explicaba el mecanismo del resultado</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l18b', this, false)">La crítica sobre el riesgo de implementación — que no aparecía en ningún lado</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l18b', this, false)">La crítica sobre los entregables vagos — que no especificaban quién decide cuándo están completos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m2l18b', this, true)">La crítica sobre el precio en página 5 — que aparecía sin preparación de valor en las páginas anteriores</div>
            </div>
            <div class="quiz-feedback" id="quiz_m2l18b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ MÓDULO 2 COMPLETADO. YA TIENES:</div>
            <ul>
                <li>El Modo Socio: co-construyes, no solo ejecutas</li>
                <li>El Revisor Crítico: ningún entregable importante sale sin pasar por el filtro del receptor más difícil</li>
                <li>El Motor de Contenido: producción sistemática con tu voz</li>
                <li>El Pipeline Analítico: información compleja convertida en diagnóstico accionable</li>
            </ul>
            <div class="okr-next">→ El <strong>Módulo 3 (Code)</strong> comienza con la verdad que nadie te dijo sobre Claude Code: no es para programadores — es para ti.</div>
        </div>
        `
    },

    // ==========================================================
    // MÓDULO 3 — CODE: EL CONSTRUCTOR (l19–l24)
    // ==========================================================

    {
        id: 'l19', module: 'MÓDULO 3 — CODE: EL CONSTRUCTOR', tag: 'tag-m3', tagLabel: 'MÓDULO 3',
        title: 'Claude Code no es para programadores — es para ti',
        subtitle: 'El primer agente de IA que entra a tu computadora, abre tus carpetas y hace cosas reales — sin que escribas una sola línea de código',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL TERMINAR ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Por qué "Code" en el nombre es un malentendido que limita quién lo usa</li>
                <li>La diferencia fundamental entre Claude Chat, Claude Projects y Claude Code</li>
                <li>Quién usa Claude Code hoy sin saber programar — y para qué</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL INSIGHT CENTRAL</div>
            <div class="aha-quote">"Claude Code no escribe código — ejecuta órdenes. Y la diferencia entre decirle a alguien qué hacer y que alguien lo haga por ti vale exactamente las horas que llevas haciéndolo solo."</div>
            <div class="aha-body">El nombre tiene la culpa del malentendido. "Code" suena a programación. Pero es el primer asistente que puede abrir tu computadora, entrar a tus carpetas y hacer cosas reales en segundos. No es un chatbot — es un agente.</div>
        </div>

        <div class="content-card">
            <h3>Los tres modos — la diferencia que importa</h3>
            <ul>
                <li><strong>Claude Chat:</strong> Como llamar a un experto por teléfono. Te da consejo — tú vas y lo ejecutas. La respuesta queda en la conversación.</li>
                <li><strong>Claude Projects:</strong> Ese mismo experto que ya conoce tu empresa. Recuerda tu contexto, tiene tus documentos de referencia.</li>
                <li><strong>Claude Code:</strong> No te dice qué hacer — <strong>lo hace</strong>. Entra a tu carpeta, reorganiza archivos, crea documentos, mueve lo que hay que mover. En segundos. Es un agente, no un chatbot.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>¿Quién usa Claude Code sin saber programar?</h3>
            <ul>
                <li>Equipos de ventas con 400 propuestas en PDF que necesitan extraer monto, cliente y estado de cada una.</li>
                <li>Consultores con carpetas de 200 documentos de cliente que necesitan organizar antes de la primera reunión.</li>
                <li>Coaches con meses de notas en archivos de Word dispersos que quieren un resumen consolidado por cliente.</li>
                <li>Analistas freelance con hojas de cálculo que necesitan limpiar, formatear y cruzar — sin tocar una fórmula.</li>
            </ul>
            <p><strong>La diferencia clave:</strong> Con Claude Chat, tú ejecutas. Con Claude Code, Claude ejecuta. Tú solo describes qué quieres que suceda.</p>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">⚡ TU TURNO — ANTES DE LA PRÓXIMA LECCIÓN</div>
            <div class="next-step-body">Abre Claude Desktop App y llega a la sección de Claude Code. Elige la carpeta más cargada de archivos que tengas. Dale esta instrucción exacta: <em>"Analiza esta carpeta y dime: cuántos archivos hay, de qué tipos, cuáles son los tres más recientes y cuáles los tres más antiguos."</em> Criterio de éxito: Claude Code te devuelve un análisis real con nombres y fechas reales de tus archivos.</div>
        </div>

        <div class="quiz-container" id="quiz_m3l19a">
            <div class="quiz-label">Quiz · Lección 19</div>
            <div class="quiz-question">¿Cuál es la diferencia fundamental entre Claude Chat y Claude Code?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l19a', this, false)">Claude Chat responde preguntas; Claude Code solo sirve para escribir programas en Python o JavaScript</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l19a', this, true)">Claude Chat te dice qué hacer y tú lo ejecutas; Claude Code lo ejecuta directamente — accede a archivos, organiza carpetas y genera documentos sin que tú muevas un dedo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l19a', this, false)">Claude Code requiere suscripción Enterprise; Claude Chat está disponible en el plan Free</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l19a', this, false)">Claude Code usa un modelo de IA diferente y más potente que Claude Chat</div>
            </div>
            <div class="quiz-feedback" id="quiz_m3l19a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m3l19b">
            <div class="quiz-label">Quiz · Lección 19</div>
            <div class="quiz-question">¿Por qué el nombre "Claude Code" es un malentendido para el profesional no técnico?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l19b', this, false)">Porque "Code" hace referencia a los códigos de acceso que protegen las carpetas del usuario</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l19b', this, false)">Porque en realidad se llama "Claude Computer" y Anthropic cometió un error en el nombre</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l19b', this, true)">Porque "Code" venía de su origen para programadores, pero sus capacidades de agente (mover archivos, procesar documentos, ejecutar tareas) son enormemente útiles para cualquier profesional independiente</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l19b', this, false)">Porque Claude Code requiere que el usuario codifique sus instrucciones en un formato especial antes de enviarlas</div>
            </div>
            <div class="quiz-feedback" id="quiz_m3l19b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>La diferencia entre Claude Chat (te dice qué hacer) y Claude Code (lo hace)</li>
                <li>Por qué "Code" no significa programación — significa agente</li>
                <li>Los casos de uso reales de no-programadores que ya usan Claude Code</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 20</strong> configuras el contrato maestro de Claude Code: el archivo CLAUDE.md que hace que Claude trabaje exactamente a tu manera desde el primer momento.</div>
        </div>
        `
    },

    {
        id: 'l20', module: 'MÓDULO 3 — CODE: EL CONSTRUCTOR', tag: 'tag-m3', tagLabel: 'MÓDULO 3',
        title: 'CLAUDE.md — el contrato que hace que Claude trabaje exactamente como tú quieres',
        subtitle: 'El archivo que termina con tener que re-explicar tus reglas en cada sesión — para siempre',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL TERMINAR ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué es CLAUDE.md y por qué Claude Code lo lee automáticamente al inicio de cada sesión</li>
                <li>Qué se escribe en un CLAUDE.md — en lenguaje natural, sin código</li>
                <li>Qué es la Auto Memory de Claude Code y cómo construye su propia memoria de tus preferencias</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL INSIGHT CENTRAL</div>
            <div class="aha-quote">"Un asistente sin instrucciones trabaja con sus supuestos. Uno con instrucciones trabaja con los tuyos."</div>
            <div class="aha-body">Sin CLAUDE.md, cada sesión de Claude Code empieza de cero. Puede renombrar archivos que no debía tocar, usar formatos que no son los tuyos, hacer cambios sin avisarte. CLAUDE.md convierte a un asistente genérico en uno que conoce tu negocio desde el primer segundo.</div>
        </div>

        <div class="content-card">
            <h3>Un CLAUDE.md básico para consultor independiente</h3>
            <p>No se escribe código — se escribe en lenguaje natural, como si le hablaras a una persona:</p>
            <pre style="background:#0a1628;color:#a8c4e8;padding:1rem;border-radius:8px;font-size:0.85rem;line-height:1.6;overflow-x:auto;"># Mi Espacio de Trabajo — Consultoría

## Quién soy
Soy consultor independiente. Mis proyectos duran 2-6 meses.

## Cómo organizo mis archivos
- Formato: AAAA-MM-DD_Cliente_Descripción
- Ejemplo: 2025-11-15_Empresa-ABC_Propuesta-Inicial
- Carpetas principales: /Propuestas, /Contratos, /Entregas, /Archivo

## Reglas importantes
- NUNCA borres ningún archivo sin pedirme confirmación
- NUNCA muevas más de 10 archivos sin mostrarme el plan primero
- Los archivos en /Archivo son históricos — no los modifiques

## Antes de cambios grandes
Muéstrame el plan, espera que diga "adelante", luego hazlo.

## Idioma
Siempre respóndeme en español latinoamericano.</pre>
        </div>

        <div class="content-card tip">
            <h3>Auto Memory — Claude Code aprende y documenta</h3>
            <p>Claude Code no solo lee tu CLAUDE.md — también puede escribir en él. Cuando descubre algo sobre cómo trabajas, cuando le corriges algo, cuando le dices "de ahora en adelante siempre hazlo así" — Claude Code puede agregar esa instrucción al archivo.</p>
            <p>Tu asistente no solo aprende — <strong>documenta lo que aprendió</strong>. En un mes, tu CLAUDE.md va a ser un espejo exacto de tu forma de trabajar.</p>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">⚡ TU TURNO — ANTES DE LA PRÓXIMA LECCIÓN</div>
            <div class="next-step-body">Elige la carpeta donde más trabajas. Crea un archivo CLAUDE.md dentro de ella usando el Bloc de notas (Notepad). Tu CLAUDE.md debe responder 4 preguntas: 1) ¿Cómo quieres que se llamen los archivos? 2) ¿Qué carpetas son las principales? 3) ¿Qué nunca debe tocar sin preguntarte? 4) ¿Qué debe hacer antes de ejecutar cambios grandes? Criterio de éxito: Claude Code puede decirte sus instrucciones cuando le preguntas.</div>
        </div>

        <div class="quiz-container" id="quiz_m3l20a">
            <div class="quiz-label">Quiz · Lección 20</div>
            <div class="quiz-question">¿Cuándo lee Claude Code el archivo CLAUDE.md?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l20a', this, false)">Solo cuando el usuario le pide explícitamente que lo lea al inicio de cada sesión</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l20a', this, true)">Automáticamente al inicio de cada sesión de trabajo en esa carpeta — sin que tengas que mencionarlo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l20a', this, false)">Una sola vez cuando se crea el archivo; después Claude lo tiene en memoria permanente</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l20a', this, false)">Solo si el archivo está en la carpeta raíz del disco duro, no en subcarpetas</div>
            </div>
            <div class="quiz-feedback" id="quiz_m3l20a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m3l20b">
            <div class="quiz-label">Quiz · Lección 20</div>
            <div class="quiz-question">¿Qué es la Auto Memory de Claude Code y por qué es importante?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l20b', this, false)">Una función que guarda automáticamente todas las conversaciones de Claude Code en una carpeta local</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l20b', this, false)">El historial de comandos que Claude ejecutó en sesiones anteriores, accesible con un comando especial</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l20b', this, true)">La capacidad de Claude Code de escribir en el CLAUDE.md cuando aprende algo nuevo sobre cómo trabajas — construyendo una memoria documentada de tus preferencias</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l20b', this, false)">Un sistema de backup automático que guarda el CLAUDE.md en la nube de Anthropic cada 24 horas</div>
            </div>
            <div class="quiz-feedback" id="quiz_m3l20b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Qué es CLAUDE.md y cómo se escribe en lenguaje natural sin código</li>
                <li>Las 4 secciones esenciales de un CLAUDE.md efectivo</li>
                <li>Cómo la Auto Memory hace que tu asistente mejore con el tiempo</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 21</strong> ves las 5 automatizaciones que todo profesional independiente debería tener — con las instrucciones exactas para ejecutar cada una.</div>
        </div>
        `
    },

    {
        id: 'l21', module: 'MÓDULO 3 — CODE: EL CONSTRUCTOR', tag: 'tag-m3', tagLabel: 'MÓDULO 3',
        title: 'Las 5 automatizaciones que todo profesional independiente debería tener',
        subtitle: 'Las tareas que más tiempo te roban — con las instrucciones exactas para delegárselas a Claude Code hoy mismo',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL TERMINAR ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Las 5 automatizaciones de mayor impacto para el profesional independiente</li>
                <li>Las instrucciones exactas en lenguaje natural para ejecutar cada una</li>
                <li>Cómo adaptar cada instrucción a tus archivos y carpetas reales</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL INSIGHT CENTRAL</div>
            <div class="aha-quote">"La tarea que más tiempo te roba no es la más difícil — es la más repetitiva. Y lo repetitivo se puede delegar."</div>
            <div class="aha-body">Hay un tipo de trabajo que los profesionales independientes hacemos constantemente y que nadie celebra: el trabajo de preparación. Antes de la reunión, antes de la factura, antes del reporte. Este trabajo no aporta valor — aporta orden para que tú puedas hacer el trabajo que sí importa. Claude Code puede hacerlo.</div>
        </div>

        <div class="content-card">
            <h3>Las 5 automatizaciones — instrucciones listas para usar</h3>
            <ol class="concept-list">
                <li><strong>Organización masiva de archivos:</strong> <em>"Revisa todos los archivos de esta carpeta. Renombra cada uno con formato AAAA-MM-DD_Tipo_Descripción-corta. Crea subcarpetas y mueve cada archivo al lugar correcto. Antes de mover nada, muéstrame el plan para que lo apruebe."</em></li>
                <li><strong>Extracción de datos de PDFs en lote:</strong> <em>"Abre todos los PDFs de esta carpeta. De cada uno extrae: nombre del proveedor, fecha, número de factura y monto total. Crea un Excel llamado Resumen-Facturas con una fila por factura. Si algún PDF no tiene esos datos, márcalo como 'revisar manualmente'."</em></li>
                <li><strong>Generación de documentos desde plantilla:</strong> <em>"Tengo plantilla-propuesta.docx y clientes.xlsx con 20 clientes. Crea una propuesta individual para cada uno reemplazando [NOMBRE], [EMPRESA], [SERVICIO] y [MONTO] con sus datos. Nombre de cada archivo: Propuesta_NombreCliente_2025.docx"</em></li>
                <li><strong>Procesamiento de hojas de cálculo:</strong> <em>"Abre ventas-octubre.xlsx. Elimina filas duplicadas. Suma el total por categoría en hoja nueva 'Resumen'. Agrega columna 'Prioridad': si monto &gt; $5,000 escribe 'Urgente', si no 'Normal'. Guarda como ventas-octubre-limpio.xlsx."</em></li>
                <li><strong>Reportes automáticos desde carpetas:</strong> <em>"Revisa todas las subcarpetas de Proyectos. Para cada una: cuántos archivos tiene, cuándo fue la última modificación, y si fue hace más de 30 días márcala como 'sin actividad'. Genera Reporte-Semanal-[fecha].docx con tabla."</em></li>
            </ol>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">⚡ TU TURNO — ANTES DE LA PRÓXIMA LECCIÓN</div>
            <div class="next-step-body">Elige la automatización que resuelve tu dolor más grande. Identifica la carpeta de tu computadora donde está ese problema hoy. Adapta la instrucción con los nombres de tus archivos reales. Haz copia de seguridad primero y ejecútala. Criterio de éxito: Claude Code completó la tarea y el resultado es usable — archivos organizados, Excel con datos correctos, o reporte generado.</div>
        </div>

        <div class="quiz-container" id="quiz_m3l21a">
            <div class="quiz-label">Quiz · Lección 21</div>
            <div class="quiz-question">¿Por qué Claude Code puede clasificar archivos por tipo (factura, contrato, propuesta) aunque tengan nombres sin sentido como "doc_final_v3.pdf"?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l21a', this, false)">Porque analiza la extensión del archivo y asocia .pdf con facturas automáticamente</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l21a', this, false)">Porque compara los nombres con una base de datos de nombres de archivos en línea</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l21a', this, true)">Porque lee el contenido del archivo — no solo el nombre — y clasifica por lo que dice dentro</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l21a', this, false)">Porque el CLAUDE.md le indica exactamente qué archivos son facturas según su tamaño en KB</div>
            </div>
            <div class="quiz-feedback" id="quiz_m3l21a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m3l21b">
            <div class="quiz-label">Quiz · Lección 21</div>
            <div class="quiz-question">En la Automatización 1 (organización masiva), ¿por qué la instrucción incluye "antes de mover nada, muéstrame el plan"?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l21b', this, false)">Porque Claude Code no puede mover archivos sin una confirmación técnica del sistema operativo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l21b', this, true)">Porque las acciones sobre archivos reales son difícilmente reversibles — ver el plan antes permite corregir errores antes de que ocurran</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l21b', this, false)">Porque el plan es requerido por el CLAUDE.md para procesar más de 5 archivos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l21b', this, false)">Porque Claude Code cobra más tokens si ejecuta sin mostrar el plan primero</div>
            </div>
            <div class="quiz-feedback" id="quiz_m3l21b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Las 5 automatizaciones de mayor impacto con instrucciones listas para ejecutar</li>
                <li>Por qué Claude Code clasifica por contenido, no por nombre de archivo</li>
                <li>La importancia de pedir el plan antes de ejecutar acciones irreversibles</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 22</strong> conectas Claude con más de 300 herramientas sin escribir código: MCP, el USB-C de la inteligencia artificial.</div>
        </div>
        `
    },

    {
        id: 'l22', module: 'MÓDULO 3 — CODE: EL CONSTRUCTOR', tag: 'tag-m3', tagLabel: 'MÓDULO 3',
        title: 'MCP — conecta Claude con todo lo que ya usas',
        subtitle: 'El estándar abierto que convierte a Claude en el centro de tu stack de trabajo — sin programar',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL TERMINAR ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué es MCP y por qué la analogía del USB-C lo explica mejor que cualquier definición técnica</li>
                <li>Los servidores MCP más útiles para el profesional independiente</li>
                <li>Cómo instalar un servidor MCP básico en Claude Desktop sin saber programar</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL INSIGHT CENTRAL</div>
            <div class="aha-quote">"Las herramientas que ya usas no cambian. Lo que cambia es que ahora tienen un intérprete común: Claude."</div>
            <div class="aha-body">MCP son las siglas de Model Context Protocol. La analogía que lo explica mejor: MCP es el USB-C de la inteligencia artificial. Un estándar que define cómo cualquier aplicación puede conectarse con Claude. En lugar de copiar información de una herramienta para pegarla en Claude, Claude va directamente a buscarla.</div>
        </div>

        <div class="content-card">
            <h3>Los conectores MCP más útiles para el profesional independiente</h3>
            <ul>
                <li><strong>Google Drive MCP:</strong> Claude lee documentos, hojas de cálculo y presentaciones directamente desde tu Drive sin descargarlos.</li>
                <li><strong>Filesystem MCP:</strong> Acceso configurable a tus carpetas locales — más controlable que Cowork.</li>
                <li><strong>Google Calendar MCP:</strong> Claude puede ver tu calendario y ayudarte a planificar reuniones y plazos.</li>
                <li><strong>Notion MCP:</strong> Claude lee y escribe en tu base de datos de Notion directamente.</li>
                <li><strong>Slack MCP:</strong> Claude puede leer canales y enviar notificaciones desde Code.</li>
                <li><strong>Brave Search MCP:</strong> Claude busca en internet en tiempo real dentro de una conversación de Code.</li>
            </ul>
            <p>Hay más de 300 servidores disponibles en el directorio oficial: <strong>modelcontextprotocol.io/servers</strong></p>
        </div>

        <div class="content-card tip">
            <h3>Cómo instalar un servidor MCP (sin programar)</h3>
            <ol class="concept-list">
                <li>Abre Claude Desktop App (no claude.ai — la app de escritorio)</li>
                <li>Ir a Configuración → Developer → Edit Config</li>
                <li>Copia el código de configuración del servidor MCP del directorio oficial</li>
                <li>Pega el código en el archivo de configuración</li>
                <li>Reinicia Claude Desktop</li>
                <li>Ahora puedes preguntar: <em>"¿A qué herramientas tienes acceso ahora?"</em></li>
            </ol>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">⚡ TU TURNO — ANTES DE LA PRÓXIMA LECCIÓN</div>
            <div class="next-step-body">Visita modelcontextprotocol.io/servers. Identifica una herramienta que uses en tu trabajo diario. Escribe: a) el nombre de la herramienta que elegiste, b) un caso de uso concreto donde Claude + esa herramienta te ahorraría tiempo específico. Criterio de éxito: puedes describir con una oración exacta qué haría Claude si estuviera conectado a esa herramienta.</div>
        </div>

        <div class="quiz-container" id="quiz_m3l22a">
            <div class="quiz-label">Quiz · Lección 22</div>
            <div class="quiz-question">¿Por qué "MCP es el USB-C de la inteligencia artificial" es una buena analogía?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l22a', this, false)">Porque MCP fue desarrollado por el mismo equipo que diseñó el estándar USB-C en 2014</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l22a', this, true)">Porque ambos son estándares universales: USB-C conecta cualquier dispositivo al computador; MCP conecta cualquier herramienta digital con Claude usando el mismo protocolo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l22a', this, false)">Porque MCP solo funciona en computadoras con puertos USB-C, no en dispositivos más antiguos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l22a', this, false)">Porque la velocidad de transferencia de datos de MCP es similar a la de USB-C (10 Gbps)</div>
            </div>
            <div class="quiz-feedback" id="quiz_m3l22a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m3l22b">
            <div class="quiz-label">Quiz · Lección 22</div>
            <div class="quiz-question">¿Dónde se configura un servidor MCP en la app de Claude Desktop?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l22b', this, false)">En la interfaz web de claude.ai, sección Integraciones avanzadas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l22b', this, false)">En el archivo CLAUDE.md, añadiendo una sección especial llamada [MCP-SERVERS]</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l22b', this, true)">En Claude Desktop App → Configuración → Developer → Edit Config, pegando el código del servidor MCP</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l22b', this, false)">En el Panel de Control de Windows, sección Programas y características</div>
            </div>
            <div class="quiz-feedback" id="quiz_m3l22b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Qué es MCP y cómo la analogía USB-C lo hace inmediatamente comprensible</li>
                <li>Los 6 servidores MCP más útiles para el trabajo independiente</li>
                <li>El proceso de 5 pasos para instalar un servidor MCP sin programar</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 23</strong> das el siguiente paso: Rutinas — tareas que corren solas aunque apagues la computadora.</div>
        </div>
        `
    },

    {
        id: 'l23', module: 'MÓDULO 3 — CODE: EL CONSTRUCTOR', tag: 'tag-m3', tagLabel: 'MÓDULO 3',
        title: 'Rutinas — tareas que corren solas aunque apagues la computadora',
        subtitle: 'Cómo configurar procesos automáticos en horario fijo — en los servidores de Anthropic, no en tu máquina',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL TERMINAR ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué diferencia a una automatización manual de una Rutina</li>
                <li>Los 4 casos de uso más valiosos para rutinas en trabajo independiente</li>
                <li>Cómo configurar una rutina en lenguaje natural, sin código</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL INSIGHT CENTRAL</div>
            <div class="aha-quote">"El trabajo que no requiere tu presencia no debería requerir tu presencia."</div>
            <div class="aha-body">Una automatización manual es como un electrodoméstico: lo enciendes cuando lo necesitas. Una Rutina es como programar el horno: lo configuras una vez y ya no tienes que estar ahí. Las Rutinas de Claude Code corren en los servidores de Anthropic — aunque tu laptop esté apagada.</div>
        </div>

        <div class="content-card">
            <h3>4 rutinas de alto impacto para el profesional independiente</h3>
            <ul>
                <li><strong>Reporte diario de proyectos:</strong> Cada mañana a las 7 AM, Claude revisa tu carpeta de proyectos, ve qué cambió en 24 horas y genera un resumen que encuentras esperándote.</li>
                <li><strong>Resumen semanal:</strong> Cada viernes a las 6 PM, revisa todo lo que llegó durante la semana y genera un consolidado.</li>
                <li><strong>Alerta de archivos modificados:</strong> Revisa tus contratos cada día y avisa si algo fue modificado sin tu autorización.</li>
                <li><strong>Limpieza semanal de descargas:</strong> Organiza automáticamente lo que acumulaste durante la semana en la carpeta Descargas.</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>Cómo configurar una rutina (sin código)</h3>
            <p>En la sección de Claude Code del Desktop App busca la opción "Routines" o "Scheduled Tasks". El proceso:</p>
            <ol class="concept-list">
                <li>Clic en "Nueva rutina"</li>
                <li>Describe en lenguaje natural qué debe hacer: <em>"Cada lunes a las 8 AM, revisa la carpeta Proyectos-Activos, cuenta archivos por subcarpeta, y crea un archivo Inicio-Semana-[fecha].txt con ese resumen."</em></li>
                <li>Selecciona el horario: frecuencia + día + hora</li>
                <li>Guarda y ejecuta manualmente una vez para verificar</li>
            </ol>
            <p>A partir de entonces, el archivo te estará esperando cada lunes — sin que hagas nada.</p>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">⚡ TU TURNO — ANTES DE LA PRÓXIMA LECCIÓN</div>
            <div class="next-step-body">Piensa en una tarea de resumen o monitoreo que haces regularmente. Escríbela como se la explicarías a un asistente: qué carpeta debe revisar, qué información recopilar, qué formato debe tener el resultado, con qué frecuencia. Criterio de éxito: tienes una descripción de rutina en lenguaje natural que Claude Code entendería exactamente — lista para configurar.</div>
        </div>

        <div class="quiz-container" id="quiz_m3l23a">
            <div class="quiz-label">Quiz · Lección 23</div>
            <div class="quiz-question">¿Cuál es la diferencia clave entre una automatización manual de Claude Code y una Rutina?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l23a', this, false)">Las Rutinas pueden procesar más archivos que las automatizaciones manuales por sesión</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l23a', this, true)">Las automatizaciones manuales las inicias tú cada vez; las Rutinas corren en horario fijo en servidores de Anthropic aunque tu computadora esté apagada</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l23a', this, false)">Las Rutinas requieren suscripción Enterprise; las automatizaciones manuales están en Pro</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l23a', this, false)">Las automatizaciones manuales funcionan con archivos locales; las Rutinas solo con archivos en la nube</div>
            </div>
            <div class="quiz-feedback" id="quiz_m3l23a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m3l23b">
            <div class="quiz-label">Quiz · Lección 23</div>
            <div class="quiz-question">¿Por qué se recomienda ejecutar una rutina manualmente una vez antes de dejarla en horario automático?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l23b', this, false)">Porque Claude Code requiere al menos un "ensayo" para optimizar la velocidad de la rutina en ejecuciones futuras</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l23b', this, false)">Porque la primera ejecución manual activa la licencia de uso de las Rutinas en la cuenta Pro</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l23b', this, true)">Para verificar que la rutina produce el resultado correcto antes de que corra sin supervisión — evita errores repetidos automáticamente</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l23b', this, false)">Porque las rutinas no tienen acceso a Internet hasta que el usuario aprueba la primera ejecución</div>
            </div>
            <div class="quiz-feedback" id="quiz_m3l23b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>La diferencia entre automatización manual y Rutina — y por qué una funciona sin ti</li>
                <li>Los 4 casos de uso de rutinas más valiosos para el trabajo independiente</li>
                <li>El proceso de configuración en lenguaje natural, sin código</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 24</strong> todo el módulo converge en un caso en vivo: 100 archivos organizados en 2 minutos — sin código.</div>
        </div>
        `
    },

    {
        id: 'l24', module: 'MÓDULO 3 — CODE: EL CONSTRUCTOR', tag: 'tag-m3', tagLabel: 'MÓDULO 3',
        title: 'CASO PRÁCTICO — 100 archivos organizados en 2 minutos',
        subtitle: 'El momento en que la teoría se convierte en algo real: una carpeta caótica transformada con una sola instrucción en lenguaje natural',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 EN ESTE CASO PRÁCTICO VERÁS:</div>
            <ul>
                <li>El proceso completo de 2 instrucciones: análisis primero, plan después, ejecución al final</li>
                <li>Por qué Claude Code clasifica por contenido — no por nombre ni extensión</li>
                <li>La diferencia de tiempo medida: minutos vs. horas de trabajo manual</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL INSIGHT DEL CASO</div>
            <div class="aha-quote">"El desorden no desaparece cuando tienes más tiempo. Desaparece cuando tienes la herramienta correcta."</div>
            <div class="aha-body">Claude Code no clasifica archivos por extensión ni por fecha — clasifica por contenido. Sabe si un PDF es una factura, un contrato o una propuesta porque lo leyó. Y antes de mover un solo archivo, te muestra el plan y espera tu aprobación.</div>
        </div>

        <div class="content-card">
            <h3>Las 2 instrucciones del caso</h3>
            <p><strong>Instrucción 1 — Análisis (sin tocar nada):</strong></p>
            <pre style="background:#0a1628;color:#a8c4e8;padding:1rem;border-radius:8px;font-size:0.85rem;line-height:1.6;overflow-x:auto;">"Analiza todos los archivos de esta carpeta. Sin mover nada todavía, dime: cuántos archivos hay, de qué tipos son, y cómo los clasificarías en categorías lógicas."</pre>
            <p><strong>Instrucción 2 — Plan y ejecución:</strong></p>
            <pre style="background:#0a1628;color:#a8c4e8;padding:1rem;border-radius:8px;font-size:0.85rem;line-height:1.6;overflow-x:auto;">"Ahora organizá esta carpeta: creá las subcarpetas que propusiste, renombrá cada archivo con formato AAAA-MM-DD_Categoría_Descripción. Mostrá el plan completo antes de mover cualquier cosa."</pre>
            <p>Cuando el plan se ve bien: <em>"Adelante, ejecutá el plan."</em></p>
        </div>

        <div class="content-card tip">
            <h3>Resultados documentados del caso</h3>
            <ul>
                <li>Carpeta con 25 archivos caóticos: "doc_final_v3.docx", "scan0047.pdf", "presentacion_ese.pptx"</li>
                <li>Tiempo de análisis + plan: ~45 segundos</li>
                <li>Tiempo de ejecución: ~90 segundos</li>
                <li>Resultado: subcarpetas creadas, archivos renombrados con fechas y categorías descriptivas</li>
                <li>Tiempo equivalente en manual: 45-60 minutos</li>
            </ul>
            <p>El instructor hizo una corrección al plan antes de aprobar — y Claude Code la incorporó sin problema. Eso es el flujo correcto: análisis → plan → corrección → ejecución.</p>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">⚡ TU TURNO — EJERCICIO DE CIERRE DEL MÓDULO 3</div>
            <div class="next-step-body">Busca la carpeta más caótica que tengas — más de 20 archivos sin orden. Toma captura antes. Dale a Claude Code la Instrucción 1 (análisis sin mover nada). Revisa el plan. Corrígelo. Aprueba. Ejecuta. Toma captura después. Criterio de éxito: la carpeta tiene estructura con nombres descriptivos — sin haber escrito una línea de código.</div>
        </div>

        <div class="quiz-container" id="quiz_m3l24a">
            <div class="quiz-label">Quiz · Lección 24</div>
            <div class="quiz-question">¿Por qué el caso práctico usa DOS instrucciones separadas en lugar de una sola instrucción que analice y organice al mismo tiempo?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l24a', this, false)">Porque Claude Code tiene un límite de tokens que impide combinar análisis y ejecución en un solo prompt</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l24a', this, true)">Para ver el plan antes de ejecutar — permitir correcciones antes de que acciones irreversibles ocurran sobre archivos reales</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l24a', this, false)">Porque la primera instrucción activa el modo de lectura y la segunda activa el modo de escritura</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l24a', this, false)">Porque combinar análisis y ejecución en un prompt produce errores de clasificación en más del 50% de los archivos</div>
            </div>
            <div class="quiz-feedback" id="quiz_m3l24a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m3l24b">
            <div class="quiz-label">Quiz · Lección 24</div>
            <div class="quiz-question">¿Qué demuestra que Claude Code clasificó los archivos por contenido y no por extensión?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l24b', this, false)">Que procesó archivos .pdf, .docx y .pptx — tres extensiones distintas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l24b', this, false)">Que tardó más de 30 segundos — el tiempo necesario para leer el contenido de cada archivo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l24b', this, true)">Que pudo distinguir entre un PDF-factura, un PDF-contrato y un PDF-propuesta aunque todos tuvieran la misma extensión y nombres sin sentido</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m3l24b', this, false)">Que generó subcarpetas con nombres en español, lo que no sería posible si solo analizara extensiones</div>
            </div>
            <div class="quiz-feedback" id="quiz_m3l24b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ MÓDULO 3 COMPLETADO. YA TIENES:</div>
            <ul>
                <li>CLAUDE.md: tu contrato maestro que hace que Claude trabaje a tu manera</li>
                <li>Las 5 automatizaciones con instrucciones listas para ejecutar</li>
                <li>MCP: más de 300 herramientas conectables sin programar</li>
                <li>Rutinas: tareas que corren solas aunque apagues la computadora</li>
            </ul>
            <div class="okr-next">→ El <strong>Módulo 4 (El Sistema Integrado)</strong> cierra el curso con el mapa de decisión completo y los tres pilares trabajando en cadena.</div>
        </div>
        `
    },

    // ==========================================================
    // MÓDULO 4 — EL SISTEMA INTEGRADO (l25–l27)
    // ==========================================================

    {
        id: 'l25', module: 'MÓDULO 4 — EL SISTEMA INTEGRADO', tag: 'tag-m4', tagLabel: 'MÓDULO 4',
        title: 'El mapa de decisión — nunca más la herramienta equivocada',
        subtitle: 'Tres preguntas, diez segundos, la herramienta correcta — sin dudar frente a la pantalla en blanco',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL TERMINAR ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>El árbol de 3 preguntas que lleva siempre a la herramienta correcta</li>
                <li>Los 7 casos de uso más frecuentes del profesional independiente y la herramienta exacta para cada uno</li>
                <li>La regla de oro que resume el mapa en una sola línea</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL INSIGHT CENTRAL</div>
            <div class="aha-quote">"La herramienta correcta no te hace más inteligente — te hace más rápido. Y cuando eres consistentemente rápido, pareces brillante."</div>
            <div class="aha-body">Chat, Co-work y Code no son versiones distintas de la misma cosa. Son tres modos de trabajo con lógicas completamente diferentes. Usarlos sin entender la diferencia es como usar un bisturí como martillo — funciona a medias, pero no como debería.</div>
        </div>

        <div class="content-card">
            <h3>El árbol de decisión — 3 preguntas</h3>
            <ol class="concept-list">
                <li><strong>¿El trabajo involucra archivos reales en tu computadora?</strong> Si sí → <strong>Code</strong>. Si no → pregunta 2.</li>
                <li><strong>¿Necesitas el mismo criterio aplicado de forma consistente una y otra vez?</strong> Si sí → <strong>Co-work</strong>. Si no → pregunta 3.</li>
                <li><strong>¿Estás pensando, investigando, creando algo nuevo o generando un entregable único?</strong> Si sí → <strong>Chat</strong>.</li>
            </ol>
            <div style="background:#0a1628;border-left:4px solid #4a9eff;padding:1rem 1.5rem;border-radius:0 8px 8px 0;margin-top:1rem;">
                <strong style="color:#4a9eff;">Regla de oro:</strong>
                <p style="margin:0.5rem 0 0;color:#c8d8f0;">Si toca tu computadora → Code<br>Si requiere criterio constante → Co-work<br>Si es pensamiento, creación o investigación → Chat</p>
            </div>
        </div>

        <div class="content-card">
            <h3>Los 7 casos más frecuentes del profesional independiente</h3>
            <ul>
                <li><strong>Documento largo de cliente:</strong> → Chat + Project (subes el doc, haces preguntas, el Project guarda el contexto)</li>
                <li><strong>Revisar entregable antes de enviarlo:</strong> → Co-work con Revisor Crítico (criterio consistente y exigente, no opinión casual)</li>
                <li><strong>Procesar 50 PDFs o archivos:</strong> → Code si están en tu máquina; Co-work con pipeline si ya tienes el texto</li>
                <li><strong>Investigación con fuentes:</strong> → Chat con Research Mode (fuentes actualizadas, citas verificables, profundización conversacional)</li>
                <li><strong>Crear herramienta interactiva para cliente:</strong> → Chat con Artifacts (HTML/React funcional compartible como link)</li>
                <li><strong>Automatización recurrente:</strong> → Code con rutina (un script, corre cada semana, 45 minutos de trabajo manual → 2 minutos)</li>
                <li><strong>Análisis de datos del cliente:</strong> → Co-work con pipeline analítico; si el archivo está en tu máquina, Code primero para extraer, luego Co-work para analizar</li>
            </ul>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">⚡ TU TURNO — ANTES DE LA PRÓXIMA LECCIÓN</div>
            <div class="next-step-body">Escribe las próximas 7 tareas de trabajo que tienes pendientes esta semana. Para cada una, pasa por el árbol: ¿archivos? → Code / ¿criterio constante? → Co-work / ¿pensamiento o creación? → Chat. Anota la herramienta elegida y una línea de por qué esa y no otra. Bonus: imprime el mapa y ponlo junto a tu computadora.</div>
        </div>

        <div class="quiz-container" id="quiz_m4l25a">
            <div class="quiz-label">Quiz · Lección 25</div>
            <div class="quiz-question">Tienes 30 facturas de proveedores en PDF en tu computadora y necesitas extraer el monto total de cada una. ¿Qué herramienta usas?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m4l25a', this, false)">Chat con Research Mode — para buscar los datos de cada proveedor en línea y completar la información faltante</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m4l25a', this, false)">Co-work con Pipeline Analítico — para extraer los datos con criterio financiero consistente</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m4l25a', this, true)">Code — porque los archivos viven en tu computadora y Code es el único que puede acceder a ellos directamente</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m4l25a', this, false)">Chat con Artifacts — para generar una tabla HTML con los montos extraídos</div>
            </div>
            <div class="quiz-feedback" id="quiz_m4l25a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m4l25b">
            <div class="quiz-label">Quiz · Lección 25</div>
            <div class="quiz-question">Quieres revisar todas tus propuestas de cliente con el mismo criterio — que sean ejecutivas, sin ambigüedades y con el riesgo explícito. ¿Qué herramienta usas?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m4l25b', this, false)">Chat — porque la revisión es conversacional y requiere intercambio dinámico</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m4l25b', this, true)">Co-work con el Revisor Crítico configurado — porque necesitas el mismo criterio aplicado consistentemente a todas, no una opinión diferente cada vez</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m4l25b', this, false)">Code — porque Code puede leer los archivos .docx directamente y revisarlos en lote</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m4l25b', this, false)">Chat con Extended Thinking — para que Claude razones más profundamente sobre cada propuesta</div>
            </div>
            <div class="quiz-feedback" id="quiz_m4l25b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>El árbol de 3 preguntas que lleva siempre a la herramienta correcta en 10 segundos</li>
                <li>Los 7 casos más frecuentes con la herramienta exacta para cada uno</li>
                <li>La regla de oro: archivos→Code, criterio constante→Co-work, pensamiento/creación→Chat</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 26</strong> ves los tres pilares trabajando en cadena: flujos de trabajo completos del brief al entregable.</div>
        </div>
        `
    },

    {
        id: 'l26', module: 'MÓDULO 4 — EL SISTEMA INTEGRADO', tag: 'tag-m4', tagLabel: 'MÓDULO 4',
        title: 'Flujos de trabajo completos — del brief al entregable con los tres pilares',
        subtitle: 'Tres flujos documentados paso a paso: consultoría, contenido y análisis de negocio — con los tres pilares en cadena',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL TERMINAR ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Por qué la secuencia de herramientas importa tanto como elegir la herramienta correcta</li>
                <li>Los 3 flujos más valiosos: Consultoría, Contenido y Análisis de Negocio</li>
                <li>Cómo personalizar cada flujo para tu tipo de trabajo específico</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL INSIGHT CENTRAL</div>
            <div class="aha-quote">"Un profesional con un flujo consistente siempre va a superar a un profesional brillante que improvisa — porque la consistencia escala y el talento, solo, no."</div>
            <div class="aha-body">Saber usar cada herramienta por separado es bueno. Saber encadenarlas — para que la salida de una sea la entrada de la siguiente — es tener un sistema. La diferencia entre los dos no es técnica. Es de consistencia.</div>
        </div>

        <div class="content-card">
            <h3>Flujo 1 — El Proyecto de Consultoría</h3>
            <p><em>Entrada: brief del cliente. Salida: propuesta lista para entregar.</em></p>
            <ul>
                <li><strong>Paso 1 → Chat / Research Mode:</strong> Investiga el contexto antes de escribir una línea. ¿Cuáles son los 5 problemas más comunes en la industria del cliente? Fuentes reales, datos actualizados.</li>
                <li><strong>Paso 2 → Co-work / Analista Estratégico:</strong> Pega el brief + la investigación. Pide: diagnóstico de situación actual, ejes de intervención, recomendación de cuál priorizar. Lenguaje ejecutivo, sin relleno.</li>
                <li><strong>Paso 3 → Co-work / Revisor Crítico:</strong> Pasa el borrador de propuesta por el cliente más escéptico imaginable. Corrige los huecos antes de enviarlo.</li>
                <li><strong>Resultado:</strong> Propuesta sólida en 45-90 minutos. Sin este flujo: medio día, o días si procrastinas.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>Flujo 2 — El Sistema de Contenido</h3>
            <p><em>Entrada: una idea. Salida: piezas listas para publicar, organizadas en archivos.</em></p>
            <ul>
                <li><strong>Paso 1 → Chat:</strong> Brainstorm libre — 5 ángulos distintos para abordar la idea. Conversación dinámica, sin restricciones.</li>
                <li><strong>Paso 2 → Co-work / Voz de Marca:</strong> Borrador completo con tus instrucciones de voz configuradas. Suena a ti — no a Claude genérico.</li>
                <li><strong>Paso 3 → Code:</strong> Crea la carpeta con versiones (v1, v-final) y archiva automáticamente cuando publiques.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>Flujo 3 — El Análisis de Negocio</h3>
            <p><em>Entrada: datos del cliente. Salida: reporte ejecutivo listo para presentar.</em></p>
            <ul>
                <li><strong>Paso 1 → Code:</strong> Extrae datos de 12 PDFs y un Excel en minutos. Tablas limpias sin trabajo manual.</li>
                <li><strong>Paso 2 → Co-work / Pipeline analítico:</strong> Analiza los datos extraídos con criterio financiero. Identifica anomalías, correlaciones, los 3 hallazgos que importan.</li>
                <li><strong>Paso 3 → Chat / Artifacts:</strong> Convierte el análisis en un reporte HTML ejecutivo de una página, compartible como link. Sin adjuntos, sin conversiones.</li>
                <li><strong>Resultado:</strong> Reporte profesional en 2-3 horas vs. un día o más manual.</li>
            </ul>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">⚡ TU TURNO — ANTES DE LA PRÓXIMA LECCIÓN</div>
            <div class="next-step-body">Elige el flujo que más se parezca a algo que haces regularmente. Personalízalo: cambia la "entrada" por tu caso real, ajusta los prompts de cada paso a tu industria, identifica qué roles de Co-work necesitarías. Escríbelo en un documento: "Mi flujo para [nombre del proceso]". Bonus: ejecútalo una vez con un proyecto real y anota cuánto tiempo tomó.</div>
        </div>

        <div class="quiz-container" id="quiz_m4l26a">
            <div class="quiz-label">Quiz · Lección 26</div>
            <div class="quiz-question">En el Flujo 3 (Análisis de Negocio), ¿por qué Code va primero y Co-work va segundo — y no al revés?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m4l26a', this, false)">Porque Code es más lento y conviene iniciar con él para que procese mientras Co-work prepara el contexto</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m4l26a', this, true)">Porque Code extrae los datos que viven en archivos de tu computadora — sin esa extracción, Co-work no tiene información real para analizar</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m4l26a', this, false)">Porque el Pipeline Analítico de Co-work solo funciona con datos ya formateados como tabla por Code</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m4l26a', this, false)">Porque Anthropic recomienda siempre iniciar con Code para optimizar el uso del context window</div>
            </div>
            <div class="quiz-feedback" id="quiz_m4l26a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m4l26b">
            <div class="quiz-label">Quiz · Lección 26</div>
            <div class="quiz-question">¿Por qué el paso final del Flujo 3 usa Chat con Artifacts en lugar de Co-work para generar el reporte?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m4l26b', this, false)">Porque Co-work no puede generar documentos HTML — esa capacidad es exclusiva de Chat</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m4l26b', this, false)">Porque el reporte es un entregable único que se comparte con el cliente, y Co-work solo sirve para uso interno</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m4l26b', this, true)">Porque Artifacts genera un documento HTML compartible como link — elimina adjuntos, conversiones y formateo manual, lo que es ideal para entrega al cliente</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m4l26b', this, false)">Porque Chat es más barato en tokens que Co-work para generar documentos largos</div>
            </div>
            <div class="quiz-feedback" id="quiz_m4l26b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Los 3 flujos de trabajo completos con los tres pilares en cadena</li>
                <li>Por qué la secuencia importa tanto como la herramienta — la salida de una es la entrada de la siguiente</li>
                <li>Cómo personalizar cada flujo para tu tipo de trabajo real</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 27</strong> aprendes a mantener tu sistema vivo: cómo evolucionar con Claude sin ahogarte en el ruido.</div>
        </div>
        `
    },

    {
        id: 'l27', module: 'MÓDULO 4 — EL SISTEMA INTEGRADO', tag: 'tag-m4', tagLabel: 'MÓDULO 4',
        title: 'Tu sistema vive — cómo evolucionar con Claude',
        subtitle: 'Las 3 fuentes que importan, la auditoría mensual de 30 minutos y cómo tu sistema mejora cada mes sin que tengas que empezar de cero',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL TERMINAR ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Las 3 fuentes de información que importan — y cómo ignorar el ruido sin quedar desactualizado</li>
                <li>El protocolo de auditoría mensual de 30 minutos</li>
                <li>Cómo el Project "Mi sistema Claude" se convierte en un activo que mejora con el tiempo</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL INSIGHT CENTRAL</div>
            <div class="aha-quote">"Tu sistema no es lo que aprendiste. Es lo que sigues construyendo — y la diferencia entre los dos es exactamente lo que te va a separar de tu competencia."</div>
            <div class="aha-body">Hay dos tipos de usuarios de herramientas de IA. Los primeros aprenden una vez y usan igual durante años. Los segundos tienen un sistema vivo: una revisión mensual de 30 minutos donde preguntan "¿cambió algo que afecta mi forma de trabajar?" Tú quieres ser el segundo.</div>
        </div>

        <div class="content-card">
            <h3>Las 3 fuentes que realmente importan</h3>
            <ul>
                <li><strong>Blog de Anthropic (anthropic.com/news):</strong> Los anuncios reales — modelos nuevos, capacidades que se agregan, cambios de política. Una vez a la semana. Lo que publica es oficial y relevante.</li>
                <li><strong>Changelog de Claude.ai:</strong> Dentro de la plataforma, sección de novedades. El lugar más práctico: "esto es lo que cambiamos esta semana en la interfaz que usas."</li>
                <li><strong>Tu comunidad de práctica:</strong> No un grupo de memes de IA. Gente real que usa Claude para trabajo real y comparte lo que descubre. En tu caso: la comunidad VIP TRIKLES. Ahí aparecen tips que ninguna documentación oficial menciona.</li>
            </ul>
            <p>Esas tres fuentes son suficientes. Todo lo demás es ruido opcional.</p>
        </div>

        <div class="content-card tip">
            <h3>La auditoría mensual de 30 minutos</h3>
            <p>El primer lunes de cada mes, agéndalo ya:</p>
            <ol class="concept-list">
                <li><strong>Pregunta 1 — ¿Hay algo nuevo que cambia mis flujos?</strong> Revisas las 3 fuentes. Si hubo actualización importante, ¿afecta alguno de tus flujos? Si sí, anotas qué cambias.</li>
                <li><strong>Pregunta 2 — ¿Hay alguna herramienta que mejoré este mes?</strong> ¿Prompt que refinaste? ¿Flujo que optimizaste? ¿Rol de Co-work que actualizaste? Esas mejoras van al Project "Mi sistema Claude".</li>
                <li><strong>Pregunta 3 — ¿Hay algo que debería agregar a mi sistema?</strong> Si este mes usaste Claude para algo nuevo que funcionó muy bien — lo documentas y lo conviertes en flujo oficial.</li>
            </ol>
            <p>Treinta minutos, una vez al mes. Eso es lo que separa un sistema que evoluciona de uno que se oxida.</p>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">⚡ TU TURNO — LECCIÓN FINAL ANTES DEL EXAMEN</div>
            <div class="next-step-body">1) Revisa anthropic.com/news y el changelog de Claude.ai. Anota en una línea lo más relevante que encontraste. 2) Abre tu Project "Mi sistema Claude" — ¿hay algo que ya sabes que deberías actualizar? Hazlo ahora. 3) Agenda en tu calendario el primer lunes de cada mes: "Auditoría Claude — 30 min". Como reunión inamovible. Criterio de éxito: el calendario tiene la auditoría mensual agendada y tu Project tiene al menos una entrada nueva.</div>
        </div>

        <div class="quiz-container" id="quiz_m4l27a">
            <div class="quiz-label">Quiz · Lección 27</div>
            <div class="quiz-question">¿Cuál es la "Pregunta 2" del protocolo de auditoría mensual?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m4l27a', this, false)">¿Hay algún nuevo curso de Anthropic que debería completar este mes?</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m4l27a', this, false)">¿Hay algo nuevo en las 3 fuentes que cambia mis flujos de trabajo actuales?</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m4l27a', this, true)">¿Hay alguna herramienta que mejoré este mes — un prompt refinado, un flujo optimizado, un rol de Co-work actualizado?</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m4l27a', this, false)">¿Hay competidores que ya están usando las capacidades nuevas de Claude que yo todavía no?</div>
            </div>
            <div class="quiz-feedback" id="quiz_m4l27a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_m4l27b">
            <div class="quiz-label">Quiz · Lección 27</div>
            <div class="quiz-question">¿Por qué la comunidad de práctica (como la VIP TRIKLES) es una de las 3 fuentes clave para mantenerse actualizado con Claude?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_m4l27b', this, false)">Porque Anthropic comparte información privilegiada solo con comunidades certificadas como TRIKLES</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m4l27b', this, false)">Porque los miembros de la comunidad tienen acceso a versiones beta de Claude antes de su lanzamiento</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m4l27b', this, true)">Porque comparte descubrimientos prácticos de uso real — como "descubrí que si haces X el resultado mejora 40%" — que no aparecen en ninguna documentación oficial</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_m4l27b', this, false)">Porque tiene un bot que resume automáticamente las novedades del blog de Anthropic en formato resumido</div>
            </div>
            <div class="quiz-feedback" id="quiz_m4l27b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ MÓDULO 4 COMPLETADO. YA TIENES EL SISTEMA COMPLETO:</div>
            <ul>
                <li>El mapa de decisión: nunca más la herramienta equivocada</li>
                <li>Tres flujos de trabajo completos con los tres pilares en cadena</li>
                <li>El protocolo de auditoría mensual para mantener el sistema vivo</li>
                <li>Las 3 fuentes para evolucionar sin ahogarse en el ruido</li>
            </ul>
            <div class="okr-next">→ <strong>Examen de certificación:</strong> 15 preguntas sobre los 4 módulos. Necesitas 11 respuestas correctas para obtener tu certificado VIP TRIKLES.</div>
        </div>
        `
    },

    // ==========================================================
    // MÓDULO BONUS — Claude Opus 4.8 vs 4.7 y vs la competencia (lbonus)
    // ==========================================================
    {
        id: 'lbonus', module: 'Módulo Bonus', tag: 'tag-bonus', tagLabel: 'BONUS',
        title: 'Claude Opus 4.8 — qué cambió frente a 4.7 y por qué tu sistema acaba de volverse más poderoso',
        subtitle: 'El motor sobre el que corre todo lo que aprendiste: qué mejoró en la versión más reciente, qué ventajas tienes frente a la competencia, y por qué el sistema sigue importando más que el modelo',
        content: `
        <div class="lesson-hero" style="background-image:linear-gradient(135deg,rgba(43,26,0,0.82),rgba(13,0,51,0.72)),url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1400&q=80')">
            <div class="hero-caption">Bonus · El modelo más capaz que existe hoy — y cómo aprovecharlo con tu sistema</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎁 EN ESTE MÓDULO BONUS:</div>
            <ul>
                <li>Qué es exactamente Claude Opus 4.8 y en qué mejoró frente a Opus 4.7</li>
                <li>Los números reales: dónde subió el rendimiento y qué significan para tu trabajo</li>
                <li>El cambio más importante que casi nadie nota: honestidad y fiabilidad</li>
                <li>Cómo se posiciona Claude frente a la competencia (GPT, Gemini) — sin marketing</li>
                <li>Por qué un modelo mejor multiplica tu sistema, pero no lo reemplaza</li>
            </ul>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor · LADE Germán Solís Muñoz</div>
                <div class="instructor-note-text">Agregué este módulo el día que Anthropic lanzó Opus 4.8 (28 de mayo de 2026), porque me hicieron la misma pregunta tres veces en un día: "¿vale la pena el cambio?". La respuesta corta es sí — pero la respuesta importante es <em>otra</em>: el modelo es el motor, tu sistema es el volante. Un motor mejor en manos de alguien sin método sigue produciendo resultados inconsistentes. Por eso este módulo es <strong>bonus</strong> y no parte del núcleo: lo que te certifica no es saber qué versión usas, es tener el sistema que aprendiste.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>Qué es Claude Opus 4.8</h3>
            <p>Opus es la línea más capaz de modelos de Anthropic — el "tope de gama". <strong>Opus 4.8</strong> es la versión lanzada el <strong>28 de mayo de 2026</strong>, apenas seis semanas después de Opus 4.7 (16 de abril de 2026). Es el modelo que mueve hoy a Claude.ai, la Desktop App y Claude Code cuando eliges el modelo más potente.</p>
            <p>El salto 4.7 → 4.8 no es una reinvención: es una <strong>mejora incremental pero tangible</strong>. Anthropic afina la misma familia para que razone mejor, programe mejor de forma autónoma y — el punto que más te conviene como usuario profesional — sea más honesta sobre lo que no sabe.</p>
        </div>

        <div class="content-card">
            <h3>Los números reales: 4.8 vs 4.7</h3>
            <p>Estos son datos publicados por Anthropic en el lanzamiento. No memorices las cifras — entiende la <em>dirección</em>: lo que más mejoró fue el trabajo agéntico (Claude ejecutando tareas de varios pasos por sí mismo).</p>
            <div style="overflow-x:auto;">
                <table style="width:100%;border-collapse:collapse;margin:12px 0;">
                    <tr style="background:#2b1a00;color:#faf8f3;">
                        <th style="padding:10px;text-align:left;border:1px solid #b8860b;">Medición</th>
                        <th style="padding:10px;text-align:left;border:1px solid #b8860b;">Opus 4.7</th>
                        <th style="padding:10px;text-align:left;border:1px solid #b8860b;">Opus 4.8</th>
                        <th style="padding:10px;text-align:left;border:1px solid #b8860b;">Qué mide</th>
                    </tr>
                    <tr><td style="padding:8px;border:1px solid #ddd;"><strong>SWE-bench Verified</strong></td><td style="padding:8px;border:1px solid #ddd;">87.6%</td><td style="padding:8px;border:1px solid #ddd;"><strong>88.6%</strong></td><td style="padding:8px;border:1px solid #ddd;">Resolver problemas reales de software</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd;"><strong>SWE-bench Pro</strong></td><td style="padding:8px;border:1px solid #ddd;">64.3%</td><td style="padding:8px;border:1px solid #ddd;"><strong>69.2%</strong></td><td style="padding:8px;border:1px solid #ddd;">Tareas de código más difíciles</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Terminal-Bench 2.1</strong></td><td style="padding:8px;border:1px solid #ddd;">66.1%</td><td style="padding:8px;border:1px solid #ddd;"><strong>74.6%</strong></td><td style="padding:8px;border:1px solid #ddd;">Operar en una terminal de forma autónoma</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Razonamiento con herramientas</strong></td><td style="padding:8px;border:1px solid #ddd;">54.7%</td><td style="padding:8px;border:1px solid #ddd;"><strong>57.9%</strong></td><td style="padding:8px;border:1px solid #ddd;">Pensar usando herramientas externas</td></tr>
                </table>
            </div>
            <p>La subida más grande está en <strong>Terminal-Bench</strong> (de 66% a 75%): justo el tipo de trabajo del Módulo 3 — Claude Code ejecutando tareas en tu computadora. Si esa parte del curso te interesó, esta versión la hace notablemente más confiable.</p>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL CAMBIO QUE IMPORTA MÁS QUE LOS BENCHMARKS</div>
            <div class="aha-quote">"Opus 4.8 es unas cuatro veces menos propenso que su predecesor a dejar pasar fallos en el código que escribe sin señalarlos."</div>
            <div class="aha-author">— Equipo de alineación de Anthropic</div>
            <div class="aha-body">Este es el dato que cambia tu forma de trabajar. Las versiones nuevas no solo son "más inteligentes" — son <strong>más honestas</strong>. Opus 4.8 marca con más frecuencia lo que <em>no</em> sabe y hace menos afirmaciones sin respaldo. Para ti significa menos revisión a ciegas: cuando Claude dice "no estoy seguro de esto", ahora puedes confiar más en esa advertencia. Es exactamente lo que el <strong>Revisor Crítico</strong> del Módulo 2 intenta forzar — y ahora el modelo lo trae de fábrica con más fuerza.</div>
        </div>

        <div class="content-card tip">
            <h3>Lo nuevo que sí cambia tu día a día</h3>
            <ul>
                <li><strong>Fast mode más rápido y más barato:</strong> el modo rápido es ahora ~2.5× más veloz y cuesta 3× menos que antes. Misma calidad de Opus, respuestas casi inmediatas. Ideal para iterar prompts sin esperar.</li>
                <li><strong>Mismo precio en el tier estándar:</strong> el costo por uso intensivo no subió respecto a 4.7. Más capacidad, mismo precio.</li>
                <li><strong>Dynamic workflows en Claude Code (research preview):</strong> para tareas demasiado grandes para una sola conversación, Claude planea el trabajo, lanza muchos subagentes en paralelo y <em>verifica su propio resultado</em> antes de reportar. Es el Módulo 3 llevado a escala.</li>
                <li><strong>Más fiable en tareas largas:</strong> mantiene mejor el contexto y las instrucciones a lo largo de conversaciones extensas — menos Context Rot (lo que viste en el Módulo 0).</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>Claude frente a la competencia — sin humo</h3>
            <p>La pregunta honesta no es "¿cuál es el mejor modelo?" sino "¿en qué es mejor cada uno para <em>mi</em> trabajo?". Con Opus 4.8, Claude lidera o empata en los benchmarks de programación agéntica frente a modelos como GPT-5.5, y estos son los terrenos donde Anthropic mantiene ventaja real:</p>
            <ol class="concept-list">
                <li><strong>Obediencia literal y seguimiento de instrucciones:</strong> Claude hace exactamente lo que pides. Es la base de todo el curso — tus prompts de 5 elementos funcionan <em>porque</em> el modelo respeta tus restricciones al pie de la letra.</li>
                <li><strong>Trabajo agéntico y código:</strong> el ecosistema de Claude Code (agentes que ejecutan tareas reales en tu máquina) es donde Anthropic puntea más alto. Terminal-Bench y SWE-bench lo confirman.</li>
                <li><strong>Honestidad y alineación:</strong> Anthropic mide y publica qué tan poco "alucina" o se desvía su modelo. Opus 4.8 está a la par de su modelo mejor alineado. Para uso profesional, eso es confianza.</li>
                <li><strong>Coherencia en contexto largo:</strong> Claude sostiene documentos y conversaciones extensas sin perder el hilo — clave para análisis de varios archivos.</li>
            </ol>
            <p>¿Dónde puede convenirte otra herramienta? Para generación de imágenes nativa o integración profunda con un ecosistema concreto (p. ej. Google Workspace con Gemini), otra opción puede encajar mejor. <strong>Madurez profesional es saber esto</strong> — no defender una marca.</p>
        </div>

        <div class="aha-moment">
            <div class="aha-label">⚙️ EL PRINCIPIO QUE CIERRA EL CURSO</div>
            <div class="aha-quote">"El modelo es el motor. Tu sistema es el volante. Un Ferrari sin conductor sigue estrellado en el muro."</div>
            <div class="aha-body">Opus 4.8 es un motor extraordinario. Pero el usuario que abre Claude, escribe "ayúdame con esto" y cierra — obtiene resultados inconsistentes <em>aunque tenga el mejor modelo del mundo</em>. El usuario que aplica el mapa de decisión, los prompts de 5 elementos, el Revisor Crítico y sus flujos documentados — obtiene resultados predecibles <em>incluso cuando salga la versión 4.9, 5.0 o la que sea</em>. Por eso tu sistema es a prueba de versiones: cuando Anthropic mejora el motor, tu volante simplemente se vuelve más poderoso.</div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">⚡ TU TURNO — BONUS</div>
            <div class="next-step-body">
                <p>1) Verifica qué modelo estás usando ahora mismo en Claude.ai (selector de modelo, arriba de la conversación). 2) Si tienes Opus 4.8 disponible, prueba el <strong>fast mode</strong> en una tarea repetitiva de tu sistema y compara la velocidad. 3) Anota en tu Project "Mi sistema Claude" una línea nueva en tu auditoría mensual: <em>"¿La versión actual del modelo cambia alguno de mis flujos?"</em></p>
                <p><strong>Criterio de éxito:</strong> sabes exactamente qué versión de Claude usas, y tu auditoría mensual ya contempla revisar el modelo — no solo las funciones.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_bonus_a">
            <div class="quiz-label">Quiz · Bonus</div>
            <div class="quiz-question">Según el módulo, ¿cuál fue la mejora MÁS grande de Opus 4.8 frente a 4.7, y por qué es relevante para este curso?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_bonus_a', this, false)">La generación de imágenes, porque permite crear las portadas de los cursos automáticamente</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_bonus_a', this, true)">El salto en Terminal-Bench (de 66% a 75%), porque mide el trabajo agéntico en la terminal — justo el tipo de automatización del Módulo 3 con Claude Code</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_bonus_a', this, false)">La reducción de precio a la mitad, porque hace el curso accesible para más alumnos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_bonus_a', this, false)">La velocidad de respuesta en el chat estándar, porque elimina por completo el Context Rot</div>
            </div>
            <div class="quiz-feedback" id="quiz_bonus_a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_bonus_b">
            <div class="quiz-label">Quiz · Bonus</div>
            <div class="quiz-question">¿Cuál es el mensaje central de este módulo bonus respecto a la relación entre el modelo y tu sistema de trabajo?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_bonus_b', this, false)">Que solo vale la pena tener un sistema si usas la última versión del modelo más caro</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_bonus_b', this, false)">Que con Opus 4.8 ya no hace falta aplicar prompts de 5 elementos ni el Revisor Crítico</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_bonus_b', this, true)">Que el modelo es el motor y el sistema es el volante: un mejor modelo multiplica tus resultados, pero sin método produce resultados inconsistentes aunque sea el mejor modelo del mundo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_bonus_b', this, false)">Que conviene cambiar de herramienta cada vez que un competidor saca un modelo nuevo</div>
            </div>
            <div class="quiz-feedback" id="quiz_bonus_b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ MÓDULO BONUS COMPLETADO. AHORA SABES:</div>
            <ul>
                <li>Qué es Opus 4.8 y en qué mejoró real y medible frente a 4.7</li>
                <li>Que la mejora más valiosa es la honestidad y fiabilidad — menos afirmaciones sin respaldo</li>
                <li>Dónde Claude lidera frente a la competencia: obediencia, trabajo agéntico, alineación y contexto largo</li>
                <li>Que tu sistema es a prueba de versiones — cada motor nuevo lo vuelve más poderoso</li>
            </ul>
            <div class="okr-next">→ <strong>Sigue un segundo bonus:</strong> cómo elegir tu modelo y mantener tu sistema vigente cuando Anthropic cambia el catálogo — con el caso Fable 5. (Tampoco entra en el examen — es contenido extra.)</div>
        </div>
        `
    },

    // ==========================================================
    // MÓDULO BONUS 2 — Cómo elegir tu modelo y adaptarte cuando el
    // catálogo cambia (caso Fable 5) (lbonus2)
    // ==========================================================
    {
        id: 'lbonus2', module: 'Módulo Bonus', tag: 'tag-bonus', tagLabel: 'BONUS',
        title: 'Cuándo subir de modelo (y cómo no quedar atado a uno) — el caso Fable 5',
        subtitle: 'El catálogo de Claude cambia todo el tiempo: salen modelos y se retiran. Lo que no cambia es cómo decides qué motor usar para cada tarea. El episodio Fable 5 lo demuestra.',
        content: `
        <div class="lesson-hero" style="background-image:linear-gradient(135deg,rgba(26,0,80,0.85),rgba(43,26,0,0.6)),url('https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=1400&q=80')">
            <div class="hero-caption">Bonus 2 · Elegir el motor correcto — y adaptarte cuando el catálogo cambia</div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎁 EN ESTE MÓDULO BONUS:</div>
            <ul>
                <li>Por qué "¿cuál es el modelo más nuevo?" nunca es la pregunta correcta — y cuál sí lo es</li>
                <li>El caso Fable 5: un modelo que Anthropic lanzó y retiró en cuestión de semanas</li>
                <li>Cómo decidir entre un modelo de tope de gama y uno más rápido/barato para CADA tarea</li>
                <li>La regla de escalar: empieza con el estándar, sube de modelo solo cuando la tarea lo amerita</li>
                <li>Por qué tu sistema (mapa de decisión, prompts, Revisor, CLAUDE.md) sobrevive a cualquier cambio de catálogo</li>
            </ul>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor · LADE Germán Solís Muñoz</div>
                <div class="instructor-note-text">Este bonus nació el día que Anthropic lanzó <strong>Claude Fable 5</strong> (junio de 2026). Semanas después, Anthropic lo retiró del acceso general. En vez de borrar la lección, la convertí en algo mucho más útil: el caso Fable 5 es la <strong>mejor prueba</strong> de la idea central de todo el curso. No construyes tu trabajo sobre un modelo concreto — lo construyes sobre un <strong>método de decisión</strong> que sigue en pie con cada cambio de catálogo. Aquí aprendes ese criterio, que no caduca con la próxima versión.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>La pregunta correcta no es "¿cuál es el modelo más nuevo?"</h3>
            <p>Anthropic mueve su catálogo constantemente. En seis semanas pasó de Opus 4.7 a Opus 4.8. En junio de 2026 abrió al público un modelo de su familia más potente —Fable 5, "clase Mythos"— y <strong>poco después lo retiró</strong>. Si atas tu forma de trabajar a "usar siempre el último modelo", vives corriendo detrás de los anuncios.</p>
            <p>La pregunta que de verdad importa no cambia nunca: <strong>¿qué motor resuelve ESTA tarea con el mejor balance entre capacidad y costo?</strong> Esa decisión es una habilidad — y es lo que vas a practicar aquí.</p>
        </div>

        <div class="content-card">
            <h3>El caso Fable 5 — un modelo que vino y se fue</h3>
            <p>Vale la pena entender qué pasó, porque es el ejemplo perfecto:</p>
            <ul>
                <li><strong>Qué fue:</strong> en junio de 2026 Anthropic abrió al público, por primera vez, un modelo de su familia más capaz (apodada "clase Mythos") — un escalón por encima de Opus, con saltos notables en razonamiento y analítica.</li>
                <li><strong>Qué prometía:</strong> resultados de tope de gama en las tareas más difíciles… a cambio de consumir alrededor del doble de cuota que Opus.</li>
                <li><strong>Qué pasó:</strong> al poco tiempo Anthropic lo retiró del acceso general. Pasó de "lo más avanzado disponible" a ya no estar.</li>
            </ul>
            <p>La moraleja no es sobre Fable 5. Es esta: <strong>ningún modelo concreto es para siempre.</strong> El que hoy es "el tope" puede no estar mañana, y el tope de mañana se llamará distinto. Lo único que permanece es <em>tu criterio para elegir</em>.</p>
        </div>

        <div class="aha-moment">
            <div class="aha-label">⚙️ EL PRINCIPIO QUE SOBREVIVE A TODO</div>
            <div class="aha-quote">"Salen motores y se retiran motores. Tu volante sigue siendo el mismo — y cada vez vale más."</div>
            <div class="aha-body">Nada de lo que aprendiste depende de qué modelo esté de moda: ni el mapa de decisión, ni los prompts de 5 elementos, ni el Revisor Crítico, ni tu memoria en archivos (CLAUDE.md, Projects). Un modelo más capaz <strong>amplifica</strong> al usuario con método y deja igual de perdido al que no lo tiene. De hecho, los modelos de tope de gama rinden mucho mejor cuando los alimentas con memoria persistente basada en archivos — exactamente las prácticas que este curso te enseñó. Tu sistema es a prueba de versiones <em>y</em> de familias enteras.</div>
        </div>

        <div class="content-card tip">
            <h3>Cómo elegir el motor para cada tarea (la regla de escalar)</h3>
            <ol class="concept-list">
                <li><strong>Tu modelo por defecto</strong> (el del 80% del día): el modelo de gama alta estándar disponible —hoy, la familia <strong>Opus 4.x</strong> o su <em>fast mode</em>— para redactar, resumir, iterar prompts y todo lo que ya te sale bien.</li>
                <li><strong>Escala al modelo más capaz disponible</strong> solo cuando la tarea es genuinamente difícil (análisis de varios documentos, razonamiento financiero o legal serio, código que el estándar no logró) o cuando el costo de un error es alto.</li>
                <li><strong>Cuida el costo:</strong> los modelos de tope de gama suelen consumir más cuota o costar más por token (Fable 5, por ejemplo, gastaba ~2× lo de Opus). Subir de modelo "por inercia" desperdicia tu plan.</li>
                <li><strong>Regla práctica:</strong> empieza la tarea en tu modelo por defecto; si el resultado se queda corto, <em>sube</em> al más potente para ESE caso concreto. Igual que subes de Chat a Code solo cuando hace falta.</li>
            </ol>
            <p>El sistema no cambió: sigues eligiendo la herramienta mínima que resuelve bien el trabajo. La única diferencia es que ahora también eliges <em>qué motor</em>.</p>
        </div>

        <div class="aha-moment">
            <div class="aha-label">🔁 LLÉVALO A TU AUDITORÍA MENSUAL</div>
            <div class="aha-quote">"El catálogo cambia. Tu revisión de 30 minutos es donde lo absorbes sin estrés."</div>
            <div class="aha-body">En la auditoría mensual del Módulo 4 agrega una pregunta fija: <strong>"¿Anthropic cambió el catálogo de modelos este mes? ¿Eso cambia mi modelo por defecto o alguno de mis flujos?"</strong> Si salió uno nuevo, lo evalúas con calma; si retiraron el que usabas, eliges el reemplazo. Así nunca te toma por sorpresa — ni te obliga a perseguir cada anuncio.</div>
        </div>

        <div class="next-step-24h">
            <div class="next-step-label">⚡ TU TURNO — BONUS</div>
            <div class="next-step-body">
                <p>1) Abre el selector de modelo en Claude.ai y anota qué modelos tienes disponibles <strong>hoy</strong> (el catálogo de hoy, no el de hace un mes). 2) Define dos cosas: tu <strong>modelo por defecto</strong> (el del 80% del día) y tu <strong>modelo de escalada</strong> (el más capaz disponible, para lo difícil). 3) Anota en tu Project "Mi sistema Claude" dos reglas: <em>"Subo al modelo más potente cuando ___"</em> y <em>"Reviso el catálogo de modelos en mi auditoría mensual"</em>.</p>
                <p><strong>Criterio de éxito:</strong> tienes escrito tu modelo por defecto y tu criterio de escalada — expresados por su función, no por el nombre del modelo de moda, para que sigan valiendo cuando el catálogo cambie.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_fable_a">
            <div class="quiz-label">Quiz · Bonus</div>
            <div class="quiz-question">El caso Fable 5 (un modelo que Anthropic lanzó y poco después retiró) ilustra sobre todo que…</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_fable_a', this, false)">Siempre debes usar el modelo más nuevo apenas sale, porque los anteriores dejan de funcionar</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_fable_a', this, true)">Ningún modelo concreto es permanente: el catálogo cambia, así que conviene construir tu trabajo sobre un método de elección y no sobre un modelo específico</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_fable_a', this, false)">Los modelos de tope de gama no sirven para el trabajo profesional</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_fable_a', this, false)">Una vez que eliges un modelo no deberías cambiarlo nunca</div>
            </div>
            <div class="quiz-feedback" id="quiz_fable_a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_fable_b">
            <div class="quiz-label">Quiz · Bonus</div>
            <div class="quiz-question">¿Cuál es la regla correcta para elegir entre un modelo de tope de gama y el modelo estándar para una tarea?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_fable_b', this, false)">Usar siempre el más potente, porque da el mejor resultado en todo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_fable_b', this, false)">Usar siempre el más barato, porque la calidad no importa para el trabajo real</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_fable_b', this, true)">Usar el estándar (más rápido/barato) para el ~80% del día y escalar al más capaz solo cuando la tarea es genuinamente difícil o el costo de error es alto</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_fable_b', this, false)">Elegir al azar, porque todos los modelos son equivalentes</div>
            </div>
            <div class="quiz-feedback" id="quiz_fable_b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ MÓDULO BONUS 2 COMPLETADO. AHORA SABES:</div>
            <ul>
                <li>Que "el modelo más nuevo" nunca es la pregunta — la pregunta es qué motor resuelve esta tarea con mejor balance capacidad/costo</li>
                <li>El caso Fable 5: los modelos van y vienen; tu criterio para elegir es lo que permanece</li>
                <li>La regla de escalar: estándar para el ~80% del día, sube al más potente solo cuando lo amerita</li>
                <li>Que tu sistema (mapa, prompts, Revisor, CLAUDE.md) es a prueba de versiones Y de familias enteras</li>
                <li>Revisar el catálogo de modelos en tu auditoría mensual del Módulo 4</li>
            </ul>
            <div class="okr-next">→ <strong>Ahora sí: el examen de certificación.</strong> 15 preguntas sobre los 4 módulos del núcleo. (Los dos bonus no entran en el examen — son tuyos, de regalo.)</div>
        </div>
        `
    },

    // ==========================================================
    // EXAMEN DE CERTIFICACIÓN (l28)
    // ==========================================================

    {
        id: 'l28', module: 'Examen de certificación', tag: 'tag-exam', tagLabel: 'EXAMEN',
        title: 'Examen de certificación — CLAUDE SISTEMA',
        subtitle: 'Demuestra que tienes el sistema — 15 preguntas sobre los 4 módulos · Necesitas 11 correctas para certificarte',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">📋 SOBRE ESTE EXAMEN:</div>
            <ul>
                <li>15 preguntas que cubren los 4 módulos del curso</li>
                <li>Necesitas 11 respuestas correctas (73%) para aprobar y obtener tu certificado</li>
                <li>Puedes retomarlo si no apruebas — el sistema guarda tu mejor intento</li>
                <li>No hay trampa: si aprendiste el sistema, lo apruebas</li>
            </ul>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor antes del examen</div>
                <div class="instructor-note-text">Este examen no mide si memorizaste definiciones. Mide si entendiste la lógica del sistema — cuándo usar qué herramienta, por qué el orden importa, qué hace que un resultado sea predecible. Si hiciste los ejercicios del curso, este examen es una formalidad.</div>
            </div>
        </div>

        <div class="quiz-container" id="final_q1">
            <div class="quiz-label">Pregunta 1 de 15 — Módulo 0</div>
            <div class="quiz-question">¿Por qué Claude 4.x produce resultados que parecen "inferiores" cuando el usuario usa los mismos prompts que funcionaban bien con Claude 3.x?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('final_q1', this, false)">Porque Claude 4.x tiene un modelo más pequeño y menos capaz que Claude 3.x</div>
                <div class="quiz-option" onclick="checkQuiz('final_q1', this, true)">Porque Claude 4.x es literalmente obediente — hace exactamente lo que pides, ni más ni menos. Sin los 5 elementos del prompt completo, produce resultados mínimos en lugar de inferir lo que el usuario quería</div>
                <div class="quiz-option" onclick="checkQuiz('final_q1', this, false)">Porque Anthropic desactivó la capacidad creativa de Claude 4.x para cumplir regulaciones de IA</div>
                <div class="quiz-option" onclick="checkQuiz('final_q1', this, false)">Porque Claude 4.x solo funciona bien en inglés; el español produce respuestas de menor calidad</div>
            </div>
            <div class="quiz-feedback" id="final_q1_fb"></div>
        </div>

        <div class="quiz-container" id="final_q2">
            <div class="quiz-label">Pregunta 2 de 15 — Módulo 0</div>
            <div class="quiz-question">¿Cuál es el síntoma más claro de Context Rot en una conversación?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('final_q2', this, false)">Claude empieza a responder en un idioma diferente al que el usuario estaba usando</div>
                <div class="quiz-option" onclick="checkQuiz('final_q2', this, false)">La velocidad de respuesta se reduce significativamente después de 20 intercambios</div>
                <div class="quiz-option" onclick="checkQuiz('final_q2', this, true)">Las respuestas se vuelven más genéricas, Claude "olvida" instrucciones dadas hace 20 mensajes y empieza a repetirse — aunque el usuario no haya cambiado su forma de preguntar</div>
                <div class="quiz-option" onclick="checkQuiz('final_q2', this, false)">Claude deja de responder completamente y pide que se reinicie la conversación</div>
            </div>
            <div class="quiz-feedback" id="final_q2_fb"></div>
        </div>

        <div class="quiz-container" id="final_q3">
            <div class="quiz-label">Pregunta 3 de 15 — Módulo 1</div>
            <div class="quiz-question">¿Qué ventaja ofrece Research Mode respecto al Chat estándar para tareas de investigación?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('final_q3', this, false)">Research Mode tiene acceso al contexto de conversaciones anteriores del usuario para dar respuestas más personalizadas</div>
                <div class="quiz-option" onclick="checkQuiz('final_q3', this, true)">Hace múltiples búsquedas encadenadas en fuentes actualizadas y devuelve un reporte con citas verificables — a diferencia del Chat estándar que solo usa su conocimiento de entrenamiento</div>
                <div class="quiz-option" onclick="checkQuiz('final_q3', this, false)">Research Mode usa Extended Thinking automáticamente, lo que reduce los errores de razonamiento</div>
                <div class="quiz-option" onclick="checkQuiz('final_q3', this, false)">Permite subir más de 10 archivos simultáneamente, superando el límite del Chat estándar</div>
            </div>
            <div class="quiz-feedback" id="final_q3_fb"></div>
        </div>

        <div class="quiz-container" id="final_q4">
            <div class="quiz-label">Pregunta 4 de 15 — Módulo 1</div>
            <div class="quiz-question">¿Cuál es la ventaja principal de guardar un prompt como Skill en lugar de copiarlo desde un documento externo cada vez?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('final_q4', this, false)">Las Skills usan menos tokens que copiar el prompt manualmente, lo que reduce el costo mensual</div>
                <div class="quiz-option" onclick="checkQuiz('final_q4', this, true)">La Skill se activa con una sola palabra o frase dentro del Project, eliminando el fricción de buscar, copiar y pegar el prompt completo cada vez</div>
                <div class="quiz-option" onclick="checkQuiz('final_q4', this, false)">Las Skills permiten que Claude recuerde el output de sesiones anteriores con esa instrucción</div>
                <div class="quiz-option" onclick="checkQuiz('final_q4', this, false)">Las Skills activan automáticamente Extended Thinking para mayor profundidad en la respuesta</div>
            </div>
            <div class="quiz-feedback" id="final_q4_fb"></div>
        </div>

        <div class="quiz-container" id="final_q5">
            <div class="quiz-label">Pregunta 5 de 15 — Módulo 1</div>
            <div class="quiz-question">En un Project con instrucciones maestras bien configuradas, ¿qué debería suceder cuando abres una conversación nueva y haces una pregunta sin contexto adicional?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('final_q5', this, false)">Claude debe pedir confirmación de identidad antes de usar las instrucciones del Project para proteger la privacidad</div>
                <div class="quiz-option" onclick="checkQuiz('final_q5', this, false)">Claude debe responder en inglés primero y luego traducir al idioma del usuario</div>
                <div class="quiz-option" onclick="checkQuiz('final_q5', this, true)">Claude ya sabe quién eres, para qué usas la herramienta y cómo quieres que responda — la respuesta no necesita más de una corrección menor para ser usable</div>
                <div class="quiz-option" onclick="checkQuiz('final_q5', this, false)">Claude responde de forma genérica hasta que el usuario confirma que el Project está activo con el comando /project</div>
            </div>
            <div class="quiz-feedback" id="final_q5_fb"></div>
        </div>

        <div class="quiz-container" id="final_q6">
            <div class="quiz-label">Pregunta 6 de 15 — Módulo 2</div>
            <div class="quiz-question">¿Cuál es la diferencia entre una "instrucción única" y una "conversación de trabajo" en el Modo Socio?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('final_q6', this, false)">La instrucción única usa el modo Chat; la conversación de trabajo requiere un Project activo</div>
                <div class="quiz-option" onclick="checkQuiz('final_q6', this, true)">La instrucción única es un sprint de 10 segundos donde Claude ejecuta; la conversación de trabajo es una sesión de 20 minutos donde co-construyes algo que ninguno hubiera producido solo</div>
                <div class="quiz-option" onclick="checkQuiz('final_q6', this, false)">La conversación de trabajo consume 3x más tokens que la instrucción única para el mismo resultado</div>
                <div class="quiz-option" onclick="checkQuiz('final_q6', this, false)">La instrucción única es para texto; la conversación de trabajo es para análisis de datos y archivos</div>
            </div>
            <div class="quiz-feedback" id="final_q6_fb"></div>
        </div>

        <div class="quiz-container" id="final_q7">
            <div class="quiz-label">Pregunta 7 de 15 — Módulo 2</div>
            <div class="quiz-question">En el Pipeline Analítico, ¿qué produce la "calidad compuesta"?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('final_q7', this, false)">Usar Extended Thinking en todas las etapas del pipeline para mayor profundidad de razonamiento</div>
                <div class="quiz-option" onclick="checkQuiz('final_q7', this, false)">Subir todos los documentos a Claude en formato PDF en lugar de texto copiado</div>
                <div class="quiz-option" onclick="checkQuiz('final_q7', this, true)">Que cada etapa hereda el contexto y profundidad de la anterior — el análisis es más certero porque ya tiene la auditoría; el reporte es más sólido porque ya tiene la narrativa validada</div>
                <div class="quiz-option" onclick="checkQuiz('final_q7', this, false)">Ejecutar el mismo prompt 3 veces y tomar el promedio de las tres respuestas para reducir errores</div>
            </div>
            <div class="quiz-feedback" id="final_q7_fb"></div>
        </div>

        <div class="quiz-container" id="final_q8">
            <div class="quiz-label">Pregunta 8 de 15 — Módulo 2</div>
            <div class="quiz-question">¿Por qué las instrucciones de voz de marca ("usa oraciones cortas, empieza con pregunta, cierra con acción") son más efectivas que "escribe en tono profesional pero cercano"?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('final_q8', this, false)">Porque Claude 4.x ignora instrucciones de tono genéricas por políticas de contenido de Anthropic</div>
                <div class="quiz-option" onclick="checkQuiz('final_q8', this, true)">Porque las instrucciones concretas son replicables y consistentes — Claude sabe exactamente qué hacer; "tono cercano" es ambiguo y cada borrador interpretará esa vaguedad de forma diferente</div>
                <div class="quiz-option" onclick="checkQuiz('final_q8', this, false)">Porque las instrucciones largas se procesan en Extended Thinking automáticamente, mejorando el resultado</div>
                <div class="quiz-option" onclick="checkQuiz('final_q8', this, false)">Porque el tono profesional y el tono cercano son contradictorios y Claude no puede combinarlos sin instrucciones específicas</div>
            </div>
            <div class="quiz-feedback" id="final_q8_fb"></div>
        </div>

        <div class="quiz-container" id="final_q9">
            <div class="quiz-label">Pregunta 9 de 15 — Módulo 3</div>
            <div class="quiz-question">¿Qué hace que CLAUDE.md sea más valioso que simplemente re-explicar tus preferencias al inicio de cada sesión de Claude Code?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('final_q9', this, false)">CLAUDE.md permite a Claude Code acceder a internet para buscar contexto adicional sobre tu proyecto</div>
                <div class="quiz-option" onclick="checkQuiz('final_q9', this, false)">CLAUDE.md activa automáticamente el modo Agentic que desactiva las confirmaciones de seguridad</div>
                <div class="quiz-option" onclick="checkQuiz('final_q9', this, true)">Claude Code lo lee automáticamente al inicio de cada sesión — sin que lo menciones, tus reglas y preferencias están activas desde el primer momento. Además, Claude puede actualizarlo cuando aprende algo nuevo (Auto Memory)</div>
                <div class="quiz-option" onclick="checkQuiz('final_q9', this, false)">CLAUDE.md permite guardar el historial de comandos ejecutados para auditarlo después</div>
            </div>
            <div class="quiz-feedback" id="final_q9_fb"></div>
        </div>

        <div class="quiz-container" id="final_q10">
            <div class="quiz-label">Pregunta 10 de 15 — Módulo 3</div>
            <div class="quiz-question">¿Cuál es la diferencia práctica entre una automatización manual de Claude Code y una Rutina?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('final_q10', this, false)">Las Rutinas pueden procesar más de 1,000 archivos; las automatizaciones manuales tienen límite de 100</div>
                <div class="quiz-option" onclick="checkQuiz('final_q10', this, false)">Las automatizaciones manuales solo funcionan con archivos locales; las Rutinas acceden a la nube</div>
                <div class="quiz-option" onclick="checkQuiz('final_q10', this, true)">Las automatizaciones manuales las inicias tú cada vez; las Rutinas corren en horario fijo en servidores de Anthropic aunque tu computadora esté apagada</div>
                <div class="quiz-option" onclick="checkQuiz('final_q10', this, false)">Las Rutinas requieren suscripción Enterprise; las manuales están disponibles en Pro</div>
            </div>
            <div class="quiz-feedback" id="final_q10_fb"></div>
        </div>

        <div class="quiz-container" id="final_q11">
            <div class="quiz-label">Pregunta 11 de 15 — Módulo 3</div>
            <div class="quiz-question">Tienes una carpeta con 80 PDFs de contratos de clientes en tu computadora. ¿Cuál es la primera instrucción correcta para organizarlos con Claude Code?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('final_q11', this, false)">"Organiza todos los contratos por fecha y muévelos a subcarpetas por año" — ejecutar directamente</div>
                <div class="quiz-option" onclick="checkQuiz('final_q11', this, false)">"Elimina los contratos vencidos de más de 3 años" — para reducir el volumen antes de organizar</div>
                <div class="quiz-option" onclick="checkQuiz('final_q11', this, true)">"Analiza todos los PDFs de esta carpeta. Sin mover nada todavía, dime cuántos hay, de qué tipos y cómo los clasificarías" — ver el plan antes de ejecutar cualquier acción</div>
                <div class="quiz-option" onclick="checkQuiz('final_q11', this, false)">"Crea un backup de la carpeta completa en Google Drive" — como medida de seguridad obligatoria antes de cualquier organización</div>
            </div>
            <div class="quiz-feedback" id="final_q11_fb"></div>
        </div>

        <div class="quiz-container" id="final_q12">
            <div class="quiz-label">Pregunta 12 de 15 — Módulo 4</div>
            <div class="quiz-question">Un cliente te manda un Excel con datos de ventas de 12 meses y quiere un análisis. Los datos están en tu computadora. ¿Cuál es la secuencia correcta de herramientas?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('final_q12', this, false)">Chat con Research Mode primero (para contexto del mercado) → Code para extraer → Co-work para analizar</div>
                <div class="quiz-option" onclick="checkQuiz('final_q12', this, false)">Chat solo — subes el Excel como adjunto y pides el análisis directamente</div>
                <div class="quiz-option" onclick="checkQuiz('final_q12', this, true)">Code primero (extrae y limpia los datos del archivo en tu computadora) → Co-work con Pipeline Analítico (analiza con criterio consistente) → Chat con Artifacts (reporte HTML para el cliente)</div>
                <div class="quiz-option" onclick="checkQuiz('final_q12', this, false)">Co-work primero con el Pipeline (para definir qué analizar) → Code (para ejecutar el análisis) → Chat para presentar</div>
            </div>
            <div class="quiz-feedback" id="final_q12_fb"></div>
        </div>

        <div class="quiz-container" id="final_q13">
            <div class="quiz-label">Pregunta 13 de 15 — Módulo 4</div>
            <div class="quiz-question">¿Por qué en el Flujo del Proyecto de Consultoría la investigación con Research Mode va ANTES de abrir el Co-work con el Analista Estratégico?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('final_q13', this, false)">Porque Co-work no tiene acceso a internet y depende de Chat para obtener datos actualizados</div>
                <div class="quiz-option" onclick="checkQuiz('final_q13', this, true)">Porque el Analista Estratégico trabaja con el contexto que le das — si llega con investigación real, su análisis es más profundo y específico que si solo tiene el brief del cliente</div>
                <div class="quiz-option" onclick="checkQuiz('final_q13', this, false)">Porque Research Mode activa permisos especiales que Co-work necesita para procesar documentos largos</div>
                <div class="quiz-option" onclick="checkQuiz('final_q13', this, false)">Porque es obligatorio consultar fuentes antes de generar cualquier propuesta comercial según los términos de uso de Anthropic</div>
            </div>
            <div class="quiz-feedback" id="final_q13_fb"></div>
        </div>

        <div class="quiz-container" id="final_q14">
            <div class="quiz-label">Pregunta 14 de 15 — Módulo 4</div>
            <div class="quiz-question">¿Qué hace que el Project "Mi sistema Claude" mejore con el tiempo si se mantiene correctamente?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('final_q14', this, false)">Anthropic actualiza automáticamente las instrucciones del Project cuando lanza una nueva versión de Claude</div>
                <div class="quiz-option" onclick="checkQuiz('final_q14', this, false)">Los Projects aprenden de otras sesiones de usuarios con configuraciones similares mediante Machine Learning</div>
                <div class="quiz-option" onclick="checkQuiz('final_q14', this, true)">La auditoría mensual incorpora prompts refinados, flujos optimizados y nuevas capacidades de Claude — convirtiéndolo en un activo personalizado que mejora con la experiencia acumulada del usuario</div>
                <div class="quiz-option" onclick="checkQuiz('final_q14', this, false)">Claude Code actualiza automáticamente el Project cuando detecta que el usuario ha cambiado sus patrones de trabajo</div>
            </div>
            <div class="quiz-feedback" id="final_q14_fb"></div>
        </div>

        <div class="quiz-container" id="final_q15">
            <div class="quiz-label">Pregunta 15 de 15 — Sistema integrado</div>
            <div class="quiz-question">¿Cuál es la diferencia fundamental entre un usuario que "sabe usar Claude" y un usuario que "tiene un sistema"?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('final_q15', this, false)">El usuario con sistema tiene una suscripción de mayor nivel y acceso a más funciones avanzadas</div>
                <div class="quiz-option" onclick="checkQuiz('final_q15', this, false)">El usuario con sistema usa Claude más horas por día y tiene más experiencia acumulada</div>
                <div class="quiz-option" onclick="checkQuiz('final_q15', this, true)">El usuario con sistema produce resultados consistentes y predecibles — sabe qué herramienta usar, en qué orden y con qué instrucciones, independientemente de si tuvo un buen o mal día</div>
                <div class="quiz-option" onclick="checkQuiz('final_q15', this, false)">El usuario con sistema usa siempre los tres pilares (Chat, Co-work y Code) en cada tarea, mientras el básico solo usa uno</div>
            </div>
            <div class="quiz-feedback" id="final_q15_fb"></div>
        </div>
        `
    },

    // ==========================================================
    // PROYECTO FINAL (l29)
    // ==========================================================

    {
        id: 'l29', module: 'Proyecto final', tag: 'tag-exam', tagLabel: 'PROYECTO FINAL',
        title: 'Proyecto Final — Mi Sistema Claude',
        subtitle: 'El entregable que certifica que tienes un sistema funcionando — no solo el concepto',
        content: `
        <div class="lesson-okr-pre">
            <div class="okr-label">🏆 TU PROYECTO FINAL TIENE 5 COMPONENTES:</div>
            <ul>
                <li>Componente 1 — Tu mapa de decisión personal (tus 7 tareas más frecuentes clasificadas)</li>
                <li>Componente 2 — Tu Project "Mi sistema Claude" completo (instrucciones, glosario, plantillas, Skill)</li>
                <li>Componente 3 — Un flujo de trabajo documentado de 3+ pasos con 2+ herramientas</li>
                <li>Componente 4 — Tu primera automatización activa con evidencia de resultado real</li>
                <li>Componente 5 — Tu reflexión de cierre en 3 párrafos, en tu propia voz</li>
            </ul>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 POR QUÉ EXISTE ESTE PROYECTO</div>
            <div class="aha-quote">"Este proyecto no es para demostrarme a mí que aprendiste. Es para demostrarte a ti mismo que tienes un sistema que funciona."</div>
            <div class="aha-body">Terminar un curso no es lo mismo que dominar lo que el curso enseña. Muchas personas terminan módulos, pasan quizzes y reciben certificados — y al día siguiente siguen trabajando exactamente igual que antes. Este proyecto garantiza que eso no te pase.</div>
        </div>

        <div class="content-card">
            <h3>Componente 1 — Tu mapa de decisión personal</h3>
            <p>El árbol de decisión del curso adaptado a tus 7 tipos de tarea más frecuentes — no los ejemplos genéricos.</p>
            <p>Para cada tarea documenta: nombre de la tarea / herramienta que corresponde / modo específico (Research Mode, Artifacts, Revisor Crítico, pipeline, rutina) / una línea de justificación: "uso este modo porque ___"</p>
            <p><strong>Criterio de éxito:</strong> Alguien que te conoce puede leer tu mapa y decir "sí, esto es exactamente lo que hace." Si el mapa podría ser de cualquier profesional, no está listo.</p>
        </div>

        <div class="content-card">
            <h3>Componente 2 — Tu Project "Mi sistema Claude" completo</h3>
            <p>El Project que construiste durante el curso en su versión completa. Debe contener:</p>
            <ul>
                <li><strong>a) Instrucciones maestras:</strong> Quién eres, para qué usas la herramienta, cómo quieres que te trate. Mínimo 5 líneas.</li>
                <li><strong>b) Glosario vivo:</strong> Mínimo 10 términos técnicos de tu industria con la definición que quieres que Claude use.</li>
                <li><strong>c) Plantillas de tus 5 prompts más frecuentes:</strong> Con [corchetes] para las partes variables.</li>
                <li><strong>d) Al menos una Skill configurada:</strong> Un rol que uses de forma recurrente (Revisor Crítico, Analista de tu industria, etc.)</li>
            </ul>
            <p><strong>Criterio de éxito:</strong> Abres el Project con cualquier tarea de tu trabajo y obtienes una respuesta que suena como si Claude te conociera de años. Sin re-explicar quién eres.</p>
        </div>

        <div class="content-card">
            <h3>Componentes 3, 4 y 5</h3>
            <ul>
                <li><strong>Componente 3 — Flujo documentado:</strong> Un proceso real que haces al menos 2 veces al mes, descrito paso a paso con herramienta + modo + prompt exacto + output esperado para cada paso. Mínimo 3 pasos, mínimo 2 herramientas distintas.</li>
                <li><strong>Componente 4 — Automatización activa:</strong> Claude Code ejecutó al menos una tarea real en tu computadora (organización, extracción, generación, limpieza) con evidencia: captura antes, captura después, tiempo ahorrado.</li>
                <li><strong>Componente 5 — Reflexión de cierre:</strong> Tres párrafos en tu propia voz: qué cambió, qué harás diferente mañana (no "eventualmente" — mañana específicamente), y qué quieres dominar después. Si suena a Claude, reescríbelo.</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>Cómo entregar tu proyecto</h3>
            <ul>
                <li><strong>Opción A — Community VIP TRIKLES:</strong> Publica los 5 componentes en el hilo de Proyecto Final. Feedback del instructor en los primeros 3 días.</li>
                <li><strong>Opción B — Envío directo:</strong> Correo al instructor con asunto: "[Tu nombre] — Proyecto Final CLAUDE SISTEMA"</li>
            </ul>
            <p><strong>Certificado:</strong> Lo recibirás dentro de 48 horas después de que el instructor valide que los 5 componentes están completos. No hay nota — hay aprobado o pendiente. Si algo falta, se te dice qué mejorar con instrucciones específicas.</p>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ AL TERMINAR ESTE PROYECTO TENDRÁS:</div>
            <ul>
                <li>Un mapa de decisión que elimina la duda de "¿qué herramienta uso?" para siempre</li>
                <li>Un Project que funciona como tu asistente personal con tu contexto, voz y reglas</li>
                <li>Un flujo documentado que cualquier persona de confianza podría seguir y obtener resultados similares</li>
                <li>Una automatización real corriendo en tu computadora que ya te ahorró tiempo</li>
                <li>Tu certificado VIP TRIKLES — CLAUDE SISTEMA</li>
            </ul>
            <div class="okr-next">→ <strong>Tu sistema no termina aquí. Hoy empieza.</strong></div>
        </div>
        `
    }

    ]
};

window.COURSE_CLAUDE_SISTEMA = COURSE_CLAUDE_SISTEMA;
