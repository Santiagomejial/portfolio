import type { CaseContent } from './types';

/**
 * Contenido del case — Pantallas digitales en tienda.
 * (Antes "Kioscos Digitales" — slug renombrado a /work/pantallas-tienda).
 *
 * Editar este archivo equivale a editar la página /work/pantallas-tienda.
 */
export const CASE_PANTALLAS_TIENDA: CaseContent = {
  // ─── HERO ─────────────────────────────────────────────
  hero: {
    breadcrumb: { label: 'Volver', fallbackHref: '/work' },
    caseCounter: 'Caso 02',
    title: {
      pre: 'Pantallas digitales ',
      highlight: 'en tienda',
    },
    sub: 'Sistema de pantallas interactivas dentro de las tiendas Homecenter para que los clientes puedan consultar stock, comprar productos con el catálogo digital y resolver dudas sin depender del asesor.',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer' },
      { label: 'Periodo', value: '2022 → 2024' },
      { label: 'Alcance', value: 'Experiencia tienda–digital' },
    ],
    heroImage: {
      src: '/work/pantallas-tienda/hero.jpg',
      alt: 'Pantallas digitales en tienda — hero del case.',
    },
  },

  // ─── SECTIONS ─────────────────────────────────────────
  sections: [
    {
      number: '01',
      label: 'Contexto',
      title: 'La tienda física + la experiencia digital.',
      body: [
        <p key="1">
          Las tiendas físicas y la experiencia digital tienen un punto de
          quiebre: el catálogo. En tiendas de gran superficie como Homecenter
          es imposible exhibir cada SKU disponible — el inventario digital es
          mucho mayor que el espacio físico de exhibición.
        </p>,
        <p key="2">
          Las pantallas digitales nacen para cerrar esa brecha. Se ubican en
          cada sección de cada tienda del país, donde los clientes se pueden
          autoasistir: consultar stock, generar órdenes, hacer cotizaciones o
          inspirarse con productos curados — imágenes editoriales y
          selecciones de expertos que no siempre están en el piso de venta.
        </p>,
      ],
    },
    {
      number: '02',
      label: 'Problema',
      title: 'Tres frentes que el proyecto tenía que resolver al mismo tiempo.',
      body: [
        <p key="1">
          <strong>Reducir los tiempos de atención del asesor.</strong> En picos
          de demanda los asesores no dan abasto: el cliente espera, la venta
          se enfría y la experiencia se deteriora. La pantalla tenía que
          absorber las consultas que no requieren juicio experto.
        </p>,
        <p key="2">
          <strong>Vender todo el catálogo.</strong> No solo los productos del
          piso. La pantalla habilita comprar el catálogo completo de Homecenter
          y Constructor, incluyendo SKUs que no están físicamente en la tienda
          que se visita.
        </p>,
        <p key="3">
          <strong>Personalización por sub-marca y sección.</strong> Constructor,
          Carcenter y Proyectos tienen audiencias y necesidades distintas. La
          pantalla se adapta a la sección donde está instalada — no es un
          producto único, es un sistema con personalidades.
        </p>,
      ],
    },
    // Sección 03 (Proceso) eliminada — el bloque entre Problema y Decisiones
    // se reemplaza por las 4 FeatureCards renderizadas en el page
    // (FeaturesGrid), que cuentan las funcionalidades que diseñé y escalaron a
    // omnicanal.
    {
      number: '03',
      label: 'Decisiones',
      title: 'UI pensada para uso semi-público y eventual.',
      body: [
        <p key="1">
          Tipografía grande, contraste alto, jerarquía muy marcada. Flujos
          cortos — el cliente no se va a sentar frente a la pantalla 10
          minutos. Touch targets grandes (dedos limpios, sucios, con guantes).
          Reset automático después de inactividad para proteger la privacidad
          del siguiente usuario.
        </p>,
      ],
    },
    {
      number: '04',
      label: 'Solución',
      title: 'Pantallas como puente entre el asesor y el autoservicio.',
      body: [
        <p key="1">
          La pantalla cubre el 80% de las consultas rápidas. El 20% que
          requiere asesor queda mejor preparado: el cliente llega con
          información, el asesor aporta juicio experto. Ambos salen ganando.
        </p>,
      ],
    },
    {
      number: '05',
      label: 'Impacto',
      title: 'Liberación del asesor y mejor experiencia en piso.',
      body: [
        <p key="1">
          El despliegue redujo presión sobre los puntos de atención y mejoró el
          tiempo de resolución de dudas frecuentes. Convirtió a la pantalla en
          un punto de contacto digital legítimo dentro del recorrido físico.
        </p>,
      ],
    },
    // Sección 06 (Aprendizaje) eliminada — el cierre del case son 3
    // ilustraciones pequeñas que resumen la intervención de diseño,
    // renderizadas en el page (DesignSummaryStrip).
  ],

  // ─── NAV ──────────────────────────────────────────────
  // Orden Cap 01: Homecenter → Pantallas → Store in Store → Asistentes
  nav: {
    prev: { href: '/work/homecenter', title: 'App Homecenter' },
    next: { href: '/work/store-in-store', title: 'Store in Store Web' },
  },
};
