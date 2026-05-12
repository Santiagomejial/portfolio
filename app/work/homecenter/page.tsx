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
  DownloadAppButtons,
  ProcessHighlightCard,
  BeforeAfterComparison,
  MetricResultCard,
  ClickableImage,
} from '@/components';
import { CASE_HOMECENTER } from '@/content/case-homecenter';
import type {
  CaseHeroContent,
  CaseSectionContent,
  HighlightTitle as HighlightTitleType,
} from '@/content/types';
import { useLang } from '@/lib/use-lang';
import type { Lang } from '@/lib/use-lang';

/* ─── Traducciones de UI / sub-componentes ─── */
const T = {
  highlights: {
    discovery: {
      label: { es: 'Discovery', en: 'Discovery' },
      title: {
        es: 'Voz del negocio + voz del cliente.',
        en: 'Voice of business + voice of the customer.',
      },
      description: {
        es: '3 meses recopilando requerimientos y dolores de las gerencias de Homecenter, sumados a entrevistas guerrilla con clientes reales usando la app. Visualización de todas las pantallas, componentes y flujos críticos en un solo Figma.',
        en: '3 months gathering requirements and pain points from Homecenter business units, combined with guerrilla interviews with real customers using the app. Visualization of all screens, components and critical flows in a single Figma file.',
      },
    },
    research: {
      label: { es: 'Research', en: 'Research' },
      title: {
        es: 'Investigación a escala nacional y global.',
        en: 'Research at national and global scale.',
      },
      description: {
        es: '+100 usuarios entrevistados y +150 apps analizadas a nivel nacional y mundial. Construcción de la base estratégica del rediseño.',
        en: '+100 users interviewed and +150 apps analyzed nationally and globally. Building the strategic foundation of the redesign.',
      },
    },
    designSystem: {
      label: { es: 'Design System', en: 'Design System' },
      title: {
        es: 'Construcción atómica del nuevo DS.',
        en: 'Atomic construction of the new DS.',
      },
      description: {
        es: 'Puesta en marcha del Design System átomo a átomo, integrando ilustración, tipografía y patrones reutilizables en cada superficie del producto.',
        en: 'Launch of the Design System atom by atom, integrating illustration, typography and reusable patterns across every product surface.',
      },
    },
  },
  beforeAfter: {
    beforeAlt: {
      es: 'App Homecenter — versión anterior',
      en: 'Homecenter App — previous version',
    },
    afterAlt: {
      es: 'App Homecenter — versión rediseñada',
      en: 'Homecenter App — redesigned version',
    },
    caption: {
      es: 'Antes / después · resultado del rediseño integral',
      en: 'Before / after · result of the full redesign',
    },
  },
  videoAria: {
    es: 'Recorrido completo de la App Homecenter',
    en: 'Full walkthrough of the Homecenter App',
  },
  closing: {
    alt: {
      es: 'Cierre del case App Homecenter — vista final del producto.',
      en: 'Closing image of the Homecenter App case — final product view.',
    },
    title: { es: 'App Homecenter · cierre', en: 'Homecenter App · closing' },
  },
  impact: {
    visits: {
      label: { es: 'Visitas', en: 'Visits' },
      description: {
        es: '50M+ visitas totales en el periodo.',
        en: '50M+ total visits in the period.',
      },
    },
    a2c: {
      label: { es: 'Add to Cart', en: 'Add to Cart' },
      description: {
        es: 'Más productos agregados al carrito en flujos de compra.',
        en: 'More products added to cart in purchase flows.',
      },
    },
    conversion: {
      label: { es: 'Conversión', en: 'Conversion' },
      description: {
        es: 'Con +25% de incremento en venta.',
        en: 'With +25% increase in sales.',
      },
    },
    rating: {
      label: { es: 'Rating en stores', en: 'Store rating' },
      description: {
        es: 'App Store · Play Store — sin caída tras el rediseño.',
        en: 'App Store · Play Store — no drop after the redesign.',
      },
    },
    disclaimer: {
      es: 'Comparación jul–dic 2024 vs 2025 · cifras aproximadas no oficiales.',
      en: 'Comparison Jul–Dec 2024 vs 2025 · approximate, unofficial figures.',
    },
  },
  process: {
    research: {
      label: { es: 'Research', en: 'Research' },
      desc: {
        es: 'Session replays, entrevistas y embudo analítico.',
        en: 'Session replays, interviews and analytical funnel.',
      },
    },
    mapping: {
      label: { es: 'Mapeo', en: 'Mapping' },
      desc: {
        es: 'Flujos críticos, síntesis y documentación.',
        en: 'Critical flows, synthesis and documentation.',
      },
    },
    wireframes: {
      label: { es: 'Wireframes', en: 'Wireframes' },
      desc: {
        es: 'Componentes base, arquitectura y validación.',
        en: 'Base components, architecture and validation.',
      },
    },
    hifi: {
      label: { es: 'High-Fi', en: 'High-Fi' },
      desc: {
        es: 'Producción, paridad iOS/Android y handoff.',
        en: 'Production, iOS/Android parity and handoff.',
      },
    },
  },
  research: {
    users: { es: 'usuarios', en: 'users' },
    apps: { es: 'apps', en: 'apps' },
  },
  hero: {
    placeholder: {
      es: '[ hero visual · App Homecenter ]',
      en: '[ hero visual · Homecenter App ]',
    },
    placeholderAlt: {
      es: 'Hero visual — pendiente',
      en: 'Hero visual — pending',
    },
  },
};

