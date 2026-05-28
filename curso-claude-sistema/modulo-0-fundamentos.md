# MÓDULO 0 — EL MODELO MENTAL
*Antes de tocar cualquier herramienta, instalamos el framework cognitivo correcto.*

---

## LECCIÓN 01
### "Claude no es un buscador: el cambio de mentalidad que lo cambia todo"

---

**EL ANZUELO**

La mayoría de usuarios intermedios usa Claude como un Google más sofisticado. Eso limita todo lo que obtienes. Esta lección instala el modelo mental correcto — y después de verla, la forma en que abres Claude nunca será la misma.

---

**EL CONCEPTO**

Claude no busca en internet. Su conocimiento viene de entrenamiento — millones de textos procesados antes de que tú abrieras la app. Cuando le preguntas algo sin darle contexto, no consulta ninguna base de datos externa: razona con lo que ya sabe.

Eso tiene una implicación enorme que la mayoría ignora: **Claude es mejor pensando con tu información que recordando información externa.**

Piénsalo así. Claude es un consultor senior brillante que acaba de llegar a tu empresa sin conocerla. Si le preguntas cómo mejorar tus ventas sin decirle nada de tu negocio, te dará consejos genéricos que podría darle a cualquiera. Si le das tu contexto — tus clientes, tus números, tus problemas reales — sus respuestas son extraordinarias.

La diferencia entre un usuario básico y un usuario avanzado no es que el avanzado conozca más funciones. Es que el avanzado entiende que **Claude no sabe nada de ti hasta que tú se lo dices.**

---

**LA DEMO**

1. Abrir Claude.ai con una conversación en blanco
2. Escribir sin contexto: *"¿Cómo puedo mejorar mis propuestas para clientes?"*
3. Mostrar la respuesta — genérica, aplicable a cualquier persona
4. Abrir conversación nueva
5. Escribir con contexto: *"Soy consultor independiente de estrategia empresarial. Mis clientes son dueños de PYMEs en México con equipos de 10-50 personas. Mi propuesta actual tiene 4 páginas: resumen ejecutivo, diagnóstico, solución y precio. Los clientes me dicen que la propuesta es muy técnica. ¿Cómo la mejoro?"*
6. Mostrar la respuesta — específica, accionable, habla el idioma del cliente
7. Señalar la diferencia: misma pregunta, contexto diferente, resultado radicalmente distinto

---

**TU TURNO**

Toma una pregunta que le hayas hecho a Claude esta semana. Escríbela exactamente como la escribiste. Luego agrégale tu contexto real: quién eres, qué haces, para quién, cuál es el problema específico. Compara las dos respuestas y documenta qué cambió.

---

**EL INSIGHT DE CIERRE**

> *"Claude no sabe nada de ti hasta que tú se lo dices."*

---
---

## LECCIÓN 02
### "Por qué Claude 'se olvida' de lo que dijiste — y cómo evitarlo"

---

**EL ANZUELO**

Si alguna vez sentiste que Claude "se volvió peor" en medio de una conversación larga, no fue tu imaginación. Existe un fenómeno documentado que le pasa a todos los usuarios intermedios — y que nadie les explica. Esta lección lo resuelve y te ahorra frustración todos los días.

---

**EL CONCEPTO**

Tres imágenes que necesitas tener en la cabeza:

**Token** — imagina que cada vez que mandas un mensaje, cada palabra que escribes y cada palabra que Claude responde ocupa espacio físico en un escritorio. Un token es aproximadamente 3-4 caracteres. Una conversación normal de 30 minutos puede usar entre 5,000 y 20,000 tokens.

**Context Window** — ese escritorio tiene un tamaño máximo. En Claude Pro son 200,000 tokens — equivalente a una novela entera. Todo lo que está en la pantalla: tus mensajes, las respuestas de Claude, los archivos que subiste. Todo ocupa espacio en ese escritorio.

**Context Rot** — aquí viene lo que nadie te dijo. Cuando el escritorio se llena más de la mitad, Claude empieza a perder atención sobre el centro de la conversación. Recuerda bien lo que dijiste al principio y lo que dijiste hace dos mensajes. Pero lo que dijiste en el medio se difumina.

Los síntomas son estos: Claude empieza a repetirse. Sus respuestas se vuelven más genéricas. "Olvida" instrucciones que le diste hace 20 mensajes. Parece que "se volvió peor". No se volvió peor. Su escritorio está lleno.

La solución es simple: **una conversación por tarea**. Cuando terminas una tarea y empiezas otra, abres conversación nueva. Nunca más de 30-40 minutos de conversación continua. Si la conversación se alargó, usas el comando `/compact` para comprimir el historial y liberar espacio.

---

**LA DEMO**

1. Mostrar una conversación larga real donde Claude empieza a degradar calidad — señalar los síntomas
2. Escribir `/compact` — mostrar cómo Claude genera un resumen comprimido del historial
3. Mostrar cómo la calidad de respuesta se recupera después del compact
4. Mostrar cómo se inicia una conversación nueva con resumen como contexto inicial

