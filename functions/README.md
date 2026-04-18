# TRIKLES Cloud Functions — Alertas por email

Esta carpeta contiene una Cloud Function de Firebase que te envía un correo automático a tu Gmail cuando un alumno deja una reseña baja (⭐⭐ o menos) de un curso.

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
