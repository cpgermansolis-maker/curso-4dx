# TRIKLES Cloud Functions

Esta carpeta contiene las funciones en la nube que potencian la plataforma:

1. **`onLowRating`** — email automático cuando un alumno deja reseña ≤ 2 ⭐
2. **`createStripeCheckout`** — crea sesión de Stripe para pagos online
3. **`stripeWebhook`** — recibe confirmación de pago e inscribe al alumno automáticamente

---

## Parte A — Alertas de reseñas bajas

## ¿Qué hace?

- Se dispara automáticamente cuando se crea o actualiza una reseña en Firestore (`ratings/{ratingId}`).
- Si la calificación es **1 o 2 estrellas**, te manda un correo con:
  - Nombre, empresa, cargo y correo del alumno
  - Curso y fecha
  - Estrellas y el texto completo de la reseña
  - Un botón para responder al alumno por email
  - Un botón para ir al panel admin
- Si ya era baja antes y solo cambió algo menor (ej. tú la ocultaste en admin), **no duplica el correo**.
- Las reseñas de 3-5 estrellas no generan correo (solo las ves en el panel).

---

## 🚀 Pasos para desplegar (primera vez)

### 1. Instalar Firebase CLI (una vez por computadora)

En PowerShell o terminal:

```bash
npm install -g firebase-tools
```

### 2. Iniciar sesión en Firebase

```bash
firebase login
```

Abrirá el navegador. Entra con la cuenta de Google que administra tu proyecto `trikles-cursos` (probablemente `cpgermansolis@gmail.com`).

### 3. Crear un "App Password" de Gmail

Gmail no permite enviar correos automatizados con tu contraseña normal. Necesitas un "App Password" (contraseña de aplicación):

1. Entra a: <https://myaccount.google.com/security>
2. Asegúrate de tener **verificación en 2 pasos** activada (si no, actívala).
3. Busca **"Contraseñas de aplicaciones"** (o "App passwords").
4. Dale nombre "TRIKLES Functions" y genera.
5. Te dará una contraseña de **16 caracteres** (ej. `abcd efgh ijkl mnop`). **Cópiala sin espacios.**

### 4. Configurar los 3 secretos de la función

Desde la carpeta raíz del proyecto (`C:\Users\user\Documents\Proyectos Claude`):

```bash
firebase functions:secrets:set GMAIL_USER
```
Te pedirá el valor. Escribe: `cpgermansolis@gmail.com` y presiona Enter.

```bash
firebase functions:secrets:set GMAIL_APP_PASSWORD
```
Valor: pega los 16 caracteres del App Password (sin espacios).

```bash
firebase functions:secrets:set ADMIN_EMAIL
```
Valor: `cpgermansolis@gmail.com` (o el correo donde quieras recibir las alertas).

### 5. Instalar dependencias

```bash
cd functions
npm install
cd ..
```

### 6. Desplegar la función

```bash
firebase deploy --only functions
```

La primera vez toma 3-5 minutos. Cuando termine verás:

```
✔  functions[onLowRating(us-central1)] Successful create operation.
```

---

## 🧪 Probar que funciona

1. Entra a tu plataforma, inscríbete a un curso cualquiera y completa el examen con suficientes aciertos.
2. Al llegar al certificado, usa el bloque de calificación y ponle **1 o 2 estrellas** + texto de prueba.
3. En **1-2 minutos** deberías recibir el correo en tu Gmail.
4. Si no llega:
   - Revisa la carpeta de spam.
   - Verifica los logs con: `firebase functions:log --only onLowRating`
   - Asegúrate que los 3 secretos estén configurados: `firebase functions:secrets:access GMAIL_USER`

---

## 📊 Costos

- Firebase Cloud Functions: **2 millones de invocaciones gratis al mes** y después $0.40 USD por millón.
- Gmail: gratis (no cuenta tus envíos normales).
- En la práctica, ni en cursos muy populares vas a rozar el costo.

---

## ⚙️ Cambiar el umbral (por ejemplo, alertar con 1-3 estrellas)

Edita `functions/index.js`:

```javascript
const LOW_RATING_THRESHOLD = 2;  // cámbialo a 3 para alertar con 1-3 estrellas
```

Luego vuelve a desplegar:

```bash
firebase deploy --only functions
```

---

