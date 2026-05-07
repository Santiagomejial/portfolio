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
import { CASE_LECLOP } from '@/content/case-leclop';
import type {
  CaseHeroContent,
  CaseSectionContent,
  HighlightTitle as HighlightTitleType,
} from '@/content/types';

/**
 * CASE — LeClop. Marca de eventos en Bogotá D.C. y Manizales.
 * Slug: /work/leclop. Todo el copy vive en /content/case-leclop.tsx.
 */

export default function LeClopCase() {
  const { hero, establishing, sections, nav } = CASE_LECLOP;

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

      {/* Botones a Instagram + Behance del Manual + Behance de la App */}
      <ExternalLinksRow />

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

      {/* 4 FeatureCards en fila */}
      <FeaturesGrid />

      {/* 03 Decisiones + 04 Solución en grid 2 cols */}
      <DecisionesSolucionGrid sections={[sections[2], sections[3]]} />

      {/* Galería */}
      <FinalGallery />

      {/* 05 Impacto */}
      <SectionWithExtras section={sections[4]} />

      {/* 3 ilustraciones de cierre */}
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

/** Botones a las referencias externas: Instagram, Behance manual, Behance app. */
function ExternalLinksRow() {
  const links = [
    {
      label: 'Instagram @le.clop',
      href: 'https://www.instagram.com/le.clop/',
      accent: 'var(--rose)',
    },
    {
      label: 'Manual de marca · Behance',
      href: 'https://www.behance.net/gallery/139149093/MANUAL-DE-MARCA-LECLOP',
      accent: 'var(--blue)',
    },
    {
      label: 'App (académica) · Behance',
      href: 'https://www.behance.net/gallery/148451899/Le-Clop-App',
      accent: 'var(--cyan)',
    },
  ];

  return (
    <div className="container-portfolio pt-10 pb-16 md:pt-12 md:pb-24">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {links.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center justify-between gap-3 rounded-full border border-line bg-bg-elev px-4 py-3 text-[12px] font-semibold uppercase tracking-eyebrow text-ink transition-base hover:border-blue hover:bg-bg-block"
          >
            <span className="inline-flex items-center gap-2.5">
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ background: s.accent }}
                aria-hidden
              />
              {s.label}
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 transition-transform group-hover:translate-x-1"
              aria-hidden
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}

function FeaturesGrid() {
  const features = [
    {
      number: '01',
      label: 'Identidad de marca',
      title: 'Logo, paleta y tipografías oficiales.',
      description:
        'Sistema gráfico construido para hablar a una audiencia joven en redes, posters de campaña y merchandising.',
      visual: <BrandSystemVisual />,
    },
    {
      number: '02',
      label: 'Manual de marca',
      title: 'Sistema documentado y escalable.',
      description:
        '80+ páginas de retículas, usos, variaciones y aplicaciones modelo — la marca funcionando sola sin que yo esté en cada pieza.',
      visual: <BrandManualVisual />,
    },
    {
      number: '03',
      label: 'Multi-ciudad',
      title: 'Bogotá D.C. y Manizales bajo la misma marca.',
      description:
        'Una identidad que se aplica de la misma forma en eventos de las dos ciudades, conservando coherencia y reconocimiento.',
      visual: <MultiCityVisual />,
    },
    {
      number: '04',
      label: 'App académica',
      title: 'Prototipo de boletería desde la marca.',
      description:
        'Como ejercicio académico, prototipé una app de eventos completa aplicando el sistema visual de LeClop a un producto digital.',
      visual: <AcademicAppVisual />,
    },
  ];

  return (
    <section className="border-t border-line py-12 md:py-16">
      <div className="container-portfolio">
        <div className="mb-8 text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
          Funcionalidades · construcción de marca
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

function FinalGallery() {
  // Cambiar a true cuando estén las imágenes en /public/work/leclop/
  const HAS_IMAGES = true;

  const items = [
    {
      src: '/work/leclop/gallery-01.jpg',
      alt: 'LeClop — manual de marca, página de logo y construcción.',
    },
    {
      src: '/work/leclop/gallery-02.jpg',
      alt: 'LeClop — paleta de color y aplicaciones.',
    },
    {
      src: '/work/leclop/gallery-03.jpg',
      alt: 'LeClop — campaña aplicada en posters de eventos.',
    },
    {
      src: '/work/leclop/gallery-04.jpg',
      alt: 'LeClop — app académica · pantallas principales.',
    },
  ];

  if (HAS_IMAGES) {
    return (
      <ClickableImageGrid
        items={items}
        title="LeClop · galería"
        aspect="4/3"
        columns={2}
        borderless
      />
    );
  }

  return (
    <section className="container-portfolio border-t border-line py-16 md:py-20">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.src}
            className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-dashed border-line bg-bg-block"
            role="img"
            aria-label={item.alt}
          >
            <div className="flex h-full items-center justify-center px-4 text-center text-eyebrow uppercase tracking-eyebrow text-ink-mute">
              [ {item.alt} ]
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-center text-eyebrow uppercase tracking-eyebrow text-ink-mute md:text-left">
        Cierre · 4 imágenes pendientes de subir.
      </p>
    </section>
  );
}

function DesignSummaryStrip() {
  const items = [
    {
      label: 'Marca desde cero',
      caption: 'De hoja en blanco a sistema completo documentado en manual.',
      visual: <FromScratchVisual />,
    },
    {
      label: 'Co-fundador',
      caption: 'Decisiones de negocio + dirección visual desde el día uno.',
      visual: <CoFounderVisual />,
    },
    {
      label: 'Marca operativa',
      caption: 'Campañas semanales en dos ciudades sin perder coherencia.',
      visual: <OperativeBrandVisual />,
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

/* ─── Visuales SVG inline (animados) ─── */

/** 01 Identidad — círculo brand-gradient con anillos pulsando (logo + áura). */
function BrandSystemVisual() {
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
          <div
            className="anim-pulse-strong absolute inset-0 rounded-full border-2"
            style={{ borderColor: 'color-mix(in oklab, var(--rose) 40%, transparent)' }}
          />
          <div
            className="anim-pulse-strong absolute -inset-2 rounded-full border-2"
            style={{
              borderColor: 'color-mix(in oklab, var(--rose) 20%, transparent)',
              animationDelay: '0.4s',
            }}
          />
          <div className="relative h-12 w-12 rounded-full bg-brand-gradient" />
        </div>
      </div>
    </div>
  );
}

/** 02 Manual — silueta de libro con páginas voladoras. */
function BrandManualVisual() {
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
          {/* Páginas detrás (sombras) */}
          <div
            className="anim-float-y absolute -left-2 top-1 h-14 w-10 rounded-sm border border-line"
            style={{ background: 'var(--bg-elev)' }}
          />
          <div
            className="anim-float-y absolute -left-1 top-0.5 h-14 w-10 rounded-sm border border-line"
            style={{ background: 'var(--bg-elev)', animationDelay: '0.3s' }}
          />
          {/* Página principal con líneas */}
          <div
            className="relative flex h-14 w-10 flex-col gap-1 rounded-sm border border-line p-1.5"
            style={{ background: 'var(--bg)' }}
          >
            <div className="h-0.5 w-6 rounded-full" style={{ background: 'var(--ink)' }} />
            <div className="mt-0.5 space-y-0.5">
              <div className="h-0.5 w-full rounded-full" style={{ background: 'var(--line)' }} />
              <div className="h-0.5 w-3/4 rounded-full" style={{ background: 'var(--line)' }} />
              <div className="h-0.5 w-2/3 rounded-full" style={{ background: 'var(--line)' }} />
            </div>
            <div
              className="anim-pulse-strong mt-auto h-3 w-6 self-end rounded-sm bg-brand-gradient opacity-60"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/** 03 Multi-ciudad — 2 pins en un mapa abstracto. */
function MultiCityVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--cyan) 6%, transparent), color-mix(in oklab, var(--rose) 4%, transparent))',
      }}
      aria-hidden
    >
      <div className="flex h-full items-center justify-center gap-6 p-5">
        {/* Pin 1: Bogotá */}
        <div className="anim-float-y flex flex-col items-center gap-1">
          <svg width="20" height="26" viewBox="0 0 20 26" aria-hidden>
            <path
              d="M10 1 C5 1 1 5 1 10 C1 15 10 25 10 25 C10 25 19 15 19 10 C19 5 15 1 10 1 Z"
              fill="var(--blue)"
            />
            <circle cx="10" cy="10" r="3.5" fill="var(--bg)" />
          </svg>
          <span className="text-[8px] font-semibold uppercase tracking-eyebrow text-ink-mute">
            Bogotá
          </span>
        </div>
        {/* Línea conectora dash-flow */}
        <div className="anim-dash-flow h-px w-10" style={{ background: 'var(--ink-mute)' }} />
        {/* Pin 2: Manizales */}
        <div className="anim-float-y flex flex-col items-center gap-1" style={{ animationDelay: '0.5s' }}>
          <svg width="20" height="26" viewBox="0 0 20 26" aria-hidden>
            <path
              d="M10 1 C5 1 1 5 1 10 C1 15 10 25 10 25 C10 25 19 15 19 10 C19 5 15 1 10 1 Z"
              fill="var(--rose)"
            />
            <circle cx="10" cy="10" r="3.5" fill="var(--bg)" />
          </svg>
          <span className="text-[8px] font-semibold uppercase tracking-eyebrow text-ink-mute">
            Manizales
          </span>
        </div>
      </div>
    </div>
  );
}

