import type { CaseContent } from './types';

/**
 * Contenido del case principal — App Homecenter & Constructor.
 * Editar este archivo equivale a editar la página /work/homecenter.
 *
 * Convenciones:
 * - Strings simples cuando no hay resalte (gradiente).
 * - { pre, highlight, post } cuando el title lleva gradiente.
 * - body es array de párrafos. Soporta <strong>, <em>, <a>, etc.
 * - mediaAfter / quoteAfter dentro de cada section permiten intercalar
 *   recursos visuales o pull quotes después de esa sección.
 */
export const CASE_HOMECENTER: CaseContent = {
  // ─── HERO ─────────────────────────────────────────────
  hero: {
    breadcrumb: { label: 'Volver', fallbackHref: '/work' },
    caseCounter: 'Caso 01',
    title: {
      pre: 'App ',
      highlight: 'Homecenter',
    },
    sub: 'Lideré el rediseño integral de la app del retail de mejoramiento del hogar más grande de Colombia, pasé a ser Product Owner y su lanzamiento, y ahora su evolución.',
    meta: [
      { label: 'Rol', value: 'UX Lead → Product Owner' },
      { label: 'Periodo', value: '2024 → hoy' },
      {
        label: 'Equipo',
        value:
          'UX Lead: 1 UI · 1 Research · 2 Design System · 1 Illustrations\nDev: 20 · QA: 6\nPracticantes: 4 (diseño, dev, QA)',
      },
    ],
    heroImage: {
      src: '/work/homecenter/hero.png',
      alt: 'App Homecenter — hero visual del case principal.',
    },
    appLinks: {
      android:
        'https://play.google.com/store/apps/details?id=com.jfr.homecenter.app',
      ios: 'https://apps.apple.com/co/app/homecenter-hogar-construcci%C3%B3n/id893804497?l=en-GB',
    },
  },

  // ─── ESTABLISHING (media antes de section 01) ─────────
  // Removido: el flujo va directo del hero + botones de descarga a la
  // sección 01. Si en el futuro se quiere reactivar, restaurar el
  // bloque `establishing: { layout, items, caption }` aquí.

  // ─── SECTIONS ─────────────────────────────────────────
  sections: [
    {
      number: '01',
      label: 'Contexto',
      title: 'Una app que no podía solo verse bonita: tenía que vender.',
      body: [
        <p key="1">
          Homecenter &amp; Constructor es la app de Sodimac Colombia, el retail
          de mejoramiento del hogar con mayor participación de mercado del
          país. La app es canal principal para compra digital, loyalty (Saldo
          Homecenter, CMR) y experiencia en tienda física.
        </p>,
        <p key="2">
          A finales de 2024 el producto vivía una paradoja clásica del retail:
          mucha funcionalidad acumulada, fricción creciente en los flujos
          críticos (PDP, checkout, búsqueda, carrito) y una deuda visual
          considerable. La organización tenía claro que una cirugía estética
          no bastaba — había que repensar el producto.
        </p>,
      ],
    },
    {
      number: '02',
      label: 'Problema',
      title: 'Tres tensiones que definieron el rediseño.',
      body: [
        <p key="1">
          <strong>Fricción en la conversión.</strong> Los flujos de compra
          tenían demasiados pasos y puntos de caída. Cada punto porcentual de
          conversión perdida en retail equivale a millones.
        </p>,
        <p key="2">
          <strong>Incoherencia entre superficies.</strong> PDP, PLP, búsqueda,
          carrito y checkout se habían construido en momentos distintos, por
          equipos distintos, con criterios distintos. El producto se leía como
          un collage.
        </p>,
        <p key="3">
          <strong>Deuda de plataforma.</strong> El stack native antiguo
          limitaba velocidad de entrega y paridad iOS/Android. La migración a
          Flutter era la oportunidad para corregir experiencia al mismo tiempo
          que plataforma.
        </p>,
      ],
    },
    {
      number: '03',
      label: 'Proceso',
      title: 'Research primero, Figma después.',
      body: [
        <p key="1">
          Arranqué con un diagnóstico de los flujos críticos: session replays,
          embudos analíticos, tickets de soporte y entrevistas con usuarios
          regulares y ocasionales. El objetivo no era encontrar &quot;qué está
          feo&quot; sino &quot;dónde se pierde la venta&quot;.
        </p>,
        <p key="2">
          Con los 5 diseñadores del equipo mapeamos cada pantalla contra su
          rol en el embudo, documentamos inconsistencias y priorizamos por
          impacto esperado sobre KPIs. Cada decisión de diseño tenía que poder
          conectarse a una hipótesis de negocio.
        </p>,
        <p key="3">
          Trabajamos en paralelo con el equipo de Flutter: el diseño se
          construía sobre los componentes que ingeniería podía entregar sin
          comprometer timelines, y cada decisión se validaba contra
          performance real en dispositivos de gama media-baja — el segmento
          mayoritario en Colombia.
        </p>,
      ],
      mediaAfter: {
        layout: 'trio',
        items: [
          { alt: 'mapeo de flujos · PDP → carrito → checkout' },
          { alt: 'research · synthesis board (FigJam / Miro)' },
          { alt: 'wireframes early / componentes base' },
        ],
        caption: 'Artefactos del proceso · de research a especificación.',
      },
    },
    {
      number: '04',
      label: 'Decisiones',
      title: 'Tres apuestas que definieron el producto.',
      body: [
        <p key="1">
          <strong>Un solo design system, dos marcas.</strong> Homecenter y
          Constructor conviven en la misma app con audiencias distintas.
          Construimos un sistema de componentes que acepta ambas identidades
          sin duplicar pantallas ni lógica.
        </p>,
        <p key="2">
          <strong>Checkout en un flujo continuo.</strong> Consolidamos pasos,
          movimos decisiones no críticas a post-compra y redujimos la fricción
          sobre los métodos de pago (CMR, PSE, Efecty, tarjeta favorita,
          Saldo Homecenter).
        </p>,
        <p key="3">
          <strong>PDP rediseñada alrededor de la decisión.</strong> Jerarquía
          nueva: precio, disponibilidad por tienda, variantes, añadir al
          carrito — por encima del fold. El resto (descripción técnica,
          opiniones, relacionados) se ordena según cómo los usuarios realmente
          navegan, no según cómo los catálogos internos se estructuran.
        </p>,
      ],
      mediaAfter: {
        layout: 'duo',
        items: [
          { alt: 'PDP · antes / PDP · después' },
          { alt: 'checkout · antes / checkout · después' },
        ],
        caption: 'Comparativos · decisiones de jerarquía y consolidación.',
      },
    },
    {
      number: '05',
      label: 'Solución',
      title: 'Una app rediseñada end-to-end sobre Flutter.',
      body: [
        <p key="1">
          El release de Abril de 2025 entregó la app completa migrada a
          Flutter con la experiencia rediseñada. Paridad total iOS/Android, un
          solo design system, checkout consolidado, PDP y carrito nuevos,
          búsqueda y navegación reorganizadas.
        </p>,
        <p key="2">
          Más allá del output visual, el proyecto dejó un sistema: tokens,
          componentes, patrones documentados y un equipo de diseño alineado
          en cómo construir el producto hacia adelante. Esa base es lo que
          hoy, como PO, me permite iterar más rápido sin perder coherencia.
        </p>,
      ],
      mediaAfter: {
        layout: 'wide',
        items: [{ alt: 'producto final · app rediseñada · showcase 21:9' }],
        caption: 'Showcase · release Abril 2025 · app rediseñada end-to-end.',
      },
      quoteAfter: {
        body: 'El día del release dejé de ser quien había diseñado la app y empecé a ser quien la manejaría.',
        highlight: 'empecé a ser quien la manejaría',
        attribution: 'Sobre el día del release, Abril 2025',
      },
    },
    {
      number: '06',
      label: 'Impacto · como PO',
      chapterBreak: true,
      title: 'Qué cambió — y qué aprendí manejándolo desde adentro.',
      body: [
        <p key="1">
          En Julio de 2025 tomé el rol de Business Analyst / Product Owner del
          mismo producto. Heredé un equipo de 6 personas y un backlog con
          decenas de oportunidades que, como diseñador, ya conocía.
        </p>,
        <p key="2">
          <em>
            Las métricas específicas de post-release (conversión, NPS, rating
            de stores, retención) están disponibles en conversación 1:1 — están
            sujetas a confidencialidad de Sodimac.
          </em>
        </p>,
        <p key="3">
          Lo que sí puedo compartir abiertamente es el cambio de perspectiva:
          ver el producto desde el backlog, no desde Figma, me obligó a hacer
          trade-offs que antes evadía como designer. La priorización dejó de
          ser un ejercicio de gusto y pasó a ser una disciplina de impacto.
        </p>,
      ],
      mediaAfter: {
        layout: 'full',
        items: [
          {
            alt: 'backlog / board / Jira view · perspectiva PO',
            aspect: '16/9',
          },
        ],
        caption: 'Vista PO · backlog, priorización, roadmap (redactado).',
      },
    },
    {
      number: '07',
      label: 'Aprendizaje',
      title: 'Lo que me llevo del arco designer → PO.',
      body: [
        <p key="1">
          <strong>Diseñar algo es solo la mitad.</strong> La otra mitad es
          cuidar su evolución. Cada feature que diseñas tiene vida propia
          después del release, y las decisiones que parecían obvias en Figma
          tienen costos reales de mantenimiento, consistencia y roadmap.
        </p>,
        <p key="2">
          <strong>El backlog es un objeto de diseño.</strong> Priorizar,
          ordenar y redactar bien las historias de usuario es una forma de
          diseño tanto como definir una pantalla. Y mal hecho, genera el
          mismo tipo de fricción que un mal checkout.
        </p>,
        <p key="3">
          <strong>
            El rol híbrido no es doble trabajo, es un lente adicional.
          </strong>{' '}
          Ver el producto como designer y como PO a la vez me permite detectar
          decisiones que uno solo de los dos roles dejaría pasar. Esa es la
          hipótesis central detrás de este portafolio.
        </p>,
      ],
    },
  ],

  // ─── NAV ──────────────────────────────────────────────
  nav: {
    next: { href: '/work/store-in-store', title: 'Store in Store' },
  },
};
