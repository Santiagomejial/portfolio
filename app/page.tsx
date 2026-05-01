import {
  Eyebrow,
  SectionHead,
  ChipRow,
  PullQuote,
  PageHero,
  WorkCard,
  MetricCard,
  CTABlock,
  Footer,
  Timeline,
  HighlightTitle,
  type TimelineItem,
} from '@/components';
import { HOME } from '@/content/home';

/**
 * HOME — Santiago Mejía · Product Designer + Product Owner.
 *
 * Todo el copy vive en /content/home.ts.
 * Este archivo solo compone layout y consume el contenido tipado.
 */
export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        eyebrow={HOME.hero.eyebrow}
        title={<HighlightTitle {...HOME.hero.title} />}
        sub={HOME.hero.sub}
      >
        <ChipRow items={[...HOME.hero.chips]} />
      </PageHero>

      {/* 01 · SELECTED WORK */}
      <section id="work" className="container-portfolio py-20 md:py-28">
        <SectionHead
          label={HOME.work.label}
          title={<HighlightTitle {...HOME.work.title} />}
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {HOME.work.cards.map((card) => (
            <WorkCard
              key={card.href}
              href={card.href}
              featured={card.featured}
              className={card.span === 12 ? 'md:col-span-12' : 'md:col-span-6'}
              meta={card.meta}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>

      {/* 02 · SNAPSHOT */}
      <section
        id="snapshot"
        className="container-portfolio border-t border-line py-20 md:py-28"
      >
        <Eyebrow className="mb-10">{HOME.snapshot.label}</Eyebrow>
        <div className="grid grid-cols-3 gap-6 md:gap-8">
          {HOME.snapshot.metrics.map((m) => (
            <MetricCard
              key={m.label}
              label={m.label}
              value={m.value}
              unit={m.unit}
            />
          ))}
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="container-portfolio border-t border-line py-20 md:py-28">
        <PullQuote
          highlight={HOME.quote.highlight}
          attribution={HOME.quote.attribution}
        >
          {HOME.quote.body}
        </PullQuote>
      </section>

      {/* 03 · TIMELINE */}
      <section
        id="about-preview"
        className="container-portfolio border-t border-line py-20 md:py-28"
      >
        <SectionHead
          label={HOME.timeline.label}
          title={<HighlightTitle {...HOME.timeline.title} />}
          className="mb-12"
        />
        <Timeline items={HOME.timeline.items as TimelineItem[]} />
      </section>

      {/* CTA */}
      <CTABlock
        title={<HighlightTitle {...HOME.cta.title} />}
        sub={HOME.cta.sub}
      />

      {/* Footer */}
      <Footer />
    </>
  );
}
