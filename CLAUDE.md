# TRIKLES — Contexto del proyecto para Claude Code

## Qué es esto

Plataforma de cursos interactivos en Firebase Hosting. Cursos basados en libros de gestión empresarial + un curso VIP original (CLAUDE SISTEMA). Stack: HTML/CSS/JS puro, Firebase Auth + Firestore + Functions, sin framework de frontend.

---

## Archivos clave

| Archivo | Rol |
|---|---|
| `index.html` | Catálogo público, auth, pricing, ratings |
| `curso.html` | Player de lecciones + landing Coursera-style |
| `admin.html` | Panel admin (requiere custom claim `admin: true`) |
| `firebase-init.js` | Inicialización Firebase + helpers `TK.*` |
| `cursos/<id>.js` | Objeto del curso (`window.COURSE_<ID>`) |
| `assets/covers/<id>.svg` | Portadas SVG, paleta por curso |

---

## Convenciones de cursos

```js
const COURSE_X = {
  id: 'course-id',
  meta: { title, subtitle, author, instructor, level, duration,
          reflectionQuestions: ['...','...','...'] },  // opcional, 3 preguntas
  examPassScore: 11,
  certificate: { ... },
  lessonRequirements: { 0: [], 1: ['quiz_id'], ... },
  lessons: [
    { id, module, tag, tagLabel, title, subtitle, content }
  ]
};
window.COURSE_X = COURSE_X;
```

- Tags de módulos VIP: `tag-m0` … `tag-m4`, `tag-exam`, `tag-bonus` (chip dorado)
- Tags regulares: `tag-d1` … `tag-d4`, `tag-intro`, `tag-final`
- Lección especial `id: 'certificate'` dispara el flujo de certificado
- **`lessonRequirements` está indexado por POSICIÓN en el array `lessons`** (0,1,2…). Si insertas una lección en medio, hay que reindexar todas las claves siguientes. Verificar con `node --check cursos/<id>.js`.

---

## Tiers y pricing

```js
// En index.html → PRICING object
'<id>': { listPrice: N, price: N, badge: 'VIP' | 'Premium' | 'Profesional' | 'Técnico' }
```

- **VIP** (`badge: 'VIP'`): activa `body.vip-mode` en `curso.html` y sección oscura en catálogo
- `VIP_COURSE_IDS` en `curso.html` (array, actualmente `['claude-sistema']`)

---

## Sistema de certificados — CONTRATO (reparado 2026-07-15)

Todo el flujo final de `curso.html` cuelga de **dos ids exactos**. Un curso que no los use se ve perfecto hasta que un alumno llega al final, y ahí falla en silencio:

| Id de lección | De qué depende |
|---|---|
| `id: 'final_exam'` | `getExamLessonIndex()`. Sin él, `isLessonRequirementsMet` **no aplica `examPassScore`** y exige las 15 respuestas correctas para avanzar. |
| `id: 'certificate'` | `getCertLessonIndex()` + `ensureCertificateElement()`. Sin él no hay certificado inyectado: ni nombre real, ni fecha, ni folio, ni descargo SEP, ni reflexión, y **el `@media print` imprime la hoja en blanco**. |

**Reglas que no se rompen:**
- **NUNCA incrustar un certificado en el `content` de la lección.** `ensureCertificateElement()` sale temprano si ya existe `#certificateEl` → el alumno recibe su certificado **sin folio y sin el descargo de la SEP** (requisito legal). Y un bloque propio *sin* `#certificateEl` hace que la impresión salga en blanco. El certificado lo arma `curso.html`, siempre.
- **`certificate.courseNameForCert` es el nombre que se lee en el diploma.** Si falta, cae a `meta.author`, que trae copy de catálogo ("38ª edición · #1 NYT / WSJ"). La línea "Obra original de…" (marca OAC) se agrega aparte vía `meta.originalWork`.
- **`lessonRequirements` está indexado por POSICIÓN** y cada requisito debe ser un quiz que exista **en esa misma lección**.
- Verificar siempre con **`node tools/audit-cursos.js`** (ver Deploy).

**Qué pasó (2026-07-15):** 6 de 11 cursos estaban rotos sin que nadie lo notara. `codigo-honor` era **imposible de terminar** (requirements corridos un índice → la lección 22 pedía las 15 del examen, que viven en la 23, y la 23 no abría sin ellas: candado mutuo). `mente-millonaria` solo entregaba certificado con **15/15** en vez de 11/15, e imprimía en blanco (era el bug de la alumna; el fix del 2026-06-18 atacó la causa equivocada). `claude-sistema` **no entregaba certificado** aunque el landing lo prometía. `4dx`/`habitos`/`feum` emitían **sin folio ni descargo legal**. Todo reparado y verificado; commits `94044f3` y `886c3df`.

## Flujo de certificado (actualizado 2026-05-28)

