import type { CaseContent } from './types';

/**
 * Contenido del case principal — App Homecenter & Constructor.
 * Bilingüe ES/EN. Editar este archivo equivale a editar /work/homecenter.
 */

const ES: CaseContent = {
  hero: {
    breadcrumb: { label: 'Volver', fallbackHref: '/work' },
    caseCounter: 'Caso 01',
    appIcon: {
      src: '/work/homecenter/appIcon.jpg',
      alt: 'App icon — Homecenter & Constructor.',
    },
    title: { pre: 'App ', highlight: 'Homecenter' },
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
  sections: [
    {
      number: '01',
      label: 'Contexto',
      title: 'Una app que no podía solo verse bonita: tenía que vender.',
      body: [
        <p key="1">
          Homecenter &amp; Constructor es la app de Sodimac Colombia, el retail
          de mejoramiento del hogar con mayor participación de mercado del país.
          La app es canal principal para compra digital, loyalty (Saldo
          Homecenter, CMR) y experiencia en tienda física.
        </p>,
        <p key="2">
          A finales de 2024 el producto vivía una paradoja clásica del retail:
          mucha funcionalidad acumulada, fricción creciente en los flujos
          críticos (PDP, checkout, búsqueda, carrito) y una deuda visual
          considerable. La organización tenía claro que una cirugía estética no
          bastaba — había que repensar el producto.
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
          <strong>Deuda de plataforma.</strong> El stack native antiguo limitaba
          velocidad de entrega y paridad iOS/Android. La migración a una nueva
          tecnología era la oportunidad para corregir experiencia al mismo
          tiempo que plataforma.
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
          Con los 5 diseñadores del equipo mapeamos cada pantalla contra su rol
          en el embudo, documentamos inconsistencias y priorizamos por impacto
          esperado sobre KPIs. Cada decisión de diseño tenía que poder
          conectarse a una hipótesis de negocio.
        </p>,
        <p key="3">
          Trabajamos en paralelo con el equipo técnico: el diseño se construía
          sobre los componentes que ingeniería podía entregar sin comprometer
          timelines, y cada decisión se validaba contra performance real en
          dispositivos de gama media-baja — el segmento mayoritario en
          Colombia.
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
          <strong>Un solo Design System.</strong> Construimos un sistema
          unificado que soporta las dos marcas — Homecenter y Constructor —
          bajo una sola arquitectura: tokens, componentes y patrones
          reutilizables en cada superficie del producto.
        </p>,
        <p key="2">
          <strong>Actualización de contenido con CMS.</strong> Migración a un
          CMS que responde inmediatamente a los cambios de oferta y da
          dinamismo al catálogo. Especialmente crítico en eventos comerciales
          (Black Friday, Cyber, días MD), donde la velocidad de actualización
          es la diferencia entre vender o no.
        </p>,
        <p key="3">
          <strong>One page checkout, PLP y PDP rediseñadas.</strong>{' '}
          Consolidamos el checkout en un solo flujo continuo y movimos las
          decisiones no críticas a post-compra. PLP y PDP se reorganizaron
          alrededor de la decisión: precio, disponibilidad por tienda,
          variantes y &quot;añadir al carrito&quot; por encima del fold. El
          resto se ordena según cómo los usuarios realmente navegan, no según
          cómo los catálogos internos se estructuran.
        </p>,
      ],
    },
    {
      number: '05',
      label: 'Solución',
      title: 'Una app rediseñada end-to-end sobre una nueva tecnología.',
      body: [
        <p key="1">
          El release de Abril de 2025 entregó la app completa migrada a una
          nueva tecnología con la experiencia rediseñada. Paridad total
          iOS/Android, un solo design system, checkout consolidado, PDP y
          carrito nuevos, búsqueda y navegación reorganizadas.
        </p>,
        <p key="2">
          Más allá del output visual, el proyecto dejó un sistema: tokens,
          componentes, patrones documentados y un equipo de diseño alineado en
          cómo construir el producto hacia adelante. Esa base es lo que hoy,
          como PO, me permite iterar más rápido sin perder coherencia.
        </p>,
      ],
    },
    {
      number: '06',
      label: 'Impacto · como PO',
      chapterBreak: true,
      title: 'Qué cambió — y qué aprendí manejándolo desde adentro.',
      body: [
        <p key="1">
          En Julio de 2025 tomé el rol de Business Analyst / Product Owner del
          mismo producto. Heredé un equipo de 30 personas y un backlog con
          decenas de oportunidades que, como diseñador, ya conocía.
        </p>,
        <p key="2">
          Mi mayor reto fue pasar a un conocimiento de negocio numérico, con
          KPIs estrictos que empiezan a marcar las decisiones de evolución,
          ajuste y seguimiento del producto — junto con un entendimiento
          técnico más amplio y requerido para esta nueva posición.
        </p>,
      ],
    },
  ],
  nav: {
    next: { href: '/work/pantallas-tienda', title: 'Pantallas digitales en tienda' },
  },
};

const EN: CaseContent = {
  hero: {
    breadcrumb: { label: 'Back', fallbackHref: '/work' },
    caseCounter: 'Case 01',
    appIcon: {
      src: '/work/homecenter/appIcon.jpg',
      alt: 'App icon — Homecenter & Constructor.',
    },
    title: { pre: '', highlight: 'Homecenter', post: ' App' },
    sub: 'I led the full redesign of the app for the largest home improvement retailer in Colombia, then became Product Owner of its launch — and now its evolution.',
    meta: [
      { label: 'Role', value: 'UX Lead → Product Owner' },
      { label: 'Period', value: '2024 → present' },
      {
        label: 'Team',
        value:
          'UX Lead: 1 UI · 1 Research · 2 Design System · 1 Illustrations\nDev: 20 · QA: 6\nInterns: 4 (design, dev, QA)',
      },
    ],
    heroImage: {
      src: '/work/homecenter/hero.png',
      alt: 'Homecenter App — hero visual of the main case.',
    },
    appLinks: {
      android:
        'https://play.google.com/store/apps/details?id=com.jfr.homecenter.app',
      ios: 'https://apps.apple.com/co/app/homecenter-hogar-construcci%C3%B3n/id893804497?l=en-GB',
    },
  },
  sections: [
    {
      number: '01',
      label: 'Context',
      title: "An app that couldn't just look pretty: it had to sell.",
      body: [
        <p key="1">
          Homecenter &amp; Constructor is the app of Sodimac Colombia, the home
          improvement retailer with the largest market share in the country.
          The app is the main channel for digital purchases, loyalty (Saldo
          Homecenter, CMR) and physical store experience.
        </p>,
        <p key="2">
          By late 2024 the product was living a classic retail paradox: too
          much accumulated functionality, growing friction in critical flows
          (PDP, checkout, search, cart) and significant visual debt. The
          organization knew a cosmetic surgery wasn&apos;t enough — the product
          had to be rethought.
        </p>,
      ],
    },
    {
      number: '02',
      label: 'Problem',
      title: 'Three tensions that defined the redesign.',
      body: [
        <p key="1">
          <strong>Conversion friction.</strong> Purchase flows had too many
          steps and drop-off points. Every percentage point of lost conversion
          in retail translates into millions.
        </p>,
        <p key="2">
          <strong>Inconsistency across surfaces.</strong> PDP, PLP, search,
          cart and checkout had been built at different times, by different
          teams, with different criteria. The product read like a collage.
        </p>,
        <p key="3">
          <strong>Platform debt.</strong> The legacy native stack limited
          delivery speed and iOS/Android parity. Migrating to a new technology
          was the opportunity to fix experience and platform at the same time.
        </p>,
      ],
    },
    {
      number: '03',
      label: 'Process',
      title: 'Research first, Figma later.',
      body: [
        <p key="1">
          I started with a diagnosis of the critical flows: session replays,
          analytical funnels, support tickets and interviews with regular and
          occasional users. The goal wasn&apos;t finding &quot;what&apos;s
          ugly&quot; but &quot;where the sale is lost&quot;.
        </p>,
        <p key="2">
          With the 5 designers on the team we mapped every screen against its
          role in the funnel, documented inconsistencies and prioritized by
          expected KPI impact. Every design decision had to connect to a
          business hypothesis.
        </p>,
        <p key="3">
          We worked in parallel with the technical team: the design was built
          on top of components engineering could deliver without compromising
          timelines, and every decision was validated against real performance
          on mid-low range devices — the majority segment in Colombia.
        </p>,
      ],
      mediaAfter: {
        layout: 'trio',
        items: [
          { alt: 'flow mapping · PDP → cart → checkout' },
          { alt: 'research · synthesis board (FigJam / Miro)' },
          { alt: 'early wireframes / base components' },
        ],
        caption: 'Process artifacts · from research to spec.',
      },
    },
    {
      number: '04',
      label: 'Decisions',
      title: 'Three bets that defined the product.',
      body: [
        <p key="1">
          <strong>One Design System.</strong> We built a unified system
          supporting both brands — Homecenter and Constructor — under a single
          architecture: tokens, components and patterns reusable across every
          surface of the product.
        </p>,
        <p key="2">
          <strong>Content updates via CMS.</strong> Migration to a CMS that
          responds instantly to offer changes and brings dynamism to the
          catalog. Especially critical during commercial events (Black Friday,
          Cyber, MD days), where update speed is the difference between
          selling and not.
        </p>,
        <p key="3">
          <strong>One-page checkout, redesigned PLP and PDP.</strong> We
          consolidated checkout into one continuous flow and moved
          non-critical decisions to post-purchase. PLP and PDP were
          reorganized around the decision: price, store availability, variants
          and &quot;add to cart&quot; above the fold. Everything else is
          ordered by how users actually browse, not by how internal catalogs
          are structured.
        </p>,
      ],
    },
    {
      number: '05',
      label: 'Solution',
      title: 'An end-to-end redesigned app on a new technology.',
      body: [
        <p key="1">
          The April 2025 release delivered the full app migrated to a new
          technology with the redesigned experience. Total iOS/Android parity,
          one design system, consolidated checkout, new PDP and cart,
          reorganized search and navigation.
        </p>,
        <p key="2">
          Beyond the visual output, the project left a system: tokens,
          components, documented patterns and a design team aligned on how to
          build the product going forward. That base is what allows me, today
          as PO, to iterate faster without losing coherence.
        </p>,
      ],
    },
    {
      number: '06',
      label: 'Impact · as PO',
      chapterBreak: true,
      title: 'What changed — and what I learned managing it from inside.',
      body: [
        <p key="1">
          In July 2025 I took the role of Business Analyst / Product Owner of
          the same product. I inherited a team of 30 people and a backlog with
          dozens of opportunities that, as a designer, I already knew.
        </p>,
        <p key="2">
          My biggest challenge was moving into numerical business knowledge,
          with strict KPIs that start driving the decisions of evolution,
          adjustment and product follow-up — together with a broader technical
          understanding required for this new position.
        </p>,
      ],
    },
  ],
  nav: {
    next: { href: '/work/pantallas-tienda', title: 'In-store digital screens' },
  },
};

export const CASE_HOMECENTER: { es: CaseContent; en: CaseContent } = { es: ES, en: EN };
