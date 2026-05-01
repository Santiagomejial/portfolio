import type {
  HighlightTitle,
  MetricContent,
  TimelineItemContent,
  WorkCardContent,
} from './types';

/**
 * Copy del Home (/).
 *
 * Todo el contenido textual de la home vive aquí — editar este archivo
 * es equivalente a editar el sitio. El componente app/page.tsx solo
 * compone layout; el texto se lee desde aquí.
 *
 * Convenciones:
 * - Strings simples cuando no hay resalte (gradiente).
 * - HighlightTitle { pre, highlight, post } cuando el h1/h2/h3 lleva gradiente.
 * - Arrays tipados para cards/metrics/timeline.
 */
export const HOME = {
  // ─── HERO ─────────────────────────────────────────────
  hero: {
    eyebrow: 'Digital Product Designer · BA/Product Owner',
    title: {
      pre: 'Pensamiento de Diseño Aplicado, ',
      highlight: 'del concepto a la realidad',
      post: ', pasando por diseño y estrategia de producto Digital.',
    } satisfies HighlightTitle,
    sub: 'Santiago Mejía, diseñador industrial de profesión y especializado en UX/UI y con experiencia como dueño de producto de la App Homecenter y Constructor, retail líder en el mejoramiento del hogar y la construcción en Colombia.',
    chips: [
      'BA/PO para Homecenter Sodimac Co',
      'Diseñador UX/UI',
      'Asesor en innovación',
    ],
  },

  // ─── 01 · SELECTED WORK ───────────────────────────────
  work: {
    label: 'Proyectos destacados',
    title: {
      pre: 'Mi experiencia marca el paso de ',
      highlight: 'Asesor en innovación → Diseñador UX/UI → Líder de Diseño → BA/PO de App Homecenter',
      post: '.',
    } satisfies HighlightTitle,
    cards: [
      {
        href: '/work/homecenter',
        featured: true,
        span: 12,
        meta: ['2024 → Hoy', 'UX Lead → BA/Product Owner', 'Sodimac'],
        title: 'App Homecenter y Constructor',
        description:
          'Del diseño al manejo del producto. Rediseño completo y estructurado, nueva construcción front y su evolución e iteración como PO.',
        image: '/work/homecenter.jpg',
        imageAlt:
          'App Homecenter y Constructor — pantallas rediseñadas en Flutter.',
      },
      {
        href: '/work/kioscos-digitales',
        span: 6,
        meta: ['2022 → 2024', 'UX/UI Designer', 'Sodimac'],
        title: 'Pantallas digitales en tienda',
        description:
          'Evolución UX del canal de venta digital en las tiendas Homecenter y Constructor.',
        image: '/work/pantallas-tienda.jpg',
        imageAlt:
          'Pantallas digitales de venta dentro de las tiendas Homecenter y Constructor.',
      },
      {
        href: '/work/store-in-store',
        span: 6,
        meta: ['2022 → 2024', 'UX/UI Designer', 'Sodimac'],
        title: 'Store in Store Web',
        description:
          'Conceptualización, ideación y construcción multimarca bajo experiencia Web de Homecenter y Constructor.',
        image: '/work/store-in-store.jpg',
        imageAlt:
          'Store in Store — sistema multimarca dentro del ecosistema digital de Homecenter.',
      },
      {
        href: '/work/asistentes-compra',
        span: 12,
        meta: ['2022 → 2024', 'UX/UI Designer', 'Sodimac'],
        title: 'Asistentes de compra digital',
        description:
          'Creación de flujos de asistencia a compras de productos complejos o proyectos de hogar y construcción.',
        image: '/work/asistentes-compra.jpg',
        imageAlt:
          'Asistentes de compra digital — flujos de acompañamiento para proyectos complejos.',
      },
      {
        href: '/work/dartstation',
        span: 6,
        meta: ['2020 → 2022', 'Asesor Innovación', 'Fisheye SA'],
        title: 'Asesor en innovación',
        description:
          'Desarrollo para empresas y gestores en Bogotá D.C.',
        image: '/work/asesor-innovacion.jpg',
        imageAlt:
          'Asesoría en innovación para empresas — Fisheye SA, Bogotá.',
      },
      {
        href: '/work/leclop',
        span: 6,
        meta: ['2021', 'Jefe de diseño', 'Co founder', 'LeClop'],
        title: 'Empresa de eventos en Bogotá y Manizales, Col.',
        description:
          'Jefe de diseño y co fundador de empresa de eventos.',
        image: '/work/leclop.jpg',
        imageAlt:
          'LeClop — identidad y experiencia digital de la marca de eventos.',
      },
    ] satisfies WorkCardContent[],
  },

  // ─── 02 · SNAPSHOT ────────────────────────────────────
  snapshot: {
    label: 'Vistazo general',
    metrics: [
      { label: 'Asesor en Innovación', value: '2', unit: 'años' },
      { label: 'UX/UI', value: '+5', unit: 'años' },
      { label: 'BA/PO', value: '2', unit: 'años' },
    ] satisfies MetricContent[],
  },

  // ─── PULL QUOTE ───────────────────────────────────────
  quote: {
    body: 'Desde la estrategia y conceptualización hasta la investigación, el diseño y la puesta en marcha de productos digitales.',
    highlight: ['investigación, el diseño', 'productos digitales'],
    attribution: 'Pensamiento de diseño aplicado en todas las fases de un proyecto.',
  },

  // ─── 03 · TIMELINE ────────────────────────────────────
  timeline: {
    label: '03 · Trayectoria Profesional',
    title: {
      pre: 'Mi ',
      highlight: 'experiencia profesional',
      post: ', desde mis primeros pasos hasta la actualidad.',
    } satisfies HighlightTitle,
    items: [
      {
        year: 'Ene 2019 → 2022',
        title: 'Diseñador UX/UI Freelance',
        description:
          'Diseño web end-to-end, desde la conceptualización hasta la entrega final. Clientes: DartStation, Valssa Shop, TNR Life, Frosch, entre otros.',
      },
      {
        year: 'Ene 2019 → Feb 2020',
        title: 'Co-founder & Jefe de Diseño · LeClop SAS',
        description:
          'Diseño gráfico y UX/UI para la marca de eventos con presencia en Bogotá D.C. y Manizales. Construcción de identidad y experiencia digital desde cero.',
      },
      {
        year: 'Jul 2021 → Sep 2022',
        title: 'Asesor en Innovación · Fisheye SA',
        description:
          'Acompañamiento a empresas de múltiples sectores en procesos de innovación. Participación en Innovalab de la Cámara de Comercio de Bogotá.',
      },
      {
        year: 'Sep 2022 → Nov 2023',
        title: 'Diseñador UX/UI Senior · Homecenter Sodimac',
        description:
          'Responsable del diseño y evolución de Pantallas Digitales en Tienda, Asistentes de Compra y Store in Store. Primer contacto con productos digitales a escala retail.',
      },
      {
        year: 'Nov 2023 → Jul 2024',
        title: 'Líder de Diseño UX/UI · App Homecenter y Constructor',
        description:
          'A cargo de un equipo de 5 diseñadores. Investigación, conceptualización y rediseño integral de la experiencia end-to-end de la app.',
      },
      {
        year: 'Jul 2024 → Jun 2025',
        title: 'BA / Product Owner · App Homecenter y Constructor',
        description:
          'Transición al rol de PO del producto que venía liderando como diseñador. Foco en cerrar el rediseño, definir el backlog y preparar el lanzamiento de la nueva app.',
      },
      {
        year: 'Jun 2025 → actual',
        title: 'BA / Product Owner · App Homecenter y Constructor',
        description:
          'Lanzamiento de la nueva App, completamente rediseñada y sobre una nueva base técnica. Hoy encargado de su backlog, evolución y mantenimiento.',
        milestone: true,
      },
    ] satisfies TimelineItemContent[],
  },

  // ─── CTA ──────────────────────────────────────────────
  // Eliminado: el cierre de la página ahora vive en <Footer />, que absorbió
  // el rol de llamada a contacto en estilo manifiesto.
} as const;
