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

      {/* CTA — botones que llevan a cada store en vivo */}
      <VisitStoresButtons />

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
 * Galería final con 4 imágenes — todas clickeables abren CarouselModal.
 */
function FinalGallery() {
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
    <ClickableImageGrid
      items={items}
      title="Store in Store · galería"
      aspect="4/3"
      columns={2}
      borderless
    />
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

/**
 * 4 botones CTA después del hero — abren cada store en vivo en Homecenter.
 * Mobile: stack vertical. Desktop: grid 4 columnas.
 */
function VisitStoresButtons() {
  const stores = [
    {
      label: 'Constructor',
      href: 'https://www.homecenter.com.co/homecenter-co/tiendas/constructor/?store=constructor/',
      accent: 'var(--blue)',
    },
    {
      label: 'Al por mayor',
      href: 'https://www.homecenter.com.co/homecenter-co/tiendas/compras-por-mayor-grandes-volumenes/?store=grandesvolumenes/',
      accent: 'var(--ink-soft)',
    },
    {
      label: 'Carcenter',
      href: 'https://www.homecenter.com.co/homecenter-co/tiendas/servicio-automotriz-carcenter/?store=carcenter/',
      accent: 'var(--cyan)',
    },
    {
      label: 'Petizoos · Petcenter',
      href: 'https://www.homecenter.com.co/homecenter-co/tiendas/tienda-mascotas-pet-center/?store=petcenter/',
      accent: 'var(--rose)',
    },
  ];

  return (
    <div className="container-portfolio pt-10 pb-16 md:pt-12 md:pb-24">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
        {stores.map((s) => (
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

/* ─── Visuales SVG inline (todos adaptables a light/dark) ─── */

/**
 * 01 · Research — lupa sobre 4 segmentos de mercado (donut chart con
 * 4 secciones de color distinto, una por sub-marca).
 */
function SharedShellVisual() {
  // Donut con 4 segmentos iguales (25% cada uno)
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const segment = circumference / 4;

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
          <svg width="80" height="80" viewBox="0 0 80 80" className="anim-spin-slow">
            {/* 4 segmentos del donut — gira lento */}
            {[
              { color: 'var(--blue)', offset: 0 },
              { color: 'var(--rose)', offset: -segment },
              { color: 'var(--cyan)', offset: -segment * 2 },
              { color: 'var(--ink-soft)', offset: -segment * 3 },
            ].map((seg, i) => (
              <circle
                key={i}
                cx="40"
                cy="40"
                r={radius}
                fill="none"
                stroke={seg.color}
                strokeWidth="9"
                strokeDasharray={`${segment - 2} ${circumference - segment + 2}`}
                strokeDashoffset={seg.offset}
                transform="rotate(-90 40 40)"
              />
            ))}
          </svg>
          {/* Lupa superpuesta */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute -bottom-1 -right-1 text-ink"
            style={{ background: 'var(--bg)', borderRadius: '999px', padding: '2px' }}
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

/**
 * 02 · Componetización — 1 átomo central distribuyendo a 4 componentes con
 * distintos estilos. Sugiere "una base, múltiples aplicaciones".
 */
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
      <div className="flex h-full items-center justify-center p-5">
        <svg width="100" height="80" viewBox="0 0 100 80" fill="none" aria-hidden>
          {/* Líneas conectoras desde el átomo central a las 4 esquinas */}
          <g stroke="var(--line)" strokeWidth="1" className="anim-dash-flow">
            <line x1="50" y1="40" x2="20" y2="20" />
            <line x1="50" y1="40" x2="80" y2="20" />
            <line x1="50" y1="40" x2="20" y2="60" />
            <line x1="50" y1="40" x2="80" y2="60" />
          </g>
          {/* 4 componentes en las esquinas con colores de marca */}
          <rect x="14" y="14" width="12" height="12" rx="2" fill="var(--blue)" />
          <rect x="74" y="14" width="12" height="12" rx="2" fill="var(--rose)" />
          <rect x="14" y="54" width="12" height="12" rx="2" fill="var(--cyan)" />
          <rect x="74" y="54" width="12" height="12" rx="2" fill="var(--ink-soft)" />
          {/* Átomo central (sistema base) — pulsa */}
          <circle cx="50" cy="40" r="9" fill="url(#atomGrad)" className="anim-pulse-soft" style={{ transformOrigin: '50px 40px' }} />
          <defs>
            <linearGradient id="atomGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--blue)" />
              <stop offset="100%" stopColor="var(--rose)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

/**
 * 03 · Journey transaccional — 4 mini-pantallas en cadena (Home → PLP → PDP →
 * Carrito) conectadas con flechas. Representa el flujo de compra completo.
 */
function SwitchingVisual() {
  const screens = ['Home', 'PLP', 'PDP', 'Cart'];
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--cyan) 6%, transparent), color-mix(in oklab, var(--rose) 4%, transparent))',
      }}
      aria-hidden
    >
      <div className="flex h-full items-center justify-center gap-1 px-4">
        {screens.map((label, i) => (
          <div key={label} className="flex items-center">
            {/* Mini pantalla — float secuencial */}
            <div
              className="anim-float-y-strong flex h-12 w-9 flex-col items-center justify-center gap-0.5 rounded-sm border border-line"
              style={{ background: 'var(--bg)', animationDelay: `${i * 0.5}s` }}
            >
              <div
                className="h-0.5 w-5 rounded-full"
                style={{ background: 'var(--line)' }}
              />
              <div
                className="h-0.5 w-4 rounded-full"
                style={{ background: 'var(--line)' }}
              />
              <div
                className={`mt-0.5 h-2.5 w-6 rounded-sm ${
                  i === screens.length - 1 ? 'anim-pulse-strong' : ''
                }`}
                style={{
                  background:
                    i === screens.length - 1
                      ? 'var(--rose)'
                      : 'color-mix(in oklab, var(--blue) 40%, transparent)',
                }}
              />
            </div>
            {/* Flecha entre pantallas (excepto la última) — desliza */}
            {i < screens.length - 1 && (
              <svg
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                className="anim-arrow-slide-strong"
                style={{ animationDelay: `${i * 0.5}s` }}
                aria-hidden
              >
                <path
                  d="M1 4 H8 M5 1 L9 4 L5 7"
                  stroke="var(--ink-mute)"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 04 · Componentes dinámicos — un mismo "componente base" con 3 variantes
 * encima (Black Friday, Día de la madre, Regreso a clases). Misma forma,
 * distintos colores y patrones.
 */
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
        <div className="relative h-16 w-20">
          {/* 3 capas que rotan posición (atrás → frente → medio → atrás) */}
          {/* Capa CYAN */}
          <div
            className="anim-card-shuffle-1 absolute left-0 top-0 h-12 w-16 rounded-md"
            style={{ background: 'var(--cyan)' }}
          />
          {/* Capa ROSE */}
          <div
            className="anim-card-shuffle-2 absolute left-0 top-0 h-12 w-16 rounded-md"
            style={{ background: 'var(--rose)' }}
          />
          {/* Capa BLUE — con contenido (UI lines) */}
          <div
            className="anim-card-shuffle-3 absolute left-0 top-0 flex h-12 w-16 flex-col gap-1 rounded-md p-2"
            style={{ background: 'var(--blue)' }}
          >
            <div
              className="h-0.5 w-8 rounded-full"
              style={{ background: 'var(--bg)' }}
            />
            <div
              className="h-0.5 w-6 rounded-full"
              style={{ background: 'var(--bg)', opacity: 0.7 }}
            />
            <div
              className="mt-1 h-3 w-12 rounded-sm"
              style={{ background: 'var(--bg)', opacity: 0.4 }}
            />
          </div>
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
        {/* Web (origen) — float */}
        <div
          className="anim-float-y-strong flex h-12 w-16 flex-col items-center justify-center gap-1 rounded-md border border-line"
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
            className="anim-pulse-strong mt-0.5 h-3 w-10 rounded-sm bg-brand-gradient opacity-60"
          />
        </div>
        {/* Flecha de replicación — desliza fuerte */}
        <svg width="24" height="14" viewBox="0 0 24 14" fill="none" className="anim-arrow-slide-strong" aria-hidden>
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
        {/* App móvil (destino) — float con delay */}
        <div
          className="anim-float-y-strong flex h-12 w-7 flex-col items-center justify-center gap-1 rounded-md border border-line"
          style={{ background: 'var(--bg)', animationDelay: '0.6s' }}
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
            className="anim-pulse-strong mt-0.5 h-3 w-5 rounded-sm bg-brand-gradient opacity-60"
            style={{ animationDelay: '0.4s' }}
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
        {/* Móvil (digital, origen) — float */}
        <div
          className="anim-float-y-strong flex h-14 w-8 flex-col items-center justify-center gap-1 rounded-md border border-line"
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
            className="anim-pulse-strong mt-1 h-4 w-6 rounded-sm"
            style={{ background: 'var(--rose)', opacity: 0.5 }}
          />
        </div>
        {/* Flecha digital → físico — desliza fuerte */}
        <svg width="24" height="14" viewBox="0 0 24 14" fill="none" className="anim-arrow-slide-strong" aria-hidden>
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
        {/* Tienda física (storefront SVG) — float opuesto al móvil */}
        <svg
          width="56"
          height="48"
          viewBox="0 0 56 48"
          fill="none"
          className="anim-float-y-strong"
          style={{ animationDelay: '1.2s' }}
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
          {/* Ventanas — pulsan como luces de tienda */}
          <rect
            x="12"
            y="22"
            width="6"
            height="4"
            fill="var(--blue)"
            opacity="0.4"
            className="anim-pulse-strong"
          />
          <rect
            x="38"
            y="22"
            width="6"
            height="4"
            fill="var(--blue)"
            opacity="0.4"
            className="anim-pulse-strong"
            style={{ animationDelay: '0.5s' }}
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
          {/* 4 dots — laten secuencialmente, más fuerte */}
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="anim-pulse-strong relative h-3 w-3 rounded-full bg-brand-gradient"
              style={{ animationDelay: `${i * 0.4}s` }}
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
