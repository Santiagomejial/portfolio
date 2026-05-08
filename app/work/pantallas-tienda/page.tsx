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
  ProcessHighlightCard,
  ClickableImageGrid,
} from '@/components';
import { CASE_PANTALLAS_TIENDA } from '@/content/case-pantallas-tienda';
import type {
  CaseHeroContent,
  CaseSectionContent,
  HighlightTitle as HighlightTitleType,
} from '@/content/types';
import { useLang } from '@/lib/use-lang';
import type { Lang } from '@/lib/use-lang';

const T = {
  features: {
    sectionLabel: { es: 'Funcionalidades · escala omnicanal', en: 'Features · omnichannel scale' },
    inspiration: {
      label: { es: 'Inspiración', en: 'Inspiration' },
      title: { es: 'Catálogo editorial de productos destacados.', en: 'Editorial catalog of featured products.' },
      description: { es: 'Nuevo espacio tipo revista con productos curados y selecciones de expertos.', en: 'New magazine-style space with curated products and expert selections.' },
    },
    quotes: {
      label: { es: 'Cotizaciones omnicanal', en: 'Omnichannel quotes' },
      title: { es: 'La primera funcionalidad realmente omnicanal.', en: 'The first truly omnichannel feature.' },
      description: { es: 'Cotizaciones que se inician en tienda y se cierran en digital (o viceversa).', en: 'Quotes that start in-store and finish digitally (or vice versa).' },
    },
    payment: {
      label: { es: 'Pago autoasistido', en: 'Self-served payment' },
      title: { es: 'Checkout con datáfono explicado paso a paso.', en: 'Checkout with payment terminal, step by step.' },
      description: { es: 'Ilustraciones guían el pago autoasistido en datáfonos físicos.', en: 'Illustrations guide self-served payment on physical terminals.' },
    },
    vertical: {
      label: { es: 'Pantalla vertical', en: 'Vertical screen' },
      title: { es: 'Rediseño e instalación de un nuevo formato.', en: 'Redesign and installation of a new format.' },
      description: { es: 'Reformulación de UI bajo formato vertical y nueva ubicación en tienda.', en: 'UI reformulation in vertical format and new in-store location.' },
    },
  },
  galleryTitle: { es: 'Pantallas digitales en tienda · galería', en: 'In-store digital screens · gallery' },
  galleryAlts: {
    a: { es: 'Pantalla digital en contexto físico real de tienda Homecenter.', en: 'Digital screen in real physical context of a Homecenter store.' },
    b: { es: 'Detalle de UI — sección de inspiración con catálogo editorial.', en: 'UI detail — inspiration section with editorial catalog.' },
    c: { es: 'Flujo de cotización omnicanal — pantalla + app en sincronía.', en: 'Omnichannel quote flow — screen + app in sync.' },
    d: { es: 'Pantalla vertical — nuevo formato instalado en tienda.', en: 'Vertical screen — new format installed in-store.' },
  },
  summary: {
    label: { es: 'Resumen · intervención de diseño', en: 'Summary · design intervention' },
    publicUx: {
      label: { es: 'UX semi-pública', en: 'Semi-public UX' },
      caption: { es: 'Touch targets grandes, jerarquía marcada, flujos cortos.', en: 'Large touch targets, strong hierarchy, short flows.' },
    },
    multiBrand: {
      label: { es: 'Sistema multi-marca', en: 'Multi-brand system' },
      caption: { es: 'Una UI que se adapta a Constructor, Carcenter y Proyectos.', en: 'A UI that adapts to Constructor, Carcenter and Projects.' },
    },
    omnichannel: {
      label: { es: 'Escala omnicanal', en: 'Omnichannel scale' },
      caption: { es: 'Pantallas como nodo conectado con app, web y tienda.', en: 'Screens as a node connected to app, web and store.' },
    },
  },
  heroPlaceholder: { es: '[ hero visual · Pantallas digitales en tienda ]', en: '[ hero visual · In-store digital screens ]' },
  heroPlaceholderAlt: { es: 'Hero visual — pendiente', en: 'Hero visual — pending' },
};

