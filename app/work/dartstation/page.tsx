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
import { CASE_DARTSTATION } from '@/content/case-dartstation';
import type {
  CaseHeroContent,
  CaseSectionContent,
  HighlightTitle as HighlightTitleType,
} from '@/content/types';

/**
 * CASE — DartStation. Marquetería en Barranquilla.
 * Slug: /work/dartstation. Todo el copy vive en /content/case-dartstation.tsx.
 */

export default function DartStationCase() {
  const { hero, establishing, sections, nav } = CASE_DARTSTATION;

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

function FeaturesGrid() {
  const features = [
    {
      number: '01',
      label: 'Identidad de marca',
      title: 'Logo, paleta y voz editorial.',
      description:
        'Sistema visual completo que captura el oficio de la marquetería y se traduce a digital sin perder carácter.',
      visual: <BrandIdentityVisual />,
    },
    {
      number: '02',
      label: 'Catálogo digital',
      title: 'La obra disponible en la web.',
      description:
        'Categorías por técnica, formato y disponibilidad — el catálogo de la tienda física trasladado a una vitrina permanente.',
      visual: <CatalogVisual />,
    },
    {
      number: '03',
      label: 'Trabajos a la medida',
      title: 'Solicitudes desde la web.',
      description:
        'Flujo guiado para encargos personalizados — medidas, materiales, presupuesto y conversación directa con el taller.',
      visual: <CustomOrderVisual />,
    },
    {
      number: '04',
      label: 'Co-autoría',
      title: 'Proyecto en pareja con Daniela Salcedo Mejía.',
      description:
        'Diseño compartido — branding, UI y dirección visual a 4 manos. Mejor decisión cuando el alcance es pequeño y el tiempo apremia.',
      visual: <PairWorkVisual />,
    },
  ];

  return (
    <section className="border-t border-line py-12 md:py-16">
      <div className="container-portfolio">
        <div className="mb-8 text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
          Funcionalidades · vitrina digital
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
  // Cambiar a true cuando estén las imágenes en /public/work/dartstation/
  const HAS_IMAGES = true;

  const items = [
    {
      src: '/work/dartstation/gallery-01.jpg',
      alt: 'DartStation — sistema de marca aplicado a la web.',
    },
    {
      src: '/work/dartstation/gallery-02.jpg',
      alt: 'DartStation — catálogo digital de obra disponible.',
    },
    {
      src: '/work/dartstation/gallery-03.jpg',
      alt: 'DartStation — flujo de trabajos a la medida.',
    },
    {
      src: '/work/dartstation/gallery-04.jpg',
      alt: 'DartStation — vista responsive en mobile.',
    },
  ];

  if (HAS_IMAGES) {
    return (
      <ClickableImageGrid
        items={items}
        title="DartStation · galería"
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
      label: 'Marca + producto',
      caption: 'Identidad gráfica como columna vertebral del e-commerce.',
      visual: <BrandProductVisual />,
    },
    {
      label: 'Diseño en pareja',
      caption: 'Co-autoría con Daniela Salcedo Mejía — decisiones a 4 manos.',
      visual: <PairCloseVisual />,
    },
    {
      label: 'Vitrina permanente',
      caption: 'De tienda local a marca disponible en cualquier momento.',
      visual: <ShowcaseVisual />,
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

/** 01 Identidad de marca — círculo + cuadrado + triángulo (átomos del DS) en gradient brand. */
function BrandIdentityVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--blue) 6%, transparent), color-mix(in oklab, var(--cyan) 4%, transparent))',
      }}
      aria-hidden
    >
      <div className="flex h-full items-center justify-center gap-2.5 p-5">
        {/* Círculo */}
        <div
          className="anim-pulse-soft h-10 w-10 rounded-full"
          style={{ background: 'var(--blue)' }}
        />
        {/* Cuadrado */}
        <div
          className="anim-spin-piece h-10 w-10 rounded-md"
          style={{ background: 'var(--rose)' }}
        />
        {/* Triángulo */}
        <svg width="40" height="40" viewBox="0 0 40 40" className="anim-spin-piece" style={{ animationDelay: '0.6s' }} aria-hidden>
          <path d="M20 4 L36 34 L4 34 Z" fill="var(--cyan)" />
        </svg>
      </div>
    </div>
  );
}

