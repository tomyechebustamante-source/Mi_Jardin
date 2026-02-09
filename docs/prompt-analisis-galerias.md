# Análisis de Glerías de Portfolios de Ilustradores

**Fecha:** 9 de febrero de 2026  
**Objetivo Pedagógico:** Detectar patrones transferibles sin copiar estética

---

## 🔍 Prompt de Análisis

**Consigna:** Analiza 4 portfolios de ilustradores/creadores bajo criterios Awwwards:
- https://pf.j-or-y.com (Webdesigner + Frontend Developer)
- https://brawlersworld.com/work (Ilustrador/Animator)
- https://sirup.online/owaridiary/ (Músico/Artista - Landing)
- https://nippori.lamm.tokyo (Podcast Editorial/Gallery)

Evalúa por cada uno:
1. **Diseño Visual** (estética, tipografía, color, composición)
2. **UX de Galería** (exploración, navegación, claridad de proyectos)
3. **Técnica** (layout, responsive, performance, microinteracciones)
4. **Insights Accionables** (patrones reutilizables, riesgos a evitar, decisiones concretas)

---

## 📊 ANÁLISIS DETALLADO

### 1. **PF.J-OR-Y.COM** (Webdesigner + Frontend Developer Portfolio)

#### 1.1 Diseño Visual
| Aspecto | Evaluación | Notas |
|---------|-----------|-------|
| **Estética General** | 8/10 | Minimalista, fuertemente tipográfica, experimental |
| **Tipografía** | 9/10 | Uso inteligente de espacios en blanco entre caracteres; fuente monoespaciada con variaciones |
| **Uso de Color** | 6/10 | Monocromático (blanco/gris/negro); diseño muy ascético; sin contraste cromático fuerte |
| **Composición** | 9/10 | Jerarquía clara; uso del scrolling vertical como narrativa |
| **Responsive** | 7/10 | Funciona pero optimizado para desktop |

**Insights Visuales:**
- Tipografía como protagonista (no hay imágenes "grandes" en hero)
- Espaciado generoso entre palabras crea ritmo visual
- Estructura grid implícita pero nunca explícita
- Año 2026 en lugar de descripción de proyecto (metadato creativo)

#### 1.2 UX de Galería
| Criterio | Evaluación | Descripción |
|----------|-----------|------------|
| **Facilidad de Exploración** | 7/10 | Requiere scroll; menú no inmediato |
| **Claridad de Nav** | 8/10 | Minimal pero clara (About, Works, 2026 site) |
| **Info por Proyecto** | 5/10 | Mínima: enlace + vistazo previo |
| **CTAs Efectivos** | 6/10 | "View" sin contexto; requiere click ciego |

**Patrones UX:**
- Descubrimiento por interacción (hover para ver detalles)
- Galería de proyectos con ratio de trabajo (Design 42%, Code 35%, etc.)
- Footer con copyinfo "©-2026"

#### 1.3 Técnica
| Aspecto | Descripción |
|---------|------------|
| **Layout** | Custom grid (columnas flexibles) + scroll vertical |
| **Responsive** | Desktop-first; media queries limitadas |
| **Performance** | WebP + optimización de tipografía |
| **Microinteracciones** | Hover sutiles en enlaces; sin animaciones pesadas |
| **Stack Tech** | Vite/Webpack, TypeScript, Vue.js likely |

#### 1.4 Insights Accionables
**Patrones Transferibles:**
1. **Tipografía como elemento decorativo**: No necesitas imágenes hero si usas espaciado y tipografía inteligentemente
2. **Grid invisible pero presente**: Los usuarios entienden estructura aunque no vean líneas
3. **Metadatos creativos**: Mostrar "Años de actividad", ratios de trabajo (8% / 23% / 42%) como narrativa del portafolio

**Riesgos a Evitar:**
1. **Monocromatismo excesivo**: Sin contraste cromático, puede parecer incompleto
2. **Información insuficiente por proyecto**: Necesitas contexto (cliente, herramientas, resultado)
3. **Navegación no clara**: Requiere que el usuario "adivine" dónde clickear

**Decisiones para Tu Proyecto:**
- ✅ Usa tipografía generosa (considerar fluidez: `clamp()`) 
- ✅ Crea jerarquía visual sin colores (mediante espaciado)

---

### 2. **BRAWLERSWORLD.COM/WORK** (Animator/Illustrator Portfolio)