export default function HomecenterCase() {
  const { lang } = useLang();
  const content = CASE_HOMECENTER[lang];
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
            label={T.highlights.discovery.label[lang]}
            title={T.highlights.discovery.title[lang]}
            description={T.highlights.discovery.description[lang]}
            visual={<DiscoveryVisual />}
          />
          <ProcessHighlightCard
            number="02"
            label={T.highlights.research.label[lang]}
            title={T.highlights.research.title[lang]}
            description={T.highlights.research.description[lang]}
            visual={<ResearchVisual lang={lang} />}
          />
          <ProcessHighlightCard
            number="03"
            label={T.highlights.designSystem.label[lang]}
            title={T.highlights.designSystem.title[lang]}
            description={T.highlights.designSystem.description[lang]}
            visual={<DesignSystemVisual />}
          />
        </div>
      </section>

      <ProcessSectionWithIllustration section={sections[2]} lang={lang} />

      <SectionWithExtras section={sections[3]} />

      <BeforeAfterComparison
        dividerTop={false}
        imageBorder={false}
        before={{
          src: '/work/homecenter/before.png',
          alt: T.beforeAfter.beforeAlt[lang],
        }}
        after={{
          src: '/work/homecenter/after.png',
          alt: T.beforeAfter.afterAlt[lang],
        }}
        caption={T.beforeAfter.caption[lang]}
      />

      <SolutionSectionWithVideo section={sections[4]} lang={lang} />

      <SectionWithExtras section={sections[5]} />
      <ImpactResultsGrid lang={lang} />

      <CaseClosingImage lang={lang} />

      <CaseNav prev={nav.prev} next={nav.next} />

      <Footer />
    </>
  );
}

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

function renderTitle(title: string | HighlightTitleType): React.ReactNode {
  if (typeof title === 'string') return title;
  return <HighlightTitle {...title} />;
}

function ProcessSectionWithIllustration({
  section,
  lang,
}: {
  section: CaseSectionContent;
  lang: Lang;
}) {
  return (
    <section className="border-t border-line py-12 md:py-16">
      <div className="container-portfolio">
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

        <div className="mt-8 w-full md:mt-10">
          <ProcessIllustration lang={lang} />
        </div>
      </div>
    </section>
  );
}

