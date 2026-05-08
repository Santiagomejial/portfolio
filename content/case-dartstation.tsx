import type { CaseContent } from './types';

/**
 * Contenido del case — DartStation.
 * Marquetería y cuadros en Barranquilla, Colombia. E-commerce + identidad
 * gráfica de la marca. Co-autoría con Daniela Salcedo Mejía.
 *
 * Editar este archivo equivale a editar la página /work/dartstation.
 * Estructura espejo de los demás cases — sin sec Proceso ni Aprendizaje.
 */
export const CASE_DARTSTATION: CaseContent = {
  // ─── HERO ─────────────────────────────────────────────
  hero: {
    breadcrumb: { label: 'Volver', fallbackHref: '/work' },
    caseCounter: 'Caso 05 · Fundacional',
    title: {
      pre: 'Dart',
      highlight: 'Station',
    },
    sub: 'E-commerce e identidad gráfica para una marquetería y galería de cuadros en Barranquilla, Colombia. Primer proyecto digital end-to-end después de Diseño Industrial — co-autoría con Daniela Salcedo Mejía.',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer · Identidad' },
      { label: 'Periodo', value: '2022' },
      { label: 'Alcance', value: 'E-commerce + branding' },
    ],
    heroImage: {
      src: '/work/dartstation/hero.jpg',
      alt: 'DartStation — hero del case · marquetería en Barranquilla.',
    },
  },

  // ─── SECTIONS ─────────────────────────────────────────
  sections: [
    {
      number: '01',
      label: 'Contexto',
      title: 'Una marquetería con tradición que necesitaba presencia digital.',
      body: [
        <p key="1">
          DartStation es una marquetería y galería de cuadros en Barranquilla
          con años de oficio en el enmarcado, la restauración y la curaduría
          de obra. Hasta ese momento la marca vivía en su tienda física —
          todo el catálogo, los procesos y la relación con el cliente
          dependían del paso por el local.
        </p>,
        <p key="2">
          El reto era trasladar esa identidad y ese catálogo a un canal
          digital sin perder el oficio que la diferenciaba — una marquetería
          es un negocio de detalle, materiales y curaduría, no solo un
          marketplace de productos.
        </p>,
      ],
    },
    {
      number: '02',
      label: 'Problema',
      title: 'Identidad débil en digital y catálogo invisible.',
      body: [
        <p key="1">
          La marca no tenía un sistema gráfico propio que pudiera escalar a
          un canal digital, y el catálogo — molduras, técnicas, formatos,
          obra disponible — vivía en la tienda física o en conversaciones de
          WhatsApp. Sin presencia digital, cada cliente potencial fuera de
          Barranquilla era un cliente perdido.
        </p>,
      ],
    },
    {
      number: '03',
      label: 'Decisiones',
      title: 'Identidad gráfica primero, e-commerce después.',
      body: [
        <p key="1">
          Resolvimos primero el sistema de marca — logo, paleta, tipografía,
          tono editorial — para que el e-commerce naciera con personalidad
          propia y no como un catálogo genérico. La identidad fue la columna
          vertebral del proyecto: cada decisión de UI se apoyaba en el
          sistema gráfico previo.
        </p>,
      ],
    },
    {
      number: '04',
      label: 'Solución',
      title: 'Una página web e-commerce con voz de marquetería.',
      body: [
        <p key="1">
          La web une catálogo, identidad y experiencia de compra en un solo
          producto. Se puede explorar la obra disponible, conocer las
          técnicas de enmarcado y solicitar trabajos a la medida — todo bajo
          un sistema visual coherente que conserva el oficio detrás de la
          marca.
        </p>,
      ],
    },
    {
      number: '05',
      label: 'Impacto',
      title: 'De tienda local a marca con vitrina digital.',
      body: [
        <p key="1">
          La marca ganó una vitrina permanente que no depende del horario de
          la tienda. El e-commerce abrió la posibilidad de vender obra y
          servicios a clientes fuera de Barranquilla, y el sistema visual
          quedó disponible para escalar a piezas impresas, redes y nuevos
          canales sin reinventar el lenguaje cada vez.
        </p>,
      ],
    },
  ],

  // ─── NAV ──────────────────────────────────────────────
  nav: {
    prev: { href: '/work/asistentes-compra', title: 'Asistentes de compra digital' },
    next: { href: '/work/leclop', title: 'LeClop' },
  },
};
