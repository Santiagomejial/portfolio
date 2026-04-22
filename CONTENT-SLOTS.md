# Content slots — dónde van los assets finales

Guía para Santiago: dónde y cómo reemplazar los placeholders del código por los copies finales y los recursos gráficos reales. Pensado para la fase de **Claude Design**.

---

## Filosofía

El código está escrito para que el contenido viva **siempre en los archivos `page.tsx`** (no hay CMS, no hay MDX todavía). Los componentes son tontos: reciben props, renderizan. Editar contenido = editar el array o el prop que alimenta al componente.

Cada `CaseMedia` tiene hoy un placeholder textual (`[ descripción del asset ]`). Reemplazar el placeholder por `<img>` / `<video>` dentro del componente (o evolucionar el componente para aceptar `src`) es el único paso pendiente.

---

## Assets por archivo

### `app/page.tsx` — Home

| Slot | Placeholder actual | Qué poner |
|------|-------------------|-----------|
| Hero visual | `[ hero visual · home ]` | Composición ancha 21:9 — retrato + collage de producto o establishing shot de la app Homecenter en dispositivo. |
| WorkCards (6) | `alt` descriptivo | Cover cuadrado o 4:5 por case, coherentes en tratamiento (todos foto real / todos mockup — no mezclar). |

### `app/about/page.tsx` — Sobre mí

| Slot | Placeholder actual | Qué poner |
|------|-------------------|-----------|
| Retrato | `[ portrait 4:5 ]` | Foto tuya 4:5, iluminación sobria, fondo neutro. Evitar fondos corporativos. |
| Fuera del producto (06) | (sin media aún) | Opcional: 1–2 fotos personales (pianista / running / lo que aplique) si se decide añadir. |

### `app/work/page.tsx` — Listing

Cada WorkCard usa el mismo `alt` que en Home. Los covers deben ser los mismos archivos para mantener continuidad visual entre Home y Listing.

### `app/work/homecenter/page.tsx` — Case 01 Featured

| Slot | Layout | Qué poner |
|------|--------|-----------|
| Hero | 21:9 | Mockup ancho de la app rediseñada (home + PDP + checkout). |
| Establishing (post 01) | full 16:9 | App en contexto real: persona usándola, dispositivo sobre superficie física. |
| Proceso (post 03) | trio 4:3 | (1) mapeo de flujos, (2) synthesis board de research, (3) wireframes tempranos o componentes base. |
| Comparativos (post 04) | duo 4:3 | Before/after de PDP + antes/después de checkout. Alineación estricta entre pares. |
| Showcase (post 05) | wide 21:9 | Compositado final de la app — múltiples pantallas, ritmo cinemático. |
| Vista PO (post 06) | full 16:9 | Screenshot redactado de backlog + roadmap (tachar nombres, tickets sensibles, timelines internos). |

> ⚠️ Todas las métricas post-release (conversión, NPS, rating, retención) están **redactadas** por NDA con Sodimac. Mantener redactado en cualquier screenshot.

### `app/work/store-in-store/page.tsx` — Case 02

| Slot | Layout | Qué poner |
|------|--------|-----------|
| Hero | 21:9 | Mosaico de las 3 marcas (Petcenter / Carcenter / Constructor) en app. |
| Proceso (trio) | trio 4:3 | Arquitectura multi-marca, decisiones de naming, componentes compartidos. |
| Solución (wide) | wide 21:9 | Showcase paralelo de las 3 marcas mostrando coherencia sin uniformidad. |

### `app/work/kioscos-digitales/page.tsx` — Case 03

| Slot | Layout | Qué poner |
|------|--------|-----------|
| Hero | 21:9 | Kiosco en contexto real de tienda. |
| Proceso (trio) | trio 4:3 | (1) observación en tienda, (2) flujos críticos (stock/comparación/ubicación), (3) prototipo hardware+software. |
| Solución (duo) | duo 4:3 | Kiosco en uso + detalle de UI. |

