# Portafolio — Santiago Mejía L.

Portafolio web tier-1. Posicionamiento híbrido **Product Designer + Product Owner**, con origen en Diseño Industrial (Javeriana, Bogotá).

> Stack: Next.js 15 · TypeScript strict · Tailwind CSS v3 · CSS Custom Properties como fuente única de verdad del design system.

---

## TL;DR para deploy

```bash
npm install
npm run dev        # desarrollo local → http://localhost:3000
npm run build      # build productivo
npm run start      # servir build
npm run type-check # validación TS estricta
```

Para desplegar:
- **Vercel** → conectar repo, preset Next.js, sin variables de entorno. Deploy automático.
- **Claude Design** → ver [`DEPLOY.md`](./DEPLOY.md).

---

## Estado del proyecto

**Fase 5 completada** — Diseño alta fidelidad, código y deploy.

| Paso | Estado | Contenido |
|------|--------|-----------|
| 1 · Tokens + setup | OK | `styles/tokens.css`, Next 15 + TW v3, fuentes Young Serif + Inter |
| 2 · Componentes base | OK | 14 componentes en `components/` con barrel export |
| 3 · Home alta fidelidad | OK | `app/page.tsx` con Hero, Work, Snapshot, Timeline, CTA |
| 4 · About + Work listing | OK | `app/about/page.tsx`, `app/work/page.tsx` |
| 5 · Template case + Homecenter | OK | 7 secciones + chapterBreak + CaseMedia integrado |
| 6 · Cases restantes | OK | Store in Store · Kioscos · Asistentes · DartStation · LeClop |
| 7 · Paquete portable | OK | Este README + `DEPLOY.md` + `CONTENT-SLOTS.md` |

Los copies finales y las fotografías / recursos gráficos se añaden manualmente en la fase de **Claude Design**. El código está diseñado para hacerlo sin tocar lógica — ver [`CONTENT-SLOTS.md`](./CONTENT-SLOTS.md).

---

## Estructura

```
portfolio_site/
├── app/
│   ├── layout.tsx                      FloatingNav global + anti-flash de tema
│   ├── page.tsx                        Home
│   ├── about/page.tsx                  Sobre mí
│   ├── work/
│   │   ├── page.tsx                    Listing (2 capítulos: Retail · Fundacionales)
│   │   ├── homecenter/page.tsx         Case 01 · Featured
│   │   ├── store-in-store/page.tsx     Case 02 · Retail
│   │   ├── kioscos-digitales/page.tsx  Case 03 · Retail
│   │   ├── asistentes-compra/page.tsx  Case 04 · Retail
│   │   ├── dartstation/page.tsx        Case 05 · Fundacional 2021
│   │   └── leclop/page.tsx             Case 06 · Fundacional 2021
│   └── globals.css                     Reset + import de tokens
├── components/
│   ├── index.ts                        Barrel export
│   ├── floating-nav.tsx                Nav pill flotante + theme + lang toggle
│   ├── page-hero.tsx                   Hero para Home / About / Work listing
│   ├── case-hero.tsx                   Hero para páginas de case
│   ├── case-section.tsx                Sección 01–07 del case (12 cols + chapterBreak)
│   ├── case-media.tsx                  Slot de imagen/video — full / wide / duo / trio
│   ├── case-nav.tsx                    Prev/Next circular entre cases
│   ├── work-card.tsx                   Card del listing /work
│   ├── pull-quote.tsx                  Quote de transición narrativa
│   ├── timeline.tsx                    Línea de tiempo (About / Home)
│   ├── chip-row.tsx                    Pills de rol / stack
│   ├── metric-card.tsx                 Card de snapshot (años, equipo, etc.)
│   ├── section-head.tsx                Eyebrow + H2 + sub
│   ├── cta-block.tsx                   CTA final de página
│   ├── footer.tsx                      Footer global
│   └── eyebrow.tsx                     Primitive de eyebrow uppercase
├── lib/
│   ├── utils.ts                        cn() helper (clsx + tailwind-merge)
│   ├── use-theme.ts                    Hook theme (dark default + localStorage + no-flash)
│   └── use-lang.ts                     Hook i18n ES/EN (client-side, sin route change)
├── styles/
│   └── tokens.css                      ★ FUENTE ÚNICA DE VERDAD del DS
├── public/                             Fotos, exports, OG, favicon (ver CONTENT-SLOTS.md)
├── tailwind.config.ts                  Tailwind leyendo var(--token)
├── next.config.mjs                     Config mínima + images remotePatterns
├── postcss.config.mjs
├── tsconfig.json                       TS strict, alias @/*
├── package.json
├── README.md                           (este archivo)
├── DEPLOY.md                           Guía de deploy (Vercel + Claude Design)
└── CONTENT-SLOTS.md                    Dónde van los assets finales (imágenes, copy)
```

