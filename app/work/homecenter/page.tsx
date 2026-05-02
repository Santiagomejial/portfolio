import Image from 'next/image';
import {
  PullQuote,
  CaseHero,
  CaseSection,
  CaseMedia,
  CaseNav,
  Footer,
  HighlightTitle,
  DownloadAppButtons,
  ProcessHighlightCard,
} from '@/components';
import { CASE_HOMECENTER } from '@/content/case-homecenter';
import type {
  CaseHeroContent,
  CaseSectionContent,
  HighlightTitle as HighlightTitleType,
} from '@/content/types';

/**
 * CASE PRINCIPAL — App Homecenter & Constructor.
 * Todo el copy vive en /content/case-homecenter.tsx.
 * Esta página solo compone layout y consume el contenido tipado.
 */

export default function HomecenterCase() {
  const { hero, establishing, sections, nav } = CASE_HOMECENTER;

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

      {hero.appLinks && (
        <DownloadAppButtons
          android={hero.appLinks.android}
          ios={hero.appLinks.ios}
        />
      )}

      {establishing && (
        <CaseMedia
          layout={establishing.layout}
          items={establishing.items}
          caption={establishing.caption}
        />
      )}

      {/* 01 + 02 lado a lado en grid de 2 columnas */}
      <section className="border-t border-line py-12 md:py-16">
        <div className="container-portfolio grid gap-10 md:grid-cols-2 md:gap-12">
          {sections.slice(0, 2).map((section) => (
            <CompactSection key={section.number} section={section} />
          ))}
        </div>
      </section>

      {/* 3 highlights gráficos del proceso (reemplazan al trio de imágenes) */}
      <section className="border-t border-line py-16 md:py-20">
        <div className="container-portfolio grid gap-5 md:grid-cols-3">
          <ProcessHighlightCard
            number="01"
            label="Discovery"
            title="Voz del negocio + voz del cliente."
            description="3 meses recopilando requerimientos y dolores de las gerencias de Homecenter, sumados a entrevistas guerrilla con clientes reales usando la app. Visualización de todas las pantallas, componentes y flujos críticos en un solo Figma."
            visual={<DiscoveryVisual />}
          />
          <ProcessHighlightCard
            number="02"
            label="Research"
            title="Investigación a escala nacional y global."
            description="+100 usuarios entrevistados y +150 apps analizadas a nivel nacional y mundial. Construcción de la base estratégica del rediseño."
            visual={<ResearchVisual />}
          />
          <ProcessHighlightCard
            number="03"
            label="Design System"
            title="Construcción atómica del nuevo DS."
            description="Puesta en marcha del Design System átomo a átomo, integrando ilustración, tipografía y patrones reutilizables en cada superficie del producto."
            visual={<DesignSystemVisual />}
          />
        </div>
      </section>

      {/* 03 Proceso (full width, sin su mediaAfter porque ya lo renderizamos arriba) */}
      <SectionWithExtras
        section={{ ...sections[2], mediaAfter: undefined }}
      />

      {/* 04 → 07 con extras normales */}
      {sections.slice(3).map((section) => (
        <SectionWithExtras key={section.number} section={section} />
      ))}

      <CaseNav prev={nav.prev} next={nav.next} />

      <Footer />
    </>
  );
}

/**
 * Renderiza una sección + su mediaAfter + su quoteAfter (si existen).
 * Encapsula el patrón "sección de prosa, después media, después quote".
 */
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
 * Versión compacta de CaseSection — sin la grid interna 3+9.
 * Se usa cuando hay 2 secciones lado a lado en un grid externo de 2 columnas.
 */
function CompactSection({ section }: { section: CaseSectionContent }) {
  return (
    <div>
      <div className="text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
        {section.number} · {section.label}
      </div>
      <h2 className="display-md mb-5 mt-3 text-ink">
        {renderTitle(section.title)}
      </h2>
      <div className="space-y-4 text-body text-ink-soft">{section.body}</div>
    </div>
  );
}

/** Renderiza title como string plano o con HighlightTitle según tipo. */
function renderTitle(title: string | HighlightTitleType): React.ReactNode {
  if (typeof title === 'string') return title;
  return <HighlightTitle {...title} />;
}

/* ─── Visuales decorativos del proceso (adaptables a light/dark) ─── */

/**
 * Visual 01 — Discovery.
 * Grid de mini-pantallas de la app (4×3) sugiriendo el "mapeo completo del producto".
 * Algunas tienen un dot rosa marcando dolor/oportunidad detectada.
 */
