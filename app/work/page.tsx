'use client';

import {
  SectionHead,
  ChipRow,
  PageHero,
  WorkCard,
  Footer,
  FoundationalCardsWithCarousel,
} from '@/components';
import { useLang } from '@/lib/use-lang';

const T = {
  hero: {
    eyebrow: { es: '6 casos, de 2019 a hoy.', en: '6 cases, from 2019 to today.' },
    titlePre: {
      es: 'Proyectos que cuentan un mismo caso: ',
      en: 'Projects that tell one story: ',
    },
    titleHL: {
      es: 'del diseño al producto',
      en: 'from design to product',
    },
    sub: {
      es: 'En 2 capítulos que cuentan mi historia laboral.',
      en: 'In 2 chapters that tell my professional story.',
    },
    chips: {
      es: ['Fundacionales 2019', 'UX/UI Homecenter', 'App Homecenter'],
      en: ['Foundational 2019', 'UX/UI Homecenter', 'Homecenter App'],
    },
  },
  ch1: {
    label: { es: 'Capítulo 01 · Homecenter Sodimac', en: 'Chapter 01 · Homecenter Sodimac' },
    titlePre: {
      es: 'Cuatro productos dentro del retail de ',
      en: 'Four products inside the largest ',
    },
    titleHL: {
      es: 'mejoramiento del hogar',
      en: 'home improvement',
    },
    titlePost: {
      es: ' más grande de Colombia.',
      en: ' retail in Colombia.',
    },
  },
  ch2: {
    label: { es: 'Capítulo 02 · Fundacionales', en: 'Chapter 02 · Foundational' },
    titleHL: { es: 'Primeros pasos', en: 'First steps' },
    titlePost: {
      es: ' y recopilación de otros proyectos…',
      en: ' and a collection of other projects…',
    },
  },
  cards: {
    homecenter: {
      meta: {
        es: ['2024 → Hoy', 'UX Lead → BA/Product Owner', 'Sodimac'],
        en: ['2024 → Now', 'UX Lead → BA/Product Owner', 'Sodimac'],
      },
      title: {
        es: 'App Homecenter y Constructor',
        en: 'Homecenter & Constructor App',
      },
      description: {
        es: 'Del diseño al manejo del producto. Rediseño completo y estructurado, nueva construcción front y su evolución e iteración como PO.',
        en: 'From design to product ownership. Full redesign, new front-end build and ongoing iteration as Product Owner.',
      },
      alt: {
        es: 'App Homecenter y Constructor — pantallas rediseñadas con nueva tecnología.',
        en: 'Homecenter & Constructor App — redesigned screens on new tech.',
      },
    },
    storeInStore: {
      meta: {
        es: ['2022 → 2024', 'UX/UI Designer', 'Sodimac'],
        en: ['2022 → 2024', 'UX/UI Designer', 'Sodimac'],
      },
      title: { es: 'Store in Store Web', en: 'Store in Store Web' },
      description: {
        es: 'Conceptualización, ideación y construcción multimarca bajo experiencia Web de Homecenter y Constructor.',
        en: 'Multi-brand concept, ideation and build under the Homecenter and Constructor Web experience.',
      },
      alt: {
        es: 'Store in Store — sistema multimarca dentro del ecosistema digital de Homecenter.',
        en: 'Store in Store — multi-brand system inside the Homecenter digital ecosystem.',
      },
    },
    pantallas: {
      meta: {
        es: ['2022 → 2024', 'UX/UI Designer', 'Sodimac'],
        en: ['2022 → 2024', 'UX/UI Designer', 'Sodimac'],
      },
      title: {
        es: 'Pantallas digitales en tienda',
        en: 'In-store digital screens',
      },
      description: {
        es: 'Evolución UX del canal de venta digital en las tiendas Homecenter y Constructor.',
        en: 'UX evolution of the digital sales channel inside Homecenter and Constructor stores.',
      },
      alt: {
        es: 'Pantallas digitales de venta dentro de las tiendas Homecenter y Constructor.',
        en: 'Digital sales screens inside Homecenter and Constructor stores.',
      },
    },
    asistentes: {
      meta: {
        es: ['2022 → 2024', 'UX/UI Designer', 'Sodimac'],
        en: ['2022 → 2024', 'UX/UI Designer', 'Sodimac'],
      },
      title: {
        es: 'Asistentes de compra digital',
        en: 'Digital shopping assistants',
      },
      description: {
        es: 'Creación de flujos de asistencia a compras de productos complejos o proyectos de hogar y construcción.',
        en: 'Guided flows for complex purchases — custom products and home & construction projects.',
      },
      alt: {
        es: 'Asistentes de compra digital — flujos de acompañamiento para proyectos complejos.',
        en: 'Digital shopping assistants — guided flows for complex projects.',
      },
    },
    leclop: {
      meta: {
        es: ['2021', 'Diseño gráfico', 'UX/UI Designer', 'Co founder'],
        en: ['2021', 'Graphic design', 'UX/UI Designer', 'Co-founder'],
      },
      title: { es: 'LeClop', en: 'LeClop' },
      description: {
        es: 'Ejercicio temprano de diseño de experiencias digitales. Research, arquitectura y UI en un mismo proyecto contenido.',
        en: 'Early exercise in digital experience design. Research, architecture and UI in a single contained project.',
      },
      alt: {
        es: 'LeClop — identidad y experiencia digital de la marca de eventos.',
        en: 'LeClop — identity and digital experience for the events brand.',
      },
    },
    dartstation: {
      meta: {
        es: ['2021', 'UX/UI Designer'],
        en: ['2021', 'UX/UI Designer'],
      },
      title: { es: 'DartStation', en: 'DartStation' },
      description: {
        es: 'Construcción de página web para marquetería y cuadros en la ciudad de Barranquilla, Colombia.',
        en: 'Website build for a framing shop and art gallery in Barranquilla, Colombia.',
      },
      alt: {
        es: 'DartStation — primer proyecto UX/UI end-to-end después de Diseño Industrial.',
        en: 'DartStation — first UX/UI end-to-end project after Industrial Design.',
      },
    },
  },
};

