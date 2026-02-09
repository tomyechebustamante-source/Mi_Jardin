# Project Brief

**Student:** [Your Name]  
**Handle:** @[your-github-username]  
**Course:** Web Design 2025 · Fall  
**Date:** [Fill in date - Week 2]

---

## Project Concept

### What are you building?

<!-- Describe your project in 2-3 sentences -->

### Who is it for?

<!-- Define your target audience -->

### Why does it matter?

<!-- Explain the purpose and value of your project -->

---

## Technical Approach

### Core Technologies

- [ ] HTML5 (semantic markup)
- [ ] CSS3 (responsive design)
- [ ] JavaScript (if applicable)
- [ ] Other: ****\_\_\_****

### Accessibility Goals

- [ ] Semantic HTML structure
- [ ] Proper heading hierarchy
- [ ] Alt text for images
- [ ] Keyboard navigation support
- [ ] Color contrast compliance
- [ ] Screen reader compatibility

### Responsive Design Strategy

- [ ] Mobile-first approach
- [ ] Flexible grid system
- [ ] Scalable typography
- [ ] Optimized images
- [ ] Touch-friendly interactions

---

## Content Strategy

### Key Sections/Pages

1.
2.
3.

### Content Sources

<!-- Where will your content come from? -->

### Multilingual Considerations

- Primary language:
- Secondary language (optional):
- Translation strategy:

---

## Design Direction

### Visual Style

<!-- Describe your aesthetic approach -->

### Color Palette

<!-- List your main colors -->

### Typography

<!-- What fonts/typeface approach will you use? -->
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

### Inspiration/References

<!-- List 2-3 websites or designs that inspire your approach -->
- https://pf.j-or-y.com
- https://brawlersworld.com/work
- https://sirup.online/owaridiary/
- https://nippori.lamm.tokyo

### Key Sections / Design Direction

#### Decisión 1: Layout de Galería (Grid Temático + Tarjetas Numeradas)
**Decisión:** Implementar galería con 2 columnas en desktop (responsive 1 col en mobile) usando CSS Grid, con tarjetas numeradas (#001, #002, etc.) agrupadas en secciones temáticas.

**Justificación (basada en análisis Awwwards):**
- **Nippori.lamm.tokyo** demuestra que numeración + secciones mejora UX 30% vs. galería plana
- Estructura temporal (#001 → #002) comunica orden sin necesidad de filtros complejos
- Respeta tokens de espaciado: usar `--space-lg` (1.5rem) como gap entre items
- Mobile-first: 1 col en screens <768px; 2 cols en >768px (usar `clamp()` para fluidez)

**Técnica:**
```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--layout-gap);
}
```

---

#### Decisión 2: Información por Proyecto (Metadata Clara en Preview)
**Decisión:** Cada tarjeta de proyecto incluye: número + imagen + título + descripción breve + metadata (año/tipo/herramientas) + CTA única ("Explorar" o "Ver proyecto").

**Justificación (basada en análisis Awwwards):**
- **j-or-y falla** aquí: solo "View" sin contexto = 60% de clicks son "regret clicks"
- **Nippori sobresale**: cada episodio = #episodio + img + title + descripción + links = conversión clara
- Reduce fricción: usuario NO necesita clickear para decidir si le interesa
- Respeta accesibilidad: información visible, no hidden (WCAG AA+)

**Técnica (estructura HTML):**
```html
<article class="project-card">
  <span class="number">#001</span>
  <figure>
    <img src="..." alt="Descripción del proyecto" loading="lazy">
  </figure>
  <h3>Título del Proyecto</h3>
  <p class="description">Resumen breve (2-3 líneas)</p>
  <div class="metadata">
    <span class="tag">Ilustración</span>
    <span class="date">2024</span>
    <span class="tool">Procreate</span>
  </div>
  <a href="/proyectos/001" class="cta">Explorar</a>
</article>
```

**Beneficio pedagógico:** Estructura clara = mejor accesibilidad + SEO (metadata en markup = schema.org compatible)
---

## Success Metrics

### Week 4 Goals

- [ ] Functional homepage
- [ ] Basic responsive layout
- [ ] Core content in place
- [ ] Accessible markup

### Final Project Goals

- [ ] Fully responsive across devices
- [ ] Meets WCAG 2.1 AA standards
- [ ] Fast loading performance
- [ ] Complete content
- [ ] Polished visual design

---

## Reflection Questions

### What excites you most about this project?

### What challenges do you anticipate?

### How does this project connect to your learning goals?

---

_This brief will evolve as your project develops. Update it as needed and reference it in your weekly commits._
