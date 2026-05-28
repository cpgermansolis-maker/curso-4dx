# MÓDULO 1 — CHAT: EL PENSADOR
*Claude.ai como herramienta de pensamiento, creación e investigación.*

---

## LECCIÓN 05
### "Anatomía de un prompt efectivo: los 5 elementos que cambian todo"

---

**EL ANZUELO**

Si ya usas Claude pero tus resultados son inconsistentes, el problema no es Claude. Es la arquitectura de tus instrucciones. Esta lección te da el marco exacto que separa a los usuarios que obtienen resultados predecibles de los que "a veces funciona, a veces no". Cinco minutos de lectura, resultados diferentes de por vida.

---

**EL CONCEPTO**

Piensa en esto: cuando contratas a alguien para un proyecto, no le mandas un mensaje de WhatsApp de dos líneas y esperas el entregable perfecto. Le das un brief. Le explicas quién eres tú, qué necesitas, para qué, en qué formato y qué no quieres. Con Claude es exactamente lo mismo.

El problema es que la mayoría de los usuarios trabaja así:

> "Escríbeme un correo para mi cliente."

Y Claude hace lo mejor que puede con casi nada. Lo que reciben es genérico, y entonces piensan que la herramienta no funciona bien. Pero no es la herramienta. Es el brief.

Los 5 elementos de un prompt efectivo son la diferencia entre un brief profesional y un mensaje vago.

**Elemento 1: ROL**
Le dices a Claude desde qué perspectiva debe responder. No es decorativo. Cambia literalmente el tipo de razonamiento que activa.

*"Actúa como consultor de estrategia"* genera un tipo de respuesta.
*"Actúa como copywriter de respuesta directa"* genera otra completamente diferente para el mismo texto.

**Elemento 2: CONTEXTO**
Le das la información de fondo que necesita para no adivinar. Quién eres tú, cuál es la situación, qué ya intentaste, qué sabe el receptor del mensaje. Sin contexto, Claude rellena los huecos con suposiciones genéricas.

**Elemento 3: TAREA**
La instrucción concreta. Un verbo de acción + el objeto + el alcance. No "ayúdame con un texto" sino "redacta un correo de seguimiento de 150 palabras". Específico, medible, accionable.

**Elemento 4: FORMATO**
Cómo quieres el output. Lista con viñetas, párrafos corridos, tabla, tres opciones para elegir, primero el problema después la solución. Si no lo dices, Claude decide, y puede decidir diferente cada vez.

**Elemento 5: RESTRICCIÓN**
Lo que no quieres, lo que no debe incluir, el tono que no debe usar, la longitud máxima, los supuestos que no debe hacer. Este elemento es el más subestimado. Elimina el 80% de las iteraciones innecesarias.

La analogía: Entras a una papelería y dices: "Necesito algo para escribir." El empleado te muestra marcadores de colores. Tú querías una pluma de firma para contratos. Ambos hicieron su trabajo. El problema fue el brief.

Ahora entra de nuevo: "Necesito una pluma negra, punta fina, que no se corra, para firmar documentos formales. No quiero algo desechable." El empleado te da exactamente lo que buscabas.

Eso es un prompt con los 5 elementos.

---

**LA DEMO**

1. Abrir Claude.ai en una conversación nueva. Escribir: *"Escríbeme un correo para mi cliente."* Enviar. Mostrar la respuesta genérica. Señalar: "Sin nombre, sin contexto, sin tono. Aplicable a cualquier persona del mundo."

2. Abrir segunda conversación. Construir el prompt con los 5 elementos en voz alta:

```
ROL: Eres un consultor de comunicación especializado en clientes corporativos de alto nivel.

CONTEXTO: Soy consultor independiente de estrategia financiera. Tuve una llamada de diagnóstico con un cliente potencial hace 5 días. Me dijo que estaba interesado pero que necesitaba consultarlo con su socio. No he tenido respuesta desde entonces.

TAREA: Redacta un correo de seguimiento para ese cliente.

FORMATO: Máximo 120 palabras. Asunto incluido. Un solo párrafo. Sin listas.

RESTRICCIÓN: No uses frases como "espero que estés bien" o "quería hacerte seguimiento". No suenes ansioso. Mantén tono profesional y cálido, no insistente.
```