---

**TU TURNO**

Revisa tus últimas 5 conversaciones con Claude. ¿Alguna tiene más de 20 intercambios? ¿Identificas síntomas de Context Rot — respuestas más genéricas, instrucciones ignoradas, repetición? Documenta qué conversación lo tuvo y qué habrías hecho diferente.

---

**EL INSIGHT DE CIERRE**

> *"Una conversación por tarea. Cuando cambias de tema, abres ventana nueva."*

---
---

## LECCIÓN 03
### "Claude no es el mismo de antes — esto cambió y nadie te lo dijo"

---

**EL ANZUELO**

Hay miles de usuarios que usaban Claude hace un año y sienten que "se volvió peor". No se volvió peor. Cambió de comportamiento — y si nadie te explicó cómo, llevas meses trabajando con un modelo mental desactualizado. Esta lección te pone al día en 5 minutos.

---

**EL CONCEPTO**

**Claude 3.x era creativo por defecto.** Si le pedías un correo, él decidía el tono, el largo, la estructura — e incluso agregaba cosas que no pediste porque asumía que las querrías.

**Claude 4.x es literalmente obediente.** Hace exactamente lo que pediste — ni más, ni menos. Si no especificaste el tono, elige el más neutro. Si no dijiste el largo, decide él. Si no pediste sugerencias de mejora, no las da.

Esto no es un error. Es una decisión deliberada de Anthropic: más precisión, menos suposiciones. Pero si nadie te lo explicó, llevas meses sintiéndote frustrado sin saber por qué.

La realidad: Claude 4.x es mejor, pero requiere prompts más completos. El nuevo estándar tiene cinco elementos:

**1. Rol** — quién es Claude en esta conversación *(ej: "Eres un consultor de ventas senior")*
**2. Contexto** — qué sabe que necesita saber *(tu industria, tu cliente, tu situación)*
**3. Tarea** — qué hace exactamente *(no "ayúdame", sino "escribe / analiza / genera / critica")*
**4. Formato** — cómo entrega el resultado *(viñetas, tabla, párrafos, longitud)*
**5. Restricción** — qué no debe hacer *("sin tecnicismos", "máximo 200 palabras", "si tienes duda, pregúntame")*

Con esos cinco elementos, Claude 4.x es consistentemente superior a cualquier versión anterior. Sin ellos, parece inferior.

---

**LA DEMO**

1. Escribir prompt vago: *"Mejora este correo"* → mostrar respuesta mínima y literal
2. Escribir el mismo prompt con los 5 elementos:
*"Eres un experto en comunicación ejecutiva. Tengo que enviar este correo a un cliente que lleva 3 semanas sin responder mi propuesta. El objetivo es reabrirle la conversación sin sonar desesperado. Reescríbelo en tono profesional y cálido, máximo 5 líneas, sin mencionar que lleva semanas sin responder. Si necesitas más contexto, pregúntame antes de escribir."*
3. Mostrar la diferencia de calidad
4. Señalar qué elemento del prompt generó qué parte de la respuesta

---

**TU TURNO**

Toma el prompt más frecuente que usas con Claude. El que abres casi automáticamente. Reescríbelo con los 5 elementos. Envíalo y compara con tu versión anterior. ¿Qué cambió?

---

**EL INSIGHT DE CIERRE**

> *"Claude 4.x no adivina. Lo que no le pides, no lo hace."*

---
---

## LECCIÓN 04
### "20 términos que separan al usuario básico del usuario avanzado"

---

**EL ANZUELO**

Cuando entras a una comunidad de usuarios avanzados de Claude — tutoriales, foros, documentación oficial — hay un idioma que no te enseñaron. Sin ese vocabulario, no puedes diagnosticar tus propios problemas ni aprender de forma autónoma. Esta lección te da las llaves para seguir aprendiendo solo después de este curso.

---

**EL CONCEPTO**

No vamos a memorizar definiciones. Cada término lo vemos en el contexto de un problema real que ya viviste — o que vas a vivir.

**Los primeros 5 — ya los conoces de este módulo:**

**Token** — unidad mínima de texto. ~3-4 caracteres. Todo lo que está en la conversación consume tokens de tu presupuesto.

**Context Window** — el "escritorio de trabajo" de Claude. 200,000 tokens en Claude Pro. Todo el historial de la conversación cabe ahí.

**Context Rot** — la degradación de calidad cuando el escritorio se llena. Claude pierde atención sobre el centro de la conversación. Solución: nueva conversación o `/compact`.

**Hallucination** — cuando Claude inventa información plausible pero falsa con aparente confianza. Lo viste en vivo: Claude inventó datos sobre un usuario que no tenía contexto. Solución: darle permiso explícito de admitir incertidumbre.

**Prompt Injection** — instrucción maliciosa escondida en contenido externo (páginas web, PDFs) que intenta manipular las respuestas de Claude. Claude 4.x las detecta y avisa.

