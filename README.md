# Doclick v3 — Editorial Medical Design

## Cambios principales respecto a v2

- **Sin localización geográfica** — ni Maturín, ni Oriente, ni Venezuela. Lista para escalar a cualquier ciudad.
- **Tipografía editorial** — Playfair Display (serif) para headlines = autoridad médica. Inter para cuerpo = claridad moderna.
- **Paleta sofisticada** — verde bosque profundo `#0D4A3A` + crema cálido `#F7F5F2` + cobre `#C4956A`. Se siente como clínica de autoridad, no startup genérica.
- **Patrón ECG** — línea de pulso decorativa en el hero y el CTA final, conectando con el concepto del logo.
- **Números grandes en cards** — "01", "02", "03" en vez de iconos genéricos. Más editorial, menos startup.
- **Copy reescrito** — más cálido, más directo, menos corporativo.

## Archivos

| Archivo | Función |
|---------|---------|
| `index.html` | Landing + directorio (sin ciudad) |
| `perfil.html` | Perfil individual genérico |
| `data.js` | Datos centralizados (sin campo `city` hardcodeado) |
| `styles.css` | Estilos compartidos con nueva paleta y tipografías |

## v3.14 — Página para el link de la bio de Instagram (Pro / Fundador)

- Nueva plantilla `link.html` tipo "Linktree": foto, nombre, especialidad, insignia de fundador, bio corta, botón(es) de WhatsApp, botón al perfil completo en Doclick, cómo llegar y un bloque que promociona la guía Doclick. Una sola plantilla para todos: se llena sola desde `data.js` con `link.html?id=ID`.
- Solo para planes `pro` y `fundador`. Un médico del plan `perfil` que use ese link es enviado directo a su `perfil.html`.
- Los campos marcados `[Pendiente]` no se muestran.
- Todos los links salen con `utm_source=instagram&utm_medium=bio` y se registran en GA4 (`view_link_bio`, `click_link_bio`).
- **Links cortos** en `_redirects` (Cloudflare): `doclick.net/drguerra`, `/drvegas`, `/drdiover`. Para un médico nuevo, agregar una línea ahí.
- Hosting: el sitio está en **Cloudflare** (Worker `docklic`, conectado a GitHub `main` — cada push se publica solo). Las menciones a Netlify en versiones anteriores de este README son históricas.

## v3.12 — 4 arreglos pre-lanzamiento

1. **Contador de cupos fundadores incoherente**: los 3 perfiles ficticios marcados como fundadores (María González, Carlos Rodríguez, Ana Pérez) se sacaron de `DOCTORS` — ya no cuentan. Quedan archivados sin efecto en el sitio en una constante aparte, `EXAMPLE_PROFILES_ARCHIVE`, al final de `data.js` (comentada, no se importa desde ningún HTML). Contador real ahora: **2 de 5 ocupados, 3 disponibles** (Domingo y Williams).
2. **Estado de carga**: los contadores del hero muestran "Cargando…" (en vez de quedarse en "0") hasta que los datos están listos, y el directorio muestra "Buscando médicos…" en vez de una zona en blanco mientras `data.js` termina de cargar. El mensaje real de "No encontramos médicos" solo aparece si, ya con los datos cargados, un filtro no arroja resultados — eso no se tocó porque ya funcionaba bien.
3. **Botones sin destino**: de todos los `href="#"`, cinco (`nav-cta`, `hero-cta`, `dir-cta`, `price-cta-free`, `price-cta-pro`, `final-cta-wa`) ya se reescriben en JS con el link real de WhatsApp — esos estaban bien. El único realmente muerto era **"Déjanos tu número"** (`final-cta-tel`, sección final de CTA): no tiene backend ni formulario detrás. Se dejó oculto (`display:none`) con un comentario `TODO` explicando qué falta decidir, en vez de mostrarlo sin funcionar.
4. **Copyright**: 2025 → 2026, en `index.html` y `perfil.html` (el mismo footer estaba en ambos).