3. Mostrar la respuesta. Señalar la diferencia específica: "Tiene asunto, respeta el límite de palabras, suena como yo."

4. Mostrar segundo ejemplo para creador de contenido:

```
ROL: Eres un estratega de contenido para redes sociales con experiencia en creators B2B.

CONTEXTO: Soy coach de productividad para emprendedores. Tengo un newsletter semanal de 3,400 suscriptores. Mi audiencia son dueños de negocios pequeños entre 30 y 50 años, con poco tiempo y mucho ruido en su bandeja de entrada.

TAREA: Escribe el asunto y el primer párrafo de mi newsletter de esta semana. El tema es cómo recuperar el foco después de una semana caótica.

FORMATO: Asunto: máximo 8 palabras. Primer párrafo: 3 oraciones. Estilo: directo, sin rodeos, que genere apertura inmediata.

RESTRICCIÓN: Sin metáforas de "viaje" ni palabras como "transformar", "empoderar" o "nivel siguiente". Sin signos de exclamación.
```

5. Mostrar la respuesta. Señalar: "Este asunto lo usaría hoy mismo. No tengo que editarlo."

---

**TU TURNO**

Toma la última tarea que le pediste a Claude y que no te dio el resultado que esperabas. Reescribe ese prompt con los 5 elementos:
- ROL: ¿Desde qué perspectiva debe responder?
- CONTEXTO: ¿Qué información de fondo necesita?
- TAREA: Verbo + objeto + alcance
- FORMATO: ¿Cómo quieres el output?
- RESTRICCIÓN: ¿Qué no quieres ver?

**Criterio de éxito:** La nueva respuesta no requiere ninguna corrección antes de poder usarla. Si todavía tienes que editar más de un 20%, ajusta la restricción o el contexto y vuelve a enviarlo.

---

**EL INSIGHT DE CIERRE**

> *"Claude no adivina — responde al brief que le das. Mejora el brief y el resultado se mejora solo."*

---
---

## LECCIÓN 06
### "Projects: el error más caro que comete todo usuario intermedio"

---

**EL ANZUELO**

Trabajar en Claude sin Projects es como tener un asistente con amnesia que reinicia cada conversación desde cero. Le explicas quién eres, cómo trabajas, para qué cliente y qué tono quieres — y al día siguiente, nada. Esta lección te muestra cómo terminar con eso de una vez.

---

**EL CONCEPTO**

Hay un patrón muy claro entre los usuarios de Claude que no usan Projects. Al inicio de cada conversación hacen lo mismo: explican el contexto, explican el tono, pegan el brief del cliente, le dicen que no use signos de exclamación. Diez minutos de setup cada vez. Para cada conversación. Cada día.

Multiplica eso por cinco conversaciones al día, cinco días a la semana. Son 250 setups innecesarios al año. Cientos de tokens desperdiciados. Y resultados inconsistentes porque nunca das exactamente el mismo contexto dos veces.

Los Projects son la solución.

**¿Qué es un Project?**

Un Project es un espacio de trabajo persistente dentro de Claude.ai con tres componentes:

1. **Instrucciones maestras** — el "contrato de comportamiento" entre tú y Claude para ese contexto. Vive en cada conversación del project sin que tengas que repetirlo.

2. **Knowledge base** — archivos que Claude puede consultar en cualquier conversación del project. Tu brief de cliente, tu guía de marca, tu propuesta estándar.

3. **Historial de conversaciones** — todas las sesiones de ese project organizadas y buscables.

**Las instrucciones maestras: el contrato de comportamiento**

Un contrato efectivo tiene cuatro partes:

- **Rol:** Qué eres en este contexto y desde qué perspectiva razonas
- **Criterios de éxito:** Cómo sabe Claude cuándo lo hizo bien
- **Restricciones:** Lo que nunca debe hacer en este project
- **Formato de output:** La estructura estándar de las respuestas

**El knowledge base: cómo nombrar para que Claude encuentre mejor**

El nombre del archivo importa. Un archivo llamado `documento1.pdf` no le dice nada a Claude. Un archivo llamado `Brief-cliente-Empresa-ABC-industria-financiera-2026.pdf` le dice exactamente qué contiene y cuándo es relevante consultarlo.

