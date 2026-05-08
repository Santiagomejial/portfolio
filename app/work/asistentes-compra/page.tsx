'use client';

import Image from 'next/image';
import {
  PullQuote,
  CaseHero,
  CaseSection,
  CaseMedia,
  CaseNav,
  Footer,
  HighlightTitle,
  ClickableImageGrid,
} from '@/components';
import { CASE_ASISTENTES_COMPRA } from '@/content/case-asistentes-compra';
import type {
  CaseHeroContent,
  CaseSectionContent,
  HighlightTitle as HighlightTitleType,
} from '@/content/types';
import { useLang } from '@/lib/use-lang';
import type { Lang } from '@/lib/use-lang';

const T = {
  visitButton: { es: 'Visitar los asistentes en vivo', en: 'Visit the assistants live' },
  features: {
    label: { es: 'Funcionalidades · herramienta del asesor', en: 'Features · advisor tool' },
    custom: {
      label: { es: 'A la medida', en: 'Custom-made' },
      title: { es: 'Sofás, persianas y cortinas configurables.', en: 'Configurable sofas, blinds and curtains.' },
      description: { es: 'Configurador guiado por dimensiones, colores, materiales y complementos para productos a la medida.', en: 'Guided configurator for dimensions, colors, materials and complements for custom products.' },
    },
    home: {
      label: { es: 'Proyectos del hogar', en: 'Home projects' },
      title: { es: 'Cocinas, baños y juntas de baño.', en: 'Kitchens, bathrooms and bathroom sets.' },
      description: { es: 'Cotizadores especializados con recorrido completo: arquitectura, materiales, accesorios e instalación.', en: 'Specialized quoters with full journey: architecture, materials, accessories and installation.' },
    },
    construction: {
      label: { es: 'Construcción', en: 'Construction' },
      title: { es: 'Obra de placa fácil y materiales para proyectos.', en: 'Easy slab work and materials for projects.' },
      description: { es: 'Cálculo de materiales por m², ajustes de obra y recomendaciones técnicas para obras pequeñas y medianas.', en: 'Material calculation per m², project adjustments and technical recommendations for small and medium works.' },
    },
    multiChannel: {
      label: { es: 'Multi-canal responsive', en: 'Multi-channel responsive' },
      title: { es: 'Mismo flujo en web, tienda, asesoría y contact center.', en: 'Same flow on web, store, advisory and contact center.' },
      description: { es: 'Diseño completamente responsive — el cliente inicia en un canal y el asesor toma la posta sin perder contexto.', en: 'Fully responsive design — the customer starts on one channel and the advisor picks up without losing context.' },
    },
  },
  galleryTitle: { es: 'Asistentes de compra · galería', en: 'Shopping assistants · gallery' },
  galleryAlts: {
    a: { es: 'Asistente de compra digital — vista en contexto.', en: 'Digital shopping assistant — view in context.' },
    b: { es: 'Detalle UI — flujo de configuración guiada.', en: 'UI detail — guided configuration flow.' },
    c: { es: 'Cotizador especializado — productos del hogar.', en: 'Specialized quoter — home products.' },
    d: { es: 'Multi-canal responsive — adaptación entre superficies.', en: 'Multi-channel responsive — adaptation across surfaces.' },
  },
  summary: {
    label: { es: 'Resumen · intervención de diseño', en: 'Summary · design intervention' },
    modular: {
      label: { es: 'Sistema modular', en: 'Modular system' },
      caption: { es: 'Una columna vertebral que se adapta a productos a la medida, proyectos y obras.', en: 'A backbone that adapts to custom products, projects and construction works.' },
    },
    guided: {
      label: { es: 'Pasos guiados', en: 'Guided steps' },
      caption: { es: 'Decisiones complejas en steps pequeños y revisables — sin overwhelm.', en: 'Complex decisions in small, reviewable steps — without overwhelm.' },
    },
    multiChannel: {
      label: { es: 'Continuidad multi-canal', en: 'Multi-channel continuity' },
      caption: { es: 'El flujo viaja entre web, tienda, asesoría y contact center sin romperse.', en: 'The flow travels between web, store, advisory and contact center without breaking.' },
    },
  },
  heroPlaceholder: { es: '[ hero visual · Asistentes de compra digital ]', en: '[ hero visual · Digital shopping assistants ]' },
  heroPlaceholderAlt: { es: 'Hero visual — pendiente', en: 'Hero visual — pending' },
};

