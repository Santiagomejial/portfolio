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
  const { hero, establishing, sections, nav } = CASE_ASISTENTES_COMPRA;

  return (
    <>
      <CaseHero
        breadcrumb={hero.breadcrumb}
        caseCounter={hero.caseCounter}
        appIcon={hero.appIcon}
        title={renderTitle(hero.title)}
        sub={hero.sub}
        meta={[...hero.meta]}
        heroVisual={renderHeroImage(hero)}
      />

      {/* CTA "Visitar asistentes" — link externo a Homecenter */}
      <VisitAssistantsButton />

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

      {/* 4 FeatureCards en fila — placeholders pendientes de copies reales */}
      <FeaturesGrid />

      {/* 03 Decisiones + 04 Solución en grid 2 cols */}
      <DecisionesSolucionGrid sections={[sections[2], sections[3]]} />

      {/* 4 imágenes del despliegue (placeholders por ahora) */}
      <FinalGallery />

      {/* 05 Impacto */}
      <SectionWithExtras section={sections[4]} />

      {/* 3 ilustraciones de cierre — placeholders pendientes */}
      <DesignSummaryStrip />

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
function FeaturesGrid() {
  const features = [
    {
      number: '01',
      label: 'A la medida',
      title: 'Sofás, persianas y cortinas configurables.',
      description:
        'Configurador guiado por dimensiones, colores, materiales y complementos para productos a la medida.',
      visual: <SearchVisual />,
    },
    {
      number: '02',
      label: 'Proyectos del hogar',
      title: 'Cocinas, baños y juntas de baño.',
      description:
        'Cotizadores especializados con recorrido completo: arquitectura, materiales, accesorios e instalación.',
      visual: <QuoteVisual />,
    },
    {
      number: '03',
      label: 'Construcción',
      title: 'Obra de placa fácil y materiales para proyectos.',
      description:
        'Cálculo de materiales por m², ajustes de obra y recomendaciones técnicas para obras pequeñas y medianas.',
      visual: <OfflineVisual />,
    },
    {
      number: '04',
      label: 'Multi-canal responsive',
      title: 'Mismo flujo en web, tienda, asesoría y contact center.',
      description:
        'Diseño completamente responsive — el cliente inicia en un canal y el asesor toma la posta sin perder contexto.',
      visual: <CloseSaleVisual />,
    },
  ];

  return (
    <section className="border-t border-line py-12 md:py-16">
      <div className="container-portfolio">
        <div className="mb-8 text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
          Funcionalidades · herramienta del asesor
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
function FinalGallery() {
  const items = [
    {
      src: '/work/asistentes-compra/gallery-01.jpg',
      alt: 'Asistente de compra digital — vista en contexto.',
    },
    {
      src: '/work/asistentes-compra/gallery-02.jpg',
      alt: 'Detalle UI — flujo de configuración guiada.',
    },
    {
      src: '/work/asistentes-compra/gallery-03.jpg',
      alt: 'Cotizador especializado — productos del hogar.',
    },
    {
      src: '/work/asistentes-compra/gallery-04.jpg',
      alt: 'Multi-canal responsive — adaptación entre superficies.',
    },
  ];

  return (
    <ClickableImageGrid
      items={items}
      title="Asistentes de compra · galería"
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
function DesignSummaryStrip() {
  const items = [
    {
      label: 'Sistema modular',
      caption: 'Una columna vertebral que se adapta a productos a la medida, proyectos y obras.',
      visual: <ExpertVisual />,
    },
    {
      label: 'Pasos guiados',
      caption: 'Decisiones complejas en steps pequeños y revisables — sin overwhelm.',
      visual: <TabletVisual />,
    },
    {
      label: 'Continuidad multi-canal',
      caption: 'El flujo viaja entre web, tienda, asesoría y contact center sin romperse.',
      visual: <FlowVisual />,
    },
  ];

  return (
    <section className="container-portfolio border-t border-line py-16 md:py-20">
      <div className="mb-8 text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
        Resumen · intervención de diseño
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
function VisitAssistantsButton() {
  return (
    <div className="container-portfolio flex flex-col items-center justify-center gap-3 pt-10 pb-16 sm:flex-row md:pt-12 md:pb-24">
      <a
        href="https://www.homecenter.com.co/homecenter-co/content/asistentes_dex/?cid=btnhom1008670#DEXhome"
        target="_blank"
        rel="noreferrer noopener"
        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-line bg-bg-elev px-5 py-3 text-[13px] font-semibold uppercase tracking-eyebrow text-ink transition-base hover:border-blue hover:bg-bg-block sm:w-auto"
      >
        <ExternalLinkIcon />
        <span>Visitar los asistentes en vivo</span>
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

/** 01 · Búsqueda — lupa sobre lista de productos. */
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
        <div className="relative">
          {/* Lista de items */}
          <div className="flex flex-col gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex items-center gap-1.5"
                style={{
                  opacity: i === 1 ? 1 : 0.5,
                }}
              >
                <span
                  className="h-2 w-2 rounded-sm"
                  style={{ background: 'var(--ink-soft)' }}
                />
                <span
                  className="h-1.5 w-12 rounded-full"
                  style={{
                    background: i === 1 ? 'var(--blue)' : 'var(--line)',
                  }}
                />
              </div>
            ))}
          </div>
          {/* Lupa */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="anim-organic-1 absolute -right-3 top-2 text-ink"
            aria-hidden
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/** 02 · Cotización — documento con líneas y total destacado. */
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
        <div
          className="flex h-16 w-12 flex-col gap-1 rounded-md border border-line p-2"
          style={{ background: 'var(--bg)' }}
        >
          {/* Header */}
          <div
            className="h-0.5 w-6 rounded-full"
            style={{ background: 'var(--ink)' }}
          />
          {/* Líneas */}
          <div className="mt-1 space-y-0.5">
            <div
              className="h-0.5 w-full rounded-full"
              style={{ background: 'var(--line)' }}
            />
            <div
              className="h-0.5 w-3/4 rounded-full"
              style={{ background: 'var(--line)' }}
            />
            <div
              className="h-0.5 w-5/6 rounded-full"
              style={{ background: 'var(--line)' }}
            />
            <div
              className="h-0.5 w-2/3 rounded-full"
              style={{ background: 'var(--line)' }}
            />
          </div>
          {/* Total destacado */}
          <div className="mt-auto flex items-center justify-end gap-1">
            <span
              className="anim-pulse-strong h-1 w-3 rounded-full bg-brand-gradient"
            />
          </div>
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
function renderHeroImage(hero: CaseHeroContent): React.ReactNode {
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
      aria-label="Hero visual — pendiente"
    >
      <div className="flex h-full items-center justify-center text-eyebrow uppercase tracking-eyebrow text-ink-mute">
        [ hero visual · Asistentes de compra digital ]
      </div>
    </div>
  );
}
