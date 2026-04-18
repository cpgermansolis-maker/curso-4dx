// ==================================================================
// CURSO FOOD-BEVERAGE — Control de Costos en Restaurantes y Hoteles
// Basado en "Food and Beverage Cost Control"
// Lea R. Dopson y David K. Hayes (John Wiley & Sons)
// Adaptación al español (traducción libre) con aplicación a México y
// Latinoamérica. Instructor: LADE Germán Solís Muñoz — TRIKLES.
// Uso con fines exclusivamente didácticos — art. 148 LFDA.
// ==================================================================

const COURSE_FOOD_BEVERAGE = {
    id: 'food-beverage',
    meta: {
        title: 'Control de Costos en Alimentos y Bebidas',
        subtitle: 'El método profesional para restaurantes rentables — Dopson & Hayes, adaptado a Latinoamérica',
        author: 'Lea R. Dopson & David K. Hayes (traducción y adaptación TRIKLES)',
        cover: 'assets/covers/food-beverage.jpg',
        description: 'El curso más completo en español sobre control de costos de alimentos y bebidas, adaptado desde el libro de referencia mundial de Dopson & Hayes. 30 lecciones profundas que te llevan paso a paso desde los fundamentos (estado de resultados, pronóstico de ventas) hasta la ingeniería de menú, el análisis CVP, el presupuesto anual y la seguridad del efectivo. Adaptado a la realidad mexicana y latinoamericana: pesos MXN, IVA, IMSS, proveedores locales, costos de apertura y operación de restaurantes en México. Incluye citas textuales del libro (traducción libre), fórmulas, casos de estudio, ejercicios, videos en español y examen final de 15 preguntas con umbral de 80% para certificarse.',
        descripcionCorta: 'Curso profesional de control de costos F&B: del estado de resultados al análisis CVP. 30 lecciones, adaptado a México.',
        category: 'Gastronomía y hospitalidad',
        lessonsCount: 30,
        duration: '15-18 horas',
        level: 'Intermedio-Avanzado — dueños, gerentes, chefs y administradores F&B',
        active: true,
        tags: ['gastronomía', 'restaurantes', 'costos', 'F&B', 'inventario', 'pricing', 'menú', 'rentabilidad', 'hotelería', 'Dopson', 'Hayes']
    },

    lessonRequirements: {
        0:  ['q_intro'],
        1:  ['q_m1l1'],  2: ['q_m1l2'],  3: ['q_m1l3'],
        4:  ['q_m2l1'],  5: ['q_m2l2'],  6: ['q_m2l3'],  7: ['q_m2l4'],  8: ['q_m2l5'],
        9:  ['q_m3l1'], 10: ['q_m3l2'], 11: ['q_m3l3'],
        12: ['q_m4l1'], 13: ['q_m4l2'], 14: ['q_m4l3'],
        15: ['q_m5l1'], 16: ['q_m5l2'], 17: ['q_m5l3'],
        18: ['q_m6l1'], 19: ['q_m6l2'], 20: ['q_m6l3'], 21: ['q_m6l4'],
        22: ['q_m7l1'], 23: ['q_m7l2'],
        24: ['q_m8l1'], 25: ['q_m8l2'], 26: ['q_m8l3'], 27: ['q_m8l4'],
        28: ['q_m9l1'], 29: ['q_m9l2'], 30: ['q_m9l3'],
        31: ['final_q1','final_q2','final_q3','final_q4','final_q5','final_q6','final_q7','final_q8','final_q9','final_q10','final_q11','final_q12','final_q13','final_q14','final_q15'],
        32: []
    },

    examPassScore: 12,  // 12 de 15 = 80%

    certificate: {
        courseNameForCert: 'Control de Costos en Alimentos y Bebidas<br>Método Dopson &amp; Hayes — Adaptado a Latinoamérica',
        description: 'Habiendo demostrado dominio profesional del control de costos en operaciones gastronómicas: estado de resultados, pronóstico de ventas, recetas estandarizadas, control de inventario, compras y recepción, costo de alimentos y bebidas vendidos, costo laboral y productividad, pricing de menú, análisis financiero e ingeniería de menú, análisis costo-volumen-utilidad, presupuesto y seguridad de ingresos.'
    },

    lessons: []
};

