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
} from '@/components';
import { CASE_PANTALLAS_TIENDA } from '@/content/case-pantallas-tienda';
import type {
  CaseHeroContent,
  CaseSectionContent,
  HighlightTitle as HighlightTitleType,
} from '@/content/types';

/**
 * CASE — Pantallas digitales en tienda (antes "Kioscos Digitales").
 * Slug: /work/pantallas-tienda. Todo el copy vive en
 * /content/case-pantallas-tienda.tsx. Esta página solo compone layout.
 */

export default function PantallasTiendaCase() {
  const { hero, establishing, sections, nav } = CASE_PANTALLAS_TIENDA;

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

      {/* 4 FeatureCards de funcionalidades omnicanal (reemplazan al Proceso) */}
      <FeaturesGrid />

      {/* 03 Decisiones → 06 Aprendizaje */}
      {sections.slice(2).map((section) => (
        <SectionWithExtras key={section.number} section={section} />
      ))}

      {/* 4 espacios de imagen del cierre del case (placeholders) */}
      <FinalGalleryPlaceholders />

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
 * 4 cards de funcionalidades clave que diseñé para las pantallas y que
 * escalaron a omnicanal. Reemplazan a la antigua sección "Proceso".
 */
function FeaturesGrid() {
  return (
    <section className="border-t border-line py-12 md:py-16">
      <div className="container-portfolio">
        <div className="mb-10 text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
          Funcionalidades · escala omnicanal
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <ProcessHighlightCard
            number="01"
            label="Inspiración"
            title="Catálogo editorial de productos destacados."
            description="Nuevo espacio dentro de las pantallas tipo revista, donde se listan productos de tienda en imágenes editoriales y selecciones de expertos. Inspira la decisión antes de la búsqueda."
            visual={<InspirationVisual />}
          />
          <ProcessHighlightCard
            number="02"
            label="Cotizaciones omnicanal"
            title="La primera funcionalidad realmente omnicanal."
            description="Una cotización iniciada en tienda se puede recuperar en digital (y viceversa) para cerrar la compra desde cualquier canal. Resuelve un dolor histórico de los asesores y abre una nueva forma de comprar."
            visual={<QuotationsVisual />}
          />
          <ProcessHighlightCard
            number="03"
            label="Pago autoasistido"
            title="Checkout con datáfono explicado paso a paso."
            description="Ilustraciones de explicación dentro del checkout para guiar el pago autoasistido en datáfonos físicos. El cliente cierra la compra solo, sin bloquearse en el último paso."
            visual={<PaymentVisual />}
          />
          <ProcessHighlightCard
            number="04"
            label="Pantalla vertical"
            title="Rediseño e instalación de un nuevo formato."
            description="Reformulación completa de la UI bajo formato vertical y una nueva ubicación dentro de la tienda. Una nueva forma de comprar que aprovecha mejor el recorrido del cliente."
            visual={<VerticalScreenVisual />}
          />
        </div>
      </div>
    </section>
  );
}

/**
 * 4 espacios de imagen al final del case (pendientes de subir).
 * Showcase visual del producto en tienda y de las funcionalidades implementadas.
 */
function FinalGalleryPlaceholders() {
  const slots = [
    { alt: 'Pantalla en tienda · contexto físico real' },
    { alt: 'Detalle de UI · sección de inspiración' },
    { alt: 'Flujo de cotización omnicanal · pantalla + app' },
    { alt: 'Pantalla vertical · nuevo formato instalado en tienda' },
  ];

  return (
    <section className="container-portfolio border-t border-line py-16 md:py-20">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {slots.map((s, i) => (
          <div
            key={i}
            className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-dashed border-line bg-bg-block"
            role="img"
            aria-label={s.alt}
          >
            <div className="flex h-full items-center justify-center px-4 text-center text-eyebrow uppercase tracking-eyebrow text-ink-mute">
              [ {s.alt} ]
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
          className="col-span-2 row-span-2 rounded-md border border-line"
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
          {/* Check circle */}
          <div
            className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full"
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
          {/* Hero block */}
          <div
            className="mt-2 flex-1 rounded-md"
            style={{
              background:
                'linear-gradient(135deg, color-mix(in oklab, var(--blue) 30%, transparent), color-mix(in oklab, var(--rose) 30%, transparent))',
            }}
          />
          {/* CTA pill */}
          <div className="mt-2 flex justify-center">
            <div
              className="h-1.5 w-2/3 rounded-full"
              style={{ background: 'var(--ink)' }}
            />
          </div>
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
        [ hero visual · Pantallas digitales en tienda ]
      </div>
    </div>
  );
}