Regla práctica: nombra tus archivos como si le explicaras a un asistente nuevo qué hay adentro, sin que pueda abrirlos.

---

**LA DEMO**

1. Desde el menú lateral de Claude.ai, clic en "New Project". Nombre: "Consultoría — Cliente Empresa XYZ".

2. Ir a la sección de instrucciones. Pegar y leer en voz alta:

```
ROL: Eres mi asistente senior de consultoría estratégica. Tienes experiencia en empresas medianas del sector retail mexicano. Razonas como consultor, no como redactor.

CRITERIOS DE ÉXITO: Un entregable está listo cuando puede enviarse al cliente sin edición: lenguaje ejecutivo, sin jerga de consultor, concreto y con datos cuando los hay.

RESTRICCIONES: No uses viñetas para todo. No des recomendaciones sin justificación. No asumas que el cliente tiene presupuesto ilimitado. Nunca uses la palabra "robusto" ni "sinergias".

FORMATO DE OUTPUT: Si es documento: Situación actual → Diagnóstico → Recomendación → Siguiente paso. Si es correo: máximo 150 palabras, sin párrafo de apertura de cortesía.
```

3. Subir dos documentos con nombres descriptivos al knowledge base.

4. Abrir conversación dentro del Project. Hacer pregunta de prueba y mostrar respuesta contextualizada.

5. Hacer la misma pregunta fuera del Project. Mostrar la diferencia. Señalar correcciones necesarias en la respuesta genérica.

---

**TU TURNO**

Crea tu primer Project para tu cliente más recurrente o tu área de trabajo principal:
1. Nombre del project: cliente o área + contexto específico
2. Instrucciones maestras con las 4 partes: rol, criterios, restricciones, formato
3. Al menos un documento al knowledge base con nombre descriptivo
4. Haz la misma pregunta con y sin el Project

**Criterio de éxito:** La respuesta dentro del Project no requiere que expliques ningún contexto adicional.

---

**EL INSIGHT DE CIERRE**

> *"Las instrucciones maestras no son una descripción de Claude — son el contrato que elimina el 80% de las correcciones que hacías en cada conversación."*

---
---

## LECCIÓN 07
### "Memory y Skills: haz que Claude te conozca y trabaje a tu manera"

---

**EL ANZUELO**

Hay dos funciones de Claude.ai que la mayoría de los usuarios intermedios confunde, ignora o usa mal. Una hace que Claude te recuerde. La otra hace que Claude trabaje según tus procesos. Conocer la diferencia vale más que cualquier prompt técnico que puedas aprender.

---

**EL CONCEPTO**

**Memory es para que Claude te conozca a ti.**
**Skills es para que Claude trabaje como tú trabajas.**

Son herramientas complementarias, no sinónimos.

---

**MEMORY: las 3 capas**

**Capa 1 — Memoria automática:** Claude guarda lo que detecta que es relevante: tu nombre, tu profesión, tu empresa, preferencias de tono que hayas expresado.

**Capa 2 — Memoria directa:** Tú le dices explícitamente: "Recuerda que mis propuestas siempre van en dos páginas máximo." Claude lo guarda como memoria etiquetada.

**Capa 3 — Memoria controlada:** Tú revisas, editas o eliminas lo que Claude tiene guardado desde configuración → Memory.

**Los límites críticos:**
- No funciona en API ni en Claude Code — son entornos separados
- No es retroactiva — solo retiene lo guardado activamente desde que se activó
- Es personal, no compartida — si compartes un Project con un equipo, tu Memory no se comparte
- Tiene límite de capacidad

**SKILLS: tu manual de operaciones**

Skills son mini-instrucciones empaquetadas para tus procesos más frecuentes. Cada vez que produces el mismo tipo de documento, en lugar de explicar la estructura y el tono desde cero, activas el Skill correspondiente y Claude ya sabe cómo trabajar.

Casos de uso por perfil:

*Consultor:*
- Skill "Propuesta comercial": estructura, tono, secciones obligatorias
- Skill "Informe ejecutivo": formato de 3 páginas, gráfica primero, recomendaciones al final

