// ==================================================================
// CURSO GERENCIA-EFECTIVA
// La Gerencia Efectiva (Managing for Results) — Peter F. Drucker, 1964
// Curso profesional para directivos, gerentes y dueños de negocio.
// Instructor: LADE Germán Solís Muñoz — TRIKLES
// Citas textuales: edición Debolsillo 2014 (Penguin Random House),
// traducción de Inés Calvo, ISBN 978-987-566-969-7.
// Uso con fines exclusivamente didácticos — art. 148 LFDA.
// ==================================================================

const COURSE_GERENCIA_EFECTIVA = {
    id: 'gerencia-efectiva',
    meta: {
        title: 'La Gerencia Efectiva',
        subtitle: 'El método de Peter F. Drucker para producir resultados económicos',
        author: 'Peter F. Drucker',
        cover: 'assets/covers/gerencia-efectiva.jpg',
        description: 'El tratado que fundó el management moderno. Drucker explica con claridad quirúrgica por qué la mayoría de los ejecutivos gasta su tiempo donde no hay resultados, y cómo convertir recursos en desempeño económico real. Este curso recorre los 14 capítulos del libro con citas textuales, casos, quizzes y cuatro herramientas descargables: análisis ABC (Pareto 80/20), matriz de cartera de productos, checklist "Ésta es nuestra empresa" y plan de implementación de 90 días.',
        descripcionCorta: 'El clásico de Drucker convertido en método: oportunidades, análisis de cartera, decisiones clave y ejecución.',
        category: 'Dirección y estrategia',
        lessonsCount: 22,
        duration: '10-12 horas',
        level: 'Intermedio-Avanzado',
        active: true,
        tags: ['Drucker', 'management', 'estrategia', 'toma de decisiones', 'ABC', 'Pareto', 'oportunidades', 'gerencia']
    },

    lessonRequirements: {
        0:  ['q_intro'],
        1:  ['q_m1l1'], 2:  ['q_m1l2'], 3:  ['q_m1l3'], 4:  ['q_m1l4'], 5:  ['q_m1l5'], 6:  ['q_m1l6'],
        7:  ['q_m2l1'], 8:  ['q_m2l2'], 9:  ['q_m2l3'], 10: ['q_m2l4'], 11: ['q_m2l5'],
        12: ['q_m3l1'], 13: ['q_m3l2'], 14: ['q_m3l3'], 15: ['q_m3l4'], 16: ['q_m3l5'],
        17: ['q_m4l1'], 18: ['q_m4l2'], 19: ['q_m4l3'], 20: ['q_m4l4'], 21: ['q_m4l5'],
        22: ['final_q1','final_q2','final_q3','final_q4','final_q5','final_q6','final_q7','final_q8','final_q9','final_q10'],
        23: []
    },

    examPassScore: 7,

    certificate: {
        courseNameForCert: 'La Gerencia Efectiva<br>según Peter F. Drucker',
        description: 'Habiendo demostrado dominio del método clásico de Drucker para analizar la empresa como sistema económico, diagnosticar productos, mercados y canales, identificar oportunidades y convertirlas en decisiones ejecutadas con compromiso de recursos.'
    },

    lessons: []
};