---

**Los siguientes 8 — los verás en el Módulo 1 (Chat):**

**Projects** — workspace persistente con instrucciones maestras y knowledge base. Claude recuerda el contexto del proyecto sin que lo re-expliques cada vez.

**Memory** — Claude recuerda tus preferencias entre sesiones. Tiene 3 capas: automática, directa y controlada.

**Skills** — paquetes de instrucciones reutilizables para tus procesos más frecuentes.

**Artifacts** — entregables autónomos que Claude genera: apps HTML, dashboards React, SVGs, documentos. Publicables con link público.

**Research Mode** — Claude investiga con búsquedas múltiples encadenadas. Hasta 45 min, cientos de fuentes, reporte con citas verificables.

**Extended Thinking** — modo de razonamiento profundo. Consume 3-5x más tokens. Solo para problemas con razonamiento encadenado complejo.

**RAG** — cuando tu base de documentos es muy grande, Claude busca solo la información relevante para cada consulta. Activo automáticamente en Projects.

**System Prompt** — instrucciones que se le dan a Claude antes de que empiece la conversación. En Claude.ai: las instrucciones del proyecto. En Claude Code: el archivo CLAUDE.md.

---

**Los siguientes 4 — los verás en el Módulo 2 (Co-work):**

**Role Prompting** — asignarle a Claude un rol de experto específico. Mejora el foco y la autoridad de las respuestas.

**Few-Shot Prompting** — dar 2-3 ejemplos dentro del prompt para que Claude replique exactamente ese formato o estilo. 80% más efectivo que sin ejemplos.

**Chain-of-Thought** — pedirle que razone paso a paso antes de responder. Para decisiones complejas con múltiples variables.

**MCP** — el "USB-C de la IA". Conecta Claude con herramientas externas: Google Drive, Slack, bases de datos. Más de 300 servicios disponibles.

---

**Los últimos 4 — los verás en el Módulo 3 (Code):**

**Agentic** — modo donde Claude toma decisiones y ejecuta acciones en secuencia de forma autónoma, sin pedir aprobación en cada paso.

**CLAUDE.md** — archivo que Claude Code lee al inicio de cada sesión. Es su contrato maestro: reglas, estructura del proyecto, qué puede y no puede hacer.

**Sub-agent** — múltiples instancias de Claude trabajando en paralelo. Un agente líder coordina a los demás.

**Prompt Caching** — Claude guarda partes repetitivas de los prompts en memoria rápida. Reduce costos hasta 90% para contenido repetido.

---

**LA DEMO**

1. Mostrar el "Glosario Vivo" del instructor — documento dentro de sus Projects con los 20 términos escritos en sus propias palabras, con ejemplos de su trabajo real
2. Mostrar cómo se ve ese glosario dentro de un Project activo
3. Mostrar cómo el instructor referencia un término del glosario cuando diseña un prompt complejo

---

**TU TURNO**

**Parte 1 — Crea tu Project "Mi sistema Claude":**
- Clic en "New Project" en el panel izquierdo
- Nombre: *Mi sistema Claude*
- Instrucción inicial: *"Este es mi espacio de aprendizaje del curso Claude Sistema. Guarda aquí mis notas, glosario y plantillas de prompts."*

**Parte 2 — Crea tu Glosario Vivo:**
Dentro del Project, inicia una conversación y escribe:

> *"Crea un documento llamado Glosario Vivo con estos 20 términos: Token, Context Window, Context Rot, System Prompt, Hallucination, Prompt Injection, Projects, Memory, Skills, Artifacts, Research Mode, Extended Thinking, RAG, Role Prompting, Few-Shot Prompting, Chain-of-Thought, MCP, Agentic, CLAUDE.md, Sub-agent. Para cada término deja un espacio en blanco después del nombre — yo lo voy a llenar con mis propias palabras."*

Empieza por los primeros 5 — esos ya los viviste y puedes escribirlos con tus propias palabras ahora mismo.

**Criterio de éxito:** Tu Project "Mi sistema Claude" existe, tiene el Glosario Vivo, y los primeros 5 términos están escritos en tus propias palabras — no copiados de una definición académica.

---

**EL INSIGHT DE CIERRE**

> *"No necesitas saber de tecnología. Necesitas saber el idioma."*

---
---

## EJERCICIO DE CIERRE DEL MÓDULO 0

**Auditoría personal**

Antes de entrar al Módulo 1, responde estas tres preguntas por escrito — en el Project "Mi sistema Claude" que acabas de crear:

1. ¿Cuál de mis tres herramientas estoy usando para tareas que no son su fortaleza?
2. ¿Cuál de los 4 dolores de este módulo me ha costado más tiempo o tokens?
3. ¿Qué voy a hacer diferente desde mañana, antes de que empiece el Módulo 1?

---

*Fin del Módulo 0 — El Modelo Mental*