1. Alumno completa todas las lecciones y aprueba el examen (`finalScore >= examPassScore`)
2. Llega a la lección `id: 'certificate'`
3. **Si `progress.reflection` no existe** → se muestra el formulario "Proyecto de reflexión" (3 preguntas abiertas, mín. 20 chars c/u, guardadas en Firestore)
4. Al enviar la reflexión → aparece el certificado
5. Si `reflection` ya existe en Firestore → va directo al certificado al reanudar

Preguntas por defecto (sobreescribibles con `meta.reflectionQuestions`):
- ¿Cuál fue el aprendizaje más importante para ti?
- ¿Qué vas a implementar en los próximos 30 días?
- ¿Cómo puedes aplicar lo aprendido hoy mismo?

**⚠️ Gotcha de impresión del certificado:** el `@media print` de `curso.html` aísla el certificado con **cascada `display:none`** (oculta todo menos la ruta a `#certificateEl`, que va en `position:static` desde arriba de la hoja) + `print-color-adjust:exact`. **NO volver al truco `visibility:hidden` + `position:absolute`**: `visibility:hidden` no saca del layout → el documento sigue altísimo y el certificado puede caer fuera de las primeras hojas.

**⚠️ CORRECCIÓN (2026-07-15) — el diagnóstico del 2026-06-18 estaba MAL.** El PDF en blanco que reportó la alumna de Mente Millonaria **no** era por el paginado en móvil: ese curso no tenía `#certificateEl` (incrustaba su certificado a mano), y el `@media print` oculta todo lo que no sea `#certificateEl` → hoja en blanco, en cualquier dispositivo. El fix de junio atacó la causa equivocada y el bug siguió vivo un mes. **Lección: antes de culpar al CSS, verificar que el elemento que el selector busca EXISTA en esa página.** Ver **Sistema de certificados — CONTRATO**.

---

## VIP skin (`body.vip-mode`)

Se activa automáticamente al cargar un curso VIP. Cambia:
- Topbar: gradiente `#0d0033 → #1a0050`, chip `✦ VIP`, XP bar lila
- Sidebar: fondo `#0f0028`, texto `#c4b5fd`, bordes morados
- Landing Coursera: hero morado en vez de navy
- Botones, lesson header, content cards: escala púrpura
- Tags: `tag-m0` slate → `tag-m4` violeta

---

## Catálogo (`index.html`)

`renderCatalog()` separa en dos secciones:
- **Visionarios VIP** — panel `#0d0033`, tarjeta horizontal (`renderVipCourseCard`)
- **Biblioteca de gestión** — grilla regular (`renderCourseCard`)

Detección VIP: `PRICING[id]?.badge === 'VIP'`

---

## Biblioteca de Autor (`libros.html` → `/libros`) — obras PROPIAS de Germán

Sección independiente para los libros que Germán **escribe** (lanzada 2026-07-21). Leer en línea + descargar gratis, **sin login**. Estética literaria oscura (negro + naranja + serif Playfair), aparte del azul de los cursos. Libros: *La Mancha Naranja* (cuento de terror, **con tráiler**) y *Dios Jugando a Ser Tú* (testimonio, 12 enseñanzas; 2026-07-22).

- **⚠️ Carpeta `biblioteca/` = PÚBLICA, opuesta a `libros/`.** `libros/` está gitignored **y** hosting-ignored (PDFs con copyright ajeno). Las obras **propias** van en `biblioteca/`, que SÍ se trackea en el repo público y SÍ se sirve. **No la agregues a ningún `ignore`.** Los fuentes que deja Germán llegan a `libros/Libros Propios/<Titulo>/` (privado) → de ahí se copian a `biblioteca/`.
- **Agregar un libro:** crear `biblioteca/<id>/` con `libro.pdf` + `portada.jpg`, y añadir un objeto al arreglo `BOOKS` en `libros.html`. Opcional: subir el contador de la franja editorial (`.lib-band`) en `index.html`.
- **Tráiler de libro (opcional, engancha en el estante):** añadir `trailer: 'biblioteca/<id>/trailer.mp4'` + `trailerPoster: '.../trailer-poster.jpg'` al objeto del libro. `libros.html` ya trae la UI: chip "🎬 Tráiler" + botón ▶ pulsante sobre la portada (`.play-badge`), botón "Ver tráiler" (`.btn-trailer`) y **lightbox de video** (`#trailer`, `openTrailer()`/`closeTrailer()`, cierra con Esc/backdrop). El póster se saca con ffmpeg (`-ss <seg> -frames:v 1`). **⚠️ Si el tráiler viene de NotebookLM trae marca de agua abajo-derecha** (~x=1098,y=648 en 1280×720) → quitarla re-encodeando con `-vf "delogo=x=..:y=..:w=..:h=.."` (baja también el peso; el de La Mancha pasó de 12.5MB a 5.4MB).
- **Lector:** PDF.js 3.11.174 UMD desde cdnjs (carga diferida, fallback a descarga si el CDN falla). Se **renderiza el PDF** en canvas (conserva el diseño del autor) y **encima va la capa de texto de PDF.js** (`renderTextLayer`, spans transparentes) para poder seleccionar y copiar.
  - **⚠️ CORRECCIÓN (2026-08-03): los 3 libros SÍ tienen texto real.** La nota vieja decía que *La Mancha Naranja* era PDF de imagen y que `pdftotext` sacaba ~10 palabras: **falso**. Verificado con PyMuPDF y con `pdftotext`: La Mancha 12,233 chars / 16 págs, Dios Jugando 19,288 / 21, ¿Ora por qué? 7,491 / 10. Los `�` de aquel diagnóstico eran **encoding de la consola**, no el PDF. (Mismo error que ya está documentado con Grep: *verificar antes de afirmar que algo está roto*.)
  - **Memoria de lectura + notas (2026-08-03):** reanuda en la última página, marcadores de página (botón 🔖 / tecla B + tira de chips), **selección nativa con menú flotante Resaltar/Copiar**, resaltados persistentes y panel lateral 📑 "Mis notas". Todo en `localStorage` (`trikles-libros-v1`) porque /libros **no tiene login** → el avance es **por dispositivo**. Los resaltados guardan rects **normalizados 0..1** respecto a la página, por eso sobreviven al zoom y al resize (no guardar px). El estante muestra avance, barra, nº de marcadores y nº de frases.
  - **Capa de texto — dos detalles que la rompen si se tocan:** (1) el canvas se renderiza a `scale * dpr` pero la capa de texto usa el viewport **sin dpr** (`cssViewport`), si no, el texto queda desalineado; (2) hay que fijar `--scale-factor` en la capa. El canvas, la capa de resaltados y la de texto viven en `.page-wrap` (`position:relative`) y en ese orden de `z-index` (texto arriba, para que la selección funcione).