/**
 * CASE — Asistentes de compra digital.
 * Slug: /work/asistentes-compra. Todo el copy vive en
 * /content/case-asistentes-compra.tsx. Esta página solo compone layout.
 *
 * Estructura espejo de Pantallas / Store in Store:
 * Hero · 01+02 normales · 4 FeatureCards · Decisiones+Solución 2 cols ·
 * 4 imágenes galería · Impacto · 3 ilustraciones de cierre · CaseNav.
 */

export default function AsistentesCompraCase() {
  const { lang } = useLang();
  const content = CASE_ASISTENTES_COMPRA[lang];
  const { hero, establishing, sections, nav } = content;

  return (
    <>
      <CaseHero
        breadcrumb={hero.breadcrumb}
        caseCounter={hero.caseCounter}
        appIcon={hero.appIcon}
        title={renderTitle(hero.title)}
        sub={hero.sub}
        meta={[...hero.meta]}
        heroVisual={renderHeroImage(hero, lang)}
      />

      {/* CTA "Visitar asistentes" — link externo a Homecenter */}
      <VisitAssistantsButton lang={lang} />

      {establishing && (
        <CaseMedia
          layout={establishing.layout}
          items={establishing.items}
          caption={establishing.caption}
        />
      )}

      {/* 01 Contexto + 02 Problema */}
      {sections.slice(0, 2).map((section) => (
        <SectionWithExtras key={section.number} section={section} />
      ))}

      <FeaturesGrid lang={lang} />

      <DecisionesSolucionGrid sections={[sections[2], sections[3]]} />

      <FinalGallery lang={lang} />

      <SectionWithExtras section={sections[4]} />

      <DesignSummaryStrip lang={lang} />

      <CaseNav prev={nav.prev} next={nav.next} />

      <Footer />
    </>
  );
}

/* ─── Sub-componentes de layout ─── */

function SectionWithExtras({ section }: { section: CaseSectionContent }) {
  return (
    <>
      <CaseSection
        number={section.number}
        label={section.label}
        title={renderTitle(section.title)}
        chapterBreak={section.chapterBreak}
      >
        {section.body}
      </CaseSection>

      {section.mediaAfter && (
        <CaseMedia
          layout={section.mediaAfter.layout}
          items={section.mediaAfter.items}
          caption={section.mediaAfter.caption}
        />
      )}

      {section.quoteAfter && (
        <section className="container-portfolio border-t border-line py-20 md:py-28">
          <PullQuote
            highlight={section.quoteAfter.highlight}
            attribution={section.quoteAfter.attribution}
          >
            {section.quoteAfter.body}
          </PullQuote>
        </section>
      )}
    </>
  );
}

/**
 * 4 cards compactas en fila — funcionalidades de la herramienta.
 * Copies y visuales: PENDIENTES — Santiago dictará el contenido.
 */