## 🔄 Re-desplegar después de cambios

Cada vez que modifiques `functions/index.js`:

```bash
firebase deploy --only functions
```

---

## ❓ Problemas comunes

| Síntoma | Causa | Solución |
|---|---|---|
| "Error: Failed to authenticate" al deploy | No hiciste `firebase login` | Corre `firebase login` |
| "Missing required field: secrets" al deploy | Faltan los 3 secretos | Corre los 3 `firebase functions:secrets:set` del paso 4 |
| El correo no llega pero Firebase dice que se envió | App Password mal copiado | Vuelve a generarlo y re-configurar el secreto |
| Correos en spam | Gmail a veces lo manda allí | Marca el primero como "No es spam" para entrenar |
| "Permission denied" en Firestore | Rules muy restrictivas | Verifica que `ratings/{id}` tenga `allow read: if true;` |

---

## 🔐 Reglas de Firestore recomendadas

Para que el sistema funcione bien, en **Firebase Console → Firestore → Rules** agrega:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // ... tus reglas existentes ...

    match /ratings/{ratingId} {
      allow read: if true;
      allow create, update: if request.auth != null
        && request.resource.data.userId == request.auth.token.email;
      allow delete: if false;
    }
  }
}
```

Esto garantiza:
- Cualquiera puede leer reseñas (para mostrarlas en el catálogo)
- Solo usuarios autenticados pueden crear/editar sus propias reseñas
- Nadie puede borrar reseñas desde el cliente (solo tú en admin puedes ocultarlas)

---

# Parte B — Pagos con Stripe (inscripción automática)

Dos funciones: `createStripeCheckout` (crea sesión de pago) y `stripeWebhook` (recibe la confirmación de Stripe y escribe la inscripción en Firestore).

## 🚀 Pasos para desplegar Stripe

### 1. Crear cuenta Stripe

1. Entra a <https://dashboard.stripe.com/register>.
2. Regístrate con tu correo (`cpgermansolis@gmail.com`).
3. Selecciona país **México**, moneda MXN.
4. Completa el proceso de verificación de identidad (pide RFC, CLABE bancaria, foto INE). Tarda 1-3 días hábiles en estar 100% activo.

### 2. Empezar en modo "test" (recomendado)

Mientras te aprueban la cuenta vive, puedes usar Stripe en modo "test" que acepta tarjetas de prueba. En el dashboard hay un switch **"Test mode"** arriba a la derecha.

### 3. Copiar la Secret key

1. En el dashboard (modo test o live, ambos tienen keys):
   - **Developers → API keys**
   - Copia la **Secret key** (`sk_test_...` en test o `sk_live_...` en vivo)

### 4. Configurar el webhook

1. En el dashboard: **Developers → Webhooks → Add endpoint**
2. URL del endpoint:
   ```
   https://us-central1-trikles-cursos.cloudfunctions.net/stripeWebhook
   ```
   (se generará automáticamente al hacer el primer deploy; por ahora déjalo así aunque no exista).
3. Eventos a escuchar: **`checkout.session.completed`** (solo ese).
4. Guarda el endpoint.
5. Al crearlo, Stripe te muestra un **Signing secret** (`whsec_...`). **Cópialo.** Solo se muestra una vez — si lo pierdes tienes que regenerarlo.

### 5. Configurar los 2 secretos de Stripe en Firebase

```bash
firebase functions:secrets:set STRIPE_SECRET_KEY
```
Pega el `sk_test_...` o `sk_live_...` del paso 3.

```bash
firebase functions:secrets:set STRIPE_WEBHOOK_SECRET
```
Pega el `whsec_...` del paso 4.

### 6. Instalar dependencias (si no lo hiciste antes)

```bash
cd functions
npm install
cd ..
```

### 7. Desplegar

```bash
firebase deploy --only functions
```

Al terminar verás en la consola las URLs de las 3 funciones. Verifica que la URL del webhook coincida con la que pusiste en Stripe en el paso 4. Si es distinta, edítala en el dashboard de Stripe.

---

## 🧪 Probar Stripe (en modo test)

1. Asegúrate de estar en **modo test** de Stripe y de haber puesto la key `sk_test_...` en el secreto.
2. Abre `index.html`, inscríbete o inicia sesión con una cuenta de prueba.
3. Haz clic en **"Inscribirme"** en cualquier curso → aparece el modal.
4. Haz clic en **"💳 Pagar con tarjeta / OXXO"**.
5. Te redirige a `checkout.stripe.com` con el logo de TRIKLES y el precio correcto.
6. Usa estos datos de prueba:
   - Tarjeta: `4242 4242 4242 4242`
   - Vencimiento: cualquier fecha futura (ej. `12/30`)
   - CVC: cualquier 3 dígitos (ej. `123`)
   - Código postal: `00000` o cualquiera
7. Completa el pago. Stripe te redirige a `pago-exitoso.html`.
8. Abre la consola de **Firebase → Firestore → users → tu_email → enrollments**. Debe existir el curso con `method: "stripe"`.
9. Vuelve a `index.html`. En **"Mis cursos"** aparece el curso desbloqueado.

### Otras tarjetas de prueba útiles

| Escenario | Tarjeta |
|---|---|
| Pago exitoso con autenticación 3D Secure | `4000 0027 6000 3184` |
| Pago rechazado | `4000 0000 0000 9995` |
| Fondos insuficientes | `4000 0000 0000 9995` |

---

## 💰 Pasar a modo "Live" (producción)

Cuando Stripe verifique tu identidad y apruebe tu cuenta:

1. Activa el switch **"Live mode"** en el dashboard.
2. En **Developers → API keys** copia la nueva `sk_live_...`.
3. En **Developers → Webhooks** crea un endpoint nuevo con la misma URL pero en modo vivo. Copia el nuevo `whsec_...` (distinto al de test).
4. Actualiza los secretos en Firebase:
   ```bash
   firebase functions:secrets:set STRIPE_SECRET_KEY         # pega sk_live_...
   firebase functions:secrets:set STRIPE_WEBHOOK_SECRET     # pega whsec_... nuevo
   ```
5. Re-desplega:
   ```bash
   firebase deploy --only functions
   ```
6. Prueba con una tarjeta real tuya y un curso barato (4DX $499) antes de anunciar.

---

## 📊 Comisiones de Stripe en México

| Método | Comisión | Ejemplo con $1,599 |
|---|---|---|
| Tarjeta nacional | 3.6% + $3 MXN | $60.56 de comisión, recibes $1,538.44 |
| Tarjeta internacional | 4.6% + $3 MXN | +1% adicional |
| OXXO | 3.6% + $10 MXN fijo | $67.56 |
| Apple Pay / Google Pay | Igual que tarjeta |  |

**Sin mensualidad, sin contrato, sin setup fee.** Solo cobran si cobras.

---

## ⚙️ Cambiar precios de los cursos

Los precios están en **dos lugares que deben mantenerse en sync**:

1. **`index.html`** → objeto `PRICING` (lo que se muestra al alumno)
2. **`functions/index.js`** → objeto `COURSE_PRICES_CENTS` (lo que cobra Stripe, en centavos)

Si cambias uno sin el otro, el alumno verá un precio en la página y Stripe le cobrará otro. Asegúrate de actualizar ambos.

---

## 🔒 Seguridad

- Los secretos de Stripe **nunca** viven en el código — están en Firebase Secret Manager.
- El webhook valida la firma de Stripe antes de procesar (`STRIPE_WEBHOOK_SECRET`).
- Solo usuarios autenticados pueden crear sesiones de checkout (el `onCall` lo fuerza).
- Los precios se fijan del lado del servidor (nunca confiar en lo que envía el cliente).

---

## ❓ Problemas comunes (Stripe)

| Síntoma | Causa | Solución |
|---|---|---|
| "No se pudo crear el checkout" | Secret key mal configurado | Verifica con `firebase functions:secrets:access STRIPE_SECRET_KEY` |
| Pago exitoso pero no se inscribe | El webhook no se ejecuta | Revisa en Stripe Dashboard → Webhooks el status del endpoint |
| Webhook en rojo con "Signature error" | `STRIPE_WEBHOOK_SECRET` equivocado | Regenera el whsec en Stripe y actualízalo en Firebase |
| "Authentication required" en checkout | Modo test vs live mezclados | Asegura que key y webhook son ambos del mismo modo |
| OXXO no aparece | Moneda no es MXN | Confirma `currency: 'mxn'` en la función |

