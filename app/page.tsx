'use client';

import {
  SectionHead,
  ChipRow,
  PullQuote,
  HomeHero,
  WorkCard,
  Footer,
  Timeline,
  HighlightTitle,
  ViewAllLink,
  type TimelineItem,
} from '@/components';
import { HOME, resolveHomeCards } from '@/content/home';
import { useLang } from '@/lib/use-lang';

export default function HomePage() {
  const { lang } = useLang();
  const cards = resolveHomeCards(lang);

  const timelineItems: TimelineItem[] = HOME.timeline.items.map((it) => ({
    year: it.year[lang],
    title: it.title[lang],
    description: it.description[lang],
    milestone: it.milestone,
  }));

  return (
    <>
      {/* HERO */}
      <HomeHero
        eyebrow={HOME.hero.eyebrow[lang]}
        title={HOME.hero.title[lang]}
        sub={HOME.hero.sub[lang]}
      >
        <ChipRow items={[...HOME.hero.chips[lang]]} />
      </HomeHero>

      {/* 01 · SELECTED WORK */}
      <section id="work" className="container-portfolio py-20 md:py-28">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHead
            label={HOME.work.label[lang]}
            title={<HighlightTitle {...HOME.work.title[lang]} />}
          />
          <ViewAllLink href="/work" className="shrink-0">
            {HOME.viewAllProjects[lang]}
          </ViewAllLink>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {cards.map((card) => (
            <WorkCard
              key={card.href}
              href={card.href}
              featured={card.featured}
              className={card.span === 12 ? 'md:col-span-12' : 'md:col-span-6'}
              meta={card.meta}
              title={card.title}
              description={card.description}
              image={card.image}
              imageAlt={card.imageAlt}
            />
          ))}
        </div>
        <div className="mt-10 flex justify-center md:mt-12">
          <ViewAllLink href="/work">{HOME.viewAllProjects[lang]}</ViewAllLink>
        </div>
      </section>

      {/* 02 · SNAPSHOT — oculta (2026-05-01): no aportaba al narrative del home.
          El contenido sigue en HOME.snapshot por si se quiere reactivar.
          Para mostrar de nuevo: descomentar el bloque <section> abajo.

      <section id="snapshot" className="container-portfolio border-t border-line py-20 md:py-28">
        <Eyebrow className="mb-10">{HOME.snapshot.label[lang]}</Eyebrow>
        <div className="grid grid-cols-3 gap-6 md:gap-8">
          {HOME.snapshot.metrics.map((m) => (
            <MetricCard key={m.label.es} label={m.label[lang]} value={m.value} unit={m.unit?.[lang]} />
          ))}
        </div>
      </section>
      */}

      {/* PULL QUOTE */}
      <section className="container-portfolio border-t border-line py-20 md:py-28">
        <PullQuote
          highlight={[...HOME.quote.highlight[lang]]}
          attribution={HOME.quote.attribution[lang]}
        >
          {HOME.quote.body[lang]}
        </PullQuote>
      </section>

      {/* 03 · TIMELINE */}
      <section
        id="about-preview"
        className="container-portfolio border-t border-line py-20 md:py-28"
      >
        <SectionHead
          label={HOME.timeline.label[lang]}
          title={<HighlightTitle {...HOME.timeline.title[lang]} />}
          className="mb-12"
        />
        <Timeline items={timelineItems} />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