function SolutionSectionWithVideo({
  section,
  lang,
}: {
  section: CaseSectionContent;
  lang: Lang;
}) {
  return (
    <>
      <section className="border-t border-line py-12 md:py-16">
        <div className="container-portfolio">
          <div className="grid items-start gap-10 md:grid-cols-[1fr_auto] md:gap-16">
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
                aria-label={T.videoAria[lang]}
              />
            </div>
          </div>
        </div>
      </section>

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

function CaseClosingImage({ lang }: { lang: Lang }) {
  return (
    <section className="container-portfolio pt-12 pb-8 md:pt-16 md:pb-12">
      <ClickableImage
        src="/work/homecenter/closing.jpg"
        alt={T.closing.alt[lang]}
        aspect="21/9"
        title={T.closing.title[lang]}
      />
    </section>
  );
}

function ImpactResultsGrid({ lang }: { lang: Lang }) {
  return (
    <section className="container-portfolio py-12 md:py-16">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
        <MetricResultCard
          value="+10%"
          label={T.impact.visits.label[lang]}
          description={T.impact.visits.description[lang]}
          visual={<VisitsVisual />}
        />
        <MetricResultCard
          value="+74%"
          label={T.impact.a2c.label[lang]}
          description={T.impact.a2c.description[lang]}
          visual={<AddToCartVisual />}
        />
        <MetricResultCard
          value="+25%"
          label={T.impact.conversion.label[lang]}
          description={T.impact.conversion.description[lang]}
          visual={<ConversionVisual />}
        />
        <MetricResultCard
          value="4.8 / 4.7"
          label={T.impact.rating.label[lang]}
          description={T.impact.rating.description[lang]}
          visual={<RatingVisual />}
        />
      </div>
      <p className="mt-6 text-center text-eyebrow uppercase tracking-eyebrow text-ink-mute md:text-left">
        <em>{T.impact.disclaimer[lang]}</em>
      </p>
    </section>
  );
}

/* ─── Visuales ─── */

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
            className="anim-bar-grow-loop w-3 rounded-t-md md:w-4"
            style={{
              height: `${h}%`,
              background:
                i === heights.length - 1
                  ? 'var(--blue)'
                  : 'color-mix(in oklab, var(--blue) 35%, transparent)',
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

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
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-ink">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
      <div
        className="anim-pulse-soft absolute right-[28%] top-[28%] flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold text-bg shadow-md"
        style={{ background: 'var(--rose)' }}
      >
        +74
      </div>
    </div>
  );
}

function ConversionVisual() {
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
        <circle cx="50" cy="50" r={radius} fill="none" stroke="var(--line)" strokeWidth="10" />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="var(--cyan)"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          className="anim-arc-fill-loop"
          style={{
            // @ts-expect-error -- CSS custom props
            '--arc-start': circumference,
            '--arc-end': dashOffset,
          }}
        />
      </svg>
    </div>
  );
}

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
          <span key={i} className="anim-stars-reveal inline-flex" style={{ animationDelay: `${i * 0.18}s` }}>
            <StarIcon filled={i < 4} half={i === 4} />
          </span>
        ))}
      </div>
    </div>
  );
}

function StarIcon({ filled, half }: { filled: boolean; half?: boolean }) {
  const path = 'M12 2 L14.5 8.5 L21.5 9 L16 13.5 L17.5 20.5 L12 17 L6.5 20.5 L8 13.5 L2.5 9 L9.5 8.5 Z';
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
    <svg width="22" height="22" viewBox="0 0 24 24" fill={filled ? 'var(--rose)' : 'none'} stroke={filled ? 'var(--rose)' : 'var(--line)'} strokeWidth="1.5" strokeLinejoin="round" aria-hidden>
      <path d={path} />
    </svg>
  );
}

