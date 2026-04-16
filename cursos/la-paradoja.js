// ==================================================================
// CURSO LA-PARADOJA
// La Paradoja — Un relato sobre la verdadera esencia del liderazgo
// James C. Hunter, 1998
// Curso profesional sobre liderazgo de servicio.
// Instructor: LADE Germán Solís Muñoz — TRIKLES
// Citas textuales: edición en español, Editorial Urano.
// Uso con fines exclusivamente didácticos — art. 148 LFDA.
// ==================================================================

const COURSE_LA_PARADOJA = {
    id: 'la-paradoja',
    meta: {
        title: 'La Paradoja',
        subtitle: 'Un relato sobre la verdadera esencia del liderazgo — James C. Hunter',
        author: 'James C. Hunter',
        cover: 'assets/covers/la-paradoja.jpg',
        description: 'El clásico moderno que transformó la manera de entender el liderazgo. A través de la historia de John Daily y el hermano Simeón, Hunter revela que para liderar hay que servir, y que el amor no es un sentimiento sino un verbo: una decisión diaria de comportamiento. Este curso recorre los 7 capítulos del libro con citas, ejercicios reflexivos, quizzes y videos recomendados. Aprende a construir autoridad real, crear entornos sanos y elegir el cambio.',
        descripcionCorta: 'El liderazgo de servicio explicado como nunca: poder vs autoridad, amor como verbo, paradigmas y la elección de cambiar.',
        category: 'Liderazgo y desarrollo personal',
        lessonsCount: 18,
        duration: '8-10 horas',
        level: 'Todos los niveles',
        active: true,
        tags: ['liderazgo', 'servicio', 'Hunter', 'paradoja', 'autoridad', 'amor', 'paradigmas', 'carácter', 'hábitos']
    },

    lessonRequirements: {
        0:  ['q_intro'],
        1:  ['q_m1l1'],  2: ['q_m1l2'],  3: ['q_m1l3'],
        4:  ['q_m2l1'],  5: ['q_m2l2'],
        6:  ['q_m3l1'],  7: ['q_m3l2'],
        8:  ['q_m4l1'],  9: ['q_m4l2'], 10: ['q_m4l3'], 11: ['q_m4l4'],
        12: ['q_m5l1'], 13: ['q_m5l2'],
        14: ['q_m6l1'], 15: ['q_m6l2'],
        16: ['q_m7l1'], 17: ['q_m7l2'],
        18: ['final_q1','final_q2','final_q3','final_q4','final_q5','final_q6','final_q7','final_q8','final_q9','final_q10'],
        19: []
    },

    examPassScore: 7,

    certificate: {
        courseNameForCert: 'La Paradoja<br>Liderazgo de Servicio — James C. Hunter',
        description: 'Habiendo demostrado dominio de los principios del liderazgo de servicio: la diferencia entre poder y autoridad, el amor como verbo (ágape), la construcción de entornos sanos, la responsabilidad personal y la disciplina del carácter como fundamento de la influencia auténtica.'
    },

    lessons: []
};