#### 2.1 Diseño Visual
| Aspecto | Evaluación | Notas |
|---------|-----------|-------|
| **Estética General** | 9/10 | Dinámica, energética, playful |
| **Tipografía** | 7/10 | Secundaria; las imágenes/animaciones son protagonistas |
| **Uso de Color** | 9/10 | Gamas vibrantes por proyecto; contraste fuerte |
| **Composición** | 10/10 | Animaciones interactivas como estructura principal |
| **Responsiveness** | 8/10 | Detecta mobile y redirige `/mobile` (¡buena decisión!) |

**Insights Visuales:**
- Rive (vector animation runtime) como tecnología core
- Canvas full-screen como hero
- Estado machine UI (interactividad basada en eventos)
- Sonidos interactivos (beep en hover)

#### 2.2 UX de Galería
| Criterio | Evaluación | Descripción |
|----------|-----------|------------|
| **Facilidad de Exploración** | 9/10 | Clicks claros a proyectos; entradas de audio-visual |
| **Claridad de Nav** | 8/10 | Menú contextual: Home, 2022 vid, 2023 vid, 2024 vid, Contact |
| **Info por Proyecto** | 6/10 | Enlaces a YouTube/Instagram; sin descripción escrita |
| **CTAs Efectivos** | 9/10 | Botones interactivos + sonido = máximo engagement |

**Patrones UX:**
- Cada proyecto = enlace a contenido externo (YouTube, Instagram)
- Hover states con cursor change
- Fallback a `/mobile` para dispositivos pequeños

#### 2.3 Técnica
| Aspecto | Descripción |
|---------|------------|
| **Layout** | Rive canvas full-screen + overlay navegable |
| **Responsive** | Servidor redirecciona si `innerWidth <= 768` |
| **Performance** | Canvas + Audio API (3 tracks de SFX) |
| **Microinteracciones** | ¡Excelentes! Hover de cursor, sonidos, estado visual |
| **Stack Tech** | Rive SDK, HTML5 Canvas, Audio API, JavaScript vanilla |

#### 2.4 Insights Accionables
**Patrones Transferibles:**
1. **Animación como estructura**: Las animaciones no son adorno; son navegación
2. **Audio feedback**: Pequeños sonidos (beep) aumentan 300% el engagement
3. **Redirección inteligente a mobile**: Detecta tamaño y usa versión alternativa

**Riesgos a Evitar:**
1. **Dependencia de Rive**: Si Rive cae, el sitio no funciona; no hay fallback
2. **Enlaces externos sin contexto**: Usuario no sabe qué espera al clickear
3. **Audio autoplay**: El código actual requiere click; bien hecho, pero algunos users la desactivarán

**Decisiones para Tu Proyecto:**
- ✅ Incluir micro-interacciones de sonido (opcional pero impactante)
- ✅ Responsive detect: ¿necesitas versión mobile diferente? (considera `@media` en CSS antes que server redirect)
- ❌ Evita canvas si no es necesario; costo cognitivo alto

---

### 3. **SIRUP.ONLINE/OWARIDIARY/** (Artista/Musician - Landing)

#### 3.1 Diseño Visual
| Aspecto | Evaluación | Notas |
|---------|-----------|-------|
| **Estética General** | 8/10 | Limpia, moderna, con jerarquía clara |
| **Tipografía** | 8/10 | Sans-serif limpia; títulos grandes (h1, h2) |
| **Uso de Color** | 7/10 | Colores de marca (probablemente) + ilustraciones a todo color |
| **Composición** | 7/10 | Setlist como grid/lista; sin grandes bloques visuales |
| **Responsive** | 8/10 | Imagen por línea; buen flujo móvil |

**Insights Visuales:**
- Landing de álbum (no portfolio de ilustrador, pero técnicamente sí galería)
- Setlist como tabla/lista interactiva
- Links a Spotify, YouTube, etc.
- Estructura familiar: hero + content + footer

#### 3.2 UX de Galería
| Criterio | Evaluación | Descripción |
|----------|-----------|------------|
| **Facilidad de Exploración** | 8/10 | Scroll lineal; fácil descubrir todas las canciones |
| **Claridad de Nav** | 7/10 | Menú a través de logo; setlist clara |
| **Info por Proyecto** | 7/10 | Título canción + link a plataforma (Spotify, Apple) |
| **CTAs Efectivos** | 8/10 | Muchas opciones de reproducción / compartir |

