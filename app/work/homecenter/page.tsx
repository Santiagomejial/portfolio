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
  BeforeAfterComparison,
  MetricResultCard,
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

      {/* 03 Proceso — texto e ilustración lado a lado dentro del col-span-9 */}
      <ProcessSectionWithIllustration section={sections[2]} />

      {/* 04 Decisiones (sin mediaAfter — abajo va el comparativo Antes/Después) */}
      <SectionWithExtras section={sections[3]} />

      {/* Comparativo Antes / Después de la app — sin separador ni outlines
          para que las imágenes se integren con el fondo del case */}
      <BeforeAfterComparison
        dividerTop={false}
        imageBorder={false}
        before={{
          src: '/work/homecenter/before.png',
          alt: 'App Homecenter — versión anterior',
        }}
        after={{
          src: '/work/homecenter/after.png',
          alt: 'App Homecenter — versión rediseñada',
        }}
        caption="Antes / después · resultado del rediseño integral"
      />

      {/* 05 Solución — texto + video del recorrido lado a lado */}
      <SolutionSectionWithVideo section={sections[4]} />

      {/* 06 Impacto · como PO + 4 cards de resultados + disclaimer */}
      <SectionWithExtras section={sections[5]} />
      <ImpactResultsGrid />

      {/* Imagen grande de cierre del case (reemplaza la antigua sec 07) */}
      <CaseClosingImage />

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

/**
 * Sección Proceso con ilustración debajo, full width del container.
 * Mantiene el patrón clásico (label sticky + texto col-span-9) y agrega
 * un bloque visual debajo que ocupa todo el ancho desde la columna del label
 * hasta el margen derecho del container.
 */
function ProcessSectionWithIllustration({
  section,
}: {
  section: CaseSectionContent;
}) {
  return (
    <section className="border-t border-line py-12 md:py-16">
      <div className="container-portfolio">
        {/* Texto del proceso (estructura clásica: label sticky + body) */}
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="sticky top-28">
              <div className="text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
                {section.number} · {section.label}
              </div>
            </div>
          </div>
          <div className="md:col-span-9">
            <h2 className="display-md mb-6 text-ink">
              {renderTitle(section.title)}
            </h2>
            <div className="space-y-6 text-body-lg text-ink-soft">
              {section.body}
            </div>
          </div>
        </div>

        {/* Ilustración debajo, full width del container */}
        <div className="mt-8 w-full md:mt-10">
          <ProcessIllustration />
        </div>
      </div>
    </section>
  );
}

/**
 * Sección Solución con video del recorrido completo de la app al lado.
 * Layout split: texto a la izquierda, video vertical (formato mobile) a la derecha.
 * Mobile se apila. Después del bloque, se renderiza el quoteAfter como transición.
 */
function SolutionSectionWithVideo({
  section,
}: {
  section: CaseSectionContent;
}) {
  return (
    <>
      <section className="border-t border-line py-12 md:py-16">
        <div className="container-portfolio">
          <div className="grid items-start gap-10 md:grid-cols-[1fr_auto] md:gap-16">
            {/* Columna izquierda: eyebrow + título + texto, todo alineado izq */}
            <div>
              <div className="mb-4 text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
                {section.number} · {section.label}
              </div>
              <h2 className="display-md mb-6 text-ink">
                {renderTitle(section.title)}
              </h2>
              <div className="space-y-6 text-body-lg text-ink-soft">
                {section.body}
              </div>
            </div>

            {/* Columna derecha: video del recorrido */}
            <div className="flex justify-center md:justify-end">
              <video
                src="/work/homecenter/recorrido-web.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full max-w-[280px] rounded-2xl shadow-lg md:max-w-[320px]"
                style={{ aspectRatio: '1080 / 2340' }}
                aria-label="Recorrido completo de la App Homecenter"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote de transición al capítulo PO (quoteAfter de la sección) */}
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
 * Imagen grande de cierre del case (reemplaza la antigua sección 07).
 * Mismo aspect ratio del hero (21:9) y sin border para que se integre con
 * el fondo, igual que el hero visual y el comparativo Antes/Después.
 *
 * Cuando exista la imagen real, conectarla en el src del <Image> aquí.
 */
function CaseClosingImage() {
  // Cambiar a true cuando se conecte la imagen real
  const HAS_IMAGE = false;

  return (
    <section className="container-portfolio pt-12 pb-8 md:pt-16 md:pb-12">
      {HAS_IMAGE ? (
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg">
          <Image
            src="/work/homecenter/closing.jpg"
            alt="Cierre del case App Homecenter — vista final del producto."
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ) : (
        <div
          className="aspect-[21/9] w-full overflow-hidden rounded-lg border border-dashed border-line bg-bg-block"
          role="img"
          aria-label="Imagen de cierre del case — pendiente"
        >
          <div className="flex h-full items-center justify-center text-eyebrow uppercase tracking-eyebrow text-ink-mute">
            [ imagen de cierre · App Homecenter ]
          </div>
        </div>
      )}
    </section>
  );
}

/**
 * Grid de 4 cards con los resultados clave post-release.
 * Se renderiza debajo del texto de la sección 06 · Impacto.
 * Cifras aproximadas comparando jul-dic 2024 vs 2025, no oficiales.
 */
function ImpactResultsGrid() {
  return (
    <section className="container-portfolio py-12 md:py-16">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
        <MetricResultCard
          value="+10%"
          label="Visitas"
          description="50M+ visitas totales en el periodo."
          visual={<VisitsVisual />}
        />
        <MetricResultCard
          value="+74%"
          label="Add to Cart"
          description="Más productos agregados al carrito en flujos de compra."
          visual={<AddToCartVisual />}
        />
        <MetricResultCard
          value="+25%"
          label="Conversión"
          description="Con +25% de incremento en venta."
          visual={<ConversionVisual />}
        />
        <MetricResultCard
          value="4.8 / 4.7"
          label="Rating en stores"
          description="App Store · Play Store — sin caída tras el rediseño."
          visual={<RatingVisual />}
        />
      </div>
      <p className="mt-6 text-center text-eyebrow uppercase tracking-eyebrow text-ink-mute md:text-left">
        <em>
          Comparación jul–dic 2024 vs 2025 · cifras aproximadas no oficiales.
        </em>
      </p>
    </section>
  );
}

/* ─── Visuales de las 4 cards de resultado (adaptables a light/dark) ─── */

/** Visual visitas — barras ascendentes sugiriendo crecimiento. */
function VisitsVisual() {
  const heights = [30, 45, 55, 70, 85];
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--blue) 6%, transparent), color-mix(in oklab, var(--cyan) 5%, transparent))',
      }}
      aria-hidden
    >
      <div className="flex h-full items-end justify-center gap-2 px-6 py-5 md:gap-3 md:px-8 md:py-6">
        {heights.map((h, i) => (
          <div
            key={i}
            className="w-3 rounded-t-md md:w-4"
            style={{
              height: `${h}%`,
              background:
                i === heights.length - 1
                  ? 'var(--blue)'
                  : 'color-mix(in oklab, var(--blue) 35%, transparent)',
            }}
          />
        ))}
      </div>
    </div>
  );
}