function FeaturesGrid({ lang }: { lang: Lang }) {
  const features = [
    {
      number: '01',
      label: T.features.custom.label[lang],
      title: T.features.custom.title[lang],
      description: T.features.custom.description[lang],
      visual: <SearchVisual />,
    },
    {
      number: '02',
      label: T.features.home.label[lang],
      title: T.features.home.title[lang],
      description: T.features.home.description[lang],
      visual: <QuoteVisual />,
    },
    {
      number: '03',
      label: T.features.construction.label[lang],
      title: T.features.construction.title[lang],
      description: T.features.construction.description[lang],
      visual: <OfflineVisual />,
    },
    {
      number: '04',
      label: T.features.multiChannel.label[lang],
      title: T.features.multiChannel.title[lang],
      description: T.features.multiChannel.description[lang],
      visual: <CloseSaleVisual />,
    },
  ];

  return (
    <section className="border-t border-line py-12 md:py-16">
      <div className="container-portfolio">
        <div className="mb-8 text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
          {T.features.label[lang]}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {features.map((f) => (
            <article
              key={f.number}
              className="group flex flex-col overflow-hidden rounded-xl border border-line bg-bg-elev transition-base hover:border-blue/40 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-line">
                {f.visual}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
                  {f.number} · {f.label}
                </div>
                <h3 className="font-serif text-[15px] leading-tight tracking-display text-ink">
                  {f.title}
                </h3>
                <p className="text-body-sm leading-snug text-ink-soft">
                  {f.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Decisiones + Solución en grid 2 columnas (sin label sticky).
 */
function DecisionesSolucionGrid({
  sections,
}: {
  sections: [CaseSectionContent, CaseSectionContent];
}) {
  return (
    <section className="border-t border-line py-12 md:py-16">
      <div className="container-portfolio grid gap-10 md:grid-cols-2 md:gap-12">
        {sections.map((section) => (
          <div key={section.number}>
            <div className="text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
              {section.number} · {section.label}
            </div>
            <h2 className="display-md mb-5 mt-3 text-ink">
              {renderTitle(section.title)}
            </h2>
            <div className="space-y-4 text-body text-ink-soft">
              {section.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * Galería final — 4 imágenes del despliegue. Placeholders por ahora.
 * Naming: gallery-01.jpg ... gallery-04.jpg en
 * public/work/asistentes-compra/.
 */
function FinalGallery({ lang }: { lang: Lang }) {
  const items = [
    { src: '/work/asistentes-compra/gallery-01.jpg', alt: T.galleryAlts.a[lang] },
    { src: '/work/asistentes-compra/gallery-02.jpg', alt: T.galleryAlts.b[lang] },
    { src: '/work/asistentes-compra/gallery-03.jpg', alt: T.galleryAlts.c[lang] },
    { src: '/work/asistentes-compra/gallery-04.jpg', alt: T.galleryAlts.d[lang] },
  ];

  return (
    <ClickableImageGrid
      items={items}
      title={T.galleryTitle[lang]}
      aspect="4/3"
      columns={2}
      borderless
    />
  );
}

/**
 * 3 ilustraciones de cierre — resumen de la intervención de diseño.
 * Copies tentativos — Santiago dictará.
 */
function DesignSummaryStrip({ lang }: { lang: Lang }) {
  const items = [
    {
      label: T.summary.modular.label[lang],
      caption: T.summary.modular.caption[lang],
      visual: <ExpertVisual />,
    },
    {
      label: T.summary.guided.label[lang],
      caption: T.summary.guided.caption[lang],
      visual: <TabletVisual />,
    },
    {
      label: T.summary.multiChannel.label[lang],
      caption: T.summary.multiChannel.caption[lang],
      visual: <FlowVisual />,
    },
  ];

  return (
    <section className="container-portfolio border-t border-line py-16 md:py-20">
      <div className="mb-8 text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
        {T.summary.label[lang]}
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.label}
            className="flex flex-col overflow-hidden rounded-xl border border-line bg-bg-elev"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line">
              {item.visual}
            </div>
            <div className="p-4">
              <div className="text-eyebrow font-medium uppercase tracking-eyebrow text-ink">
                {item.label}
              </div>
              <p className="mt-2 text-body-sm leading-snug text-ink-soft">
                {item.caption}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/**
 * Botón CTA después del hero — abre los asistentes en vivo en Homecenter.
 * Estilo similar al DownloadAppButtons del case Homecenter.
 */
function VisitAssistantsButton({ lang }: { lang: Lang }) {
  return (
    <div className="container-portfolio flex flex-col items-center justify-center gap-3 pt-10 pb-16 sm:flex-row md:pt-12 md:pb-24">
      <a
        href="https://www.homecenter.com.co/homecenter-co/content/asistentes_dex/?cid=btnhom1008670#DEXhome"
        target="_blank"
        rel="noreferrer noopener"
        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-line bg-bg-elev px-5 py-3 text-[13px] font-semibold uppercase tracking-eyebrow text-ink transition-base hover:border-blue hover:bg-bg-block sm:w-auto"
      >
        <ExternalLinkIcon />
        <span>{T.visitButton[lang]}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform group-hover:translate-x-1"
          aria-hidden
        >
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

/* ─── Visuales SVG inline (placeholders temáticos) ─── */

/** 01 · A la medida — silueta de mueble con flechas bidireccionales y medida. */
function SearchVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--blue) 6%, transparent), color-mix(in oklab, var(--cyan) 4%, transparent))',
      }}
      aria-hidden
    >
      <div className="flex h-full items-center justify-center p-5">
        <div className="flex flex-col items-center gap-2">
          {/* Silueta de mueble (rectángulo) — float sutil */}
          <div
            className="anim-float-y h-7 w-20 rounded-md"
            style={{
              background: 'color-mix(in oklab, var(--blue) 35%, transparent)',
              border: '1px solid var(--blue)',
            }}
          />

          {/* Cinta métrica con flechas bidireccionales */}
          <svg width="84" height="10" viewBox="0 0 84 10" fill="none" aria-hidden>
            {/* Flecha izquierda */}
            <path
              d="M2 5 L7 2 M2 5 L7 8"
              stroke="var(--ink)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Línea de medida */}
            <line
              x1="2"
              y1="5"
              x2="82"
              y2="5"
              stroke="var(--ink)"
              strokeWidth="1.2"
              strokeLinecap="round"
              className="anim-dash-flow"
            />
            {/* Flecha derecha */}
            <path
              d="M82 5 L77 2 M82 5 L77 8"
              stroke="var(--ink)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Medida con efecto "se llena" */}
          <span
            className="anim-text-fill bg-brand-gradient bg-clip-text font-serif text-[14px] leading-none tracking-display text-transparent"
          >
            120 cm
          </span>
        </div>
      </div>
    </div>
  );
}

/** 02 · Proyectos del hogar — silueta de casa con ventanas pulsando como luces y humo de chimenea. */
function QuoteVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--rose) 6%, transparent), color-mix(in oklab, var(--blue) 4%, transparent))',
      }}
      aria-hidden
    >
      <div className="flex h-full items-center justify-center p-5">
        <div className="relative">
          {/* Humo de chimenea (3 círculos que float) */}
          <span
            className="anim-float-y-strong absolute -top-3 left-[58%] h-1.5 w-1.5 rounded-full"
            style={{
              background: 'color-mix(in oklab, var(--ink) 20%, transparent)',
              animationDelay: '0s',
            }}
          />
          <span
            className="anim-float-y-strong absolute -top-5 left-[64%] h-1 w-1 rounded-full"
            style={{
              background: 'color-mix(in oklab, var(--ink) 15%, transparent)',
              animationDelay: '0.4s',
            }}
          />
          <span
            className="anim-float-y-strong absolute -top-7 left-[60%] h-0.5 w-0.5 rounded-full"
            style={{
              background: 'color-mix(in oklab, var(--ink) 10%, transparent)',
              animationDelay: '0.8s',
            }}
          />

          <svg width="68" height="60" viewBox="0 0 68 60" fill="none" aria-hidden>
            {/* Techo triangular */}
            <path
              d="M4 28 L34 6 L64 28 Z"
              fill="var(--rose)"
              opacity="0.5"
              stroke="var(--ink)"
              strokeWidth="1"
              strokeLinejoin="round"
            />
            {/* Chimenea */}
            <rect x="44" y="10" width="6" height="10" fill="var(--ink)" opacity="0.5" />
            {/* Cuerpo de la casa */}
            <rect
              x="10"
              y="28"
              width="48"
              height="28"
              fill="none"
              stroke="var(--ink)"
              strokeWidth="1"
            />
            {/* Ventana izquierda — pulsa como luz encendida */}
            <rect
              x="16"
              y="34"
              width="10"
              height="8"
              fill="var(--blue)"
              opacity="0.6"
              className="anim-pulse-strong"
            />
            {/* Ventana derecha — pulsa con delay */}
            <rect
              x="42"
              y="34"
              width="10"
              height="8"
              fill="var(--blue)"
              opacity="0.6"
              className="anim-pulse-strong"
              style={{ animationDelay: '0.6s' }}
            />
            {/* Puerta — pulsa más sutil con otro delay */}
            <rect
              x="29"
              y="44"
              width="10"
              height="12"
              fill="var(--rose)"
              opacity="0.7"
              className="anim-pulse-soft"
              style={{ animationDelay: '0.3s' }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

/** 03 · Construcción — casco con planos al lado. */
function OfflineVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--cyan) 6%, transparent), color-mix(in oklab, var(--rose) 4%, transparent))',
      }}
      aria-hidden
    >
      <div className="flex h-full items-center justify-center gap-3 p-5">
        {/* Casco de construcción (SVG silueta) */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 48 48"
          fill="none"
          className="anim-float-y-strong text-ink"
          aria-hidden
        >
          {/* Visera */}
          <path
            d="M4 32 L44 32 L44 36 Q44 40 40 40 L8 40 Q4 40 4 36 Z"
            fill="var(--rose)"
            opacity="0.7"
          />
          {/* Cuerpo del casco (cúpula) */}
          <path
            d="M10 32 Q10 14 24 14 Q38 14 38 32"
            fill="var(--rose)"
            stroke="var(--ink)"
            strokeWidth="1"
          />
          {/* Cresta superior */}
          <rect x="22" y="14" width="4" height="8" fill="var(--ink)" opacity="0.3" />
        </svg>

        {/* Plano / blueprint con líneas + check */}
        <div
          className="relative flex h-12 w-10 flex-col gap-1 rounded-md border border-line p-2"
          style={{ background: 'var(--bg)' }}
        >
          {/* Líneas horizontales (medidas) */}
          <div className="h-0.5 w-full rounded-full" style={{ background: 'var(--blue)' }} />
          <div className="h-0.5 w-3/4 rounded-full" style={{ background: 'var(--line)' }} />
          {/* Cuadrado central (placa) */}
          <div
            className="anim-pulse-strong mt-0.5 h-3 w-6 self-center rounded-sm"
            style={{ background: 'var(--blue)', opacity: 0.5 }}
          />
          {/* Línea inferior */}
          <div className="mt-auto h-0.5 w-2/3 rounded-full" style={{ background: 'var(--line)' }} />
        </div>
      </div>
    </div>
  );
}

