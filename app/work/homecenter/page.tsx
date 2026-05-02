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

      {/* Trio de imágenes (movido desde el mediaAfter de la sección 03) */}
      {sections[2].mediaAfter && (
        <CaseMedia
          layout={sections[2].mediaAfter.layout}
          items={sections[2].mediaAfter.items}
          caption={sections[2].mediaAfter.caption}
        />
      )}

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
