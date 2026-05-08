import type { LHighlight, L, LArray } from '@/lib/t';
import type { Lang } from '@/lib/use-lang';

/**
 * Copy del Home (/) — bilingüe ES/EN.
 *
 * Cada string es un par { es, en }. El page resuelve el idioma via useLang().
 */

interface HomeWorkCard {
  href: string;
  span?: 6 | 12;
  featured?: boolean;
  meta: {
    es: readonly string[];
    en: readonly string[];
  };
  title: L;
  description: L;
  image?: string;
  imageAlt?: L;
}

interface HomeTimelineItem {
  year: L;
  title: L;
  description: L;
  milestone?: boolean;
}

interface HomeMetric {
  label: L;
  value: string;
  unit?: L;
}

export interface HomeContent {
  hero: {
    eyebrow: L;
    title: LHighlight;
    sub: L;
    chips: LArray;
  };
  work: {
    label: L;
    title: LHighlight;
    cards: readonly HomeWorkCard[];
  };
  snapshot: {
    label: L;
    metrics: readonly HomeMetric[];
  };
  quote: {
    body: L;
    /** Las palabras a resaltar en gradiente, una por idioma. */
    highlight: { es: readonly string[]; en: readonly string[] };
    attribution: L;
  };
  timeline: {
    label: L;
    title: LHighlight;
    items: readonly HomeTimelineItem[];
  };
  viewAllProjects: L;
}

