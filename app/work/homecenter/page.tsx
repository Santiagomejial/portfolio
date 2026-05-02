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

      {sections.map((section) => (
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

/** Renderiza title como string plano o con HighlightTitle según tipo. */
function renderTitle(title: string | HighlightTitleType): React.ReactNode {
  if (typeof title === 'string') return title;
  return <HighlightTitle {...title} />;
}

/** Renderiza el hero visual: imagen real si hay heroImage, placeholder si no. */
function renderHeroImage(hero: CaseHeroContent): React.ReactNode {
  if (hero.heroImage) {
    return (
      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg border border-line">
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
