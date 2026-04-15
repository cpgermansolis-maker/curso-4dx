// ==================================================================
// CURSO FEUM-INVENTARIOS
// Administración de Inventarios Farmacéuticos con base en la FEUM
// (Farmacopea de los Estados Unidos Mexicanos) y NOM aplicables.
// Instructor: LADE Germán Solís Muñoz — TRIKLES
// Fuentes citadas textualmente: Suplemento para Establecimientos 7.0
// (FEUM), NOM-059-SSA1, NOM-220-SSA1, NOM-036-SSA2, NOM-241-SSA1,
// NOM-248-SSA1, NOM-256-SSA1, Ley General de Salud (LGS) y
// Reglamento de Insumos para la Salud (RIS).
// ==================================================================

const COURSE_FEUM_INVENTARIOS = {
    id: 'feum-inventarios',
    meta: {
        title: 'Administración de Inventarios Farmacéuticos (FEUM)',
        subtitle: 'Con base en la Farmacopea de los Estados Unidos Mexicanos y NOM aplicables',
        author: 'Normativa oficial: FEUM · NOM-SSA · LGS · RIS',
        cover: 'assets/covers/feum-inventarios.jpg',
        description: 'Curso técnico-regulatorio para responsables sanitarios, jefes de almacén, farmacéuticos y personal de farmacias, hospitales y distribuidoras en México. Aprende a diseñar y operar un sistema de inventarios que cumpla la FEUM, las NOM aplicables y los criterios de verificación de COFEPRIS, con citas textuales de la normativa, procedimientos operativos y plantillas listas para usar.',
        descripcionCorta: 'Cumple la FEUM y COFEPRIS: BPAD, cadena de frío, kárdex, controlados, trazabilidad y auditoría.',
        category: 'Regulación sanitaria / Farmacia',
        lessonsCount: 22,
        duration: '8-10 horas',
        level: 'Intermedio-Avanzado',
        active: true,
        tags: ['FEUM', 'COFEPRIS', 'farmacia', 'almacén', 'inventarios', 'BPAD', 'cadena de frío', 'NOM-220', 'responsable sanitario']
    },

    lessonRequirements: {
        0:  ['q_intro'],
        1:  ['q_m1l1'],
        2:  ['q_m1l2'],
        3:  ['q_m1l3'],
        4:  ['q_m1l4'],
        5:  ['q_m1l5'],
        6:  ['q_m2l1'],
        7:  ['q_m2l2'],
        8:  ['q_m2l3'],
        9:  ['q_m2l4'],
        10: ['q_m2l5'],
        11: ['q_m2l6'],
        12: ['q_m3l1'],
        13: ['q_m3l2'],
        14: ['q_m3l3'],
        15: ['q_m3l4'],
        16: ['q_m3l5'],
        17: ['q_m3l6'],
        18: ['q_m4l1'],
        19: ['q_m4l2'],
        20: ['q_m4l3'],
        21: ['q_m4l4'],
        22: ['final_q1','final_q2','final_q3','final_q4','final_q5','final_q6','final_q7','final_q8','final_q9','final_q10'],
        23: []
    },

    examPassScore: 7,

    certificate: {
        courseNameForCert: 'Administración de Inventarios<br>Farmacéuticos (FEUM)',
        description: 'Habiendo demostrado dominio de la normativa aplicable al almacenamiento, control y distribución de medicamentos, dispositivos médicos y demás insumos para la salud conforme al Suplemento para Establecimientos de la FEUM, las NOM-SSA vigentes y los criterios de verificación de COFEPRIS.'
    },

    lessons: [

    // ================= LECCION 0: INTRO =================
    {
        id: 'intro', module: 'Introducción', tag: 'tag-intro', tagLabel: 'INTRODUCCION',
        title: 'Por qué este curso puede evitarte una clausura',
        subtitle: 'La FEUM no es un libro: es una obligación legal',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#0d4f3c 0%,#1b9271 60%,#c8a951 100%);min-height:220px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:30px;">
            <div>
                <div style="font-family:Georgia,serif;font-size:2.2em;font-weight:900;letter-spacing:2px;text-shadow:2px 2px 8px rgba(0,0,0,0.3);">INVENTARIOS FARMACÉUTICOS</div>
                <div style="font-size:1.05em;margin-top:10px;opacity:0.95;font-style:italic;">con base en la FEUM y las NOM-SSA vigentes</div>
                <div style="margin-top:18px;font-size:0.85em;letter-spacing:4px;opacity:0.85;">COFEPRIS · SECRETARÍA DE SALUD · MÉXICO</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Bienvenida del instructor · LADE Germán Solís Muñoz</div>
                <div class="instructor-note-text">Este no es un curso genérico de inventarios. Está diseñado para responsables sanitarios, jefes de almacén y personal operativo de farmacias, hospitales, distribuidoras y laboratorios en México. Aquí trabajamos con la norma <em>en la mano</em>: vamos a leer textualmente lo que pide la FEUM y las NOM, y traducirlo a procedimientos que COFEPRIS acepta en una visita de verificación. Al terminar sabrás exactamente qué documentos, áreas, registros y controles debes tener — y cómo demostrar que los tienes.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#128204; A quién está dirigido este curso</h3>
            <ul class="concept-list">
                <li><strong>Responsables Sanitarios</strong> (farmacéutico, QFB, QFI) de farmacias, droguerías, boticas, almacenes de depósito y distribución.</li>
                <li><strong>Jefes y supervisores de almacén</strong> farmacéutico (hospitalario, distribuidor, laboratorio).</li>
                <li><strong>Auxiliares de Responsable Sanitario</strong> y personal de control de existencias.</li>
                <li><strong>Auditores internos</strong>, consultores regulatorios y personal de aseguramiento de calidad.</li>
                <li><strong>Directivos y propietarios</strong> que responden solidariamente por las sanciones sanitarias.</li>
            </ul>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128680;</span><div>
                <h3>El caso que todos deberíamos evitar</h3>
                <p>Farmacia privada de tamaño medio en Puebla. Visita de verificación COFEPRIS sin previo aviso. El verificador pide:</p>
                <ol class="concept-list">
                    <li>Aviso de Funcionamiento vigente. <em>Estaba, pero con domicilio desactualizado.</em></li>
                    <li>Bitácoras de temperatura y humedad del último trimestre. <em>Incompletas: faltaban 27 días.</em></li>
                    <li>Libro de Control de psicotrópicos. <em>Existía, pero sin autorización foliada.</em></li>
                    <li>Evidencia de destrucción de caducados del año anterior. <em>No había acta.</em></li>
                </ol>
                <p>Resultado: <strong>suspensión de actividades, multa equivalente a 1,200 UMA y pérdida del 40% del valor de la mercancía</strong> por decomiso preventivo. El propietario y el Responsable Sanitario respondieron solidariamente.</p>
                <p>El problema no era mala fe. Era no conocer en detalle lo que la FEUM y las NOM piden, y no tener los procedimientos por escrito.</p>
            </div></div>
        </div>

        <div class="content-card tip">
            <h3>&#128218; Qué vas a obtener al terminar</h3>
            <ol class="concept-list">
                <li>Conocimiento preciso de la <strong>FEUM vigente</strong> (Suplemento para Establecimientos) y las NOM que aplican a tu operación.</li>
                <li>Manejo profesional del <strong>kárdex, PEPS/FEFO, trazabilidad por lote y control de caducidades</strong>.</li>
                <li>Procedimientos para <strong>cadena de frío, controlados (estupefacientes y psicotrópicos), y destrucción de caducados</strong>.</li>
                <li>Tres <strong>plantillas descargables</strong> listas para operar: kárdex, bitácora de temperatura/humedad y checklist de recepción.</li>
                <li>Preparación para una <strong>visita de verificación COFEPRIS</strong> sin sobresaltos.</li>
                <li><strong>Certificado TRIKLES</strong> al aprobar el examen final con 7 de 10 aciertos.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>&#9872;&#65039; Nota sobre el contenido citado</h3>
            <p style="font-size:0.95em;">Este curso cita textualmente fragmentos del <strong>Suplemento para Establecimientos dedicados a la venta y suministro de medicamentos, dispositivos médicos y demás insumos para la salud</strong> (edición 7.0) de la Farmacopea de los Estados Unidos Mexicanos, propiedad intelectual de la Comisión Permanente de la FEUM / Secretaría de Salud, y de Normas Oficiales Mexicanas publicadas en el DOF. El uso es con fines <em>exclusivamente didácticos</em>, amparado por el artículo 148 de la Ley Federal del Derecho de Autor. Los alumnos deben consultar siempre la edición vigente publicada oficialmente.</p>
        </div>

        <div class="quiz-container" id="q_intro">
            <div class="quiz-q">&#127919; Pregunta clave: ¿Por qué la FEUM es obligatoria y no opcional para un almacén farmacéutico en México?</div>
            <button class="quiz-option" onclick="checkQuiz('q_intro', this, false)">Porque es una recomendación internacional firmada por México</button>
            <button class="quiz-option" onclick="checkQuiz('q_intro', this, true)">Porque la Ley General de Salud y el Reglamento de Insumos para la Salud la declaran de observancia obligatoria, y COFEPRIS verifica su cumplimiento</button>
            <button class="quiz-option" onclick="checkQuiz('q_intro', this, false)">Porque la publica la Organización Panamericana de la Salud</button>
            <button class="quiz-option" onclick="checkQuiz('q_intro', this, false)">Solo es obligatoria para laboratorios fabricantes, no para almacenes</button>
            <div class="quiz-feedback" id="q_intro_fb"></div>
        </div>
        `
    },

    // ================= MODULO 1 · LECCION 1 =================
    {
        id: 'm1l1', module: 'Módulo 1 · Marco Normativo', tag: 'tag-module', tagLabel: 'MÓDULO 1',
        title: 'El sistema regulatorio sanitario en México',
        subtitle: 'Cómo se conectan LGS, RIS, FEUM, NOM y COFEPRIS',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#1a3a6c 0%,#2e5aa8 60%,#ffb300 100%);min-height:180px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:24px;">
            <div>
                <div style="font-size:1.8em;font-weight:900;letter-spacing:2px;">LECCIÓN 1</div>
                <div style="font-size:1.05em;margin-top:6px;opacity:0.95;">El sistema regulatorio sanitario mexicano</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor</div>
                <div class="instructor-note-text">Antes de entrar al almacén, necesitas entender quién manda y en qué orden. En México, la regulación sanitaria de medicamentos es una pirámide: Constitución → Ley General de Salud → Reglamentos → Normas Oficiales Mexicanas → Farmacopea. Si te pierdes el orden, te pierdes el sentido.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#127963;&#65039; La pirámide normativa</h3>
            <ol class="concept-list">
                <li><strong>Constitución Política (Art. 4°):</strong> derecho a la protección de la salud.</li>
                <li><strong>Ley General de Salud (LGS):</strong> marco general. El <em>artículo 226</em> clasifica los medicamentos en 6 fracciones según su régimen de venta.</li>
                <li><strong>Reglamento de Insumos para la Salud (RIS):</strong> desarrolla los requisitos de establecimientos, Responsable Sanitario, licencias, etc.</li>
                <li><strong>Normas Oficiales Mexicanas (NOM):</strong> detalle técnico obligatorio. Las principales para almacén: NOM-059-SSA1 (BPF medicamentos), NOM-241-SSA1 (BPF dispositivos médicos), NOM-248-SSA1 (BPF remedios herbolarios), NOM-220-SSA1 (Farmacovigilancia), NOM-036-SSA2 (vacunas / cadena de frío), NOM-256-SSA1 (control de plagas).</li>
                <li><strong>Farmacopea de los Estados Unidos Mexicanos (FEUM):</strong> requisitos técnicos específicos. Incluye suplementos (Establecimientos, Dispositivos Médicos).</li>
                <li><strong>Acuerdos secretariales y guías COFEPRIS:</strong> criterios de verificación.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>&#128196; Cita textual — FEUM, Capítulo II</h3>
            <blockquote style="border-left:4px solid #1b9271;padding:10px 16px;background:#f5faf7;font-style:italic;">
                "1.1.1. Las disposiciones contenidas en el presente capítulo son aplicables a los Establecimientos que realizan actividades de almacenamiento, expendio/venta, distribución y transportación de remedios herbolarios, medicamentos, dispositivos médicos y demás insumos para la salud. Estos Establecimientos deben cumplir, además de lo dispuesto en este Suplemento, con lo establecido en las Normas Oficiales Mexicanas NOM-241-SSA1… NOM-248-SSA1… NOM-059-SSA1 […] <strong>sujetándose siempre a la regulación más estricta</strong> de acuerdo con los insumos para la salud que manejen."
            </blockquote>
            <p><strong>Lectura clave:</strong> cuando dos normas se traslapan, <em>siempre aplica la más estricta</em>. Nunca la más cómoda.</p>
        </div>

        <div class="content-card">
            <h3>&#127970; COFEPRIS: el brazo verificador</h3>
            <p>La Comisión Federal para la Protección contra Riesgos Sanitarios (COFEPRIS) es el órgano desconcentrado de la Secretaría de Salud que:</p>
            <ul class="concept-list">
                <li>Otorga y suspende Licencias Sanitarias y Avisos de Funcionamiento.</li>
                <li>Realiza <strong>visitas de verificación</strong> al establecimiento (anunciadas o no).</li>
                <li>Emite y difunde <strong>Alertas Sanitarias</strong> que el Responsable Sanitario debe revisar continuamente (FEUM Cap. II, 1.1.9.22).</li>
                <li>Impone sanciones: amonestaciones, multas, clausuras temporales o definitivas, y actúa en casos penales.</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Tip práctico</h3>
            <p>Ten en tu escritorio, impreso o en PDF accesible, al menos: LGS Art. 224-232, RIS, FEUM Suplemento vigente y NOM-059. Son las fuentes que cita 9 de cada 10 observaciones en una visita COFEPRIS.</p>
        </div>

        <div class="quiz-container" id="q_m1l1">
            <div class="quiz-q">&#127919; Cuando la FEUM y una NOM dicen cosas diferentes sobre el mismo tema, ¿cuál aplica?</div>
            <button class="quiz-option" onclick="checkQuiz('q_m1l1', this, false)">La más reciente en publicación</button>
            <button class="quiz-option" onclick="checkQuiz('q_m1l1', this, false)">La FEUM, siempre</button>
            <button class="quiz-option" onclick="checkQuiz('q_m1l1', this, true)">La más estricta, sujetándose a lo que mejor proteja al paciente</button>
            <button class="quiz-option" onclick="checkQuiz('q_m1l1', this, false)">La que elija el Responsable Sanitario</button>
            <div class="quiz-feedback" id="q_m1l1_fb"></div>
        </div>
        `
    },

    // ================= MODULO 1 · LECCION 2 =================
    {
        id: 'm1l2', module: 'Módulo 1 · Marco Normativo', tag: 'tag-module', tagLabel: 'MÓDULO 1',
        title: 'La FEUM: qué es, ediciones y obligatoriedad',
        subtitle: 'El libro oficial de especificaciones de calidad farmacéutica de México',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#5b1f66 0%,#9d4edd 60%,#c8a951 100%);min-height:180px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:24px;">
            <div>
                <div style="font-size:1.8em;font-weight:900;letter-spacing:2px;">LECCIÓN 2</div>
                <div style="font-size:1.05em;margin-top:6px;opacity:0.95;">La Farmacopea como norma técnica oficial</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor</div>
                <div class="instructor-note-text">FEUM no es una sigla esotérica. Es el libro donde la autoridad sanitaria mexicana fija las especificaciones oficiales para medicamentos, dispositivos médicos y establecimientos. Si tu almacén no tiene la edición vigente — impresa o digital — técnicamente ya estás incumpliendo.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#128218; ¿Qué es la FEUM?</h3>
            <p>La <strong>Farmacopea de los Estados Unidos Mexicanos</strong> es un documento de carácter oficial elaborado por la <em>Comisión Permanente de la FEUM</em> (CPFEUM), dependiente de la Secretaría de Salud. Establece los métodos generales de análisis, especificaciones de calidad y criterios sanitarios que deben cumplir:</p>
            <ul class="concept-list">
                <li>Fármacos (principios activos).</li>
                <li>Aditivos.</li>
                <li>Medicamentos y productos biológicos.</li>
                <li>Dispositivos médicos.</li>
                <li>Establecimientos dedicados a la fabricación, venta y suministro de insumos para la salud.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>&#128220; Estructura de la FEUM</h3>
            <ol class="concept-list">
                <li><strong>FEUM (libro principal):</strong> métodos generales de análisis (MGA), monografías de fármacos y medicamentos, apéndices.</li>
                <li><strong>Suplemento para Establecimientos:</strong> requisitos para farmacias, droguerías, boticas y almacenes. <em>Este es el que nos ocupa</em>.</li>
                <li><strong>Suplemento para Dispositivos Médicos.</strong></li>
                <li><strong>Suplemento para Productos Homeopáticos.</strong></li>
                <li><strong>Suplemento de Medicamentos Geriátricos y Pediátricos.</strong></li>
            </ol>
        </div>

        <div class="content-card">
            <h3>&#128196; Cita textual — obligatoriedad de tener la edición vigente</h3>
            <blockquote style="border-left:4px solid #1b9271;padding:10px 16px;background:#f5faf7;font-style:italic;">
                "1.1.9.19. Asegurar que se cuente y cumpla con la edición vigente del Suplemento para Establecimientos dedicados a la venta y suministro de medicamentos, dispositivos médicos y demás insumos para la salud y sus actualizaciones, en su versión impresa o digital." <br>
                <span style="font-size:0.85em;color:#666;">— FEUM, Suplemento para Establecimientos 7.0, Cap. II, numeral 1.1.9.19.</span>
            </blockquote>
            <blockquote style="border-left:4px solid #1b9271;padding:10px 16px;background:#f5faf7;font-style:italic;margin-top:10px;">
                "1.2.6. Edición vigente del Suplemento para Establecimientos […] en su versión impresa o digital. En caso de que el Establecimiento almacene o distribuya dispositivos médicos debe contar con la edición vigente del Suplemento para Dispositivos Médicos."<br>
                <span style="font-size:0.85em;color:#666;">— FEUM, Cap. II, numeral 1.2.6.</span>
            </blockquote>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Cómo acceder a la edición vigente</h3>
            <p>La CPFEUM publica las ediciones en formato impreso y digital en <span class="highlight">farmacopea.org.mx</span>. El acceso digital requiere suscripción. Mantén al menos un usuario activo por establecimiento y verifica cada cambio de edición anunciado en el DOF.</p>
        </div>

        <div class="quiz-container" id="q_m1l2">
            <div class="quiz-q">&#127919; ¿Qué documento específico dentro del "universo FEUM" regula directamente a los almacenes y farmacias?</div>
            <button class="quiz-option" onclick="checkQuiz('q_m1l2', this, false)">La FEUM (libro principal) en sus monografías</button>
            <button class="quiz-option" onclick="checkQuiz('q_m1l2', this, true)">El Suplemento para Establecimientos dedicados a la venta y suministro de medicamentos, dispositivos médicos y demás insumos para la salud</button>
            <button class="quiz-option" onclick="checkQuiz('q_m1l2', this, false)">El Suplemento para Dispositivos Médicos</button>
            <button class="quiz-option" onclick="checkQuiz('q_m1l2', this, false)">La Guía de Buenas Prácticas de la OMS</button>
            <div class="quiz-feedback" id="q_m1l2_fb"></div>
        </div>
        `
    },

    // ================= MODULO 1 · LECCION 3 =================
    {
        id: 'm1l3', module: 'Módulo 1 · Marco Normativo', tag: 'tag-module', tagLabel: 'MÓDULO 1',
        title: 'Clasificación de medicamentos: el Artículo 226 de la LGS',
        subtitle: 'Fracciones I a VI e implicaciones para el almacén',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#8a1538 0%,#d32f2f 60%,#ff8a00 100%);min-height:180px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:24px;">
            <div>
                <div style="font-size:1.8em;font-weight:900;letter-spacing:2px;">LECCIÓN 3</div>
                <div style="font-size:1.05em;margin-top:6px;opacity:0.95;">Las 6 fracciones de medicamentos</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor</div>
                <div class="instructor-note-text">Toda tu operación depende de esta clasificación. El tipo de fracción determina qué licencia necesitas, qué documentos archivas, qué áreas segregas y si puedes o no vender al público. Memorízala.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#128203; Las fracciones del Art. 226 LGS</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.92em;">
                <thead style="background:#0d4f3c;color:white;">
                    <tr><th style="padding:8px;text-align:left;">Fracción</th><th style="padding:8px;text-align:left;">Qué incluye</th><th style="padding:8px;text-align:left;">Régimen</th></tr>
                </thead>
                <tbody>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><strong>I</strong></td><td style="padding:8px;">Estupefacientes del Art. 234 LGS</td><td style="padding:8px;">Receta especial con código de barras; Libro de Control foliado; Licencia Sanitaria específica</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><strong>II</strong></td><td style="padding:8px;">Psicotrópicos del Art. 245, fracc. I LGS</td><td style="padding:8px;">Receta especial con código de barras; Libro de Control; Licencia específica</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><strong>III</strong></td><td style="padding:8px;">Psicotrópicos del Art. 245, fracc. II y III LGS</td><td style="padding:8px;">Receta médica retenida; Libro de Control; Licencia específica</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><strong>IV</strong></td><td style="padding:8px;">Medicamentos con receta que se resurte las veces que indique</td><td style="padding:8px;">Receta médica simple (salvo hemoderivados/vacunas que requieren Licencia)</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><strong>V</strong></td><td style="padding:8px;">Medicamentos con receta, sin resurtido (antibióticos orales, inyectables OTC, etc.)</td><td style="padding:8px;">Receta médica, se retiene</td></tr>
                    <tr><td style="padding:8px;"><strong>VI</strong></td><td style="padding:8px;">Medicamentos de venta libre (OTC)</td><td style="padding:8px;">Pueden venderse en cualquier Establecimiento con Aviso de Funcionamiento</td></tr>
                </tbody>
            </table>
        </div>

        <div class="content-card">
            <h3>&#128196; Cita textual — documentación según fracción</h3>
            <blockquote style="border-left:4px solid #1b9271;padding:10px 16px;background:#f5faf7;font-style:italic;">
                "Almacenamiento, depósito y distribución de […] Medicamentos clasificados según el artículo 226 de la LGS en las fracciones: <strong>I solo a Farmacias, Droguerías y Boticas con Licencia Sanitaria específica para éstos; II solo a Farmacias […] con Licencia Sanitaria específica; III solo a […] con Licencia Sanitaria específica; IV solo a Farmacias, Droguerías o Boticas, excepto hemoderivados, vacunas, sueros y antitoxinas de origen animal y toxoides; V solo a Farmacias, Droguerías o Boticas; VI a cualquier Establecimiento</strong>."<br>
                <span style="font-size:0.85em;color:#666;">— FEUM, Cap. II, Tabla 1 (Documentación legal según actividades).</span>
            </blockquote>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Regla de bolsillo</h3>
            <p><strong>Fracciones I, II, III → Libro de Control + Licencia específica + área segregada con llave.</strong><br>
            <strong>Fracción IV → receta resurtible, archivo de recetas.</strong><br>
            <strong>Fracción V → receta retenida físicamente.</strong><br>
            <strong>Fracción VI → venta libre, pero con requisitos de etiquetado y caducidad.</strong></p>
        </div>

        <div class="quiz-container" id="q_m1l3">
            <div class="quiz-q">&#127919; Un almacén que maneja medicamentos fracción I, II y III debe tener, además del Aviso de Funcionamiento:</div>
            <button class="quiz-option" onclick="checkQuiz('q_m1l3', this, false)">Solo el Aviso de Responsable Sanitario</button>
            <button class="quiz-option" onclick="checkQuiz('q_m1l3', this, true)">Licencia Sanitaria específica y Libro de Control autorizado por la Autoridad Sanitaria</button>
            <button class="quiz-option" onclick="checkQuiz('q_m1l3', this, false)">Únicamente un permiso de importación</button>
            <button class="quiz-option" onclick="checkQuiz('q_m1l3', this, false)">Una constancia de la OMS</button>
            <div class="quiz-feedback" id="q_m1l3_fb"></div>
        </div>
        `
    },

    // ================= MODULO 1 · LECCION 4 =================
    {
        id: 'm1l4', module: 'Módulo 1 · Marco Normativo', tag: 'tag-module', tagLabel: 'MÓDULO 1',
        title: 'El Responsable Sanitario: responsabilidad solidaria',
        subtitle: 'Requisitos, obligaciones y consecuencias personales',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#0d4f3c 0%,#1b9271 60%,#66bb6a 100%);min-height:180px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:24px;">
            <div>
                <div style="font-size:1.8em;font-weight:900;letter-spacing:2px;">LECCIÓN 4</div>
                <div style="font-size:1.05em;margin-top:6px;opacity:0.95;">El rol de mayor peso legal en el almacén</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor</div>
                <div class="instructor-note-text">Ser Responsable Sanitario no es un título honorífico: es una figura legal con responsabilidad <em>solidaria</em> con el propietario. Si algo sale mal, respondes tú. Por eso la FEUM pone tantos "debe" alrededor de este rol. Cada numeral 1.1.9.X del Capítulo II es una obligación personal.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#128196; Cita textual — perfil profesional</h3>
            <blockquote style="border-left:4px solid #1b9271;padding:10px 16px;background:#f5faf7;font-style:italic;">
                "1.1.7. […] deben contar con un <strong>farmacéutico, químico farmacéutico biólogo, químico farmacéutico industrial o profesional cuya carrera se encuentre relacionada con la farmacia</strong>, como Responsable Sanitario; título y Cédula Profesional expedidos y registrados por las autoridades educativas competentes o documento equivalente para el caso de extranjeros."<br>
                "1.1.7.2. El Responsable Sanitario <strong>no podrá brindar este servicio en más de dos Establecimientos</strong> de insumos para la salud."<br>
                "1.1.8. El Responsable Sanitario <strong>debe ocupar o reportar al mayor nivel jerárquico</strong> del Establecimiento."<br>
                <span style="font-size:0.85em;color:#666;">— FEUM, Cap. II, numerales 1.1.7 a 1.1.8.</span>
            </blockquote>
        </div>

        <div class="content-card">
            <h3>&#9878;&#65039; Responsabilidad solidaria</h3>
            <blockquote style="border-left:4px solid #d32f2f;padding:10px 16px;background:#fdf2f2;font-style:italic;">
                "1.1.9. El Responsable Sanitario y el propietario del Establecimiento <strong>responderán solidariamente de las sanciones</strong> que correspondan en los casos en que resulten afectadas, por acción u omisión, la identidad, pureza y seguridad de los remedios herbolarios, medicamentos, dispositivos médicos y demás insumos para la salud […]"<br>
                <span style="font-size:0.85em;color:#666;">— FEUM, Cap. II, numeral 1.1.9.</span>
            </blockquote>
            <p>En lenguaje llano: la multa o la clausura cae sobre <em>ambos</em>. Y en casos graves, hay responsabilidad penal individual.</p>
        </div>

        <div class="content-card">
            <h3>&#128221; Las 22 obligaciones clave (numerales 1.1.9.1 a 1.1.9.22)</h3>
            <ol class="concept-list">
                <li>Designar <strong>Auxiliares de RS</strong> por escrito con firma de testigos y actividades delegadas.</li>
                <li>Asegurar cumplimiento de <strong>Buenas Prácticas de Almacenamiento y Distribución (BPAD)</strong>.</li>
                <li>Diseñar e implementar un <strong>Sistema de Gestión de Calidad</strong> con gestión de riesgos.</li>
                <li>Asegurar <strong>Registro Sanitario vigente</strong> en todo lo que entra.</li>
                <li>Asegurar <strong>caducidad suficiente</strong> para garantizar calidad hasta el consumo.</li>
                <li>Mantener actualizados los <strong>documentos legales sanitarios</strong>.</li>
                <li>Supervisar que solo se maneje lo incluido en el <strong>Aviso / Licencia</strong>.</li>
                <li>Asegurar <strong>PNO vigentes</strong> para toda actividad.</li>
                <li>Revisar y autorizar los <strong>documentos maestros</strong>.</li>
                <li>Asegurar <strong>capacitación</strong> inicial y continua del personal.</li>
                <li>Supervisar <strong>instalaciones y equipos</strong> para el resguardo.</li>
                <li>Supervisar <strong>mantenimiento, orden y limpieza</strong>.</li>
                <li>Prevenir <strong>actividades indebidas</strong>.</li>
                <li>Atender <strong>visitas de verificación</strong>.</li>
                <li>Garantizar <strong>trazabilidad</strong> desde el origen hasta la entrega.</li>
                <li>Mantener edición vigente del <strong>Suplemento FEUM</strong>.</li>
                <li>Asegurar que los <strong>contratos</strong> estipulen los requisitos sanitarios.</li>
                <li>Revisar <strong>periódicamente el SGC</strong> con indicadores.</li>
                <li>Revisar <strong>continuamente las Alertas Sanitarias COFEPRIS</strong>.</li>
            </ol>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Ausencia temporal</h3>
            <p>Si el RS se ausenta por más de 30 días naturales, debe notificarlo a la Secretaría de Salud e indicar el nombre de la persona que lo representará (FEUM 1.2.1.4). <em>Aun así, sigue siendo responsable del cumplimiento durante su ausencia.</em></p>
        </div>

        <div class="quiz-container" id="q_m1l4">
            <div class="quiz-q">&#127919; El Responsable Sanitario puede brindar sus servicios, como máximo, en:</div>
            <button class="quiz-option" onclick="checkQuiz('q_m1l4', this, false)">Un solo Establecimiento</button>
            <button class="quiz-option" onclick="checkQuiz('q_m1l4', this, true)">Dos Establecimientos de insumos para la salud</button>
            <button class="quiz-option" onclick="checkQuiz('q_m1l4', this, false)">Cinco Establecimientos, uno por estado</button>
            <button class="quiz-option" onclick="checkQuiz('q_m1l4', this, false)">Cualquier número, siempre que notifique a COFEPRIS</button>
            <div class="quiz-feedback" id="q_m1l4_fb"></div>
        </div>
        `
    },

    // ================= MODULO 1 · LECCION 5 =================
    {
        id: 'm1l5', module: 'Módulo 1 · Marco Normativo', tag: 'tag-module', tagLabel: 'MÓDULO 1',
        title: 'Documentación legal obligatoria del Establecimiento',
        subtitle: 'El expediente que COFEPRIS siempre revisa primero',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#3e2723 0%,#795548 60%,#c8a951 100%);min-height:180px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:24px;">
            <div>
                <div style="font-size:1.8em;font-weight:900;letter-spacing:2px;">LECCIÓN 5</div>
                <div style="font-size:1.05em;margin-top:6px;opacity:0.95;">El expediente legal-sanitario</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor</div>
                <div class="instructor-note-text">Lo primero que pide un verificador al entrar es el expediente. Si lo tienes ordenado, vigente y completo, ganas la mitad de la visita antes de empezar. El Cap. II numerales 1.2.1 a 1.2.24 lista uno por uno los documentos. Aquí los agrupamos.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#128193; Documentos legales (1.2.1 FEUM)</h3>
            <ul class="concept-list">
                <li><strong>Aviso de Funcionamiento</strong> (original o copia certificada).</li>
                <li><strong>Aviso de Responsable Sanitario</strong>.</li>
                <li><strong>Licencia Sanitaria</strong> específica (solo si maneja fracciones I, II, III, o IV hemoderivados/vacunas).</li>
                <li><strong>Aviso de apertura ante el SAT</strong> con el mismo RFC declarado a la autoridad sanitaria (1.2.2).</li>
                <li><strong>Organigrama</strong> actualizado y autorizado por el RS (1.2.3).</li>
                <li>Expediente de <strong>órdenes y actas de visitas de verificación</strong> previas (1.2.4).</li>
                <li><strong>Libros de Control</strong> autorizados para fracciones I, II, III (1.2.5).</li>
                <li>Edición vigente de los <strong>Suplementos FEUM</strong> aplicables (1.2.6).</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>&#127777;&#65039; Registros técnicos</h3>
            <ul class="concept-list">
                <li><strong>Registros de temperatura y humedad</strong> al menos 3 veces al día distribuidos en la jornada (1.2.7).</li>
                <li><strong>Mapeo térmico</strong> de áreas de almacenamiento, antes de su uso, con protocolo aprobado, identificando puntos fríos y calientes (1.2.8).</li>
                <li><strong>Plano o diagrama de distribución</strong> del Establecimiento, flujos de materiales y personal (1.2.9).</li>
                <li><strong>Programa anual de capacitación</strong> con evidencia: Auditoría, BPAD, BPD, Farmacovigilancia, Gestión de Riesgos, Tecnovigilancia, PNO, Regulación Sanitaria (1.2.10).</li>
                <li><strong>Programa de auditorías</strong> internas (autoinspecciones) y externas (1.2.11) y a proveedores (1.2.12).</li>
                <li><strong>Programa de calibración</strong> trazable a patrón nacional o internacional (1.2.13).</li>
                <li><strong>PNO actualizados</strong> firmados por el RS (1.2.15).</li>
                <li><strong>Expediente de proveedores</strong>: copia de Licencia/Aviso, RS, Aviso SAT (1.2.19).</li>
                <li><strong>Expediente de clientes</strong> (Licencia/Aviso, RS) a los que distribuye (1.2.18).</li>
                <li><strong>PNO de notificación de sospechas de reacciones adversas</strong> con evidencia de envío al Centro Nacional de Farmacovigilancia (1.2.24).</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>&#128196; Cita textual — documentación de transacciones</h3>
            <blockquote style="border-left:4px solid #1b9271;padding:10px 16px;background:#f5faf7;font-style:italic;">
                "1.2.21. Documentos que amparen la transacción de remedios herbolarios, medicamentos, dispositivos médicos y demás insumos para la salud […] deben incluir la siguiente información: <strong>fecha; denominación genérica, denominación distintiva en su caso y presentación del insumo; cantidad recibida, cantidad surtida; nombre y dirección del proveedor, cliente y Establecimiento destinatario; número de lote/serie/partida y fecha de caducidad, cuando aplique; acuse de recibido con firma y fecha</strong>. Así como el certificado analítico o de conformidad emitido por el fabricante."<br>
                <span style="font-size:0.85em;color:#666;">— FEUM, Cap. II, numeral 1.2.21.</span>
            </blockquote>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Checklist de 60 segundos</h3>
            <p>Antes de dormir, tu almacén debe tener estos 12 rubros en orden. Si falta uno, no tienes un almacén regulado; tienes una bodega.</p>
            <ol class="concept-list">
                <li>Aviso de Funcionamiento vigente · 2. Aviso de RS · 3. Licencia (si aplica) · 4. Aviso SAT · 5. Organigrama firmado · 6. Libro de Control · 7. Suplemento FEUM vigente · 8. Bitácoras temperatura/humedad al día · 9. Mapeo térmico · 10. PNO actualizados · 11. Expedientes de proveedores/clientes · 12. Programa de capacitación con evidencias.</li>
            </ol>
        </div>

        <div class="quiz-container" id="q_m1l5">
            <div class="quiz-q">&#127919; La FEUM exige que los registros de temperatura y humedad del Establecimiento se tomen como mínimo:</div>
            <button class="quiz-option" onclick="checkQuiz('q_m1l5', this, false)">Una vez por semana</button>
            <button class="quiz-option" onclick="checkQuiz('q_m1l5', this, false)">Una vez al día</button>
            <button class="quiz-option" onclick="checkQuiz('q_m1l5', this, true)">Por lo menos tres veces al día, distribuidos en la jornada laboral</button>
            <button class="quiz-option" onclick="checkQuiz('q_m1l5', this, false)">Cada hora durante las 24 horas</button>
            <div class="quiz-feedback" id="q_m1l5_fb"></div>
        </div>
        `
    },

    // ================= MODULO 2 · LECCION 1 (lesson index 6) =================
    {
        id: 'm2l1', module: 'Módulo 2 · Recepción y Almacenamiento', tag: 'tag-module', tagLabel: 'MÓDULO 2',
        title: 'Buenas Prácticas de Almacenamiento y Distribución (BPAD)',
        subtitle: 'El estándar mínimo que COFEPRIS exige',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#1a237e 0%,#3949ab 60%,#64b5f6 100%);min-height:180px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:24px;">
            <div>
                <div style="font-size:1.8em;font-weight:900;letter-spacing:2px;">LECCIÓN 6</div>
                <div style="font-size:1.05em;margin-top:6px;opacity:0.95;">Buenas Prácticas de Almacenamiento y Distribución</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor</div>
                <div class="instructor-note-text">BPAD es el equivalente a "Buenas Prácticas de Fabricación" pero para almacenes: el conjunto de controles que garantizan que un medicamento conserva su identidad, pureza y seguridad desde que entra hasta que sale. Todo lo que viene después en el curso son aplicaciones concretas de estos principios.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#127919; Los 5 pilares de las BPAD</h3>
            <ol class="concept-list">
                <li><strong>Infraestructura adecuada:</strong> áreas separadas, condiciones ambientales controladas, seguridad.</li>
                <li><strong>Sistema de Gestión de Calidad:</strong> PNO, documentos maestros, control de cambios.</li>
                <li><strong>Personal calificado y capacitado:</strong> RS, auxiliares, operarios con perfiles documentados.</li>
                <li><strong>Trazabilidad:</strong> registros de cada movimiento, de la recepción hasta la entrega final.</li>
                <li><strong>Mejora continua:</strong> autoinspecciones, auditorías, indicadores y CAPA (acciones correctivas y preventivas).</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>&#128196; Cita textual — Sistema de Gestión de Calidad</h3>
            <blockquote style="border-left:4px solid #1b9271;padding:10px 16px;background:#f5faf7;font-style:italic;">
                "1.1.6. Los Establecimientos a que se refiere este capítulo deben contar con un <strong>Sistema de Gestión de Calidad y un Manual de Calidad</strong> que incluya la estructura organizacional, procedimientos, procesos y recursos, así como las actividades necesarias para garantizar que los remedios herbolarios, medicamentos, dispositivos médicos y demás insumos para la salud a entregar cumplan con los requisitos sanitarios aplicables y <strong>se preserve su calidad e integridad durante el almacenamiento, distribución y transporte</strong>."<br>
                <span style="font-size:0.85em;color:#666;">— FEUM, Cap. II, numeral 1.1.6.</span>
            </blockquote>
        </div>

        <div class="content-card">
            <h3>&#127968; Infraestructura mínima requerida</h3>
            <ul class="concept-list">
                <li>Áreas separadas físicamente entre razones sociales en un mismo predio (1.3.1.1).</li>
                <li>Ventanas cerradas, aseguradas y sin cortinas en áreas de almacenamiento (1.3.1.2).</li>
                <li><strong>Área de producto no conforme</strong> físicamente separada e identificada (1.3.1.3).</li>
                <li><strong>Planta o sistema alterno de energía eléctrica</strong> que dé abasto a los equipos (1.3.1.4).</li>
                <li>Salas de descanso, comedor y sanitarios <strong>físicamente separados</strong> de las zonas de almacenamiento (1.3.1.5).</li>
                <li>Rótulo en la entrada con razón social, giro, horario y nombre del RS con Cédula (1.3.1.6).</li>
                <li>Ventilación controlada suficiente para renovación continua del aire (1.3.1.8).</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Regla general</h3>
            <p>Si no puedes demostrarlo con <em>documento, registro o evidencia física</em>, para efectos de verificación <strong>no existe</strong>. Las BPAD se construyen en papel y se viven en piso.</p>
        </div>

        <div class="quiz-container" id="q_m2l1">
            <div class="quiz-q">&#127919; ¿Qué exige la FEUM respecto al suministro eléctrico del Establecimiento?</div>
            <button class="quiz-option" onclick="checkQuiz('q_m2l1', this, false)">Solo un medidor CFE con contrato comercial</button>
            <button class="quiz-option" onclick="checkQuiz('q_m2l1', this, true)">Planta o sistema alterno de suministro de energía eléctrica que dé abasto a los equipos de almacenamiento y registros electrónicos</button>
            <button class="quiz-option" onclick="checkQuiz('q_m2l1', this, false)">Baterías UPS solo para las computadoras</button>
            <button class="quiz-option" onclick="checkQuiz('q_m2l1', this, false)">Ningún requisito de respaldo</button>
            <div class="quiz-feedback" id="q_m2l1_fb"></div>
        </div>
        `
    },

    // ================= MODULO 2 · LECCION 2 (lesson index 7) =================
    {
        id: 'm2l2', module: 'Módulo 2 · Recepción y Almacenamiento', tag: 'tag-module', tagLabel: 'MÓDULO 2',
        title: 'Áreas del almacén: diseño funcional',
        subtitle: 'Cuarentena, aprobado, rechazado, devoluciones y controlados',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#004d40 0%,#00796b 60%,#4db6ac 100%);min-height:180px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:24px;">
            <div>
                <div style="font-size:1.8em;font-weight:900;letter-spacing:2px;">LECCIÓN 7</div>
                <div style="font-size:1.05em;margin-top:6px;opacity:0.95;">Un lugar para cada producto, cada producto en su lugar</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor</div>
                <div class="instructor-note-text">Un almacén farmacéutico no es un cuarto con anaqueles. Es un conjunto de áreas segregadas con flujos definidos que impiden que un producto rechazado se mezcle con uno aprobado. Cuando la FEUM dice "físicamente separada", quiere decir con pared, cerca o cuando menos cinta demarcada y cerradura diferenciada.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#127970; Áreas obligatorias</h3>
            <ul class="concept-list">
                <li><strong>Recepción:</strong> muelle o zona específica para ingreso; iluminada; con mesa de trabajo.</li>
                <li><strong>Cuarentena:</strong> retiene el producto recibido hasta su liberación técnica y documental.</li>
                <li><strong>Aprobado / almacenamiento general:</strong> productos liberados, ordenados por FEFO.</li>
                <li><strong>Refrigeración (2-8 °C):</strong> con registro continuo, backup eléctrico, sin productos vencidos.</li>
                <li><strong>Congelación (-25 a -10 °C) y ultracongelación (-70 a -20 °C)</strong> cuando aplique.</li>
                <li><strong>Producto no conforme:</strong> <em>físicamente separada</em> para caducados, rechazados, falsificados, retirados (1.3.1.3).</li>
                <li><strong>Devoluciones:</strong> recepción de productos que regresan, pendientes de evaluación.</li>
                <li><strong>Controlados (fracciones I, II, III):</strong> área con doble llave, bajo resguardo del RS.</li>
                <li><strong>Embarque / despacho:</strong> zona de preparación de pedidos.</li>
                <li><strong>Área administrativa:</strong> separada físicamente de almacenamiento (1.3.1.5).</li>
                <li><strong>Sanitarios y comedor:</strong> separados físicamente.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>&#128196; Cita textual — producto no conforme</h3>
            <blockquote style="border-left:4px solid #1b9271;padding:10px 16px;background:#f5faf7;font-style:italic;">
                "1.3.1.3. Debe contar con un <strong>área de producto no conforme físicamente separada e identificada</strong> para los remedios herbolarios, medicamentos, dispositivos médicos y otros insumos <strong>falsificados, caducados, retirados, rechazados o no autorizados para su comercialización</strong>. En caso de que el Establecimiento cuente con un sistema electrónico para controlar el estatus y ubicación de los insumos para la salud, este debe estar validado."<br>
                <span style="font-size:0.85em;color:#666;">— FEUM, Cap. II, numeral 1.3.1.3.</span>
            </blockquote>
        </div>

        <div class="content-card">
            <h3>&#128196; Cita textual — no colocar en piso</h3>
            <blockquote style="border-left:4px solid #1b9271;padding:10px 16px;background:#f5faf7;font-style:italic;">
                "2.1.6. Los remedios herbolarios, medicamentos, dispositivos médicos y demás insumos para la salud <strong>no deben colocarse directamente sobre el piso</strong>."<br>
                <span style="font-size:0.85em;color:#666;">— FEUM, Cap. V, numeral 2.1.6.</span>
            </blockquote>
            <p>Esto implica uso de tarimas, anaqueles o racks. Observación recurrente en visitas COFEPRIS.</p>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Identificación visual</h3>
            <p>Cada área debe estar señalizada: letrero con nombre, color diferenciado o demarcación. En auditoría, un verificador que entra y ve áreas sin señalizar asume desorden — y documenta observación.</p>
        </div>

        <div class="quiz-container" id="q_m2l2">
            <div class="quiz-q">&#127919; El área de producto no conforme (caducados, rechazados, falsificados) debe ser:</div>
            <button class="quiz-option" onclick="checkQuiz('q_m2l2', this, false)">Solo identificada con etiqueta sobre el mismo anaquel general</button>
            <button class="quiz-option" onclick="checkQuiz('q_m2l2', this, true)">Físicamente separada e identificada, con control documental y, si es electrónico, con sistema validado</button>
            <button class="quiz-option" onclick="checkQuiz('q_m2l2', this, false)">Opcional: basta con una lista en Excel</button>
            <button class="quiz-option" onclick="checkQuiz('q_m2l2', this, false)">No es exigible en almacenes pequeños</button>
            <div class="quiz-feedback" id="q_m2l2_fb"></div>
        </div>
        `
    },

    // ================= MODULO 2 · LECCION 3 (index 8) =================
    {
        id: 'm2l3', module: 'Módulo 2 · Recepción y Almacenamiento', tag: 'tag-module', tagLabel: 'MÓDULO 2',
        title: 'Condiciones ambientales: temperatura, humedad, luz',
        subtitle: 'Los intervalos que define la FEUM y cómo demostrarlos',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#01579b 0%,#0288d1 60%,#81d4fa 100%);min-height:180px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:24px;">
            <div>
                <div style="font-size:1.8em;font-weight:900;letter-spacing:2px;">LECCIÓN 8</div>
                <div style="font-size:1.05em;margin-top:6px;opacity:0.95;">Temperatura, humedad y luz bajo control</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor</div>
                <div class="instructor-note-text">Aprende estos intervalos de memoria. En un examen COFEPRIS, confundir "refrigeración" con "fresco" puede costar una observación mayor — y en el mundo real, puede costar la eficacia del medicamento.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#127777;&#65039; Definiciones oficiales (FEUM Cap. V, numeral 2.3.2)</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.92em;">
                <thead style="background:#01579b;color:white;">
                    <tr><th style="padding:8px;text-align:left;">Término</th><th style="padding:8px;text-align:left;">Intervalo</th></tr>
                </thead>
                <tbody>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;">Temperatura de congelación</td><td style="padding:8px;">-25 a -10 °C</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;">Temperatura ultra baja de congelación</td><td style="padding:8px;">-90 a -70 °C</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;">Temperatura de ultracongelación</td><td style="padding:8px;">-70 a -20 °C</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><strong>Temperatura de refrigeración</strong></td><td style="padding:8px;"><strong>2 a 8 °C</strong></td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;">Refrigeración controlada</td><td style="padding:8px;">2 a 8 °C, con excursiones permitidas entre 0 y 15 °C si la media cinética no excede 8 °C</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;">Fresco</td><td style="padding:8px;">8 a 15 °C</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><strong>Ambiente controlada</strong></td><td style="padding:8px;"><strong>20 a 25 °C (excursiones 15 a 30 °C)</strong></td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;">Caliente</td><td style="padding:8px;">30 a 40 °C</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;">Muy caliente</td><td style="padding:8px;">&gt; 40 °C</td></tr>
                    <tr><td style="padding:8px;"><strong>Lugar seco</strong></td><td style="padding:8px;">HR ≤ 40% a temperatura ambiente controlada (hasta 45% si el promedio es 40%)</td></tr>
                </tbody>
            </table>
        </div>

        <div class="content-card">
            <h3>&#128196; Cita textual — ambiente controlada y seco</h3>
            <blockquote style="border-left:4px solid #1b9271;padding:10px 16px;background:#f5faf7;font-style:italic;">
                "2.3.2.8.1. Temperatura que se mantiene termostáticamente entre 20 y 25 °C y permite excursiones entre 15 y 30 °C, siempre que la media cinética no exceda de 25 °C. Pueden permitirse picos transitorios arriba de 40 °C si no se presentan por más de 24 h y el fabricante tiene estudios de estabilidad de soporte. <strong>Los productos deben ser etiquetados con la leyenda: 'Consérvese a no más de 25 °C'</strong> cuando sea necesario conservarlos a temperatura ambiente controlada."<br>
                "2.3.2.12.1. Lugar con una <strong>humedad relativa no mayor del 40%</strong> a una temperatura ambiente controlada. La determinación puede hacerse mediante lecturas directas en el lugar o basarse en informes de condiciones climáticas."<br>
                <span style="font-size:0.85em;color:#666;">— FEUM, Cap. V, numerales 2.3.2.8.1 y 2.3.2.12.1.</span>
            </blockquote>
        </div>

        <div class="content-card">
            <h3>&#128269; Mapeo térmico obligatorio</h3>
            <blockquote style="border-left:4px solid #1b9271;padding:10px 16px;background:#f5faf7;font-style:italic;">
                "1.2.8.1. Se debe realizar un <strong>mapeo térmico de temperatura y humedad</strong> en el área de almacenamiento antes de su uso, en condiciones representativas a través de un protocolo aprobado, con el objetivo fundamental de identificar puntos fríos, calientes y potenciales desviaciones […] para poder tomar medidas correctivas."<br>
                <span style="font-size:0.85em;color:#666;">— FEUM, Cap. II, numeral 1.2.8.1.</span>
            </blockquote>
            <p>El mapeo se hace con <em>varios sensores (mínimo 9 para áreas pequeñas, 15-30 en grandes)</em>, durante al menos 7 días, en condiciones vacías y cargadas, documentando el estudio.</p>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Calibración trazable</h3>
            <p>Los termohigrómetros <em>deben</em> estar calibrados con trazabilidad a patrón nacional o internacional (CENAM / NIST). Conserva los certificados vigentes; un certificado vencido = instrumento no confiable.</p>
        </div>

        <div class="quiz-container" id="q_m2l3">
            <div class="quiz-q">&#127919; Según la FEUM, "temperatura de refrigeración" se define como:</div>
            <button class="quiz-option" onclick="checkQuiz('q_m2l3', this, false)">La que indique el congelador del hogar</button>
            <button class="quiz-option" onclick="checkQuiz('q_m2l3', this, true)">La que se mantiene en el intervalo de 2 a 8 °C</button>
            <button class="quiz-option" onclick="checkQuiz('q_m2l3', this, false)">De 8 a 15 °C</button>
            <button class="quiz-option" onclick="checkQuiz('q_m2l3', this, false)">Cualquiera menor a 20 °C</button>
            <div class="quiz-feedback" id="q_m2l3_fb"></div>
        </div>
        `
    },

    // ================= MODULO 2 · LECCION 4 (index 9) — CON DESCARGA BITACORA =================
    {
        id: 'm2l4', module: 'Módulo 2 · Recepción y Almacenamiento', tag: 'tag-module', tagLabel: 'MÓDULO 2',
        title: 'Cadena de frío: procedimiento y bitácoras',
        subtitle: 'Cómo proteger vacunas, biológicos y termolábiles',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#006064 0%,#00acc1 60%,#80deea 100%);min-height:180px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:24px;">
            <div>
                <div style="font-size:1.8em;font-weight:900;letter-spacing:2px;">LECCIÓN 9</div>
                <div style="font-size:1.05em;margin-top:6px;opacity:0.95;">Red de frío — 2 a 8 °C sin excepciones</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor</div>
                <div class="instructor-note-text">Una vacuna a 12 °C por 20 minutos puede perder su eficacia sin que cambie su apariencia. Por eso la cadena de frío no se mide en lo que "se ve", sino en lo que se registra. Esta lección es corazón del curso; descarga la bitácora y úsala desde mañana.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#10052;&#65039; Diseño de equipos de refrigeración (FEUM 2.2.1)</h3>
            <ul class="concept-list">
                <li>Materiales de fácil limpieza y resistentes a la corrosión.</li>
                <li>Sistema de enfriamiento que <strong>minimice variación</strong> interior.</li>
                <li>Medición de temperatura interior calibrable.</li>
                <li>Flujo de aire en el interior.</li>
                <li><strong>Ausencia de escarcha</strong>.</li>
                <li>Sistema de <strong>alertamiento</strong> por excursión y por apertura prolongada de puertas.</li>
                <li>Pruebas de operación sin carga documentadas.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>&#128196; Cita textual — operación (2.2.3)</h3>
            <blockquote style="border-left:4px solid #1b9271;padding:10px 16px;background:#f5faf7;font-style:italic;">
                "2.2.3.10. Registrar la temperatura interna del equipo y la temperatura ambiente del Establecimiento <strong>cuando menos tres veces al día</strong>. El registro correspondiente debe indicar la hora, la temperatura y <strong>debe conservarse por lo menos dos años</strong>."<br>
                "2.2.3.11. Cuando el equipo cuente con puertas con compartimentos, <strong>no deben almacenarse insumos en ellos</strong>."<br>
                "2.2.3.13. Si el Establecimiento no cuenta con planta eléctrica de emergencia, debe tener un PNO en el que se describan las medidas que se toman en casos de contingencia, para <strong>trasladar los […] insumos […] que requieran refrigeración a un sitio alterno</strong>."<br>
                <span style="font-size:0.85em;color:#666;">— FEUM, Cap. V, numerales 2.2.3.10 a 2.2.3.13.</span>
            </blockquote>
        </div>

        <div class="content-card">
            <h3>&#9888;&#65039; Qué hacer ante una excursión de temperatura</h3>
            <ol class="concept-list">
                <li><strong>Detectar</strong>: alarma del equipo o lectura manual fuera de rango.</li>
                <li><strong>Aislar</strong>: marcar el lote como "bajo investigación" — no retirar del refrigerador si la excursión es corta (&lt;30 min) mientras se evalúa.</li>
                <li><strong>Documentar</strong>: fecha, hora, duración, temperatura mínima/máxima alcanzada.</li>
                <li><strong>Evaluar</strong>: consultar la <em>ficha técnica</em> del fabricante y estudios de estabilidad. Un producto puede seguir siendo útil si la excursión fue menor al límite documentado.</li>
                <li><strong>Decidir</strong>: liberar, cuarentenar o desechar según criterio del RS.</li>
                <li><strong>Acciones correctivas</strong>: reparar equipo, reforzar capacitación, ajustar alarmas.</li>
                <li><strong>Notificar</strong>: en caso de biológicos sensibles, al titular del registro sanitario.</li>
            </ol>
        </div>

        <div class="content-card" style="background:linear-gradient(135deg,#e1f5fe 0%,#b3e5fc 100%);border:2px solid #0277bd;">
            <h3 style="color:#01579b;">&#128196; Plantilla descargable: Bitácora de Temperatura y Humedad</h3>
            <p>Bitácora en Excel con hojas mensuales, fórmulas de promedio / mínimo / máximo, gráfico automático y columna de responsable. Lista para imprimir o llenar digitalmente.</p>
            <p><a href="assets/plantillas/bitacora-temperatura-humedad.xlsx" download class="btn btn-primary" style="text-decoration:none;display:inline-block;margin-top:10px;">&#11015;&#65039; Descargar bitácora (.xlsx)</a></p>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Remisión normativa</h3>
            <p>Para vacunas y biológicos, consulta además la <strong>NOM-036-SSA2</strong>, "Prevención y control de enfermedades. Aplicación de vacunas, toxoides, faboterápicos (sueros) e inmunoglobulinas en el humano", y la <em>Guía de calidad del sistema de vigilancia de vacunas</em> vigente.</p>
        </div>

        <div class="quiz-container" id="q_m2l4">
            <div class="quiz-q">&#127919; ¿Cuánto tiempo deben conservarse los registros de temperatura de equipos de cadena de frío según la FEUM?</div>
            <button class="quiz-option" onclick="checkQuiz('q_m2l4', this, false)">30 días</button>
            <button class="quiz-option" onclick="checkQuiz('q_m2l4', this, false)">6 meses</button>
            <button class="quiz-option" onclick="checkQuiz('q_m2l4', this, false)">1 año</button>
            <button class="quiz-option" onclick="checkQuiz('q_m2l4', this, true)">Por lo menos dos años</button>
            <div class="quiz-feedback" id="q_m2l4_fb"></div>
        </div>
        `
    },

    // ================= MODULO 2 · LECCION 5 (index 10) — CHECKLIST RECEPCION =================
    {
        id: 'm2l5', module: 'Módulo 2 · Recepción y Almacenamiento', tag: 'tag-module', tagLabel: 'MÓDULO 2',
        title: 'Recepción técnica: verificación física y documental',
        subtitle: 'El filtro que decide qué entra al almacén',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#33691e 0%,#689f38 60%,#aed581 100%);min-height:180px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:24px;">
            <div>
                <div style="font-size:1.8em;font-weight:900;letter-spacing:2px;">LECCIÓN 10</div>
                <div style="font-size:1.05em;margin-top:6px;opacity:0.95;">Recepción técnica sin atajos</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor</div>
                <div class="instructor-note-text">Lo que pasa el filtro de recepción, después ya no se puede "desinstalar" del almacén sin quemar dinero. Dedicar 10 minutos bien hechos a cada entrega te ahorra horas de devoluciones y multas.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#128196; Cita textual — recepción técnica (FEUM Cap. IV, 4)</h3>
            <blockquote style="border-left:4px solid #1b9271;padding:10px 16px;background:#f5faf7;font-style:italic;">
                "4.1.1. Corroborar que la adquisición se haya realizado con <strong>proveedores aprobados</strong>, de acuerdo con el PNO para la adquisición […] y que la documentación que avala la posesión legal corresponda al Establecimiento emisor y al receptor correctos.<br>
                4.1.2. Realizar la <strong>inspección por atributos</strong> durante el proceso de recepción […] para garantizar que se cumple con los criterios de aceptación.<br>
                4.1.3. Revisión de cumplimiento de las <strong>normas de etiquetado y vigencia de Registro Sanitario</strong>."<br>
                <span style="font-size:0.85em;color:#666;">— FEUM, Cap. IV, numeral 4.</span>
            </blockquote>
        </div>

        <div class="content-card">
            <h3>&#9989; Checklist de 15 puntos para cada recepción</h3>
            <ol class="concept-list">
                <li>Factura o documento de traslado con el nombre correcto del destinatario.</li>
                <li>Proveedor dentro de tu padrón aprobado con expediente vigente.</li>
                <li>Denominación genérica y distintiva coincide con el pedido.</li>
                <li>Concentración y forma farmacéutica correctas.</li>
                <li>Presentación (contenido por envase) coincide.</li>
                <li>Cantidad recibida = cantidad facturada.</li>
                <li>Número de lote legible en empaque primario y secundario.</li>
                <li>Fecha de caducidad visible y suficiente para garantizar calidad hasta el consumo.</li>
                <li>Registro Sanitario vigente (si aplica) cotejado con el Compendio COFEPRIS.</li>
                <li>Etiquetado conforme a NOM-072-SSA1 (medicamentos) o NOM-137-SSA1 (DM).</li>
                <li>Integridad física del envase: sin roturas, manchas, abolladuras.</li>
                <li>Termógrafo o indicador de cadena de frío (si aplica) dentro de rango.</li>
                <li>Certificado analítico o de conformidad emitido por el fabricante.</li>
                <li>Producto <em>no</em> incluido en Alertas Sanitarias COFEPRIS.</li>
                <li>Firma y fecha de acuse en el documento de entrada.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>&#128681; Motivos obligatorios de rechazo</h3>
            <ul class="concept-list">
                <li>Producto caducado o próximo a caducar (sin caducidad suficiente).</li>
                <li>Registro Sanitario vencido.</li>
                <li>Envase violado, manchado, inflado o con fugas (FEUM 3.3).</li>
                <li>Lote o caducidad ilegibles.</li>
                <li>Termógrafo fuera de rango en cadena de frío.</li>
                <li>Producto en Alerta Sanitaria oficial.</li>
                <li>Denominación o presentación distintas a lo pedido.</li>
            </ul>
        </div>

        <div class="content-card" style="background:linear-gradient(135deg,#f1f8e9 0%,#dcedc8 100%);border:2px solid #558b2f;">
            <h3 style="color:#33691e;">&#128196; Plantilla descargable: Checklist de Recepción</h3>
            <p>Checklist imprimible en PDF con los 15 puntos, espacio para firma del receptor y del proveedor, motivo de rechazo y trazabilidad de lote. Tamaño carta, dos recepciones por hoja.</p>
            <p><a href="assets/plantillas/checklist-recepcion-medicamentos.pdf" download class="btn btn-primary" style="text-decoration:none;display:inline-block;margin-top:10px;">&#11015;&#65039; Descargar checklist (.pdf)</a></p>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Política de muestreo</h3>
            <p>En recepciones grandes (&gt;50 cajas), la inspección al 100% no es viable. Define un <strong>plan de muestreo por atributos</strong> (referencia: MIL-STD-105E o ISO 2859-1) y documéntalo en tu PNO.</p>
        </div>

        <div class="quiz-container" id="q_m2l5">
            <div class="quiz-q">&#127919; Durante la recepción técnica, si detectas que el Registro Sanitario del producto no está vigente, debes:</div>
            <button class="quiz-option" onclick="checkQuiz('q_m2l5', this, false)">Recibirlo y confiar en el proveedor</button>
            <button class="quiz-option" onclick="checkQuiz('q_m2l5', this, false)">Almacenarlo en cuarentena indefinidamente</button>
            <button class="quiz-option" onclick="checkQuiz('q_m2l5', this, true)">Rechazarlo documentadamente y no permitir su ingreso al almacén aprobado</button>
            <button class="quiz-option" onclick="checkQuiz('q_m2l5', this, false)">Venderlo antes de que expire tu propio aviso</button>
            <div class="quiz-feedback" id="q_m2l5_fb"></div>
        </div>
        `
    },

    // ================= MODULO 2 · LECCION 6 (index 11) =================
    {
        id: 'm2l6', module: 'Módulo 2 · Recepción y Almacenamiento', tag: 'tag-module', tagLabel: 'MÓDULO 2',
        title: 'Medicamentos controlados: estupefacientes y psicotrópicos',
        subtitle: 'Libro de Control y custodia bajo llave',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#b71c1c 0%,#e53935 60%,#ffb300 100%);min-height:180px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:24px;">
            <div>
                <div style="font-size:1.8em;font-weight:900;letter-spacing:2px;">LECCIÓN 11</div>
                <div style="font-size:1.05em;margin-top:6px;opacity:0.95;">Fracciones I, II y III del Art. 226 LGS</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor</div>
                <div class="instructor-note-text">Los controlados son el área más sensible del almacén. Una inconsistencia de una ampolleta puede activar una investigación penal. Aquí la palabra clave es <em>trazabilidad absoluta</em>: debes poder reconstruir cada unidad desde su entrada hasta su salida.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#128272; Requisitos especiales</h3>
            <ul class="concept-list">
                <li><strong>Licencia Sanitaria específica</strong> para fracciones I, II y III.</li>
                <li><strong>Libro de Control foliado y autorizado</strong> por la Autoridad Sanitaria (físico o electrónico validado).</li>
                <li><strong>Área segregada con doble llave</strong>: custodia compartida entre RS y otro responsable designado.</li>
                <li><strong>Balance mensual</strong> entrada / salida / existencia, con reporte a la autoridad en los términos del RIS.</li>
                <li><strong>Recetas especiales con código de barras</strong> para Fracciones I y II.</li>
                <li><strong>Inventario físico</strong> al menos mensual, conciliado con el libro.</li>
                <li><strong>Destrucción controlada</strong> ante Secretaría de Salud con acta y acuse.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>&#128196; Marco legal clave</h3>
            <blockquote style="border-left:4px solid #1b9271;padding:10px 16px;background:#f5faf7;font-style:italic;">
                "1.2.5. Libros de control escritos o electrónicos <strong>autorizados por la Autoridad Sanitaria</strong> para medicamentos estupefacientes y psicotrópicos clasificados en las fracciones I, II y III. Véase el capítulo Medicamentos estupefacientes y psicotrópicos."<br>
                <span style="font-size:0.85em;color:#666;">— FEUM, Cap. II, numeral 1.2.5.</span>
            </blockquote>
            <p>Referencia adicional: artículos 234 y 245 LGS; artículos 37 a 49 del Reglamento de Insumos para la Salud; capítulo VII del Suplemento para Establecimientos.</p>
        </div>

        <div class="content-card">
            <h3>&#128203; Campos obligatorios del Libro de Control</h3>
            <ul class="concept-list">
                <li>Fecha y hora del movimiento.</li>
                <li>Tipo de movimiento (entrada / salida / ajuste).</li>
                <li>Nombre genérico, distintivo, concentración y presentación.</li>
                <li>Número de lote y caducidad.</li>
                <li>Cantidad recibida / surtida.</li>
                <li>Saldo después del movimiento.</li>
                <li>Proveedor o paciente / receta (con folio COFEPRIS y médico prescriptor).</li>
                <li>Firma del Responsable Sanitario o auxiliar autorizado.</li>
                <li>Observaciones (devolución, merma, error, destrucción).</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Reconciliación diaria</h3>
            <p>Al cierre, el conteo físico del área de controlados debe coincidir con el saldo del libro. Si hay diferencia, se investiga <em>el mismo día</em> y se documenta en observaciones. Una diferencia no resuelta por más de 24 horas es una bandera roja para cualquier auditor.</p>
        </div>

        <div class="quiz-container" id="q_m2l6">
            <div class="quiz-q">&#127919; ¿Qué debe tener el Libro de Control de medicamentos fracciones I, II y III?</div>
            <button class="quiz-option" onclick="checkQuiz('q_m2l6', this, false)">Solo la firma del dueño del establecimiento</button>
            <button class="quiz-option" onclick="checkQuiz('q_m2l6', this, true)">Autorización foliada de la Autoridad Sanitaria, en formato escrito o electrónico validado</button>
            <button class="quiz-option" onclick="checkQuiz('q_m2l6', this, false)">Ningún requisito especial: es un libro común</button>
            <button class="quiz-option" onclick="checkQuiz('q_m2l6', this, false)">Visto bueno de la cámara de comercio local</button>
            <div class="quiz-feedback" id="q_m2l6_fb"></div>
        </div>
        `
    },

    // ================= MODULO 3 · LECCION 1 (index 12) — KARDEX DOWNLOAD =================
    {
        id: 'm3l1', module: 'Módulo 3 · Control de Inventarios', tag: 'tag-module', tagLabel: 'MÓDULO 3',
        title: 'Kárdex físico y electrónico',
        subtitle: 'El diario de vida de cada producto',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#4a148c 0%,#7b1fa2 60%,#ce93d8 100%);min-height:180px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:24px;">
            <div>
                <div style="font-size:1.8em;font-weight:900;letter-spacing:2px;">LECCIÓN 12</div>
                <div style="font-size:1.05em;margin-top:6px;opacity:0.95;">Kárdex: el corazón del control de existencias</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor</div>
                <div class="instructor-note-text">El kárdex es al almacén lo que el estado de cuenta al banco. Cada movimiento, registrado. Cada saldo, reconciliable. Si tu sistema ERP lo hace por ti, perfecto — pero sigue siendo responsabilidad del RS validar que los campos estén completos. Al final de esta lección descargas una plantilla en Excel con fórmulas listas.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#128196; Cita textual — entradas y salidas</h3>
            <blockquote style="border-left:4px solid #1b9271;padding:10px 16px;background:#f5faf7;font-style:italic;">
                "5.1.1. Se consideran movimientos de entrada a aquellos que incrementan las existencias […] respaldados con factura, documento de devolución o documento que ampare su posesión y procedencia lícita.<br>
                5.2.1. Se consideran movimientos de salida los que disminuyen las existencias […] como la venta, distribución, <strong>baja para destrucción</strong> y la devolución a proveedores por cualquier motivo.<br>
                5.2.2. Los registros de salida deben indicar su tipo. En el caso de devolución al proveedor, se debe especificar el motivo […]"<br>
                <span style="font-size:0.85em;color:#666;">— FEUM, Cap. IV, numeral 5.</span>
            </blockquote>
        </div>

        <div class="content-card">
            <h3>&#128203; Campos mínimos del kárdex</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.88em;">
                <thead style="background:#4a148c;color:white;">
                    <tr><th style="padding:6px;">Campo</th><th style="padding:6px;">Descripción</th></tr>
                </thead>
                <tbody>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:6px;"><strong>Código / SKU</strong></td><td style="padding:6px;">Identificador interno</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:6px;">Denominación genérica</td><td style="padding:6px;">DCI (INN)</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:6px;">Denominación distintiva</td><td style="padding:6px;">Marca comercial</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:6px;">Concentración y forma farmacéutica</td><td style="padding:6px;">p. ej. 500 mg tabletas</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:6px;">Presentación</td><td style="padding:6px;">Unidades por envase</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:6px;">Fracción Art. 226 LGS</td><td style="padding:6px;">I a VI</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:6px;">Registro Sanitario y vigencia</td><td style="padding:6px;">Número y fecha</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:6px;"><strong>Lote y caducidad</strong></td><td style="padding:6px;">Uno por fila si se manejan múltiples lotes</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:6px;">Fecha del movimiento</td><td style="padding:6px;">dd/mm/aaaa hh:mm</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:6px;">Tipo de movimiento</td><td style="padding:6px;">Entrada / Salida / Ajuste / Devolución</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:6px;">Cantidad</td><td style="padding:6px;">Unidades</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:6px;">Saldo</td><td style="padding:6px;">Existencia acumulada por lote</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:6px;">Documento soporte</td><td style="padding:6px;">Factura / receta / PNO</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:6px;">Proveedor o cliente</td><td style="padding:6px;">Razón social y domicilio</td></tr>
                    <tr><td style="padding:6px;">Responsable del movimiento</td><td style="padding:6px;">Firma o ID del usuario</td></tr>
                </tbody>
            </table>
        </div>

        <div class="content-card">
            <h3>&#128187; Kárdex electrónico: requisitos adicionales</h3>
            <ul class="concept-list">
                <li>Sistema <strong>validado</strong> (documento IQ/OQ/PQ).</li>
                <li><strong>Bitácora de auditoría</strong> inalterable (audit trail).</li>
                <li>Respaldos periódicos con prueba de restauración.</li>
                <li>Control de accesos por rol y firmas electrónicas identificables.</li>
                <li>Capacidad de exportar reportes para visitas COFEPRIS.</li>
            </ul>
        </div>

        <div class="content-card" style="background:linear-gradient(135deg,#f3e5f5 0%,#e1bee7 100%);border:2px solid #7b1fa2;">
            <h3 style="color:#4a148c;">&#128196; Plantilla descargable: Kárdex Farmacéutico</h3>
            <p>Hoja Excel con columnas preformateadas, fórmulas de saldo acumulado por lote, alertas condicionales por caducidad &lt;6 meses y &lt;90 días, y hoja de resumen por producto. Usable desde el día siguiente.</p>
            <p><a href="assets/plantillas/kardex-farmaceutico.xlsx" download class="btn btn-primary" style="text-decoration:none;display:inline-block;margin-top:10px;">&#11015;&#65039; Descargar kárdex (.xlsx)</a></p>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Cierre diario</h3>
            <p>Antes de apagar la luz, cierra el kárdex del día: imprime o exporta respaldo y firma. Si al día siguiente aparece una discrepancia, tendrás un punto de referencia claro.</p>
        </div>

        <div class="quiz-container" id="q_m3l1">
            <div class="quiz-q">&#127919; ¿Qué campo del kárdex es <em>imprescindible</em> para garantizar trazabilidad en caso de retiro de producto?</div>
            <button class="quiz-option" onclick="checkQuiz('q_m3l1', this, false)">El color del envase</button>
            <button class="quiz-option" onclick="checkQuiz('q_m3l1', this, true)">El número de lote y la fecha de caducidad</button>
            <button class="quiz-option" onclick="checkQuiz('q_m3l1', this, false)">El precio de venta al público</button>
            <button class="quiz-option" onclick="checkQuiz('q_m3l1', this, false)">El origen del proveedor (nacional o extranjero) únicamente</button>
            <div class="quiz-feedback" id="q_m3l1_fb"></div>
        </div>
        `
    },

    // ================= MODULO 3 · LECCION 2 (index 13) =================
    {
        id: 'm3l2', module: 'Módulo 3 · Control de Inventarios', tag: 'tag-module', tagLabel: 'MÓDULO 3',
        title: 'PEPS / FEFO: primero lo que primero caduca',
        subtitle: 'Por qué en farmacia no basta con PEPS',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#e65100 0%,#fb8c00 60%,#ffcc80 100%);min-height:180px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:24px;">
            <div>
                <div style="font-size:1.8em;font-weight:900;letter-spacing:2px;">LECCIÓN 13</div>
                <div style="font-size:1.05em;margin-top:6px;opacity:0.95;">FEFO: First Expired, First Out</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor</div>
                <div class="instructor-note-text">En un almacén de abarrotes, PEPS (primeras entradas, primeras salidas) basta. En un almacén farmacéutico, no. Un lote más reciente puede tener caducidad más corta por razones de producción. La regla correcta es FEFO: primeras caducidades, primeras salidas.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#128226; Diferencia PEPS vs. FEFO</h3>
            <ul class="concept-list">
                <li><strong>PEPS (FIFO):</strong> sale primero lo que entró primero. Asume que lo más antiguo es lo que caduca primero.</li>
                <li><strong>FEFO:</strong> sale primero lo que caduca primero, <em>independientemente</em> de cuándo entró.</li>
                <li>En medicamentos, FEFO es la única regla aceptable porque: (1) los fabricantes liberan lotes con caducidades no lineales; (2) proveedores pueden enviar lotes más nuevos con fecha más corta; (3) el riesgo clínico es cero tolerancia.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>&#128681; Cómo implementar FEFO en piso</h3>
            <ol class="concept-list">
                <li><strong>Etiquetado visible</strong> de caducidad en cada unidad de empaque secundario, en la cara visible del anaquel.</li>
                <li><strong>Rotación manual semanal</strong>: moverse físicamente hacia adelante lo que caduca antes.</li>
                <li><strong>Alertas en kárdex</strong>: resaltar productos con caducidad &lt;180 días (ámbar) y &lt;90 días (rojo).</li>
                <li>Para productos con <strong>caducidades múltiples</strong>, separar físicamente por lote en sub-anaqueles.</li>
                <li><strong>Auditoría de FEFO</strong> cada mes: muestra de 20 SKUs, verificar que la unidad al frente es la de menor caducidad.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>&#128196; Soporte normativo</h3>
            <blockquote style="border-left:4px solid #1b9271;padding:10px 16px;background:#f5faf7;font-style:italic;">
                "1.1.9.5. Para los remedios herbolarios, medicamentos, dispositivos médicos y demás insumos para la salud que cuenten con fecha de caducidad, asegurar que solo se comercialicen, distribuyan y transporten aquellos que cuenten con la <strong>caducidad suficiente para garantizar su calidad y seguridad hasta su consumo</strong>."<br>
                <span style="font-size:0.85em;color:#666;">— FEUM, Cap. II, numeral 1.1.9.5.</span>
            </blockquote>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Caducidad de contrato</h3>
            <p>Establece en tus contratos con proveedores una cláusula de <strong>caducidad mínima al recibir</strong> (ejemplo: "se aceptarán productos con ≥75% de su vida útil restante"). Esta cláusula te ahorra pérdidas por productos próximos a caducar que el proveedor trata de colocar.</p>
        </div>

        <div class="quiz-container" id="q_m3l2">
            <div class="quiz-q">&#127919; ¿Cuál es la regla de rotación aplicable en un almacén farmacéutico y por qué?</div>
            <button class="quiz-option" onclick="checkQuiz('q_m3l2', this, false)">PEPS, porque el producto más antiguo siempre caduca primero</button>
            <button class="quiz-option" onclick="checkQuiz('q_m3l2', this, true)">FEFO, porque las caducidades no siguen el orden de entrada y el riesgo clínico no lo permite</button>
            <button class="quiz-option" onclick="checkQuiz('q_m3l2', this, false)">UEPS, para obtener ventaja fiscal</button>
            <button class="quiz-option" onclick="checkQuiz('q_m3l2', this, false)">La que decida el cliente al momento de comprar</button>
            <div class="quiz-feedback" id="q_m3l2_fb"></div>
        </div>
        `
    },

    // ================= MODULO 3 · LECCION 3 (index 14) =================
    {
        id: 'm3l3', module: 'Módulo 3 · Control de Inventarios', tag: 'tag-module', tagLabel: 'MÓDULO 3',
        title: 'Trazabilidad por lote: hacia atrás y hacia adelante',
        subtitle: 'Reconstruir el viaje de un medicamento en minutos',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#01579b 0%,#0277bd 60%,#4fc3f7 100%);min-height:180px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:24px;">
            <div>
                <div style="font-size:1.8em;font-weight:900;letter-spacing:2px;">LECCIÓN 14</div>
                <div style="font-size:1.05em;margin-top:6px;opacity:0.95;">Trazabilidad es saber dónde fue y de dónde vino cada unidad</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor</div>
                <div class="instructor-note-text">Si COFEPRIS emite una alerta sanitaria hoy, ¿cuánto tardarías en identificar qué clientes recibieron el lote afectado? Esa pregunta define si tu sistema de trazabilidad funciona o no. El estándar: menos de 4 horas.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#128196; Cita textual</h3>
            <blockquote style="border-left:4px solid #1b9271;padding:10px 16px;background:#f5faf7;font-style:italic;">
                "1.1.9.18. Supervisar el registro y resguardo de la documentación de las transacciones y custodia de los remedios herbolarios, medicamentos, dispositivos médicos y demás insumos para la salud que garanticen la <strong>trazabilidad desde el origen hasta su entrega</strong>."<br>
                <span style="font-size:0.85em;color:#666;">— FEUM, Cap. II, numeral 1.1.9.18.</span>
            </blockquote>
        </div>

        <div class="content-card">
            <h3>&#128279; Trazabilidad hacia atrás</h3>
            <p>Ante cualquier producto en almacén o vendido, debes poder reconstruir:</p>
            <ul class="concept-list">
                <li>Proveedor que lo surtió (razón social, domicilio, Licencia).</li>
                <li>Factura y fecha de recepción.</li>
                <li>Número de lote y fecha de caducidad del fabricante.</li>
                <li>Certificado analítico o de conformidad.</li>
                <li>Condiciones de transporte (termógrafo si aplica).</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>&#127942; Trazabilidad hacia adelante</h3>
            <p>Ante cualquier lote recibido, debes poder identificar:</p>
            <ul class="concept-list">
                <li>Clientes que recibieron unidades de ese lote (con facturas y fechas).</li>
                <li>Cantidades surtidas a cada uno.</li>
                <li>Saldo actual en almacén de ese lote.</li>
                <li>Canales de contacto con cada cliente (para recall).</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>&#127919; Simulacro recomendado</h3>
            <p>Haz un <strong>simulacro de retiro</strong> trimestral:</p>
            <ol class="concept-list">
                <li>Escoge al azar un lote con &gt;3 meses en almacén.</li>
                <li>Cronometra cuánto tardas en generar el reporte completo de dónde entró, cuánto se vendió, a quién y cuánto queda.</li>
                <li>Meta: menos de 4 horas. Si tardas más, tienes un hallazgo.</li>
                <li>Documenta el simulacro — es evidencia valiosa en auditoría.</li>
            </ol>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Serialización</h3>
            <p>La tendencia global (UE, EEUU) es hacia la serialización por unidad de venta (un código único por caja). México avanza en esta dirección para ciertos grupos; mantente al día consultando las Alertas y lineamientos COFEPRIS.</p>
        </div>

        <div class="quiz-container" id="q_m3l3">
            <div class="quiz-q">&#127919; La trazabilidad "hacia adelante" permite responder rápidamente a:</div>
            <button class="quiz-option" onclick="checkQuiz('q_m3l3', this, false)">Quién es el proveedor original de un producto</button>
            <button class="quiz-option" onclick="checkQuiz('q_m3l3', this, true)">A qué clientes se les envió un lote específico en caso de retiro o alerta</button>
            <button class="quiz-option" onclick="checkQuiz('q_m3l3', this, false)">Cuánto se pagó de IVA en una factura</button>
            <button class="quiz-option" onclick="checkQuiz('q_m3l3', this, false)">Qué ruta de transporte se usó</button>
            <div class="quiz-feedback" id="q_m3l3_fb"></div>
        </div>
        `
    },

    // ================= MODULO 3 · LECCION 4 (index 15) =================
    {
        id: 'm3l4', module: 'Módulo 3 · Control de Inventarios', tag: 'tag-module', tagLabel: 'MÓDULO 3',
        title: 'Inventarios cíclicos vs. físicos',
        subtitle: 'Metodología, frecuencia y conciliación',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#1b5e20 0%,#388e3c 60%,#a5d6a7 100%);min-height:180px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:24px;">
            <div>
                <div style="font-size:1.8em;font-weight:900;letter-spacing:2px;">LECCIÓN 15</div>
                <div style="font-size:1.05em;margin-top:6px;opacity:0.95;">Contar para controlar</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor</div>
                <div class="instructor-note-text">El kárdex dice cuánto deberías tener. El inventario físico dice cuánto realmente tienes. La diferencia entre ambos es tu hallazgo de control interno. Empresas maduras van reduciendo esa diferencia hasta &lt;1%.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#128202; Tipos de inventario</h3>
            <ul class="concept-list">
                <li><strong>Inventario físico total:</strong> una o dos veces al año; se cuentan todos los SKUs, con cierre operativo.</li>
                <li><strong>Inventario cíclico o rotativo:</strong> diario / semanal; se cuenta un subconjunto según plan. Al año, se cubre el 100% del catálogo.</li>
                <li><strong>Inventario por evento:</strong> tras un incidente (robo, excursión grave, cambio de sistema).</li>
                <li><strong>Inventario de controlados:</strong> al menos mensual, obligatorio por RIS.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>&#128260; Metodología de ABC para cíclicos</h3>
            <p>Clasifica tu catálogo con la ley de Pareto:</p>
            <ul class="concept-list">
                <li><strong>Clase A:</strong> 20% de SKUs, 80% del valor. Cuenta <em>mensual</em>.</li>
                <li><strong>Clase B:</strong> 30% SKUs, 15% valor. Cuenta <em>trimestral</em>.</li>
                <li><strong>Clase C:</strong> 50% SKUs, 5% valor. Cuenta <em>semestral</em>.</li>
                <li><strong>Controlados:</strong> al menos <em>mensual</em> — sin importar valor.</li>
                <li><strong>Cadena de frío:</strong> al menos <em>mensual</em>.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>&#128203; Procedimiento de conteo</h3>
            <ol class="concept-list">
                <li>Suspender temporalmente movimientos del producto a contar.</li>
                <li>Imprimir hoja de conteo con SKU, descripción, lote, caducidad, saldo teórico <em>oculto</em>.</li>
                <li>Dos contadores independientes cuentan la misma ubicación.</li>
                <li>Comparar resultados; si difieren, recontar.</li>
                <li>Registrar conteo final y compararlo con saldo del kárdex.</li>
                <li>Si hay diferencia: investigar causa (error de captura, merma, robo, recepción no registrada).</li>
                <li>Acta de ajuste firmada por RS y contadores.</li>
                <li>Capturar en kárdex como movimiento "Ajuste" con justificación.</li>
            </ol>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Indicador clave: exactitud de inventario</h3>
            <p>Exactitud = SKUs con diferencia cero / SKUs contados × 100. <strong>Meta: ≥98%</strong>. Si estás por debajo, revisa disciplina de registro en tiempo real y capacitación del personal.</p>
        </div>

        <div class="quiz-container" id="q_m3l4">
            <div class="quiz-q">&#127919; Los medicamentos controlados (fracciones I, II, III) requieren inventario físico con frecuencia:</div>
            <button class="quiz-option" onclick="checkQuiz('q_m3l4', this, false)">Anual, junto con el inventario total</button>
            <button class="quiz-option" onclick="checkQuiz('q_m3l4', this, true)">Al menos mensual, conciliado con el Libro de Control</button>
            <button class="quiz-option" onclick="checkQuiz('q_m3l4', this, false)">Solo cuando lo solicite COFEPRIS</button>
            <button class="quiz-option" onclick="checkQuiz('q_m3l4', this, false)">Trimestral, si el volumen es bajo</button>
            <div class="quiz-feedback" id="q_m3l4_fb"></div>
        </div>
        `
    },

    // ================= MODULO 3 · LECCION 5 (index 16) =================
    {
        id: 'm3l5', module: 'Módulo 3 · Control de Inventarios', tag: 'tag-module', tagLabel: 'MÓDULO 3',
        title: 'Caducidades, mermas y destrucción controlada',
        subtitle: 'El final de vida del producto, con acta ante Secretaría de Salud',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#bf360c 0%,#d84315 60%,#ff8a65 100%);min-height:180px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:24px;">
            <div>
                <div style="font-size:1.8em;font-weight:900;letter-spacing:2px;">LECCIÓN 16</div>
                <div style="font-size:1.05em;margin-top:6px;opacity:0.95;">Caducados, mermas y destrucción</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor</div>
                <div class="instructor-note-text">Un medicamento caducado no es basura común. Es residuo peligroso (RP) biológico-infeccioso y/o químico. Destruirlo mal es delito ambiental y sanitario. Destruirlo bien es un trámite conocido, con empresa autorizada y acta ante la autoridad.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#128196; Cita textual — destrucción y acta</h3>
            <blockquote style="border-left:4px solid #1b9271;padding:10px 16px;background:#f5faf7;font-style:italic;">
                "4.19. Realizar la destrucción de medicamentos caducados, deteriorados o dañados pertenecientes a […] únicamente con las empresas que cuenten con autorización vigente de la Secretaría de Medio Ambiente y Recursos Naturales (SEMARNAT) y la autorización sanitaria de la COFEPRIS cuando aplique."<br>
                <span style="font-size:0.85em;color:#666;">— FEUM, Cap. XIV (Actividades indebidas y destrucción).</span>
            </blockquote>
            <p>Referencia adicional: <strong>Capítulo XIII del Suplemento — Gestión integral de residuos de fármacos, medicamentos y dispositivos médicos</strong>. NOM-087-ECOL-SSA1-2002 (residuos peligrosos biológico-infecciosos).</p>
        </div>

        <div class="content-card">
            <h3>&#128203; Procedimiento de destrucción</h3>
            <ol class="concept-list">
                <li>Identificar producto caducado o deteriorado; enviarlo a área de producto no conforme.</li>
                <li>Dar de baja en kárdex con motivo y evidencia fotográfica.</li>
                <li>Contratar empresa autorizada por SEMARNAT y COFEPRIS para manejo de RP.</li>
                <li>Solicitar programación de recolección con <em>manifiesto de entrega, transporte y recepción de residuos peligrosos</em>.</li>
                <li>Al momento del retiro: generar <strong>acta</strong> con inventario detallado (descripción, lote, caducidad, cantidad, motivo de baja).</li>
                <li>Firma del RS, del representante de la empresa y de testigos.</li>
                <li>Recibir de la empresa el <strong>certificado de destrucción</strong> (el "manifiesto de destino") en un plazo máximo.</li>
                <li>Archivar: acta + manifiesto + certificado + evidencia fotográfica por al menos 5 años.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>&#128269; Mermas y bajas por otras causas</h3>
            <ul class="concept-list">
                <li><strong>Rotura / derrame:</strong> documentar con fotografía y testigos.</li>
                <li><strong>Robo:</strong> acta de denuncia ante Ministerio Público.</li>
                <li><strong>Retiro / recall:</strong> ver lección 20.</li>
                <li><strong>Devolución al proveedor:</strong> motivo documentado, comprobante del proveedor.</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Calendarizar antes de que caduque</h3>
            <p>Programa destrucciones en ciclos trimestrales o semestrales. Acumular caducados por años genera: (1) riesgo de desvío, (2) ocupación de espacio valioso, (3) costos por lote mínimo de destrucción.</p>
        </div>

        <div class="quiz-container" id="q_m3l5">
            <div class="quiz-q">&#127919; Para destruir medicamentos caducados, el establecimiento debe contratar:</div>
            <button class="quiz-option" onclick="checkQuiz('q_m3l5', this, false)">Cualquier empresa de manejo de residuos urbanos</button>
            <button class="quiz-option" onclick="checkQuiz('q_m3l5', this, true)">Una empresa con autorización vigente de SEMARNAT y autorización sanitaria de COFEPRIS cuando aplique</button>
            <button class="quiz-option" onclick="checkQuiz('q_m3l5', this, false)">Al municipio mediante oficio</button>
            <button class="quiz-option" onclick="checkQuiz('q_m3l5', this, false)">Ninguna: puede incinerarlos en el propio almacén</button>
            <div class="quiz-feedback" id="q_m3l5_fb"></div>
        </div>
        `
    },

    // ================= MODULO 3 · LECCION 6 (index 17) =================
    {
        id: 'm3l6', module: 'Módulo 3 · Control de Inventarios', tag: 'tag-module', tagLabel: 'MÓDULO 3',
        title: 'Indicadores clave (KPIs) del almacén farmacéutico',
        subtitle: 'Rotación, exactitud, stock-out y días de inventario',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#263238 0%,#455a64 60%,#90a4ae 100%);min-height:180px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:24px;">
            <div>
                <div style="font-size:1.8em;font-weight:900;letter-spacing:2px;">LECCIÓN 17</div>
                <div style="font-size:1.05em;margin-top:6px;opacity:0.95;">Lo que se mide, se gestiona</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor</div>
                <div class="instructor-note-text">Un almacén farmacéutico tiene dos misiones en tensión: nunca faltar medicamentos para el paciente, y no inmovilizar capital en inventario que no rota. Los KPIs te dicen en qué lado del balance estás parado.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#128200; Los 7 KPIs esenciales</h3>
            <ol class="concept-list">
                <li><strong>Rotación de inventario</strong> = Costo de ventas / Inventario promedio. Meta: 8-12 veces/año en farmacia, 4-6 en hospital.</li>
                <li><strong>Días de inventario</strong> = 365 / rotación. Meta: &lt;45 días en farmacia minorista.</li>
                <li><strong>Exactitud de inventario</strong> = SKUs sin diferencia / SKUs contados × 100. Meta: ≥98%.</li>
                <li><strong>Nivel de servicio (fill rate)</strong> = Unidades surtidas / Unidades pedidas × 100. Meta: ≥95%.</li>
                <li><strong>Stock-out rate</strong> = SKUs en cero / SKUs totales × 100. Meta: &lt;3%.</li>
                <li><strong>Merma por caducidad</strong> = Valor caducado / Valor comprado × 100. Meta: &lt;1.5%.</li>
                <li><strong>Cumplimiento de cadena de frío</strong> = Horas dentro de 2-8 °C / Horas totales × 100. Meta: ≥99.8%.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>&#128196; Obligatoriedad de revisar indicadores</h3>
            <blockquote style="border-left:4px solid #1b9271;padding:10px 16px;background:#f5faf7;font-style:italic;">
                "1.1.9.21. Revisar periódicamente el Sistema de Gestión de Calidad. La revisión debe incluir la <strong>evaluación de los indicadores de proceso y desempeño</strong> que se pueden utilizar para monitorear la eficacia del Sistema de Gestión de Calidad."<br>
                <span style="font-size:0.85em;color:#666;">— FEUM, Cap. II, numeral 1.1.9.21.</span>
            </blockquote>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Tablero mensual</h3>
            <p>Diseña un tablero A4 con los 7 KPIs, su meta y el color semáforo. Revísalo en junta mensual con el RS y la dirección. Deja acta. Esa acta es evidencia en auditoría de "revisión del SGC".</p>
        </div>

        <div class="quiz-container" id="q_m3l6">
            <div class="quiz-q">&#127919; ¿Qué mide la "rotación de inventario"?</div>
            <button class="quiz-option" onclick="checkQuiz('q_m3l6', this, false)">Cuántas veces un empleado mueve el producto de anaquel</button>
            <button class="quiz-option" onclick="checkQuiz('q_m3l6', this, true)">Cuántas veces se vende y reemplaza el inventario promedio durante un periodo</button>
            <button class="quiz-option" onclick="checkQuiz('q_m3l6', this, false)">Cuántos días tarda un producto en llegar al anaquel</button>
            <button class="quiz-option" onclick="checkQuiz('q_m3l6', this, false)">El ángulo de giro de las cajas durante el picking</button>
            <div class="quiz-feedback" id="q_m3l6_fb"></div>
        </div>
        `
    },

    // ================= MODULO 4 · LECCION 1 (index 18) =================
    {
        id: 'm4l1', module: 'Módulo 4 · Distribución y Auditoría', tag: 'tag-module', tagLabel: 'MÓDULO 4',
        title: 'Buenas Prácticas de Distribución (BPD): transporte seguro',
        subtitle: 'De la rampa de salida a la puerta del cliente',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#0277bd 0%,#039be5 60%,#4fc3f7 100%);min-height:180px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:24px;">
            <div>
                <div style="font-size:1.8em;font-weight:900;letter-spacing:2px;">LECCIÓN 18</div>
                <div style="font-size:1.05em;margin-top:6px;opacity:0.95;">Distribución y transporte bajo BPD</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor</div>
                <div class="instructor-note-text">El medicamento salió perfecto de tu almacén; si llega caliente al hospital, el cliente asume que tu almacén fue la falla. La cadena de custodia no se rompe en la puerta de salida: se rompe solo cuando el cliente firma el acuse.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#128196; Cita textual — transporte (FEUM Cap. V, 2.4)</h3>
            <blockquote style="border-left:4px solid #1b9271;padding:10px 16px;background:#f5faf7;font-style:italic;">
                "2.4.1.1. Por ningún motivo se utilizarán vehículos destinados al transporte de plaguicidas, nutrientes vegetales, substancias tóxicas y peligrosas o productos de aseo con acción corrosiva.<br>
                2.4.1.6. Los vehículos y contenedores que se utilicen para la distribución […] estarán construidos con materiales resistentes a la corrosión, lisos, impermeables, no tóxicos y que puedan ser limpiados con facilidad. <strong>El transporte debe ser en caja cerrada y para uso exclusivo</strong>.<br>
                2.4.1.10. Los vehículos y contenedores que transporten […] medicamentos de la red de frío deben contar con <strong>calificación</strong>."<br>
                <span style="font-size:0.85em;color:#666;">— FEUM, Cap. V, numerales 2.4.</span>
            </blockquote>
        </div>

        <div class="content-card">
            <h3>&#128666; Requisitos del vehículo</h3>
            <ul class="concept-list">
                <li>Caja cerrada, impermeable, de uso exclusivo.</li>
                <li>Termógrafo con calibración trazable.</li>
                <li>Registros de limpieza, mantenimiento y fauna nociva.</li>
                <li>Operador capacitado en manejo de emergencias y accidentes.</li>
                <li>Para cadena de frío: cámara refrigerada o contenedor isotérmico con configuración validada.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>&#128230; Embalaje correcto</h3>
            <ol class="concept-list">
                <li>Envase primario y secundario íntegros.</li>
                <li>Embalaje tercero (caja de cartón) firme, con etiqueta de frágil cuando corresponda.</li>
                <li>En cadena de frío: contenedor isotérmico con geles refrigerados + geles congelados según configuración validada.</li>
                <li>Termógrafo incluido, activado antes de cerrar el contenedor.</li>
                <li>Identificación externa: emisor, receptor, número de pedido, "Mantener en refrigeración 2-8 °C" si aplica.</li>
                <li>Documentación adjunta: factura, remisión, certificado analítico si aplica.</li>
            </ol>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Acuse de entrega</h3>
            <p>Al entregar, el acuse debe incluir: hora, lectura del termógrafo, estado del embalaje, nombre y firma del receptor. Sin ese acuse, la cadena de custodia está incompleta y la responsabilidad sigue contigo.</p>
        </div>

        <div class="quiz-container" id="q_m4l1">
            <div class="quiz-q">&#127919; ¿Pueden transportarse medicamentos en el mismo vehículo que plaguicidas?</div>
            <button class="quiz-option" onclick="checkQuiz('q_m4l1', this, false)">Sí, si van en cajas separadas</button>
            <button class="quiz-option" onclick="checkQuiz('q_m4l1', this, true)">No, por ningún motivo se utilizarán vehículos destinados a plaguicidas o sustancias tóxicas</button>
            <button class="quiz-option" onclick="checkQuiz('q_m4l1', this, false)">Sí, siempre que no sean perecederos</button>
            <button class="quiz-option" onclick="checkQuiz('q_m4l1', this, false)">Solo si la distancia es menor a 10 km</button>
            <div class="quiz-feedback" id="q_m4l1_fb"></div>
        </div>
        `
    },

    // ================= MODULO 4 · LECCION 2 (index 19) =================
    {
        id: 'm4l2', module: 'Módulo 4 · Distribución y Auditoría', tag: 'tag-module', tagLabel: 'MÓDULO 4',
        title: 'Farmacovigilancia (NOM-220): obligaciones del almacén',
        subtitle: 'Reporte de sospechas de reacciones adversas',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#4a148c 0%,#6a1b9a 60%,#ab47bc 100%);min-height:180px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:24px;">
            <div>
                <div style="font-size:1.8em;font-weight:900;letter-spacing:2px;">LECCIÓN 19</div>
                <div style="font-size:1.05em;margin-top:6px;opacity:0.95;">Farmacovigilancia y tecnovigilancia</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor</div>
                <div class="instructor-note-text">"Farmacovigilancia es cosa del fabricante o del médico." Error común. Todo establecimiento que almacena o distribuye insumos para la salud es parte del sistema; tiene PNO y debe enviar reportes al Centro Nacional de Farmacovigilancia (CNFV).</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#128196; Cita textual — FEUM y NOM-220</h3>
            <blockquote style="border-left:4px solid #1b9271;padding:10px 16px;background:#f5faf7;font-style:italic;">
                "1.2.24. PNO para la <strong>notificación de sospechas de reacciones e incidentes adversos</strong>, con evidencia de envío al Centro Nacional de Farmacovigilancia. Véase el apéndice Actividades de farmacovigilancia y tecnovigilancia."<br>
                <span style="font-size:0.85em;color:#666;">— FEUM, Cap. II, numeral 1.2.24. Apéndice VI.</span>
            </blockquote>
            <p>Marco: <strong>NOM-220-SSA1-2016, Instalación y operación de la farmacovigilancia</strong>.</p>
        </div>

        <div class="content-card">
            <h3>&#127966; Definiciones clave</h3>
            <ul class="concept-list">
                <li><strong>Sospecha de Reacción Adversa (SRAM):</strong> respuesta nociva y no intencionada que ocurre tras la administración a dosis normales. No se necesita causalidad probada para reportar.</li>
                <li><strong>Evento Adverso (EA):</strong> cualquier suceso médico indeseado durante el uso.</li>
                <li><strong>Problema de Calidad:</strong> desviación en el producto (color, olor, integridad).</li>
                <li><strong>Incidente Adverso en Dispositivo Médico:</strong> falla o mal funcionamiento.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>&#128221; Obligaciones del almacén</h3>
            <ol class="concept-list">
                <li>Tener un PNO escrito de farmacovigilancia firmado por el RS.</li>
                <li>Capacitar al personal (incluido en 1.2.10.4 FEUM).</li>
                <li>Recibir y documentar reportes de clientes / pacientes / personal.</li>
                <li>Enviarlos al CNFV (portal digital: vigiflow.cofepris.gob.mx) en los plazos establecidos por la NOM-220.</li>
                <li>Conservar evidencia de envío por al menos 5 años.</li>
                <li>Colaborar con el titular del Registro Sanitario cuando solicite información.</li>
            </ol>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Plazos típicos NOM-220</h3>
            <p>Reacciones adversas graves o inesperadas: <strong>15 días naturales</strong> desde que se conoce. No graves: reportes periódicos. Siempre consulta la edición vigente de la NOM para los plazos exactos.</p>
        </div>

        <div class="quiz-container" id="q_m4l2">
            <div class="quiz-q">&#127919; La NOM-220-SSA1-2016 exige que los almacenes farmacéuticos:</div>
            <button class="quiz-option" onclick="checkQuiz('q_m4l2', this, false)">Ignoren los reportes de pacientes y los deriven solo al médico</button>
            <button class="quiz-option" onclick="checkQuiz('q_m4l2', this, true)">Tengan un PNO de farmacovigilancia y envíen las notificaciones al Centro Nacional de Farmacovigilancia</button>
            <button class="quiz-option" onclick="checkQuiz('q_m4l2', this, false)">Publiquen las reacciones adversas en su página web</button>
            <button class="quiz-option" onclick="checkQuiz('q_m4l2', this, false)">Notifiquen directamente a la OMS</button>
            <div class="quiz-feedback" id="q_m4l2_fb"></div>
        </div>
        `
    },

    // ================= MODULO 4 · LECCION 3 (index 20) =================
    {
        id: 'm4l3', module: 'Módulo 4 · Distribución y Auditoría', tag: 'tag-module', tagLabel: 'MÓDULO 4',
        title: 'Retiro de producto del mercado (recall)',
        subtitle: 'Clasificación, procedimiento y documentación',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#b71c1c 0%,#c62828 60%,#ef9a9a 100%);min-height:180px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:24px;">
            <div>
                <div style="font-size:1.8em;font-weight:900;letter-spacing:2px;">LECCIÓN 20</div>
                <div style="font-size:1.05em;margin-top:6px;opacity:0.95;">Retiro seguro del producto en el mercado</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor</div>
                <div class="instructor-note-text">COFEPRIS emite una alerta y ordena el retiro de un lote. Tu reloj empieza a correr. ¿Cuánto te tardarás en: 1) parar ventas, 2) identificar clientes, 3) recolectar, 4) segregar, 5) reportar? Los retiros clase I te dan horas, no días.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#128226; Clases de retiro</h3>
            <ul class="concept-list">
                <li><strong>Clase I:</strong> riesgo grave de salud o muerte (ej. contaminación bacteriana en inyectable). <em>Retiro inmediato y notificación a usuarios.</em></li>
                <li><strong>Clase II:</strong> daño temporal reversible (ej. concentración incorrecta mínima).</li>
                <li><strong>Clase III:</strong> riesgo remoto (ej. defecto de etiquetado sin impacto clínico).</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>&#128203; Procedimiento estándar</h3>
            <ol class="concept-list">
                <li><strong>Recepción de alerta:</strong> COFEPRIS, titular del RS, fabricante o autoridad internacional.</li>
                <li><strong>Verificar vigencia</strong> del alertamiento en el <em>Sistema de Alertamiento Sanitario de COFEPRIS</em> (obligación FEUM 1.1.9.22).</li>
                <li><strong>Detener ventas / distribución</strong> del lote afectado en el sistema y físicamente.</li>
                <li><strong>Identificar</strong> saldo en almacén y clientes que recibieron unidades (trazabilidad hacia adelante).</li>
                <li><strong>Notificar</strong> a cada cliente con instrucciones de devolución.</li>
                <li><strong>Recolectar</strong> físicamente el producto; segregarlo en área de producto no conforme.</li>
                <li><strong>Documentar</strong>: bitácora de retiro con fechas, cantidades, clientes contactados, respuestas, unidades devueltas.</li>
                <li><strong>Destruir</strong> o devolver al proveedor según instrucciones del titular.</li>
                <li><strong>Informe final</strong> a COFEPRIS con resumen del retiro y porcentaje de recuperación.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>&#128196; Cita textual — alertas sanitarias</h3>
            <blockquote style="border-left:4px solid #1b9271;padding:10px 16px;background:#f5faf7;font-style:italic;">
                "3.2.3. Verificar e identificar los remedios herbolarios, medicamentos, dispositivos médicos y demás insumos para la salud, <strong>incluidos en Alertas Sanitarias oficiales y vigentes emitidas por la COFEPRIS, asegurando que estos no ingresen al Establecimiento y en caso de poseerlos no se distribuyan</strong>."<br>
                "1.1.9.22. Revisar continuamente el Sistema de Alertamiento Sanitario de la COFEPRIS, realizando las acciones correspondientes."<br>
                <span style="font-size:0.85em;color:#666;">— FEUM, Cap. IV y Cap. II.</span>
            </blockquote>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Simulacro anual</h3>
            <p>Haz un <strong>simulacro de retiro clase I</strong> una vez al año. Meta: &lt;24 horas desde recepción del alertamiento hasta identificación completa de clientes y segregación del saldo. Deja acta y lecciones aprendidas.</p>
        </div>

        <div class="quiz-container" id="q_m4l3">
            <div class="quiz-q">&#127919; Un retiro clase I se caracteriza por:</div>
            <button class="quiz-option" onclick="checkQuiz('q_m4l3', this, false)">Riesgo mínimo, permite continuar ventas mientras se verifica</button>
            <button class="quiz-option" onclick="checkQuiz('q_m4l3', this, true)">Riesgo grave de salud o muerte, exige acción inmediata y notificación a usuarios</button>
            <button class="quiz-option" onclick="checkQuiz('q_m4l3', this, false)">Solo aplica a productos importados</button>
            <button class="quiz-option" onclick="checkQuiz('q_m4l3', this, false)">Es opcional si el almacén lo reporta voluntariamente</button>
            <div class="quiz-feedback" id="q_m4l3_fb"></div>
        </div>
        `
    },

    // ================= MODULO 4 · LECCION 4 (index 21) =================
    {
        id: 'm4l4', module: 'Módulo 4 · Distribución y Auditoría', tag: 'tag-module', tagLabel: 'MÓDULO 4',
        title: 'Preparación para auditoría COFEPRIS',
        subtitle: 'Expediente, evidencias y hallazgos típicos',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#1a237e 0%,#303f9f 60%,#7986cb 100%);min-height:180px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:24px;">
            <div>
                <div style="font-size:1.8em;font-weight:900;letter-spacing:2px;">LECCIÓN 21</div>
                <div style="font-size:1.05em;margin-top:6px;opacity:0.95;">Auditoría COFEPRIS sin sorpresas</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor</div>
                <div class="instructor-note-text">Las visitas de verificación llegan sin cita. La única forma de vivirlas tranquilo es tener el establecimiento permanentemente listo. Si lo que hiciste los 364 días anteriores está en orden, el día 365 sobrevives sin drama.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#128214; Qué pide el verificador (top 10)</h3>
            <ol class="concept-list">
                <li>Aviso de Funcionamiento y Aviso de RS vigentes en la pared.</li>
                <li>Licencia Sanitaria (si aplica).</li>
                <li>Bitácoras de temperatura y humedad del último trimestre.</li>
                <li>Libro de Control de psicotrópicos foliado y al día.</li>
                <li>Expediente de proveedores (Licencia, Aviso SAT, RS).</li>
                <li>Evidencia de capacitación del último año (lista + firmas).</li>
                <li>PNO firmados y vigentes.</li>
                <li>Acta de destrucción de caducados reciente.</li>
                <li>Programa de calibración con certificados vigentes.</li>
                <li>Mapeo térmico del almacén y área de cadena de frío.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>&#9888;&#65039; Hallazgos recurrentes en visitas COFEPRIS</h3>
            <ul class="concept-list">
                <li>Producto colocado en piso sin tarima.</li>
                <li>Bitácoras de T/H con días faltantes o firmas idénticas sospechosas.</li>
                <li>Certificados de calibración vencidos.</li>
                <li>Área de producto no conforme mezclada con aprobado.</li>
                <li>Caducados superiores a 90 días sin calendario de destrucción.</li>
                <li>Personal sin evidencia de capacitación formal.</li>
                <li>Discrepancias entre libro de control y conteo físico.</li>
                <li>Aviso de RS con fecha de modificación no reportada.</li>
                <li>Ausencia de sistema alterno de energía eléctrica.</li>
                <li>Sanitarios / comedor comunicados directamente con almacenamiento.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>&#128196; Cita textual — atender la visita</h3>
            <blockquote style="border-left:4px solid #1b9271;padding:10px 16px;background:#f5faf7;font-style:italic;">
                "1.1.9.16. Atender las visitas de verificación realizadas por la Autoridad Sanitaria, las cuales podrán ser atendidas por las personas que designe el Responsable Sanitario."<br>
                <span style="font-size:0.85em;color:#666;">— FEUM, Cap. II, numeral 1.1.9.16.</span>
            </blockquote>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Regla de oro del día de la visita</h3>
            <p>1) Recibir al verificador con identificación oficial. 2) Solicitar orden de visita y copia para tu archivo. 3) Nunca firmar el acta sin leerla completa. 4) Si hay observaciones, exigir que se asienten los hechos con exactitud. 5) Tienes <em>5 días hábiles</em> para presentar pruebas y alegatos. Úsalos.</p>
        </div>

        <div class="quiz-container" id="q_m4l4">
            <div class="quiz-q">&#127919; Antes de firmar el acta de una visita de verificación COFEPRIS debes:</div>
            <button class="quiz-option" onclick="checkQuiz('q_m4l4', this, false)">Firmarla de inmediato para evitar fricción</button>
            <button class="quiz-option" onclick="checkQuiz('q_m4l4', this, true)">Leerla completa, verificar que los hechos estén asentados con exactitud y asentar observaciones si corresponde</button>
            <button class="quiz-option" onclick="checkQuiz('q_m4l4', this, false)">Rehusarte a firmarla para invalidar la visita</button>
            <button class="quiz-option" onclick="checkQuiz('q_m4l4', this, false)">Esperar a que venga tu abogado, lo que tarde</button>
            <div class="quiz-feedback" id="q_m4l4_fb"></div>
        </div>
        `
    },

    // ================= EXAMEN FINAL (index 22) =================
    {
        id: 'final_exam', module: 'Examen Final', tag: 'tag-final', tagLabel: 'EXAMEN FINAL',
        title: 'Examen integrador de certificación',
        subtitle: '10 preguntas · mínimo aprobatorio: 7',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#c8a951 0%,#e6b800 60%,#fff59d 100%);min-height:180px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:#3e2723;text-align:center;padding:24px;">
            <div>
                <div style="font-size:1.8em;font-weight:900;letter-spacing:2px;">EXAMEN FINAL</div>
                <div style="font-size:1.05em;margin-top:6px;">Administración de Inventarios Farmacéuticos (FEUM)</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Instrucciones</div>
                <div class="instructor-note-text">10 preguntas de opción múltiple. Aprobatorio: 7 respuestas correctas. Puedes revisar lecciones antes de responder. Al terminar podrás acceder al certificado. Éxito.</div>
            </div>
        </div>

        <div class="quiz-container" id="final_q1">
            <div class="quiz-q">1. En la jerarquía normativa mexicana, si una NOM y la FEUM regulan un mismo aspecto del almacén:</div>
            <button class="quiz-option" onclick="checkFinal('final_q1', this, false)">Siempre aplica la FEUM por ser la más específica</button>
            <button class="quiz-option" onclick="checkFinal('final_q1', this, false)">Siempre aplica la NOM por ser de mayor jerarquía</button>
            <button class="quiz-option" onclick="checkFinal('final_q1', this, true)">Se aplica la regulación más estricta, conforme al principio de protección al paciente</button>
            <div class="quiz-feedback" id="final_q1_fb"></div>
        </div>

        <div class="quiz-container" id="final_q2">
            <div class="quiz-q">2. Los medicamentos de fracción I del Art. 226 LGS son:</div>
            <button class="quiz-option" onclick="checkFinal('final_q2', this, true)">Estupefacientes; requieren Licencia Sanitaria específica y Libro de Control autorizado</button>
            <button class="quiz-option" onclick="checkFinal('final_q2', this, false)">Medicamentos de venta libre (OTC)</button>
            <button class="quiz-option" onclick="checkFinal('final_q2', this, false)">Remedios herbolarios clasificados</button>
            <div class="quiz-feedback" id="final_q2_fb"></div>
        </div>

        <div class="quiz-container" id="final_q3">
            <div class="quiz-q">3. Un Responsable Sanitario puede prestar servicios como máximo en:</div>
            <button class="quiz-option" onclick="checkFinal('final_q3', this, false)">Un solo Establecimiento</button>
            <button class="quiz-option" onclick="checkFinal('final_q3', this, true)">Dos Establecimientos de insumos para la salud</button>
            <button class="quiz-option" onclick="checkFinal('final_q3', this, false)">Todos los que pueda atender físicamente</button>
            <div class="quiz-feedback" id="final_q3_fb"></div>
        </div>

        <div class="quiz-container" id="final_q4">
            <div class="quiz-q">4. Los registros de temperatura y humedad del Establecimiento deben tomarse, según la FEUM:</div>
            <button class="quiz-option" onclick="checkFinal('final_q4', this, false)">Una vez al día al inicio de la jornada</button>
            <button class="quiz-option" onclick="checkFinal('final_q4', this, true)">Por lo menos tres veces al día, distribuidos en la jornada laboral</button>
            <button class="quiz-option" onclick="checkFinal('final_q4', this, false)">Solo cuando haya una excursión</button>
            <div class="quiz-feedback" id="final_q4_fb"></div>
        </div>

        <div class="quiz-container" id="final_q5">
            <div class="quiz-q">5. La "temperatura de refrigeración" según la FEUM corresponde al intervalo:</div>
            <button class="quiz-option" onclick="checkFinal('final_q5', this, false)">-25 a -10 °C</button>
            <button class="quiz-option" onclick="checkFinal('final_q5', this, true)">2 a 8 °C</button>
            <button class="quiz-option" onclick="checkFinal('final_q5', this, false)">8 a 15 °C</button>
            <div class="quiz-feedback" id="final_q5_fb"></div>
        </div>

        <div class="quiz-container" id="final_q6">
            <div class="quiz-q">6. La regla de rotación apropiada para un almacén farmacéutico es:</div>
            <button class="quiz-option" onclick="checkFinal('final_q6', this, false)">PEPS (FIFO), porque el producto más antiguo caduca primero</button>
            <button class="quiz-option" onclick="checkFinal('final_q6', this, true)">FEFO (primeras caducidades, primeras salidas)</button>
            <button class="quiz-option" onclick="checkFinal('final_q6', this, false)">UEPS (LIFO), por ventaja fiscal</button>
            <div class="quiz-feedback" id="final_q6_fb"></div>
        </div>

        <div class="quiz-container" id="final_q7">
            <div class="quiz-q">7. La destrucción de medicamentos caducados debe realizarse con:</div>
            <button class="quiz-option" onclick="checkFinal('final_q7', this, false)">Cualquier servicio municipal de residuos urbanos</button>
            <button class="quiz-option" onclick="checkFinal('final_q7', this, true)">Empresa con autorización vigente de SEMARNAT y autorización sanitaria de COFEPRIS cuando aplique, con acta y manifiesto</button>
            <button class="quiz-option" onclick="checkFinal('final_q7', this, false)">Personal propio, previa capacitación</button>
            <div class="quiz-feedback" id="final_q7_fb"></div>
        </div>

        <div class="quiz-container" id="final_q8">
            <div class="quiz-q">8. La trazabilidad "hacia adelante" permite:</div>
            <button class="quiz-option" onclick="checkFinal('final_q8', this, false)">Conocer al fabricante original del producto</button>
            <button class="quiz-option" onclick="checkFinal('final_q8', this, true)">Identificar rápidamente a qué clientes se envió un lote específico ante una alerta o retiro</button>
            <button class="quiz-option" onclick="checkFinal('final_q8', this, false)">Proyectar demandas futuras</button>
            <div class="quiz-feedback" id="final_q8_fb"></div>
        </div>

        <div class="quiz-container" id="final_q9">
            <div class="quiz-q">9. La NOM-220-SSA1-2016 obliga a los almacenes farmacéuticos a:</div>
            <button class="quiz-option" onclick="checkFinal('final_q9', this, false)">Fabricar sus propias pruebas de estabilidad</button>
            <button class="quiz-option" onclick="checkFinal('final_q9', this, true)">Contar con un PNO de farmacovigilancia y enviar notificaciones al Centro Nacional de Farmacovigilancia</button>
            <button class="quiz-option" onclick="checkFinal('final_q9', this, false)">Publicar estadísticas mensuales al público</button>
            <div class="quiz-feedback" id="final_q9_fb"></div>
        </div>

        <div class="quiz-container" id="final_q10">
            <div class="quiz-q">10. Durante una visita de verificación COFEPRIS, el Responsable Sanitario debe:</div>
            <button class="quiz-option" onclick="checkFinal('final_q10', this, false)">Firmar el acta sin leerla para acelerar</button>
            <button class="quiz-option" onclick="checkFinal('final_q10', this, false)">Ausentarse y dejar al personal responder</button>
            <button class="quiz-option" onclick="checkFinal('final_q10', this, true)">Atender la visita (o designar personal), leer el acta antes de firmar y asentar observaciones si corresponde</button>
            <div class="quiz-feedback" id="final_q10_fb"></div>
        </div>

        <div id="finalResult" style="display:none;margin-top:20px;padding:24px;border-radius:12px;text-align:center;animation:pop 0.4s;">
            <div style="font-size:3em;" id="finalEmoji"></div>
            <h2 id="finalTitle" style="margin:10px 0;"></h2>
            <p id="finalDesc"></p>
            <div style="margin-top:16px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
                <button class="btn btn-gold" onclick="showLesson(23)">&#127942; Ver mi Certificado</button>
            </div>
        </div>
        `
    },

    // ================= CERTIFICADO (index 23) =================
    {
        id: 'certificate', module: 'Certificado', tag: 'tag-final', tagLabel: 'CERTIFICADO',
        title: 'Certificado de Finalización',
        subtitle: '¡Felicidades! Has completado el curso',
        content: `
        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Palabras finales del instructor</div>
                <div class="instructor-note-text">Lo más importante ya no es el certificado: es tu hábito diario de aplicar lo aprendido. La FEUM cambia — mantente suscrito a Alertas COFEPRIS. Las NOM se actualizan — revísalas cada año. Tu Responsabilidad Sanitaria se vive todos los días del año, no solo en visita. Felicidades y éxito.</div>
            </div>
        </div>

        <div class="certificate" id="certificateEl">
            <div class="cert-seal">
                <div style="font-size:1.1em;">FEUM</div>
                <div style="font-size:0.6em;">CERTIFIED</div>
                <div style="font-size:0.6em;" id="certYear">2026</div>
            </div>

            <div class="cert-header">
                <img src="logo-trikles.jpg" alt="TRIKLES" class="trikles-logo-cert" onerror="this.style.display='none';">
                <div class="cert-icon">&#127942;</div>
                <div class="cert-title">CERTIFICADO</div>
                <div class="cert-subtitle">de finalización satisfactoria</div>
            </div>

            <div class="cert-body">
                <div class="cert-award-text">Se otorga el presente a:</div>
                <div class="cert-name" id="certName">Nombre del Alumno</div>
                <div class="cert-award-text">Por haber completado exitosamente el curso:</div>
                <div class="cert-course">Administración de Inventarios<br>Farmacéuticos (FEUM)</div>
                <div class="cert-desc">Habiendo demostrado dominio de la normativa aplicable al almacenamiento, control y distribución de medicamentos, dispositivos médicos y demás insumos para la salud conforme al Suplemento para Establecimientos de la FEUM, las NOM-SSA vigentes y los criterios de verificación de COFEPRIS.</div>
            </div>

            <div class="cert-footer">
                <div class="cert-sig-block">
                    <div class="cert-sig-line">
                        <div class="cert-sig-name">LADE Germán Solís Muñoz</div>
                        <div class="cert-sig-title">Director de Gestión Empresarial - TRIKLES</div>
                    </div>
                </div>
                <div class="cert-sig-block">
                    <div class="cert-sig-line">
                        <div class="cert-sig-name" id="certDate">15 de Abril, 2026</div>
                        <div class="cert-sig-title">Fecha de expedición</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="cert-actions">
            <button class="btn btn-primary" onclick="window.print()">&#128424;&#65039; Imprimir / Guardar PDF</button>
            <button class="btn btn-success" onclick="window.location.href='index.html'">&#128218; Volver al Catálogo</button>
        </div>

        <div class="content-card" style="margin-top:30px;">
            <h3>&#128640; ¿Qué sigue ahora?</h3>
            <ol class="concept-list">
                <li><strong>Descarga e implementa</strong> las 3 plantillas (kárdex, bitácora, checklist) en tu almacén desde mañana.</li>
                <li><strong>Suscríbete</strong> al boletín de Alertas Sanitarias de COFEPRIS y revísalo semanalmente.</li>
                <li><strong>Calendariza</strong> auditorías internas cuatrimestrales usando los 10 hallazgos típicos como checklist.</li>
                <li><strong>Programa</strong> un simulacro de retiro clase I una vez al año.</li>
                <li><strong>Mantén vigente</strong> tu edición del Suplemento FEUM y de las NOM aplicables a tu giro.</li>
                <li><strong>Vuelve al catálogo</strong> de TRIKLES y continúa tu formación.</li>
            </ol>
        </div>
        `
    }

]
};

// Registro global
if (typeof window !== 'undefined') {
    window.COURSE_FEUM_INVENTARIOS = COURSE_FEUM_INVENTARIOS;
    window.TRIKLES_COURSES = window.TRIKLES_COURSES || {};
    window.TRIKLES_COURSES['feum-inventarios'] = COURSE_FEUM_INVENTARIOS;
}
