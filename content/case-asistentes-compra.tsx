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
    sub: 'Familia de herramientas digitales que guían al cliente en compras complejas — productos a la medida, proyectos del hogar y obras de construcción — con un sistema responsive que vive en web, tienda y canales de asesoría.',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer' },
      { label: 'Periodo', value: '2022 → 2024' },
      { label: 'Alcance', value: 'Familia de asistentes · multi-canal' },
    ],
    heroImage: {
      src: '/work/asistentes-compra/hero.jpg',
      alt: 'Asistentes de compra digital — hero del case.',
    },
  },

  // ─── SECTIONS ─────────────────────────────────────────
  sections: [
    {
      number: '01',
      label: 'Contexto',
      title: 'Compras complejas que el catálogo estándar no resuelve.',
      body: [
        <p key="1">
          Los asistentes de compra son herramientas digitales que guían al
          cliente en compras complejas — productos a la medida, proyectos del
          hogar y obras de construcción. Cada asistente tiene un flujo
          guiado propio que respeta la lógica del producto: configurar un
          sofá no es lo mismo que cotizar una cocina o calcular el material
          para una placa.
        </p>,
        <p key="2">
          Su despliegue es completamente responsive y vive en cuatro
          superficies: web (desktop y mobile) para el cliente final,
          pantallas en tienda para autoservicio, y pantallas dedicadas
          (desktop y mobile) para los asesores en piso y el contact center.
        </p>,
      ],
    },
    {
      number: '02',
      label: 'Problema',
      title: 'Demasiadas variables, ningún flujo estándar.',
      body: [
        <p key="1">
          Sofás a la medida, cocinas, baños, persianas, placas — cada
          categoría tiene variables propias: dimensiones, colores,
          materiales, complementos, instalación. Sin guía el cliente
          abandona; sin herramienta el asesor improvisa. Buena parte del
          catálogo de proyectos del hogar quedaba fuera del journey digital.
        </p>,
      ],
    },
    // Sección 03 (Proceso) eliminada — el bloque entre Problema y Decisiones
    // se reemplaza por las 4 FeatureCards renderizadas en el page
    // (FeaturesGrid).
    {
      number: '03',
      label: 'Decisiones',
      title: 'Una columna vertebral compartida, personalidades propias.',
      body: [
        <p key="1">
          Toda la familia de asistentes parte del mismo patrón —
          entrada paso a paso, validación en cada step, resumen visual antes
          del cierre — pero cada producto despliega su lógica particular. La
          decisión crítica fue diseñar un sistema de componentes que se
          adaptara a tipologías muy distintas (medida, proyecto,
          construcción) sin reinventar la lógica cada vez.
        </p>,
      ],
    },
    {
      number: '04',
      label: 'Solución',
      title: 'Una familia de asistentes con la misma estructura.',
      body: [
        <p key="1">
          Todos los asistentes comparten esqueleto pero tienen comportamientos
          especializados según el producto. El cliente puede iniciar la
          cotización desde cualquier canal y retomarla en otro; el asesor
          puede tomar la posta sin que el cliente pierda contexto. Las
          decisiones complejas se quiebran en pasos pequeños y revisables.
        </p>,
      ],
    },
    {
      number: '05',
      label: 'Impacto',
      title: 'Categorías nuevas habilitadas para el journey digital.',
      body: [
        <p key="1">
          Los asistentes habilitaron categorías que antes no eran vendibles
          online de forma seria. El cliente que entraba buscando &quot;cortinas
          a la medida&quot; o &quot;cocina nueva&quot; ya no tenía que
          aterrizar en una tienda física para arrancar — podía configurar,
          cotizar y agendar sin moverse. El asesor en tienda y contact center
          se convirtió en complemento del journey, no en requisito.
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