/** 04 · Cierre asistido — carrito → check con flecha. */
function CloseSaleVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--blue) 5%, transparent), color-mix(in oklab, var(--rose) 5%, transparent))',
      }}
      aria-hidden
    >
      <div className="flex h-full items-center justify-center gap-2 p-5">
        {/* Carrito */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-ink"
          aria-hidden
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        {/* Flecha */}
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="anim-arrow-slide-strong" aria-hidden>
          <path
            d="M1 5 H12 M9 1 L13 5 L9 9"
            stroke="url(#csGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="csGrad" x1="0" y1="0" x2="16" y2="0">
              <stop offset="0%" stopColor="var(--blue)" />
              <stop offset="100%" stopColor="var(--rose)" />
            </linearGradient>
          </defs>
        </svg>
        {/* Check final */}
        <div
          className="anim-pulse-strong flex h-7 w-7 items-center justify-center rounded-full"
          style={{ background: 'var(--rose)' }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--bg)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M5 12l5 5L20 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Visuales del DesignSummaryStrip ─── */

/** "Diseño para expertos" — checklist con todos los items resueltos. */
function ExpertVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--blue) 6%, transparent), color-mix(in oklab, var(--cyan) 4%, transparent))',
      }}
      aria-hidden
    >
      <div className="flex h-full items-center justify-center p-5">
        <div className="flex flex-col gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="anim-pulse-strong flex h-3 w-3 items-center justify-center rounded-sm"
                style={{
                  background: 'var(--blue)',
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--bg)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M5 12l5 5L20 7" />
                </svg>
              </span>
              <span
                className="h-1 w-14 rounded-full"
                style={{ background: 'var(--line)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** "Tablet-first" — silueta de tablet con touch target grande. */
function TabletVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--rose) 6%, transparent), color-mix(in oklab, var(--blue) 4%, transparent))',
      }}
      aria-hidden
    >
      <div className="flex h-full items-center justify-center p-5">
        {/* Tablet horizontal */}
        <div
          className="anim-float-y-strong relative flex h-12 w-20 items-center justify-center rounded-md border border-line"
          style={{ background: 'var(--bg)' }}
        >
          {/* Touch target dentro */}
          <div
            className="anim-pulse-strong h-5 w-5 rounded-md bg-brand-gradient"
          />
        </div>
      </div>
    </div>
  );
}

