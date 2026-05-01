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
    sub: 'Santiago Mejía, diseñador industrial de profesión especializado en UX/UI y con experiencia como dueño de producto de la App Homecenter y Constructor, líder en Colombia de retail en el mejoramiento del hogar y la construcción.',
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
      },
      {
        href: '/work/kioscos-digitales',
        span: 6,
        meta: ['2022 → 2024', 'UX/UI Designer', 'Sodimac'],
        title: 'Pantallas digitales en tienda',
        description:
          'Evolución UX del canal de venta digital en las tiendas Homecenter y Constructor.',
      },
      {
        href: '/work/store-in-store',
        span: 6,
        meta: ['2022 → 2024', 'UX/UI Designer', 'Sodimac'],
        title: 'Store in Store Web',
        description:
          'Conceptualización, ideación y construcción multimarca bajo experiencia Web de Homecenter y Constructor.',
      },
      {
        href: '/work/asistentes-compra',
        span: 12,
        meta: ['2022 → 2024', 'UX/UI Designer', 'Sodimac'],
        title: 'Asistentes de compra digital',
        description:
          'Creación de flujos de asistencia a compras de productos complejos o proyectos de hogar y construcción.',
      },
      {
        href: '/work/dartstation',
        span: 6,
        meta: ['2020 → 2022', 'Asesor Innovación', 'Fisheye SA'],
        title: 'Asesor en innovación',
        description:
          'Desarrollo para empresas y gestores en Bogotá D.C.',
      },
      {
        href: '/work/leclop',
        span: 6,
        meta: ['2021', 'Jefe de diseño', 'Co founder', 'LeClop'],
        title: 'Empresa de eventos en Bogotá y Manizales, Col.',
        description:
          'Jefe de diseño y co fundador de empresa de eventos.',
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
    body: 'Desde la estrategia, conceptualización, investigación hasta el diseño, investigación y puesta en marcha de productos digitales.',
    highlight: 'puesta en marcha de productos digitales',
    attribution: '— Pensamiento de diseño aplicado en todas las fases de un proyecto.',
  },

  // ─── 03 · TIMELINE ────────────────────────────────────
  timeline: {
    label: '03 · Trayectoria',
    title: 'Un arco lineal: del diseño al producto.',
    items: [
      {
        year: '2021',
        title: 'Proyectos fundacionales',
        description:
          'DartStation y LeClop. Primera inmersión en UX/UI aplicado — del background de Diseño Industrial al producto digital.',
      },
      {
        year: '2022',
        title: 'UX Lead retail · Sodimac',
        description:
          'Kioscos Digitales y Asistentes de Compra. Diseño de experiencias híbridas tienda–digital para el retail de mejoramiento del hogar más grande del país.',
      },
      {
        year: '2024',
        title: 'Store in Store',
        description:
          'Petcenter, Carcenter y Constructor. Sistema multi-marca que convive dentro de un mismo ecosistema digital.',
      },
      {
        year: 'Sep 2024',
        title: 'UX Lead · App Homecenter',
        description:
          'A cargo de un equipo de 5 diseñadores. Rediseño integral de la experiencia end-to-end de la app.',
      },
      {
        year: 'Abr 2025',
        title: 'Release Flutter',
        description:
          'Migración completa a Flutter con la experiencia rediseñada. Hito técnico y de producto para el equipo.',
        milestone: true,
      },
      {
        year: 'Jul 2025',
        title: 'BA / Product Owner',
        description:
          'Transición a PO del producto que diseñé. Lidero un equipo de 6 y la evolución del backlog con foco en KPIs de retail.',
      },
    ] satisfies TimelineItemContent[],
  },

  // ─── CTA ──────────────────────────────────────────────
  cta: {
    title: {
      pre: '¿Construimos algo ',
      highlight: 'juntos',
      post: '?',
    } satisfies HighlightTitle,
    sub: 'Abierto a conversar sobre roles senior híbridos Product Owner + Product Designer. Remoto o en Colombia.',
  },
} as const;