/** 04 App académica — silueta de phone con UI básica + badge "ACADÉMICO". */
function AcademicAppVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--blue) 5%, transparent), color-mix(in oklab, var(--rose) 5%, transparent))',
      }}
      aria-hidden
    >
      <div className="flex h-full items-center justify-center p-5">
        <div className="relative">
          {/* Teléfono */}
          <div
            className="anim-float-y flex h-16 w-9 flex-col items-center justify-start gap-1 rounded-md border border-line p-1.5"
            style={{ background: 'var(--bg)' }}
          >
            <div className="h-0.5 w-3 rounded-full" style={{ background: 'var(--line)' }} />
            <div className="mt-1 space-y-0.5">
              <div className="h-0.5 w-5 rounded-full" style={{ background: 'var(--line)' }} />
              <div className="h-0.5 w-4 rounded-full" style={{ background: 'var(--line)' }} />
            </div>
            <div
              className="anim-pulse-strong mt-1 h-3 w-5 rounded-sm bg-brand-gradient opacity-70"
            />
          </div>
          {/* Badge académico */}
          <div
            className="absolute -right-2 -top-1 rounded-full px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-eyebrow text-bg"
            style={{ background: 'var(--cyan)' }}
          >
            Edu
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Visuales del DesignSummaryStrip ─── */