export default function PantallasTiendaCase() {
  const { lang } = useLang();
  const content = CASE_PANTALLAS_TIENDA[lang];
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

/**
 * Renderiza una sección + su mediaAfter + su quoteAfter (si existen).
 * Patrón estándar de case section + extras.
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
 * 4 cards compactas en fila — funcionalidades que diseñé y escalaron a
 * omnicanal. Versión más pequeña que ProcessHighlightCard del Homecenter.
 */
function FeaturesGrid({ lang }: { lang: Lang }) {
  const features = [
    {
      number: '01',
      label: T.features.inspiration.label[lang],
      title: T.features.inspiration.title[lang],
      description: T.features.inspiration.description[lang],
      visual: <InspirationVisual />,
    },
    {
      number: '02',
      label: T.features.quotes.label[lang],
      title: T.features.quotes.title[lang],
      description: T.features.quotes.description[lang],
      visual: <QuotationsVisual />,
    },
    {
      number: '03',
      label: T.features.payment.label[lang],
      title: T.features.payment.title[lang],
      description: T.features.payment.description[lang],
      visual: <PaymentVisual />,
    },
    {
      number: '04',
      label: T.features.vertical.label[lang],
      title: T.features.vertical.title[lang],
      description: T.features.vertical.description[lang],
      visual: <VerticalScreenVisual />,
    },
  ];

  return (
    <section className="border-t border-line py-12 md:py-16">
      <div className="container-portfolio">
        <div className="mb-8 text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
          {T.features.sectionLabel[lang]}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {features.map((f) => (
            <article
              key={f.number}
              className="group flex flex-col overflow-hidden rounded-xl border border-line bg-bg-elev transition-base hover:border-blue/40 hover:shadow-md"
            >
              {/* Visual compacto */}
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-line">
                {f.visual}
              </div>
              {/* Body compacto */}
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
 * 03 Decisiones + 04 Solución en grid 2 columnas (CompactSection — sin
 * label sticky, todo apilado en cada columna).
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
 * Galería final con 4 imágenes del despliegue en tienda.
 * Grid 2x2 sin border, todas clickeables para abrir en CarouselModal.
 */
function FinalGallery({ lang }: { lang: Lang }) {
  const items = [
    { src: '/work/pantallas-tienda/gallery-01.jpg', alt: T.galleryAlts.a[lang] },
    { src: '/work/pantallas-tienda/gallery-02.jpg', alt: T.galleryAlts.b[lang] },
    { src: '/work/pantallas-tienda/gallery-03.jpg', alt: T.galleryAlts.c[lang] },
    { src: '/work/pantallas-tienda/gallery-04.jpg', alt: T.galleryAlts.d[lang] },
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
 * 3 ilustraciones pequeñas de cierre — resumen de la intervención de diseño.
 * Cards muy compactas, en fila de 3, con visual + label + frase corta.
 */
function DesignSummaryStrip({ lang }: { lang: Lang }) {
  const items = [
    {
      label: T.summary.publicUx.label[lang],
      caption: T.summary.publicUx.caption[lang],
      visual: <PublicUxVisual />,
    },
    {
      label: T.summary.multiBrand.label[lang],
      caption: T.summary.multiBrand.caption[lang],
      visual: <MultiBrandVisual />,
    },
    {
      label: T.summary.omnichannel.label[lang],
      caption: T.summary.omnichannel.caption[lang],
      visual: <OmnichannelVisual />,
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

/* ─── Visuales decorativos de las 4 funcionalidades (adaptables a light/dark) ─── */

/** Visual 01 — Inspiración: grid editorial de productos destacados estilo revista. */
function InspirationVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--rose) 6%, transparent), color-mix(in oklab, var(--blue) 4%, transparent))',
      }}
      aria-hidden
    >
      <div className="grid h-full grid-cols-3 grid-rows-2 gap-1.5 p-5 md:gap-2 md:p-6">
        {/* Item destacado grande (col-span-2 row-span-2) */}
        <div
          className="anim-float-y-strong col-span-2 row-span-2 rounded-md border border-line"
          style={{ background: 'var(--bg)' }}
        >
          <div className="flex h-full flex-col justify-end p-2">
            <div
              className="h-1 w-12 rounded-full"
              style={{ background: 'var(--rose)' }}
            />
            <div
              className="mt-1 h-1 w-8 rounded-full"
              style={{ background: 'var(--line)' }}
            />
          </div>
        </div>
        {/* Items secundarios pequeños */}
        <div
          className="rounded-md border border-line"
          style={{ background: 'var(--bg)' }}
        />
        <div
          className="rounded-md border border-line"
          style={{ background: 'var(--bg)' }}
        />
      </div>
    </div>
  );
}

/** Visual 02 — Cotizaciones omnicanal: 2 dispositivos conectados con flecha. */
function QuotationsVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--blue) 6%, transparent), color-mix(in oklab, var(--cyan) 5%, transparent))',
      }}
      aria-hidden
    >
      <div className="flex h-full items-center justify-center gap-3 p-6 md:gap-4">
        {/* Pantalla (rectángulo horizontal) */}
        <div
          className="flex h-16 w-24 flex-col items-center justify-center rounded-md border border-line md:h-20 md:w-28"
          style={{ background: 'var(--bg)' }}
        >
          <div
            className="h-0.5 w-12 rounded-full"
            style={{ background: 'var(--line)' }}
          />
          <div
            className="mt-1 h-0.5 w-8 rounded-full"
            style={{ background: 'var(--line)' }}
          />
        </div>
        {/* Flecha conectora */}
        <svg
          width="32"
          height="20"
          viewBox="0 0 32 20"
          fill="none"
          className="anim-arrow-slide-strong"
          aria-hidden
        >
          <path
            d="M2 10 H26 M22 4 L28 10 L22 16"
            stroke="url(#qGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="qGrad" x1="0" y1="0" x2="32" y2="0">
              <stop offset="0%" stopColor="var(--blue)" />
              <stop offset="100%" stopColor="var(--rose)" />
            </linearGradient>
          </defs>
        </svg>
        {/* Móvil (rectángulo vertical) */}
        <div
          className="flex h-16 w-9 flex-col items-center justify-center rounded-md border border-line md:h-20 md:w-11"
          style={{ background: 'var(--bg)' }}
        >
          <div
            className="h-0.5 w-5 rounded-full"
            style={{ background: 'var(--line)' }}
          />
          <div
            className="mt-1 h-0.5 w-4 rounded-full"
            style={{ background: 'var(--line)' }}
          />
        </div>
      </div>
    </div>
  );
}

