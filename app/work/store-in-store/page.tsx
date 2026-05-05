import Image from 'next/image';
import {
  PullQuote,
  CaseHero,
  CaseSection,
  CaseMedia,
  CaseNav,
  Footer,
  HighlightTitle,
} from '@/components';
import { CASE_STORE_IN_STORE } from '@/content/case-store-in-store';
import type {
  CaseHeroContent,
  CaseSectionContent,
  HighlightTitle as HighlightTitleType,
} from '@/content/types';

/**
 * CASE — Store in Store, Constructor, Petcenter, Carcenter y al por mayor.
 * Slug: /work/store-in-store. Todo el copy vive en
 * /content/case-store-in-store.tsx. Esta página solo compone layout.
 *
 * Estructura espejo de Pantallas digitales en tienda:
 * Hero · 01+02 normales · 4 FeatureCards · Decisiones+Solución 2 cols ·
 * 4 imágenes galería · Impacto · 3 ilustraciones de cierre · CaseNav.
 */

export default function StoreInStoreCase() {
  const { hero, establishing, sections, nav } = CASE_STORE_IN_STORE;

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

      {/* 4 FeatureCards en fila — funcionalidades del sistema multi-marca */}
      <FeaturesGrid />

      {/* 03 Decisiones + 04 Solución en grid 2 cols */}
      <DecisionesSolucionGrid sections={[sections[2], sections[3]]} />

      {/* 4 imágenes del despliegue */}
      <FinalGallery />

      {/* 05 Impacto */}
      <SectionWithExtras section={sections[4]} />

      {/* 3 ilustraciones de cierre — resumen de intervención de diseño */}
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
 * 4 cards compactas en fila — funcionalidades del sistema multi-marca.
 * Copies y visuales temáticos: PENDIENTES — Santiago dictará el contenido.
 */
function FeaturesGrid() {
  const features = [
    {
      number: '01',
      label: 'Research',
      title: 'Investigación de mercado y requerimientos del negocio.',
      description:
        'Análisis de cada segmento (Constructor, Petcenter, Carcenter, mayoristas) y mapeo de los requerimientos que tenían en común vs. los específicos de cada uno.',
      visual: <SharedShellVisual />,
    },
    {
      number: '02',
      label: 'Componetización',
      title: 'Sistema global con identidad por marca.',
      description:
        'Una sola librería de componentes para todas las stores. Cada marca aplica su identidad sobre la misma base — sin duplicar lógica ni romper la consistencia.',
      visual: <ThemingVisual />,
    },
    {
      number: '03',
      label: 'Journey transaccional',
      title: 'Home, PLPs, PDPs y paso al carrito web.',
      description:
        'Cada marca tiene su recorrido completo de compra: home temática, PLP, PDP y paso al carrito web normal de Homecenter para finalizar la transacción.',
      visual: <SwitchingVisual />,
    },
    {
      number: '04',
      label: 'Componentes dinámicos',
      title: 'Variantes que atienden cada evento del año.',
      description:
        'Componentes que se adaptan dinámicamente a la temporada o evento comercial — Black Friday, día de la madre, regreso a clases — sin reescribir la base.',
      visual: <CrossSellVisual />,
    },
  ];

  return (
    <section className="border-t border-line py-12 md:py-16">
      <div className="container-portfolio">
        <div className="mb-8 text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
          Funcionalidades · sistema multi-marca
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
 * Galería final con 4 imágenes (placeholders por ahora).
 * Naming sugerido: gallery-01.jpg ... gallery-04.jpg en
 * public/work/store-in-store/.
 */
function FinalGallery() {
  // Cambiar a true cuando estén las 4 imágenes en /public/work/store-in-store/
  const HAS_IMAGES = true;

  const items = [
    {
      src: '/work/store-in-store/gallery-01.jpg',
      alt: 'Constructor — landing y catálogo dentro del ecosistema.',
    },
    {
      src: '/work/store-in-store/gallery-02.jpg',
      alt: 'Petcenter — landing temática conviviendo con la shell común.',
    },
    {
      src: '/work/store-in-store/gallery-03.jpg',
      alt: 'Carcenter — adaptación visual para automotriz.',
    },
    {
      src: '/work/store-in-store/gallery-04.jpg',
      alt: 'Venta al por mayor — flujo y tono editorial diferenciado.',
    },
  ];

  return (
    <section className="container-portfolio border-t border-line py-16 md:py-20">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {items.map((item, i) => (
          <div
            key={item.src}
            className={
              HAS_IMAGES
                ? 'relative aspect-[4/3] w-full overflow-hidden rounded-lg'
                : 'aspect-[4/3] w-full overflow-hidden rounded-lg border border-dashed border-line bg-bg-block'
            }
            role="img"
            aria-label={item.alt}
          >
            {HAS_IMAGES ? (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            ) : (
              <div className="flex h-full items-center justify-center px-4 text-center text-eyebrow uppercase tracking-eyebrow text-ink-mute">
                [ {item.alt} ]
              </div>
            )}
          </div>
        ))}
      </div>
      {!HAS_IMAGES && (
        <p className="mt-5 text-center text-eyebrow uppercase tracking-eyebrow text-ink-mute md:text-left">
          Cierre · 4 imágenes pendientes de subir.
        </p>
      )}
    </section>
  );
}

/**
 * 3 ilustraciones de cierre — resumen de la intervención de diseño.
 * Copies y visuales temáticos: PENDIENTES — Santiago dictará.
 */
function DesignSummaryStrip() {
  const items = [
    {
      label: 'Replicado en la nueva app',
      caption:
        'El sistema escaló al rediseño de la App Homecenter — misma base de componetización.',
      visual: <ScalableSystemVisual />,
    },
    {
      label: 'Del digital al físico',
      caption:
        'Independencia local que generó ofertas diferenciadas — algunas escalaron a tiendas físicas (Petizoos / Petcenter).',
      visual: <BrandIdentityVisual />,
    },
    {
      label: 'Journey unificado',
      caption: 'Un solo flujo de compra para múltiples líneas de producto.',
      visual: <UnifiedJourneyVisual />,
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

/* ─── Visuales SVG inline (todos adaptables a light/dark) ─── */

/** 01 · Shell compartida: 4 cuadrados conectados a un nodo central. */
function SharedShellVisual() {
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
        <div className="relative grid grid-cols-3 grid-rows-3 gap-1.5">
          {/* 4 marcas alrededor del nodo central */}
          {[0, 2, 6, 8].map((pos) => (
            <div
              key={pos}
              className="h-5 w-5 rounded-md border border-line"
              style={{
                background: 'var(--bg)',
                gridArea: `${Math.floor(pos / 3) + 1} / ${(pos % 3) + 1}`,
              }}
            />
          ))}
          {/* Nodo central (shell) */}
          <div
            className="h-6 w-6 rounded-lg bg-brand-gradient"
            style={{ gridArea: '2 / 2' }}
          />
        </div>
      </div>
    </div>
  );
}

/** 02 · Theming: 3 cuadrados de mismo shape, distintos colores. */
function ThemingVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--rose) 6%, transparent), color-mix(in oklab, var(--blue) 4%, transparent))',
      }}
      aria-hidden
    >
      <div className="flex h-full items-center justify-center gap-2 p-5">
        <div
          className="h-12 w-10 rounded-md"
          style={{ background: 'var(--blue)' }}
        />
        <div
          className="h-12 w-10 rounded-md"
          style={{ background: 'var(--rose)' }}
        />
        <div
          className="h-12 w-10 rounded-md"
          style={{ background: 'var(--cyan)' }}
        />
        <div className="h-12 w-10 rounded-md bg-brand-gradient" />
      </div>
    </div>
  );
}