### `app/work/asistentes-compra/page.tsx` — Case 04

| Slot | Layout | Qué poner |
|------|--------|-----------|
| Hero | 21:9 | Tablet en manos de asesor en tienda. |
| Proceso (duo) | duo 4:3 | Notas de shadowing + workshops de co-diseño. |
| Solución (wide) | wide 21:9 | Tablet UI completa del flujo cotización → cierre. |

### `app/work/dartstation/page.tsx` — Case 05 Fundacional

| Slot | Layout | Qué poner |
|------|--------|-----------|
| Hero | 21:9 | Showcase de DartStation (mockup). |
| Proceso (trio) | trio 4:3 | Brief inicial + wireframes baja fidelidad + UI final. |
| Solución (full) | full 16:9 | Showcase principal. |

### `app/work/leclop/page.tsx` — Case 06 Fundacional

| Slot | Layout | Qué poner |
|------|--------|-----------|
| Hero | 21:9 | Showcase de LeClop. |
| Proceso (duo) | duo 4:3 | Research + UI final. |
| Showcase (wide) | wide 21:9 | Cierre visual del case. |

---

## Assets globales

Colocar en `public/`:

| Archivo | Uso | Specs |
|---------|-----|-------|
| `favicon.ico` | Pestaña del browser | 32×32 / 16×16 |
| `favicon.svg` | Pestaña en retina | vector |
| `og-default.jpg` | Meta OG default | 1200×630, peso ≤ 200 KB |
| `og-<case>.jpg` | Meta OG por case | 1200×630, peso ≤ 200 KB |
| `portrait.jpg` | Retrato About | 4:5, ≥ 1200 px lado corto |

---

## Tratamiento visual — reglas

1. **Un solo tratamiento por galería**. Trio: los 3 items con el mismo lenguaje (todos foto real, o todos mockup, o todos diagrama). Mezclar lee como desorden.
2. **Contraste fondo ↔ asset**. Fondos de asset oscuros contra `--bg: #0F0F10` pueden "flotar" sin frame. Si el asset es muy oscuro, el propio border del `.media-item` ya hace el trabajo. No añadir sombras.
3. **Captions en uppercase eyebrow**. Nunca en prosa larga. Máximo 80 caracteres. Formato: `Tema · descriptor corto.`
4. **Redactar información sensible**. Cualquier screenshot de backlog, roadmap, dashboard interno: tachones oscuros sobre los nombres de tickets, personas, fechas internas y números específicos.
5. **No escribir métricas en captions**. Las métricas de Sodimac están en NDA. Si el asset las muestra, redactar antes de exportar.

---

## De placeholder a `<img>` real

Hoy cada `CaseMedia` renderiza un div estilizado con el texto `[ alt ]` como placeholder. Para conectar una imagen real hay dos rutas:

**Opción A — pragmática (sin tocar componente):** reemplazar el body del div por un `<Image>` de Next directamente en la página. Útil si cada case trata su media de forma distinta.

**Opción B — estructural (evolucionar el componente):** extender `CaseMediaItem` para aceptar `src?: string` y hacer que `case-media.tsx` renderice `<Image>` cuando haya `src`, o el placeholder actual cuando no. Esto mantiene las páginas limpias.

Recomendación: **Opción B** antes del primer release con fotos reales. Es 15 líneas y evita tener que tocar cada página por separado después.

---

## Copy final

Los textos actuales son **placeholder coherente con la voz** — funcionan como versión 0.9 defensible en ausencia de los finales. Revisar en Claude Design:

- [ ] Hero de Home — titular, sub, chips
- [ ] Secciones 01–07 de cada case — especialmente Homecenter (el featured)
- [ ] Timeline de About (fechas y títulos)
- [ ] Footer (links reales a Linkedin / correo / repositorio)

---

© 2026 Santiago Mejía L.