- **Entradas desde el inicio:** chip "📖 Libros [Nuevo]" en la barra + franja editorial full-width antes del footer (`.lib-band`).
- **Herramientas locales de PDF/imagen/video:** **PyMuPDF (fitz) + Pillow** vía `python` (portada de la pág 1: `page.get_pixmap(matrix=fitz.Matrix(zoom,zoom))`; también se usó para recortar el headshot). **ffmpeg/ffprobe SÍ están** (winget `Gyan.FFmpeg`, no en PATH → ruta completa en `~/AppData/Local/Microsoft/WinGet/Packages/Gyan.FFmpeg*/`) — para pósters de tráiler, quitar marcas de agua (`delogo`) y re-encodear. Poppler `pdftoppm` NO está; `pdftotext` sí (Git bin), `pdfinfo` NO siempre.
- **Germán es LADE** (Licenciado en Administración de Empresas), no contador. Credencial de autoría cerrada. Detalle en memoria `project_biblioteca-de-autor.md`.

---

## Landing de curso (`curso.html` → `showCourseLanding`)

Para usuarios **no inscritos** incluye, en orden de abajo a arriba:
1. Topbar + Hero (CTA principal)
2. Stats row
3. Tabs: Acerca de · Resultados · Lecciones · Testimonios · Preguntas
4. Sección "Antes de inscribirte" — FAQ anti-objeciones (4 acordeones fijos)
5. Banner bottom CTA (`cl-bottom-cta`)
6. Widget flotante "💬 ¿Tienes dudas?" (6 Q&As, esquina inferior derecha)

---

## Componentes de venta reutilizables (creados 2026-05-28 para el bonus Opus 4.8)

Data-driven, aplicables a cualquier curso:

- **Spotlight band** (landing): banda destacada entre hero y stats. Se activa con `meta.spotlight = { eyebrow, title, text, bullets[] }`. Render en `showCourseLanding` (`spotlightHtml`), CSS `.cl-spotlight*` (gradiente morado→dorado). Si no hay `meta.spotlight`, no se renderiza.
- **Update badge** (catálogo): chip ⚡ animado sobre la portada. Config `UPDATE_BADGES = { '<id>': '⚡ texto' }` en `index.html`, render en `renderDynamicBadges`, CSS `.dbadge.updated`. Conviven con los badges Nuevo/Top rated.
- **Módulo bonus**: lección con `tag:'tag-bonus'` insertada antes del examen, NO contabilizada en el examen (es contenido extra). Recordar reindexar `lessonRequirements`.

---

## Progress en Firestore

```js
progress: {
  xp, completed[], correctQuizzes[],
  finalScore, streak,
  reflection: { q1, q2, q3, submittedAt } | null,
  lastLesson, lastActiveAt, completedDate
}
```

- **`streak`** se persiste desde 2026-06-11 (antes vivía solo en memoria del navegador y se reiniciaba a 0 cada recarga → el alumno veía "Racha: 3" siempre). Se restaura en `loadProgress`, se pinta en `updateXPBar`.
- **Examen final:** cada pregunta tiene **una sola oportunidad** (se bloquea al responder, correcta o no); al abrir el examen sin haberlo aprobado, el intento arranca limpio (`finalScore`/`finalAnswered` a 0); botón "🔄 Reintentar examen" si reprueba. NO revertir a "reintentos por pregunta" — eso inflaba el conteo y bloqueaba el certificado injustamente (bug arreglado 2026-06-11).