*Coach:*
- Skill "Plan de sesión": estructura de sesión, preguntas tipo por etapa
- Skill "Resumen de avances": qué incluir, cómo documentar obstáculos

*Creador de contenido:*
- Skill "Post de LinkedIn": hook + desarrollo + CTA, extensión, tono de marca
- Skill "Newsletter": estructura, apertura, cierre con llamada a acción

**La diferencia clave:**
Memory responde: ¿Quién soy yo?
Skills responde: ¿Cómo trabajo yo?

---

**LA DEMO**

1. Ir a configuración → Memory. Mostrar memorias automáticas ya guardadas.

2. En conversación nueva, escribir: *"Recuerda esto para futuras conversaciones: mis propuestas siempre van dirigidas a directores de área, nunca a CEO. El lenguaje debe ser operacional, no estratégico. Máximo dos páginas."* Mostrar confirmación y la nueva entrada en Memory.

3. Abrir configuración → Skills. Crear nuevo Skill "Propuesta de consultoría estándar":

```
Cuando se active este skill, sigo esta estructura:

1. RESUMEN EJECUTIVO (máximo 100 palabras): situación del cliente + resultado buscado
2. DIAGNÓSTICO: 3 observaciones concretas del problema
3. PROPUESTA DE SOLUCIÓN: qué incluye, qué no incluye, por qué
4. INVERSIÓN: precio fijo + condiciones de pago (sin rangos)
5. SIGUIENTE PASO: una sola acción concreta con fecha

TONO: ejecutivo, directo, sin redundancias. Sin adjetivos de venta (único, innovador, robusto).
EXTENSIÓN: máximo 2 páginas. No más de 600 palabras en total.
```

4. Activar el Skill en una conversación nueva. Mostrar que el output ya tiene la estructura correcta sin instrucciones adicionales.

---

**TU TURNO**

**Parte 1:** Ir a configuración → Memory. Revisar y limpiar lo desactualizado. Agregar explícitamente tres cosas que siempre quieres que Claude recuerde de cómo trabajas.

**Parte 2:** Crear un Skill para tu proceso más repetitivo de los últimos 30 días con: nombre claro, estructura del output, tono específico y restricciones.

**Criterio de éxito:** Activar el Skill en conversación nueva y obtener el output en el formato correcto sin dar instrucciones adicionales sobre estructura o tono.

---

**EL INSIGHT DE CIERRE**

> *"Memory es tu perfil; Skills es tu manual de operaciones — juntos hacen que Claude deje de ser un asistente genérico y empiece a comportarse como uno que te conoce."*

---
---

## LECCIÓN 08
### "Research Mode: tu investigador personal de 45 minutos"

---

**EL ANZUELO**

Hacer investigación con Claude sin activar Research Mode es como pedirle a un asistente que investigue un tema sin dejarlo salir de la oficina. Puede ayudar con lo que ya sabe, pero no puede verificar nada ni cruzar fuentes. Research Mode cambia eso radicalmente — y la mayoría de usuarios de pago no sabe que existe.

---

**EL CONCEPTO**

Research Mode no es una búsqueda de Google integrada. No es "Claude pero con internet". Es cualitativamente diferente.

**¿Cómo funciona?**

1. Analiza tu pregunta y la descompone en subpreguntas
2. Busca información para responder la primera subpregunta
3. Analiza los resultados y determina qué nueva pregunta necesita responder
4. Busca de nuevo, ahora con más contexto
5. Cruza fuentes, detecta contradicciones, identifica vacíos
6. Repite el ciclo hasta tener suficiente para un reporte sólido

Es investigación encadenada y retroalimentada. Cada búsqueda informa la siguiente.

**Research estándar vs. Advanced Research:**

- Research estándar: 5-30 minutos, decenas de fuentes. Para investigaciones de alcance medio.
- Advanced Research: hasta 45 minutos, cientos de fuentes. Para due diligence, análisis de mercados complejos.

**Cuándo SÍ usar:**
- Investigar un sector antes de una propuesta
- Analizar la competencia de un cliente antes de una sesión estratégica
- Verificar datos para un informe que vas a presentar
- Entender el contexto regulatorio de un tema
- Preparar preguntas para una reunión importante

