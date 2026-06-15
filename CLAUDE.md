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
git add <files>
git commit -m "mensaje"
git push origin main
npx firebase-tools deploy --only hosting
```

`firebase` directo no funciona en Windows de Germán — siempre usar `npx firebase-tools`.

**Gotchas de deploy:**
- En PowerShell, los here-strings `@'...'@` para `git commit -m` se rompen si el mensaje trae comillas/espacios → usar mensaje de **una sola línea** con comillas dobles.
- **Firebase deploya desde la carpeta local, NO desde git.** Lo que esté en `.gitignore` igual se sube si no está también en `hosting.ignore` de `firebase.json`. (Así se filtraron los PDFs de `libros/`.)
- **Caché / "no se ven los cambios" (resuelto 2026-06-11):** `firebase.json` tiene `cleanUrls:true`, así que las páginas se sirven SIN extensión (`/curso`, no `/curso.html`). La regla de headers `Cache-Control` apuntaba a `**/*.@(html|js)` y NO coincidía con esas rutas limpias → caían al caché por defecto (1h). Cambiado el `source` a `**` (todas las rutas con `max-age=0, must-revalidate`). Ahora los cambios se ven al instante. **Verificar headers servidos con `curl -sIL` (con `-L`, porque `/x.html` hace 302 a `/x`).** Tras un deploy, el navegador puede tener copias viejas aún válidas (cacheadas con el header viejo de 1h) → pedir a Germán **Ctrl+Shift+R** o ventana incógnito esa primera vez.

---

## Último avance (2026-06-16, embudo "2 gratis" + Stripe LIVE probándose)

**Cambio de estrategia de monetización → EMBUDO.** Los cursos derivados dejaron de ser "gratis para todos" y pasaron a ser gancho+recompensa: (1) **1 curso derivado gratis al registrarse** (pick explícito), (2) **comprar un curso propio desbloquea TODOS los derivados gratis**, (3) **grandfathering** (quien ya tenía derivados los conserva). Implementado con helpers `hasPurchasedAnyPaidCourse`/`hasUsedFreePick`/`derivedAccessState` espejados en `curso.html` e `index.html`, todo derivado de `enrollments` (sin schema nuevo, sin cambios de servidor). Estados `unlocked`/`free_pick`/`locked` en landing + catálogo; modal `clShowUnlockUpsell` para upsell; banner "1 gratis"; bot actualizado. Ver sección **Legal → MODELO DE MONETIZACIÓN** y memoria `project_estrategia-embudo-2-gratis.md`. Commit `371d86c`, deployado (hosting + `chatPreventa`). **Germán decidió "Proceder" sobre el matiz legal; queda nota para su abogado de PI.** Pendiente: él prueba el flujo en vivo (incógnito).

### Antes (2026-06-15, monetización "acceso abierto" + Stripe LIVE + bot + verificador)

Cobro reactivado solo para los 2 limpios; **derivados gratis para todos sin condición** (esta política la reemplazó el embudo del 2026-06-16). Stripe LIVE activado, bot de preventa activo/verificado, verificador de folios (`verificar.html` + `issueCertificate`), Fable 5 reescrito como lección durable. Detalle en las memorias respectivas.

## Avance (2026-06-11, piloto Destapa tu Negocio + fixes)

**Curso piloto PUBLICADO + marca OAC.** Se reconstruyó "La Meta" (Goldratt) como **obra original** "Destapa tu Negocio" (Método FLUIR, 5 fases, 22 lecciones + examen + cert, 7 casos PYME MX). Publicado: `cursos/destapa-tu-negocio.js`, alta en CATALOG/PRICING ($449 Premium)/LAUNCH_DATES/ENROLL_PRICING/getCatalog. Flag **`meta.originalWork:true`** → curso.html dice "Obra original de…" en vez de "Basado en el libro de…" (6 sitios). Portada SVG premium con **logo OAC vectorizado protagonista + TRIKLES discreto**; mismo branding agregado a la portada de CLAUDE SISTEMA. Inventario de ideas + blueprint + regla anti-derivado en `libros/LaMeta/`. Detalle en memoria `project_piloto-destapa-tu-negocio.md`.

**Acceso total del dueño:** `FULL_ACCESS_EMAILS` en curso.html (`cpgermansolis@gmail.com`, `gerloxsolis@gmail.com`) entran a cualquier curso sin beca. Memoria `reference_acceso-total-cuentas.md`.

**Fixes:** (1) racha persistida en Firestore; (2) examen con una oportunidad por pregunta (ver sección Progress). (3) **Caché**: `cleanUrls` servía páginas sin extensión (`/curso`) que no casaban con la regla de headers `**/*.@(html|js)` → caché de 1h. Cambiado `source` a `**`. Ver Gotchas de deploy. Commits `9de3af9`→`8f97dba`, deployado.

### Antes (2026-06-09, bonus Fable 5)

**Módulo bonus 2 en CLAUDE SISTEMA (`lbonus2`, quizzes `quiz_fable_a/b`, no entran al examen; índices: bonus=29, examen=30, cert=31).** Originalmente (2026-06-09, commit `3fc7436`) promocionaba Claude Fable 5. **Anthropic retiró Fable 5; el 2026-06-15 (commit `7f5effa`) se reescribió** como lección DURABLE de selección de modelo ("Cuándo subir de modelo… el caso Fable 5"), badge `UPDATE_BADGES['claude-sistema']='⚡ Actualizado'`. **El patrón "bonus por modelo nuevo" resultó frágil → preferir contenido agnóstico de modelo.** Detalle en memoria `project_bonus-fable5-claude-sistema.md`.

## Pendientes al cierre

- 🆕 **Probar el embudo "2 gratis" en vivo (Germán, incógnito + correo de prueba):** estado `free_pick` (🎁 activar gratis) → estado `locked` tras usar el gratis (modal de desbloqueo) → estado `unlocked` tras comprar un propio ("Acceder gratis"). Ver `project_estrategia-embudo-2-gratis.md`.
- 🆕 **Enviar la nota al abogado de PI** sobre el embudo (texto listo en `project_postura-legal-cobro.md`): ¿usar derivados como gancho/premio reintroduce "fin de lucro" aunque no se cobren? Germán eligió proceder.
- **Stripe LIVE:** falta la **prueba de compra real + reembolso** para validar webhook→inscripción end-to-end (cobro ya es real).
- **Destapa tu Negocio:** Germán hace su **revisión de instructor** (ya es público); decidir si OAC va también en `legal.html`/certificados de otros cursos.
- ✅ ~~Cobrar CLAUDE SISTEMA + Destapa~~ — ACTIVO desde 2026-06-15 (Stripe LIVE real). Falta solo la prueba de compra+reembolso (arriba).
- ✅ ~~**Verificador de folios (Fase 2)**~~ — HECHO 2026-06-15: Cloud Function `issueCertificate` + colección pública `certificates/{folio}` + `verificar.html`. Claim "verificable" restaurado. (Follow-up: backfill de certificados viejos, opcional.)
- ✅ ~~Fable 5 bonus~~ — HECHO 2026-06-15: Anthropic retiró Fable 5; `lbonus2` reescrito como lección durable de selección de modelo (caso Fable 5), badge a `⚡ Actualizado`.
- ✅🤖 **Bot de preventa — ACTIVO Y VERIFICADO (2026-06-15).** `ANTHROPIC_API_KEY` puesta por Germán + `chatPreventa` desplegada; probado end-to-end (responde con precio correcto y certificado honesto). Cloud Function `chatPreventa` (onCall, modelo **`claude-haiku-4-5`** vía `@anthropic-ai/sdk`): system prompt con catálogo + política pago/gratis + certificado honesto + handoff a Germán; rate limit por IP (colección `chatLimits`, ~40 msgs/IP/día); `buildPreventaSystemPrompt(courseId)` + `PREVENTA_CATALOG` en functions/index.js. Helper `TK.chatPreventa(courseId, messages)`. Chat UI en el widget flotante del landing de curso.html (reemplazó las FAQ estáticas; degrada con gracia si la función no está activa). **ACTIVAR con:** (1) `npx firebase-tools functions:secrets:set ANTHROPIC_API_KEY` (pega la API key de Anthropic), (2) `npx firebase-tools deploy --only functions:chatPreventa --project trikles-cursos`. Para cambiar el contacto/WhatsApp del handoff: `TRIKLES_CONTACT_EMAIL`/`TRIKLES_CONTACT_WHATSAPP` en functions/index.js.
- Revisar correo de contacto en `legal.html` (hoy cpgermansolis@gmail.com).

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
- **Certificados:** ya llevan descargo "sin validez oficial ante la SEP" + folio único + página `legal.html`. No quitar el descargo.
- Detalle completo en memoria: `project_postura-legal-cobro.md` y `project_blindaje-legal-certificados.md`.

## Lo que NO cambiar sin revisar primero

- `getCatalog()` en `admin.html` — lista hardcoded separada del `CATALOG` de `index.html`. Si se agrega un curso nuevo, agregar en ambos lados.
- Firestore rules — estrictas desde 2026-05-14 (dueño-solo + admin claim). No relajar sin análisis.
- `VIP_COURSE_IDS` en `curso.html` — array que activa `body.vip-mode`. Agregar IDs aquí al crear nuevos cursos VIP.
- **Landing de curso PÚBLICO para no-logueados (2026-06-15):** `curso.html` ya NO redirige a `index.html` a visitantes sin sesión; les muestra el landing con el asistente de preventa (para alcanzar prospectos fríos). NO revertir esa redirección. El widget de ayuda/bot solo aparece para NO inscritos (`!enrolled`), y las cuentas `FULL_ACCESS_EMAILS` cuentan como inscritas → el dueño no ve el widget salvo en incógnito.