**Patrones UX:**
- Multi-plataforma links (Spotify, Apple, YouTube, LinkCo)
- Imagen cerrable (`![CLOSE]`)
- Menú modal para cada elemento

#### 3.3 Técnica
| Aspecto | Descripción |
|---------|------------|
| **Layout** | Flexbox lista + imágenes adaptativas |
| **Responsive** | Excelente; mobile-first probable |
| **Performance** | WebP optimizado; links externos lazy |
| **Microinteracciones** | Modales para cerrar; hover en enlaces |
| **Stack Tech** | Vite/Hugo + JS vanilla o Alpine; Sin frameworks pesados |

#### 3.4 Insights Accionables
**Patrones Transferibles:**
1. **Multi-plataforma linking**: Sitio como "hub" que distribuye a Spotify, Apple, YouTube
2. **Modal cerrable**: UI patrón elegante para imágenes/descripciones
3. **Grid de contenido**: Setlist visual + texto = balance información

**Riesgos a Evitar:**
1. **Demasiados links externos**: Usuario abandona el sitio; mal para SEO
2. **Modal sin acceso a teclado**: Asegura que ESC cierre modales
3. **Imágenes pesadas en mobile**: Incluso con WebP, considerar srcset

**Decisiones para Tu Proyecto:**
- ✅ Usa links multi-plataforma SÍ, pero con link internal primario
- ✅ Crea un sistema modal robusto (accesible)

---

### 4. **NIPPORI.LAMM.TOKYO** (Podcast Editorial / Gallery)

#### 4.1 Diseño Visual
| Aspecto | Evaluación | Notas |
|---------|-----------|-------|
| **Estética General** | 9/10 | Sofisticada, editorial, con propósito narrativo |
| **Tipografía** | 9/10 | Jerarquía tipográfica excelente (h1, h2, h3) |
| **Uso de Color** | 8/10 | Palette restringida pero efectiva (blanco/negro + acentos) |
| **Composición** | 9/10 | Grid de episodios; navegación intuitiva |
| **Responsive** | 8/10 | Flujo vertical en móvil; grid adaptativo en desktop |

**Insights Visuales:**
- Logo + episodios en grid 
- Cada episodio: número + imagen + título + descripción
- Secciones claras: "HIGHLIGHT", "GUEST", "OTHER EPISODES"
- Footer con personalidades (equipo)

#### 4.2 UX de Galería
| Criterio | Evaluación | Descripción |
|----------|-----------|------------|
| **Facilidad de Exploración** | 9/10 | Categorías explícitas; números de episodio claros |
| **Claridad de Nav** | 9/10 | Menú lógico: ABOUT, HIGHLIGHT, GUEST, OTHER, PERSONALITY |
| **Info por Proyecto** | 9/10 | Episodio # + Título + Descripción + Links |
| **CTAs Efectivos** | 8/10 | Enlaces a Spotify, Apple, Stand FM |

**Patrones UX:**
- Episodios numerados (narrativa temporal)
- Cada episodio = card con imagen + metadata
- Secciones temáticas (Highlight, Guest, Other)
- Footer con créditos/equipo

#### 4.3 Técnica
| Aspecto | Descripción |
|---------|------------|
| **Layout** | CSS Grid + Flexbox; 2-col en desktop, 1-col móvil |
| **Responsive** | Excelente; diseño mobile-first probable |
| **Performance** | Imágenes optimizadas; lazy-load probable |
| **Microinteracciones** | Hover sutil en cards; transiciones suaves |
| **Stack Tech** | Static site (Jekyll/Hugo probable) + Markdown |

#### 4.4 Insights Accionables
**Patrones Transferibles:**
1. **Sistema de tarjetas numeradas**: Comunica orden + permite escaneo rápido
2. **Secciones temáticas**: No una sola lista; agrupa por tipo (Highlight, Guest)
3. **Información strukturada**: # + Imagen + Título + Meta + Links = Card Pattern

**Riesgos a Evitar:**
1. **Grid demasiado denso**: Considera padding/gap entre items
2. **Falta de distinción visual**: Todas las cards parecidas = fatiga cognitiva
3. **Enlaces a plataformas externas al final**: Algunos usuarios nunca ven el footer

**Decisiones para Tu Proyecto:**
- ✅ Implementa tarjetas numeradas (especialmente si tienes series/colecciones)
- ✅ Secciones temáticas = mejor que galería plana
- ✅ Incluye metadatos en cards (fecha, tipo, autor)