---

## Ratings

`RATINGS_SUMMARY[courseId]` → `{ count, sum, avg }`

- `renderRatingDisplay()` muestra "X% lo recomienda" cuando `count >= 5` y `avg >= 4.0`
- Fórmula: `Math.round(((avg - 1) / 4) * 100)`

---

## Deploy

```powershell
node tools/audit-cursos.js      # SIEMPRE antes de deployar si tocaste cursos/
git add <files>
git commit -m "mensaje"
git push origin main
npx firebase-tools deploy --only hosting
```

**`node tools/audit-cursos.js`** — audita los 11 cursos y sale con código 1 si alguno está roto. Replica la lógica de bloqueo real de `curso.html` y simula un alumno que aprueba el examen **con el mínimo** (ahí se escondían los bugs; con puntaje perfecto todo parecía sano). Detecta: falta de `id:'final_exam'`/`id:'certificate'`, certificados incrustados a mano, `lessonRequirements` desalineados o que piden quizzes de otra lección, y lecciones imposibles de desbloquear. Creado el 2026-07-15 tras descubrir que 6 de 11 cursos estaban rotos en silencio (ver **Sistema de certificados**). Si agregas un curso o mueves una lección, corre esto antes que nada.

`firebase` directo no funciona en Windows de Germán — siempre usar `npx firebase-tools`.

**Gotchas de deploy:**
- En PowerShell, los here-strings `@'...'@` para `git commit -m` se rompen si el mensaje trae comillas/espacios → usar mensaje de **una sola línea** con comillas dobles.
- **Firebase deploya desde la carpeta local, NO desde git.** Lo que esté en `.gitignore` igual se sube si no está también en `hosting.ignore` de `firebase.json`. (Así se filtraron los PDFs de `libros/`.)
- **Caché / "no se ven los cambios" (resuelto 2026-06-11):** `firebase.json` tiene `cleanUrls:true`, así que las páginas se sirven SIN extensión (`/curso`, no `/curso.html`). La regla de headers `Cache-Control` apuntaba a `**/*.@(html|js)` y NO coincidía con esas rutas limpias → caían al caché por defecto (1h). Cambiado el `source` a `**` (todas las rutas con `max-age=0, must-revalidate`). Ahora los cambios se ven al instante. **Verificar headers servidos con `curl -sIL` (con `-L`, porque `/x.html` hace 302 a `/x`).** Tras un deploy, el navegador puede tener copias viejas aún válidas (cacheadas con el header viejo de 1h) → pedir a Germán **Ctrl+Shift+R** o ventana incógnito esa primera vez.

---

## Recordatorios de inactividad (correos automáticos a alumnos)

Cloud Function **`sendInactiveReminders`** (`functions/index.js`): corre **todos los días a las 10:00 de CDMX** y le escribe, desde el Gmail de Germán vía nodemailer, a alumnos con **30+ días sin avanzar** y curso incompleto. Cooldown de 30 días por curso. Opt-out: `emailPreferences.remindersEnabled === false` + endpoint `unsubscribeReminders`. Excluye `FULL_ACCESS_EMAILS`.

- **Manda 1 correo por ALUMNO por corrida** (no uno por curso), eligiendo aquel donde está más cerca de terminar; a igualdad, el más abandonado. Antes mandaba uno por curso: un alumno con 3 cursos estancados recibía **3 correos el mismo minuto** — camino directo a que te marquen como spam. No revertir.
- ⚠️ **`COURSE_TITLES` / `COURSE_LESSON_COUNTS` / `COURSE_PASS_SCORES` duplican datos de `cursos/*.js` y se desincronizan solas.** Las functions se deployan sin la carpeta `cursos/`, por eso van a mano. **Un curso ausente de esas tablas NO recibe recordatorios y no avisa de nada.** Así pasaron meses sin seguimiento los 3 cursos lanzados después del sistema — incluidos **los dos de paga**. `COURSE_LESSON_COUNTS` es el **TOTAL** de lecciones (`lessons.length`, con intro/examen/certificado), porque se compara contra `progress.completed`. Al agregar un curso, darlo de alta en las 3 tablas y correr `node tools/audit-cursos.js`, que ya las verifica.
- **Rebotes:** un aviso de Gmail que dice "problema temporal … seguirá intentando" es del **buzón del alumno** (lleno o cuenta suspendida), no de la plataforma. Una dirección inexistente rebota **permanente y de inmediato**. No hay nada que arreglar del lado del sitio.
- Simulacro sin enviar (cuántos correos saldrían y a quién): ver `project_recordatorios-inactividad.md` en la memoria.

---