/** Visual add to cart — carrito SVG con badge de check. */
function AddToCartVisual() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--rose) 6%, transparent), color-mix(in oklab, var(--blue) 4%, transparent))',
      }}
      aria-hidden
    >
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-ink"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
      {/* Badge "+74" en gradient brand sobre el carrito */}
      <div
        className="absolute right-[28%] top-[28%] flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold text-bg shadow-md"
        style={{ background: 'var(--rose)' }}
      >
        +74
      </div>
    </div>
  );
}

/** Visual conversión — donut chart sugiriendo proporción. */
function ConversionVisual() {
  // Donut a 25% del círculo (representa el incremento)
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - 0.25);

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--cyan) 6%, transparent), color-mix(in oklab, var(--rose) 4%, transparent))',
      }}
      aria-hidden
    >
      <svg width="100" height="100" viewBox="0 0 100 100">
        {/* Círculo base */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="var(--line)"
          strokeWidth="10"
        />
        {/* Arco del 25% */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="var(--cyan)"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />
      </svg>
    </div>
  );
}

/** Visual rating — 5 estrellas con la última semi-llena (4.8/5). */
function RatingVisual() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--rose) 5%, transparent), color-mix(in oklab, var(--cyan) 5%, transparent))',
      }}
      aria-hidden
    >
      <div className="flex items-center gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <StarIcon key={i} filled={i < 4} half={i === 4} />
        ))}
      </div>
    </div>
  );
}

function StarIcon({ filled, half }: { filled: boolean; half?: boolean }) {
  const path =
    'M12 2 L14.5 8.5 L21.5 9 L16 13.5 L17.5 20.5 L12 17 L6.5 20.5 L8 13.5 L2.5 9 L9.5 8.5 Z';
  if (half) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
        <defs>
          <linearGradient id="halfStar">
            <stop offset="60%" stopColor="var(--rose)" />
            <stop offset="60%" stopColor="var(--line)" />
          </linearGradient>
        </defs>
        <path d={path} fill="url(#halfStar)" />
      </svg>
    );
  }
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill={filled ? 'var(--rose)' : 'none'}
      stroke={filled ? 'var(--rose)' : 'var(--line)'}
      strokeWidth="1.5"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={path} />
    </svg>
  );
}

/* ─── Visuales decorativos del proceso (adaptables a light/dark) ─── */

/**
 * Ilustración del proceso de diseño — stepper horizontal de 4 etapas.
 * Mobile: stack vertical (1 columna). Desktop: 4 columnas con divisores.
 * Cada etapa: dot gradient + número + label + desc corta.
 */
function ProcessIllustration() {
  const steps = [
    {
      label: 'Research',
      desc: 'Session replays, entrevistas y embudo analítico.',
    },
    {
      label: 'Mapeo',
      desc: 'Flujos críticos, síntesis y documentación.',
    },
    {
      label: 'Wireframes',
      desc: 'Componentes base, arquitectura y validación.',
    },
    {
      label: 'High-Fi',
      desc: 'Producción, paridad iOS/Android y handoff.',
    },
  ];

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border border-line"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--blue) 6%, transparent), color-mix(in oklab, var(--cyan) 5%, transparent))',
      }}
      aria-hidden
    >
      <div className="grid grid-cols-1 md:grid-cols-4 md:divide-x md:divide-line">
        {steps.map((step, i) => (
          <div
            key={step.label}
            className="flex flex-col gap-2 p-4 md:gap-2.5 md:p-5"
          >
            {/* Dot + número de etapa */}
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-gradient" />
              <span className="text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
                {`0${i + 1}`}
              </span>
            </div>
            {/* Label */}
            <div className="font-serif text-[18px] leading-tight text-ink">
              {step.label}
            </div>
            {/* Desc */}
            <div className="text-body-sm leading-snug text-ink-soft">
              {step.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
