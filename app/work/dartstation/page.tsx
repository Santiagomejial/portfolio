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
  ClickableImageGrid,
} from '@/components';
import { CASE_DARTSTATION } from '@/content/case-dartstation';
import type {
  CaseHeroContent,
  CaseSectionContent,
  HighlightTitle as HighlightTitleType,
} from '@/content/types';
import { useLang } from '@/lib/use-lang';
import type { Lang } from '@/lib/use-lang';

const T = {
  features: {
    label: { es: 'Funcionalidades · vitrina digital', en: 'Features · digital storefront' },
    brandIdentity: {
      label: { es: 'Identidad de marca', en: 'Brand identity' },
      title: { es: 'Logo, paleta y voz editorial.', en: 'Logo, palette and editorial voice.' },
      description: { es: 'Sistema visual completo que captura el oficio de la marquetería y se traduce a digital sin perder carácter.', en: 'Complete visual system that captures the framing craft and translates to digital without losing character.' },
    },
    catalog: {
      label: { es: 'Catálogo digital', en: 'Digital catalog' },
      title: { es: 'La obra disponible en la web.', en: 'Available work on the web.' },
      description: { es: 'Categorías por técnica, formato y disponibilidad — el catálogo de la tienda física trasladado a una vitrina permanente.', en: 'Categories by technique, format and availability — the physical store catalog moved to a permanent storefront.' },
    },
    customOrder: {
      label: { es: 'Trabajos a la medida', en: 'Custom orders' },
      title: { es: 'Solicitudes desde la web.', en: 'Requests from the web.' },
      description: { es: 'Flujo guiado para encargos personalizados — medidas, materiales, presupuesto y conversación directa con el taller.', en: 'Guided flow for custom orders — dimensions, materials, budget and direct conversation with the workshop.' },
    },
    pairWork: {
      label: { es: 'Co-autoría', en: 'Co-authorship' },
      title: { es: 'Proyecto en pareja con Daniela Salcedo Mejía.', en: 'Project paired with Daniela Salcedo Mejía.' },
      description: { es: 'Diseño compartido — branding, UI y dirección visual a 4 manos. Mejor decisión cuando el alcance es pequeño y el tiempo apremia.', en: 'Shared design — branding, UI and visual direction four-handed. The right call when scope is small and time is tight.' },
    },
  },
  galleryTitle: { es: 'DartStation · galería', en: 'DartStation · gallery' },
  galleryAlts: {
    a: { es: 'DartStation — sistema de marca aplicado a la web.', en: 'DartStation — brand system applied to the web.' },
    b: { es: 'DartStation — catálogo digital de obra disponible.', en: 'DartStation — digital catalog of available work.' },
    c: { es: 'DartStation — flujo de trabajos a la medida.', en: 'DartStation — custom orders flow.' },
    d: { es: 'DartStation — vista responsive en mobile.', en: 'DartStation — responsive mobile view.' },
  },
  galleryPendingNote: { es: 'Cierre · 4 imágenes pendientes de subir.', en: 'Closing · 4 images pending upload.' },
  summary: {
    label: { es: 'Resumen · intervención de diseño', en: 'Summary · design intervention' },
    brandProduct: {
      label: { es: 'Marca + producto', en: 'Brand + product' },
      caption: { es: 'Identidad gráfica como columna vertebral del e-commerce.', en: 'Visual identity as backbone of the e-commerce.' },
    },
    pairClose: {
      label: { es: 'Diseño en pareja', en: 'Paired design' },
      caption: { es: 'Co-autoría con Daniela Salcedo Mejía — decisiones a 4 manos.', en: 'Co-authored with Daniela Salcedo Mejía — four-handed decisions.' },
    },
    showcase: {
      label: { es: 'Vitrina permanente', en: 'Permanent storefront' },
      caption: { es: 'De tienda local a marca disponible en cualquier momento.', en: 'From local shop to brand available anytime.' },
    },
  },
  heroPlaceholder: { es: '[ hero visual · DartStation ]', en: '[ hero visual · DartStation ]' },
  heroPlaceholderAlt: { es: 'Hero visual — pendiente', en: 'Hero visual — pending' },
};

/**
 * CASE — DartStation. Marquetería en Barranquilla.
 * Slug: /work/dartstation. Todo el copy vive en /content/case-dartstation.tsx.
 */

export default function DartStationCase() {
  const { lang } = useLang();
  const content = CASE_DARTSTATION[lang];
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

      {/* 4 FeatureCards en fila */}
      <FeaturesGrid lang={lang} />

      {/* 03 Decisiones + 04 Solución en grid 2 cols */}
      <DecisionesSolucionGrid sections={[sections[2], sections[3]]} />

      {/* Galería */}
      <FinalGallery lang={lang} />

      {/* 05 Impacto */}
      <SectionWithExtras section={sections[4]} />

      {/* 3 ilustraciones de cierre */}
      <DesignSummaryStrip lang={lang} />

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

function FeaturesGrid({ lang }: { lang: Lang }) {
  const features = [
    {
      number: '01',
      label: T.features.brandIdentity.label[lang],
      title: T.features.brandIdentity.title[lang],
      description: T.features.brandIdentity.description[lang],
      visual: <BrandIdentityVisual />,
    },
    {
      number: '02',
      label: T.features.catalog.label[lang],
      title: T.features.catalog.title[lang],
      description: T.features.catalog.description[lang],
      visual: <CatalogVisual />,
    },
    {
      number: '03',
      label: T.features.customOrder.label[lang],
      title: T.features.customOrder.title[lang],
      description: T.features.customOrder.description[lang],
      visual: <CustomOrderVisual />,
    },
    {
      number: '04',
      label: T.features.pairWork.label[lang],
      title: T.features.pairWork.title[lang],
      description: T.features.pairWork.description[lang],
      visual: <PairWorkVisual />,
    },
  ];

  return (
    <section className="border-t border-line py-12 md:py-16">
      <div className="container-portfolio">
        <div className="mb-8 text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
          {T.features.label[lang]}
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
                <h3 className="font-sans text-[15px] font-semibold leading-tight text-ink">
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

function FinalGallery({ lang }: { lang: Lang }) {
  // Cambiar a true cuando estén las imágenes en /public/work/dartstation/
  const HAS_IMAGES = true;

  const items = [
    { src: '/work/dartstation/gallery-01.jpg', alt: T.galleryAlts.a[lang] },
    { src: '/work/dartstation/gallery-02.jpg', alt: T.galleryAlts.b[lang] },
    { src: '/work/dartstation/gallery-03.jpg', alt: T.galleryAlts.c[lang] },
    { src: '/work/dartstation/gallery-04.jpg', alt: T.galleryAlts.d[lang] },
  ];

  if (HAS_IMAGES) {
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
        {T.galleryPendingNote[lang]}
      </p>
    </section>
  );
}

function DesignSummaryStrip({ lang }: { lang: Lang }) {
  const items = [
    {
      label: T.summary.brandProduct.label[lang],
      caption: T.summary.brandProduct.caption[lang],
      visual: <BrandProductVisual />,
    },
    {
      label: T.summary.pairClose.label[lang],
      caption: T.summary.pairClose.caption[lang],
      visual: <PairCloseVisual />,
    },
    {
      label: T.summary.showcase.label[lang],
      caption: T.summary.showcase.caption[lang],
      visual: <ShowcaseVisual />,
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