/** Marca desde cero — hoja en blanco → marca aparece. */
function FromScratchVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--blue) 6%, transparent), color-mix(in oklab, var(--cyan) 4%, transparent))',
      }}
      aria-hidden
    >
      <div className="flex h-full items-center justify-center gap-3 p-5">
        {/* Hoja en blanco */}
        <div
          className="h-12 w-9 rounded-sm border border-line"
          style={{ background: 'var(--bg)' }}
        />
        {/* Flecha */}
        <svg width="20" height="10" viewBox="0 0 20 10" fill="none" className="anim-arrow-slide-strong" aria-hidden>
          <path
            d="M2 5 H14 M11 1 L17 5 L11 9"
            stroke="var(--ink-mute)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* Hoja con logo */}
        <div
          className="flex h-12 w-9 items-center justify-center rounded-sm border border-line"
          style={{ background: 'var(--bg)' }}
        >
          <div className="anim-pulse-strong h-5 w-5 rounded-full bg-brand-gradient" />
        </div>
      </div>
    </div>
  );
}

/** Co-founder — 2 sombreros (negocio + diseño). */
function CoFounderVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--rose) 6%, transparent), color-mix(in oklab, var(--blue) 4%, transparent))',
      }}
      aria-hidden
    >
      <div className="flex h-full items-center justify-center gap-3 p-5">
        {/* Sombrero negocio (cuadrado) */}
        <div
          className="anim-float-y flex h-10 w-10 items-center justify-center rounded-md text-[8px] font-bold uppercase tracking-eyebrow text-bg"
          style={{ background: 'var(--blue)' }}
        >
          Negocio
        </div>
        {/* + */}
        <span className="text-lg font-semibold text-ink-mute">+</span>
        {/* Sombrero diseño (círculo) */}
        <div
          className="anim-float-y flex h-10 w-10 items-center justify-center rounded-full text-[8px] font-bold uppercase tracking-eyebrow text-bg"
          style={{ background: 'var(--rose)', animationDelay: '0.4s' }}
        >
          Diseño
        </div>
      </div>
    </div>
  );
}

/** Marca operativa — varias piezas (posters) que se generan rápido. */
function OperativeBrandVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--cyan) 6%, transparent), color-mix(in oklab, var(--rose) 4%, transparent))',
      }}
      aria-hidden
    >
      <div className="flex h-full items-center justify-center gap-2 p-5">
        {[
          { color: 'var(--blue)', delay: '0s' },
          { color: 'var(--rose)', delay: '0.2s' },
          { color: 'var(--cyan)', delay: '0.4s' },
          { color: 'var(--ink-soft)', delay: '0.6s' },
        ].map((p, i) => (
          <div
            key={i}
            className="anim-float-y h-12 w-7 rounded-sm"
            style={{ background: p.color, animationDelay: p.delay }}
          />
        ))}
      </div>
    </div>
  );
}

/** Renderiza title como string plano o con HighlightTitle. */
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
        [ hero visual · LeClop ]
      </div>
    </div>
  );
}
