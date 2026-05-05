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
      { label: 'Rol', value: 'UX/UI Designer' },
      { label: 'Periodo', value: '2024' },
      { label: 'Alcance', value: 'Sistema multi-marca' },
    ],
    // heroImage: pendiente
  },

  // ─── SECTIONS ─────────────────────────────────────────
  sections: [
    {
      number: '01',
      label: 'Contexto',
      title: 'Sodimac no es una sola marca: es un conjunto.',
      body: [
        <p key="1">
          Constructor, Petcenter, Carcenter y la unidad de venta al por mayor
          operan bajo el paraguas de Sodimac pero con identidades, audiencias y
          propuestas de valor distintas. En físico cohabitan en la misma tienda
          o tienen espacios propios — la pregunta era cómo replicar esa
          coexistencia en digital sin que el usuario se sienta rebotado entre
          marcas desconectadas.
        </p>,
      ],
    },
    {
      number: '02',
      label: 'Problema',
      title: 'Un usuario, múltiples marcas, un solo journey.',
      body: [
        <p key="1">
          El riesgo era doble: si se unificaba todo bajo una sola identidad,
          cada marca perdía diferenciación; si se separaba en sitios o apps
          independientes, se fragmentaba el journey de compra y se perdía
          oportunidad de cross-sell entre las distintas líneas de negocio.
        </p>,
      ],
    },
    // Sección 03 (Proceso) eliminada — el bloque entre Problema y Decisiones
    // se reemplaza por las 4 FeatureCards renderizadas en el page
    // (FeaturesGrid) con las funcionalidades clave del sistema multi-marca.
    {
      number: '03',
      label: 'Decisiones',
      title: 'Una shell compartida, con theming por marca.',
      body: [
        <p key="1">
          Definimos una shell de navegación compartida (búsqueda, carrito,
          cuenta, checkout) con un sistema de theming que adapta color,
          tipografía y tono editorial por cada sub-marca. Las pantallas de
          catálogo, PDP y promos viven dentro de cada marca, pero la capa
          transaccional es única.
        </p>,
      ],
    },
    {
      number: '04',
      label: 'Solución',
      title: 'Un producto, varias identidades, cero fragmentación.',
      body: [
        <p key="1">
          El usuario navega entre Constructor, Petcenter, Carcenter y la unidad
          al por mayor como si caminara entre departamentos de una misma
          tienda. Cada marca conserva su personalidad; el sistema conserva su
          coherencia. Checkout, cuenta y loyalty funcionan transversalmente.
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