**No se tocó** el perfil del Dr. Domingo Guerra — sigue exactamente con los mismos campos `[Pendiente]` que tenía.

## v3.11 — Dos números de WhatsApp + dirección oficial del consultorio

- El Dr. Vegas ahora muestra **dos botones de WhatsApp** en su perfil ("Agendar por WhatsApp (línea 1)" / "(línea 2)"), uno por cada número que diste. Se agregó soporte para `whatsappNumbers` (arreglo) en `perfil.html`, sin romper a los demás médicos que solo tienen un `whatsappNumber` — ahí se sigue viendo un solo botón sin el sufijo "(línea X)". En la tarjeta del directorio (espacio reducido) se usa el primer número como principal.
- **Dirección actualizada** con el nombre oficial que diste: "Centro de Consulta Externa Santa Sofía, Av. Luis del Valle García con calle 6, Sector Las Avenidas, Maturín". El link de Google Maps sigue usando el Plus Code por debajo (`mapQuery`) para máxima precisión.

## v3.10 — Datos reales completos del Dr. Vegas + tu contacto

- **Foto real**: reemplazada por la que subiste a Drive ("Doclicknet Dr. Williams" → `VEGA_1789059710021.jpg`) — foto de estudio profesional, mucho mejor que el recorte del video. Recortada y centrada para el avatar circular.
- **Especialidad**: "Urología y Cirugía General". **Especialidades** (chips): patologías prostáticas, genitourinarias, oncología urológica, cirugía mínimamente invasiva, fertilidad. **Bio** en su sección "Sobre Vegas" con el texto completo que diste (especialidades + servicios), y una versión corta en la línea de presentación de arriba.
- **Dirección**: ahora se ve "Clínica Santa Sofía, Calle 6, Maturín, Monagas" en vez del código Plus Code — pero el link "Ver en Google Maps" sigue usando el Plus Code (`PRVG+MGQ...`) por debajo, que es más preciso para geolocalizar que el nombre solo. Se agregó un campo nuevo `mapQuery` para esto (separado de `address`, que es lo que se muestra).
- **Tu WhatsApp de contacto** (botón "Únete gratis" para médicos nuevos): actualizado a tu número real, con mensaje predefinido ya funcionando (esto ya existía en el código, solo faltaba el número real).
- **Pendiente**: el Dr. Vegas dio dos números (0424-099.45.57 y 0412-861.60.55) pero no cuál es el de contacto con pacientes — su `whatsappNumber` se queda en placeholder hasta confirmar cuál usar.

## v3.1 — Material visual real (hero)

- **Hero**: reemplazado por video de fondo real (`videos/hero-domingo.mp4`, ~872 KB, 10s, mudo, loop, autoplay, playsinline). Fuente: clip que el Dr. Domingo Guerra (neurocirujano) grabó y aprobó específicamente para esto — se le ve solo, trabajando en su consultorio, fuera de quirófano, con su nombre visible en la bata. Overlay verde bosque en gradiente para legibilidad del texto. `images/hero-poster.jpg` es el fallback estático (por si el navegador bloquea el autoplay).
- **Pendiente activo — importante**: NO se integró ningún material del resto del Drive ("ElEden"): ese contenido incluye pacientes identificables en cirugías y un parto (nombre real visible), sin consentimiento documentado para uso comercial en Doclick. Antes de usar cualquier otra foto/video de esa carpeta, se necesita la autorización de uso de imagen firmada (plantilla ya entregada: `Doclick-Autorizacion-Uso-Imagen.docx`) — tanto del médico como del paciente que aparezca.
- **Tarjetas de médicos / sección "¿Por qué Doclick?"**: sin cambios en esta versión — siguen con iniciales sobre degradado. Se resolverán médico por médico, a medida que cada fundador aporte su propia foto aprobada.

## v3.9 — "Contenido publicado" (videos pasados) conectado + flujo mensual