**Cuándo NO usar:**
- Cuando la respuesta ya está en el conocimiento de Claude
- Cuando necesitas el resultado ahora (Research Mode tarda)
- Para tareas de creación pura (redactar, generar, analizar con información que ya tienes)
- Cuando tu pregunta es ambigua — amplifica la calidad de la pregunta, buena o mala

**El truco que la mayoría no usa: instrucciones de formato previas**

Antes de que empiece a trabajar, dale instrucciones sobre cómo quieres el output. Ejemplo:

> *"Antes de empezar, quiero que el reporte final tenga esta estructura: 1) Resumen ejecutivo en 150 palabras, 2) Hallazgos clave con fuentes citadas, 3) Implicaciones para mi negocio, 4) Preguntas que quedaron sin responder."*

Eso es lo que recibes al final. Listo para usar.

---

**LA DEMO**

1. Activar Research Mode (botón en la barra de composición).

2. Escribir primero la instrucción de formato, luego la pregunta de investigación:

> *"El reporte final debe tener: 1) Resumen ejecutivo de 120 palabras, 2) Tres hallazgos principales con fuente para cada uno, 3) Una sección 'Lo que no encontré y por qué importa', 4) Tres preguntas para un experto del sector. Empieza directo con el resumen ejecutivo.*
>
> *Investiga el estado actual de la consultoría de estrategia para pymes en México: tamaño de mercado, principales actores, barreras de entrada, tendencias de los últimos 18 meses."*

3. Mostrar el progreso mientras trabaja. Mostrar el reporte con fuentes y fechas. Señalar: "Esto me tomaría 4 horas de investigación manual. Llegó en 15 minutos."

4. Hacer la misma pregunta sin Research Mode. Comparar: "Sin Research Mode, responde con lo que sabe. Con Research Mode, responde con lo que verificó."

---

**TU TURNO**

Identifica una decisión pendiente para los próximos 30 días que requiera información que no tienes. Activa Research Mode, escribe primero tus instrucciones de formato, luego la pregunta específica con alcance definido.

**Criterio de éxito:** El reporte puede compartirse con un cliente o usarse para tomar una decisión sin trabajo de reformateo ni búsqueda adicional de fuentes.

---

**EL INSIGHT DE CIERRE**

> *"Research Mode no es Claude con internet — es Claude como investigador que razona mientras busca; la diferencia entre un resumen y un análisis."*

---
---

## LECCIÓN 09
### "Artifacts: crea y publica herramientas sin saber programar"

---

**EL ANZUELO**

Hay una capacidad de Claude que convierte a un profesional independiente en alguien que entrega herramientas interactivas, no solo documentos. Calculadoras, formularios, dashboards, presentaciones con lógica interna — publicados con un link, sin que el receptor necesite cuenta en Claude. Sin saber programar. Esta lección te muestra cómo.

---

**EL CONCEPTO**

Un Artifact es un entregable autónomo que Claude genera dentro de una conversación. No es texto en el chat — es un objeto separado: una página HTML, una app React, un SVG, un archivo de código, un documento Markdown estructurado.

**Tipos de Artifacts:**
- HTML interactivo: páginas web funcionales con botones y lógica
- React: componentes más complejos, dashboards, visualizaciones de datos
- SVG: gráficos vectoriales, diagramas, infografías
- Markdown: documentos bien estructurados exportables
- Código: scripts en cualquier lenguaje

**Lo que la mayoría no sabe: los Artifacts son publicables**

En la esquina superior del panel de Artifact hay un botón "Publicar" o "Share". Al hacer clic, obtienes un link público — una página limpia, sin marca de Claude, sin que el receptor necesite cuenta. Solo ve el Artifact funcionando.

**Casos de uso concretos:**

*Para el consultor:*
- Calculadora de ROI personalizada para el cliente
- Evaluador de madurez organizacional con puntuación automática
- Comparador de escenarios: ingresa dos opciones y compara costos, tiempos y riesgos

*Para el coach:*
- Rueda de la vida interactiva con barras deslizables
- Checklist interactivo de compromisos de sesión
- Diagnóstico de saboteadores con perfil automático al final

*Para el creador de contenido:*
- Generador de ideas: el usuario ingresa tema y audiencia, genera estructuras
- Checklist de revisión de artículo con porcentaje de completitud