// ==================================================================
// Helpers — IIFE
// ==================================================================
(function() {
    const C = COURSE_FOOD_BEVERAGE;

    const heroGradients = {
        intro:  'linear-gradient(135deg,#3e2723 0%,#5d4037 55%,#ff8f00 100%)',
        m1:     'linear-gradient(135deg,#1a237e 0%,#283593 60%,#64b5f6 100%)',
        m2:     'linear-gradient(135deg,#2e7d32 0%,#43a047 60%,#a5d6a7 100%)',
        m3:     'linear-gradient(135deg,#4a148c 0%,#8e24aa 60%,#ce93d8 100%)',
        m4:     'linear-gradient(135deg,#e65100 0%,#fb8c00 60%,#ffe0b2 100%)',
        m5:     'linear-gradient(135deg,#c2185b 0%,#d81b60 60%,#f8bbd0 100%)',
        m6:     'linear-gradient(135deg,#006064 0%,#0097a7 60%,#80deea 100%)',
        m7:     'linear-gradient(135deg,#bf360c 0%,#d84315 60%,#ffab91 100%)',
        m8:     'linear-gradient(135deg,#263238 0%,#37474f 60%,#90a4ae 100%)',
        m9:     'linear-gradient(135deg,#311b92 0%,#512da8 60%,#b39ddb 100%)',
        exam:   'linear-gradient(135deg,#b71c1c 0%,#e53935 60%,#ffb300 100%)',
        cert:   'linear-gradient(135deg,#3e2723 0%,#5d4037 55%,#d7a86e 100%)'
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

    function formula(expr, note) {
        return `
        <div class="content-card" style="background:#263238;color:white;padding:20px;border-radius:12px;text-align:center;margin:16px 0;">
            <div style="font-size:1.3em;font-weight:900;font-family:'Courier New',monospace;letter-spacing:0.5px;">${expr}</div>
            ${note ? `<div style="font-size:0.85em;opacity:0.8;margin-top:8px;">${note}</div>` : ''}
        </div>`;
    }

    function quote(text, author) {
        return `
        <blockquote class="book-quote" style="background:#fff3e0;border-left:4px solid #e65100;padding:14px 18px;border-radius:6px;font-style:italic;margin:16px 0;">
            ${text}
            ${author ? `<div style="text-align:right;font-style:normal;font-weight:bold;margin-top:8px;font-size:0.88em;">— ${author}</div>` : ''}
        </blockquote>`;
    }

    // ==============================================================
    // 0 — INTRODUCCIÓN
    // ==============================================================
    C.lessons.push({
        id: 'intro', module: 'Introducción', tag: 'tag-intro', tagLabel: 'INTRODUCCIÓN',
        title: 'Por qué el control de costos es vida o muerte',
        subtitle: 'Prólogo: la ecuación fundamental del negocio gastronómico',
        content: `
        <div class="lesson-hero" style="background:${heroGradients.intro};min-height:220px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:30px;">
            <div>
                <div style="font-family:Georgia,serif;font-size:2em;font-weight:900;letter-spacing:2px;text-shadow:2px 2px 8px rgba(0,0,0,0.35);">CONTROL DE COSTOS</div>
                <div style="font-size:1.1em;margin-top:8px;opacity:0.95;font-style:italic;">Alimentos y Bebidas — Método Dopson &amp; Hayes</div>
                <div style="margin-top:16px;font-size:0.85em;letter-spacing:4px;opacity:0.9;">CURSO PROFESIONAL · ADAPTADO A LATINOAMÉRICA</div>
            </div>
        </div>

        ${note('Bienvenido al curso más completo en español sobre control de costos en restaurantes. Este libro de Dopson y Hayes es <em>el</em> texto de referencia usado en la mayoría de las escuelas de hotelería y gastronomía del mundo. Lo he traducido libremente y adaptado a la realidad mexicana y latinoamericana, con pesos MXN, IVA, IMSS, proveedores locales y casos reales de restaurantes que operan aquí. Al final no solo sabrás controlar costos — <strong>sabrás si tu restaurante está ganando o perdiendo dinero de verdad</strong>.', 'Bienvenida del instructor · LADE Germán Solís Muñoz')}

        ${videoLink('Cómo calcular el costo de venta de un platillo y aumentar la rentabilidad', 'EYbm6e66WAo')}

        ${realImg('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800', 'Chef en cocina profesional', 'El 60% de los restaurantes cierra en sus primeros 3 años. La causa #1 no es la comida: es el mal control de costos')}

        <div class="content-card">
            <h3>💀 La estadística que pocos dueños conocen</h3>
            <p>Según la Asociación Nacional de Restaurantes de México (CANIRAC) y la National Restaurant Association:</p>
            <ul class="concept-list">
                <li><strong>60% de los restaurantes cierran</strong> en sus primeros 3 años de operación.</li>
                <li>De los que sobreviven, <strong>la mitad</strong> apenas alcanza rentabilidad marginal (menos del 5%).</li>
                <li>Solo <strong>1 de cada 10</strong> restaurantes logra utilidades superiores al 15% sobre ventas.</li>
                <li><strong>La causa #1 de cierre NO es la calidad de la comida</strong> — es el descontrol de costos.</li>
            </ul>
            <p>Este curso existe para que tú estés en ese 10% superior.</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">📖</span><div>
                <h3>El libro detrás del curso</h3>
                <p><strong>Lea R. Dopson</strong> (Texas Tech University) y <strong>David K. Hayes</strong> (Purdue) publicaron la primera edición de <em>Food and Beverage Cost Control</em> en 1997. Hoy va en su 7ª edición y se usa como libro de texto en las principales universidades de hospitalidad del mundo.</p>
                <p>¿Por qué es especial? Porque <strong>no es un libro de contabilidad</strong>. Es un libro escrito por operadores de restaurante para operadores de restaurante. Cada fórmula, cada caso, cada ejercicio viene de situaciones reales de la industria. Es práctico, no teórico.</p>
                <p>Este curso traduce el 100% de los conceptos clave y los adapta al contexto latinoamericano: precios en pesos, impuestos mexicanos, cultura gastronómica local, proveedores típicos.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>🎯 ¿Para quién es este curso?</h3>
            <ul class="concept-list">
                <li><strong>Dueños de restaurante, cafetería, bar o food truck</strong> que sienten que "venden mucho pero les queda poco".</li>
                <li><strong>Chefs y gerentes</strong> que tienen responsabilidad P&amp;L y quieren subir de nivel profesional.</li>
                <li><strong>Estudiantes de gastronomía y hotelería</strong> que quieren complementar lo que ven en clase con aplicación real.</li>
                <li><strong>Contadores y administradores</strong> que llevan restaurantes y necesitan hablar el idioma de la operación.</li>
                <li><strong>Inversionistas gastronómicos</strong> que quieren entender qué preguntarle al operador.</li>
                <li><strong>Franquiciatarios</strong> de cadenas (KFC, Starbucks, Vips, El Pollo Loco, etc.) que quieren maximizar el desempeño de su unidad.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>🗺️ Estructura del curso — 30 lecciones en 9 módulos</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;">
                <tr style="background:#f5f5f5;"><td style="padding:8px;border:1px solid #ddd;"><strong>Módulo 1</strong></td><td style="padding:8px;border:1px solid #ddd;">Fundamentos económicos — P&amp;L y pronóstico</td><td style="padding:8px;border:1px solid #ddd;">3 lecc.</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Módulo 2</strong></td><td style="padding:8px;border:1px solid #ddd;">Costo de alimentos — recetas, inventario, compras</td><td style="padding:8px;border:1px solid #ddd;">5 lecc.</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:8px;border:1px solid #ddd;"><strong>Módulo 3</strong></td><td style="padding:8px;border:1px solid #ddd;">Costo de bebidas — cerveza, vino, licor</td><td style="padding:8px;border:1px solid #ddd;">3 lecc.</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Módulo 4</strong></td><td style="padding:8px;border:1px solid #ddd;">Producción — programación, merma, robo</td><td style="padding:8px;border:1px solid #ddd;">3 lecc.</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:8px;border:1px solid #ddd;"><strong>Módulo 5</strong></td><td style="padding:8px;border:1px solid #ddd;">Pricing de menú</td><td style="padding:8px;border:1px solid #ddd;">3 lecc.</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Módulo 6</strong></td><td style="padding:8px;border:1px solid #ddd;">Costo de mano de obra</td><td style="padding:8px;border:1px solid #ddd;">4 lecc.</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:8px;border:1px solid #ddd;"><strong>Módulo 7</strong></td><td style="padding:8px;border:1px solid #ddd;">Otros gastos operativos</td><td style="padding:8px;border:1px solid #ddd;">2 lecc.</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Módulo 8</strong></td><td style="padding:8px;border:1px solid #ddd;">Análisis financiero e ingeniería de menú</td><td style="padding:8px;border:1px solid #ddd;">4 lecc.</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:8px;border:1px solid #ddd;"><strong>Módulo 9</strong></td><td style="padding:8px;border:1px solid #ddd;">Seguridad del dinero y tecnología</td><td style="padding:8px;border:1px solid #ddd;">3 lecc.</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;" colspan="2"><strong>Examen final + Certificado TRIKLES</strong></td><td style="padding:8px;border:1px solid #ddd;">15 preguntas</td></tr>
            </table>
        </div>

        <div class="content-card tip">
            <h3>💡 Cómo sacarle el máximo provecho</h3>
            <ol>
                <li><strong>Aplica mientras aprendes.</strong> Cada lección te pide hacer algo con tu operación real. No avances sin hacerlo.</li>
                <li><strong>Ten a la mano los números de tu negocio.</strong> Ventas de la semana pasada, facturas de proveedores, lista de menú, nómina. Vas a necesitarlos.</li>
                <li><strong>No te saltes las fórmulas.</strong> Son 12 fórmulas clave en todo el curso. Si las dominas, ya sabes el 80% del control de costos.</li>
                <li><strong>El examen final tiene 15 preguntas.</strong> Necesitas <strong>12 correctas (80%)</strong> para certificarte.</li>
            </ol>
        </div>

        ${quote('El control de costos no es un evento, es un proceso. No se hace una vez al mes cuando sale el estado de resultados. Se hace todos los días, cada compra, cada plato que se manda, cada hora de nómina que se programa.', 'Dopson &amp; Hayes (traducción libre)')}

        ${quizBlock('q_intro', '🎯 Según la estadística presentada, ¿cuál es la causa #1 del cierre de restaurantes?', [
            {text: 'La mala calidad de la comida', correct: false},
            {text: 'La ubicación inadecuada', correct: false},
            {text: 'El descontrol de costos', correct: true},
            {text: 'La competencia excesiva', correct: false}
        ])}
        `
    });


    // ==============================================================
    // MÓDULO 1 — FUNDAMENTOS ECONÓMICOS (Caps. 1-2)
    // ==============================================================
    C.lessons.push({
        id: 'm1l1', module: 'Módulo 1 · Fundamentos económicos', tag: 'tag-module', tagLabel: 'MÓDULO 1',
        title: 'Ingresos, gastos y utilidad — la ecuación del negocio',
        subtitle: 'Capítulo 1 — La fórmula que todo operador debe tener tatuada',
        content: hero(heroGradients.m1, 'LECCIÓN 1', 'Ingresos, gastos y utilidad — Cap. 1') + `
        ${note('Esta es la lección más importante del curso porque contiene la fórmula que rige TODO lo demás. Si la entiendes de verdad, entiendes por qué un restaurante puede vender muchísimo y aun así perder dinero. Si no la entiendes, nada de lo siguiente te hará sentido.')}

        ${videoLink('E.G.P. (Estado de ganancias y pérdidas) aplicado a restaurantes', 'bkZ7n5cqAvY')}

        ${realImg('https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800', 'Caja registradora de restaurante', 'Vender no es ganar. La diferencia entre lo que cobras y lo que gastas es lo único que importa')}

        <div class="content-card">
            <h3>📐 Las dos fórmulas fundamentales</h3>
            <p>Dopson y Hayes presentan dos fórmulas que parecen iguales pero son completamente distintas:</p>
            ${formula('Ingresos − Gastos = Utilidad', 'La fórmula del contador: suma lo que entra, resta lo que sale, lo que queda es la ganancia')}
            ${formula('Ingresos − Utilidad deseada = Gasto ideal', 'La fórmula del operador profesional: primero decido cuánto quiero ganar, luego dimensiono lo que puedo gastar')}
            <p>La diferencia es de paradigma:</p>
            <ul class="concept-list">
                <li><strong>Fórmula 1 (reactiva):</strong> "A ver qué queda al final del mes". La utilidad es el residuo.</li>
                <li><strong>Fórmula 2 (proactiva):</strong> "Decido que quiero 15% de utilidad, entonces mis gastos NO pueden pasar del 85% de mis ventas". La utilidad es un objetivo.</li>
            </ul>
            ${quote('La utilidad no es lo que sobra después de pagar las cuentas. La utilidad es la recompensa por entregar valor. Si no la planeas desde el principio, no la vas a tener al final.', 'Dopson &amp; Hayes (traducción libre)')}
        </div>

        <div class="content-card">
            <h3>💵 Ingresos (ventas) — solo hay dos palancas</h3>
            <p>Por más que parezca complicado, los ingresos de un restaurante solo dependen de dos variables:</p>
            ${formula('Ingresos = Número de clientes × Ticket promedio', 'Toda estrategia de ventas ataca una de las dos — o ambas')}
            <p><strong>Palancas para aumentar número de clientes:</strong></p>
            <ul class="concept-list">
                <li>Ampliar horario (desayuno, cena, after-hours).</li>
                <li>Agregar más mesas o rotación más rápida.</li>
                <li>Drive-through, delivery, pickup (Rappi, Uber Eats, Didi Food).</li>
                <li>Marketing, publicidad, loyalty.</li>
                <li>Abrir sucursales.</li>
            </ul>
            <p><strong>Palancas para aumentar ticket promedio:</strong></p>
            <ul class="concept-list">
                <li>Venta sugestiva ("¿le agrego papas a eso?").</li>
                <li>Upsizing (grande vs chico).</li>
                <li>Bundles y combos rentables.</li>
                <li>Postres, bebidas, cafés al final.</li>
                <li>Ingeniería de menú (Módulo 8).</li>
                <li>Subida estratégica de precios (con estudio previo).</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>💸 Gastos — las 4 categorías</h3>
            <p>Dopson y Hayes clasifican todo gasto en exactamente 4 categorías. Esta clasificación es EL marco de referencia del resto del libro:</p>
            <table style="width:100%;border-collapse:collapse;font-size:0.92em;margin:12px 0;">
                <tr style="background:#1a237e;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>1. Costo de alimentos</strong></td><td style="padding:10px;border:1px solid #ddd;">Materia prima comestible que termina en el plato del cliente. En México típicamente <strong>28-35% de ventas</strong>.</td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;"><strong>2. Costo de bebidas</strong></td><td style="padding:10px;border:1px solid #ddd;">Solo bebidas alcohólicas (cerveza, vino, licor). Los refrescos, cafés y jugos van en alimentos. Típico <strong>18-25% de ventas de bebidas</strong>.</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:10px;border:1px solid #ddd;"><strong>3. Costo laboral</strong></td><td style="padding:10px;border:1px solid #ddd;">Nómina + IMSS + INFONAVIT + aguinaldo + vacaciones + reparto de utilidades. Típico <strong>25-35% de ventas</strong>.</td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;"><strong>4. Otros gastos</strong></td><td style="padding:10px;border:1px solid #ddd;">Renta, luz, gas, agua, mantenimiento, marketing, software, seguros, desechables. Típico <strong>15-25% de ventas</strong>.</td></tr>
            </table>
            <p><strong>Prime Cost</strong> (costo principal) = Alimentos + Bebidas + Labor. Es la métrica #1 que miran los dueños profesionales. Si tu Prime Cost supera el 65% de ventas, tu restaurante está en problemas.</p>
        </div>

        <div class="content-card tip">
            <h3>🧮 Ejercicio: tu restaurante en números</h3>
            <p>Con tus números del último mes, llena esta tabla:</p>
            <table style="width:100%;border-collapse:collapse;font-size:0.92em;">
                <tr style="background:#e3f2fd;"><td style="padding:8px;border:1px solid #ddd;"><strong>Concepto</strong></td><td style="padding:8px;border:1px solid #ddd;"><strong>Monto (MXN)</strong></td><td style="padding:8px;border:1px solid #ddd;"><strong>% de ventas</strong></td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Ventas totales</td><td style="padding:8px;border:1px solid #ddd;">$ _______</td><td style="padding:8px;border:1px solid #ddd;">100%</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Costo de alimentos</td><td style="padding:8px;border:1px solid #ddd;">$ _______</td><td style="padding:8px;border:1px solid #ddd;">_____%</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Costo de bebidas</td><td style="padding:8px;border:1px solid #ddd;">$ _______</td><td style="padding:8px;border:1px solid #ddd;">_____%</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Costo laboral total</td><td style="padding:8px;border:1px solid #ddd;">$ _______</td><td style="padding:8px;border:1px solid #ddd;">_____%</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Otros gastos</td><td style="padding:8px;border:1px solid #ddd;">$ _______</td><td style="padding:8px;border:1px solid #ddd;">_____%</td></tr>
                <tr style="background:#fff3e0;"><td style="padding:8px;border:1px solid #ddd;"><strong>Utilidad antes de impuestos</strong></td><td style="padding:8px;border:1px solid #ddd;"><strong>$ _______</strong></td><td style="padding:8px;border:1px solid #ddd;"><strong>_____%</strong></td></tr>
            </table>
            <p>Si tu utilidad es menor al 10%, este curso te va a pagar su costo en la primera semana.</p>
        </div>

        ${quizBlock('q_m1l1', '🎯 Según Dopson &amp; Hayes, ¿cuál es la diferencia clave entre "Ingresos − Gastos = Utilidad" y "Ingresos − Utilidad deseada = Gasto ideal"?', [
            {text: 'Son matemáticamente la misma fórmula escrita distinto', correct: false},
            {text: 'La primera es reactiva (la utilidad es un residuo); la segunda es proactiva (la utilidad es un objetivo que dimensiona los gastos permitidos)', correct: true},
            {text: 'La primera es para ventas al contado y la segunda para ventas a crédito', correct: false},
            {text: 'La segunda solo aplica a franquicias', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm1l2', module: 'Módulo 1 · Fundamentos económicos', tag: 'tag-module', tagLabel: 'MÓDULO 1',
        title: 'El estado de resultados (P&amp;L) paso a paso',
        subtitle: 'Capítulo 1 — Leer un P&amp;L como un chef lee una receta',
        content: hero(heroGradients.m1, 'LECCIÓN 2', 'El estado de resultados — Cap. 1') + `
        ${note('El estado de resultados (P&amp;L) es la fotografía financiera de tu restaurante del mes pasado. Si no sabes leerlo, manejas a ciegas. Esta lección te enseña a leerlo en menos de 5 minutos y a detectar de inmediato las 3 alarmas rojas más comunes.')}

        ${videoLink('Cómo leer el estado de resultados de un restaurante', 'Px1Bn45o2cE')}

        ${realImg('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800', 'Análisis financiero con calculadora', 'El P&L no miente. Si cada línea te sale mal, la suma también saldrá mal. Leerlo bien es el primer paso para arreglarlo')}

        <div class="content-card">
            <h3>📋 Estructura estándar del P&amp;L de restaurante</h3>
            <p>Un estado de resultados profesional de F&amp;B tiene esta estructura universal (Uniform System of Accounts for Restaurants — USAR):</p>
            <table style="width:100%;border-collapse:collapse;font-size:0.92em;margin:12px 0;">
                <tr style="background:#1a237e;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>Línea</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Ejemplo (MXN)</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>%</strong></td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Ventas de alimentos</td><td style="padding:8px;border:1px solid #ddd;">$800,000</td><td style="padding:8px;border:1px solid #ddd;">80%</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Ventas de bebidas</td><td style="padding:8px;border:1px solid #ddd;">$200,000</td><td style="padding:8px;border:1px solid #ddd;">20%</td></tr>
                <tr style="background:#e8f5e9;"><td style="padding:8px;border:1px solid #ddd;"><strong>VENTAS TOTALES</strong></td><td style="padding:8px;border:1px solid #ddd;"><strong>$1,000,000</strong></td><td style="padding:8px;border:1px solid #ddd;"><strong>100%</strong></td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">(−) Costo de alimentos</td><td style="padding:8px;border:1px solid #ddd;">$256,000</td><td style="padding:8px;border:1px solid #ddd;">32%</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">(−) Costo de bebidas</td><td style="padding:8px;border:1px solid #ddd;">$44,000</td><td style="padding:8px;border:1px solid #ddd;">22% de bebidas</td></tr>
                <tr style="background:#fff3e0;"><td style="padding:8px;border:1px solid #ddd;"><strong>UTILIDAD BRUTA</strong></td><td style="padding:8px;border:1px solid #ddd;"><strong>$700,000</strong></td><td style="padding:8px;border:1px solid #ddd;"><strong>70%</strong></td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">(−) Costo laboral total</td><td style="padding:8px;border:1px solid #ddd;">$300,000</td><td style="padding:8px;border:1px solid #ddd;">30%</td></tr>
                <tr style="background:#ffebee;"><td style="padding:8px;border:1px solid #ddd;"><strong>PRIME COST</strong></td><td style="padding:8px;border:1px solid #ddd;"><strong>$600,000</strong></td><td style="padding:8px;border:1px solid #ddd;"><strong>60%</strong></td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">(−) Otros gastos operativos</td><td style="padding:8px;border:1px solid #ddd;">$250,000</td><td style="padding:8px;border:1px solid #ddd;">25%</td></tr>
                <tr style="background:#e8f5e9;"><td style="padding:8px;border:1px solid #ddd;"><strong>UTILIDAD OPERATIVA</strong></td><td style="padding:8px;border:1px solid #ddd;"><strong>$150,000</strong></td><td style="padding:8px;border:1px solid #ddd;"><strong>15%</strong></td></tr>
            </table>
            <p>Los % son más importantes que los montos absolutos. Dos restaurantes pueden facturar lo mismo y ser totalmente distintos en rentabilidad.</p>
        </div>

        <div class="content-card tip">
            <h3>🚨 Las 3 alarmas rojas del P&amp;L</h3>
            <ol>
                <li><strong>Food cost &gt; 35%:</strong> estás dando demasiado producto. Revisa porciones, mermas o precios.</li>
                <li><strong>Labor cost &gt; 35%:</strong> estás sobre-staffeado o mal programado. Revisa Módulo 6.</li>
                <li><strong>Prime Cost &gt; 65%:</strong> luz roja general. Con otros gastos ~25%, te quedan 10% o menos de utilidad. Estás en riesgo.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>📊 Benchmarks típicos en México (restaurantes casual dining independientes)</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;">
                <tr style="background:#e3f2fd;"><td style="padding:8px;border:1px solid #ddd;"><strong>Métrica</strong></td><td style="padding:8px;border:1px solid #ddd;"><strong>Bueno</strong></td><td style="padding:8px;border:1px solid #ddd;"><strong>Aceptable</strong></td><td style="padding:8px;border:1px solid #ddd;"><strong>Alerta</strong></td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Food cost %</td><td style="padding:8px;border:1px solid #ddd;">&lt; 30%</td><td style="padding:8px;border:1px solid #ddd;">30-33%</td><td style="padding:8px;border:1px solid #ddd;">&gt; 35%</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Beverage cost %</td><td style="padding:8px;border:1px solid #ddd;">&lt; 20%</td><td style="padding:8px;border:1px solid #ddd;">20-23%</td><td style="padding:8px;border:1px solid #ddd;">&gt; 25%</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Labor cost %</td><td style="padding:8px;border:1px solid #ddd;">&lt; 28%</td><td style="padding:8px;border:1px solid #ddd;">28-33%</td><td style="padding:8px;border:1px solid #ddd;">&gt; 35%</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Prime Cost</td><td style="padding:8px;border:1px solid #ddd;">&lt; 58%</td><td style="padding:8px;border:1px solid #ddd;">58-65%</td><td style="padding:8px;border:1px solid #ddd;">&gt; 65%</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Utilidad operativa</td><td style="padding:8px;border:1px solid #ddd;">&gt; 15%</td><td style="padding:8px;border:1px solid #ddd;">8-15%</td><td style="padding:8px;border:1px solid #ddd;">&lt; 5%</td></tr>
            </table>
        </div>

        ${quizBlock('q_m1l2', '🎯 ¿Qué es el "Prime Cost" y qué indica en un P&amp;L de restaurante?', [
            {text: 'El costo de las materias primas solamente', correct: false},
            {text: 'La suma de costo de alimentos + bebidas + labor. Es la métrica principal de control; por encima del 65% indica riesgo', correct: true},
            {text: 'El costo de la renta del local', correct: false},
            {text: 'El primer gasto del mes', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm1l3', module: 'Módulo 1 · Fundamentos económicos', tag: 'tag-module', tagLabel: 'MÓDULO 1',
        title: 'Pronóstico de ventas — el arte de predecir',
        subtitle: 'Capítulo 2 — Sin pronóstico no hay control',
        content: hero(heroGradients.m1, 'LECCIÓN 3', 'Pronóstico de ventas — Cap. 2') + `
        ${note('Sin pronóstico de ventas, todo lo demás es adivinanza. ¿Cuánta materia prima compro? ¿Cuántos cocineros programo? ¿Cuántos meseros? La respuesta a todo empieza con: "¿Cuántos clientes espero?". Esta lección te enseña a pronosticar con los datos que ya tienes.')}

        ${videoLink('Forecast o Previsión de Ventas | Qué es y cómo hacer uno', 'PbIeIFd94RM')}

        ${realImg('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', 'Gráfica de tendencia de ventas', 'El mejor predictor del futuro es el pasado — siempre que tengas los datos correctos')}

        <div class="content-card">
            <h3>📜 Historial de ventas: tu fuente de verdad</h3>
            <p>Dopson y Hayes son muy claros: <strong>sin historial de ventas, no hay pronóstico serio</strong>. La mayoría de los restaurantes mexicanos independientes no llevan historial estructurado — y por eso operan reaccionando, no planeando.</p>
            <p>Un historial útil debe registrar, mínimo, cada día:</p>
            <ul class="concept-list">
                <li><strong>Ventas totales</strong> (alimentos + bebidas separados).</li>
                <li><strong>Número de clientes atendidos</strong> (covers).</li>
                <li><strong>Ticket promedio</strong> (Ventas ÷ Clientes).</li>
                <li><strong>Clima</strong> (día nublado baja ventas 10-15%).</li>
                <li><strong>Evento especial</strong> (juego de fútbol, puente, inicio de mes, etc.).</li>
            </ul>
            ${formula('Ticket promedio = Ventas totales ÷ Número de clientes', 'Una de las 3 métricas más importantes de un restaurante')}
        </div>

        <div class="content-card">
            <h3>🧮 Promedios: simple, ponderado y móvil</h3>
            <p>El libro distingue tres tipos de promedio útiles para pronosticar:</p>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:12px 0;">
                <tr style="background:#1a237e;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>Tipo</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Cómo se calcula</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Cuándo usarlo</strong></td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Simple</strong></td><td style="padding:8px;border:1px solid #ddd;">Suma ÷ número de datos</td><td style="padding:8px;border:1px solid #ddd;">Operación muy estable, sin tendencia</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Ponderado</strong></td><td style="padding:8px;border:1px solid #ddd;">Los datos recientes pesan más</td><td style="padding:8px;border:1px solid #ddd;">Hay tendencia al alza/baja clara</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Móvil (Fixed)</strong></td><td style="padding:8px;border:1px solid #ddd;">Promedio de las últimas N semanas, moviendo la ventana</td><td style="padding:8px;border:1px solid #ddd;">Pronóstico semanal rolling</td></tr>
            </table>
            <p><strong>Ejemplo práctico (ponderado):</strong> Martes pasados: $15k, $17k, $19k, $22k. Ponderación 1-2-3-4.</p>
            ${formula('Ponderado = (15×1 + 17×2 + 19×3 + 22×4) / (1+2+3+4) = 194 / 10 = $19.4k', 'El ponderado anticipa tendencia mejor que el simple ($18.25k)')}
        </div>

        <div class="content-card">
            <h3>📈 Varianza de ventas: cuando la realidad no coincide con el pronóstico</h3>
            <p>Pronosticar NO es adivinar. Es estimar, medir la varianza, y ajustar. La fórmula:</p>
            ${formula('% Varianza = (Real − Pronóstico) ÷ Pronóstico × 100', 'Positivo = vendiste más; Negativo = vendiste menos')}
            <p>Una varianza de ±5% es normal. ±10% empieza a ser problema. ±20% significa que tu pronóstico está mal calibrado y debes revisar el método.</p>
        </div>

        <div class="content-card tip">
            <h3>🎯 Pronosticar las 3 variables clave</h3>
            <ol>
                <li><strong>Ingresos futuros:</strong> basado en mismo día, misma semana del año pasado, ajustado por inflación y crecimiento conocido.</li>
                <li><strong>Número de clientes futuros:</strong> promedio ponderado de los últimos 4 días/semanas iguales.</li>
                <li><strong>Ticket promedio futuro:</strong> tendencia histórica (sube ~3-5% anual en México por inflación de precios).</li>
            </ol>
            <p>Si tienes las 3, puedes pronosticar con precisión la compra de materia prima, la programación de personal y las metas diarias.</p>
        </div>

        <div class="content-card">
            <h3>🇲🇽 Adaptación mexicana: eventos que alteran el pronóstico</h3>
            <ul class="concept-list">
                <li><strong>Quincenas (15 y 30):</strong> ventas suben 20-40% en restaurantes de oficina.</li>
                <li><strong>Día del Padre/Madre:</strong> desayunos y comidas familiares suben 2-3×.</li>
                <li><strong>10 de mayo:</strong> el día más alto del año para muchos restaurantes.</li>
                <li><strong>Partidos de la selección / Liga MX:</strong> bares y deportivos duplican ventas.</li>
                <li><strong>Semana Santa y Navidad:</strong> restaurantes turísticos explotan; oficinas se vacían.</li>
                <li><strong>Días del Buen Fin:</strong> food courts de plaza suben 50-80%.</li>
                <li><strong>Regreso a clases:</strong> cafeterías universitarias arrancan con impacto.</li>
            </ul>
            <p>Un pronóstico profesional toma en cuenta el calendario local, no solo los promedios históricos.</p>
        </div>

        ${quizBlock('q_m1l3', '🎯 ¿Cuál es la fórmula del ticket promedio y por qué importa pronosticarlo?', [
            {text: 'Ventas ÷ días del mes; importa para calcular el sueldo del gerente', correct: false},
            {text: 'Ventas totales ÷ número de clientes; es una de las 3 métricas clave porque junto con el número de clientes determina las ventas futuras', correct: true},
            {text: 'Ingresos × 0.10; es una regla de oro', correct: false},
            {text: 'Es el precio del platillo más vendido', correct: false}
        ])}
        `
    });

    // ==============================================================
    // MÓDULO 2 — COSTO DE ALIMENTOS (Cap. 3)
    // ==============================================================
    C.lessons.push({
        id: 'm2l1', module: 'Módulo 2 · Costo de alimentos', tag: 'tag-module', tagLabel: 'MÓDULO 2',
        title: 'Recetas estandarizadas — la base del control',
        subtitle: 'Capítulo 3 — Sin receta estandarizada no hay costeo posible',
        content: hero(heroGradients.m2, 'LECCIÓN 4', 'Recetas estandarizadas — Cap. 3') + `
        ${note('Esta lección resuelve el primer "agujero negro" de casi todos los restaurantes independientes: cada cocinero hace los platillos a su manera, con cantidades distintas, y nadie sabe cuánto cuesta realmente. La receta estandarizada es tu primera línea de defensa.')}

        ${videoLink('Estandariza las Recetas de Tu Restaurante en 4 Pasos', 'yvpgrtLWaok')}

        ${realImg('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800', 'Chef siguiendo receta', 'Cuando cada cocinero hace el platillo a su manera, cada plato cuesta distinto. Y si no sabes cuánto cuesta, no sabes si ganas o pierdes')}

        ${quote('Si no tienes recetas estandarizadas, no tienes un restaurante: tienes un grupo de gente cocinando lo que le parece en tu misma cocina.', 'Dopson &amp; Hayes (traducción libre)')}

        <div class="content-card">
            <h3>📋 ¿Qué debe tener una receta estandarizada?</h3>
            <ol>
                <li><strong>Nombre del platillo</strong> e ID (código de menú).</li>
                <li><strong>Rendimiento</strong> (cuántas porciones produce la receta completa).</li>
                <li><strong>Tamaño de porción</strong> en gramos, onzas o piezas — MEDIBLE, no "una cucharada mediana".</li>
                <li><strong>Lista de ingredientes</strong> con cantidad exacta (gramos, mililitros, piezas).</li>
                <li><strong>Método de preparación</strong> paso a paso.</li>
                <li><strong>Tiempo de cocción</strong> y temperatura.</li>
                <li><strong>Presentación / plating</strong> (idealmente con foto).</li>
                <li><strong>Costo por porción</strong> (se calcula al final, después de la receta).</li>
                <li><strong>Fecha de última actualización</strong> y firma del chef/gerente.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>🧮 Método del factor (ajuste de porciones)</h3>
            <p>Cuando tu receta rinde 10 porciones pero necesitas 30, multiplicas todo por 3. Cuando necesitas 7, multiplicas por 0.7. Pero hay que cuidar <em>especias y grasas</em>: no escalan linealmente.</p>
            ${formula('Factor = Nuevo rendimiento ÷ Rendimiento original', 'Luego multiplicas cada ingrediente por el factor')}
            <p><strong>Ejemplo:</strong> receta de mole para 10 porciones con 80 g de chile pasilla. Si necesitas 30 porciones:</p>
            <ul class="concept-list">
                <li>Factor = 30 ÷ 10 = 3</li>
                <li>Chile pasilla = 80 g × 3 = 240 g</li>
                <li>Sal, comino, clavo → <strong>NO multiplicar por 3</strong>. Escalar ~2.5× y probar.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>💰 Cálculo del costo por porción</h3>
            <p>Esta es la columna que convierte tu receta en herramienta financiera:</p>
            <table style="width:100%;border-collapse:collapse;font-size:0.88em;margin:12px 0;">
                <tr style="background:#1a237e;color:white;"><td style="padding:8px;border:1px solid #ddd;">Ingrediente</td><td style="padding:8px;border:1px solid #ddd;">Cantidad</td><td style="padding:8px;border:1px solid #ddd;">Precio compra</td><td style="padding:8px;border:1px solid #ddd;">Costo uso</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Filete de res</td><td style="padding:8px;border:1px solid #ddd;">200 g</td><td style="padding:8px;border:1px solid #ddd;">$380/kg</td><td style="padding:8px;border:1px solid #ddd;">$76.00</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Papa cambray</td><td style="padding:8px;border:1px solid #ddd;">150 g</td><td style="padding:8px;border:1px solid #ddd;">$35/kg</td><td style="padding:8px;border:1px solid #ddd;">$5.25</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Mantequilla</td><td style="padding:8px;border:1px solid #ddd;">15 g</td><td style="padding:8px;border:1px solid #ddd;">$180/kg</td><td style="padding:8px;border:1px solid #ddd;">$2.70</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Romero, ajo, sal</td><td style="padding:8px;border:1px solid #ddd;">—</td><td style="padding:8px;border:1px solid #ddd;">Q-factor</td><td style="padding:8px;border:1px solid #ddd;">$2.00</td></tr>
                <tr style="background:#fff3e0;"><td style="padding:8px;border:1px solid #ddd;" colspan="3"><strong>Costo por porción</strong></td><td style="padding:8px;border:1px solid #ddd;"><strong>$85.95</strong></td></tr>
            </table>
            <p><strong>Q-factor</strong> (quotient factor) = costo de especias, sal, aceite y extras menores que no tiene sentido pesar al gramo. Se estima entre 3-8% del costo de ingredientes principales.</p>
        </div>

        <div class="content-card tip">
            <h3>🎯 Por qué muchos dueños fallan aquí</h3>
            <ul class="concept-list">
                <li>"No tengo tiempo de sentarme a escribir todo esto." → ese tiempo se paga en pérdidas silenciosas cada día.</li>
                <li>"Mi chef se sabe las recetas de memoria." → ¿y cuando se enferme, renuncie o muera?</li>
                <li>"Mis cocineros son mexicanos, no siguen recetas." → es cultural y SÍ se puede. Buenas cadenas lo logran.</li>
                <li>"Mis platos son muy artesanales, cambian siempre." → entonces tus costos también cambian siempre y no sabes cuánto estás ganando.</li>
            </ul>
        </div>

        ${quizBlock('q_m2l1', '🎯 ¿Qué es el "Q-factor" en una receta estandarizada?', [
            {text: 'El tiempo de cocción en minutos', correct: false},
            {text: 'El costo estimado de especias, sal, aceite y extras menores que no tiene sentido pesar al gramo (3-8% del costo principal)', correct: true},
            {text: 'La cantidad de porciones que rinde', correct: false},
            {text: 'El factor de calidad del proveedor', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm2l2', module: 'Módulo 2 · Costo de alimentos', tag: 'tag-module', tagLabel: 'MÓDULO 2',
        title: 'Control de inventario — niveles y punto de reorden',
        subtitle: 'Capítulo 3 — Cuánto comprar y cuándo comprarlo',
        content: hero(heroGradients.m2, 'LECCIÓN 5', 'Control de inventario — Cap. 3') + `
        ${note('"Tenemos mucha mercancía guardada" suena a tranquilidad, pero en realidad es dinero congelado. El exceso de inventario es tan caro como la falta. Esta lección te enseña el equilibrio.')}

        ${videoLink('El Concepto de Punto de Reorden', 'uNdj3KN5UMU')}

        ${realImg('https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800', 'Almacén organizado', 'El inventario óptimo no es "tener de todo". Es tener lo justo para no faltar, sin exceso que se eche a perder')}

        <div class="content-card">
            <h3>⚖️ Los dos pecados del inventario</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.92em;margin:12px 0;">
                <tr style="background:#b71c1c;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>Exceso de inventario</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Falta de inventario</strong></td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Dinero congelado en mercancía</td><td style="padding:8px;border:1px solid #ddd;">Platillos 86'd ("se acabó el lomo")</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Merma por caducidad</td><td style="padding:8px;border:1px solid #ddd;">Cliente insatisfecho que no regresa</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Espacio de almacén ocupado</td><td style="padding:8px;border:1px solid #ddd;">Compras de emergencia a sobreprecio</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Riesgo de robo (más visible)</td><td style="padding:8px;border:1px solid #ddd;">Chef estresado improvisando</td></tr>
            </table>
        </div>

        <div class="content-card">
            <h3>📐 Los 3 niveles que debes definir por producto</h3>
            <ol>
                <li><strong>Nivel mínimo:</strong> cantidad que te dura exactamente el tiempo de entrega del proveedor. Si pides lunes y entrega miércoles, tu mínimo debe cubrir 2 días de consumo.</li>
                <li><strong>Nivel máximo:</strong> cantidad para NO pasar de N días de inventario (perecederos: 2-4 días; no perecederos: 7-14 días).</li>
                <li><strong>Punto de reorden (PR):</strong> cantidad en la que DEBES hacer pedido para no bajar del mínimo.</li>
            </ol>
            ${formula('Punto de reorden = Consumo diario × Lead time + Stock de seguridad', 'Lead time = días que tarda el proveedor desde pedido hasta entrega')}
        </div>

        <div class="content-card">
            <h3>🧮 Ejemplo práctico: pechuga de pollo</h3>
            <ul class="concept-list">
                <li>Consumo diario promedio: 15 kg.</li>
                <li>Lead time del proveedor: 2 días.</li>
                <li>Stock de seguridad (20% por variabilidad): 6 kg.</li>
                <li>Punto de reorden = 15 × 2 + 6 = <strong>36 kg</strong>.</li>
                <li>Nivel máximo: 5 días de consumo = 75 kg.</li>
                <li>Cantidad a pedir cuando llegas al PR: 75 − 36 = <strong>39 kg</strong>.</li>
            </ul>
            <p>Esta lógica se aplica a CADA producto crítico. No a las especias ni el agua mineral — solo a los que, si se acaban, tumban platillos.</p>
        </div>

        <div class="content-card">
            <h3>📊 Rotación de inventario — métrica maestra</h3>
            ${formula('Rotación = Costo de alimentos vendidos ÷ Inventario promedio', 'Mayor número = mejor rotación = menos dinero congelado')}
            <p>Benchmarks en restaurantes:</p>
            <ul class="concept-list">
                <li><strong>Perecederos (carne, pollo, pescado, verduras):</strong> rotación 15-20× al mes = 1.5-2 días de inventario.</li>
                <li><strong>Secos (arroz, pasta, enlatados):</strong> rotación 2-4× al mes = 8-15 días.</li>
                <li><strong>Bebidas:</strong> rotación 2-3× al mes = 10-15 días.</li>
            </ul>
            <p>Si tu rotación general está debajo de 4× al mes, tienes exceso de inventario.</p>
        </div>

        <div class="content-card tip">
            <h3>🇲🇽 Realidad mexicana del inventario</h3>
            <ul class="concept-list">
                <li>Los mercados (Central de Abasto) dan mejor precio pero hay que ir 2-3× por semana.</li>
                <li>Proveedores formales (Sysco, Carnes ViBa, La Tablita) entregan con facturas para deducir — paga un 5-10% más pero te da control fiscal.</li>
                <li>Los fines de semana en pueblos mágicos y playas hay que sobreinventariar porque los proveedores no entregan.</li>
                <li>Cortes de luz son reales — un refrigerador sin luz 8 horas con 50 kg de carne = $20,000 a la basura.</li>
            </ul>
        </div>

        ${quizBlock('q_m2l2', '🎯 ¿Cómo se calcula el punto de reorden?', [
            {text: 'Nivel máximo ÷ 2', correct: false},
            {text: 'Inventario inicial + compras − ventas', correct: false},
            {text: 'Consumo diario × Lead time + Stock de seguridad', correct: true},
            {text: 'Ventas mensuales ÷ 30', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm2l3', module: 'Módulo 2 · Costo de alimentos', tag: 'tag-module', tagLabel: 'MÓDULO 2',
        title: 'Compras inteligentes — qué, a quién, a qué precio',
        subtitle: 'Capítulo 3 — Donde se gana o pierde 10% del food cost',
        content: hero(heroGradients.m2, 'LECCIÓN 6', 'Compras inteligentes — Cap. 3') + `
        ${note('Cambiar de proveedor en los productos correctos puede bajar tu food cost 3-5 puntos porcentuales sin tocar recetas ni porciones. Esta lección es la que más rápido te devuelve el dinero del curso.')}

        ${videoLink('Cinco estrategias para negociar los precios con tus proveedores', 'ti7J34GZ_OQ')}

        ${realImg('https://images.unsplash.com/photo-1542838132-92c53300491e?w=800', 'Mercado de productos frescos', 'Comprar bien no es solo pagar poco: es pagar el precio justo por la calidad necesaria, a tiempo, con el proveedor correcto')}

        <div class="content-card">
            <h3>🎯 Las 4 preguntas que debe contestar toda compra</h3>
            <ol>
                <li><strong>¿Qué debo comprar?</strong> Producto específico con <em>especificaciones</em>: "filete de res USDA Choice 220 g limpio, no mechado".</li>
                <li><strong>¿Cuál es el mejor precio a pagar?</strong> Mejor no siempre = más barato. Más barato puede significar peor calidad o menor rendimiento.</li>
                <li><strong>¿Cómo aseguro suministro constante?</strong> 2 proveedores por producto crítico. Nunca uno solo.</li>
                <li><strong>¿Un proveedor vs. muchos?</strong> Ver tabla abajo.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>⚖️ Un proveedor vs. muchos</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;">
                <tr style="background:#2e7d32;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>Un solo proveedor</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Varios proveedores</strong></td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">✓ Mejores descuentos por volumen</td><td style="padding:8px;border:1px solid #ddd;">✓ Menor riesgo de desabasto</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">✓ Relación más fuerte</td><td style="padding:8px;border:1px solid #ddd;">✓ Competencia = mejor precio</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">✓ Una sola factura/pago</td><td style="padding:8px;border:1px solid #ddd;">✓ No dependes de un "yerno"</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">✗ Alto riesgo si falla</td><td style="padding:8px;border:1px solid #ddd;">✗ Más administración</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">✗ Comodidad = mal servicio eventual</td><td style="padding:8px;border:1px solid #ddd;">✗ Menor volumen por proveedor = menor descuento</td></tr>
            </table>
            <p><strong>Recomendación del libro:</strong> un proveedor principal para 70% del volumen, un proveedor secundario para 20%, y spot buying para 10%.</p>
        </div>

        <div class="content-card">
            <h3>🧾 La orden de compra (purchase order)</h3>
            <p>La OC es el documento que te protege: si el proveedor entrega distinto, la OC gana. Debe tener:</p>
            <ul class="concept-list">
                <li>Fecha de pedido y fecha de entrega requerida.</li>
                <li>Proveedor y sus datos fiscales.</li>
                <li>Lista de productos con especificaciones exactas.</li>
                <li>Cantidades y unidades de medida.</li>
                <li>Precio unitario acordado.</li>
                <li>Subtotal, IVA, total.</li>
                <li>Términos de pago (contado, 15 días, 30 días).</li>
                <li>Firma de quien autoriza.</li>
            </ul>
            <p>Sin OC, el recibidor no tiene cómo saber si lo que llegó es lo que se pidió. Y sin eso, el fraude es abierto.</p>
        </div>

        <div class="content-card tip">
            <h3>🚫 Ética en compras — los 5 acuerdos</h3>
            <p>Dopson &amp; Hayes dedican una sección completa al tema. En México es crítico:</p>
            <ol>
                <li><strong>No aceptes regalos</strong> del proveedor mayores a $500 MXN o botellas caras. Crea obligación encubierta.</li>
                <li><strong>No aceptes comisiones/moches</strong> por recomendar al proveedor. Es traición al dueño.</li>
                <li><strong>Compara precios</strong> al menos cada 3 meses. Los proveedores "cómodos" suben precios lentamente esperando que no te des cuenta.</li>
                <li><strong>Comidas y viajes</strong> del proveedor: informar al dueño y reportar en tu expediente.</li>
                <li><strong>Familiares y parientes</strong>: si tu yerno tiene la distribuidora, el dueño debe autorizar por escrito y comparar contra otros.</li>
            </ol>
        </div>

        ${quizBlock('q_m2l3', '🎯 ¿Cuál es la recomendación del libro para diversificar proveedores?', [
            {text: 'Un solo proveedor para todo — es más simple', correct: false},
            {text: 'Un proveedor diferente por cada producto — máxima competencia', correct: false},
            {text: 'Un proveedor principal para ~70% del volumen, un secundario para ~20%, y spot buying para ~10%', correct: true},
            {text: 'Cambiar de proveedor cada mes para mantenerlos alerta', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm2l4', module: 'Módulo 2 · Costo de alimentos', tag: 'tag-module', tagLabel: 'MÓDULO 2',
        title: 'Recepción y almacenamiento — donde se pierde el dinero',
        subtitle: 'Capítulo 3 — La puerta trasera cuesta más que la puerta principal',
        content: hero(heroGradients.m2, 'LECCIÓN 7', 'Recepción y almacenamiento — Cap. 3') + `
        ${note('Dopson y Hayes son claros: "En los restaurantes se pierde más dinero en la puerta trasera que en la de entrada." Mercancía que nunca llegó pero se pagó, productos inferiores aceptados, temperatura mal mantenida, robo hormiga. Todo ocurre aquí.')}

        ${videoLink('Recepción de Mercadería', 'm5-bmzEL3zA')}

        ${realImg('https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800', 'Recepción de mercancía en cocina', 'Cada factura que no se verifica contra lo recibido es una invitación al fraude')}

        <div class="content-card">
            <h3>📦 Las 4 condiciones de una recepción profesional</h3>
            <ol>
                <li><strong>Ubicación adecuada:</strong> cerca del almacén y con acceso controlado. NO en la cocina caliente ni en el comedor.</li>
                <li><strong>Herramientas correctas:</strong> báscula calibrada (mensual), termómetro, cutter, marcador permanente.</li>
                <li><strong>Horarios de entrega:</strong> ventanas definidas. Un proveedor que llega en hora pico donde el gerente está en servicio = recepción floja.</li>
                <li><strong>Personal entrenado:</strong> con la orden de compra en mano y autoridad para rechazar lo que no cumple.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>✅ Checklist de recepción (para TODA entrega)</h3>
            <ul class="concept-list">
                <li>☐ Factura/remisión coincide con la orden de compra.</li>
                <li>☐ Cantidades coinciden (peso al gramo; no al ojo).</li>
                <li>☐ Calidad conforme a especificación (carne sin moretones, verduras firmes).</li>
                <li>☐ Temperatura correcta al momento de entrega:
                    <ul>
                        <li>Refrigerados: &lt; 4°C</li>
                        <li>Congelados: &lt; −18°C</li>
                        <li>Calientes: &gt; 60°C (casi nunca aplica)</li>
                    </ul>
                </li>
                <li>☐ Fecha de caducidad con margen suficiente (mínimo 2 días para perecederos, 30 días para secos).</li>
                <li>☐ Empaque íntegro, sin daños.</li>
                <li>☐ Marcar con fecha de recepción (FIFO).</li>
                <li>☐ Firmar factura con nombre, hora y observaciones si las hay.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>🏗️ Almacenamiento — las 5 zonas</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;">
                <tr style="background:#2e7d32;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>Zona</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Temperatura</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Productos</strong></td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Congelador</td><td style="padding:8px;border:1px solid #ddd;">−18°C o menos</td><td style="padding:8px;border:1px solid #ddd;">Carnes, pescados, algunos postres</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Refrigerador carnes</td><td style="padding:8px;border:1px solid #ddd;">0-2°C</td><td style="padding:8px;border:1px solid #ddd;">Res, cerdo, pollo fresco</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Refrigerador lácteos</td><td style="padding:8px;border:1px solid #ddd;">2-4°C</td><td style="padding:8px;border:1px solid #ddd;">Leche, quesos, mantequilla, huevo</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Cámara vegetales</td><td style="padding:8px;border:1px solid #ddd;">4-7°C</td><td style="padding:8px;border:1px solid #ddd;">Verduras, frutas, hierbas</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Almacén seco</td><td style="padding:8px;border:1px solid #ddd;">15-21°C</td><td style="padding:8px;border:1px solid #ddd;">Granos, enlatados, especias, aceites</td></tr>
            </table>
            <p><strong>Regla FIFO (First In, First Out):</strong> lo que entra primero, sale primero. Cada producto se marca con fecha de recepción.</p>
        </div>

        <div class="content-card tip">
            <h3>🇲🇽 Realidad mexicana: NOM-251 y COFEPRIS</h3>
            <p>La NOM-251-SSA1-2009 regula prácticas de higiene en restaurantes. Lo esencial para recepción y almacenamiento:</p>
            <ul class="concept-list">
                <li>Registro escrito de temperaturas 2-3× al día (bitácora).</li>
                <li>Alimentos del piso separados mínimo 15 cm (evitar contaminación).</li>
                <li>Carnes crudas SIEMPRE debajo de productos listos para consumir.</li>
                <li>Químicos en área separada con acceso restringido.</li>
                <li>Personal de recepción con uniforme limpio, cabello recogido y sin joyas.</li>
            </ul>
            <p>COFEPRIS y Protección Civil revisan esto. Multas de $50,000-200,000 MXN por incumplimiento grave.</p>
        </div>

        <div class="content-card">
            <h3>💰 Valoración del inventario — FIFO, LIFO o Weighted Average</h3>
            <p>Cuando tienes mercancía comprada a distintos precios, ¿con qué valor registras la salida?</p>
            <ul class="concept-list">
                <li><strong>FIFO:</strong> sale al costo del lote más antiguo. El más usado en F&amp;B porque coincide con la rotación física.</li>
                <li><strong>LIFO:</strong> sale al costo del lote más nuevo. Raramente usado en F&amp;B.</li>
                <li><strong>Costo promedio ponderado:</strong> Inventario valor ÷ cantidades. Simple y aceptado para fiscal.</li>
            </ul>
            <p>En México, el SAT acepta cualquiera mientras seas consistente. La mayoría de los restaurantes usa <strong>costo promedio ponderado</strong> por simplicidad.</p>
        </div>

        ${quizBlock('q_m2l4', '🎯 ¿Qué significa la regla FIFO en almacenamiento?', [
            {text: 'First-In, First-Out — lo que entra primero sale primero', correct: true},
            {text: 'Fast-In, Fast-Out — rotar rápido la mercancía', correct: false},
            {text: 'Food-In, Food-Out — solo para alimentos', correct: false},
            {text: 'Financial-In, Financial-Out — valoración contable', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm2l5', module: 'Módulo 2 · Costo de alimentos', tag: 'tag-module', tagLabel: 'MÓDULO 2',
        title: 'Costo de alimentos vendidos — la fórmula mágica',
        subtitle: 'Capítulo 3 — Cómo saber exactamente cuánto costó lo que vendiste',
        content: hero(heroGradients.m2, 'LECCIÓN 8', 'Costo de alimentos vendidos — Cap. 3') + `
        ${note('Esta es LA fórmula del módulo. La que te dice, al cerrar el mes, cuánto te costó en realidad la comida que vendiste. No lo que compraste — lo que efectivamente se convirtió en ingreso.')}

        ${videoLink('Cómo calcular el costo de la comida para tu restaurante', '3nOhOYZdRAc')}

        ${realImg('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800', 'Calculando costos de cocina', 'Compra no es costo. Compra es lo que pagaste al proveedor. Costo es lo que se convirtió en ventas')}

        <div class="content-card">
            <h3>🧮 La fórmula básica del COGS de alimentos</h3>
            ${formula('Costo de alimentos vendidos = Inventario inicial + Compras − Inventario final − Comidas de empleados − Comidas de cortesía', 'Donde Inventario inicial = lo que tenías al arrancar el mes; Inventario final = lo que te queda al cerrar')}
        </div>

        <div class="content-card">
            <h3>📋 Ejemplo completo — Restaurante "La Sazón"</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.92em;margin:12px 0;">
                <tr><td style="padding:8px;border:1px solid #ddd;">Inventario inicial (1 de marzo)</td><td style="padding:8px;border:1px solid #ddd;">$45,000</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">(+) Compras del mes</td><td style="padding:8px;border:1px solid #ddd;">$280,000</td></tr>
                <tr style="background:#f5f5f5;"><td style="padding:8px;border:1px solid #ddd;"><strong>Mercancía disponible para vender</strong></td><td style="padding:8px;border:1px solid #ddd;"><strong>$325,000</strong></td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">(−) Inventario final (31 de marzo)</td><td style="padding:8px;border:1px solid #ddd;">$42,000</td></tr>
                <tr style="background:#fff3e0;"><td style="padding:8px;border:1px solid #ddd;"><strong>Alimentos consumidos</strong></td><td style="padding:8px;border:1px solid #ddd;"><strong>$283,000</strong></td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">(−) Comidas de empleados</td><td style="padding:8px;border:1px solid #ddd;">$18,000</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">(−) Comidas de cortesía / complementarias</td><td style="padding:8px;border:1px solid #ddd;">$3,500</td></tr>
                <tr style="background:#ffebee;"><td style="padding:8px;border:1px solid #ddd;"><strong>Costo de alimentos VENDIDOS</strong></td><td style="padding:8px;border:1px solid #ddd;"><strong>$261,500</strong></td></tr>
            </table>
            <p>Si las ventas de alimentos de marzo fueron $830,000, entonces:</p>
            ${formula('Food cost % = 261,500 ÷ 830,000 × 100 = 31.5%', 'Dentro del rango aceptable de 30-33%')}
        </div>

        <div class="content-card">
            <h3>⚠️ Por qué NO basta "Compras ÷ Ventas"</h3>
            <p>Muchos operadores calculan: <em>Compras de marzo ÷ Ventas de marzo = Food cost</em>. Es incorrecto por 3 razones:</p>
            <ol>
                <li>Las compras incluyen mercancía que no se vendió (queda en inventario final).</li>
                <li>No consideran el inventario inicial (mercancía vendida que ya tenías).</li>
                <li>No restan comidas del personal ni cortesías.</li>
            </ol>
            <p>Usar esa fórmula te da un número falso que puede estar 2-5 puntos arriba o abajo del real.</p>
        </div>

        <div class="content-card tip">
            <h3>📅 Estimación diaria del food cost</h3>
            <p>Para no esperar al fin de mes, Dopson y Hayes proponen una estimación diaria:</p>
            ${formula('Food cost estimado del día = Requisiciones enviadas a cocina ÷ Ventas del día', 'Las "requisiciones" son la mercancía que salió del almacén a cocina')}
            <p>No es 100% exacto (no ajusta por merma ni por inventario en cocina) pero te da una señal temprana. Si pasa de 35% un día, investigas antes de que se convierta en 35% el mes completo.</p>
        </div>

        <div class="content-card">
            <h3>🔍 Las 6 variaciones de la fórmula — casos especiales</h3>
            <ol>
                <li><strong>Transferencias del almacén al bar:</strong> si el almacén central surte al bar, esas transferencias se <em>restan</em> del food cost y se <em>suman</em> al beverage cost.</li>
                <li><strong>Transferencias del bar a cocina:</strong> vino para cocinar, cerveza para salsas. Al revés.</li>
                <li><strong>Obsequios por promoción:</strong> un 2x1 sí se descuenta de food cost porque es costo de marketing.</li>
                <li><strong>Fundraising / donaciones a escuelas:</strong> se deduce del food cost como gasto de relaciones públicas.</li>
                <li><strong>Robos/mermas identificadas:</strong> se deben reconocer (aunque duela) como gasto separado de food cost.</li>
                <li><strong>Ajustes de inventario físico vs libros:</strong> la realidad gana. Si el físico dice $42k y libros decían $45k, el ajuste de $3k va contra food cost.</li>
            </ol>
        </div>

        ${quizBlock('q_m2l5', '🎯 Calcula: Inventario inicial $20k, compras $150k, inventario final $18k, comidas empleados $5k. ¿Cuál es el costo de alimentos vendidos?', [
            {text: '$150,000', correct: false},
            {text: '$168,000', correct: false},
            {text: '$147,000 (20 + 150 − 18 − 5)', correct: true},
            {text: '$193,000', correct: false}
        ])}
        `
    });

    // ==============================================================
    // MÓDULO 3 — COSTO DE BEBIDAS (Cap. 4)
    // ==============================================================
    C.lessons.push({
        id: 'm3l1', module: 'Módulo 3 · Costo de bebidas', tag: 'tag-module', tagLabel: 'MÓDULO 3',
        title: 'Bebidas alcohólicas — categorías y servicio responsable',
        subtitle: 'Capítulo 4 — Cerveza, vino y destilados: controles distintos',
        content: hero(heroGradients.m3, 'LECCIÓN 9', 'Bebidas alcohólicas — Cap. 4') + `
        ${note('Las bebidas son oro líquido: márgenes de 300-500% cuando se controlan bien. Pero también son el área donde más dinero se pierde por robo interno, derrames y sobre-servicio. Este módulo te enseña a proteger el margen.')}

        ${videoLink('ServSafe Alcohol — servicio responsable de alcohol', '2edqfMoZwWQ')}

        ${realImg('https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800', 'Barra profesional de cocteles', 'El bar puede ser el área más rentable o la más ruinosa del restaurante. No hay punto medio')}

        <div class="content-card">
            <h3>🍺 Las 3 clasificaciones de establecimiento F&amp;B con alcohol</h3>
            <ol>
                <li><strong>Solo bebidas (bar puro):</strong> ingresos ~100% de alcohol. Foco total en control de inventario de licores. Ej: cantina tradicional, pub.</li>
                <li><strong>Bebidas + comida (casual dining, restaurantes):</strong> mezcla típica 70/30 alimentos/bebidas. Foco en maridaje y upselling. Ej: la mayoría de los restaurantes.</li>
                <li><strong>Bebidas + entretenimiento:</strong> mezcla típica 85/15 bebidas/comida ligera. Foco en experiencia y volumen de bebida. Ej: antro, rooftop, deportivo.</li>
            </ol>
            <p>Cada categoría requiere controles distintos. Un dueño de antro que copia el sistema de un restaurante casual va a perder.</p>
        </div>

        <div class="content-card">
            <h3>🍷 Las 3 categorías de alcohol</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:12px 0;">
                <tr style="background:#4a148c;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>Categoría</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Control primario</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Rotación típica</strong></td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Cerveza</strong></td><td style="padding:8px;border:1px solid #ddd;">Unidades (botellas, barriles)</td><td style="padding:8px;border:1px solid #ddd;">4-8× al mes</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Vino</strong></td><td style="padding:8px;border:1px solid #ddd;">Botellas por SKU</td><td style="padding:8px;border:1px solid #ddd;">1-3× al mes</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Destilados (licor)</strong></td><td style="padding:8px;border:1px solid #ddd;">Onzas/mL servidas vs. vendidas</td><td style="padding:8px;border:1px solid #ddd;">2-4× al mes</td></tr>
            </table>
        </div>

        <div class="content-card">
            <h3>🇲🇽 Marco legal del alcohol en México</h3>
            <ul class="concept-list">
                <li><strong>Edad mínima:</strong> 18 años (verificar INE siempre).</li>
                <li><strong>Licencia:</strong> cada estado tiene su propia ley. CDMX y Jalisco son las más estrictas.</li>
                <li><strong>Horarios:</strong> típicamente 11:00 AM a 02:00 AM, pero varía por estado y giro.</li>
                <li><strong>Días secos:</strong> jornadas electorales. Vender = multa fuerte y riesgo de clausura.</li>
                <li><strong>Responsabilidad civil:</strong> si sobre-sirves a alguien que luego provoca un accidente, puedes ser corresponsable. Existe jurisprudencia reciente.</li>
                <li><strong>IEPS:</strong> el alcohol tiene Impuesto Especial sobre Producción y Servicios además del IVA. Tu proveedor debe facturar con IEPS desglosado.</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>🚨 Servicio responsable — 4 reglas no negociables</h3>
            <ol>
                <li><strong>No servir a menores.</strong> Pedir INE siempre que haya duda. Sanciones penales.</li>
                <li><strong>No servir a quien ya está notoriamente ebrio.</strong> Capacitar al mesero a identificar signos (habla arrastrada, desequilibrio).</li>
                <li><strong>Ofrecer agua y comida</strong> junto con bebidas. Es parte del servicio profesional.</li>
                <li><strong>Opción de Uber/Didi.</strong> Quien conduce no bebe, y tú como dueño facilitas el transporte.</li>
            </ol>
        </div>

        ${quizBlock('q_m3l1', '🎯 ¿Cuál es la diferencia clave entre "solo bebidas", "bebidas + comida" y "bebidas + entretenimiento"?', [
            {text: 'Son lo mismo desde el punto de vista del control', correct: false},
            {text: 'La mezcla típica de ventas y el foco de control cambia: control de licor en el primero, maridaje en el segundo, volumen en el tercero', correct: true},
            {text: 'Solo se diferencian en el precio del menú', correct: false},
            {text: 'Solo el primero requiere licencia', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm3l2', module: 'Módulo 3 · Costo de bebidas', tag: 'tag-module', tagLabel: 'MÓDULO 3',
        title: 'Recetas estandarizadas de bebidas y compras',
        subtitle: 'Capítulo 4 — La onza exacta hace la diferencia',
        content: hero(heroGradients.m3, 'LECCIÓN 10', 'Recetas estandarizadas de bebidas — Cap. 4') + `
        ${note('Un bartender que sirve "a ojo" está regalando dinero todos los días. Un margarita con 2 onzas de tequila en vez de 1.5 = 33% más costo, 0% más precio. Esta lección acaba con esa fuga.')}

        ${videoLink('Cómo hacer inventario de licores y bebidas', 'BweI7TAvw-Y')}

        ${realImg('https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800', 'Bartender midiendo con jigger', 'El jigger (medidor) convierte a tu bartender en técnico profesional. Sin él, es artesano que pierde dinero')}

        <div class="content-card">
            <h3>🥃 Porciones estándar (spec drinks)</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:12px 0;">
                <tr style="background:#4a148c;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>Bebida</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Porción estándar USA</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Equivalente en ml</strong></td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Cerveza nacional (bote/botella)</td><td style="padding:8px;border:1px solid #ddd;">12 oz</td><td style="padding:8px;border:1px solid #ddd;">355 ml</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Cerveza draft (tarro)</td><td style="padding:8px;border:1px solid #ddd;">16 oz</td><td style="padding:8px;border:1px solid #ddd;">473 ml</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Copa de vino</td><td style="padding:8px;border:1px solid #ddd;">5 oz</td><td style="padding:8px;border:1px solid #ddd;">148 ml</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Botella de vino</td><td style="padding:8px;border:1px solid #ddd;">25.4 oz</td><td style="padding:8px;border:1px solid #ddd;">750 ml (5 copas)</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Shot / caballito</td><td style="padding:8px;border:1px solid #ddd;">1.5 oz</td><td style="padding:8px;border:1px solid #ddd;">44 ml</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Coctel con un licor</td><td style="padding:8px;border:1px solid #ddd;">1.5-2 oz</td><td style="padding:8px;border:1px solid #ddd;">44-60 ml</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Coctel premium</td><td style="padding:8px;border:1px solid #ddd;">2-2.5 oz</td><td style="padding:8px;border:1px solid #ddd;">60-75 ml</td></tr>
            </table>
            <p>Una botella de 750 ml de tequila debe rendir teóricamente: 750 / 44 = <strong>17 shots</strong>. Si tu bar saca 14-15 por botella, tienes un problema.</p>
        </div>

        <div class="content-card">
            <h3>🍸 Receta estandarizada de coctel (ejemplo: Margarita)</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:12px 0;">
                <tr style="background:#4a148c;color:white;"><td style="padding:10px;border:1px solid #ddd;">Ingrediente</td><td style="padding:10px;border:1px solid #ddd;">Porción</td><td style="padding:10px;border:1px solid #ddd;">Costo</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Tequila blanco premium (750ml @ $520)</td><td style="padding:8px;border:1px solid #ddd;">1.5 oz (44 ml)</td><td style="padding:8px;border:1px solid #ddd;">$30.53</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Triple sec (750ml @ $180)</td><td style="padding:8px;border:1px solid #ddd;">0.5 oz (15 ml)</td><td style="padding:8px;border:1px solid #ddd;">$3.60</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Jugo de limón fresco</td><td style="padding:8px;border:1px solid #ddd;">1 oz (30 ml)</td><td style="padding:8px;border:1px solid #ddd;">$2.50</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Sal en el borde + garnish</td><td style="padding:8px;border:1px solid #ddd;">—</td><td style="padding:8px;border:1px solid #ddd;">$1.50</td></tr>
                <tr style="background:#fff3e0;"><td style="padding:8px;border:1px solid #ddd;" colspan="2"><strong>Costo total</strong></td><td style="padding:8px;border:1px solid #ddd;"><strong>$38.13</strong></td></tr>
            </table>
            <p>Si vendes la margarita en <strong>$160 MXN</strong>: costo % = 38.13/160 = <strong>23.8%</strong>. Margen excelente.</p>
        </div>

        <div class="content-card">
            <h3>🍻 ¿Qué cervezas, vinos y licores comprar?</h3>
            <p><strong>Cervezas:</strong></p>
            <ul class="concept-list">
                <li>2-3 marcas nacionales populares (Corona, Modelo Especial, Victoria, Tecate).</li>
                <li>1-2 artesanales locales (Cucapá, Colima Gourmet, Tijuana).</li>
                <li>1 importada premium (Heineken, Stella, Guinness).</li>
            </ul>
            <p><strong>Vinos (la lista debe coincidir con el estilo de cocina):</strong></p>
            <ul class="concept-list">
                <li>Mezcla: 40% tinto, 35% blanco, 15% rosado/espumoso, 10% dulce.</li>
                <li>Mexicanos (LA Cetto, Monte Xanic, Casa Madero) obligatorios.</li>
                <li>Evitar SKUs que no rotan. Si una botella está 90+ días sin venderse, quítala.</li>
            </ul>
            <p><strong>Destilados:</strong></p>
            <ul class="concept-list">
                <li>Por categoría: tequila, mezcal, ron, vodka, ginebra, whisky, brandy.</li>
                <li>Por categoría 2-4 marcas: 1 well (barra baja, para cocteles), 2 call (marca media), 1 premium (para quien pida por marca).</li>
            </ul>
        </div>

        ${quizBlock('q_m3l2', '🎯 ¿Cuántos shots de 1.5 oz debería rendir una botella de 750ml?', [
            {text: '10 shots', correct: false},
            {text: '15 shots', correct: false},
            {text: 'Aproximadamente 17 shots (750/44)', correct: true},
            {text: '25 shots', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm3l3', module: 'Módulo 3 · Costo de bebidas', tag: 'tag-module', tagLabel: 'MÓDULO 3',
        title: 'Inventario especial de licor y cálculo de costos',
        subtitle: 'Capítulo 4 — Los 3 métodos: peso, conteo y medición',
        content: hero(heroGradients.m3, 'LECCIÓN 11', 'Inventario de licor — Cap. 4') + `
        ${note('Una botella a medias no vale la mitad. Puede estar 30%, 40%, 52%, 68%... y cada gramo que no cuentes se pierde. Esta lección enseña los 3 métodos profesionales de inventario de licor abierto.')}

        ${videoLink('Cómo hacer inventario de licores y bebidas | MASTERCLASS', 'BweI7TAvw-Y')}

        ${realImg('https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800', 'Botellas de bar con contenido variable', 'Una botella a medias no vale la mitad. Hay que medirla')}

        <div class="content-card">
            <h3>📏 Los 3 métodos de inventario de licor</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:12px 0;">
                <tr style="background:#4a148c;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>Método</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Cómo</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Precisión</strong></td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>1. Por peso</strong></td><td style="padding:8px;border:1px solid #ddd;">Báscula: peso actual − peso de botella vacía = contenido</td><td style="padding:8px;border:1px solid #ddd;">Muy alta (±5 ml)</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>2. Por conteo</strong></td><td style="padding:8px;border:1px solid #ddd;">Contar botellas cerradas + asignar décimos a las abiertas (0.1, 0.2, ... 1.0)</td><td style="padding:8px;border:1px solid #ddd;">Media (±30-50 ml)</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>3. Por medición</strong></td><td style="padding:8px;border:1px solid #ddd;">Vaciar botellas abiertas a probeta graduada</td><td style="padding:8px;border:1px solid #ddd;">Alta (±10 ml)</td></tr>
            </table>
            <p>La mayoría de los restaurantes usa <strong>método 2 (por conteo en décimos)</strong> por rapidez. El libro recomienda método 1 (peso) para bares de volumen.</p>
        </div>

        <div class="content-card">
            <h3>🧮 Cálculo del costo de bebidas vendidas</h3>
            <p>La fórmula es idéntica a la de alimentos, solo cambian los nombres:</p>
            ${formula('Costo de bebidas vendidas = Inv. inicial bebidas + Compras − Inv. final − Transferencias al otro lado', 'Transferencias = vino para la cocina, cerveza para la salsa, etc.')}
        </div>

        <div class="content-card">
            <h3>📊 Sales mix de bebidas — el dato que revela todo</h3>
            <p>Sales mix = qué % de tus ventas de bebida es cerveza, qué % es vino, qué % es destilados. Cada categoría tiene margen distinto:</p>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;">
                <tr style="background:#e3f2fd;"><td style="padding:8px;border:1px solid #ddd;">Categoría</td><td style="padding:8px;border:1px solid #ddd;">Costo % típico</td><td style="padding:8px;border:1px solid #ddd;">Margen %</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Cerveza</td><td style="padding:8px;border:1px solid #ddd;">28-32%</td><td style="padding:8px;border:1px solid #ddd;">68-72%</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Vino</td><td style="padding:8px;border:1px solid #ddd;">32-40%</td><td style="padding:8px;border:1px solid #ddd;">60-68%</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Destilados (cocteles)</td><td style="padding:8px;border:1px solid #ddd;">15-22%</td><td style="padding:8px;border:1px solid #ddd;">78-85%</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Refrescos / aguas</td><td style="padding:8px;border:1px solid #ddd;">10-18%</td><td style="padding:8px;border:1px solid #ddd;">82-90%</td></tr>
            </table>
            <p>Si tu sales mix se carga hacia cerveza, tu costo % total sube. Los cocteles de marca son los que salvan el margen.</p>
        </div>

        <div class="content-card tip">
            <h3>🎯 La fórmula del "potential" vs "actual"</h3>
            <p>Dopson y Hayes enfatizan comparar:</p>
            <ul class="concept-list">
                <li><strong>Potential cost:</strong> lo que DEBERÍA haber costado según recetas y ventas registradas.</li>
                <li><strong>Actual cost:</strong> lo que EN REALIDAD costó según inventario físico.</li>
            </ul>
            <p>La diferencia (variance) te dice cuánto se está "yendo":</p>
            ${formula('Variance = Actual − Potential', 'Si tu margarita dice que se vendieron 100 pero el inventario bajó como si fueran 115, algo pasa: sobre-pour, robo, regalo no registrado')}
            <p>Variance aceptable: menos de 3% de las ventas de bebidas. Más que eso = investigar.</p>
        </div>

        ${quizBlock('q_m3l3', '🎯 ¿Qué significa una "variance" alta entre costo teórico y costo actual de bebidas?', [
            {text: 'El proveedor está cobrando mal', correct: false},
            {text: 'Diferencia entre lo que DEBERÍA haber costado (según recetas + ventas) y lo que realmente costó (inventario). Alta = fuga: sobre-pour, robo, regalos no registrados', correct: true},
            {text: 'Es normal e irrelevante', correct: false},
            {text: 'Indica que el bartender trabaja rápido', correct: false}
        ])}
        `
    });


    // ==============================================================
    // MÓDULO 4 — PRODUCCIÓN (Cap. 5)
    // ==============================================================
    C.lessons.push({
        id: 'm4l1', module: 'Módulo 4 · Producción', tag: 'tag-module', tagLabel: 'MÓDULO 4',
        title: 'Programación de producción y emisión de productos',
        subtitle: 'Capítulo 5 — Del almacén a la cocina sin fugas',
        content: hero(heroGradients.m4, 'LECCIÓN 12', 'Producción y emisión — Cap. 5') + `
        ${note('Entre el almacén y el plato del cliente hay un viaje peligroso. Esta lección te enseña cómo controlar cada paso del proceso de producción, empezando por la emisión (issuing): la salida controlada de mercancía del almacén a la cocina.')}

        ${videoLink('Así es como funciona el Área de Producción en una cocina', 'usOxwhDKW9E')}

        ${realImg('https://images.unsplash.com/photo-1581349485608-9469926a8e5e?w=800', 'Cocina de restaurante en plena producción', 'La producción sin programación es caos. Y el caos siempre cuesta dinero')}

        <div class="content-card">
            <h3>📅 Programa de producción diario</h3>
            <p>Un programa de producción profesional contesta, para cada día, 4 preguntas:</p>
            <ol>
                <li><strong>¿Qué vamos a vender?</strong> (platillos del menú, sales mix esperado)</li>
                <li><strong>¿Cuánto vamos a vender?</strong> (pronóstico por platillo en base al historial)</li>
                <li><strong>¿Cuánto debemos producir o "prep-ear"?</strong> (mise en place: cortes, marinados, salsas madre)</li>
                <li><strong>¿Cuánto debemos pedir/sacar del almacén?</strong> (requisición)</li>
            </ol>
            <p>Sin programa → cocina que reacciona → compras de emergencia + sobreproducción + merma.</p>
        </div>

        <div class="content-card">
            <h3>📋 Requisición (issuing) — el control clave</h3>
            <p>La requisición es la orden escrita con la que la cocina pide al almacén lo que necesita para producir. Sin requisición, cualquiera entra al almacén y saca. Con requisición:</p>
            <ul class="concept-list">
                <li>Se especifica producto, cantidad y receta/platillo de destino.</li>
                <li>La firma quien pide (chef/jefe de cocina).</li>
                <li>La firma quien entrega (almacenista).</li>
                <li>Se registra en sistema o libreta.</li>
                <li>Es la base para calcular el <strong>food cost estimado diario</strong>.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>🍸 Consideración especial: emisión de bebidas</h3>
            <p>Las bebidas requieren control aún más estricto por su alto valor por unidad:</p>
            <ul class="concept-list">
                <li><strong>Botella vacía por botella llena:</strong> bartender entrega botella vacía y recibe nueva. No hay "me presta una, después te la reemplazo".</li>
                <li><strong>Sellos de control:</strong> cada botella con sello/marca del almacén.</li>
                <li><strong>Acceso al almacén de licor restringido</strong> a gerente y almacenista.</li>
                <li><strong>Par stock en el bar:</strong> cantidad fija de cada botella; solo reposición 1:1.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>🔑 Inventario físico vs. perpetuo</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:12px 0;">
                <tr style="background:#e65100;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>Físico</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Perpetuo</strong></td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Conteo real en anaquel</td><td style="padding:8px;border:1px solid #ddd;">Sistema calcula: inicial + entradas − salidas</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Se hace mensual (o semanal para bar)</td><td style="padding:8px;border:1px solid #ddd;">Se actualiza en tiempo real con POS + compras</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Muestra la realidad (con mermas/robos)</td><td style="padding:8px;border:1px solid #ddd;">Muestra lo que debería haber</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Lento y laborioso</td><td style="padding:8px;border:1px solid #ddd;">Rápido pero requiere sistema</td></tr>
            </table>
            <p><strong>Lo correcto es usar ambos:</strong> el perpetuo guía el día a día; el físico mensual confirma la realidad y ajusta.</p>
        </div>

        <div class="content-card tip">
            <h3>🔤 Inventario ABC — donde poner la atención</h3>
            <p>No todos los productos merecen el mismo nivel de control. El ABC analysis clasifica tu inventario:</p>
            <ul class="concept-list">
                <li><strong>A (alto valor): top 20% de SKUs que representan ~70% del valor</strong> — lomo, atún, vinos reserva. Inventario semanal, control estricto.</li>
                <li><strong>B (medio): siguiente 30% que representa ~20% del valor</strong> — pollo, pescado común, cervezas premium. Inventario quincenal.</li>
                <li><strong>C (bajo: 50% restante que representa ~10% del valor</strong> — especias, condimentos, servilletas. Inventario mensual.</li>
            </ul>
            <p>Enfocar 80% del esfuerzo de control en 20% del inventario (los productos A).</p>
        </div>

        ${quizBlock('q_m4l1', '🎯 ¿Qué clasificación tendría tu lomo de res en un análisis ABC?', [
            {text: 'C — bajo valor', correct: false},
            {text: 'B — valor medio', correct: false},
            {text: 'A — alto valor, control estricto y conteo frecuente', correct: true},
            {text: 'No aplica ABC a proteínas', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm4l2', module: 'Módulo 4 · Producción', tag: 'tag-module', tagLabel: 'MÓDULO 4',
        title: 'Desperdicio, sobrecocción y robo interno',
        subtitle: 'Capítulo 5 — Las 7 fugas más comunes de la cocina y el bar',
        content: hero(heroGradients.m4, 'LECCIÓN 13', 'Merma y robo — Cap. 5') + `
        ${note('Las fugas de la cocina rara vez son un solo robo grande. Son mil fugas pequeñas: un corte mal, una porción de más, una cerveza "regalada", un filete sobrecocido. Todas suman y todas se controlan.')}

        ${videoLink('Control de Mermas (para Restaurantes)', 'uqG9c-J4b68')}

        ${realImg('https://images.unsplash.com/photo-1520975698519-59ea9bb7c5c3?w=800', 'Desperdicio de comida', 'La merma no es solo basura: es dinero que tiraste. Medirla es el primer paso para reducirla')}

        <div class="content-card">
            <h3>🚨 Las 5 fugas de la cocina según Dopson &amp; Hayes</h3>
            <ol>
                <li><strong>Waste (desperdicio):</strong> producto que se echa a perder por mal almacenamiento, caducidad, exceso de prep. <em>Solución:</em> FIFO estricto + rotación + producción basada en pronóstico.</li>
                <li><strong>Overcooking (sobrecocción):</strong> filetes quemados, pasta pasada. Se regalan al empleado o se tiran. <em>Solución:</em> capacitación, termómetros, testing.</li>
                <li><strong>Overserving (sobreporción):</strong> el cocinero sirve "generosamente" sin pesar. Cada gramo de más en 300 platos = 3 kg de regalo. <em>Solución:</em> porciones medidas, cucharones calibrados, entrenamiento.</li>
                <li><strong>Improper carryover:</strong> mal uso de sobras. Tirar en vez de convertir en especiales. <em>Solución:</em> menú del día con carryovers, caldos de hueso, rellenos.</li>
                <li><strong>Make or buy decisions incorrectas:</strong> hacer in-house lo que es más barato comprar hecho (o al revés). <em>Solución:</em> costeo comparativo.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>🍺 Las 7 fugas del bar</h3>
            <ol>
                <li><strong>Free-pour sin jigger:</strong> bartender sirve "a ojo". Regalar 20-30% del volumen.</li>
                <li><strong>Sobre-pour:</strong> servir 2 oz cuando la receta pide 1.5 oz.</li>
                <li><strong>Bebidas regaladas (comps) no registradas:</strong> "al jefe, al cumpleañero, al regular".</li>
                <li><strong>Intercambio por propina:</strong> "te pongo dos por el precio de una si me dejas buena propina".</li>
                <li><strong>Sustitución:</strong> cobrar premium, servir well.</li>
                <li><strong>Bebidas llevadas por empleados:</strong> "una para el camino".</li>
                <li><strong>Breakage no documentado:</strong> botella rota "accidentalmente" que en realidad se bebió.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>🛡️ Sistemas de control anti-fuga</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:12px 0;">
                <tr style="background:#e65100;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>Sistema</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Uso</strong></td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Free-pour</strong></td><td style="padding:8px;border:1px solid #ddd;">Sin medidor. Solo para bares de muy alta confianza y volumen.</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Jigger</strong></td><td style="padding:8px;border:1px solid #ddd;">Medidor físico de metal (1.5 oz + 0.5 oz). Estándar de la industria.</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Metered bottle/dispenser</strong></td><td style="padding:8px;border:1px solid #ddd;">Dispensador calibrado en la botella. Solo da 1.5 oz por "disparo".</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Beverage gun</strong></td><td style="padding:8px;border:1px solid #ddd;">Pistola conectada a cajas de licor/mixer. Botón por bebida.</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Total bar system</strong></td><td style="padding:8px;border:1px solid #ddd;">Sistema POS vinculado: cada bebida se sirve solo si se cobra primero.</td></tr>
            </table>
        </div>

        <div class="content-card tip">
            <h3>👁️ Cómo detectar robo interno</h3>
            <ul class="concept-list">
                <li><strong>Variance de inventario consistentemente alta</strong> (arriba 3%).</li>
                <li><strong>Cámaras</strong> en bar, almacén y puerta trasera.</li>
                <li><strong>Compras personales</strong> del empleado: carro nuevo con salario de $8k = señal.</li>
                <li><strong>Auditorías sorpresa</strong>: conteo de inventario sin aviso.</li>
                <li><strong>Shoppers secretos</strong> (mystery shoppers) que verifican cobros, porciones, trato.</li>
                <li><strong>Rotación de personal</strong> en puestos sensibles cada 6-12 meses.</li>
            </ul>
            ${quote('No es que todos tus empleados sean ladrones. Es que si dejas la puerta abierta, algunos la cruzan. Cerrar la puerta no es desconfiar — es ser profesional.', 'Dopson &amp; Hayes (traducción libre)')}
        </div>

        ${quizBlock('q_m4l2', '🎯 ¿Cuál es el sistema de control de porción de licor estándar en la industria?', [
            {text: 'Free-pour — el bartender decide al ojo', correct: false},
            {text: 'Jigger — medidor físico de metal (1.5 oz + 0.5 oz)', correct: true},
            {text: 'Confianza total en el bartender', correct: false},
            {text: 'Pesar cada botella antes y después del turno', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm4l3', module: 'Módulo 4 · Producción', tag: 'tag-module', tagLabel: 'MÓDULO 4',
        title: 'Costo real vs. costo alcanzable — la brecha',
        subtitle: 'Capítulo 5 — Lo que DEBERÍA costarte vs. lo que realmente cuesta',
        content: hero(heroGradients.m4, 'LECCIÓN 14', 'Costo real vs. alcanzable — Cap. 5') + `
        ${note('Esta lección te da la herramienta más poderosa de diagnóstico: comparar tu costo real con tu costo alcanzable (attainable). La diferencia es la medida exacta de tus ineficiencias.')}

        ${videoLink('Costo Teórico vs Costo Real en los Negocios Gastronómicos', 'Gb8PeBUroV4')}

        ${realImg('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800', 'Análisis de brecha entre costo teórico y real', 'La brecha entre lo que deberías gastar y lo que realmente gastas es tu mapa del tesoro perdido')}

        <div class="content-card">
            <h3>📐 Las 3 definiciones clave</h3>
            <ol>
                <li><strong>Costo estándar (standard cost):</strong> lo que cuesta una porción según la receta estandarizada con precios de compra actuales. Es el "deber ser".</li>
                <li><strong>Costo alcanzable (attainable cost):</strong> el costo estándar × el número de porciones que se vendieron según el POS. Es lo que deberías haber gastado.</li>
                <li><strong>Costo real (actual cost):</strong> lo que SÍ gastaste según el inventario físico. Refleja la realidad, incluyendo merma, robo y errores.</li>
            </ol>
            ${formula('Brecha = Costo real − Costo alcanzable', 'Entre más grande la brecha, más ineficiencia estás escondiendo')}
        </div>

        <div class="content-card">
            <h3>🧮 Ejemplo completo — Hamburguesa House</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:12px 0;">
                <tr style="background:#1a237e;color:white;"><td style="padding:10px;border:1px solid #ddd;" colspan="3">Receta estandarizada: Hamburguesa House</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;" colspan="2">Costo estándar por porción:</td><td style="padding:8px;border:1px solid #ddd;"><strong>$45.00</strong></td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;" colspan="2">Porciones vendidas en el mes (POS):</td><td style="padding:8px;border:1px solid #ddd;"><strong>1,200</strong></td></tr>
                <tr style="background:#e8f5e9;"><td style="padding:8px;border:1px solid #ddd;" colspan="2"><strong>Costo alcanzable (1,200 × $45)</strong></td><td style="padding:8px;border:1px solid #ddd;"><strong>$54,000</strong></td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;" colspan="2">Costo real según inventario:</td><td style="padding:8px;border:1px solid #ddd;">$58,500</td></tr>
                <tr style="background:#ffebee;"><td style="padding:8px;border:1px solid #ddd;" colspan="2"><strong>Brecha (fugas)</strong></td><td style="padding:8px;border:1px solid #ddd;"><strong>$4,500 (8.3%)</strong></td></tr>
            </table>
            <p>Esa brecha de $4,500 mensuales × 12 meses = $54,000 al año. En una hamburguesería chica, es el sueldo de un cocinero completo. O la renta trimestral.</p>
        </div>

        <div class="content-card">
            <h3>🎯 Rendimiento (yield) — la otra cara de la moneda</h3>
            <p>El rendimiento es el % de producto utilizable después de limpieza y preparación:</p>
            ${formula('% Yield = Peso utilizable (neto) ÷ Peso comprado (bruto) × 100', 'Un filete 1 kg bruto que rinde 700 g limpio = 70% yield')}
            <p>Si tu receta supone 70% yield y tu carnicero solo te da 60%, tu costo real se dispara 17%.</p>
            <p>Yields típicos:</p>
            <ul class="concept-list">
                <li>Pollo entero → piezas: 70-75%</li>
                <li>Res retazo → diezmillo limpio: 55-65%</li>
                <li>Camarón entero → pelado: 50-55%</li>
                <li>Lechuga romana → hojas limpias: 75-80%</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>🔧 6 palancas para cerrar la brecha</h3>
            <ol>
                <li><strong>Reducir porción relativa al precio:</strong> mantener precio, bajar gramos 5-10% (si el cliente no nota).</li>
                <li><strong>Variar composición:</strong> usar ingredientes de menor costo para rellenos sin perder calidad.</li>
                <li><strong>Ajustar calidad:</strong> de "premium" a "selección" en productos donde el cliente no distingue.</li>
                <li><strong>Lograr mejor sales mix:</strong> promover los platos de mejor margen (Módulo 8).</li>
                <li><strong>Asegurar que todo lo comprado se venda:</strong> menos merma, más carryovers creativos.</li>
                <li><strong>Subir precios cuidadosamente:</strong> 5% de subida anual es digerible si se comunica bien.</li>
            </ol>
        </div>

        ${quizBlock('q_m4l3', '🎯 Si tu costo alcanzable es $50,000 y tu costo real es $57,000, ¿qué significa?', [
            {text: 'Ganaste $7,000 extra', correct: false},
            {text: 'Hay una brecha de $7,000 (14%) que representa merma, robo, sobre-porción o sobrecocción. Hay que investigar la causa', correct: true},
            {text: 'Es normal y no hay que hacer nada', correct: false},
            {text: 'Los proveedores subieron los precios', correct: false}
        ])}
        `
    });


    // ==============================================================
    // MÓDULO 5 — PRICING (Cap. 6)
    // ==============================================================
    C.lessons.push({
        id: 'm5l1', module: 'Módulo 5 · Pricing de menú', tag: 'tag-module', tagLabel: 'MÓDULO 5',
        title: 'Formatos de menú y factores del precio',
        subtitle: 'Capítulo 6 — Tu menú es tu herramienta #1 de ventas',
        content: hero(heroGradients.m5, 'LECCIÓN 15', 'Formatos de menú — Cap. 6') + `
        ${note('El menú es el mapa del dinero. Determina qué compra la gente, en qué orden lo lee, qué se queda mirando. Esta lección te enseña los 4 formatos clásicos y los 8 factores que deben influir cada precio.')}

        ${videoLink('Ingeniería de menús — Masterclass completa', 'XCwy68Qe_hc')}

        ${realImg('https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800', 'Menú de restaurante bien diseñado', 'Un menú no se diseña — se ingenia. Cada platillo, cada precio, cada descripción cumple una función comercial')}

        <div class="content-card">
            <h3>📜 Los 4 formatos de menú</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:12px 0;">
                <tr style="background:#c2185b;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>Formato</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Descripción</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Ideal para</strong></td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Standard</strong></td><td style="padding:8px;border:1px solid #ddd;">Menú fijo que cambia 1-2× al año</td><td style="padding:8px;border:1px solid #ddd;">Cadenas, franquicias, casual dining</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Daily</strong></td><td style="padding:8px;border:1px solid #ddd;">Cambia todos los días según disponibilidad</td><td style="padding:8px;border:1px solid #ddd;">Fine dining, cocinas de mercado, chef's table</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Cycle</strong></td><td style="padding:8px;border:1px solid #ddd;">Rota en ciclos de 7, 14 o 28 días</td><td style="padding:8px;border:1px solid #ddd;">Hospitales, escuelas, corporativos</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Specials</strong></td><td style="padding:8px;border:1px solid #ddd;">Platillos temporales además del menú fijo</td><td style="padding:8px;border:1px solid #ddd;">Cualquier tipo — para probar, usar merma o dar frescura</td></tr>
            </table>
        </div>

        <div class="content-card">
            <h3>🎯 Los 8 factores que afectan cada precio</h3>
            <ol>
                <li><strong>Competencia local:</strong> si el restaurante de junto cobra $150 por una hamburguesa, $280 por la tuya necesita justificación.</li>
                <li><strong>Nivel de servicio:</strong> fast-casual vs. servido vs. premium cambia el precio 30-100%.</li>
                <li><strong>Tipo de cliente:</strong> oficinista al mediodía vs. cena familiar fin de semana. Disposición a pagar distinta.</li>
                <li><strong>Calidad del producto:</strong> Angus Prime vs. Choice vs. Select = precios distintos.</li>
                <li><strong>Tamaño de porción:</strong> la porción real debe soportar el precio.</li>
                <li><strong>Ambiente:</strong> vista al mar, música en vivo, diseño premium = +20-40%.</li>
                <li><strong>Horario:</strong> mismo platillo en desayuno cuesta 20-30% menos que en cena.</li>
                <li><strong>Ubicación:</strong> zona rosa CDMX vs. carretera federal. El mismo producto tiene público y precio distinto.</li>
                <li><strong>Sales mix deseado:</strong> a veces el precio se ajusta para inducir venta (precio ancla alto, luego el real parece barato).</li>
            </ol>
        </div>

        <div class="content-card tip">
            <h3>🧠 Psicología del precio en el menú</h3>
            <ul class="concept-list">
                <li><strong>Evitar signo $:</strong> "189" vende más que "$189". El signo activa el "dolor del gasto".</li>
                <li><strong>Precios charm (terminar en 9 o 5):</strong> $189 vs. $190. Percibidos como "de $100s" y no "de $200s".</li>
                <li><strong>Precio ancla:</strong> poner un platillo muy caro al principio hace que los otros parezcan bargain.</li>
                <li><strong>No alinear precios en columna derecha:</strong> fuerza a comparar. Precios incrustados en la descripción venden 15% más margen.</li>
                <li><strong>Descripciones vivas:</strong> "salmón asado en hoja de plátano con salsa de mango habanero" vende 25% más que "salmón con salsa".</li>
            </ul>
        </div>

        ${quizBlock('q_m5l1', '🎯 ¿Por qué los menús profesionales evitan poner el signo $ antes de los precios?', [
            {text: 'Por ahorro de tinta', correct: false},
            {text: 'Porque activa el "dolor del gasto" mental y reduce el consumo; sin signo, el número se lee como información', correct: true},
            {text: 'Porque es ilegal en México', correct: false},
            {text: 'Solo aplica a menús digitales', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm5l2', module: 'Módulo 5 · Pricing de menú', tag: 'tag-module', tagLabel: 'MÓDULO 5',
        title: 'Asignación de precios — costo % vs. margen',
        subtitle: 'Capítulo 6 — Los dos métodos y cuándo usar cada uno',
        content: hero(heroGradients.m5, 'LECCIÓN 16', 'Asignación de precios — Cap. 6') + `
        ${note('Esta es la lección de las fórmulas. Hay solo dos métodos maestros para fijar precio: por porcentaje de costo y por margen de contribución. Debes dominar ambos y saber cuándo usar cuál.')}

        ${videoLink('Cómo COSTEAR los platos del MENÚ y calcular el precio', 'dMJEXcX5_rU')}

        ${realImg('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800', 'Calculando precios de menú', 'Fijar precios es la decisión más apalancada del restaurante: un cambio de $10 MXN a 300 platos al día = $9,000 al mes')}

        <div class="content-card">
            <h3>🧮 Método 1: Porcentaje de costo de producto</h3>
            <p>Se basa en mantener un food cost % objetivo:</p>
            ${formula('Precio = Costo del platillo ÷ Food cost % deseado', 'Si tu objetivo es 30% food cost: Precio = Costo ÷ 0.30')}
            <p><strong>Ejemplo:</strong> la hamburguesa cuesta $45. Quiero un food cost de 30%. Precio = 45 / 0.30 = <strong>$150</strong>.</p>
            <p>Equivalente: multiplicar el costo × factor.</p>
            ${formula('Factor = 1 ÷ Food cost % deseado', 'Si quiero 30%: factor = 3.33; si quiero 25%: factor = 4.0')}
        </div>

        <div class="content-card">
            <h3>🧮 Método 2: Margen de contribución del producto</h3>
            <p>Se basa en generar un monto absoluto de ganancia bruta por plato:</p>
            ${formula('Precio = Costo del platillo + Margen de contribución deseado', 'Si quiero $150 de margen: Precio = Costo + $150')}
            <p><strong>Ejemplo:</strong> la hamburguesa cuesta $45. Quiero $150 de margen. Precio = 45 + 150 = <strong>$195</strong>.</p>
        </div>

        <div class="content-card">
            <h3>⚖️ ¿Cuál método usar?</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:12px 0;">
                <tr style="background:#c2185b;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>Porcentaje de costo</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Margen de contribución</strong></td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Productos caros (carnes premium, pescados)</td><td style="padding:8px;border:1px solid #ddd;">Productos de muy bajo costo (ensaladas, refrescos)</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Pizzerías, ramen: el producto cuesta $40, precio $120 = 33%</td><td style="padding:8px;border:1px solid #ddd;">Ensalada cuesta $8, con MC de $50 le pones $58 (no $24)</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Busca mantener margen relativo</td><td style="padding:8px;border:1px solid #ddd;">Busca mantener margen absoluto</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Peligro: productos baratos quedan muy baratos</td><td style="padding:8px;border:1px solid #ddd;">Peligro: productos caros quedan demasiado caros</td></tr>
            </table>
            <p><strong>Mejor práctica:</strong> usa el método que te dé el precio MÁS ALTO. Eso protege tu margen.</p>
        </div>

        <div class="content-card">
            <h3>💡 La regla combinada (híbrida)</h3>
            <p>Muchos operadores profesionales fijan un precio mínimo con cada método y toman el mayor:</p>
            <ul class="concept-list">
                <li>Precio por costo % (30%) = $150</li>
                <li>Precio por margen de contribución ($100 min) = $145</li>
                <li><strong>Precio final: $150</strong> (el mayor)</li>
            </ul>
            <p>Esto te asegura tanto el margen absoluto como el relativo.</p>
        </div>

        ${quizBlock('q_m5l2', '🎯 Si un platillo cuesta $30 y quieres mantener un food cost % del 25%, ¿cuál debe ser el precio de venta?', [
            {text: '$60 (costo × 2)', correct: false},
            {text: '$120 ($30 ÷ 0.25, o equivalente $30 × factor 4)', correct: true},
            {text: '$55 (costo + 25%)', correct: false},
            {text: '$90', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm5l3', module: 'Módulo 5 · Pricing de menú', tag: 'tag-module', tagLabel: 'MÓDULO 5',
        title: 'Estrategias especiales — cupones, bundles, buffets',
        subtitle: 'Capítulo 6 — Cuándo y cómo bajarle al precio estratégicamente',
        content: hero(heroGradients.m5, 'LECCIÓN 17', 'Estrategias especiales de pricing — Cap. 6') + `
        ${note('Bajar el precio parece malo pero hecho con estrategia puede subir la utilidad. Esta lección te enseña las 5 estrategias especiales: cupones, value pricing, bundling, buffets y pricing de bebidas en eventos.')}

        ${videoLink('Cómo Crear un Menú Innovador — Secretos para un Menú Irresistible', 'C1zLNwHU4ao')}

        ${realImg('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800', 'Buffet variado', 'Los buffets parecen simples pero esconden matemáticas complejas: precio único para consumo variable')}

        <div class="content-card">
            <h3>🎟️ Cupones y descuentos — cuándo sí, cuándo no</h3>
            <p><strong>Sí usar cupones cuando:</strong></p>
            <ul class="concept-list">
                <li>Eres nuevo y quieres tracción.</li>
                <li>Necesitas llenar horarios muertos (martes 3 PM).</li>
                <li>Quieres limpiar inventario (mariscos del fin de semana).</li>
                <li>Es un evento específico con costo marginal bajo.</li>
            </ul>
            <p><strong>NO usar cupones cuando:</strong></p>
            <ul class="concept-list">
                <li>Tienes fila en la puerta (estás canibalizando tu propio precio).</li>
                <li>Tu producto es premium (devalúa marca).</li>
                <li>No puedes medir el ROI.</li>
                <li>Los clientes ya lo esperan (se vuelve expectativa, no promoción).</li>
            </ul>
            <p>Regla: si un cupón genera clientes nuevos que vuelven a precio normal, fue inversión. Si solo descuenta a los que ya iban a venir, fue pérdida.</p>
        </div>

        <div class="content-card">
            <h3>📦 Bundling — la técnica del combo</h3>
            <p>Bundling = ofrecer paquete de varios platillos a precio total menor que la suma individual, pero con margen combinado mayor.</p>
            <p><strong>Ejemplo:</strong></p>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;">
                <tr style="background:#e3f2fd;"><td style="padding:8px;border:1px solid #ddd;">Individual</td><td style="padding:8px;border:1px solid #ddd;">Precio</td><td style="padding:8px;border:1px solid #ddd;">Costo</td><td style="padding:8px;border:1px solid #ddd;">Margen</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Hamburguesa</td><td style="padding:8px;border:1px solid #ddd;">$180</td><td style="padding:8px;border:1px solid #ddd;">$54</td><td style="padding:8px;border:1px solid #ddd;">$126</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Papas francesas</td><td style="padding:8px;border:1px solid #ddd;">$60</td><td style="padding:8px;border:1px solid #ddd;">$8</td><td style="padding:8px;border:1px solid #ddd;">$52</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Refresco</td><td style="padding:8px;border:1px solid #ddd;">$40</td><td style="padding:8px;border:1px solid #ddd;">$5</td><td style="padding:8px;border:1px solid #ddd;">$35</td></tr>
                <tr style="background:#fff3e0;"><td style="padding:8px;border:1px solid #ddd;"><strong>Suma</strong></td><td style="padding:8px;border:1px solid #ddd;">$280</td><td style="padding:8px;border:1px solid #ddd;">$67</td><td style="padding:8px;border:1px solid #ddd;">$213</td></tr>
                <tr style="background:#e8f5e9;"><td style="padding:8px;border:1px solid #ddd;"><strong>Combo "Classic" a $239</strong></td><td style="padding:8px;border:1px solid #ddd;">$239</td><td style="padding:8px;border:1px solid #ddd;">$67</td><td style="padding:8px;border:1px solid #ddd;">$172</td></tr>
            </table>
            <p>Aparentemente bajó el margen (de $213 a $172), PERO si el combo convierte a más clientes que hubieran pedido solo hamburguesa + agua, la ganancia total sube. Depende del comportamiento real.</p>
        </div>

        <div class="content-card">
            <h3>🍽️ Salad bars y buffets — el arte del "todo lo que puedas comer"</h3>
            <p>El buffet es precio único para consumo variable. Para fijar precio, Dopson &amp; Hayes sugieren:</p>
            ${formula('Precio buffet = (Costo promedio por persona × Factor deseado) + Pad', 'Pad = ajuste por el comensal promedio vs. el que "come mucho"')}
            <p><strong>Ejemplo:</strong> costo promedio $70 por persona, factor 3 (33% food cost), pad $15 = precio $225.</p>
            <p><strong>Claves del buffet rentable:</strong></p>
            <ul class="concept-list">
                <li>Productos llenadores al inicio (arroz, pasta, papas) — $ por gramo bajo.</li>
                <li>Proteínas caras al final de la línea.</li>
                <li>Platos pequeños (los clientes repiten más pero consumen menos total).</li>
                <li>Música y ambiente que no inviten a "quedarse 3 horas".</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>🍾 Pricing de vino por botella</h3>
            <p>Los vinos suelen tener margen distinto según el rango de precio:</p>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;">
                <tr style="background:#e3f2fd;"><td style="padding:8px;border:1px solid #ddd;">Rango costo botella</td><td style="padding:8px;border:1px solid #ddd;">Markup típico</td><td style="padding:8px;border:1px solid #ddd;">Ejemplo</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">&lt; $200 costo</td><td style="padding:8px;border:1px solid #ddd;">3-4×</td><td style="padding:8px;border:1px solid #ddd;">$150 cuesta → $550 vende</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">$200-$500</td><td style="padding:8px;border:1px solid #ddd;">2.5-3×</td><td style="padding:8px;border:1px solid #ddd;">$400 → $1,100</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">&gt; $500</td><td style="padding:8px;border:1px solid #ddd;">1.8-2.5×</td><td style="padding:8px;border:1px solid #ddd;">$1,200 → $2,800</td></tr>
            </table>
            <p>La idea: margen absoluto sube aunque el markup % baje. En vinos premium el cliente siente el precio, entonces se moderan los múltiplos.</p>
        </div>

        ${quizBlock('q_m5l3', '🎯 Tu buffet cuesta $60 por persona promedio, quieres 30% food cost y un pad de $20. ¿Cuál sería el precio?', [
            {text: '$80 ($60 + $20)', correct: false},
            {text: '$90 ($60/0.30 × 0.45)', correct: false},
            {text: '$220 (($60 ÷ 0.30) + $20)', correct: true},
            {text: '$180', correct: false}
        ])}
        `
    });

    // ==============================================================
    // MÓDULO 6 — COSTO DE MANO DE OBRA (Cap. 7)
    // ==============================================================
    C.lessons.push({
        id: 'm6l1', module: 'Módulo 6 · Costo de mano de obra', tag: 'tag-module', tagLabel: 'MÓDULO 6',
        title: '¿Qué es realmente el costo laboral?',
        subtitle: 'Capítulo 7 — Nómina no es costo laboral',
        content: hero(heroGradients.m6, 'LECCIÓN 18', '¿Qué es el costo laboral? — Cap. 7') + `
        ${note('Muchos dueños calculan el costo laboral como "nómina ÷ ventas". Esa cifra está INCOMPLETA. El costo laboral real incluye muchísimo más. Esta lección te enseña los 8 componentes que tu contador debe sumar.')}

        ${videoLink('¿Cuánto hay que vender en un restaurante para pagar la nómina?', '2JcD17wy5yA')}

        ${realImg('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800', 'Equipo de cocina trabajando', 'Cada peso invertido en gente debe producir al menos 3 pesos de venta. Si no, el restaurante pierde')}

        <div class="content-card">
            <h3>💼 Los 8 componentes del costo laboral real</h3>
            <ol>
                <li><strong>Sueldos base</strong> (tiempo trabajado × tarifa).</li>
                <li><strong>Horas extra</strong> (dobles y triples según LFT).</li>
                <li><strong>Prestaciones de ley:</strong> aguinaldo (15 días), vacaciones (12-24 días según antigüedad), prima vacacional (25% del salario vacaciones), prima dominical (25% extra).</li>
                <li><strong>IMSS patronal:</strong> ~25-30% del salario integrado.</li>
                <li><strong>INFONAVIT:</strong> 5% del salario integrado.</li>
                <li><strong>Impuesto sobre nómina (estatal):</strong> 2-3% según estado.</li>
                <li><strong>PTU (reparto utilidades):</strong> 10% de utilidad fiscal, anual.</li>
                <li><strong>Prestaciones superiores:</strong> vales de despensa, seguro de gastos, bonos, uniformes, comidas.</li>
            </ol>
            <p>Regla práctica mexicana: multiplica la nómina neta por <strong>1.40-1.55</strong> para obtener el costo laboral real.</p>
        </div>

        <div class="content-card">
            <h3>💰 Payroll vs. Labor expense</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:12px 0;">
                <tr style="background:#006064;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>Payroll (nómina)</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Labor expense (gasto laboral)</strong></td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Solo lo que paga al empleado</td><td style="padding:8px;border:1px solid #ddd;">TODO lo que le cuesta al restaurante tener ese empleado</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Aparece en el recibo de nómina</td><td style="padding:8px;border:1px solid #ddd;">Aparece en el estado de resultados</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Ejemplo: $100 / día al mesero</td><td style="padding:8px;border:1px solid #ddd;">Ejemplo real: $143 / día al mesero (incluye IMSS, provisión aguinaldo, etc.)</td></tr>
            </table>
        </div>

        <div class="content-card">
            <h3>🇲🇽 Costo laboral típico en México por giro</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;">
                <tr style="background:#e3f2fd;"><td style="padding:8px;border:1px solid #ddd;">Tipo de operación</td><td style="padding:8px;border:1px solid #ddd;">Costo laboral típico</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Fast food (McDonald's, KFC, pizzerías)</td><td style="padding:8px;border:1px solid #ddd;">22-28%</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Casual dining (Vips, Sanborns)</td><td style="padding:8px;border:1px solid #ddd;">28-34%</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Fine dining independiente</td><td style="padding:8px;border:1px solid #ddd;">32-40%</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Cafeterías / cafés</td><td style="padding:8px;border:1px solid #ddd;">25-32%</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Hoteles 5 estrellas (room service)</td><td style="padding:8px;border:1px solid #ddd;">35-42%</td></tr>
            </table>
        </div>

        <div class="content-card tip">
            <h3>⚠️ Outsourcing vs. contratación directa — la realidad legal mexicana</h3>
            <p>Desde la reforma de 2021 (Ley Federal del Trabajo), el outsourcing puro está prohibido. Solo se permite la contratación de servicios especializados registrados en el REPSE. Consecuencias:</p>
            <ul class="concept-list">
                <li>No puedes tener a tus meseros en una "empresa prestadora" para bajar IMSS.</li>
                <li>PTU: se reparte en cada empresa individual. Complica la planeación.</li>
                <li>Multas de $178,000 a $4,480,000 MXN por simulación.</li>
            </ul>
            <p>Consulta con contador especializado en restaurantes.</p>
        </div>

        ${quizBlock('q_m6l1', '🎯 ¿Por qué "nómina" (payroll) no es lo mismo que "costo laboral" (labor expense)?', [
            {text: 'Son sinónimos', correct: false},
            {text: 'Payroll es solo lo que se paga al empleado; costo laboral incluye IMSS, INFONAVIT, aguinaldo, vacaciones, PTU, impuesto sobre nómina y prestaciones adicionales', correct: true},
            {text: 'Payroll incluye impuestos y labor expense no', correct: false},
            {text: 'Labor expense solo aplica en fine dining', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm6l2', module: 'Módulo 6 · Costo de mano de obra', tag: 'tag-module', tagLabel: 'MÓDULO 6',
        title: 'Productividad — medir para gestionar',
        subtitle: 'Capítulo 7 — Las 6 métricas de productividad laboral',
        content: hero(heroGradients.m6, 'LECCIÓN 19', 'Productividad laboral — Cap. 7') + `
        ${note('Sin medir, no hay gestión. Y la productividad laboral en restaurantes se mide con 6 métricas distintas que te cuentan historias complementarias. Esta lección te enseña a usarlas sin contradicciones.')}

        ${videoLink('5 Claves Para Mantener a los Empleados de Tu Restaurante', 'nR9X-9OAMoU')}

        ${realImg('https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800', 'Equipo de cocina productivo', 'Productividad no es trabajar más rápido. Es producir más valor con el mismo tiempo')}

        <div class="content-card">
            <h3>📊 Las 6 métricas clave de productividad laboral</h3>
            <ol>
                <li><strong>Labor cost % (costo laboral / ventas):</strong> la métrica más usada pero puede engañar (vuela con las ventas).</li>
                <li><strong>Sales per labor hour (ventas / hora trabajada):</strong> cuánto vende cada hora-empleado. Ideal &gt; $400 MXN/hora.</li>
                <li><strong>Labor dollars per guest served (pesos de nómina / cliente):</strong> cuánto cuesta atender a cada cliente. Varía por tipo.</li>
                <li><strong>Guests served per labor dollar (clientes / peso de nómina):</strong> inverso del anterior. Ideal &gt; 1.</li>
                <li><strong>Guests served per labor hour (clientes / hora trabajada):</strong> rotación por hora-persona.</li>
                <li><strong>Six-column daily productivity report:</strong> tabla que integra las 6 anteriores en un solo vistazo diario.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>🧮 Ejemplo: Restaurante de 50 mesas en día sábado</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:12px 0;">
                <tr style="background:#006064;color:white;"><td style="padding:10px;border:1px solid #ddd;">Métrica</td><td style="padding:10px;border:1px solid #ddd;">Valor</td><td style="padding:10px;border:1px solid #ddd;">Diagnóstico</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Ventas del día</td><td style="padding:8px;border:1px solid #ddd;">$85,000</td><td style="padding:8px;border:1px solid #ddd;">—</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Clientes atendidos</td><td style="padding:8px;border:1px solid #ddd;">340</td><td style="padding:8px;border:1px solid #ddd;">Ticket promedio $250</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Horas totales trabajadas (todos)</td><td style="padding:8px;border:1px solid #ddd;">180 hrs</td><td style="padding:8px;border:1px solid #ddd;">12 empleados × 15 hrs</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Costo laboral real del día</td><td style="padding:8px;border:1px solid #ddd;">$25,500</td><td style="padding:8px;border:1px solid #ddd;">30% de ventas — aceptable</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Sales per labor hour</td><td style="padding:8px;border:1px solid #ddd;">$472</td><td style="padding:8px;border:1px solid #ddd;">Bueno (&gt; $400)</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Labor $ per guest</td><td style="padding:8px;border:1px solid #ddd;">$75</td><td style="padding:8px;border:1px solid #ddd;">Normal</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Guests per labor hour</td><td style="padding:8px;border:1px solid #ddd;">1.89</td><td style="padding:8px;border:1px solid #ddd;">Rotación sana</td></tr>
            </table>
        </div>

        <div class="content-card">
            <h3>🧠 Los 11 factores que afectan productividad</h3>
            <p>Dopson &amp; Hayes identifican 11 factores que determinan la productividad de una operación:</p>
            <ol>
                <li><strong>Selección de empleados:</strong> contratar al correcto elimina 80% de los problemas.</li>
                <li><strong>Capacitación:</strong> un cocinero mal entrenado = 2× los errores.</li>
                <li><strong>Supervisión:</strong> ni micromanagement ni ausentismo.</li>
                <li><strong>Programación (scheduling):</strong> el tema de la siguiente lección.</li>
                <li><strong>Descansos:</strong> ilegal no darlos y contraproducente negarlos.</li>
                <li><strong>Moral y clima laboral:</strong> restaurantes con alta rotación no son productivos.</li>
                <li><strong>Diseño del menú:</strong> un menú con 80 platillos complica todo.</li>
                <li><strong>Convenience vs scratch:</strong> prep con productos pre-hechos vs. desde cero.</li>
                <li><strong>Equipo:</strong> una plancha de 30 años vs. una moderna cambia la productividad.</li>
                <li><strong>Nivel de servicio deseado:</strong> fine dining requiere más personal por cliente.</li>
                <li><strong>Sistemas y tecnología:</strong> POS, KDS, apps de pedido → menos gente necesaria.</li>
            </ol>
        </div>

        ${quizBlock('q_m6l2', '🎯 Si tu restaurante vende $80,000 y tus empleados trabajaron 200 horas totales, ¿cuál es tu "sales per labor hour"?', [
            {text: '$200', correct: false},
            {text: '$400 ($80,000 ÷ 200 horas)', correct: true},
            {text: '$800', correct: false},
            {text: '$40', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm6l3', module: 'Módulo 6 · Costo de mano de obra', tag: 'tag-module', tagLabel: 'MÓDULO 6',
        title: 'Programación eficiente de turnos',
        subtitle: 'Capítulo 7 — El arte de staffear exacto para cada hora',
        content: hero(heroGradients.m6, 'LECCIÓN 20', 'Programación de turnos — Cap. 7') + `
        ${note('Programar es un arte con mucha ciencia atrás. Si sobre-staffeas, tiras dinero; si sub-staffeas, tiras clientes. Este balance fino se logra con datos, no con intuición.')}

        ${videoLink('Cómo hacer el horario perfecto', 'TikN2s-pSBw')}

        ${realImg('https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800', 'Programación de horarios', 'El mejor horario es el que cubre cada minuto de demanda sin un minuto de exceso')}

        <div class="content-card">
            <h3>📋 Los 4 pasos para programar correctamente</h3>
            <ol>
                <li><strong>Determinar estándares de productividad:</strong> cuántos clientes puede atender bien cada puesto. Ejemplo: 1 mesero = 15-20 cubiertos pico; 1 cocinero = 30-40 entradas/hora.</li>
                <li><strong>Pronosticar volumen de ventas:</strong> con datos históricos por media hora, no solo día.</li>
                <li><strong>Programar empleados:</strong> usando estándares + pronóstico.</li>
                <li><strong>Analizar resultados:</strong> comparar horas reales vs. programadas, ajustar la siguiente semana.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>📊 El staffing chart por media hora (ejemplo)</h3>
            <p>Restaurante que abre 1-11 PM, promedio 200 clientes/día:</p>
            <table style="width:100%;border-collapse:collapse;font-size:0.88em;">
                <tr style="background:#006064;color:white;"><td style="padding:6px;border:1px solid #ddd;">Hora</td><td style="padding:6px;border:1px solid #ddd;">Clientes esperados</td><td style="padding:6px;border:1px solid #ddd;">Meseros</td><td style="padding:6px;border:1px solid #ddd;">Cocina</td><td style="padding:6px;border:1px solid #ddd;">Bar</td></tr>
                <tr><td style="padding:6px;border:1px solid #ddd;">1:00-2:00</td><td style="padding:6px;border:1px solid #ddd;">10</td><td style="padding:6px;border:1px solid #ddd;">1</td><td style="padding:6px;border:1px solid #ddd;">2</td><td style="padding:6px;border:1px solid #ddd;">0</td></tr>
                <tr style="background:#e3f2fd;"><td style="padding:6px;border:1px solid #ddd;">2:00-3:00</td><td style="padding:6px;border:1px solid #ddd;">35</td><td style="padding:6px;border:1px solid #ddd;">3</td><td style="padding:6px;border:1px solid #ddd;">3</td><td style="padding:6px;border:1px solid #ddd;">1</td></tr>
                <tr style="background:#fff3e0;"><td style="padding:6px;border:1px solid #ddd;"><strong>3:00-4:00 (pico)</strong></td><td style="padding:6px;border:1px solid #ddd;"><strong>60</strong></td><td style="padding:6px;border:1px solid #ddd;"><strong>4</strong></td><td style="padding:6px;border:1px solid #ddd;"><strong>4</strong></td><td style="padding:6px;border:1px solid #ddd;"><strong>2</strong></td></tr>
                <tr><td style="padding:6px;border:1px solid #ddd;">4:00-5:00</td><td style="padding:6px;border:1px solid #ddd;">45</td><td style="padding:6px;border:1px solid #ddd;">3</td><td style="padding:6px;border:1px solid #ddd;">3</td><td style="padding:6px;border:1px solid #ddd;">1</td></tr>
                <tr><td style="padding:6px;border:1px solid #ddd;">5:00-7:00</td><td style="padding:6px;border:1px solid #ddd;">15</td><td style="padding:6px;border:1px solid #ddd;">1</td><td style="padding:6px;border:1px solid #ddd;">2</td><td style="padding:6px;border:1px solid #ddd;">0</td></tr>
                <tr style="background:#e3f2fd;"><td style="padding:6px;border:1px solid #ddd;">7:00-9:00 (cena)</td><td style="padding:6px;border:1px solid #ddd;">50</td><td style="padding:6px;border:1px solid #ddd;">4</td><td style="padding:6px;border:1px solid #ddd;">3</td><td style="padding:6px;border:1px solid #ddd;">2</td></tr>
                <tr><td style="padding:6px;border:1px solid #ddd;">9:00-11:00</td><td style="padding:6px;border:1px solid #ddd;">25</td><td style="padding:6px;border:1px solid #ddd;">2</td><td style="padding:6px;border:1px solid #ddd;">2</td><td style="padding:6px;border:1px solid #ddd;">1</td></tr>
            </table>
            <p>Con este chart puedes programar turnos partidos, de 4 horas, de 6 horas, etc. y no cargarlos todos de 1 a 11 PM (que es el error más común).</p>
        </div>

        <div class="content-card">
            <h3>⚙️ Tipos de turnos</h3>
            <ul class="concept-list">
                <li><strong>Turno completo (8 hrs):</strong> tradicional. Bueno para roles fijos (chef, gerente).</li>
                <li><strong>Turno partido (split):</strong> 11-3 PM + 6-10 PM. Ideal para meseros en horario pico doble. Respeta LFT.</li>
                <li><strong>Media jornada (4-6 hrs):</strong> para cubrir picos. Típico en ayudantes y lavaloza.</li>
                <li><strong>Part-time / por evento:</strong> banquetes, fines de semana.</li>
                <li><strong>On-call:</strong> empleado disponible a llamada si cae un imprevisto. Debe pagarse aunque no se llame (LFT mexicana).</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>🎯 Regla de oro: cross-training</h3>
            <p>Un empleado que puede ocupar múltiples puestos (mesero + host + cashier + runner) es 30% más productivo y 60% más flexible para el scheduling. Invierte en capacitación cruzada.</p>
        </div>

        ${quizBlock('q_m6l3', '🎯 ¿Cuál es la mejor práctica para no sobre-staffear ni sub-staffear?', [
            {text: 'Programar siempre el mismo número de personas', correct: false},
            {text: 'Hacer un staffing chart por media hora basado en clientes esperados, usar turnos variables (completos, partidos, parciales) y ajustar semanalmente', correct: true},
            {text: 'Contratar solo freelancers', correct: false},
            {text: 'Programar solo en hora pico', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm6l4', module: 'Módulo 6 · Costo de mano de obra', tag: 'tag-module', tagLabel: 'MÓDULO 6',
        title: 'Reducir costos laborales — empoderamiento y tecnología',
        subtitle: 'Capítulo 7 — Bajar costos sin dañar servicio ni moral',
        content: hero(heroGradients.m6, 'LECCIÓN 21', 'Reducir costos laborales — Cap. 7') + `
        ${note('Hay dos formas de bajar costo laboral: despedir gente (lo fácil y destructivo) o hacer más productivo al equipo (lo difícil y sostenible). Esta lección es sobre la segunda.')}

        ${videoLink('Cómo reducir costos de un restaurante — Marketing Gastronómico', 'TaCd-mIsjQI')}

        ${realImg('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800', 'Empleados felices trabajando', 'Reducir costos y subir moral no son enemigos. Un equipo empoderado produce más con menos')}

        <div class="content-card">
            <h3>💪 Empleo empoderado — el multiplicador invisible</h3>
            <p>Dopson &amp; Hayes son claros: las operaciones más rentables tienen EMPLEADOS EMPODERADOS, no empleados "reducidos". Empoderar significa:</p>
            <ul class="concept-list">
                <li>Dar autoridad para resolver problemas del cliente sin pedir permiso (hasta $500 MXN).</li>
                <li>Involucrar al equipo en decisiones de menú, procesos, layout.</li>
                <li>Capacitar continuamente.</li>
                <li>Pagar mejor que la competencia (aun cuando suene contra-intuitivo).</li>
                <li>Reconocer públicamente los logros.</li>
                <li>Promover desde adentro.</li>
            </ul>
            <p>Un empleado empoderado es 2× productivo y 5× leal. Eso baja rotación, que es el gasto oculto más grande.</p>
        </div>

        <div class="content-card">
            <h3>💸 El costo oculto de la rotación</h3>
            <p>Rotar un empleado de mostrador cuesta en promedio $15,000 MXN: publicación, entrevistas, capacitación, errores durante curva de aprendizaje, impacto en moral del equipo, horas extra de otros. Si tu rotación anual es 80% (común en F&amp;B):</p>
            <ul class="concept-list">
                <li>10 empleados × 80% = 8 bajas/año</li>
                <li>8 × $15,000 = <strong>$120,000 MXN/año solo en rotación</strong></li>
            </ul>
            <p>Si logras bajar rotación a 40%, ahorras $60k/año. Más que cualquier "recorte".</p>
        </div>

        <div class="content-card">
            <h3>🤖 Tecnología que reduce labor sin dañar servicio</h3>
            <ul class="concept-list">
                <li><strong>POS moderno con KDS</strong> (Kitchen Display System): elimina el runner de comandas, menos errores.</li>
                <li><strong>App propia o Rappi/Uber Eats/Didi:</strong> delivery sin personal adicional (toma 20-30% pero elimina costo fijo).</li>
                <li><strong>QR menú y auto-pago:</strong> un mesero que atendía 4 mesas ahora atiende 8.</li>
                <li><strong>Reservas online:</strong> elimina recepción telefónica.</li>
                <li><strong>Preparación central (commissary):</strong> 1 cocina que prep-ea para 5 sucursales = menos cocineros por unidad.</li>
                <li><strong>Self-service kiosks</strong> (McDonald's, Starbucks): 30% reducción en cajeros.</li>
                <li><strong>IA para pronóstico y scheduling</strong> (HotSchedules, Crunchtime).</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>🎯 Palancas específicas para reducir costo laboral</h3>
            <ol>
                <li><strong>Cross-training:</strong> ya mencionado, el multiplicador principal.</li>
                <li><strong>Menú más corto:</strong> 30 platillos vs 80 = menos estaciones, menos cocineros.</li>
                <li><strong>Productos pre-preparados estratégicos:</strong> no todos, pero algunos (base de salsas, masa de pizza, etc.).</li>
                <li><strong>Reducir horas pico innecesarias:</strong> ¿vale la pena abrir 1-2 PM si solo entran 10 clientes? A veces es mejor abrir a las 2.</li>
                <li><strong>Reestructurar posiciones:</strong> en vez de mesero + host + runner, tener "mesero integral" mejor pagado que haga todo.</li>
                <li><strong>Automatizar administración:</strong> software elimina 1-2 horas diarias de gerente.</li>
            </ol>
        </div>

        ${quote('Los mejores operadores del mundo no tienen el costo laboral más bajo. Tienen la PRODUCTIVIDAD laboral más alta. No es lo mismo.', 'Dopson &amp; Hayes (traducción libre)')}

        ${quizBlock('q_m6l4', '🎯 ¿Cuál es la mejor estrategia de largo plazo para reducir costo laboral sin dañar servicio?', [
            {text: 'Recortar turnos y presionar a los que quedan', correct: false},
            {text: 'Empoderar al equipo + capacitar en cross-training + tecnología que aumente productividad por hora', correct: true},
            {text: 'Reemplazar todo por robots', correct: false},
            {text: 'Pagar el salario mínimo legal', correct: false}
        ])}
        `
    });

    // ==============================================================
    // MÓDULO 7 — OTROS GASTOS (Cap. 8)
    // ==============================================================
    C.lessons.push({
        id: 'm7l1', module: 'Módulo 7 · Otros gastos', tag: 'tag-module', tagLabel: 'MÓDULO 7',
        title: 'Costos fijos, variables y mixtos',
        subtitle: 'Capítulo 8 — Clasificar antes de controlar',
        content: hero(heroGradients.m7, 'LECCIÓN 22', 'Costos fijos, variables y mixtos — Cap. 8') + `
        ${note('Cada gasto del restaurante se comporta distinto con el volumen. La renta es fija, el gas es variable, la luz es mixta. Saber cuál es cuál te permite manejarlos con estrategia.')}

        ${videoLink('Costes Fijos Y Variables de un Restaurante', 'TDBjKfGUlYc')}

        ${realImg('https://images.unsplash.com/photo-1579621970590-9d624316904b?w=800', 'Análisis de gastos', 'Clasificar un gasto como fijo o variable no es contabilidad — es estrategia. Cada uno se ataca distinto')}

        <div class="content-card">
            <h3>📊 Las 3 clases de gasto</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:12px 0;">
                <tr style="background:#bf360c;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>Tipo</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Comportamiento</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Ejemplos</strong></td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Fijo</strong></td><td style="padding:8px;border:1px solid #ddd;">No cambia con ventas. Pagas lo mismo vendiendo $0 o $1M</td><td style="padding:8px;border:1px solid #ddd;">Renta, licencias, seguros, salarios administrativos, internet</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Variable</strong></td><td style="padding:8px;border:1px solid #ddd;">Crece proporcional a ventas. Cero ventas = cero gasto</td><td style="padding:8px;border:1px solid #ddd;">Food cost, beverage cost, comisiones Rappi/Uber Eats, empaques delivery</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Mixto</strong></td><td style="padding:8px;border:1px solid #ddd;">Tiene parte fija + parte variable</td><td style="padding:8px;border:1px solid #ddd;">Luz (base fija + consumo), nómina (sueldo base + propina/bono variable), teléfono</td></tr>
            </table>
        </div>

        <div class="content-card">
            <h3>🎯 Controlables vs. no controlables</h3>
            <p>Otra forma de clasificar:</p>
            <ul class="concept-list">
                <li><strong>Controlables:</strong> el gerente puede influirlos directamente. Food cost, horas extra, publicidad.</li>
                <li><strong>No controlables:</strong> impuestos, depreciación, amortización, seguros obligatorios, renta contratada.</li>
            </ul>
            <p>En evaluación al gerente, solo cuentan los controlables. Castigarlo por la renta no tiene sentido.</p>
        </div>

        <div class="content-card">
            <h3>🏠 Costos de ocupación — el oculto que mata restaurantes</h3>
            <p>Ocupación = renta + predial + mantenimiento del local + seguros + CUOTA DE MANTENIMIENTO (plaza comercial). Regla clave:</p>
            ${formula('Costos de ocupación totales &lt; 8-10% de ventas', 'Si pasas de 10%, el restaurante nace condenado')}
            <p>En plazas comerciales premium (Antara, Perisur, Andares Guadalajara) las rentas suben a 15-20%. Por eso muchos restaurantes ahí no son rentables aunque estén llenos.</p>
        </div>

        <div class="content-card tip">
            <h3>🇲🇽 Gastos que siempre se olvidan en el presupuesto</h3>
            <ul class="concept-list">
                <li>Mantenimiento y fumigación obligatorios (mensual).</li>
                <li>Licencia de uso de suelo + Protección Civil (anual).</li>
                <li>Renovación COFEPRIS (cada 5 años pero hay que prever).</li>
                <li>Cuotas a cámara (CANIRAC, CROC, STPS).</li>
                <li>Software (POS, contable, delivery, marketing): $5-15k/mes fácil.</li>
                <li>Comisiones bancarias (1.5-3% de ventas con tarjeta).</li>
                <li>Propinas a fiscalización y reemplazos (realista aunque no oficial).</li>
                <li>Reparación sorpresa (refri, plancha, a/a): provisiona 2-3% de ventas.</li>
            </ul>
        </div>

        ${quizBlock('q_m7l1', '🎯 ¿La electricidad de un restaurante es un gasto fijo, variable o mixto?', [
            {text: 'Fijo — siempre cuesta lo mismo', correct: false},
            {text: 'Variable — solo depende de las ventas', correct: false},
            {text: 'Mixto — tiene parte fija (base CFE, iluminación general) y parte variable (equipos de cocina, A/C según ocupación)', correct: true},
            {text: 'No aplica — es un servicio', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm7l2', module: 'Módulo 7 · Otros gastos', tag: 'tag-module', tagLabel: 'MÓDULO 7',
        title: 'Reducir otros gastos sin afectar calidad',
        subtitle: 'Capítulo 8 — 30 palancas concretas',
        content: hero(heroGradients.m7, 'LECCIÓN 23', 'Reducir otros gastos — Cap. 8') + `
        ${note('Esta es una lección 100% de acción. 30 palancas específicas para bajar "otros gastos" en tu restaurante. Algunas ahorran miles al mes, otras cientos. Juntas hacen la diferencia entre un restaurante rentable y uno que muere por mil cortes.')}

        ${videoLink('¿Cómo Cortar Costos en un Restaurante? Pasos y Tips', 'SNGOyNEi1io')}

        ${realImg('https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800', 'Control de gastos operativos', 'Los restaurantes rentables no nacen — se construyen revisando cada factura con lupa')}

        <div class="content-card">
            <h3>⚡ Servicios (luz, gas, agua) — 8 palancas</h3>
            <ol>
                <li><strong>Iluminación LED:</strong> inversión inicial recuperable en 6-12 meses.</li>
                <li><strong>Sensores de presencia</strong> en baños, almacenes, oficina.</li>
                <li><strong>A/C con termostato programable:</strong> menos durante cierre.</li>
                <li><strong>Aislamiento en cámaras de frío:</strong> sellos en buen estado, puertas auto-cierre.</li>
                <li><strong>Tarifa hora-pico vs. hora-base:</strong> cargar hornos temprano.</li>
                <li><strong>Calentador de gas vs. eléctrico:</strong> evaluar costo por BTU.</li>
                <li><strong>Recirculación de agua:</strong> en lavalozas modernas.</li>
                <li><strong>Monitoreo mensual:</strong> comparar kWh/pesos con misma temporada año pasado.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>🔧 Mantenimiento y equipo — 6 palancas</h3>
            <ol>
                <li><strong>Mantenimiento preventivo:</strong> campana, trampa de grasa, refrigeración. Cuesta 10% de lo que cuesta la reparación.</li>
                <li><strong>Filtros a tiempo:</strong> un evaporador tapado sube 30% el consumo.</li>
                <li><strong>Contratos de servicio:</strong> chillers, campanas — anual es 40% más barato que por evento.</li>
                <li><strong>Equipo usado certificado</strong> para piezas de reemplazo no críticas.</li>
                <li><strong>Inventario de refacciones comunes</strong> (empaques, focos, bandas) para no parar operación.</li>
                <li><strong>Capacitación de personal</strong> en operación correcta (sartenes sin abuso = duran 2× más).</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>📦 Compras y proveedores no-comida — 8 palancas</h3>
            <ol>
                <li><strong>Desechables:</strong> vasos, popotes, bolsas. Compra por volumen, compara marca propia vs Pactiv/Dart.</li>
                <li><strong>Servilletas y detergentes:</strong> proveedores de limpieza institucional (Ecolab, Kärcher) son más baratos que supermercado.</li>
                <li><strong>Uniformes:</strong> subcontratar lavandería industrial vs. comprar. Evaluar por volumen.</li>
                <li><strong>Software consolidado:</strong> Square/Clover integran POS + contabilidad + inventario por una cuota.</li>
                <li><strong>Banco con mejor trato transaccional:</strong> algunos cobran 3.5%, otros 1.8%.</li>
                <li><strong>Internet empresarial:</strong> Totalplay, Izzi, Axtel tienen planes comerciales más baratos que residencial.</li>
                <li><strong>Publicidad: Rappi Ads vs. Meta Ads</strong>: evaluar ROAS (retorno por peso invertido).</li>
                <li><strong>Suscripciones no-usadas:</strong> auditar trimestralmente.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>🏠 Ocupación — 5 palancas</h3>
            <ol>
                <li><strong>Renegociar renta cada 12 meses:</strong> con datos de ocupación del centro comercial.</li>
                <li><strong>Renta variable vs. fija:</strong> proponer pagar % de ventas (10-12%) en vez de renta fija si el local es riesgoso.</li>
                <li><strong>Sub-arrendar espacio muerto:</strong> esquina para food truck, terraza para eventos privados.</li>
                <li><strong>Compartir con negocio compatible:</strong> cafetería + repostería, bar + fumador.</li>
                <li><strong>Evaluar mudanza:</strong> si la renta está &gt; 12%, explorar alternativas. El cliente leal sigue si hay diferenciación.</li>
            </ol>
        </div>

        <div class="content-card tip">
            <h3>📊 Monitoreo mensual — la clave</h3>
            <p>El libro es enfático: NO puedes reducir lo que no mides. Crea una hoja con:</p>
            <ul class="concept-list">
                <li>Cada categoría de gasto listada por separado.</li>
                <li>Cifra del mes + cifra del mismo mes año anterior + diferencia %.</li>
                <li>Target / presupuesto + variación.</li>
                <li>Nota de causa si variación &gt; 10%.</li>
            </ul>
            <p>Reunión mensual de 30 min con el gerente para revisar. Ese hábito paga el curso 100×.</p>
        </div>

        ${quizBlock('q_m7l2', '🎯 Si tu renta representa el 13% de tus ventas, ¿qué debes hacer según Dopson &amp; Hayes?', [
            {text: 'Nada, es normal', correct: false},
            {text: 'Es luz roja — el benchmark es &lt; 8-10%. Renegociar renta o evaluar mudanza antes de que el negocio colapse', correct: true},
            {text: 'Subir los precios para compensar', correct: false},
            {text: 'Reducir porciones del menú', correct: false}
        ])}
        `
    });


    // ==============================================================
    // MÓDULO 8 — ANÁLISIS FINANCIERO (Caps. 9-10)
    // ==============================================================
    C.lessons.push({
        id: 'm8l1', module: 'Módulo 8 · Análisis financiero', tag: 'tag-module', tagLabel: 'MÓDULO 8',
        title: 'Analizar el P&amp;L — Uniform System of Accounts',
        subtitle: 'Capítulo 9 — Del diagnóstico al plan de acción',
        content: hero(heroGradients.m8, 'LECCIÓN 24', 'Análisis del P&amp;L — Cap. 9') + `
        ${note('En el Módulo 1 aprendiste a LEER el estado de resultados. Ahora vas a aprender a ANALIZARLO — detectar qué está pasando, comparar contra benchmarks, identificar tendencias y proponer acciones.')}

        ${videoLink('Análisis Financiero y Planeación de Empresa de restaurantes', 'Ko4Z7urUdqQ')}

        ${realImg('https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800', 'Análisis financiero detallado', 'Un P&L sin análisis es una radiografía sin diagnóstico: puedes ver los huesos pero no sabes qué está roto')}

        <div class="content-card">
            <h3>📋 USAR — Uniform System of Accounts for Restaurants</h3>
            <p>Es el formato estándar adoptado por la National Restaurant Association que todo restaurante profesional debe usar. Permite:</p>
            <ul class="concept-list">
                <li>Comparar tu restaurante contra benchmarks de la industria.</li>
                <li>Comunicarte con banqueros, inversionistas y contadores que lo conocen.</li>
                <li>Detectar desviaciones claras por categoría.</li>
                <li>Planear la expansión (franquicia, sucursales).</li>
            </ul>
            <p>En México, las firmas grandes (Alsea, CMR, Sanborns) lo usan. Los independientes rara vez. Esa es parte de la brecha profesional.</p>
        </div>

        <div class="content-card">
            <h3>🔍 Los 5 tipos de análisis</h3>
            <ol>
                <li><strong>Análisis de ventas/volumen:</strong> ¿cuánto vendiste vs. el mes pasado? ¿Mismo mes año anterior? ¿Presupuesto?</li>
                <li><strong>Análisis de food cost:</strong> ¿por qué subió? ¿precio del proveedor? ¿merma? ¿cambio de sales mix?</li>
                <li><strong>Análisis de beverage cost:</strong> mismo proceso, distinto detalle.</li>
                <li><strong>Análisis de labor:</strong> ¿programaron exceso? ¿se disparó overtime? ¿subió rotación?</li>
                <li><strong>Análisis de otros gastos:</strong> ¿qué categoría creció más? ¿por qué?</li>
                <li><strong>Análisis de utilidad:</strong> integración final.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>🧮 Inventory turnover — métrica clave</h3>
            ${formula('Rotación de inventario = Costo de alimentos (período) ÷ Inventario promedio', 'Inventario promedio = (Inv inicial + Inv final) ÷ 2')}
            <p><strong>Ejemplo:</strong> Costo mensual alimentos $280,000; Inventario promedio $45,000. Rotación = 6.22 veces/mes = <strong>cada 4.8 días todo tu inventario se consume</strong>.</p>
            <p>Benchmarks en restaurantes:</p>
            <ul class="concept-list">
                <li>Fast food: 10-15 veces/mes (alta rotación, poca mermaI)</li>
                <li>Casual: 6-10 veces/mes</li>
                <li>Fine dining: 4-6 veces/mes (más SKUs de reserva)</li>
                <li>Bar: 2-4 veces/mes</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>📈 Análisis de tendencia (trend analysis)</h3>
            <p>No basta mirar un mes. Necesitas comparar:</p>
            <ul class="concept-list">
                <li><strong>Mes vs. mes anterior:</strong> variación inmediata.</li>
                <li><strong>Mes vs. mismo mes año anterior:</strong> ajuste estacional.</li>
                <li><strong>YTD (Year to Date) vs. YTD año anterior:</strong> crecimiento acumulado.</li>
                <li><strong>Rolling 12 months:</strong> último año completo vs. anterior año completo.</li>
            </ul>
            <p>Una sola foto miente. La película no.</p>
        </div>

        ${quizBlock('q_m8l1', '🎯 ¿Qué significa una rotación de inventario de 8 veces al mes?', [
            {text: 'Compras inventario 8 veces al mes', correct: false},
            {text: 'Tu inventario completo se consume cada ~3.75 días (30 días ÷ 8); indica buena rotación', correct: true},
            {text: 'Tienes 8 bodegas', correct: false},
            {text: 'Indica mala rotación', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm8l2', module: 'Módulo 8 · Análisis financiero', tag: 'tag-module', tagLabel: 'MÓDULO 8',
        title: 'Ingeniería de menú — Goal Value Analysis',
        subtitle: 'Capítulo 10 — Clasificar cada platillo y rediseñar el menú',
        content: hero(heroGradients.m8, 'LECCIÓN 25', 'Ingeniería de menú — Cap. 10') + `
        ${note('La ingeniería de menú es una de las técnicas más apalancadas del control de costos. Clasifica cada platillo en 4 categorías y te dice qué hacer con cada uno: promover, rediseñar, subir precio o eliminar. Magia pura.')}

        ${videoLink('Cómo hacer ingeniería de menús (duplica tus ganancias)', 'QtVfZuNuR5g')}

        ${realImg('https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=800', 'Análisis detallado de menú', 'Cada platillo de tu menú es un activo o un pasivo. La ingeniería de menú te dice cuál es cuál')}

        <div class="content-card">
            <h3>🔬 Las 2 variables de la matriz</h3>
            <p>Se analiza cada platillo según:</p>
            <ul class="concept-list">
                <li><strong>Popularidad:</strong> ¿se vende mucho o poco en comparación con el promedio?</li>
                <li><strong>Margen de contribución (MC):</strong> ¿aporta mucho o poco margen absoluto por plato?</li>
            </ul>
            <p>Cada platillo cae en uno de 4 cuadrantes:</p>
            <table style="width:100%;border-collapse:collapse;font-size:0.92em;margin:12px 0;">
                <tr style="background:#263238;color:white;"><td style="padding:10px;border:1px solid #ddd;"></td><td style="padding:10px;border:1px solid #ddd;"><strong>MC ALTO</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>MC BAJO</strong></td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;background:#2e7d32;color:white;"><strong>POPULARIDAD ALTA</strong></td><td style="padding:10px;border:1px solid #ddd;background:#e8f5e9;"><strong>STAR 🌟</strong><br>Promover, proteger, destacar. Tu tesoro.</td><td style="padding:10px;border:1px solid #ddd;background:#fff3e0;"><strong>PLOWHORSE 🐎</strong><br>Vende mucho pero deja poco. Sube precio con cuidado o mejora MC cambiando ingrediente.</td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;background:#1565c0;color:white;"><strong>POPULARIDAD BAJA</strong></td><td style="padding:10px;border:1px solid #ddd;background:#e3f2fd;"><strong>PUZZLE 🧩</strong><br>Deja mucho pero vende poco. Promover, reposicionar, renombrar.</td><td style="padding:10px;border:1px solid #ddd;background:#ffebee;"><strong>DOG 🐕</strong><br>Vende poco y deja poco. Eliminar del menú.</td></tr>
            </table>
        </div>

        <div class="content-card">
            <h3>🧮 Ejemplo real — Restaurante "Tacos del Tío"</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:12px 0;">
                <tr style="background:#263238;color:white;"><td style="padding:6px;border:1px solid #ddd;">Platillo</td><td style="padding:6px;border:1px solid #ddd;">Vend.</td><td style="padding:6px;border:1px solid #ddd;">Precio</td><td style="padding:6px;border:1px solid #ddd;">Costo</td><td style="padding:6px;border:1px solid #ddd;">MC</td><td style="padding:6px;border:1px solid #ddd;">Categoría</td></tr>
                <tr><td style="padding:6px;border:1px solid #ddd;">Tacos al pastor</td><td style="padding:6px;border:1px solid #ddd;">800</td><td style="padding:6px;border:1px solid #ddd;">$60</td><td style="padding:6px;border:1px solid #ddd;">$22</td><td style="padding:6px;border:1px solid #ddd;">$38</td><td style="padding:6px;border:1px solid #ddd;background:#e8f5e9;">⭐ Star</td></tr>
                <tr><td style="padding:6px;border:1px solid #ddd;">Burrito norteño</td><td style="padding:6px;border:1px solid #ddd;">120</td><td style="padding:6px;border:1px solid #ddd;">$180</td><td style="padding:6px;border:1px solid #ddd;">$55</td><td style="padding:6px;border:1px solid #ddd;">$125</td><td style="padding:6px;border:1px solid #ddd;background:#e3f2fd;">🧩 Puzzle</td></tr>
                <tr><td style="padding:6px;border:1px solid #ddd;">Quesadillas</td><td style="padding:6px;border:1px solid #ddd;">600</td><td style="padding:6px;border:1px solid #ddd;">$45</td><td style="padding:6px;border:1px solid #ddd;">$25</td><td style="padding:6px;border:1px solid #ddd;">$20</td><td style="padding:6px;border:1px solid #ddd;background:#fff3e0;">🐎 Plowhorse</td></tr>
                <tr><td style="padding:6px;border:1px solid #ddd;">Nachos especiales</td><td style="padding:6px;border:1px solid #ddd;">50</td><td style="padding:6px;border:1px solid #ddd;">$120</td><td style="padding:6px;border:1px solid #ddd;">$70</td><td style="padding:6px;border:1px solid #ddd;">$50</td><td style="padding:6px;border:1px solid #ddd;background:#ffebee;">🐕 Dog</td></tr>
            </table>
            <p>Decisiones:</p>
            <ul class="concept-list">
                <li><strong>Tacos al pastor (Star):</strong> destacar en menú con foto, no bajar precio nunca.</li>
                <li><strong>Burrito norteño (Puzzle):</strong> promover con "especial del chef", renombrar "BurritOso Tío", sugerirlo al mesero.</li>
                <li><strong>Quesadillas (Plowhorse):</strong> subir $5 (de $45 a $50) o cambiar de queso Oaxaca a quesillo local (baja costo $5).</li>
                <li><strong>Nachos especiales (Dog):</strong> eliminar del menú, liberar espacio para algo mejor.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>📐 Cómo calcular si un platillo es "alto" o "bajo" en cada eje</h3>
            <p><strong>Popularidad:</strong></p>
            ${formula('Platillo es "popular" si sus ventas ≥ 70% del promedio esperado', 'Promedio esperado = Total ventas unidades ÷ Número de platillos')}
            <p><strong>Margen de contribución:</strong></p>
            ${formula('Platillo es "MC alto" si su MC ≥ Promedio ponderado de MC del menú', 'Ponderar por unidades vendidas, no promedio simple')}
        </div>

        ${quizBlock('q_m8l2', '🎯 Un platillo vende mucho pero deja poco margen por unidad. ¿En qué categoría cae?', [
            {text: 'Star', correct: false},
            {text: 'Plowhorse — subir precio con cuidado o cambiar ingrediente para mejorar margen', correct: true},
            {text: 'Puzzle', correct: false},
            {text: 'Dog', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm8l3', module: 'Módulo 8 · Análisis financiero', tag: 'tag-module', tagLabel: 'MÓDULO 8',
        title: 'Análisis costo-volumen-utilidad (CVP)',
        subtitle: 'Capítulo 10 — Punto de equilibrio y escenarios',
        content: hero(heroGradients.m8, 'LECCIÓN 26', 'Análisis CVP — Cap. 10') + `
        ${note('El análisis CVP (Cost-Volume-Profit) contesta la pregunta más importante: ¿cuánto necesito vender para no perder? Y también: ¿cuánto más para ganar la utilidad que deseo?')}

        ${videoLink('Punto de Equilibrio y Análisis Costo Volumen–Utilidad', 'qx3XvwSQYQ4')}

        ${realImg('https://images.unsplash.com/photo-1552664730-d307ca884978?w=800', 'Equipo analizando métricas', 'El punto de equilibrio no es una línea — es un mapa. Te dice cuánto falta, cuánto puedes aguantar, y cuánto ya ganaste')}

        <div class="content-card">
            <h3>🎯 Punto de equilibrio (break-even)</h3>
            ${formula('Punto de equilibrio (ventas) = Costos fijos ÷ Ratio de margen de contribución', 'Ratio MC = (Ventas − Costos variables) ÷ Ventas')}
            <p><strong>Ejemplo:</strong></p>
            <ul class="concept-list">
                <li>Costos fijos mensuales: $200,000 (renta, nómina fija, seguros)</li>
                <li>Costos variables: 40% de ventas (alimentos, bebidas, comisiones delivery)</li>
                <li>Ratio MC: 1 − 0.40 = 0.60 (60%)</li>
                <li>Punto de equilibrio = $200,000 ÷ 0.60 = <strong>$333,333 MXN/mes</strong></li>
            </ul>
            <p>Vender menos de $333,333 = perder dinero. Vender más = ganar. Entre más arriba, más ganancia.</p>
        </div>

        <div class="content-card">
            <h3>🎯 Ventas necesarias para utilidad objetivo</h3>
            ${formula('Ventas necesarias = (Costos fijos + Utilidad deseada) ÷ Ratio MC', 'Agrega la utilidad objetivo al numerador')}
            <p><strong>Ejemplo (misma empresa):</strong></p>
            <ul class="concept-list">
                <li>Quiero utilidad de $60,000/mes</li>
                <li>Ventas = ($200,000 + $60,000) ÷ 0.60 = <strong>$433,333 MXN/mes</strong></li>
            </ul>
            <p>Eso es aproximadamente $14,400 diarios. Ahora sabes la meta.</p>
        </div>

        <div class="content-card">
            <h3>📉 Mínimo Sales Point — el punto de sobrevivencia de corto plazo</h3>
            <p>¿Hasta qué nivel de ventas puedo aguantar en un mes difícil sin quebrar? El "minimum sales point" considera solo los costos que DEBES pagar sí o sí (renta, seguros, salarios mínimos, servicios básicos):</p>
            ${formula('Mínimo Sales Point = Costos inevitables ÷ Ratio MC', 'Útil para decidir si cerrar temporalmente o resistir')}
            <p>En pandemia muchos restaurantes calcularon su mínimo sales point y decidieron operar solo delivery para llegar a él, en vez de cerrar y perder todo.</p>
        </div>

        <div class="content-card">
            <h3>🧮 Vincular CVP con Goal Value Analysis</h3>
            <p>Dopson &amp; Hayes proponen integrar ambos análisis:</p>
            <ol>
                <li>Usa ingeniería de menú para identificar Stars, Plowhorses, Puzzles, Dogs.</li>
                <li>Calcula tu MC ratio actual.</li>
                <li>Proyecta qué pasa con tu MC ratio si:
                    <ul>
                        <li>Subes precio de Plowhorses 5%.</li>
                        <li>Eliminas Dogs y los sustituyes por Puzzles promovidos.</li>
                        <li>Cambias ingrediente de Plowhorses para bajar costo.</li>
                    </ul>
                </li>
                <li>Recalcula punto de equilibrio con nuevo MC ratio.</li>
                <li>Cuantifica el impacto en la cuenta de resultados.</li>
            </ol>
        </div>

        ${quizBlock('q_m8l3', '🎯 Costos fijos $150,000, costos variables 35% de ventas. ¿Cuál es tu punto de equilibrio?', [
            {text: '$150,000', correct: false},
            {text: '$202,500 ($150k ÷ (1 − 0.35) = $150k ÷ 0.65)', correct: false},
            {text: '$230,769 ($150,000 ÷ 0.65 = $230,769)', correct: true},
            {text: '$430,000', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm8l4', module: 'Módulo 8 · Análisis financiero', tag: 'tag-module', tagLabel: 'MÓDULO 8',
        title: 'Presupuesto — largo plazo, anual y de logro',
        subtitle: 'Capítulo 10 — El plan financiero que protege al restaurante',
        content: hero(heroGradients.m8, 'LECCIÓN 27', 'Presupuesto — Cap. 10') + `
        ${note('El presupuesto NO es un documento burocrático. Es la brújula del restaurante. Sin presupuesto, toda decisión se toma reactivamente. Con presupuesto, cada peso gastado tiene justificación anticipada.')}

        ${videoLink('Cómo hacer un presupuesto para restaurante — Marketing Gastronómico', 'U1ud7cHDjVg')}

        ${realImg('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800', 'Presupuesto detallado', 'Un restaurante sin presupuesto es un barco sin timón. El presupuesto convierte las decisiones en disciplina')}

        <div class="content-card">
            <h3>📅 Los 3 horizontes del presupuesto</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:12px 0;">
                <tr style="background:#263238;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>Tipo</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Horizonte</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Propósito</strong></td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Long-range</strong></td><td style="padding:8px;border:1px solid #ddd;">3-5 años</td><td style="padding:8px;border:1px solid #ddd;">Expansión, financiamiento, visión estratégica</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Annual</strong></td><td style="padding:8px;border:1px solid #ddd;">12 meses</td><td style="padding:8px;border:1px solid #ddd;">Ventas, costos, inversiones del año</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Achievement</strong></td><td style="padding:8px;border:1px solid #ddd;">Mensual, semanal</td><td style="padding:8px;border:1px solid #ddd;">Objetivos medibles vs. resultados reales</td></tr>
            </table>
        </div>

        <div class="content-card">
            <h3>📋 Los 3 insumos para el presupuesto anual</h3>
            <ol>
                <li><strong>Resultados del período anterior:</strong> base histórica. Pero sin ser esclavo: si algo salió mal, no lo replico.</li>
                <li><strong>Supuestos para el próximo período:</strong> inflación (7-8% en México 2024-2026), cambios en sales mix, nuevos platillos, remodelaciones, campaña de marketing.</li>
                <li><strong>Metas operativas del dueño:</strong> quiero crecer 15%, quiero subir margen de 8% a 12%, quiero abrir segunda sucursal.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>🧮 Metodología: top-down vs. bottom-up</h3>
            <ul class="concept-list">
                <li><strong>Top-down:</strong> el dueño dice "este año vendemos $15M". Se distribuye entre meses y categorías.</li>
                <li><strong>Bottom-up:</strong> empiezas sumando platillo × precio esperado × clientes esperados por día. Llegas a la venta total.</li>
                <li><strong>Híbrido (recomendado):</strong> el dueño da el objetivo, el gerente arma el bottom-up para validar. Si difieren, se concilia.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>📊 Monitoreo — las 3 tijeras del presupuesto</h3>
            <p>Mensualmente comparas:</p>
            <ol>
                <li><strong>Análisis de ventas:</strong> real vs. presupuesto. ¿Por qué la varianza?</li>
                <li><strong>Análisis de gastos:</strong> real vs. presupuesto por categoría. ¿Dónde se desvió?</li>
                <li><strong>Análisis de utilidad:</strong> real vs. presupuesto. ¿Se explica por ventas o por gastos?</li>
            </ol>
            <p>Una varianza positiva (mejor que presupuesto) también hay que analizar. A veces es suerte; a veces indica que hay capacidad adicional.</p>
        </div>

        <div class="content-card tip">
            <h3>🇲🇽 Adaptación mexicana: presupuesto en pesos e IVA</h3>
            <ul class="concept-list">
                <li>Presupuesto en pesos SIN IVA (el IVA es flujo, no utilidad).</li>
                <li>Contemplar quincenas: la nómina se paga el 15 y 30/31, programar flujo.</li>
                <li>Provisionar aguinaldo mensualmente (1.25% de nómina) y no esperar a diciembre.</li>
                <li>Reparto de PTU en mayo con cálculo en marzo del año siguiente.</li>
                <li>Pagos de impuestos: mensuales (ISR provisional, IVA), anual (ISR, PTU).</li>
            </ul>
        </div>

        ${quizBlock('q_m8l4', '🎯 ¿Qué es el "achievement budget"?', [
            {text: 'El presupuesto de largo plazo (3-5 años)', correct: false},
            {text: 'Presupuesto mensual o semanal con metas operativas medibles que se contrastan contra resultados reales', correct: true},
            {text: 'El presupuesto del primer año', correct: false},
            {text: 'El bono del dueño', correct: false}
        ])}
        `
    });


    // ==============================================================
    // MÓDULO 9 — SEGURIDAD Y TECNOLOGÍA (Caps. 11-12)
    // ==============================================================
    C.lessons.push({
        id: 'm9l1', module: 'Módulo 9 · Seguridad y tecnología', tag: 'tag-module', tagLabel: 'MÓDULO 9',
        title: 'Sistema de seguridad de ingresos — 5 pasos',
        subtitle: 'Capítulo 11 — Donde tu dinero entra y puede desaparecer',
        content: hero(heroGradients.m9, 'LECCIÓN 28', 'Seguridad de ingresos — Cap. 11') + `
        ${note('Ya controlaste el costo. Ahora hay que proteger los ingresos. En restaurantes, los ingresos pasan por tantas manos que hay literalmente docenas de puntos de fuga. Esta lección te da el sistema de 5 pasos para cerrar cada uno.')}

        ${videoLink('Cómo evitar robos y fugas de dinero en un restaurante', 'zP3-tlxswwE')}

        ${realImg('https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800', 'Sistema de seguridad en caja', 'Cada peso que cobra el mesero pasa por 5 manos antes de llegar al banco. Cada mano es un riesgo controlable')}

        <div class="content-card">
            <h3>🛡️ Los 5 pasos del sistema de seguridad de ingresos</h3>
            <ol>
                <li><strong>Verificación de emisión de productos:</strong> cada plato que sale de cocina debe corresponder a una comanda registrada en POS.</li>
                <li><strong>Verificación de cargos al cliente:</strong> cada platillo consumido debe quedar en la cuenta del cliente.</li>
                <li><strong>Verificación de cobros:</strong> cada cuenta cerrada debe cobrarse efectivamente (efectivo, tarjeta, transferencia).</li>
                <li><strong>Verificación de depósitos:</strong> el dinero cobrado debe llegar al banco íntegro.</li>
                <li><strong>Verificación de cuentas por pagar:</strong> los pagos a proveedores son legítimos y por montos correctos.</li>
            </ol>
            <p>Si los 5 pasos funcionan, ningún peso se pierde entre el bolsillo del cliente y la caja del dueño.</p>
        </div>

        <div class="content-card">
            <h3>🚨 Amenazas externas</h3>
            <ul class="concept-list">
                <li><strong>Clientes que se van sin pagar</strong> (dine and dash): solicitar tarjeta al inicio en horarios de alto riesgo.</li>
                <li><strong>Tarjetas clonadas/robadas:</strong> validación 3D Secure, chip &amp; PIN obligatorio.</li>
                <li><strong>Billetes falsos:</strong> plumón detector en caja para &gt; $500.</li>
                <li><strong>Transferencias falsas:</strong> no entregar pedido hasta confirmar en app bancaria.</li>
                <li><strong>Chargebacks fraudulentos:</strong> videos de cámara + firma respaldan al negocio.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>🚨 Amenazas internas — cajero y mesero</h3>
            <ul class="concept-list">
                <li><strong>Short-ringing:</strong> cajero registra menos de lo cobrado; se queda la diferencia.</li>
                <li><strong>Void fraudulento:</strong> cancela ticket después de cobrarle al cliente.</li>
                <li><strong>Entregar platillos fuera de POS:</strong> el mesero cobra pero no registra.</li>
                <li><strong>Splitting de cuentas:</strong> divide mal y se queda el diferencial.</li>
                <li><strong>Manipular propinas:</strong> la de otros meseros, la del house.</li>
                <li><strong>"Comped" sin autorización:</strong> regalar al amigo cargándolo a cortesía.</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>🔒 Controles anti-fraude concretos</h3>
            <ol>
                <li><strong>POS que exija login</strong> por empleado con código único.</li>
                <li><strong>Voids/comps requieren aprobación</strong> del gerente con su propio código.</li>
                <li><strong>Cámaras</strong> en caja, bar, puerta trasera y almacén.</li>
                <li><strong>Corte de caja diario</strong> con 2 personas (doble conteo).</li>
                <li><strong>Bonding de empleados clave</strong> (cajero, gerente): seguro contra malversación.</li>
                <li><strong>Auditorías sorpresa</strong> de inventario, caja y vouchers.</li>
                <li><strong>Rotación de turnos</strong> y cross-training para que nadie sea "indispensable".</li>
                <li><strong>Reportes de variance automáticos</strong> que alertan si un empleado tiene patrones atípicos.</li>
            </ol>
        </div>

        ${quizBlock('q_m9l1', '🎯 ¿Cuál es el "short-ringing" en un restaurante?', [
            {text: 'Cuando el cajero suena la campana poco', correct: false},
            {text: 'Fraude: el cajero registra en POS un monto menor al que cobró al cliente, quedándose con la diferencia', correct: true},
            {text: 'Un error involuntario de cálculo', correct: false},
            {text: 'Cuando el ticket sale corto en papel', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm9l2', module: 'Módulo 9 · Seguridad y tecnología', tag: 'tag-module', tagLabel: 'MÓDULO 9',
        title: 'Amenazas avanzadas y prevención',
        subtitle: 'Capítulo 11 — Proteger ingresos con proceso y tecnología',
        content: hero(heroGradients.m9, 'LECCIÓN 29', 'Amenazas avanzadas — Cap. 11') + `
        ${note('Esta lección va un nivel más profundo en las amenazas y sus contramedidas. Los estafadores profesionales son creativos; hay que conocer sus jugadas para bloquearlas antes de que hagan daño.')}

        ${videoLink('6 TIPS ANTI-ROBO para bares y restaurantes', '0F2Erv9FUoI')}

        ${realImg('https://images.unsplash.com/photo-1551434678-e076c223a692?w=800', 'Control de seguridad en restaurante', 'La seguridad no es paranoia — es disciplina. Se construye capa por capa, no con heroísmo')}

        <div class="content-card">
            <h3>💳 Amenazas en pagos con tarjeta</h3>
            <ul class="concept-list">
                <li><strong>Skimming:</strong> dispositivo que copia banda magnética. Uso chip &amp; PIN siempre.</li>
                <li><strong>Clonación:</strong> mesero pasa la tarjeta por lector oculto. Terminal inalámbrica a la vista del cliente lo previene.</li>
                <li><strong>Cambiar terminales:</strong> ladrón instala terminal modificada. Auditoría de números de serie mensual.</li>
                <li><strong>Phishing al personal:</strong> "soy del banco, necesito los datos del POS". NUNCA dar información telefónica.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>💵 Amenazas con efectivo</h3>
            <ul class="concept-list">
                <li><strong>Billetes falsos:</strong> capacitar en identificación, uso de plumón detector y lámpara UV.</li>
                <li><strong>Cambio inflado:</strong> "el billete era de $500, no $200" — cámara en caja con ángulo a billetes.</li>
                <li><strong>Robo externo:</strong> horarios de depósito al banco irregulares, uso de camioneta de valores.</li>
                <li><strong>Skimming de propinas</strong>: gerente que "administra" las propinas. Sistema transparente con reportes por turno.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>🧾 Amenazas en cuentas por pagar</h3>
            <ul class="concept-list">
                <li><strong>Facturas falsas de proveedores fantasma:</strong> siempre validar RFC en SAT.</li>
                <li><strong>Sobrefacturación:</strong> proveedor cobra 110% del valor real, mesero/gerente recibe kickback.</li>
                <li><strong>Facturas duplicadas:</strong> la misma factura se paga dos veces. Sistema contable que bloquea duplicados.</li>
                <li><strong>Nómina fantasma:</strong> empleados que solo existen en papel. Auditoría sorpresa de asistencia.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>🇲🇽 Situaciones mexicanas específicas</h3>
            <ul class="concept-list">
                <li><strong>Derecho de piso:</strong> en algunas ciudades grupos criminales cobran "cuota". No negociar nunca solo — contactar autoridad y Cámara.</li>
                <li><strong>Inspectores falsos:</strong> personas que se presentan como COFEPRIS, Protección Civil o Hacienda para extorsionar. Pedir ID oficial, orden de visita por escrito, contactar a la dependencia.</li>
                <li><strong>Mafia de delivery:</strong> "apps" no reconocidas que extorsionan. Usar solo apps con contrato formal.</li>
                <li><strong>Robo en cierre de caja:</strong> el horario más peligroso. No salir solo con dinero, rotar horarios.</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>🔐 El bonding — seguro anti-malversación</h3>
            <p>El <strong>bonding</strong> es un seguro que cubre pérdidas causadas por deshonestidad de empleados clave (gerente, cajero, contador). En México algunas aseguradoras lo ofrecen (GNP, Mapfre Negocios). Cuesta 0.5-1.5% del monto asegurado al año. Para un cajero manejando $200k mensuales, vale la pena.</p>
        </div>

        ${quizBlock('q_m9l2', '🎯 ¿Qué es el "bonding" en el contexto de seguridad de ingresos?', [
            {text: 'Un sistema de puntos para empleados', correct: false},
            {text: 'Un seguro que cubre pérdidas causadas por deshonestidad de empleados clave (gerente, cajero, contador)', correct: true},
            {text: 'Pegar a los empleados al piso para que no roben', correct: false},
            {text: 'Un certificado de honestidad', correct: false}
        ])}
        `
    });


    C.lessons.push({
        id: 'm9l3', module: 'Módulo 9 · Seguridad y tecnología', tag: 'tag-module', tagLabel: 'MÓDULO 9',
        title: 'Tecnología y dimensiones globales',
        subtitle: 'Capítulo 12 — El POS, la nube y el futuro del F&amp;B',
        content: hero(heroGradients.m9, 'LECCIÓN 30', 'Tecnología — Cap. 12') + `
        ${note('Dopson &amp; Hayes cierran el libro con una visión de hacia dónde va la industria: tecnología. No como moda sino como necesidad. Los restaurantes que no se tecnifican en los próximos 5 años simplemente no van a competir.')}

        ${videoLink('Software de restaurante POS — Kit Punto de Venta Restaurantes', 'St3KWxRb5yY')}

        ${realImg('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800', 'POS moderno en restaurante', 'El POS moderno no es una caja registradora — es el cerebro del restaurante')}

        <div class="content-card">
            <h3>💻 El POS moderno y sus 10 funciones integradas</h3>
            <ol>
                <li><strong>Toma de pedidos</strong> (comandas) digitales con impresión en cocina/bar.</li>
                <li><strong>Kitchen Display System (KDS):</strong> las comandas llegan a pantallas, no papel.</li>
                <li><strong>Control de inventario</strong> automático: cada venta descuenta receta estandarizada.</li>
                <li><strong>Reportes en tiempo real</strong>: ventas por hora, por platillo, por mesero, por área.</li>
                <li><strong>Integración con delivery apps</strong> (Rappi, Uber Eats, Didi Food, Pedidos Ya).</li>
                <li><strong>Programa de lealtad</strong> integrado.</li>
                <li><strong>Pago electrónico</strong> (tarjeta, transferencia, QR, wallet).</li>
                <li><strong>Facturación CFDI 4.0</strong> al SAT.</li>
                <li><strong>Conciliación bancaria</strong> diaria.</li>
                <li><strong>Gestión de personal</strong> (horarios, checadas, nómina).</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>☁️ Nube vs. local</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:12px 0;">
                <tr style="background:#311b92;color:white;"><td style="padding:10px;border:1px solid #ddd;"><strong>Nube (SaaS)</strong></td><td style="padding:10px;border:1px solid #ddd;"><strong>Local (on-premise)</strong></td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Acceso remoto desde cualquier lugar</td><td style="padding:8px;border:1px solid #ddd;">Solo funciona en el restaurante</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Actualizaciones automáticas</td><td style="padding:8px;border:1px solid #ddd;">Requiere contratar soporte</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Backup automático en la nube</td><td style="padding:8px;border:1px solid #ddd;">Backup responsabilidad del dueño</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Mensualidad ($1-5k MXN)</td><td style="padding:8px;border:1px solid #ddd;">Licencia única ($20-80k) + soporte</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;">Requiere internet estable</td><td style="padding:8px;border:1px solid #ddd;">Funciona sin internet</td></tr>
            </table>
            <p>En México los líderes son: <strong>Soft Restaurant, National Soft, Nube POS, Clip, Loyverse, Square</strong>. La mayoría ofrece ambos modelos.</p>
        </div>

        <div class="content-card">
            <h3>🌎 Dimensiones globales</h3>
            <p>Si operas (o aspiras) en múltiples países:</p>
            <ul class="concept-list">
                <li><strong>Regulación fiscal distinta:</strong> IVA 16% MX, 19% Chile, 21% España, 10% USA (varía por estado).</li>
                <li><strong>Normas sanitarias:</strong> FDA en USA, COFEPRIS MX, ANMAT Argentina.</li>
                <li><strong>Cultura gastronómica:</strong> porciones, horarios, días festivos, bebidas populares.</li>
                <li><strong>Moneda y tipo de cambio:</strong> menú en moneda local; reportes consolidados en USD o EUR.</li>
                <li><strong>Cadenas de suministro:</strong> productos locales vs. importados (aranceles, tiempos de entrega).</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>🚀 Tecnologías emergentes en F&amp;B</h3>
            <ul class="concept-list">
                <li><strong>IA para pronóstico:</strong> predice ventas con 95% de precisión si tienes &gt; 6 meses de datos.</li>
                <li><strong>Robots de cocina:</strong> ya hay hamburgueserías automatizadas (Flippy, CaliBurger).</li>
                <li><strong>Drones y robots de delivery:</strong> Starship, Nuro.</li>
                <li><strong>Cocinas fantasma (dark kitchens):</strong> solo delivery, sin comedor. Bajan costos 40%.</li>
                <li><strong>Pago con reconocimiento facial:</strong> Alipay ya lo usa en China.</li>
                <li><strong>Menú digital dinámico:</strong> precios que suben/bajan según demanda (surge pricing).</li>
                <li><strong>Análisis predictivo de merma:</strong> CV en cámaras de almacén alerta desperdicio antes de que ocurra.</li>
            </ul>
        </div>

        ${quote('La tecnología no reemplaza al hospitality. Lo amplifica. Los restaurantes que ganen la próxima década serán los que usen tech para que sus humanos brillen más.', 'Dopson &amp; Hayes (traducción libre, edición 2020)')}

        ${quizBlock('q_m9l3', '🎯 ¿Cuál es la ventaja principal de un POS en la nube (SaaS) sobre uno local?', [
            {text: 'Es siempre más barato a largo plazo', correct: false},
            {text: 'Acceso remoto desde cualquier lugar, actualizaciones automáticas, backup en la nube y menor inversión inicial', correct: true},
            {text: 'No requiere internet', correct: false},
            {text: 'Es obligatorio por ley', correct: false}
        ])}
        `
    });

    // ==============================================================
    // EXAMEN FINAL
    // ==============================================================
    C.lessons.push({
        id: 'final_exam', module: 'Examen final', tag: 'tag-exam', tagLabel: 'EXAMEN FINAL',
        title: 'Examen final — Control de Costos F&amp;B',
        subtitle: '15 preguntas · necesitas 12 correctas (80%) para certificarte',
        content: hero(heroGradients.exam, 'EXAMEN FINAL', 'Demuestra tu dominio del control de costos F&amp;B') + `
        ${note('Tienes intentos ilimitados. El umbral es 80% (12 de 15 correctas). Este examen es más exigente que los otros cursos porque el dominio técnico de F&amp;B así lo requiere. Si fallas alguna pregunta, regresa a la lección correspondiente.')}

        ${finalQ('final_q1', '1. 🎯 ¿Cuál es la diferencia clave entre "Ingresos − Gastos = Utilidad" y "Ingresos − Utilidad deseada = Gasto ideal"?', [
            {text: 'Son matemáticamente la misma fórmula escrita distinto', correct: false},
            {text: 'La primera es reactiva (la utilidad es un residuo); la segunda es proactiva (la utilidad es un objetivo que dimensiona los gastos permitidos)', correct: true},
            {text: 'La primera es para ventas al contado y la segunda para ventas a crédito', correct: false},
            {text: 'La segunda solo aplica a franquicias', correct: false}
        ])}

        ${finalQ('final_q2', '2. 🎯 ¿Qué es el "Prime Cost" y cuál es su benchmark de alerta?', [
            {text: 'El costo de la renta; alerta &gt; 15% de ventas', correct: false},
            {text: 'Suma de costo de alimentos + bebidas + labor; alerta &gt; 65% de ventas', correct: true},
            {text: 'El primer gasto del mes; alerta si es más de $100k', correct: false},
            {text: 'El costo de publicidad; sin benchmark', correct: false}
        ])}

        ${finalQ('final_q3', '3. 🎯 La fórmula del punto de reorden es:', [
            {text: 'Inventario máximo ÷ 2', correct: false},
            {text: 'Ventas mensuales ÷ 30', correct: false},
            {text: 'Consumo diario × Lead time + Stock de seguridad', correct: true},
            {text: 'Inventario inicial + compras − ventas', correct: false}
        ])}

        ${finalQ('final_q4', '4. 🎯 Dados: Inv. inicial $25,000, compras $180,000, inv. final $22,000, comidas empleados $6,000. ¿Cuál es el costo de alimentos vendidos?', [
            {text: '$180,000', correct: false},
            {text: '$203,000', correct: false},
            {text: '$177,000 (25 + 180 − 22 − 6)', correct: true},
            {text: '$157,000', correct: false}
        ])}

        ${finalQ('final_q5', '5. 🎯 Una botella de 750 ml debería rendir teóricamente ¿cuántos shots de 1.5 oz?', [
            {text: '10 shots', correct: false},
            {text: '15 shots', correct: false},
            {text: 'Aproximadamente 17 shots (750 ÷ 44 ml)', correct: true},
            {text: '22 shots', correct: false}
        ])}

        ${finalQ('final_q6', '6. 🎯 En la ingeniería de menú (Goal Value Analysis), un platillo con alta popularidad y bajo margen se llama:', [
            {text: 'Star', correct: false},
            {text: 'Puzzle', correct: false},
            {text: 'Plowhorse — subir precio con cuidado o mejorar margen cambiando ingrediente', correct: true},
            {text: 'Dog', correct: false}
        ])}

        ${finalQ('final_q7', '7. 🎯 Costos fijos $180,000/mes, costos variables 40% de ventas. ¿Cuál es el punto de equilibrio mensual?', [
            {text: '$180,000', correct: false},
            {text: '$252,000', correct: false},
            {text: '$300,000 ($180k ÷ 0.60, donde 0.60 = 1 − 0.40)', correct: true},
            {text: '$450,000', correct: false}
        ])}

        ${finalQ('final_q8', '8. 🎯 ¿Cuál es la regla FIFO en almacenamiento de alimentos?', [
            {text: 'First-In, First-Out: lo que entra primero sale primero', correct: true},
            {text: 'Fast-In, Fast-Out: rotar rápido', correct: false},
            {text: 'Food-In, Food-Out: solo para alimentos', correct: false},
            {text: 'Financial-In, Financial-Out: método contable', correct: false}
        ])}

        ${finalQ('final_q9', '9. 🎯 Si tu costo alcanzable (attainable cost) es $60,000 y tu costo real es $68,500, ¿qué significa la brecha?', [
            {text: 'Ganaste $8,500 extra', correct: false},
            {text: 'Es normal, no hay que hacer nada', correct: false},
            {text: 'Hay una brecha de $8,500 (14%) que representa merma, robo, sobre-porción o sobrecocción. Hay que investigar la causa', correct: true},
            {text: 'Los proveedores subieron los precios', correct: false}
        ])}

        ${finalQ('final_q10', '10. 🎯 ¿Por qué "nómina" (payroll) no es lo mismo que "costo laboral" (labor expense)?', [
            {text: 'Son sinónimos', correct: false},
            {text: 'Payroll es solo lo que se paga al empleado; costo laboral incluye IMSS, INFONAVIT, aguinaldo, vacaciones, PTU, impuesto sobre nómina y prestaciones', correct: true},
            {text: 'Payroll incluye impuestos y labor expense no', correct: false},
            {text: 'Labor expense solo aplica en fine dining', correct: false}
        ])}

        ${finalQ('final_q11', '11. 🎯 Según Dopson &amp; Hayes, ¿cuál es la mejor estrategia de LARGO PLAZO para reducir costo laboral?', [
            {text: 'Recortar turnos y presionar a los que quedan', correct: false},
            {text: 'Reemplazar todo por robots', correct: false},
            {text: 'Empoderar al equipo + capacitar en cross-training + tecnología que aumente productividad por hora', correct: true},
            {text: 'Pagar solo el salario mínimo legal', correct: false}
        ])}

        ${finalQ('final_q12', '12. 🎯 Si un platillo cuesta $45 y quieres un food cost del 30%, ¿a qué precio debe venderse?', [
            {text: '$67.50 (costo + 50%)', correct: false},
            {text: '$90 (costo × 2)', correct: false},
            {text: '$150 ($45 ÷ 0.30)', correct: true},
            {text: '$112.50', correct: false}
        ])}

        ${finalQ('final_q13', '13. 🎯 ¿Qué caracteriza un gasto "mixto"?', [
            {text: 'Que se cobra en dos monedas distintas', correct: false},
            {text: 'Tiene parte fija + parte variable (ej: electricidad con base fija de CFE + consumo variable por equipos)', correct: true},
            {text: 'Que se paga parte en efectivo y parte con tarjeta', correct: false},
            {text: 'Cualquier gasto compartido entre dos sucursales', correct: false}
        ])}

        ${finalQ('final_q14', '14. 🎯 ¿Cuáles son los 5 pasos del sistema de seguridad de ingresos según Dopson &amp; Hayes?', [
            {text: 'Contratar guardia, cámaras, alarma, caja fuerte, seguro', correct: false},
            {text: 'Verificación de: 1) emisión de productos, 2) cargos al cliente, 3) cobros, 4) depósitos bancarios, 5) cuentas por pagar', correct: true},
            {text: 'Auditoría, compliance, monitoreo, respaldo, encriptación', correct: false},
            {text: 'Capacitar, supervisar, sancionar, despedir, volver a contratar', correct: false}
        ])}

        ${finalQ('final_q15', '15. 🎯 ¿Qué es el "achievement budget"?', [
            {text: 'El presupuesto de largo plazo (3-5 años)', correct: false},
            {text: 'Presupuesto mensual/semanal con metas operativas medibles que se contrastan contra resultados reales', correct: true},
            {text: 'El presupuesto del primer año operativo', correct: false},
            {text: 'El bono anual del dueño', correct: false}
        ])}

        <div class="content-card tip" style="margin-top:30px;">
            <h3>🎓 Al aprobar (12 de 15 o más)</h3>
            <p>Se desbloquea tu certificado oficial TRIKLES como <strong>Especialista en Control de Costos de Alimentos y Bebidas — Método Dopson &amp; Hayes</strong>. Podrás descargarlo en PDF y compartirlo en LinkedIn.</p>
            <p><strong>Lo más importante:</strong> la próxima semana aplica las fórmulas de este curso en tu operación real. Mide tu food cost, tu labor cost, tu rotación de inventario. Los números son la verdad.</p>
        </div>
        `
    });


    // ==============================================================
    // CERTIFICADO
    // ==============================================================
    C.lessons.push({
        id: 'certificate', module: 'Certificado', tag: 'tag-cert', tagLabel: 'CERTIFICADO',
        title: 'Certificado de finalización',
        subtitle: 'Has completado el curso profesional de Control de Costos F&amp;B',
        content: hero(heroGradients.cert, '🏆 FELICIDADES', 'Especialista en Control de Costos F&amp;B') + `
        ${note('Este certificado se activa cuando apruebas el examen con 12 o más aciertos sobre 15. Descárgalo en PDF y compártelo en LinkedIn con el hashtag #TRIKLES.')}

        <div class="content-card" style="text-align:center;padding:30px;background:linear-gradient(135deg,#3e2723,#5d4037);color:white;">
            <h2 style="color:#d7a86e;font-family:Georgia,serif;font-size:2.2em;margin:0 0 16px;">TRIKLES</h2>
            <p style="font-style:italic;opacity:0.9;">Otorga el presente certificado de finalización del curso profesional</p>
            <h3 style="color:white;font-size:1.4em;margin:14px 0;">Control de Costos en Alimentos y Bebidas<br>Método Dopson &amp; Hayes — Adaptado a Latinoamérica</h3>
            <p style="opacity:0.85;">Basado en la obra de <strong>Lea R. Dopson &amp; David K. Hayes</strong> (John Wiley &amp; Sons)</p>
            <p style="margin-top:24px;font-size:0.9em;opacity:0.85;">Habiendo demostrado dominio profesional del control de costos en operaciones gastronómicas: estado de resultados, pronóstico de ventas, recetas estandarizadas, control de inventario, compras y recepción, costo de alimentos y bebidas vendidos, costo laboral y productividad, pricing de menú, análisis financiero e ingeniería de menú, análisis costo-volumen-utilidad, presupuesto y seguridad de ingresos.</p>
            <div style="margin-top:30px;">
                <img src="assets/instructor-german.jpg" alt="GS" style="width:60px;height:60px;border-radius:50%;border:2px solid #d7a86e;" onerror="this.style.display='none';">
                <p style="margin:8px 0 0;font-weight:bold;">LADE Germán Solís Muñoz</p>
                <p style="font-size:0.85em;opacity:0.85;margin:0;">Instructor TRIKLES</p>
            </div>
        </div>

        <div class="content-card tip">
            <h3>📚 Próximos pasos recomendados</h3>
            <ul class="concept-list">
                <li><strong>Aplica lo aprendido:</strong> calcula tu food cost real este mes y compáralo con el benchmark (30-33%).</li>
                <li><strong>Lecturas complementarias:</strong> <em>Restaurant Success by the Numbers</em> (Roger Fields), <em>Setting the Table</em> (Danny Meyer), <em>The Restaurant Manager's Handbook</em> (Douglas R. Brown).</li>
                <li><strong>Certificaciones profesionales:</strong> ServSafe (EE.UU.), CANIRAC (México), FMP (Foodservice Management Professional).</li>
                <li><strong>Software recomendado:</strong> Soft Restaurant, Loyverse, Square for Restaurants, Toast, 7shifts para scheduling.</li>
                <li><strong>Únete a la industria:</strong> CANIRAC (México), National Restaurant Association (EUA), FEHR (España).</li>
                <li><strong>Mentoría:</strong> si vas a abrir restaurante, consigue un mentor que ya opere uno. El 60% del cierre se evita con esta sola decisión.</li>
            </ul>
        </div>

        ${quote('El restaurante es un negocio difícil. Quien lo opera con amor pero sin números, cierra. Quien lo opera con números pero sin amor, no atrae clientes. El dominio del control de costos no es anti-hospitalidad — es lo que le permite a la hospitalidad sobrevivir.', 'Dopson &amp; Hayes (traducción libre)')}

        <div class="content-card" style="text-align:center;padding:24px;background:#e8f5e9;border-left:4px solid #2e7d32;">
            <h3>🌟 ¡A ponerlo en práctica!</h3>
            <p>Ahora empieza la parte real: aplicar cada fórmula en tu operación, medir cada mes, mejorar cada semana. Nos vemos en el próximo curso.</p>
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
    window.TRIKLES_COURSES['food-beverage'] = COURSE_FOOD_BEVERAGE;
}
