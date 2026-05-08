import type { CaseContent } from './types';

const ES: CaseContent = {
  hero: {
    breadcrumb: { label: 'Volver', fallbackHref: '/work' },
    caseCounter: 'Caso 03',
    title: { pre: 'Store in Store. ', highlight: 'Constructor, Petcenter, Carcenter y al por mayor' },
    sub: 'Sistema digital que permite a las sub-marcas Sodimac convivir dentro del mismo ecosistema sin romper la coherencia del negocio principal.',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer líder' },
      { label: 'Periodo', value: 'Nov 2023 → Jun 2024' },
      { label: 'Alcance', value: 'Sistema multimarca · componetización global' },
    ],
    heroImage: { src: '/work/store-in-store/hero.jpg', alt: 'Store in Store — hero del case multi-marca.' },
  },
  sections: [
    {
      number: '01',
      label: 'Contexto',
      title: 'Sodimac no es una sola marca: es un conjunto.',
      body: [<p key="1">La store al por mayor, Constructor, Petcenter y Carcenter operan bajo el paraguas de Sodimac pero con identidades, audiencias y propuestas de valor distintas. En físico cohabitan en la misma tienda o tienen espacios propios — la pregunta era cómo replicar esa coexistencia en digital sin fragmentar la experiencia del usuario al transitar entre marcas.</p>],
    },
    {
      number: '02',
      label: 'Problema',
      title: 'Un usuario, múltiples marcas, un solo journey.',
      body: [<p key="1">Cada sub-marca debía sentirse parte de Homecenter pero atender a sus necesidades particulares. El desarrollo se hizo en web y web mobile, contemplando un journey de conversión claro y diferenciado por audiencia, pero apoyado en una base de componentes unificada. El alcance cubrió Homes, PLPs y PDPs.</p>],
    },
    {
      number: '03',
      label: 'Decisiones',
      title: 'Una base común, identidades distintas.',
      body: [<p key="1">Definimos una capa de navegación compartida — búsqueda, carrito, cuenta y paso al checkout — con un sistema que adapta color, tipografía y tono editorial por cada sub-marca: Constructor, Petcenter, Carcenter y la unidad al por mayor. Las pantallas de catálogo, PDP y promos viven dentro de cada marca, pero la capa transaccional es única.</p>],
    },
    {
      number: '04',
      label: 'Solución',
      title: 'Plantillas que viven y evolucionan con cada marca.',
      body: [<p key="1">Plantillas de componentes con administración y evolución determinada desde sus bases. Cada marca administra sus propias variantes para atender a su segmento de mercado y reforzar su identidad — sin perder la coherencia con el sistema base.</p>],
    },
    {
      number: '05',
      label: 'Impacto',
      title: 'Base para escalar la estrategia multi-marca.',
      body: [<p key="1">El sistema funcionó como base para integrar futuras extensiones de marca dentro del ecosistema sin tener que reconstruir infraestructura digital cada vez. Hoy sigue siendo el patrón de referencia interno.</p>],
    },
  ],
  nav: {
    prev: { href: '/work/pantallas-tienda', title: 'Pantallas digitales en tienda' },
    next: { href: '/work/asistentes-compra', title: 'Asistentes de compra digital' },
  },
};

const EN: CaseContent = {
  hero: {
    breadcrumb: { label: 'Back', fallbackHref: '/work' },
    caseCounter: 'Case 03',
    title: { pre: 'Store in Store. ', highlight: 'Constructor, Petcenter, Carcenter and Wholesale' },
    sub: 'Digital system that lets Sodimac sub-brands coexist inside the same ecosystem without breaking the coherence of the main business.',
    meta: [
      { label: 'Role', value: 'Lead UX/UI Designer' },
      { label: 'Period', value: 'Nov 2023 → Jun 2024' },
      { label: 'Scope', value: 'Multi-brand system · global componentization' },
    ],
    heroImage: { src: '/work/store-in-store/hero.jpg', alt: 'Store in Store — multi-brand case hero.' },
  },
  sections: [
    {
      number: '01',
      label: 'Context',
      title: "Sodimac isn't one brand: it's a set.",
      body: [<p key="1">The wholesale store, Constructor, Petcenter and Carcenter all operate under Sodimac&apos;s umbrella but with distinct identities, audiences and value propositions. Physically they cohabit the same store or have their own spaces — the question was how to replicate that coexistence digitally without fragmenting the user&apos;s experience as they move between brands.</p>],
    },
    {
      number: '02',
      label: 'Problem',
      title: 'One user, multiple brands, a single journey.',
      body: [<p key="1">Each sub-brand had to feel part of Homecenter while serving its specific needs. Development was done on web and mobile web, contemplating a clear conversion journey differentiated by audience but supported by a unified component base. Scope covered Homes, PLPs and PDPs.</p>],
    },
    {
      number: '03',
      label: 'Decisions',
      title: 'A common base, distinct identities.',
      body: [<p key="1">We defined a shared navigation layer — search, cart, account and step to checkout — with a system that adapts color, typography and editorial tone for each sub-brand: Constructor, Petcenter, Carcenter and the wholesale unit. Catalog, PDP and promo screens live inside each brand, but the transactional layer is unified.</p>],
    },
    {
      number: '04',
      label: 'Solution',
      title: 'Templates that live and evolve with each brand.',
      body: [<p key="1">Component templates with management and evolution determined from their foundations. Each brand manages its own variants to serve its market segment and reinforce its identity — without losing coherence with the base system.</p>],
    },
    {
      number: '05',
      label: 'Impact',
      title: 'Foundation to scale the multi-brand strategy.',
      body: [<p key="1">The system became the foundation to integrate future brand extensions inside the ecosystem without having to rebuild digital infrastructure each time. It remains the internal reference pattern today.</p>],
    },
  ],
  nav: {
    prev: { href: '/work/pantallas-tienda', title: 'In-store digital screens' },
    next: { href: '/work/asistentes-compra', title: 'Digital shopping assistants' },
  },
};

export const CASE_STORE_IN_STORE: { es: CaseContent; en: CaseContent } = { es: ES, en: EN };