## Admin por CLI (becas / usuarios / correos)

Operaciones de admin **sin abrir `admin.html`**, reutilizando la sesión local de `firebase-tools` contra Firestore REST + identitytoolkit. Script guardado en la memoria (`memory/tool_fs-helper-trikles.js` — copiar al scratchpad y correr con `node`). Comandos: `list`, `get <email>` (doc completo con progreso), `grant <email> <courseId> <nota>` (beca, mismo formato que el panel), `lookup <email>`, `changeemail <viejo> <nuevo>`, `backup <email> <archivo>`, `delete <email> <localIdEsperado>`. Detalle y gotchas en memoria `reference_admin-cli-firestore.md`.

- **✅ Desde 2026-07-18, cambiar correo y contraseña de un alumno YA está en el PANEL** (botón "🔑 Cuenta de alumno" en `admin.html` → Cloud Functions `changeUserEmail` / `changeUserPassword`, protegidas por el claim admin, mismo patrón que `grantAdmin`). El CLI queda de respaldo. `changeUserEmail` conserva el `uid` (folios de certificado intactos — mejor que el re-registro) y mueve el doc `users/{email}`, con **rollback de Auth** si el movimiento del doc falla. `changeUserPassword` fija la clave (mín. 6). Cliente en `admin.html` (`changeStudentEmail`/`changeStudentPassword`). El aviso de abajo sigue vigente: cambiar el correo igual le rompe el login al alumno.
- **⚠️ Cambiarle el correo a un alumno le rompe el login: AVÍSALE EL MISMO DÍA.** El sitio no tiene UI para que él lo cambie, su teléfono le sigue autocompletando el correo viejo, y lo natural es que se **re-registre** en vez de escribirte. Pasó con Armando (12→16 jul): acabamos con dos cuentas y él cuatro días sin sus cursos.
- **Cambiar el correo requiere DOS lados:** Auth (`accounts:update`) **y** mover el doc `users/{email}` (el ID del doc ES el correo en minúsculas; Firestore no renombra → copiar+borrar). Hacerlo solo en la consola de Firebase deja los cursos huérfanos. Auth es solo password → la contraseña se conserva.
- **Al deshacer un cambio de correo, revertir la cuenta ORIGINAL, no adoptar la duplicada:** el folio del certificado es `buildCertFolio(uid, courseId)` → cambiar de `localId` le cambia todos los folios al alumno.
- Las becas por CLI **no disparan el webhook de Apps Script** (hoja de registro) que sí dispara el panel.
- `npx firebase-tools auth:export` lista cuentas pero trae hashes de contraseñas → borrar el export tras usarlo.

---

## Último avance (2026-07-22, tráiler de libro + 2º libro propio + learnings de SOX)

**Biblioteca de Autor — tráiler embebido + segundo libro.** *La Mancha Naranja* ahora tiene **tráiler** (chip 🎬 + botón ▶ pulsante sobre la portada + **lightbox de video** `#trailer`; campos `trailer`/`trailerPoster` en `BOOKS`, UI ya reutilizable). El video venía con **marca NotebookLM** abajo-derecha → removida con ffmpeg `delogo` y re-encodeada (12.5→5.4 MB); Germán confirmó dejarlo **sin marca**. Nuevo libro propio ***Dios Jugando a Ser Tú*** (testimonio espiritual, 21 pág, id `dios-jugando-a-ser-tu`; portada extraída de la pág 1 con PyMuPDF). Franja del inicio a "2 libros". Convención de tráiler + ffmpeg documentadas en **Biblioteca de Autor** y `project_biblioteca-de-autor.md`. Commits `51b73a4`/`3c2b250`, deployados y 200 en vivo.

**Curso SOX — `COURSE_LEARNINGS['sox']` propio.** 4 takeaways técnicos en primera persona (404a/b, top-down basado en riesgos, diseño vs efectividad operativa, severidad de deficiencias) para el texto sugerido al **compartir el certificado en LinkedIn**; reemplaza el fallback genérico. Commit `70fc6d1`, deployado (`audit-cursos.js` en verde). **Sigue pendiente la revisión técnica de Germán como SME** (ver Pendientes).

### Antes (2026-07-21, Biblioteca de Autor — libros propios de Germán)

**Nueva sección independiente "Biblioteca de Autor" (`/libros`)** para las obras que Germán **escribe** (obra propia): leer en línea con **lector PDF.js embebido** + **descargar gratis**, sin login. Estética literaria oscura (negro + naranja + serif), aparte del azul de los cursos. Primer libro: *La Mancha Naranja y el aguacero que no cesaba* (cuento de terror, 16 pág). Entradas desde el inicio: chip "📖 Libros [Nuevo]" en la barra + **franja editorial** (`.lib-band`) antes del footer. **Credencial de autoría cerrada: Germán es LADE.** Convención de carpeta, cómo agregar libros y gotchas en la sección **Biblioteca de Autor** (arriba) y en `project_biblioteca-de-autor.md`. Commits `139eebb`/`3988295`/`97afb82`, deployados y verificados 200 en vivo.