---

## Sistema de diseño

### Regla de oro

**Todo cambio visual global se hace en `styles/tokens.css`.** Los componentes leen tokens vía `var(--token)` y Tailwind está configurado para exponerlos como utilities. Un cambio en tokens se propaga al sitio entero.

### Tipografía

- **Display** — `Young Serif` (Google Fonts) · variable CSS `--font-serif` · clases `.display-xl` / `.display-lg` / `.display-md`
- **Body** — `Inter` · variable CSS `--font-sans`
- **Eyebrow** — Inter 500 uppercase, tracking `--ls-eyebrow`

Ambas fuentes se cargan con `next/font` en `app/layout.tsx` (sin requests a Google en runtime).

### Color

**Acentos (compartidos entre temas)**

| Token | Valor |
|-------|-------|
| `--blue` | `#3B82F6` |
| `--rose` | `#F43F5E` |
| `--cyan` | `#06B6D4` |
| `--gradient` | `linear-gradient(135deg, var(--blue), var(--rose))` |

**Superficies por tema**

| Token | Dark (default) | Light |
|-------|----------------|-------|
| `--bg` | `#0F0F10` | `#FAFAF9` |
| `--bg-block` | `#18181B` | `#F4F4F5` |
| `--ink` | `#F8FAFC` | `#0F0F10` |
| `--ink-soft` | `#D4D4D8` | `#3F3F46` |
| `--ink-mute` | `#71717A` | `#71717A` |
| `--line` | `#27272A` | `#E4E4E7` |

El tema se controla con `data-theme="dark" | "light"` en `<html>`. Hay script inline en `layout.tsx` que aplica el valor guardado antes del primer paint (anti-flash).

### Espacio y ritmo

Grid de 12 columnas, gap `20px`. Secciones separadas con `border-top: 1px solid var(--line)` + padding vertical `80px` (mobile `48px`). Fuera de mobile, casi todo vive en `md:col-span-6 | 9 | 12`.

---

## Navegación: FloatingNav

Reemplaza el header tradicional. Pill flotante en top con blur (`var(--blur-bg)`), global en `layout.tsx`. Contiene logo (`SantiagoMejíaL.` con gradiente en "Mejía"), links internos (Sobre mí · Proyectos), toggles ES/EN y tema, y CTA de contacto (`mailto:`).

---

## i18n

Ver `lib/use-lang.ts`. Estrategia: diccionarios por componente, selector en el hook, sin cambio de URL. Ligera y sin dependencias. El toggle vive en FloatingNav y persiste en `localStorage`.

> Nota: los cases ya escritos están en ES. La versión EN se puede activar por diccionario cuando se cierren los copies finales en Claude Design.

---

## Convenciones de código

- TypeScript strict activo. `npm run type-check` debe pasar verde antes de commit.
- Componentes funcionales, props tipadas y exportadas (el tipo público se re-exporta desde `components/index.ts` cuando aplica — ver `CaseMeta`, `TimelineItem`, `CaseMediaItem`).
- `cn()` helper (`lib/utils.ts`) para merge de clases Tailwind.
- Imports vía alias `@/` (configurado en `tsconfig.json` y `tailwind.config.ts`).

---

## Dependencias

Minimalismo deliberado. **Cinco dependencias de runtime**:

- `next` `^15.0.3`
- `react` / `react-dom` `^18.3.1`
- `clsx` `^2.1.1`
- `tailwind-merge` `^2.5.4`

Sin UI libraries, sin animation libs, sin CMS. Si se añade framer-motion o GSAP en Claude Design, hacerlo puntual y solo donde aporte narrativa — no como dependencia estructural.

---

## Deploy a Claude Design

Ver [`DEPLOY.md`](./DEPLOY.md) para el paso a paso completo. Resumen:

1. Empaquetar la carpeta `portfolio_site/` (sin `node_modules`, sin `.next`, sin `.vercel`).
2. Subir el paquete a Claude Design.
3. Instalar dependencias y correr build dentro de su runtime.
4. Ajuste fino visual desde su interfaz — tokens y copies son editables sin tocar lógica.

---

© 2026 Santiago Mejía L. — Bogotá, Colombia