/** Visual 03 — Pago autoasistido: tarjeta + datáfono con check. */
function PaymentVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--cyan) 6%, transparent), color-mix(in oklab, var(--rose) 4%, transparent))',
      }}
      aria-hidden
    >
      <div className="flex h-full items-center justify-center gap-3 p-6 md:gap-4">
        {/* Tarjeta */}
        <div
          className="relative h-14 w-20 -rotate-6 rounded-md md:h-16 md:w-24"
          style={{
            background:
              'linear-gradient(135deg, var(--blue), var(--rose))',
          }}
        >
          <div
            className="absolute left-2 top-2 h-2 w-3 rounded-sm"
            style={{ background: 'rgba(255,255,255,0.6)' }}
          />
        </div>
        {/* Datáfono */}
        <div
          className="relative flex h-20 w-12 flex-col items-center justify-center rounded-md border border-line md:h-24 md:w-14"
          style={{ background: 'var(--bg)' }}
        >
          <div
            className="h-1 w-6 rounded-full"
            style={{ background: 'var(--line)' }}
          />
          <div className="mt-1.5 grid grid-cols-3 gap-0.5">
            {Array.from({ length: 9 }).map((_, i) => (
              <span
                key={i}
                className="h-1 w-1 rounded-full"
                style={{ background: 'var(--ink-mute)' }}
              />
            ))}
          </div>
          {/* Check circle — pulsa fuerte */}
          <div
            className="anim-pulse-strong absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full"
            style={{ background: 'var(--cyan)' }}
          >
            <svg
              width="10"
              height="10"
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
    </div>
  );
}