- Igual que pasaba con "Video del mes", la sección **"Contenido publicado"** (`pastVideos`) nunca mostraba nada real — solo un ícono genérico sin miniatura ni link. Ahora, cuando un item de `pastVideos` tiene `youtubeId`, se ve la miniatura real de YouTube y hace click para abrir el video en una pestaña nueva. Sin `youtubeId`, se ve como antes (placeholder).
- **Flujo recomendado mes a mes** (decisión de producto, no solo de código): el video que suben a YouTube para el "Video del mes" de un médico, cuando llega el siguiente mes, se mueve al arreglo `pastVideos` de ese médico en `data.js` (mismo `title`, `duration`, `youtubeId`), y el video nuevo pasa a ocupar `heroVideo`. El mismo archivo se puede publicar tal cual en Instagram también — no hace falta producir contenido por separado para cada canal.
- Con esto, el video de presentación del Dr. Vegas se queda donde está (`heroVideo`) hasta que llegue su primer video-caso mensual.

## v3.8 — Datos reales confirmados del Dr. Williams Vegas

- Especialidad: **Urología**. Instagram: `@urologo.drvegas`. Dirección (Plus Code + calle): `PRVG+MGQ, Calle 6, Maturín 6201, Monagas`. Horario: Lun/Miér/Jue/Vie 7:30am–12:30pm, Mar 11:00am–2:00pm, tardes y sábado con cita previa.
- Bio corta tomada literalmente de lo que su propio Instagram le responde a los pacientes ("Consulta urológica, incluye ecosonograma si se requiere"), sin agregar nada que no haya confirmado él.
- **Nota importante**: su video es una *presentación* general, no un caso clínico — se cambió el título a "Conoce al Dr. Williams Vegas" en vez de un título tipo caso. La sección igual dice "Video del mes" (ese eyebrow es fijo en el diseño para todos); si se quiere distinguir presentación-de-fundador vs. video-caso-mensual como dos tipos de contenido, es un cambio de diseño aparte — avisar si se quiere.
- No se agregó el precio de consulta ($70) al perfil — no existe ese campo en el diseño actual y no sabíamos si querías mostrar precios públicamente. Decir si se quiere sumar.

## v3.7 — Video del Dr. Williams Vegas conectado

- `heroVideo.youtubeId` del Dr. Williams Vegas pasó de `null` a `"AKmDh6kZXDk"` (el video que subió). Su perfil ahora embebe el reproductor real de YouTube en vez del placeholder "Próximamente disponible".
- El título del caso (`heroVideo.title`) y su especialidad siguen en `[Pendiente]` — falta que confirme de qué trata el video para no inventarlo.

## v3.6 — Embed real de YouTube + 5to fundador (Dr. Williams Vegas)

- **Fix de fondo**: el "Video del mes" nunca embebía nada de verdad, ni siquiera con `youtubeId` presente — solo mostraba el placeholder "Próximamente disponible" incondicionalmente. Ahora `perfil.html` renderiza un `<iframe>` real de YouTube cuando `heroVideo.youtubeId` no es `null`, y cae al placeholder cuando sí lo es. Aplica a cualquier médico, no solo a Williams.
- Se agregó al **Dr. Williams Vegas** como 5to fundador (`data.js`, id 7), con foto real recortada de su propio video de presentación. `heroVideo.youtubeId` queda en `null` hasta que se suba el video a YouTube (canal Edúcame) — apenas se tenga el ID de 11 caracteres, se actualiza esa única línea y el video queda embebido automáticamente en su perfil.
- Especialidad, bio, dirección y horario de Williams quedan marcados `[Pendiente]` — no se inventó nada sobre él.
- **Con este 5to fundador, los cupos de fundador quedan en 0 disponibles** (5 de 5: María, Carlos, Ana, Domingo, Williams). El contador del sitio ya lo refleja automáticamente.
- Nota de calidad: el archivo de video que llegó está a 480p (parece comprimido por WhatsApp). Si existe el original en mejor resolución, conviene subir ese a YouTube en vez de este.

## v3.5 — Correcciones urgentes

