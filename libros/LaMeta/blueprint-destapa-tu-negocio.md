# Blueprint — DESTAPA TU NEGOCIO (curso piloto, obra original)

**Decisiones de Germán (2026-06-11):** título "Destapa tu Negocio" · público: PYME mexicana general · marco propio: **Método FLUIR**.

- **Subtítulo:** Encuentra y rompe el freno que limita tus utilidades
- **Posicionamiento:** "En todo negocio hay UN punto que decide cuánto ganas. Los demás solo hacen ruido."
- **Atribución:** "Inspirado en los principios de la Teoría de Restricciones popularizados por Eliyahu Goldratt. Método, estructura, casos y ejemplos originales de TRIKLES."
- **Estatus legal:** obra original de Germán (curso piloto de la estrategia del 2026-06-08). Pendiente validación de abogado de PI antes de cobrar.
- **id propuesto:** `destapa-tu-negocio` (`cursos/destapa-tu-negocio.js`, `window.COURSE_DESTAPA`)
- **Casos recurrentes (inventados, nuestros):** tortillería La Espiga (no surte a tiempo), taller mecánico de Rubén (saturado, todo urgente), fonda de Doña Mary (cocina vs. mesas), imprenta Grafix (lotes gigantes), clínica dental Sonríe (agenda), despacho contable en marzo (temporada), mueblería San José (taller + entregas).

## El Método FLUIR (marco original)

| Fase | Nombre | Idea central |
|---|---|---|
| F | **Fija la meta** | El negocio existe para generar dinero; 3 medidores: dinero que ENTRA, ATRAPADO y que SALE |
| L | **Localiza el freno** | Un solo punto decide cuánto entra; encontrarlo con 3 señales empíricas, sin software |
| U | **Úsalo al máximo** | Exprimir el freno sin invertir: cero tiempo muerto, calidad antes, solo lo que se vende |
| I | **Integra el ritmo** | Todo el negocio al paso del freno: soltar trabajo a su ritmo, lotes chicos, adiós urgencias |
| R | **Rompe y repite** | Elevar el freno, esquivar la inercia, vender con la operación, ciclo infinito |

## Estructura de lecciones (22 + examen + certificado = 24)

**INTRO (tag-intro)**
0. *El negocio ocupado* — todos trabajando, utilidades planas; síntomas: urgencias, retrasos, caja apretada. Test de los 3 "no" (¿vendiste más? ¿bajó lo atrapado? ¿bajó el gasto?). [conceptos 2, 6, 14]
1. *Más esfuerzo no es más utilidad* — óptimos locales vs. resultado global; por qué premiar a cada área por separado daña al conjunto. [6, 7, 47]

**MÓDULO F — FIJA LA META (tag-d1)**
2. *La única meta* — ganar dinero hoy y mañana; todo lo demás es medio. [1, 3]
3. *Los 3 medidores del dinero* — entra / atrapado / sale; el puente entre el piso y la caja. [4, 8]
4. *Producir no es vender* — la trampa del inventario; el costo unitario que miente. [5, 7, 48]
5. *Las cifras que mienten* — eficiencias locales vs. test de los 3 medidores; qué conducta provoca cada KPI. [6, 47, 50]

**MÓDULO L — LOCALIZA EL FRENO (tag-d2)**
6. *Por qué todo sale tarde (aunque nadie falle)* — cadenas + variación; las desviaciones se suman. [9, 10, 11]
7. *El mito del negocio equilibrado* — recortar toda la holgura rompe el flujo; simulación con dinámica propia. [12, 13, 38]
8. *El freno: un solo punto decide* — definición de restricción; una hora ahí vale más que mil en otro lado. [15, 16]
9. *Cómo encontrarlo en una semana* — las 3 señales empíricas; y si hay capacidad ociosa, el freno es el mercado o una política. [17, 18, 19]

**MÓDULO U — ÚSALO AL MÁXIMO (tag-d3)**
10. *Lo que de verdad cuesta una hora del freno* — gasto total ÷ horas del freno; 50-100× lo que dice la contabilidad. [20]
11. *Capacidad gratis* — cero tiempo muerto: descansos escalonados, preparación anticipada, cobertura. [21, 25]
12. *Calidad antes del freno, ventas después* — no desperdiciar el recurso más caro en producto defectuoso o en stock "por si acaso". [22, 23]
13. *Descárgalo sin comprar nada* — cuestionar pasos, revivir el equipo viejo, subcontratar; lo "ineficiente" que es rentable. [24]

**MÓDULO I — INTEGRA EL RITMO (tag-d4)**
14. *El ocio que conviene* — activar ≠ utilizar; el empleado parado no cuesta más, el inventario sí. [26, 27, 28]
15. *Suelta el trabajo al ritmo del freno* — colchón pequeño delante; programar hacia atrás; fechas confiables. [29, 30]
16. *Lotes chicos, plazos cortos* — los 4 tiempos; partir lotes a la mitad reduce el plazo casi a la mitad, gratis. [31, 32, 33]
17. *Adiós a las urgencias* — prioridades simples y visibles; el valle transitorio y cómo sostener la decisión. [34, 35]

**MÓDULO R — ROMPE Y REPITE (tag-final / tag-d4 según paleta)**
18. *Rompe el límite (y cuidado con la inercia)* — elevar el freno; las reglas de ayer estorban hoy; casi-frenos y colchones como radar. [36, 37, 39, 40]
19. *Tu operación es tu mejor vendedor* — plazo confiable como arma; pedidos "imposibles" rentables; segmentos; entregas escalonadas. [41, 42, 43, 44, 45, 46]
20. *Las 3 preguntas del dueño* — qué cambiar, hacia qué, cómo provocarlo; causa raíz, SI-ENTONCES, efectos secundarios. [49, 51, 52, 53]
21. *FLUIR para siempre* — el ciclo completo aplicado a tu negocio; sentido común vs. práctica común; sé tu propio asesor. [54, 55, 56, 57, 58]

**22. Examen final** (10 preguntas, pasa con 7) · **23. Certificado** (con proyecto de reflexión)

## Convenciones técnicas al construir

- `lessonRequirements` indexado por POSICIÓN (0-23); 2 quizzes por lección regular; examen = final_q1..q10; cert = [].
- `examPassScore: 7`, `meta.reflectionQuestions` propias (ligadas a aplicar FLUIR en SU negocio).
- Cover SVG nueva en `assets/covers/destapa-tu-negocio.svg` (paleta propia, NO la del libro).
- Agregar a `CATALOG` en index.html Y a `getCatalog()` en admin.html. PRICING con badge Premium (cobro sigue APAGADO).
- Componentes visuales premium reutilizables (OKR pre/post, Pull Quote XL, Aha! Moment, Next Step 24h) — retrofit desde Mente Millonaria.
- Lección 7: diseñar dinámica/simulación PROPIA (no dados-cerillas-scouts del libro).

## Checklist anti-derivado (verificar en cada lección antes de publicar)

- [ ] ¿Cero personajes/escenas/analogías del libro? (ver inventario-ideas.md sección B)
- [ ] ¿Explicación con palabras nuestras + caso mexicano propio?
- [ ] ¿El título y nombres de conceptos son nuestros (FLUIR, "el freno", "dinero atrapado")?
- [ ] ¿Goldratt citado solo como inspiración, sin sugerir curso oficial?
- [ ] ¿El alumno saldría queriendo LEER el libro (no sustituirlo)?