**El límite práctico para no-programadores:** Si puedes describirle a Claude con palabras qué debe hacer la herramienta, Claude puede construirla.

---

**LA DEMO**

1. Abrir conversación nueva. Escribir:

> *"Crea un Artifact HTML interactivo: una calculadora de tarifa por hora para consultores independientes. El usuario ingresa: ingresos mensuales objetivo, horas disponibles al mes para trabajo de cliente, porcentaje de horas que se pierde en ventas y administración. La calculadora muestra: tarifa mínima por hora, tarifa recomendada (mínima + 30% de margen), y un mensaje de diagnóstico si la tarifa es menor a $800 MXN/hora. Diseño limpio, colores azul marino y blanco."*

2. Mostrar el Artifact apareciendo en el panel derecho. Interactuar con él en vivo.

3. Hacer clic en el botón de publicar. Copiar el link. Abrirlo en modo incógnito. Mostrar: "Sin login. Sin marca de Claude. Solo la herramienta."

4. Pedir una modificación en vivo: "Agrega un campo de días de vacaciones al año." Mostrar cómo Claude actualiza al instante.

5. Ejemplo rápido: crear un SVG de diagrama de proceso.

---

**TU TURNO**

Piensa en una herramienta que tus clientes necesitan calcular, evaluar o visualizar — algo que hoy haces en Excel o explicas en sesión. Pídele a Claude que lo construya como Artifact HTML. Luego:
1. Prueba que la lógica funcione correctamente
2. Publícalo con el botón de Share
3. Abre el link en modo incógnito

**Criterio de éxito:** El link funciona sin login y podrías mandársela a un cliente hoy mismo.

---

**EL INSIGHT DE CIERRE**

> *"Un Artifact con link público convierte tu conocimiento en una herramienta que trabaja sin ti — sin código, sin servidor, sin explicación."*

---
---

## LECCIÓN 10
### "Extended Thinking: cuándo sí y cuándo definitivamente no"

---

**EL ANZUELO**

Extended Thinking es la función más poderosa de Claude 4 — y también la más fácil de usar mal. Si la activas cuando no la necesitas, gastas tokens 3 a 5 veces más sin ningún beneficio real. Esta lección te da el criterio de decisión exacto para saber cuándo vale la pena y cuándo estás tirando dinero.

---

**EL CONCEPTO**

Dos formas de resolver un problema:

**Modo 1:** Te preguntan tu nombre. Respondes inmediatamente. No necesitas pensar.

**Modo 2:** Te dan un caso de negocio con 8 variables interdependientes y te piden la estrategia óptima considerando tres escenarios. Necesitas papel, tiempo, hacer esquemas, reconsiderar. El proceso de razonamiento es parte del trabajo.

Extended Thinking activa el Modo 2 en Claude. Le da espacio para deliberar antes de responder.

**Los 4 niveles de Adaptive Reasoning en Claude 4.x:**

| Nivel | Cuándo usar |
|---|---|
| **Standard** | Escritura, resúmenes, brainstorming, tareas simples |
| **High** | Problemas con 2-3 variables o que requieren considerar pros y contras |
| **xHigh** | Decisiones con múltiples restricciones, análisis complejos |
| **Max** | Los problemas más complejos. Uso de tokens muy alto |

**Cuándo SÍ vale la pena:**
- Matemáticas y lógica compleja con varios pasos
- Análisis de trade-offs con múltiples variables interdependientes
- Decisiones estratégicas con incertidumbre y escenarios
- Revisión de contratos con cláusulas interdependientes
- Debugging de lógica donde la falla no es obvia

**Cuándo definitivamente NO:**
- Escritura creativa y redacción de cualquier tipo
- Preguntas directas con respuesta factual
- Tareas operativas: resumir, traducir, reformatear
- Brainstorming y generación de ideas
- Conversaciones iterativas rápidas con muchos ajustes

**El costo real:** Extended Thinking en xHigh o Max consume 3-5x más tokens. La pregunta antes de activarlo: ¿esta tarea requiere razonamiento encadenado o solo ejecución competente?

---

**LA DEMO**

1. Activar Extended Thinking (nivel xHigh). Escribir:

