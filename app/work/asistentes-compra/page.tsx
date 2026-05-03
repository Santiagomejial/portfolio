import {
  CaseHero,
  CaseSection,
  CaseMedia,
  CaseNav,
  Footer,
  type CaseMeta,
} from '@/components';

/**
 * CASE — Asistentes de Compra.
 * Retail Sodimac · 2022–2024 · herramienta interna para asesores en tienda.
 */

const META: CaseMeta[] = [
  { label: 'Rol', value: 'UX Lead' },
  { label: 'Periodo', value: '2022 — 2024' },
  { label: 'Equipo', value: 'UX + Ventas + Ingeniería' },
  { label: 'Alcance', value: 'Herramienta interna' },
];

export default function AsistentesCase() {
  return (
    <>
      <CaseHero
        breadcrumb={{ label: 'Volver', fallbackHref: '/work' }}
        caseCounter="Case 04 · Retail Sodimac"
        title={
          <>
            Asistentes de Compra.{' '}
            <span className="text-gradient">Asesores en tienda</span> con
            superpoderes digitales.
          </>
        }
        sub="Herramienta interna para asesores en tienda que acelera la búsqueda de producto, la cotización y el cierre de venta asistida."
        meta={META}
        heroVisual={
          <div
            className="aspect-[21/9] w-full overflow-hidden rounded-lg border border-line bg-bg-block"
            role="img"
            aria-label="Hero visual"
          >
            <div className="flex h-full items-center justify-center text-eyebrow uppercase tracking-eyebrow text-ink-mute">
              [ hero visual · Asistentes de Compra ]
            </div>
          </div>
        }
      />

      <CaseSection
        number="01"
        label="Contexto"
        title="El asesor es el punto de mayor conversión — y el más fricciónado."
      >
        <p>
          Mientras los kioscos resolvían consultas rápidas, el asesor seguía
          cerrando las ventas complejas: proyectos grandes, combos, entregas
          a obra, pagos mixtos. Pero sus herramientas seguían siendo las
          mismas de hace 15 años.
        </p>
      </CaseSection>

      <CaseSection
        number="02"
        label="Problema"
        title="Procesos manuales, cotizaciones lentas, cierre desordenado."
      >
        <p>
          El asesor saltaba entre sistemas para consultar stock, generar
          cotización, aplicar descuentos y registrar venta. Cada salto era
          un punto de caída: el cliente esperaba, el asesor improvisaba, la
          venta se enfriaba.
        </p>
      </CaseSection>

      <CaseSection
        number="03"
        label="Proceso"
        title="Shadowing y co-diseño con ventas."
      >
        <p>
          Pasé semanas acompañando asesores en tienda: viendo qué sistemas
          usaban, qué atajos hacían, qué preguntas les frenaban. El insight
          más importante: los asesores ya tenían el flujo mental claro — la
          herramienta tenía que seguirlos, no al revés.
        </p>
      </CaseSection>

      <CaseMedia
        layout="duo"
        items={[
          { alt: 'shadowing · notas de campo con asesores' },
          { alt: 'co-diseño · workshops con ventas' },
        ]}
        caption="Proceso · investigación con usuarios expertos internos."
      />

      <CaseSection
        number="04"
        label="Decisiones"
        title="Tablet-first, offline-first, compacto."
      >
        <p>
          La herramienta vive en tablet (formato natural del asesor en
          piso), funciona offline para zonas con baja conectividad, y
          cada flujo se reduce a los pasos mínimos viables. Nada más —
          cada input extra es un segundo que el cliente espera.
        </p>
      </CaseSection>

      <CaseSection
        number="05"
        label="Solución"
        title="Cotización a cierre en un solo flujo."
      >
        <p>
          Consulta de stock, armado de carrito, aplicación de descuentos,
          cotización imprimible y cierre de venta en una sola pantalla
          continua. El asesor no pierde el hilo, el cliente no pierde la
          paciencia.
        </p>
      </CaseSection>

      <CaseMedia
        layout="wide"
        items={[{ alt: 'solución final · tablet UI · 21:9' }]}
        caption="Solución · flujo completo cotización → cierre."
      />

      <CaseSection
        number="06"
        label="Impacto"
        title="Cierre más rápido y menos fricción operativa."
      >
        <p>
          Los asesores cerraron ventas en menos tiempo y con menos saltos
          entre sistemas. La herramienta se volvió parte de su método
          cotidiano, no una capa más que tolerar.
        </p>
      </CaseSection>

      <CaseSection
        number="07"
        label="Aprendizaje"
        title="Diseñar para usuarios expertos internos exige humildad."
      >
        <p>
          Los asesores saben más del negocio que cualquier designer. La
          herramienta tenía que respetar su conocimiento, no imponerle una
          "mejor forma". Mi trabajo era remover fricción, no reeducar.
        </p>
      </CaseSection>

      <CaseNav
        prev={{ href: '/work/store-in-store', title: 'Store in Store Web' }}
        next={{ href: '/work/dartstation', title: 'DartStation' }}
      />

      <Footer />
    </>
  );
}