/** Visual 04 — Pantalla vertical: pantalla rotada en formato vertical. */
function VerticalScreenVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--blue) 5%, transparent), color-mix(in oklab, var(--rose) 5%, transparent))',
      }}
      aria-hidden
    >
      <div className="flex h-full items-center justify-center p-6 md:p-7">
        {/* Pantalla vertical (formato 9:16) */}
        <div
          className="relative flex h-full max-h-[120px] w-auto flex-col rounded-lg border border-line p-2"
          style={{
            background: 'var(--bg)',
            aspectRatio: '9 / 16',
          }}
        >
          {/* Header */}
          <div
            className="h-1.5 w-full rounded-full"
            style={{ background: 'var(--ink)' }}
          />
          {/* Content lines */}
          <div className="mt-2 space-y-1">
            <div
              className="h-1 w-full rounded-full"
              style={{ background: 'var(--line)' }}
            />
            <div
              className="h-1 w-3/4 rounded-full"
              style={{ background: 'var(--line)' }}
            />
            <div
              className="h-1 w-2/3 rounded-full"
              style={{ background: 'var(--line)' }}
            />
          </div>
          {/* Hero block — float sutil */}
          <div
            className="anim-float-y mt-2 flex-1 rounded-md"
            style={{
              background:
                'linear-gradient(135deg, color-mix(in oklab, var(--blue) 30%, transparent), color-mix(in oklab, var(--rose) 30%, transparent))',
            }}
          />
          {/* CTA pill — pulsa fuerte */}
          <div className="mt-2 flex justify-center">
            <div
              className="anim-pulse-strong h-1.5 w-2/3 rounded-full"
              style={{ background: 'var(--ink)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Visuales del resumen de intervención de diseño ─── */

/** UX semi-pública: dedo grande sobre touch target enorme. */
function PublicUxVisual() {
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
        {/* Touch target grande */}
        <div
          className="relative flex h-16 w-16 items-center justify-center rounded-2xl"
          style={{
            background:
              'linear-gradient(135deg, var(--blue), var(--cyan))',
          }}
        >
          {/* Ondas de tap — más expansivas */}
          <div
            className="anim-pulse-strong absolute inset-0 rounded-2xl border-2"
            style={{
              borderColor: 'color-mix(in oklab, var(--blue) 40%, transparent)',
              animationDelay: '0s',
            }}
          />
          <div
            className="anim-pulse-strong absolute -inset-2 rounded-2xl border-2"
            style={{
              borderColor: 'color-mix(in oklab, var(--blue) 20%, transparent)',
              animationDelay: '0.4s',
            }}
          />
          <div
            className="anim-pulse-strong absolute -inset-4 rounded-2xl border-2"
            style={{
              borderColor: 'color-mix(in oklab, var(--blue) 10%, transparent)',
              animationDelay: '0.8s',
            }}
          />
          {/* Dedo (círculo blanco) */}
          <span className="h-5 w-5 rounded-full bg-bg" />
        </div>
      </div>
    </div>
  );
}

/** Sistema multi-marca: 3 cuadrados de colores conectados a un nodo central. */
function MultiBrandVisual() {
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
        <div className="flex items-center gap-2.5">
          <div
            className="anim-float-y-strong h-8 w-8 rounded-md"
            style={{ background: 'var(--blue)', animationDelay: '0s' }}
          />
          <div
            className="anim-pulse-strong h-10 w-10 rounded-lg bg-brand-gradient"
            style={{ animationDelay: '0.2s' }}
            aria-hidden
          />
          <div
            className="anim-float-y-strong h-8 w-8 rounded-md"
            style={{ background: 'var(--cyan)', animationDelay: '0.4s' }}
          />
          <div
            className="anim-float-y-strong h-8 w-8 rounded-md"
            style={{ background: 'var(--rose)', animationDelay: '0.8s' }}
          />
        </div>
      </div>
    </div>
  );
}

/** Escala omnicanal: 3 dispositivos (pantalla, móvil, web) con líneas conectoras. */
function OmnichannelVisual() {
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
        {/* Pantalla horizontal */}
        <div
          className="anim-float-y-strong h-9 w-12 rounded-md border border-line"
          style={{ background: 'var(--bg)', animationDelay: '0s' }}
        />
        {/* Conector */}
        <span
          className="anim-dash-flow h-px w-3"
          style={{ background: 'var(--ink-mute)' }}
        />
        {/* Móvil vertical (más alto) */}
        <div
          className="anim-float-y-strong h-12 w-6 rounded-md border border-line"
          style={{ background: 'var(--bg)', animationDelay: '0.4s' }}
        />
        {/* Conector */}
        <span
          className="anim-dash-flow h-px w-3"
          style={{ background: 'var(--ink-mute)' }}
        />
        {/* Laptop/web */}
        <div
          className="anim-float-y-strong h-7 w-12 rounded-md border border-line"
          style={{ background: 'var(--bg)', animationDelay: '0.8s' }}
        />
      </div>
    </div>
  );
}

/** Renderiza title como string plano o con HighlightTitle según tipo. */
function renderTitle(title: string | HighlightTitleType): React.ReactNode {
  if (typeof title === 'string') return title;
  return <HighlightTitle {...title} />;
}

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
