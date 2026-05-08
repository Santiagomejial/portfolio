'use client';

import Image from 'next/image';
import {
  Eyebrow,
  SectionHead,
  ChipRow,
  PageHero,
  CaseSection,
  Footer,
  Timeline,
  HighlightTitle,
  type TimelineItem,
} from '@/components';
import { HOME } from '@/content/home';
import { useLang } from '@/lib/use-lang';

const T = {
  hero: {
    eyebrow: { es: 'Sobre mí', en: 'About me' },
    title: {
      es: { soy: 'Soy Santiago,', diseñadorIndustrial: 'Diseñador industrial', y: 'y' },
      en: { soy: "I'm Santiago,", diseñadorIndustrial: 'Industrial Designer', y: 'and' },
    },
    chips: {
      es: [
        'Colombiano',
        'Diseñador UX/UI',
        'Digital Product Owner',
        'Investigación UX',
        'Design systems',
        'Gestión de proyectos',
      ],
      en: [
        'Colombian',
        'UX/UI Designer',
        'Digital Product Owner',
        'UX Research',
        'Design systems',
        'Project Management',
      ],
    },
    portraitAlt: {
      es: 'Santiago Mejía L. — retrato',
      en: 'Santiago Mejía L. — portrait',
    },
  },
  resumen: {
    label: { es: '01 · Resumen', en: '01 · Summary' },
    body: {
      es: 'Product Owner y diseñador UX / UI con más de cuatro años impulsando transformación digital en retail y servicios. Diseñé y lideré el lanzamiento de la App Homecenter — canal móvil de la empresa líder en mejoramiento del hogar en Colombia. Esta doble perspectiva diseñador → PO me permite materializar productos que responden al usuario y al negocio simultáneamente, traduciendo necesidades complejas en soluciones rentables. Mi rol actual lidera la estrategia del canal digital con impacto directo en ventas y conversión.',
      en: 'Product Owner and UX/UI designer with over four years driving digital transformation in retail and services. I designed and led the launch of the Homecenter App — the mobile channel of the leading home improvement retailer in Colombia. This dual designer → PO perspective lets me materialize products that respond to user and business needs simultaneously, translating complex requirements into profitable solutions. My current role leads the digital channel strategy with direct impact on sales and conversion.',
    },
  },
  skills: {
    label: { es: '02 · Habilidades', en: '02 · Skills' },
    title: {
      es: 'Herramientas y ámbitos donde me muevo bien.',
      en: 'Tools and areas where I move with ease.',
    },
    poBA: { es: 'Product Owner / BA', en: 'Product Owner / BA' },
    poBAList: {
      es: [
        'Gestión de backlog y priorización',
        'Definición y escritura de historias de usuario',
        'KPIs de retail y análisis de métricas',
        'Refinamiento y sprint planning',
        'Stakeholder management',
      ],
      en: [
        'Backlog management and prioritization',
        'User story definition and writing',
        'Retail KPIs and metrics analysis',
        'Refinement and sprint planning',
        'Stakeholder management',
      ],
    },
    productDesign: { es: 'Product Design / UX · UI', en: 'Product Design / UX · UI' },
    productDesignList: {
      es: [
        'Research y síntesis',
        'Arquitectura de información',
        'Design systems y componentes',
        'Prototipado e interacción',
        'UX writing y micro-copy',
      ],
      en: [
        'Research and synthesis',
        'Information architecture',
        'Design systems and components',
        'Prototyping and interaction',
        'UX writing and micro-copy',
      ],
    },
    otras: { es: 'Otras', en: 'Other' },
    otrasList: {
      es: [
        'Figma · FigJam',
        'Azure · OneClick',
        'Adobe Creative Suite',
        'Claude · Claude Design',
        'Gemini Suite',
      ],
      en: [
        'Figma · FigJam',
        'Azure · OneClick',
        'Adobe Creative Suite',
        'Claude · Claude Design',
        'Gemini Suite',
      ],
    },
  },
  trajectory: {
    label: { es: '03 · Trayectoria Profesional', en: '03 · Career Path' },
  },
  outside: {
    label: { es: 'Fuera del producto', en: 'Outside of product' },
    title: {
      es: 'Lo que me mantiene curioso.',
      en: 'What keeps me curious.',
    },
    body1: {
      es: 'Me interesa profundamente el diseño UX/UI, las nuevas tecnologías y estar al tanto de nuevas herramientas que permitan más en pensar que en hacer.',
      en: "I'm deeply interested in UX/UI design, new technologies and staying on top of new tools that prioritize thinking over doing.",
    },
    body2: {
      es: 'Me encanta conocer culturas, su música, sus sabores y su forma de ver el mundo, así como el fútbol y el arte plástico.',
      en: 'I love discovering cultures — their music, flavors and worldviews — alongside football and visual arts.',
    },
  },
};