// ==================================================================
// Helper para construir lecciones con estructura consistente
// ==================================================================
(function() {
    const C = COURSE_LA_PARADOJA;

    const heroGradients = {
        intro:  'linear-gradient(135deg,#1a237e 0%,#283593 55%,#7c4dff 100%)',
        m1:     'linear-gradient(135deg,#1a237e 0%,#3949ab 60%,#7c4dff 100%)',
        m2:     'linear-gradient(135deg,#4a148c 0%,#7b1fa2 60%,#e040fb 100%)',
        m3:     'linear-gradient(135deg,#004d40 0%,#00897b 60%,#64ffda 100%)',
        m4:     'linear-gradient(135deg,#b71c1c 0%,#e53935 60%,#ff8a80 100%)',
        m5:     'linear-gradient(135deg,#1b5e20 0%,#43a047 60%,#a5d6a7 100%)',
        m6:     'linear-gradient(135deg,#e65100 0%,#fb8c00 60%,#ffe082 100%)',
        m7:     'linear-gradient(135deg,#0d47a1 0%,#1976d2 60%,#82b1ff 100%)',
        exam:   'linear-gradient(135deg,#b71c1c 0%,#e53935 60%,#ffb300 100%)',
        cert:   'linear-gradient(135deg,#1a237e 0%,#7c4dff 70%,#b388ff 100%)'
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
        <div class="content-card" style="text-align:center;padding:18px 16px;background:linear-gradient(135deg,#fff3e0,#fce4ec);border-left:4px solid #c62828;">
            <h3 style="margin:0 0 6px;">🎬 Video recomendado</h3>
            <p style="font-size:0.88em;color:#555;margin:0 0 12px;">${title}</p>
            <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" rel="noopener"
               style="display:inline-flex;align-items:center;gap:8px;background:#c62828;color:white;
                      padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:0.95em;
                      box-shadow:0 2px 8px rgba(198,40,40,0.3);transition:transform 0.15s;">
                ▶ Ver en YouTube
            </a>
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
        title: 'El viaje al monasterio',
        subtitle: 'Prólogo: cómo un ejecutivo exitoso descubrió que su vida se desmoronaba',
        content: `
        <div class="lesson-hero" style="background:${heroGradients.intro};min-height:220px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:30px;">
            <div>
                <div style="font-family:Georgia,serif;font-size:2.3em;font-weight:900;letter-spacing:2px;text-shadow:2px 2px 8px rgba(0,0,0,0.35);">LA PARADOJA</div>
                <div style="font-size:1.1em;margin-top:10px;opacity:0.96;font-style:italic;">Un relato sobre la verdadera esencia del liderazgo</div>
                <div style="margin-top:16px;font-size:0.85em;letter-spacing:4px;opacity:0.9;">JAMES C. HUNTER · 1998 · CLÁSICO MODERNO</div>
            </div>
        </div>

        ${note('Este libro cambió la forma en que millones de personas entienden el liderazgo. No es un manual de técnicas, es una historia. La historia de John Daily, un ejecutivo que "lo tenía todo" pero estaba perdiendo a su familia, a sus empleados y a sí mismo. Una semana en un monasterio, guiado por un ex-CEO convertido en monje, le enseña que <strong>para liderar hay que servir</strong>, y que el amor no es lo que sientes, sino lo que haces. Este curso es un trabajo profundo sobre cada capítulo. Prepárate para que te incomode, te cuestione y te transforme.', 'Bienvenida del instructor · LADE Germán Solís Muñoz')}

        ${videoLink('Resumen: La Paradoja — Liderazgo (LibrosImparables)', '58ilPL-K8gQ')}

        ${realImg('https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800', 'Monasterio junto a un lago', 'El monasterio John of the Cross, a orillas del lago Michigan, donde transcurre la historia')}

        <div class="content-card">
            <h3>🎯 ¿A quién está dirigido este curso?</h3>
            <ul class="concept-list">
                <li><strong>Líderes de cualquier nivel</strong>: gerentes, directores, supervisores, coordinadores.</li>
                <li><strong>Emprendedores y dueños de negocio</strong> que quieren construir equipos comprometidos.</li>
                <li><strong>Padres y madres</strong> que reconocen que la familia es su primera organización.</li>
                <li><strong>Entrenadores, profesores y pastores</strong> que guían personas.</li>
                <li><strong>Cualquier persona</strong> que quiera entender por qué la influencia real viene del servicio, no del poder.</li>
            </ul>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">📖</span><div>
                <h3>La historia en una pincelada</h3>
                <p><strong>John Daily</strong> es director general de una fábrica de vidrio con 500 empleados. Tiene dinero, casa en el lago, lancha, dos hijos y una esposa que lo ama. Pero su matrimonio se deteriora, su hijo adolescente lo desafía, en la fábrica casi gana el sindicato, y hasta los padres del equipo de béisbol que entrena se quejan.</p>
                <p>Presionado por su esposa Rachael, acepta pasar una semana en un monasterio. Allí descubre que el instructor del retiro es <strong>Leonard Hoffman</strong> — una leyenda de los negocios que aparecía en Fortune y que resucitó la aerolínea Southeast Air — ahora convertido en el <strong>hermano Simeón</strong>.</p>
                <p>Durante siete días, Simeón le enseña que <em>el liderazgo es el arte de influir sobre la gente para que trabaje con entusiasmo en la consecución de objetivos en pro del bien común</em>, y que la única forma de conseguir esa influencia duradera es a través del <strong>servicio y el sacrificio</strong>.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>🗺️ Estructura del curso — 7 capítulos, 18 lecciones</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.92em;">
                <tr style="background:#f5f5f5;"><td style="padding:8px;border:1px solid #ddd;"><strong>Módulo 1</strong></td><td style="padding:8px;border:1px solid #ddd;">Las definiciones — Poder, autoridad y relaciones</td><td style="padding:8px;border:1px solid #ddd;">3 lecciones</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Módulo 2</strong></td><td style="padding:8px;border:1px solid #ddd;">El paradigma antiguo — Modelos mentales y cambio</td><td style="padding:8px;border:1px solid #ddd;">2 lecciones</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:8px;border:1px solid #ddd;"><strong>Módulo 3</strong></td><td style="padding:8px;border:1px solid #ddd;">El modelo — Liderazgo de servicio</td><td style="padding:8px;border:1px solid #ddd;">2 lecciones</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Módulo 4</strong></td><td style="padding:8px;border:1px solid #ddd;">El verbo — Amor como ágape</td><td style="padding:8px;border:1px solid #ddd;">4 lecciones</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:8px;border:1px solid #ddd;"><strong>Módulo 5</strong></td><td style="padding:8px;border:1px solid #ddd;">El entorno — Crear ambientes donde la gente crezca</td><td style="padding:8px;border:1px solid #ddd;">2 lecciones</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Módulo 6</strong></td><td style="padding:8px;border:1px solid #ddd;">La elección — Responsabilidad y praxis</td><td style="padding:8px;border:1px solid #ddd;">2 lecciones</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:8px;border:1px solid #ddd;"><strong>Módulo 7</strong></td><td style="padding:8px;border:1px solid #ddd;">Los resultados — Disciplina, gozo y trascendencia</td><td style="padding:8px;border:1px solid #ddd;">2 lecciones</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;" colspan="2"><strong>Examen final + Certificado TRIKLES</strong></td><td style="padding:8px;border:1px solid #ddd;">10 preguntas</td></tr>
            </table>
        </div>

        <div class="content-card tip">
            <h3>📚 Lo que obtendrás al terminar</h3>
            <ol class="concept-list">
                <li>Dominio de los <strong>7 capítulos</strong> de Hunter con conceptos clave y aplicación práctica.</li>
                <li>Claridad sobre la diferencia entre <strong>poder y autoridad</strong>.</li>
                <li>El modelo completo de <strong>liderazgo de servicio</strong> (pirámide invertida).</li>
                <li>Las 8 cualidades del amor como ágape aplicadas al liderazgo.</li>
                <li>Herramientas para crear <strong>entornos sanos</strong> donde la gente crezca.</li>
                <li><strong>Certificado TRIKLES</strong> al aprobar el examen final con 7 de 10 aciertos.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>⚖️ Nota sobre el contenido citado</h3>
            <p style="font-size:0.95em;">Este curso se basa en <em>La Paradoja: Un relato sobre la verdadera esencia del liderazgo</em> de James C. Hunter, Editorial Urano. Propiedad intelectual del autor y la editorial. El uso es con fines <em>exclusivamente didácticos</em>, amparado por el artículo 148 de la Ley Federal del Derecho de Autor de Mexico. Se recomienda adquirir el libro original.</p>
        </div>

        ${quizBlock('q_intro', '🎯 Según la historia, ¿qué descubre John Daily al llegar al monasterio?', [
            {text: 'Que el instructor del retiro es Leonard Hoffman, una leyenda de los negocios convertida en el hermano Simeón', correct: true},
            {text: 'Que el monasterio es en realidad un centro de negocios disfrazado', correct: false},
            {text: 'Que su esposa Rachael lo había inscrito en un programa de terapia de pareja', correct: false},
            {text: 'Que el abad del monasterio era su antiguo jefe de la fábrica', correct: false}
        ])}
        `
    });

    // ==============================================================
    // MÓDULO 1 — LAS DEFINICIONES (Cap. 1)
    // ==============================================================

    C.lessons.push({
        id: 'm1l1', module: 'Módulo 1 · Las definiciones', tag: 'tag-module', tagLabel: 'MÓDULO 1',
        title: 'Liderazgo: el arte de influir',
        subtitle: 'Capítulo 1 — Que es realmente el liderazgo y por qué no es lo mismo que gestionar',
        content: hero(heroGradients.m1, 'LECCIÓN 1', 'Liderazgo: el arte de influir — Cap. 1') + `
        ${note('Hunter no empieza con teoría. Empieza con una pregunta simple: ¿qué es liderazgo? La respuesta del grupo — construida entre todos — es una de las definiciones más poderosas que he leído. Prestá atención: cada palabra fue elegida con precisión.')}

        ${videoLink('La diferencia entre poder y autoridad — Liderazgo', '913nEj1aCAk')}

        ${realImg('https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800', 'Equipo de trabajo colaborando', 'El liderazgo es influir para que la gente trabaje con entusiasmo')}

        <div class="content-card">
            <h3>📖 La definición central del libro</h3>
            <p>Simeón pide al grupo que construyan juntos una definición de liderazgo. Tras veinte minutos de discusión, llegan a una formula que estructura todo el libro:</p>
            <blockquote class="book-quote" style="background:#f3e5f5;border-left:4px solid #7b1fa2;padding:16px 20px;border-radius:8px;font-size:1.05em;">
                <strong>Liderazgo:</strong> El arte de influir sobre la gente para que trabaje con entusiasmo en la consecución de objetivos en pro del bien común.
            </blockquote>
            <p>Analicemos cada palabra clave:</p>
            <ul class="concept-list">
                <li><strong>Arte:</strong> No es un talento innato. Es una destreza aprendida o adquirida. Cualquiera puede desarrollarla si une el deseo apropiado a las acciones apropiadas.</li>
                <li><strong>Influir:</strong> No se trata de forzar, sino de conseguir que la gente quiera hacer lo que hay que hacer. Las ideas, el compromiso y la excelencia son dones voluntarios.</li>
                <li><strong>Entusiasmo:</strong> No basta con que obedezcan. El verdadero liderazgo consigue que se involucren mentalmente, no solo fisicamente.</li>
                <li><strong>Bien común:</strong> El líder no sirve a su ego. Sirve a un propósito mayor que beneficia a todos.</li>
            </ul>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">💡</span><div>
                <h3>Gestionar vs. Líderar</h3>
                <p>Simeón hace una distinción que muchos ejecutivos ignoran: <em>la gestion no es algo que hagas con la gente</em>. Puedes gestionar tu inventario, tu talonario de cheques, tus recursos. Pero no gestionas seres humanos.</p>
                <blockquote class="book-quote" style="background:#e8f5e9;border-left:4px solid #388e3c;padding:12px 16px;border-radius:6px;">Se gestionan cosas, se lídera a la gente.</blockquote>
                <p>Esta distinción es fundamental. La próxima vez que escuches "gestión de personal", piensa si realmente estás <em>liderando</em> o simplemente <em>administrando</em> recursos humanos como si fueran inventario.</p>
            </div></div>
        </div>

        <div class="content-card tip">
            <h3>🔍 Reflexión para tu vida</h3>
            <p>Simeón dice que <em>siempre que dos o más personas se reunen con un propósito, hay una oportunidad de liderazgo</em>. No necesitas un título para ser líder. Piensa en todos los roles que ya tienes:</p>
            <ul class="concept-list">
                <li>¿Eres papa o mama? Eres líder.</li>
                <li>¿Tienes un equipo en el trabajo? Eres líder.</li>
                <li>¿Entrenas un equipo deportivo? Eres líder.</li>
                <li>¿Participas en una comúnidad? Eres líder.</li>
            </ul>
            <p><strong>La pregunta no es si eres líder. La pregunta es: ¿qué clase de líder eres?</strong></p>
        </div>

        ${quizBlock('q_m1l1', '🎯 Según la definición del libro, el liderazgo es:', [
            {text: 'La capacidad de dar ordenes y que se cumplan sin cuestionamiento', correct: false},
            {text: 'El arte de influir sobre la gente para que trabaje con entusiasmo en la consecución de objetivos en pro del bien común', correct: true},
            {text: 'Un talento innato que solo tienen algunas personas privilegiadas', correct: false},
            {text: 'La habilidad de gestionar recursos humanos de forma eficiente', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm1l2', module: 'Módulo 1 · Las definiciones', tag: 'tag-module', tagLabel: 'MÓDULO 1',
        title: 'Poder vs. Autoridad',
        subtitle: 'Capítulo 1 — La diferencia que cambia todo en el liderazgo',
        content: hero(heroGradients.m1, 'LECCIÓN 2', 'Poder vs. Autoridad — Cap. 1') + `
        ${note('Esta es, para mi, la lección más importante del libro. Si entiendes la diferencia entre poder y autoridad, entiendes por qué algunos líderes inspirán lealtad de por vida y otros solo consiguen obediencia temporal. Max Weber lo escribio hace un siglo. Simeón lo hace inolvidable.')}

        ${videoLink('Poder vs. Autoridad — El Mejor Líder de la Historia (Dr. Lucas Leys)', 'ZR0VGYOtSLo')}

        <div class="content-card">
            <h3>📖 Las dos definiciones que estructuran el libro</h3>
            <p>Simeón recurre a Max Weber para establecer dos conceptos opuestos:</p>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:16px 0;">
                <div style="background:#ffebee;padding:16px;border-radius:10px;border-left:4px solid #c62828;">
                    <h4 style="color:#c62828;margin:0 0 8px;">⚡ PODER</h4>
                    <p style="font-size:0.92em;margin:0;">La capacidad de forzar o coaccionar a alguien, para que este, aunque preferiria no hacerlo, haga tu voluntad debido a tu posición o tu fuerza.</p>
                </div>
                <div style="background:#e8f5e9;padding:16px;border-radius:10px;border-left:4px solid #2e7d32;">
                    <h4 style="color:#2e7d32;margin:0 0 8px;">🌟 AUTORIDAD</h4>
                    <p style="font-size:0.92em;margin:0;">El arte de conseguir que la gente haga voluntariamente lo que tu quieres debido a tu influencia personal.</p>
                </div>
            </div>
        </div>

        ${realImg('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800', 'Personas estrechando manos', 'La autoridad se construye con influencia personal, no con posición jerarquica')}

        <div class="content-card story">
            <div class="icon-text"><span class="icon">💡</span><div>
                <h3>Las diferencias clave</h3>
                <table style="width:100%;border-collapse:collapse;font-size:0.92em;">
                    <tr style="background:#f5f5f5;font-weight:bold;"><td style="padding:10px;border:1px solid #ddd;">Aspecto</td><td style="padding:10px;border:1px solid #ddd;">Poder</td><td style="padding:10px;border:1px solid #ddd;">Autoridad</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd;">Naturaleza</td><td style="padding:8px;border:1px solid #ddd;">Capacidad (se tiene)</td><td style="padding:8px;border:1px solid #ddd;">Arte (se desarrolla)</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd;">Se obtiene por</td><td style="padding:8px;border:1px solid #ddd;">Posición, herencia, dinero</td><td style="padding:8px;border:1px solid #ddd;">Carácter e influencia personal</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd;">Se puede</td><td style="padding:8px;border:1px solid #ddd;">Comprar, vender, dar, quitar</td><td style="padding:8px;border:1px solid #ddd;">Solo construir con el tiempo</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd;">Efecto a largo plazo</td><td style="padding:8px;border:1px solid #ddd;">Desgasta las relaciones</td><td style="padding:8px;border:1px solid #ddd;">Fortalece las relaciones</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd;">Requiere</td><td style="padding:8px;border:1px solid #ddd;">Ninguna inteligencia especial</td><td style="padding:8px;border:1px solid #ddd;">Destrezas especiales</td></tr>
                </table>
            </div></div>
        </div>

        <div class="content-card">
            <h3>⚠️ El poder desgasta las relaciones</h3>
            <p>Simeón es claro: se puede aguantar una temporada en el poder, pero a la larga las relaciones se deterioran. Los ejemplos son cotidianos:</p>
            <ul class="concept-list">
                <li><strong>En la familia:</strong> El adolescente que se "rebela" muchas veces está reaccionando a años de haber estado sometido al poder, no a la autoridad.</li>
                <li><strong>En la empresa:</strong> El descontento de los empleados, las huelgas y la baja moral son frecuentemente una "rebeldía encubierta" contra el poder sin autoridad.</li>
                <li><strong>En el deporte:</strong> Los jugadores que "ya no se divierten" están enviando un mensaje sobre el estilo del entrenador.</li>
            </ul>
            <p>El objetivo ideal: <strong>estar en una posición de poder Y además tener autoridad sobre la gente</strong>.</p>
        </div>

        <div class="content-card tip">
            <h3>🪞 Ejercicio de autoevaluación</h3>
            <p>Piensa en tu rol actual de líder (trabajo, familia, equipo). Responde honestamente:</p>
            <ol class="concept-list">
                <li>¿La gente que diriges te sigue porque <em>quiere</em> o porque <em>tiene que</em>?</li>
                <li>¿Usas más frases tipo "hazlo porque yo lo digo" o "hagamoslo porque tiene sentido"?</li>
                <li>Si mañana perdiera tu posición, ¿la gente seguiria escuchandote?</li>
            </ol>
            <p>Si tus respuestas te incomodan, estás exactamente donde John Daily estuvo. Y eso es el punto de partida perfecto.</p>
        </div>

        ${quizBlock('q_m1l2', '🎯 Según Weber y Simeón, ¿cuál es la diferencia fundamental entre poder y autoridad?', [
            {text: 'El poder viene de la fuerza física y la autoridad viene de la inteligencia', correct: false},
            {text: 'No hay diferencia real, son sinónimos', correct: false},
            {text: 'El poder fuerza a la gente a obedecer por posición; la autoridad consigue que quieran hacerlo por influencia personal', correct: true},
            {text: 'El poder es para empresas grandes y la autoridad para empresas pequeñas', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm1l3', module: 'Módulo 1 · Las definiciones', tag: 'tag-module', tagLabel: 'MÓDULO 1',
        title: 'La tarea y la relación humana',
        subtitle: 'Capítulo 1 — El equilibrio que todo líder debe dominar',
        content: hero(heroGradients.m1, 'LECCIÓN 3', 'La tarea y la relación humana — Cap. 1') + `
        ${note('Este concepto me hizo repensar mi carrera completa. Si solo te enfocas en la tarea, pierdes a la gente. Si solo te enfocas en la relación, no produces resultados. El líder maestro hace ambas cosas. Y todo empieza con una palabra: confianza.')}

        ${videoLink('Como tener un equipo comprometido y ser un líder de gran influencia', 'BSXyDMlMo_g')}

        <div class="content-card">
            <h3>📖 Las dos dinámicas del liderazgo</h3>
            <p>Simeón presenta un principio fundamental: cada vez que trabajamos con gente, siempre hay dos dinámicas en juego:</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:16px 0;">
                <div style="background:#e3f2fd;padding:16px;border-radius:10px;text-align:center;">
                    <div style="font-size:2em;">📋</div>
                    <h4>LA TAREA</h4>
                    <p style="font-size:0.9em;">Los objetivos, los resultados, lo que hay que hacer y entregar.</p>
                </div>
                <div style="background:#fce4ec;padding:16px;border-radius:10px;text-align:center;">
                    <div style="font-size:2em;">🤝</div>
                    <h4>LA RELACION</h4>
                    <p style="font-size:0.9em;">El vinculo humano, la confianza, el respeto, la comunicación.</p>
                </div>
            </div>
        </div>

        ${realImg('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800', 'Equipo trabajando juntos', 'La clave: llevar a cabo las tareas FOMENTANDO las relaciones humanas')}

        <div class="content-card">
            <h3>⚖️ ¿Qué pasa cuando se desequilibra?</h3>
            <ul class="concept-list">
                <li><strong>Solo tarea, sin relación:</strong> Cambios permanentes de personal, rebeldía, falta de calidad, bajo compromiso, baja confianza. "Nadie quiere trabajar para ellos."</li>
                <li><strong>Solo relación, sin tarea:</strong> Puede que seas estupendo como amigo, pero no eres un líder. No se consiguen resultados.</li>
            </ul>
            <blockquote class="book-quote" style="background:#fff3e0;border-left:4px solid #e65100;padding:12px 16px;border-radius:6px;">La clave del liderazgo es llevar a cabo las tareas asignadas fomentando las relaciones humanas.</blockquote>
        </div>

        <div class="content-card">
            <h3>🔑 La confianza: el ingrediente esencial</h3>
            <p>Simeón pregunta: ¿cuál es el ingrediente más importante para una relación que funcione? La respuesta es directa:</p>
            <blockquote class="book-quote" style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px 16px;border-radius:6px;font-size:1.05em;"><strong>Confianza.</strong> Sin confianza es difícil, por no decir imposible, mantener una buena relación.</blockquote>
            <p>La prueba es sencilla: <em>¿cuántas buenas relaciones mantienes con gente de la que no te fias? ¿Te apetece salir a cenar un sabado con esa gente?</em></p>
            <p>Sin niveles básicos de confianza: los matrimonios se rompen, las familias se descomponen, las empresas se arruinan, los países se vienen abajo.</p>
        </div>

        <div class="content-card">
            <h3>🏢 Relaciones ACEP en la empresa</h3>
            <p>Para que un negocio funcione, tienen que funcionar las relaciones con los cuatro grupos fundamentales:</p>
            <ul class="concept-list">
                <li><strong>A</strong>ccionistas (Propietarios) — Necesitan un retorno justo.</li>
                <li><strong>C</strong>lientes — Si no satisfaces sus necesidades, otros lo harán.</li>
                <li><strong>E</strong>mpleados — Necesitan dignidad, respeto y sentirse parte.</li>
                <li><strong>P</strong>roveedores — La relación simbiotica que sostiene la cadena.</li>
            </ul>
        </div>

        ${quizBlock('q_m1l3', '🎯 Según Simeón, ¿cuál es el ingrediente más importante para una relación que funcione?', [
            {text: 'El dinero — si los sueldos son buenos, todo funciona', correct: false},
            {text: 'La jerarquía — la gente necesita saber quién manda', correct: false},
            {text: 'La confianza — sin ella las relaciones, familias y empresas se desmoronan', correct: true},
            {text: 'La amistad — hay que ser amigo de todos para liderar', correct: false}
        ])}
        `
    });

    // ==============================================================
    // MÓDULO 2 — EL PARADIGMA ANTIGUO (Cap. 2)
    // ==============================================================

    C.lessons.push({
        id: 'm2l1', module: 'Módulo 2 · El paradigma antiguo', tag: 'tag-module', tagLabel: 'MÓDULO 2',
        title: 'Paradigmas: tus mapas mentales',
        subtitle: 'Capítulo 2 — Por qué vemos el mundo como somos, no como es',
        content: hero(heroGradients.m2, 'LECCIÓN 4', 'Paradigmas: tus mapas mentales — Cap. 2') + `
        ${note('Antes de cambiar cómo lideras, necesitas entender por qué lideras cómo lideras. La respuesta está en tus paradigmas: esos modelos mentales que adoptaste sin cuestionarlos. Algunos te salvaron la vida, otros te están paralizando.')}

        ${videoLink('¿Qué es el cambio de paradigma? — Borja Vilaseca', 'h5ksLhlPZNs')}

        ${realImg('https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800', 'Persona mirando a través de un prisma', 'No vemos el mundo tal y como es; vemos el mundo tal y como somos')}

        <div class="content-card">
            <h3>📖 ¿Qué es un paradigma?</h3>
            <blockquote class="book-quote" style="background:#f3e5f5;border-left:4px solid #7b1fa2;padding:12px 16px;border-radius:6px;">Los paradigmas son sencillamente patrones psicológicos, modelos, mapas que nos valen para no perder el rumbo en la vida.</blockquote>
            <p>Nuestros paradigmas pueden ser útiles e incluso salvarnos la vida. Pero también llegan a ser <strong>peligrosos</strong> cuando los consideramos verdades inmutables y los usamos como filtros de información nueva.</p>
        </div>

        <div class="content-card">
            <h3>🐱 El gato y la estufa (Mark Twain)</h3>
            <p>La directora de escuela comparte una metáfora perfecta: un gato que se sentó en una estufa encendida no volverá a sentarse nunca en una estufa encendida... <strong>pero tampoco se sentará en una estufa apagada</strong>.</p>
            <p>Esa es la trampa del paradigma obsoleto: una experiencia pasada se convierte en una regla universal que nos paraliza.</p>
            <ul class="concept-list">
                <li><strong>Paradigma útil:</strong> "Debo desconfiar de <em>este</em> hombre que me lastimó."</li>
                <li><strong>Paradigma peligroso:</strong> "Debo desconfiar de <em>todos</em> los hombres."</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>🌍 Paradigmas que alguien tuvo que romper</h3>
            <p>El mundo es plano. El Sol gira alrededor de la Tierra. Las mujeres no deben votar. Las personas de color son inferiores. Las monarquías deben gobernar los pueblos. El pelo largo es cosa de mujeres.</p>
            <p><strong>Cada uno de estos paradigmas fue considerado una verdad absoluta en su época.</strong> ¿Cuáles de tus "verdades absolutas" sobre liderazgo son paradigmas obsoletos?</p>
        </div>

        <div class="content-card">
            <h3>🔄 Mejora continua = cambio continuo</h3>
            <p>La entrenadora Chris observa que la mejora continua es crucial: en la naturaleza, si no estás creciendo, estás muriéndote. Pero por definición, <strong>no es posible mejorar sin cambiar</strong>.</p>
            <p>¿Por qué cuesta tanto cambiar? Porque el cambio nos saca de nuestra zona de confort. Nos obliga a replantearnos. Y hay mucha gente que prefiere conformarse con permanecer aferrada a sus pequeñas rutinas.</p>
            <blockquote class="book-quote" style="background:#fff3e0;border-left:4px solid #e65100;padding:12px 16px;border-radius:6px;">Una rutina es poco más que un ataúd del que solo se pueden sacar los pies.</blockquote>
        </div>

        ${quizBlock('q_m2l1', '🎯 Según el libro, ¿por qué los paradigmas obsoletos son peligrosos?', [
            {text: 'Porque son siempre falsos desde el principio', correct: false},
            {text: 'Porque nos paralizan mientras el mundo avanza, al usarlos como filtros de información nueva', correct: true},
            {text: 'Porque solo aplican a personas sin educación formal', correct: false},
            {text: 'Porque los paradigmas no tienen ninguna utilidad práctica', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm2l2', module: 'Módulo 2 · El paradigma antiguo', tag: 'tag-module', tagLabel: 'MÓDULO 2',
        title: 'La pirámide invertida',
        subtitle: 'Capítulo 2 — Del modelo militar al modelo de servicio',
        content: hero(heroGradients.m2, 'LECCIÓN 5', 'La pirámide invertida — Cap. 2') + `
        ${note('Aquí es donde Simeón literalmente le da la vuelta a todo lo que la mayoría de los ejecutivos creen. La pirámide de la empresa no tiene al jefe arriba y a los empleados abajo. O al menos, no debería.')}

        ${videoLink('Liderazgo de servicio', '7KyKkWouleA')}

        <div class="content-card">
            <h3>📖 El paradigma pirámidal clásico</h3>
            <p>El estilo pirámidal de gestion vertical que heredamos de épocas guerreras y monarquicas:</p>
            <div style="text-align:center;padding:20px;background:#f5f5f5;border-radius:10px;margin:16px 0;">
                <div style="font-size:0.95em;line-height:2;">
                    🔺 <strong>Presidente / CEO</strong><br>
                    🔹 Vicepresidentes<br>
                    🔹 Directores<br>
                    🔹 Supervisores<br>
                    🔹🔹🔹 <strong>Empleados</strong> (abajo de todo)<br>
                    👥👥👥👥 <strong>Clientes</strong> (ni siquiera aparecen)
                </div>
            </div>
            <p>¿Y quién está más cerca del cliente? ¿El CEO o los empleados que hacen el trabajo? La respuesta es obvia. Sin embargo, en la pirámide clásica, los que están más lejos del cliente son los que toman las decisiones.</p>
        </div>

        ${realImg('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800', 'Reunion de trabajo donde todos participan', 'El modelo de servicio pone al líder al servicio de quiénes hacen el trabajo real')}

        <div class="content-card">
            <h3>🔄 La pirámide invertida: el nuevo paradigma</h3>
            <div style="text-align:center;padding:20px;background:#e8f5e9;border-radius:10px;margin:16px 0;">
                <div style="font-size:0.95em;line-height:2;">
                    👥👥👥👥 <strong>Clientes</strong> (arriba de todo)<br>
                    🔹🔹🔹 <strong>Empleados</strong> (sirven al cliente)<br>
                    🔹 Supervisores (sirven a los empleados)<br>
                    🔹 Directores (sirven a los supervisores)<br>
                    🔻 <strong>CEO / Líder</strong> (sirve a todos)
                </div>
            </div>
            <p>En este modelo, el líder no está arriba "mandando". Esta abajo, <strong>sirviendo</strong> a quiénes hacen posible que el cliente reciba valor.</p>
        </div>

        <div class="content-card tip">
            <h3>🏭 La lección de John Daily</h3>
            <p>John reflexióna sobre su propia fábrica de vidrio: <em>"La gente que empaqueta los vidrios en las cajas es la que está más cerca del cliente. Yo puedo salir a comer con los clientes, pero lo que realmente les importa es lo que hay dentro de la caja cuando la abren."</em></p>
            <p>¿Quién en tu organización "empaqueta el vidrio"? ¿Les estás sirviendo para que hagan su mejor trabajo, o les estás ordenando desde arriba?</p>
        </div>

        ${quizBlock('q_m2l2', '🎯 ¿Qué propone la pirámide invertida de Simeón?', [
            {text: 'Que no debe haber jefes en las organizaciones', correct: false},
            {text: 'Que los clientes deben dirigir la empresa directamente', correct: false},
            {text: 'Que el líder está al servicio de quiénes sirven al cliente, invirtiendo la jerarquía tradicional', correct: true},
            {text: 'Que la pirámide debe eliminarse por completo sin reemplazo', correct: false}
        ])}
        `
    });

    // ==============================================================
    // MÓDULO 3 — EL MODELO (Cap. 3)
    // ==============================================================

    C.lessons.push({
        id: 'm3l1', module: 'Módulo 3 · El modelo', tag: 'tag-module', tagLabel: 'MÓDULO 3',
        title: 'Liderazgo de servicio: el modelo',
        subtitle: 'Capítulo 3 — Para mandar hay que servir',
        content: hero(heroGradients.m3, 'LECCIÓN 6', 'Liderazgo de servicio — Cap. 3') + `
        ${note('Aquí Simeón conecta todo: liderazgo, autoridad, servicio y sacrificio forman una cadena lógica e inseparable. Si quieres influir (liderar), necesitas autoridad. Para tener autoridad, necesitas servir. Y servir requiere sacrificio. Esa es la paradoja del título.')}

        ${videoLink('Liderazgo de servicio — Robert K. Greenleaf (Resumen)', 'ha-RoxzQ4j4')}

        <div class="content-card">
            <h3>📖 La cadena del liderazgo de servicio</h3>
            <div style="background:#e0f2f1;padding:20px;border-radius:12px;text-align:center;margin:16px 0;">
                <div style="font-size:1.1em;line-height:2.2;">
                    <strong style="color:#004d40;">LIDERAZGO</strong> (influir con entusiasmo)<br>
                    ⬇️ se construye sobre ⬇️<br>
                    <strong style="color:#00695c;">AUTORIDAD</strong> (influencia personal)<br>
                    ⬇️ se funda en ⬇️<br>
                    <strong style="color:#00897b;">SERVICIO Y SACRIFICIO</strong><br>
                    ⬇️ que requieren ⬇️<br>
                    <strong style="color:#26a69a;">AMOR (ágape)</strong> — voluntad + acción<br>
                    ⬇️ que requiere ⬇️<br>
                    <strong style="color:#4db6ac;">VOLUNTAD</strong> — la elección diaria
                </div>
            </div>
        </div>

        ${realImg('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800', 'Persona ayudando a otra a subir', 'La autoridad siempre se funda en el servicio y el sacrificio')}

        <div class="content-card">
            <h3>🔑 ¿Por qué servicio y sacrificio?</h3>
            <p>Simeón pide al grupo que piensen en una persona que haya sido una verdadera autoridad en su vida. Alguien por quién estarían dispuestos a hacer cualquier cosa. Luego pide que listen las cualidades de esa persona.</p>
            <p>Las 10 cualidades más recurrentes:</p>
            <ol class="concept-list">
                <li>Honrado, digno de confianza</li>
                <li>Ejemplar</li>
                <li>Pendiente de los demás</li>
                <li>Comprometido</li>
                <li>Atento</li>
                <li>Exige responsabilidad a la gente</li>
                <li>Trata a la gente con respeto</li>
                <li>Anima a la gente</li>
                <li>Actitud positiva, entusiasta</li>
                <li>Aprecia a la gente</li>
            </ol>
            <p><strong>Todas son comportamientos (no rasgos innatos)</strong> y todas implican <em>dar algo de sí mismo</em> — es decir, servir y sacrificarse.</p>
        </div>

        <div class="content-card tip">
            <h3>💡 El reto de los 25,000 dolares</h3>
            <p>Cuando Greg dice que "la actitud positiva es innata", el pastor Lee le responde: <em>¿Y si te ofrezco 25,000 dolares por mostrar más entusiasmo y aprecio hacía tu tropa durante seis meses? ¿Veríamos un cambio?</em></p>
            <p>Greg asiente con la cabeza gacha. <strong>Todas esas cualidades son materia de elección.</strong> El reto para el líder es identificar aquellos rasgos en los que necesita trabajar y aplicarles "el reto de los 25,000 dolares".</p>
        </div>

        ${quizBlock('q_m3l1', '🎯 Según el modelo de Simeón, ¿en que se funda la autoridad?', [
            {text: 'En la posición jerarquica y el poder formal', correct: false},
            {text: 'En el servicio y el sacrificio por los demás', correct: true},
            {text: 'En la inteligencia superior del líder', correct: false},
            {text: 'En la experiencia acumulada por los años', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm3l2', module: 'Módulo 3 · El modelo', tag: 'tag-module', tagLabel: 'MÓDULO 3',
        title: 'Jesús, Gandhi, King: líderes de autoridad',
        subtitle: 'Capítulo 3 — Ejemplos reales de influencia sin poder',
        content: hero(heroGradients.m3, 'LECCIÓN 7', 'Líderes de autoridad — Cap. 3') + `
        ${note('Cuando Greg pide ejemplos del "mundo real", Simeón entrega tres casos históricos irrefutables. Ninguno de estos líderes tenía poder. Todos cambiaron el mundo con pura autoridad — servicio y sacrificio.')}

        ${videoLink('Mahatma Gandhi: Liderazgo', 'ACZ2Esaxq50')}

        ${realImg('https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=800', 'Estatua de Gandhi', 'Gandhi demostró que se puede cambiar un país entero sin recurrir a la violencia ni al poder')}

        <div class="content-card">
            <h3>📖 Tres líderes, una misma formula</h3>

            <div style="background:#fff3e0;padding:16px;border-radius:10px;margin:12px 0;border-left:4px solid #e65100;">
                <h4>🕊️ Jesús de Nazaret</h4>
                <p>Más de dos mil millones de seguidores. Nunca uso el poder — Herodes, Pilato, los romanos eran los que tenían el poder. El solo tenía influencia (autoridad), y su capacidad de influenciar llega hasta nuestros días. Dijo que para ser el primero, había que tener voluntad de servicio.</p>
            </div>

            <div style="background:#e8f5e9;padding:16px;border-radius:10px;margin:12px 0;border-left:4px solid #2e7d32;">
                <h4>🇮🇳 Mahatma Gandhi</h4>
                <p>Un hombre de metro y medio y menos de cincuenta kilos. Vivia en un país de casi 300 millones de habitantes esclavizado bajo el Imperio Britanico. Afirmo que conseguiria la independencia sin violencia. Casí todos se rieron. El cumplió su palabra. Fue prisionero, apaleado, ayuno hasta casi morir. Sirvio y se sacrifico hasta que el mundo le hizo caso. En 1947, el Imperio Britanico concedio la independencia.</p>
            </div>

            <div style="background:#e3f2fd;padding:16px;border-radius:10px;margin:12px 0;border-left:4px solid #1565c0;">
                <h4>✊ Martin Luther King</h4>
                <p>Estudió los métodos de Gandhi en la India. Dijo que conseguiría los derechos civiles sin violencia. Amenazas de muerte, cárcel, bombas en su casa e iglesia. Pero con servicio y sacrificio consiguió: la Civil Rights Act de 1964, el Nobel de la Paz (el más joven de la historia), y un cambio permanente en la conciencia de una nación.</p>
            </div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">💡</span><div>
                <h3>La lección común</h3>
                <p>Otros trataron de luchar contra el poder con poder: Malcolm X, los Panteras Negras. <strong>El poder engendra poder.</strong> Cuando intentaron ejercerlo, se encontraron con que el otro bando tenía más.</p>
                <p>En cambio, Jesús, Gandhi y King no tenían poder alguno. Solo autoridad — construida a través del servicio y el sacrificio. Y cambiaron el mundo de forma permanente.</p>
            </div></div>
        </div>

        ${quizBlock('q_m3l2', '🎯 ¿Qué tienen en común Jesús, Gandhi y King como líderes?', [
            {text: 'Los tres ejercieron un enorme poder militar y político', correct: false},
            {text: 'Los tres usaron la violencia estratégicamente cuando fue necesario', correct: false},
            {text: 'Los tres cambiaron el mundo sin poder, solo con autoridad basada en servicio y sacrificio', correct: true},
            {text: 'Los tres tuvieron éxito porque nacieron en familias poderosas', correct: false}
        ])}
        `
    });

    // ==============================================================
    // MÓDULO 4 — EL VERBO (Cap. 4)
    // ==============================================================

    C.lessons.push({
        id: 'm4l1', module: 'Módulo 4 · El verbo', tag: 'tag-module', tagLabel: 'MÓDULO 4',
        title: 'Amor: ágape, el verbo',
        subtitle: 'Capítulo 4 — El amor no es un sentimiento, es una decisión de comportamiento',
        content: hero(heroGradients.m4, 'LECCIÓN 8', 'Amor: ágape, el verbo — Cap. 4') + `
        ${note('Este capítulo cambió mi vida. En serio. Cuando entendi que amar no significa "sentir bonito" sino "comportarte bien con alguien aunque no te caiga bien", todo encajo. Es el corazón del libro. Lee despacio.')}

        ${videoLink('La Paradoja — James Hunter — La verdadera esencia del liderazgo', 'aT_VjTK-qpE')}

        <div class="content-card">
            <h3>📖 Las cuatro palabras griegas para "amor"</h3>
            <p>Simeón explica que los griegos tenían múltiples palabras para describir el amor:</p>
            <table style="width:100%;border-collapse:collapse;font-size:0.92em;">
                <tr style="background:#f5f5f5;font-weight:bold;"><td style="padding:10px;border:1px solid #ddd;">Palabra griega</td><td style="padding:10px;border:1px solid #ddd;">Significado</td><td style="padding:10px;border:1px solid #ddd;">¿En el Nuevo Testamento?</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Eros</strong></td><td style="padding:8px;border:1px solid #ddd;">Atracción sexual, lo erotico</td><td style="padding:8px;border:1px solid #ddd;">No</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Storge</strong></td><td style="padding:8px;border:1px solid #ddd;">Afecto familiar</td><td style="padding:8px;border:1px solid #ddd;">No</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Filia</strong></td><td style="padding:8px;border:1px solid #ddd;">Amor fraternal, reciproco ("si tu me tratas bien, yo te trato bien")</td><td style="padding:8px;border:1px solid #ddd;">Poco</td></tr>
                <tr style="background:#e8f5e9;"><td style="padding:8px;border:1px solid #ddd;"><strong>Ágape</strong></td><td style="padding:8px;border:1px solid #ddd;">Amor incondicional, basado en el <em>comportamiento</em>, no en méritos</td><td style="padding:8px;border:1px solid #ddd;"><strong>Si — siempre</strong></td></tr>
            </table>
        </div>

        ${realImg('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800', 'Manos entrelazadas mostrando apoyo', 'El amor ágape no depende de como te sientas, sino de como te comportes')}

        <div class="content-card">
            <h3>💡 La revelación que cambió todo para Simeón</h3>
            <p>De joven, Simeón era ateo y no entendía como Jesús podía pedir "ama a tu enemigo". ¿Amar a Hitler? ¿Amar a un asesino? Eso era imposible como sentimiento.</p>
            <p>Hasta que un profesor de lengua le explicó: cuando Jesús dice "ama", usa <strong>ágape</strong> — el amor del comportamiento y la elección, no el amor de la emoción.</p>
            <blockquote class="book-quote" style="background:#fce4ec;border-left:4px solid #c62828;padding:12px 16px;border-radius:6px;">No siempre puedo controlar mis sentimientos hacia los demás, pero lo que si puedo controlar es mi comportamiento hacia los demás.</blockquote>
        </div>

        <div class="content-card">
            <h3>📋 Las 8 cualidades del amor-ágape aplicadas al liderazgo</h3>
            <p>De la Primera Carta a los Corintios, capítulo 13, Simeón extrae las cualidades que son <strong>sinónimo de liderazgo</strong>:</p>
            <ol class="concept-list">
                <li><strong>Paciencia</strong> — Mostrar dominio de uno mismo</li>
                <li><strong>Afabilidad</strong> — Prestar atención, apreciar y animar</li>
                <li><strong>Humildad</strong> — Ser auténtico, sin arrogancia ni falsedad</li>
                <li><strong>Respeto</strong> — Tratar a los demás como si fueran importantes</li>
                <li><strong>Generosidad</strong> — Satisfacer las necesidades de los demás</li>
                <li><strong>Indulgencia</strong> — No guardar rencor cuando nos perjudican</li>
                <li><strong>Honradez</strong> — Estar libre de engaño</li>
                <li><strong>Compromiso</strong> — Atenerse a las elecciones que se hacen</li>
            </ol>
            <p><strong>¿Dónde ves aquí un sentimiento? Son todos comportamientos.</strong></p>
        </div>

        ${quizBlock('q_m4l1', '🎯 Según el libro, ¿qué tipo de amor describe ágape?', [
            {text: 'El amor romántico y apasiónado entre parejas', correct: false},
            {text: 'El afecto natural que se siente por la familia', correct: false},
            {text: 'Un amor incondicional basado en el comportamiento y la elección deliberada, no en sentimientos', correct: true},
            {text: 'La amistad reciproca entre personas que se caen bien', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm4l2', module: 'Módulo 4 · El verbo', tag: 'tag-module', tagLabel: 'MÓDULO 4',
        title: 'Paciencia y afabilidad',
        subtitle: 'Capítulo 4 — Dominio propio y la escucha activa',
        content: hero(heroGradients.m4, 'LECCIÓN 9', 'Paciencia y afabilidad — Cap. 4') + `
        ${note('Simeón desglosa cada cualidad del amor-ágape con el diccionario en mano. Las dos primeras — paciencia y afabilidad — son, en mi experiencia, las que más impacto tienen en el día a día de un líder. Especialmente la escucha activa.')}

        ${videoLink('Víctor Küppers: Por qué es tan importante aprender a escuchar', 'LtMQDPAnauE')}

        <div class="content-card">
            <h3>📖 Paciencia: dominio de uno mismo</h3>
            <blockquote class="book-quote" style="background:#fff3e0;border-left:4px solid #e65100;padding:12px 16px;border-radius:6px;"><strong>Paciencia:</strong> Mostrar dominio de uno mismo ante la adversidad.</blockquote>
            <ul class="concept-list">
                <li>Si el líder grita o pierde el control, ¿cómo espera que su equipo se controle?</li>
                <li>Si a un niño que aprende a caminar le pegas cada vez que se cae, ¿crees que le interesará seguir intentándolo? Preferirá gatear. <strong>Muchos empleados están "gateando" por miedo.</strong></li>
                <li>La disciplina es enseñar, no castigar. Viene de la misma raíz que "discípulo".</li>
                <li>Un aviso, un segundo aviso, y "ya no estás en el equipo" — <strong>ninguno de esos pasos tiene que ser emocional</strong>.</li>
            </ul>
        </div>

        ${realImg('https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800', 'Persona escuchando atentamente en una conversación', 'La escucha activa es probablemente la mejor forma de prestar atención a los demás')}

        <div class="content-card">
            <h3>📖 Afabilidad: prestar atención, apreciar y animar</h3>
            <blockquote class="book-quote" style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px 16px;border-radius:6px;"><strong>Afabilidad:</strong> Prestar atención, apreciar y animar.</blockquote>

            <h4>🎧 La escucha activa</h4>
            <p>Simeón explica que pensamos casi 4 veces más rápido de lo que otros hablan. Por eso tenemos un "montón de ruido" mental mientras escuchamos. La escucha activa requiere silenciar esa conversación interna y entrar en el mundo del otro.</p>
            <p>La directora Theresa comparte un dato revelador: el 65% del tiempo de comunicación se dedica a escuchar, pero las escuelas no enseñan a hacerlo.</p>

            <h4>📊 El Efecto Hawthorne</h4>
            <p>John comparte un caso clásico: en una fábrica, aumentaron la iluminación y la productividad subió. Luego la bajaron... y la productividad <em>volvió a subir</em>. No era la luz. Era que <strong>alguien estaba pendiente de los trabajadores</strong>.</p>
        </div>

        <div class="content-card">
            <h3>⭐ La necesidad de ser apreciado</h3>
            <p>William James dijo que en lo más hondo de la personalidad humana existe la necesidad de ser apreciado. La enfermera Kim comparte la imagen de su mentora:</p>
            <blockquote class="book-quote" style="background:#f3e5f5;border-left:4px solid #7b1fa2;padding:12px 16px;border-radius:6px;">Imagina a cada empleado como un hombre anuncio con un cartel por delante que dice "Apréciame" y otro por detrás que dice "Hazme sentir importante".</blockquote>
        </div>

        ${quizBlock('q_m4l2', '🎯 ¿Qué demostró el Efecto Hawthorne?', [
            {text: 'Que la iluminación es el factor más importante para la productividad', correct: false},
            {text: 'Que lo que realmente aumentaba la productividad era que alguien estuviera pendiente de los trabajadores', correct: true},
            {text: 'Que los trabajadores producen más cuando nadie los observa', correct: false},
            {text: 'Que la temperatura ambiente es más importante que el liderazgo', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm4l3', module: 'Módulo 4 · El verbo', tag: 'tag-module', tagLabel: 'MÓDULO 4',
        title: 'Humildad, respeto y generosidad',
        subtitle: 'Capítulo 4 — Ser auténtico y tratar a todos como personas importantes',
        content: hero(heroGradients.m4, 'LECCIÓN 10', 'Humildad, respeto y generosidad — Cap. 4') + `
        ${note('Estas tres cualidades van juntas porque forman un solo mensaje: "Tu importas". La humildad dice "yo no soy más que tu". El respeto dice "te trato como alguien valioso". La generosidad dice "estoy aquí para satisfacer tus necesidades, no las mías".')}

        ${videoLink('Liderazgo basado en valores — Ser ejemplo', 'oH5T5GKH6aY')}

        <div class="content-card">
            <h3>📖 Humildad</h3>
            <blockquote class="book-quote" style="background:#f3e5f5;border-left:4px solid #7b1fa2;padding:12px 16px;border-radius:6px;"><strong>Humildad:</strong> Ser auténtico, sin pretensiones ni arrogancia.</blockquote>
            <p>Humildad no es pensar menos de ti mismo. Es pensar menos <em>en</em> ti mismo. Es ser auténtico — no tener que aparentar lo que no eres, no necesitar impresionar a nadie.</p>
            <p>Recuerda a Simeón: un ex-CEO de Fortune 500... arreglando la taza del vater de John Daily. Sin pretensiones, sin arrogancia, simplemente sirviendo.</p>
        </div>

        <div class="content-card">
            <h3>📖 Respeto</h3>
            <blockquote class="book-quote" style="background:#e3f2fd;border-left:4px solid #1565c0;padding:12px 16px;border-radius:6px;"><strong>Respeto:</strong> Tratar a los demás como si fueran personas importantes — porque lo son.</blockquote>
            <p>Simeón corrige a John en la primera mañana: le interrumpió tres veces en mitad de una frase. Los mensajes que envía al interrumpir:</p>
            <ol class="concept-list">
                <li>No te estaba escuchando — ya tenía mi respuesta en mente.</li>
                <li>No valoro tu opinion.</li>
                <li>Lo que yo tengo que decir es más importante que lo tuyo.</li>
            </ol>
            <blockquote class="book-quote" style="background:#fff3e0;border-left:4px solid #e65100;padding:12px 16px;border-radius:6px;">Tus sentimientos de respeto deben ser acordes con tus actos de respeto.</blockquote>
        </div>

        ${realImg('https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800', 'Líder escuchando a su equipo', 'El respeto se demuestra con actos, no con palabras')}

        <div class="content-card">
            <h3>📖 Generosidad</h3>
            <blockquote class="book-quote" style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px 16px;border-radius:6px;"><strong>Generosidad:</strong> Satisfacer las necesidades de los demás, no solo sus deseos.</blockquote>
            <p>Hay una distinción crucial: <strong>necesidades vs. deseos</strong>. El líder no es un complaciente que da a todos lo que quieren. Es alguien que identifica y satisface las necesidades <em>legítimas</em>.</p>
            <p>Ejemplo: Un empleado puede <em>desear</em> no tener que rendir cuentas, pero <em>necesita</em> feedback honesto para crecer.</p>
        </div>

        ${quizBlock('q_m4l3', '🎯 En el contexto del libro, ¿qué significa humildad para un líder?', [
            {text: 'Sentirse inferior a todos los demás', correct: false},
            {text: 'Nunca tomar decisiones difíciles para no ofender', correct: false},
            {text: 'Ser auténtico, sin pretensiones ni arrogancia — pensar menos en ti mismo', correct: true},
            {text: 'Ocultar tus logros para que nadie se sienta mal', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm4l4', module: 'Módulo 4 · El verbo', tag: 'tag-module', tagLabel: 'MÓDULO 4',
        title: 'Indulgencia, honradez y compromiso',
        subtitle: 'Capítulo 4 — Perdonar, ser integro y mantenerse fiel',
        content: hero(heroGradients.m4, 'LECCIÓN 11', 'Indulgencia, honradez y compromiso — Cap. 4') + `
        ${note('Las últimas tres cualidades del amor-ágape son las más difíciles de prácticar. Perdonar cuando te han hecho daño. Ser honesto cuando mentir es más fácil. Mantener el compromiso cuando todo indica que deberias renunciar. Pero son exactamente las que separan al líder ordinario del extraordinario.')}

        ${videoLink('Empatía y aprender a escuchar — Brene Brown', 'gyH3lJfxC9U')}

        <div class="content-card">
            <h3>📖 Indulgencia (Perdon)</h3>
            <blockquote class="book-quote" style="background:#fff3e0;border-left:4px solid #e65100;padding:12px 16px;border-radius:6px;"><strong>Indulgencia:</strong> No guardar rencor cuando nos perjudican. Prácticar el perdon.</blockquote>
            <p>Esto no significa ser ingenuo ni tolerar comportamientos inaceptables. Significa <strong>no llevar cuentas del mal</strong>. El líder que guarda rencor envenena las relaciones y la cultura de su equipo.</p>
            <p>Piensa en cuanta fácilidad tenemos para perdonarnos a nosotros mismos nuestros errores. ¿Mostramos la misma diligencia en perdonar los errores del projimo?</p>
        </div>

        <div class="content-card">
            <h3>📖 Honradez</h3>
            <blockquote class="book-quote" style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px 16px;border-radius:6px;"><strong>Honradez:</strong> Estar libre de engaño. Ser integro.</blockquote>
            <p>La honradez no es solo "no mentir". Es ser transparente. Es dar feedback honesto incluso cuando es incomodo. Es cumplir lo que prometes. Es actuar igual cuando te ven que cuando no te ven.</p>
            <p>La gente puede no estar de acuerdo con un líder honesto, pero siempre sabrá donde está parada. Eso construye confianza.</p>
        </div>

        <div class="content-card">
            <h3>📖 Compromiso</h3>
            <blockquote class="book-quote" style="background:#f3e5f5;border-left:4px solid #7b1fa2;padding:12px 16px;border-radius:6px;"><strong>Compromiso:</strong> Atenerse a las elecciones que uno hace. Mantener la palabra.</blockquote>
            <p>El compromiso es la cualidad que sostiene a todas las demás. Puedes ser paciente <em>un día</em>. Puedes ser respetuoso <em>una semana</em>. Pero el verdadero liderazgo requiere <strong>compromiso diario, especialmente cuando no te apetece</strong>.</p>
        </div>

        ${realImg('https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800', 'Equipo unido celebrando', 'El compromiso es lo que mantiene unido al equipo cuando las cosas se ponen difíciles')}

        <div class="content-card tip">
            <h3>📋 Las 8 cualidades completas — Tu checklist diario</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.92em;">
                <tr style="background:#f5f5f5;font-weight:bold;"><td style="padding:8px;border:1px solid #ddd;">Cualidad</td><td style="padding:8px;border:1px solid #ddd;">Definición</td><td style="padding:8px;border:1px solid #ddd;">Preguntate</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Paciencia</td><td style="padding:8px;border:1px solid #ddd;">Dominio de uno mismo</td><td style="padding:8px;border:1px solid #ddd;">¿Perdi el control hoy?</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Afabilidad</td><td style="padding:8px;border:1px solid #ddd;">Prestar atención, apreciar, animar</td><td style="padding:8px;border:1px solid #ddd;">¿Escuche de verdad?</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Humildad</td><td style="padding:8px;border:1px solid #ddd;">Autenticidad sin pretensiones</td><td style="padding:8px;border:1px solid #ddd;">¿Actue con ego?</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Respeto</td><td style="padding:8px;border:1px solid #ddd;">Tratar a todos como importantes</td><td style="padding:8px;border:1px solid #ddd;">¿Interrumpi o ignore a alguien?</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Generosidad</td><td style="padding:8px;border:1px solid #ddd;">Satisfacer necesidades legítimas</td><td style="padding:8px;border:1px solid #ddd;">¿Di lo que necesitaban?</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Indulgencia</td><td style="padding:8px;border:1px solid #ddd;">No guardar rencor</td><td style="padding:8px;border:1px solid #ddd;">¿Estoy cargando algo?</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Honradez</td><td style="padding:8px;border:1px solid #ddd;">Libre de engaño</td><td style="padding:8px;border:1px solid #ddd;">¿Fui integro hoy?</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Compromiso</td><td style="padding:8px;border:1px solid #ddd;">Atenerse a las elecciones</td><td style="padding:8px;border:1px solid #ddd;">¿Cumpli mi palabra?</td></tr>
            </table>
        </div>

        ${quizBlock('q_m4l4', '🎯 ¿Qué significa "indulgencia" en el contexto del liderazgo de servicio?', [
            {text: 'Ser permisivo y dejar que la gente haga lo que quiera', correct: false},
            {text: 'No guardar rencor cuando nos perjudican, prácticar el perdon sin tolerar lo inaceptable', correct: true},
            {text: 'Ignorar todos los errores de los demás para mantener la paz', correct: false},
            {text: 'Dar premios y bonificaciones a los empleados constantemente', correct: false}
        ])}
        `
    });

    // ==============================================================
    // MÓDULO 5 — EL ENTORNO (Cap. 5)
    // ==============================================================

    C.lessons.push({
        id: 'm5l1', module: 'Módulo 5 · El entorno', tag: 'tag-module', tagLabel: 'MÓDULO 5',
        title: 'La metáfora del jardín',
        subtitle: 'Capítulo 5 — Crear ambientes donde la gente pueda crecer y prosperar',
        content: hero(heroGradients.m5, 'LECCIÓN 12', 'La metáfora del jardín — Cap. 5') + `
        ${note('Este capítulo me hizo ver mi empresa de una forma completamente diferente. Deje de verla como una maquína que produce resultados y empece a verla como un jardín que necesita cuidados diarios. La diferencia en resultados fue enorme.')}

        ${videoLink('Como crear una cultura organizacional exitosa — Alejandro Kasuga', 'd8dXJjAHlIA')}

        ${realImg('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800', 'Jardín floreciente con cuidado', 'El líder no hace crecer las plantas; crea las condiciones para que crezcan')}

        <div class="content-card">
            <h3>📖 No hacemos crecer, ayudamos a crecer</h3>
            <p>Simeón usa la metáfora del jardín. Chris, la entrenadora, explica como cultivar: buscar sol, remover la tierra, plantar, regar, fértilizar, quitar plagas y malas hierbas.</p>
            <p>Simeón pregunta: "¿Puedo decir que <em>yo</em> fui la causa de que el jardín creciera?" La respuesta: <strong>no. Tu no haces que las cosas crezcan. Solo pones las condiciones adecuadas.</strong></p>
        </div>

        <div class="content-card">
            <h3>🏥 Ejemplos en múltiples contextos</h3>
            <ul class="concept-list">
                <li><strong>Medicina:</strong> Ningun medico ha arreglado jamás un hueso roto. Solo crea condiciones para que el cuerpo se cure a sí mismo.</li>
                <li><strong>Terapia:</strong> Un buen terapeuta crea un ambiente seguro (respeto, confianza, aceptación). Una vez creado ese entorno, los pacientes empiezan a curarse solos.</li>
                <li><strong>Maternidad:</strong> Para que un bebe se desarrolle normalmente, necesita un ambiente sano en la matriz. Si no, ocurren complicaciones.</li>
                <li><strong>Orfanatos:</strong> Bebes sin contacto humano literalmente se marchitan y mueren.</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>🌱 Preguntas del jardinero-líder</h3>
            <p>Simeón dice que siempre se pregunta sobre su "jardín":</p>
            <ul class="concept-list">
                <li>¿Necesita mi jardín que lo abone con un poco de apreciación, reconocimiento y elogios?</li>
                <li>¿Necesita que le quite las malas hierbas? (malas actitudes, comportamientos toxicos)</li>
                <li>¿Tengo que ocuparme de eliminar las plagas? (conflictos no resueltos, chismes)</li>
                <li>¿Estoy siendo paciente con el tiempo que tarda en dar fruto?</li>
            </ul>
        </div>

        ${quizBlock('q_m5l1', '🎯 ¿Qué enseña la metáfora del jardín sobre el liderazgo?', [
            {text: 'Que el líder debe controlar cada aspecto del crecimiento de su equipo', correct: false},
            {text: 'Que el líder no hace crecer a la gente, sino que crea las condiciones adecuadas para que crezca', correct: true},
            {text: 'Que algunos empleados son como malas hierbas y hay que eliminarlos inmediatamente', correct: false},
            {text: 'Que el crecimiento solo es posible en ambientes perfectos sin ningun problema', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm5l2', module: 'Módulo 5 · El entorno', tag: 'tag-module', tagLabel: 'MÓDULO 5',
        title: 'Las cuentas bancarias de relaciones',
        subtitle: 'Capítulo 5 — Ingresos, reintegros y la regla de 4 a 1',
        content: hero(heroGradients.m5, 'LECCIÓN 13', 'Las cuentas bancarias de relaciones — Cap. 5') + `
        ${note('Kim introduce una metáfora brillante de Stephen Covey que Simeón adopta inmediatamente. Es tan práctica que la puedes usar HOY MISMO para diagnosticar el estado de tus relaciones.')}

        ${videoLink('Como crear un ambiente laboral sano y exitoso', 'XbyW3kQQbsk')}

        <div class="content-card">
            <h3>📖 La metáfora de la cuenta bancaria de relaciones</h3>
            <p>Igual que en una cuenta bancaria financiera, en nuestras relaciones hacemos <strong>ingresos y reintegros</strong> constantemente. La clave: no quedarse en números rojos.</p>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:16px 0;">
                <div style="background:#e8f5e9;padding:16px;border-radius:10px;">
                    <h4 style="color:#2e7d32;">✅ INGRESOS</h4>
                    <ul style="font-size:0.9em;margin:0;padding-left:16px;">
                        <li>Ser sincero y digno de confianza</li>
                        <li>Reconocer aprecio por la gente</li>
                        <li>Mantener tu palabra</li>
                        <li>Saber escuchar</li>
                        <li>No hablar de los demás a sus espaldas</li>
                        <li>Cortesia básica: hola, por favor, gracias</li>
                    </ul>
                </div>
                <div style="background:#ffebee;padding:16px;border-radius:10px;">
                    <h4 style="color:#c62828;">❌ REINTEGROS</h4>
                    <ul style="font-size:0.9em;margin:0;padding-left:16px;">
                        <li>Ser antipatico o poco cortés</li>
                        <li>Romper promesas o compromisos</li>
                        <li>Criticar a los demás por detrás</li>
                        <li>No escuchar bien</li>
                        <li>Ser engreido y arrogante</li>
                        <li>Reprender públicamente</li>
                    </ul>
                </div>
            </div>
        </div>

        ${realImg('https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=800', 'Balanza en equilibrio', 'Por cada reintegro en una relación, se necesitan cuatro ingresos para equilibrar la cuenta')}

        <div class="content-card">
            <h3>⚠️ La regla de 4 a 1</h3>
            <p>Según un estudio citado en <em>Psychology Today</em>: <strong>por cada reintegro en tu cuenta con alguien, hacen falta CUATRO ingresos para equilibrarla</strong>.</p>
            <p>Lee lo confirma: su mujer le dice todos los días cuanto lo quiere, pero el todavía recuerda cuando le dijo que estaba engordando.</p>
        </div>

        <div class="content-card">
            <h3>📢 Elogios en público, reprimendas en privado</h3>
            <ul class="concept-list">
                <li><strong>Reprender en público</strong> = reintegro con la persona Y con todos los que lo presencian ("¿Cuándo me tocara a mi?").</li>
                <li><strong>Elogiar en público</strong> = ingreso con la persona Y con todos los que están mirando.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>😮 El dato que humilla (y motiva)</h3>
            <p>Una encuesta citada por Simeón revela:</p>
            <ul class="concept-list">
                <li>El 85% de la gente se considera "por encima de la media".</li>
                <li>En "capacidad para llevarse bien con los demás", el <strong>100%</strong> se pone por encima de la medía.</li>
                <li>Un 25% se coloca entre el 1% más alto.</li>
            </ul>
            <p><strong>Somos mucho más sensibles de lo que admitimos.</strong> Cada reintegro duele más de lo que creemos.</p>
        </div>

        ${quizBlock('q_m5l2', '🎯 Según la metáfora de las cuentas bancarias de relaciones, ¿cuántos "ingresos" se necesitan para compensar un "reintegro"?', [
            {text: 'Uno por uno — un ingreso compensa un reintegro', correct: false},
            {text: 'Dos ingresos por cada reintegro', correct: false},
            {text: 'Cuatro ingresos por cada reintegro', correct: true},
            {text: 'Diez ingresos por cada reintegro', correct: false}
        ])}
        `
    });

    // ==============================================================
    // MÓDULO 6 — LA ELECCIÓN (Cap. 6)
    // ==============================================================

    C.lessons.push({
        id: 'm6l1', module: 'Módulo 6 · La elección', tag: 'tag-module', tagLabel: 'MÓDULO 6',
        title: 'Determinismo vs. libre albedrío',
        subtitle: 'Capítulo 6 — Deja de echarle la culpa al abuelo, al jefe o a la infancia',
        content: hero(heroGradients.m6, 'LECCIÓN 14', 'Determinismo vs. libre albedrío — Cap. 6') + `
        ${note('Este capítulo es un balde de agua fria. Simeón desmonta todas las excusas que usamos para no asumir responsabilidad. No es tu herencia genetica. No es tu infancia difícil. No es tu jefe toxico. Es TU ELECCIÓN. Duele, pero libera.')}

        ${videoLink('¿Existe la libertad? Lo que dice la Filosofía (en 10 minutos)', 'htRChYdMCYk')}

        <div class="content-card">
            <h3>📖 La trampa del determinismo</h3>
            <p>Freud planto las semillas de una idea peligrosa: que nuestras elecciones están determinadas por fuerzas inconscientes. Esto le ha dado a la sociedad todo tipo de excusas:</p>
            <ul class="concept-list">
                <li><strong>Determinismo genetico:</strong> "Soy alcoholico porque mi padre lo era."</li>
                <li><strong>Determinismo psiquico:</strong> "Tomo malas decisiones porque mi infancia fue terrible."</li>
                <li><strong>Determinismo ambiental:</strong> "Me porto mal en el trabajo porque mi jefe es pesimo."</li>
            </ul>
        </div>

        ${realImg('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800', 'Persona en una encrucijada de caminos', 'Aunque los genes y el ambiente nos influyen, seguimos siendo libres de elegir')}

        <div class="content-card">
            <h3>👶 Los trastornos de la responsabilidad</h3>
            <p>La enfermera Kim describe dos extremos:</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:16px 0;">
                <div style="background:#fff3e0;padding:16px;border-radius:10px;">
                    <h4>Neuróticos</h4>
                    <p style="font-size:0.9em;">Asumen <em>demasiada</em> responsabilidad. "Todo lo malo es culpa mía.""</p>
                </div>
                <div style="background:#ffebee;padding:16px;border-radius:10px;">
                    <h4>Trastornos del carácter</h4>
                    <p style="font-size:0.9em;">Asumen <em>demasiado poca</em> responsabilidad. "Todo lo malo es culpa de otro."</p>
                </div>
            </div>
            <p>La persona sana está en el equilibrio: acepta lo que es su responsabilidad y deja lo que no lo es.</p>
        </div>

        <div class="content-card">
            <h3>👯 La prueba de los gemelos</h3>
            <p>Gemelos idénticos: mismos genes (naturaleza), mismo hogar (cultura). Y sin embargo, son dos personas distintas con personalidades diferentes. <strong>Si todo estuviera determinado, serían idénticos en todo.</strong></p>
        </div>

        <div class="content-card tip">
            <h3>💡 Responsabilidad = responder + habilidad</h3>
            <p>John comparte un insight de un curso de ética: la palabra "responsabilidad" contiene "habilidad para responder". Entre el estímulo y la respuesta, <strong>siempre hay un espacio donde puedes elegir</strong>.</p>
        </div>

        ${quizBlock('q_m6l1', '🎯 ¿Por qué critica Simeón el determinismo estricto de Freud?', [
            {text: 'Porque Freud no tenía título universitario y sus teorías eran inventadas', correct: false},
            {text: 'Porque le proporciona a la sociedad excusas para evitar asumir responsabilidad de sus acciones', correct: true},
            {text: 'Porque la psicología no tiene ninguna utilidad práctica en el liderazgo', correct: false},
            {text: 'Porque Simeón es un monje y rechaza toda la ciencia moderna', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm6l2', module: 'Módulo 6 · La elección', tag: 'tag-module', tagLabel: 'MÓDULO 6',
        title: 'La praxis: de los actos a los sentimientos',
        subtitle: 'Capítulo 6 — Fíngelo hasta que lo hagas bueno',
        content: hero(heroGradients.m6, 'LECCIÓN 15', 'La praxis — Cap. 6') + `
        ${note('Este concepto es oro puro. Todos pensamos que primero hay que sentir para actuar. "Cuando me sienta motivado, empezaré a tratar bien a mi equipo." Simeón dice lo contrario: primero actúa, y los sentimientos vendrán. La praxis es el puente entre la decisión y la transformación.')}

        ${videoLink('Las 12 leyes de la disciplina que cambiarán tu vida — Brian Tracy', 'DZl0S5buCSk')}

        <div class="content-card">
            <h3>📖 ¿Qué es la praxis?</h3>
            <p>Generalmente creemos que nuestros sentimientos e ideas determinan nuestro comportamiento. Y es cierto. Pero la praxis nos enseña que <strong>lo contrario también es cierto</strong>:</p>
            <blockquote class="book-quote" style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px 16px;border-radius:6px;">Nuestro comportamiento también tiene influencia sobre nuestras ideas y nuestros sentimientos.</blockquote>
            <p>Cuando nos comprometemos a dedicar atención, tiempo y esfuerzo a alguien, con el tiempo desarrollamos sentimientos hacía esa persona. Los psicólogos dicen que "catectizamos" el objeto de nuestra atención — nos apegamos, nos quedamos "enganchados".</p>
        </div>

        ${realImg('https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=800', 'Persona corriendo al amanecer', 'Como en el ejercicio físico: al principio cuesta, pero con práctica los músculos emocionales se fortalecen')}

        <div class="content-card">
            <h3>💑 El matrimonio de 30 días</h3>
            <p>Tony Campolo describe un ejercicio para matrimonios en crisis: la pareja se compromete durante 30 días a tratarse como cuando se estaban cortejando. El le dice que es bellísima, le compra flores, la saca a cenar. Ella le dice que es atractivo, le hace sus platos favoritos.</p>
            <p><strong>Las parejas que lo llevan a cabo siempre consiguen que vuelvan los sentimientos.</strong> Eso es praxis: sentimientos que nacen de comportamientos.</p>
        </div>

        <div class="content-card">
            <h3>⚔️ La praxis inversa</h3>
            <p>La praxis funciona en ambas direcciones:</p>
            <ul class="concept-list">
                <li><strong>Praxis positiva:</strong> Tratas bien a alguien → con el tiempo lo aprecias más.</li>
                <li><strong>Praxis negativa:</strong> Tratas mal a alguien → con el tiempo lo odías más. (En la guerra se deshumaniza al enemigo para facilitar matarlo.)</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>🏋️ La analogía de los músculos</h3>
            <p>Simeón lo compara con el ejercicio físico: forzar y desarrollar los músculos emocionales es como desarrollar los físicos. Al principio es difícil. Pero con disciplina y práctica, <strong>los músculos emocionales adquieren un tamano y una fuerza de la que no te haces idea</strong>.</p>
            <blockquote class="book-quote" style="background:#f3e5f5;border-left:4px solid #7b1fa2;padding:12px 16px;border-radius:6px;">Es más fácil traducir nuestras acciones en sentimientos que traducir nuestros sentimientos en acciones. — Jerome Brunner, Harvard</blockquote>
        </div>

        ${quizBlock('q_m6l2', '🎯 ¿Qué enseña el concepto de praxis?', [
            {text: 'Que solo debemos actuar cuando sentimos la motivación correcta', correct: false},
            {text: 'Que los sentimientos son irrelevantes y debemos ignorarlos siempre', correct: false},
            {text: 'Que nuestros comportamientos influyen en nuestros sentimientos — actuando bien, los sentimientos positivos vendrán', correct: true},
            {text: 'Que fingir emociones es la clave del éxito en el liderazgo', correct: false}
        ])}
        `
    });

    // ==============================================================
    // MÓDULO 7 — LOS RESULTADOS (Cap. 7)
    // ==============================================================

    C.lessons.push({
        id: 'm7l1', module: 'Módulo 7 · Los resultados', tag: 'tag-module', tagLabel: 'MÓDULO 7',
        title: 'Disciplina y recompensa múltiple',
        subtitle: 'Capítulo 7 — Todo esfuerzo disciplinado tiene una recompensa múltiple',
        content: hero(heroGradients.m7, 'LECCIÓN 16', 'Disciplina y recompensa — Cap. 7') + `
        ${note('El último módulo responde la pregunta que todos nos hacemos: ¿vale la pena tanto esfuerzo? La respuesta de Simeón es contundente: la disciplina del liderazgo de servicio no es un costo, es una inversión con retornos múltiples.')}

        ${videoLink('Yokoi Kenji — Disciplina', 'd6KleH5mLms')}

        <div class="content-card">
            <h3>📖 ¿Vale la pena?</h3>
            <p>John pregunta con voz temblorosa: <em>"Parece mucho trabajo... El esfuerzo de prestar atención, de amar, de dar lo mejor de uno mismo... ¿vale la pena tanto esfuerzo?"</em></p>
            <p>Simeón responde: <em>"El líder que se funda en la autoridad está llamado a hacer muchas elecciones y muchos sacrificios. Se requiere mucha disciplina. Pero es lo que nos comprometimos a hacer cuando nos ofrecimos a ser líderes."</em></p>
        </div>

        ${realImg('https://images.unsplash.com/photo-1552508744-1696d4464960?w=800', 'Atleta entrenando con disciplina', 'Como en el deporte, la disciplina del liderazgo siempre compensa')}

        <div class="content-card">
            <h3>🎯 Las recompensas múltiples</h3>
            <p>El grupo identifica múltiples compensaciones:</p>
            <ol class="concept-list">
                <li><strong>Influencia real:</strong> Si das lo mejor de ti y te sacrificas por los demás, tendrás influencia sobre ellos. Un líder con influencia es un líder muy solicitado.</li>
                <li><strong>Mision y propósito:</strong> Greg lo dice mejor: "La disciplina del liderazgo te da una razón para levantarte por la mañana."</li>
                <li><strong>Ideario personal:</strong> No basta con que la organización tenga valores escritos en la pared. <strong>La gente se deja convencer más por el líder que por el ideario.</strong></li>
                <li><strong>Conformidad espíritual:</strong> Dirigir con autoridad es vivir la Regla de Oro. Tratar a los demás como quisieras ser tratado.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>👴 La encuesta de los 100 mayores de 90 años</h3>
            <p>Les preguntaron: "Si volviera a vivir, ¿qué haría de forma diferente?" Las tres respuestas más frecuentes:</p>
            <ol class="concept-list">
                <li><strong>Tomaria más riesgos.</strong></li>
                <li><strong>Reflexiónaria más.</strong></li>
                <li><strong>Haria más cosas que me sobrevivieran.</strong></li>
            </ol>
            <p>El liderazgo de servicio cumple con las tres: requiere riesgo, exige reflexión, y deja huella en las vidas de otros.</p>
        </div>

        ${quizBlock('q_m7l1', '🎯 Según la encuesta de los mayores de 90 años, ¿qué harían de forma diferente?', [
            {text: 'Ganarian más dinero, comprarian más cosas y viajarian más', correct: false},
            {text: 'Tomarian más riesgos, reflexiónarian más y harían más cosas que les sobrevivieran', correct: true},
            {text: 'Trabajarian menos y se dedicarian solo a su familia', correct: false},
            {text: 'Cambiarian de profesión y se harían monjes como Simeón', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm7l2', module: 'Módulo 7 · Los resultados', tag: 'tag-module', tagLabel: 'MÓDULO 7',
        title: 'Gozo, propósito y trascendencia',
        subtitle: 'Capítulo 7 — La recompensa definitiva del liderazgo de servicio',
        content: hero(heroGradients.m7, 'LECCIÓN 17', 'Gozo y trascendencia — Cap. 7') + `
        ${note('Esta es la última lección antes del examen, y es la más profunda. Simeón distingue entre felicidad (que depende de lo que pasa) y gozo (que depende de quién eres). El liderazgo de servicio no te promete que todo saldrá bien. Te promete algo mejor: una vida con sentido.')}

        ${videoLink('Basa tu liderazgo en el servicio — Abdiel Ledesma | TEDx', '44Po-MfGLVI')}

        <div class="content-card">
            <h3>📖 Felicidad vs. Gozo</h3>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:16px 0;">
                <div style="background:#fff3e0;padding:16px;border-radius:10px;">
                    <h4>😊 Felicidad</h4>
                    <p style="font-size:0.9em;">Se funda en los sucesos externos. Cosas buenas = feliz. Cosas malas = infeliz. Es efimera e inestable.</p>
                </div>
                <div style="background:#e8f5e9;padding:16px;border-radius:10px;">
                    <h4>✨ Gozo</h4>
                    <p style="font-size:0.9em;">Fenomeno mucho más profundo. No depende de circunstancias exteriores. Es la satisfacción interior de vivir según principios inmutables.</p>
                </div>
            </div>
            <p>Buda, Jesús, Gandhi, King, la Madre Teresa — todos hablaron de ese gozo. <strong>Servir a los otros nos libera de las cadenas del egoismo que estrangulan el gozo de la vida.</strong></p>
        </div>

        ${realImg('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800', 'Persona ayudando a otros con alegría', 'Servir a los demás nos libera del egoismo y nos llena de gozo')}

        <div class="content-card">
            <h3>👶 El problema del niño de dos años</h3>
            <p>Rachael, la esposa de John (psicóloga), lo explica así: los recién nacidos son las criaturas más egoístas — piden todo a grito pelado. Es natural y necesario para sobrevivir. Pero hay adultos que siguen siendo niños de dos años emocionales, pretendiendo que el mundo entero satisfaga sus deseos.</p>
            <p>Estas personas levantan murallás emocionales para proteger sus vidas centradas en sí mismas. <strong>Son las personas más solas y más desdichadas.</strong></p>
        </div>

        <div class="content-card">
            <h3>🌅 El dicho de la tribu indía</h3>
            <blockquote class="book-quote" style="background:#f3e5f5;border-left:4px solid #7b1fa2;padding:16px 20px;border-radius:8px;font-size:1.05em;">Cuando naciste, lloraste y el mundo se lleno de gozo. Vive tu vida de manera que cuando mueras el mundo llore y tu te llenes de gozo.</blockquote>
        </div>

        <div class="content-card tip">
            <h3>🏁 La paradoja resuelta</h3>
            <p>Ahora entiendes el título del libro. La paradoja es esta:</p>
            <ul class="concept-list">
                <li>Para <strong>mandar</strong>, hay que <strong>servir</strong>.</li>
                <li>Para <strong>recibir</strong>, hay que <strong>dar</strong>.</li>
                <li>Para <strong>ser el primero</strong>, hay que estar dispuesto a ser el <strong>último</strong>.</li>
                <li>Para <strong>tener gozo</strong>, hay que <strong>olvidarse de uno mismo</strong>.</li>
            </ul>
            <p>Es contraintuitivo. Es incomodo. Es la verdad más profunda sobre el liderazgo que existe.</p>
        </div>

        ${quizBlock('q_m7l2', '🎯 ¿Cuál es "la paradoja" que da título al libro?', [
            {text: 'Que los líderes exitosos nunca son felices en su vida personal', correct: false},
            {text: 'Que para mandar hay que servir — la influencia real viene del sacrificio, no del poder', correct: true},
            {text: 'Que los monasterios son mejores escuelas de negocios que las universidades', correct: false},
            {text: 'Que la religion es más importante que la ciencia en el liderazgo', correct: false}
        ])}
        `
    });

    // ==============================================================
    // EXAMEN FINAL
    // ==============================================================
    C.lessons.push({
        id: 'final_exam', module: 'Examen final', tag: 'tag-exam', tagLabel: 'EXAMEN',
        title: 'Examen final — La Paradoja',
        subtitle: 'Demuestra tu dominio del liderazgo de servicio · 10 preguntas · Aprueba con 7',
        content: hero(heroGradients.exam, 'EXAMEN FINAL', 'La Paradoja — James C. Hunter') + `
        ${note('Este examen evalúa tu comprensión de los 7 capítulos del libro. Necesitas 7 de 10 respuestas correctas para obtener tu certificado. No hay límite de tiempo. Lee cada pregunta con cuidado.')}

        <div class="content-card" style="text-align:center;">
            <h3>📝 Instrucciones</h3>
            <p>Selecciona la respuesta correcta para cada pregunta. Se requieren <strong>7 aciertos de 10</strong> para aprobar.</p>
            <p style="font-size:0.9em;color:#666;">Una vez que seleccionas una respuesta, no puedes cambiarla.</p>
        </div>

        ${finalQ('final_q1', '1. ¿Cómo se define "liderazgo" en el libro?', [
            {text: 'La capacidad de dar ordenes efectivas', correct: false},
            {text: 'El arte de influir sobre la gente para que trabaje con entusiasmo en la consecución de objetivos en pro del bien común', correct: true},
            {text: 'La habilidad de gestionar recursos de forma eficiente', correct: false},
            {text: 'El poder que confiere una posición jerarquica elevada', correct: false}
        ])}

        ${finalQ('final_q2', '2. ¿Cuál es la diferencia fundamental entre poder y autoridad?', [
            {text: 'El poder viene del carisma y la autoridad viene del cargo', correct: false},
            {text: 'No hay diferencia, son términos intercambiables', correct: false},
            {text: 'El poder fuerza por posición; la autoridad consigue voluntariamente por influencia personal', correct: true},
            {text: 'El poder es para empresas y la autoridad para familias', correct: false}
        ])}

        ${finalQ('final_q3', '3. ¿En que se funda la autoridad según el modelo de Simeón?', [
            {text: 'En la inteligencia emocional del líder', correct: false},
            {text: 'En el servicio y el sacrificio', correct: true},
            {text: 'En la experiencia y la antiguedad', correct: false},
            {text: 'En el dinero y los recursos materiales', correct: false}
        ])}

        ${finalQ('final_q4', '4. ¿Qué tipo de amor (ágape) describe el libro como base del liderazgo?', [
            {text: 'Un sentimiento profundo de afecto y cariño', correct: false},
            {text: 'La atracción romántica entre dos personas', correct: false},
            {text: 'Un amor incondicional basado en el comportamiento y la elección, no en emociones', correct: true},
            {text: 'El amor fraternal reciproco (si me tratas bien, te trato bien)', correct: false}
        ])}

        ${finalQ('final_q5', '5. ¿Qué propone la "pirámide invertida"?', [
            {text: 'Eliminar todos los niveles jerarquicos', correct: false},
            {text: 'Que el líder está al servicio de quiénes sirven al cliente', correct: true},
            {text: 'Que los clientes deben dirigir la empresa', correct: false},
            {text: 'Que las decisiones se toman por votación democrática', correct: false}
        ])}

        ${finalQ('final_q6', '6. Según la metáfora del jardín, ¿qué rol tiene el líder?', [
            {text: 'Hacer crecer directamente a las personas', correct: false},
            {text: 'Arrancar a los empleados que no dan fruto inmediato', correct: false},
            {text: 'Crear las condiciones adecuadas para que la gente crezca', correct: true},
            {text: 'Dejar que todo crezca de forma natural sin intervenir', correct: false}
        ])}

        ${finalQ('final_q7', '7. ¿Qué enseña la praxis?', [
            {text: 'Que debemos esperar a sentirnos motivados para actuar', correct: false},
            {text: 'Que los comportamientos positivos generan sentimientos positivos con el tiempo', correct: true},
            {text: 'Que los sentimientos siempre preceden a las acciones', correct: false},
            {text: 'Que fingir emociones es necesario para el éxito', correct: false}
        ])}

        ${finalQ('final_q8', '8. ¿Cuantos "ingresos" se necesitan para compensar un "reintegro" en una cuenta de relación?', [
            {text: 'Uno', correct: false},
            {text: 'Dos', correct: false},
            {text: 'Cuatro', correct: true},
            {text: 'Diez', correct: false}
        ])}

        ${finalQ('final_q9', '9. ¿Cuál es la diferencia entre felicidad y gozo según Simeón?', [
            {text: 'Son sinónimos, no hay diferencia', correct: false},
            {text: 'La felicidad depende de sucesos externos; el gozo es satisfacción interior basada en principios', correct: true},
            {text: 'La felicidad es para gente común y el gozo es para personas religiosas', correct: false},
            {text: 'El gozo es temporal y la felicidad es permanente', correct: false}
        ])}

        ${finalQ('final_q10', '10. ¿Cuál es "la paradoja" del título del libro?', [
            {text: 'Que los monjes saben más de negocios que los ejecutivos', correct: false},
            {text: 'Que la tecnología moderna nos aleja del liderazgo', correct: false},
            {text: 'Que para mandar hay que servir — la influencia real viene del sacrificio, no del poder', correct: true},
            {text: 'Que los problemas personales siempre afectan los resultados empresariales', correct: false}
        ])}
        `
    });

    // ==============================================================
    // CERTIFICADO
    // ==============================================================
    C.lessons.push({
        id: 'certificate', module: 'Certificado', tag: 'tag-cert', tagLabel: 'CERTIFICADO',
        title: 'Certificado de finalización',
        subtitle: 'Has demostrado dominio de los principios del liderazgo de servicio',
        content: hero(heroGradients.cert, '🎓 CERTIFICADO', 'La Paradoja — Liderazgo de Servicio') + `
        <div class="content-card" style="text-align:center;padding:30px;">
            <h2>🏆 ¡Felicidades!</h2>
            <p>Has completado el curso <strong>La Paradoja</strong> de James C. Hunter y has demostrado dominio de los principios del liderazgo de servicio.</p>
            <p>Recuerda: el liderazgo no es un destino, es un viaje diario. Cada mañana tienes la oportunidad de elegir servir, amar con tus actos y construir autoridad real.</p>
            <blockquote class="book-quote" style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:16px 20px;border-radius:8px;font-size:1.05em;">Cuando naciste, lloraste y el mundo se lleno de gozo. Vive tu vida de manera que cuando mueras el mundo llore y tu te llenes de gozo.</blockquote>
            <p style="margin-top:20px;font-size:0.95em;color:#555;">Tu certificado aparecera a continuación. Descargalo o compartelo.</p>
        </div>
        `
    });

})();

// Registro en plataforma
if (typeof window !== 'undefined') {
    window.TRIKLES_COURSES = window.TRIKLES_COURSES || {};
    window.TRIKLES_COURSES['la-paradoja'] = COURSE_LA_PARADOJA;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COURSE_LA_PARADOJA;
}