- **Cupos de fundador, 10 → 5, en TODO el sitio**: quedaban dos apariciones sueltas que v3.4 no cubrió — la tarjeta de precios "RECOMENDADO" ("Para los primeros 10 médicos fundadores...") y la respuesta del FAQ sobre si el perfil es gratis. Ambas decían "10" en texto plano, por eso el `grep` anterior (que buscaba patrones tipo "10 fundador") no las agarró. Ya quedaron en 5, junto con `data.js` y el banner de precios que ya se habían corregido en v3.4. Verificado: 0 apariciones de "primeros 10" en el sitio.
- **Números de sección (01, 02, 03)**: en "¿Por qué Doclick?", el color pasó de un gris apagado (`--surface-3`) a verde bosque (`--forest`, `#0D4A3A`) para más contraste sobre el fondo crema.

## v3.4 — Deuda técnica resuelta: fuente única de datos

- Se eliminó por completo el `DOCTORS`/`DOCLICK`/`buildWaLink` que estaba duplicado dentro de `index.html`. Ahora `index.html` carga `<script src="data.js"></script>` exactamente igual que `perfil.html` — **un solo archivo (`data.js`) alimenta todo**, tal como decía el README desde v3 (ahora sí es cierto).
- Ya no hace falta tocar dos archivos para agregar un médico: con editar `data.js` alcanza.
- **Cupos de fundador: 10 → 5**, actualizado en `data.js` (`foundingSpotsTotal`) y en el texto de precios de `index.html` ("Los primeros 5 cupos fundadores..."). Con los 4 fundadores actuales (María, Carlos, Ana, Domingo) quedaría 1 cupo disponible.

## v3.3 — Fix: Domingo no aparecía en el buscador del directorio

**Causa real**: `index.html` tiene su propia copia embebida del arreglo `DOCTORS` (dentro de su `<script>` inline), separada de `data.js`. `perfil.html` sí lee `data.js`, pero `index.html` no — a pesar de que este README (v3) decía "un solo archivo alimenta directorio y perfiles". En v3.2 Domingo se agregó solo en `data.js`, por eso su perfil individual funcionaba pero no aparecía en el buscador/directorio de `index.html`.

**Fix**: se agregó la misma entrada de Domingo también en el `DOCTORS` embebido de `index.html`.

**Deuda técnica pendiente (no resuelta en este parche)**: mientras `index.html` siga con su propio copy-paste de datos, cada médico nuevo hay que agregarlo en **dos lugares** (`data.js` y el inline de `index.html`) o va a repetirse este mismo bug. Lo correcto a mediano plazo es que `index.html` cargue `data.js` igual que `perfil.html` y se elimine el duplicado.

## v3.2 — Primer fundador real en el directorio

- Se agregó al **Dr. Domingo Guerra (Neurocirugía)** como fundador real en `data.js` (id 6), con foto real (`images/dr-domingo-guerra.jpg`, recorte del mismo clip aprobado del hero) reemplazando las iniciales en su tarjeta y en su perfil.
- Los campos `shortBio`, `longBio`, `address`, `schedule` de su ficha están marcados `[Pendiente]` a propósito — no se inventó información profesional sobre él. Hay que confirmárselos antes de publicar.
- `hasVideo: false` porque el clip usado es de ambiente, no un video-caso real todavía.
- Las 6 tarjetas de ejemplo (María González, Carlos Rodríguez, etc.) siguen sin cambios — siguen siendo nombres ficticios de muestra, no personas reales.
- **Este ZIP es el que hay que subir a Netlify Drop.** Los archivos entregados como "artefacto" en el chat (los .html con video/foto en base64) son solo para previsualizar dentro de la conversación — no están sincronizados con ningún Drive ni con Netlify automáticamente.

## Cómo agregar una ciudad después

Cuando quieras escalar a otra ciudad, simplemente:
1. Agrega el campo `city` de vuelta en `data.js`
2. Reactiva el filtro de ciudad en `index.html`
3. Agrega el nombre de la ciudad en los textos correspondientes

El diseño está preparado para eso sin romper nada.