### Antes (2026-07-18, nuevo curso SOX + cambio de correo/clave en el panel)

**Nuevo curso propio: "SOX en la Práctica"** (Sarbanes-Oxley / ICFR) — id `sox`, **3ª obra original de pago** ($999, badge Premium, estética azul-dorado NO VIP), profesional/práctica, **32 lecciones** + examen 15 (pasa con 11) + certificado. Es la obra **más limpia legalmente** del catálogo: la ley SOX es dominio público; solo COSO/PCAOB tienen copyright → se enseñan sus conceptos con palabras/diagramas propios. Construido, **auditado** (`audit-cursos.js` en verde), cableado en todos los sitios (CATALOG/PRICING/PAID_COURSE_IDS/LAUNCH_DATES/order en index.html; PAID_COURSE_IDS/ENROLL_PRICING/unlock-modal/**chips CSS `.tag-s0..s5`** en curso.html; getCatalog en admin.html; COURSE_TITLES/PRICES_CENTS 99900/LESSON_COUNTS 32/PASS_SCORES 11/PREVENTA en functions) y **desplegado** (commit `5c496e8`, functions + hosting). **PENDIENTE: Germán revisa la exactitud técnica como auditor (SME) antes de promocionarlo** — está live y comprable pero sin promoción. Detalle en memoria `project_curso-sox.md`.

**Cambiar correo/clave de alumnos ya está en el panel** (antes solo por CLI). Ver **Admin por CLI**. Commit `01b2cd1`, deployado y verificado en vivo (cuenta de Armando: correo movido + login OK, folios intactos).

### Antes (2026-07-17, verificación de recordatorios + 2 pendientes cerrados)

**Recordatorios verificados en vivo.** Las corridas del 16-jul (5 correos) y 17-jul (3) salieron limpias; la lógica "1 por alumno por corrida" funciona. El "error" que reportó Germán era un **rebote benigno** (buzón del alumno lleno, no la plataforma). **Decisión:** el cooldown es por curso → un alumno puede recibir correos en días consecutivos (curso distinto); se deja así.

**Dos pendientes cerrados:** Mente Millonaria ya está en `COURSE_LEARNINGS` (commit `5c81f94`, deployado); y **backfill de folios** hecho (17 certificados pre-2026-06-15 registrados en `certificates/{folio}`; herramienta reusable `tool_backfill-folios-trikles.js` en memoria). Correo de `legal.html`: se deja igual.

**Herramienta personal de Germán (fuera de TRIKLES):** buscador offline de las **Normas Globales de Auditoría Interna 2024** (IIA) para su trabajo de auditor en Grupo TODA. Vive en `libros/` (gitignored → nunca se sube). Evaluación del libro: **no se puede convertir en curso** (es norma normativa, no libro de ideas; copyright IIA agresivo + riesgo de marca CIA). Detalle en memoria `reference_buscador-normas-auditoria.md`.

### Antes (2026-07-16, reparación del sistema de certificados + recordatorios)

**6 de 11 cursos estaban rotos en silencio.** Una auditoría de CLAUDE SISTEMA destapó que el sistema de certificados llevaba meses fallando sin que nadie lo notara: `codigo-honor` era **imposible de terminar** (candado mutuo), `mente-millonaria` solo daba certificado con 15/15 y lo imprimía en blanco, `claude-sistema` **no entregaba certificado** aunque el landing lo prometía, y 4dx/habitos/feum lo emitían **sin folio ni descargo SEP**. Todo reparado; los 11 cursos usan ya `id:'final_exam'` + `id:'certificate'` y el certificado inyectado. Detalle y reglas en **Sistema de certificados — CONTRATO**. Commits `94044f3`, `886c3df`.

**`tools/audit-cursos.js`** (commit `eed4be9`) — auditoría pre-deploy que simula un alumno aprobando **con el mínimo** y verifica también las tablas de `functions/index.js`. Ver **Deploy**.

**Recordatorios de inactividad arreglados** (commit `84eeaad`, function deployada): los 2 cursos de paga nunca mandaban recordatorio, 6 cursos mentían en el asunto, y un alumno podía recibir 3 correos de golpe. Ver **Recordatorios de inactividad**.

**Cuenta de un alumno recuperada:** Armando se había **re-registrado** con su iCloud tras el cambio de correo del 12-jul (quedaron 2 cuentas). Duplicada borrada y correo devuelto a su cuenta original, con progreso intacto. **Lección: cambiar el correo de un alumno le rompe el login → avisarle el mismo día.** Ver **Admin por CLI**.

*(Entradas anteriores a 2026-07-16 podadas — viven en git y en las memorias `project_*`. Sus gotchas ya están en las secciones técnicas de arriba: blindaje del repo público (`.gitignore` ignora `libros/` + `graphify-out/`, 2026-06-18) en **Legal**; embudo "2 gratis" (2026-06-16) en **Legal → MODELO DE MONETIZACIÓN** y `project_estrategia-embudo-2-gratis.md`; impresión de certificado, caché de deploy, examen de una oportunidad y racha persistida en sus secciones.)*

## Pendientes al cierre

- **⭐ Germán revisa la exactitud técnica del curso SOX como auditor (SME)** antes de promocionarlo: está live pero sin promoción, así que es el momento. Si algo no cuadra, se corrige y redeploya. (Credencial de autoría ya resuelta: Germán es **LADE**; `cursos/sox.js` ya lo trae.) Ver `project_curso-sox.md`.
- ✅ ~~**Cambiar correo/clave desde el panel**~~ — HECHO 2026-07-18 (Cloud Functions `changeUserEmail`/`changeUserPassword` + modal "🔑 Cuenta de alumno" en admin.html; commit `01b2cd1`, deployado y verificado). Ver **Admin por CLI**.
- **Confirmar que el certificado ya imprime/guarda completo en celular.** Ahora sí tiene fundamento (el `#certificateEl` que el `@media print` busca ya existe en TODOS los cursos; antes faltaba en 3). **No probado en móvil real** — lo confirma un alumno imprimiendo. Si vuelve a salir en blanco, revisar el `@media print` de `curso.html`, no el curso.
- **Probar el embudo "2 gratis" en vivo (Germán, incógnito + correo de prueba):** estado `free_pick` (🎁 activar gratis) → estado `locked` tras usar el gratis (modal de desbloqueo) → estado `unlocked` tras comprar un propio ("Acceder gratis"). Ver `project_estrategia-embudo-2-gratis.md`.
- **Enviar la nota al abogado de PI** sobre el embudo (texto listo en `project_postura-legal-cobro.md`): ¿usar derivados como gancho/premio reintroduce "fin de lucro" aunque no se cobren? Germán eligió proceder.
- **Stripe LIVE:** falta la **prueba de compra real + reembolso** para validar webhook→inscripción end-to-end (cobro ya es real).
- **Destapa tu Negocio:** Germán hace su **revisión de instructor** (ya es público); decidir si OAC va también en `legal.html`/certificados de otros cursos.
- ✅ ~~**Verificador de folios (Fase 2)**~~ — HECHO 2026-06-15: Cloud Function `issueCertificate` + colección pública `certificates/{folio}` + `verificar.html`. Claim "verificable" restaurado. (Follow-up: backfill de certificados viejos, opcional.)
- ✅🤖 **Bot de preventa — ACTIVO Y VERIFICADO (2026-06-15).** `ANTHROPIC_API_KEY` puesta por Germán + `chatPreventa` desplegada; probado end-to-end (responde con precio correcto y certificado honesto). Cloud Function `chatPreventa` (onCall, modelo **`claude-haiku-4-5`** vía `@anthropic-ai/sdk`): system prompt con catálogo + política pago/gratis + certificado honesto + handoff a Germán; rate limit por IP (colección `chatLimits`, ~40 msgs/IP/día); `buildPreventaSystemPrompt(courseId)` + `PREVENTA_CATALOG` en functions/index.js. Helper `TK.chatPreventa(courseId, messages)`. Chat UI en el widget flotante del landing de curso.html (reemplazó las FAQ estáticas; degrada con gracia si la función no está activa). **ACTIVAR con:** (1) `npx firebase-tools functions:secrets:set ANTHROPIC_API_KEY` (pega la API key de Anthropic), (2) `npx firebase-tools deploy --only functions:chatPreventa --project trikles-cursos`. Para cambiar el contacto/WhatsApp del handoff: `TRIKLES_CONTACT_EMAIL`/`TRIKLES_CONTACT_WHATSAPP` en functions/index.js.
- **Recordatorios — convierten?** Las corridas del 16-jul (5 correos) y 17-jul (3) salieron limpias (verificado en logs). Falta ver si `lorelay_anerol` (a 2 lecciones de CLAUDE SISTEMA) o `blackwolf9518` (a 3) retoman. **Decisión de Germán (2026-07-17):** el cooldown es por curso, no por alumno → un alumno puede recibir correo días consecutivos (curso distinto); **dejarlo así**, no meter cooldown global sin que lo pida.
- ✅ ~~Backfill de folios · Mente Millonaria en `COURSE_LEARNINGS` · correo de `legal.html`~~ — todos HECHOS/decididos el 2026-07-17 (ver git y memorias; `tool_backfill-folios-trikles.js` sigue reusable).

---

## ⚠️ Legal — leer antes de tocar cobro o `libros/`

- **MODELO DE MONETIZACIÓN — EMBUDO "2 GRATIS" (decisión de Germán, 2026-06-16, reemplaza el "acceso abierto a todos" del 2026-06-15):**
  - **Solo se cobran las obras originales limpias:** `claude-sistema` ($649) y `destapa-tu-negocio` ($449). Comprar una **NO** incluye la otra (cada propio se paga aparte).
  - **Los cursos DERIVADOS (Mente Millonaria, La Paradoja, Hábitos, 4DX, Código de Honor, Coaching, Gerencia Efectiva, Food & Beverage, FEUM) NUNCA se cobran**, pero ya **no son gratis para todos sin condición**. Son un EMBUDO:
    1. **Gancho de registro:** el alumno se lleva **UN** curso derivado gratis (su "pick", lo elige explícitamente al inscribirse en él).
    2. **Recompensa de compra:** al comprar **cualquier** curso propio, se le **desbloquean TODOS** los derivados gratis (para siempre).
    3. **Grandfathering:** quien ya tenía derivados gratis bajo la política vieja los **conserva** (no se revoca nada).
  - ⚠️ **Matiz legal (Germán decidió "Proceder, es mi decisión"):** restringir los derivados los mete al embudo (gancho + premio por compra). Siguen **sin cobrarse directamente**, pero ya no son "gratis sin ataduras" como antes — un abogado podría ver que aportan valor comercial a la venta. Nota lista para el abogado de PI en `project_postura-legal-cobro.md`.
  - Implementación: `PAID_COURSE_IDS = ['claude-sistema','destapa-tu-negocio']` + helpers `hasPurchasedAnyPaidCourse()`, `hasUsedFreePick()` (cuenta derivados inscritos ≥1), `derivedAccessState(id)` → `unlocked`/`free_pick`/`locked`. **Espejados en `curso.html` e `index.html`** (incluye `FULL_ACCESS_EMAILS` en ambos). Todo se **deriva de `enrollments`** (no hay campo nuevo): derivado con `source:'free_request'` = pick/grandfather; propio con `method:'stripe'`/`paidAt` = compra que desbloquea todo. **Sin cambios de servidor para el desbloqueo** (es client-side). CTAs del landing por estado; modal `clShowUnlockUpsell()` para `locked`; banner "1 curso gratis" en el catálogo (`hasFreePickAvailable()`); bot (`buildPreventaSystemPrompt`) actualizado. `COURSE_PRICES_CENTS` sigue con solo los 2 limpios (el servidor rechaza cobrar derivados). Commit `371d86c`.
  - ✅ **Stripe LIVE activado (2026-06-15):** Germán puso `STRIPE_SECRET_KEY=sk_live_...` + creó webhook live (`https://stripewebhook-y57ht7jzda-uc.a.run.app`, eventos checkout.session.completed/async_payment_succeeded/async_payment_failed) y su `STRIPE_WEBHOOK_SECRET`; redeployadas `createStripeCheckout` + `stripeWebhook`. El cobro de claude-sistema ($649) y destapa ($449) es REAL. Pendiente solo: prueba de compra real + reembolso (validar webhook→inscripción). Nota Stripe: 1ª transferencia a banco suele retenerse ~7 días en cuentas nuevas.
- **`libros/**` está excluido del hosting** en `firebase.json` → `hosting.ignore` (commit 216aacb). NO quitarlo: Firebase deploya desde la carpeta local, no desde git, así que el `.gitignore` no basta. Los PDFs fuente NO deben servirse públicamente.
- **⚠️ El repo de GitHub es PÚBLICO** (`cpgermansolis-maker/curso-4dx`). `hosting.ignore` protege el SITIO; **`.gitignore` protege el REPO** — son listas distintas y AMBAS importan. Desde 2026-06-18 `.gitignore` ignora `libros/` completa (antes era lista parcial → se colaban libros nuevos) y `graphify-out/` (artefacto + `converted/` deriva de los libros). Al agregar material con copyright, confirmar que cae bajo `.gitignore`, no solo bajo `hosting.ignore`.
- **Certificados:** ya llevan descargo "sin validez oficial ante la SEP" + folio único + página `legal.html`. No quitar el descargo.
- Detalle completo en memoria: `project_postura-legal-cobro.md` y `project_blindaje-legal-certificados.md`.

## Lo que NO cambiar sin revisar primero

- `getCatalog()` en `admin.html` — lista hardcoded separada del `CATALOG` de `index.html`. Si se agrega un curso nuevo, agregar en ambos lados.
- Firestore rules — estrictas desde 2026-05-14 (dueño-solo + admin claim). No relajar sin análisis.
- `VIP_COURSE_IDS` en `curso.html` — array que activa `body.vip-mode`. Agregar IDs aquí al crear nuevos cursos VIP.
- **Landing de curso PÚBLICO para no-logueados (2026-06-15):** `curso.html` ya NO redirige a `index.html` a visitantes sin sesión; les muestra el landing con el asistente de preventa (para alcanzar prospectos fríos). NO revertir esa redirección. El widget de ayuda/bot solo aparece para NO inscritos (`!enrolled`), y las cuentas `FULL_ACCESS_EMAILS` cuentan como inscritas → el dueño no ve el widget salvo en incógnito.