function DiscoveryVisual() {
  const screens = Array.from({ length: 12 });
  const painPoints = new Set([1, 4, 7, 10]); // pantallas con dot rosa

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--blue) 6%, transparent), color-mix(in oklab, var(--rose) 4%, transparent))',
      }}
      aria-hidden
    >
      <div className="grid h-full grid-cols-4 grid-rows-3 gap-2 p-4">
        {screens.map((_, i) => (
          <div
            key={i}
            className="relative rounded-[3px] border border-line"
            style={{ background: 'var(--bg)' }}
          >
            {/* status bar simulada */}
            <div
              className="absolute inset-x-1 top-1 h-[2px] rounded-full"
              style={{ background: 'var(--line)' }}
            />
            {/* content lines */}
            <div className="absolute inset-x-1.5 top-3 space-y-1">
              <div
                className="h-[2px] rounded-full"
                style={{ background: 'var(--line)' }}
              />
              <div
                className="h-[2px] w-2/3 rounded-full"
                style={{ background: 'var(--line)' }}
              />
            </div>
            {painPoints.has(i) && (
              <div
                className="absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full"
                style={{ background: 'var(--rose)' }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Visual 02 — Research.
 * Cifras grandes en serif: +100 usuarios / +150 apps.
 * Background con dots pattern (representa la muestra estudiada).
 */
function ResearchVisual() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--rose) 5%, transparent), color-mix(in oklab, var(--cyan) 5%, transparent))',
      }}
      aria-hidden
    >
      {/* Dots pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle, var(--line) 1px, transparent 1px)',
          backgroundSize: '14px 14px',
        }}
      />

      {/* Numbers */}
      <div className="relative flex flex-col items-center gap-1">
        <div className="flex items-baseline gap-2">
          <span className="bg-brand-gradient bg-clip-text font-serif text-[clamp(36px,5vw,52px)] leading-none text-transparent">
            +100
          </span>
          <span className="text-eyebrow uppercase tracking-eyebrow text-ink-soft">
            usuarios
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-serif text-[clamp(28px,4vw,40px)] leading-none text-ink">
            +150
          </span>
          <span className="text-eyebrow uppercase tracking-eyebrow text-ink-soft">
            apps
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * Visual 03 — Design System.
 * Grid de "átomos": círculo, cuadrado, triángulo, color swatches, líneas, tipografía.
 * Representa los building blocks del DS construido.
 */
function DesignSystemVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--cyan) 5%, transparent), color-mix(in oklab, var(--blue) 5%, transparent))',
      }}
      aria-hidden
    >
      <div className="grid h-full grid-cols-4 grid-rows-3 gap-2.5 p-4">
        {/* Círculo */}
        <div className="flex items-center justify-center">
          <div
            className="h-7 w-7 rounded-full border-2"
            style={{ borderColor: 'var(--blue)' }}
          />
        </div>
        {/* Cuadrado */}
        <div className="flex items-center justify-center">
          <div
            className="h-7 w-7 rounded-sm border-2"
            style={{ borderColor: 'var(--rose)' }}
          />
        </div>
        {/* Triángulo */}
        <div className="flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
            <path
              d="M14 4 L26 24 L2 24 Z"
              fill="none"
              stroke="var(--cyan)"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* Tipo: A serif */}
        <div className="flex items-center justify-center">
          <span
            className="font-serif text-[28px] leading-none"
            style={{ color: 'var(--ink)' }}
          >
            Aa
          </span>
        </div>
        {/* Swatch blue */}
        <div
          className="rounded-md"
          style={{ background: 'var(--blue)' }}
        />
        {/* Swatch rose */}
        <div
          className="rounded-md"
          style={{ background: 'var(--rose)' }}
        />
        {/* Swatch cyan */}
        <div
          className="rounded-md"
          style={{ background: 'var(--cyan)' }}
        />
        {/* Gradient swatch */}
        <div className="rounded-md bg-brand-gradient" />
        {/* Líneas / spacing */}
        <div className="col-span-2 flex flex-col justify-center gap-1.5 px-1">
          <div
            className="h-[2px] rounded-full"
            style={{ background: 'var(--ink)' }}
          />
          <div
            className="h-[2px] w-3/4 rounded-full"
            style={{ background: 'var(--ink-soft)' }}
          />
          <div
            className="h-[2px] w-1/2 rounded-full"
            style={{ background: 'var(--ink-mute)' }}
          />
        </div>
        {/* Pill/button */}
        <div className="col-span-2 flex items-center justify-center">
          <div
            className="rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-eyebrow"
            style={{ background: 'var(--ink)', color: 'var(--bg)' }}
          >
            Button
          </div>
        </div>
      </div>
    </div>
  );
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
      className="aspect-[21/9] w-full overflow-hidden rounded-lg border border-line bg-bg-block"
      role="img"
      aria-label="Hero visual — pendiente"
    >
      <div className="flex h-full items-center justify-center text-eyebrow uppercase tracking-eyebrow text-ink-mute">
        [ hero visual · App Homecenter ]
      </div>
    </div>
  );
}
