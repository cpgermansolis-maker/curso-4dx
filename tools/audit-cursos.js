#!/usr/bin/env node
// ============================================================
// AUDITORÍA DE CURSOS — correr ANTES de cada deploy
//
//   node tools/audit-cursos.js
//
// Sale con código 1 si algún curso está roto (sirve para CI / pre-deploy).
//
// POR QUÉ EXISTE (2026-07-15):
// Tres cursos (mente-millonaria, codigo-honor, claude-sistema) llevaban meses
// fuera del estándar de la plataforma y nadie lo detectó, porque un curso roto
// se ve perfecto hasta que un alumno llega al final:
//   · codigo-honor era IMPOSIBLE de terminar: sus lessonRequirements estaban
//     corridos un índice, así que la lección 22 exigía las 15 preguntas del
//     examen (que viven en la 23) y la 23 no se abría sin esas 15 → candado mutuo.
//   · mente-millonaria: sin id 'final_exam', la regla de examPassScore nunca
//     aplicaba y el certificado solo se alcanzaba con 15/15 en vez de 11/15.
//   · claude-sistema no tenía lección de certificado, pero el landing lo prometía.
//   · 4dx/habitos/feum incrustaban su propio #certificateEl, así que
//     ensureCertificateElement() salía temprano y el certificado se emitía sin
//     folio, sin verificación y sin el descargo de la SEP (requisito legal).
//
// Este script replica la lógica real de bloqueo de curso.html (isLessonUnlocked /
// isLessonRequirementsMet) y simula un alumno que aprueba el examen con el mínimo.
// Si ese alumno no puede recorrer el curso y desbloquear su certificado, falla.
// ============================================================

const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'cursos');

// Los cursos se registran en window.* (se cargan como <script> en el navegador)
global.window = global.window || {};

function cargarCurso(archivo) {
    for (const k of Object.keys(global.window)) delete global.window[k];
    const full = path.join(DIR, archivo);
    delete require.cache[require.resolve(full)];
    require(full);
    const id = path.basename(archivo, '.js');
    const key = Object.keys(global.window)
        .find(k => k.startsWith('COURSE_') && global.window[k] && global.window[k].id === id);
    return global.window[key] || (global.window.TRIKLES_COURSES || {})[id] || null;
}

function auditar(id, COURSE) {
    const errores = [];
    const lessons = COURSE.lessons || [];
    const REQ = COURSE.lessonRequirements || {};
    const passScore = COURSE.examPassScore || 7;

    // Los dos ganchos de los que cuelga todo el flujo final en curso.html
    const examIdx = lessons.findIndex(l => l.id === 'final_exam');
    const certIdx = lessons.findIndex(l => l.id === 'certificate');
    if (examIdx < 0) errores.push("no hay lección con id 'final_exam' → el examen se gatea pidiendo TODAS las respuestas correctas en vez de examPassScore");
    if (certIdx < 0) errores.push("no hay lección con id 'certificate' → nunca se inyecta el certificado (ni folio, ni descargo legal, ni reflexión)");

    // Nadie debe incrustar su propio certificado: ensureCertificateElement() sale
    // temprano si ya existe #certificateEl y el alumno se queda sin folio ni descargo.
    // Además, un bloque propio sin #certificateEl hace que el @media print imprima en blanco.
    lessons.forEach((l, i) => {
        const c = String(l.content || '');
        if (c.includes('id="certificateEl"')) {
            errores.push(`lección ${i} (${l.id}) incrusta su propio #certificateEl → se emite sin folio ni descargo SEP`);
        } else if (/class="cert-(container|frame)"/.test(c)) {
            errores.push(`lección ${i} (${l.id}) incrusta un certificado a mano sin #certificateEl → imprime en blanco`);
        }
    });

    if (!(COURSE.certificate && COURSE.certificate.courseNameForCert)) {
        errores.push('falta certificate.courseNameForCert → el certificado caerá al meta.author, que trae copy de catálogo');
    }

    if (Object.keys(REQ).length !== lessons.length) {
        errores.push(`lessonRequirements tiene ${Object.keys(REQ).length} claves para ${lessons.length} lecciones (está indexado por POSICIÓN: si insertas una lección hay que reindexar)`);
    }

    // Cada requisito debe ser un quiz que exista en ESA lección (el examen es aparte).
    for (const [k, v] of Object.entries(REQ)) {
        const i = Number(k);
        if (i === examIdx) continue;
        const l = lessons[i];
        if (!l) { errores.push(`lessonRequirements[${i}] no corresponde a ninguna lección`); continue; }
        const cont = String(l.content || '');
        const ausentes = (v || []).filter(q => !cont.includes(q));
        if (ausentes.length) {
            errores.push(`lessonRequirements[${i}] (${l.id}) pide quizzes que no están en esa lección: ${ausentes.slice(0, 3).join(', ')}${ausentes.length > 3 ? ` (+${ausentes.length - 3})` : ''}`);
        }
    }

    // ── Simulación: alumno que contesta bien todos los quizzes y aprueba el examen
    //    con el MÍNIMO (no con puntaje perfecto: ahí es donde se escondían los bugs).
    const correctas = new Set();
    for (const [k, v] of Object.entries(REQ)) {
        if (Number(k) === examIdx) continue;
        (v || []).forEach(q => { if (!/^final_q/.test(q)) correctas.add(q); });
    }
    const finalScore = passScore;

    // Réplica de curso.html
    const reqMet = (i) => {
        if (i === examIdx) return finalScore >= passScore;
        return (REQ[i] || []).every(q => correctas.has(q));
    };
    const unlocked = (i) => {
        if (i === 0) return true;
        if (i === certIdx) return finalScore >= passScore;
        return reqMet(i - 1);
    };

    const bloqueadas = [];
    for (let i = 0; i < lessons.length; i++) if (!unlocked(i)) bloqueadas.push(`${i} (${lessons[i].id})`);
    if (bloqueadas.length) {
        errores.push(`un alumno que aprueba con ${passScore}/${(REQ[examIdx] || []).length || '?'} NO puede abrir: ${bloqueadas.slice(0, 4).join(', ')}${bloqueadas.length > 4 ? ` (+${bloqueadas.length - 4})` : ''}`);
    }
    if (certIdx >= 0 && !unlocked(certIdx)) errores.push('el certificado no se desbloquea ni aprobando el examen');

    return { errores, examIdx, certIdx, total: lessons.length };
}

