// ============================================
// CURSO SOX EN LA PRÁCTICA — Obra original TRIKLES
// Sarbanes-Oxley y el Control Interno sobre la Información Financiera (ICFR)
// Contenido, estructura, casos y ejemplos 100% originales de Germán Solís / TRIKLES.
// La ley SOX es dominio público (obra del gobierno de EE.UU.). El marco COSO y
// los estándares del PCAOB tienen copyright: aquí se enseñan sus CONCEPTOS con
// palabras y diagramas propios; NO se reproduce el "cubo" COSO ni su texto.
// El certificado (nombre, folio, descargo SEP) lo inyecta curso.html vía
// ensureCertificateElement() al detectar id:'certificate'. NO incrustar aquí.
// ============================================

const COURSE_SOX = {
    id: 'sox',
    meta: {
        title: 'SOX en la Práctica',
        subtitle: 'Sarbanes-Oxley y el Control Interno sobre la Información Financiera (ICFR)',
        author: 'LADE Germán Solís Muñoz · OAC',
        originalWork: true,  // obra original: el sitio no debe decir "basado en el libro de..."
        cover: 'assets/covers/sox.svg',
        description: 'La formación profesional en Sarbanes-Oxley que casi no existe en español. Si trabajas —o auditas— en una subsidiaria mexicana de una empresa listada en Estados Unidos, o en un despacho que atiende a esos clientes, SOX es parte de tu trabajo. Este curso te lleva de cero a dominar la metodología completa: qué es la ley y a quién aplica, el marco COSO 2013, cómo se define el alcance y la materialidad, cómo se documentan y prueban los controles (matriz de riesgos, recorridos, diseño vs. operación, muestreo, ITGC, IPE, segregación de funciones) y cómo se evalúan las deficiencias hasta la debilidad material. 32 lecciones con casos, quizzes, examen final y certificado. Enfoque práctico de auditor, con el contexto mexicano siempre presente. Contenido verificado contra la propia ley, el estándar PCAOB AS 2201 y la guía de la SEC.',
        descripcionCorta: 'De cero a dominar la metodología SOX/ICFR: COSO, alcance, controles, pruebas y deficiencias — con enfoque de auditor y contexto mexicano.',
        category: 'Auditoría y control interno',
        lessonsCount: 32,
        duration: '12-15 horas',
        level: 'Intermedio · profesional',
        active: true,
        tags: ['SOX', 'Sarbanes-Oxley', 'ICFR', 'control interno', 'COSO', 'auditoría', 'PCAOB', 'cumplimiento', 'auditoría interna', 'contraloría'],

        // --- Coursera-like landing ---
        partnerName: 'TRIKLES',
        partnerTag: 'Formación Profesional',
        instructor: {
            name: 'LADE Germán Solís Muñoz',
            title: 'Auditor y consultor de control interno · TRIKLES',
            photo: 'assets/instructor-german.jpg',
            bio: 'Auditor interno en ejercicio y fundador de TRIKLES. Trabaja día a día con controles, riesgos y evidencia. Construyó este curso desde la práctica — no desde la teoría — para que un profesional de habla hispana entienda SOX de verdad y pueda ejecutarlo.'
        },
        estimatedHours: '~13 horas',
        schedule: 'Horario flexible · a tu ritmo',
        language: 'Español',
        includesCertificate: true,
        learningOutcomes: [
            'Explicar qué es SOX, por qué existe y a quién obliga — y por qué le importa a un profesional mexicano aunque sea ley de EE.UU.',
            'Distinguir con precisión 302, 404(a), 404(b) y 906, y quién está exento de qué',
            'Aplicar el marco COSO 2013 (5 componentes y 17 principios) al reporte financiero',
            'Definir alcance y materialidad con el enfoque top-down basado en riesgo, e identificar cuentas y aserciones significativas',
            'Documentar procesos y armar una matriz de riesgos y controles (RCM) que un auditor acepte',
            'Probar controles: recorridos, diseño vs. efectividad operativa, técnicas de evidencia y tamaños de muestra',
            'Evaluar una deficiencia y clasificarla correctamente: deficiencia, deficiencia significativa o debilidad material'
        ],
        skills: [
            'Metodología SOX / ICFR',
            'Marco COSO 2013',
            'Alcance y materialidad (TDRA)',
            'Matriz de riesgos y controles',
            'Controles generales de TI (ITGC)',
            'Segregación de funciones',
            'Pruebas de controles y muestreo',
            'Evaluación de deficiencias',
            'Aserciones de estados financieros',
            'Auditoría interna'
        ],
        tools: [
            'Plantilla mental de la matriz de riesgos y controles (RCM)',
            'Guía de tamaños de muestra por frecuencia de control',
            'Checklist de completitud y exactitud de IPE',
            'Árbol de decisión: ¿deficiencia, significativa o material?',
            'Examen final con certificado TRIKLES'
        ],
        details: [
            { label: 'Modalidad', value: 'Online · 100% asíncrono' },
            { label: 'Idioma', value: 'Español (MX)' },
            { label: 'Nivel', value: 'Intermedio · profesionales de finanzas/auditoría' },
            { label: 'Certificado', value: 'Certificado TRIKLES al aprobar examen final' },
            { label: 'Acceso', value: 'De por vida, incluye actualizaciones' }
        ],
        faq: [
            {
                q: '¿Necesito ser contador o auditor para tomarlo?',
                a: 'Ayuda, pero no es requisito. El curso arranca de cero: explica qué es un estado financiero, qué es un control y por qué importa. Está pensado para contralores, auditores internos, gente de control interno, TI que soporta procesos financieros y estudiantes de contaduría que quieren un diferenciador.'
            },
            {
                q: 'SOX es ley de Estados Unidos. ¿Para qué me sirve en México?',
                a: 'Porque su alcance llega a México por la propiedad y el listado. Empresas mexicanas listadas en Nueva York (América Móvil, CEMEX, Televisa) hacen SOX completo; y —lo más común— si trabajas en una subsidiaria mexicana de una matriz listada en EE.UU., tú ejecutas el trabajo SOX local. Es una habilidad muy pedida y escasa en español.'
            },
            {
                q: '¿El curso reemplaza a la ley o a los estándares oficiales?',
                a: 'No. Es formación: te enseña la metodología para que la entiendas y la apliques. Para el trabajo real siempre se consultan la ley, el estándar PCAOB AS 2201, la guía de la SEC y el marco COSO. El curso te da el mapa; las fuentes oficiales son el territorio.'
            },
            {
                q: '¿Está actualizado?',
                a: 'Sí. El contenido se verificó contra la propia ley (dominio público), el estándar vigente PCAOB AS 2201, las guías de la SEC (33-8810 y 33-8829) y el marco COSO 2013 — enseñando la definición ACTUAL de deficiencia significativa, no la derogada en 2007.'
            }
        ],

        reflectionQuestions: [
            '¿En qué parte de tu organización (o de una que audites) vive hoy el mayor riesgo de reporte financiero, y qué control lo mitiga?',
            '¿Qué vas a hacer distinto en tu próximo ciclo a partir de este curso (matriz de riesgos, prueba de IPE, precisión de un MRC, evaluación de deficiencias…)?',
            'Si tuvieras que explicarle a tu director por qué SOX no es "llenar papeles", ¿qué le dirías en tres frases?'
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
        22: ['quiz_l22a', 'quiz_l22b'],
        23: ['quiz_l23a', 'quiz_l23b'],
        24: ['quiz_l24a', 'quiz_l24b'],
        25: ['quiz_l25a', 'quiz_l25b'],
        26: ['quiz_l26a', 'quiz_l26b'],
        27: ['quiz_l27a', 'quiz_l27b'],
        28: ['quiz_l28a', 'quiz_l28b'],
        29: ['quiz_l29a', 'quiz_l29b'],
        30: ['final_q1','final_q2','final_q3','final_q4','final_q5','final_q6','final_q7','final_q8','final_q9','final_q10','final_q11','final_q12','final_q13','final_q14','final_q15'],
        31: []
    },

    examPassScore: 11,

    certificate: {
        courseNameForCert: 'SOX en la Práctica<br>Sarbanes-Oxley y el Control Interno sobre la Información Financiera (ICFR)',
        description: 'Habiendo demostrado dominio de la metodología Sarbanes-Oxley: el marco de control interno COSO 2013, la definición de alcance y materialidad con enfoque basado en riesgo, la documentación y prueba de controles (diseño y efectividad operativa, ITGC, segregación de funciones y evidencia), y la evaluación de deficiencias hasta la debilidad material, aplicado al contexto profesional de habla hispana.'
    },

    lessons: [

    // ==========================================================
    // LECCIÓN 0 — INTRO · POR QUÉ EXISTE ESTE CURSO
    // ==========================================================
    {
        id: 'intro', module: 'Introducción', tag: 'tag-intro', tagLabel: 'INTRODUCCIÓN',
        title: 'La habilidad que casi nadie enseña en español',
        subtitle: 'Qué es SOX, por qué le paga tan bien al que lo domina, y el mapa completo del curso',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#0a2540,#123a5e);min-height:160px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:28px;">
            <div style="text-align:center;">
                <div style="font-size:2.4em;">🏛️</div>
                <div style="font-size:1.5em;font-weight:800;letter-spacing:1px;">SOX EN LA PRÁCTICA</div>
                <div style="opacity:0.9;font-style:italic;margin-top:6px;">Sarbanes-Oxley y el control interno financiero</div>
            </div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué es SOX en una frase, y por qué es una de las habilidades mejor pagadas de finanzas</li>
                <li>Por qué a un profesional mexicano le importa una ley de Estados Unidos</li>
                <li>La diferencia entre "hacer papeles SOX" y entender la metodología (que es lo que este curso te da)</li>
                <li>El mapa de los 6 bloques del curso que vamos a recorrer juntos</li>
            </ul>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor · LADE Germán Solís Muñoz</div>
                <div class="instructor-note-text">Como auditor me tocó ver los dos lados: al que sufre SOX porque nadie se lo explicó bien —y lo vive como una montaña de formatos— y al que lo domina, y para quien es una carta de presentación que abre puertas y sueldos. La diferencia entre uno y otro no es inteligencia: es que alguien les enseñó el <em>porqué</em> detrás de cada requisito. Eso es exactamente lo que vas a encontrar aquí. No memorización: entendimiento.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>SOX en una sola frase</h3>
            <p><strong>SOX (la Ley Sarbanes-Oxley de 2002) obliga a las empresas que cotizan en Estados Unidos a demostrar —y a que un auditor lo confirme— que sus controles internos producen estados financieros confiables.</strong></p>
            <p>Nació después de los fraudes de <strong>Enron</strong> y <strong>WorldCom</strong>, que borraron miles de millones de dólares de ahorros de inversionistas y hundieron a una de las firmas de auditoría más grandes del mundo. La reacción del Congreso de EE.UU. fue esta ley. Su corazón es una idea simple: <em>no basta con que los números estén bien; hay que demostrar que el sistema que los produce es confiable.</em></p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 ¿POR QUÉ TE IMPORTA EN MÉXICO?</div>
            <div class="case-body">
                <p>SOX es ley gringa, sí. Pero te alcanza por dos caminos muy reales:</p>
                <p><strong>1. Empresas mexicanas listadas en Nueva York.</strong> América Móvil, CEMEX y Grupo Televisa cotizan en la Bolsa de Nueva York y hacen SOX completo, en México, todos los años.</p>
                <p><strong>2. Y el más común: subsidiarias.</strong> Si trabajas en la filial mexicana de una matriz listada en EE.UU. —una automotriz, una farmacéutica, una manufacturera, un banco— <strong>tú ejecutas el trabajo SOX local</strong>: documentas los procesos, pruebas los controles y reportas hacia la matriz. Miles de profesionales en México hacen esto, muchos sin que se los hayan explicado bien.</p>
                <p>Traducción: dominar SOX en español es raro, y lo raro se paga.</p>
            </div>
        </div>

        <div class="content-card tip">
            <h3>El mapa del curso · 6 bloques</h3>
            <p>Vamos a recorrer la metodología completa, de lo general a lo operativo:</p>
            <div style="margin:14px 0;padding:18px;background:#eef4fb;border-radius:8px;border-left:4px solid #0d47a1;">
                <p style="margin:6px 0;"><strong style="color:#0d47a1;">0 · Fundamentos.</strong> Qué es la ley, a quién aplica y quién vigila (SEC, PCAOB, COSO).</p>
                <p style="margin:6px 0;"><strong style="color:#0d47a1;">1 · El corazón: 404 e ICFR.</strong> La sección estrella, las certificaciones y el marco COSO 2013.</p>
                <p style="margin:6px 0;"><strong style="color:#0d47a1;">2 · Cómo se implementa.</strong> Alcance, materialidad, tipos de control y la matriz de riesgos y controles.</p>
                <p style="margin:6px 0;"><strong style="color:#0d47a1;">3 · Cómo se prueba.</strong> Recorridos, diseño vs. operación, evidencia, muestreo, IPE y segregación de funciones.</p>
                <p style="margin:6px 0;"><strong style="color:#0d47a1;">4 · El veredicto.</strong> Deficiencia, deficiencia significativa o debilidad material — y cómo se reporta.</p>
                <p style="margin:6px 0;"><strong style="color:#0d47a1;">5 · SOX en la práctica + México.</strong> Herramientas, errores comunes y cómo se relaciona con la regulación mexicana.</p>
            </div>
            <p>Al final, un examen de 15 preguntas y tu certificado TRIKLES.</p>
        </div>

        <div class="quiz-container" id="quiz_intro">
            <div class="quiz-label">Mini quiz de introducción</div>
            <div class="quiz-question">¿Cuál es la vía MÁS común por la que un profesional en México termina haciendo trabajo SOX?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_intro', this, false)">Porque la ley mexicana (CNBV) exige SOX a todas las empresas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_intro', this, true)">Porque trabaja en la subsidiaria mexicana de una matriz listada en Estados Unidos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_intro', this, false)">Porque el SAT lo pide en la contabilidad electrónica</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_intro', this, false)">Porque toda empresa con más de 100 empleados debe cumplir SOX</div>
            </div>
            <div class="quiz-feedback" id="quiz_intro_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Que SOX obliga a demostrar que los controles producen estados financieros confiables</li>
                <li>Que nació de los fraudes de Enron y WorldCom</li>
                <li>Que te alcanza en México por listado (ADRs) o —sobre todo— por ser subsidiaria de una matriz de EE.UU.</li>
                <li>El mapa de los 6 bloques del curso</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 1</strong> volvemos a 2001: cómo un gigante llamado Enron desató todo esto.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 1 — FUNDAMENTOS · EL ORIGEN: ENRON Y WORLDCOM
    // ==========================================================
    {
        id: 'l01', module: 'Módulo 0 · Fundamentos', tag: 'tag-s0', tagLabel: 'FUNDAMENTOS',
        title: 'Por qué existe SOX: el escándalo que lo cambió todo',
        subtitle: 'Enron, WorldCom y la caída de una firma de auditoría — y la ley que nació de las cenizas',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#0a2540,#123a5e);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">📉</div><div style="font-size:1.3em;font-weight:800;">EL ORIGEN</div><div style="opacity:0.9;font-style:italic;margin-top:4px;">2001-2002: el año en que se rompió la confianza</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué hicieron exactamente Enron y WorldCom para engañar a los inversionistas</li>
                <li>Por qué cayó Arthur Andersen y cómo los "Big 5" se volvieron "Big 4"</li>
                <li>Los 4 puntos de falla que SOX vino a arreglar</li>
                <li>Cuándo y quiénes firmaron la ley (y por qué el nombre "Sarbanes-Oxley")</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>Enron: la empresa que escondía sus deudas</h3>
            <p>Enron era un gigante de la energía, admirado en Wall Street. Su truco: usó <strong>entidades de propósito especial</strong> (empresas de papel) para <strong>sacar miles de millones de dólares de deuda de su balance</strong> y así aparentar una salud financiera que no tenía. Cuando la ilusión se destapó, colapsó en <strong>diciembre de 2001</strong>, evaporando alrededor de <strong>74,000 millones de dólares</strong> de valor para los accionistas y las pensiones de sus propios empleados.</p>
        </div>

        <div class="content-card">
            <h3>WorldCom: gastos disfrazados de inversión</h3>
            <p>Meses después, la telefónica WorldCom protagonizó un fraude aún mayor: registró <strong>gastos de operación ordinarios como si fueran inversiones (activos)</strong>. ¿El efecto? Inflar artificialmente las utilidades por unos <strong>3,800 millones de dólares</strong> (la cifra final rondó los 11,000 millones). Fue, en su momento, <strong>la quiebra más grande en la historia de Estados Unidos</strong>.</p>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL DETALLE QUE LO EXPLICA TODO</div>
            <div class="aha-quote">"El auditor era el mismo que ayudaba a maquillar."</div>
            <div class="aha-author">— El conflicto de interés en el centro del escándalo</div>
            <div class="aha-body">La firma que auditaba a Enron era <strong>Arthur Andersen</strong>, una de las 5 grandes del mundo. El problema: ganaba tanto o más por <em>consultoría</em> a Enron que por auditarla — así que tenía todos los incentivos para no incomodar al cliente. Cuando estalló el caso, Andersen <strong>trituró documentos</strong> para entorpecer la investigación. Fue condenada por obstrucción (la Corte Suprema anuló el fallo en 2005, pero para entonces la firma ya estaba destruida). Así los <strong>"Big 5" se volvieron "Big 4"</strong>. Por eso SOX ataca con dureza la independencia del auditor y la destrucción de documentos.</div>
        </div>

        <div class="quiz-container" id="quiz_l1a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿Cómo infló WorldCom sus utilidades?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l1a', this, false)">Escondiendo deuda en entidades de propósito especial</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l1a', this, true)">Registrando gastos de operación ordinarios como si fueran inversiones (activos)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l1a', this, false)">Vendiendo acciones a un precio inflado a sus empleados</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l1a', this, false)">Falsificando las firmas del CEO y el CFO</div>
            </div>
            <div class="quiz-feedback" id="quiz_l1a_fb"></div>
        </div>

        <div class="content-card tip">
            <h3>Los 4 puntos de falla que SOX vino a arreglar</h3>
            <ol class="concept-list">
                <li><strong>Directivos que se lavaban las manos</strong> ("yo no sabía qué había en mis estados financieros").</li>
                <li><strong>Auditores comprometidos</strong> por los jugosos honorarios de consultoría del mismo cliente.</li>
                <li><strong>Comités de auditoría débiles</strong> o capturados por la administración.</li>
                <li><strong>La profesión de auditoría se autorregulaba</strong> — y el modelo falló.</li>
            </ol>
            <p>La ley fue firmada el <strong>30 de julio de 2002</strong> por el presidente George W. Bush, con un respaldo casi unánime del Congreso. Su nombre oficial es <em>Public Company Accounting Reform and Investor Protection Act</em>, pero todos la llaman por sus autores: el senador <strong>Paul Sarbanes</strong> y el representante <strong>Michael Oxley</strong>.</p>
        </div>

        <div class="quiz-container" id="quiz_l1b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿Qué le pasó a Arthur Andersen, la firma que auditaba a Enron?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l1b', this, true)">Cayó tras triturar documentos y ser condenada por obstrucción; de los "Big 5" quedaron los "Big 4"</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l1b', this, false)">Fue absuelta y hoy sigue siendo la firma de auditoría más grande</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l1b', this, false)">Se fusionó con Enron para salvarla de la quiebra</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l1b', this, false)">Fue nombrada por SOX como reguladora de las demás firmas</div>
            </div>
            <div class="quiz-feedback" id="quiz_l1b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Enron escondió deuda; WorldCom disfrazó gastos como activos</li>
                <li>Arthur Andersen cayó por su conflicto de interés y por destruir documentos</li>
                <li>Los 4 puntos de falla que SOX vino a corregir</li>
                <li>La ley se firmó en 2002 y lleva el nombre de Sarbanes y Oxley</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 2</strong> abrimos la ley por dentro: sus títulos y las secciones que de verdad importan.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 2 — FUNDAMENTOS · LA LEY POR DENTRO
    // ==========================================================
    {
        id: 'l02', module: 'Módulo 0 · Fundamentos', tag: 'tag-s0', tagLabel: 'FUNDAMENTOS',
        title: 'La ley por dentro: las secciones que importan',
        subtitle: 'No necesitas memorizar 11 títulos — necesitas conocer 8 secciones clave',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#0a2540,#123a5e);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">📜</div><div style="font-size:1.3em;font-weight:800;">EL MAPA DE LA LEY</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Cómo está organizada SOX (títulos) sin perderte en el detalle</li>
                <li>Las 8 secciones que todo profesional SOX debe reconocer de memoria</li>
                <li>Qué hace cada una, en una línea</li>
                <li>Cuál es "la sección estrella" que veremos el resto del curso</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>El propósito, en una frase</h3>
            <p>Toda SOX persigue una sola cosa: <strong>restaurar la confianza del inversionista</strong> mejorando la exactitud y la confiabilidad de la información financiera. Para lograrlo hizo algo histórico: <strong>terminó con la autorregulación de los auditores</strong> creando un vigilante independiente (el PCAOB, que veremos en la Lección 4).</p>
        </div>

        <div class="content-card tip">
            <h3>Las 8 secciones que debes reconocer</h3>
            <div style="margin:14px 0;padding:16px;background:#eef4fb;border-radius:8px;border-left:4px solid #0d47a1;">
                <p style="margin:5px 0;"><strong>§302</strong> — El CEO y el CFO <strong>certifican personalmente</strong> cada reporte trimestral/anual (responsabilidad civil).</p>
                <p style="margin:5px 0;"><strong>§404</strong> — <strong>La estrella:</strong> control interno sobre el reporte financiero (ICFR). La administración lo evalúa (404a) y el auditor lo atestigua (404b).</p>
                <p style="margin:5px 0;"><strong>§906</strong> — La <strong>certificación penal</strong> del CEO/CFO (multas y cárcel si mienten a sabiendas).</p>
                <p style="margin:5px 0;"><strong>§301</strong> — El <strong>comité de auditoría</strong> debe ser 100% independiente y contratar al auditor.</p>
                <p style="margin:5px 0;"><strong>§802</strong> — Destruir o falsificar documentos para entorpecer una investigación = delito (hasta 20 años).</p>
                <p style="margin:5px 0;"><strong>§806</strong> — Protección al <strong>whistleblower</strong> (denunciante): prohíbe represalias.</p>
                <p style="margin:5px 0;"><strong>§407</strong> — Revelar si el comité de auditoría tiene un <strong>"experto financiero"</strong>.</p>
                <p style="margin:5px 0;"><strong>§201</strong> — El auditor <strong>no puede</strong> vender ciertos servicios de consultoría a su cliente de auditoría.</p>
            </div>
            <p>No hace falta más para empezar. El resto del curso profundiza sobre todo en la <strong>§404</strong> — el trabajo real, y el más caro, de SOX.</p>
        </div>

        <div class="quiz-container" id="quiz_l2a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿Cuál es "la sección estrella" de SOX, donde vive el grueso del trabajo?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l2a', this, false)">§302, la certificación del CEO/CFO</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l2a', this, true)">§404, el control interno sobre el reporte financiero (ICFR)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l2a', this, false)">§806, la protección al denunciante</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l2a', this, false)">§201, los servicios prohibidos al auditor</div>
            </div>
            <div class="quiz-feedback" id="quiz_l2a_fb"></div>
        </div>

        <div class="content-card">
            <h3>El objetivo real detrás de todo</h3>
            <p>Si tuvieras que resumir SOX en una idea: <em>quien firma los números responde por ellos, y hay que demostrar que el sistema que los produce funciona.</em> Todo lo demás —certificaciones, controles, comités, auditores independientes— son piezas para sostener esa idea. Tenla presente: cada vez que un requisito parezca burocrático, pregúntate a cuál de esos puntos sirve.</p>
        </div>

        <div class="quiz-container" id="quiz_l2b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿Qué logro histórico consiguió SOX respecto a los auditores?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l2b', this, false)">Prohibió por completo la profesión de auditoría externa</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l2b', this, true)">Terminó con su autorregulación, creando un vigilante independiente (el PCAOB)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l2b', this, false)">Los convirtió en empleados del gobierno de EE.UU.</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l2b', this, false)">Los obligó a auditar gratis a las empresas pequeñas</div>
            </div>
            <div class="quiz-feedback" id="quiz_l2b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>El propósito de SOX: restaurar la confianza del inversionista</li>
                <li>Las 8 secciones clave (302, 404, 906, 301, 802, 806, 407, 201) y qué hace cada una</li>
                <li>Que la §404 es donde vive el trabajo del curso</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 3</strong>: ¿a quién obliga realmente SOX? Y por qué te alcanza en México.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 3 — FUNDAMENTOS · ¿A QUIÉN APLICA?
    // ==========================================================
    {
        id: 'l03', module: 'Módulo 0 · Fundamentos', tag: 'tag-s0', tagLabel: 'FUNDAMENTOS',
        title: '¿A quién aplica SOX? (y por qué te alcanza en México)',
        subtitle: 'Emisores, empresas extranjeras, ADRs, exenciones — y el caso de las subsidiarias',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#0a2540,#123a5e);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">🌎</div><div style="font-size:1.3em;font-weight:800;">EL ALCANCE</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Quién está obligado a SOX (el concepto de "emisor")</li>
                <li>Qué pasa con las empresas extranjeras y los ADRs (y una trampa común)</li>
                <li>Quién está EXENTO del atestiguamiento del auditor (404b)</li>
                <li>Las dos vías por las que SOX aterriza en México</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>La regla base: los "emisores"</h3>
            <p>SOX aplica a los <strong>"issuers" (emisores)</strong>: las empresas con valores registrados ante la SEC, es decir, <strong>las empresas públicas de EE.UU.</strong> También alcanza a sus auditores y arrastra a sus subsidiarias al alcance del control interno de la matriz.</p>
            <p>Las <strong>empresas extranjeras registradas en la SEC</strong> (Foreign Private Issuers) <strong>también cumplen SOX</strong> — no hay descuento por ser de fuera; solo presentan otros formularios (el 20-F anual en vez del 10-K).</p>
        </div>

        <div class="content-card tip">
            <h3>⚠️ Trampa común · Los ADRs</h3>
            <p>Un ADR es la forma en que una empresa extranjera cotiza en EE.UU. Pero <strong>no todos los ADRs disparan SOX</strong>:</p>
            <ul>
                <li><strong>Nivel 2 y 3</strong> (listados en NYSE/Nasdaq, registrados en la SEC) → <strong>SOX completo</strong>.</li>
                <li><strong>Nivel 1</strong> (mercado OTC) y colocaciones privadas <strong>144A/Reg S</strong> → <strong>generalmente NO</strong> aplican SOX.</li>
            </ul>
            <p>Muchas fuentes dicen a la ligera "todo ADR = SOX". Es falso. Solo los ADRs <strong>listados/registrados</strong>.</p>
        </div>

        <div class="quiz-container" id="quiz_l3a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">Una empresa extranjera registrada en la SEC (un "Foreign Private Issuer")…</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l3a', this, false)">Está exenta de SOX por no ser estadounidense</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l3a', this, true)">Cumple SOX igual que una empresa de EE.UU., solo con otros formularios (20-F)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l3a', this, false)">Solo cumple la sección de whistleblower</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l3a', this, false)">Cumple una versión mexicana de SOX emitida por la CNBV</div>
            </div>
            <div class="quiz-feedback" id="quiz_l3a_fb"></div>
        </div>

        <div class="content-card">
            <h3>Quién está exento del 404(b)</h3>
            <p>Ojo con esta distinción, porque es de las más malentendidas. La evaluación de la administración (404a) la hacen <strong>casi todas</strong> las públicas. Pero el <strong>atestiguamiento del auditor (404b)</strong> tiene exenciones:</p>
            <ul>
                <li><strong>Non-accelerated filers</strong> (flotante público &lt; $75M) → exentos de 404(b) desde Dodd-Frank (2010).</li>
                <li><strong>Smaller Reporting Companies con ingresos &lt; $100M</strong> → exentos de 404(b) desde 2020.</li>
                <li><strong>Emerging Growth Companies</strong> (recién salidas a bolsa, JOBS Act) → exentas hasta 5 años.</li>
            </ul>
            <p>Todas ellas <strong>sí</strong> hacen 404(a), 302 y 906. Nunca digas "el auditor firma los controles de toda empresa pública": es falso.</p>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 LAS DOS VÍAS A MÉXICO</div>
            <div class="case-body">
                <p><strong>Vía 1 — Listado directo:</strong> América Móvil, CEMEX y Televisa cotizan en Nueva York → hacen SOX completo en México.</p>
                <p><strong>Vía 2 — Subsidiaria (la más común):</strong> si tu empresa es la filial mexicana de una matriz listada en EE.UU. y es financieramente material, <strong>tus procesos y controles entran al alcance del ICFR de la matriz</strong>. Tú documentas y pruebas en local; tu resultado sube a la certificación de la matriz. Además, el brazo mexicano de las firmas Big 4 que audita esa filial <strong>debe registrarse ante el PCAOB y puede ser inspeccionado por él</strong>. No es teoría: es el pan de cada día de miles de profesionales aquí.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l3b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">Una subsidiaria mexicana de una matriz listada en EE.UU., financieramente material…</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l3b', this, false)">No tiene nada que ver con SOX porque opera en México</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l3b', this, true)">Entra al alcance del ICFR de la matriz: documenta y prueba sus controles en local y reporta hacia arriba</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l3b', this, false)">Solo cumple SOX si factura más de mil millones de pesos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l3b', this, false)">Cumple SOX únicamente si cotiza ella misma en la bolsa mexicana</div>
            </div>
            <div class="quiz-feedback" id="quiz_l3b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>SOX aplica a los "emisores" (públicas de EE.UU.) y a las extranjeras registradas en la SEC</li>
                <li>Solo los ADRs listados (Nivel 2/3) disparan SOX</li>
                <li>Hay exenciones al 404(b), pero no al 404(a)/302/906</li>
                <li>México entra por listado directo o —sobre todo— por ser subsidiaria</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 4</strong> conoces a los cuatro jugadores del tablero: SEC, PCAOB, COSO y el auditor externo.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 4 — FUNDAMENTOS · LAS INSTITUCIONES
    // ==========================================================
    {
        id: 'l04', module: 'Módulo 0 · Fundamentos', tag: 'tag-s0', tagLabel: 'FUNDAMENTOS',
        title: 'Los cuatro jugadores: SEC, PCAOB, COSO y el auditor',
        subtitle: 'Quién hace qué en el ecosistema SOX — y cuál NO es lo que crees',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#0a2540,#123a5e);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">🎭</div><div style="font-size:1.3em;font-weight:800;">EL ECOSISTEMA</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué hace la SEC y por qué está al mando</li>
                <li>Qué es el PCAOB (y por qué NO es una agencia del gobierno)</li>
                <li>Qué es COSO y por qué no es "la ley" aunque todos lo usen</li>
                <li>El rol del auditor externo</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>SEC · el regulador al mando</h3>
            <p>La <strong>Securities and Exchange Commission</strong> es el regulador federal de los mercados de valores. Escribe las reglas que implementan SOX, hace cumplir la parte civil (multas, sanciones) y —clave— <strong>supervisa al PCAOB</strong>: aprueba su presupuesto, sus normas y sus sanciones.</p>
        </div>

        <div class="content-card tip">
            <h3>PCAOB · el vigilante de los auditores</h3>
            <p>El <strong>Public Company Accounting Oversight Board</strong> fue creado por SOX para acabar con la autorregulación. Datos que sorprenden:</p>
            <ul>
                <li><strong>NO es una agencia del gobierno</strong>: es una corporación privada sin fines de lucro, bajo supervisión de la SEC.</li>
                <li>Lo dirigen <strong>5 miembros</strong> nombrados por la SEC; <strong>máximo 2 pueden ser contadores</strong> (para que la profesión no lo capture).</li>
                <li>Se financia con cuotas a las empresas públicas, no con impuestos.</li>
                <li>Hace 4 cosas: <strong>registra</strong> a las firmas de auditoría, <strong>emite estándares</strong> (como el AS 2201 que veremos), las <strong>inspecciona</strong> y las <strong>sanciona</strong>.</li>
                <li>Inspecciona <strong>cada año</strong> a las firmas con &gt;100 emisores (las Big 4) y cada 3 años a las demás. Su alcance es internacional: registra e inspecciona firmas mexicanas que auditan a emisores de la SEC.</li>
            </ul>
        </div>

        <div class="quiz-container" id="quiz_l4a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿Qué es el PCAOB?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l4a', this, false)">Una agencia del gobierno de EE.UU. financiada con impuestos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l4a', this, true)">Una corporación privada sin fines de lucro, creada por SOX y supervisada por la SEC, que vigila a los auditores</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l4a', this, false)">La firma de auditoría más grande del mundo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l4a', this, false)">El comité de auditoría interno de cada empresa</div>
            </div>
            <div class="quiz-feedback" id="quiz_l4a_fb"></div>
        </div>

        <div class="content-card">
            <h3>COSO · el marco que todos usan (pero no es la ley)</h3>
            <p><strong>COSO</strong> es una iniciativa privada de 5 asociaciones profesionales (entre ellas el instituto de auditores internos, el de contadores y el de ejecutivos de finanzas). Publica el <strong>marco de Control Interno</strong> (versión original de 1992, actualizada en <strong>2013</strong>) que las empresas usan para cumplir la §404.</p>
            <p><strong>Dato importante:</strong> la ley SOX <strong>no menciona a COSO</strong>. COSO no es un requisito legal; es simplemente el marco que ganó por consenso. Cualquier marco reconocido y adecuado serviría — pero en la práctica, todos usan COSO. Lo veremos a fondo en el Módulo 1.</p>
        </div>

        <div class="content-card">
            <h3>El auditor externo · quien atestigua</h3>
            <p>Es la firma independiente registrada en el PCAOB que audita los estados financieros y —para las empresas grandes— realiza el <strong>atestiguamiento del ICFR (404b)</strong>. Está limitado por las reglas de independencia (no puede venderle ciertas consultorías al cliente) y es supervisado por el comité de auditoría y por el PCAOB.</p>
        </div>

        <div class="quiz-container" id="quiz_l4b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">Sobre COSO, ¿qué afirmación es correcta?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l4b', this, false)">La ley SOX obliga expresamente a usar COSO y prohíbe cualquier otro marco</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l4b', this, true)">Es el marco de control interno más usado para cumplir la §404, pero no es un requisito legal: la ley no lo menciona</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l4b', this, false)">Es la agencia del gobierno que sanciona a las empresas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l4b', this, false)">Es el nombre del formulario anual que se presenta a la SEC</div>
            </div>
            <div class="quiz-feedback" id="quiz_l4b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>La SEC manda y supervisa al PCAOB</li>
                <li>El PCAOB es privado (no gobierno), vigila a los auditores y llega hasta México</li>
                <li>COSO es el marco dominante, pero no es la ley</li>
                <li>El auditor externo atestigua el ICFR de las empresas grandes</li>
            </ul>
            <div class="okr-next">→ Fin del Módulo 0. En la <strong>Lección 5</strong> entramos al corazón: ¿qué es exactamente el ICFR?</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 5 — 404 E ICFR · QUÉ ES EL ICFR
    // ==========================================================
    {
        id: 'l05', module: 'Módulo 1 · El corazón: 404 e ICFR', tag: 'tag-s1', tagLabel: '404 E ICFR',
        title: '¿Qué es el ICFR?',
        subtitle: 'El control interno sobre la información financiera — ni más, ni menos',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#0d47a1,#123a5e);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">🎯</div><div style="font-size:1.3em;font-weight:800;">EL CORAZÓN: ICFR</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué significa exactamente ICFR (y qué NO es)</li>
                <li>Por qué es más angosto que "todos los controles de la empresa"</li>
                <li>Qué es la "seguridad razonable" y por qué no existe el control perfecto</li>
                <li>La diferencia entre ICFR y los "controles de revelación"</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>ICFR, letra por letra</h3>
            <p><strong>ICFR = Internal Control over Financial Reporting</strong> = Control Interno sobre la Información Financiera. Es el conjunto de controles que dan <strong>seguridad razonable de que los estados financieros externos son confiables</strong> y están preparados conforme a las normas contables aplicables.</p>
            <p>La palabra clave es <strong>angosto</strong>: ICFR es solo el pedazo del control interno que toca el <em>reporte financiero</em>. No es la seguridad informática de la empresa, no es la eficiencia operativa, no es el cumplimiento ambiental. Solo lo que puede hacer que los números publicados estén mal.</p>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA IDEA QUE EVITA MESES DE TRABAJO INÚTIL</div>
            <div class="aha-quote">"SOX no cubre 'toda la TI' ni 'todos los controles'. Cubre lo que puede ensuciar los estados financieros."</div>
            <div class="aha-author">— El error de alcance más caro del mundo SOX</div>
            <div class="aha-body">Muchos equipos novatos intentan documentar y probar <em>todo</em>: cada control de seguridad, cada proceso operativo. Se agotan y el auditor termina diciendo "nada de esto era ICFR". El arte de SOX —que veremos en el Módulo 2— es justo lo contrario: identificar el <strong>mínimo</strong> de controles que, si fallan, podrían provocar un error material en los estados financieros. Menos es más.</div>
        </div>

        <div class="quiz-container" id="quiz_l5a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿Qué abarca el ICFR?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l5a', this, false)">Todos los controles de seguridad informática de la empresa</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l5a', this, true)">Solo los controles que dan seguridad razonable de que los estados financieros externos son confiables</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l5a', this, false)">La eficiencia operativa y el cumplimiento ambiental de la empresa</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l5a', this, false)">Cualquier control, sin importar si toca o no los estados financieros</div>
            </div>
            <div class="quiz-feedback" id="quiz_l5a_fb"></div>
        </div>

        <div class="content-card tip">
            <h3>Seguridad razonable, no absoluta</h3>
            <p>El ICFR promete <strong>seguridad razonable</strong>, nunca absoluta. Por diseño, ningún sistema de control puede prevenir o detectar el 100% de los errores, por tres límites inherentes:</p>
            <ol class="concept-list">
                <li>El <strong>juicio humano</strong> se equivoca.</li>
                <li>Un directivo puede <strong>"pasar por encima" de los controles</strong> (management override).</li>
                <li>Dos o más personas pueden <strong>coludirse</strong> para burlarlos.</li>
            </ol>
            <p>Por eso "pasar SOX" no significa "aquí es imposible el fraude". Significa que hay un sistema razonable de defensa. Tenlo claro para no prometer de más.</p>
        </div>

        <div class="content-card">
            <h3>ICFR ≠ controles de revelación</h3>
            <p>Cuidado con confundirlos. Los <strong>controles de revelación</strong> (disclosure controls) cubren <em>toda</em> la información que se presenta a la SEC — incluida la no financiera (legal, riesgos, ciberseguridad). El <strong>ICFR</strong> es el subconjunto financiero. Se traslapan, pero no son lo mismo: la §302 certifica los dos; la §404 se enfoca en el ICFR.</p>
        </div>

        <div class="quiz-container" id="quiz_l5b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">"El ICFR da seguridad razonable, no absoluta." ¿Por qué?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l5b', this, false)">Porque las empresas no quieren gastar en controles perfectos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l5b', this, true)">Por límites inherentes: el juicio humano falla, un directivo puede saltarse los controles y puede haber colusión</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l5b', this, false)">Porque la SEC lo prohíbe expresamente</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l5b', this, false)">Porque el auditor solo revisa una parte del año</div>
            </div>
            <div class="quiz-feedback" id="quiz_l5b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>ICFR = controles que hacen confiables los estados financieros externos</li>
                <li>Es angosto: no es "toda la TI" ni "todos los controles"</li>
                <li>Da seguridad razonable, no absoluta (3 límites inherentes)</li>
                <li>No es lo mismo que los controles de revelación</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 6</strong> separamos de una vez 302, 404(a) y 404(b): quién hace qué.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 6 — 404 E ICFR · 302 vs 404(a) vs 404(b)
    // ==========================================================
    {
        id: 'l06', module: 'Módulo 1 · El corazón: 404 e ICFR', tag: 'tag-s1', tagLabel: '404 E ICFR',
        title: '302, 404(a) y 404(b): quién hace qué',
        subtitle: 'Las tres piezas que la gente confunde — y las exenciones que casi nadie explica',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#0d47a1,#123a5e);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">🧩</div><div style="font-size:1.3em;font-weight:800;">302 · 404(a) · 404(b)</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué certifica la §302 y cada cuánto</li>
                <li>La diferencia clave entre 404(a) y 404(b)</li>
                <li>Quién está exento de 404(b) (y por qué eso importa)</li>
                <li>Qué es la "auditoría integrada"</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>§302 · la certificación trimestral</h3>
            <p>Cada trimestre y cada año, el CEO y el CFO firman que revisaron el reporte, que no tiene errores materiales, que los estados financieros presentan razonablemente la situación de la empresa, y que <strong>son responsables de los controles</strong> y los han evaluado. Es una firma <strong>personal</strong>: pone su nombre —y su responsabilidad— sobre los números.</p>
        </div>

        <div class="content-card tip">
            <h3>§404 · las dos mitades</h3>
            <div style="margin:14px 0;padding:16px;background:#eef4fb;border-radius:8px;border-left:4px solid #0d47a1;">
                <p style="margin:6px 0;"><strong style="color:#0d47a1;">404(a) — La administración.</strong> Cada año, la empresa <strong>evalúa y declara</strong> si su ICFR es efectivo, usando un marco reconocido (COSO). Lo hacen <strong>casi todas</strong> las empresas públicas.</p>
                <p style="margin:6px 0;"><strong style="color:#0d47a1;">404(b) — El auditor.</strong> El auditor externo emite su <strong>propia opinión independiente</strong> sobre si el ICFR es efectivo. Solo aplica a las empresas <strong>grandes</strong> (accelerated y large accelerated filers).</p>
            </div>
            <p>Regla de oro: <strong>404(a) es la tarea de la empresa; 404(b) es la del auditor.</strong> No son lo mismo, y no siempre van juntas.</p>
        </div>

        <div class="quiz-container" id="quiz_l6a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿Cuál es la diferencia entre 404(a) y 404(b)?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l6a', this, false)">404(a) es para EE.UU. y 404(b) para empresas extranjeras</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l6a', this, true)">404(a) es la evaluación del ICFR por la administración; 404(b) es el atestiguamiento independiente del auditor externo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l6a', this, false)">404(a) es trimestral y 404(b) es mensual</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l6a', this, false)">Son sinónimos; da igual cuál se cite</div>
            </div>
            <div class="quiz-feedback" id="quiz_l6a_fb"></div>
        </div>

        <div class="content-card">
            <h3>Las exenciones (donde casi todos se equivocan)</h3>
            <p>El atestiguamiento del auditor <strong>404(b)</strong> tiene exenciones importantes:</p>
            <ul>
                <li><strong>Non-accelerated filers</strong> (flotante &lt; $75M) — exentos desde 2010.</li>
                <li><strong>Empresas pequeñas con ingresos &lt; $100M</strong> — exentas desde 2020.</li>
                <li><strong>Emerging Growth Companies</strong> (recién listadas) — exentas hasta 5 años.</li>
            </ul>
            <p>Todas ellas siguen haciendo <strong>404(a), 302 y 906</strong>. El mito de "el auditor certifica los controles de toda empresa pública" es, otra vez, falso.</p>
        </div>

        <div class="content-card">
            <h3>La auditoría integrada</h3>
            <p>Cuando aplica 404(b), el auditor no hace dos trabajos separados: hace una <strong>auditoría integrada</strong>, donde combina la auditoría de los estados financieros con la del ICFR en un solo esfuerzo. Emite <strong>dos opiniones</strong> (sobre los números y sobre los controles), pero con evidencia que se aprovecha de ida y vuelta. Lo veremos a detalle en el Módulo 4.</p>
        </div>

        <div class="quiz-container" id="quiz_l6b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">Una empresa pública pequeña exenta de 404(b)…</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l6b', this, false)">Queda libre de todo SOX</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l6b', this, true)">Sigue obligada a la evaluación de la administración (404a) y a las certificaciones 302 y 906</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l6b', this, false)">Solo debe cumplir la protección al denunciante</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l6b', this, false)">Debe contratar dos auditores en lugar de uno</div>
            </div>
            <div class="quiz-feedback" id="quiz_l6b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>§302: certificación personal del CEO/CFO cada trimestre y año</li>
                <li>404(a) = trabajo de la administración; 404(b) = trabajo del auditor</li>
                <li>404(b) tiene exenciones; 404(a)/302/906 casi no</li>
                <li>Cuando aplica 404(b), el auditor hace una auditoría integrada</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 7</strong>: las dos certificaciones que van juntas — una civil, una penal.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 7 — 404 E ICFR · LAS CERTIFICACIONES (302/906)
    // ==========================================================
    {
        id: 'l07', module: 'Módulo 1 · El corazón: 404 e ICFR', tag: 'tag-s1', tagLabel: '404 E ICFR',
        title: '302 y 906: la firma civil y la firma penal',
        subtitle: 'Por qué el CEO y el CFO firman DOS veces cada reporte — y qué arriesgan',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#0d47a1,#123a5e);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">✍️</div><div style="font-size:1.3em;font-weight:800;">LAS DOS FIRMAS</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Por qué 302 y 906 son DOS certificaciones distintas que van juntas</li>
                <li>Cuál es civil y cuál es penal — y quién las hace cumplir</li>
                <li>Las penas concretas del 906 (multas y cárcel)</li>
                <li>Qué protegen la §802 y la §806</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>302 vs 906 · la trampa favorita de los exámenes</h3>
            <div style="margin:14px 0;padding:16px;background:#eef4fb;border-radius:8px;border-left:4px solid #0d47a1;">
                <p style="margin:6px 0;"><strong style="color:#0d47a1;">§302 — Civil.</strong> Vive en la ley de valores (Título 15). La hace cumplir la <strong>SEC</strong>. Certifica que el reporte es correcto y que hay controles.</p>
                <p style="margin:6px 0;"><strong style="color:#0d47a1;">§906 — Penal.</strong> Vive en el Código Penal (Título 18). La hace cumplir el <strong>Departamento de Justicia (DOJ)</strong>. Certifica que el reporte cumple la ley y presenta razonablemente los números.</p>
            </div>
            <p>Ambas se firman <strong>juntas</strong>, en cada reporte. Pero son distintas: la gente las mezcla todo el tiempo. Una te puede costar dinero; la otra, la libertad.</p>
        </div>

        <div class="quiz-container" id="quiz_l7a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿Cuál es la diferencia clave entre la §302 y la §906?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l7a', this, false)">La 302 la firma el CEO y la 906 el CFO</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l7a', this, true)">La 302 es civil (la hace cumplir la SEC) y la 906 es penal (la hace cumplir el DOJ); van juntas pero son distintas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l7a', this, false)">La 302 es anual y la 906 solo se firma una vez en la vida de la empresa</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l7a', this, false)">Son la misma certificación con dos nombres</div>
            </div>
            <div class="quiz-feedback" id="quiz_l7a_fb"></div>
        </div>

        <div class="content-card">
            <h3>Las penas del 906 (aquí se pone serio)</h3>
            <p>Firmar en falso la certificación penal cuesta caro:</p>
            <ul>
                <li><strong>A sabiendas</strong> (knowing): hasta <strong>1 millón de dólares</strong> de multa y <strong>10 años</strong> de cárcel.</li>
                <li><strong>De forma deliberada</strong> (willful): hasta <strong>5 millones de dólares</strong> y <strong>20 años</strong> de cárcel.</li>
            </ul>
            <p>Esta es la razón por la que un CEO/CFO se toma tan en serio el ICFR: su firma no es un trámite, es una declaración con consecuencias penales. Y por eso la organización monta toda una cadena de "subcertificaciones" internas (dueños de proceso que firman hacia arriba) para respaldar esa firma final.</p>
        </div>

        <div class="content-card">
            <h3>§802 y §806 · documentos y denunciantes</h3>
            <p><strong>§802 —</strong> Destruir, alterar o falsificar documentos para entorpecer una investigación federal es delito, con penas de <strong>hasta 20 años</strong>. Nació directamente del triturado de papeles de Arthur Andersen. (Los auditores, además, deben conservar sus papeles de trabajo varios años.)</p>
            <p><strong>§806 —</strong> Protege al <strong>denunciante</strong> (whistleblower): prohíbe represalias contra el empleado que reporta un posible fraude. La queja se presenta ante el Departamento del Trabajo y da derecho a reinstalación y pago de salarios caídos.</p>
        </div>

        <div class="quiz-container" id="quiz_l7b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">La §802 de SOX nació directamente de…</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l7b', this, false)">El fraude de precios de la energía de Enron</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l7b', this, true)">La destrucción/triturado de documentos por parte de Arthur Andersen</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l7b', this, false)">La quiebra de un banco de inversión en 2008</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l7b', this, false)">Una filtración de datos de tarjetas de crédito</div>
            </div>
            <div class="quiz-feedback" id="quiz_l7b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>302 (civil, SEC) y 906 (penal, DOJ) van juntas pero son distintas</li>
                <li>Firmar en falso el 906 puede costar hasta $5M y 20 años</li>
                <li>§802 castiga destruir documentos; §806 protege al denunciante</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 8</strong> entramos a COSO 2013: los 5 componentes del control interno.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 8 — 404 E ICFR · COSO 2013: LOS 5 COMPONENTES
    // ==========================================================
    {
        id: 'l08', module: 'Módulo 1 · El corazón: 404 e ICFR', tag: 'tag-s1', tagLabel: '404 E ICFR',
        title: 'COSO 2013: los 5 componentes',
        subtitle: 'El marco que traduce "control interno" en algo que se puede auditar',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#0d47a1,#123a5e);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">🏗️</div><div style="font-size:1.3em;font-weight:800;">COSO · 5 COMPONENTES</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Las 3 categorías de objetivos de COSO (y dónde vive el ICFR)</li>
                <li>Los 5 componentes del control interno, en palabras claras</li>
                <li>Qué significa que un control interno sea "efectivo"</li>
            </ul>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor</div>
                <div class="instructor-note-text">El marco COSO tiene copyright, así que aquí te enseño <em>la idea</em> con mis propias palabras, no su texto ni su famoso "cubo". Es más: si entiendes el concepto, el diagrama sobra. Vamos a lo esencial.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>Primero, las 3 categorías de objetivos</h3>
            <p>COSO dice que el control interno sirve a tres tipos de objetivos:</p>
            <ol class="concept-list">
                <li><strong>Operación</strong> — que el negocio funcione con eficiencia y proteja sus activos.</li>
                <li><strong>Reporte</strong> — que la información (financiera y no financiera) sea confiable. <strong>Aquí vive el ICFR</strong> (reporte financiero externo).</li>
                <li><strong>Cumplimiento</strong> — que se respeten leyes y regulaciones.</li>
            </ol>
            <p>Para SOX solo nos importa el segundo, y en concreto el reporte financiero externo.</p>
        </div>

        <div class="content-card tip">
            <h3>Los 5 componentes (memorízalos)</h3>
            <div style="margin:14px 0;padding:16px;background:#eef4fb;border-radius:8px;border-left:4px solid #0d47a1;">
                <p style="margin:6px 0;"><strong style="color:#0d47a1;">1. Ambiente de control.</strong> El "tono desde arriba": ética, cultura, gobernanza. La base de todo lo demás.</p>
                <p style="margin:6px 0;"><strong style="color:#0d47a1;">2. Evaluación de riesgos.</strong> Identificar y analizar qué puede salir mal (incluido el fraude).</p>
                <p style="margin:6px 0;"><strong style="color:#0d47a1;">3. Actividades de control.</strong> Las acciones concretas que mitigan esos riesgos (aprobaciones, conciliaciones, validaciones del sistema).</p>
                <p style="margin:6px 0;"><strong style="color:#0d47a1;">4. Información y comunicación.</strong> Que la información de calidad fluya a donde el control la necesita, hacia arriba, abajo y afuera.</p>
                <p style="margin:6px 0;"><strong style="color:#0d47a1;">5. Monitoreo.</strong> Verificar, con el tiempo, que el sistema sigue funcionando (y corregir lo que falle).</p>
            </div>
            <p>Truco de memoria: <strong>Ambiente → Riesgos → Actividades → Información → Monitoreo</strong>. Van en un orden lógico: pones la base, ves qué puede fallar, actúas, comunicas y vigilas.</p>
        </div>

        <div class="quiz-container" id="quiz_l8a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿Cuáles son los 5 componentes de COSO 2013?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l8a', this, true)">Ambiente de control, Evaluación de riesgos, Actividades de control, Información y comunicación, Monitoreo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l8a', this, false)">Existencia, Integridad, Valuación, Derechos y Presentación</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l8a', this, false)">Planear, Hacer, Verificar, Actuar y Reportar</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l8a', this, false)">Diseño, Operación, Prueba, Deficiencia y Remediación</div>
            </div>
            <div class="quiz-feedback" id="quiz_l8a_fb"></div>
        </div>

        <div class="content-card">
            <h3>¿Cuándo es "efectivo" el control interno?</h3>
            <p>Según COSO, el control interno es efectivo cuando los <strong>5 componentes están presentes y funcionando</strong>, sus principios también, y —clave— <strong>operan juntos de forma integrada</strong>. Si un componente o principio relevante no está presente o no funciona, existe una <strong>deficiencia mayor</strong> y el control interno <em>no</em> puede considerarse efectivo. Los "principios" son el tema de la próxima lección.</p>
        </div>

        <div class="quiz-container" id="quiz_l8b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿Dónde vive el ICFR dentro de las categorías de objetivos de COSO?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l8b', this, false)">En la categoría de Operación</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l8b', this, true)">En la categoría de Reporte (en concreto, el reporte financiero externo)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l8b', this, false)">En la categoría de Cumplimiento</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l8b', this, false)">Fuera de COSO: el ICFR no usa este marco</div>
            </div>
            <div class="quiz-feedback" id="quiz_l8b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Las 3 categorías de objetivos; el ICFR vive en "Reporte"</li>
                <li>Los 5 componentes: Ambiente, Riesgos, Actividades, Información, Monitoreo</li>
                <li>Efectivo = los 5 (y sus principios) presentes, funcionando e integrados</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 9</strong>: los 17 principios que dan carne a esos 5 componentes.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 9 — 404 E ICFR · COSO 2013: LOS 17 PRINCIPIOS
    // ==========================================================
    {
        id: 'l09', module: 'Módulo 1 · El corazón: 404 e ICFR', tag: 'tag-s1', tagLabel: '404 E ICFR',
        title: 'COSO 2013: los 17 principios',
        subtitle: 'Cómo los 5 componentes se vuelven verificables',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#0d47a1,#123a5e);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">📐</div><div style="font-size:1.3em;font-weight:800;">LOS 17 PRINCIPIOS</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Por qué COSO añadió 17 principios en la versión 2013</li>
                <li>Qué principios cuelgan de cada componente (en tus palabras)</li>
                <li>Qué pasa si un principio relevante no está presente o no funciona</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>Por qué existen los principios</h3>
            <p>En 2013, COSO tradujo cada componente en principios concretos —<strong>17 en total</strong>— para que se pudieran <em>evaluar</em>. En vez de discutir si "hay buen ambiente de control", ahora preguntas cosas verificables: ¿existe un código de ética? ¿el consejo es independiente? Cada principio debe estar <strong>presente y funcionando</strong>.</p>
        </div>

        <div class="content-card tip">
            <h3>Los 17, agrupados por componente (en palabras propias)</h3>
            <div style="margin:12px 0;padding:14px;background:#eef4fb;border-radius:8px;border-left:4px solid #0d47a1;">
                <p style="margin:6px 0;"><strong style="color:#0d47a1;">Ambiente de control (1-5):</strong> 1) compromiso con la ética; 2) el consejo supervisa de forma independiente; 3) se definen estructuras y responsabilidades; 4) compromiso con la competencia del personal; 5) se exige rendición de cuentas.</p>
                <p style="margin:6px 0;"><strong style="color:#0d47a1;">Evaluación de riesgos (6-9):</strong> 6) objetivos claros; 7) identificar y analizar riesgos; 8) considerar el riesgo de fraude; 9) evaluar cambios significativos (del negocio, sistemas, entorno).</p>
                <p style="margin:6px 0;"><strong style="color:#0d47a1;">Actividades de control (10-12):</strong> 10) seleccionar controles que mitiguen riesgos; 11) controles generales sobre la tecnología (¡el gancho de los ITGC!); 12) desplegarlos vía políticas y procedimientos.</p>
                <p style="margin:6px 0;"><strong style="color:#0d47a1;">Información y comunicación (13-15):</strong> 13) usar información de calidad; 14) comunicar internamente; 15) comunicar con el exterior.</p>
                <p style="margin:6px 0;"><strong style="color:#0d47a1;">Monitoreo (16-17):</strong> 16) evaluaciones continuas y/o separadas; 17) evaluar y comunicar las deficiencias a tiempo.</p>
            </div>
            <p>No los memorices al pie de la letra. Memoriza <strong>cuántos</strong> hay por componente (5-4-3-3-2 = 17) y la <em>idea</em> de cada uno.</p>
        </div>

        <div class="quiz-container" id="quiz_l9a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿Cuántos principios tiene COSO 2013 en total?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l9a', this, false)">5 principios, uno por componente</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l9a', this, true)">17 principios, repartidos entre los 5 componentes</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l9a', this, false)">404 principios</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l9a', this, false)">3 principios, uno por categoría de objetivo</div>
            </div>
            <div class="quiz-feedback" id="quiz_l9a_fb"></div>
        </div>

        <div class="content-card">
            <h3>El gancho que conecta con TI</h3>
            <p>Fíjate en el <strong>principio 11</strong>: "controles generales sobre la tecnología". Ese principio es la razón por la que los <strong>ITGC</strong> (controles generales de TI) son parte de SOX. No es un capricho del auditor de sistemas: está en el marco. Lo veremos a fondo en el Módulo 2.</p>
            <p>Y recuerda la regla de la lección anterior: si un <strong>principio relevante no está presente o no funciona</strong>, hay una deficiencia mayor y el ICFR no es efectivo.</p>
        </div>

        <div class="quiz-container" id="quiz_l9b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">El principio 11 de COSO ("controles generales sobre la tecnología") es importante porque…</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l9b', this, false)">Obliga a usar un software específico de SOX</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l9b', this, true)">Es la base, dentro del propio marco, por la que los controles generales de TI (ITGC) forman parte de SOX</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l9b', this, false)">Prohíbe usar sistemas informáticos en el proceso financiero</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l9b', this, false)">Solo aplica a empresas de tecnología</div>
            </div>
            <div class="quiz-feedback" id="quiz_l9b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Los 17 principios hacen "evaluable" cada componente (5-4-3-3-2)</li>
                <li>El principio 11 ancla los ITGC dentro de SOX</li>
                <li>Un principio relevante ausente = ICFR no efectivo</li>
            </ul>
            <div class="okr-next">→ Fin del Módulo 1. En la <strong>Lección 10</strong> arranca la parte práctica: el alcance y la materialidad.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 10 — IMPLEMENTACIÓN · ALCANCE Y MATERIALIDAD
    // ==========================================================
    {
        id: 'l10', module: 'Módulo 2 · Cómo se implementa', tag: 'tag-s2', tagLabel: 'IMPLEMENTACIÓN',
        title: 'Alcance y materialidad: el arte de probar lo justo',
        subtitle: 'El enfoque "de arriba hacia abajo basado en riesgo" — y por qué probar de más es un error',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#00695c,#0a3d38);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">🔎</div><div style="font-size:1.3em;font-weight:800;">ALCANCE Y MATERIALIDAD</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué es el enfoque "top-down basado en riesgo" y por qué existe</li>
                <li>Qué es la materialidad y cómo se calcula (los números que se usan)</li>
                <li>La diferencia entre materialidad global y "de desempeño"</li>
                <li>Por qué probar de más (over-scoping) es tan malo como probar de menos</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>La meta del alcance</h3>
            <p>El objetivo es identificar el <strong>mínimo conjunto</strong> de cuentas, aserciones, ubicaciones y controles cuyo fallo podría provocar un <strong>error material</strong> en los estados financieros. Ni uno más, ni uno menos. Por eso el enfoque se llama <strong>top-down, basado en riesgo</strong>: se empieza a nivel de los estados financieros y de los controles a nivel entidad, y se baja hacia las cuentas y aserciones donde el riesgo es más alto.</p>
        </div>

        <div class="content-card tip">
            <h3>Materialidad · los números que se usan</h3>
            <p>La materialidad se fija a nivel de los estados financieros consolidados. Las referencias típicas de la práctica:</p>
            <ul>
                <li><strong>Materialidad global:</strong> alrededor del <strong>5% de la utilidad antes de impuestos</strong> (rango común 3%-5%). Si la utilidad es volátil o cercana a cero, se usa ~0.5% de ingresos o de activos totales.</li>
                <li><strong>Materialidad de desempeño</strong> ("tolerable"): un recorte por debajo de la global, típicamente <strong>50%-75%</strong> de ella. Sirve para decidir qué cuentas son lo bastante grandes como para importar.</li>
                <li><strong>Umbral trivial:</strong> ~5% de la materialidad; por debajo, un error se ignora.</li>
            </ul>
            <p>Importante: estos porcentajes son <strong>práctica</strong>, no ley. Son juicio profesional que se alinea con el auditor.</p>
        </div>

        <div class="quiz-container" id="quiz_l10a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">El enfoque "top-down basado en riesgo" busca…</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l10a', this, false)">Documentar y probar absolutamente todos los controles de la empresa</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l10a', this, true)">Identificar el mínimo de cuentas, aserciones y controles cuyo fallo podría causar un error material</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l10a', this, false)">Empezar por los controles más chiquitos e ir subiendo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l10a', this, false)">Probar solo los controles automáticos e ignorar los manuales</div>
            </div>
            <div class="quiz-feedback" id="quiz_l10a_fb"></div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL EQUILIBRIO QUE DEFINE A UN BUEN PROGRAMA SOX</div>
            <div class="aha-quote">"Probar de más quema el presupuesto; probar de menos te deja expuesto."</div>
            <div class="aha-author">— El dilema del alcance</div>
            <div class="aha-body">Un equipo que documenta 800 controles cuando 150 bastaban gasta el triple, cansa a todos y —irónicamente— no está más protegido. Uno que documenta 60 cuando faltaban 150 tiene un hueco por donde puede colarse un error material sin que nadie lo vea. El buen "scoping" es puntería: cubrir lo que importa con lo justo. Es la habilidad que separa a un profesional SOX de un llenador de formatos.</div>
        </div>

        <div class="content-card">
            <h3>Cobertura</h3>
            <p>No hay un mínimo legal, pero los programas suelen buscar cubrir entre <strong>60% y 90%</strong> de los ingresos, activos y utilidad consolidados con las unidades y cuentas dentro del alcance (un 75%-80% por cada renglón es una referencia interna común). La cobertura se documenta línea por línea.</p>
        </div>

        <div class="quiz-container" id="quiz_l10b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">La "materialidad de desempeño" (performance materiality) es…</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l10b', this, false)">Mayor que la materialidad global, para ser más estrictos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l10b', this, true)">Un recorte por debajo de la global (típicamente 50%-75%), para absorber el riesgo de errores no detectados</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l10b', this, false)">Un número fijado por ley en el 1% de los ingresos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l10b', this, false)">La materialidad que solo aplica al auditor, no a la empresa</div>
            </div>
            <div class="quiz-feedback" id="quiz_l10b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>El enfoque top-down basado en riesgo busca el mínimo suficiente</li>
                <li>Materialidad global ≈ 5% de la utilidad antes de impuestos; la de desempeño es un recorte</li>
                <li>Over-scoping y under-scoping son ambos errores</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 11</strong>: cuentas significativas y aserciones — cómo se elige qué probar.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 11 — IMPLEMENTACIÓN · CUENTAS Y ASERCIONES
    // ==========================================================
    {
        id: 'l11', module: 'Módulo 2 · Cómo se implementa', tag: 'tag-s2', tagLabel: 'IMPLEMENTACIÓN',
        title: 'Cuentas significativas y aserciones',
        subtitle: 'Cómo se decide qué cuentas importan y qué es exactamente lo que puede salir mal',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#00695c,#0a3d38);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">📊</div><div style="font-size:1.3em;font-weight:800;">CUENTAS Y ASERCIONES</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué hace "significativa" a una cuenta (y no es solo el tamaño)</li>
                <li>Qué son las aserciones y por qué son el idioma del control interno</li>
                <li>Las 5 aserciones del PCAOB (y por qué a veces oyes 7)</li>
                <li>Qué es una "aserción relevante"</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>Cuenta significativa</h3>
            <p>Una cuenta (o revelación) es <strong>significativa</strong> cuando tiene una <strong>posibilidad razonable de contener un error material</strong> — juzgada por su riesgo <em>inherente</em>, antes de considerar los controles. El tamaño ayuda (lo que supera la materialidad de desempeño suele entrar), pero <strong>no basta</strong>: hay factores cualitativos que meten cuentas chicas al alcance.</p>
        </div>

        <div class="content-card tip">
            <h3>Los factores cualitativos que meten cuentas chicas</h3>
            <ul>
                <li><strong>Susceptibilidad a fraude</strong> o a robo (efectivo, inventario atractivo).</li>
                <li><strong>Juicio y estimación</strong> (reservas, deterioro, valor razonable, reconocimiento de ingresos).</li>
                <li><strong>Transacciones complejas o no rutinarias.</strong></li>
                <li><strong>Cambios</strong> en el proceso, el sistema o la cuenta respecto al año anterior.</li>
            </ul>
            <p>Ejemplo: una cuenta de "provisiones" puede ser chica en pesos y aun así ser significativa por el enorme juicio que lleva.</p>
        </div>

        <div class="quiz-container" id="quiz_l11a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿Qué hace "significativa" a una cuenta?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l11a', this, false)">Únicamente su tamaño en pesos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l11a', this, true)">Que tenga posibilidad razonable de error material — por tamaño o por factores cualitativos como fraude, juicio o complejidad</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l11a', this, false)">Que el auditor la haya revisado el año pasado</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l11a', this, false)">Que aparezca en el estado de resultados y no en el balance</div>
            </div>
            <div class="quiz-feedback" id="quiz_l11a_fb"></div>
        </div>

        <div class="content-card">
            <h3>Las aserciones: el idioma del control</h3>
            <p>Una <strong>aserción</strong> es una afirmación implícita que la empresa hace sobre cada cifra. Son el idioma para decir "qué exactamente puede salir mal". El PCAOB usa <strong>5</strong>:</p>
            <div style="margin:12px 0;padding:14px;background:#e8f5f2;border-radius:8px;border-left:4px solid #00695c;">
                <p style="margin:5px 0;"><strong>Existencia / Ocurrencia</strong> — lo que está registrado existe / de verdad ocurrió.</p>
                <p style="margin:5px 0;"><strong>Integridad</strong> — todo lo que debía registrarse, se registró (no falta nada).</p>
                <p style="margin:5px 0;"><strong>Valuación / Asignación</strong> — está valuado por el importe correcto.</p>
                <p style="margin:5px 0;"><strong>Derechos y Obligaciones</strong> — la empresa realmente posee el activo / debe el pasivo.</p>
                <p style="margin:5px 0;"><strong>Presentación y Revelación</strong> — está clasificado y revelado correctamente.</p>
            </div>
            <p><strong>⚠️ Trampa clásica:</strong> AICPA/ISA desglosan más (añaden <em>Exactitud</em> y <em>Corte</em>), y por eso a veces oirás "7 aserciones". En el PCAOB, exactitud y corte se <em>subsumen</em> en las 5. Conoce ambas versiones.</p>
        </div>

        <div class="content-card">
            <h3>Aserción "relevante"</h3>
            <p>Para cada cuenta significativa, solo algunas aserciones son <strong>relevantes</strong>: aquellas con posibilidad razonable de error material. Ejemplo: en inventario suelen ser <em>Existencia</em> y <em>Valuación</em>; en un préstamo bancario, <em>Integridad</em> y <em>Derechos y Obligaciones</em>. <strong>Solo pruebas controles para las aserciones relevantes</strong> — no todas, para todo.</p>
        </div>

        <div class="quiz-container" id="quiz_l11b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿Cuántas aserciones usa el PCAOB, y qué pasa con "exactitud" y "corte"?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l11b', this, false)">7 aserciones, y exactitud y corte son dos de ellas por separado</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l11b', this, true)">5 aserciones; exactitud y corte quedan subsumidas dentro de ellas (AICPA/ISA sí las desglosan)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l11b', this, false)">3 aserciones, iguales a las 3 categorías de objetivos de COSO</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l11b', this, false)">17 aserciones, una por cada principio de COSO</div>
            </div>
            <div class="quiz-feedback" id="quiz_l11b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Cuenta significativa = posibilidad razonable de error material (tamaño + cualitativos)</li>
                <li>Las 5 aserciones del PCAOB y por qué a veces se oyen 7</li>
                <li>Solo se prueban controles para las aserciones relevantes de cada cuenta</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 12</strong>: los controles a nivel entidad vs. los de proceso.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 12 — IMPLEMENTACIÓN · ELC vs PROCESO
    // ==========================================================
    {
        id: 'l12', module: 'Módulo 2 · Cómo se implementa', tag: 'tag-s2', tagLabel: 'IMPLEMENTACIÓN',
        title: 'Controles a nivel entidad vs. a nivel proceso',
        subtitle: 'Los que abarcan toda la empresa, y los que viven dentro de un proceso',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#00695c,#0a3d38);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">🏛️</div><div style="font-size:1.3em;font-weight:800;">ELC vs PROCESO</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué son los controles a nivel entidad (ELC) y qué evidencian</li>
                <li>La diferencia con los controles a nivel proceso</li>
                <li>Por qué algunos ELC "precisos" pueden reducir pruebas de abajo</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>Controles a nivel entidad (ELC)</h3>
            <p>Los <strong>Entity-Level Controls</strong> operan sobre toda la organización, no dentro de una transacción. Son la forma de <strong>evidenciar los componentes "blandos" de COSO</strong> (ambiente, riesgos, información, monitoreo), que rara vez tienen un control transaccional. Ejemplos: el código de conducta, la supervisión del comité de auditoría, el proceso de evaluación de riesgos, la línea de denuncia, y —muy importante— los <strong>controles del cierre financiero</strong>.</p>
        </div>

        <div class="content-card tip">
            <h3>Los 3 niveles de "precisión" de un ELC</h3>
            <div style="margin:12px 0;padding:14px;background:#e8f5f2;border-radius:8px;border-left:4px solid #00695c;">
                <p style="margin:5px 0;"><strong>Indirectos / difusos</strong> (ej. el "tono desde arriba"): influyen, pero no se pueden confiar solos.</p>
                <p style="margin:5px 0;"><strong>De monitoreo</strong>: detectan fallas en controles de abajo (ej. una autoevaluación trimestral).</p>
                <p style="margin:5px 0;"><strong>Precisos</strong>: operan con tanto detalle que <strong>por sí solos</strong> pueden prevenir o detectar un error material (ej. una revisión mensual detallada de los estados financieros). Estos <strong>pueden reducir</strong> las pruebas de controles de proceso.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l12a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">Un control a nivel entidad (ELC) es…</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l12a', this, false)">Un control que solo existe en el proceso de ventas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l12a', this, true)">Un control que opera sobre toda la organización (tono, comité de auditoría, monitoreo, cierre financiero…)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l12a', this, false)">Un control automático programado en el ERP</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l12a', this, false)">Un control que solo aplica a la subsidiaria más grande</div>
            </div>
            <div class="quiz-feedback" id="quiz_l12a_fb"></div>
        </div>

        <div class="content-card">
            <h3>Controles a nivel proceso</h3>
            <p>Son los controles <strong>granulares dentro de un ciclo</strong>: el "match" de 3 vías entre orden, recepción y factura; la conciliación bancaria; la aprobación de una póliza de diario; la revisión de corte al cierre del mes. Cada uno ataca un riesgo concreto de una cuenta concreta.</p>
            <p>La relación entre ambos: los ELC ponen el marco general; los de proceso hacen el trabajo fino. Un buen programa usa los dos, y aprovecha los ELC precisos para no duplicar esfuerzo abajo.</p>
        </div>

        <div class="quiz-container" id="quiz_l12b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿Qué puede lograr un ELC "preciso" (como una revisión mensual detallada de los EEFF)?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l12b', this, false)">Nada: los ELC nunca reducen otras pruebas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l12b', this, true)">Por su nivel de detalle, puede reducir las pruebas de controles a nivel proceso</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l12b', this, false)">Reemplaza por completo la necesidad de un auditor externo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l12b', this, false)">Convierte a la empresa en exenta de la §404</div>
            </div>
            <div class="quiz-feedback" id="quiz_l12b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Los ELC operan sobre toda la empresa y evidencian los componentes "blandos" de COSO</li>
                <li>Los controles de proceso son granulares, dentro de un ciclo</li>
                <li>Un ELC preciso puede reducir las pruebas de abajo</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 13</strong>: ITGC, los tipos de control y los temidos MRC.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 13 — IMPLEMENTACIÓN · ITGC Y TIPOS DE CONTROL
    // ==========================================================
    {
        id: 'l13', module: 'Módulo 2 · Cómo se implementa', tag: 'tag-s2', tagLabel: 'IMPLEMENTACIÓN',
        title: 'ITGC, tipos de control y los MRC',
        subtitle: 'La capa de TI que sostiene todo, y el control que más reprueba en las inspecciones',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#00695c,#0a3d38);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">💻</div><div style="font-size:1.3em;font-weight:800;">ITGC Y TIPOS DE CONTROL</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Los 3-4 dominios de los ITGC (controles generales de TI)</li>
                <li>Por qué si los ITGC fallan, no puedes confiar en los controles automáticos</li>
                <li>Los ejes para clasificar cualquier control (auto/manual, preventivo/detectivo, clave/no-clave)</li>
                <li>Qué es un MRC y por qué es el hallazgo #1 del PCAOB</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>ITGC · los cimientos de TI</h3>
            <p>Los <strong>Controles Generales de TI</strong> hacen confiables a los sistemas de los que dependen los controles automáticos y los reportes. Sus dominios:</p>
            <div style="margin:12px 0;padding:14px;background:#e8f5f2;border-radius:8px;border-left:4px solid #00695c;">
                <p style="margin:5px 0;"><strong>1. Acceso lógico / seguridad:</strong> altas y bajas de usuarios, mínimo privilegio, revisiones periódicas de accesos, segregación de funciones, baja oportuna del que se va.</p>
                <p style="margin:5px 0;"><strong>2. Gestión de cambios:</strong> los cambios a los sistemas se solicitan, prueban, aprueban y migran por personas distintas; nada llega a producción sin control.</p>
                <p style="margin:5px 0;"><strong>3. Operaciones de TI:</strong> respaldos, recuperación, monitoreo de procesos por lotes (jobs), gestión de incidentes.</p>
                <p style="margin:5px 0;"><strong>4. (Desarrollo / SDLC):</strong> a veces se separa: adquisición y desarrollo de sistemas nuevos.</p>
            </div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 POR QUÉ LOS ITGC LO SOSTIENEN TODO</div>
            <div class="aha-quote">"Si la gestión de cambios está rota, no puedes confiar en ningún control automático que corra sobre ese sistema."</div>
            <div class="aha-author">— La razón por la que una falla de ITGC se vuelve pervasiva</div>
            <div class="aha-body">Un control automático (un "match" de 3 vías, un cálculo de intereses) es confiable solo si el sistema que lo ejecuta es confiable. ¿Y quién garantiza eso? Los ITGC. Si cualquiera puede cambiar el código en producción sin aprobación, entonces ese "match" pudo alterarse — y el auditor deja de confiar en él y en todo lo que descansa sobre ese sistema. Por eso una falla de ITGC suele escalar: contamina muchos controles a la vez.</div>
        </div>

        <div class="quiz-container" id="quiz_l13a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">Si los ITGC (por ejemplo, la gestión de cambios) fallan, ¿qué pasa con los controles automáticos que corren sobre ese sistema?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l13a', this, false)">Nada: los controles automáticos son independientes de los ITGC</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l13a', this, true)">Dejan de ser confiables, porque su correcta operación descansa sobre los ITGC</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l13a', this, false)">Se vuelven automáticamente más fuertes</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l13a', this, false)">Se convierten en controles manuales</div>
            </div>
            <div class="quiz-feedback" id="quiz_l13a_fb"></div>
        </div>

        <div class="content-card">
            <h3>Cómo clasificar cualquier control</h3>
            <ul>
                <li><strong>Automático vs. manual vs. dependiente de TI</strong> (una persona revisa, pero apoyada en un reporte del sistema).</li>
                <li><strong>Preventivo</strong> (evita el error antes: el sistema no deja postear una póliza descuadrada) <strong>vs. detectivo</strong> (lo encuentra después: una conciliación).</li>
                <li><strong>Clave vs. no clave</strong>: un control <strong>clave</strong> es aquel cuyo fallo, por sí solo, dejaría pasar un error material. Solo esos se prueban para SOX. No todo control documentado es clave.</li>
            </ul>
            <p>Bonus de los automáticos: como el software es consistente, basta <strong>probar una vez</strong> (test-of-one)… siempre que los ITGC funcionen.</p>
        </div>

        <div class="content-card tip">
            <h3>MRC · el control que más reprueba</h3>
            <p>Un <strong>Management Review Control</strong> (control de revisión gerencial) es cuando una persona revisa información y da seguimiento a lo que se sale de lo esperado: análisis de presupuesto vs. real, revisión de reservas, revisión de conciliaciones. Es el <strong>hallazgo #1 recurrente del PCAOB</strong>, por falta de <strong>precisión</strong>. Una firma que solo dice "revisado ✔" no sirve. Debe evidenciar: <em>¿qué revisó?, ¿qué umbral disparó el seguimiento?, ¿qué anomalías encontró y cómo las resolvió?</em></p>
        </div>

        <div class="quiz-container" id="quiz_l13b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿Por qué reprueban tan seguido los MRC en las inspecciones del PCAOB?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l13b', this, false)">Porque están prohibidos por SOX</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l13b', this, true)">Por falta de precisión: no evidencian qué se revisó, con qué umbral, ni cómo se resolvieron las excepciones</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l13b', this, false)">Porque solo los pueden hacer los auditores externos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l13b', this, false)">Porque son automáticos y las máquinas fallan</div>
            </div>
            <div class="quiz-feedback" id="quiz_l13b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Los dominios de los ITGC: acceso, cambios, operaciones (y desarrollo)</li>
                <li>Si los ITGC fallan, los controles automáticos dejan de ser confiables</li>
                <li>Los ejes para clasificar controles (auto/manual, preventivo/detectivo, clave/no-clave)</li>
                <li>Un MRC exige precisión: qué, con qué umbral, y cómo se resolvieron las excepciones</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 14</strong>: la documentación — narrativas, flujogramas y la matriz de riesgos y controles.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 14 — IMPLEMENTACIÓN · DOCUMENTACIÓN Y RCM
    // ==========================================================
    {
        id: 'l14', module: 'Módulo 2 · Cómo se implementa', tag: 'tag-s2', tagLabel: 'IMPLEMENTACIÓN',
        title: 'Documentación: narrativas, flujogramas y la matriz RCM',
        subtitle: 'El artefacto central de SOX — y cómo se conecta cada riesgo con su control',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#00695c,#0a3d38);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">🗂️</div><div style="font-size:1.3em;font-weight:800;">LA MATRIZ RCM</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Los 3 artefactos de documentación de SOX</li>
                <li>Qué columnas tiene una matriz de riesgos y controles (RCM)</li>
                <li>Qué es un "hueco de diseño" y cómo se detecta</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>Los 3 artefactos</h3>
            <ol class="concept-list">
                <li><strong>Narrativa de proceso:</strong> describe en prosa cómo fluye un ciclo de punta a punta — cómo se inicia, autoriza, procesa, registra y reporta una transacción, con qué sistemas, y "qué podría salir mal".</li>
                <li><strong>Flujograma:</strong> lo mismo, en dibujo, marcando dónde están los puntos de control.</li>
                <li><strong>Matriz de riesgos y controles (RCM):</strong> la tabla central de SOX, donde se cruza cada riesgo con el control que lo mitiga.</li>
            </ol>
        </div>

        <div class="content-card tip">
            <h3>Las columnas de la RCM</h3>
            <p>Una RCM típica incluye, por cada renglón:</p>
            <div style="margin:12px 0;padding:14px;background:#e8f5f2;border-radius:8px;border-left:4px solid #00695c;font-size:0.95em;">
                Proceso / cuenta afectada / <strong>aserción relevante</strong> / <strong>riesgo ("qué puede salir mal")</strong> / ID y descripción del control / dueño del control / frecuencia / tipo (preventivo-detectivo, manual-automático) / <strong>clave o no clave</strong> / dependencia de ITGC y reportes usados (IPE) / segregación de funciones / conclusión de prueba de diseño / conclusión de prueba operativa.
            </div>
            <p>La RCM es lo primero que pide el auditor. Bien hecha, cuenta toda la historia del control en una sola fila.</p>
        </div>

        <div class="quiz-container" id="quiz_l14a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿Cuál es el artefacto central de la documentación SOX?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l14a', this, false)">El estado de resultados</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l14a', this, true)">La matriz de riesgos y controles (RCM), donde se cruza cada riesgo con su control</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l14a', this, false)">El organigrama de la empresa</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l14a', this, false)">El contrato con el auditor externo</div>
            </div>
            <div class="quiz-feedback" id="quiz_l14a_fb"></div>
        </div>

        <div class="content-card">
            <h3>La regla de oro del mapeo riesgo-control</h3>
            <p>El principio que un auditor verifica: <strong>cada aserción relevante de cada cuenta significativa debe tener al menos un control clave</strong>, y cada control clave debe rastrearse a un riesgo. Si una aserción relevante <strong>no tiene ningún control</strong> que la cubra, eso es un <strong>hueco de diseño</strong> (design gap): un riesgo sin defensa. La RCM se hace precisamente para que esos huecos salten a la vista.</p>
        </div>

        <div class="quiz-container" id="quiz_l14b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">Si una aserción relevante de una cuenta significativa no tiene ningún control que la cubra, eso es…</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l14b', this, false)">Algo normal que no requiere atención</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l14b', this, true)">Un hueco de diseño (design gap): un riesgo sin defensa</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l14b', this, false)">Una debilidad material automática, sin más análisis</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l14b', this, false)">Un problema exclusivo del auditor externo</div>
            </div>
            <div class="quiz-feedback" id="quiz_l14b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Narrativa, flujograma y RCM: los 3 artefactos</li>
                <li>Las columnas de la RCM cuentan toda la historia del control</li>
                <li>Cada aserción relevante necesita un control clave; si no, hay hueco de diseño</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 15</strong>: el alcance multi-locación — clave si trabajas en una subsidiaria.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 15 — IMPLEMENTACIÓN · ALCANCE MULTI-LOCACIÓN
    // ==========================================================
    {
        id: 'l15', module: 'Módulo 2 · Cómo se implementa', tag: 'tag-s2', tagLabel: 'IMPLEMENTACIÓN',
        title: 'Alcance multi-locación (y por qué te importa como subsidiaria)',
        subtitle: 'Cómo decide la matriz qué ubicaciones prueba — y dónde caes tú',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#00695c,#0a3d38);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">🗺️</div><div style="font-size:1.3em;font-weight:800;">MULTI-LOCACIÓN</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Las 4 categorías en que se clasifican las ubicaciones/unidades</li>
                <li>Cómo un servicio centralizado reduce el trabajo en muchas ubicaciones</li>
                <li>Dónde cae, típicamente, una subsidiaria mexicana</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>Las 4 categorías de ubicaciones</h3>
            <div style="margin:12px 0;padding:14px;background:#e8f5f2;border-radius:8px;border-left:4px solid #00695c;">
                <p style="margin:6px 0;"><strong>1. Individualmente importantes</strong> (lo bastante grandes como para que ocurra ahí un error material): <strong>alcance completo</strong> de pruebas de ICFR.</p>
                <p style="margin:6px 0;"><strong>2. Con riesgos significativos específicos</strong> (aunque sean chicas): se prueban <strong>solo esos riesgos</strong>.</p>
                <p style="margin:6px 0;"><strong>3. Grupo de individualmente no importantes:</strong> se evalúa probar <strong>algunas por rotación</strong>, según la cobertura agregada.</p>
                <p style="margin:6px 0;"><strong>4. Inmateriales (individual y en conjunto):</strong> <strong>no se prueban</strong>.</p>
            </div>
        </div>

        <div class="content-card">
            <h3>El atajo de la centralización</h3>
            <p>Si el procesamiento y los controles están <strong>centralizados</strong> (un centro de servicios compartidos, un ERP común), la matriz puede cubrir muchas ubicaciones <strong>probando una sola vez</strong> los controles centrales. Por eso las multinacionales concentran procesos: reduce el costo SOX.</p>
        </div>

        <div class="quiz-container" id="quiz_l15a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">Una ubicación "individualmente importante" recibe…</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l15a', this, false)">Ninguna prueba, por confianza</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l15a', this, true)">Pruebas de ICFR de alcance completo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l15a', this, false)">Solo una encuesta de opinión</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l15a', this, false)">Pruebas únicamente cada 5 años</div>
            </div>
            <div class="quiz-feedback" id="quiz_l15a_fb"></div>
        </div>

        <div class="case-mexico">
            <div class="case-label">🇲🇽 DÓNDE CAES TÚ</div>
            <div class="case-body">
                <p>Si trabajas en la subsidiaria mexicana de una matriz de EE.UU., tu ubicación cae en la categoría <strong>1 o 2</strong> según su tamaño y sus riesgos. Si México es material para el consolidado, harás <strong>alcance completo</strong>: documentas tus procesos locales, pruebas tus controles y reportas hacia la matriz.</p>
                <p>Detalle práctico: probablemente pruebes en local (en español, sobre tu ERP), pero tengas que <strong>documentar para la matriz —a menudo en inglés—</strong> contra <em>su</em> materialidad y <em>su</em> marco. Tus deficiencias suben y se agregan a la evaluación del grupo. Tus fechas están amarradas al calendario del 10-K de la matriz.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l15b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿Cómo puede la matriz cubrir muchas ubicaciones probando una sola vez?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l15b', this, false)">Ignorando las ubicaciones chicas sin analizarlas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l15b', this, true)">Cuando el procesamiento y los controles están centralizados (servicios compartidos, ERP común): prueba los controles centrales una vez</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l15b', this, false)">Contratando un auditor distinto por país</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l15b', this, false)">Probando solo la ubicación más pequeña</div>
            </div>
            <div class="quiz-feedback" id="quiz_l15b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Las 4 categorías de ubicaciones y su nivel de prueba</li>
                <li>La centralización reduce el trabajo cubriendo muchas ubicaciones a la vez</li>
                <li>Una subsidiaria material hace alcance completo y reporta hacia la matriz</li>
            </ul>
            <div class="okr-next">→ Fin del Módulo 2. En la <strong>Lección 16</strong> arranca el "cómo se prueba": los recorridos.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 16 — PRUEBAS · RECORRIDOS (WALKTHROUGHS)
    // ==========================================================
    {
        id: 'l16', module: 'Módulo 3 · Cómo se prueba', tag: 'tag-s3', tagLabel: 'PRUEBAS',
        title: 'El recorrido (walkthrough)',
        subtitle: 'Seguir una transacción de principio a fin — y lo que un recorrido NO prueba',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#1565c0,#0d3a6b);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">🚶</div><div style="font-size:1.3em;font-weight:800;">EL RECORRIDO</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué es un recorrido y para qué sirve</li>
                <li>Qué técnicas combina</li>
                <li>El malentendido más común: qué NO prueba un recorrido</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>Qué es un recorrido</h3>
            <p>En un <strong>recorrido (walkthrough)</strong> tomas <strong>una sola transacción</strong> y la sigues de principio a fin —desde que nace hasta que aterriza en los registros contables— usando los mismos documentos y sistemas que usa la gente del proceso. Sirve para <strong>confirmar que entendiste el proceso</strong> y para evaluar el <strong>diseño</strong> de los controles. Suele hacerse una vez al año, al inicio del ciclo. En el atestiguamiento (404b), el auditor debe realizarlo o supervisarlo él mismo.</p>
        </div>

        <div class="content-card tip">
            <h3>Qué combina</h3>
            <p>Un buen recorrido mezcla las cuatro técnicas de una vez: <strong>preguntar</strong> (indagación), <strong>ver</strong> (observación), <strong>revisar documentos</strong> (inspección) y, cuando aplica, <strong>rehacer</strong> el paso (reejecución). Vas transacción en mano, preguntando "¿y aquí qué pasa?, ¿quién aprueba?, enséñame la evidencia".</p>
        </div>

        <div class="quiz-container" id="quiz_l16a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">Un recorrido (walkthrough) consiste en…</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l16a', this, false)">Probar 40 transacciones al azar de todo el año</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l16a', this, true)">Seguir una sola transacción de principio a fin para entender el proceso y evaluar el diseño de los controles</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l16a', this, false)">Entrevistar al CEO sobre la estrategia de la empresa</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l16a', this, false)">Revisar el estado de resultados del cierre anual</div>
            </div>
            <div class="quiz-feedback" id="quiz_l16a_fb"></div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">⚠️ EL MALENTENDIDO QUE HAY QUE EVITAR</div>
            <div class="aha-quote">"Un recorrido no prueba que el control funcione todo el año — solo que está bien diseñado."</div>
            <div class="aha-author">— Recorrido ≠ prueba de efectividad operativa</div>
            <div class="aha-body">Es tentador pensar "ya hice el recorrido, ya probé el control". No. El recorrido usa <strong>una</strong> transacción para entender y evaluar el <strong>diseño</strong>. Que el control opere <em>consistentemente durante todo el periodo</em> es otra prueba distinta (la efectividad operativa, próxima lección), que usa una <strong>muestra</strong>. Confundirlas es un error de principiante que el auditor detecta al instante.</div>
        </div>

        <div class="quiz-container" id="quiz_l16b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿Qué NO prueba un recorrido?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l16b', this, false)">El diseño del control</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l16b', this, false)">Que entendiste el proceso</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l16b', this, true)">La efectividad operativa (que el control funcionó consistentemente todo el periodo)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l16b', this, false)">Por dónde fluye la transacción</div>
            </div>
            <div class="quiz-feedback" id="quiz_l16b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>El recorrido sigue una transacción para entender el proceso y evaluar el diseño</li>
                <li>Combina las 4 técnicas de evidencia</li>
                <li>NO prueba la efectividad operativa — eso es otra prueba</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 17</strong>: las dos pruebas que importan — diseño y efectividad operativa.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 17 — PRUEBAS · DISEÑO vs EFECTIVIDAD OPERATIVA
    // ==========================================================
    {
        id: 'l17', module: 'Módulo 3 · Cómo se prueba', tag: 'tag-s3', tagLabel: 'PRUEBAS',
        title: 'Prueba de diseño vs. prueba de efectividad operativa',
        subtitle: 'Las dos preguntas que hay que responder sobre todo control',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#1565c0,#0d3a6b);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">🎚️</div><div style="font-size:1.3em;font-weight:800;">DISEÑO vs OPERACIÓN</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué pregunta responde la prueba de diseño (TOD)</li>
                <li>Qué pregunta responde la prueba de efectividad operativa (TOE)</li>
                <li>Por qué un control puede operar y aun así estar mal diseñado</li>
                <li>En qué orden se hacen</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>Las dos pruebas, siempre en este orden</h3>
            <div style="margin:14px 0;padding:16px;background:#eaf1fb;border-radius:8px;border-left:4px solid #1565c0;">
                <p style="margin:6px 0;"><strong style="color:#1565c0;">1. Prueba de diseño (TOD).</strong> Pregunta: <em>si el control opera como está diseñado, ¿prevendría o detectaría el error material?</em> Se prueba con indagación + observación + inspección del diseño.</p>
                <p style="margin:6px 0;"><strong style="color:#1565c0;">2. Prueba de efectividad operativa (TOE).</strong> Pregunta: <em>¿el control realmente operó durante todo el periodo, por alguien con la autoridad y la competencia para hacerlo?</em> Añade la <strong>reejecución</strong> y usa una <strong>muestra</strong> a lo largo del periodo.</p>
            </div>
            <p>Primero diseño, luego operación. No tiene sentido probar si un control funciona todo el año si de entrada está mal diseñado.</p>
        </div>

        <div class="quiz-container" id="quiz_l17a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿Qué pregunta responde la prueba de EFECTIVIDAD OPERATIVA?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l17a', this, false)">Si el control, de operar como se diseñó, atraparía el error</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l17a', this, true)">Si el control realmente operó durante todo el periodo, por alguien con autoridad y competencia</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l17a', this, false)">Cuánto cuesta el control</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l17a', this, false)">Si el control aparece en la RCM</div>
            </div>
            <div class="quiz-feedback" id="quiz_l17a_fb"></div>
        </div>

        <div class="content-card">
            <h3>Operar bien ≠ estar bien diseñado</h3>
            <p>Aquí está la sutileza: un control puede <strong>operar sin fallas</strong> y aun así ser <strong>inútil</strong> porque está mal diseñado. Ejemplo: alguien concilia el banco puntualísimo cada mes… pero la conciliación no incluye una cuenta clave. Opera perfecto, pero su diseño no cubre el riesgo. La <strong>prueba de diseño</strong> atrapa eso; la de operación, no. Por eso se hacen las dos.</p>
        </div>

        <div class="quiz-container" id="quiz_l17b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">Un control que se ejecuta puntualmente cada mes pero cuya conciliación omite una cuenta clave tiene…</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l17b', this, false)">Efectividad operativa perfecta, así que pasa sin problema</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l17b', this, true)">Un problema de diseño: opera bien, pero su diseño no cubre el riesgo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l17b', this, false)">Un problema que solo detectaría el recorrido, nunca la prueba de diseño</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l17b', this, false)">Ningún problema: si opera, está bien</div>
            </div>
            <div class="quiz-feedback" id="quiz_l17b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>TOD: ¿el diseño, de operar, atraparía el error?</li>
                <li>TOE: ¿operó de verdad todo el periodo, por quien debía?</li>
                <li>Un control puede operar bien y estar mal diseñado</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 18</strong>: las 4 técnicas de evidencia, de la más débil a la más fuerte.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 18 — PRUEBAS · TÉCNICAS Y EVIDENCIA
    // ==========================================================
    {
        id: 'l18', module: 'Módulo 3 · Cómo se prueba', tag: 'tag-s3', tagLabel: 'PRUEBAS',
        title: 'Las 4 técnicas de evidencia',
        subtitle: 'De la más débil a la más fuerte — y por qué "pregunté y me dijeron que sí" no basta',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#1565c0,#0d3a6b);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">🔬</div><div style="font-size:1.3em;font-weight:800;">TÉCNICAS DE EVIDENCIA</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Las 4 técnicas, ordenadas por fuerza de evidencia</li>
                <li>Por qué la indagación nunca basta sola</li>
                <li>Cuándo se necesita la evidencia más fuerte</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>Las 4 técnicas, de menor a mayor fuerza</h3>
            <div style="margin:14px 0;padding:16px;background:#eaf1fb;border-radius:8px;border-left:4px solid #1565c0;">
                <p style="margin:6px 0;"><strong>1. Indagación (preguntar)</strong> — la más débil. <strong>Nunca es suficiente por sí sola</strong>: hay que corroborarla.</p>
                <p style="margin:6px 0;"><strong>2. Observación (ver hacerlo)</strong> — solo prueba ese instante; ¿lo harán igual cuando nadie mira?</p>
                <p style="margin:6px 0;"><strong>3. Inspección (revisar documentos/evidencia)</strong> — firmas, aprobaciones, bitácoras, conciliaciones.</p>
                <p style="margin:6px 0;"><strong>4. Reejecución (rehacerlo tú)</strong> — la más fuerte: repites el control de forma independiente y confirmas el resultado.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l18a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">Ordena de MÁS DÉBIL a MÁS FUERTE:</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l18a', this, true)">Indagación → Observación → Inspección → Reejecución</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l18a', this, false)">Reejecución → Inspección → Observación → Indagación</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l18a', this, false)">Inspección → Indagación → Reejecución → Observación</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l18a', this, false)">Todas tienen exactamente la misma fuerza</div>
            </div>
            <div class="quiz-feedback" id="quiz_l18a_fb"></div>
        </div>

        <div class="content-card">
            <h3>Por qué "pregunté y me dijeron que sí" no basta</h3>
            <p>La indagación es útil para entender, pero como <strong>única</strong> evidencia no vale: la gente contesta lo que cree que quieres oír, o lo que <em>debería</em> pasar, no lo que pasa. Siempre hay que <strong>corroborar</strong> con inspección o reejecución. Y ojo: entre más <strong>riesgo</strong> tenga un control y más juicio implique, más fuerte debe ser la evidencia. Un control automático clave, además, exige revisar sus <strong>ITGC</strong>.</p>
        </div>

        <div class="quiz-container" id="quiz_l18b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿Por qué la indagación (preguntar) no basta por sí sola?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l18b', this, false)">Porque está prohibida por el PCAOB</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l18b', this, true)">Porque la gente responde lo que debería pasar, no lo que pasa; hay que corroborarla con inspección o reejecución</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l18b', this, false)">Porque toma demasiado tiempo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l18b', this, false)">Porque solo la puede hacer el auditor externo</div>
            </div>
            <div class="quiz-feedback" id="quiz_l18b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Indagación &lt; Observación &lt; Inspección &lt; Reejecución</li>
                <li>La indagación nunca basta sola: hay que corroborar</li>
                <li>A más riesgo y más juicio, evidencia más fuerte (y revisar ITGC en los automáticos)</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 19</strong>: cuántas muestras se prueban — y una advertencia importante.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 19 — PRUEBAS · TAMAÑOS DE MUESTRA
    // ==========================================================
    {
        id: 'l19', module: 'Módulo 3 · Cómo se prueba', tag: 'tag-s3', tagLabel: 'PRUEBAS',
        title: 'Tamaños de muestra por frecuencia',
        subtitle: 'Cuántas veces se prueba un control — y por qué estos números NO son ley',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#1565c0,#0d3a6b);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">🎲</div><div style="font-size:1.3em;font-weight:800;">TAMAÑOS DE MUESTRA</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Cuántas muestras se prueban según la frecuencia del control</li>
                <li>Por qué un control automático se prueba una sola vez</li>
                <li>La advertencia MÁS importante sobre estos números</li>
                <li>Qué pasa si encuentras una excepción</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>La tabla de referencia (control manual clave, riesgo moderado, sin excepciones esperadas)</h3>
            <div style="margin:12px 0;padding:14px;background:#eaf1fb;border-radius:8px;border-left:4px solid #1565c0;">
                <p style="margin:4px 0;"><strong>Anual</strong> → 1 &nbsp;·&nbsp; <strong>Trimestral</strong> → 2 &nbsp;·&nbsp; <strong>Mensual</strong> → 2 a 5</p>
                <p style="margin:4px 0;"><strong>Semanal</strong> → 5 a 15 &nbsp;·&nbsp; <strong>Diario</strong> → 15 a 40 (a menudo 20-25)</p>
                <p style="margin:4px 0;"><strong>Varias veces al día</strong> → 25 a 60 &nbsp;·&nbsp; <strong>Automático</strong> → 1 (test-of-one)</p>
            </div>
            <p>El automático se prueba <strong>una sola vez</strong> porque el software es consistente… <em>siempre que los ITGC funcionen</em>. Si los ITGC fallan, esa "prueba de uno" no vale.</p>
        </div>

        <div class="aha-moment">
            <div class="aha-label">⚠️ LA ADVERTENCIA MÁS IMPORTANTE DE ESTA LECCIÓN</div>
            <div class="aha-quote">"Estos números NO son ley. Vienen de la guía de muestreo del AICPA y de la metodología del auditor — y varían de firma en firma."</div>
            <div class="aha-author">— Alinéate SIEMPRE con tu auditor externo</div>
            <div class="aha-body">No hay un artículo de SOX que diga "prueba 25". Los tamaños salen del muestreo por atributos (nivel de confianza ~90%, cero excepciones esperadas) y de la metodología de cada firma: Deloitte, PwC, EY y KPMG difieren, sobre todo en controles diarios y de varias veces al día. Regla práctica de oro: <strong>alinea tus tamaños de muestra con los de tu auditor externo</strong>, para que pueda apoyarse en tus pruebas en vez de rehacerlas.</div>
        </div>

        <div class="quiz-container" id="quiz_l19a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿De dónde salen los tamaños de muestra de SOX?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l19a', this, false)">De un artículo específico de la ley SOX que fija los números</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l19a', this, true)">De la guía de muestreo del AICPA y de la metodología de cada firma auditora; conviene alinearlos con tu auditor</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l19a', this, false)">De la CNBV mexicana</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l19a', this, false)">Son siempre 30, para cualquier control</div>
            </div>
            <div class="quiz-feedback" id="quiz_l19a_fb"></div>
        </div>

        <div class="content-card">
            <h3>¿Y si encuentras una excepción?</h3>
            <p>Si en tu muestra aparece una <strong>desviación</strong> (el control no se ejecutó, o se ejecutó mal), en general <strong>ya no puedes concluir "efectivo"</strong> con esa muestra. Toca investigar si fue un caso aislado, evaluar ampliar la muestra, y valorar si estás ante una <strong>deficiencia</strong> (tema del Módulo 4). Una sola excepción no siempre es debilidad material — pero nunca se ignora.</p>
        </div>

        <div class="quiz-container" id="quiz_l19b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿Por qué un control automático se prueba una sola vez (test-of-one)?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l19b', this, false)">Porque los automáticos no importan para SOX</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l19b', this, true)">Porque el software es consistente: si funciona una vez funciona siempre… pero solo si los ITGC son efectivos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l19b', this, false)">Porque la ley exige exactamente una prueba</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l19b', this, false)">Porque nadie sabe cómo probarlos más veces</div>
            </div>
            <div class="quiz-feedback" id="quiz_l19b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>La tabla de muestras por frecuencia (anual 1 … varias/día 25-60; automático 1)</li>
                <li>Los números NO son ley: vienen del AICPA + la firma; alinéate con tu auditor</li>
                <li>Una excepción impide concluir "efectivo" con esa muestra: se investiga</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 20</strong>: el IPE — el punto que más reprueba junto con los MRC.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 20 — PRUEBAS · IPE
    // ==========================================================
    {
        id: 'l20', module: 'Módulo 3 · Cómo se prueba', tag: 'tag-s3', tagLabel: 'PRUEBAS',
        title: 'IPE: la información que genera la entidad',
        subtitle: 'El reporte del sistema en el que se apoya un control — y por qué revisar solo la firma no basta',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#1565c0,#0d3a6b);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">📄</div><div style="font-size:1.3em;font-weight:800;">IPE</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué es el IPE y por qué aparece en casi todo control</li>
                <li>Qué significa probar la "completitud y exactitud" (C&A) de un reporte</li>
                <li>El error clásico que deja un control "sin probar de verdad"</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>Qué es el IPE</h3>
            <p><strong>IPE = Information Produced by the Entity</strong> (información generada por la entidad). Es cualquier <strong>reporte, consulta o archivo de Excel</strong> que la empresa genera y usa <strong>para operar un control</strong> (o que el auditor usa como evidencia). Ejemplos: un reporte de antigüedad de cuentas por cobrar sobre el que el gerente hace su revisión, un auxiliar del ERP, un reporte de excepciones.</p>
        </div>

        <div class="content-card tip">
            <h3>Completitud y exactitud (C&A)</h3>
            <p>Si un control se apoya en un reporte, hay que demostrar que ese reporte es confiable: su <strong>completitud</strong> (trae todo lo que debía) y su <strong>exactitud</strong> (los datos son correctos). Se logra de dos formas: (a) probando los <strong>ITGC + la lógica/parámetros</strong> del reporte, o (b) <strong>verificando/rehaciendo</strong> los datos de forma independiente.</p>
        </div>

        <div class="aha-moment">
            <div class="aha-label">⚠️ EL ERROR CLÁSICO</div>
            <div class="aha-quote">"Probaste la firma del que revisó el reporte… pero no probaste el reporte. El control quedó sin probar de verdad."</div>
            <div class="aha-author">— IPE: hallazgo top del PCAOB junto con los MRC</div>
            <div class="aha-body">Imagina que el gerente revisa un reporte de antigüedad y lo firma. Tú documentas su firma y concluyes "control efectivo". Pero, ¿y si el reporte estaba mal —le faltaban facturas, o traía datos incorrectos—? Entonces la revisión, por diligente que fuera, se hizo sobre información basura. <strong>Revisar solo la firma sin probar el reporte deja el control esencialmente sin probar.</strong> Los Excel de usuario final (spreadsheets) son el punto débil más común.</div>
        </div>

        <div class="quiz-container" id="quiz_l20a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">Un control se apoya en un reporte del sistema (IPE). ¿Qué hay que hacer para poder confiar en el control?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l20a', this, false)">Basta con documentar la firma de quien revisó el reporte</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l20a', this, true)">Probar la completitud y exactitud (C&A) del reporte, además del control</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l20a', this, false)">Ignorar el reporte: no forma parte del control</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l20a', this, false)">Pedirle al auditor externo que lo pruebe por ti</div>
            </div>
            <div class="quiz-feedback" id="quiz_l20a_fb"></div>
        </div>

        <div class="content-card">
            <h3>Por qué es un hotspot</h3>
            <p>El IPE, junto con los MRC, es uno de los <strong>dos hallazgos más recurrentes</strong> en las inspecciones del PCAOB. La razón es humana: es fácil documentar la revisión visible (la firma) y olvidar la parte invisible (¿de dónde salió ese reporte y es confiable?). Un profesional SOX entrenado piensa siempre: <em>"todo reporte usado en un control es IPE hasta que demuestre lo contrario"</em>.</p>
        </div>

        <div class="quiz-container" id="quiz_l20b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿Cuál es el error clásico con el IPE?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l20b', this, false)">Probar demasiado el reporte y poco el control</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l20b', this, true)">Probar solo la firma de quien revisó el reporte, sin probar que el reporte mismo es completo y exacto</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l20b', this, false)">Usar reportes en los controles (eso está prohibido)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l20b', this, false)">Guardar el reporte en Excel en vez de en el ERP</div>
            </div>
            <div class="quiz-feedback" id="quiz_l20b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>IPE = todo reporte/archivo que alimenta un control</li>
                <li>Hay que probar su completitud y exactitud (C&A)</li>
                <li>Revisar solo la firma sin probar el reporte deja el control sin probar</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 21</strong>: segregación de funciones y el "roll-forward".</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 21 — PRUEBAS · SoD Y ROLL-FORWARD
    // ==========================================================
    {
        id: 'l21', module: 'Módulo 3 · Cómo se prueba', tag: 'tag-s3', tagLabel: 'PRUEBAS',
        title: 'Segregación de funciones y roll-forward',
        subtitle: 'Que nadie tenga el control completo — y cómo se cubre el tramo hasta el cierre',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#1565c0,#0d3a6b);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">✂️</div><div style="font-size:1.3em;font-weight:800;">SoD Y ROLL-FORWARD</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué es la segregación de funciones (SoD) y los conflictos clásicos</li>
                <li>Qué es un control "mitigante" cuando no se puede separar</li>
                <li>Qué es el roll-forward y por qué existe</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>Segregación de funciones (SoD)</h3>
            <p>La regla: <strong>una sola persona no debe poder iniciar Y aprobar</strong> la misma transacción. Conflictos clásicos:</p>
            <ul>
                <li><strong>Dar de alta un proveedor</strong> + <strong>liberar su pago.</strong></li>
                <li><strong>Registrar una póliza</strong> + <strong>aprobarla.</strong></li>
                <li><strong>Custodiar un activo</strong> + <strong>registrarlo.</strong></li>
            </ul>
            <p>Se administra en el ERP con el diseño de roles y reglas de conflicto de accesos. Cuando el acceso <strong>no se puede separar</strong> (equipos chicos), se pone un <strong>control mitigante</strong> (una revisión independiente). Los conflictos de SoD sin resolver son de las causas más comunes de deficiencias.</p>
        </div>

        <div class="quiz-container" id="quiz_l21a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿Cuál es un conflicto clásico de segregación de funciones?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l21a', this, false)">Que dos personas distintas revisen la misma conciliación</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l21a', this, true)">Que la misma persona pueda dar de alta un proveedor y liberar su pago</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l21a', this, false)">Que el auditor externo revise los estados financieros</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l21a', this, false)">Que el CEO firme la certificación §302</div>
            </div>
            <div class="quiz-feedback" id="quiz_l21a_fb"></div>
        </div>

        <div class="content-card tip">
            <h3>Roll-forward · cubrir el tramo hasta el cierre</h3>
            <p>Como las fechas de cierre son apretadas, mucha prueba se hace en una <strong>fecha intermedia</strong> (por ejemplo, hasta el tercer trimestre). El <strong>roll-forward</strong> cubre el tramo que falta —desde la fecha intermedia hasta el cierre— con: (1) indagar si el control <strong>cambió</strong>, y (2) probar una <strong>muestra adicional pequeña</strong> del tramo. A mayor tramo restante y mayor riesgo, más evidencia de roll-forward.</p>
            <p>Y ojo: si un control <strong>falló</strong> en la prueba intermedia, hay que <strong>remediarlo y volver a probarlo con una muestra nueva</strong> tras la corrección, durante un periodo suficiente, para poder concluir que era efectivo al cierre.</p>
        </div>

        <div class="quiz-container" id="quiz_l21b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿Para qué sirve el roll-forward?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l21b', this, false)">Para adelantar el cierre contable del año</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l21b', this, true)">Para cubrir el tramo entre la prueba intermedia y el cierre (indagar cambios + una muestra adicional pequeña)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l21b', this, false)">Para reprobar a propósito los controles débiles</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l21b', this, false)">Para eliminar la necesidad de probar en fechas intermedias</div>
            </div>
            <div class="quiz-feedback" id="quiz_l21b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>SoD: nadie inicia y aprueba lo mismo; si no se puede separar, va un control mitigante</li>
                <li>Los conflictos de SoD sin resolver son causa común de deficiencias</li>
                <li>El roll-forward cubre el tramo de la prueba intermedia al cierre</li>
            </ul>
            <div class="okr-next">→ Fin del Módulo 3. En la <strong>Lección 22</strong>: el veredicto — cómo se clasifica una deficiencia.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 22 — VEREDICTO · CLASIFICAR UNA DEFICIENCIA
    // ==========================================================
    {
        id: 'l22', module: 'Módulo 4 · El veredicto', tag: 'tag-s4', tagLabel: 'DEFICIENCIAS',
        title: 'Deficiencia, significativa o debilidad material',
        subtitle: 'Los 3 niveles de gravedad — y las 2 dimensiones que los deciden',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#283593,#151a4a);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">⚖️</div><div style="font-size:1.3em;font-weight:800;">EL VEREDICTO</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Los 3 niveles de gravedad de una deficiencia</li>
                <li>Las 2 dimensiones que deciden la gravedad (probabilidad y magnitud)</li>
                <li>La definición ACTUAL de deficiencia significativa (no la vieja)</li>
                <li>Por qué una deficiencia puede ser grave aunque no haya habido ningún error real</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>Los 3 niveles</h3>
            <div style="margin:14px 0;padding:16px;background:#eceffb;border-radius:8px;border-left:4px solid #283593;">
                <p style="margin:6px 0;"><strong style="color:#283593;">Deficiencia de control.</strong> El control no está diseñado u operado para prevenir o detectar errores a tiempo. Se comunica a la administración. Sin revelación pública.</p>
                <p style="margin:6px 0;"><strong style="color:#283593;">Deficiencia significativa.</strong> Menos severa que una debilidad material, <strong>pero importante como para merecer la atención de quienes supervisan el reporte financiero</strong>. Se comunica al <strong>comité de auditoría</strong>. Sin revelación pública.</p>
                <p style="margin:6px 0;"><strong style="color:#283593;">Debilidad material.</strong> Una deficiencia (o combinación) tal que hay <strong>posibilidad razonable</strong> de que un error <strong>material</strong> no se prevenga ni detecte a tiempo. <strong>Se revela públicamente</strong> y obliga a concluir que el ICFR NO es efectivo.</p>
            </div>
        </div>

        <div class="content-card">
            <h3>⚠️ La definición ACTUAL de deficiencia significativa</h3>
            <p>Cuidado con material viejo de internet. La definición vigente de <strong>deficiencia significativa</strong> es <strong>cualitativa</strong>: "menos severa que una debilidad material, pero importante para merecer la atención de quienes supervisan el reporte financiero". El viejo umbral de "más que intrascendente" (<em>more than inconsequential</em>) <strong>se eliminó en 2007</strong>. Enséñate la nueva; la vieja solo sirve como historia.</p>
        </div>

        <div class="quiz-container" id="quiz_l22a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">Una debilidad material es una deficiencia (o combinación) tal que…</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l22a', this, false)">El control cuesta demasiado dinero de operar</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l22a', this, true)">Hay posibilidad razonable de que un error material no se prevenga ni detecte a tiempo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l22a', this, false)">Al menos un empleado se quejó del control</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l22a', this, false)">El control es manual en lugar de automático</div>
            </div>
            <div class="quiz-feedback" id="quiz_l22a_fb"></div>
        </div>

        <div class="content-card tip">
            <h3>Las 2 dimensiones que deciden la gravedad</h3>
            <div style="margin:12px 0;padding:14px;background:#eceffb;border-radius:8px;border-left:4px solid #283593;">
                <p style="margin:6px 0;"><strong>Probabilidad</strong> (likelihood): ¿hay posibilidad razonable de que el control falle?</p>
                <p style="margin:6px 0;"><strong>Magnitud</strong>: ¿de qué tamaño sería el error potencial frente a la materialidad? (se mide por el saldo o el volumen de transacciones expuesto, no solo por el error observado).</p>
            </div>
            <p>Gravedad = probabilidad × magnitud. Y ojo: se puede reducir la gravedad si hay un <strong>control compensatorio</strong> lo bastante preciso como para atrapar lo que el otro dejó pasar.</p>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 EL PUNTO QUE CONFUNDE A TODOS</div>
            <div class="aha-quote">"Una deficiencia puede ser una debilidad material aunque los estados financieros estén correctos."</div>
            <div class="aha-author">— La gravedad no depende de si el error ocurrió</div>
            <div class="aha-body">La evaluación mira la <em>posibilidad razonable</em> y la <em>magnitud potencial</em> de un error — NO si de hecho ocurrió uno. Un control roto que "de milagro" no dejó pasar ningún error este año sigue siendo un control roto: si la exposición es material y la probabilidad de fallo es razonable, es debilidad material. No caigas en "no hubo error, entonces no hay problema".</div>
        </div>

        <div class="quiz-container" id="quiz_l22b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿La gravedad de una deficiencia depende de si de hecho ocurrió un error?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l22b', this, false)">Sí: si no hubo error, no hay deficiencia grave</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l22b', this, true)">No: se evalúa la posibilidad razonable y la magnitud potencial, no si el error ocurrió</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l22b', this, false)">Solo si el error superó el millón de dólares</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l22b', this, false)">Solo si lo detectó el auditor externo</div>
            </div>
            <div class="quiz-feedback" id="quiz_l22b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Los 3 niveles: deficiencia, significativa (al comité), debilidad material (pública)</li>
                <li>La definición ACTUAL de significativa es cualitativa (no "more than inconsequential")</li>
                <li>Gravedad = probabilidad × magnitud; los controles compensatorios pueden bajarla</li>
                <li>La gravedad no depende de si hubo error real</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 23</strong>: cómo se agregan las deficiencias y las señales de alarma.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 23 — VEREDICTO · AGREGACIÓN E INDICADORES
    // ==========================================================
    {
        id: 'l23', module: 'Módulo 4 · El veredicto', tag: 'tag-s4', tagLabel: 'DEFICIENCIAS',
        title: 'Agregación e indicadores de debilidad material',
        subtitle: 'Cuando varias deficiencias chicas suman una grande — y las 4 señales de alarma',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#283593,#151a4a);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">🚩</div><div style="font-size:1.3em;font-weight:800;">AGREGACIÓN E INDICADORES</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Por qué varias deficiencias chicas pueden sumar una debilidad material</li>
                <li>Las 4 señales de alarma que presumen una debilidad material</li>
                <li>Qué es la prueba del "funcionario prudente"</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>La agregación</h3>
            <p>Las deficiencias no se evalúan solo una por una: hay que verlas <strong>en conjunto</strong>. Varias deficiencias que afectan la <strong>misma cuenta o aserción</strong> pueden, sumadas, constituir una <strong>debilidad material</strong> aunque cada una por separado sea menos grave. Regla práctica: <em>varias deficiencias significativas apiladas en el mismo proceso o cuenta suelen escalar a debilidad material.</em> Las fallas de ITGC escalan fácil porque contaminan muchos controles a la vez.</p>
        </div>

        <div class="content-card tip">
            <h3>Las 4 señales de alarma (presumen debilidad material)</h3>
            <div style="margin:12px 0;padding:14px;background:#eceffb;border-radius:8px;border-left:4px solid #283593;">
                <p style="margin:6px 0;"><strong>1. Reexpresión</strong> de estados financieros ya emitidos para corregir un error <strong>material</strong>.</p>
                <p style="margin:6px 0;"><strong>2.</strong> El <strong>auditor encuentra</strong> un error material del periodo que los controles de la empresa <strong>no habrían atrapado</strong>.</p>
                <p style="margin:6px 0;"><strong>3. Supervisión ineficaz</strong> del reporte financiero por parte del <strong>comité de auditoría</strong>.</p>
                <p style="margin:6px 0;"><strong>4. Fraude de la alta dirección</strong> — sin importar el monto.</p>
            </div>
            <p>Si aparece cualquiera de estas, la presunción es fuerte: hay debilidad material.</p>
        </div>

        <div class="quiz-container" id="quiz_l23a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿Cuál de estas es una señal de alarma que presume una debilidad material?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l23a', this, false)">Que la empresa haya cambiado de auditor</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l23a', this, true)">Una reexpresión de estados financieros para corregir un error material</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l23a', this, false)">Que un control sea manual en lugar de automático</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l23a', this, false)">Que la empresa opere en más de un país</div>
            </div>
            <div class="quiz-feedback" id="quiz_l23a_fb"></div>
        </div>

        <div class="content-card">
            <h3>La prueba del "funcionario prudente"</h3>
            <p>Un cierre de sensatez: aunque la cuenta de probabilidad × magnitud parezca baja, si un <strong>funcionario prudente</strong> encargado del reporte financiero <strong>no aceptaría</strong> ese nivel de aseguramiento, la deficiencia se escala. Es el recordatorio de que esto no es solo aritmética: hay juicio profesional.</p>
        </div>

        <div class="quiz-container" id="quiz_l23b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">Tres deficiencias significativas, cada una menor, que afectan la MISMA cuenta…</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l23b', this, false)">Nunca pueden sumar algo más grave: cada una se evalúa aislada</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l23b', this, true)">Pueden, en conjunto, constituir una debilidad material (agregación)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l23b', this, false)">Se cancelan entre sí y desaparecen</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l23b', this, false)">Solo importan si las encontró el comité de auditoría</div>
            </div>
            <div class="quiz-feedback" id="quiz_l23b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Las deficiencias se agregan: varias chicas en la misma cuenta pueden sumar una material</li>
                <li>Las 4 señales de alarma (reexpresión, error que el control no atrapó, comité ineficaz, fraude de dirección)</li>
                <li>La prueba del funcionario prudente añade juicio a la aritmética</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 24</strong>: cómo se reporta todo esto — gerencia vs. auditor.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 24 — VEREDICTO · EL REPORTE
    // ==========================================================
    {
        id: 'l24', module: 'Módulo 4 · El veredicto', tag: 'tag-s4', tagLabel: 'DEFICIENCIAS',
        title: 'El reporte: gerencia vs. auditor',
        subtitle: 'Qué revela cada quién — y por qué una opinión adversa de ICFR no hunde a los estados financieros',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#283593,#151a4a);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">📢</div><div style="font-size:1.3em;font-weight:800;">EL REPORTE</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué revela la administración (404a) y qué el auditor (404b)</li>
                <li>Qué se hace público y qué se queda en el comité de auditoría</li>
                <li>Por qué una opinión adversa de ICFR no significa opinión adversa de los estados financieros</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>Quién reporta qué</h3>
            <div style="margin:14px 0;padding:16px;background:#eceffb;border-radius:8px;border-left:4px solid #283593;">
                <p style="margin:6px 0;"><strong style="color:#283593;">Administración (404a):</strong> declara su responsabilidad sobre el ICFR, el marco que usó (COSO) y su conclusión de efectividad. <strong>Si hay ≥1 debilidad material, NO puede concluir que el ICFR es efectivo</strong>: debe declararlo "no efectivo" y describir la debilidad. Solo se revelan las <strong>debilidades materiales</strong>.</p>
                <p style="margin:6px 0;"><strong style="color:#283593;">Auditor (404b):</strong> emite su <strong>propia opinión</strong> sobre el ICFR. Si hay debilidad material, la opinión es <strong>adversa</strong> (nunca "con salvedad"), y describe la debilidad.</p>
            </div>
            <p>Las <strong>deficiencias significativas</strong> NO se hacen públicas: se comunican por escrito al <strong>comité de auditoría</strong>. Solo las debilidades materiales llegan al público (en el reporte anual).</p>
        </div>

        <div class="quiz-container" id="quiz_l24a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿Qué se revela públicamente y qué se queda en el comité de auditoría?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l24a', this, false)">Todo se hace público: deficiencias, significativas y materiales</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l24a', this, true)">Solo las debilidades materiales se revelan al público; las significativas se comunican al comité de auditoría</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l24a', this, false)">Nada se revela: SOX es confidencial</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l24a', this, false)">Solo las deficiencias significativas se hacen públicas</div>
            </div>
            <div class="quiz-feedback" id="quiz_l24a_fb"></div>
        </div>

        <div class="aha-moment">
            <div class="aha-label">💡 LA DISTINCIÓN QUE SALVA MALENTENDIDOS</div>
            <div class="aha-quote">"Opinión adversa de ICFR ≠ opinión adversa de los estados financieros."</div>
            <div class="aha-author">— Son dos opiniones distintas</div>
            <div class="aha-body">En la auditoría integrada, el auditor emite DOS opiniones: una sobre los <strong>controles</strong> (ICFR) y otra sobre los <strong>números</strong>. Puede decir "el ICFR NO es efectivo" (adversa) y, al mismo tiempo, "los estados financieros SÍ presentan razonablemente" (limpia) — porque hizo trabajo sustantivo extra para convencerse de los números pese a los controles débiles. Que una empresa reporte una debilidad material NO significa que sus estados financieros estén mal.</div>
        </div>

        <div class="quiz-container" id="quiz_l24b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">Una empresa recibe opinión ADVERSA sobre su ICFR. ¿Qué implica sobre sus estados financieros?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l24b', this, false)">Que sus estados financieros están necesariamente equivocados</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l24b', this, true)">Nada automático: los EEFF pueden recibir una opinión limpia si el auditor hizo trabajo sustantivo extra</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l24b', this, false)">Que la empresa será deslistada de inmediato</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l24b', this, false)">Que el CEO va automáticamente a la cárcel</div>
            </div>
            <div class="quiz-feedback" id="quiz_l24b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>404a: la gerencia concluye y describe debilidades materiales; 404b: el auditor da su opinión (adversa si hay MW)</li>
                <li>Solo las debilidades materiales son públicas; las significativas van al comité</li>
                <li>ICFR adverso ≠ estados financieros adversos: son dos opiniones distintas</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 25</strong>: la remediación — cómo se cierra una debilidad.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 25 — VEREDICTO · REMEDIACIÓN
    // ==========================================================
    {
        id: 'l25', module: 'Módulo 4 · El veredicto', tag: 'tag-s4', tagLabel: 'DEFICIENCIAS',
        title: 'Remediación: cómo se cierra una debilidad',
        subtitle: 'Diseño vs. operación — y por qué no basta con "ya lo arreglamos"',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#283593,#151a4a);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">🔧</div><div style="font-size:1.3em;font-weight:800;">REMEDIACIÓN</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>La diferencia entre remediar un problema de diseño y uno de operación</li>
                <li>Las 3 condiciones para que una debilidad se dé por remediada</li>
                <li>Por qué remediar toma tiempo (y cuánto, más o menos)</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>Dos caminos de remediación</h3>
            <div style="margin:14px 0;padding:16px;background:#eceffb;border-radius:8px;border-left:4px solid #283593;">
                <p style="margin:6px 0;"><strong style="color:#283593;">Diseño:</strong> el control faltaba o estaba mal diseñado → hay que <strong>construirlo o rediseñarlo</strong>. Implementarlo es relativamente rápido, pero el reloj para demostrar que funciona empieza cuando el nuevo control ya existe.</p>
                <p style="margin:6px 0;"><strong style="color:#283593;">Operación:</strong> el control estaba bien diseñado pero <strong>falló al ejecutarse</strong> → se refuerza (capacitación, evidencia, disciplina) y luego hay que <strong>demostrar que ya opera bien durante un tiempo</strong>.</p>
            </div>
        </div>

        <div class="content-card">
            <h3>Las 3 condiciones para dar por remediada una debilidad material</h3>
            <ol class="concept-list">
                <li>Se identificó la <strong>causa raíz</strong> y se implementó el control correctivo.</li>
                <li>El control nuevo/mejorado ha <strong>operado durante un periodo suficiente</strong>.</li>
                <li>Se <strong>probó</strong> y se concluyó que opera efectivamente (y, en empresas con 404b, lo confirma el <strong>auditor externo</strong>).</li>
            </ol>
            <p>Solo entonces se declara "remediada". Decir "ya lo arreglamos" no basta: hay que <em>demostrar</em> que ya funciona con el tiempo.</p>
        </div>

        <div class="quiz-container" id="quiz_l25a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿Cuándo se puede dar por REMEDIADA una debilidad material?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l25a', this, false)">En cuanto la administración anuncia que la corrigió</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l25a', this, true)">Cuando el control correctivo operó un periodo suficiente y se probó que es efectivo (y lo confirma el auditor, si aplica 404b)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l25a', this, false)">En cuanto se escribe el plan de remediación</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l25a', this, false)">Automáticamente al cierre del siguiente trimestre</div>
            </div>
            <div class="quiz-feedback" id="quiz_l25a_fb"></div>
        </div>

        <div class="content-card">
            <h3>¿Cuánto tarda?</h3>
            <p>Depende de la <strong>frecuencia</strong> del control: hacen falta suficientes "corridas" para poder probarlo. Un control mensual puede necesitar <strong>uno o dos trimestres</strong> operando; uno anual (como un deterioro de crédito mercantil) puede tardar un año o más en poder concluirse. De punta a punta, cerrar una debilidad material suele tomar varios trimestres. Mientras tanto, su estatus de remediación se revela en cada reporte trimestral/anual hasta cerrarla.</p>
        </div>

        <div class="quiz-container" id="quiz_l25b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿Por qué un control ANUAL tarda más en remediarse que uno mensual?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l25b', this, false)">Porque los controles anuales son ilegales bajo SOX</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l25b', this, true)">Porque hacen falta suficientes "corridas" del control para probarlo, y un control anual corre pocas veces</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l25b', this, false)">Porque el auditor solo revisa controles mensuales</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l25b', this, false)">No es cierto: todos tardan exactamente lo mismo</div>
            </div>
            <div class="quiz-feedback" id="quiz_l25b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Remediar diseño (construir/rediseñar) vs. operación (reforzar y demostrar)</li>
                <li>Las 3 condiciones para cerrar una debilidad material</li>
                <li>El tiempo depende de la frecuencia del control; se revela el avance hasta cerrarla</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 26</strong>: el papel del auditor externo y la auditoría integrada.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 26 — VEREDICTO · EL AUDITOR EXTERNO
    // ==========================================================
    {
        id: 'l26', module: 'Módulo 4 · El veredicto', tag: 'tag-s4', tagLabel: 'DEFICIENCIAS',
        title: 'El auditor externo y la auditoría integrada',
        subtitle: 'El enfoque top-down del auditor, y hasta dónde puede apoyarse en tu trabajo',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#283593,#151a4a);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">🤝</div><div style="font-size:1.3em;font-weight:800;">EL AUDITOR EXTERNO</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué es la auditoría integrada y el enfoque top-down del auditor</li>
                <li>Cuándo puede el auditor "usar el trabajo de otros" (y su límite)</li>
                <li>Cómo se relaciona la evaluación de la gerencia con la del auditor</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>La auditoría integrada, en la práctica</h3>
            <p>El auditor no hace dos auditorías separadas: hace <strong>una integrada</strong>, donde la evidencia de controles alimenta la de los números y viceversa. Su enfoque es <strong>top-down</strong>: arranca a nivel de los estados financieros, mira los <strong>controles a nivel entidad</strong>, baja a las <strong>cuentas y aserciones significativas</strong>, entiende "qué podría salir mal" y concentra su esfuerzo donde el <strong>riesgo es más alto</strong>.</p>
        </div>

        <div class="content-card tip">
            <h3>Usar el trabajo de otros (y su límite)</h3>
            <p>El auditor puede <strong>apoyarse en el trabajo de auditoría interna o de la administración</strong> para reducir su propia prueba. Cuánto, depende de dos cosas:</p>
            <ul>
                <li>La <strong>competencia y la objetividad</strong> de quien hizo el trabajo (a mayor competencia + objetividad, más se puede apoyar).</li>
                <li>El <strong>riesgo del control</strong> (a mayor riesgo, más tiene que hacer el auditor por sí mismo).</li>
            </ul>
            <p><strong>El límite:</strong> en las áreas de mayor riesgo y juicio —el ambiente de control, el "override" de la dirección, el cierre financiero, el fraude, y los recorridos— el auditor debe hacer <strong>más trabajo propio</strong> y no puede delegar su juicio. La objetividad de auditoría interna depende de que reporte funcionalmente al <strong>comité de auditoría</strong>, no al CFO cuyos controles prueba.</p>
        </div>

        <div class="quiz-container" id="quiz_l26a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿De qué depende cuánto puede el auditor apoyarse en el trabajo de auditoría interna?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l26a', this, false)">Solo del precio que cobre la firma</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l26a', this, true)">De la competencia y objetividad de quien hizo el trabajo, y del riesgo del control (a más riesgo, más trabajo propio del auditor)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l26a', this, false)">De si la empresa cotiza en México o en EE.UU.</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l26a', this, false)">El auditor nunca puede apoyarse en nadie</div>
            </div>
            <div class="quiz-feedback" id="quiz_l26a_fb"></div>
        </div>

        <div class="content-card">
            <h3>Gerencia y auditor: mismo idioma, conclusiones independientes</h3>
            <p>La administración (404a) y el auditor (404b) usan las <strong>mismas definiciones, el mismo marco (COSO) y la misma materialidad</strong> — pero llegan a conclusiones <strong>independientes</strong>. El auditor puede usar tu documentación y tus pruebas para planear y reducir su trabajo, pero rehace lo suficiente para tener su <strong>propia</strong> evidencia. Por eso, entre mejor sea tu trabajo, menos duplica el auditor — y más barata sale la auditoría.</p>
        </div>

        <div class="quiz-container" id="quiz_l26b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿En qué áreas debe el auditor hacer MÁS trabajo propio (y no delegar)?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l26b', this, false)">En los controles más rutinarios y de bajo riesgo</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l26b', this, true)">En las de mayor riesgo y juicio: ambiente de control, override de la dirección, cierre financiero, fraude y recorridos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l26b', this, false)">En ninguna: siempre puede delegar todo a auditoría interna</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l26b', this, false)">Solo en los controles automáticos</div>
            </div>
            <div class="quiz-feedback" id="quiz_l26b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>La auditoría integrada y el enfoque top-down basado en riesgo</li>
                <li>El auditor puede usar tu trabajo según competencia/objetividad y riesgo — con límites</li>
                <li>Gerencia y auditor comparten marco pero concluyen por separado</li>
            </ul>
            <div class="okr-next">→ Fin del Módulo 4. En la <strong>Lección 27</strong>: SOX vs. la regulación mexicana.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 27 — PRÁCTICA · SOX vs LA REGULACIÓN MEXICANA
    // ==========================================================
    {
        id: 'l27', module: 'Módulo 5 · SOX en la práctica', tag: 'tag-s5', tagLabel: 'PRÁCTICA',
        title: 'SOX vs. la regulación mexicana (no confundir)',
        subtitle: 'LMV, CNBV, NIF — paralelos que se parecen, pero no son SOX',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#00838f,#053f45);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">🇲🇽</div><div style="font-size:1.3em;font-weight:800;">SOX vs MÉXICO</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Qué exige la Ley del Mercado de Valores mexicana — y en qué se parece a SOX</li>
                <li>La diferencia clave: México no tiene un "404(b)" propio</li>
                <li>Qué normas de auditoría y qué contabilidad chocan entre la matriz y la filial</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>El paralelo mexicano</h3>
            <p>La <strong>Ley del Mercado de Valores (LMV)</strong> exige a las emisoras mexicanas (SAB/SAPIB) tener un <strong>comité de auditoría independiente</strong> y auditoría externa, y asigna al Director General deberes sobre el control interno. Se <strong>parece</strong> a SOX en el espíritu de gobernanza… pero <strong>no es SOX</strong>.</p>
        </div>

        <div class="content-card tip">
            <h3>La diferencia que no debes olvidar</h3>
            <div style="margin:12px 0;padding:14px;background:#e2f4f6;border-radius:8px;border-left:4px solid #00838f;">
                <p style="margin:6px 0;"><strong>México NO tiene un "404(b)":</strong> no existe el requisito de que el auditor externo emita una <strong>opinión independiente sobre el ICFR</strong> para las emisoras puramente domésticas.</p>
                <p style="margin:6px 0;"><strong>Normas de auditoría distintas:</strong> el auditor en México sigue las <strong>NIA/ISA</strong>, no los estándares del PCAOB — salvo que sea auditor "componente" registrado en el PCAOB de un emisor de la SEC, y ahí sí aplica el AS 2201.</p>
                <p style="margin:6px 0;"><strong>Contabilidad distinta:</strong> los libros estatutarios usan <strong>NIF</strong> (CINIF); la matriz reporta en <strong>US GAAP o IFRS</strong>. El contralor reconcilia, y las aserciones del ICFR se enmarcan contra el GAAP de la matriz.</p>
            </div>
        </div>

        <div class="quiz-container" id="quiz_l27a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿Cuál es una diferencia clave entre SOX y la regulación mexicana (LMV/CNBV)?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l27a', this, false)">México exige exactamente lo mismo que SOX, con otro nombre</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l27a', this, true)">México no tiene un equivalente al 404(b): no exige que el auditor externo opine sobre el ICFR de las emisoras domésticas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l27a', this, false)">SOX no exige comité de auditoría y México sí</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l27a', this, false)">En México no existe la auditoría externa</div>
            </div>
            <div class="quiz-feedback" id="quiz_l27a_fb"></div>
        </div>

        <div class="content-card">
            <h3>El detalle mexicano que complica el SOX local</h3>
            <p>Cuando haces SOX en una filial mexicana, aparecen fuentes de IPE muy locales que hay que cuidar: la <strong>contabilidad electrónica</strong> del SAT, los <strong>CFDI</strong> (facturación electrónica), el <strong>dictamen fiscal</strong>, y la segregación de funciones en tu <strong>SAP/Oracle</strong> local. Buena noticia: <strong>COSO 2013 también es el marco en México</strong> (hay traducción al español), así que el lenguaje de control es el mismo.</p>
        </div>

        <div class="quiz-container" id="quiz_l27b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">En una filial mexicana de una matriz de EE.UU., ¿contra qué marco contable se enmarcan las aserciones del ICFR?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l27b', this, false)">Contra las NIF mexicanas, siempre</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l27b', this, true)">Contra el GAAP de la matriz (US GAAP o IFRS); los libros locales en NIF se reconcilian</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l27b', this, false)">Contra las reglas del SAT</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l27b', this, false)">No se usa ningún marco contable</div>
            </div>
            <div class="quiz-feedback" id="quiz_l27b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>La LMV se parece a SOX en gobernanza, pero no es SOX</li>
                <li>México no tiene un 404(b); el auditor local sigue NIA/ISA (salvo trabajo de componente PCAOB)</li>
                <li>Los libros van en NIF; el ICFR se enmarca contra el GAAP de la matriz</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 28</strong>: herramientas, automatización y los errores más comunes.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 28 — PRÁCTICA · HERRAMIENTAS Y ERRORES COMUNES
    // ==========================================================
    {
        id: 'l28', module: 'Módulo 5 · SOX en la práctica', tag: 'tag-s5', tagLabel: 'PRÁCTICA',
        title: 'Herramientas, automatización y errores comunes',
        subtitle: 'Con qué se hace SOX hoy — y las trampas que más caro salen',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#00838f,#053f45);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">🛠️</div><div style="font-size:1.3em;font-weight:800;">HERRAMIENTAS Y ERRORES</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Con qué software se administra SOX hoy (a grandes rasgos)</li>
                <li>Qué es el monitoreo continuo de controles (CCM)</li>
                <li>Los 5 errores más comunes que un profesional evita</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>El software (a grandes rasgos)</h3>
            <p>Las <strong>plataformas GRC</strong> centralizan la matriz de riesgos y controles, los flujos de prueba, el repositorio de evidencia, el seguimiento de deficiencias y las certificaciones. Hay varias en el mercado (AuditBoard, Workiva, Diligent, ServiceNow, SAP GRC, entre otras), más herramientas especializadas en accesos y segregación de funciones. No te cases con una marca: entiende <strong>la categoría</strong>. Muchas empresas todavía corren SOX en Excel y SharePoint.</p>
        </div>

        <div class="content-card tip">
            <h3>Automatización y CCM</h3>
            <p>Dos tendencias: la <strong>automatización (RPA)</strong> —bots que juntan evidencia, sacan extractos de accesos, rehacen conciliaciones— y el <strong>monitoreo continuo de controles (CCM)</strong>: en vez de probar una muestra una vez, se prueba <strong>la población completa de forma continua</strong> (el 100% de las pólizas, de los cambios de acceso, de los parámetros). Dato curioso: pese a todo esto, la proporción de controles automáticos en los programas SOX sigue siendo baja — hay mucho margen de eficiencia sin aprovechar.</p>
        </div>

        <div class="quiz-container" id="quiz_l28a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">El monitoreo continuo de controles (CCM) se distingue del muestreo tradicional porque…</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l28a', this, false)">Elimina la necesidad de tener controles</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l28a', this, true)">Prueba la población completa de forma continua, en vez de una muestra en un momento puntual</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l28a', this, false)">Solo funciona en empresas mexicanas</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l28a', this, false)">Reemplaza al auditor externo por completo</div>
            </div>
            <div class="quiz-feedback" id="quiz_l28a_fb"></div>
        </div>

        <div class="content-card tip">
            <h3>Los 5 errores más comunes (y más caros)</h3>
            <ol class="concept-list">
                <li><strong>Over-scoping:</strong> probar controles no clave y de más — quema presupuesto sin proteger más.</li>
                <li><strong>Documentación pobre:</strong> descripciones vagas. Un control debe decir quién, qué, cuándo, con qué umbral y qué pasa con las excepciones.</li>
                <li><strong>IPE sin probar:</strong> confiar en reportes sin demostrar su completitud y exactitud (el hallazgo técnico más común).</li>
                <li><strong>MRC sin precisión:</strong> revisiones demasiado superficiales para detectar un error material.</li>
                <li><strong>Errores al evaluar deficiencias:</strong> creer que "no hubo error = no hay deficiencia", no agregar, o clasificar mal una debilidad material como significativa.</li>
            </ol>
        </div>

        <div class="quiz-container" id="quiz_l28b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿Cuál es el hallazgo TÉCNICO más común (uno de los errores más caros)?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l28b', this, false)">Usar demasiados controles automáticos</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l28b', this, true)">Confiar en reportes (IPE) sin demostrar su completitud y exactitud</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l28b', this, false)">Documentar los controles con demasiado detalle</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l28b', this, false)">Probar los controles más de una vez al año</div>
            </div>
            <div class="quiz-feedback" id="quiz_l28b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Las plataformas GRC centralizan la matriz, las pruebas, la evidencia y las deficiencias</li>
                <li>RPA y CCM: la tendencia hacia la automatización y la prueba de población completa</li>
                <li>Los 5 errores más comunes (over-scoping, documentación pobre, IPE, MRC, evaluación de deficiencias)</li>
            </ul>
            <div class="okr-next">→ En la <strong>Lección 29</strong>: SOX y tu carrera — auditoría interna y certificaciones.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 29 — PRÁCTICA · SOX, AUDITORÍA INTERNA Y CARRERA
    // ==========================================================
    {
        id: 'l29', module: 'Módulo 5 · SOX en la práctica', tag: 'tag-s5', tagLabel: 'PRÁCTICA',
        title: 'SOX, la auditoría interna y tu carrera',
        subtitle: 'Dónde encaja SOX en la organización — y qué certificaciones abren puertas',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#00838f,#053f45);min-height:150px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:26px;">
            <div style="text-align:center;"><div style="font-size:2em;">🚀</div><div style="font-size:1.3em;font-weight:800;">SOX Y TU CARRERA</div></div>
        </div>

        <div class="lesson-okr-pre">
            <div class="okr-label">🎯 AL FINAL DE ESTA LECCIÓN SABRÁS:</div>
            <ul>
                <li>Cómo se relaciona SOX con la función de auditoría interna</li>
                <li>La tensión de independencia que hay que cuidar</li>
                <li>Qué certificaciones abren puertas en esta carrera</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>SOX y auditoría interna</h3>
            <p>En muchas empresas, la <strong>auditoría interna dirige la oficina del programa SOX</strong> (el PMO): mantiene la matriz, prueba los controles (o coordina que se prueben), sigue las deficiencias y reporta al <strong>comité de auditoría</strong>. Su independencia depende de que reporte funcionalmente a ese comité, no al CFO cuyos controles evalúa.</p>
        </div>

        <div class="content-card tip">
            <h3>⚠️ La tensión de independencia</h3>
            <p>Hay un dilema fino: si auditoría interna <strong>opera</strong> las pruebas SOX (un rol de apoyo a la gerencia) y a la vez debe dar <strong>aseguramiento independiente</strong> sobre esos mismos controles, su objetividad se tensa. La solución común es separar dos cosas: "las pruebas SOX de la administración" (una función de PMO, a veces con co-sourcing externo) y el "aseguramiento independiente" de auditoría interna. Reconocer esta tensión es señal de madurez profesional.</p>
        </div>

        <div class="quiz-container" id="quiz_l29a">
            <div class="quiz-label">Quiz 1 de 2</div>
            <div class="quiz-question">¿De qué depende la independencia de auditoría interna en un programa SOX?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l29a', this, false)">De que reporte al CFO cuyos controles prueba</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l29a', this, true)">De que reporte funcionalmente al comité de auditoría, no a la administración cuyos controles evalúa</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l29a', this, false)">De que use exclusivamente software GRC</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l29a', this, false)">De que nunca pruebe ningún control</div>
            </div>
            <div class="quiz-feedback" id="quiz_l29a_fb"></div>
        </div>

        <div class="content-card">
            <h3>Certificaciones que abren puertas</h3>
            <ul>
                <li><strong>CPA</strong> (EE.UU.) / <strong>CPC</strong> en México (Contador Público Certificado, vía IMCP) — la base de contraloría y auditoría externa.</li>
                <li><strong>CIA</strong> — Certified Internal Auditor (del IIA): la credencial de auditoría interna.</li>
                <li><strong>CISA</strong> — Certified Information Systems Auditor (de ISACA): auditoría de TI / ITGC.</li>
                <li><strong>CFE</strong> — Certified Fraud Examiner: fraude.</li>
            </ul>
            <p>Trayectorias típicas: analista SOX → gerente SOX → director de auditoría interna → CAE; o contraloría: contador → contralor → CFO. La combinación "SOX + inglés + una certificación" es escasa en el mercado hispano y muy demandada. Este curso es tu primer paso.</p>
        </div>

        <div class="pull-quote-xl">
            <div class="pq-icon">"</div>
            <div class="pq-text">Dominar SOX en español es raro. Y lo raro, en el mercado profesional, se paga.</div>
            <div class="pq-author">— El cierre del curso</div>
        </div>

        <div class="quiz-container" id="quiz_l29b">
            <div class="quiz-label">Quiz 2 de 2</div>
            <div class="quiz-question">¿Qué certificación se asocia específicamente con la auditoría de TI / ITGC?</div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkQuiz('quiz_l29b', this, false)">CFE (Certified Fraud Examiner)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l29b', this, true)">CISA (Certified Information Systems Auditor)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l29b', this, false)">CPC (Contador Público Certificado)</div>
                <div class="quiz-option" onclick="checkQuiz('quiz_l29b', this, false)">CIA (Certified Internal Auditor)</div>
            </div>
            <div class="quiz-feedback" id="quiz_l29b_fb"></div>
        </div>

        <div class="lesson-okr-post">
            <div class="okr-label">✓ YA SABES:</div>
            <ul>
                <li>Auditoría interna suele dirigir el PMO SOX y reporta al comité de auditoría</li>
                <li>La tensión entre operar las pruebas y dar aseguramiento independiente</li>
                <li>Las certificaciones clave: CPA/CPC, CIA, CISA, CFE</li>
            </ul>
            <div class="okr-next">→ Fin del recorrido. Ahora, el <strong>examen final</strong>: 15 preguntas, necesitas 11.</div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 30 — EXAMEN FINAL
    // ==========================================================
    {
        id: 'final_exam', module: 'Examen Final', tag: 'tag-final', tagLabel: 'EXAMEN FINAL',
        title: 'Examen Final Integrador',
        subtitle: 'Demuestra que dominas la metodología SOX',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#0a2540,#123a5e,#c9a961);min-height:180px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:30px;">
            <div style="text-align:center;">
                <div style="font-size:2.5em;font-weight:900;">🏆</div>
                <div style="font-size:1.6em;font-weight:700;letter-spacing:2px;">EXAMEN FINAL</div>
                <div style="opacity:0.9;font-style:italic;margin-top:6px;">SOX en la Práctica</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Mensaje final del instructor</div>
                <div class="instructor-note-text">Llegaste al final. Este examen confirma que la metodología ya es tuya. <strong>15 preguntas, necesitas 11</strong>, y cada una tiene una sola oportunidad — léelas con calma. ¡Éxito!</div>
            </div>
        </div>

        <div class="content-card">
            <h3>🎯 Instrucciones</h3>
            <p>15 preguntas que cruzan los 6 bloques del curso. Necesitas <strong>al menos 11 correctas</strong> para aprobar y desbloquear tu certificado. Cada pregunta se responde UNA sola vez.</p>
        </div>

        <div class="quiz-container" id="final_q1">
            <div class="quiz-q">1. ¿Qué exige SOX en el fondo?</div>
            <button class="quiz-option" onclick="checkFinal('final_q1', this, false)">Que las empresas públicas paguen más impuestos</button>
            <button class="quiz-option" onclick="checkFinal('final_q1', this, true)">Demostrar —y que un auditor lo confirme— que los controles internos producen estados financieros confiables</button>
            <button class="quiz-option" onclick="checkFinal('final_q1', this, false)">Que toda empresa contrate un director de tecnología</button>
            <div class="quiz-feedback" id="final_q1_fb"></div>
        </div>

        <div class="quiz-container" id="final_q2">
            <div class="quiz-q">2. La vía más común por la que un profesional mexicano hace SOX es:</div>
            <button class="quiz-option" onclick="checkFinal('final_q2', this, false)">Porque la CNBV lo exige a todas las empresas</button>
            <button class="quiz-option" onclick="checkFinal('final_q2', this, true)">Trabajar en la subsidiaria mexicana de una matriz listada en EE.UU.</button>
            <button class="quiz-option" onclick="checkFinal('final_q2', this, false)">Porque el SAT lo pide para la contabilidad electrónica</button>
            <div class="quiz-feedback" id="final_q2_fb"></div>
        </div>

        <div class="quiz-container" id="final_q3">
            <div class="quiz-q">3. La diferencia entre 404(a) y 404(b) es:</div>
            <button class="quiz-option" onclick="checkFinal('final_q3', this, true)">404(a) es la evaluación del ICFR por la administración; 404(b) es el atestiguamiento independiente del auditor (solo para empresas grandes)</button>
            <button class="quiz-option" onclick="checkFinal('final_q3', this, false)">404(a) es para EE.UU. y 404(b) para el extranjero</button>
            <button class="quiz-option" onclick="checkFinal('final_q3', this, false)">Son exactamente lo mismo</button>
            <div class="quiz-feedback" id="final_q3_fb"></div>
        </div>

        <div class="quiz-container" id="final_q4">
            <div class="quiz-q">4. Sobre las certificaciones §302 y §906:</div>
            <button class="quiz-option" onclick="checkFinal('final_q4', this, false)">Son la misma certificación con dos nombres</button>
            <button class="quiz-option" onclick="checkFinal('final_q4', this, true)">La 302 es civil (SEC) y la 906 es penal (DOJ); van juntas pero son distintas</button>
            <button class="quiz-option" onclick="checkFinal('final_q4', this, false)">Ambas son penales y las firma solo el CEO</button>
            <div class="quiz-feedback" id="final_q4_fb"></div>
        </div>

        <div class="quiz-container" id="final_q5">
            <div class="quiz-q">5. Los 5 componentes de COSO 2013 son:</div>
            <button class="quiz-option" onclick="checkFinal('final_q5', this, false)">Existencia, Integridad, Valuación, Derechos y Presentación</button>
            <button class="quiz-option" onclick="checkFinal('final_q5', this, true)">Ambiente de control, Evaluación de riesgos, Actividades de control, Información y comunicación, Monitoreo</button>
            <button class="quiz-option" onclick="checkFinal('final_q5', this, false)">Planear, Hacer, Verificar, Actuar y Reportar</button>
            <div class="quiz-feedback" id="final_q5_fb"></div>
        </div>

        <div class="quiz-container" id="final_q6">
            <div class="quiz-q">6. El ICFR ofrece:</div>
            <button class="quiz-option" onclick="checkFinal('final_q6', this, true)">Seguridad razonable, no absoluta (por el juicio humano, el override de la dirección y la colusión)</button>
            <button class="quiz-option" onclick="checkFinal('final_q6', this, false)">Seguridad absoluta de que no habrá ningún fraude</button>
            <button class="quiz-option" onclick="checkFinal('final_q6', this, false)">Cero seguridad: es solo un trámite</button>
            <div class="quiz-feedback" id="final_q6_fb"></div>
        </div>

        <div class="quiz-container" id="final_q7">
            <div class="quiz-q">7. ¿Qué hace "significativa" a una cuenta?</div>
            <button class="quiz-option" onclick="checkFinal('final_q7', this, false)">Solo su tamaño en pesos</button>
            <button class="quiz-option" onclick="checkFinal('final_q7', this, true)">Que tenga posibilidad razonable de error material — por tamaño o por factores cualitativos (fraude, juicio, complejidad)</button>
            <button class="quiz-option" onclick="checkFinal('final_q7', this, false)">Que esté en el balance y no en el estado de resultados</button>
            <div class="quiz-feedback" id="final_q7_fb"></div>
        </div>

        <div class="quiz-container" id="final_q8">
            <div class="quiz-q">8. El PCAOB usa 5 aserciones. ¿Qué pasa con "exactitud" y "corte"?</div>
            <button class="quiz-option" onclick="checkFinal('final_q8', this, true)">Quedan subsumidas dentro de las 5 (AICPA/ISA sí las desglosan, por eso a veces se oyen 7)</button>
            <button class="quiz-option" onclick="checkFinal('final_q8', this, false)">No existen en ninguna versión</button>
            <button class="quiz-option" onclick="checkFinal('final_q8', this, false)">Son dos de las 5 aserciones del PCAOB</button>
            <div class="quiz-feedback" id="final_q8_fb"></div>
        </div>

        <div class="quiz-container" id="final_q9">
            <div class="quiz-q">9. Si los ITGC (por ejemplo, la gestión de cambios) fallan:</div>
            <button class="quiz-option" onclick="checkFinal('final_q9', this, false)">No pasa nada: los controles automáticos son independientes</button>
            <button class="quiz-option" onclick="checkFinal('final_q9', this, true)">Los controles automáticos que corren sobre ese sistema dejan de ser confiables</button>
            <button class="quiz-option" onclick="checkFinal('final_q9', this, false)">Los controles manuales se vuelven automáticos</button>
            <div class="quiz-feedback" id="final_q9_fb"></div>
        </div>

        <div class="quiz-container" id="final_q10">
            <div class="quiz-q">10. Un recorrido (walkthrough):</div>
            <button class="quiz-option" onclick="checkFinal('final_q10', this, false)">Prueba la efectividad operativa del control durante todo el año</button>
            <button class="quiz-option" onclick="checkFinal('final_q10', this, true)">Sigue una transacción para entender el proceso y evaluar el DISEÑO; NO prueba la efectividad operativa</button>
            <button class="quiz-option" onclick="checkFinal('final_q10', this, false)">Sustituye a la prueba de diseño y a la de operación</button>
            <div class="quiz-feedback" id="final_q10_fb"></div>
        </div>

        <div class="quiz-container" id="final_q11">
            <div class="quiz-q">11. Sobre las técnicas de evidencia:</div>
            <button class="quiz-option" onclick="checkFinal('final_q11', this, true)">Van de más débil a más fuerte: indagación → observación → inspección → reejecución; la indagación nunca basta sola</button>
            <button class="quiz-option" onclick="checkFinal('final_q11', this, false)">La indagación (preguntar) es la evidencia más fuerte</button>
            <button class="quiz-option" onclick="checkFinal('final_q11', this, false)">Todas tienen exactamente la misma fuerza</button>
            <div class="quiz-feedback" id="final_q11_fb"></div>
        </div>

        <div class="quiz-container" id="final_q12">
            <div class="quiz-q">12. Los tamaños de muestra en SOX:</div>
            <button class="quiz-option" onclick="checkFinal('final_q12', this, false)">Están fijados por un artículo específico de la ley SOX</button>
            <button class="quiz-option" onclick="checkFinal('final_q12', this, true)">Vienen de la guía de muestreo del AICPA y de la metodología de cada firma; conviene alinearlos con tu auditor</button>
            <button class="quiz-option" onclick="checkFinal('final_q12', this, false)">Son siempre 100 transacciones, sin importar la frecuencia</button>
            <div class="quiz-feedback" id="final_q12_fb"></div>
        </div>

        <div class="quiz-container" id="final_q13">
            <div class="quiz-q">13. Un control se apoya en un reporte del sistema (IPE). Para confiar en el control:</div>
            <button class="quiz-option" onclick="checkFinal('final_q13', this, false)">Basta documentar la firma de quien revisó el reporte</button>
            <button class="quiz-option" onclick="checkFinal('final_q13', this, true)">Hay que probar la completitud y exactitud (C&A) del reporte, además del control</button>
            <button class="quiz-option" onclick="checkFinal('final_q13', this, false)">Se debe ignorar el reporte, no es parte del control</button>
            <div class="quiz-feedback" id="final_q13_fb"></div>
        </div>

        <div class="quiz-container" id="final_q14">
            <div class="quiz-q">14. Sobre la gravedad de una deficiencia:</div>
            <button class="quiz-option" onclick="checkFinal('final_q14', this, true)">Se evalúa por probabilidad × magnitud, y NO depende de si de hecho ocurrió un error</button>
            <button class="quiz-option" onclick="checkFinal('final_q14', this, false)">Si no hubo error real, nunca hay deficiencia grave</button>
            <button class="quiz-option" onclick="checkFinal('final_q14', this, false)">Depende solo de cuántas personas se quejaron del control</button>
            <div class="quiz-feedback" id="final_q14_fb"></div>
        </div>

        <div class="quiz-container" id="final_q15">
            <div class="quiz-q">15. Una empresa recibe una opinión ADVERSA sobre su ICFR. Esto significa que sus estados financieros:</div>
            <button class="quiz-option" onclick="checkFinal('final_q15', this, false)">Están necesariamente equivocados</button>
            <button class="quiz-option" onclick="checkFinal('final_q15', this, true)">Pueden aun así recibir una opinión limpia: son dos opiniones distintas (ICFR adverso ≠ EEFF adversos)</button>
            <button class="quiz-option" onclick="checkFinal('final_q15', this, false)">Serán reexpresados de forma automática por la SEC</button>
            <div class="quiz-feedback" id="final_q15_fb"></div>
        </div>

        <div id="finalResult" style="display:none;margin-top:20px;padding:24px;border-radius:12px;text-align:center;animation:pop 0.4s;">
            <div style="font-size:3em;" id="finalEmoji"></div>
            <h2 id="finalTitle" style="margin:10px 0;"></h2>
            <p id="finalDesc"></p>
            <div style="margin-top:16px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
                <button class="btn btn-gold" onclick="showLesson(getCertLessonIndex())">🏆 Ver mi Certificado</button>
            </div>
        </div>
        `
    },

    // ==========================================================
    // LECCIÓN 31 — CERTIFICADO
    // El certificado (nombre, fecha, folio y descargo legal) lo inyecta curso.html
    // vía ensureCertificateElement() al detectar id:'certificate'.
    // NO incrustar aquí un bloque de certificado: sin #certificateEl el @media print
    // oculta toda la lección y la hoja sale en blanco.
    // ==========================================================
    {
        id: 'certificate', module: 'Certificado', tag: 'tag-final', tagLabel: 'CERTIFICADO',
        title: 'Certificado de Finalización',
        subtitle: '¡Felicidades! Has completado SOX en la Práctica',
        content: `
        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Palabras finales del instructor</div>
                <div class="instructor-note-text">Recorriste la metodología SOX completa: de por qué existe la ley, al marco COSO, al alcance y la materialidad, a documentar y probar controles, hasta evaluar deficiencias y entender el papel del auditor. Ahora tienes algo escaso y valioso: entiendes SOX de verdad, en español. Úsalo. Cuando llegue tu próximo ciclo —o tu próxima entrevista— vas a hablar el idioma con soltura. Aquí tienes tu certificado; te lo ganaste. ¡Éxito!</div>
            </div>
        </div>
        `
    }

    ]
};

window.COURSE_SOX = COURSE_SOX;
