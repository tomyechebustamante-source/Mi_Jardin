Personaliza el sistema de diseño del portfolio scrollytelling.

## 📎 CONTEXTO - Lee estos archivos adjuntos

1. **project-brief.md** → Sección "Identidad Visual"
   - Obtén: paleta de colores, tipografías, URLs Google Fonts

2. **assets/css/_variables.css** → Variables actuales
   - Identifica: qué variables actualizar

## INSTRUCCIÓN

Extrae de `project-brief.md` sección "Identidad Visual":
- Color primario, secundario, acentos 1-3 (hex codes)
- Fuente heading y body (nombres + URLs Google Fonts)
- Verificación de contraste (debe estar documentada)

## TAREAS

1. **Actualizar _variables.css:**
   ```css
   :root {
     /* Fuentes - usar las del brief */
     --font-family-heading: '[Fuente del brief]', var(--font-family-base);

     /* Colores - usar hex del brief */
     --color-primary: #[del brief];
     --color-primary-hover: #[generar variación oscura 10%];

     /* Gradientes - crear coherentes con la paleta */
     --gradient-hero: linear-gradient(135deg, #[primario] 0%, #[secundario] 100%);
     --gradient-chapter-1: linear-gradient(135deg, #[acento1], #[variación]);
     --gradient-chapter-2: linear-gradient(135deg, #[acento2], #[variación]);
     --gradient-chapter-3: linear-gradient(135deg, #[acento3], #[variación]);

     /* Acentos - usar del brief */
     --color-accent-blue: #[acento1 del brief];
     --color-accent-red: #[acento2 del brief];
     --color-accent-green: #[acento3 del brief];
   }

## IMPORTANTE

si no hay definiciones en **project-brief.md** manten los valores actuales.

## IMPLEMENTACIÓN (resultado de ejecutar el prompt)

- Fuentes extraídas de `project-brief.md`:
   - **Heading:** Barlow Condensed (Google Fonts link presente en el brief)
   - **Body:** no especificada → se mantiene `--font-family-base` (system-ui, Roboto, etc.)

- Colores: **no se definieron** en `project-brief.md`. Por tanto:
   - No se modificaron los tokens de color existentes en `assets/css/_variables.css` ni en `css/_variables.css`.
   - Variables actuales preservadas (por ejemplo `--color-primary: #1d4ed8;`).
   - Verificación de contraste: **pendiente** — añadir pasos de comprobación con Contrast Checker y adaptar si hace falta.

- Cambios realizados en el repo:
   1. `assets/css/_variables.css` — actualizado `--font-family-heading` a `'Barlow Condensed', var(--font-family-base)` y añadida nota explicativa.
 2. `css/_variables.css` — mismo cambio aplicado para asegurar coherencia entre carpetas.

Recomendación siguiente: si deseas una paleta específica, pásala (hex codes) y aplicaré los tokens de color + gradientes solicitados y comprobaré contraste contra `--color-text-primary`.

---

## PALETA APLICADA (solicitud del usuario)

He aplicado una paleta basada en tus preferencias (vino tinto + café + acentos naranja/amarillo) en los tokens de variables:

- `--color-primary: #6B0F1A` (wine / borgoña)
- `--color-primary-hover: #580D15`
- `--color-primary-light: #A43A3F`
- `--color-primary-dark: #3E0A0E`
- `--color-secondary: #4B2E2A` (coffee brown)
- `--color-secondary-light: #7A554F`
- `--color-accent-orange: #FF6A00`
- `--color-accent-yellow: #F2C94C`

Gradientes añadidos:
- `--gradient-hero: linear-gradient(135deg, #6B0F1A 0%, #4B2E2A 100%)`
- `--gradient-chapter-1: linear-gradient(135deg, #A43A3F 0%, #FF6A00 100%)`
- `--gradient-chapter-2: linear-gradient(135deg, #4B2E2A 0%, #F2C94C 100%)`
- `--gradient-chapter-3: linear-gradient(135deg, #6B0F1A 0%, #7A554F 100%)`

Notas sobre contraste:
- Elegí tonos profundos para asegurar buen contraste cuando se usan como fondos o acentos.
- Recomendación: ejecutar una comprobación automática (Contrast Checker / axe / Lighthouse) en los componentes clave (botones con texto blanco, texto sobre acentos, hero) y ajustar si es necesario.

Archivos modificados:
- `assets/css/_variables.css` — tokens tipografía y colores actualizados.
- `css/_variables.css` — mismos tokens actualizados para coherencia.

Si quieres, ahora ejecuto la comprobación automática sobre ejemplos concretos y propongo ajustes de contraste.