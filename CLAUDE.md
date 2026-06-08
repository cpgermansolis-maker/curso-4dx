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

---

## Último avance (2026-05-28, sesión tarde)

**Módulo bonus Opus 4.8 en CLAUDE SISTEMA + 3 piezas de venta.** Lección `id:'lbonus'` (índice 28, entre M4 y examen): compara Opus 4.8 vs 4.7 con benchmarks reales y vs competencia (GPT/Gemini); no entra al examen. Reindexado `lessonRequirements` (examen→29, proyecto→30). Para venderlo: chip ⚡ Opus 4.8 en catálogo (`UPDATE_BADGES`), spotlight en landing (`meta.spotlight`), y FAQ anti-obsolescencia como primera pregunta. Ver "Componentes de venta reutilizables" arriba. Commits eeaedf7 / c1b7705 / ac0f962, todo deployado.

## Pendientes al cierre

- **Chatbot Claude API** — chat real en el landing con Cloud Function + API key Anthropic. Germán confirmó interés. Tres piezas: UI en landing, Cloud Function `chatPreventa`, rate limiting.
- **#6 Rutas de aprendizaje** — agrupar cursos en 2-3 rutas. Requiere decisión de Germán sobre qué cursos van en qué ruta.
- **#7 Métricas de resultado** — requiere encuesta real primero.
- Curar videos de Mente Millonaria (depende de Germán).
- (idea) Analítica de conversión: medir clics al CTA desde tarjetas con badge ⚡.

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