> *"Soy consultor independiente. Tengo tres opciones para estructurar mi negocio en los próximos 12 meses: 1) Mantenerme como persona física, 2) Crear una S de RL con un socio estratégico, 3) Crear una S de RL unipersonal. Mis variables: ingresos actuales $180,000 MXN mensuales, proyección de crecimiento del 40% en el año, quiero contratar dos colaboradores, uno de mis clientes exige facturar como empresa, me preocupa la complejidad fiscal. Analiza las tres opciones considerando estas variables y recomienda con argumentos."*

2. Mostrar el proceso de razonamiento visible (panel "thinking"). Mostrar la respuesta con análisis cruzado de variables.

3. Desactivar y hacer la misma pregunta. Comparar: "La respuesta estándar es correcta, pero no cruzó todas las variables. Para esta decisión, los tokens adicionales fueron inversión."

4. Tercer ejemplo: activar Extended Thinking para redactar un correo. Mostrar que la calidad no mejora. "Para escribir un correo, no aportó nada. Aquí no lo activamos."

5. Mostrar tabla de decisión:

| Tipo de tarea | Nivel recomendado |
|---|---|
| Redacción, escritura | Standard |
| Resumen, traducción | Standard |
| Brainstorming | Standard |
| Análisis con 2-3 variables | Standard o High |
| Decisión con múltiples restricciones | xHigh |
| Lógica compleja o matemática | xHigh o Max |

---

**TU TURNO**

Toma la decisión más compleja que tienes pendiente — algo con al menos tres variables que se afectan entre sí. Activa xHigh. Construye el prompt con los 5 elementos e incluye todas las variables. Luego haz la misma pregunta sin Extended Thinking y compara.

**Criterio de éxito:** La respuesta con Extended Thinking identifica una implicación o conflicto entre variables que la respuesta estándar no menciona.

---

**EL INSIGHT DE CIERRE**

> *"Extended Thinking es para problemas donde el proceso de razonamiento importa tanto como la respuesta — activarlo en tareas simples no las mejora, solo las encarece."*

---
---

## LECCIÓN 11 — CASO PRÁCTICO CHAT
### "Tu primer Project de cliente: en vivo"

---

**EL ANZUELO**

Todo lo que aprendiste en este módulo se integra aquí. Vamos a configurar un Project completo para un cliente real — instrucciones maestras, knowledge base, la prueba de fuego con la misma pregunta dentro y fuera del Project. Al terminar esta lección, tienes un sistema funcionando para tu cliente más importante, no solo el concepto.

---

**EL CONCEPTO**

Un Project bien configurado no es una preferencia de usuario avanzado. Es la diferencia entre tener un asistente que trabaja en tu contexto y uno que trabaja en el contexto genérico de "usuario promedio de Claude".

El consultor que tiene Projects bien armados tiene, en la práctica, un asistente que ya conoce a sus clientes, ya sabe su tono, ya tiene sus documentos de referencia. Eso no es una ventaja menor. Es un cambio de categoría.

---

**LA DEMO**

**Paso 1 — Crear el Project**
Clic en "+ New Project". Nombre: "Consultoría de Operaciones — Cliente: Distribuidora del Norte". Decir en voz alta: "El nombre incluye el área y el cliente. Cuando tenga 15 projects, lo encontraré de inmediato."

**Paso 2 — Instrucciones maestras completas**

```
=== CONTRATO DE COMPORTAMIENTO — Distribuidora del Norte ===

ROL:
Eres mi co-consultor especializado en operaciones para empresas de distribución de consumo masivo en México. 15 años de experiencia en supply chain. Piensas como operador, no como teórico.

SOBRE EL CLIENTE:
Distribuidora del Norte: empresa familiar, 85 empleados, 12 rutas en el noreste de México. El dueño (Roberto, 52 años) toma todas las decisiones relevantes. Lenguaje directo. Desconfía del consultor que habla bonito pero no aterriza.

CRITERIOS DE ÉXITO:
Un entregable está listo para Roberto cuando: (1) puede leerse en menos de 3 minutos, (2) tiene recomendación clara, no solo opciones, (3) los números están presentes cuando los hay, (4) lenguaje de empresario, no de consultor.

RESTRICCIONES:
- Nunca uses lenguaje aspiracional ("transformar", "potenciar", "siguiente nivel")
- No des marcos teóricos sin aplicación inmediata
- Si no sabes algo específico del cliente, pregúntame antes de inventar

FORMATO POR DEFECTO:
- Correos: máximo 120 palabras, sin apertura de cortesía
- Análisis: Situación → Problema raíz → Recomendación → Siguiente paso
- Propuestas: máximo 2 páginas, precio fijo (no rangos)
```