// ── Tablas de functions/index.js que duplican datos de cursos/*.js
//
// sendInactiveReminders (recordatorio diario de 10:00) NO puede importar cursos/*.js:
// las functions se deployan solas, sin esa carpeta. Así que mantiene sus propias
// tablas a mano... y se desincronizan solas. El 2026-07-15 seis cursos mandaban un
// número equivocado de lecciones en el asunto, y claude-sistema / destapa-tu-negocio /
// mente-millonaria no mandaban NADA (un curso ausente de la tabla se salta en
// silencio) — justo los dos cursos de paga sin seguimiento.
function leerTabla(src, nombre) {
    const m = src.match(new RegExp(nombre + '\\s*=\\s*\\{([\\s\\S]*?)\\}', 'm'));
    if (!m) return null;
    const out = {};
    for (const x of m[1].matchAll(/'([^']+)'\s*:\s*(\d+)/g)) out[x[1]] = Number(x[2]);
    return out;
}
function leerTitulos(src) {
    const m = src.match(/COURSE_TITLES\s*=\s*\{([\s\S]*?)\};/m);
    if (!m) return null;
    return new Set([...m[1].matchAll(/'([^']+)'\s*:/g)].map(x => x[1]));
}

function auditarFunctions(cursos) {
    const f = path.join(__dirname, '..', 'functions', 'index.js');
    if (!fs.existsSync(f)) return [];
    const src = fs.readFileSync(f, 'utf8');
    const counts = leerTabla(src, 'COURSE_LESSON_COUNTS');
    const scores = leerTabla(src, 'COURSE_PASS_SCORES');
    const titles = leerTitulos(src);
    const errores = [];
    if (!counts || !scores || !titles) {
        errores.push('no se pudieron leer las tablas de functions/index.js (¿cambió el formato?)');
        return errores;
    }
    for (const { id, total, passScore } of cursos) {
        if (!titles.has(id)) errores.push(`${id}: falta en COURSE_TITLES → nunca recibe recordatorios`);
        if (counts[id] === undefined) errores.push(`${id}: falta en COURSE_LESSON_COUNTS → nunca recibe recordatorios`);
        else if (counts[id] !== total) errores.push(`${id}: COURSE_LESSON_COUNTS dice ${counts[id]} y el curso tiene ${total} → el asunto miente ("te faltan N lecciones")`);
        if (scores[id] === undefined) errores.push(`${id}: falta en COURSE_PASS_SCORES → usaría 7 por defecto en vez de ${passScore}`);
        else if (scores[id] !== passScore) errores.push(`${id}: COURSE_PASS_SCORES dice ${scores[id]} y examPassScore es ${passScore}`);
    }
    return errores;
}

// ── main
const archivos = fs.readdirSync(DIR).filter(f => f.endsWith('.js')).sort();
let rotos = 0;
const cursosOk = [];

console.log(`Auditando ${archivos.length} cursos en cursos/\n`);

for (const f of archivos) {
    const id = path.basename(f, '.js');
    let COURSE;
    try {
        COURSE = cargarCurso(f);
    } catch (e) {
        console.log(`✗ ${id.padEnd(22)} no carga: ${e.message}`);
        rotos++;
        continue;
    }
    if (!COURSE) {
        console.log(`✗ ${id.padEnd(22)} no se registró en window.COURSE_* (revisa el registro global al final del archivo)`);
        rotos++;
        continue;
    }

    const { errores, examIdx, certIdx, total } = auditar(id, COURSE);
    const marca = errores.length ? '✗' : '✓';
    console.log(`${marca} ${id.padEnd(22)} lecciones:${String(total).padStart(2)}  examen:${String(examIdx).padStart(2)}  certificado:${String(certIdx).padStart(2)}`);
    errores.forEach(e => console.log(`${' '.repeat(4)}→ ${e}`));
    if (errores.length) rotos++;
    cursosOk.push({ id, total, passScore: COURSE.examPassScore || 7 });
}

console.log('\nTablas de functions/index.js (recordatorios de inactividad):');
const errFn = auditarFunctions(cursosOk);
if (errFn.length) errFn.forEach(e => console.log(`  ✗ ${e}`));
else console.log('  ✓ en sync con cursos/');

if (rotos || errFn.length) {
    if (rotos) console.log(`\n✗ ${rotos} curso(s) con problemas.`);
    if (errFn.length) console.log(`✗ ${errFn.length} desajuste(s) en functions/index.js.`);
    console.log('NO deployar hasta corregir.');
    process.exit(1);
}
console.log('\n✓ Todos los cursos pasan y las tablas están en sync. Listo para deploy.');