/** "Flujo continuo" — 3 puntos conectados con línea horizontal. */
function FlowVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--cyan) 6%, transparent), color-mix(in oklab, var(--rose) 4%, transparent))',
      }}
      aria-hidden
    >
      <div className="flex h-full items-center justify-center p-5">
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="anim-pulse-strong h-3 w-3 rounded-full bg-brand-gradient"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
              {i < 2 && (
                <span
                  className="h-px w-6"
                  style={{ background: 'var(--ink-mute)' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Renderiza title como string plano o con HighlightTitle según tipo. */
function renderTitle(title: string | HighlightTitleType): React.ReactNode {
  if (typeof title === 'string') return title;
  return <HighlightTitle {...title} />;
}

/** Renderiza el hero visual: imagen real si hay heroImage, placeholder si no. */
function renderHeroImage(hero: CaseHeroContent, lang: Lang): React.ReactNode {
  if (hero.heroImage) {
    return (
      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg">
        <Image
          src={hero.heroImage.src}
          alt={hero.heroImage.alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
    );
  }
  return (
    <div
      className="aspect-[21/9] w-full overflow-hidden rounded-lg border border-dashed border-line bg-bg-block"
      role="img"
      aria-label={T.heroPlaceholderAlt[lang]}
    >
      <div className="flex h-full items-center justify-center text-eyebrow uppercase tracking-eyebrow text-ink-mute">
        {T.heroPlaceholder[lang]}
      </div>
    </div>
  );
}