function ProcessIllustration({ lang }: { lang: Lang }) {
  const steps = [
    { label: T.process.research.label[lang], desc: T.process.research.desc[lang] },
    { label: T.process.mapping.label[lang], desc: T.process.mapping.desc[lang] },
    { label: T.process.wireframes.label[lang], desc: T.process.wireframes.desc[lang] },
    { label: T.process.hifi.label[lang], desc: T.process.hifi.desc[lang] },
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
          <div key={step.label} className="flex flex-col gap-2 p-4 md:gap-2.5 md:p-5">
            <div className="flex items-center gap-2.5">
              <span className="anim-pulse-soft h-2.5 w-2.5 rounded-full bg-brand-gradient" style={{ animationDelay: `${i * 0.5}s` }} />
              <span className="text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">{`0${i + 1}`}</span>
            </div>
            <div className="font-sans text-[18px] font-semibold leading-tight text-ink">{step.label}</div>
            <div className="text-body-sm leading-snug text-ink-soft">{step.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DiscoveryVisual() {
  const screens = Array.from({ length: 12 });
  const painPoints = new Set([1, 4, 7, 10]);
  const organicAnims = ['anim-organic-1', 'anim-organic-2', 'anim-organic-3', 'anim-organic-4'];

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
          <div key={i} className="relative rounded-[3px] border border-line" style={{ background: 'var(--bg)' }}>
            <div className="absolute inset-x-1 top-1 h-[2px] rounded-full" style={{ background: 'var(--line)' }} />
            <div className="absolute inset-x-1.5 top-3 space-y-1">
              <div className="h-[2px] rounded-full" style={{ background: 'var(--line)' }} />
              <div className="h-[2px] w-2/3 rounded-full" style={{ background: 'var(--line)' }} />
            </div>
            {painPoints.has(i) && (
              <div
                className={`${organicAnims[Array.from(painPoints).indexOf(i) % 4]} absolute right-0.5 top-0.5 h-2 w-2 rounded-full`}
                style={{ background: 'var(--rose)', boxShadow: '0 0 0 2px color-mix(in oklab, var(--rose) 30%, transparent)' }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ResearchVisual({ lang }: { lang: Lang }) {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--rose) 5%, transparent), color-mix(in oklab, var(--cyan) 5%, transparent))',
      }}
      aria-hidden
    >
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle, var(--line) 1px, transparent 1px)', backgroundSize: '14px 14px' }} />
      <div className="relative flex flex-col items-center gap-1">
        <div className="flex items-baseline gap-2">
          <span className="anim-text-fill bg-brand-gradient bg-clip-text font-serif text-[clamp(36px,5vw,52px)] leading-none text-transparent" style={{ animationDelay: '0s' }}>
            +100
          </span>
          <span className="text-eyebrow uppercase tracking-eyebrow text-ink-soft">{T.research.users[lang]}</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="anim-text-fill font-serif text-[clamp(28px,4vw,40px)] leading-none text-ink" style={{ animationDelay: '0.5s' }}>
            +150
          </span>
          <span className="text-eyebrow uppercase tracking-eyebrow text-ink-soft">{T.research.apps[lang]}</span>
        </div>
      </div>
    </div>
  );
}

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
        <div className="flex items-center justify-center">
          <div className="anim-pulse-soft h-7 w-7 rounded-full border-2" style={{ borderColor: 'var(--blue)' }} />
        </div>
        <div className="flex items-center justify-center">
          <div className="anim-spin-piece h-7 w-7 rounded-sm border-2" style={{ borderColor: 'var(--rose)' }} />
        </div>
        <div className="flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 28 28" className="anim-spin-piece" style={{ animationDelay: '0.7s' }} aria-hidden>
            <path d="M14 4 L26 24 L2 24 Z" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex items-center justify-center">
          <span className="anim-float-y font-serif text-[28px] leading-none" style={{ color: 'var(--ink)' }}>Aa</span>
        </div>
        <div className="rounded-md" style={{ background: 'var(--blue)' }} />
        <div className="rounded-md" style={{ background: 'var(--rose)' }} />
        <div className="rounded-md" style={{ background: 'var(--cyan)' }} />
        <div className="anim-pulse-soft rounded-md bg-brand-gradient" style={{ animationDuration: '3.5s' }} />
        <div className="col-span-2 flex flex-col justify-center gap-1.5 px-1">
          <div className="h-[2px] rounded-full" style={{ background: 'var(--ink)' }} />
          <div className="h-[2px] w-3/4 rounded-full" style={{ background: 'var(--ink-soft)' }} />
          <div className="h-[2px] w-1/2 rounded-full" style={{ background: 'var(--ink-mute)' }} />
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <div className="rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-eyebrow" style={{ background: 'var(--ink)', color: 'var(--bg)' }}>
            Button
          </div>
        </div>
      </div>
    </div>
  );
}

function renderHeroImage(hero: CaseHeroContent, lang: Lang): React.ReactNode {
  if (hero.heroImage) {
    return (
      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg">
        <Image src={hero.heroImage.src} alt={hero.heroImage.alt} fill className="object-cover" sizes="100vw" priority />
      </div>
    );
  }
  return (
    <div className="aspect-[21/9] w-full overflow-hidden rounded-lg border border-line bg-bg-block" role="img" aria-label={T.hero.placeholderAlt[lang]}>
      <div className="flex h-full items-center justify-center text-eyebrow uppercase tracking-eyebrow text-ink-mute">
        {T.hero.placeholder[lang]}
      </div>
    </div>
  );
}
