import type { CaseContent } from './types';

const ES: CaseContent = {
  hero: {
    breadcrumb: { label: 'Volver', fallbackHref: '/work' },
    caseCounter: 'Caso 02',
    title: { pre: 'Pantallas digitales ', highlight: 'en tienda' },
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
  sections: [
    {
      number: '01',
      label: 'Contexto',
      title: 'La tienda física + la experiencia digital.',
      body: [
        <p key="1">Las tiendas físicas y la experiencia digital tienen un punto de quiebre: el catálogo. En tiendas de gran superficie como Homecenter es imposible exhibir cada SKU disponible — el inventario digital es mucho mayor que el espacio físico de exhibición.</p>,
        <p key="2">Las pantallas digitales nacen para cerrar esa brecha. Se ubican en cada sección de cada tienda del país, donde los clientes se pueden autoasistir: consultar stock, generar órdenes, hacer cotizaciones o inspirarse con productos curados — imágenes editoriales y selecciones de expertos que no siempre están en el piso de venta.</p>,
      ],
    },
    {
      number: '02',
      label: 'Problema',
      title: 'Tres frentes que el proyecto tenía que resolver al mismo tiempo.',
      body: [
        <p key="1"><strong>Reducir los tiempos de atención del asesor.</strong> En picos de demanda los asesores no dan abasto: el cliente espera, la venta se enfría y la experiencia se deteriora. La pantalla tenía que absorber las consultas que no requieren juicio experto.</p>,
        <p key="2"><strong>Vender todo el catálogo.</strong> No solo los productos del piso. La pantalla habilita comprar el catálogo completo de Homecenter y Constructor, incluyendo SKUs que no están físicamente en la tienda que se visita.</p>,
        <p key="3"><strong>Personalización por sub-marca y sección.</strong> Constructor, Carcenter y Proyectos tienen audiencias y necesidades distintas. La pantalla se adapta a la sección donde está instalada — no es un producto único, es un sistema con personalidades.</p>,
      ],
    },
    {
      number: '03',
      label: 'Decisiones',
      title: 'UI pensada para uso semi-público y eventual.',
      body: [
        <p key="1">Tipografía grande, contraste alto, jerarquía muy marcada. Flujos cortos — el cliente no se va a sentar frente a la pantalla 10 minutos. Touch targets grandes (dedos limpios, sucios, con guantes). Reset automático después de inactividad para proteger la privacidad del siguiente usuario.</p>,
      ],
    },
    {
      number: '04',
      label: 'Solución',
      title: 'Pantallas como puente entre el asesor y el autoservicio.',
      body: [
        <p key="1">La pantalla cubre el 80% de las consultas rápidas. El 20% que requiere asesor queda mejor preparado: el cliente llega con información, el asesor aporta juicio experto. Ambos salen ganando.</p>,
      ],
    },
    {
      number: '05',
      label: 'Impacto',
      title: 'Liberación del asesor y mejor experiencia en piso.',
      body: [
        <p key="1">El despliegue redujo presión sobre los puntos de atención y mejoró el tiempo de resolución de dudas frecuentes. Convirtió a la pantalla en un punto de contacto digital legítimo dentro del recorrido físico.</p>,
      ],
    },
  ],
  nav: {
    prev: { href: '/work/homecenter', title: 'App Homecenter' },
    next: { href: '/work/store-in-store', title: 'Store in Store Web' },
  },
};

const EN: CaseContent = {
  hero: {
    breadcrumb: { label: 'Back', fallbackHref: '/work' },
    caseCounter: 'Case 02',
    title: { pre: 'Digital ', highlight: 'in-store screens' },
    sub: 'Interactive screen system inside Homecenter stores so customers can check stock, buy products through the digital catalog and solve questions without relying on a salesperson.',
    meta: [
      { label: 'Role', value: 'UX/UI Designer' },
      { label: 'Period', value: '2022 → 2024' },
      { label: 'Scope', value: 'Store–digital experience' },
    ],
    heroImage: {
      src: '/work/pantallas-tienda/hero.jpg',
      alt: 'In-store digital screens — case hero.',
    },
  },
  sections: [
    {
      number: '01',
      label: 'Context',
      title: 'The physical store + the digital experience.',
      body: [
        <p key="1">Physical stores and the digital experience share a breaking point: the catalog. In big-box stores like Homecenter it&apos;s impossible to display every available SKU — digital inventory is far larger than physical display space.</p>,
        <p key="2">Digital screens were born to close that gap. They sit in every section of every store across the country, where customers can self-serve: check stock, place orders, generate quotes or get inspired by curated products — editorial images and expert selections that aren&apos;t always on the sales floor.</p>,
      ],
    },
    {
      number: '02',
      label: 'Problem',
      title: 'Three fronts the project had to solve at once.',
      body: [
        <p key="1"><strong>Reduce salesperson wait times.</strong> At peak demand staff can&apos;t keep up: customers wait, sales cool off and the experience deteriorates. The screen had to absorb queries that don&apos;t require expert judgment.</p>,
        <p key="2"><strong>Sell the full catalog.</strong> Not just floor products. The screen enables buying Homecenter and Constructor&apos;s full catalog, including SKUs not physically in the visited store.</p>,
        <p key="3"><strong>Per sub-brand and section personalization.</strong> Constructor, Carcenter and Projects have distinct audiences and needs. The screen adapts to the section where it&apos;s installed — not a single product, but a system with personalities.</p>,
      ],
    },
    {
      number: '03',
      label: 'Decisions',
      title: 'UI built for semi-public, occasional use.',
      body: [
        <p key="1">Large typography, high contrast, very strong hierarchy. Short flows — the customer won&apos;t sit at the screen for 10 minutes. Large touch targets (clean, dirty, gloved fingers). Automatic reset after inactivity to protect the next user&apos;s privacy.</p>,
      ],
    },
    {
      number: '04',
      label: 'Solution',
      title: 'Screens as a bridge between the salesperson and self-service.',
      body: [
        <p key="1">The screen covers 80% of quick queries. The 20% that requires a salesperson arrives better prepared: the customer comes with information, the salesperson adds expert judgment. Both win.</p>,
      ],
    },
    {
      number: '05',
      label: 'Impact',
      title: 'Salesperson relief and a better floor experience.',
      body: [
        <p key="1">The rollout reduced pressure on attention points and improved resolution time for frequent questions. It turned the screen into a legitimate digital touchpoint inside the physical journey.</p>,
      ],
    },
  ],
  nav: {
    prev: { href: '/work/homecenter', title: 'Homecenter App' },
    next: { href: '/work/store-in-store', title: 'Store in Store Web' },
  },
};

export const CASE_PANTALLAS_TIENDA: { es: CaseContent; en: CaseContent } = { es: ES, en: EN };