export default function AboutPage() {
  const { lang } = useLang();

  // Resolver timeline desde Home (single source of truth)
  const timelineItems: TimelineItem[] = HOME.timeline.items.map((it) => ({
    year: it.year[lang],
    title: it.title[lang],
    description: it.description[lang],
    milestone: it.milestone,
  }));

  const titleNode = (
    <>
      {T.hero.title[lang].soy}{' '}
      <span className="text-gradient">{T.hero.title[lang].diseñadorIndustrial}</span>,{' '}
      <span className="text-gradient">UX/UI</span> {T.hero.title[lang].y}{' '}
      <span className="text-gradient">BA/Product Owner</span>.
    </>
  );

  return (
    <>
      {/* HERO */}
      <PageHero
        eyebrow={T.hero.eyebrow[lang]}
        titleClassName="display-lg"
        title={titleNode}
        media={
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-line">
            <Image
              src="/portrait.jpg"
              alt={T.hero.portraitAlt[lang]}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 33vw, 100vw"
              priority
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-brand-gradient opacity-25 mix-blend-overlay"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg/40 to-transparent"
            />
          </div>
        }
      >
        <ChipRow items={[...T.hero.chips[lang]]} />
      </PageHero>

      {/* 01 — RESUMEN */}
      <section id="resumen" className="border-t border-line py-12 md:py-16">
        <div className="container-portfolio">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-3">
              <div className="sticky top-28">
                <div className="text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
                  {T.resumen.label[lang]}
                </div>
              </div>
            </div>
            <div className="md:col-span-9">
              <p className="text-body-lg leading-relaxed text-ink-soft">
                {T.resumen.body[lang]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="container-portfolio border-t border-line py-20 md:py-28"
      >
        <SectionHead
          label={T.skills.label[lang]}
          title={T.skills.title[lang]}
          className="mb-12"
        />
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Eyebrow className="mb-4">{T.skills.poBA[lang]}</Eyebrow>
            <ul className="space-y-2 text-body-lg text-ink-soft">
              {T.skills.poBAList[lang].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow className="mb-4">{T.skills.productDesign[lang]}</Eyebrow>
            <ul className="space-y-2 text-body-lg text-ink-soft">
              {T.skills.productDesignList[lang].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow className="mb-4">{T.skills.otras[lang]}</Eyebrow>
            <ul className="space-y-2 text-body-lg text-ink-soft">
              {T.skills.otrasList[lang].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TRAJECTORY */}
      <section
        id="trajectory"
        className="container-portfolio border-t border-line py-20 md:py-28"
      >
        <SectionHead
          label={T.trajectory.label[lang]}
          title={<HighlightTitle {...HOME.timeline.title[lang]} />}
          className="mb-12"
        />
        <Timeline items={timelineItems} />
      </section>

      {/* FUERA DEL PRODUCTO */}
      <CaseSection
        number="04"
        label={T.outside.label[lang]}
        title={T.outside.title[lang]}
      >
        <p>{T.outside.body1[lang]}</p>
        <p>{T.outside.body2[lang]}</p>
      </CaseSection>

      <Footer />
    </>
  );
}
