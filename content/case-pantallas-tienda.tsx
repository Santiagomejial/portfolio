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
    sub: 'Sistema de pantallas interactivas dentro de las tiendas Homecenter para que los clientes puedan consultar stock, comparar productos y resolver dudas sin depender del asesor.',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer' },
      { label: 'Periodo', value: '2022 → 2024' },
      { label: 'Equipo', value: 'UX + Retail + Hardware' },
      { label: 'Alcance', value: 'Experiencia tienda–digital' },
    ],
    // heroImage: pendiente
  },

  // ─── SECTIONS ─────────────────────────────────────────
  sections: [
    {
      number: '01',
      label: 'Contexto',
      title: 'La tienda física como canal saturado.',
      body: [
        <p key="1">
          Homecenter tiene tiendas de gran superficie con miles de SKUs. En los
          picos de demanda, los asesores no dan abasto: clientes esperan, venta
          se cae, experiencia se deteriora. La pregunta era cómo liberar al
          asesor para que se enfoque en lo que aporta valor real.
        </p>,
      ],
    },
    {
      number: '02',
      label: 'Problema',
      title: 'El cliente llega sabiendo poco — y necesita respuestas rápidas.',
      body: [
        <p key="1">
          Consultas tipo: ¿este producto está disponible en esta tienda?, ¿cuál
          es la diferencia entre estos dos?, ¿dónde lo encuentro en el piso?
          Son preguntas que no requieren experto, pero que hoy consumen tiempo
          de asesor.
        </p>,
      ],
    },
    {
      number: '03',
      label: 'Proceso',
      title: 'Observación en tienda, no solo research en oficina.',
      body: [
        <p key="1">
          Pasamos horas en tienda observando cómo la gente pregunta, se mueve y
          decide. Mapeamos los puntos donde el cliente se detiene, los flujos
          más comunes y las rutas que hacen antes de contactar a un asesor. La
          pantalla tenía que insertarse en ese recorrido natural, no forzar uno
          nuevo.
        </p>,
      ],
      mediaAfter: {
        layout: 'trio',
        items: [
          { alt: 'observación en tienda · mapping del recorrido' },
          { alt: 'flujos críticos · stock / comparación / ubicación' },
          { alt: 'prototipado hardware + software' },
        ],
        caption: 'Proceso · del piso de venta al prototipo funcional.',
      },
    },
    {
      number: '04',
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
      number: '05',
      label: 'Solución',
      title: 'Pantallas como puente entre el asesor y el autoservicio.',
      body: [
        <p key="1">
          La pantalla cubre el 80% de las consultas rápidas. El 20% que
          requiere asesor queda mejor preparado: el cliente llega con
          información, el asesor aporta juicio experto. Ambos salen ganando.
        </p>,
      ],
      mediaAfter: {
        layout: 'duo',
        items: [
          { alt: 'pantalla en tienda · uso real' },
          { alt: 'flujo de consulta · interacción' },
        ],
        caption: 'Solución · pantalla en contexto y flujos principales.',
      },
    },
    {
      number: '06',
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
    {
      number: '07',
      label: 'Aprendizaje',
      title: 'Diseñar para contextos semi-públicos cambia las reglas.',
      body: [
        <p key="1">
          El usuario no te conoce, no te vuelve a ver, usa el producto una sola
          vez. No hay curva de aprendizaje: cada interacción tiene que ser
          obvia al primer segundo. Es otro deporte comparado con diseñar apps
          que se usan a diario.
        </p>,
      ],
    },
  ],

  // ─── NAV ──────────────────────────────────────────────
  // Orden Cap 01: Homecenter → Pantallas → Store in Store → Asistentes
  nav: {
    prev: { href: '/work/homecenter', title: 'App Homecenter' },
    next: { href: '/work/store-in-store', title: 'Store in Store Web' },
  },
};
