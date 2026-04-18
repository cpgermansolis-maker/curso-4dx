// ==================================================================
// CURSO COACHING
// Coaching — El método para mejorar el rendimiento de las personas
// Sir John Whitmore + Performance Consultants International
// Edición revisada y ampliada.
// Curso profesional sobre coaching para líderes y coaches.
// Instructor: LADE Germán Solís Muñoz — TRIKLES
// Citas textuales: edición en español, Editorial Paidós/Booket.
// Uso con fines exclusivamente didácticos — art. 148 LFDA.
// ==================================================================

const COURSE_COACHING = {
    id: 'coaching',
    meta: {
        title: 'Coaching',
        subtitle: 'El método para mejorar el rendimiento de las personas — John Whitmore',
        author: 'Sir John Whitmore',
        cover: 'assets/covers/coaching.jpg',
        description: 'El libro definitivo sobre coaching en organizaciones. John Whitmore, considerado el padre del coaching para el rendimiento, presenta el modelo GROW y explica cómo el coaching transforma el liderazgo y libera el potencial de las personas. Este curso recorre los 23 capítulos del libro — desde el juego interior de Gallwey hasta el coaching avanzado — con citas, ejercicios, preguntas potentes, estudios de caso y videos recomendados. Aprende a preguntar en lugar de ordenar, a escuchar de verdad, y a convertirte en un líder-coach que produce alto rendimiento sostenible.',
        descripcionCorta: 'El clásico del coaching empresarial: modelo GROW, preguntas potentes, conciencia y responsabilidad como motor del rendimiento.',
        category: 'Liderazgo y coaching',
        lessonsCount: 23,
        duration: '10-12 horas',
        level: 'Intermedio — para líderes, gerentes y coaches',
        active: true,
        tags: ['coaching', 'liderazgo', 'GROW', 'Whitmore', 'rendimiento', 'preguntas potentes', 'escucha activa', 'conciencia', 'responsabilidad', 'cultura']
    },

    lessonRequirements: {
        0:  ['q_intro'],
        1:  ['q_m1l1'],  2: ['q_m1l2'],
        3:  ['q_m2l1'],  4: ['q_m2l2'],  5: ['q_m2l3'],
        6:  ['q_m3l1'],  7: ['q_m3l2'],
        8:  ['q_m4l1'],  9: ['q_m4l2'], 10: ['q_m4l3'], 11: ['q_m4l4'], 12: ['q_m4l5'],
        13: ['q_m5l1'],
        14: ['q_m6l1'], 15: ['q_m6l2'], 16: ['q_m6l3'], 17: ['q_m6l4'],
        18: ['q_m7l1'], 19: ['q_m7l2'], 20: ['q_m7l3'], 21: ['q_m7l4'], 22: ['q_m7l5'],
        23: ['final_q1','final_q2','final_q3','final_q4','final_q5','final_q6','final_q7','final_q8','final_q9','final_q10'],
        24: []
    },

    examPassScore: 7,

    certificate: {
        courseNameForCert: 'Coaching<br>El método para mejorar el rendimiento — John Whitmore',
        description: 'Habiendo demostrado dominio del método GROW, de las habilidades fundamentales del coaching (preguntas potentes y escucha activa), del papel del líder como coach, y de la aplicación del coaching para generar conciencia, responsabilidad y alto rendimiento en personas, equipos y organizaciones.'
    },

    lessons: []
};