/** 02 Catálogo — grid de mini-cuadros (obras) con uno destacado. */
function CatalogVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--rose) 6%, transparent), color-mix(in oklab, var(--blue) 4%, transparent))',
      }}
      aria-hidden
    >
      <div className="grid h-full grid-cols-3 grid-rows-2 gap-2 p-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={i === 1 ? 'anim-pulse-strong rounded-sm' : 'rounded-sm border border-line'}
            style={{
              background: i === 1 ? 'var(--rose)' : 'var(--bg)',
              opacity: i === 1 ? 0.8 : 1,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/** 03 A la medida — silueta de cuadro con regla + marca de medida. */
function CustomOrderVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--cyan) 6%, transparent), color-mix(in oklab, var(--rose) 4%, transparent))',
      }}
      aria-hidden
    >
      <div className="flex h-full flex-col items-center justify-center gap-2 p-5">
        {/* Marco / cuadro */}
        <div
          className="anim-float-y h-12 w-16 rounded-sm"
          style={{
            background: 'var(--bg)',
            border: '3px solid var(--ink)',
          }}
        />
        {/* Cinta métrica */}
        <svg width="80" height="10" viewBox="0 0 80 10" fill="none" aria-hidden>
          <path
            d="M2 5 L7 2 M2 5 L7 8"
            stroke="var(--ink)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="2"
            y1="5"
            x2="78"
            y2="5"
            stroke="var(--ink)"
            strokeWidth="1.2"
            className="anim-dash-flow"
          />
          <path
            d="M78 5 L73 2 M78 5 L73 8"
            stroke="var(--ink)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

/** 04 Co-autoría — 2 siluetas de personas conectadas. */
function PairWorkVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--blue) 5%, transparent), color-mix(in oklab, var(--rose) 5%, transparent))',
      }}
      aria-hidden
    >
      <div className="flex h-full items-center justify-center gap-3 p-5">
        {/* Persona 1 */}
        <div className="anim-float-y flex flex-col items-center" style={{ animationDelay: '0s' }}>
          <div className="h-5 w-5 rounded-full" style={{ background: 'var(--blue)' }} />
          <div className="mt-1 h-6 w-7 rounded-t-md" style={{ background: 'var(--blue)' }} />
        </div>
        {/* Conector con corazón/brand-gradient */}
        <div className="anim-pulse-strong h-2 w-2 rounded-full bg-brand-gradient" />
        {/* Persona 2 */}
        <div className="anim-float-y flex flex-col items-center" style={{ animationDelay: '0.5s' }}>
          <div className="h-5 w-5 rounded-full" style={{ background: 'var(--rose)' }} />
          <div className="mt-1 h-6 w-7 rounded-t-md" style={{ background: 'var(--rose)' }} />
        </div>
      </div>
    </div>
  );
}

/* ─── Visuales del DesignSummaryStrip ─── */

/** Marca + producto — átomo central conectado a productos. */
function BrandProductVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--blue) 6%, transparent), color-mix(in oklab, var(--cyan) 4%, transparent))',
      }}
      aria-hidden
    >
      <div className="flex h-full items-center justify-center gap-2 p-5">
        <div className="anim-pulse-strong h-10 w-10 rounded-lg bg-brand-gradient" />
        <div className="flex flex-col gap-1">
          <div className="h-2 w-12 rounded-full" style={{ background: 'var(--ink-soft)' }} />
          <div className="h-2 w-10 rounded-full" style={{ background: 'var(--ink-mute)' }} />
          <div className="h-2 w-8 rounded-full" style={{ background: 'var(--ink-mute)' }} />
        </div>
      </div>
    </div>
  );
}

/** Diseño en pareja — 2 manos / 2 dots conectados. */
function PairCloseVisual() {
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
        <div className="anim-pulse-strong h-6 w-6 rounded-full" style={{ background: 'var(--blue)' }} />
        <div className="anim-dash-flow h-px w-8" style={{ background: 'var(--ink-soft)' }} />
        <div className="anim-pulse-strong h-6 w-6 rounded-full" style={{ background: 'var(--rose)', animationDelay: '0.4s' }} />
      </div>
    </div>
  );
}

/** Vitrina permanente — "tienda" con ventana iluminada 24/7. */
function ShowcaseVisual() {
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
        <svg width="56" height="44" viewBox="0 0 56 44" fill="none" aria-hidden>
          {/* Toldo */}
          <path d="M2 12 L28 4 L54 12 L54 16 L2 16 Z" fill="var(--rose)" opacity="0.4" />
          {/* Cuerpo */}
          <rect x="6" y="16" width="44" height="26" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
          {/* Vitrina principal — pulse */}
          <rect x="14" y="22" width="28" height="14" fill="var(--blue)" opacity="0.5" className="anim-pulse-strong" />
        </svg>
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
        [ hero visual · DartStation ]
      </div>
    </div>
  );
}
