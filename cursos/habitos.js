// ============================================
// CURSO HABITOS - Los 7 Hábitos de la Gente Altamente Efectiva
// Basado en la obra de Stephen R. Covey
// Instructor: LADE Germán Solís Muñoz - TRIKLES
// ============================================

const COURSE_HABITOS = {
    id: 'habitos',
    meta: {
        title: 'Los 7 Hábitos de la Gente Altamente Efectiva',
        subtitle: 'La revolución ética en la vida cotidiana y en la empresa',
        author: 'Stephen R. Covey',
        cover: 'assets/covers/habitos.jpg',
        description: 'El método universal probado por más de 40 años para transformar tu carácter, tus relaciones y tus resultados. Aprende de adentro hacia afuera los 7 hábitos que distinguen a las personas verdaderamente efectivas en la vida personal, familiar y profesional.',
        descripcionCorta: 'Transforma tu carácter y multiplica tu efectividad con los principios universales de Covey',
        category: 'Liderazgo personal',
        lessonsCount: 10,
        duration: '3-4 horas',
        level: 'Todos los niveles',
        active: true,
        tags: ['liderazgo', 'hábitos', 'efectividad', 'desarrollo personal', 'Covey']
    },

    lessonRequirements: {
        0: ['quiz_intro'],
        1: ['quiz_h1a', 'quiz_h1b'],
        2: ['quiz_h2a', 'quiz_h2b'],
        3: ['quiz_h3a', 'quiz_h3b'],
        4: ['quiz_h4a', 'quiz_h4b'],
        5: ['quiz_h5a', 'quiz_h5b'],
        6: ['quiz_h6a', 'quiz_h6b'],
        7: ['quiz_h7a', 'quiz_h7b'],
        8: ['final_q1','final_q2','final_q3','final_q4','final_q5','final_q6','final_q7','final_q8','final_q9','final_q10'],
        9: []
    },

    examPassScore: 7,

    certificate: {
        courseNameForCert: 'Los 7 Hábitos de la Gente<br>Altamente Efectiva',
        description: 'Habiendo demostrado dominio integral de los principios del carácter, el continuum de la madurez y los siete hábitos de la efectividad personal e interpersonal, según la obra de Stephen R. Covey.'
    },

    lessons: [
    // ============ LECCION 0: INTRO ============
    {
        id: 'intro', module: 'Introducción', tag: 'tag-intro', tagLabel: 'INTRODUCCION',
        title: 'De Adentro hacia Afuera',
        subtitle: 'La ética del carácter vs. la ética de la personalidad',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#1a237e 0%,#3949ab 50%,#ff8f00 100%);min-height:220px;display:flex;align-items:center;justify-content:center;border-radius:12px;color:white;text-align:center;padding:30px;">
            <div>
                <div style="font-family:Georgia,serif;font-size:2.4em;font-weight:900;letter-spacing:3px;text-shadow:2px 2px 8px rgba(0,0,0,0.3);">LOS 7 HÁBITOS</div>
                <div style="font-size:1.1em;margin-top:10px;opacity:0.95;font-style:italic;">de la gente altamente efectiva</div>
                <div style="margin-top:18px;font-size:0.9em;letter-spacing:4px;opacity:0.85;">STEPHEN R. COVEY</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Bienvenida del instructor · LADE Germán Solís Muñoz</div>
                <div class="instructor-note-text">Este no es un curso más de productividad: es una invitación a repensar tu carácter. Covey publicó esta obra en 1989 y 35 años después sigue siendo el libro de desarrollo personal más influyente del mundo. Te acompañaré capítulo a capítulo para que salgas de aquí con una forma nueva — y más profunda — de ver tu vida y tu trabajo.</div>
            </div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128172;</span><div>
                <h3>La historia del hijo "inadecuado"</h3>
                <p>Covey cuenta que él y su esposa tenían un hijo con serios problemas: era inmaduro, tímido, académicamente débil, torpe en deportes. Hacían <em>todo</em> lo "correcto" con él: técnicas de refuerzo positivo, psicología de la actitud mental, comparaciones cuidadosas. Nada funcionaba.</p>
                <p>Hasta que descubrieron algo incómodo: <strong>el problema no era el niño, era su propia forma de verlo</strong>. En lo profundo lo consideraban "inadecuado". Por más técnicas que aplicaran, el niño percibía la evaluación real de sus padres.</p>
                <p><strong>Cambiaron su paradigma</strong>, no su técnica. Empezaron a ver a su hijo como un ser único con su propio ritmo. Lo dejaron de "proteger" de las burlas. Y algo extraordinario ocurrió: el niño floreció.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>&#9889; Dos éticas en competencia</h3>
            <p>Covey revisó 200 años de literatura del éxito en Estados Unidos y descubrió un cambio radical a partir de la Primera Guerra Mundial:</p>
            <svg class="svg-illustration" viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="ec1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1a237e"/><stop offset="1" stop-color="#3949ab"/></linearGradient>
                    <linearGradient id="ec2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#b0bec5"/><stop offset="1" stop-color="#78909c"/></linearGradient>
                </defs>
                <rect x="20" y="20" width="280" height="220" rx="14" fill="url(#ec1)"/>
                <text x="160" y="55" text-anchor="middle" fill="#ffb300" font-weight="900" font-size="18" letter-spacing="2">ÉTICA DEL CARÁCTER</text>
                <text x="160" y="78" text-anchor="middle" fill="#c5cae9" font-size="11" font-style="italic">1776 - 1920 (≈150 años)</text>
                <text x="40" y="110" fill="white" font-size="13">• Integridad</text>
                <text x="40" y="132" fill="white" font-size="13">• Humildad</text>
                <text x="40" y="154" fill="white" font-size="13">• Fidelidad</text>
                <text x="40" y="176" fill="white" font-size="13">• Templanza y valor</text>
                <text x="40" y="198" fill="white" font-size="13">• Justicia y paciencia</text>
                <text x="40" y="220" fill="white" font-size="13">• Laboriosidad</text>

                <rect x="340" y="20" width="280" height="220" rx="14" fill="url(#ec2)"/>
                <text x="480" y="55" text-anchor="middle" fill="#263238" font-weight="900" font-size="18" letter-spacing="2">ÉTICA DE LA PERSONALIDAD</text>
                <text x="480" y="78" text-anchor="middle" fill="#455a64" font-size="11" font-style="italic">1920 - hoy</text>
                <text x="360" y="110" fill="#263238" font-size="13">• Imagen pública</text>
                <text x="360" y="132" fill="#263238" font-size="13">• Actitud mental positiva</text>
                <text x="360" y="154" fill="#263238" font-size="13">• Técnicas de relación</text>
                <text x="360" y="176" fill="#263238" font-size="13">• Sonrisa y caminar</text>
                <text x="360" y="198" fill="#263238" font-size="13">• Pensamiento "poderoso"</text>
                <text x="360" y="220" fill="#263238" font-size="13">• Maniobras y atajos</text>
            </svg>
            <p>El mensaje de Covey es contundente: <strong>las técnicas sin carácter son casas construidas sobre arena</strong>. Puedes aprender 50 formas de dar un apretón de manos, pero si en el fondo no respetas a la otra persona, tarde o temprano saldrá a la luz.</p>
        </div>

        <div class="content-card tip">
            <h3>&#128161; El poder del paradigma</h3>
            <p>Un <strong>paradigma</strong> es el mapa mental con el que interpretas la realidad. <em>No es el territorio, es el mapa</em>. Si tu mapa de Chicago está mal, no llegarás a tu destino aunque te esfuerces el doble o mantengas actitud positiva.</p>
            <p>Covey lo resume brutalmente: <span class="highlight">"Si queremos cambiar los resultados, tenemos que cambiar los hábitos. Si queremos cambiar los hábitos, tenemos que cambiar los paradigmas."</span></p>
        </div>

        <div class="quiz-container" id="quiz_intro">
            <div class="quiz-q">&#127919; Pregunta clave: ¿Cuál es la diferencia esencial entre la "ética del carácter" y la "ética de la personalidad"?</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_intro', this, false)">La primera es antigua, la segunda es moderna y por eso mejor</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_intro', this, true)">La del carácter se basa en principios internos; la de la personalidad, en técnicas y apariencia externa</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_intro', this, false)">Son sinónimos: ambas buscan mejorar a la persona</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_intro', this, false)">La del carácter aplica a la vida personal; la de la personalidad, al trabajo</button>
            <div class="quiz-feedback" id="quiz_intro_fb"></div>
        </div>

        <div class="content-card">
            <h3>&#128200; El Continuum de la Madurez</h3>
            <p>Covey organizó los 7 hábitos en un camino progresivo: de la dependencia, a la independencia, y finalmente a la interdependencia.</p>
            <svg class="svg-illustration" viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="stair" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#ef5350"/><stop offset="0.5" stop-color="#ffb300"/><stop offset="1" stop-color="#2e7d32"/></linearGradient>
                </defs>
                <!-- Peldaños -->
                <rect x="20" y="150" width="200" height="40" fill="#ef5350" opacity="0.25" rx="4"/>
                <text x="120" y="175" text-anchor="middle" fill="#c62828" font-weight="800" font-size="15">DEPENDENCIA</text>
                <text x="120" y="192" text-anchor="middle" fill="#c62828" font-size="11" font-style="italic">"tú"</text>

                <rect x="240" y="95" width="200" height="95" fill="#ffb300" opacity="0.25" rx="4"/>
                <text x="340" y="125" text-anchor="middle" fill="#e65100" font-weight="800" font-size="15">INDEPENDENCIA</text>
                <text x="340" y="142" text-anchor="middle" fill="#e65100" font-size="11" font-style="italic">"yo"</text>
                <text x="340" y="162" text-anchor="middle" fill="#e65100" font-size="10">Hábitos 1, 2 y 3</text>
                <text x="340" y="178" text-anchor="middle" fill="#e65100" font-size="10">(Victoria privada)</text>

                <rect x="460" y="20" width="200" height="170" fill="#2e7d32" opacity="0.25" rx="4"/>
                <text x="560" y="55" text-anchor="middle" fill="#1b5e20" font-weight="800" font-size="15">INTERDEPENDENCIA</text>
                <text x="560" y="72" text-anchor="middle" fill="#1b5e20" font-size="11" font-style="italic">"nosotros"</text>
                <text x="560" y="95" text-anchor="middle" fill="#1b5e20" font-size="10">Hábitos 4, 5 y 6</text>
                <text x="560" y="111" text-anchor="middle" fill="#1b5e20" font-size="10">(Victoria pública)</text>
                <text x="560" y="140" text-anchor="middle" fill="#1b5e20" font-size="10">Hábito 7</text>
                <text x="560" y="156" text-anchor="middle" fill="#1b5e20" font-size="10">(Renovación)</text>

                <!-- Flecha -->
                <path d="M 30 30 Q 340 15 660 15" fill="none" stroke="#1a237e" stroke-width="2.5" stroke-dasharray="5,3"/>
                <polygon points="655,10 670,15 655,20" fill="#1a237e"/>
                <text x="340" y="12" text-anchor="middle" fill="#1a237e" font-weight="700" font-size="12">Crecimiento progresivo</text>
            </svg>
            <ol class="concept-list">
                <li><strong>Dependencia:</strong> necesitas de otros para obtener lo que quieres — físicamente, emocionalmente o intelectualmente.</li>
                <li><strong>Independencia:</strong> eres dueño de ti mismo; obtienes lo que quieres por tu propio esfuerzo. <em>Victoria privada</em>.</li>
                <li><strong>Interdependencia:</strong> combinas tu talento con el de otros para lograr un éxito mayor al individual. <em>Victoria pública</em>.</li>
            </ol>
            <div class="tip" style="margin-top:14px;"><strong>Clave:</strong> la interdependencia solo la pueden elegir personas <em>independientes</em>. Quien depende no puede cooperar como igual.</div>
        </div>

        <div class="content-card">
            <h3>&#128214; Mapa del curso</h3>
            <div class="steps-visual" style="flex-wrap:wrap;">
                <div class="step-circle" style="background:#c62828">1</div>
                <div class="step-circle" style="background:#e65100">2</div>
                <div class="step-circle" style="background:#ffb300">3</div>
                <div class="step-circle" style="background:#2e7d32">4</div>
                <div class="step-circle" style="background:#0277bd">5</div>
                <div class="step-circle" style="background:#6a1b9a">6</div>
                <div class="step-circle" style="background:#00838f">7</div>
            </div>
            <p style="text-align:center;color:#666;font-style:italic;margin-top:8px;">1. Proactivo · 2. Fin en mente · 3. Primero lo primero · 4. Ganar/Ganar · 5. Comprender · 6. Sinergia · 7. Afilar la sierra</p>
        </div>
        `
    },

    // ============ HABITO 1 ============
    {
        id: 'h1', module: 'Hábito 1', tag: 'tag-d1', tagLabel: 'HÁBITO 1',
        title: 'Sea Proactivo',
        subtitle: 'Los principios de la visión personal',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#b71c1c,#ef5350);min-height:180px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:30px;">
            <div style="text-align:center;">
                <div style="font-size:3.5em;font-weight:900;font-family:Georgia,serif;">01</div>
                <div style="font-size:1.6em;font-weight:700;letter-spacing:2px;">SEA PROACTIVO</div>
                <div style="opacity:0.9;font-style:italic;margin-top:6px;">"Entre estímulo y respuesta hay un espacio: tu libertad"</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Reflexión del instructor</div>
                <div class="instructor-note-text">De los 7 hábitos, este es el fundamento de todos los demás. Mientras no comprendas que <em>tú eliges</em> tu respuesta, ningún otro hábito te servirá. He visto carreras profesionales completas estancarse por no haber dominado este único principio.</div>
            </div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128279;</span><div>
                <h3>Viktor Frankl en Auschwitz</h3>
                <p>Psiquiatra judío, fue enviado a los campos de exterminio nazi. Perdió a sus padres, a su hermano y a su esposa. Sufrió torturas inimaginables. Un día, desnudo en una pequeña habitación, descubrió lo que él llamaría "la última de las libertades humanas".</p>
                <p>Los nazis controlaban todo su entorno. Podían hacer lo que quisieran con su cuerpo. Pero había algo que <strong>nadie podía quitarle</strong>: su libertad para elegir cómo responder a lo que le ocurría. Entre estímulo y respuesta, había un espacio. En ese espacio estaba su poder.</p>
                <p><strong>Esa es la esencia del Hábito 1</strong>: asumir la responsabilidad — <em>response-ability</em>, habilidad para elegir respuesta — sobre tu vida.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>&#128269; Reactivo vs. Proactivo</h3>
            <svg class="svg-illustration" viewBox="0 0 620 220" xmlns="http://www.w3.org/2000/svg">
                <!-- Reactivo -->
                <g>
                    <rect x="20" y="30" width="280" height="170" rx="12" fill="#ffebee" stroke="#ef5350" stroke-width="2"/>
                    <text x="160" y="55" text-anchor="middle" fill="#c62828" font-weight="900" font-size="16" letter-spacing="2">PERSONA REACTIVA</text>
                    <text x="40" y="85" fill="#c62828" font-size="12">✗ "No puedo..."</text>
                    <text x="40" y="105" fill="#c62828" font-size="12">✗ "Tengo que..."</text>
                    <text x="40" y="125" fill="#c62828" font-size="12">✗ "Si al menos ellos..."</text>
                    <text x="40" y="145" fill="#c62828" font-size="12">✗ "Me sacan de quicio"</text>
                    <text x="40" y="165" fill="#c62828" font-size="12">✗ "Así soy yo"</text>
                    <text x="160" y="190" text-anchor="middle" fill="#c62828" font-size="11" font-style="italic">culpa al entorno, a otros, al pasado</text>
                </g>

                <!-- Flecha -->
                <path d="M 300 115 L 340 115" stroke="#1a237e" stroke-width="3"/>
                <polygon points="335,108 348,115 335,122" fill="#1a237e"/>

                <!-- Proactivo -->
                <g>
                    <rect x="340" y="30" width="260" height="170" rx="12" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
                    <text x="470" y="55" text-anchor="middle" fill="#1b5e20" font-weight="900" font-size="16" letter-spacing="2">PERSONA PROACTIVA</text>
                    <text x="360" y="85" fill="#1b5e20" font-size="12">✓ "Examinemos alternativas"</text>
                    <text x="360" y="105" fill="#1b5e20" font-size="12">✓ "Puedo optar por..."</text>
                    <text x="360" y="125" fill="#1b5e20" font-size="12">✓ "Controlo mis sentimientos"</text>
                    <text x="360" y="145" fill="#1b5e20" font-size="12">✓ "Elegiré una respuesta"</text>
                    <text x="360" y="165" fill="#1b5e20" font-size="12">✓ "Puedo ser diferente"</text>
                    <text x="470" y="190" text-anchor="middle" fill="#1b5e20" font-size="11" font-style="italic">asume la responsabilidad de su vida</text>
                </g>
            </svg>
        </div>

        <div class="quiz-container" id="quiz_h1a">
            <div class="quiz-q">&#128172; Tu jefe te critica injustamente delante del equipo. ¿Cuál de estas es una respuesta <em>proactiva</em>?</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_h1a', this, false)">Gritarle de vuelta: "¡Me sacas de quicio!"</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h1a', this, false)">Quedarte callado sintiéndote víctima el resto del día</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h1a', this, true)">Pedirle una reunión a solas para exponerle tu punto con respeto y datos</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h1a', this, false)">Desahogarte con tus compañeros hablando mal de él</button>
            <div class="quiz-feedback" id="quiz_h1a_fb"></div>
        </div>

        <div class="content-card">
            <h3>&#127919; Círculo de Preocupación y Círculo de Influencia</h3>
            <p>Covey propone mirar dos círculos concéntricos:</p>
            <svg class="svg-illustration" viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg">
                <!-- Reactivo -->
                <g transform="translate(20,20)">
                    <text x="140" y="0" text-anchor="middle" fill="#c62828" font-weight="800" font-size="14">ENFOQUE REACTIVO</text>
                    <circle cx="140" cy="130" r="110" fill="#ffebee" stroke="#ef5350" stroke-width="2"/>
                    <text x="140" y="50" text-anchor="middle" fill="#c62828" font-weight="700" font-size="12">PREOCUPACIÓN</text>
                    <circle cx="140" cy="145" r="40" fill="#ef5350" opacity="0.4" stroke="#c62828" stroke-width="2"/>
                    <text x="140" y="150" text-anchor="middle" fill="#c62828" font-weight="700" font-size="11">Influencia</text>
                    <text x="140" y="250" text-anchor="middle" fill="#c62828" font-size="10" font-style="italic">La influencia se encoge</text>
                </g>

                <!-- Proactivo -->
                <g transform="translate(340,20)">
                    <text x="140" y="0" text-anchor="middle" fill="#1b5e20" font-weight="800" font-size="14">ENFOQUE PROACTIVO</text>
                    <circle cx="140" cy="130" r="110" fill="#e8f5e9" stroke="#66bb6a" stroke-width="2"/>
                    <text x="140" y="50" text-anchor="middle" fill="#1b5e20" font-weight="700" font-size="12">Preocupación</text>
                    <circle cx="140" cy="150" r="85" fill="#66bb6a" opacity="0.4" stroke="#1b5e20" stroke-width="2"/>
                    <text x="140" y="160" text-anchor="middle" fill="#1b5e20" font-weight="700" font-size="13">INFLUENCIA</text>
                    <text x="140" y="250" text-anchor="middle" fill="#1b5e20" font-size="10" font-style="italic">La influencia se expande</text>
                </g>
            </svg>
            <ul class="concept-list">
                <li><strong>Círculo de preocupación:</strong> todo lo que te importa — economía, política, clima laboral, salud de un familiar...</li>
                <li><strong>Círculo de influencia:</strong> la parte donde puedes <em>hacer</em> algo concretamente.</li>
            </ul>
            <p>La persona <strong>proactiva enfoca su energía en su círculo de influencia</strong>, y como resultado, este se expande. La reactiva se enfoca en la preocupación y acaba sintiéndose cada vez más impotente.</p>
        </div>

        <div class="content-card tip">
            <h3>&#128161; El lenguaje revela el paradigma</h3>
            <p>Escucha tu vocabulario durante una semana. ¿Cuántas veces dices...?</p>
            <table style="width:100%;border-collapse:collapse;margin-top:10px;font-size:0.9em;">
                <tr style="background:#ffebee;"><th style="padding:8px;border:1px solid #ef9a9a;text-align:left;color:#c62828;">Lenguaje reactivo</th><th style="padding:8px;border:1px solid #a5d6a7;text-align:left;color:#1b5e20;">Lenguaje proactivo</th></tr>
                <tr><td style="padding:8px;border:1px solid #ef9a9a;">"No puedo hacer nada"</td><td style="padding:8px;border:1px solid #a5d6a7;">"Veamos nuestras alternativas"</td></tr>
                <tr><td style="padding:8px;border:1px solid #ef9a9a;">"Así soy yo"</td><td style="padding:8px;border:1px solid #a5d6a7;">"Puedo optar por un enfoque distinto"</td></tr>
                <tr><td style="padding:8px;border:1px solid #ef9a9a;">"Ellos me hacen enojar"</td><td style="padding:8px;border:1px solid #a5d6a7;">"Controlo mis propios sentimientos"</td></tr>
                <tr><td style="padding:8px;border:1px solid #ef9a9a;">"Tengo que..."</td><td style="padding:8px;border:1px solid #a5d6a7;">"Elijo..."</td></tr>
                <tr><td style="padding:8px;border:1px solid #ef9a9a;">"Si al menos..."</td><td style="padding:8px;border:1px solid #a5d6a7;">"Pase lo que pase, yo seré..."</td></tr>
            </table>
        </div>

        <div class="quiz-container" id="quiz_h1b">
            <div class="quiz-q">&#127919; ¿Qué ocurre cuando una persona proactiva enfoca su energía en su círculo de influencia?</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_h1b', this, false)">El círculo de preocupación desaparece</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h1b', this, true)">El círculo de influencia se expande gradualmente</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h1b', this, false)">Deja de importarle el mundo exterior</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h1b', this, false)">Se vuelve arrogante e insensible a los demás</button>
            <div class="quiz-feedback" id="quiz_h1b_fb"></div>
        </div>

        <div class="content-card">
            <h3>&#128221; Tu compromiso de esta semana</h3>
            <ol class="concept-list">
                <li>Durante 3 días, <strong>escucha tu lenguaje</strong>: cuenta cuántas veces dices "tengo que", "no puedo", "me hace sentir..."</li>
                <li>Identifica <strong>una preocupación reciente</strong> que te ha quitado energía. Pregúntate: ¿qué parte de esto SÍ está en mi círculo de influencia?</li>
                <li>Haz un compromiso pequeño contigo mismo y <strong>cúmplelo</strong>. La autoconfianza nace de cumplirte a ti.</li>
            </ol>
        </div>
        `
    },

    // ============ HABITO 2 ============
    {
        id: 'h2', module: 'Hábito 2', tag: 'tag-d2', tagLabel: 'HÁBITO 2',
        title: 'Empiece con un Fin en Mente',
        subtitle: 'Los principios del liderazgo personal',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#bf360c,#ff8f00);min-height:180px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:30px;">
            <div style="text-align:center;">
                <div style="font-size:3.5em;font-weight:900;font-family:Georgia,serif;">02</div>
                <div style="font-size:1.6em;font-weight:700;letter-spacing:2px;">FIN EN MENTE</div>
                <div style="opacity:0.9;font-style:italic;margin-top:6px;">"Todas las cosas se crean dos veces"</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Reflexión del instructor</div>
                <div class="instructor-note-text">Muchos profesionales escalan con gran esfuerzo, solo para descubrir al llegar arriba que la escalera estaba apoyada en la pared equivocada. Este hábito te salva de esa tragedia silenciosa.</div>
            </div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#9904;</span><div>
                <h3>Tu propio funeral</h3>
                <p>Covey propone un ejercicio poderoso: imagina que asistes a un funeral de alguien querido. Llegas, te sientas, miras hacia el ataúd y... <strong>te ves a ti mismo</strong>. Es tu funeral, dentro de tres años.</p>
                <p>Cuatro personas van a hablar: un familiar, un amigo, un compañero de trabajo y alguien de tu comunidad. Pregúntate:</p>
                <ul style="margin:12px 0 12px 20px;">
                    <li>¿Qué te gustaría que dijeran de ti como persona?</li>
                    <li>¿Qué contribuciones y logros les gustaría recordar?</li>
                    <li>¿Qué efecto habrías querido tener en sus vidas?</li>
                </ul>
                <p><strong>Ese es tu fin en mente.</strong> Si hoy no vives alineado con esa respuesta, estás construyendo una vida que no querrás al final del camino.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>&#128295; Todas las cosas se crean dos veces</h3>
            <svg class="svg-illustration" viewBox="0 0 620 200" xmlns="http://www.w3.org/2000/svg">
                <!-- Primera creación -->
                <g>
                    <rect x="20" y="30" width="260" height="140" rx="12" fill="#fff3e0" stroke="#ff8f00" stroke-width="2"/>
                    <text x="150" y="60" text-anchor="middle" fill="#e65100" font-weight="900" font-size="16">1ª CREACIÓN</text>
                    <text x="150" y="82" text-anchor="middle" fill="#e65100" font-size="13" font-style="italic">mental</text>
                    <g transform="translate(115,95)">
                        <circle cx="35" cy="25" r="20" fill="none" stroke="#e65100" stroke-width="2.5"/>
                        <path d="M 35 12 L 35 38 M 22 25 L 48 25" stroke="#e65100" stroke-width="2.5"/>
                    </g>
                    <text x="150" y="160" text-anchor="middle" fill="#e65100" font-size="11">Diseño, visión, plano</text>
                </g>

                <!-- Flecha -->
                <path d="M 290 100 L 330 100" stroke="#1a237e" stroke-width="3"/>
                <polygon points="325,93 340,100 325,107" fill="#1a237e"/>

                <!-- Segunda creación -->
                <g>
                    <rect x="340" y="30" width="260" height="140" rx="12" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
                    <text x="470" y="60" text-anchor="middle" fill="#1b5e20" font-weight="900" font-size="16">2ª CREACIÓN</text>
                    <text x="470" y="82" text-anchor="middle" fill="#1b5e20" font-size="13" font-style="italic">física</text>
                    <g transform="translate(450,90)">
                        <rect x="0" y="15" width="40" height="30" fill="#66bb6a"/>
                        <polygon points="0,15 20,0 40,15" fill="#2e7d32"/>
                    </g>
                    <text x="470" y="160" text-anchor="middle" fill="#1b5e20" font-size="11">Ejecución, resultado real</text>
                </g>
            </svg>
            <p>Una casa se diseña antes de construirse. Un traje se corta antes de coserse. <strong>Lo mismo aplica a tu vida</strong>: si no la diseñas deliberadamente, alguien más — las circunstancias, tu pasado, las expectativas ajenas — la diseñará por ti.</p>
        </div>

        <div class="quiz-container" id="quiz_h2a">
            <div class="quiz-q">&#127919; "Todas las cosas se crean dos veces". ¿Qué significa esto para tu vida?</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_h2a', this, false)">Hay que intentar todo por lo menos dos veces antes de rendirse</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h2a', this, true)">Primero creas mentalmente (diseño/visión), luego físicamente (ejecución); si no diseñas tu vida, otros lo harán por ti</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h2a', this, false)">Cada meta requiere dos intentos para materializarse</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h2a', this, false)">Hay que tener plan A y plan B para cada objetivo</button>
            <div class="quiz-feedback" id="quiz_h2a_fb"></div>
        </div>

        <div class="content-card">
            <h3>&#128221; El enunciado de misión personal</h3>
            <p>La forma más práctica de aplicar este hábito es escribir tu <strong>enunciado de misión personal</strong>: un documento de una o dos páginas donde defines quién quieres ser, qué quieres hacer y los principios en los que tu vida se apoya.</p>
            <p>No se escribe en un día. Se redacta, se medita, se corrige por semanas o meses. Pero una vez escrito, se convierte en tu <strong>constitución personal</strong>: la guía que te permite decir "sí" a lo importante y "no" a lo urgente que no importa.</p>
            <div class="tip" style="margin-top:12px;">
                <strong>Estructura sugerida:</strong>
                <ol style="margin:8px 0 0 22px;">
                    <li>Mis roles vitales (padre/madre, profesional, miembro de comunidad, etc.)</li>
                    <li>Para cada rol: ¿qué clase de persona quiero ser? ¿qué resultados quiero lograr?</li>
                    <li>Principios innegociables (integridad, servicio, aprendizaje...)</li>
                    <li>Frase síntesis: cómo quiero ser recordado</li>
                </ol>
            </div>
        </div>

        <div class="content-card">
            <h3>&#128160; Centros alternativos y sus trampas</h3>
            <p>Todos tenemos un "centro" desde el que vemos la vida. Covey identifica varios — y advierte: <strong>la mayoría son inestables</strong>.</p>
            <svg class="svg-illustration" viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg">
                <circle cx="320" cy="130" r="55" fill="#1a237e"/>
                <text x="320" y="125" text-anchor="middle" fill="#ffb300" font-weight="900" font-size="14">CENTRO EN</text>
                <text x="320" y="145" text-anchor="middle" fill="#ffb300" font-weight="900" font-size="14">PRINCIPIOS</text>

                <!-- Centros problemáticos -->
                <g font-size="11" fill="#455a64" font-weight="600">
                    <circle cx="120" cy="60" r="30" fill="#ffebee" stroke="#ef5350"/><text x="120" y="64" text-anchor="middle">Cónyuge</text>
                    <circle cx="520" cy="60" r="30" fill="#ffebee" stroke="#ef5350"/><text x="520" y="64" text-anchor="middle">Familia</text>
                    <circle cx="60" cy="130" r="30" fill="#ffebee" stroke="#ef5350"/><text x="60" y="134" text-anchor="middle">Dinero</text>
                    <circle cx="580" cy="130" r="30" fill="#ffebee" stroke="#ef5350"/><text x="580" y="134" text-anchor="middle">Trabajo</text>
                    <circle cx="120" cy="210" r="30" fill="#ffebee" stroke="#ef5350"/><text x="120" y="214" text-anchor="middle">Posesiones</text>
                    <circle cx="320" cy="230" r="30" fill="#ffebee" stroke="#ef5350"/><text x="320" y="234" text-anchor="middle">Placer</text>
                    <circle cx="520" cy="210" r="30" fill="#ffebee" stroke="#ef5350"/><text x="520" y="214" text-anchor="middle">Enemigos</text>
                </g>

                <!-- Líneas -->
                <g stroke="#90a4ae" stroke-width="1" stroke-dasharray="3,3">
                    <line x1="145" y1="75" x2="270" y2="115"/>
                    <line x1="495" y1="75" x2="370" y2="115"/>
                    <line x1="90" y1="130" x2="265" y2="130"/>
                    <line x1="550" y1="130" x2="375" y2="130"/>
                    <line x1="145" y1="200" x2="270" y2="150"/>
                    <line x1="320" y1="200" x2="320" y2="185"/>
                    <line x1="495" y1="200" x2="370" y2="150"/>
                </g>
            </svg>
            <p>Si centras tu vida en tu cónyuge, una pelea te desestabiliza. Si la centras en el dinero, una crisis económica te destruye. Si la centras en tus enemigos, ellos te manejan. <strong>Solo los principios no cambian</strong>: integridad, honestidad, dignidad humana. Centrarte en ellos te da una brújula que funciona en toda circunstancia.</p>
        </div>

        <div class="quiz-container" id="quiz_h2b">
            <div class="quiz-q">&#127919; ¿Por qué Covey recomienda centrar la vida en <em>principios</em> y no en el cónyuge, el trabajo o la familia?</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_h2b', this, false)">Porque los seres queridos no son importantes</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h2b', this, false)">Porque el trabajo y el dinero son los verdaderos valores</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h2b', this, true)">Porque los principios no cambian y te dan estabilidad, sabiduría, poder y guía en toda circunstancia</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h2b', this, false)">Porque así evitas involucrarte emocionalmente con otros</button>
            <div class="quiz-feedback" id="quiz_h2b_fb"></div>
        </div>
        `
    },

    // ============ HABITO 3 ============
    {
        id: 'h3', module: 'Hábito 3', tag: 'tag-d3', tagLabel: 'HÁBITO 3',
        title: 'Establezca Primero lo Primero',
        subtitle: 'Los principios de la administración personal',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#f57f17,#ffb300);min-height:180px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:30px;">
            <div style="text-align:center;">
                <div style="font-size:3.5em;font-weight:900;font-family:Georgia,serif;">03</div>
                <div style="font-size:1.6em;font-weight:700;letter-spacing:2px;">PRIMERO LO PRIMERO</div>
                <div style="opacity:0.9;font-style:italic;margin-top:6px;">"Lo que importa más nunca debe estar a merced de lo que importa menos"</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Reflexión del instructor</div>
                <div class="instructor-note-text">Si el Hábito 1 es "tú eres el programador" y el 2 es "escribe el programa", el 3 es "ejecuta el programa". Aquí es donde se separa quien <em>sabe</em> de quien <em>hace</em>. La matriz que verás a continuación puede cambiar radicalmente tu semana.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#128300; La Matriz de Administración del Tiempo</h3>
            <p>Toda actividad humana puede ubicarse en uno de cuatro cuadrantes según dos dimensiones: <strong>urgencia</strong> e <strong>importancia</strong>.</p>
            <svg class="svg-illustration" viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
                <!-- Encabezados -->
                <text x="220" y="25" text-anchor="middle" fill="#1a237e" font-weight="900" font-size="14">URGENTE</text>
                <text x="460" y="25" text-anchor="middle" fill="#1a237e" font-weight="900" font-size="14">NO URGENTE</text>
                <text x="30" y="115" text-anchor="middle" fill="#1a237e" font-weight="900" font-size="14" transform="rotate(-90,30,115)">IMPORTANTE</text>
                <text x="30" y="290" text-anchor="middle" fill="#1a237e" font-weight="900" font-size="14" transform="rotate(-90,30,290)">NO IMPORTANTE</text>

                <!-- Q1 -->
                <rect x="60" y="40" width="280" height="170" fill="#ffebee" stroke="#c62828" stroke-width="2"/>
                <text x="75" y="62" fill="#c62828" font-weight="900" font-size="16">I · NECESIDAD</text>
                <text x="75" y="90" fill="#c62828" font-size="12">• Crisis</text>
                <text x="75" y="108" fill="#c62828" font-size="12">• Problemas apremiantes</text>
                <text x="75" y="126" fill="#c62828" font-size="12">• Proyectos con fecha límite</text>
                <text x="75" y="144" fill="#c62828" font-size="12">• Atención médica urgente</text>
                <text x="75" y="180" fill="#c62828" font-size="11" font-style="italic">Resultado: estrés, agotamiento,</text>
                <text x="75" y="195" fill="#c62828" font-size="11" font-style="italic">administración por crisis</text>

                <!-- Q2 -->
                <rect x="340" y="40" width="280" height="170" fill="#e8f5e9" stroke="#1b5e20" stroke-width="3"/>
                <text x="355" y="62" fill="#1b5e20" font-weight="900" font-size="16">II · CALIDAD ★</text>
                <text x="355" y="90" fill="#1b5e20" font-size="12">• Planificación, prevención</text>
                <text x="355" y="108" fill="#1b5e20" font-size="12">• Construcción de relaciones</text>
                <text x="355" y="126" fill="#1b5e20" font-size="12">• Desarrollo personal</text>
                <text x="355" y="144" fill="#1b5e20" font-size="12">• Ejercicio, estudio, misión</text>
                <text x="355" y="180" fill="#1b5e20" font-size="11" font-style="italic">Resultado: visión, perspectiva,</text>
                <text x="355" y="195" fill="#1b5e20" font-size="11" font-style="italic">equilibrio, disciplina, control</text>

                <!-- Q3 -->
                <rect x="60" y="210" width="280" height="170" fill="#fff3e0" stroke="#e65100" stroke-width="2"/>
                <text x="75" y="232" fill="#e65100" font-weight="900" font-size="16">III · ENGAÑO</text>
                <text x="75" y="260" fill="#e65100" font-size="12">• Interrupciones, llamadas</text>
                <text x="75" y="278" fill="#e65100" font-size="12">• Reuniones innecesarias</text>
                <text x="75" y="296" fill="#e65100" font-size="12">• Correos "urgentes"</text>
                <text x="75" y="314" fill="#e65100" font-size="12">• Problemas de otros</text>
                <text x="75" y="350" fill="#e65100" font-size="11" font-style="italic">Resultado: concentración corto</text>
                <text x="75" y="365" fill="#e65100" font-size="11" font-style="italic">plazo, sentirse sin control</text>

                <!-- Q4 -->
                <rect x="340" y="210" width="280" height="170" fill="#f5f5f5" stroke="#616161" stroke-width="2"/>
                <text x="355" y="232" fill="#424242" font-weight="900" font-size="16">IV · DESPERDICIO</text>
                <text x="355" y="260" fill="#424242" font-size="12">• Trivialidades</text>
                <text x="355" y="278" fill="#424242" font-size="12">• Correspondencia inútil</text>
                <text x="355" y="296" fill="#424242" font-size="12">• Redes sociales excesivas</text>
                <text x="355" y="314" fill="#424242" font-size="12">• Pérdidas de tiempo</text>
                <text x="355" y="350" fill="#424242" font-size="11" font-style="italic">Resultado: irresponsabilidad,</text>
                <text x="355" y="365" fill="#424242" font-size="11" font-style="italic">dependencia, vidas arruinadas</text>
            </svg>
            <p>La gente <em>reactiva</em> vive en los cuadrantes I y III: apagando fuegos y respondiendo a lo que otros consideran urgente. La gente <em>altamente efectiva</em> <strong>reduce los cuadrantes III y IV y vive en el cuadrante II</strong>: lo importante pero no urgente.</p>
        </div>

        <div class="quiz-container" id="quiz_h3a">
            <div class="quiz-q">&#127919; ¿Cuál es el cuadrante donde vive la gente altamente efectiva?</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_h3a', this, false)">Cuadrante I: urgente e importante</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h3a', this, true)">Cuadrante II: importante pero no urgente</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h3a', this, false)">Cuadrante III: urgente pero no importante</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h3a', this, false)">Cuadrante IV: ni urgente ni importante</button>
            <div class="quiz-feedback" id="quiz_h3a_fb"></div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#127961;&#65039;</span><div>
                <h3>Las rocas grandes primero</h3>
                <p>Un profesor puso sobre la mesa un frasco grande y, junto a él, piedras grandes, grava, arena y agua. Llenó el frasco primero con <strong>las piedras grandes</strong>. Preguntó: "¿Está lleno?". Sí — respondieron.</p>
                <p>Añadió entonces <strong>la grava</strong>, que se acomodó entre las piedras. "¿Ahora?" Sí. Añadió <strong>arena</strong>; y luego <strong>agua</strong>. Todo cupo.</p>
                <p>"La lección NO es que siempre cabe más", aclaró. "La lección es: <strong>si no metes las piedras grandes primero, jamás te cabrán</strong>. Las piedras grandes son tu familia, tu salud, tu misión, tus sueños. La grava y la arena son todo lo demás."</p>
            </div></div>
        </div>

        <div class="content-card tip">
            <h3>&#128161; Delegar: de recadero a productor</h3>
            <p>No puedes vivir en el cuadrante II si intentas hacerlo todo solo. Covey distingue dos tipos de delegación:</p>
            <ul class="concept-list">
                <li><strong>Delegación en recaderos:</strong> "haz esto, haz aquello, avísame cuando termines". Mantiene al jefe como el cuello de botella y genera dependencia.</li>
                <li><strong>Delegación en encargados:</strong> se acuerdan 5 aspectos — <em>resultados deseados, directrices, recursos, rendición de cuentas, consecuencias</em>. La persona se apropia de su resultado. Tú te liberas.</li>
            </ul>
        </div>

        <div class="quiz-container" id="quiz_h3b">
            <div class="quiz-q">&#127919; Tu asistente te pregunta a cada rato "¿y ahora qué hago?". Según Covey, ¿qué tipo de delegación estás aplicando?</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_h3b', this, false)">Delegación en encargados: está bien porque hay comunicación</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h3b', this, true)">Delegación en recaderos: generas dependencia y tú sigues siendo cuello de botella</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h3b', this, false)">Micromanagement saludable</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h3b', this, false)">Empoderamiento puro</button>
            <div class="quiz-feedback" id="quiz_h3b_fb"></div>
        </div>
        `
    },

    // ============ HABITO 4 ============
    {
        id: 'h4', module: 'Hábito 4', tag: 'tag-d4', tagLabel: 'HÁBITO 4',
        title: 'Piense en Ganar/Ganar',
        subtitle: 'Los principios del liderazgo interpersonal',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#1b5e20,#66bb6a);min-height:180px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:30px;">
            <div style="text-align:center;">
                <div style="font-size:3.5em;font-weight:900;font-family:Georgia,serif;">04</div>
                <div style="font-size:1.6em;font-weight:700;letter-spacing:2px;">GANAR / GANAR</div>
                <div style="opacity:0.9;font-style:italic;margin-top:6px;">"No es tu manera ni la mía: es la mejor manera"</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Reflexión del instructor</div>
                <div class="instructor-note-text">Entramos al terreno de la interdependencia. Aquí importa mucho la <strong>cuenta bancaria emocional</strong> que tienes con cada persona: depósitos (cumplir promesas, amabilidad, disculparte) y retiros (promesas rotas, deslealtad, arrogancia). Sin saldo positivo, nada de esto funciona.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#128176; La Cuenta Bancaria Emocional</h3>
            <svg class="svg-illustration" viewBox="0 0 620 220" xmlns="http://www.w3.org/2000/svg">
                <rect x="160" y="30" width="300" height="160" rx="16" fill="#1a237e"/>
                <text x="310" y="60" text-anchor="middle" fill="#ffb300" font-weight="800" font-size="16" letter-spacing="2">CUENTA BANCARIA EMOCIONAL</text>
                <text x="180" y="95" fill="white" font-size="13">Depósitos (+)</text>
                <text x="180" y="115" fill="#a5d6a7" font-size="11">• Comprender al otro</text>
                <text x="180" y="132" fill="#a5d6a7" font-size="11">• Cumplir promesas</text>
                <text x="180" y="149" fill="#a5d6a7" font-size="11">• Disculparse sinceramente</text>
                <text x="180" y="166" fill="#a5d6a7" font-size="11">• Detalles, cortesía, lealtad</text>

                <line x1="340" y1="80" x2="340" y2="180" stroke="#ffb300" stroke-width="1" stroke-dasharray="3,3"/>
                <text x="360" y="95" fill="white" font-size="13">Retiros (−)</text>
                <text x="360" y="115" fill="#ef9a9a" font-size="11">• Promesas rotas</text>
                <text x="360" y="132" fill="#ef9a9a" font-size="11">• Faltas de respeto</text>
                <text x="360" y="149" fill="#ef9a9a" font-size="11">• Hablar a espaldas</text>
                <text x="360" y="166" fill="#ef9a9a" font-size="11">• Arrogancia, traiciones</text>
            </svg>
        </div>

        <div class="content-card">
            <h3>&#127919; Los 6 paradigmas de interacción humana</h3>
            <svg class="svg-illustration" viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg">
                <g font-family="sans-serif">
                    <rect x="15" y="20" width="145" height="120" rx="10" fill="#c8e6c9" stroke="#1b5e20" stroke-width="3"/>
                    <text x="87" y="55" text-anchor="middle" fill="#1b5e20" font-weight="900" font-size="15">GANAR /</text>
                    <text x="87" y="75" text-anchor="middle" fill="#1b5e20" font-weight="900" font-size="15">GANAR</text>
                    <text x="87" y="100" text-anchor="middle" fill="#1b5e20" font-size="10">Ambos salen</text>
                    <text x="87" y="115" text-anchor="middle" fill="#1b5e20" font-size="10">beneficiados</text>
                    <text x="87" y="133" text-anchor="middle" fill="#1b5e20" font-weight="700" font-size="11">★ IDEAL</text>

                    <rect x="170" y="20" width="145" height="120" rx="10" fill="#ffe0b2"/>
                    <text x="242" y="55" text-anchor="middle" fill="#e65100" font-weight="800" font-size="14">GANO /</text>
                    <text x="242" y="75" text-anchor="middle" fill="#e65100" font-weight="800" font-size="14">PIERDES</text>
                    <text x="242" y="105" text-anchor="middle" fill="#e65100" font-size="10">Autoritario,</text>
                    <text x="242" y="120" text-anchor="middle" fill="#e65100" font-size="10">competitivo</text>

                    <rect x="325" y="20" width="145" height="120" rx="10" fill="#ffe0b2"/>
                    <text x="397" y="55" text-anchor="middle" fill="#e65100" font-weight="800" font-size="14">PIERDO /</text>
                    <text x="397" y="75" text-anchor="middle" fill="#e65100" font-weight="800" font-size="14">GANAS</text>
                    <text x="397" y="105" text-anchor="middle" fill="#e65100" font-size="10">Sumiso,</text>
                    <text x="397" y="120" text-anchor="middle" fill="#e65100" font-size="10">complaciente</text>

                    <rect x="480" y="20" width="145" height="120" rx="10" fill="#ffcdd2"/>
                    <text x="552" y="55" text-anchor="middle" fill="#c62828" font-weight="800" font-size="14">PIERDO /</text>
                    <text x="552" y="75" text-anchor="middle" fill="#c62828" font-weight="800" font-size="14">PIERDES</text>
                    <text x="552" y="105" text-anchor="middle" fill="#c62828" font-size="10">Venganza,</text>
                    <text x="552" y="120" text-anchor="middle" fill="#c62828" font-size="10">orgullo herido</text>

                    <rect x="90" y="160" width="200" height="100" rx="10" fill="#bbdefb"/>
                    <text x="190" y="200" text-anchor="middle" fill="#0d47a1" font-weight="800" font-size="15">GANO (sin importar el otro)</text>
                    <text x="190" y="225" text-anchor="middle" fill="#0d47a1" font-size="11">Indiferencia al resultado del otro</text>

                    <rect x="350" y="160" width="200" height="100" rx="10" fill="#c8e6c9" stroke="#1b5e20" stroke-width="2"/>
                    <text x="450" y="190" text-anchor="middle" fill="#1b5e20" font-weight="800" font-size="15">GANAR / GANAR</text>
                    <text x="450" y="210" text-anchor="middle" fill="#1b5e20" font-weight="800" font-size="15">O NO HAY TRATO</text>
                    <text x="450" y="235" text-anchor="middle" fill="#1b5e20" font-size="11">El más maduro: si no ganamos ambos,</text>
                    <text x="450" y="250" text-anchor="middle" fill="#1b5e20" font-size="11">nos despedimos amigablemente</text>
                </g>
            </svg>
        </div>

        <div class="quiz-container" id="quiz_h4a">
            <div class="quiz-q">&#127919; ¿Cuál es el paradigma MÁS maduro según Covey?</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_h4a', this, false)">Gano/Pierdes: "el negocio es competencia"</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h4a', this, false)">Pierdo/Ganas: "mejor que el cliente se lleve todo"</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h4a', this, true)">Ganar/Ganar o no hay trato</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h4a', this, false)">Gano: "yo primero y lo demás me da igual"</button>
            <div class="quiz-feedback" id="quiz_h4a_fb"></div>
        </div>

        <div class="content-card">
            <h3>&#128279; Las 5 dimensiones del Ganar/Ganar</h3>
            <ol class="concept-list">
                <li><strong>Carácter:</strong> integridad, madurez (coraje + consideración), mentalidad de abundancia.</li>
                <li><strong>Relaciones:</strong> construidas sobre confianza — el resultado de muchos depósitos.</li>
                <li><strong>Acuerdos:</strong> claros en resultados, directrices, recursos, rendición de cuentas y consecuencias.</li>
                <li><strong>Sistemas:</strong> de recompensa, capacitación y evaluación que refuercen la cooperación en vez de la competencia interna.</li>
                <li><strong>Procesos:</strong> ver el problema desde el punto de vista del otro, identificar los temas clave, decidir qué resultados constituirían una solución totalmente aceptable.</li>
            </ol>
        </div>

        <div class="quiz-container" id="quiz_h4b">
            <div class="quiz-q">&#127919; ¿Qué es la "mentalidad de abundancia" en el contexto de Ganar/Ganar?</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_h4b', this, false)">Creer que siempre habrá dinero para todos</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h4b', this, true)">Creer que hay suficiente éxito, reconocimiento y recursos para todos, sin necesidad de competir destructivamente</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h4b', this, false)">Nunca negar nada a nadie</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h4b', this, false)">Aceptar que hay personas que siempre tendrán más que uno</button>
            <div class="quiz-feedback" id="quiz_h4b_fb"></div>
        </div>
        `
    },

    // ============ HABITO 5 ============
    {
        id: 'h5', module: 'Hábito 5', tag: 'tag-d1', tagLabel: 'HÁBITO 5',
        title: 'Procure Primero Comprender...',
        subtitle: '...y después ser comprendido',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#01579b,#4fc3f7);min-height:180px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:30px;">
            <div style="text-align:center;">
                <div style="font-size:3.5em;font-weight:900;font-family:Georgia,serif;">05</div>
                <div style="font-size:1.5em;font-weight:700;letter-spacing:2px;">COMPRENDER</div>
                <div style="opacity:0.9;font-style:italic;margin-top:6px;">"Tenemos dos oídos y una boca; úsalos en esa proporción"</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Reflexión del instructor</div>
                <div class="instructor-note-text">Este es posiblemente el hábito que más diferencia a los líderes ordinarios de los extraordinarios. La mayoría escucha con la intención de <em>responder</em>, no de <em>comprender</em>. Te aseguro que la primera vez que practiques la escucha empática de verdad, tus relaciones cambiarán.</div>
            </div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#128065;&#65039;</span><div>
                <h3>El optometrista "profesional"</h3>
                <p>Imagina que vas al optometrista con un problema de vista. Llegas y, sin hacerte ninguna prueba, el hombre se quita sus propios anteojos, te los entrega y dice: "Pruébese estos, a mí me han funcionado muy bien estos diez años".</p>
                <p>Tú contestas: "Pero no veo nada". Y él replica: "Imposible, a mí me funcionan perfecto. Ponga más empeño". Le dices que te marean. "Solo tienes que intentar más".</p>
                <p><strong>Absurdo, ¿verdad?</strong> Y sin embargo eso es lo que hacemos a diario: damos consejos sin diagnosticar, sin comprender de verdad lo que el otro siente y piensa.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>&#127911; Los 5 niveles de escucha</h3>
            <svg class="svg-illustration" viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg">
                <g font-family="sans-serif">
                    <rect x="20" y="40" width="110" height="150" fill="#ffebee" stroke="#c62828" stroke-width="2"/>
                    <text x="75" y="70" text-anchor="middle" fill="#c62828" font-weight="800" font-size="11">1</text>
                    <text x="75" y="105" text-anchor="middle" fill="#c62828" font-size="11">IGNORAR</text>
                    <text x="75" y="125" text-anchor="middle" fill="#c62828" font-size="9">No oír en</text>
                    <text x="75" y="138" text-anchor="middle" fill="#c62828" font-size="9">absoluto</text>

                    <rect x="140" y="40" width="110" height="150" fill="#ffe0b2" stroke="#e65100" stroke-width="2"/>
                    <text x="195" y="70" text-anchor="middle" fill="#e65100" font-weight="800" font-size="11">2</text>
                    <text x="195" y="105" text-anchor="middle" fill="#e65100" font-size="11">FINGIR</text>
                    <text x="195" y="125" text-anchor="middle" fill="#e65100" font-size="9">"Sí, ajá,</text>
                    <text x="195" y="138" text-anchor="middle" fill="#e65100" font-size="9">ya, claro..."</text>

                    <rect x="260" y="40" width="110" height="150" fill="#fff9c4" stroke="#f9a825" stroke-width="2"/>
                    <text x="315" y="70" text-anchor="middle" fill="#f9a825" font-weight="800" font-size="11">3</text>
                    <text x="315" y="100" text-anchor="middle" fill="#f9a825" font-size="11">ESCUCHA</text>
                    <text x="315" y="115" text-anchor="middle" fill="#f9a825" font-size="11">SELECTIVA</text>
                    <text x="315" y="140" text-anchor="middle" fill="#f9a825" font-size="9">Solo partes</text>

                    <rect x="380" y="40" width="110" height="150" fill="#c8e6c9" stroke="#388e3c" stroke-width="2"/>
                    <text x="435" y="70" text-anchor="middle" fill="#388e3c" font-weight="800" font-size="11">4</text>
                    <text x="435" y="100" text-anchor="middle" fill="#388e3c" font-size="11">ESCUCHA</text>
                    <text x="435" y="115" text-anchor="middle" fill="#388e3c" font-size="11">ATENTA</text>
                    <text x="435" y="140" text-anchor="middle" fill="#388e3c" font-size="9">Pongo esfuerzo</text>

                    <rect x="500" y="40" width="120" height="150" fill="#bbdefb" stroke="#0d47a1" stroke-width="3"/>
                    <text x="560" y="70" text-anchor="middle" fill="#0d47a1" font-weight="900" font-size="13">5 ★</text>
                    <text x="560" y="100" text-anchor="middle" fill="#0d47a1" font-weight="800" font-size="11">EMPÁTICA</text>
                    <text x="560" y="125" text-anchor="middle" fill="#0d47a1" font-size="9">Comprendo</text>
                    <text x="560" y="138" text-anchor="middle" fill="#0d47a1" font-size="9">desde SU</text>
                    <text x="560" y="151" text-anchor="middle" fill="#0d47a1" font-size="9">marco mental</text>

                    <text x="320" y="212" text-anchor="middle" fill="#455a64" font-size="11" font-style="italic">Solo el nivel 5 es comunicación real</text>
                </g>
            </svg>
        </div>

        <div class="content-card">
            <h3>&#128483;&#65039; Las 4 respuestas autobiográficas (evita estas)</h3>
            <p>Cuando escuchamos sin empatía, solemos responder desde nuestra propia biografía:</p>
            <ol class="concept-list">
                <li><strong>Evaluar:</strong> de acuerdo o desacuerdo. "Tienes razón" / "No, estás equivocado".</li>
                <li><strong>Sondear:</strong> hacer preguntas desde nuestro propio marco. "¿Y ya hablaste con tu jefe?"</li>
                <li><strong>Aconsejar:</strong> dar consejos basados en nuestra experiencia. "Lo que yo haría es...".</li>
                <li><strong>Interpretar:</strong> explicar los motivos del otro desde nuestra psicología. "Lo que pasa es que te sientes inseguro...".</li>
            </ol>
            <p>La <strong>escucha empática</strong>, en cambio, busca reflejar el <em>contenido</em> y el <em>sentimiento</em> sin juzgar. "Te sientes frustrado porque..." Cuando el otro se siente comprendido, baja las defensas y está listo para escucharte.</p>
        </div>

        <div class="quiz-container" id="quiz_h5a">
            <div class="quiz-q">&#127919; Tu hijo llega y dice: "¡Ya no quiero ir a la escuela, es horrible!". ¿Cuál es una respuesta EMPÁTICA?</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_h5a', this, false)">"No exageres, todos pasamos por eso. Te acostumbrarás."</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h5a', this, false)">"¿Te están molestando otra vez? ¿Quién fue?"</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h5a', this, true)">"Veo que estás muy frustrado con lo que está pasando en la escuela, cuéntame más..."</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h5a', this, false)">"Lo que necesitas es tener más carácter y enfrentar los problemas."</button>
            <div class="quiz-feedback" id="quiz_h5a_fb"></div>
        </div>

        <div class="content-card tip">
            <h3>&#128161; "Después, ser comprendido"</h3>
            <p>Comprender primero no significa renunciar a expresar tus ideas. Significa <strong>ganarte el derecho</strong> de ser escuchado. Los antiguos griegos lo llamaban <em>ethos-pathos-logos</em>:</p>
            <ul class="concept-list">
                <li><strong>Ethos:</strong> tu credibilidad personal — lo que los demás saben de tu carácter.</li>
                <li><strong>Pathos:</strong> el lado emocional — tu capacidad de sintonizar con los sentimientos del otro.</li>
                <li><strong>Logos:</strong> la lógica — la razón, los datos, los argumentos.</li>
            </ul>
            <p>La mayoría intenta convencer con <em>logos</em> puro. Los grandes comunicadores construyen primero ethos y pathos, y entonces el logos funciona.</p>
        </div>

        <div class="quiz-container" id="quiz_h5b">
            <div class="quiz-q">&#127919; El orden correcto para influir genuinamente en otros es:</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_h5b', this, false)">Logos → Pathos → Ethos (primero datos, después sentir, al final credibilidad)</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h5b', this, true)">Ethos → Pathos → Logos (credibilidad, empatía emocional, lógica)</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h5b', this, false)">Solo logos: los datos convencen por sí solos</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h5b', this, false)">No importa el orden si el argumento es correcto</button>
            <div class="quiz-feedback" id="quiz_h5b_fb"></div>
        </div>
        `
    },

    // ============ HABITO 6 ============
    {
        id: 'h6', module: 'Hábito 6', tag: 'tag-d2', tagLabel: 'HÁBITO 6',
        title: 'Sinergice',
        subtitle: 'Los principios de la cooperación creativa',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#4a148c,#ab47bc);min-height:180px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:30px;">
            <div style="text-align:center;">
                <div style="font-size:3.5em;font-weight:900;font-family:Georgia,serif;">06</div>
                <div style="font-size:1.6em;font-weight:700;letter-spacing:2px;">SINERGIA</div>
                <div style="opacity:0.9;font-style:italic;margin-top:6px;">"El todo es mayor que la suma de sus partes"</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Reflexión del instructor</div>
                <div class="instructor-note-text">La sinergia no es "coincidir". Es descubrir juntos una tercera alternativa que ninguna de las partes había visto. Requiere coraje para exponer ideas y humildad para dejarse cambiar. Es la cumbre de la interdependencia.</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#10133; La ecuación de la sinergia</h3>
            <svg class="svg-illustration" viewBox="0 0 620 180" xmlns="http://www.w3.org/2000/svg">
                <circle cx="110" cy="90" r="50" fill="#1a237e" opacity="0.8"/>
                <text x="110" y="95" text-anchor="middle" fill="white" font-weight="900" font-size="28">1</text>
                <text x="110" y="155" text-anchor="middle" fill="#1a237e" font-size="12" font-weight="700">Tu visión</text>

                <text x="200" y="95" text-anchor="middle" fill="#455a64" font-weight="900" font-size="32">+</text>

                <circle cx="290" cy="90" r="50" fill="#ff8f00" opacity="0.8"/>
                <text x="290" y="95" text-anchor="middle" fill="white" font-weight="900" font-size="28">1</text>
                <text x="290" y="155" text-anchor="middle" fill="#ff8f00" font-size="12" font-weight="700">Mi visión</text>

                <text x="380" y="95" text-anchor="middle" fill="#455a64" font-weight="900" font-size="32">=</text>

                <circle cx="500" cy="90" r="75" fill="#2e7d32" opacity="0.8"/>
                <text x="500" y="100" text-anchor="middle" fill="white" font-weight="900" font-size="36">3+</text>
                <text x="500" y="170" text-anchor="middle" fill="#2e7d32" font-size="12" font-weight="700">Tercera alternativa</text>
            </svg>
            <p>En la sinergia no se negocia "a mitad de camino" (eso es compromiso, no sinergia). Se crea <strong>algo nuevo</strong> que supera a ambas propuestas individuales.</p>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#127794;</span><div>
                <h3>Valorar las diferencias</h3>
                <p>Covey cuenta la historia de un profesor que pedía a los alumnos dibujar un árbol. Cada uno lo dibujaba distinto. <strong>Esa es la riqueza</strong>: si dos personas tienen exactamente la misma opinión, una de las dos es innecesaria.</p>
                <p>La base de la sinergia es <strong>valorar</strong> — no solo <em>tolerar</em> — las diferencias mentales, emocionales y psicológicas. Ahí donde yo tengo un punto ciego, quizá tú veas claro.</p>
            </div></div>
        </div>

        <div class="quiz-container" id="quiz_h6a">
            <div class="quiz-q">&#127919; ¿Cuál NO es sinergia?</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_h6a', this, false)">Crear una solución que nadie había previsto, combinando fortalezas de ambos</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h6a', this, true)">Llegar a un punto medio donde cada uno cede el 50 %</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h6a', this, false)">Apreciar las diferencias y usarlas como materia prima creativa</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h6a', this, false)">Descubrir juntos una tercera alternativa mejor que las originales</button>
            <div class="quiz-feedback" id="quiz_h6a_fb"></div>
        </div>

        <div class="content-card">
            <h3>&#129504; Niveles de comunicación</h3>
            <svg class="svg-illustration" viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
                <!-- Niveles crecientes -->
                <polygon points="100,210 500,210 450,170 150,170" fill="#ffcdd2" stroke="#c62828"/>
                <text x="300" y="195" text-anchor="middle" fill="#c62828" font-weight="800" font-size="13">DEFENSIVA (Ganar/Perder)</text>
                <text x="300" y="158" text-anchor="middle" fill="#c62828" font-size="10" font-style="italic">Baja confianza, baja cooperación</text>

                <polygon points="150,150 450,150 400,110 200,110" fill="#fff9c4" stroke="#f9a825"/>
                <text x="300" y="135" text-anchor="middle" fill="#f9a825" font-weight="800" font-size="13">RESPETUOSA (Compromiso)</text>
                <text x="300" y="100" text-anchor="middle" fill="#f9a825" font-size="10" font-style="italic">Confianza media, transacción</text>

                <polygon points="200,90 400,90 370,30 230,30" fill="#c8e6c9" stroke="#1b5e20" stroke-width="3"/>
                <text x="300" y="65" text-anchor="middle" fill="#1b5e20" font-weight="900" font-size="14">SINÉRGICA ★</text>
                <text x="300" y="82" text-anchor="middle" fill="#1b5e20" font-size="11">Alta confianza + Alta cooperación</text>
                <text x="300" y="22" text-anchor="middle" fill="#1b5e20" font-size="10" font-style="italic">Crea 3ras alternativas</text>
            </svg>
        </div>

        <div class="content-card tip">
            <h3>&#128161; El proceso de la 3ª alternativa</h3>
            <ol class="concept-list">
                <li>"¿Estarías dispuesto a buscar una solución que sea <strong>mejor</strong> que la que cada uno propone ahora?"</li>
                <li>Define <strong>qué sería un mejor resultado</strong> para ambos (criterios de éxito).</li>
                <li>Expongan ambas propuestas sin atacarlas. Enumeren sus ventajas.</li>
                <li>Combinen, modifiquen, descarten y <strong>creen</strong> una nueva propuesta juntos.</li>
                <li>Celébrenla: es hija de ambos, nadie perdió.</li>
            </ol>
        </div>

        <div class="quiz-container" id="quiz_h6b">
            <div class="quiz-q">&#127919; ¿Qué dos condiciones son indispensables para que haya sinergia real?</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_h6b', this, false)">Jerarquía clara y respeto a la autoridad</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h6b', this, true)">Alta confianza (carácter) y alta cooperación (habilidades interpersonales)</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h6b', this, false)">Tiempo ilimitado y recursos abundantes</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h6b', this, false)">Que todos estén de acuerdo desde el principio</button>
            <div class="quiz-feedback" id="quiz_h6b_fb"></div>
        </div>
        `
    },

    // ============ HABITO 7 ============
    {
        id: 'h7', module: 'Hábito 7', tag: 'tag-d3', tagLabel: 'HÁBITO 7',
        title: 'Afile la Sierra',
        subtitle: 'Los principios de la autorrenovación equilibrada',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#004d40,#26a69a);min-height:180px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:30px;">
            <div style="text-align:center;">
                <div style="font-size:3.5em;font-weight:900;font-family:Georgia,serif;">07</div>
                <div style="font-size:1.6em;font-weight:700;letter-spacing:2px;">AFILAR LA SIERRA</div>
                <div style="opacity:0.9;font-style:italic;margin-top:6px;">"Si no afilas la sierra, cortarás cada vez menos"</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Reflexión del instructor</div>
                <div class="instructor-note-text">He visto directivos brillantes arruinar carreras por no haber afilado su sierra. Este hábito no es "el bonus al final": es lo que hace posibles los otros seis. Sin renovación, tu proactividad se agota, tu misión se olvida y tus relaciones se secan.</div>
            </div>
        </div>

        <div class="content-card story">
            <div class="icon-text"><span class="icon">&#129683;</span><div>
                <h3>El leñador incansable</h3>
                <p>Ves a un leñador que lleva horas serruchando un tronco, sudando, exhausto. "¿Por qué no para un momento y afila la sierra?", le preguntas. Él responde, sin parar: "¡No tengo tiempo! Tengo que cortar este tronco".</p>
                <p>Absurdo, pero así vivimos muchos: demasiado ocupados en resultados como para invertir en nosotros mismos. Y mientras más nos agotamos, más se embota nuestra sierra — y peor trabajamos.</p>
            </div></div>
        </div>

        <div class="content-card">
            <h3>&#127775; Las cuatro dimensiones de la renovación</h3>
            <svg class="svg-illustration" viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
                <circle cx="320" cy="160" r="50" fill="#1a237e"/>
                <text x="320" y="155" text-anchor="middle" fill="#ffb300" font-weight="800" font-size="11">AFILA</text>
                <text x="320" y="170" text-anchor="middle" fill="#ffb300" font-weight="800" font-size="11">LA SIERRA</text>

                <!-- Física -->
                <g>
                    <circle cx="320" cy="50" r="38" fill="#ef5350"/>
                    <text x="320" y="45" text-anchor="middle" fill="white" font-weight="800" font-size="14">FÍSICA</text>
                    <text x="320" y="60" text-anchor="middle" fill="white" font-size="10">ejercicio · dieta · descanso</text>
                </g>

                <!-- Mental -->
                <g>
                    <circle cx="520" cy="160" r="38" fill="#ffb300"/>
                    <text x="520" y="155" text-anchor="middle" fill="white" font-weight="800" font-size="14">MENTAL</text>
                    <text x="520" y="170" text-anchor="middle" fill="white" font-size="10">leer · aprender · escribir</text>
                </g>

                <!-- Espiritual -->
                <g>
                    <circle cx="120" cy="160" r="38" fill="#00838f"/>
                    <text x="120" y="155" text-anchor="middle" fill="white" font-weight="800" font-size="12">ESPIRITUAL</text>
                    <text x="120" y="170" text-anchor="middle" fill="white" font-size="10">meditar · misión · valores</text>
                </g>

                <!-- Social/emocional -->
                <g>
                    <circle cx="320" cy="270" r="45" fill="#2e7d32"/>
                    <text x="320" y="260" text-anchor="middle" fill="white" font-weight="800" font-size="12">SOCIAL/</text>
                    <text x="320" y="275" text-anchor="middle" fill="white" font-weight="800" font-size="12">EMOCIONAL</text>
                    <text x="320" y="290" text-anchor="middle" fill="white" font-size="10">relaciones · servicio</text>
                </g>

                <!-- Líneas conectoras -->
                <g stroke="#1a237e" stroke-width="2" opacity="0.4">
                    <line x1="320" y1="88" x2="320" y2="110"/>
                    <line x1="482" y1="160" x2="370" y2="160"/>
                    <line x1="158" y1="160" x2="270" y2="160"/>
                    <line x1="320" y1="225" x2="320" y2="210"/>
                </g>
            </svg>
        </div>

        <div class="content-card">
            <h3>&#128200; P/CP: el dilema del equilibrio</h3>
            <p>Covey define la efectividad como el equilibrio entre <strong>P (producción)</strong> — los resultados que obtienes — y <strong>CP (capacidad de producción)</strong> — el bien que produce esos resultados.</p>
            <svg class="svg-illustration" viewBox="0 0 620 160" xmlns="http://www.w3.org/2000/svg">
                <line x1="310" y1="20" x2="310" y2="140" stroke="#455a64" stroke-width="2"/>
                <polygon points="310,10 300,28 320,28" fill="#455a64"/>
                <line x1="120" y1="100" x2="500" y2="100" stroke="#455a64" stroke-width="3"/>
                <polygon points="115,100 135,92 135,108" fill="#455a64"/>
                <polygon points="505,100 485,92 485,108" fill="#455a64"/>

                <circle cx="210" cy="100" r="35" fill="#ffb300"/>
                <text x="210" y="97" text-anchor="middle" fill="white" font-weight="800" font-size="14">P</text>
                <text x="210" y="112" text-anchor="middle" fill="white" font-size="9">resultados</text>

                <circle cx="410" cy="100" r="35" fill="#2e7d32"/>
                <text x="410" y="97" text-anchor="middle" fill="white" font-weight="800" font-size="12">CP</text>
                <text x="410" y="112" text-anchor="middle" fill="white" font-size="9">capacidad</text>

                <text x="310" y="152" text-anchor="middle" fill="#455a64" font-size="12" font-style="italic">Afilar la sierra = invertir en CP</text>
            </svg>
            <p>La gallina de los huevos de oro de Esopo: si solo quieres más huevos (P) y descuidas a la gallina (CP), terminarás sin huevos y sin gallina. Afilar la sierra es cuidar la gallina.</p>
        </div>

        <div class="quiz-container" id="quiz_h7a">
            <div class="quiz-q">&#127919; ¿Cuáles son las cuatro dimensiones de la renovación según el Hábito 7?</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_h7a', this, false)">Trabajo, familia, amigos y ocio</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h7a', this, true)">Física, mental, espiritual y social/emocional</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h7a', this, false)">Lectura, ejercicio, oración y terapia</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h7a', this, false)">Corto, mediano, largo plazo y estratégica</button>
            <div class="quiz-feedback" id="quiz_h7a_fb"></div>
        </div>

        <div class="content-card">
            <h3>&#128007; La espiral ascendente</h3>
            <p>Los 7 hábitos no son una línea recta sino una <strong>espiral ascendente</strong>. Cada vuelta te encuentras en el mismo punto pero en un nivel más alto. Aprender → comprometerse → hacer. Y otra vez. Y otra.</p>
            <p>El propio Covey reconocía que, como todos, cada día fallaba en alguno de los 7 hábitos. Pero volvía, una y otra vez. <strong>La efectividad no es un destino: es una práctica diaria</strong>.</p>
        </div>

        <div class="quiz-container" id="quiz_h7b">
            <div class="quiz-q">&#127919; ¿Qué significa P/CP en términos prácticos?</div>
            <button class="quiz-option" onclick="checkQuiz('quiz_h7b', this, false)">Producción y control presupuestal</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h7b', this, true)">Producción (resultados) y capacidad de producción (el bien que los produce); ambos deben equilibrarse</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h7b', this, false)">Productividad corporativa y personal</button>
            <button class="quiz-option" onclick="checkQuiz('quiz_h7b', this, false)">Precio vs. costo de producción</button>
            <div class="quiz-feedback" id="quiz_h7b_fb"></div>
        </div>
        `
    },

    // ============ EXAMEN FINAL ============
    {
        id: 'final_exam', module: 'Examen Final', tag: 'tag-final', tagLabel: 'EXAMEN FINAL',
        title: 'Examen Final Integrador',
        subtitle: '¡Demuestra tu dominio de los 7 Hábitos!',
        content: `
        <div class="lesson-hero" style="background:linear-gradient(135deg,#1a237e,#283593,#ff8f00);min-height:180px;display:flex;align-items:center;justify-content:center;color:white;border-radius:12px;padding:30px;">
            <div style="text-align:center;">
                <div style="font-size:2.5em;font-weight:900;">&#127942;</div>
                <div style="font-size:1.6em;font-weight:700;letter-spacing:2px;">EXAMEN FINAL</div>
                <div style="opacity:0.9;font-style:italic;margin-top:6px;">Los 7 Hábitos · Integrador</div>
            </div>
        </div>

        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Mensaje final del instructor</div>
                <div class="instructor-note-text">Has llegado al final. Este examen no busca calificarte: busca confirmar que los principios ya se quedaron contigo. Necesitas al menos <strong>7 de 10</strong>. Respira, tómate tu tiempo y recuerda: de adentro hacia afuera. ¡Éxito!</div>
            </div>
        </div>

        <div class="content-card">
            <h3>&#127919; ¡Hora de integrar lo aprendido!</h3>
            <p>Diez preguntas que abarcan paradigmas, carácter y los 7 hábitos. Necesitas <strong>al menos 7 correctas</strong> para aprobar y obtener tu certificado.</p>
        </div>

        <div class="quiz-container" id="final_q1">
            <div class="quiz-q">1. Según Covey, la diferencia esencial entre la "ética del carácter" y la "ética de la personalidad" es:</div>
            <button class="quiz-option" onclick="checkFinal('final_q1', this, true)">La primera construye el éxito desde principios internos; la segunda, desde técnicas y apariencia externa</button>
            <button class="quiz-option" onclick="checkFinal('final_q1', this, false)">La primera es religiosa, la segunda secular</button>
            <button class="quiz-option" onclick="checkFinal('final_q1', this, false)">Solo son dos nombres para el mismo concepto</button>
            <div class="quiz-feedback" id="final_q1_fb"></div>
        </div>

        <div class="quiz-container" id="final_q2">
            <div class="quiz-q">2. El Hábito 1 (Sea proactivo) enseña fundamentalmente que:</div>
            <button class="quiz-option" onclick="checkFinal('final_q2', this, false)">Hay que trabajar con anticipación</button>
            <button class="quiz-option" onclick="checkFinal('final_q2', this, true)">Entre estímulo y respuesta existe un espacio de libertad donde tú eliges la respuesta</button>
            <button class="quiz-option" onclick="checkFinal('final_q2', this, false)">Hay que ser más rápido que los demás</button>
            <div class="quiz-feedback" id="final_q2_fb"></div>
        </div>

        <div class="quiz-container" id="final_q3">
            <div class="quiz-q">3. La persona proactiva enfoca su energía en su:</div>
            <button class="quiz-option" onclick="checkFinal('final_q3', this, false)">Círculo de preocupación, para estar informada</button>
            <button class="quiz-option" onclick="checkFinal('final_q3', this, true)">Círculo de influencia, y como resultado este se expande</button>
            <button class="quiz-option" onclick="checkFinal('final_q3', this, false)">Circulo social, para tener buenos contactos</button>
            <div class="quiz-feedback" id="final_q3_fb"></div>
        </div>

        <div class="quiz-container" id="final_q4">
            <div class="quiz-q">4. "Empezar con un fin en mente" (Hábito 2) se resume en la idea de que:</div>
            <button class="quiz-option" onclick="checkFinal('final_q4', this, false)">Debes tener un plan B siempre listo</button>
            <button class="quiz-option" onclick="checkFinal('final_q4', this, true)">Todas las cosas se crean dos veces: primero mental, después físicamente</button>
            <button class="quiz-option" onclick="checkFinal('final_q4', this, false)">Hay que pensar en la jubilación desde joven</button>
            <div class="quiz-feedback" id="final_q4_fb"></div>
        </div>

        <div class="quiz-container" id="final_q5">
            <div class="quiz-q">5. En la Matriz de Administración del Tiempo, el cuadrante donde vive la gente altamente efectiva es:</div>
            <button class="quiz-option" onclick="checkFinal('final_q5', this, false)">I: urgente e importante (crisis)</button>
            <button class="quiz-option" onclick="checkFinal('final_q5', this, true)">II: importante pero no urgente (calidad, prevención, desarrollo)</button>
            <button class="quiz-option" onclick="checkFinal('final_q5', this, false)">III: urgente pero no importante (interrupciones)</button>
            <div class="quiz-feedback" id="final_q5_fb"></div>
        </div>

        <div class="quiz-container" id="final_q6">
            <div class="quiz-q">6. Un jefe que le dice a su colaborador "haz tres llamadas, envía este correo y avísame cuando termines para indicarte el siguiente paso" está ejerciendo:</div>
            <button class="quiz-option" onclick="checkFinal('final_q6', this, true)">Delegación en recaderos: mantiene al jefe como cuello de botella</button>
            <button class="quiz-option" onclick="checkFinal('final_q6', this, false)">Delegación en encargados: acuerda resultados y libera al jefe</button>
            <button class="quiz-option" onclick="checkFinal('final_q6', this, false)">Liderazgo transformacional</button>
            <div class="quiz-feedback" id="final_q6_fb"></div>
        </div>

        <div class="quiz-container" id="final_q7">
            <div class="quiz-q">7. El paradigma MÁS maduro según el Hábito 4 es:</div>
            <button class="quiz-option" onclick="checkFinal('final_q7', this, false)">Gano/Pierdes</button>
            <button class="quiz-option" onclick="checkFinal('final_q7', this, false)">Pierdo/Ganas</button>
            <button class="quiz-option" onclick="checkFinal('final_q7', this, true)">Ganar/Ganar o no hay trato</button>
            <div class="quiz-feedback" id="final_q7_fb"></div>
        </div>

        <div class="quiz-container" id="final_q8">
            <div class="quiz-q">8. La escucha empática consiste en:</div>
            <button class="quiz-option" onclick="checkFinal('final_q8', this, false)">Dar consejos rápidamente basados en tu experiencia</button>
            <button class="quiz-option" onclick="checkFinal('final_q8', this, false)">Hacer muchas preguntas desde tu propio marco de referencia</button>
            <button class="quiz-option" onclick="checkFinal('final_q8', this, true)">Comprender al otro desde SU marco mental y reflejar contenido y sentimiento sin juzgar</button>
            <div class="quiz-feedback" id="final_q8_fb"></div>
        </div>

        <div class="quiz-container" id="final_q9">
            <div class="quiz-q">9. La sinergia (Hábito 6) produce matemáticamente un resultado de:</div>
            <button class="quiz-option" onclick="checkFinal('final_q9', this, false)">1 + 1 = 2 (cada parte aporta exactamente lo suyo)</button>
            <button class="quiz-option" onclick="checkFinal('final_q9', this, false)">1 + 1 = 1,5 (cada parte cede algo)</button>
            <button class="quiz-option" onclick="checkFinal('final_q9', this, true)">1 + 1 ≥ 3 (una tercera alternativa superior a la suma de las partes)</button>
            <div class="quiz-feedback" id="final_q9_fb"></div>
        </div>

        <div class="quiz-container" id="final_q10">
            <div class="quiz-q">10. "Afilar la sierra" (Hábito 7) implica renovarse en estas cuatro dimensiones:</div>
            <button class="quiz-option" onclick="checkFinal('final_q10', this, true)">Física, mental, espiritual y social/emocional</button>
            <button class="quiz-option" onclick="checkFinal('final_q10', this, false)">Intelectual, financiera, profesional y familiar</button>
            <button class="quiz-option" onclick="checkFinal('final_q10', this, false)">Técnica, táctica, estratégica y operativa</button>
            <div class="quiz-feedback" id="final_q10_fb"></div>
        </div>

        <div id="finalResult" style="display:none;margin-top:20px;padding:24px;border-radius:12px;text-align:center;animation:pop 0.4s;">
            <div style="font-size:3em;" id="finalEmoji"></div>
            <h2 id="finalTitle" style="margin:10px 0;"></h2>
            <p id="finalDesc"></p>
            <div style="margin-top:16px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
                <button class="btn btn-gold" onclick="showLesson(9)">&#127942; Ver mi Certificado</button>
            </div>
        </div>
        `
    },

    // ============ CERTIFICADO ============
    {
        id: 'certificate', module: 'Certificado', tag: 'tag-final', tagLabel: 'CERTIFICADO',
        title: 'Certificado de Finalización',
        subtitle: '¡Felicidades! Has completado el curso',
        content: `
        <div class="instructor-note">
            <div class="instructor-mini-avatar"><img src="assets/instructor-german.jpg" alt="GS" onerror="this.parentNode.innerHTML='GS';"></div>
            <div class="instructor-note-body">
                <div class="instructor-note-label">Palabras finales del instructor</div>
                <div class="instructor-note-text">Has recorrido los 7 Hábitos. Ahora viene lo más importante: vivirlos. Recuerda que el cambio genuino es de adentro hacia afuera, se da en espiral ascendente y requiere práctica diaria. Empieza hoy con un hábito, uno solo, y sostenlo 30 días. El resto llegará. ¡Éxito en tu camino!</div>
            </div>
        </div>

        <div class="certificate" id="certificateEl">
            <div class="cert-seal">
                <div style="font-size:1.2em;">7H</div>
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
                <div class="cert-award-text">Por haber completado exitosamente el curso:</div>
                <div class="cert-course">Los 7 Hábitos de la Gente<br>Altamente Efectiva</div>
                <div class="cert-desc">Habiendo demostrado dominio integral de los principios del carácter, el continuum de la madurez y los siete hábitos de la efectividad personal e interpersonal, según la obra de Stephen R. Covey.</div>
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
            <button class="btn btn-success" onclick="window.location.href='index.html'">&#128218; Volver al Catálogo</button>
        </div>

        <div class="content-card" style="margin-top:30px;">
            <h3>&#128640; ¿Qué sigue ahora?</h3>
            <ol class="concept-list">
                <li><strong>Escribe tu enunciado de misión personal</strong> en una página. Revísalo cada mes.</li>
                <li><strong>Planifica tu próxima semana</strong> desde tus roles, no desde la urgencia. Coloca primero las "piedras grandes".</li>
                <li><strong>Haz un depósito diario</strong> en la cuenta bancaria emocional de alguien cercano.</li>
                <li><strong>Practica la escucha empática</strong> en la siguiente conversación difícil que tengas.</li>
                <li><strong>Bloquea tiempo semanal</strong> para afilar la sierra: ejercicio, lectura, silencio, conexión.</li>
                <li><strong>Vuelve al catálogo de TRIKLES</strong> y continúa tu crecimiento con otro curso.</li>
            </ol>
        </div>
        `
    }
]
};

// Registro global
if (typeof window !== 'undefined') {
    window.COURSE_HABITOS = COURSE_HABITOS;
    window.TRIKLES_COURSES = window.TRIKLES_COURSES || {};
    window.TRIKLES_COURSES['habitos'] = COURSE_HABITOS;
}
