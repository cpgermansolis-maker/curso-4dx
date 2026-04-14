// ============================================
// CURSO 4DX - Las 4 Disciplinas de la Ejecucion
// Contenido del curso aplicado a Gerencia de Administracion
// Instructor: LADE German Solis Munoz - TRIKLES
// ============================================

const COURSE_4DX = {
    id: '4dx',
    meta: {
        title: 'Las 4 Disciplinas de la Ejecución',
        subtitle: 'Aplicadas a Gerencia de Administración',
        author: 'Chris McChesney, Sean Covey y Jim Huling',
        cover: 'assets/covers/4dx-cover.jpg',
        description: 'El método probado por FranklinCovey para convertir cualquier estrategia en resultados reales. Aprende a enfocar a tu equipo en las Metas Crucialmente Importantes, identificar las Medidas de Predicción, llevar un Tablero de Resultados convincente y crear una Cadencia de Rendición de Cuentas semanal.',
        descripcionCorta: 'Domina el modelo 4DX para ejecutar estrategias en tu gerencia de administración',
        category: 'Ejecución estratégica',
        lessonsCount: 8,
        duration: '2-3 horas',
        level: 'Intermedio',
        active: true,
        tags: ['ejecución', 'estrategia', 'gerencia', 'administración']
    },

    // Requisitos de aprobación por lección (IDs de quizzes)
    lessonRequirements: {
        0: ['quiz_intro'],
        1: ['quiz_d1a', 'quiz_d1b'],
        2: ['quiz_d1p1', 'quiz_d1p2'],
        3: ['quiz_d2a', 'quiz_d2b'],
        4: ['quiz_d3a', 'quiz_d3b'],
        5: ['quiz_d4a', 'quiz_d4b'],
        6: ['final_q1','final_q2','final_q3','final_q4','final_q5','final_q6','final_q7','final_q8','final_q9','final_q10'],
        7: []
    },

    examPassScore: 7,

    certificate: {
        courseNameForCert: 'Las 4 Disciplinas de la Ejecución<br>aplicadas a la Gerencia de Administración',
        description: 'Habiendo demostrado dominio de los conceptos de Meta Crucialmente Importante (MCI), Medidas de Predicción, Tablero de Resultados y Cadencia de Rendición de Cuentas, según el modelo de McChesney, Covey y Huling.'
    },

    // Lecciones del curso
    lessons: [
    {
        id: 'intro', module: 'Introducción', tag: 'tag-intro', tagLabel: 'INTRODUCCION',
        title: 'El Problema Real de la Ejecución',
        subtitle: 'Por qué las estrategias fracasan y que puedes hacer al respecto',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80')">
            <div class="hero-caption">Entre la estrategia y la ejecución hay un abismo: las 4DX son el puente</div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Nota del instructor - LADE Germán Solís Muñoz</div>
                <div class="instructor-note-text">En mis años como especialista en procesos y prevención de riesgos, he visto decenas de estrategias brillantes morir en la ejecución. Este curso te dará las herramientas probadas para que tu gerencia SI ejecute lo que planea.</div>
            </div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128214;</span><div>
                <h3>La historia de Jim Dixon</h3>
                <p>Jim era gerente de un supermercado con el peor desempeno de 250 tiendas. Cada día empujaba la misma roca cuesta arriba: carritos desordenados, anaqueles vacios, basura en el estacionamiento. Trabajaba sin descanso, sin vacaciones, y nada mejoraba.</p>
                <p><strong>Suena familiar?</strong> Muchos gerentes de administración viven atrapados en el "torbellino" del día a día: pagos urgentes, requisiciones, quejas, reportes... sin avanzar en lo verdaderamente importante.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>&#9889; El dato que lo cambia todo</h3>
            <p>Una encuesta internacional revelo que solo <span class="highlight">1 de cada 7 empleados</span> puede citar los objetivos más importantes de su organización. El 15% ni siquiera podía nombrar UNA meta.</p>
            <p>Esto significa que si tu gerencia tiene 14 personas, estadisticamente solo 2 saben cual es la meta principal.</p>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Concepto clave: El Torbellino</h3>
            <p>El <strong>torbellino</strong> es la enorme cantidad de energía necesaria solo para mantener las operaciones del día a día. No es malo, pero si lo dejas, consumira toda tu atención y no quedará nada para lo estrategico.</p>
            <svg class="svg-illustration" viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
                <!-- Panel izquierdo: Torbellino con iconos dispersos -->
                <g>
                    <text x="110" y="25" text-anchor="middle" fill="#455a64" font-weight="700" font-size="13" letter-spacing="1.5">EL TORBELLINO</text>
                    <text x="110" y="43" text-anchor="middle" fill="#90a4ae" font-size="10" font-style="italic">operaciones del día a dia</text>

                    <!-- Icono Email/Pagos -->
                    <g transform="translate(40,70)">
                        <rect width="36" height="26" rx="3" fill="none" stroke="#607d8b" stroke-width="2"/>
                        <path d="M2 2 L18 16 L34 2" fill="none" stroke="#607d8b" stroke-width="2"/>
                        <text x="18" y="42" text-anchor="middle" font-size="9" fill="#607d8b">Pagos</text>
                    </g>

                    <!-- Icono Calendario/Juntas -->
                    <g transform="translate(110,85) rotate(-8 16 16)">
                        <rect width="32" height="32" rx="3" fill="none" stroke="#607d8b" stroke-width="2"/>
                        <line x1="0" y1="10" x2="32" y2="10" stroke="#607d8b" stroke-width="2"/>
                        <line x1="8" y1="0" x2="8" y2="6" stroke="#607d8b" stroke-width="2"/>
                        <line x1="24" y1="0" x2="24" y2="6" stroke="#607d8b" stroke-width="2"/>
                        <text x="16" y="48" text-anchor="middle" font-size="9" fill="#607d8b">Juntas</text>
                    </g>

                    <!-- Icono Reloj/Urgencias -->
                    <g transform="translate(170,75) rotate(12 15 15)">
                        <circle cx="15" cy="15" r="15" fill="none" stroke="#607d8b" stroke-width="2"/>
                        <line x1="15" y1="15" x2="15" y2="6" stroke="#607d8b" stroke-width="2"/>
                        <line x1="15" y1="15" x2="21" y2="15" stroke="#607d8b" stroke-width="2"/>
                        <text x="15" y="48" text-anchor="middle" font-size="9" fill="#607d8b">Urgencias</text>
                    </g>

                    <!-- Icono Burbuja/Quejas -->
                    <g transform="translate(50,140) rotate(-5 17 15)">
                        <path d="M5 5 L30 5 L30 20 L20 20 L15 25 L15 20 L5 20 Z" fill="none" stroke="#607d8b" stroke-width="2"/>
                        <circle cx="12" cy="12" r="1.5" fill="#607d8b"/>
                        <circle cx="17" cy="12" r="1.5" fill="#607d8b"/>
                        <circle cx="22" cy="12" r="1.5" fill="#607d8b"/>
                        <text x="17" y="40" text-anchor="middle" font-size="9" fill="#607d8b">Quejas</text>
                    </g>

                    <!-- Icono Alerta -->
                    <g transform="translate(130,150) rotate(10 15 15)">
                        <path d="M15 0 L30 25 L0 25 Z" fill="none" stroke="#ff8f00" stroke-width="2"/>
                        <text x="15" y="20" text-anchor="middle" font-size="14" fill="#ff8f00" font-weight="700">!</text>
                        <text x="15" y="40" text-anchor="middle" font-size="9" fill="#607d8b">Alertas</text>
                    </g>

                    <!-- Icono Reporte -->
                    <g transform="translate(185,145) rotate(-12 14 11)">
                        <rect width="28" height="22" rx="2" fill="none" stroke="#607d8b" stroke-width="2"/>
                        <line x1="4" y1="8" x2="24" y2="8" stroke="#607d8b" stroke-width="1.5"/>
                        <line x1="4" y1="14" x2="24" y2="14" stroke="#607d8b" stroke-width="1.5"/>
                        <text x="14" y="38" text-anchor="middle" font-size="9" fill="#607d8b">Reportes</text>
                    </g>
                </g>

                <!-- Centro: Flecha 4DX -->
                <g transform="translate(240,110)">
                    <text x="47" y="-10" text-anchor="middle" fill="#1a237e" font-weight="800" font-size="15" letter-spacing="1">4DX</text>
                    <path d="M0 8 L75 8 L75 0 L100 15 L75 30 L75 22 L0 22 Z" fill="#1a237e"/>
                    <text x="47" y="50" text-anchor="middle" fill="#455a64" font-size="10" font-style="italic">enfoque</text>
                </g>

                <!-- Panel derecho: Target MCI -->
                <g transform="translate(475,125)">
                    <text y="-75" text-anchor="middle" fill="#1a237e" font-weight="800" font-size="14" letter-spacing="2">META MCI</text>
                    <circle r="55" fill="none" stroke="#e3f2fd" stroke-width="4"/>
                    <circle r="40" fill="none" stroke="#90caf9" stroke-width="4"/>
                    <circle r="25" fill="none" stroke="#1a237e" stroke-width="4"/>
                    <circle r="10" fill="#ff8f00"/>
                    <circle r="4" fill="#fff"/>
                    <text y="85" text-anchor="middle" fill="#455a64" font-size="10" font-style="italic">Crucialmente Importante</text>
                </g>
            </svg>
            <p>Piensa en tu última semana: cuanto tiempo invertiste en apagar fuegos vs. avanzar en algo realmente importante?</p>
        </div>

        <div class="content-card">
            <h3>&#128640; Dos tipos de estrategia</h3>
            <p>Según el libro, hay dos tipos fundamentales:</p>
            <ul class="concept-list">
                <li><strong>Poder de la firma:</strong> Las ejecutas con dinero y autoridad (comprar un software, contratar personal, cambiar proveedores).</li>
                <li><strong>Cambio de conducta:</strong> Requieren que las PERSONAS hagan algo DIFERENTE. Estas son las difíciles y las que necesitan las 4DX.</li>
            </ul>
        </div>

        <div class="quiz-container" id="quiz_intro">
            <div class="quiz-q">&#127917; Pregunta rápida: Cuál es la razon principal por la que fracasan las estrategias?</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_intro', this, false)">Falta de presupuesto</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_intro', this, true)">No se logra que las personas cambien su comportamiento</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_intro', this, false)">Los competidores son mejores</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_intro', this, false)">La estrategia está mal disenada</button>
            <div class="quiz-feedback" id="quiz_intro_fb"></div>
        </div>

        <div class="content-card">
            <h3>&#127919; Las 4 Disciplinas: Tu mapa de ruta</h3>
            <div class="steps-visual">
                <div class="step-circle" style="background:var(--blue)">D1</div><div class="step-line"></div>
                <div class="step-circle" style="background:var(--orange)">D2</div><div class="step-line"></div>
                <div class="step-circle" style="background:var(--green)">D3</div><div class="step-line"></div>
                <div class="step-circle" style="background:var(--purple)">D4</div>
            </div>
            <ol class="concept-list">
                <li><strong>Enfocarse en lo Crucialmente Importante</strong> - Definir 1-2 metas que realmente importen</li>
                <li><strong>Actuar sobre Medidas de Predicción</strong> - Identificar las acciones que mueven la aguja</li>
                <li><strong>Llevar un Tablero de Resultados</strong> - Qué todos sepan si van ganando o perdiendo</li>
                <li><strong>Crear una Cadencia de Rendición de Cuentas</strong> - Reuniones semanales de compromiso</li>
            </ol>
        </div>
        `
    },
    {
        id: 'd1_concept', module: 'Disciplina 1', tag: 'tag-d1', tagLabel: 'DISCIPLINA 1',
        title: 'Enfocarse en lo Crucialmente Importante',
        subtitle: 'La Meta Crucialmente Importante (MCI)',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=900&q=80')">
            <div class="hero-caption">Una meta clara, un equipo enfocado: así se logra lo imposible</div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Reflexion del instructor</div>
                <div class="instructor-note-text">En mi experiencia con gerencias de administración, el error número uno es querer mejorar TODO al mismo tiempo. Enfocate en UNA meta que cambie el juego. El resto vendrá después.</div>
            </div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#127765;</span><div>
                <h3>Kennedy y la Luna</h3>
                <p>En 1961, el presidente Kennedy dijo: "Pondremos a un hombre en la Luna y lo traeremos de regreso antes del final de la decada". Con esa UNICA meta clara, la NASA logro lo imposible. La rendición de cuentas y el compromiso se dispararon.</p>
                <p><strong>Lección:</strong> Cuándo un equipo pasa de tener docenas de metas "ojala se pueda" a 1-2 metas "pase lo que pase", la moral y el compromiso se disparan.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>&#128270; Qué es una MCI?</h3>
            <p>La <strong>MCI (Meta Crucialmente Importante)</strong> es la meta cuyo logro lo cambia todo. Sí todas las demas metas se cumplieran pero está no, nada de lo otro importaria demasiado.</p>
            <svg class="svg-illustration" viewBox="0 0 500 140">
                <rect x="10" y="40" width="480" height="60" rx="30" fill="#e8eaf6" stroke="#1a237e" stroke-width="2"/>
                <text x="60" y="75" fill="#1a237e" font-weight="800" font-size="20">De</text>
                <rect x="90" y="55" width="80" height="30" rx="6" fill="#1a237e"/>
                <text x="130" y="75" text-anchor="middle" fill="white" font-weight="800" font-size="18">X</text>
                <text x="190" y="75" fill="#1a237e" font-weight="800" font-size="20">a</text>
                <rect x="215" y="55" width="80" height="30" rx="6" fill="#2e7d32"/>
                <text x="255" y="75" text-anchor="middle" fill="white" font-weight="800" font-size="18">Y</text>
                <text x="315" y="75" fill="#1a237e" font-weight="800" font-size="20">para</text>
                <rect x="375" y="55" width="100" height="30" rx="6" fill="#ff8f00"/>
                <text x="425" y="75" text-anchor="middle" fill="white" font-weight="700" font-size="13">[fecha]</text>
                <text x="250" y="125" text-anchor="middle" font-size="13" fill="#666" font-style="italic">La formula mágica de toda MCI</text>
            </svg>
            <p>Ejemplo: "Reducir el tiempo de cierre contable <strong>de 15 días a 5 dias</strong> para el <strong>31 de diciembre de 2026</strong>"</p>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Las 4 Reglas del Enfoque</h3>
            <ul class="concept-list">
                <li><strong>Regla 1:</strong> Ningun equipo se enfoca en más de 2 MCIs a la vez (idealmente 1).</li>
                <li><strong>Regla 2:</strong> Las batallas elegidas deben ganar la guerra (alineación con la MCI organizaciónal).</li>
                <li><strong>Regla 3:</strong> Los lideres senior pueden vetar, pero no dictar (los equipos participan en definir su MCI).</li>
                <li><strong>Regla 4:</strong> Todas las MCIs deben formularse con "de X a Y para tal fecha" y tener línea de meta clara.</li>
            </ul>
        </div>

        <div class="content-card warning">
            <h3>&#9888;&#65039; Trampa común: La fabula de las avellanas</h3>
            <p>Un niño metio su maño en un tarro de avellanas e intento tomar todas las que pudo. Su puno era tan grande que no podía sacar la mano. Al no soltar ninguna, no obtuvo nada.</p>
            <p><strong>Moraleja:</strong> Sí intentas hacer 10 cosas a la vez, no lograras ninguna con excelencia. Steve Jobs decia: "Estoy tan orgulloso de lo que NO hacemos como de lo que hacemos".</p>
        </div>

        <div class="content-card admin">
            <h3>&#127970; Aplicado a TU Gerencia de Administración</h3>
            <p>Piensa: de todas las cosas que podrías mejorar (presupuestos, compras, RH, servicios generales, pagos, contrataciones...), cual es la UNA qué más impactaria?</p>
            <p>Ejemplos de MCIs para administración:</p>
            <ul class="concept-list">
                <li>"Reducir el gasto operativo de $2.5M a $2.1M para el 31 de diciembre"</li>
                <li>"Aumentar el cumplimiento de pago a proveedores en plazo de 62% a 95% para septiembre"</li>
                <li>"Reducir la rotación de personal administrativo de 35% a 15% anual"</li>
            </ul>
        </div>

        <div class="quiz-container" id="quiz_d1a">
            <div class="quiz-q">&#127917; Cuál de estas es una MCI correctamente formulada?</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_d1a', this, false)">Mejorar los procesos administrativos</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d1a', this, false)">Ser la mejor gerencia de administración del pais</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d1a', this, true)">Reducir el tiempo promedio de pago a proveedores de 45 a 15 días para el 30 de junio</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d1a', this, false)">Trabajar más duro en reducir costos</button>
            <div class="quiz-feedback" id="quiz_d1a_fb"></div>
        </div>

        <div class="quiz-container" id="quiz_d1b">
            <div class="quiz-q">&#127917; Cuantas MCIs debe tener un equipo como máximo?</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_d1b', this, false)">5 a 10 para cubrir todas las áreas</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d1b', this, true)">1 a 2 máximo, idealmente 1</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d1b', this, false)">Las que el jefe decida</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d1b', this, false)">3 a 5 es lo optimo</button>
            <div class="quiz-feedback" id="quiz_d1b_fb"></div>
        </div>
        `
    },
    {
        id: 'd1_practice', module: 'Disciplina 1', tag: 'tag-d1', tagLabel: 'PRACTICA D1',
        title: 'Taller: Construye tu MCI',
        subtitle: 'Ejercicio práctico para definir la meta de tu gerencia',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1552581234-26160f608093?w=900&q=80')">
            <div class="hero-caption">Taller práctico: construyamos juntos la MCI de tu gerencia</div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Instrucciónes del instructor</div>
                <div class="instructor-note-text">Este es un taller práctico. Te recomiendo tener papel y lapiz a la mano. Al final tendras un borrador de tu propia MCI que podrás validar con tu equipo.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#128736;&#65039; Ejercicio: El filtro de la MCI</h3>
            <p>Vamos a aplicar las 3 preguntas de descubrimiento del libro para encontrar la MCI de tu gerencia.</p>
        </div>

        <div class="scenario-box">
            <h4>&#129300; Pregunta 1 de descubrimiento</h4>
            <p>"Qué área del desempeno del equipo queremos mejorar MAS, bajo el entendido de que lo demas funcióna, para alcanzar la MCI de la organización?"</p>
        </div>

        <div class="quiz-container" id="quiz_d1p1">
            <div class="quiz-q">Para la Gerencia de Administración, cual seria la mejor forma de abordar está pregunta?</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_d1p1', this, false)">Hacer una lista de TODOS los problemas y atacarlos simultaneamente</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d1p1', this, true)">Identificar el área qué más impacta la meta general de la organización y enfocarse en ella</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d1p1', this, false)">Preguntar al director que quiere que hagamos</button>
            <div class="quiz-feedback" id="quiz_d1p1_fb"></div>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Piensa en el QUE, no en el COMO</h3>
            <p>Uno de los errores más comunes es saltar al COMO antes de definir el QUE. Primero define la meta (reducir costos), luego las acciones (el como viene en la Disciplina 2).</p>
        </div>

        <div class="scenario-box">
            <h4>&#127916; Escenario: La Gerencia de Administración de Empresa XYZ</h4>
            <p>La empresa tiene como meta general "Incrementar la rentabilidad de 12% a 18% para diciembre". La gerencia de administración tiene estos problemas:</p>
            <ul class="concept-list">
                <li>Los costos operativos han crecido 20% en 2 años</li>
                <li>El 40% de los pagos a proveedores se hacen fuera de plazo</li>
                <li>El proceso de compras tarda en promedio 25 dias</li>
                <li>La rotación de personal administrativo es del 30%</li>
            </ul>
        </div>

        <div class="quiz-container" id="quiz_d1p2">
            <div class="quiz-q">Considerando que la meta de la empresa es incrementar rentabilidad, cual seria la MCI más alineada para está gerencia?</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_d1p2', this, true)">Reducir costos operativos de $3.2M a $2.6M para el 31 de diciembre</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d1p2', this, false)">Reducir la rotación de personal de 30% a 10%</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d1p2', this, false)">Mejorar todos los indicadores un 10%</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d1p2', this, false)">Implementar un nuevo ERP</button>
            <div class="quiz-feedback" id="quiz_d1p2_fb"></div>
        </div>

        <div class="content-card">
            <h3>&#128203; Checklist rápido de tu MCI</h3>
            <div id="mciChecklist">
                <label style="display:block;padding:8px 0;cursor:pointer"><input type="checkbox" onchange="checkMCI()"> Tiene formato "de X a Y para [fecha]"</label>
                <label style="display:block;padding:8px 0;cursor:pointer"><input type="checkbox" onchange="checkMCI()"> Esta alineada con la meta de la organización</label>
                <label style="display:block;padding:8px 0;cursor:pointer"><input type="checkbox" onchange="checkMCI()"> El equipo participo en definirla</label>
                <label style="display:block;padding:8px 0;cursor:pointer"><input type="checkbox" onchange="checkMCI()"> Requiere cambio de conducta (no solo "poder de la firma")</label>
                <label style="display:block;padding:8px 0;cursor:pointer"><input type="checkbox" onchange="checkMCI()"> Es una sola meta (máximo 2)</label>
            </div>
            <div id="mciResult" style="margin-top:10px;padding:12px;border-radius:8px;display:none;font-weight:600;"></div>
        </div>
        `
    },
    {
        id: 'd2_concept', module: 'Disciplina 2', tag: 'tag-d2', tagLabel: 'DISCIPLINA 2',
        title: 'Actuar sobre las Medidas de Predicción',
        subtitle: 'La diferencia entre medir resultados y medir las acciones que los producen',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80')">
            <div class="hero-caption">Deja de mirar el espejo retrovisor: enfócate en lo que mueve la aguja</div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Reflexion del instructor</div>
                <div class="instructor-note-text">Cómo especialista en análisis y prevención de riesgos, te puedo asegurar qué está disciplina es la más poderosa. Cambiar el enfoque de "que paso" a "que hacer para que pase" es un salto mental enorme.</div>
            </div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128663;</span><div>
                <h3>La analogia del auto</h3>
                <p>No puedes controlar cada cuanto se descompone tu auto (<strong>medida histórica</strong>), pero SI puedes controlar cada cuanto le das mantenimiento (<strong>medida de predicción</strong>). Mientras más actues sobre lo segúndo, menos problemas tendras.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>&#128200; Históricas vs. Predicción: La diferencia crucial</h3>
            <svg class="svg-illustration" viewBox="0 0 500 180">
                <g>
                    <rect x="10" y="20" width="220" height="140" fill="#ffebee" stroke="#c62828" stroke-width="2" rx="10"/>
                    <text x="120" y="45" text-anchor="middle" fill="#c62828" font-weight="800" font-size="14">MEDIDA HISTORICA</text>
                    <text x="120" y="70" text-anchor="middle" font-size="11" fill="#555">Gasto total del trimestre</text>
                    <circle cx="60" cy="110" r="22" fill="#c62828"/>
                    <text x="60" y="116" text-anchor="middle" fill="white" font-size="20">&#128202;</text>
                    <text x="140" y="105" font-size="10" fill="#666">Mide el resultado</text>
                    <text x="140" y="120" font-size="10" fill="#666">Ya no puedes cambiarlo</text>
                    <text x="140" y="135" font-size="10" fill="#666">Es historia</text>
                </g>
                <g>
                    <rect x="270" y="20" width="220" height="140" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2" rx="10"/>
                    <text x="380" y="45" text-anchor="middle" fill="#2e7d32" font-weight="800" font-size="14">MEDIDA DE PREDICCION</text>
                    <text x="380" y="70" text-anchor="middle" font-size="11" fill="#555">Revisiones de gastos/semana</text>
                    <circle cx="320" cy="110" r="22" fill="#2e7d32"/>
                    <text x="320" y="116" text-anchor="middle" fill="white" font-size="20">&#9889;</text>
                    <text x="400" y="105" font-size="10" fill="#666">Mide la acción</text>
                    <text x="400" y="120" font-size="10" fill="#666">Puedes influenciarla</text>
                    <text x="400" y="135" font-size="10" fill="#666">Predice el resultado</text>
                </g>
            </svg>
            <table style="width:100%;border-collapse:collapse;margin:12px 0;">
                <tr style="background:#e8eaf6;"><th style="padding:12px;text-align:left;border:1px solid #ddd;">Medida Histórica</th><th style="padding:12px;text-align:left;border:1px solid #ddd;">Medida de Predicción</th></tr>
                <tr><td style="padding:10px;border:1px solid #eee;">Mide el RESULTADO</td><td style="padding:10px;border:1px solid #eee;">Mide la ACCION que produce el resultado</td></tr>
                <tr><td style="padding:10px;border:1px solid #eee;">Se obtiene DESPUES (es historia)</td><td style="padding:10px;border:1px solid #eee;">Se mide ANTES o DURANTE</td></tr>
                <tr><td style="padding:10px;border:1px solid #eee;">Dificil de influenciar directamente</td><td style="padding:10px;border:1px solid #eee;">El equipo puede influir en ella</td></tr>
                <tr><td style="padding:10px;border:1px solid #eee;">Ej: Gasto total del trimestre</td><td style="padding:10px;border:1px solid #eee;">Ej: Revisiones de gastos por semana</td></tr>
            </table>
        </div>

        <div class="content-card warning">
            <h3>&#9888;&#65039; La trampa del espejo retrovisor</h3>
            <p>W. Edwards Deming decia: "Dirigir una organización solo con resultados económicos es como manejar un auto mirando solo el espejo retrovisor". La mayoria de los lideres se obsesiónan con las medidas históricas porque son fáciles de obtener, pero cuando las tienen, ya es demasiado tarde.</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128167;</span><div>
                <h3>El caso de la planta de agua</h3>
                <p>Una embotelladora tenia la MCI de aumentar producción de 175 a 185 millones de litros. Al principio, los lideres propusieron como medida de predicción "la producción mensual de agua"... pero eso seguia siendo una medida histórica!</p>
                <p>Después de reflexionar, descubrieron las verdaderas medidas de predicción: <strong>aumentar turnos con personal completo de 80% a 95%</strong> y <strong>cumplimiento de mantenimiento preventivo de 72% a 100%</strong>. Resultado: la producción crecio mucho más de lo esperado.</p>
            </div></div>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Las 2 caracteristicas de una buena medida de predicción</h3>
            <ol class="concept-list">
                <li><strong>PREDICTIVA:</strong> Sí la medida cambia, la meta histórica también cambiara. Hay relación causa-efecto.</li>
                <li><strong>INFLUENCIABLE:</strong> El equipo puede actuar directamente sobre ella, sin depender de otros.</li>
            </ol>
            <p style="margin-top:10px">&#9888;&#65039; AMBAS deben cumplirse. La lluvia predice la cosecha, pero no es influenciable. Un reporte mensual es influenciable, pero no predice resultados.</p>
        </div>

        <div class="quiz-container" id="quiz_d2a">
            <div class="quiz-q">&#127917; Tu MCI es "Reducir costos operativos de $3.2M a $2.6M". Cuál es una BUENA medida de predicción?</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_d2a', this, false)">Gasto mensual total (es la misma meta pero mensual)</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d2a', this, false)">Inflación del país (predice costos pero no es influenciable)</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d2a', this, true)">Número de auditorias de gastos por partida realizadas por semana</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d2a', this, false)">Satisfacción de los proveedores</button>
            <div class="quiz-feedback" id="quiz_d2a_fb"></div>
        </div>

        <div class="content-card admin">
            <h3>&#127970; Medidas de predicción para tu Gerencia</h3>
            <ul class="concept-list">
                <li><strong>Compras:</strong> Cotizaciones comparativas realizadas por cada solicitud de compra</li>
                <li><strong>Presupuesto:</strong> Revisiones de partidas presupuestarias realizadas por semana</li>
                <li><strong>Proveedores:</strong> Evaluaciónes de desempeno de proveedores completadas por mes</li>
                <li><strong>RH:</strong> Entrevistas de clima laboral realizadas por semana</li>
                <li><strong>Servicios:</strong> Inspecciónes preventivas completadas según calendario</li>
            </ul>
        </div>

        <div class="quiz-container" id="quiz_d2b">
            <div class="quiz-q">&#127917; "Producción mensual de agua" como medida de predicción de "producción anual de agua" es...</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_d2b', this, true)">Incorrecta: sigue siendo una medida histórica, solo en menor escala</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d2b', this, false)">Correcta: si cumples la mensual, cumples la anual</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d2b', this, false)">Depende del contexto de la empresa</button>
            <div class="quiz-feedback" id="quiz_d2b_fb"></div>
        </div>
        `
    },
    {
        id: 'd3_concept', module: 'Disciplina 3', tag: 'tag-d3', tagLabel: 'DISCIPLINA 3',
        title: 'Llevar un Tablero de Resultados Convincente',
        subtitle: 'Las personas juegan diferente cuando se lleva la puntuación',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80')">
            <div class="hero-caption">Un tablero visible convierte el trabajo en un juego que todos quieren ganar</div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Reflexion del instructor</div>
                <div class="instructor-note-text">He visto equipos transformarse en semanas solo por colocar un tablero visible en la pared. La psicologia de llevar la puntuación es real: activa la energía competitiva sana del equipo.</div>
            </div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#9917;</span><div>
                <h3>El partido sin marcador</h3>
                <p>Imagina un partido de futbol sin marcador. Los jugadores no sabrian si van ganando o perdiendo. Su energía y compromiso disminuirian. Ahora imagina que pones un marcador gigante... todo cambia! Las personas juegan DIFERENTE cuando se lleva la puntuación.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>&#128202; Tablero de entrenadores vs. Tablero de jugadores</h3>
            <p>Hay una diferencia importante:</p>
            <ul class="concept-list">
                <li><strong>Tablero de entrenadores:</strong> Complejo, con muchos datos, solo lo entienden los lideres. Piensa en esos reportes de 50 páginas que nadie lee.</li>
                <li><strong>Tablero de jugadores:</strong> Simple, visual, y en 5 segundos cualquiera sabe si va ganando o perdiendo. <span class="highlight">ESTE es el que necesitas!</span></li>
            </ul>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Las 4 reglas del tablero convincente</h3>
            <ol class="concept-list">
                <li><strong>Debe ser simple:</strong> Sí requiere explicación, es demasiado complejo.</li>
                <li><strong>Debe ser visible:</strong> Todos deben poder verlo todo el tiempo (no escondido en un correo).</li>
                <li><strong>Debe mostrar medidas históricas Y de predicción:</strong> Ambas en un solo vistazo.</li>
                <li><strong>Debe indicar si se está ganando o perdiendo:</strong> Al instante, sin ambiguedad.</li>
            </ol>
        </div>

        <div class="quiz-container" id="quiz_d3a">
            <div class="quiz-q">&#127917; Cuál de estos es un "tablero de jugadores"?</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_d3a', this, false)">Un reporte Excel de 15 hojas con todos los KPIs del área</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d3a', this, false)">Un dashboard que solo puede ver el gerente en su computadora</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d3a', this, true)">Una gráfica simple en la pared donde todos ven al instante si la meta de costos va bien o mal</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d3a', this, false)">El reporte mensual que se envia por correo al director</button>
            <div class="quiz-feedback" id="quiz_d3a_fb"></div>
        </div>

        <div class="content-card admin">
            <h3>&#127970; Tu tablero en la Gerencia de Administración</h3>
            <p>Un buen tablero para tu gerencia podria incluir:</p>
            <div style="background:#f5f5f5;border-radius:10px;padding:16px;margin:12px 0;font-family:monospace;font-size:0.9em;">
                <div style="text-align:center;font-weight:700;margin-bottom:10px;">TABLERO MCI - GERENCIA DE ADMINISTRACION</div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
                    <div style="background:white;padding:12px;border-radius:8px;border-left:4px solid var(--blue);">
                        <div style="font-size:0.8em;color:#999;">MCI: Costos Operativos</div>
                        <div style="font-size:1.5em;font-weight:800;">$2.85M</div>
                        <div style="font-size:0.8em;">Meta: $2.6M &#128308;</div>
                    </div>
                    <div style="background:white;padding:12px;border-radius:8px;border-left:4px solid var(--orange);">
                        <div style="font-size:0.8em;color:#999;">Auditorias/semana</div>
                        <div style="font-size:1.5em;font-weight:800;">4 de 5</div>
                        <div style="font-size:0.8em;">Meta: 5/semana &#128993;</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#129489;&#8205;&#127912; El efecto motivador</h3>
            <p>Cuándo el equipo DISEÑA su propio tablero (no se lo impone el jefe), el compromiso se multiplica. El tablero pasa de ser una herramienta de control a ser un simbolo de orgullo del equipo.</p>
            <p>Recuerda: <span class="highlight">El tablero debe actualizarse al menos semanalmente</span>. Un tablero desactualizado es peor que no tener tablero.</p>
        </div>

        <div class="quiz-container" id="quiz_d3b">
            <div class="quiz-q">&#127917; Por qué es importante que el EQUIPO diseñe el tablero y no solo el lider?</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_d3b', this, false)">Porque el lider no sabe de diseño gráfico</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d3b', this, true)">Porque sin participación no hay compromiso - el equipo se apropia del proceso</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d3b', this, false)">Para ahorrar tiempo del lider</button>
            <div class="quiz-feedback" id="quiz_d3b_fb"></div>
        </div>
        `
    },
    {
        id: 'd4_concept', module: 'Disciplina 4', tag: 'tag-d4', tagLabel: 'DISCIPLINA 4',
        title: 'Cadencia de Rendición de Cuentas',
        subtitle: 'La sesión semanal de MCI que lo cambia todo',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80')">
            <div class="hero-caption">20 minutos a la semana que cambian el destino de cualquier proyecto</div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Consejo del instructor</div>
                <div class="instructor-note-text">Esta es la disciplina más difícil de mantener: muchos lideres la abandonan después de 2 o 3 semanas cuando el torbellino aprieta. Sí logras sostenerla 8 semanas seguidas, se vuelve hábito y tu cultura cambia para siempre.</div>
            </div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128188;</span><div>
                <h3>El caso de Susan y su equipo de hotel</h3>
                <p>Susan lideraba un equipo de ventas en un hotel Marriott. Su MCI: aumentar ingresos por reuniones corporativas de $22M a $31M. Cada lunes, en 20 minutos, su equipo hacia 3 cosas: reportar compromisos de la semana anterior, revisar el tablero, y hacer nuevos compromisos para la semana.</p>
                <p>Resultado: superaron la meta con creces. Pero lo más valioso fue la CULTURA que crearon.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>&#128337; La Sesión de MCI: Anatomia perfecta</h3>
            <p>Dura <strong>20-30 minutos máximo</strong>. Tiene exactamente 3 partes:</p>
            <div style="display:grid;gap:10px;margin:12px 0;">
                <div style="background:#e8eaf6;padding:14px;border-radius:8px;border-left:4px solid var(--purple);">
                    <strong>1. Rendir cuentas:</strong> Cada miembro reporta si cumplio o no sus compromisos de la semana pasada.
                </div>
                <div style="background:#f3e5f5;padding:14px;border-radius:8px;border-left:4px solid var(--purple);">
                    <strong>2. Revisar el tablero:</strong> Vamos ganando o perdiendo? Qué muestran las tendencias?
                </div>
                <div style="background:#ede7f6;padding:14px;border-radius:8px;border-left:4px solid var(--purple);">
                    <strong>3. Nuevos compromisos:</strong> Cada persona elige 1-2 compromisos para la próxima semana que muevan las medidas de predicción.
                </div>
            </div>
        </div>

        <div class="content-card warning">
            <h3>&#9888;&#65039; La trampa de Jeff</h3>
            <p>Jeff no cumplio su compromiso porque "el torbellino fue muy fuerte esa semana". Esto pasa SIEMPRE. El torbellino siempre será feroz.</p>
            <p>La lección: <span class="highlight">Los compromisos son INCONDICIONALES</span>. No es "lo hare a menos que algo urgente surja". Es "encontrare la forma de hacerlo pase lo que pase".</p>
            <p>Si aceptas excusas del torbellino, la MCI nunca avanzara.</p>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Compromisos de ALTO impacto vs. BAJO impacto</h3>
            <table style="width:100%;border-collapse:collapse;margin:12px 0;">
                <tr style="background:#ffebee;"><th style="padding:10px;border:1px solid #ddd;">&#10060; Bajo impacto</th><th style="padding:10px;border:1px solid #ddd;background:#e8f5e9;">&#9989; Alto impacto</th></tr>
                <tr><td style="padding:10px;border:1px solid #eee;">"Me enfocara en capacitación"</td><td style="padding:10px;border:1px solid #eee;">"Trabajare 30 min con Ana y Carlos para mejorar el proceso de cotizaciones"</td></tr>
                <tr><td style="padding:10px;border:1px solid #eee;">"Revisare los gastos"</td><td style="padding:10px;border:1px solid #eee;">"Auditare las 5 partidas mayores del área de compras y presentare hallazgos el jueves"</td></tr>
                <tr><td style="padding:10px;border:1px solid #eee;">"Hablare con proveedores"</td><td style="padding:10px;border:1px solid #eee;">"Renegociare el contrato con los 3 proveedores de papeleria para obtener 10% de descuento"</td></tr>
            </table>
        </div>

        <div class="quiz-container" id="quiz_d4a">
            <div class="quiz-q">&#127917; Cuál es la regla FUNDAMENTAL de los compromisos en la sesión de MCI?</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_d4a', this, false)">Son flexibles y se pueden ajustar si el torbellino es fuerte</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d4a', this, true)">Son incondicionales: se cumplen pase lo que pase</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d4a', this, false)">Solo el lider los define para el equipo</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d4a', this, false)">Se deben hacer al menos 5 por persona</button>
            <div class="quiz-feedback" id="quiz_d4a_fb"></div>
        </div>

        <div class="content-card">
            <h3>&#127939; Las 5 fases del cambio</h3>
            <p>El libro describe que todo equipo pasa por estas fases al implementar 4DX:</p>
            <ol class="concept-list">
                <li><strong>Claridad:</strong> El equipo define MCI, medidas y tablero. Hay emoción inicial.</li>
                <li><strong>Lanzamiento:</strong> Se inicia la ejecución. Es difícil, hay confusión. Requiere energía del lider.</li>
                <li><strong>Adopción:</strong> El equipo encuentra su ritmo. Las medidas empiezan a moverse.</li>
                <li><strong>Optimización:</strong> El equipo propone mejoras por iniciativa propia. Quieren ganar!</li>
                <li><strong>Hábitos:</strong> Las nuevas conductas se convierten en parte del torbellino. Victoria!</li>
            </ol>
        </div>

        <div class="quiz-container" id="quiz_d4b">
            <div class="quiz-q">&#127917; Sí un compromiso se repite por más de 2 semanas consecutivas, que debes hacer?</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_d4b', this, false)">Mantenerlo porque la consistencia es importante</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d4b', this, true)">Cambiarlo: buscar nuevas formás de mover las medidas de predicción</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_d4b', this, false)">Eliminarlo porque claramente no funcióna</button>
            <div class="quiz-feedback" id="quiz_d4b_fb"></div>
        </div>

        <div class="content-card admin">
            <h3>&#127970; Tu sesión de MCI semanal en Administración</h3>
            <p>Ejemplo de agenda para tu gerencia cada lunes a las 9:00 AM (25 min):</p>
            <ul class="concept-list">
                <li><strong>9:00-9:05</strong> - El gerente abre la sesión y reporta SUS compromisos</li>
                <li><strong>9:05-9:15</strong> - Cada coordinador reporta compromisos y revisa el tablero</li>
                <li><strong>9:15-9:20</strong> - El equipo ayuda a desbloquear obstaculos de alguien</li>
                <li><strong>9:20-9:25</strong> - Cada persona elige 1-2 compromisos para la semana</li>
            </ul>
            <p style="margin-top:10px;"><strong>CLAVE:</strong> Esta sesión NO es la junta operativa del torbellino. No se habla de pagos pendientes, ni de requisiciones urgentes. Solo MCI.</p>
        </div>
        `
    },
    {
        id: 'final_exam', module: 'Examen Final', tag: 'tag-final', tagLabel: 'EXAMEN FINAL',
        title: 'Examen Final Integrador',
        subtitle: 'Demuestra que dominas las 4 Disciplinas!',
        content: `
        <div class="lesson-hero" style="background-image:url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80')">
            <div class="hero-caption">El momento de la verdad: demuestra tu dominio de las 4DX</div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Mensaje final del instructor</div>
                <div class="instructor-note-text">Has llegado al momento clave. Este examen no busca evaluarte: busca confirmar qué estás listo para implementar las 4DX en tu gerencia. Sí apruebas con 7 o mas, podrás hacer la evaluación formal con confianza. Suerte!</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#127942; Hora de demostrar lo aprendido!</h3>
            <p>Responde correctamente estas preguntas que integran las 4 disciplinas. Necesitas <strong>al menos 7 de 10</strong> para aprobar. Cada respuesta correcta te da XP extra!</p>
        </div>

        <div class="quiz-container" id="final_q1">
            <div class="quiz-q">1. El "torbellino" en el contexto de las 4DX se refiere a:</div>
            <button class="quiz-option" onclick="checkFinal('final_q1', this, false)">Los problemas graves de la empresa</button>
            <button class="quiz-option" onclick="checkFinal('final_q1', this, true)">La energía del día a día necesaria para mantener las operaciones</button>
            <button class="quiz-option" onclick="checkFinal('final_q1', this, false)">Los competidores de la organización</button>
            <div class="quiz-feedback" id="final_q1_fb"></div>
        </div>

        <div class="quiz-container" id="final_q2">
            <div class="quiz-q">2. La formula correcta para una MCI es:</div>
            <button class="quiz-option" onclick="checkFinal('final_q2', this, false)">Mejorar + área + objetivo general</button>
            <button class="quiz-option" onclick="checkFinal('final_q2', this, false)">Verbo + indicador + lo antes posible</button>
            <button class="quiz-option" onclick="checkFinal('final_q2', this, true)">De X a Y para [fecha específica]</button>
            <div class="quiz-feedback" id="final_q2_fb"></div>
        </div>

        <div class="quiz-container" id="final_q3">
            <div class="quiz-q">3. Una medida de predicción debe ser:</div>
            <button class="quiz-option" onclick="checkFinal('final_q3', this, true)">Predictiva del resultado E influenciable por el equipo</button>
            <button class="quiz-option" onclick="checkFinal('final_q3', this, false)">Solo predictiva, no importa si el equipo puede influir</button>
            <button class="quiz-option" onclick="checkFinal('final_q3', this, false)">Identica a la medida histórica pero en menor escala</button>
            <div class="quiz-feedback" id="final_q3_fb"></div>
        </div>

        <div class="quiz-container" id="final_q4">
            <div class="quiz-q">4. "Gasto mensual" como medida de predicción de "gasto anual" es:</div>
            <button class="quiz-option" onclick="checkFinal('final_q4', this, false)">Buena medida de predicción</button>
            <button class="quiz-option" onclick="checkFinal('final_q4', this, true)">Mala: sigue siendo medida histórica, solo en menor escala temporal</button>
            <button class="quiz-option" onclick="checkFinal('final_q4', this, false)">Depende del tipo de gasto</button>
            <div class="quiz-feedback" id="final_q4_fb"></div>
        </div>

        <div class="quiz-container" id="final_q5">
            <div class="quiz-q">5. Un tablero "de jugadores" se caracteriza por:</div>
            <button class="quiz-option" onclick="checkFinal('final_q5', this, false)">Tener la mayor cantidad de datos posible</button>
            <button class="quiz-option" onclick="checkFinal('final_q5', this, true)">Ser tan simple que en 5 segundos sabes si vas ganando o perdiendo</button>
            <button class="quiz-option" onclick="checkFinal('final_q5', this, false)">Solo lo ve el gerente para tomar decisiones</button>
            <div class="quiz-feedback" id="final_q5_fb"></div>
        </div>

        <div class="quiz-container" id="final_q6">
            <div class="quiz-q">6. La sesión semanal de MCI tiene estas 3 partes en orden:</div>
            <button class="quiz-option" onclick="checkFinal('final_q6', this, false)">Planear, ejecutar, evaluar</button>
            <button class="quiz-option" onclick="checkFinal('final_q6', this, true)">Rendir cuentas de compromisos, revisar tablero, hacer nuevos compromisos</button>
            <button class="quiz-option" onclick="checkFinal('final_q6', this, false)">Revisar problemas, asignar táreas, cerrar sesión</button>
            <div class="quiz-feedback" id="final_q6_fb"></div>
        </div>

        <div class="quiz-container" id="final_q7">
            <div class="quiz-q">7. Cuándo Jeff no cumplio su compromiso porque "el torbellino fue muy fuerte", la lección es:</div>
            <button class="quiz-option" onclick="checkFinal('final_q7', this, false)">Es comprensible, el torbellino es una excusa valida</button>
            <button class="quiz-option" onclick="checkFinal('final_q7', this, false)">Jeff deberia ser sanciónado</button>
            <button class="quiz-option" onclick="checkFinal('final_q7', this, true)">Los compromisos son incondicionales: el torbellino siempre estará ahi</button>
            <div class="quiz-feedback" id="final_q7_fb"></div>
        </div>

        <div class="quiz-container" id="final_q8">
            <div class="quiz-q">8. Cuantas MCIs debe tener un equipo como máximo?</div>
            <button class="quiz-option" onclick="checkFinal('final_q8', this, true)">1 a 2</button>
            <button class="quiz-option" onclick="checkFinal('final_q8', this, false)">3 a 5</button>
            <button class="quiz-option" onclick="checkFinal('final_q8', this, false)">Las que necesite según su complejidad</button>
            <div class="quiz-feedback" id="final_q8_fb"></div>
        </div>

        <div class="quiz-container" id="final_q9">
            <div class="quiz-q">9. "Realizare 5 auditorias de partidas está semana" es un compromiso de...</div>
            <button class="quiz-option" onclick="checkFinal('final_q9', this, true)">Alto impacto: es específico, medible y moverá las medidas de predicción</button>
            <button class="quiz-option" onclick="checkFinal('final_q9', this, false)">Bajo impacto: es demasiado operativo</button>
            <button class="quiz-option" onclick="checkFinal('final_q9', this, false)">Ni alto ni bajo: depende del contexto</button>
            <div class="quiz-feedback" id="final_q9_fb"></div>
        </div>

        <div class="quiz-container" id="final_q10">
            <div class="quiz-q">10. La razon por la que "sin participación no hay compromiso" es clave en las 4DX es porque:</div>
            <button class="quiz-option" onclick="checkFinal('final_q10', this, false)">El lider no puede saberlo todo</button>
            <button class="quiz-option" onclick="checkFinal('final_q10', this, true)">Las personas se comprometen con lo que ayudan a crear, no con lo que se les impone</button>
            <button class="quiz-option" onclick="checkFinal('final_q10', this, false)">Es una norma de recursos humaños</button>
            <div class="quiz-feedback" id="final_q10_fb"></div>
        </div>

        <div id="finalResult" style="display:none;margin-top:20px;padding:24px;border-radius:12px;text-align:center;animation:pop 0.4s;">
            <div style="font-size:3em;" id="finalEmoji"></div>
            <h2 id="finalTitle" style="margin:10px 0;"></h2>
            <p id="finalDesc"></p>
            <div style="margin-top:16px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
                <button class="btn btn-gold" onclick="showLesson(7)">&#127942; Ver mi Certificado</button>
                <button class="btn btn-primary" onclick="window.open('checklist-4dx-gerencia-administración.html','_blank')">&#128203; Ir a la Evaluación</button>
            </div>
        </div>
        `
    },
    {
        id: 'certificate', module: 'Certificado', tag: 'tag-final', tagLabel: 'CERTIFICADO',
        title: 'Certificado de Finalización',
        subtitle: 'Felicidades! Has completado el curso',
        content: `
        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Palabras finales del instructor</div>
                <div class="instructor-note-text">Has recorrido las 4 Disciplinas de la Ejecución. Ahora tienes el conocimiento y las herramientas para transformar la ejecución en tu gerencia. Recuerda: no se trata de saber, se trata de hacer. Empieza está semana con UNA MCI. Éxito!</div>
            </div>
        </div>

        <div class="certificate" id="certificateEl">
            <div class="cert-seal">
                <div style="font-size:1.2em;">4DX</div>
                <div style="font-size:0.65em;">CERTIFIED</div>
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
                <div class="cert-award-text">Por haber completado éxitosamente el curso:</div>
                <div class="cert-course">Las 4 Disciplinas de la Ejecución<br>aplicadas a la Gerencia de Administración</div>
                <div class="cert-desc">Habiendo demostrado dominio de los conceptos de Meta Crucialmente Importante (MCI), Medidas de Predicción, Tablero de Resultados y Cadencia de Rendición de Cuentas, según el modelo de McChesney, Covey y Huling.</div>
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
                        <div class="cert-sig-name" id="certDate">14 de Abril, 2026</div>
                        <div class="cert-sig-title">Fecha de expedición</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="cert-actions">
            <button class="btn btn-primary" onclick="window.print()">&#128424;&#65039; Imprimir / Guardar PDF</button>
            <button class="btn btn-success" onclick="window.open('checklist-4dx-gerencia-administración.html','_blank')">&#128203; Hacer la Evaluación</button>
        </div>

        <div class="content-card" style="margin-top:30px;">
            <h3>&#128640; Qué sigue ahora?</h3>
            <ol class="concept-list">
                <li><strong>Define TU MCI:</strong> Usa el formato "de X a Y para tal fecha" con tu equipo</li>
                <li><strong>Identifica 2 medidas de predicción:</strong> Acciones semanales que el equipo puede influenciar</li>
                <li><strong>Arma el tablero:</strong> Simple, visible, que muestre si se gana o pierde en 5 segundos</li>
                <li><strong>Programa la sesión semanal:</strong> 20 minutos cada lunes, sin excepción</li>
                <li><strong>Sostenla por 8 semanas:</strong> Es el tiempo para formar el hábito</li>
            </ol>
        </div>
        `
    }
]
};

// Registro global
if (typeof window !== 'undefined') {
    window.COURSE_4DX = COURSE_4DX;
    window.TRIKLES_COURSES = window.TRIKLES_COURSES || {};
    window.TRIKLES_COURSES['4dx'] = COURSE_4DX;
}