// ==================================================================
// Helper para construir lecciones con estructura consistente
// ==================================================================
(function() {
    const C = COURSE_GERENCIA_EFECTIVA;
    const heroGradients = {
        intro:  'linear-gradient(135deg,#1a237e 0%,#303f9f 55%,#c9a227 100%)',
        m1:     'linear-gradient(135deg,#1a237e 0%,#3949ab 60%,#c9a227 100%)',
        m2:     'linear-gradient(135deg,#0d47a1 0%,#1976d2 60%,#ffb300 100%)',
        m3:     'linear-gradient(135deg,#4a148c 0%,#7b1fa2 60%,#c9a227 100%)',
        m4:     'linear-gradient(135deg,#004d40 0%,#00897b 60%,#c9a227 100%)',
        synth:  'linear-gradient(135deg,#00695c 0%,#00897b 60%,#c9a227 100%)',
        exam:   'linear-gradient(135deg,#b71c1c 0%,#e53935 60%,#ffb300 100%)',
        cert:   'linear-gradient(135deg,#1a237e 0%,#c9a227 70%,#ffd700 100%)'
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

    // Helper: video complementario embebido
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

    // ==============================================================
    // 0 — INTRODUCCIÓN
    // ==============================================================
    C.lessons.push({
        id: 'intro', module: 'Introducción', tag: 'tag-intro', tagLabel: 'INTRODUCCIÓN',
        title: 'Por qué Drucker sigue siendo el estándar',
        subtitle: 'Un libro de 1964 que predijo casi todo lo que importa hoy',
        content: `
        <div class="lesson-hero" style="background:${heroGradients.intro};min-height:220px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:30px;">
            <div>
                <div style="font-family:Georgia,serif;font-size:2.3em;font-weight:900;letter-spacing:2px;text-shadow:2px 2px 8px rgba(0,0,0,0.35);">LA GERENCIA EFECTIVA</div>
                <div style="font-size:1.1em;margin-top:10px;opacity:0.96;font-style:italic;">El método Drucker para producir resultados económicos</div>
                <div style="margin-top:16px;font-size:0.85em;letter-spacing:4px;opacity:0.9;">PETER F. DRUCKER · 1964 · CLÁSICO MODERNO</div>
            </div>
        </div>

        ${note('Drucker escribió este libro hace más de sesenta años y sigue siendo la referencia obligada de cualquier escuela seria de negocios. No por nostalgia: porque planteó las preguntas correctas antes que nadie y las respondió con una claridad que todavía no se ha superado. Este curso no es una lectura rápida. Es un <em>trabajo metódico</em> sobre lo que significa dirigir una empresa para producir resultados. Vas a leer citas literales de Drucker, vas a aplicar sus herramientas a tu propio negocio, y vas a salir con un plan de 90 días.', 'Bienvenida del instructor · LADE Germán Solís Muñoz')}

        
        ${videoLink('Peter Drucker — El padre de la administración moderna', 'w4XXBxh-89E')}

        <div class="content-card">
            <h3>🎯 ¿A quién está dirigido este curso?</h3>
            <ul class="concept-list">
                <li><strong>Directores generales, directores de área y gerentes</strong> con responsabilidad sobre resultados.</li>
                <li><strong>Dueños y socios fundadores</strong> de PyMEs que quieren pasar del "apagar incendios" al trabajo estratégico.</li>
                <li><strong>Consultores y coaches ejecutivos</strong> que necesitan marcos analíticos sólidos.</li>
                <li><strong>Mandos medios con proyección</strong> que buscan una base teórica seria, no recetas de autoayuda corporativa.</li>
                <li><strong>Estudiantes de MBA y posgrado</strong> que quieren entender al autor del que todos los demás copian.</li>
            </ul>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">💡</span><div>
                <h3>La tesis central en una frase</h3>
                <blockquote class="book-quote">"Los resultados económicos se obtienen mediante la explotación de las oportunidades, no resolviendo los problemas."<cite>— Introducción, <em>La Gerencia Efectiva</em></cite></blockquote>
                <p>Esa frase cambia todo. Mientras la mayoría de los gerentes pasan el día <em>restaurando la normalidad</em> (apagar un incendio, responder una queja, arreglar un error de facturación), los resultados de verdad —los que mueven la utilidad— vienen de trabajar sobre lo que <strong>todavía no existe</strong>: una oportunidad, un mercado no explotado, una idea nueva.</p>
            </div></div>
        </div>

        <div class="content-card tip">
            <h3>📚 Qué vas a obtener al terminar</h3>
            <ol class="concept-list">
                <li>Dominio de los <strong>14 capítulos</strong> de Drucker con citas textuales y aplicación práctica.</li>
                <li>Capacidad de hacer un <strong>análisis ABC</strong> de tus productos, clientes y canales.</li>
                <li>Clasificación de tu cartera en las <strong>11 categorías de productos</strong>.</li>
                <li>Método para identificar <strong>el futuro que ya ha tenido lugar</strong> en tu industria.</li>
                <li>Cuatro <strong>plantillas descargables</strong>: Análisis ABC, Matriz de cartera, Checklist "Ésta es nuestra empresa" y Plan Drucker de 90 días.</li>
                <li><strong>Certificado TRIKLES</strong> al aprobar el examen final con 7 de 10 aciertos.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>⚖️ Nota sobre el contenido citado</h3>
            <p style="font-size:0.95em;">Este curso cita textualmente fragmentos de <em>La Gerencia Efectiva</em> (título original: <em>Managing for Results</em>, 1964) de Peter F. Drucker, edición Debolsillo 2014 (Penguin Random House), traducción de Inés Calvo, ISBN 978-987-566-969-7. Propiedad intelectual de los herederos de Peter F. Drucker y Penguin Random House Grupo Editorial. El uso es con fines <em>exclusivamente didácticos</em>, amparado por el artículo 148 de la Ley Federal del Derecho de Autor de México. Se recomienda adquirir el libro original.</p>
        </div>

        ${quizBlock('q_intro', '🎯 Según Drucker, ¿dónde se obtienen los resultados económicos?', [
            {text: 'Resolviendo con eficiencia los problemas operativos del día a día', correct: false},
            {text: 'Explotando oportunidades — asignando recursos a lo que puede producir desempeño, no a restaurar la normalidad', correct: true},
            {text: 'Reduciendo costos agresivamente en todas las áreas', correct: false},
            {text: 'Copiando las mejores prácticas de los competidores más grandes', correct: false}
        ])}
        `
    });

    // ==============================================================
    // MÓDULO 1 — COMPRENSIÓN DE LA EMPRESA
    // ==============================================================

    C.lessons.push({
        id: 'm1l1', module: 'Módulo 1 · Comprensión de la empresa', tag: 'tag-module', tagLabel: 'MÓDULO 1',
        title: 'Las 8 realidades empresarias',
        subtitle: 'Lo que todo ejecutivo debe aceptar antes de actuar — Cap. I',
        content: hero(heroGradients.m1, 'LECCIÓN 1', 'Las 8 realidades empresarias — Cap. I') + `
        ${note('Drucker abre el libro con un golpe de realismo. La mayoría de los ejecutivos —dice— actúa como si los resultados y los recursos vivieran <em>dentro</em> de la empresa. No. Ambos están <em>afuera</em>. Esta lección te entrega las ocho realidades que estructuran el libro entero. Si no las aceptas, el resto no te servirá.')}

        
        ${videoLink('La Gerencia Efectiva — Realidades Empresarias (Gotham Velveth)', 'J1ehpeciAvI')}

        <div class="content-card">
            <h3>📖 Las citas que fundan el libro</h3>
            <blockquote class="book-quote">"Ni los resultados ni los recursos existen dentro de la empresa. Ambos existen fuera de ella."<cite>— Cap. I</cite></blockquote>
            <blockquote class="book-quote">"Los resultados se obtienen explotando las oportunidades, no resolviendo los problemas. La solución de problemas sólo restaura la normalidad."<cite>— Cap. I</cite></blockquote>
            <blockquote class="book-quote">"El liderazgo económico es siempre transitorio y posiblemente de corta duración."<cite>— Cap. I</cite></blockquote>
            <blockquote class="book-quote">"Lo que existe se está volviendo viejo."<cite>— Cap. I</cite></blockquote>
        </div>

        <div class="content-card">
            <h3>🧭 Las 8 realidades en forma operativa</h3>
            <ol class="concept-list">
                <li><strong>Los resultados están afuera</strong>, no adentro. Adentro sólo hay costos.</li>
                <li><strong>Los resultados se obtienen por explotación de oportunidades</strong>, no por solución de problemas.</li>
                <li><strong>Los recursos deben asignarse a las oportunidades</strong>, no a los problemas.</li>
                <li><strong>Los resultados económicos se logran por el liderazgo</strong>, no por la simple competencia.</li>
                <li><strong>Todo liderazgo es transitorio</strong>. No existe posición de mercado segura.</li>
                <li><strong>Lo que existe se está volviendo viejo</strong>. Hay una obsolescencia natural permanente.</li>
                <li><strong>Lo que existe está mal asignado</strong>. Los recursos se distribuyen por inercia histórica.</li>
                <li><strong>Los grandes resultados vienen de pocas áreas</strong>. La distribución es 90/10 o peor.</li>
            </ol>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">📊</span><div>
                <h3>El 10/90 en la vida real</h3>
                <p>Drucker observaba, en empresas industriales de los años 50 y 60, que el <strong>10-15% de los productos generaba el 80-90% del margen</strong>. El otro 85% existía por inercia: alguien lo había lanzado años atrás, nadie se atrevía a cerrarlo, y consumía tiempo gerencial, espacio de almacén y capital circulante.</p>
                <p>Abre tu estado de resultados por SKU. Ordena por contribución al margen. Mira la curva. Es el mismo patrón que Drucker vio en 1964.</p>
            </div></div>
        </div>

        <div class="content-card tip">
            <h3>📝 Ejercicio antes de avanzar</h3>
            <ol class="concept-list">
                <li>Lista tus productos o servicios con su utilidad bruta del último año.</li>
                <li>Ordénalos de mayor a menor.</li>
                <li>Calcula qué porcentaje del margen total aporta el <strong>20% superior</strong>. Si es 70% o más, confirmaste la octava realidad.</li>
                <li>Marca los del <strong>50% inferior</strong>: su aporte conjunto probablemente no cubre el costo de administrarlos.</li>
            </ol>
        </div>

        ${quizBlock('q_m1l1', '¿Qué quiere decir Drucker con "los resultados y los recursos están afuera de la empresa"?', [
            {text: 'Que hay que tener sucursales en el extranjero', correct: false},
            {text: 'Que los ingresos provienen del mercado y los recursos clave (clientes, talento, capital) son externos; adentro sólo hay costos y esfuerzo', correct: true},
            {text: 'Que todo se puede subcontratar', correct: false},
            {text: 'Que la oficina central debe mudarse al mercado', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm1l2', module: 'Módulo 1 · Comprensión de la empresa', tag: 'tag-module', tagLabel: 'MÓDULO 1',
        title: 'Productos, mercados y canales: las tres dimensiones del resultado',
        subtitle: 'Dónde se mide realmente el desempeño — Cap. II',
        content: hero(heroGradients.m1, 'LECCIÓN 2', 'Las tres dimensiones del resultado — Cap. II') + `
        
        ${videoLink('La Gerencia Efectiva — Áreas de Resultados (Gotham Velveth)', 'XQHIXqad6ww')}

        <div class="content-card">
            <h3>📖 Drucker, textual</h3>
            <blockquote class="book-quote">"Los productos son los resultados visibles de la empresa. Son también las causas visibles de los ingresos."<cite>— Cap. II, sección I</cite></blockquote>
            <blockquote class="book-quote">"Los mercados, al igual que los productos, son resultados tanto como recursos."<cite>— Cap. II, sección II</cite></blockquote>
            <blockquote class="book-quote">"El canal de distribución es con frecuencia más importante que el producto. Los productos pueden ser sustituidos; los canales, raramente."<cite>— Cap. II, sección III</cite></blockquote>
            <blockquote class="book-quote">"El volumen por sí solo raramente es significativo; lo que importa es la contribución al margen."<cite>— Cap. II</cite></blockquote>
        </div>

        <div class="content-card">
            <h3>🔀 Las tres dimensiones</h3>
            <p>Medir solo <em>una</em> de las tres dimensiones te engaña. Un producto rentable vendido por el canal equivocado puede ser un desastre. Un cliente grande en un mercado que se seca es un cadáver con buena apariencia.</p>
            <ol class="concept-list">
                <li><strong>Productos (qué vendes):</strong> la dimensión más visible, pero también la que más engaña. Es causa del ingreso, no del margen.</li>
                <li><strong>Mercados / clientes (a quién le vendes):</strong> un mismo producto en dos mercados distintos tiene dos economías distintas.</li>
                <li><strong>Canales (cómo llega):</strong> determina el costo de alcanzar al cliente, la frecuencia y el precio soportable. Cambiar de canal cambia el negocio.</li>
            </ol>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">🪒</span><div>
                <h3>El caso Gillette (Cap. II)</h3>
                <p>Gillette vende navajas a precio simbólico —prácticamente al costo— porque su negocio real no es la navaja. Es la <strong>repetición de afeitadas cómodas</strong> durante años, vía consumo de hojas. Drucker usa este ejemplo para mostrar que el "producto" con el que gerencia la empresa muchas veces <em>no es</em> el producto por el que gana dinero.</p>
                <p><em>Pregúntate:</em> ¿cuál es tu "navaja Gillette"? ¿Qué estás regalando que no debería regalarse? ¿Qué ignoras que en realidad sostiene el negocio?</p>
            </div></div>
        </div>

        ${quizBlock('q_m1l2', 'Según Drucker, ¿por qué el canal de distribución puede ser más importante que el producto?', [
            {text: 'Porque es más fácil medir su rendimiento', correct: false},
            {text: 'Porque los productos se sustituyen con relativa facilidad pero los canales raramente; cambiar de canal redefine la economía del negocio', correct: true},
            {text: 'Porque cuesta menos dinero', correct: false},
            {text: 'Porque los canales tienen mejor publicidad', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm1l3', module: 'Módulo 1 · Comprensión de la empresa', tag: 'tag-module', tagLabel: 'MÓDULO 1',
        title: 'Transacciones, no productos: el verdadero análisis del ingreso',
        subtitle: 'Por qué vender mucho puede ser peor que vender poco — Cap. III',
        content: hero(heroGradients.m1, 'LECCIÓN 3', 'La transacción como unidad de análisis — Cap. III') + `
        
        ${videoLink('La Gerencia Efectiva — ¿Qué es una Transacción? (Gotham Velveth)', 'nCqgyxKEQf0')}

        <div class="content-card">
            <h3>📖 Drucker, textual</h3>
            <blockquote class="book-quote">"El ingreso no se produce por productos; se produce por transacciones."<cite>— Cap. III</cite></blockquote>
            <blockquote class="book-quote">"Una empresa no es una colección de productos; es una colección de transacciones."<cite>— Cap. III</cite></blockquote>
            <blockquote class="book-quote">"El costo de la transacción es, en gran medida, independiente del volumen de dólares de la transacción."<cite>— Cap. III</cite></blockquote>
            <blockquote class="book-quote">"Los 'productos' que los ejecutivos administran no son, en general, los productos a través de los cuales la compañía gana dinero."<cite>— Cap. III</cite></blockquote>
        </div>

        <div class="content-card">
            <h3>💰 El punto que casi nadie entiende</h3>
            <p>Cada <em>transacción</em> —tomar el pedido, facturar, embalar, enviar, cobrar, atender postventa— cuesta aproximadamente lo mismo, sea la factura de $500 o de $500,000. Eso significa:</p>
            <ul class="concept-list">
                <li>Un pedido chico puede ser <strong>estructuralmente no rentable</strong>, aunque el producto lo sea.</li>
                <li>El cliente grande subsidia al chico, frecuentemente sin que la dirección lo sepa.</li>
                <li>Aumentar el volumen con clientes chicos puede <em>reducir</em> la utilidad neta.</li>
            </ul>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">📑</span><div>
                <h3>El estudio McKinsey–General Foods (Cap. III)</h3>
                <p>Drucker cita un estudio clásico: el <strong>50% de los clientes de General Foods generaba apenas el 4% de la utilidad</strong>, mientras un puñado de grandes cuentas aportaba la mayor parte del margen. La respuesta fue drástica: reorganizaron la fuerza de ventas para concentrarla en las cuentas rentables y subieron el mínimo de pedido para el resto.</p>
                <p>Resultado: menos clientes, menos facturas, menos viajes, menos volumen contable — y <em>más utilidad neta</em>.</p>
            </div></div>
        </div>

        <div class="content-card tip">
            <h3>📝 Aplicación inmediata</h3>
            <ol class="concept-list">
                <li>Toma tu lista de clientes del último año.</li>
                <li>Calcula el costo promedio de una transacción (nómina de ventas + logística + administración ÷ número de facturas).</li>
                <li>Marca los clientes cuya utilidad anual sea <em>menor</em> que ese costo × número de pedidos al año.</li>
                <li>¿Los consolidas en pedidos mayores, los migras a un canal más barato o los abandonas?</li>
            </ol>
        </div>

        ${quizBlock('q_m1l3', '¿Por qué Drucker dice que el costo de una transacción es "independiente del volumen de dólares"?', [
            {text: 'Porque el margen es siempre el mismo', correct: false},
            {text: 'Porque los pasos administrativos (orden, factura, despacho, cobranza) cuestan casi lo mismo sea la venta chica o grande — por eso las ventas chicas pueden ser estructuralmente no rentables', correct: true},
            {text: 'Porque el IVA es proporcional', correct: false},
            {text: 'Porque los gastos fijos son pequeños', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm1l4', module: 'Módulo 1 · Comprensión de la empresa', tag: 'tag-module', tagLabel: 'MÓDULO 1',
        title: 'Las 11 categorías de productos de Drucker',
        subtitle: 'Cómo clasificar cada producto para saber qué hacer con él — Cap. IV',
        content: hero(heroGradients.m1, 'LECCIÓN 4', 'Las 11 categorías de productos — Cap. IV') + `
        
        ${videoLink('La Gerencia Efectiva — ¿Cómo nos va? Las 11 categorías (Gotham Velveth)', 'UqptA5wClZM')}

        <div class="content-card">
            <h3>📖 Drucker, textual</h3>
            <blockquote class="book-quote">"Los ganapanes de mañana son siempre pocos; si no los identificamos y alimentamos, no habrá empresa dentro de diez años."<cite>— Cap. IV</cite></blockquote>
            <blockquote class="book-quote">"El ganapán de ayer es, casi invariablemente, la prioridad número uno del esfuerzo gerencial; es por ello que sigue siendo el ganapán de ayer."<cite>— Cap. IV</cite></blockquote>
            <blockquote class="book-quote">"Las inversiones en el orgullo ejecutivo son siempre serias y siempre improductivas."<cite>— Cap. IV</cite></blockquote>
            <blockquote class="book-quote">"No existe ningún producto del cual se pueda decir: 'es realmente exitoso'. Sólo se puede decir: 'por el momento se desempeña satisfactoriamente'."<cite>— Cap. IV</cite></blockquote>
        </div>

        <div class="content-card">
            <h3>🗂️ Las 11 categorías (con diagnóstico y acción)</h3>
            <ol class="concept-list">
                <li><strong>Ganapanes de hoy:</strong> productos maduros que producen el grueso del ingreso. Ordeñar, no invertir.</li>
                <li><strong>Ganapanes de mañana:</strong> en crecimiento rápido, todavía pequeños. <em>Aquí se juega la empresa.</em> Invertir todo lo posible.</li>
                <li><strong>Ganapanes de ayer:</strong> declinan. Absorben esfuerzo gerencial desproporcionado. Liquidar o automatizar.</li>
                <li><strong>Productos reparadores:</strong> con un ajuste puntual (precio, canal, posicionamiento) vuelven a ser ganapanes. Acción concreta y fecha límite.</li>
                <li><strong>Especialidades con potencial:</strong> pequeños pero distintivos, con nicho propio. Proteger y diferenciar.</li>
                <li><strong>Productos que fallaron:</strong> nunca despegaron. Abandono rápido.</li>
                <li><strong>Inversiones en el orgullo ejecutivo:</strong> los que alguien importante impuso por convicción personal. La trampa más cara.</li>
                <li><strong>Cenicientas (underdogs):</strong> ignorados, con resultado discreto pero positivo. Explorar si son "ganapanes de mañana" mal detectados.</li>
                <li><strong>Productos innecesariamente caros:</strong> venden bien pero el costo los hace marginales. Rediseñar o reposicionar.</li>
                <li><strong>Productos con precio insuficiente:</strong> el mercado pagaría más pero nadie lo ha intentado. Revisar pricing.</li>
                <li><strong>Productos marginales:</strong> pequeños, estables, sin futuro. Liquidación ordenada.</li>
            </ol>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">🚗</span><div>
                <h3>El Ford Edsel: "inversión en el orgullo ejecutivo"</h3>
                <p>Drucker usa el Edsel como arquetipo: Ford lanzó en 1957 un auto con enorme inversión, <em>a pesar de que los estudios de mercado de la propia Ford advertían que no había demanda</em>. El producto se diseñó desde dentro —desde la ingeniería, desde el prestigio de sus impulsores— en lugar de desde el cliente. Fue retirado tres años después con pérdidas catastróficas.</p>
                <p><em>¿Qué "Edsel" tienes en tu empresa?</em> ¿Qué producto sostienes porque alguien importante lo impulsó y nadie se atreve a decir la verdad?</p>
            </div></div>
        </div>

        ${quizBlock('q_m1l4', 'Drucker llama "ganapán de ayer" a un producto que...', [
            {text: 'Nunca generó ingresos', correct: false},
            {text: 'Ya vivió su mejor momento, está declinando, y sin embargo concentra el mayor esfuerzo gerencial por inercia — es justamente esa sobreatención la que lo perpetúa', correct: true},
            {text: 'Se lanzó hace menos de un año', correct: false},
            {text: 'Es idéntico al de la competencia', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm1l5', module: 'Módulo 1 · Comprensión de la empresa', tag: 'tag-module', tagLabel: 'MÓDULO 1',
        title: 'Controlar el costo, no reducirlo',
        subtitle: 'Por qué los recortes lineales casi siempre fracasan — Cap. V',
        content: hero(heroGradients.m1, 'LECCIÓN 5', 'Control de costos, no reducción — Cap. V') + `
        
        ${videoLink('La Gerencia Efectiva — Contabilidad de Costos (Gotham Velveth)', 'nS3nlD0tweA')}

        <div class="content-card">
            <h3>📖 Drucker, textual</h3>
            <blockquote class="book-quote">"Los costos no existen por sí mismos. Son siempre incurridos —en principio tanto como en la práctica— para un resultado."<cite>— Cap. V</cite></blockquote>
            <blockquote class="book-quote">"Trabajar sobre la reducción de costos rara vez es efectivo. Se necesita trabajar sobre el control de costos."<cite>— Cap. V</cite></blockquote>
            <blockquote class="book-quote">"El costo más productivo es siempre el costo de lo que no se hace."<cite>— Cap. V</cite></blockquote>
            <blockquote class="book-quote">"El 10 por ciento de los acontecimientos —en general el 10 por ciento de los productos, o de los clientes, o de los procesos— produce el 90 por ciento de los costos."<cite>— Cap. V</cite></blockquote>
        </div>

        <div class="content-card">
            <h3>🔍 Reducción vs. control</h3>
            <p><strong>Reducción de costos</strong> es un programa lineal: cortar 10% a todo. Parece justo pero destruye las oportunidades más jóvenes (que siempre parecen caras porque aún no han madurado) y mantiene los costos estructurales del pasado.</p>
            <p><strong>Control de costos</strong> es otra cosa: identificar dónde se acumulan <em>desproporcionadamente</em> los costos, analizar <em>para qué resultado</em> se incurren, y eliminar los que no producen resultado.</p>
        </div>

        <div class="content-card">
            <h3>🛒 Sears y Marks &amp; Spencer</h3>
            <p>Drucker explica cómo Sears Roebuck y Marks &amp; Spencer construyeron su liderazgo <em>rediseñando la cadena económica completa</em>: relación con proveedores, diseño de producto, logística, rotación de inventario, layout de tienda, relación con cliente. Todo como un sistema. Los ahorros no venían de cortar; venían de reconcebir qué actividades agregaban valor y cuáles podían eliminarse sin consecuencias.</p>
        </div>

        <div class="content-card tip">
            <h3>📝 El costo de lo que no se hace</h3>
            <p>Haz una lista de 5 actividades que tu empresa realiza por costumbre. Para cada una:</p>
            <ol class="concept-list">
                <li>¿Qué resultado específico produce para el cliente final?</li>
                <li>¿Cuánto costaría eliminarla mañana?</li>
                <li>¿Qué pasaría si simplemente <em>no la hiciéramos</em> durante un trimestre?</li>
            </ol>
            <p>Al menos 2 de las 5 pueden desaparecer sin consecuencias. Ese es el "costo más productivo".</p>
        </div>

        ${quizBlock('q_m1l5', '¿Por qué Drucker dice que "el costo más productivo es el de lo que no se hace"?', [
            {text: 'Porque ahorra dinero en el corto plazo', correct: false},
            {text: 'Porque eliminar una actividad que no produce resultado libera recursos sin afectar los ingresos — es ganancia neta sin costo de capital', correct: true},
            {text: 'Porque reduce el personal', correct: false},
            {text: 'Porque impresiona a los inversionistas', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm1l6', module: 'Módulo 1 · Comprensión de la empresa', tag: 'tag-quiz', tagLabel: 'SÍNTESIS M1',
        title: 'Síntesis del Módulo 1 + plantillas ABC y matriz de cartera',
        subtitle: 'Descarga las dos primeras herramientas y aplícalas a tu negocio',
        content: hero(heroGradients.synth, 'SÍNTESIS M1', 'Análisis ABC + Matriz de cartera de productos') + `
        
        ${videoLink('Análisis ABC de Inventarios y PARETO — Paso a paso en Excel', 'NMu9evFpGps')}

        <div class="content-card">
            <h3>🎯 Lo que aprendiste</h3>
            <ol class="concept-list">
                <li>Las 8 realidades empresarias de Drucker.</li>
                <li>Las tres dimensiones del resultado: producto, mercado, canal.</li>
                <li>La transacción (no el producto) como unidad real de análisis.</li>
                <li>Las 11 categorías de productos y cómo clasificar cada uno.</li>
                <li>Control de costos vs. reducción de costos.</li>
            </ol>
        </div>

        <div class="content-card tip">
            <h3>📥 Plantilla 1 — Análisis ABC (Pareto 80/20)</h3>
            <p>Excel con tres hojas: productos, clientes y canales. Capturas ingreso y margen del último año; la hoja calcula el Pareto acumulado y asigna zona A, B o C con semáforo.</p>
            <p><a href="assets/plantillas/drucker-analisis-abc.xlsx" download class="btn btn-primary">⬇️ Descargar Análisis ABC (.xlsx)</a></p>
        </div>

        <div class="content-card tip">
            <h3>📥 Plantilla 2 — Matriz de cartera de 11 categorías</h3>
            <p>Excel que clasifica automáticamente cada producto en una de las 11 categorías de Drucker y recomienda acción (invertir, mantener, rediseñar, abandonar).</p>
            <p><a href="assets/plantillas/drucker-matriz-cartera.xlsx" download class="btn btn-primary">⬇️ Descargar Matriz de cartera (.xlsx)</a></p>
        </div>

        <div class="content-card">
            <h3>📝 Tarea antes de continuar</h3>
            <ol class="concept-list">
                <li>Descarga las dos plantillas.</li>
                <li>Llena el análisis ABC de <em>productos</em> con tus datos reales del último año.</li>
                <li>Identifica tus 3 productos A, 3 candidatos a ganapán de mañana y 3 candidatos a abandono.</li>
                <li>Guarda el archivo. Lo seguiremos usando.</li>
            </ol>
        </div>

        ${quizBlock('q_m1l6', 'En el análisis ABC, un producto "zona A" es aquel que...', [
            {text: 'Tiene el nombre que empieza con A', correct: false},
            {text: 'Forma parte del 20% superior que genera ≈70-80% del margen total — los ganapanes de hoy', correct: true},
            {text: 'Tiene el precio más alto del catálogo', correct: false},
            {text: 'Es el más nuevo del portafolio', correct: false}
        ])}
        `
    });

    // ==============================================================
    // MÓDULO 2 — EL EXTERIOR DEFINE (Cap VI-VIII)
    // ==============================================================

    C.lessons.push({
        id: 'm2l1', module: 'Módulo 2 · El exterior define', tag: 'tag-module', tagLabel: 'MÓDULO 2',
        title: 'El cliente es la empresa',
        subtitle: 'Qué compra realmente el cliente, no qué creemos venderle — Cap. VI',
        content: hero(heroGradients.m2, 'LECCIÓN 6', 'El cliente es la empresa — Cap. VI') + `
        ${note('Este es el capítulo más citado de Drucker y el peor entendido. "El cliente es la empresa" no significa "el cliente siempre tiene la razón" ni "seamos amables". Significa algo más profundo: quién es cliente y qué compra lo define <em>el mercado</em>, no la compañía. Y la mayoría de las empresas se equivoca al responder ambas preguntas.')}

        
        ${videoLink('Cómo diseñar una PROPUESTA DE VALOR (+ ejemplos)', '46xFqJTJZLM')}

        <div class="content-card">
            <h3>📖 Drucker, textual</h3>
            <blockquote class="book-quote">"Lo que el cliente compra nunca es un producto. Es siempre una utilidad, es decir, lo que un producto o servicio hace por él."<cite>— Cap. VI</cite></blockquote>
            <blockquote class="book-quote">"El cliente raramente compra lo que la compañía cree que le vende."<cite>— Cap. VI</cite></blockquote>
            <blockquote class="book-quote">"Los no-clientes son siempre más numerosos que los clientes. Incluso una compañía dominante raramente tiene una cuota de mercado mayoritaria si el mercado se define correctamente."<cite>— Cap. VI</cite></blockquote>
            <blockquote class="book-quote">"La compañía que quiera conocer su mercado debe mirar a quienes no son sus clientes, y averiguar por qué no lo son."<cite>— Cap. VI</cite></blockquote>
        </div>

        <div class="content-card">
            <h3>🎯 Cuatro preguntas que Drucker te obliga a contestar</h3>
            <ol class="concept-list">
                <li><strong>¿Quién es el cliente?</strong> (No quién paga: quién decide).</li>
                <li><strong>¿Qué compra?</strong> (Qué <em>utilidad</em> —ahorro de tiempo, seguridad, estatus, tranquilidad, ingreso— obtiene al usar tu producto).</li>
                <li><strong>¿Dónde compra?</strong> (En qué canal, en qué momento, después de qué detonante).</li>
                <li><strong>¿Qué considera valor?</strong> (El precio casi nunca es la respuesta; la conveniencia, la confianza y la posventa sí).</li>
            </ol>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">📺</span><div>
                <h3>RCA y la ama de casa (Cap. VI)</h3>
                <p>RCA pensaba que vendía electrodomésticos con superioridad tecnológica: ingeniería, diseño, prestaciones. Los estudios mostraron que el ama de casa compraba en realidad <strong>respaldo del distribuidor local y confiabilidad del servicio posventa</strong>. RCA, pese a su poder tecnológico, había construido la oferta equivocada. Perdió la categoría frente a marcas técnicamente inferiores pero con mejor canal.</p>
                <p>Traducción práctica: <em>lo que tu cliente valora probablemente no es lo que tu empresa está optimizando</em>.</p>
            </div></div>
        </div>

        ${quizBlock('q_m2l1', 'Según Drucker, "lo que el cliente compra nunca es un producto". ¿Qué es entonces?', [
            {text: 'Una marca', correct: false},
            {text: 'Una utilidad — es decir, lo que el producto <em>hace por él</em>: ahorro de tiempo, seguridad, ingreso, estatus, tranquilidad', correct: true},
            {text: 'Un precio bajo', correct: false},
            {text: 'Una experiencia digital', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm2l2', module: 'Módulo 2 · El exterior define', tag: 'tag-module', tagLabel: 'MÓDULO 2',
        title: 'Los no-clientes: mirar lo que no ves',
        subtitle: 'La fuente de información más desaprovechada — Cap. VI parte II',
        content: hero(heroGradients.m2, 'LECCIÓN 7', 'Los no-clientes como fuente primaria de información') + `
        
        ${videoLink('La Estrategia del Océano Azul — Resumen Animado', 'xHiLyHZKFro')}

        <div class="content-card">
            <h3>📖 La idea provocadora de Drucker</h3>
            <blockquote class="book-quote">"Los no-clientes son siempre más numerosos que los clientes."<cite>— Cap. VI</cite></blockquote>
            <p>Las encuestas de satisfacción a clientes te dicen por qué tus actuales compradores están contentos (o no). Pero el 80% del mercado —los que <em>no</em> te compran— queda fuera de ese radar. Ahí están las respuestas que necesitas.</p>
        </div>

        <div class="content-card">
            <h3>🧭 Método: entrevista de no-cliente</h3>
            <ol class="concept-list">
                <li>Identifica 10 personas o empresas que <em>podrían</em> ser tu cliente pero no lo son.</li>
                <li>Pregunta cara a cara (no por encuesta online): ¿Conoces mi producto? ¿Por qué no lo has comprado? ¿A quién le compras? ¿Qué te daría esa otra opción que te falta? ¿Qué te haría cambiar?</li>
                <li>Documenta las respuestas crudas. No las edites para que suenen como te gustaría.</li>
                <li>Busca patrones: ¿aparece una misma objeción 3+ veces? Esa es una oportunidad.</li>
            </ol>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">🚗</span><div>
                <h3>Cadillac no competía con autos</h3>
                <p>Drucker cita que los propios clientes de Cadillac decían que su verdadera competencia no eran otros automóviles, sino <strong>abrigos de piel, yates y viajes a Europa</strong>. Era una compra discrecional de prestigio, no de transporte. Si GM hubiera medido a Cadillac comparándolo solo con Lincoln, nunca habría encontrado a sus no-clientes reales.</p>
                <p>El bowling, a su vez, emergió como competencia inesperada del cine al redefinirse el mercado como "entretenimiento familiar fuera del hogar".</p>
            </div></div>
        </div>

        <div class="content-card tip">
            <h3>📝 Ejercicio: ¿con qué realmente compites?</h3>
            <p>Haz dos listas:</p>
            <ul class="concept-list">
                <li><strong>Competidores directos</strong>: los que venden lo mismo que tú.</li>
                <li><strong>Alternativas del cliente</strong>: todo lo demás en lo que puede gastar ese dinero o ese tiempo para resolver la misma necesidad.</li>
            </ul>
            <p>La segunda lista suele ser 5-10× más larga. Ahí está el verdadero mercado.</p>
        </div>

        ${quizBlock('q_m2l2', 'Drucker dice que para conocer el mercado hay que mirar a los no-clientes. ¿Por qué?', [
            {text: 'Para convencerlos de comprar', correct: false},
            {text: 'Porque son mayoría en cualquier mercado y su comportamiento revela qué le falta a tu oferta — cosa que tus clientes actuales, satisfechos con lo que hay, no te pueden decir', correct: true},
            {text: 'Para denunciarlos a la competencia', correct: false},
            {text: 'Porque sus datos son públicos', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm2l3', module: 'Módulo 2 · El exterior define', tag: 'tag-module', tagLabel: 'MÓDULO 2',
        title: 'Nuestro conocimiento es nuestra empresa',
        subtitle: 'El activo intangible que define la excelencia específica — Cap. VII',
        content: hero(heroGradients.m2, 'LECCIÓN 8', 'El conocimiento específico — Cap. VII') + `
        
        ${videoLink('¿Qué son las Core Competences? — Estrategias de Negocios', 'G7xtTU3M2BY')}

        <div class="content-card">
            <h3>📖 Drucker, textual</h3>
            <blockquote class="book-quote">"El conocimiento es la empresa, plenamente tanto como lo son los clientes y los productos."<cite>— Cap. VII</cite></blockquote>
            <blockquote class="book-quote">"Cada empresa tiene un conocimiento específico que le es propio. Es único en su forma, sea único o no en su contenido."<cite>— Cap. VII</cite></blockquote>
            <blockquote class="book-quote">"Lo que la empresa hace mejor que cualquier otra organización, lo que sabe mejor — esa es su excelencia específica."<cite>— Cap. VII</cite></blockquote>
            <blockquote class="book-quote">"El análisis del conocimiento es siempre sorprendente tanto para la gente que está adentro como para la que está afuera."<cite>— Cap. VII</cite></blockquote>
        </div>

        <div class="content-card">
            <h3>🧠 ¿En qué eres realmente excelente?</h3>
            <p>Drucker distingue entre:</p>
            <ul class="concept-list">
                <li><strong>Conocimiento común</strong>: lo que toda empresa de tu sector sabe hacer (contabilidad, nómina, ventas básicas).</li>
                <li><strong>Conocimiento específico</strong>: lo que <em>tu</em> empresa hace mejor que cualquier otra — no necesariamente porque sepa algo único, sino porque lo ejecuta de forma única.</li>
            </ul>
            <p>La pregunta clave: si tu equipo desapareciera mañana y lo reemplazaras con gente igualmente competente pero sin tu historia, ¿qué habilidad <em>específica</em> se perdería para siempre?</p>
        </div>

        <div class="content-card">
            <h3>🏢 Tres empresas, tres excelencias distintas</h3>
            <p>Drucker contrasta:</p>
            <ul class="concept-list">
                <li><strong>General Motors:</strong> excelencia en <em>desarrollar y administrar empresas</em> (divisiones, marcas, ejecutivos).</li>
                <li><strong>General Electric:</strong> excelencia en <em>formar científicos e ingenieros de primer nivel</em>.</li>
                <li><strong>IBM (en su momento):</strong> excelencia en <em>vender y dar servicio al cliente</em>; el jefe de ventas del distrito era la figura clave.</li>
            </ul>
            <p>Las tres son empresas industriales exitosas, pero si les preguntas "¿en qué eres mejor?", cada una te da una respuesta radicalmente distinta. Esa respuesta <em>es</em> la empresa.</p>
        </div>

        <div class="content-card tip">
            <h3>📝 Inventario de conocimiento (ejercicio)</h3>
            <ol class="concept-list">
                <li>Lista 10 cosas que tu empresa hace.</li>
                <li>Para cada una, califícate honestamente: promedio / bueno / excelente / excepcional en tu mercado.</li>
                <li>Encontrarás que de las 10, sólo 1 o 2 son "excepcional". Esa es tu excelencia específica.</li>
                <li>Toda asignación de recursos debería reforzar esas 1-2, no las otras 8.</li>
            </ol>
        </div>

        ${quizBlock('q_m2l3', 'La "excelencia específica" de una empresa, según Drucker, es...', [
            {text: 'El producto más caro de su catálogo', correct: false},
            {text: 'Lo que la empresa hace mejor que cualquier otra organización — su conocimiento distintivo, que define qué es esa empresa y en qué debe concentrar sus recursos', correct: true},
            {text: 'Su cuota de mercado', correct: false},
            {text: 'La rentabilidad de sus acciones', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm2l4', module: 'Módulo 2 · El exterior define', tag: 'tag-module', tagLabel: 'MÓDULO 2',
        title: 'Enfoque en el potencial: debilidades como oportunidades',
        subtitle: 'Donde falta algo, hay un negocio esperando — Cap. VIII',
        content: hero(heroGradients.m2, 'LECCIÓN 9', 'Enfoque en el potencial — Cap. VIII') + `
        
        ${videoLink('Construye sobre fortalezas — Enfoque Peter Drucker', 's0hMmakoN24')}

        <div class="content-card">
            <h3>📖 Drucker, textual</h3>
            <blockquote class="book-quote">"Las debilidades son las áreas de oportunidad; las fortalezas son las áreas de resultados."<cite>— Cap. VIII</cite></blockquote>
            <blockquote class="book-quote">"Las oportunidades aparecen cuando uno busca lo que falta — el eslabón perdido en un proceso económico, la brecha entre lo que es y lo que podría ser."<cite>— Cap. VIII</cite></blockquote>
            <blockquote class="book-quote">"La explotación del potencial es tan importante como la explotación de las realidades actuales, y a menudo más."<cite>— Cap. VIII</cite></blockquote>
        </div>

        <div class="content-card">
            <h3>🔍 El eslabón perdido</h3>
            <p>Drucker llama "eslabón perdido" a un punto de la cadena económica donde algo <em>debería existir</em> pero no existe. Ese vacío es la oportunidad. Ejemplos del libro:</p>
            <ul class="concept-list">
                <li><strong>Papel aluminio doméstico:</strong> el proceso de laminado fino existía hacía décadas, pero nadie había identificado el uso doméstico (envolver alimentos) como mercado de masas. El eslabón perdido: empaquetado de consumo.</li>
                <li><strong>Equipos hospitalarios:</strong> productos técnicamente sofisticados pero incómodos para el trabajo real de enfermeras y médicos. El eslabón perdido: usabilidad en el piso clínico.</li>
                <li><strong>Mercados de exportación:</strong> una compañía química europea descubrió que su potencial estaba afuera, no en el saturado mercado doméstico.</li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>🧭 Método: detección del eslabón perdido</h3>
            <p>Para tu industria, responde:</p>
            <ol class="concept-list">
                <li>¿Qué parte del proceso del cliente es incómodo, lento o caro, y sin embargo nadie lo resuelve?</li>
                <li>¿Qué capacidad técnica existe ya, pero nadie la ha combinado con un mercado masivo?</li>
                <li>¿Qué nicho geográfico o demográfico está mal atendido porque no vale la pena para los grandes?</li>
                <li>¿Qué cliente existe, te ignoró, y sin embargo tiene una necesidad que tu empresa podría cubrir?</li>
            </ol>
        </div>

        ${quizBlock('q_m2l4', 'Según Drucker, ¿dónde están las oportunidades más grandes?', [
            {text: 'En los productos más vendidos', correct: false},
            {text: 'En las debilidades — en los vacíos, los eslabones perdidos, lo que debería existir pero no existe en la cadena económica', correct: true},
            {text: 'En reducir costos', correct: false},
            {text: 'En copiar al líder', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm2l5', module: 'Módulo 2 · El exterior define', tag: 'tag-quiz', tagLabel: 'SÍNTESIS M2',
        title: 'Síntesis del Módulo 2 + plantilla "Ésta es nuestra empresa"',
        subtitle: 'El checklist diagnóstico que toda dirección debe responder',
        content: hero(heroGradients.synth, 'SÍNTESIS M2', 'Checklist "Ésta es nuestra empresa"') + `
        
        ${videoLink('Cómo realizar un Análisis FODA — Estructura y Proceso', 'dWDmqb-W6sA')}

        <div class="content-card">
            <h3>🎯 Lo que aprendiste</h3>
            <ol class="concept-list">
                <li>El cliente compra una utilidad, no un producto.</li>
                <li>Los no-clientes son la fuente de información más desaprovechada.</li>
                <li>Tu "conocimiento específico" es tu verdadero activo.</li>
                <li>Las oportunidades están en las debilidades y eslabones perdidos.</li>
            </ol>
        </div>

        <div class="content-card tip">
            <h3>📥 Plantilla 3 — Checklist "Ésta es nuestra empresa"</h3>
            <p>PDF imprimible con las <strong>30 preguntas de diagnóstico</strong> que Drucker desarrolla en el Cap. VIII. Llénalo con tu equipo directivo en una sesión de 2-3 horas. Al final tendrás un retrato real de tu empresa tal como es —no como crees que es.</p>
            <p><a href="assets/plantillas/drucker-checklist-empresa.pdf" download class="btn btn-primary">⬇️ Descargar Checklist (.pdf)</a></p>
        </div>

        <div class="content-card">
            <h3>📝 Tarea integradora</h3>
            <ol class="concept-list">
                <li>Descarga el checklist.</li>
                <li>Convoca a 3-5 personas clave de tu empresa.</li>
                <li>Respondan individualmente las 30 preguntas (sin discutir).</li>
                <li>Después comparen respuestas. Las <em>diferencias</em> son el diagnóstico más valioso.</li>
            </ol>
        </div>

        ${quizBlock('q_m2l5', 'Al hacer el checklist "Ésta es nuestra empresa" con varios directivos, el valor diagnóstico más grande está en...', [
            {text: 'Que todos coincidan en las mismas respuestas', correct: false},
            {text: 'Las diferencias entre sus respuestas — indican que la empresa <em>no se ve a sí misma de la misma forma</em>, y eso explica gran parte de la mala asignación de recursos', correct: true},
            {text: 'En calificar al personal', correct: false},
            {text: 'En impresionar al consejo', correct: false}
        ])}
        `
    });

    // ==============================================================
    // MÓDULO 3 — DISEÑO DEL NEGOCIO (Cap IX-XII)
    // ==============================================================

    C.lessons.push({
        id: 'm3l1', module: 'Módulo 3 · Diseño del negocio', tag: 'tag-module', tagLabel: 'MÓDULO 3',
        title: 'Construir la empresa ideal',
        subtitle: 'El diseño antes del crecimiento — Cap. IX',
        content: hero(heroGradients.m3, 'LECCIÓN 10', 'La empresa ideal — Cap. IX') + `
        
        ${videoLink('Modelo Canvas — Explicado paso a paso en 6 minutos', 'ZQgXyiozmYY')}

        <div class="content-card">
            <h3>📖 Drucker, textual</h3>
            <blockquote class="book-quote">"La empresa ideal es aquella que, con los recursos de la empresa actual, produciría el máximo de resultados."<cite>— Cap. IX</cite></blockquote>
            <blockquote class="book-quote">"La planificación no empieza con una previsión: empieza con la decisión de qué empresa queremos tener."<cite>— Cap. IX</cite></blockquote>
            <blockquote class="book-quote">"La empresa ideal no es una utopía. Es el modelo hacia el cual uno dirige deliberadamente los recursos del presente."<cite>— Cap. IX</cite></blockquote>
            <blockquote class="book-quote">"Las oportunidades son siempre más grandes que los recursos disponibles para explotarlas."<cite>— Cap. IX</cite></blockquote>
        </div>

        <div class="content-card">
            <h3>🏗️ El ejercicio que pocos hacen</h3>
            <p>Drucker propone un ejercicio aparentemente simple pero devastador: con los recursos que hoy tienes (no con los que desearías tener), <strong>¿cuál sería la configuración óptima de productos, mercados y operaciones?</strong> ¿Qué venderías? ¿A quién? ¿Cómo? ¿Qué dejarías de hacer?</p>
            <p>Casi nunca la respuesta se parece a la empresa real. Esa diferencia —entre la empresa ideal y la empresa actual— es el plan estratégico. No hace falta inventar más: hace falta <em>reasignar</em>.</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">🏭</span><div>
                <h3>Alfred Sloan y la reinvención de General Motors</h3>
                <p>En los años veinte, Alfred Sloan llegó a una General Motors caótica: marcas que competían entre sí, divisiones solapadas, sin orden. En lugar de optimizar lo que había, <strong>dibujó primero en papel la empresa ideal</strong>: una estructura de divisiones con cinco marcas, cada una en un segmento de precio distinto (Chevrolet, Pontiac, Oldsmobile, Buick, Cadillac), compitiendo con Ford en cada nivel.</p>
                <p>Luego reorganizó GM para que coincidiera con ese plano. El resultado: GM desplazó a Ford y dominó la industria durante medio siglo.</p>
            </div></div>
        </div>

        <div class="content-card tip">
            <h3>📝 Ejercicio: dibuja tu empresa ideal</h3>
            <ol class="concept-list">
                <li>Imagina que fundas tu empresa hoy, con los recursos que tienes (equipo, capital, conocimiento), pero <em>sin</em> los productos, clientes y procesos heredados.</li>
                <li>¿Qué 3-5 productos/servicios ofrecerías?</li>
                <li>¿A qué 3 tipos de cliente te enfocarías?</li>
                <li>¿Qué estructura organizacional tendrías?</li>
                <li>Compara con tu empresa real. La brecha es tu roadmap.</li>
            </ol>
        </div>

        ${quizBlock('q_m3l1', 'La "empresa ideal" de Drucker es...', [
            {text: 'Una empresa utópica con recursos ilimitados', correct: false},
            {text: 'El modelo óptimo que produciría máximos resultados con los recursos actuales, usado como guía deliberada para reasignar lo que ya tienes', correct: true},
            {text: 'La empresa más grande de la industria', correct: false},
            {text: 'Una visión inspiracional para el equipo', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm3l2', module: 'Módulo 3 · Diseño del negocio', tag: 'tag-module', tagLabel: 'MÓDULO 3',
        title: 'La salud de tu industria',
        subtitle: 'Por qué el entorno determina el techo — Cap. X',
        content: hero(heroGradients.m3, 'LECCIÓN 11', 'Las realidades del entorno — Cap. X') + `
        
        ${videoLink('Las 5 fuerzas de Porter (explicación sencilla)', 'kNOfOmjgOik')}

        <div class="content-card">
            <h3>📖 Drucker, textual</h3>
            <blockquote class="book-quote">"Toda empresa está incrustada en una industria, y toda industria en una economía. La salud de la empresa no puede separarse de la salud de ese contorno."<cite>— Cap. X</cite></blockquote>
            <blockquote class="book-quote">"Una industria que no puede atraer talento de primera, que no puede pagar buenos salarios y que no puede financiar su renovación, es una industria enferma por muy rentables que sean sus balances de corto plazo."<cite>— Cap. X</cite></blockquote>
            <blockquote class="book-quote">"La vulnerabilidad de una industria raramente es evidente para quienes trabajan dentro de ella."<cite>— Cap. X</cite></blockquote>
        </div>

        <div class="content-card">
            <h3>🏥 Diagnóstico de salud industrial (5 signos vitales)</h3>
            <ol class="concept-list">
                <li><strong>Talento:</strong> ¿los mejores jóvenes quieren trabajar en esta industria? ¿O solo entran los que no pudieron entrar a otra?</li>
                <li><strong>Capital:</strong> ¿hay dinero dispuesto a financiar nuevos proyectos aquí? ¿O los bancos y fondos lo evitan?</li>
                <li><strong>Renovación:</strong> ¿se invierte en I+D proporcional al ingreso? ¿Aparecen productos genuinamente nuevos cada pocos años?</li>
                <li><strong>Reputación:</strong> ¿la sociedad ve a esta industria como valiosa? ¿O como obsoleta, contaminante, irrelevante?</li>
                <li><strong>Margen estructural:</strong> ¿hay espacio para ganancias saludables después de todos los costos sociales y regulatorios?</li>
            </ol>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">⚙️</span><div>
                <h3>La industria siderúrgica norteamericana (Cap. X)</h3>
                <p>En los años 60, la siderurgia estadounidense reportaba balances positivos, pero Drucker la diagnosticó como enferma: <strong>no podía atraer ingenieros jóvenes, no tenía capital para renovar plantas, y dependía cada vez más de aranceles protectores</strong>. Veinte años después, la industria colapsó casi por completo frente a Japón y Corea.</p>
                <p>La rentabilidad contable de hoy no es sinónimo de salud estructural. Pregúntate si tu industria puede pasar los 5 signos vitales.</p>
            </div></div>
        </div>

        ${quizBlock('q_m3l2', 'Una industria rentable en libros pero que no atrae talento joven ni capital de inversión es...', [
            {text: 'Una industria consolidada y estable', correct: false},
            {text: 'Una industria estructuralmente enferma — la rentabilidad actual oculta una vulnerabilidad que se manifestará cuando caduquen las protecciones o aparezca una alternativa', correct: true},
            {text: 'Una industria de baja competencia', correct: false},
            {text: 'Una industria con altos dividendos', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm3l3', module: 'Módulo 3 · Diseño del negocio', tag: 'tag-module', tagLabel: 'MÓDULO 3',
        title: 'El futuro que ya ha tenido lugar',
        subtitle: 'No prediga: observe lo que ya pasó y cuyas consecuencias aún no se han desplegado — Cap. XI',
        content: hero(heroGradients.m3, 'LECCIÓN 12', 'El futuro que ya ha tenido lugar — Cap. XI') + `
        ${note('Este capítulo es, posiblemente, la contribución más original de Drucker al management. Cuando todos los libros de los años sesenta hablaban de "predecir el futuro", Drucker escribió: es imposible predecir el futuro — pero es posible identificar los cambios que <em>ya ocurrieron</em> y cuyas consecuencias todavía no se han desplegado. Esa es una idea que 60 años después sigue siendo la base de la prospectiva estratégica seria.')}

        
        ${videoLink('Cinco megatendencias globales en los negocios', 'TWvyThYAnmc')}

        <div class="content-card">
            <h3>📖 Drucker, textual</h3>
            <blockquote class="book-quote">"Es imposible predecir el futuro. Pero es posible identificar los acontecimientos importantes que ya han ocurrido y cuyos efectos futuros son predecibles."<cite>— Cap. XI</cite></blockquote>
            <blockquote class="book-quote">"El futuro que ya ha tenido lugar yace, en gran medida, fuera de la propia empresa. Es un cambio en la sociedad, en el conocimiento, en la cultura, en la industria, en la estructura económica."<cite>— Cap. XI</cite></blockquote>
            <blockquote class="book-quote">"La única política respecto al futuro que probablemente tenga éxito es tratar de hacer el futuro."<cite>— Cap. XI</cite></blockquote>
            <blockquote class="book-quote">"Toda compañía necesita preguntar: ¿qué cambios decisivos en la economía, en el mercado, en el conocimiento se han producido ya, cuyos efectos principales no han sido aún sentidos?"<cite>— Cap. XI</cite></blockquote>
        </div>

        <div class="content-card">
            <h3>🔭 Cuatro tipos de "futuro ya ocurrido"</h3>
            <ol class="concept-list">
                <li><strong>Demográfico:</strong> los nacimientos de hoy son la fuerza laboral y los consumidores de dentro de 20 años. Datos duros, previsibles con alta certeza.</li>
                <li><strong>Tecnológico:</strong> descubrimientos científicos ya hechos que todavía no se han industrializado o masificado.</li>
                <li><strong>Cultural:</strong> cambios en los valores, costumbres y expectativas sociales que ya están en marcha pero aún no redefinieron las preferencias de compra.</li>
                <li><strong>Regulatorio / económico:</strong> leyes firmadas, tratados ratificados, impuestos aprobados, cuyos efectos se despliegan en años.</li>
            </ol>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">📅</span><div>
                <h3>La demografía de 1977, previsible desde 1962</h3>
                <p>Drucker escribía en 1964 que la demografía estadounidense de 1977 estaba <strong>ya inscrita en los nacimientos de posguerra</strong>. Saber cuántos jóvenes de 15 años habría en 1977 no requería adivinar: sólo contar los bebés nacidos en 1962. Esa certeza demográfica permitía anticipar necesidades de educación, vivienda, empleo, consumo de masas.</p>
                <p>Aplica hoy: la demografía mexicana de 2045 ya está escrita. ¿Qué productos y servicios necesita un México con 30% de adultos mayores? Quien lo prepare ahora, llega primero.</p>
            </div></div>
        </div>

        <div class="content-card tip">
            <h3>📝 Ejercicio: tu mapa de "futuros ya ocurridos"</h3>
            <ol class="concept-list">
                <li>Demográfico: ¿qué cambio demográfico de los últimos 10 años en México todavía no se refleja en tu oferta?</li>
                <li>Tecnológico: ¿qué tecnología madura (no experimental) todavía no ha llegado a tu sector?</li>
                <li>Cultural: ¿qué valor está cambiando (sostenibilidad, salud mental, consumo consciente) que aún no explotó en tu categoría?</li>
                <li>Regulatorio: ¿qué ley reciente crea oportunidades o amenazas en los próximos 3 años?</li>
            </ol>
        </div>

        ${quizBlock('q_m3l3', '¿Por qué Drucker dice que podemos anticipar el futuro sin predecirlo?', [
            {text: 'Porque los modelos estadísticos son muy precisos', correct: false},
            {text: 'Porque hay cambios decisivos que ya ocurrieron (demográficos, tecnológicos, culturales, regulatorios) cuyos efectos todavía no se despliegan — observarlos es predicción segura', correct: true},
            {text: 'Porque la intuición del ejecutivo experimentado no falla', correct: false},
            {text: 'Porque los consultores lo saben', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm3l4', module: 'Módulo 3 · Diseño del negocio', tag: 'tag-module', tagLabel: 'MÓDULO 3',
        title: 'Las tres decisiones clave',
        subtitle: 'Idea, excelencia y prioridades — Cap. XII',
        content: hero(heroGradients.m3, 'LECCIÓN 13', 'Las tres decisiones clave — Cap. XII') + `
        
        ${videoLink('Cómo tomar decisiones estratégicas en tu NEGOCIO', 'tO1SVr3O25w')}

        <div class="content-card">
            <h3>📖 Drucker, textual</h3>
            <blockquote class="book-quote">"Toda compañía posee una idea de sus empresas: un retrato de sí misma y de sus capacidades específicas."<cite>— Cap. XII, sección I</cite></blockquote>
            <blockquote class="book-quote">"La idea de la empresa siempre define una satisfacción que se proporcionará al mercado o un conocimiento que se deberá hacer efectivo en el desempeño económico."<cite>— Cap. XII, sección I</cite></blockquote>
            <blockquote class="book-quote">"Es mejor tomar decisiones erróneas y cumplirlas, que eludir el trabajo por considerarlo desagradable."<cite>— Cap. XII, sección III</cite></blockquote>
        </div>

        <div class="content-card">
            <h3>🗝️ Las tres decisiones indelegables de la alta dirección</h3>
            <ol class="concept-list">
                <li><strong>La idea de la empresa:</strong> ¿qué satisfacción ofrecemos al mercado? ¿Qué conocimiento hacemos productivo? Sin esta definición operativa, todo lo demás es reacción.</li>
                <li><strong>La excelencia específica:</strong> ¿en qué vamos a ser mejores que todos los demás? No se puede ser excelente en todo — hay que elegir.</li>
                <li><strong>Las prioridades (y las postergaciones):</strong> ¿a qué dedicamos recursos de primer nivel? ¿Qué dejamos de hacer deliberadamente? La siguiente lección se dedica entera a esta pregunta.</li>
            </ol>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">☎️</span><div>
                <h3>Theodore Vail y AT&amp;T</h3>
                <p>A principios del siglo XX, Theodore Vail definió la idea de AT&amp;T con una frase: <strong>"Nuestra empresa es el servicio público"</strong>. No el negocio telefónico; el servicio público. Esa definición guió decisiones durante décadas: aceptar la regulación antes de que fuera impuesta, invertir en cobertura universal, estandarizar calidad, educar al regulador. AT&amp;T dominó el sector durante 70 años.</p>
                <p>Contraejemplo: los hermanos Pereire definieron el Crédit Mobilier como "desarrollo comercial" en lugar de "banco de inversión". Esa diferencia de <em>idea</em> decidió qué proyectos financiaron y qué legado dejaron.</p>
            </div></div>
        </div>

        <div class="content-card tip">
            <h3>📝 Ejercicio: escribe tu "idea de empresa" en una frase</h3>
            <p>Completa: "Nuestra empresa es ________." Puede ser:</p>
            <ul class="concept-list">
                <li>Un tipo de servicio ("somos la empresa del transporte confiable").</li>
                <li>Un conocimiento aplicado ("somos la empresa de la química aplicada a alimentos").</li>
                <li>Una satisfacción ("somos la empresa de la tranquilidad financiera para familias").</li>
            </ul>
            <p>Si te cuesta más de 10 intentos, es probable que tu empresa no tenga idea definida. Ese es el primer trabajo a hacer.</p>
        </div>

        ${quizBlock('q_m3l4', 'La "idea de la empresa" según Drucker es...', [
            {text: 'La misión publicada en la página web', correct: false},
            {text: 'La definición operativa de qué satisfacción se ofrece al mercado o qué conocimiento se hace productivo — es el criterio para todas las decisiones posteriores', correct: true},
            {text: 'Las metas trimestrales', correct: false},
            {text: 'El plan de marketing', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm3l5', module: 'Módulo 3 · Diseño del negocio', tag: 'tag-module', tagLabel: 'MÓDULO 3',
        title: 'El arte del abandono planificado',
        subtitle: 'Postergar es decidir no hacer — Cap. XII, sección III',
        content: hero(heroGradients.m3, 'LECCIÓN 14', 'Postergar es abandonar') + `
        
        ${videoLink('ABANDONA ESTO o NUNCA tendrás ÉXITO — La Regla de Drucker', '1NmM5gRLuAM')}

        <div class="content-card">
            <h3>📖 Drucker, la cita más incómoda del libro</h3>
            <blockquote class="book-quote">"Nunca está de más repetir que no hay que postergar, hay que abandonar."<cite>— Cap. XII, sección III</cite></blockquote>
            <blockquote class="book-quote">"Nadie encuentra dificultad en establecer las prioridades. Lo que resulta difícil es decidir las 'postergaciones'; es decir, lo que no debe hacerse."<cite>— Cap. XII, sección III</cite></blockquote>
        </div>

        <div class="content-card">
            <h3>🪓 ¿Por qué es tan difícil abandonar?</h3>
            <ol class="concept-list">
                <li><strong>Hay carrera profesional invertida:</strong> alguien defendió ese producto/proyecto por años. Cerrarlo es derrotar a esa persona.</li>
                <li><strong>Hay clientes existentes:</strong> pocos, pero ruidosos. La política interna los convierte en excusa permanente.</li>
                <li><strong>Hay activos específicos:</strong> una máquina, una planta, una marca. "Ya lo pagamos" — el costo hundido que distorsiona todas las decisiones.</li>
                <li><strong>Hay esperanza:</strong> "el próximo trimestre mejora". La esperanza sin plan es la peor asignación de recursos posible.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>✋ Preguntas-cuchillo para decidir abandono</h3>
            <p>Para cada producto, cliente, proceso o proyecto, pregunta:</p>
            <ol class="concept-list">
                <li>Si no existiera hoy, <em>¿lo empezaríamos?</em></li>
                <li>Si la respuesta es no, ¿qué nos impide salir?</li>
                <li>¿Cuál es el costo de la demora? ¿A cuánto equivale un año más sosteniendo esto?</li>
                <li>Si reasignáramos los recursos que consume, ¿a qué oportunidad los pondríamos?</li>
            </ol>
            <p>Drucker es contundente: si no se puede defender <em>hoy</em> con argumentos económicos limpios (no sentimentales), hay que cerrar.</p>
        </div>

        <div class="content-card tip">
            <h3>📝 La lista de los 3 abandonos</h3>
            <p>Antes de avanzar, nombra tres cosas que vas a abandonar en los próximos 90 días:</p>
            <ol class="concept-list">
                <li>Un producto/servicio/SKU: _____________________________________</li>
                <li>Un cliente o segmento: _____________________________________</li>
                <li>Una actividad o reporte interno: _____________________________________</li>
            </ol>
            <p>Ponle fecha. Ponle responsable. Comunícalo. Esa disciplina es lo que separa la gerencia efectiva de la retórica gerencial.</p>
        </div>

        ${quizBlock('q_m3l5', 'Drucker dice que "no hay que postergar, hay que abandonar". ¿Por qué?', [
            {text: 'Porque postergar ahorra dinero', correct: false},
            {text: 'Porque postergar es la forma políticamente cómoda de no decidir — mientras tanto el proyecto sigue consumiendo recursos; abandonar es la decisión honesta que libera capital y atención para las oportunidades reales', correct: true},
            {text: 'Porque los clientes prefieren cambios rápidos', correct: false},
            {text: 'Porque el abandono genera publicidad gratuita', correct: false}
        ])}
        `
    });

    // ==============================================================
    // MÓDULO 4 — ESTRATEGIA, RIESGO Y EJECUCIÓN (Cap XIII-XIV)
    // ==============================================================

    C.lessons.push({
        id: 'm4l1', module: 'Módulo 4 · Estrategia, riesgo y ejecución', tag: 'tag-module', tagLabel: 'MÓDULO 4',
        title: 'Oportunidades aditivas, complementarias y transformadoras',
        subtitle: 'Tres tipos de oportunidad, tres cálculos estratégicos distintos — Cap. XIII',
        content: hero(heroGradients.m4, 'LECCIÓN 15', 'Los tres tipos de oportunidades — Cap. XIII') + `
        
        ${videoLink('Las 7 fuentes de la innovación — Peter Drucker (MENTOR365)', '5zbDnzN6Ha8')}

        <div class="content-card">
            <h3>📖 Drucker, textual</h3>
            <blockquote class="book-quote">"Las oportunidades aditivas añaden al potencial existente; las oportunidades complementarias cambian la estructura de la empresa; las oportunidades transformadoras la cambian en su naturaleza."<cite>— Cap. XIII</cite></blockquote>
            <blockquote class="book-quote">"La oportunidad transformadora cambia, a la vez, la empresa y su mercado."<cite>— Cap. XIII</cite></blockquote>
        </div>

        <div class="content-card">
            <h3>📐 Los tres niveles</h3>
            <ol class="concept-list">
                <li><strong>Aditiva:</strong> mejora lo que ya haces. Ejemplo: lanzar una nueva presentación de un producto exitoso, abrir una sucursal en otra ciudad del mismo mercado. Riesgo bajo, impacto limitado.</li>
                <li><strong>Complementaria:</strong> cambia la estructura. Ejemplo: integrar verticalmente un proveedor, entrar a un canal nuevo, lanzar un producto que tu mismo cliente también necesita. Riesgo medio, impacto significativo.</li>
                <li><strong>Transformadora:</strong> cambia la naturaleza del negocio y el mercado. Ejemplo: Haloid convirtiéndose en Xerox al apostar por la xerografía. Riesgo alto, impacto total.</li>
            </ol>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">📄</span><div>
                <h3>Haloid / Xerox — la oportunidad transformadora</h3>
                <p>Haloid era en los años 50 una pequeña fabricante de papel fotográfico en dificultades. Apostó todo su capital por una tecnología casi experimental —la xerografía— que nadie más quería financiar. Si fracasaba, desaparecía. Si funcionaba, creaba una industria nueva.</p>
                <p>Funcionó. Haloid se renombró Xerox y definió la fotocopiadora de oficina durante 30 años. Drucker usa el caso para ilustrar una regla: <strong>cuando estás en posición débil, la oportunidad transformadora no es opción — es el único riesgo que no te puedes permitir no tomar</strong>.</p>
            </div></div>
        </div>

        ${quizBlock('q_m4l1', 'Una oportunidad que cambia simultáneamente la empresa y el mercado se llama...', [
            {text: 'Aditiva', correct: false},
            {text: 'Transformadora — redefine el negocio y crea un mercado nuevo, con el mayor riesgo y el mayor impacto', correct: true},
            {text: 'Complementaria', correct: false},
            {text: 'Marginal', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm4l2', module: 'Módulo 4 · Estrategia, riesgo y ejecución', tag: 'tag-module', tagLabel: 'MÓDULO 4',
        title: 'Los cuatro tipos de riesgo',
        subtitle: 'Y la categoría que casi nadie mide: el riesgo de no actuar — Cap. XIII',
        content: hero(heroGradients.m4, 'LECCIÓN 16', 'Los cuatro tipos de riesgo — Cap. XIII') + `
        
        ${videoLink('¿Cuáles son los tipos de RIESGO EMPRESARIAL?', '4taRGt-kLTk')}

        <div class="content-card">
            <h3>📖 La tipología completa</h3>
            <blockquote class="book-quote">"Hay cuatro clases de riesgo: el riesgo que uno debe aceptar, el riesgo que uno puede permitirse aceptar, el riesgo que uno no puede permitirse aceptar y el riesgo que uno no puede permitirse no aceptar."<cite>— Cap. XIII</cite></blockquote>
            <blockquote class="book-quote">"Los riesgos más grandes son los riesgos invisibles del pasado."<cite>— Cap. XIII</cite></blockquote>
        </div>

        <div class="content-card">
            <h3>⚖️ Desagregando cada tipo</h3>
            <ol class="concept-list">
                <li><strong>Riesgo que debes aceptar:</strong> es inherente al negocio. Una aseguradora <em>no puede</em> eliminar el riesgo de siniestros; debe gestionarlo.</li>
                <li><strong>Riesgo que puedes permitirte aceptar:</strong> pequeño en relación a los recursos. Fracasar no destruye la empresa.</li>
                <li><strong>Riesgo que no puedes permitirte aceptar:</strong> demasiado grande. Fracasar te quiebra. Drucker llama a evitarlo incluso si la probabilidad de éxito es alta.</li>
                <li><strong>Riesgo que no puedes permitirte <em>no</em> aceptar:</strong> el más crítico. No actuar te destruye a plazo, aunque actuar también sea peligroso. Haloid lo enfrentó: quedarse con papel fotográfico era muerte segura.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>👻 Los riesgos invisibles del pasado</h3>
            <p>La frase más desconocida pero más valiosa del capítulo. Drucker sostiene que los riesgos más peligrosos <em>no son los de las decisiones nuevas</em>, sino los que ya asumiste hace años sin darte cuenta y siguen vivos:</p>
            <ul class="concept-list">
                <li>La dependencia de un solo cliente grande.</li>
                <li>Un contrato firmado hace 10 años que ya no hace sentido pero sigue vigente.</li>
                <li>Un producto que depende de un solo proveedor irreemplazable.</li>
                <li>Una patente que vence pronto sin sucesor.</li>
                <li>Un CEO insustituible.</li>
            </ul>
            <p>Haz tu auditoría de riesgos invisibles hoy. La mayoría de las empresas descubre 3-5 al hacer el ejercicio seriamente.</p>
        </div>

        ${quizBlock('q_m4l2', '¿Cuál es, según Drucker, el riesgo más crítico?', [
            {text: 'El riesgo financiero', correct: false},
            {text: 'El riesgo que no puedes permitirte <em>no</em> aceptar — porque no actuar destruye la empresa a plazo, aunque actuar también tenga peligro', correct: true},
            {text: 'El riesgo reputacional', correct: false},
            {text: 'El riesgo legal', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm4l3', module: 'Módulo 4 · Estrategia, riesgo y ejecución', tag: 'tag-module', tagLabel: 'MÓDULO 4',
        title: 'De la decisión al compromiso',
        subtitle: 'Por qué las decisiones no existen hasta que hay recursos asignados — Cap. XIV',
        content: hero(heroGradients.m4, 'LECCIÓN 17', 'Decisión = compromiso de recursos — Cap. XIV') + `
        
        ${videoLink('Asignación de recursos — La estrategia fundamental', '3DCDa_ixrdM')}

        <div class="content-card">
            <h3>📖 Drucker, textual</h3>
            <blockquote class="book-quote">"Las decisiones sólo existen cuando los recursos humanos y materiales se han comprometido a su ejecución. Hasta ese momento hay sólo buenas intenciones."<cite>— Cap. XIV</cite></blockquote>
        </div>

        <div class="content-card">
            <h3>🎯 La prueba de la decisión real</h3>
            <p>Drucker ofrece un test brutalmente simple. Para cada "decisión" que tu empresa ha tomado recientemente, verifica:</p>
            <ol class="concept-list">
                <li>¿Hay <strong>persona</strong> asignada con nombre y apellido?</li>
                <li>¿Hay <strong>presupuesto</strong> separado con cifra concreta?</li>
                <li>¿Hay <strong>fecha</strong> límite irrenunciable?</li>
                <li>¿Hay <strong>métrica</strong> objetiva de éxito/fracaso?</li>
                <li>¿Está <strong>comunicada</strong> dentro y fuera de la empresa?</li>
            </ol>
            <p>Si falta cualquiera de los cinco, no es una decisión: es una aspiración. El 80% de lo que las empresas llaman "decisiones estratégicas" no pasa este test.</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">🧪</span><div>
                <h3>Du Pont y el nylon</h3>
                <p>Drucker cita a Du Pont como ejemplo de compromiso gerencial sistemático. Cuando decidieron convertir una investigación química en un producto de mercado (el nylon), <strong>asignaron equipos específicos, presupuesto plurianual, fecha de lanzamiento y métrica de participación de mercado</strong>. No fue "apoyemos la ciencia y veamos qué pasa". Fue una decisión con compromiso de recursos, y por eso se materializó.</p>
                <p>El mismo patrón en los laboratorios Bell con el transistor: un hallazgo de física del estado sólido se transformó en la base de una industria entera gracias a un compromiso gerencial, no sólo científico.</p>
            </div></div>
        </div>

        ${quizBlock('q_m4l3', 'Según Drucker, una decisión sólo existe cuando...', [
            {text: 'Está aprobada en consejo', correct: false},
            {text: 'Se han comprometido recursos humanos y materiales para su ejecución — con responsable, presupuesto, fecha y métrica. Antes de eso, es sólo buena intención', correct: true},
            {text: 'Está publicada en el plan anual', correct: false},
            {text: 'Tiene el acuerdo de los directivos', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm4l4', module: 'Módulo 4 · Estrategia, riesgo y ejecución', tag: 'tag-module', tagLabel: 'MÓDULO 4',
        title: 'El gerente como administrador del conocimiento',
        subtitle: 'La tesis final de Drucker: el trabajo más importante del siglo XXI — Cap. XIV + Conclusión',
        content: hero(heroGradients.m4, 'LECCIÓN 18', 'El gerente y el conocimiento — Conclusión') + `
        
        ${videoLink('Gestionarse a uno mismo — Peter Drucker (Resumen)', '1EncujIT08c')}

        <div class="content-card">
            <h3>📖 Drucker, textual</h3>
            <blockquote class="book-quote">"El trabajo del gerente es hacer productivo al conocimiento. El conocimiento es hoy el verdadero capital de una economía desarrollada."<cite>— Cap. XIV</cite></blockquote>
            <blockquote class="book-quote">"Hacer productivo al conocimiento requiere un trabajo gerencial específico y sistemático sobre el cual se sabe aún muy poco."<cite>— Cap. XIV</cite></blockquote>
            <blockquote class="book-quote">"El gerente, como administrador del conocimiento, constituye el nuevo grupo rector de la sociedad moderna."<cite>— Cap. XIV</cite></blockquote>
        </div>

        <div class="content-card">
            <h3>🧠 Qué significa "hacer productivo el conocimiento"</h3>
            <ol class="concept-list">
                <li><strong>Identificar</strong> qué conocimiento específico posee tu empresa (vimos cómo en L8).</li>
                <li><strong>Concentrarlo</strong> donde produce resultados: cliente correcto, producto correcto, canal correcto.</li>
                <li><strong>Renovarlo</strong>: el conocimiento se hace obsoleto. Hay que invertir en aprendizaje continuo del equipo.</li>
                <li><strong>Protegerlo</strong>: del "knowledge drain" — la fuga cuando se va gente clave sin transferir lo que sabe.</li>
                <li><strong>Convertirlo en valor</strong>: vía el cliente. El conocimiento que no llega al cliente en forma de utilidad es improductivo.</li>
            </ol>
        </div>

        <div class="content-card">
            <h3>🌐 La profecía de 1964 que hoy es obvia</h3>
            <p>Drucker sostuvo hace 60 años que el recurso económico decisivo de las sociedades desarrolladas no sería ya la tierra, el capital o la mano de obra, sino <em>el conocimiento</em> — y que el trabajo del gerente sería administrar ese recurso. En 1964 fue una predicción audaz. En 2020, con Google, Apple, Microsoft y Amazon siendo las empresas más valiosas del mundo (todas basadas exclusivamente en conocimiento), es evidencia histórica.</p>
            <p>La pregunta ya no es <em>si</em> Drucker tenía razón. Es: ¿qué tan bien administras <em>tu</em> conocimiento como recurso?</p>
        </div>

        ${quizBlock('q_m4l4', 'La tesis final de Drucker sobre el gerente es...', [
            {text: 'El gerente debe reducir costos sistemáticamente', correct: false},
            {text: 'El trabajo del gerente es hacer productivo el conocimiento — identificarlo, concentrarlo, renovarlo y convertirlo en valor para el cliente. Es el rol rector en la economía moderna', correct: true},
            {text: 'El gerente administra personas', correct: false},
            {text: 'El gerente controla el presupuesto', correct: false}
        ])}
        `
    });

    C.lessons.push({
        id: 'm4l5', module: 'Módulo 4 · Estrategia, riesgo y ejecución', tag: 'tag-quiz', tagLabel: 'PLAN DE 90 DÍAS',
        title: 'Tu plan Drucker de 90 días',
        subtitle: 'De la teoría a la ejecución — descarga el plan y llénalo',
        content: hero(heroGradients.synth, 'PLAN 90 DÍAS', 'Aplicación inmediata — descarga el plan') + `
        ${note('Drucker escribió un libro de 257 páginas para decir, en el fondo, una sola cosa: <em>decide qué oportunidades vas a explotar, compromete recursos, y hazlo</em>. Esta lección te da la herramienta para traducir todo el curso en un plan ejecutable en 90 días.')}

        
        ${videoLink('Cómo reinventar tu empresa en 90 Días — Plan de acción', 'f5qG5vqhRYU')}

        <div class="content-card">
            <h3>🗺️ Estructura del plan (basado en los 14 capítulos)</h3>
            <ol class="concept-list">
                <li><strong>Semanas 1-2:</strong> Diagnóstico ABC de productos, clientes y canales (plantillas M1). Identificar 3 A, 3 candidatos B y 3 candidatos a abandono.</li>
                <li><strong>Semanas 3-4:</strong> Aplicar el checklist "Ésta es nuestra empresa" con el equipo directivo. Escribir la "idea de empresa" en una frase.</li>
                <li><strong>Semanas 5-6:</strong> Entrevistas a 10 no-clientes. Documentar patrones. Identificar un "eslabón perdido".</li>
                <li><strong>Semanas 7-8:</strong> Mapa de "futuros ya ocurridos". Priorizar 1-3 tendencias con efecto en 2-5 años.</li>
                <li><strong>Semanas 9-10:</strong> Decisión formal de abandono (con responsable, presupuesto, fecha) de al menos 1 producto, 1 cliente y 1 actividad.</li>
                <li><strong>Semanas 11-12:</strong> Decisión de inversión (mismos 5 criterios: responsable, presupuesto, fecha, métrica, comunicación) en 1 ganapán de mañana.</li>
                <li><strong>Semana 13:</strong> Revisión con el equipo. Medir avance objetivo, no narrativa. Ajustar.</li>
            </ol>
        </div>

        <div class="content-card tip">
            <h3>📥 Plantilla 4 — Plan Drucker de 90 días</h3>
            <p>PDF imprimible con las 13 semanas, casillas de seguimiento, espacio para compromisos con responsable/fecha/métrica y hoja final de retrospectiva.</p>
            <p><a href="assets/plantillas/drucker-plan-90-dias.pdf" download class="btn btn-primary">⬇️ Descargar Plan de 90 días (.pdf)</a></p>
        </div>

        <div class="content-card">
            <h3>⚠️ Advertencia final de Drucker</h3>
            <blockquote class="book-quote">"Es mejor tomar decisiones erróneas y cumplirlas, que eludir el trabajo por considerarlo desagradable."<cite>— Cap. XII</cite></blockquote>
            <p>El peligro más grande después de este curso no es que tomes una mala decisión. Es que no tomes ninguna. La inacción disfrazada de análisis es el modo más común de fracaso gerencial.</p>
        </div>

        ${quizBlock('q_m4l5', '¿Cuál es el riesgo más grande después de terminar este curso?', [
            {text: 'Tomar una decisión equivocada', correct: false},
            {text: 'No tomar ninguna decisión — convertir todo en "análisis permanente" en lugar de comprometer recursos con fecha y responsable', correct: true},
            {text: 'Descargar demasiadas plantillas', correct: false},
            {text: 'Perder el certificado', correct: false}
        ])}
        `
    });

    // ==============================================================
    // EXAMEN FINAL
    // ==============================================================

    C.lessons.push({
        id: 'final_exam', module: 'Examen Final', tag: 'tag-exam', tagLabel: 'EXAMEN FINAL',
        title: 'Examen final integrador',
        subtitle: '10 preguntas · Necesitas 7 aciertos para el certificado',
        content: hero(heroGradients.exam, 'EXAMEN FINAL', '10 preguntas · 7 aciertos mínimos') + `
        <div class="content-card">
            <h3>📋 Instrucciones</h3>
            <ul class="concept-list">
                <li>Las 10 preguntas cubren los 4 módulos del curso.</li>
                <li>Necesitas <strong>7 aciertos</strong> para desbloquear el certificado.</li>
                <li>Puedes retomar el examen si no lo apruebas.</li>
                <li>Lee con calma — casi todas las preguntas tienen una opción que suena correcta pero no es la que Drucker defendería.</li>
            </ul>
        </div>

        ${finalQ('final_q1', '1. Según Drucker, los resultados y los recursos de una empresa...', [
            {text: 'Están dentro de la empresa', correct: false},
            {text: 'Están afuera — en el mercado, los clientes y el entorno. Adentro sólo hay costos y esfuerzo', correct: true},
            {text: 'Están en la contabilidad', correct: false},
            {text: 'Se miden en el organigrama', correct: false}
        ])}

        ${finalQ('final_q2', '2. ¿Cuál de las tres dimensiones de resultado puede ser <em>más</em> importante que el producto mismo?', [
            {text: 'El precio', correct: false},
            {text: 'El canal de distribución — porque los productos se sustituyen fácil pero los canales raramente; cambiarlo redefine la economía del negocio', correct: true},
            {text: 'El empaque', correct: false},
            {text: 'La marca', correct: false}
        ])}

        ${finalQ('final_q3', '3. "El ganapán de ayer" es un producto que...', [
            {text: 'Es el más rentable de la empresa', correct: false},
            {text: 'Ya pasó su mejor momento, está declinando, y sin embargo concentra el mayor esfuerzo gerencial por inercia', correct: true},
            {text: 'Acaba de lanzarse', correct: false},
            {text: 'Se vende poco pero con buen margen', correct: false}
        ])}

        ${finalQ('final_q4', '4. Según Drucker, lo que el cliente compra nunca es un producto, es...', [
            {text: 'Una marca prestigiosa', correct: false},
            {text: 'Una utilidad — lo que el producto hace por él: ahorro de tiempo, seguridad, ingreso, tranquilidad, estatus', correct: true},
            {text: 'Un precio bajo', correct: false},
            {text: 'Un envase bonito', correct: false}
        ])}

        ${finalQ('final_q5', '5. El "costo más productivo", según Drucker, es...', [
            {text: 'El costo variable', correct: false},
            {text: 'El costo de lo que no se hace — eliminar actividades que no producen resultado libera recursos sin afectar el ingreso', correct: true},
            {text: 'El costo de oportunidad', correct: false},
            {text: 'El costo de los insumos', correct: false}
        ])}

        ${finalQ('final_q6', '6. ¿Qué tipo de oportunidad cambia simultáneamente la empresa y el mercado?', [
            {text: 'Aditiva', correct: false},
            {text: 'Transformadora — redefine el negocio y crea un mercado nuevo (ejemplo: Haloid → Xerox)', correct: true},
            {text: 'Complementaria', correct: false},
            {text: 'Marginal', correct: false}
        ])}

        ${finalQ('final_q7', '7. ¿Cuál es el riesgo más crítico en la tipología de Drucker?', [
            {text: 'El riesgo financiero cotidiano', correct: false},
            {text: 'El riesgo que uno no puede permitirse <em>no</em> aceptar — no actuar destruye la empresa a plazo', correct: true},
            {text: 'El riesgo cambiario', correct: false},
            {text: 'El riesgo legal', correct: false}
        ])}

        ${finalQ('final_q8', '8. El "futuro que ya ha tenido lugar" se refiere a...', [
            {text: 'Predicciones basadas en modelos estadísticos sofisticados', correct: false},
            {text: 'Cambios decisivos ya ocurridos (demográficos, tecnológicos, culturales, regulatorios) cuyos efectos principales todavía no se han desplegado — observarlos es predicción segura', correct: true},
            {text: 'La intuición de ejecutivos experimentados', correct: false},
            {text: 'Reportes de consultoras internacionales', correct: false}
        ])}

        ${finalQ('final_q9', '9. Una decisión, según Drucker, sólo existe cuando...', [
            {text: 'Se aprueba en consejo', correct: false},
            {text: 'Se han comprometido recursos humanos y materiales para su ejecución — con responsable, presupuesto, fecha y métrica', correct: true},
            {text: 'Se publica en el plan anual', correct: false},
            {text: 'Todos los directivos la apoyan', correct: false}
        ])}

        ${finalQ('final_q10', '10. La tesis final de Drucker sobre el rol del gerente es...', [
            {text: 'Administrar personas', correct: false},
            {text: 'Hacer productivo el conocimiento — identificarlo, concentrarlo, renovarlo y convertirlo en valor para el cliente. El gerente es el rol rector en la economía moderna', correct: true},
            {text: 'Controlar el presupuesto', correct: false},
            {text: 'Cumplir con la regulación', correct: false}
        ])}
        `
    });

    // ==============================================================
    // CERTIFICADO
    // ==============================================================

    C.lessons.push({
        id: 'certificate', module: 'Certificado', tag: 'tag-certificate', tagLabel: 'CERTIFICADO',
        title: '🎓 Certificado de aprobación',
        subtitle: 'La Gerencia Efectiva según Peter F. Drucker — TRIKLES',
        content: `
        <div class="lesson-hero" style="background:${heroGradients.cert};min-height:200px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:30px;">
            <div>
                <div style="font-family:Georgia,serif;font-size:2em;font-weight:900;letter-spacing:2px;">CERTIFICADO TRIKLES</div>
                <div style="font-size:1.05em;margin-top:8px;opacity:0.95;font-style:italic;">La Gerencia Efectiva · Peter F. Drucker</div>
            </div>
        </div>

        <div class="content-card tip">
            <h3>🏆 ¡Felicidades!</h3>
            <p>Has completado el curso y aprobado el examen final. Tu certificado está listo para descarga e impresión. Lleva tu nombre, la firma digital del instructor y la fecha de aprobación.</p>
            <p>Compártelo en LinkedIn con el hashtag <strong>#TRIKLES #Drucker</strong>.</p>
        </div>

        <div class="content-card">
            <h3>📚 Lecturas recomendadas para continuar</h3>
            <ul class="concept-list">
                <li><em>El Ejecutivo Eficaz</em> (The Effective Executive, 1966) — cómo ser personalmente productivo como gerente.</li>
                <li><em>La Gerencia de Empresas</em> (The Practice of Management, 1954) — el primer tratado sistemático de Drucker.</li>
                <li><em>La Innovación y el Empresariado Innovador</em> (1985) — sistematización de cómo generar oportunidades.</li>
                <li><em>Administración: Tareas, Responsabilidades, Prácticas</em> (Management: Tasks, Responsibilities, Practices, 1973) — el tratado enciclopédico.</li>
            </ul>
        </div>

        <div class="content-card">
            <h3>💬 Una palabra final del instructor</h3>
            <p>Drucker no escribía para impresionar. Escribía para que los gerentes trabajaran mejor. Si terminas el curso y no cambias <em>nada</em> de tu rutina operativa, habré fallado como instructor y el curso habrá sido una bonita lectura sin consecuencias. Por eso insisto en el plan de 90 días: la prueba real del curso no es el certificado. Es el cambio verificable en tu empresa dentro de tres meses.</p>
            <p>— LADE Germán Solís Muñoz</p>
        </div>
        `
    });

})();

// Registrar en el catálogo global
window.TRIKLES_COURSES = window.TRIKLES_COURSES || {};
window.TRIKLES_COURSES['gerencia-efectiva'] = COURSE_GERENCIA_EFECTIVA;