// ==================================================================
// Helpers — IIFE
// ==================================================================
(function() {
    const C = COURSE_COACHING;

    const heroGradients = {
        intro:  'linear-gradient(135deg,#111111 0%,#1a1a1a 50%,#c9a961 100%)',
        m1:     'linear-gradient(135deg,#0d47a1 0%,#1976d2 60%,#64b5f6 100%)',
        m2:     'linear-gradient(135deg,#4a148c 0%,#7b1fa2 60%,#ce93d8 100%)',
        m3:     'linear-gradient(135deg,#006064 0%,#00838f 60%,#80deea 100%)',
        m4:     'linear-gradient(135deg,#1b5e20 0%,#388e3c 60%,#a5d6a7 100%)',
        m5:     'linear-gradient(135deg,#e65100 0%,#f57c00 60%,#ffcc80 100%)',
        m6:     'linear-gradient(135deg,#b71c1c 0%,#c62828 60%,#ef9a9a 100%)',
        m7:     'linear-gradient(135deg,#263238 0%,#455a64 60%,#90a4ae 100%)',
        exam:   'linear-gradient(135deg,#b71c1c 0%,#e53935 60%,#ffb300 100%)',
        cert:   'linear-gradient(135deg,#111111 0%,#1a1a1a 55%,#c9a961 100%)'
    };

    function hero(grad, tag, title) {
        return `
        <div class="lesson-hero" style="background:${grad};min-height:180px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:24px;">
            <div>
                <div style="font-size:1.7em;font-weight:900;letter-spacing:2px;text-shadow:1px 2px 6px rgba(0,0,0,0.3);">${tag}</div>
                <div style="font-size:1.03em;margin-top:6px;opacity:0.95;">${title}</div>
            </div>
        </div>`;
    }

    function note(text, label) {
        return `
        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">${label || 'Nota del instructor'}</div>
                <div class="instructor-note-text">${text}</div>
            </div>
        </div>`;
    }

    function quizBlock(id, question, options) {
        return `
        <div class="quiz-container" id="${id}">
            <div class="quiz-q">${question}</div>
            ${options.map(o => `<button class="quiz-option" onclick="checkQuiz('${id}', this, ${o.correct ? 'true' : 'false'})">${o.text}</button>`).join('\n            ')}
            <div class="quiz-feedback" id="${id}_fb"></div>
        </div>`;
    }

    function finalQ(id, question, options) {
        return `
        <div class="quiz-container" id="${id}">
            <div class="quiz-q">${question}</div>
            ${options.map(o => `<button class="quiz-option" onclick="checkFinal('${id}', this, ${o.correct ? 'true' : 'false'})">${o.text}</button>`).join('\n            ')}
            <div class="quiz-feedback" id="${id}_fb"></div>
        </div>`;
    }

    function videoLink(title, videoId) {
        return `
        <div class="content-card video-embed-card" style="background:#1a1a2e;padding:18px;border-radius:14px;border:1px solid #2d2d44;">
            <div style="color:#ff9800;font-weight:800;letter-spacing:1.5px;font-size:0.82em;margin-bottom:10px;">🎬 VIDEO COMPLEMENTARIO</div>
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;background:#000;">
                <iframe src="https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy"
                        title="${title.replace(/"/g, '&quot;')}"></iframe>
            </div>
            <div style="text-align:center;margin-top:10px;color:#bbb;font-size:0.88em;font-style:italic;">${title}</div>
        </div>`;
    }

    function realImg(url, alt, caption) {
        return `
        <div class="content-card" style="text-align:center;padding:12px;">
            <img src="${url}" alt="${alt}" style="max-width:100%;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.13);" loading="lazy">
            ${caption ? `<p style="font-size:0.82em;color:#888;margin:8px 0 0;font-style:italic;">${caption}</p>` : ''}
        </div>`;
    }

    // ==============================================================
    // 0 — INTRODUCCIÓN
    // ==============================================================
    C.lessons.push({
        id: 'intro', module: 'Introducción', tag: 'tag-intro', tagLabel: 'INTRODUCCIÓN',
        title: 'El método que transforma el rendimiento',
        subtitle: 'Prólogo: por qué el coaching es hoy la forma de liderazgo más efectiva',
        content: `
        <div class="lesson-hero" style="background:${heroGradients.intro};min-height:220px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:30px;">
            <div>
                <div style="font-family:Georgia,serif;font-size:2.3em;font-weight:900;letter-spacing:2px;text-shadow:2px 2px 8px rgba(0,0,0,0.35);color:#c9a961;">COACHING</div>
                <div style="font-size:1.1em;margin-top:10px;opacity:0.96;font-style:italic;">El método para mejorar el rendimiento de las personas</div>
                <div style="margin-top:16px;font-size:0.85em;letter-spacing:4px;opacity:0.9;">SIR JOHN WHITMORE · CLÁSICO INDISCUTIBLE</div>
            </div>
        </div>

        ${note('Bienvenido al curso del libro que ha vendido más de un millón de ejemplares y se ha traducido a más de veinte idiomas. Si tienes personas a tu cargo — en una empresa, un equipo deportivo, una familia, un aula — este libro cambiará tu forma de liderar. John Whitmore no te enseña trucos: te enseña una filosofía y un método (GROW) tan simple como profundo. Al final de este curso no solo sabrás qué es el coaching, sabrás hacerlo.', 'Bienvenida del instructor · LADE Germán Solís Muñoz')}

        ${videoLink('Resumen del libro Coaching de John Whitmore', 'H3Fe2JjUs1k')}

        ${realImg('https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800', 'Sesión de coaching en equipo', 'El coaching es el arte de liberar el potencial de las personas para que alcancen su máximo rendimiento')}

        <div class="content-card">
            <h3>🎯 ¿A quién está dirigido este curso?</h3>
            <ul class="concept-list">
                <li><strong>Líderes y gerentes</strong> que quieren pasar del mando-control al liderazgo que libera potencial.</li>
                <li><strong>Coaches internos y externos</strong> que buscan profesionalizar su práctica y alinearse a estándares ICF.</li>
                <li><strong>Profesionales de RRHH</strong> que quieren instalar una cultura de alto rendimiento basada en coaching.</li>
                <li><strong>Emprendedores</strong> que necesitan sacar lo mejor de sus equipos sin micromanagement.</li>
                <li><strong>Entrenadores deportivos, padres, profesores</strong> — quien tenga que influir en el rendimiento de otra persona.</li>
            </ul>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">📖</span><div>
                <h3>El origen: del tenis a la empresa</h3>
                <p>En 1974, <strong>Timothy Gallwey</strong>, pedagogo de Harvard y experto en tenis, publicó <em>El juego interior del tenis</em>. Su tesis era revolucionaria: <em>"El oponente que habita en la cabeza del propio jugador es más formidable que el que hay al otro lado de la red"</em>.</p>
                <p>En 1979, <strong>sir John Whitmore</strong>, ex-piloto de Fórmula 1 y consultor, llevó el "juego interior" a Europa. Primero a tenistas y golfistas; pronto a directivos. Una década después, McKinsey le pidió que sistematizara lo que hacía. De ahí nació el modelo <strong>GROW</strong>.</p>
                <p>En 1992 publicó la primera edición de este libro. Hoy el coaching es una profesión respetada con más de <strong>10.000 coaches certificados solo en Europa</strong>, y <em>Coaching</em> sigue siendo la referencia.</p>
            </div></div>
        </div>

        <div class="content-card tip">
            <h3>💡 Las tres claves para aprovechar el curso</h3>
            <ul class="concept-list">
                <li><strong>Practicar, practicar, practicar.</strong> Whitmore dice: <em>"Mi respuesta es siempre la misma"</em>. El coaching se aprende haciendo, no leyendo.</li>
                <li><strong>Empezar con una persona.</strong> Elige a alguien real — un colaborador, un hijo, un jugador de tu equipo — y practica cada técnica con esa persona.</li>
                <li><strong>Morderte la lengua.</strong> El 80% del trabajo del coach es no dar consejos. Es más difícil de lo que parece.</li>
            </ul>
        </div>

        <blockquote class="book-quote" style="background:#f3e5f5;border-left:4px solid #7b1fa2;padding:14px 18px;border-radius:6px;font-style:italic;">"El coaching no consiste en absoluto en enseñar, sino en crear las condiciones necesarias para el aprendizaje y el crecimiento personal. ¡A por ello!"
<div style="text-align:right;font-style:normal;font-weight:bold;margin-top:8px;">— Sir John Whitmore</div></blockquote>

        ${quizBlock('q_intro', '🎯 Según Whitmore, ¿cuál es la esencia del coaching?', [
            {text: 'Enseñar técnicas específicas que el coachee debe memorizar', correct: false},
            {text: 'Crear las condiciones para que la persona descubra, aprenda y crezca por sí misma', correct: true},
            {text: 'Dar consejos basados en la experiencia del coach', correct: false},
            {text: 'Aplicar un modelo rígido de 5 pasos en todas las sesiones', correct: false}
        ])}
        `
    });


    // ==============================================================
    // MÓDULO 1 — ¿QUÉ ES EL COACHING? (Caps. 1-2)
    // ==============================================================
    C.lessons.push({
        id: 'm1l1', module: 'Módulo 1 · ¿Qué es el coaching?', tag: 'tag-module', tagLabel: 'MÓDULO 1',
        title: 'La ecuación del juego interior',
        subtitle: 'Capítulo 1 — Rendimiento = potencial − interferencias',
        content: hero(heroGradients.m1, 'LECCIÓN 1', 'La ecuación del juego interior — Cap. 1') + `
        ${note('Esta lección contiene la idea más importante de todo el libro. Si entiendes R=p-i, entiendes el coaching. Todo lo demás son técnicas para aplicar esta ecuación. Léelo despacio.')}

        ${videoLink('El Juego Interior del Tenis — Timothy Gallwey (resumen)', 'Ih_SvfLXHCk')}

        ${realImg('https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800', 'Jugador de tenis concentrado', 'Gallwey descubrió que el rival interno — el crítico que habita en la cabeza del jugador — limita más el rendimiento que el rival externo')}

        <div class="content-card">
            <h3>🎾 El nacimiento del coaching moderno</h3>
            <p>Timothy Gallwey, experto en tenis y pedagogo de Harvard, escribió en 1974 <em>El juego interior del tenis</em>. Descubrió que cuando dejaba de dar instrucciones técnicas a sus alumnos y en su lugar les hacía <strong>preguntas descriptivas</strong> ("¿hacia dónde gira la pelota cuando se acerca?"), el rendimiento subía dramáticamente.</p>
            <blockquote class="book-quote" style="background:#e3f2fd;border-left:4px solid #1565c0;padding:12px 16px;border-radius:6px;">"Si el entrenador pudiera ayudar al jugador a eliminar o reducir los obstáculos internos de su rendimiento, este descubriría una capacidad natural e inesperada de aprendizaje y desempeño, y ya no necesitaría de una gran aportación técnica."</blockquote>
        </div>

        <div class="content-card">
            <h3>🧮 La ecuación fundamental del coaching</h3>
            <div style="background:#0d47a1;color:white;padding:24px;border-radius:10px;text-align:center;font-size:1.5em;font-weight:bold;margin:16px 0;">
                Rendimiento = potencial − interferencias<br>
                <span style="font-size:0.75em;opacity:0.9;">R = p − i</span>
            </div>
            <p>Según Gallwey y Whitmore, para mejorar el rendimiento <strong>(R)</strong> solo hay dos caminos:</p>
            <ul class="concept-list">
                <li><strong>Aumentar el potencial (p)</strong> — desarrollar capacidades, dar formación, entrenar. <em>El enfoque tradicional.</em></li>
                <li><strong>Reducir las interferencias (i)</strong> — el miedo, la duda, el perfeccionismo, el crítico interno, la tensión. <em>El enfoque del coaching.</em></li>
            </ul>
            <p>Lo revolucionario: <strong>reducir "i" suele producir más rendimiento que aumentar "p"</strong>, porque la mayoría de las personas usan solo una fracción de su potencial por culpa de sus interferencias internas.</p>
        </div>

        <div class="content-card tip">
            <h3>📊 El dato que lo cambia todo</h3>
            <p>En los talleres globales de Performance Consultants preguntan a los participantes:</p>
            <blockquote class="book-quote" style="background:#fff3e0;border-left:4px solid #e65100;padding:12px 16px;border-radius:6px;">"¿Qué porcentaje de tu potencial aportas a tu trabajo?"</blockquote>
            <p>La respuesta promedio es <strong>40%</strong>. Es decir, el 60% del talento mundial se desaprovecha por interferencias. El coaching ataca ese 60%.</p>
        </div>

        <div class="content-card">
            <h3>🚫 Por qué dar órdenes no funciona</h3>
            <p>Whitmore usa una analogía deportiva perfecta. La orden más común en deportes de pelota es <em>"¡no pierdas de vista el balón!"</em>. Pero si fuera efectiva, todos seríamos mejores deportistas.</p>
            <p>Igualmente, decirle a un golfista <em>"relájate"</em> suele ponerle más tenso. Las órdenes directas no activan la conciencia — activan la defensa.</p>
            <p><strong>Las preguntas descriptivas sí funcionan</strong> porque obligan al jugador a observar la realidad:</p>
            <ul class="concept-list">
                <li>"¿Hacia dónde gira la pelota cuando se te acerca?" → el jugador tiene que mirarla para responder.</li>
                <li>"¿A qué altura pasa por encima de la red?" → concentración espontánea.</li>
                <li>"¿Gira más rápido o más lento al rebotar?" → atención sin esfuerzo.</li>
            </ul>
        </div>

        <blockquote class="book-quote" style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:14px 18px;border-radius:6px;font-style:italic;">"Los obstáculos internos suelen ser más intimidantes que los externos."
<div style="text-align:right;font-style:normal;font-weight:bold;margin-top:8px;">— Timothy Gallwey</div></blockquote>

        ${quizBlock('q_m1l1', '🎯 Según la ecuación R = p − i, ¿cuál es la vía más poderosa del coaching?', [
            {text: 'Aumentar el potencial técnico con más cursos y formación', correct: false},
            {text: 'Reducir las interferencias internas (miedo, duda, crítico interno)', correct: true},
            {text: 'Presionar más al coachee para que se esfuerce', correct: false},
            {text: 'Dar instrucciones detalladas paso a paso', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm1l2', module: 'Módulo 1 · ¿Qué es el coaching?', tag: 'tag-module', tagLabel: 'MÓDULO 1',
        title: 'La curva del rendimiento y las culturas',
        subtitle: 'Capítulo 2 — Cómo crear culturas de alto rendimiento',
        content: hero(heroGradients.m1, 'LECCIÓN 2', 'La curva del rendimiento y las culturas — Cap. 2') + `
        ${note('El coaching individual sirve poco si la cultura organizacional ahoga la conciencia y la responsabilidad. Esta lección te muestra las cuatro culturas posibles y por qué solo una produce alto rendimiento sostenible.')}

        ${videoLink('Cómo construir una cultura de alto rendimiento — Santiago Fernández', 'R2xYKR_-q5U')}

        ${realImg('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800', 'Equipo colaborando', 'Las culturas de alto rendimiento no se construyen con incentivos: se construyen con conciencia y responsabilidad')}

        <div class="content-card">
            <h3>📈 Las cuatro culturas organizacionales</h3>
            <p>Whitmore propone la <strong>curva del rendimiento</strong>: un modelo que muestra cómo la cultura determina el techo del rendimiento. Hay cuatro niveles:</p>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:12px 0;">
                <tr style="background:#b71c1c;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>1. Impulsiva</strong></td><td style="padding:10px;border:1px solid #ddd;">Miedo, culpa y amenazas. "Hazlo o te despido." Genera cumplimiento mínimo. Rotación alta.</td></tr>
                <tr style="background:#e65100;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>2. Dependiente</strong></td><td style="padding:10px;border:1px solid #ddd;">Jerárquica, paternalista. "Haz lo que el jefe dice." La gente espera instrucciones. Bajo iniciativa.</td></tr>
                <tr style="background:#2e7d32;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>3. Independiente</strong></td><td style="padding:10px;border:1px solid #ddd;">Meritocrática. "Yo me ocupo de lo mío." Competencia interna. Silos. Medio rendimiento.</td></tr>
                <tr style="background:#0d47a1;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>4. Interdependiente</strong></td><td style="padding:10px;border:1px solid #ddd;">Cooperativa. "Ganamos juntos." Conciencia + responsabilidad + propósito compartido. Alto rendimiento sostenible.</td></tr>
            </table>
            <p>El coaching es el principal vehículo para mover a una organización de los niveles 1-2 al 3 y, sobre todo, al 4.</p>
        </div>

        <div class="content-card">
            <h3>🎯 El caso ANZ: transformar un banco con coaching</h3>
            <p>John McFarlane (hoy presidente de Barclays) lideró la transformación del banco australiano ANZ aplicando coaching masivo. <strong>35.000 empleados</strong> pasaron de la cultura dependiente a la interdependiente.</p>
            <p>Resultado: ANZ pasó de <strong>último lugar</strong> en satisfacción del cliente a <strong>primer lugar</strong> en su industria. Performance Consultants documenta un ROI promedio del <strong>800%</strong> en transformaciones basadas en coaching.</p>
        </div>

        <div class="content-card tip">
            <h3>🌱 Triple cuenta de resultados</h3>
            <p>Whitmore defiende que el coaching organizacional genera beneficios en tres frentes:</p>
            <ul class="concept-list">
                <li><strong>Personas</strong> — desarrollo, satisfacción, sentido.</li>
                <li><strong>Planeta</strong> — decisiones más éticas y sostenibles al ampliar la conciencia.</li>
                <li><strong>Beneficios económicos</strong> — rendimiento superior sostenible.</li>
            </ul>
            <p>Esto se conoce como <em>triple bottom line</em> y es el corazón de por qué el coaching importa hoy más que nunca.</p>
        </div>

        <blockquote class="book-quote" style="background:#f3e5f5;border-left:4px solid #7b1fa2;padding:14px 18px;border-radius:6px;font-style:italic;">"Hay una diferencia tangible entre un sistema que se rige por principios y otro que se rige por normas. Las normas limitan el crecimiento de lo que es posible. Los principios defienden el centro de gravedad de lo que se desea realmente."
<div style="text-align:right;font-style:normal;font-weight:bold;margin-top:8px;">— John McFarlane (Prólogo)</div></blockquote>

        ${quizBlock('q_m1l2', '🎯 ¿Cuál es la cultura organizacional que produce alto rendimiento sostenible según Whitmore?', [
            {text: 'Impulsiva — miedo y amenazas constantes', correct: false},
            {text: 'Dependiente — jerárquica y paternalista', correct: false},
            {text: 'Independiente — meritocrática con competencia interna', correct: false},
            {text: 'Interdependiente — cooperación, conciencia y propósito compartido', correct: true}
        ])}
        `
    });

    // ==============================================================
    // MÓDULO 2 — LOS PRINCIPIOS DEL COACHING (Caps. 3-6)
    // ==============================================================
    C.lessons.push({
        id: 'm2l1', module: 'Módulo 2 · Principios del coaching', tag: 'tag-module', tagLabel: 'MÓDULO 2',
        title: 'Inteligencia emocional aplicada',
        subtitle: 'Capítulo 3 — El coaching es inteligencia emocional puesta en práctica',
        content: hero(heroGradients.m2, 'LECCIÓN 3', 'Inteligencia emocional aplicada — Cap. 3') + `
        ${note('Daniel Goleman publicó Inteligencia Emocional en 1995. Whitmore dice que el coaching es, simplemente, IE aplicada al liderazgo. Sin IE, no hay coaching posible. Esta lección conecta ambos mundos.')}

        ${videoLink('Daniel Goleman: los 4 pilares de la inteligencia emocional', 'FaCkyPEole8')}

        ${realImg('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800', 'Conversación empática', 'La IE no es un don innato: se entrena. Cada sesión de coaching es un gimnasio de IE')}

        <div class="content-card">
            <h3>🧠 ¿Qué es la inteligencia emocional?</h3>
            <p>Daniel Goleman definió cuatro dominios de la IE:</p>
            <table style="width:100%;border-collapse:collapse;font-size:0.92em;margin:12px 0;">
                <tr style="background:#f3e5f5;"><td style="padding:10px;border:1px solid #ddd;"><strong>1. Autoconciencia</strong></td><td style="padding:10px;border:1px solid #ddd;">Reconocer mis emociones mientras ocurren. "Estoy irritado." "Tengo miedo."</td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;"><strong>2. Autogestión</strong></td><td style="padding:10px;border:1px solid #ddd;">Regular mis emociones sin reprimirlas. Elegir mi respuesta en vez de reaccionar.</td></tr>
                <tr style="background:#f3e5f5;"><td style="padding:10px;border:1px solid #ddd;"><strong>3. Conciencia social</strong></td><td style="padding:10px;border:1px solid #ddd;">Leer las emociones de los demás. Empatía cognitiva y emocional.</td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;"><strong>4. Gestión de relaciones</strong></td><td style="padding:10px;border:1px solid #ddd;">Influir, inspirar, gestionar conflictos, colaborar.</td></tr>
            </table>
            <p>El coaching trabaja los cuatro simultáneamente — es por eso que los mejores coaches tienen IE altísima.</p>
        </div>

        <div class="content-card">
            <h3>🎭 Creer en el potencial</h3>
            <p>La efectividad del coach depende de lo que crea sobre el potencial humano. Si creo que mi coachee es limitado, lo trataré como limitado, y se comportará como limitado. <strong>Es el efecto Pigmalión, y está documentado.</strong></p>
            <blockquote class="book-quote" style="background:#e3f2fd;border-left:4px solid #1565c0;padding:12px 16px;border-radius:6px;">"Los líderes deben pensar en sus empleados en términos de su potencial, no de su rendimiento pasado. La mayoría de los sistemas de evaluación tienen fallos graves precisamente por esto."</blockquote>
            <p>Estudios en educación lo demuestran: cuando se dice a un profesor que su grupo es "de matrícula de honor" (aunque sea falso), los alumnos sacan mejores notas que el grupo "con dificultades" (también falso). La creencia del profesor se convierte en realidad.</p>
        </div>

        <div class="content-card tip">
            <h3>🎬 Actividad: tres actitudes hacia una persona</h3>
            <p>Piensa en alguien de tu equipo con quien tengas dificultades. Adopta sucesivamente estas tres actitudes durante 1 minuto cada una:</p>
            <ol>
                <li><em>"Creo que esta persona ES un problema."</em></li>
                <li><em>"Creo que esta persona TIENE un problema."</em></li>
                <li><em>"Creo que esta persona está en un proceso de aprendizaje y es capaz, tiene recursos y está llena de potencial."</em></li>
            </ol>
            <p>Nota cómo cambian tus emociones, tu lenguaje corporal, lo que se te ocurre decirle. <strong>Esa tercera actitud es la actitud del coach.</strong></p>
        </div>

        <div class="content-card">
            <h3>📊 El estudio Mehrabian</h3>
            <p>Albert Mehrabian descubrió que en la comunicación de emociones y actitudes:</p>
            <ul class="concept-list">
                <li><strong>7%</strong> se transmite por las palabras que decimos</li>
                <li><strong>38%</strong> por el tono y ritmo</li>
                <li><strong>55%</strong> por la expresión facial y corporal</li>
            </ul>
            <p>Lección para el coach: <em>tu actitud interna se nota aunque no hables</em>. No sirve "fingir" optimismo. Hay que sentirlo de verdad.</p>
        </div>

        <blockquote class="book-quote" style="background:#fff3e0;border-left:4px solid #e65100;padding:14px 18px;border-radius:6px;font-style:italic;">"El objetivo subyacente y omnipresente del coaching es desarrollar la confianza que otras personas tienen en sí mismas, independientemente de la naturaleza de la tarea o del problema."
<div style="text-align:right;font-style:normal;font-weight:bold;margin-top:8px;">— John Whitmore</div></blockquote>

        ${quizBlock('q_m2l1', '🎯 Según el estudio Mehrabian, ¿qué porcentaje del mensaje emocional transmiten las palabras?', [
            {text: 'El 55%', correct: false},
            {text: 'El 38%', correct: false},
            {text: 'Solo el 7% — la mayor parte viene del tono y del lenguaje corporal', correct: true},
            {text: 'El 93%', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm2l2', module: 'Módulo 2 · Principios del coaching', tag: 'tag-module', tagLabel: 'MÓDULO 2',
        title: 'El líder como coach',
        subtitle: 'Capítulos 4-5 — Del mando-control al liderazgo colaborativo',
        content: hero(heroGradients.m2, 'LECCIÓN 4', 'El líder como coach — Caps. 4-5') + `
        ${note('Este es el pivot del libro: dejar de liderar desde arriba (mando-control) y empezar a liderar desde al lado (colaboración, coaching). No es un cambio de técnica, es un cambio de paradigma.')}

        ${videoLink('El método GROW — John Whitmore explicado', 'vfMKW7oC0Uo')}

        ${realImg('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800', 'Líder conversando con colaborador', 'El líder-coach no está delante tirando ni detrás empujando: está al lado, caminando junto al coachee')}

        <div class="content-card">
            <h3>⚔️ Los dos estilos de liderazgo</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.92em;margin:12px 0;">
                <tr style="background:#b71c1c;color:white;"><td style="padding:10px;border:1px solid #ddd;" width="30%"><strong>Mando-control (viejo)</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Líder-coach (nuevo)</strong></td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;">Dice qué hacer</td><td style="padding:10px;border:1px solid #ddd;">Pregunta</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:10px;border:1px solid #ddd;">Supervisa</td><td style="padding:10px;border:1px solid #ddd;">Acompaña</td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;">Soluciona problemas</td><td style="padding:10px;border:1px solid #ddd;">Ayuda a que otros los solucionen</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:10px;border:1px solid #ddd;">Conoce las respuestas</td><td style="padding:10px;border:1px solid #ddd;">Sabe hacer las preguntas</td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;">Basa su autoridad en el puesto</td><td style="padding:10px;border:1px solid #ddd;">Basa su autoridad en la confianza</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:10px;border:1px solid #ddd;">Produce dependencia</td><td style="padding:10px;border:1px solid #ddd;">Produce autonomía</td></tr>
            </table>
        </div>

        <div class="content-card">
            <h3>🤝 Cooperación vs. colaboración</h3>
            <p>Whitmore distingue:</p>
            <ul class="concept-list">
                <li><strong>Cooperar</strong> — cumplir con mi parte para que el todo funcione. Transaccional.</li>
                <li><strong>Colaborar</strong> — co-crear algo nuevo juntos. Relacional.</li>
            </ul>
            <p>El liderazgo-coach construye colaboración real, no solo cooperación formal. Y la colaboración es donde surge la innovación.</p>
        </div>

        <div class="content-card tip">
            <h3>💡 Tres prácticas del líder-coach cotidiano</h3>
            <ol>
                <li><strong>Intención previa.</strong> Antes de cualquier reunión, dedica 2 minutos a responder: <em>"Si esta reunión superara extraordinariamente todas mis expectativas, ¿qué sucedería?"</em>. Esa es tu intención.</li>
                <li><strong>Acuerdos conscientes de trabajo.</strong> Con cada nuevo colaborador o equipo: <em>¿Qué sería éxito/sueño? ¿Qué sería fracaso/pesadilla? ¿Cómo trabajaremos juntos?</em>. Acuerdos explícitos, no asumidos.</li>
                <li><strong>Pedir permiso.</strong> Antes de dar un consejo: <em>"¿Te ayudaría saber qué me funcionó a mí?"</em>. Esto respeta la autonomía y activa la escucha.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>📱 El caso Nokia vs. Apple</h3>
            <p>Nokia dominaba los móviles en 2007 con una cultura de mando-control: los ingenieros sabían que el iPhone era superior pero no se atrevían a decirlo a sus jefes. Apple, con su cultura colaborativa, construyó el iPhone precisamente porque los equipos podían desafiar ideas abiertamente. <strong>Nokia cayó de 40% de mercado a menos del 3% en cinco años.</strong></p>
        </div>

        <blockquote class="book-quote" style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:14px 18px;border-radius:6px;font-style:italic;">"Acompañamos al coachee. No estamos delante tirando de él ni detrás empujándolo."
<div style="text-align:right;font-style:normal;font-weight:bold;margin-top:8px;">— John Whitmore</div></blockquote>

        ${quizBlock('q_m2l2', '🎯 ¿Cuál es la diferencia clave entre el líder tradicional y el líder-coach?', [
            {text: 'El líder-coach es más suave y permisivo con los resultados', correct: false},
            {text: 'El líder-coach pregunta y acompaña; el tradicional ordena y supervisa', correct: true},
            {text: 'El líder-coach trabaja menos horas', correct: false},
            {text: 'El líder tradicional es más carismático', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm2l3', module: 'Módulo 2 · Principios del coaching', tag: 'tag-module', tagLabel: 'MÓDULO 2',
        title: 'Conciencia y responsabilidad',
        subtitle: 'Capítulo 6 — Las dos activadoras del aprendizaje',
        content: hero(heroGradients.m2, 'LECCIÓN 5', 'Conciencia y responsabilidad — Cap. 6') + `
        ${note('Whitmore dice: "Si solo te puedes quedar con un par de conceptos de este libro, quédate con conciencia y responsabilidad. Son más importantes que GROW." Esta es la piedra angular filosófica del coaching.')}

        ${videoLink('Conciencia y responsabilidad personal — coaching', 'tpbsMNmmfd8')}

        ${realImg('https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800', 'Persona reflexionando', 'Sin conciencia no hay cambio posible. Sin responsabilidad no hay acción sostenida')}

        <div class="content-card">
            <h3>🌅 Conciencia: ver la realidad tal cual es</h3>
            <p><strong>Conciencia (awareness)</strong> es la capacidad de percibir con precisión lo que está sucediendo — dentro de mí y fuera de mí — sin distorsión.</p>
            <ul class="concept-list">
                <li><strong>Conciencia externa:</strong> lo que veo, oigo, toco. Los hechos.</li>
                <li><strong>Conciencia interna:</strong> mis emociones, pensamientos, reacciones, sesgos.</li>
            </ul>
            <p>El coach eleva la conciencia del coachee haciendo preguntas descriptivas que lo obligan a observar sin juzgar. La conciencia es <strong>el prerrequisito de todo cambio</strong>: no puedo cambiar lo que no veo.</p>
        </div>

        <div class="content-card">
            <h3>💪 Responsabilidad: apropiarme de mi parte</h3>
            <p><strong>Responsabilidad (ownership)</strong> es aceptar que <em>yo</em> soy quien tiene que actuar. No es culpa, es agencia.</p>
            <blockquote class="book-quote" style="background:#f3e5f5;border-left:4px solid #7b1fa2;padding:12px 16px;border-radius:6px;">"La responsabilidad es, sencillamente, decidir actuar. Y cuando una persona elige libremente una acción, el compromiso con esa acción es completo."</blockquote>
            <p>Aquí es donde las órdenes fallan: cuando el jefe impone una acción, el subordinado la ejecuta sin responsabilidad real. Cuando el coachee elige su propia acción, la ejecuta con compromiso total.</p>
        </div>

        <div class="content-card tip">
            <h3>🎯 El efecto multiplicador</h3>
            <p>Whitmore argumenta que conciencia + responsabilidad son multiplicativas, no aditivas:</p>
            <div style="background:#1b5e20;color:white;padding:16px;border-radius:10px;text-align:center;font-size:1.2em;font-weight:bold;margin:12px 0;">
                Aprendizaje = Conciencia × Responsabilidad
            </div>
            <p>Si falta cualquiera de las dos, el aprendizaje es cero. Por eso el coaching <strong>no sirve con personas que no quieren responsabilizarse</strong> (aunque tengan conciencia), ni con personas inconscientes (aunque digan que quieren cambiar).</p>
        </div>

        <div class="content-card">
            <h3>🔄 El circuito de la conciencia-responsabilidad</h3>
            <ol>
                <li>El coach hace una <strong>pregunta descriptiva</strong>: "¿Qué está pasando realmente?"</li>
                <li>El coachee <strong>observa</strong> sin juzgar → aumenta su conciencia.</li>
                <li>El coach pregunta: "¿Qué vas a hacer?"</li>
                <li>El coachee <strong>elige libremente</strong> → acepta responsabilidad.</li>
                <li>El coachee <strong>actúa</strong> → aprende de la experiencia.</li>
                <li>El ciclo reinicia con más información.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>⚠️ Lo opuesto: culpa y víctima</h3>
            <p>Cuando un líder dice <em>"¿por qué no terminaste el reporte?"</em>, activa la defensa. El subordinado se siente culpable o se pone a la defensiva. Ni conciencia ni responsabilidad.</p>
            <p>Cuando pregunta <em>"¿qué ocurrió con el reporte?"</em> activa la observación. El subordinado describe la realidad. Surge conciencia, luego se puede preguntar <em>"¿qué vas a hacer?"</em> y surge responsabilidad.</p>
            <p><strong>"Por qué" es la pregunta enemiga del coach.</strong> "Qué" es su aliada.</p>
        </div>

        <blockquote class="book-quote" style="background:#e3f2fd;border-left:4px solid #1565c0;padding:14px 18px;border-radius:6px;font-style:italic;">"La conciencia y la responsabilidad personal son, sin lugar a dudas, los dos elementos más importantes para generar un alto rendimiento en cualquier actividad."
<div style="text-align:right;font-style:normal;font-weight:bold;margin-top:8px;">— John Whitmore</div></blockquote>

        ${quizBlock('q_m2l3', '🎯 Según Whitmore, ¿cuál es la fórmula del aprendizaje?', [
            {text: 'Aprendizaje = Conocimiento + Experiencia', correct: false},
            {text: 'Aprendizaje = Conciencia × Responsabilidad', correct: true},
            {text: 'Aprendizaje = Motivación + Disciplina', correct: false},
            {text: 'Aprendizaje = Inteligencia × Esfuerzo', correct: false}
        ])}
        `
    });

    // ==============================================================
    // MÓDULO 3 — LAS HABILIDADES FUNDAMENTALES (Caps. 7-8)
    // ==============================================================
    C.lessons.push({
        id: 'm3l1', module: 'Módulo 3 · Habilidades fundamentales', tag: 'tag-module', tagLabel: 'MÓDULO 3',
        title: 'Preguntas potentes',
        subtitle: 'Capítulo 7 — La herramienta principal del coach',
        content: hero(heroGradients.m3, 'LECCIÓN 6', 'Preguntas potentes — Cap. 7') + `
        ${note('Si tuviera que enseñarte una sola habilidad de coaching, sería esta. La pregunta potente es la herramienta universal: abre conciencia, genera responsabilidad, produce aprendizaje. Dedica esta lección a practicar, no solo a leer.')}

        ${videoLink('¿Qué preguntas hace un coach? 3 tips para preguntas poderosas', 'N23_7qb7zXg')}

        ${realImg('https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800', 'Conversación profunda', 'Una buena pregunta abre puertas que no sabías que existían — en la mente del coachee y en la tuya')}

        <div class="content-card">
            <h3>🔑 Preguntas cerradas vs. abiertas</h3>
            <blockquote class="book-quote" style="background:#e3f2fd;border-left:4px solid #1565c0;padding:12px 16px;border-radius:6px;">"Las preguntas cerradas evitan que la persona se vea obligada a pensar. Las preguntas abiertas obligan a pensar por uno mismo."</blockquote>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:12px 0;">
                <tr style="background:#b71c1c;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>Cerradas (evitar)</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Abiertas (usar)</strong></td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;">¿Estás mirando la pelota?</td><td style="padding:10px;border:1px solid #ddd;">¿Hacia dónde gira la pelota cuando se te acerca?</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:10px;border:1px solid #ddd;">¿Vas a cumplir con la meta?</td><td style="padding:10px;border:1px solid #ddd;">¿Qué necesitas para cumplir con la meta?</td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;">¿Te gustó la reunión?</td><td style="padding:10px;border:1px solid #ddd;">¿Qué te llevaste de la reunión?</td></tr>
            </table>
        </div>

        <div class="content-card">
            <h3>📋 Las palabras mágicas del coach</h3>
            <p>Las preguntas más efectivas empiezan con:</p>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:14px 0;">
                <div style="background:#00838f;color:white;padding:16px;border-radius:8px;text-align:center;font-weight:bold;">¿Qué...?</div>
                <div style="background:#00838f;color:white;padding:16px;border-radius:8px;text-align:center;font-weight:bold;">¿Cuándo...?</div>
                <div style="background:#00838f;color:white;padding:16px;border-radius:8px;text-align:center;font-weight:bold;">¿Quién...?</div>
                <div style="background:#00838f;color:white;padding:16px;border-radius:8px;text-align:center;font-weight:bold;">¿Cuánto...?</div>
                <div style="background:#00838f;color:white;padding:16px;border-radius:8px;text-align:center;font-weight:bold;">¿Dónde...?</div>
                <div style="background:#b71c1c;color:white;padding:16px;border-radius:8px;text-align:center;font-weight:bold;">⚠️ ¿Por qué...?</div>
            </div>
            <p><strong>Cuidado con "¿por qué?"</strong> — suele sonar a crítica y pone al interlocutor a la defensiva. Si necesitas entender motivos, mejor pregunta <em>"¿qué motivos tienes para...?"</em>.</p>
            <p><strong>Cuidado con "¿cómo?"</strong> sin matizar — genera pensamiento analítico que puede bloquear la observación. Si necesitas entender proceso, mejor pregunta <em>"¿qué medidas...?"</em>.</p>
        </div>

        <div class="content-card tip">
            <h3>🔍 Las dos preguntas más potentes del coaching</h3>
            <ol>
                <li><strong>¿Y qué más?</strong> — obliga a pensar un paso más allá de la primera respuesta obvia. Usa hasta que el coachee diga "no sé, nada más". Ahí suele estar el insight.</li>
                <li><strong>¿Qué quieres realmente?</strong> — va al fondo. Más allá del síntoma, ¿cuál es el deseo verdadero?</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>📖 Las 9 preguntas abiertas esenciales (Whitmore)</h3>
            <ol>
                <li>¿Qué quieres conseguir?</li>
                <li>¿Qué está sucediendo en este momento?</li>
                <li>¿Cómo te gustaría que fuera?</li>
                <li>¿Qué te lo impide? ¿Qué te ayuda?</li>
                <li>¿Con qué problemas podrías encontrarte?</li>
                <li>¿Qué podrías hacer?</li>
                <li>¿Quién podría ayudarte?</li>
                <li>¿Dónde podrías encontrar más información?</li>
                <li>¿Qué harás?</li>
            </ol>
            <p>Whitmore dice: imprímelas. Llévalas en la cartera. Memorízalas. Son el núcleo de cualquier sesión GROW.</p>
        </div>

        <div class="content-card">
            <h3>🎯 Atención al detalle: de lo general a lo específico</h3>
            <p>Como mirar un metro cuadrado de alfombra: sin lupa, te aburre en 10 segundos. Con microscopio, descubres un universo. Las preguntas deben ir profundizando:</p>
            <ul class="concept-list">
                <li>¿Qué más quieres?</li>
                <li>¿Qué quieres <em>realmente</em>?</li>
                <li>¿Qué sucede ahora <em>exactamente</em>?</li>
                <li>¿Qué harás <em>exactamente</em>?</li>
            </ul>
            <p>Cada "¿y qué más?" añade una capa de conciencia que antes era invisible.</p>
        </div>

        <blockquote class="book-quote" style="background:#fff3e0;border-left:4px solid #e65100;padding:14px 18px;border-radius:6px;font-style:italic;">"La principal forma de interacción verbal de un buen coach ha de ser la pregunta. Exigir lo que queremos es inútil."
<div style="text-align:right;font-style:normal;font-weight:bold;margin-top:8px;">— John Whitmore</div></blockquote>

        ${quizBlock('q_m3l1', '🎯 ¿Qué palabra inicial desaconseja Whitmore para las preguntas de coaching?', [
            {text: '¿Qué...?', correct: false},
            {text: '¿Cuánto...?', correct: false},
            {text: '¿Por qué...? porque suena a crítica y pone a la defensiva', correct: true},
            {text: '¿Cuándo...?', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm3l2', module: 'Módulo 3 · Habilidades fundamentales', tag: 'tag-module', tagLabel: 'MÓDULO 3',
        title: 'Escucha activa',
        subtitle: 'Capítulo 8 — La otra mitad del coaching',
        content: hero(heroGradients.m3, 'LECCIÓN 7', 'Escucha activa — Cap. 8') + `
        ${note('Hacer una gran pregunta sin escuchar la respuesta es peor que no preguntar. La escucha activa es la que transforma una pregunta en coaching real. Esta lección te va a incomodar — prepárate para descubrir cuánto no escuchas.')}

        ${videoLink('Escucha activa: 12 técnicas imprescindibles', 'VcIW9uUDx0c')}

        ${realImg('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800', 'Personas escuchándose con atención', 'Escuchar no es esperar mi turno de hablar. Es entrar en el mundo del otro con genuina curiosidad')}

        <div class="content-card">
            <h3>🧠 Por qué escuchar es tan difícil</h3>
            <p>Pensamos a <strong>casi 4 veces la velocidad</strong> a la que otros hablan. Eso significa que mientras tú hablas, yo tengo tiempo mental de sobra para: recordar algo que pasó ayer, planear mi respuesta, juzgar tu idea, distraerme con mi móvil...</p>
            <p>La escucha activa exige <strong>silenciar esa conversación interna</strong> y poner toda la atención en el otro. Es un trabajo mental concreto, no una pose.</p>
        </div>

        <div class="content-card">
            <h3>📶 Los cuatro niveles de escucha (Otto Scharmer)</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.92em;margin:12px 0;">
                <tr style="background:#006064;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>Nivel 1 — Descargar</strong></td><td style="padding:10px;border:1px solid #ddd;">Escucho confirmar lo que ya sé. Filtros. "Claro, eso ya lo sabía."</td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;"><strong>Nivel 2 — Objetivo/fáctico</strong></td><td style="padding:10px;border:1px solid #ddd;">Escucho datos nuevos. "Ah, eso no lo sabía."</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:10px;border:1px solid #ddd;"><strong>Nivel 3 — Empático</strong></td><td style="padding:10px;border:1px solid #ddd;">Escucho desde el mundo del otro. "Veo el mundo a través de sus ojos."</td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;"><strong>Nivel 4 — Generativo</strong></td><td style="padding:10px;border:1px solid #ddd;">Escucho lo que emerge entre los dos. Co-creación.</td></tr>
            </table>
            <p>El coach necesita, mínimo, el nivel 3. Los grandes coaches viven en el 4.</p>
        </div>

        <div class="content-card tip">
            <h3>🔧 Las 7 señales visibles de escucha activa</h3>
            <ol>
                <li><strong>Contacto visual</strong> — no fijo ni ausente, cómodo.</li>
                <li><strong>Postura abierta</strong> — cuerpo orientado al otro, brazos sin cruzar.</li>
                <li><strong>Asentir</strong> — pequeños movimientos de cabeza que dicen "sigo aquí".</li>
                <li><strong>Reflejar</strong> — "Si te entiendo bien, lo que dices es X".</li>
                <li><strong>Parafrasear</strong> — repetir con tus palabras la idea del otro.</li>
                <li><strong>Silencio</strong> — permitir que el otro piense sin rellenar el vacío.</li>
                <li><strong>Preguntar por aclaración</strong> — "¿A qué te refieres con..?".</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>🔇 El poder del silencio</h3>
            <p>El silencio incómodo es una de las herramientas más poderosas del coach. Cuando el coachee termina de hablar y hay un silencio de 5-10 segundos, <strong>el coachee suele seguir hablando</strong> y decir algo más profundo de lo que dijo al principio.</p>
            <p>Regla del coach: <em>cuando no sepas qué preguntar, no digas nada. El coachee llenará el silencio con oro.</em></p>
        </div>

        <div class="content-card">
            <h3>🚫 Los 5 enemigos de la escucha</h3>
            <ol>
                <li><strong>Preparar mi respuesta</strong> mientras el otro habla.</li>
                <li><strong>Juzgar</strong> lo que dice antes de entenderlo.</li>
                <li><strong>Comparar</strong> con mi propia experiencia ("a mí me pasó algo parecido...").</li>
                <li><strong>Dar consejos no pedidos</strong> interrumpiendo.</li>
                <li><strong>Distracciones externas</strong> — móvil, notificaciones, otra gente.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>👂 Escuchar también con los ojos</h3>
            <p>Presta atención a:</p>
            <ul class="concept-list">
                <li><strong>Lenguaje corporal</strong> — ¿se encoge al hablar de cierto tema? ¿se ilumina con otro?</li>
                <li><strong>Tono y ritmo</strong> — ¿hablar más rápido cuando está nervioso? ¿más bajo cuando duda?</li>
                <li><strong>Lo que NO dice</strong> — los silencios, las palabras que evita, los "saltos" en la historia.</li>
            </ul>
            <p>El 93% del mensaje emocional (Mehrabian) está fuera de las palabras. Si solo escuchas las palabras, te pierdes casi todo.</p>
        </div>

        <blockquote class="book-quote" style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:14px 18px;border-radius:6px;font-style:italic;">"La escucha activa es probablemente la mejor forma de prestar atención a los demás."
<div style="text-align:right;font-style:normal;font-weight:bold;margin-top:8px;">— John Whitmore</div></blockquote>

        ${quizBlock('q_m3l2', '🎯 ¿Por qué es tan difícil la escucha activa según Whitmore?', [
            {text: 'Porque la mayoría de las personas son egoístas', correct: false},
            {text: 'Porque pensamos casi 4 veces más rápido de lo que hablamos, y ese "ruido mental" nos distrae', correct: true},
            {text: 'Porque el otro habla demasiado despacio', correct: false},
            {text: 'Porque el coach necesita mucha formación técnica', correct: false}
        ])}
        `
    });

    // ==============================================================
    // MÓDULO 4 — EL MODELO GROW (Caps. 9-13)
    // ==============================================================
    C.lessons.push({
        id: 'm4l1', module: 'Módulo 4 · El modelo GROW', tag: 'tag-module', tagLabel: 'MÓDULO 4',
        title: 'GROW: la estructura del coaching',
        subtitle: 'Capítulo 9 — Objetivos, Realidad, Opciones, Voluntad',
        content: hero(heroGradients.m4, 'LECCIÓN 8', 'El modelo GROW: visión general — Cap. 9') + `
        ${note('GROW es el modelo de coaching más famoso del mundo. Lo desarrolló Whitmore con Graham Alexander en los años 80 para McKinsey. Simple, flexible, poderoso. Pero cuidado: GROW sin conciencia y responsabilidad es una cáscara vacía. Un dictador puede seguir GROW paso a paso y no hacer coaching.')}

        ${videoLink('Coaching: Modelo GROW para conseguir objetivos', 'MY224bbo1Ic')}

        ${realImg('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800', 'Planta creciendo', 'GROW significa "crecer" en inglés. Las cuatro letras son las cuatro etapas que guían el crecimiento del coachee')}

        <div class="content-card">
            <h3>🌱 El acrónimo GROW</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.95em;margin:12px 0;">
                <tr style="background:#1b5e20;color:white;"><td style="padding:14px;border:1px solid #ddd;font-size:2em;text-align:center;font-weight:bold;">G</td><td style="padding:14px;border:1px solid #ddd;"><strong>Goal</strong> — Marcar el objetivo de la sesión y del tema, a corto y largo plazo</td></tr>
                <tr style="background:#388e3c;color:white;"><td style="padding:14px;border:1px solid #ddd;font-size:2em;text-align:center;font-weight:bold;">R</td><td style="padding:14px;border:1px solid #ddd;"><strong>Reality</strong> — Comprobar la realidad: ¿qué está sucediendo ahora?</td></tr>
                <tr style="background:#66bb6a;color:white;"><td style="padding:14px;border:1px solid #ddd;font-size:2em;text-align:center;font-weight:bold;">O</td><td style="padding:14px;border:1px solid #ddd;"><strong>Options</strong> — Valorar las opciones y estrategias alternativas</td></tr>
                <tr style="background:#a5d6a7;color:#1b5e20;"><td style="padding:14px;border:1px solid #ddd;font-size:2em;text-align:center;font-weight:bold;">W</td><td style="padding:14px;border:1px solid #ddd;"><strong>Will</strong> — Determinar qué se hará, cuándo, quién lo hará — y la voluntad de hacerlo</td></tr>
            </table>
        </div>

        <div class="content-card">
            <h3>🔄 ¿Por qué el objetivo ANTES de la realidad?</h3>
            <p>Parece contraintuitivo. Pero Whitmore explica:</p>
            <blockquote class="book-quote" style="background:#e3f2fd;border-left:4px solid #1565c0;padding:12px 16px;border-radius:6px;">"Las metas basadas solo en la realidad presente pueden ser negativas, estar limitadas por el rendimiento pasado, carecer de creatividad y producir incrementos menores que los potenciales."</blockquote>
            <p>Si empiezas por la realidad, tu objetivo será una reacción a los problemas actuales. Si empiezas por el objetivo ideal, luego haces que la realidad te sirva para llegar ahí.</p>
            <p><strong>Ejemplo:</strong> Tráfico intenso en una carretera.</p>
            <ul class="concept-list">
                <li>Empezando por realidad → objetivo: "añadir un carril" (reactivo, parche).</li>
                <li>Empezando por objetivo → "¿cuál es la pauta ideal de tráfico para esta región?" → objetivo: "transporte público + zona peatonal" (visión, solución real).</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>⚙️ Formal vs. informal</h3>
            <p>GROW funciona en dos formatos:</p>
            <ul class="concept-list">
                <li><strong>Sesión formal</strong> — 30-60 minutos programados, etapas marcadas, el coachee sabe que es una sesión de coaching.</li>
                <li><strong>Conversación cotidiana</strong> — 5 minutos en el pasillo, el "coachee" no sabe que le están haciendo coaching. Whitmore dice: <em>"Es simplemente la forma de liderazgo más efectiva que existe."</em></li>
            </ul>
            <p>Un buen líder-coach aplica GROW decenas de veces al día, casi siempre en modo informal.</p>
        </div>

        <div class="content-card">
            <h3>🔀 GROW es flexible, no lineal</h3>
            <p>Aunque las letras siguen un orden, la conversación real zigzaguea:</p>
            <ul class="concept-list">
                <li>A veces defines un objetivo <em>vago</em>, exploras la realidad, y entonces puedes precisar el objetivo real.</li>
                <li>Al explorar opciones, puedes descubrir que el objetivo estaba mal planteado — vuelves a G.</li>
                <li>Al concretar Will, compruebas si realmente avanza hacia el objetivo — si no, vuelves a O.</li>
            </ul>
            <p>La secuencia es <strong>una guía, no un guion</strong>. Sigue la intuición y la energía del coachee.</p>
        </div>

        <div class="content-card">
            <h3>⚠️ GROW sin alma = dictadura disfrazada</h3>
            <p>Un jefe autocrático puede usar GROW al pie de la letra y <strong>no hacer coaching</strong>:</p>
            <ul class="concept-list">
                <li><strong>G:</strong> "Mi objetivo es vender 1000 unidades."</li>
                <li><strong>R:</strong> "La realidad es que son unos vagos."</li>
                <li><strong>O:</strong> "He valorado las opciones y ninguna es válida."</li>
                <li><strong>W:</strong> "Lo que van a hacer es esto..."</li>
            </ul>
            <p>No hay una sola pregunta. No hay conciencia. No hay responsabilidad. <strong>GROW sin preguntas potentes es un monólogo disfrazado de método.</strong></p>
        </div>

        <blockquote class="book-quote" style="background:#fff3e0;border-left:4px solid #e65100;padding:14px 18px;border-radius:6px;font-style:italic;">"Si solo ha de quedarse con un par de conceptos de este libro, quédese con los de conciencia y responsabilidad personal, que son más importantes que el de GROW."
<div style="text-align:right;font-style:normal;font-weight:bold;margin-top:8px;">— John Whitmore</div></blockquote>

        ${quizBlock('q_m4l1', '🎯 ¿Por qué Whitmore recomienda empezar por el objetivo (G) antes que por la realidad (R)?', [
            {text: 'Porque la realidad siempre es deprimente', correct: false},
            {text: 'Porque si empiezas por la realidad, el objetivo será una reacción limitada al presente, no una visión creativa', correct: true},
            {text: 'Porque es más rápido', correct: false},
            {text: 'Porque las empresas exigen objetivos primero', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm4l2', module: 'Módulo 4 · El modelo GROW', tag: 'tag-module', tagLabel: 'MÓDULO 4',
        title: 'G — Goals: objetivos que inspiran',
        subtitle: 'Capítulo 10 — Definir objetivos que motivan y comprometen',
        content: hero(heroGradients.m4, 'LECCIÓN 9', 'G — Goals: definir los objetivos — Cap. 10') + `
        ${note('La G es la letra más importante de GROW. Si el objetivo está mal planteado, todo lo demás es humo. Dedica 15 minutos a definir un buen objetivo antes de pasar a R — te ahorrarás horas de trabajo desperdiciado.')}

        ${videoLink('¿Cómo hacer OBJETIVO SMART? Ejemplo práctico', 'mfzUazFbXyM')}

        ${realImg('https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800', 'Diana con flecha en el centro', 'Un objetivo bien definido es como una diana: sabes exactamente a qué apuntar y cuándo das en el blanco')}

        <div class="content-card">
            <h3>🎯 Los 3 tipos de objetivos</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.92em;margin:12px 0;">
                <tr style="background:#1b5e20;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>1. Objetivo soñado</strong></td><td style="padding:10px;border:1px solid #ddd;">"Escalar el Everest." Aspiración, visión. Inspira pero no se puede controlar.</td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;"><strong>2. Objetivo asociado al fin</strong></td><td style="padding:10px;border:1px solid #ddd;">"Llegar a la cima en mayo." Resultado final. No está 100% bajo tu control.</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:10px;border:1px solid #ddd;"><strong>3. Objetivo de rendimiento</strong></td><td style="padding:10px;border:1px solid #ddd;">"Entrenar 4 días/semana, llegar a 7.500m en abril." Sí está bajo tu control.</td></tr>
            </table>
            <p><strong>Los tres son necesarios</strong>: el soñado inspira, el asociado al fin orienta, el de rendimiento se ejecuta.</p>
        </div>

        <div class="content-card">
            <h3>🏃 El caso Bob Beamon: por qué los objetivos de rendimiento importan</h3>
            <p>Olimpiadas de 1968, salto de longitud. Tres favoritos: Davies (oro en 1964), Boston (EUA) y Ter-Ovanesyan (URSS). En la primera ronda, el desconocido Bob Beamon salta <strong>60 cm más que el récord mundial</strong>.</p>
            <p>Davies, Boston y Ter-Ovanesyan quedan psicológicamente destrozados. Saltan 15-30 cm por debajo de sus marcas personales. Davies admite: <em>"Solo pensaba en el oro. Si me hubiera fijado un objetivo de rendimiento (8,24m o mi récord personal), habría ganado la plata."</em></p>
            <p>Moraleja: <strong>los objetivos asociados al fin te desmoralizan cuando no dependen solo de ti. Los objetivos de rendimiento te mantienen enfocado en lo que sí controlas.</strong></p>
        </div>

        <div class="content-card tip">
            <h3>✨ SMART + PURE + CLEAR — las 14 cualidades</h3>
            <p><strong>SMART</strong> (inteligente):</p>
            <ul class="concept-list">
                <li><strong>S</strong>pecific — específico</li>
                <li><strong>M</strong>easurable — medible</li>
                <li><strong>A</strong>greed — acordado</li>
                <li><strong>R</strong>ealistic — realista</li>
                <li><strong>T</strong>imeframed — acotado en el tiempo</li>
            </ul>
            <p><strong>PURE</strong> (puro):</p>
            <ul class="concept-list">
                <li><strong>P</strong>ositively stated — enunciado en positivo</li>
                <li><strong>U</strong>nderstood — comprendido</li>
                <li><strong>R</strong>elevant — pertinente</li>
                <li><strong>E</strong>thical — ético</li>
            </ul>
            <p><strong>CLEAR</strong> (claro):</p>
            <ul class="concept-list">
                <li><strong>C</strong>hallenging — desafiante</li>
                <li><strong>L</strong>egal — legal</li>
                <li><strong>E</strong>nvironmentally sound — respetuoso con el medio</li>
                <li><strong>A</strong>ppropriate — apropiado</li>
                <li><strong>R</strong>ecorded — registrado</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>➕ Enunciar en positivo: el globo rojo</h3>
            <p>Prueba: <em>"No pienses en un globo rojo."</em> ¿Qué te vino a la mente? Un globo rojo.</p>
            <p>El cerebro no procesa bien las negaciones. Los objetivos negativos sabotean:</p>
            <ul class="concept-list">
                <li><strong>Mal:</strong> "No quedar últimos en ventas."</li>
                <li><strong>Bien:</strong> "Quedar al menos cuartos en ventas."</li>
                <li><strong>Mal:</strong> "No perder el cliente Acme."</li>
                <li><strong>Bien:</strong> "Fidelizar a Acme con una renovación a 3 años."</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>👤 ¿De quién es el objetivo? El motor de la motivación</h3>
            <p>Si el objetivo lo impone el jefe, el subordinado lo ejecuta sin compromiso real. Si el objetivo lo acuerda el equipo, lo persigue con energía propia.</p>
            <blockquote class="book-quote" style="background:#f3e5f5;border-left:4px solid #7b1fa2;padding:12px 16px;border-radius:6px;">"Cuando lo deseo, rindo más que cuando es una obligación. El deseo es mío, el deber es de los demás."</blockquote>
            <p>Si el equipo propone vender 400 y tú quieres 500, no impongas. Acepta el 400 y usa coaching para que ellos mismos eleven la cifra. La motivación interna siempre supera a la externa.</p>
        </div>

        <div class="content-card">
            <h3>📋 Preguntas clave para la etapa G</h3>
            <ul class="concept-list">
                <li>¿Qué quieres conseguir al final del proceso?</li>
                <li>¿Qué quieres conseguir de esta sesión?</li>
                <li>¿Cuánto tiempo quieres dedicarle?</li>
                <li>¿Cuál sería el mejor resultado posible?</li>
                <li>¿Cuánto control tienes personalmente sobre el resultado?</li>
                <li>¿Cómo sabrás que lo has conseguido? (medible)</li>
                <li>¿Cuándo quieres conseguirlo? (plazo)</li>
                <li>¿Es este objetivo positivo, desafiante y alcanzable?</li>
            </ul>
        </div>

        ${quizBlock('q_m4l2', '🎯 Según Whitmore, ¿por qué un objetivo de rendimiento ("entrenar 4 días, saltar 7.5m") es mejor que uno asociado al fin ("ganar el oro")?', [
            {text: 'Porque es más ambicioso', correct: false},
            {text: 'Porque está bajo tu control directo y no te desmoraliza si la competencia rinde inesperadamente mejor', correct: true},
            {text: 'Porque es más fácil de conseguir', correct: false},
            {text: 'Porque los jefes lo prefieren', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm4l3', module: 'Módulo 4 · El modelo GROW', tag: 'tag-module', tagLabel: 'MÓDULO 4',
        title: 'R — Reality: la realidad objetiva',
        subtitle: 'Capítulo 11 — Describir lo que es sin juzgarlo',
        content: hero(heroGradients.m4, 'LECCIÓN 10', 'R — Reality: ¿cuál es la realidad? — Cap. 11') + `
        ${note('La mayoría de los líderes se saltan esta etapa. "Ya sé cómo están las cosas, vamos a la acción." Error. La acción sin comprensión profunda de la realidad es un palo de ciego. Esta lección te enseña a ver antes de actuar.')}

        ${videoLink('Aprende cómo interpretamos la realidad', 'uz0t-nVXLhc')}

        ${realImg('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800', 'Lupa examinando datos', 'La realidad es como un metro cuadrado de alfombra: a simple vista es aburrida; con un microscopio es fascinante')}

        <div class="content-card">
            <h3>👁️ El principio clave: descripción, no juicio</h3>
            <blockquote class="book-quote" style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px 16px;border-radius:6px;">"El criterio más importante a la hora de examinar la realidad es la objetividad."</blockquote>
            <p>Las preguntas de R deben buscar <strong>hechos descriptibles</strong>, no opiniones ni juicios:</p>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:12px 0;">
                <tr style="background:#b71c1c;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>Juicio (evitar)</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Descripción (usar)</strong></td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;">¿Por qué está mal el proyecto?</td><td style="padding:10px;border:1px solid #ddd;">¿Qué está pasando exactamente con el proyecto?</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:10px;border:1px solid #ddd;">¿Te parece que el equipo rinde?</td><td style="padding:10px;border:1px solid #ddd;">¿Qué resultados concretos ha producido el equipo en el último trimestre?</td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;">¿Quién tuvo la culpa?</td><td style="padding:10px;border:1px solid #ddd;">¿Qué secuencia de eventos llevó al resultado?</td></tr>
            </table>
        </div>

        <div class="content-card">
            <h3>🔍 Las preguntas de Reality</h3>
            <ul class="concept-list">
                <li>¿Qué está sucediendo ahora?</li>
                <li>¿Quién está implicado? ¿Cuándo? ¿Dónde?</li>
                <li>¿Cuáles son los efectos? ¿Cómo te está afectando a ti?</li>
                <li>¿Qué has hecho ya al respecto?</li>
                <li>¿Qué resultados han tenido esas acciones?</li>
                <li>¿Qué obstáculos hay? (externos e internos)</li>
                <li>¿Qué recursos tienes disponibles?</li>
                <li>¿Qué más es relevante que quizá no hemos mencionado?</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>🧩 Los 3 niveles de realidad</h3>
            <p>Un buen coach explora tres niveles:</p>
            <ol>
                <li><strong>Hechos externos:</strong> datos, métricas, eventos. "Vendimos 200 unidades en marzo."</li>
                <li><strong>Reacciones internas:</strong> emociones, pensamientos del coachee. "Me siento frustrado."</li>
                <li><strong>Interpretaciones:</strong> qué historia se cuenta el coachee sobre los hechos. "Creo que el equipo no me respeta."</li>
            </ol>
            <p>A menudo el problema no está en el nivel 1 sino en el 3 — la <em>historia</em> que el coachee construye es lo que le paraliza.</p>
        </div>

        <div class="content-card">
            <h3>⚠️ Cuidado con la memoria selectiva</h3>
            <p>La gente recuerda lo que refuerza su narrativa existente. Si el coachee cree que "nada funciona", solo recordará los fracasos. El coach debe ayudar a completar el cuadro:</p>
            <blockquote class="book-quote" style="background:#f3e5f5;border-left:4px solid #7b1fa2;padding:12px 16px;border-radius:6px;">"¿Y qué ha funcionado? ¿Cuándo ha sido diferente? ¿Qué excepciones hay?"</blockquote>
            <p>Estas preguntas rompen la visión unilateral y amplían la conciencia.</p>
        </div>

        <div class="content-card">
            <h3>🤔 Reality incluye también la realidad interna</h3>
            <p>No basta con los hechos externos. El coach debe explorar:</p>
            <ul class="concept-list">
                <li><strong>Emociones:</strong> "¿Qué sientes cuando piensas en este tema?"</li>
                <li><strong>Creencias:</strong> "¿Qué te dices a ti mismo sobre esta situación?"</li>
                <li><strong>Valores en juego:</strong> "¿Qué es lo que más te importa aquí?"</li>
                <li><strong>Recursos internos:</strong> "¿Qué fortalezas has usado en situaciones parecidas?"</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>🎯 Saber cuándo has terminado R</h3>
            <p>Has explorado la realidad suficientemente cuando:</p>
            <ul class="concept-list">
                <li>El coachee ha descrito los hechos objetivos.</li>
                <li>Ha reconocido sus reacciones emocionales.</li>
                <li>Ha identificado obstáculos internos y externos.</li>
                <li>Ha mencionado recursos disponibles.</li>
                <li>Dice algo como <em>"Ahora lo veo con más claridad"</em> — señal de que aumentó su conciencia.</li>
            </ul>
            <p>Solo entonces pasas a O (Opciones).</p>
        </div>

        ${quizBlock('q_m4l3', '🎯 ¿Cuál es el principio clave de la etapa R del modelo GROW?', [
            {text: 'Juzgar rápidamente la situación para poder actuar', correct: false},
            {text: 'Describir la realidad con objetividad, sin juicios — hechos, no opiniones', correct: true},
            {text: 'Dar consejos basados en la experiencia del coach', correct: false},
            {text: 'Identificar al culpable de los problemas', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm4l4', module: 'Módulo 4 · El modelo GROW', tag: 'tag-module', tagLabel: 'MÓDULO 4',
        title: 'O — Options: explorar todas las opciones',
        subtitle: 'Capítulo 12 — Cantidad antes que calidad',
        content: hero(heroGradients.m4, 'LECCIÓN 11', 'O — Options: ¿cuáles son las opciones? — Cap. 12') + `
        ${note('Aquí suele pasar esto: el coachee propone la primera opción obvia, el coach la acepta, y la sesión se corta. Error. El propósito de O no es elegir la mejor opción; es GENERAR muchas opciones. La elección vendrá después, en Will.')}

        ${videoLink('Técnicas de creatividad: Brainstorming — Alex Rayón', 'ova-HaeANY4')}

        ${realImg('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800', 'Lluvia de ideas en pizarra', 'En Options, la regla es: cantidad primero, calidad después. Juzgar una idea mientras se genera mata la creatividad')}

        <div class="content-card">
            <h3>🌊 La regla de oro: suspender el juicio</h3>
            <blockquote class="book-quote" style="background:#e3f2fd;border-left:4px solid #1565c0;padding:12px 16px;border-radius:6px;">"El objetivo en la etapa de opciones no es encontrar la respuesta correcta, sino generar y enumerar el máximo número posible de cursos de acción alternativos."</blockquote>
            <p>Como en el brainstorming: <strong>ninguna opción se descarta en esta etapa</strong>, por loca que parezca. Ya habrá tiempo de evaluar en Will.</p>
        </div>

        <div class="content-card">
            <h3>🔓 Romper los supuestos limitantes</h3>
            <p>La gente se autolimita con supuestos no declarados. El coach los desafía:</p>
            <ul class="concept-list">
                <li><em>"¿Qué harías si tuvieras presupuesto ilimitado?"</em></li>
                <li><em>"¿Qué harías si no pudieras fracasar?"</em></li>
                <li><em>"¿Qué harías si tuvieras el poder de decidir sin pedir permiso?"</em></li>
                <li><em>"¿Qué harías si empezaras de cero, sin historia previa?"</em></li>
                <li><em>"¿Qué harías si fueras tu propio jefe?"</em></li>
            </ul>
            <p>Estas preguntas revelan opciones que el coachee había descartado <em>antes de considerarlas</em>. A menudo una de esas opciones "imposibles" resulta viable con matices.</p>
        </div>

        <div class="content-card tip">
            <h3>🧠 El principio de "¿y qué más?"</h3>
            <p>Esta es la pregunta más usada en la etapa O. Secuencia típica:</p>
            <ul class="concept-list">
                <li>Coach: "¿Qué podrías hacer?"</li>
                <li>Coachee: "Hablar con Juan." → <em>Opción 1.</em></li>
                <li>Coach: "¿Y qué más?"</li>
                <li>Coachee: "Escribir un correo al director." → <em>Opción 2.</em></li>
                <li>Coach: "¿Y qué más?"</li>
                <li>Coachee: "Pedir reunión con el equipo." → <em>Opción 3.</em></li>
                <li>Coach: "¿Y qué más?"</li>
                <li>Coachee: "Mmm... podría esperar dos semanas a ver qué pasa." → <em>Opción 4.</em></li>
                <li>Coach: "¿Y qué más?"</li>
                <li>Coachee: "No sé... quizá renunciar al proyecto." → <em>Opción 5, la inesperada.</em></li>
            </ul>
            <p>Las primeras 3 opciones son las obvias. A partir de la 4ª empieza la creatividad real. Por eso los coaches experimentados no se conforman con 2-3 opciones.</p>
        </div>

        <div class="content-card">
            <h3>🎭 Pedir permiso para sugerir</h3>
            <p>A veces el coach tiene una opción que el coachee no ha visto. ¿Puede sugerirla? <strong>Sí, con permiso</strong>:</p>
            <blockquote class="book-quote" style="background:#fff3e0;border-left:4px solid #e65100;padding:12px 16px;border-radius:6px;">"¿Te ayudaría que añada una opción más a tu lista?"</blockquote>
            <p>Si el coachee dice sí, la sugieres como UNA opción más entre las suyas — no como LA respuesta. Y luego preguntas: <em>"¿Qué piensas de esa opción?"</em>. La decisión sigue siendo del coachee.</p>
        </div>

        <div class="content-card">
            <h3>⚖️ Evaluar las opciones (al final de O)</h3>
            <p>Cuando el coachee se ha quedado sin ideas nuevas, pasas a evaluar. Para cada opción:</p>
            <ul class="concept-list">
                <li>¿Qué beneficios trae?</li>
                <li>¿Qué costos o riesgos implica?</li>
                <li>¿Qué tan fácil/difícil es de implementar?</li>
                <li>¿Cuánto te acerca al objetivo?</li>
                <li>¿Qué tan alineada está con tus valores?</li>
            </ul>
            <p>Una tabla sencilla de pros/contras ayuda a visualizar. El coach pregunta; no decide.</p>
        </div>

        <div class="content-card">
            <h3>📋 Preguntas clave para la etapa O</h3>
            <ul class="concept-list">
                <li>¿Qué opciones tienes?</li>
                <li>¿Qué más podrías hacer?</li>
                <li>¿Qué harías si tuvieras más tiempo/dinero/poder?</li>
                <li>¿Qué te ha funcionado en situaciones parecidas?</li>
                <li>¿Qué le aconsejarías a alguien en tu situación?</li>
                <li>¿Qué haría tu mentor/tu héroe en esta situación?</li>
                <li>¿Qué opción es más divertida? ¿más atrevida? ¿más segura?</li>
                <li>Si solo pudieras elegir una, ¿cuál sería?</li>
            </ul>
        </div>

        ${quizBlock('q_m4l4', '🎯 ¿Cuál es la regla principal en la etapa de Opciones?', [
            {text: 'Elegir rápidamente la mejor opción para ahorrar tiempo', correct: false},
            {text: 'Generar la mayor cantidad posible de opciones sin juzgarlas todavía', correct: true},
            {text: 'El coach debe proponer las opciones porque tiene más experiencia', correct: false},
            {text: 'Descartar opciones poco realistas desde el inicio', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm4l5', module: 'Módulo 4 · El modelo GROW', tag: 'tag-module', tagLabel: 'MÓDULO 4',
        title: 'W — Will: voluntad y compromiso',
        subtitle: 'Capítulo 13 — De la intención a la acción',
        content: hero(heroGradients.m4, 'LECCIÓN 12', 'W — Will: ¿qué hacer? — Cap. 13') + `
        ${note('Will es donde toda sesión se juega. Sin un compromiso claro y medible de acción, todo lo anterior fue una conversación agradable pero inútil. Esta lección te da las preguntas que convierten reflexión en resultados.')}

        ${videoLink('¿Cómo hacer un plan de acción de coaching?', 'VJUKBSrDO2w')}

        ${realImg('https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=800', 'Firma de compromiso', 'Will no es solo "qué vas a hacer". Es: qué, cuándo, cómo, quién más, y cuánta voluntad real tienes de hacerlo')}

        <div class="content-card">
            <h3>📝 Las 5 preguntas maestras de Will</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.95em;margin:12px 0;">
                <tr style="background:#1b5e20;color:white;"><td style="padding:14px;border:1px solid #ddd;" width="25%"><strong>1. ¿Qué harás?</strong></td><td style="padding:14px;border:1px solid #ddd;">Acción específica. No "mejorar la comunicación" sino "enviar un email a Ana el lunes".</td></tr>
                <tr><td style="padding:14px;border:1px solid #ddd;"><strong>2. ¿Cuándo lo harás?</strong></td><td style="padding:14px;border:1px solid #ddd;">Fecha y hora específicas. Sin fecha, no hay compromiso real.</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:14px;border:1px solid #ddd;"><strong>3. ¿Esta acción te lleva al objetivo?</strong></td><td style="padding:14px;border:1px solid #ddd;">Verificación. A veces las acciones no se alinean con el objetivo planteado en G.</td></tr>
                <tr><td style="padding:14px;border:1px solid #ddd;"><strong>4. ¿Qué obstáculos podrías encontrar?</strong></td><td style="padding:14px;border:1px solid #ddd;">Anticipar problemas. ¿Cómo vas a manejarlos?</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:14px;border:1px solid #ddd;"><strong>5. ¿Del 1 al 10, qué tanto te comprometes?</strong></td><td style="padding:14px;border:1px solid #ddd;">La pregunta reveladora.</td></tr>
            </table>
        </div>

        <div class="content-card">
            <h3>🔟 La pregunta que revela todo: "Del 1 al 10"</h3>
            <p>Esta es una de las preguntas más potentes del coaching:</p>
            <blockquote class="book-quote" style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px 16px;border-radius:6px;">"En una escala del 1 al 10, donde 10 es 'absolutamente seguro de que lo haré' y 1 es 'muy improbable que lo haga', ¿qué número me das?"</blockquote>
            <p>Si responde <strong>8 o más</strong> → vas por buen camino.</p>
            <p>Si responde <strong>entre 5 y 7</strong> → pregunta: <em>"¿Qué tendría que cambiar para que fuera un 9?"</em>. A menudo revela un obstáculo o una parte del compromiso que estaba oculta.</p>
            <p>Si responde <strong>4 o menos</strong> → el compromiso es falso. Vuelve a G o a O. Algo no está bien.</p>
        </div>

        <div class="content-card tip">
            <h3>🎭 La diferencia entre "lo voy a intentar" y "lo voy a hacer"</h3>
            <p>Presta atención al lenguaje del coachee en Will:</p>
            <ul class="concept-list">
                <li><strong>"Voy a intentar..."</strong> → hay una salida de emergencia prevista. Bajo compromiso.</li>
                <li><strong>"Quizás haga..."</strong> → condicional. Muy bajo compromiso.</li>
                <li><strong>"Debería..."</strong> → obligación impuesta, no propia. Nulo compromiso.</li>
                <li><strong>"Haré..."</strong> → declaración comprometida. Alto compromiso.</li>
                <li><strong>"Me comprometo a..."</strong> → máximo compromiso.</li>
            </ul>
            <p>El coach puede devolver: <em>"Dijiste 'lo voy a intentar'. ¿Qué pasaría si dijeras 'lo voy a hacer'?"</em>.</p>
        </div>

        <div class="content-card">
            <h3>🧭 GROW para dar feedback</h3>
            <p>Whitmore dedica parte del capítulo 13 a usar GROW como marco para dar retroalimentación. En vez del tradicional feedback jefe→subordinado:</p>
            <ol>
                <li><strong>G</strong> — ¿Cuál era tu objetivo en esta tarea?</li>
                <li><strong>R</strong> — ¿Qué pasó realmente? ¿Cuál fue el resultado?</li>
                <li><strong>O</strong> — ¿Qué podrías haber hecho diferente? ¿Qué puedes hacer ahora?</li>
                <li><strong>W</strong> — ¿Qué vas a hacer a partir de aquí?</li>
            </ol>
            <p>Este feedback convierte al subordinado en agente activo de su mejora, no en receptor pasivo de críticas.</p>
        </div>

        <div class="content-card">
            <h3>🤝 Responsabilidad ante un tercero</h3>
            <p>Para aumentar el compromiso, el coach puede preguntar:</p>
            <ul class="concept-list">
                <li>¿A quién más le vas a contar este compromiso?</li>
                <li>¿Cómo te vas a recordar esta acción?</li>
                <li>¿Cuándo nos vemos para revisar qué pasó?</li>
            </ul>
            <p>Compromisos dichos en voz alta a alguien se cumplen más que compromisos silenciosos.</p>
        </div>

        <div class="content-card">
            <h3>🔒 Cerrar la sesión: el resumen del coachee</h3>
            <p>Antes de terminar, pide al coachee que resuma:</p>
            <blockquote class="book-quote" style="background:#fff3e0;border-left:4px solid #e65100;padding:12px 16px;border-radius:6px;">"¿Puedes resumir con tus palabras qué vas a hacer, cuándo y cómo?"</blockquote>
            <p>Si lo resume con claridad → el compromiso está consolidado. Si duda o se enreda → necesitas reforzar el plan.</p>
        </div>

        ${quizBlock('q_m4l5', '🎯 ¿Cuál es la pregunta más reveladora del nivel de compromiso en Will?', [
            {text: '¿Estás seguro de que lo harás?', correct: false},
            {text: '¿Por qué lo harías?', correct: false},
            {text: 'En una escala del 1 al 10, ¿qué tanto te comprometes a hacerlo?', correct: true},
            {text: '¿Necesitas ayuda?', correct: false}
        ])}
        `
    });

    // ==============================================================
    // MÓDULO 5 — SENTIDO Y PROPÓSITO (Cap. 14)
    // ==============================================================
    C.lessons.push({
        id: 'm5l1', module: 'Módulo 5 · Sentido y propósito', tag: 'tag-module', tagLabel: 'MÓDULO 5',
        title: 'Coaching para el sentido y el propósito',
        subtitle: 'Capítulo 14 — La nueva frontera del coaching',
        content: hero(heroGradients.m5, 'LECCIÓN 13', 'Coaching para el sentido y el propósito — Cap. 14') + `
        ${note('Hasta aquí el coaching ha sido táctico: objetivos concretos, acciones medibles. Pero los grandes coaches llegan un nivel más profundo: el sentido. "¿Para qué hago lo que hago?" Esta lección te lleva de coach técnico a coach transformacional.')}

        ${videoLink('Viktor Frankl: El sentido, el propósito y su importancia', 'hJgB90qgDaI')}

        ${realImg('https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800', 'Persona contemplando horizonte', 'Viktor Frankl dijo: "Quien tiene un porqué, puede soportar casi cualquier cómo". El propósito es la energía infinita del coaching')}

        <div class="content-card">
            <h3>🌟 La crisis de sentido moderna</h3>
            <p>Whitmore observa que tras décadas de éxito material, cada vez más profesionales se preguntan: <em>"¿Para qué estoy haciendo esto?"</em>. Incluso directivos con salarios altos reportan un vacío existencial.</p>
            <p>Performance Consultants lo llama <strong>"la crisis del 40%"</strong>: porcentaje promedio de potencial que la gente aporta al trabajo. El otro 60% se pierde, y gran parte de esa pérdida es por <strong>falta de sentido</strong>.</p>
        </div>

        <div class="content-card">
            <h3>🧗 La pirámide de Maslow revisitada</h3>
            <p>Maslow identificó 5 niveles de necesidades humanas. En coaching organizacional:</p>
            <table style="width:100%;border-collapse:collapse;font-size:0.92em;margin:12px 0;">
                <tr style="background:#e65100;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>5. Autorrealización</strong></td><td style="padding:10px;border:1px solid #ddd;">Sentido, propósito, trascendencia. Aquí vive el coaching avanzado.</td></tr>
                <tr style="background:#f57c00;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>4. Estima</strong></td><td style="padding:10px;border:1px solid #ddd;">Reconocimiento, logro. Cubierto por buen feedback.</td></tr>
                <tr style="background:#ff9800;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>3. Sociales</strong></td><td style="padding:10px;border:1px solid #ddd;">Pertenencia, equipo. Cultura colaborativa.</td></tr>
                <tr style="background:#ffb74d;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>2. Seguridad</strong></td><td style="padding:10px;border:1px solid #ddd;">Estabilidad, contrato. Prerrequisito.</td></tr>
                <tr style="background:#ffcc80;"><td style="padding:10px;border:1px solid #ddd;"><strong>1. Fisiológicas</strong></td><td style="padding:10px;border:1px solid #ddd;">Salario, condiciones básicas. Higiene.</td></tr>
            </table>
            <p>El coaching tradicional trabaja niveles 2-4. El coaching para el sentido opera en el nivel 5 — donde está el rendimiento extraordinario.</p>
        </div>

        <div class="content-card tip">
            <h3>🎯 Las 7 preguntas del propósito</h3>
            <ol>
                <li>¿Qué te haría saltar de la cama emocionado cada mañana?</li>
                <li>¿Qué harías aunque no te pagaran por hacerlo?</li>
                <li>Si pudieras arreglar una cosa del mundo, ¿cuál sería?</li>
                <li>¿Qué actividades te hacen perder la noción del tiempo?</li>
                <li>¿En qué eres excepcionalmente bueno sin esfuerzo?</li>
                <li>¿Qué legado quieres dejar?</li>
                <li>Si tuvieras 1 año de vida, ¿a qué le dedicarías el tiempo?</li>
            </ol>
            <p>Estas preguntas no son para una sesión rápida — requieren espacio y silencio. Pero una sola de ellas bien trabajada puede transformar la carrera del coachee.</p>
        </div>

        <div class="content-card">
            <h3>🔗 Alinear propósito individual y organizacional</h3>
            <p>Cuando el propósito personal de un empleado se alinea con el propósito de la organización, ocurre magia:</p>
            <ul class="concept-list">
                <li>El trabajo deja de ser una obligación y se convierte en vocación.</li>
                <li>La motivación viene de adentro, no de incentivos externos.</li>
                <li>El empleado trae su mejor versión sin necesidad de supervisión.</li>
                <li>La productividad sube sin que nadie empuje.</li>
            </ul>
            <p>El trabajo del líder-coach es <strong>ayudar a cada persona a encontrar esa intersección</strong>.</p>
        </div>

        <div class="content-card">
            <h3>📖 Viktor Frankl y la logoterapia</h3>
            <p>El psiquiatra vienés Viktor Frankl sobrevivió a Auschwitz observando un patrón: los prisioneros que tenían un <em>porqué</em> — un propósito más allá del sufrimiento — sobrevivían. Los que no, morían física o espiritualmente.</p>
            <blockquote class="book-quote" style="background:#e3f2fd;border-left:4px solid #1565c0;padding:12px 16px;border-radius:6px;">"Quien tiene un porqué, puede soportar casi cualquier cómo."
<div style="text-align:right;font-style:normal;font-weight:bold;margin-top:8px;">— Friedrich Nietzsche, citado por Frankl</div></blockquote>
            <p>Frankl creó la <strong>logoterapia</strong>: psicoterapia centrada en el sentido. Su libro <em>El hombre en busca de sentido</em> es lectura complementaria esencial para cualquier coach.</p>
        </div>

        <blockquote class="book-quote" style="background:#fff3e0;border-left:4px solid #e65100;padding:14px 18px;border-radius:6px;font-style:italic;">"Vivimos en una era en que la humanidad y la comunidad son tan importantes como los resultados económicos. Y sobre estos cimientos se construye una filosofía a largo plazo."
<div style="text-align:right;font-style:normal;font-weight:bold;margin-top:8px;">— John McFarlane (Prólogo)</div></blockquote>

        ${quizBlock('q_m5l1', '🎯 Según Viktor Frankl (citado por Whitmore), ¿qué permite soportar las dificultades más extremas?', [
            {text: 'Una mente positiva y optimista', correct: false},
            {text: 'Tener un porqué — un propósito o sentido que trascienda la situación', correct: true},
            {text: 'Los incentivos económicos', correct: false},
            {text: 'El apoyo social exclusivamente', correct: false}
        ])}
        `
    });


    // ==============================================================
    // MÓDULO 6 — APLICACIONES DEL COACHING (Caps. 15-18)
    // ==============================================================
    C.lessons.push({
        id: 'm6l1', module: 'Módulo 6 · Aplicaciones', tag: 'tag-module', tagLabel: 'MÓDULO 6',
        title: 'Sesiones formales de coaching ejecutivo',
        subtitle: 'Capítulo 15 — El formato estándar de la ICF',
        content: hero(heroGradients.m6, 'LECCIÓN 14', 'Coaching ejecutivo formal — Cap. 15') + `
        ${note('Hasta ahora hemos visto coaching "informal" — el estilo de liderazgo del día a día. Ahora pasamos al coaching formal: sesiones programadas, con contrato, con un coach certificado. Este capítulo es esencial si quieres ejercer como coach profesional.')}

        ${videoLink('Ejemplo: sesión inicial de coaching ejecutivo', 'UXDq-P3d9mI')}

        ${realImg('https://images.unsplash.com/photo-1560264280-88b68371db39?w=800', 'Sesión ejecutiva', 'El coaching ejecutivo formal es un proceso estructurado de 6-12 sesiones con objetivos claros y métricas de éxito')}

        <div class="content-card">
            <h3>📋 Estructura típica de un proceso de coaching ejecutivo</h3>
            <ol>
                <li><strong>Contratación (1 sesión)</strong> — Tres partes: coach, coachee y sponsor (la empresa que paga). Acuerdos de confidencialidad, objetivos, duración, frecuencia.</li>
                <li><strong>Chemistry call (30 min)</strong> — Coach y coachee se conocen. ¿Hay química? Si no hay, mejor no empezar.</li>
                <li><strong>Evaluación inicial (1-2 sesiones)</strong> — Assessment 360°, valores, fortalezas, objetivos de desarrollo.</li>
                <li><strong>Sesiones de coaching (6-10 sesiones)</strong> — 60-90 minutos cada 2-3 semanas. Aplicación de GROW.</li>
                <li><strong>Revisión intermedia (con sponsor)</strong> — Sin romper confidencialidad: progreso general.</li>
                <li><strong>Cierre (1 sesión)</strong> — Balance, aprendizajes, próximos pasos sin coach.</li>
                <li><strong>Follow-up (3-6 meses después)</strong> — ¿Se sostuvo el cambio?</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>⚖️ Los 3 vínculos del coaching ejecutivo</h3>
            <p>A diferencia del coaching de vida, el coaching ejecutivo involucra tres partes:</p>
            <ul class="concept-list">
                <li><strong>Coach</strong> — externo o interno, certificado (ICF recomendado).</li>
                <li><strong>Coachee</strong> — el ejecutivo que recibe coaching.</li>
                <li><strong>Sponsor</strong> — la empresa (típicamente el jefe directo o RRHH) que paga.</li>
            </ul>
            <p>La <strong>confidencialidad</strong> es innegociable: lo que dice el coachee no llega al sponsor. Solo se comparte el progreso general acordado entre las 3 partes.</p>
        </div>

        <div class="content-card tip">
            <h3>📝 Estructura típica de una sesión de 60 minutos</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.92em;margin:12px 0;">
                <tr style="background:#b71c1c;color:white;"><td style="padding:10px;border:1px solid #ddd;" width="20%"><strong>Min 0-5</strong></td><td style="padding:10px;border:1px solid #ddd;">Check-in: ¿cómo llegas? Revisión de compromisos de la sesión anterior.</td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;"><strong>Min 5-10</strong></td><td style="padding:10px;border:1px solid #ddd;">G — ¿Qué quieres trabajar hoy? Objetivo de la sesión.</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:10px;border:1px solid #ddd;"><strong>Min 10-25</strong></td><td style="padding:10px;border:1px solid #ddd;">R — Explorar la realidad actual del tema.</td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;"><strong>Min 25-40</strong></td><td style="padding:10px;border:1px solid #ddd;">O — Generar y evaluar opciones.</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:10px;border:1px solid #ddd;"><strong>Min 40-55</strong></td><td style="padding:10px;border:1px solid #ddd;">W — Compromiso específico. Escala 1-10.</td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;"><strong>Min 55-60</strong></td><td style="padding:10px;border:1px solid #ddd;">Cierre — ¿Qué te llevas? ¿Qué ha sido útil?</td></tr>
            </table>
        </div>

        <div class="content-card">
            <h3>🎓 Certificación ICF: los 11 core competencies</h3>
            <p>La International Coach Federation (ICF) define 8 competencias básicas del coach certificado:</p>
            <ol>
                <li>Demuestra práctica ética</li>
                <li>Encarna la mentalidad de coaching</li>
                <li>Establece y mantiene acuerdos</li>
                <li>Cultiva confianza y seguridad</li>
                <li>Mantiene presencia</li>
                <li>Escucha activamente</li>
                <li>Genera conciencia</li>
                <li>Facilita crecimiento del coachee</li>
            </ol>
            <p>Niveles de certificación ICF: <strong>ACC</strong> (100h), <strong>PCC</strong> (500h), <strong>MCC</strong> (2.500h).</p>
        </div>

        ${quizBlock('q_m6l1', '🎯 En coaching ejecutivo, ¿cuál es la regla innegociable del vínculo de 3 partes?', [
            {text: 'El sponsor puede pedir toda la información al coach', correct: false},
            {text: 'La confidencialidad: lo que dice el coachee no llega al sponsor, solo se comparte el progreso general acordado', correct: true},
            {text: 'El coachee debe reportar al sponsor después de cada sesión', correct: false},
            {text: 'El coach decide los objetivos sin el coachee', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm6l2', module: 'Módulo 6 · Aplicaciones', tag: 'tag-module', tagLabel: 'MÓDULO 6',
        title: 'Coaching para equipos de alto rendimiento',
        subtitle: 'Capítulo 16 — GROW al cuadrado',
        content: hero(heroGradients.m6, 'LECCIÓN 15', 'Equipos de alto rendimiento — Cap. 16') + `
        ${note('Coachear a un individuo es difícil. Coachear a un equipo entero es otra disciplina. Un equipo tiene dinámicas propias: conflictos latentes, alianzas tácitas, historia compartida. El coach de equipo navega todo eso sin perder la estructura GROW.')}

        ${videoLink('Tengo un equipo, ¿y ahora qué? — Rubén Duque (TEDx)', 'fMRDUmg_3yM')}

        ${realImg('https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800', 'Equipo colaborando', 'Un equipo de alto rendimiento no es la suma de individuos brillantes. Es un sistema donde el todo supera a las partes')}

        <div class="content-card">
            <h3>🔬 Las 4 etapas de un equipo (Tuckman)</h3>
            <p>Whitmore usa el modelo clásico de Bruce Tuckman:</p>
            <table style="width:100%;border-collapse:collapse;font-size:0.92em;margin:12px 0;">
                <tr style="background:#b71c1c;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>1. Forming (formación)</strong></td><td style="padding:10px;border:1px solid #ddd;">Se conocen. Educados, cautos. Bajo rendimiento.</td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;"><strong>2. Storming (conflicto)</strong></td><td style="padding:10px;border:1px solid #ddd;">Surgen desacuerdos, luchas de poder. Etapa crítica: muchos equipos se atascan aquí.</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:10px;border:1px solid #ddd;"><strong>3. Norming (normalización)</strong></td><td style="padding:10px;border:1px solid #ddd;">Acuerdos, roles claros. Buen rendimiento.</td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;"><strong>4. Performing (rendimiento)</strong></td><td style="padding:10px;border:1px solid #ddd;">Alto rendimiento, sinergia. La mayoría de los equipos nunca llega aquí.</td></tr>
            </table>
            <p>El coaching de equipo ayuda a atravesar "storming" sin romperse y a consolidar "performing".</p>
        </div>

        <div class="content-card">
            <h3>🏗️ Los 5 elementos del equipo de alto rendimiento (Lencioni)</h3>
            <ol>
                <li><strong>Confianza</strong> — Capaces de mostrar vulnerabilidad sin miedo.</li>
                <li><strong>Conflicto productivo</strong> — Debates ideológicos, no ataques personales.</li>
                <li><strong>Compromiso</strong> — Tras el debate, todos apoyan la decisión.</li>
                <li><strong>Responsabilidad mutua</strong> — Los miembros se piden cuentas entre ellos.</li>
                <li><strong>Atención a resultados</strong> — Ego del equipo > ego individual.</li>
            </ol>
            <p>Si falta cualquier capa, las de arriba se debilitan. El coaching trabaja la base: confianza.</p>
        </div>

        <div class="content-card tip">
            <h3>🔧 GROW para equipos: preguntas adaptadas</h3>
            <ul class="concept-list">
                <li><strong>G:</strong> ¿Cuál es nuestro objetivo común? ¿Estamos todos de acuerdo en qué queremos lograr?</li>
                <li><strong>R:</strong> ¿Dónde estamos ahora como equipo? ¿Qué funciona? ¿Qué no? ¿Cómo nos vemos unos a otros?</li>
                <li><strong>O:</strong> ¿Qué podríamos hacer diferente? ¿Qué ideas tenemos? (lluvia grupal)</li>
                <li><strong>W:</strong> ¿Qué vamos a hacer? ¿Quién hace qué? ¿Para cuándo? ¿Cómo nos pediremos cuentas?</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>💥 El conflicto productivo</h3>
            <p>Los equipos mediocres evitan el conflicto (harmony teams). Los equipos de alto rendimiento lo buscan:</p>
            <ul class="concept-list">
                <li><strong>Conflicto destructivo:</strong> ataques personales, política, sabotaje.</li>
                <li><strong>Conflicto productivo:</strong> choque de ideas, debate apasionado, desafío mutuo.</li>
            </ul>
            <p>El coach de equipo enseña a distinguir y a practicar el conflicto productivo. Regla de oro: <em>"Duro con los temas, blando con las personas."</em></p>
        </div>

        <div class="content-card">
            <h3>🎯 Estudio: el equipo más productivo del mundo</h3>
            <p>Google estudió 180 equipos internos durante 2 años (Proyecto Aristotle). ¿Qué distinguía a los mejores? <strong>Una sola cosa: la seguridad psicológica.</strong> No el talento individual, no la diversidad, no el salario. La capacidad de decir "no sé", "me equivoqué", "tengo una idea rara" sin miedo.</p>
            <p>El coaching es la herramienta más directa para construir seguridad psicológica.</p>
        </div>

        ${quizBlock('q_m6l2', '🎯 Según el estudio Aristotle de Google, ¿cuál es el factor #1 de los equipos de alto rendimiento?', [
            {text: 'El talento individual de los miembros', correct: false},
            {text: 'La diversidad del equipo', correct: false},
            {text: 'La seguridad psicológica — poder decir "no sé" o "me equivoqué" sin miedo', correct: true},
            {text: 'Los incentivos económicos', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm6l3', module: 'Módulo 6 · Aplicaciones', tag: 'tag-module', tagLabel: 'MÓDULO 6',
        title: 'El coaching y la filosofía Lean',
        subtitle: 'Capítulo 17 — Mejora continua + coaching = kaizen real',
        content: hero(heroGradients.m6, 'LECCIÓN 16', 'Coaching y Lean — Cap. 17') + `
        ${note('Lean es la filosofía de mejora continua nacida en Toyota. En teoría, su motor es kaizen (los trabajadores sugieren mejoras constantes). En la práctica, sin coaching, Lean se vuelve una lista de checklists burocráticos. Esta lección es por qué Lean y coaching son hermanos.')}

        ${videoLink('Lean vs. Kaizen — Las raíces del Sistema Productivo Total', 'L4wpdSbBlWE')}

        ${realImg('https://images.unsplash.com/photo-1504164268059-49c3a4e2e38c?w=800', 'Fábrica Toyota Lean', 'Toyota no solo inventó Lean: inventó el estilo de liderazgo que hace que Lean funcione — un estilo basado en coaching')}

        <div class="content-card">
            <h3>🏭 ¿Qué es Lean?</h3>
            <p>El Sistema de Producción Toyota (TPS), conocido como <strong>Lean Manufacturing</strong>, se basa en 5 principios:</p>
            <ol>
                <li><strong>Valor</strong> — definido desde la perspectiva del cliente.</li>
                <li><strong>Cadena de valor</strong> — identificar pasos que crean valor; eliminar los que no (muda, muri, mura).</li>
                <li><strong>Flujo continuo</strong> — eliminar cuellos de botella.</li>
                <li><strong>Producción pull</strong> — producir solo lo que el cliente demanda.</li>
                <li><strong>Perfección (kaizen)</strong> — mejora continua involucrando a todos.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>🤝 El vínculo invisible: Lean sin coaching no es Lean</h3>
            <p>Los directivos occidentales que copiaron Lean a menudo fracasaron. ¿Por qué? Porque copiaron las herramientas (kanban, 5S, value stream mapping) pero no la cultura subyacente.</p>
            <blockquote class="book-quote" style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px 16px;border-radius:6px;">"Lean exige que los líderes hagan preguntas en vez de dar órdenes. Exige que confíen en que los operarios saben mejor que nadie cómo mejorar su trabajo."</blockquote>
            <p>Eso es coaching aplicado a la manufactura. Sin líder-coach, kaizen muere.</p>
        </div>

        <div class="content-card tip">
            <h3>🎯 Los 3 "genchi genbutsu" + coaching</h3>
            <p>Toyota tiene un principio: <em>"Ve tú mismo" (genchi genbutsu)</em>. El líder no decide desde la oficina. Va al gemba (el lugar donde se hace el trabajo) y pregunta:</p>
            <ul class="concept-list">
                <li>¿Qué estás haciendo? (hechos)</li>
                <li>¿Qué problemas tienes? (realidad)</li>
                <li>¿Qué harías diferente si pudieras? (opciones)</li>
                <li>¿Cómo te puedo apoyar? (will)</li>
            </ul>
            <p>Es GROW aplicado al piso de la fábrica. Y transforma empleados pasivos en solucionadores activos.</p>
        </div>

        <div class="content-card">
            <h3>🔄 Kaizen como hábito, no proyecto</h3>
            <p>Kaizen no es "tener un proyecto de mejora cada año". Es hacer una pequeña mejora <em>cada día, cada persona</em>. En Toyota:</p>
            <ul class="concept-list">
                <li>Cada trabajador propone ~2 sugerencias por mes.</li>
                <li>~90% se implementan (mínimas pero acumulativas).</li>
                <li>Resultado: millones de mejoras por año.</li>
            </ul>
            <p>Este flujo masivo solo ocurre si los trabajadores sienten <strong>psicológicamente seguros</strong> para proponer. Coaching → seguridad → kaizen → alto rendimiento.</p>
        </div>

        ${quizBlock('q_m6l3', '🎯 ¿Por qué fracasan muchas implementaciones occidentales de Lean según Whitmore?', [
            {text: 'Porque las herramientas Lean son muy técnicas', correct: false},
            {text: 'Porque copian las herramientas pero no la cultura de coaching que hace posible kaizen', correct: true},
            {text: 'Porque los empleados occidentales son menos disciplinados', correct: false},
            {text: 'Porque Lean solo funciona en manufactura', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm6l4', module: 'Módulo 6 · Aplicaciones', tag: 'tag-module', tagLabel: 'MÓDULO 6',
        title: 'Coaching para la seguridad laboral',
        subtitle: 'Capítulo 18 — Cuando dar órdenes cuesta vidas',
        content: hero(heroGradients.m6, 'LECCIÓN 17', 'Coaching y seguridad laboral — Cap. 18') + `
        ${note('En ambientes donde un error mata (minería, construcción, aviación, química), la seguridad tradicional es: "Normas estrictas + castigos severos". No funciona. Las normas se cumplen cuando el inspector mira. El coaching crea una cultura donde la seguridad es de todos, todo el tiempo.')}

        ${videoLink('Liderazgo en Seguridad Laboral: liderazgo compartido', '_qM999yYa78')}

        ${realImg('https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800', 'Trabajador industrial con equipo de seguridad', 'La seguridad no se impone: se construye cuando cada persona entiende el "por qué" de cada norma y se apropia de ella')}

        <div class="content-card">
            <h3>⚠️ El problema del enfoque tradicional</h3>
            <p>El modelo clásico de seguridad industrial:</p>
            <ul class="concept-list">
                <li>Manual de 300 páginas con normas.</li>
                <li>Capacitación una vez al año.</li>
                <li>Sanciones para quien incumple.</li>
                <li>Inspectores que vigilan.</li>
            </ul>
            <p>Resultado: cumplimiento performativo. Los trabajadores se ponen el casco cuando el inspector pasa y se lo quitan cuando se va. Los accidentes siguen ocurriendo.</p>
        </div>

        <div class="content-card">
            <h3>🎯 El enfoque Whitmore: coaching sobre seguridad</h3>
            <p>Whitmore cuenta cómo asesoró a un cuerpo policial sobre seguridad con armas de fuego. Le preguntaron: <em>"¿Cómo dejamos la responsabilidad de cumplir normas absolutas en manos de los agentes?"</em></p>
            <p>Su propuesta revolucionaria: <strong>en vez de presentar las normas, empiecen con un debate coacheado</strong> donde los agentes extraigan y acuerden las normas por sí mismos.</p>
            <blockquote class="book-quote" style="background:#e3f2fd;border-left:4px solid #1565c0;padding:12px 16px;border-radius:6px;">"Lo más probable es que las normas que ellos propongan sean muy parecidas a las institucionales. Pero ahora entenderán el porqué, se identificarán con ellas y se harán mucho más responsables."</blockquote>
        </div>

        <div class="content-card tip">
            <h3>🔐 Las 5 conversaciones de coaching de seguridad</h3>
            <ol>
                <li><strong>Antes del trabajo:</strong> ¿Qué riesgos ves? ¿Cómo los vas a manejar?</li>
                <li><strong>Durante:</strong> ¿Qué está cambiando? ¿Qué nuevo riesgo apareció?</li>
                <li><strong>Después (sin incidente):</strong> ¿Qué funcionó? ¿Qué aprendiste?</li>
                <li><strong>Después (con incidente menor):</strong> ¿Qué pasó? ¿Qué harías diferente? (sin culpa)</li>
                <li><strong>Cuando alguien ve a otro en riesgo:</strong> ¿Qué estás viendo? ¿Qué te preocupa? (peer coaching)</li>
            </ol>
            <p>Esta última es clave: crea un tejido de cuidado mutuo donde cada trabajador es coach de seguridad de sus compañeros.</p>
        </div>

        <div class="content-card">
            <h3>📊 Los números no mienten</h3>
            <p>Empresas que aplican coaching de seguridad reportan:</p>
            <ul class="concept-list">
                <li>Reducción de 40-60% en accidentes graves.</li>
                <li>Aumento del reporte voluntario de cuasi-accidentes (lo que permite prevenir incidentes reales).</li>
                <li>Reducción dramática de la rotación en roles peligrosos.</li>
                <li>ROI altísimo: cada accidente evitado ahorra miles a millones.</li>
            </ul>
        </div>

        ${quizBlock('q_m6l4', '🎯 ¿Cuál es la diferencia clave entre el enfoque tradicional y el enfoque de coaching en seguridad laboral?', [
            {text: 'El coaching usa castigos más severos', correct: false},
            {text: 'El coaching involucra a los trabajadores en definir y apropiarse de las normas, generando responsabilidad real', correct: true},
            {text: 'El coaching reemplaza a los inspectores', correct: false},
            {text: 'El coaching es más barato', correct: false}
        ])}
        `
    });

    // ==============================================================
    // MÓDULO 7 — HACER REALIDAD EL POTENCIAL (Caps. 19-23)
    // ==============================================================
    C.lessons.push({
        id: 'm7l1', module: 'Módulo 7 · Hacer realidad el potencial', tag: 'tag-module', tagLabel: 'MÓDULO 7',
        title: 'Medir el ROI del coaching',
        subtitle: 'Capítulo 19 — Cuantificar los beneficios y el rendimiento de la inversión',
        content: hero(heroGradients.m7, 'LECCIÓN 18', 'Medir el ROI del coaching — Cap. 19') + `
        ${note('Durante décadas los directivos preguntaron: "¿Y cómo mido que el coaching funcionó?". Whitmore dedica un capítulo entero a responder. Esta lección te da el método de Performance Consultants para cuantificar el impacto.')}

        ${videoLink('¿Cómo calcular el ROI?', 'avhe8KIuXzs')}

        ${realImg('https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800', 'Dashboard de métricas', 'El coaching no es un gasto: es una inversión. Performance Consultants documenta ROI promedio del 800%')}

        <div class="content-card">
            <h3>💰 El ROI promedio del coaching organizacional</h3>
            <p>Performance Consultants, tras miles de engagements, reporta un <strong>ROI promedio del 800%</strong>. Por cada dólar invertido en coaching, la empresa obtiene 8 en retorno.</p>
            <p>El ICF Global Coaching Study reporta rangos similares: 5x a 7x de retorno en programas bien medidos.</p>
            <blockquote class="book-quote" style="background:#e3f2fd;border-left:4px solid #1565c0;padding:12px 16px;border-radius:6px;">"Ayudar a las inversiones en capital humano a dejar de considerarse un 'coste' y empezar a entenderse como una actividad que genera beneficios y tiene valor real para la empresa."</blockquote>
        </div>

        <div class="content-card">
            <h3>🎯 Los 4 niveles de Kirkpatrick aplicados al coaching</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.92em;margin:12px 0;">
                <tr style="background:#263238;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>Nivel 1 — Reacción</strong></td><td style="padding:10px;border:1px solid #ddd;">¿Les gustó? (NPS, encuestas)</td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;"><strong>Nivel 2 — Aprendizaje</strong></td><td style="padding:10px;border:1px solid #ddd;">¿Qué cambió en su conciencia y habilidades?</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:10px;border:1px solid #ddd;"><strong>Nivel 3 — Conducta</strong></td><td style="padding:10px;border:1px solid #ddd;">¿Cambió su comportamiento en el trabajo? (360° antes/después)</td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;"><strong>Nivel 4 — Resultados</strong></td><td style="padding:10px;border:1px solid #ddd;">¿Cambiaron las métricas de negocio?</td></tr>
            </table>
            <p>El error común: medir solo nivel 1 ("les gustó"). El oro está en nivel 3 (conducta) y nivel 4 (resultados).</p>
        </div>

        <div class="content-card tip">
            <h3>📊 El método Performance Consultants</h3>
            <ol>
                <li><strong>Antes del coaching:</strong> Identificar 2-3 KPIs de negocio que el coachee puede influir directamente. Medir baseline.</li>
                <li><strong>Durante:</strong> Revisar KPIs cada mes. Conectar sesiones con desempeño.</li>
                <li><strong>Después:</strong> Medir KPIs 3 y 6 meses post-coaching.</li>
                <li><strong>Atribución:</strong> Preguntar al coachee: <em>"¿Qué porcentaje de esta mejora atribuyes al coaching?"</em>. Ajustar.</li>
                <li><strong>Conversión:</strong> Traducir mejora a $ (ventas adicionales, costos evitados, tiempo ganado).</li>
                <li><strong>ROI = (Beneficio − Costo) / Costo × 100</strong></li>
            </ol>
        </div>

        <div class="content-card">
            <h3>💎 Beneficios intangibles (difíciles de monetizar pero reales)</h3>
            <ul class="concept-list">
                <li>Reducción de rotación voluntaria.</li>
                <li>Aumento del engagement (escalas tipo Gallup Q12).</li>
                <li>Mejora de la seguridad psicológica en equipos.</li>
                <li>Mayor agilidad ante cambios.</li>
                <li>Cultura de aprendizaje continuo.</li>
                <li>Mejor marca empleadora.</li>
            </ul>
            <p>Muchas empresas miden estos proxies aunque no los conviertan a dólares.</p>
        </div>

        ${quizBlock('q_m7l1', '🎯 Según Performance Consultants, ¿cuál es el ROI promedio del coaching organizacional?', [
            {text: '100% — se recupera la inversión', correct: false},
            {text: '200-300%', correct: false},
            {text: 'Aproximadamente 800% — 8 dólares de retorno por cada dólar invertido', correct: true},
            {text: 'Es imposible de cuantificar', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm7l2', module: 'Módulo 7 · Hacer realidad el potencial', tag: 'tag-module', tagLabel: 'MÓDULO 7',
        title: 'El cambio cultural',
        subtitle: 'Capítulo 20 — Cómo transformar la cultura de una organización con coaching',
        content: hero(heroGradients.m7, 'LECCIÓN 19', 'El cambio cultural — Cap. 20') + `
        ${note('Cambiar la cultura de una empresa es la tarea más difícil del liderazgo. No se hace con memos ni talleres aislados. Se hace con años de coaching sostenido desde arriba. Esta lección es la hoja de ruta.')}

        ${videoLink('Metodologías para el cambio cultural organizacional', 'r_Q-2MqjF3k')}

        ${realImg('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800', 'Equipo en transformación', 'Peter Drucker: "La cultura se come la estrategia para desayunar". Cambiar la cultura es cambiar la empresa')}

        <div class="content-card">
            <h3>🏗️ Los 3 niveles de cambio cultural</h3>
            <ol>
                <li><strong>Artefactos</strong> — lo visible. Oficinas abiertas, código de vestimenta, rituales. Fácil de cambiar pero superficial.</li>
                <li><strong>Valores declarados</strong> — lo que la empresa dice que valora. Misión, visión, "nuestros valores". Medio difícil.</li>
                <li><strong>Asunciones básicas</strong> — lo que realmente se cree (a menudo inconsciente). "Aquí los de arriba deciden." Cambio profundo, años.</li>
            </ol>
            <p>El coaching opera en el nivel 3. Cambiar el nivel 1 es decoración. El cambio real es creer cosas nuevas.</p>
        </div>

        <div class="content-card">
            <h3>🎯 Los 5 pasos del cambio cultural basado en coaching</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.92em;margin:12px 0;">
                <tr style="background:#263238;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>1. Modelar desde arriba</strong></td><td style="padding:10px;border:1px solid #ddd;">El CEO y el C-suite empiezan a actuar como líderes-coach. Sin esto, nada funciona.</td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;"><strong>2. Formar a los managers</strong></td><td style="padding:10px;border:1px solid #ddd;">Capacitar a 500-1000 líderes intermedios en habilidades de coaching.</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:10px;border:1px solid #ddd;"><strong>3. Coaches internos</strong></td><td style="padding:10px;border:1px solid #ddd;">Formar un pool de 20-50 coaches internos certificados que multiplican el efecto.</td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;"><strong>4. Rediseñar procesos</strong></td><td style="padding:10px;border:1px solid #ddd;">Evaluaciones de desempeño, 1-on-1, reuniones: todas con estilo coaching.</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:10px;border:1px solid #ddd;"><strong>5. Medir y ajustar</strong></td><td style="padding:10px;border:1px solid #ddd;">Engagement, NPS interno, rotación, resultados. Ajustar continuamente.</td></tr>
            </table>
        </div>

        <div class="content-card tip">
            <h3>💥 El caso ANZ: 35.000 empleados transformados</h3>
            <p>John McFarlane, CEO del banco australiano ANZ, llevó al banco del último lugar al primer lugar en satisfacción del cliente aplicando coaching a escala masiva:</p>
            <ul class="concept-list">
                <li><strong>Paso 1:</strong> Él mismo recibió coaching durante 2 años.</li>
                <li><strong>Paso 2:</strong> Su C-suite (12 personas) recibió coaching ejecutivo intensivo.</li>
                <li><strong>Paso 3:</strong> Los siguientes 300 líderes fueron capacitados en coaching.</li>
                <li><strong>Paso 4:</strong> Cascada a los 35.000 empleados durante 3 años.</li>
                <li><strong>Resultado:</strong> De último lugar a primer lugar en su industria en 5 años.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>⚠️ Por qué fracasan la mayoría de iniciativas de cambio cultural</h3>
            <ol>
                <li><strong>Se queda en artefactos</strong> — cambian el logo pero no la mentalidad.</li>
                <li><strong>CEO no modela</strong> — "haz lo que digo, no lo que hago".</li>
                <li><strong>Impaciencia</strong> — esperan resultados en 6 meses; el cambio toma 3-5 años.</li>
                <li><strong>Inconsistencia</strong> — cambio de CEO a mitad y se abandona la iniciativa.</li>
                <li><strong>Solo en la superficie</strong> — capacitan sin cambiar sistemas ni incentivos.</li>
            </ol>
        </div>

        <blockquote class="book-quote" style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:14px 18px;border-radius:6px;font-style:italic;">"Liberó el potencial de 35.000 empleados y ANZ pasó de ocupar la última posición a ser el primero en términos de satisfacción del cliente."
<div style="text-align:right;font-style:normal;font-weight:bold;margin-top:8px;">— Tiffany Gaskell sobre el caso ANZ</div></blockquote>

        ${quizBlock('q_m7l2', '🎯 ¿Cuál es el requisito #1 para que un cambio cultural basado en coaching funcione?', [
            {text: 'Un gran presupuesto de capacitación', correct: false},
            {text: 'Que el CEO y el C-suite modelen ellos mismos el estilo coaching desde el inicio', correct: true},
            {text: 'Contratar coaches externos de marca reconocida', correct: false},
            {text: 'Cambiar el organigrama', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm7l3', module: 'Módulo 7 · Hacer realidad el potencial', tag: 'tag-module', tagLabel: 'MÓDULO 7',
        title: 'Las cualidades del liderazgo',
        subtitle: 'Capítulo 21 — El perfil del líder-coach del siglo XXI',
        content: hero(heroGradients.m7, 'LECCIÓN 20', 'Las cualidades del liderazgo — Cap. 21') + `
        ${note('Tras 23 capítulos de técnicas y modelos, Whitmore termina con la pregunta fundamental: ¿qué tipo de persona tiene que ser el líder-coach? No solo qué hace, sino quién es. Este capítulo es introspección pura.')}

        ${videoLink('SÉ UN LÍDER — Las 21 cualidades indispensables', 'bbKWmSZxYmU')}

        ${realImg('https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800', 'Líder en reflexión', 'El líder-coach no es un mesías carismático. Es alguien comprometido con su propio desarrollo continuo')}

        <div class="content-card">
            <h3>🌟 Las 10 cualidades del líder-coach (Whitmore)</h3>
            <ol>
                <li><strong>Autoconciencia profunda</strong> — Conoce sus fortalezas, debilidades, patrones, disparadores emocionales.</li>
                <li><strong>Humildad intelectual</strong> — Sabe que no sabe. Escucha sin ego.</li>
                <li><strong>Curiosidad genuina</strong> — Le fascinan las personas y los sistemas.</li>
                <li><strong>Paciencia</strong> — El cambio real toma años. No empuja el río.</li>
                <li><strong>Empatía real</strong> — Siente desde el marco del otro, no desde el suyo.</li>
                <li><strong>Integridad</strong> — Hace lo que dice. Coherencia entre valores y acciones.</li>
                <li><strong>Vulnerabilidad</strong> — Dice "no sé", "me equivoqué". Modela seguridad psicológica.</li>
                <li><strong>Presencia</strong> — Está aquí, ahora. Sin pantallas, sin multitarea.</li>
                <li><strong>Visión sistémica</strong> — Ve conexiones, no solo problemas aislados.</li>
                <li><strong>Compromiso con el propósito</strong> — Sabe para qué hace lo que hace.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>🎭 El cambio de identidad</h3>
            <p>Whitmore argumenta que convertirse en líder-coach no es aprender una técnica: es cambiar de identidad.</p>
            <table style="width:100%;border-collapse:collapse;font-size:0.92em;margin:12px 0;">
                <tr style="background:#b71c1c;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>Identidad antigua</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Identidad nueva</strong></td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;">"Yo sé y les enseño"</td><td style="padding:10px;border:1px solid #ddd;">"Aprendo con ellos"</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:10px;border:1px solid #ddd;">"Mi valor es tener las respuestas"</td><td style="padding:10px;border:1px solid #ddd;">"Mi valor es hacer las preguntas"</td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;">"Yo lidero, ellos siguen"</td><td style="padding:10px;border:1px solid #ddd;">"Yo facilito, ellos lideran"</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:10px;border:1px solid #ddd;">"Controlar para asegurar"</td><td style="padding:10px;border:1px solid #ddd;">"Confiar para liberar"</td></tr>
            </table>
        </div>

        <div class="content-card tip">
            <h3>🧘 La práctica diaria del líder-coach</h3>
            <ol>
                <li><strong>15 min de silencio al inicio del día</strong> — meditación, journaling, lo que sea. Entrar al día consciente.</li>
                <li><strong>Al menos 3 preguntas potentes antes de cualquier consejo</strong> — regla de oro en reuniones.</li>
                <li><strong>1-on-1 semanales con cada reporte directo</strong> — 30 min, estilo coaching, no control.</li>
                <li><strong>Retrospectiva al final del día</strong> — ¿Cuándo fui coach hoy? ¿Cuándo reaccioné como jefe viejo?</li>
                <li><strong>Coaching propio mensual</strong> — el coach necesita coach. Todo el tiempo.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>🚫 Lo que el líder-coach NO es</h3>
            <ul class="concept-list">
                <li><strong>No es blando</strong> — exige alto rendimiento, solo que lo hace con preguntas, no con gritos.</li>
                <li><strong>No es permisivo</strong> — hay consecuencias claras, límites firmes, estándares altos.</li>
                <li><strong>No es terapeuta</strong> — no resuelve traumas, derriva al profesional cuando corresponde.</li>
                <li><strong>No es sabelotodo amable</strong> — muerde la lengua antes de dar consejos.</li>
                <li><strong>No es perfecto</strong> — admite errores. Precisamente por eso inspira.</li>
            </ul>
        </div>

        ${quizBlock('q_m7l3', '🎯 ¿Cuál es el cambio de identidad clave que describe Whitmore para convertirse en líder-coach?', [
            {text: 'De jefe a amigo de los empleados', correct: false},
            {text: 'De "tener las respuestas" a "hacer las preguntas"', correct: true},
            {text: 'De técnico a administrador', correct: false},
            {text: 'De autocrático a democrático en votaciones', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm7l4', module: 'Módulo 7 · Hacer realidad el potencial', tag: 'tag-module', tagLabel: 'MÓDULO 7',
        title: 'La escalera del aprendizaje',
        subtitle: 'Capítulo 22 — Los 4 escalones de dominar una habilidad',
        content: hero(heroGradients.m7, 'LECCIÓN 21', 'La escalera del aprendizaje — Cap. 22') + `
        ${note('Aprender algo nuevo — incluido el coaching mismo — sigue un patrón. Conocer este patrón te ayuda a no abandonar cuando el progreso parece detenerse. Esta lección es un regalo para cualquier aprendiz.')}

        ${videoLink('La escalera del aprendizaje — Alex Arroyo', '3hf2GSZT3_E')}

        ${realImg('https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800', 'Escalera hacia la luz', 'Todo maestro fue primero un ignorante consciente. Todo experto atravesó la fase de incompetencia consciente — y duele')}

        <div class="content-card">
            <h3>🪜 Los 4 escalones de Noel Burch</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.95em;margin:12px 0;">
                <tr style="background:#b71c1c;color:white;"><td style="padding:14px;border:1px solid #ddd;" width="35%"><strong>1. Incompetencia inconsciente</strong></td><td style="padding:14px;border:1px solid #ddd;">"No sé que no sé." Ignorancia con confianza. "Liderar es fácil, yo ya lidero."</td></tr>
                <tr style="background:#e65100;color:white;"><td style="padding:14px;border:1px solid #ddd;"><strong>2. Incompetencia consciente</strong></td><td style="padding:14px;border:1px solid #ddd;">"Sé que no sé." La caída del pedestal. Doloroso pero necesario. "Ufff, esto es más difícil de lo que pensé."</td></tr>
                <tr style="background:#f9a825;color:white;"><td style="padding:14px;border:1px solid #ddd;"><strong>3. Competencia consciente</strong></td><td style="padding:14px;border:1px solid #ddd;">"Puedo hacerlo, pero me cuesta pensarlo." Funciona con esfuerzo. "Recuerdo preguntar '¿y qué más?' antes de hablar."</td></tr>
                <tr style="background:#2e7d32;color:white;"><td style="padding:14px;border:1px solid #ddd;"><strong>4. Competencia inconsciente</strong></td><td style="padding:14px;border:1px solid #ddd;">"Ya es parte de mí." Automático. "Hago coaching sin darme cuenta de que lo hago."</td></tr>
            </table>
        </div>

        <div class="content-card">
            <h3>😖 El escalón 2 es donde la gente abandona</h3>
            <p>La transición de "no sé que no sé" (cómodo) a "sé que no sé" (incómodo) es el punto donde el 80% de los aprendices abandonan.</p>
            <p>Es por eso que Whitmore dice que <strong>leer este libro no te convertirá en coach</strong>. Te moverá del escalón 1 al 2. Pero cruzar del 2 al 3 requiere <em>práctica persistente</em>. Y del 3 al 4, <em>años</em>.</p>
        </div>

        <div class="content-card tip">
            <h3>🧘 Cómo sobrevivir al escalón 2</h3>
            <ol>
                <li><strong>Espera la incomodidad</strong> — es normal, es el proceso. No es señal de falta de talento.</li>
                <li><strong>Practica con alguien seguro</strong> — un colega, un coach mentor, un compañero de aprendizaje.</li>
                <li><strong>Pide feedback específico</strong> — "¿Qué pregunta podía haber hecho mejor?"</li>
                <li><strong>Graba sesiones</strong> — con permiso. Nada educa más que escucharse.</li>
                <li><strong>No te compares con masters</strong> — compárate con tu yo de hace 3 meses.</li>
                <li><strong>Busca micro-wins</strong> — "hoy resistí dar un consejo". Celebra.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>🔄 La escalera NO es lineal</h3>
            <p>Whitmore advierte: puedes estar en el escalón 4 en una habilidad (ej: escucha activa) y en el escalón 1 en otra (ej: confrontación constructiva). Y en un mal día, puedes retroceder al escalón 2 incluso en habilidades ya dominadas.</p>
            <p>El desarrollo es <strong>espiral, no lineal</strong>. El mejor líder-coach siempre está volviendo al escalón 2 en alguna nueva dimensión.</p>
        </div>

        <div class="content-card">
            <h3>🎯 Aplica la escalera al coaching mismo</h3>
            <p>Haz el ejercicio ahora mismo — dónde estás en:</p>
            <ul class="concept-list">
                <li>Hacer preguntas abiertas (no cerradas): ¿escalón 1, 2, 3 o 4?</li>
                <li>Escuchar sin interrumpir: ¿escalón?</li>
                <li>Aplicar GROW en una conversación informal: ¿escalón?</li>
                <li>Morderte la lengua antes de dar un consejo: ¿escalón?</li>
                <li>Dar feedback con estilo coaching: ¿escalón?</li>
            </ul>
            <p>Si respondiste "escalón 1" en alguna, felicidades: ya subiste al 2 por el simple hecho de hacerte la pregunta.</p>
        </div>

        ${quizBlock('q_m7l4', '🎯 ¿Cuál es el escalón donde la mayoría de los aprendices abandonan?', [
            {text: 'Escalón 1 — Incompetencia inconsciente', correct: false},
            {text: 'Escalón 2 — Incompetencia consciente, el momento doloroso de "sé que no sé"', correct: true},
            {text: 'Escalón 3 — Competencia consciente', correct: false},
            {text: 'Escalón 4 — Competencia inconsciente', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm7l5', module: 'Módulo 7 · Hacer realidad el potencial', tag: 'tag-module', tagLabel: 'MÓDULO 7',
        title: 'Coaching avanzado',
        subtitle: 'Capítulo 23 — Más allá del método: el arte del coaching',
        content: hero(heroGradients.m7, 'LECCIÓN 22', 'Coaching avanzado — Cap. 23') + `
        ${note('Esta es la última lección del curso. Hasta ahora has aprendido el método. Ahora vamos más allá del método — al arte. Los coaches maestros no "aplican GROW"; son GROW. Hacen menos y producen más. Esta lección te apunta hacia esa maestría.')}

        ${videoLink('Demostración de coaching avanzado: cambio de actitud', 'Mz9DC1tQ1wM')}

        ${realImg('https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=800', 'Maestría en acción', 'El coach maestro hace 10% de lo que hace el aprendiz — pero lo hace con 10x más impacto. La maestría es sustracción, no adición')}

        <div class="content-card">
            <h3>🎨 Del método al arte</h3>
            <p>Whitmore distingue tres niveles de maestría:</p>
            <table style="width:100%;border-collapse:collapse;font-size:0.92em;margin:12px 0;">
                <tr style="background:#263238;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>Nivel 1 — Practicante</strong></td><td style="padding:10px;border:1px solid #ddd;">Aplica GROW paso a paso. Piensa en la pregunta siguiente mientras escucha. Sigue el manual.</td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;"><strong>Nivel 2 — Competente</strong></td><td style="padding:10px;border:1px solid #ddd;">GROW es fluido pero consciente. Adapta a la energía del coachee. Ya no mira el checklist.</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:10px;border:1px solid #ddd;"><strong>Nivel 3 — Maestro</strong></td><td style="padding:10px;border:1px solid #ddd;">"Está en la sala" con el coachee. El método desaparece. A veces una sola pregunta cambia todo. A veces el silencio es la intervención.</td></tr>
            </table>
        </div>

        <div class="content-card">
            <h3>✨ Las 5 capacidades del coach maestro</h3>
            <ol>
                <li><strong>Presencia total</strong> — todo el coach está aquí. Sin pasado, sin futuro, sin móvil, sin checklist mental.</li>
                <li><strong>Intuición entrenada</strong> — sabe qué preguntar sin saber cómo lo sabe. Años de práctica se condensan en un instante.</li>
                <li><strong>Uso del silencio</strong> — aguanta 20 segundos sin hablar. El coachee llena ese silencio con oro.</li>
                <li><strong>Escucha sistémica</strong> — escucha no solo al coachee, sino a "lo que emerge" en el campo entre los dos.</li>
                <li><strong>Riesgo amoroso</strong> — dice lo que nadie se atreve a decir. Con compasión, con precisión. Cambia vidas.</li>
            </ol>
        </div>

        <div class="content-card tip">
            <h3>🧠 Las preguntas "peligrosas" del coaching avanzado</h3>
            <p>Cuando el coachee da vueltas en círculos, el coach maestro se atreve:</p>
            <ul class="concept-list">
                <li><em>"¿Qué es lo que no estás diciendo?"</em></li>
                <li><em>"¿Qué te da miedo descubrir?"</em></li>
                <li><em>"Si fuera honesto contigo mismo al 100%, ¿qué te dirías?"</em></li>
                <li><em>"¿Qué parte tuya gana cuando esto no cambia?"</em></li>
                <li><em>"¿Qué dejas de obtener al seguir así? ¿Qué obtienes?"</em></li>
                <li><em>"¿Qué te estás perdiendo por no ver esto?"</em></li>
            </ul>
            <p>Estas preguntas solo funcionan con vínculo sólido y mucha experiencia. Mal usadas, dañan. Bien usadas, liberan.</p>
        </div>

        <div class="content-card">
            <h3>🌊 El efecto del coach maestro en el coachee</h3>
            <p>Después de una sesión con un coach maestro, el coachee suele decir:</p>
            <ul class="concept-list">
                <li>"No sé qué pasó, pero todo está claro."</li>
                <li>"Tú hablaste muy poco, pero entendí todo."</li>
                <li>"Me diste permiso para ver algo que llevaba años evadiendo."</li>
                <li>"Nadie me había preguntado eso nunca."</li>
                <li>"Todavía no sé las respuestas, pero ahora sí sé las preguntas."</li>
            </ul>
            <p>Ese es el efecto: no transferencia de información, sino <strong>apertura de consciencia</strong>.</p>
        </div>

        <div class="content-card">
            <h3>🎓 El camino hacia la maestría: 10.000 horas</h3>
            <p>Malcolm Gladwell popularizó la "regla de las 10.000 horas" para dominar cualquier disciplina. En coaching:</p>
            <ul class="concept-list">
                <li><strong>ACC (ICF):</strong> 100 horas de práctica.</li>
                <li><strong>PCC (ICF):</strong> 500 horas.</li>
                <li><strong>MCC (ICF):</strong> 2.500 horas.</li>
                <li><strong>Maestría real:</strong> ~10.000 horas (Whitmore tenía más de 40.000).</li>
            </ul>
            <p>Esto NO significa que tengas que ser MCC para impactar. Incluso con 50 horas de práctica honesta, vas a mejorar dramáticamente como líder.</p>
        </div>

        <blockquote class="book-quote" style="background:#fff3e0;border-left:4px solid #e65100;padding:14px 18px;border-radius:6px;font-style:italic;">"El coaching puede parecer simple, pero dominarlo lleva toda una vida. Y cada día, sigue sorprendiéndonos."
<div style="text-align:right;font-style:normal;font-weight:bold;margin-top:8px;">— John Whitmore (cierre del libro)</div></blockquote>

        <div class="content-card tip">
            <h3>🎉 Has llegado al final. ¿Qué sigue?</h3>
            <ol>
                <li><strong>Haz el examen final</strong> del curso para consolidar lo aprendido.</li>
                <li><strong>Elige UNA persona</strong> en tu vida (familia, equipo, amigo) y empieza a aplicar coaching con ella esta semana.</li>
                <li><strong>Practica 15 minutos al día</strong> — una conversación coacheada. Sin excepciones por 30 días.</li>
                <li><strong>Consigue un coach propio</strong> — ningún coach se desarrolla sin recibir coaching.</li>
                <li><strong>Si quieres certificarte</strong>, explora ICF, IPC, ICC o similares. Typical: 120h de formación + 100h de práctica para ACC.</li>
                <li><strong>Relee este libro</strong> en 12 meses. Vas a descubrir capas que hoy no ves.</li>
            </ol>
        </div>

        ${quizBlock('q_m7l5', '🎯 ¿Qué distingue al coach maestro del coach competente según Whitmore?', [
            {text: 'El maestro habla más y da más consejos', correct: false},
            {text: 'El maestro hace menos (más silencio, menos preguntas) pero con mayor impacto — desaparece el método y queda el arte', correct: true},
            {text: 'El maestro siempre sigue GROW al pie de la letra', correct: false},
            {text: 'El maestro es más caro', correct: false}
        ])}
        `
    });

    // ==============================================================
    // EXAMEN FINAL
    // ==============================================================
    C.lessons.push({
        id: 'final_exam', module: 'Examen final', tag: 'tag-exam', tagLabel: 'EXAMEN FINAL',
        title: 'Examen final — Coaching',
        subtitle: '10 preguntas · necesitas 7 correctas para aprobar',
        content: hero(heroGradients.exam, 'EXAMEN FINAL', 'Demuestra tu dominio del método Whitmore') + `
        ${note('Tienes intentos ilimitados. Lee cada pregunta con calma. Si fallas alguna, vuelve a la lección correspondiente y revisa el concepto. El objetivo no es aprobar — es dominar el coaching.')}

        ${finalQ('final_q1', '1. 🎯 ¿Cuál es la ecuación del juego interior de Gallwey que Whitmore adopta como base del coaching?', [
            {text: 'Rendimiento = habilidad × motivación', correct: false},
            {text: 'Rendimiento = potencial − interferencias (R = p − i)', correct: true},
            {text: 'Éxito = talento + trabajo', correct: false},
            {text: 'Resultados = estrategia × ejecución', correct: false}
        ])}

        ${finalQ('final_q2', '2. 🎯 ¿Qué significa el acrónimo GROW?', [
            {text: 'Goals, Rules, Options, Winners', correct: false},
            {text: 'Goals, Reality, Options, Will', correct: true},
            {text: 'Growth, Results, Opportunities, Work', correct: false},
            {text: 'Groups, Relations, Output, Wisdom', correct: false}
        ])}

        ${finalQ('final_q3', '3. 🎯 Según Whitmore, ¿cuáles son los dos conceptos MÁS importantes del libro, incluso más que GROW?', [
            {text: 'Motivación y disciplina', correct: false},
            {text: 'Confianza y autoridad', correct: false},
            {text: 'Conciencia y responsabilidad personal', correct: true},
            {text: 'Estrategia y ejecución', correct: false}
        ])}

        ${finalQ('final_q4', '4. 🎯 ¿Qué tipo de preguntas son más efectivas en coaching?', [
            {text: 'Cerradas (sí/no) porque obtienen respuestas rápidas', correct: false},
            {text: 'Preguntas con "¿por qué?" porque profundizan', correct: false},
            {text: 'Abiertas que empiezan con qué, cuándo, quién, cuánto, dónde', correct: true},
            {text: 'Retóricas, para que el coachee piense', correct: false}
        ])}

        ${finalQ('final_q5', '5. 🎯 ¿Cuál es la regla de oro en la etapa de Options (O) del modelo GROW?', [
            {text: 'Elegir la primera opción viable para avanzar rápido', correct: false},
            {text: 'Generar máximo número de opciones posibles suspendiendo el juicio', correct: true},
            {text: 'El coach propone todas las opciones', correct: false},
            {text: 'Descartar opciones poco realistas desde el inicio', correct: false}
        ])}

        ${finalQ('final_q6', '6. 🎯 ¿Qué pregunta revela mejor el nivel de compromiso real en la etapa Will?', [
            {text: '¿Estás seguro de que lo harás?', correct: false},
            {text: 'En una escala del 1 al 10, ¿qué tanto te comprometes a hacerlo?', correct: true},
            {text: '¿Por qué lo harías?', correct: false},
            {text: '¿Necesitas ayuda?', correct: false}
        ])}

        ${finalQ('final_q7', '7. 🎯 Según el estudio Mehrabian, ¿qué porcentaje del mensaje emocional transmiten las palabras?', [
            {text: 'El 55%', correct: false},
            {text: 'El 38%', correct: false},
            {text: 'Solo el 7% — el resto viene del tono y del lenguaje corporal', correct: true},
            {text: 'El 93%', correct: false}
        ])}

        ${finalQ('final_q8', '8. 🎯 En la escalera del aprendizaje, ¿cuál es el escalón más doloroso donde la mayoría abandona?', [
            {text: 'Incompetencia inconsciente', correct: false},
            {text: 'Incompetencia consciente — "sé que no sé"', correct: true},
            {text: 'Competencia consciente', correct: false},
            {text: 'Competencia inconsciente', correct: false}
        ])}

        ${finalQ('final_q9', '9. 🎯 ¿Cuál es la cultura organizacional que produce alto rendimiento sostenible según la curva del rendimiento?', [
            {text: 'Impulsiva — miedo y amenazas', correct: false},
            {text: 'Dependiente — jerárquica y paternalista', correct: false},
            {text: 'Independiente — meritocrática con competencia interna', correct: false},
            {text: 'Interdependiente — colaboración, conciencia y propósito compartido', correct: true}
        ])}

        ${finalQ('final_q10', '10. 🎯 ¿Por qué desaconseja Whitmore las preguntas que empiezan con "¿por qué?"?', [
            {text: 'Porque son demasiado largas', correct: false},
            {text: 'Porque suelen sonar a crítica y ponen al coachee a la defensiva', correct: true},
            {text: 'Porque son inglesismos', correct: false},
            {text: 'Porque solo funcionan con niños', correct: false}
        ])}

        <div class="content-card tip" style="margin-top:30px;">
            <h3>🎓 Al aprobar el examen...</h3>
            <p>Se desbloqueará tu certificado oficial TRIKLES con tu nombre y la fecha. Podrás descargarlo en PDF.</p>
            <p><strong>Y después del certificado, lo más importante:</strong> empieza a practicar coaching con una persona real esta misma semana. El libro sin práctica no transforma nada.</p>
        </div>
        `
    });


    // ==============================================================
    // CERTIFICADO
    // ==============================================================
    C.lessons.push({
        id: 'certificate', module: 'Certificado', tag: 'tag-cert', tagLabel: 'CERTIFICADO',
        title: 'Certificado de finalización',
        subtitle: 'Has completado el curso sobre Coaching de John Whitmore',
        content: hero(heroGradients.cert, '🏆 FELICIDADES', 'Has dominado el método GROW') + `
        ${note('Este certificado se activa cuando apruebas el examen con 7 o más aciertos sobre 10. Descárgalo en PDF y compártelo en LinkedIn con el hashtag #TRIKLES.')}

        <div class="content-card" style="text-align:center;padding:30px;background:linear-gradient(135deg,#1a1a1a,#263238);color:white;">
            <h2 style="color:#c9a961;font-family:Georgia,serif;font-size:2.2em;margin:0 0 16px;">TRIKLES</h2>
            <p style="font-style:italic;opacity:0.9;">Otorga el presente certificado de finalización del curso</p>
            <h3 style="color:white;font-size:1.5em;margin:14px 0;">"Coaching — El método para mejorar el rendimiento de las personas"</h3>
            <p style="opacity:0.85;">Basado en la obra de <strong>Sir John Whitmore</strong></p>
            <p style="margin-top:24px;font-size:0.9em;opacity:0.8;">Habiendo demostrado dominio del método GROW, de las habilidades fundamentales del coaching (preguntas potentes y escucha activa), del papel del líder como coach, y de la aplicación del coaching para generar conciencia, responsabilidad y alto rendimiento en personas, equipos y organizaciones.</p>
            <div style="margin-top:30px;">
                <img src="assets/instructor-german.jpg" alt="GS" style="width:60px;height:60px;border-radius:50%;border:2px solid #c9a961;" onerror="this.style.display='none';">
                <p style="margin:8px 0 0;font-weight:bold;">LADE Germán Solís Muñoz</p>
                <p style="font-size:0.85em;opacity:0.8;margin:0;">Instructor TRIKLES</p>
            </div>
        </div>

        <div class="content-card tip">
            <h3>📚 Próximos pasos recomendados</h3>
            <ul class="concept-list">
                <li><strong>Lee otros clásicos del coaching:</strong> <em>Coaching Presence</em> (Silsbee), <em>Co-Active Coaching</em> (Kimsey-House), <em>The Coaching Habit</em> (Bungay Stanier).</li>
                <li><strong>Certifícate</strong> a través de ICF (Federación Internacional de Coaching) — niveles ACC, PCC, MCC.</li>
                <li><strong>Practica peer coaching</strong> — busca un compañero de aprendizaje y coachéense mutuamente 30 min/semana.</li>
                <li><strong>Contrata un coach propio</strong> — el mejor coach es el que ha sido coachée muchas veces.</li>
                <li><strong>Únete a un gremio</strong> — AECOP, ICF Chapter local, comunidades de práctica.</li>
                <li><strong>Lee a Viktor Frankl</strong> — <em>El hombre en busca de sentido</em> para profundizar en el capítulo 14.</li>
            </ul>
        </div>

        <blockquote class="book-quote" style="background:#fff3e0;border-left:4px solid #e65100;padding:16px 20px;border-radius:6px;font-style:italic;font-size:1.05em;">"No hay una única manera correcta de practicar el coaching. Este libro no es más que un compañero que le ayudará a decidir a dónde quiere ir. Será usted quien tendrá que explorar el territorio. La riqueza de ese paisaje puede transformar el coaching y el liderazgo en una forma de arte personal única."
<div style="text-align:right;font-style:normal;font-weight:bold;margin-top:8px;">— Sir John Whitmore</div></blockquote>

        <div class="content-card" style="text-align:center;padding:24px;background:#e8f5e9;border-left:4px solid #2e7d32;">
            <h3>🌟 ¡A por ello!</h3>
            <p>Ahora empieza tu verdadero aprendizaje: practicar coaching con personas reales. Nos vemos en el próximo curso.</p>
            <p style="margin-top:16px;font-weight:bold;">— LADE Germán Solís Muñoz · TRIKLES</p>
        </div>
        `
    });

})();

// ==================================================================
// Registro en window.TRIKLES_COURSES
// ==================================================================
if (typeof window !== 'undefined') {
    window.TRIKLES_COURSES = window.TRIKLES_COURSES || {};
    window.TRIKLES_COURSES['coaching'] = COURSE_COACHING;
}
