/* =========================================================
   TRIKLES - Firebase init + data layer (compat shim)
   =========================================================
   Expone un objeto global `TK` que reemplaza al antiguo
   manejo con localStorage. Permite que los 3 HTML sigan
   usando patrones tipo getUsers() / saveUsers() pero con
   datos en la nube (Firestore) y auth real (Firebase Auth).
   ========================================================= */
(function () {
    const firebaseConfig = {
        apiKey: "AIzaSyCSlCrUSn-FU9n6C6oh0bpYRtNIfo1uNLs",
        authDomain: "trikles-cursos.firebaseapp.com",
        projectId: "trikles-cursos",
        storageBucket: "trikles-cursos.firebasestorage.app",
        messagingSenderId: "81445205637",
        appId: "1:81445205637:web:8ed614a34dfa887956dbec"
    };

    // Init (usa compat SDK para poder llamar firebase.auth() / firebase.firestore())
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.firestore();

    // Usar persistencia LOCAL (el login sobrevive a recargas y a cerrar el navegador)
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(() => {});

    // Cache en memoria
    let currentUserData = null;   // datos del doc Firestore del usuario logueado
    let currentEmail = null;      // email (lowercase) del usuario logueado
    let allUsersCache = {};       // solo para admin (cache de toda la colección)
    let readyResolve;
    const readyPromise = new Promise(res => { readyResolve = res; });
    const readyListeners = [];

    // ----- Helpers internos -----
    function emailToId(email) {
        // Firestore no permite '/' en doc IDs; email en minúsculas funciona bien.
        return email.trim().toLowerCase();
    }

    async function fetchUserDoc(email) {
        const id = emailToId(email);
        const snap = await db.collection('users').doc(id).get();
        if (!snap.exists) return null;
        return snap.data();
    }

    async function writeUserDoc(email, data) {
        const id = emailToId(email);
        await db.collection('users').doc(id).set(data, { merge: true });
    }

    // ----- Escucha cambios de auth -----
    auth.onAuthStateChanged(async (user) => {
        if (user && user.email) {
            currentEmail = emailToId(user.email);
            try {
                currentUserData = await fetchUserDoc(currentEmail);
            } catch (e) {
                console.error('[TK] Error leyendo user doc:', e);
                currentUserData = null;
            }
        } else {
            currentEmail = null;
            currentUserData = null;
        }
        // Disparar listeners de ready (la primera vez) + subsiguientes cambios
        readyResolve({ email: currentEmail, data: currentUserData });
        readyListeners.forEach(cb => { try { cb(currentEmail, currentUserData); } catch(e) {} });
    });

    // ----- API pública -----
    const TK = {
        /* ===== Session / Auth ===== */

        // Resuelve cuando se determinó el estado inicial de auth.
        // Retorna { email, data } (data puede ser null si el doc no existe todavía).
        ready() { return readyPromise; },

        // Registra listener adicional (se llama en cada cambio de auth state).
        onAuthChange(cb) { readyListeners.push(cb); },

        getCurrentEmail() { return currentEmail; },
        getCurrentUser() { return currentUserData; },
        isLoggedIn() { return !!currentEmail; },

        async register(profile, password) {
            // profile = { name, email, company, role }
            const email = emailToId(profile.email);
            let cred;
            try {
                cred = await auth.createUserWithEmailAndPassword(email, password);
            } catch (e) {
                throw new Error(friendlyAuthError(e));
            }
            const data = {
                name: profile.name,
                email: email,
                company: profile.company || '',
                role: profile.role || '',
                registeredAt: new Date().toISOString(),
                uid: cred.user.uid,
                enrollments: {}
            };
            await writeUserDoc(email, data);
            currentEmail = email;
            currentUserData = data;
            return data;
        },

        async login(email, password) {
            const e = emailToId(email);
            try {
                await auth.signInWithEmailAndPassword(e, password);
            } catch (err) {
                throw new Error(friendlyAuthError(err));
            }
            // onAuthStateChanged llenará currentUserData; esperamos a que termine
            await new Promise(r => setTimeout(r, 50));
            if (!currentUserData) {
                currentUserData = await fetchUserDoc(e);
            }
            return currentUserData;
        },

        async logout() {
            await auth.signOut();
            currentEmail = null;
            currentUserData = null;
        },

        /* ===== Datos del usuario actual (curso.html / index.html) ===== */

        // Actualiza el doc del usuario actual (merge). Acepta un objeto parcial.
        async saveCurrentUser(partialData) {
            if (!currentEmail) throw new Error('No hay sesión activa');
            await writeUserDoc(currentEmail, partialData);
            // Refrescar cache
            currentUserData = Object.assign({}, currentUserData, partialData);
        },

        // Guarda/actualiza una inscripción (enrollment) del usuario actual.
        async saveEnrollment(courseId, enrollmentData) {
            if (!currentEmail) throw new Error('No hay sesión activa');
            const patch = {};
            patch['enrollments.' + courseId] = enrollmentData;
            await db.collection('users').doc(currentEmail).update(patch);
            if (!currentUserData.enrollments) currentUserData.enrollments = {};
            currentUserData.enrollments[courseId] = enrollmentData;
        },

        // Actualiza el progreso (sub-campo) de una inscripción
        async saveProgress(courseId, progressData) {
            if (!currentEmail) throw new Error('No hay sesión activa');
            // Si no hay enrollment, no hacemos nada (debe crearse primero con saveEnrollment)
            const patch = {};
            patch['enrollments.' + courseId + '.progress'] = progressData;
            await db.collection('users').doc(currentEmail).update(patch);
            if (!currentUserData.enrollments) currentUserData.enrollments = {};
            if (!currentUserData.enrollments[courseId]) currentUserData.enrollments[courseId] = {};
            currentUserData.enrollments[courseId].progress = progressData;
        },

        /* ===== Admin (admin.html) ===== */

        async loadAllUsers() {
            const snap = await db.collection('users').get();
            allUsersCache = {};
            snap.forEach(doc => { allUsersCache[doc.id] = doc.data(); });
            return allUsersCache;
        },

        getAllUsersCache() { return allUsersCache; },

        async deleteUser(email) {
            const id = emailToId(email);
            await db.collection('users').doc(id).delete();
            delete allUsersCache[id];
            // Nota: no podemos borrar el Firebase Auth user desde el cliente
            // sin estar autenticado como ese user. El doc queda huérfano en Auth
            // pero sin doc Firestore ya no aparece en el admin.
        },

        async deleteAllUsers() {
            const snap = await db.collection('users').get();
            const batch = db.batch();
            snap.forEach(doc => batch.delete(doc.ref));
            await batch.commit();
            allUsersCache = {};
        },

        async grantScholarship(email, courseId, enrollmentData) {
            const id = emailToId(email);
            const patch = {};
            patch['enrollments.' + courseId] = enrollmentData;
            await db.collection('users').doc(id).update(patch);
            // Refrescar cache
            if (allUsersCache[id]) {
                if (!allUsersCache[id].enrollments) allUsersCache[id].enrollments = {};
                allUsersCache[id].enrollments[courseId] = enrollmentData;
            }
        },

        /* ===== Calificaciones de cursos (ratings) ===== */

        // ID compuesto que garantiza una calificación por alumno-curso
        _ratingId(email, courseId) {
            return emailToId(email) + '__' + courseId;
        },

        // Guardar o actualizar la calificación del usuario actual para un curso
        async saveRating(courseId, stars, review) {
            if (!currentEmail) throw new Error('Debes iniciar sesión para calificar');
            if (!currentUserData) throw new Error('No se pudo cargar tu perfil');
            if (!Number.isInteger(stars) || stars < 1 || stars > 5) {
                throw new Error('La calificación debe ser de 1 a 5 estrellas');
            }
            const ratingId = this._ratingId(currentEmail, courseId);
            const existing = await db.collection('ratings').doc(ratingId).get();
            const data = {
                courseId: courseId,
                userId: currentEmail,
                userName: currentUserData.name || currentEmail,
                userCompany: currentUserData.company || '',
                userRole: currentUserData.role || '',
                stars: stars,
                review: (review || '').substring(0, 500).trim(),
                hidden: existing.exists ? (existing.data().hidden || false) : false,
                ratedAt: existing.exists ? existing.data().ratedAt : new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            await db.collection('ratings').doc(ratingId).set(data, { merge: true });
            return data;
        },

        // Obtener la calificación del usuario actual para un curso (si existe)
        async getMyRating(courseId) {
            if (!currentEmail) return null;
            const ratingId = this._ratingId(currentEmail, courseId);
            const snap = await db.collection('ratings').doc(ratingId).get();
            return snap.exists ? snap.data() : null;
        },

        // Cargar TODAS las calificaciones (para catálogo y admin).
        // Devuelve un array. El caller puede agrupar por courseId.
        async loadAllRatings() {
            const snap = await db.collection('ratings').get();
            const arr = [];
            snap.forEach(doc => arr.push(Object.assign({ _id: doc.id }, doc.data())));
            return arr;
        },

        // Resumen agregado por curso: { courseId: { count, avg, sum } }
        // Útil para la tarjeta del catálogo.
        async getRatingsSummary() {
            const all = await this.loadAllRatings();
            const summary = {};
            all.forEach(r => {
                if (!summary[r.courseId]) summary[r.courseId] = { count: 0, sum: 0, avg: 0 };
                summary[r.courseId].count += 1;
                summary[r.courseId].sum += (r.stars || 0);
            });
            for (const id in summary) {
                const s = summary[id];
                s.avg = s.count > 0 ? (s.sum / s.count) : 0;
            }
            return summary;
        },

        // Reseñas públicas de un curso (excluye ocultas por admin), ordenadas por fecha
        async loadCoursePublicReviews(courseId, limit) {
            const snap = await db.collection('ratings')
                .where('courseId', '==', courseId)
                .get();
            const arr = [];
            snap.forEach(doc => {
                const d = doc.data();
                if (!d.hidden) arr.push(Object.assign({ _id: doc.id }, d));
            });
            arr.sort((a, b) => new Date(b.updatedAt || b.ratedAt) - new Date(a.updatedAt || a.ratedAt));
            return limit ? arr.slice(0, limit) : arr;
        },

        // Admin: ocultar/mostrar una reseña (solo afecta la visibilidad del texto/autor público,
        // las estrellas siguen contando para el promedio)
        async toggleRatingVisibility(ratingId, hidden) {
            await db.collection('ratings').doc(ratingId).update({ hidden: !!hidden });
        },

        /* ===== Utilidades ===== */
        _db: db,
        _auth: auth
    };

    function friendlyAuthError(e) {
        const code = (e && e.code) || '';
        const map = {
            'auth/email-already-in-use': 'Este correo ya está registrado. Inicia sesión en su lugar.',
            'auth/invalid-email': 'El correo no tiene un formato válido.',
            'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres.',
            'auth/user-not-found': 'No existe una cuenta con ese correo.',
            'auth/wrong-password': 'Contraseña incorrecta.',
            'auth/invalid-credential': 'Correo o contraseña incorrectos.',
            'auth/too-many-requests': 'Demasiados intentos. Espera unos minutos e intenta de nuevo.',
            'auth/network-request-failed': 'Sin conexión a internet. Verifica tu red.'
        };
        return map[code] || (e && e.message) || 'Error de autenticación.';
    }

    window.TK = TK;
})();