export default function WorkPage() {
  const { lang } = useLang();

  return (
    <>
      {/* HERO */}
      <PageHero
        eyebrow={T.hero.eyebrow[lang]}
        titleClassName="display-lg"
        title={
          <>
            {T.hero.titlePre[lang]}
            <span className="text-gradient">{T.hero.titleHL[lang]}</span>.
          </>
        }
        sub={T.hero.sub[lang]}
      >
        <ChipRow items={[...T.hero.chips[lang]]} />
      </PageHero>

      {/* CAPÍTULO 1 — HOMECENTER SODIMAC */}
      <section
        id="retail"
        className="container-portfolio border-t border-line py-20 md:py-28"
      >
        <SectionHead
          label={T.ch1.label[lang]}
          title={
            <>
              {T.ch1.titlePre[lang]}
              <span className="text-gradient">{T.ch1.titleHL[lang]}</span>
              {T.ch1.titlePost[lang]}
            </>
          }
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          <WorkCard
            href="/work/homecenter"
            featured
            className="md:col-span-12"
            meta={[...T.cards.homecenter.meta[lang]]}
            title={T.cards.homecenter.title[lang]}
            description={T.cards.homecenter.description[lang]}
            image="/work/homecenter.jpg"
            imageAlt={T.cards.homecenter.alt[lang]}
          />
          <WorkCard
            href="/work/store-in-store"
            className="md:col-span-12"
            meta={[...T.cards.storeInStore.meta[lang]]}
            title={T.cards.storeInStore.title[lang]}
            description={T.cards.storeInStore.description[lang]}
            image="/work/store-in-store.jpg"
            imageAlt={T.cards.storeInStore.alt[lang]}
          />
          <WorkCard
            href="/work/pantallas-tienda"
            className="md:col-span-6"
            meta={[...T.cards.pantallas.meta[lang]]}
            title={T.cards.pantallas.title[lang]}
            description={T.cards.pantallas.description[lang]}
            image="/work/pantallas-tienda.jpg"
            imageAlt={T.cards.pantallas.alt[lang]}
          />
          <WorkCard
            href="/work/asistentes-compra"
            className="md:col-span-6"
            meta={[...T.cards.asistentes.meta[lang]]}
            title={T.cards.asistentes.title[lang]}
            description={T.cards.asistentes.description[lang]}
            image="/work/asistentes-compra.jpg"
            imageAlt={T.cards.asistentes.alt[lang]}
          />
        </div>
      </section>

      {/* CAPÍTULO 2 — FUNDACIONALES */}
      <section
        id="foundational"
        className="container-portfolio border-t border-line py-20 md:py-28"
      >
        <SectionHead
          label={T.ch2.label[lang]}
          title={
            <>
              <span className="text-gradient">{T.ch2.titleHL[lang]}</span>
              {T.ch2.titlePost[lang]}
            </>
          }
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          <WorkCard
            href="/work/leclop"
            className="md:col-span-6"
            meta={[...T.cards.leclop.meta[lang]]}
            title={T.cards.leclop.title[lang]}
            description={T.cards.leclop.description[lang]}
            image="/work/leclop.jpg"
            imageAlt={T.cards.leclop.alt[lang]}
          />
          <WorkCard
            href="/work/dartstation"
            className="md:col-span-6"
            meta={[...T.cards.dartstation.meta[lang]]}
            title={T.cards.dartstation.title[lang]}
            description={T.cards.dartstation.description[lang]}
            image="/work/dartstation.jpg"
            imageAlt={T.cards.dartstation.alt[lang]}
          />
          <FoundationalCardsWithCarousel />
        </div>
      </section>

      <Footer />
    </>
  );
}