**Paso 3 — Knowledge base**
Subir dos archivos con nombres descriptivos:
- `Brief-DistribuidoraNorte-contexto-negocio-rutas-personal-2026.pdf`
- `Guia-comunicacion-Roberto-preferencias-tono-lenguaje.pdf`

Decir: "Ese segundo documento es oro puro. Ningún asistente nuevo sabría cómo comunicarse con Roberto sin leerlo. Claude ahora lo tiene."

**Paso 4 — Primera conversación dentro del Project**
Escribir: *"Roberto me escribió esta mañana. Me dice que uno de sus supervisores de ruta renunció y que cree que el problema es el sistema de comisiones. Me pide mi opinión. ¿Cómo le respondo?"*

Mostrar la respuesta. Señalar que ya sabe que es empresa familiar, que Roberto quiere directividad, que no quiere teoría de RRHH.

**Paso 5 — La prueba de fuego**
Misma pregunta fuera del Project. Señalar en voz alta:
- "Empieza con 'Entiendo la situación' — yo nunca le mandaría eso a Roberto"
- "Propone tres opciones. Roberto quiere que yo le diga qué hacer"
- "Usa la palabra 'potenciar'. Exactamente lo que pusimos en restricciones"

"¿Cuántas correcciones necesita la respuesta genérica? Cuatro o cinco. ¿La del Project? Una, si acaso."

---

**TU TURNO**

Configura el Project para tu cliente más recurrente o área de trabajo principal. Usa exactamente estas cuatro secciones:

```
ROL: [quién eres en este contexto]
SOBRE EL CLIENTE/CONTEXTO: [información de fondo]
CRITERIOS DE ÉXITO: [cómo sabe Claude cuándo el output está listo]
RESTRICCIONES: [qué no debe hacer]
FORMATO DE OUTPUT POR DEFECTO: [cómo se ven los distintos entregables]
```

**Criterio de éxito:** La respuesta dentro del Project no requiere más de una corrección menor antes de poder enviarse al destinatario real.

---

**EL INSIGHT DE CIERRE**

> *"Un Project bien configurado no ahorra tiempo en esta conversación — lo ahorra en las próximas cien, porque el brief ya está escrito y ya funciona."*

---
---

## EJERCICIO INTEGRADOR — MÓDULO 1
### "Tu sistema de trabajo en Claude: de cero a funcionando"

**COMPONENTE 1 — Instrucciones maestras completas**
Escribe las instrucciones maestras con las cinco secciones: Rol, Sobre el cliente/contexto, Criterios de éxito, Restricciones, Formato de output por defecto. Mínimo 300 palabras. Si son menos, no fue suficientemente específico.

**COMPONENTE 2 — Knowledge base con al menos un documento**
Sube el documento que más contexto le da a Claude sobre este proyecto. Nómbralo descriptivamente: qué contiene + para quién + fecha o versión.

**COMPONENTE 3 — Un Skill para tu proceso más frecuente**
Crea un Skill con: estructura del output, tono (tres adjetivos que lo describan, tres que lo contradigan), extensión y formato, al menos dos restricciones concretas.

**COMPONENTE 4 — Una plantilla de prompt guardada**
Escribe el prompt más frecuente que vas a usar con los 5 elementos completos. Tan específico que si lo copias en seis meses, todavía funcione sin cambios.

**CRITERIO DE ÉXITO GLOBAL**
Haz esta prueba: abre el Project en conversación nueva, haz una pregunta real sin contexto adicional, la respuesta no requiere más de una corrección menor, se la podrías enviar al destinatario hoy mismo.

**LA PREGUNTA DE REFLEXIÓN FINAL**
Escribe en una línea: *"Antes del Módulo 1, cuando abría Claude yo... Ahora sé que..."*

---

*Fin del Módulo 1 — CHAT: El Pensador*