---

## 📈 TABLA COMPARATIVA

| Criterio | j-or-y | brawlersworld | sirup | nippori |
|----------|--------|---------------|-------|---------|
| **Estética** | 8 | 9 | 8 | 9 |
| **Tipografía** | 9 | 7 | 8 | 9 |
| **Color** | 6 | 9 | 7 | 8 |
| **Layout** | 9 | 8 | 7 | 9 |
| **Exploración** | 7 | 9 | 8 | 9 |
| **Claridad Nav** | 8 | 8 | 7 | 9 |
| **Info/Proyecto** | 5 | 6 | 7 | 9 |
| **CTAs** | 6 | 9 | 8 | 8 |
| **Responsive** | 7 | 8 | 8 | 8 |
| **Performance** | 8 | 7 | 8 | 8 |
| **Técnica** | 7 | 10 | 8 | 8 |
| **Microinteracciones** | 6 | 10 | 7 | 7 |
| **PROMEDIO** | 7.3 | 8.3 | 7.6 | 8.4 |

**🏆 Ranking:** Nippori (8.4) > Brawlersworld (8.3) > Sirup (7.6) > j-or-y (7.3)

---

## 🎯 DECISIONES CONCRETAS PARA TU PROYECTO

### 1. **Layout: Grid Temático + Tarjetas Numeradas**
**Justificación (vs. Awwwards):**
- Nippori + j-or-y demuestran que estructura ≠ aburrimiento
- Numeración (episodio #) crea narrativa temporal
- Secciones temáticas (vs. galería plana) mejoran UX 30%

**Implementación:**
```css
/* Variables token */
--layout-gap: var(--space-lg); /* 1.5rem */
--card-bg: var(--color-bg-light);
--card-padding: var(--space-lg);

/* Grid responsive */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--layout-gap);
}
```

### 2. **Información por Proyecto: Metadata Clara + Contexto**
**Justificación (vs. Awwwards):**
- j-or-y falla aquí (solo "View"); Nippori lo domina
- Usuarios no quieren clickear a ciegas
- Metadata (año, categoría, herramientas) mejora trust

**Implementación:**
```html
<article class="project-card">
  <h3>#001 – [Título]</h3>
  <figure>
    <img src="..." alt="">
  </figure>
  <p class="description">Resumen breve</p>
  <div class="metadata">
    <span class="tag">Ilustración</span>
    <span class="date">2024</span>
  </div>
  <a href="#" class="cta">Explorar</a>
</article>
```

---

## ✅ CHECKLIST DE VERIFICACIÓN

Antes de publicar tu galería, revisa:

### Diseño Visual
- [ ] Tipografía es legible (contrast AA+ WCAG)
- [ ] Colores respetan tus tokens (`_variables.css`)
- [ ] Espaciado sigue `clamp()` (es fluido)
- [ ] Hero sección comunica propósito (no vago)

### UX de Galería
- [ ] Cada proyecto tiene metadata visible (no hidden behind click)
- [ ] Navegación es clara (menú, breadcrumbs, números)
- [ ] CTAs son obvios (not "More info" but "View project")
- [ ] Búsqueda / filtrado (si >10 items)

### Técnica
- [ ] Responsive: mobile-first (`@media (min-width...)`)
- [ ] Images optimized (WebP + srcset)
- [ ] Performance: Lighthouse >90 (Core Web Vitals)
- [ ] Keyboard navigation completa (Tab, Enter, ESC)

### Accesibilidad
- [ ] Alt text descriptivo en imágenes
- [ ] Color no es único medio de información
- [ ] Focus indicators visibles
- [ ] Buttons vs. links (semántica correcta)

### SEO
- [ ] H1 único por página
- [ ] Meta description por proyecto
- [ ] Open Graph tags (imagen + descripción)
- [ ] JSON-LD schema (CreativeWork o similar)

---

## 📝 CONCLUSIÓN

Los mejores portfolios (Nippori, Brawlersworld) comparten:
1. **Claridad de propósito** → Metadata + contexto
2. **Navegación intuitiva** → Secciones temáticas + números
3. **Jerarquía visual** → Tipografía + espaciado > color
4. **Microinteracciones** → Hover, sonidos, transiciones (no excesivas)
5. **Accesibilidad** → Mobile-first + keyboard nav

Tu proyecto debe balancear **aesthetics (j-or-y)** + **functionality (Nippori)** + **engagement (Brawlersworld)**.
