import type { CaseContent } from './types';

const ES: CaseContent = {
  hero: {
    breadcrumb: { label: 'Volver', fallbackHref: '/work' },
    caseCounter: 'Caso 04',
    title: { pre: 'Asistentes de ', highlight: 'compra digital' },
    sub: 'Familia de herramientas digitales que guían al cliente en compras complejas — productos a la medida, proyectos del hogar y obras de construcción — con un sistema responsive que vive en web, tienda y canales de asesoría.',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer' },
      { label: 'Periodo', value: '2022 → 2024' },
      { label: 'Alcance', value: 'Familia de asistentes · multi-canal' },
    ],
    heroImage: { src: '/work/asistentes-compra/hero.jpg', alt: 'Asistentes de compra digital — hero del case.' },
  },
  sections: [
    {
      number: '01',
      label: 'Contexto',
      title: 'Compras complejas que el catálogo estándar no resuelve.',
      body: [
        <p key="1">Los asistentes de compra son herramientas digitales que guían al cliente en compras complejas — productos a la medida, proyectos del hogar y obras de construcción. Cada asistente tiene un flujo guiado propio que respeta la lógica del producto: configurar un sofá no es lo mismo que cotizar una cocina o calcular el material para una placa.</p>,
        <p key="2">Su despliegue es completamente responsive y vive en cuatro superficies: web (desktop y mobile) para el cliente final, pantallas en tienda para autoservicio, y pantallas dedicadas (desktop y mobile) para los asesores en piso y el contact center.</p>,
      ],
    },
    {
      number: '02',
      label: 'Problema',
      title: 'Demasiadas variables, ningún flujo estándar.',
      body: [<p key="1">Sofás a la medida, cocinas, baños, persianas, placas — cada categoría tiene variables propias: dimensiones, colores, materiales, complementos, instalación. Sin guía el cliente abandona; sin herramienta el asesor improvisa. Buena parte del catálogo de proyectos del hogar quedaba fuera del journey digital.</p>],
    },
    {
      number: '03',
      label: 'Decisiones',
      title: 'Una columna vertebral compartida, personalidades propias.',
      body: [<p key="1">Toda la familia de asistentes parte del mismo patrón — entrada paso a paso, validación en cada step, resumen visual antes del cierre — pero cada producto despliega su lógica particular. La decisión crítica fue diseñar un sistema de componentes que se adaptara a tipologías muy distintas (medida, proyecto, construcción) sin reinventar la lógica cada vez.</p>],
    },
    {
      number: '04',
      label: 'Solución',
      title: 'Una familia de asistentes con la misma estructura.',
      body: [<p key="1">Todos los asistentes comparten esqueleto pero tienen comportamientos especializados según el producto. El cliente puede iniciar la cotización desde cualquier canal y retomarla en otro; el asesor puede tomar la posta sin que el cliente pierda contexto. Las decisiones complejas se quiebran en pasos pequeños y revisables.</p>],
    },
    {
      number: '05',
      label: 'Impacto',
      title: 'Categorías nuevas habilitadas para el journey digital.',
      body: [<p key="1">Los asistentes habilitaron categorías que antes no eran vendibles online de forma seria. El cliente que entraba buscando &quot;cortinas a la medida&quot; o &quot;cocina nueva&quot; ya no tenía que aterrizar en una tienda física para arrancar — podía configurar, cotizar y agendar sin moverse. El asesor en tienda y contact center se convirtió en complemento del journey, no en requisito.</p>],
    },
  ],
  nav: {
    prev: { href: '/work/store-in-store', title: 'Store in Store Web' },
    next: { href: '/work/dartstation', title: 'DartStation' },
  },
};

const EN: CaseContent = {
  hero: {
    breadcrumb: { label: 'Back', fallbackHref: '/work' },
    caseCounter: 'Case 04',
    title: { pre: 'Digital ', highlight: 'shopping assistants' },
    sub: 'Family of digital tools that guide customers through complex purchases — custom products, home projects and construction work — with a responsive system that lives on web, in-store and across advisory channels.',
    meta: [
      { label: 'Role', value: 'UX/UI Designer' },
      { label: 'Period', value: '2022 → 2024' },
      { label: 'Scope', value: 'Family of assistants · multi-channel' },
    ],
    heroImage: { src: '/work/asistentes-compra/hero.jpg', alt: 'Digital shopping assistants — case hero.' },
  },
  sections: [
    {
      number: '01',
      label: 'Context',
      title: "Complex purchases the standard catalog doesn't solve.",
      body: [
        <p key="1">Shopping assistants are digital tools that guide the customer through complex purchases — custom products, home projects and construction work. Each assistant has its own guided flow that respects the product&apos;s logic: configuring a sofa isn&apos;t the same as quoting a kitchen or calculating material for a slab.</p>,
        <p key="2">The rollout is fully responsive and lives across four surfaces: web (desktop and mobile) for the end customer, in-store screens for self-service, and dedicated screens (desktop and mobile) for floor staff and contact center.</p>,
      ],
    },
    {
      number: '02',
      label: 'Problem',
      title: 'Too many variables, no standard flow.',
      body: [<p key="1">Custom sofas, kitchens, bathrooms, blinds, slabs — each category has its own variables: dimensions, colors, materials, complements, installation. Without guidance the customer drops; without a tool the salesperson improvises. A big portion of home projects catalog was sitting outside the digital journey.</p>],
    },
    {
      number: '03',
      label: 'Decisions',
      title: 'A shared backbone, distinct personalities.',
      body: [<p key="1">The whole family of assistants starts from the same pattern — step-by-step entry, validation at each step, visual summary before closing — but each product unfolds its specific logic. The critical decision was designing a component system that adapts to very different typologies (custom, project, construction) without reinventing the logic each time.</p>],
    },
    {
      number: '04',
      label: 'Solution',
      title: 'A family of assistants with the same structure.',
      body: [<p key="1">All assistants share a skeleton but have specialized behaviors per product. The customer can start a quote on any channel and resume it on another; the salesperson can pick up without making the customer lose context. Complex decisions are broken into small, reviewable steps.</p>],
    },
    {
      number: '05',
      label: 'Impact',
      title: 'New categories enabled for the digital journey.',
      body: [<p key="1">The assistants enabled categories that previously weren&apos;t seriously sellable online. The customer searching for &quot;custom curtains&quot; or &quot;new kitchen&quot; no longer had to land in a physical store to start — they could configure, quote and schedule without moving. The in-store and contact center salesperson became a complement to the journey, not a requirement.</p>],
    },
  ],
  nav: {
    prev: { href: '/work/store-in-store', title: 'Store in Store Web' },
    next: { href: '/work/dartstation', title: 'DartStation' },
  },
};

export const CASE_ASISTENTES_COMPRA: { es: CaseContent; en: CaseContent } = { es: ES, en: EN };