/** 03 · Switching: flechas circulares conectando 3 íconos de marca. */
function SwitchingVisual() {
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
        <div
          className="h-8 w-8 rounded-full"
          style={{ background: 'var(--blue)' }}
        />
        <svg
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          aria-hidden
        >
          <path
            d="M2 7 H16 M12 2 L18 7 L12 12"
            stroke="var(--ink-soft)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div
          className="h-8 w-8 rounded-full"
          style={{ background: 'var(--rose)' }}
        />
        <svg
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          aria-hidden
        >
          <path
            d="M2 7 H16 M12 2 L18 7 L12 12"
            stroke="var(--ink-soft)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div
          className="h-8 w-8 rounded-full"
          style={{ background: 'var(--cyan)' }}
        />
      </div>
    </div>
  );
}

/** 04 · Cross-sell: carrito con productos de varias marcas (puntos de color). */
function CrossSellVisual() {
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
          {/* Carrito */}
          <svg
            width="56"
            height="56"
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
          {/* Mini badges de productos de distintas marcas */}
          <span
            className="absolute right-3 top-2 h-2.5 w-2.5 rounded-full"
            style={{ background: 'var(--blue)' }}
          />
          <span
            className="absolute right-7 top-4 h-2.5 w-2.5 rounded-full"
            style={{ background: 'var(--rose)' }}
          />
          <span
            className="absolute right-5 top-7 h-2.5 w-2.5 rounded-full"
            style={{ background: 'var(--cyan)' }}
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Visuales del DesignSummaryStrip ─── */

/**
 * "Replicado en la nueva app" — pantalla horizontal (web) clonando hacia un
 * móvil vertical (app), conectados con flecha que comparte gradient.
 */
function ScalableSystemVisual() {
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
        {/* Web (origen) */}
        <div
          className="flex h-12 w-16 flex-col items-center justify-center gap-1 rounded-md border border-line"
          style={{ background: 'var(--bg)' }}
        >
          <div
            className="h-0.5 w-8 rounded-full"
            style={{ background: 'var(--line)' }}
          />
          <div
            className="h-0.5 w-6 rounded-full"
            style={{ background: 'var(--line)' }}
          />
          <div
            className="mt-0.5 h-3 w-10 rounded-sm bg-brand-gradient opacity-60"
          />
        </div>
        {/* Flecha de replicación */}
        <svg width="24" height="14" viewBox="0 0 24 14" fill="none" aria-hidden>
          <defs>
            <linearGradient id="repGrad" x1="0" y1="0" x2="24" y2="0">
              <stop offset="0%" stopColor="var(--blue)" />
              <stop offset="100%" stopColor="var(--rose)" />
            </linearGradient>
          </defs>
          <path
            d="M2 7 H18 M14 2 L20 7 L14 12"
            stroke="url(#repGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* App móvil (destino) */}
        <div
          className="flex h-12 w-7 flex-col items-center justify-center gap-1 rounded-md border border-line"
          style={{ background: 'var(--bg)' }}
        >
          <div
            className="h-0.5 w-4 rounded-full"
            style={{ background: 'var(--line)' }}
          />
          <div
            className="h-0.5 w-3 rounded-full"
            style={{ background: 'var(--line)' }}
          />
          <div
            className="mt-0.5 h-3 w-5 rounded-sm bg-brand-gradient opacity-60"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * "Del digital al físico" — móvil/pantalla con flecha hacia un edificio de
 * tienda física (representado como bloques apilados tipo storefront).
 */
function BrandIdentityVisual() {
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
        {/* Móvil (digital, origen) */}
        <div
          className="flex h-14 w-8 flex-col items-center justify-center gap-1 rounded-md border border-line"
          style={{ background: 'var(--bg)' }}
        >
          <div
            className="h-0.5 w-4 rounded-full"
            style={{ background: 'var(--rose)' }}
          />
          <div
            className="h-0.5 w-3 rounded-full"
            style={{ background: 'var(--line)' }}
          />
          <div
            className="mt-1 h-4 w-6 rounded-sm"
            style={{ background: 'var(--rose)', opacity: 0.5 }}
          />
        </div>
        {/* Flecha digital → físico */}
        <svg width="24" height="14" viewBox="0 0 24 14" fill="none" aria-hidden>
          <defs>
            <linearGradient id="d2pGrad" x1="0" y1="0" x2="24" y2="0">
              <stop offset="0%" stopColor="var(--rose)" />
              <stop offset="100%" stopColor="var(--blue)" />
            </linearGradient>
          </defs>
          <path
            d="M2 7 H18 M14 2 L20 7 L14 12"
            stroke="url(#d2pGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* Tienda física (storefront SVG) */}
        <svg
          width="56"
          height="48"
          viewBox="0 0 56 48"
          fill="none"
          aria-hidden
        >
          {/* Toldo del storefront */}
          <path
            d="M4 14 L28 4 L52 14 L52 18 L4 18 Z"
            fill="var(--rose)"
            opacity="0.4"
          />
          {/* Cuerpo de la tienda */}
          <rect
            x="8"
            y="18"
            width="40"
            height="28"
            rx="1"
            fill="none"
            stroke="var(--ink)"
            strokeWidth="1.5"
          />
          {/* Puerta */}
          <rect
            x="22"
            y="28"
            width="12"
            height="18"
            rx="0.5"
            fill="var(--rose)"
            opacity="0.5"
          />
          {/* Ventanas */}
          <rect
            x="12"
            y="22"
            width="6"
            height="4"
            fill="var(--blue)"
            opacity="0.4"
          />
          <rect
            x="38"
            y="22"
            width="6"
            height="4"
            fill="var(--blue)"
            opacity="0.4"
          />
        </svg>
      </div>
    </div>
  );
}

/** Journey unificado: línea horizontal con 4 dots conectados. */
function UnifiedJourneyVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--cyan) 6%, transparent), color-mix(in oklab, var(--rose) 4%, transparent))',
      }}
      aria-hidden
    >
      <div className="flex h-full items-center justify-center px-6">
        <div className="relative flex w-full items-center justify-between">
          {/* Línea de fondo */}
          <span
            className="absolute inset-x-2 h-px"
            style={{ background: 'var(--ink-mute)' }}
          />
          {/* 4 dots */}
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="relative h-3 w-3 rounded-full bg-brand-gradient"
            />
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
        [ hero visual · Store in Store ]
      </div>
    </div>
  );
}
