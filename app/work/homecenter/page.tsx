import {
  PullQuote,
  CaseHero,
  CaseSection,
  CaseMedia,
  CaseNav,
  Footer,
  type CaseMeta,
} from '@/components';

/**
 * CASE PRINCIPAL — App Homecenter & Constructor.
 * Estructura de 7 secciones con chapterBreak en la 06 para marcar
 * el paso de UX Lead (Chapter A) a Product Owner (Chapter B).
 *
 * Este archivo sirve también como TEMPLATE para los 5 cases restantes
 * (Paso 6): misma estructura, distinto contenido.
 */

const META: CaseMeta[] = [
  { label: 'Rol', value: 'UX Lead → Product Owner' },
  { label: 'Periodo', value: '2024 → hoy' },
  { label: 'Equipo', value: '5 diseñadores → 6 producto' },
  { label: 'Alcance', value: 'Rediseño integral + Flutter' },
];

export default function HomecenterCase() {
  return (
    <>
      {/* HERO */}
      <CaseHero
        breadcrumb={{ href: '/work', label: '← Volver a Work' }}
        caseCounter="Case 01 · Featured"
        title={
          <>
            App Homecenter &amp; Constructor.{' '}
            <span className="text-gradient">Del diseño al manejo</span> del
            producto.
          </>
        }
        sub="Lideré el rediseño integral de la app del retail de mejoramiento del hogar más grande de Colombia, su migración a Flutter y — después del release — pasé a ser Product Owner del mismo producto que había diseñado."
        meta={META}
        heroVisual={
          <div
            className="aspect-[21/9] w-full overflow-hidden rounded-lg border border-line bg-bg-block"
            role="img"
            aria-label="Hero visual — reemplazar en Claude Design"
          >
            <div className="flex h-full items-center justify-center text-eyebrow uppercase tracking-eyebrow text-ink-mute">
              [ hero visual · App Homecenter ]
            </div>
          </div>
        }
      />

      {/* 01 — CONTEXTO */}
      <CaseSection
        number="01"
        label="Contexto"
        title="Una app que no podía solo verse bonita: tenía que vender."
      >
        <p>
          Homecenter &amp; Constructor es la app de Sodimac Colombia, el retail
          de mejoramiento del hogar con mayor participación de mercado del
          país. La app es canal principal para compra digital, loyalty
          (Saldo Homecenter, CMR) y experiencia en tienda física.
        </p>
        <p>
          A finales de 2024 el producto vivía una paradoja clásica del retail:
          mucha funcionalidad acumulada, fricción creciente en los flujos
          críticos (PDP, checkout, búsqueda, carrito) y una deuda visual
          considerable. La organización tenía claro que una cirugía estética
          no bastaba — había que repensar el producto.
        </p>
      </CaseSection>

      {/* MEDIA — establishing shot del producto */}
      <CaseMedia
        layout="full"
        items={[
          {
            alt: 'app showcase · home + PDP + checkout en contexto',
            aspect: '16/9',
          },
        ]}
        caption="Establishing shot · app en dispositivos reales."
      />

      {/* 02 — PROBLEMA */}
      <CaseSection
        number="02"
        label="Problema"
        title="Tres tensiones que definieron el rediseño."
      >
        <p>
          <strong>Fricción en la conversión.</strong> Los flujos de compra
          tenían demasiados pasos y puntos de caída. Cada punto porcentual de
          conversión perdida en retail equivale a millones.
        </p>
        <p>
          <strong>Incoherencia entre superficies.</strong> PDP, PLP, búsqueda,
          carrito y checkout se habían construido en momentos distintos, por
          equipos distintos, con criterios distintos. El producto se leía
          como un collage.
        </p>
        <p>
          <strong>Deuda de plataforma.</strong> El stack native antiguo
          limitaba velocidad de entrega y paridad iOS/Android. La migración a
          Flutter era la oportunidad para corregir experiencia al mismo
          tiempo que plataforma.
        </p>
      </CaseSection>

      {/* 03 — PROCESO */}
      <CaseSection
        number="03"
        label="Proceso"
        title="Research primero, Figma después."
      >
        <p>
          Arranqué con un diagnóstico de los flujos críticos: session replays,
          embudos analíticos, tickets de soporte y entrevistas con usuarios
          regulares y ocasionales. El objetivo no era encontrar "qué está
          feo" sino "dónde se pierde la venta".
        </p>
        <p>
          Con los 5 diseñadores del equipo mapeamos cada pantalla contra su
          rol en el embudo, documentamos inconsistencias y priorizamos por
          impacto esperado sobre KPIs. Cada decisión de diseño tenía que
          poder conectarse a una hipótesis de negocio.
        </p>
        <p>
          Trabajamos en paralelo con el equipo de Flutter: el diseño se
          construía sobre los componentes que ingeniería podía entregar sin
          comprometer timelines, y cada decisión se validaba contra
          performance real en dispositivos de gama media-baja — el segmento
          mayoritario en Colombia.
        </p>
      </CaseSection>

      {/* MEDIA — artefactos del proceso */}
      <CaseMedia
        layout="trio"
        items={[
          { alt: 'mapeo de flujos · PDP → carrito → checkout' },
          { alt: 'research · synthesis board (FigJam / Miro)' },
          { alt: 'wireframes early / componentes base' },
        ]}
        caption="Artefactos del proceso · de research a especificación."
      />

      {/* 04 — DECISIONES */}
      <CaseSection
        number="04"
        label="Decisiones"
        title="Tres apuestas que definieron el producto."
      >
        <p>
          <strong>Un solo design system, dos marcas.</strong> Homecenter y
          Constructor conviven en la misma app con audiencias distintas.
          Construimos un sistema de componentes que acepta ambas identidades
          sin duplicar pantallas ni lógica.
        </p>
        <p>
          <strong>Checkout en un flujo continuo.</strong> Consolidamos pasos,
          movimos decisiones no críticas a post-compra y redujimos la
          fricción sobre los métodos de pago (CMR, PSE, Efecty, tarjeta
          favorita, Saldo Homecenter).
        </p>
        <p>
          <strong>PDP rediseñada alrededor de la decisión.</strong> Jerarquía
          nueva: precio, disponibilidad por tienda, variantes, añadir al
          carrito — por encima del fold. El resto (descripción técnica,
          opiniones, relacionados) se ordena según cómo los usuarios
          realmente navegan, no según cómo los catálogos internos se
          estructuran.
        </p>
      </CaseSection>

      {/* MEDIA — before / after de decisiones clave */}
      <CaseMedia
        layout="duo"
        items={[
          { alt: 'PDP · antes / PDP · después' },
          { alt: 'checkout · antes / checkout · después' },
        ]}
        caption="Comparativos · decisiones de jerarquía y consolidación."
      />

      {/* 05 — SOLUCIÓN */}
      <CaseSection
        number="05"
        label="Solución"
        title="Una app rediseñada end-to-end sobre Flutter."
      >
        <p>
          El release de Abril de 2025 entregó la app completa migrada a
          Flutter con la experiencia rediseñada. Paridad total iOS/Android,
          un solo design system, checkout consolidado, PDP y carrito nuevos,
          búsqueda y navegación reorganizadas.
        </p>
        <p>
          Más allá del output visual, el proyecto dejó un sistema: tokens,
          componentes, patrones documentados y un equipo de diseño alineado
          en cómo construir el producto hacia adelante. Esa base es lo que
          hoy, como PO, me permite iterar más rápido sin perder coherencia.
        </p>
      </CaseSection>

      {/* MEDIA — showcase final del producto */}
      <CaseMedia
        layout="wide"
        items={[
          { alt: 'producto final · app rediseñada · showcase 21:9' },
        ]}
        caption="Showcase · release Abril 2025 · app rediseñada end-to-end."
      />

      {/* TRANSICIÓN — pull quote que marca el paso de Chapter A a Chapter B */}
      <section className="container-portfolio border-t border-line py-20 md:py-28">
        <PullQuote
          highlight="empecé a ser quien la manejaría"
          attribution="— Sobre el día del release, Abril 2025"
        >
          El día del release dejé de ser quien había diseñado la app y empecé
          a ser quien la manejaría.
        </PullQuote>
      </section>

      {/* 06 — IMPACTO (chapterBreak: aquí arranca el capítulo PO) */}
      <CaseSection
        number="06"
        label="Impacto · como PO"
        title="Qué cambió — y qué aprendí manejándolo desde adentro."
        chapterBreak
      >
        <p>
          En Julio de 2025 tomé el rol de Business Analyst / Product Owner
          del mismo producto. Heredé un equipo de 6 personas y un backlog
          con decenas de oportunidades que, como diseñador, ya conocía.
        </p>
        <p>
          <em>
            Las métricas específicas de post-release (conversión, NPS, rating
            de stores, retención) están disponibles en conversación 1:1 —
            están sujetas a confidencialidad de Sodimac.
          </em>
        </p>
        <p>
          Lo que sí puedo compartir abiertamente es el cambio de perspectiva:
          ver el producto desde el backlog, no desde Figma, me obligó a
          hacer trade-offs que antes evadía como designer. La priorización
          dejó de ser un ejercicio de gusto y pasó a ser una disciplina de
          impacto.
        </p>
      </CaseSection>

      {/* MEDIA — vista del lado PO */}
      <CaseMedia
        layout="full"
        items={[
          { alt: 'backlog / board / Jira view · perspectiva PO', aspect: '16/9' },
        ]}
        caption="Vista PO · backlog, priorización, roadmap (redactado)."
      />

      {/* 07 — APRENDIZAJE */}
      <CaseSection
        number="07"
        label="Aprendizaje"
        title="Lo que me llevo del arco designer → PO."
      >
        <p>
          <strong>Diseñar algo es solo la mitad.</strong> La otra mitad es
          cuidar su evolución. Cada feature que diseñas tiene vida propia
          después del release, y las decisiones que parecían obvias en Figma
          tienen costos reales de mantenimiento, consistencia y roadmap.
        </p>
        <p>
          <strong>El backlog es un objeto de diseño.</strong> Priorizar, ordenar
          y redactar bien las historias de usuario es una forma de diseño
          tanto como definir una pantalla. Y mal hecho, genera el mismo tipo
          de fricción que un mal checkout.
        </p>
        <p>
          <strong>El rol híbrido no es doble trabajo, es un lente adicional.</strong>{' '}
          Ver el producto como designer y como PO a la vez me permite detectar
          decisiones que uno solo de los dos roles dejaría pasar. Esa es la
          hipótesis central detrás de este portafolio.
        </p>
      </CaseSection>

      {/* NAV prev/next — este es el primer case, no hay prev */}
      <CaseNav next={{ href: '/work/store-in-store', title: 'Store in Store' }} />

      <Footer />
    </>
  );
}
