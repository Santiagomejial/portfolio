import type { CaseContent } from './types';

/**
 * Contenido del case — Asistentes de compra digital.
 * Herramienta interna para asesores en tienda Sodimac.
 *
 * Editar este archivo equivale a editar la página /work/asistentes-compra.
 * Estructura espejo de Pantallas / Store in Store — sin sec Proceso ni
 * Aprendizaje. Los bloques Funcionalidades, Galería e Intervención de diseño
 * se renderizan en el page.
 */
export const CASE_ASISTENTES_COMPRA: CaseContent = {
  // ─── HERO ─────────────────────────────────────────────
  hero: {
    breadcrumb: { label: 'Volver', fallbackHref: '/work' },
    caseCounter: 'Caso 04',
    title: {
      pre: 'Asistentes de ',
      highlight: 'compra digital',
    },
    sub: 'Herramienta interna para asesores en tienda que acelera la búsqueda de producto, la cotización y el cierre de venta asistida.',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer' },
      { label: 'Periodo', value: '2022 → 2024' },
      { label: 'Alcance', value: 'Herramienta interna' },
    ],
    // heroImage: pendiente
  },

  // ─── SECTIONS ─────────────────────────────────────────
  sections: [
    {
      number: '01',
      label: 'Contexto',
      title:
        'El asesor es el punto de mayor conversión — y el más fricciónado.',
      body: [
        <p key="1">
          Mientras los kioscos resolvían consultas rápidas, el asesor seguía
          cerrando las ventas complejas: proyectos grandes, combos, entregas
          a obra, pagos mixtos. Pero sus herramientas seguían siendo las
          mismas de hace 15 años.
        </p>,
      ],
    },
    {
      number: '02',
      label: 'Problema',
      title: 'Procesos manuales, cotizaciones lentas, cierre desordenado.',
      body: [
        <p key="1">
          El asesor saltaba entre sistemas para consultar stock, generar
          cotización, aplicar descuentos y registrar venta. Cada salto era un
          punto de caída: el cliente esperaba, el asesor improvisaba, la venta
          se enfriaba.
        </p>,
      ],
    },
    // Sección 03 (Proceso) eliminada — el bloque entre Problema y Decisiones
    // se reemplaza por las 4 FeatureCards renderizadas en el page
    // (FeaturesGrid).
    {
      number: '03',
      label: 'Decisiones',
      title: 'Tablet-first, offline-first, compacto.',
      body: [
        <p key="1">
          La herramienta vive en tablet (formato natural del asesor en piso),
          funciona offline para zonas con baja conectividad, y cada flujo se
          reduce a los pasos mínimos viables. Nada más — cada input extra es
          un segundo que el cliente espera.
        </p>,
      ],
    },
    {
      number: '04',
      label: 'Solución',
      title: 'Cotización a cierre en un solo flujo.',
      body: [
        <p key="1">
          Consulta de stock, armado de carrito, aplicación de descuentos,
          cotización imprimible y cierre de venta en una sola pantalla
          continua. El asesor no pierde el hilo, el cliente no pierde la
          paciencia.
        </p>,
      ],
    },
    {
      number: '05',
      label: 'Impacto',
      title: 'Cierre más rápido y menos fricción operativa.',
      body: [
        <p key="1">
          Los asesores cerraron ventas en menos tiempo y con menos saltos
          entre sistemas. La herramienta se volvió parte de su método
          cotidiano, no una capa más que tolerar.
        </p>,
      ],
    },
    // Sección 06 (Aprendizaje) eliminada — el cierre del case son 3
    // ilustraciones pequeñas que resumen la intervención de diseño,
    // renderizadas en el page (DesignSummaryStrip).
  ],

  // ─── NAV ──────────────────────────────────────────────
  // Cap 01: Homecenter → Pantallas → Store in Store → Asistentes → DartStation
  nav: {
    prev: { href: '/work/store-in-store', title: 'Store in Store Web' },
    next: { href: '/work/dartstation', title: 'DartStation' },
  },
};