export const HOME: HomeContent = {
  // ─── HERO ─────────────────────────────────────────────
  hero: {
    eyebrow: {
      es: 'Digital Product Designer · BA/Product Owner',
      en: 'Digital Product Designer · BA/Product Owner',
    },
    title: {
      es: {
        pre: 'Pensamiento de Diseño Aplicado, ',
        highlight: 'del concepto a la realidad',
        post: ', pasando por diseño y estrategia de producto Digital.',
      },
      en: {
        pre: 'Applied Design Thinking, ',
        highlight: 'from concept to reality',
        post: ', through digital product design and strategy.',
      },
    },
    sub: {
      es: 'Santiago Mejía, diseñador industrial de profesión y especializado en UX/UI y con experiencia como dueño de producto de la App Homecenter y Constructor, retail líder en el mejoramiento del hogar y la construcción en Colombia.',
      en: 'Santiago Mejía — industrial designer by training, specialized in UX/UI and Product Owner of the Homecenter & Constructor app, the leading retailer in home improvement and construction in Colombia.',
    },
    chips: {
      es: [
        'BA/PO para Homecenter Sodimac Co',
        'Diseñador UX/UI',
        'Asesor en innovación',
      ],
      en: [
        'BA/PO at Homecenter Sodimac Co',
        'UX/UI Designer',
        'Innovation Consultant',
      ],
    },
  },

  // ─── 01 · SELECTED WORK ───────────────────────────────
  work: {
    label: {
      es: 'Proyectos destacados',
      en: 'Selected work',
    },
    title: {
      es: {
        pre: 'Mi experiencia marca el paso de ',
        highlight:
          'Asesor en innovación → Diseñador UX/UI → Líder de Diseño → BA/PO de App Homecenter',
        post: '.',
      },
      en: {
        pre: 'My career arc: ',
        highlight:
          'Innovation Consultant → UX/UI Designer → Design Lead → BA/PO of the Homecenter App',
        post: '.',
      },
    },
    cards: [
      {
        href: '/work/homecenter',
        featured: true,
        span: 12,
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
        image: '/work/homecenter.jpg',
        imageAlt: {
          es: 'App Homecenter y Constructor — pantallas rediseñadas con nueva tecnología.',
          en: 'Homecenter & Constructor App — redesigned screens on new tech stack.',
        },
      },
      {
        href: '/work/pantallas-tienda',
        span: 6,
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
        image: '/work/pantallas-tienda.jpg',
        imageAlt: {
          es: 'Pantallas digitales de venta dentro de las tiendas Homecenter y Constructor.',
          en: 'Digital sales screens inside Homecenter and Constructor stores.',
        },
      },
      {
        href: '/work/store-in-store',
        span: 6,
        meta: {
          es: ['2022 → 2024', 'UX/UI Designer', 'Sodimac'],
          en: ['2022 → 2024', 'UX/UI Designer', 'Sodimac'],
        },
        title: {
          es: 'Store in Store Web',
          en: 'Store in Store Web',
        },
        description: {
          es: 'Conceptualización, ideación y construcción multimarca bajo experiencia Web de Homecenter y Constructor.',
          en: 'Multi-brand concept, ideation and build under the Homecenter and Constructor Web experience.',
        },
        image: '/work/store-in-store.jpg',
        imageAlt: {
          es: 'Store in Store — sistema multimarca dentro del ecosistema digital de Homecenter.',
          en: 'Store in Store — multi-brand system inside the Homecenter digital ecosystem.',
        },
      },
      {
        href: '/work/asistentes-compra',
        span: 12,
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
        image: '/work/asistentes-compra.jpg',
        imageAlt: {
          es: 'Asistentes de compra digital — flujos de acompañamiento para proyectos complejos.',
          en: 'Digital shopping assistants — guided flows for complex projects.',
        },
      },
      {
        href: '/work/dartstation',
        span: 6,
        meta: {
          es: ['2022', 'UX/UI Designer', 'Co-autoría'],
          en: ['2022', 'UX/UI Designer', 'Co-authorship'],
        },
        title: {
          es: 'DartStation',
          en: 'DartStation',
        },
        description: {
          es: 'E-commerce e identidad gráfica para una marquetería y galería de cuadros en Barranquilla. Co-autoría con Daniela Salcedo Mejía.',
          en: 'E-commerce and visual identity for a framing shop and art gallery in Barranquilla. Co-authored with Daniela Salcedo Mejía.',
        },
        image: '/work/dartstation/hero.jpg',
        imageAlt: {
          es: 'DartStation — marquetería y galería de cuadros en Barranquilla.',
          en: 'DartStation — framing shop and art gallery in Barranquilla.',
        },
      },
      {
        href: '/work/leclop',
        span: 6,
        meta: {
          es: ['2021', 'Jefe de diseño', 'Co founder', 'LeClop'],
          en: ['2021', 'Design Lead', 'Co-founder', 'LeClop'],
        },
        title: {
          es: 'Empresa de eventos en Bogotá y Manizales, Col.',
          en: 'Events company in Bogotá and Manizales, Colombia',
        },
        description: {
          es: 'Jefe de diseño y co fundador de empresa de eventos.',
          en: 'Design Lead and co-founder of an events company.',
        },
        image: '/work/leclop.jpg',
        imageAlt: {
          es: 'LeClop — identidad y experiencia digital de la marca de eventos.',
          en: 'LeClop — identity and digital experience for the events brand.',
        },
      },
    ],
  },

  // ─── 02 · SNAPSHOT ────────────────────────────────────
  snapshot: {
    label: { es: 'Vistazo general', en: 'Snapshot' },
    metrics: [
      {
        label: { es: 'Asesor en Innovación', en: 'Innovation Consultant' },
        value: '2',
        unit: { es: 'años', en: 'years' },
      },
      {
        label: { es: 'UX/UI', en: 'UX/UI' },
        value: '+5',
        unit: { es: 'años', en: 'years' },
      },
      {
        label: { es: 'BA/PO', en: 'BA/PO' },
        value: '2',
        unit: { es: 'años', en: 'years' },
      },
    ],
  },

  // ─── PULL QUOTE ───────────────────────────────────────
  quote: {
    body: {
      es: 'Desde la estrategia y conceptualización hasta la investigación, el diseño y la puesta en marcha de productos digitales.',
      en: 'From strategy and conceptualization to research, design and launch of digital products.',
    },
    highlight: {
      es: ['investigación, el diseño', 'productos digitales'],
      en: ['research, design', 'digital products'],
    },
    attribution: {
      es: 'Pensamiento de diseño aplicado en todas las fases de un proyecto.',
      en: 'Applied design thinking across every stage of a project.',
    },
  },

  // ─── 03 · TIMELINE ────────────────────────────────────
  timeline: {
    label: {
      es: '03 · Trayectoria Profesional',
      en: '03 · Career Path',
    },
    title: {
      es: {
        pre: 'Mi ',
        highlight: 'experiencia profesional',
        post: ', desde mis primeros pasos hasta la actualidad.',
      },
      en: {
        pre: 'My ',
        highlight: 'professional experience',
        post: ', from my first steps to today.',
      },
    },
    items: [
      {
        year: { es: 'Ene 2019 → 2022', en: 'Jan 2019 → 2022' },
        title: {
          es: 'Diseñador UX/UI Freelance',
          en: 'Freelance UX/UI Designer',
        },
        description: {
          es: 'Diseño web end-to-end, desde la conceptualización hasta la entrega final. Clientes: DartStation, Valssa Shop, TNR Life, Frosch, entre otros.',
          en: 'End-to-end web design, from concept to final delivery. Clients: DartStation, Valssa Shop, TNR Life, Frosch, among others.',
        },
      },
      {
        year: { es: 'Ene 2019 → Feb 2020', en: 'Jan 2019 → Feb 2020' },
        title: {
          es: 'Co-founder & Jefe de Diseño · LeClop SAS',
          en: 'Co-founder & Design Lead · LeClop SAS',
        },
        description: {
          es: 'Diseño gráfico y UX/UI para la marca de eventos con presencia en Bogotá D.C. y Manizales. Construcción de identidad y experiencia digital desde cero.',
          en: 'Graphic and UX/UI design for the events brand operating in Bogotá D.C. and Manizales. Brand identity and digital experience built from scratch.',
        },
      },
      {
        year: { es: 'Jul 2021 → Sep 2022', en: 'Jul 2021 → Sep 2022' },
        title: {
          es: 'Asesor en Innovación · Fisheye SA',
          en: 'Innovation Consultant · Fisheye SA',
        },
        description: {
          es: 'Acompañamiento a empresas de múltiples sectores en procesos de innovación. Participación en Innovalab de la Cámara de Comercio de Bogotá.',
          en: 'Innovation advisory for companies across multiple sectors. Active in Innovalab at the Bogotá Chamber of Commerce.',
        },
      },
      {
        year: { es: 'Sep 2022 → Nov 2023', en: 'Sep 2022 → Nov 2023' },
        title: {
          es: 'Diseñador UX/UI Senior · Homecenter Sodimac',
          en: 'Senior UX/UI Designer · Homecenter Sodimac',
        },
        description: {
          es: 'Responsable del diseño y evolución de Pantallas Digitales en Tienda, Asistentes de Compra y Store in Store. Primer contacto con productos digitales a escala retail.',
          en: 'Lead designer for In-store Digital Screens, Shopping Assistants and Store in Store. First experience with retail-scale digital products.',
        },
      },
      {
        year: { es: 'Nov 2023 → Jul 2024', en: 'Nov 2023 → Jul 2024' },
        title: {
          es: 'Líder de Diseño UX/UI · App Homecenter y Constructor',
          en: 'UX/UI Design Lead · Homecenter & Constructor App',
        },
        description: {
          es: 'A cargo de un equipo de 5 diseñadores. Investigación, conceptualización y rediseño integral de la experiencia end-to-end de la app.',
          en: 'Led a team of 5 designers. Research, conceptualization and full redesign of the end-to-end app experience.',
        },
      },
      {
        year: { es: 'Jul 2024 → Jun 2025', en: 'Jul 2024 → Jun 2025' },
        title: {
          es: 'BA / Product Owner · App Homecenter y Constructor',
          en: 'BA / Product Owner · Homecenter & Constructor App',
        },
        description: {
          es: 'Transición al rol de PO del producto que venía liderando como diseñador. Foco en cerrar el rediseño, definir el backlog y preparar el lanzamiento de la nueva app.',
          en: 'Transition to Product Owner of the same product I had been leading as a designer. Focus on closing the redesign, defining the backlog and preparing the launch of the new app.',
        },
      },
      {
        year: { es: 'Jun 2025 → actual', en: 'Jun 2025 → present' },
        title: {
          es: 'BA / Product Owner · App Homecenter y Constructor',
          en: 'BA / Product Owner · Homecenter & Constructor App',
        },
        description: {
          es: 'Lanzamiento de la nueva App, completamente rediseñada y sobre una nueva base técnica. Hoy encargado de su backlog, evolución y mantenimiento.',
          en: 'Launch of the new App — fully redesigned on a new tech base. Currently in charge of backlog, evolution and maintenance.',
        },
        milestone: true,
      },
    ],
  },

  viewAllProjects: {
    es: 'Ver todos los proyectos',
    en: 'View all projects',
  },
};

/** Helper: resolve home cards into the active language as plain shape for WorkCard. */
export function resolveHomeCards(lang: Lang) {
  return HOME.work.cards.map((c) => ({
    href: c.href,
    span: c.span,
    featured: c.featured,
    meta: c.meta[lang],
    title: c.title[lang],
    description: c.description[lang],
    image: c.image,
    imageAlt: c.imageAlt?.[lang],
  }));
}
