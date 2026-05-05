import type { CaseContent } from './types';

/**
 * Contenido del case — Store in Store, Constructor, Petcenter, Carcenter y al
 * por mayor. Sistema multi-marca dentro del ecosistema digital de Sodimac.
 *
 * Editar este archivo equivale a editar la página /work/store-in-store.
 * Estructura espejo de Pantallas digitales en tienda — sin sec Proceso ni
 * Aprendizaje. Los bloques Funcionalidades, Galería e Intervención de diseño
 * se renderizan en el page.
 */
export const CASE_STORE_IN_STORE: CaseContent = {
  // ─── HERO ─────────────────────────────────────────────
  hero: {
    breadcrumb: { label: 'Volver', fallbackHref: '/work' },
    caseCounter: 'Caso 03',
    title: {
      pre: 'Store in Store. ',
      highlight: 'Constructor, Petcenter, Carcenter y al por mayor',
    },
    sub: 'Sistema digital que permite a las sub-marcas Sodimac convivir dentro del mismo ecosistema sin romper la coherencia del negocio principal.',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer líder' },
      { label: 'Periodo', value: 'Nov 2023 → Jun 2024' },
      {
        label: 'Alcance',
        value: 'Sistema multimarca · componetización global',
      },
    ],
    heroImage: {
      src: '/work/store-in-store/hero.jpg',
      alt: 'Store in Store — hero del case multi-marca.',
    },
  },

  // ─── SECTIONS ─────────────────────────────────────────
  sections: [
    {
      number: '01',
      label: 'Contexto',
      title: 'Sodimac no es una sola marca: es un conjunto.',
      body: [
        <p key="1">
          La store al por mayor, Constructor, Petcenter y Carcenter operan
          bajo el paraguas de Sodimac pero con identidades, audiencias y
          propuestas de valor distintas. En físico cohabitan en la misma
          tienda o tienen espacios propios — la pregunta era cómo replicar
          esa coexistencia en digital sin fragmentar la experiencia del
          usuario al transitar entre marcas.
        </p>,
      ],
    },
    {
      number: '02',
      label: 'Problema',
      title: 'Un usuario, múltiples marcas, un solo journey.',
      body: [
        <p key="1">
          Cada sub-marca debía sentirse parte de Homecenter pero atender a sus
          necesidades particulares. El desarrollo se hizo en web y web mobile,
          contemplando un journey de conversión claro y diferenciado por
          audiencia, pero apoyado en una base de componentes unificada. El
          alcance cubrió Homes, PLPs y PDPs.
        </p>,
      ],
    },
    // Sección 03 (Proceso) eliminada — el bloque entre Problema y Decisiones
    // se reemplaza por las 4 FeatureCards renderizadas en el page
    // (FeaturesGrid) con las funcionalidades clave del sistema multi-marca.
    {
      number: '03',
      label: 'Decisiones',
      title: 'Una base común, identidades distintas.',
      body: [
        <p key="1">
          Definimos una capa de navegación compartida — búsqueda, carrito,
          cuenta y paso al checkout — con un sistema que adapta color,
          tipografía y tono editorial por cada sub-marca: Constructor,
          Petcenter, Carcenter y la unidad al por mayor. Las pantallas de
          catálogo, PDP y promos viven dentro de cada marca, pero la capa
          transaccional es única.
        </p>,
      ],
    },
    {
      number: '04',
      label: 'Solución',
      title: 'Plantillas que viven y evolucionan con cada marca.',
      body: [
        <p key="1">
          Plantillas de componentes con administración y evolución determinada
          desde sus bases. Cada marca administra sus propias variantes para
          atender a su segmento de mercado y reforzar su identidad — sin
          perder la coherencia con el sistema base.
        </p>,
      ],
    },
    {
      number: '05',
      label: 'Impacto',
      title: 'Base para escalar la estrategia multi-marca.',
      body: [
        <p key="1">
          El sistema funcionó como base para integrar futuras extensiones de
          marca dentro del ecosistema sin tener que reconstruir
          infraestructura digital cada vez. Hoy sigue siendo el patrón de
          referencia interno.
        </p>,
      ],
    },
    // Sección 06 (Aprendizaje) eliminada — el cierre del case son 3
    // ilustraciones pequeñas que resumen la intervención de diseño,
    // renderizadas en el page (DesignSummaryStrip).
  ],

  // ─── NAV ──────────────────────────────────────────────
  // Cap 01: Homecenter → Pantallas → Store in Store → Asistentes
  nav: {
    prev: { href: '/work/pantallas-tienda', title: 'Pantallas digitales en tienda' },
    next: { href: '/work/asistentes-compra', title: 'Asistentes de compra digital' },
  },
};
