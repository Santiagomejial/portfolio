import type { CaseContent } from './types';

/**
 * Contenido del case — LeClop.
 * Marca de eventos en Bogotá D.C. y Manizales, Colombia. Santiago = Co-founder
 * + Jefe de Diseño. Identidad de marca completa (manual) + app de eventos
 * (proyecto académico, mencionado pero NO foco principal).
 *
 * Editar este archivo equivale a editar la página /work/leclop.
 * Estructura espejo de los demás cases — sin sec Proceso ni Aprendizaje.
 */
export const CASE_LECLOP: CaseContent = {
  // ─── HERO ─────────────────────────────────────────────
  hero: {
    breadcrumb: { label: 'Volver', fallbackHref: '/work' },
    caseCounter: 'Caso 06 · Fundacional',
    title: {
      pre: '',
      highlight: 'LeClop',
      post: ' · marca de eventos.',
    },
    sub: 'Co-fundador y Jefe de Diseño de LeClop SAS — marca de eventos con presencia en Bogotá D.C. y Manizales. Identidad de marca completa, manual gráfico y aplicaciones a campañas, redes y producto digital.',
    meta: [
      { label: 'Rol', value: 'Co-founder · Jefe de Diseño' },
      { label: 'Periodo', value: '2021 → 2022' },
      { label: 'Alcance', value: 'Identidad de marca + producto digital' },
    ],
    heroImage: {
      src: '/work/leclop/hero.jpg',
      alt: 'LeClop — hero del case · marca de eventos.',
    },
  },

  // ─── SECTIONS ─────────────────────────────────────────
  sections: [
    {
      number: '01',
      label: 'Contexto',
      title: 'Una marca de eventos construida desde cero.',
      body: [
        <p key="1">
          LeClop SAS nace como una marca de eventos para llegar a audiencias
          jóvenes en Bogotá D.C. y Manizales. La idea original venía de un
          equipo pequeño de socios, y mi rol fue doble: como co-fundador
          ayudé a definir la dirección estratégica del negocio, y como Jefe
          de Diseño construí toda la capa visual desde cero.
        </p>,
        <p key="2">
          No había marca, no había sistema gráfico, no había presencia
          digital. La hoja en blanco era literal — había que partir desde la
          identidad y bajar a cada aplicación.
        </p>,
      ],
    },
    {
      number: '02',
      label: 'Problema',
      title: 'Una marca joven que se diferencie en un mercado saturado.',
      body: [
        <p key="1">
          El sector de eventos urbanos en Colombia es competido y muy visual
          — la marca tenía que sobresalir en redes, en posters de campaña y
          en el primer punto de contacto con el público. Sin un sistema
          gráfico fuerte, cada pieza se sentiría de un evento distinto. Sin
          coherencia, no hay marca.
        </p>,
      ],
    },
    {
      number: '03',
      label: 'Decisiones',
      title: 'Manual de marca antes de cualquier pieza.',
      body: [
        <p key="1">
          Resolvimos primero el sistema completo — logo, paleta, tipografía,
          tono editorial, retículas, aplicaciones — antes de producir
          cualquier pieza puntual. Esa disciplina permitió que el equipo
          pudiera generar campañas y posters semanales sin perder
          consistencia, incluso cuando el ritmo de eventos exigía velocidad.
        </p>,
      ],
    },
    {
      number: '04',
      label: 'Solución',
      title: 'Manual de marca completo + producto digital experimental.',
      body: [
        <p key="1">
          El entregable principal fue el Manual de Marca: 80+ páginas con el
          sistema visual, retículas, usos correctos e incorrectos del logo,
          paleta extendida, tipografías oficiales y aplicaciones modelo a
          posters, redes y merchandising.
        </p>,
        <p key="2">
          En paralelo, como ejercicio académico, prototipé una app de
          boletería para los eventos de LeClop — un proyecto de exploración
          que aplicaba la identidad de la marca a un producto digital
          completo (publicado por separado en Behance).
        </p>,
      ],
    },
    {
      number: '05',
      label: 'Impacto',
      title: 'Una marca operativa con vida propia.',
      body: [
        <p key="1">
          LeClop operó campañas en Bogotá y Manizales con un sistema visual
          coherente — cada poster, cada flyer y cada feed de Instagram
          (@le.clop) hablaban con la misma voz. La marca quedó documentada y
          escalable: nuevas piezas no requerían reinventar el lenguaje cada
          vez, solo aplicar el sistema.
        </p>,
      ],
    },
  ],

  // ─── NAV ──────────────────────────────────────────────
  nav: {
    prev: { href: '/work/dartstation', title: 'DartStation' },
    next: { href: '/work/homecenter', title: 'App Homecenter — volver al inicio' },
  },
};
