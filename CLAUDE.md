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
  finalScore,
  reflection: { q1, q2, q3, submittedAt } | null,
  lastLesson, lastActiveAt, completedDate
}
```

---

## Ratings

`RATINGS_SUMMARY[courseId]` → `{ count, sum, avg }`

- `renderRatingDisplay()` muestra "X% lo recomienda" cuando `count >= 5` y `avg >= 4.0`
- Fórmula: `Math.round(((avg - 1) / 4) * 100)`

---

## Deploy

```powershell
git add <files>
git commit -m "mensaje"
git push origin main
npx firebase-tools deploy --only hosting
```

`firebase` directo no funciona en Windows de Germán — siempre usar `npx firebase-tools`.

**Gotchas de deploy:**
- En PowerShell, los here-strings `@'...'@` para `git commit -m` se rompen si el mensaje trae comillas/espacios → usar mensaje de **una sola línea** con comillas dobles.
- **Firebase deploya desde la carpeta local, NO desde git.** Lo que esté en `.gitignore` igual se sube si no está también en `hosting.ignore` de `firebase.json`. (Así se filtraron los PDFs de `libros/`.)

---

## Último avance (2026-06-08, sesión legal)

**Blindaje legal + copyright.** (1) `legal.html` nueva (Aviso Legal + T&C + Aviso de Privacidad LFPDPPP + Naturaleza de certificados); descargo "sin validez oficial ante la SEP" + folio único `TKS-XXXX-XXXX` en cada certificado; footer legal; claims "verificable"→"con folio único". (2) Se descubrió que los PDFs de `libros/` estaban descargables públicos en el hosting → excluidos de `hosting.ignore`, ahora 404. (3) **Decisión de Germán: cobro APAGADO**; solo CLAUDE SISTEMA es monetizable limpio (resto = derivados de libros con copyright). Commits 0a7001f / 216aacb / eda5787. Detalle y vías de monetización legal en memoria (`project_monetizacion-legal-vias.md`).

## Pendientes al cierre

- **Curso piloto** — elegir 1 curso para reconstruir como obra original de Germán (título nuevo + estructura propia + reescritura). Germán no eligió cuál aún; Claude hace la reescritura.
- **Cobrar CLAUDE SISTEMA** (limpio) cuando Germán quiera; consulta con abogado de PI para validar piloto + evaluar certificación 4DX.
- **Verificador de folios (Fase 2)** — `verificar.html` + Firestore para restaurar el claim "verificable".
- **Chatbot Claude API** (preventa) — UI + Cloud Function `chatPreventa` + rate limiting. Germán confirmó interés.
- **#6 Rutas de aprendizaje** / **#7 Métricas de resultado** — requieren decisión/encuesta de Germán.
- Revisar correo de contacto en `legal.html` (hoy cpgermansolis@gmail.com).

---

## ⚠️ Legal — leer antes de tocar cobro o `libros/`

- **Cobro APAGADO a propósito (decisión de Germán, 2026-06-08).** NO reactivar Stripe/checkout sin que él lo pida explícitamente.
- **Solo `claude-sistema` es monetizable limpio** (obra original de Germán). TODO el resto del catálogo son obras derivadas de libros con copyright vigente (confirmado: Mente Millonaria, La Paradoja, Hábitos, 4DX, Código de Honor, Coaching, Gerencia Efectiva, Food & Beverage). Cobrar por ellos (online o efectivo) expone al Art. 424 CPF (delito por fin de lucro) + daños civiles LFDA.
- **`libros/**` está excluido del hosting** en `firebase.json` → `hosting.ignore` (commit 216aacb). NO quitarlo: Firebase deploya desde la carpeta local, no desde git, así que el `.gitignore` no basta. Los PDFs fuente NO deben servirse públicamente.
- **Certificados:** ya llevan descargo "sin validez oficial ante la SEP" + folio único + página `legal.html`. No quitar el descargo.
- Detalle completo en memoria: `project_postura-legal-cobro.md` y `project_blindaje-legal-certificados.md`.

## Lo que NO cambiar sin revisar primero

- `getCatalog()` en `admin.html` — lista hardcoded separada del `CATALOG` de `index.html`. Si se agrega un curso nuevo, agregar en ambos lados.
- Firestore rules — estrictas desde 2026-05-14 (dueño-solo + admin claim). No relajar sin análisis.
- `VIP_COURSE_IDS` en `curso.html` — array que activa `body.vip-mode`. Agregar IDs aquí al crear nuevos cursos VIP.
