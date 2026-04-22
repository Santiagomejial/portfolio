import {
  CaseHero,
  CaseSection,
  CaseMedia,
  CaseNav,
  Footer,
  type CaseMeta,
} from '@/components';

/**
 * CASE — Store in Store.
 * Retail Sodimac · 2024 · sistema multi-marca dentro del ecosistema digital.
 */

const META: CaseMeta[] = [
  { label: 'Rol', value: 'UX Lead' },
  { label: 'Periodo', value: '2024' },
  { label: 'Equipo', value: 'UX + Ingeniería' },
  { label: 'Alcance', value: 'Sistema multi-marca' },
];

export default function StoreInStoreCase() {
  return (
    <>
      <CaseHero
        breadcrumb={{ href: '/work', label: '← Volver a Work' }}
        caseCounter="Case 02 · Retail Sodimac"
        title={
          <>
            Store in Store.{' '}
            <span className="text-gradient">Tres marcas</span> coexistiendo
            dentro del mismo ecosistema digital.
          </>
        }
        sub="Diseño del sistema que permite a Petcenter, Carcenter y Constructor convivir dentro del mismo producto sin romper la coherencia del negocio principal."
        meta={META}
        heroVisual={
          <div
            className="aspect-[21/9] w-full overflow-hidden rounded-lg border border-line bg-bg-block"
            role="img"
            aria-label="Hero visual — reemplazar en Claude Design"
          >
            <div className="flex h-full items-center justify-center text-eyebrow uppercase tracking-eyebrow text-ink-mute">
              [ hero visual · Store in Store ]
            </div>
          </div>
        }
      />

      <CaseSection
        number="01"
        label="Contexto"
        title="Sodimac no es una sola marca: es un conjunto."
      >
        <p>
          Petcenter, Carcenter y Constructor operan bajo el paraguas de
          Sodimac pero con identidades, audiencias y propuestas de valor
          distintas. En físico cohabitan en la misma tienda. La pregunta
          era cómo replicar esa coexistencia en digital sin que el usuario
          se sienta rebotado entre marcas desconectadas.
        </p>
      </CaseSection>

      <CaseSection
        number="02"
        label="Problema"
        title="Un usuario, múltiples marcas, un solo journey."
      >
        <p>
          El riesgo era doble: si se unificaba todo bajo una sola identidad,
          cada marca perdía diferenciación; si se separaba en apps
          independientes, se fragmentaba el journey de compra y se perdía
          oportunidad de cross-sell.
        </p>
      </CaseSection>

      <CaseSection
        number="03"
        label="Proceso"
        title="Benchmark de retail físico + arquitectura de información."
      >
        <p>
          Estudiamos cómo el concepto "store within store" funciona en
          retail físico (supermercados con cafeterías, grandes superficies
          con brand shops) y lo trasladamos a principios de AI digital:
          dónde empieza cada marca, cómo transita el usuario entre ellas,
          qué elementos se comparten y cuáles son propios.
        </p>
      </CaseSection>

      <CaseMedia
        layout="trio"
        items={[
          { alt: 'benchmark retail físico' },
          { alt: 'arquitectura de información multi-marca' },
          { alt: 'flujos de switching entre marcas' },
        ]}
        caption="Proceso · benchmarking, AI y flujos de switching."
      />

      <CaseSection
        number="04"
        label="Decisiones"
        title="Una shell compartida, con theming por marca."
      >
        <p>
          Definimos una shell de navegación compartida (búsqueda, carrito,
          cuenta, checkout) con un sistema de theming que adapta color,
          tipografía de marca y tono editorial por cada "store". Las
          pantallas de catálogo, PDP y promos viven dentro de cada marca,
          pero la capa transaccional es única.
        </p>
      </CaseSection>

      <CaseSection
        number="05"
        label="Solución"
        title="Un producto, tres identidades, cero fragmentación."
      >
        <p>
          El usuario navega entre Petcenter, Carcenter y Constructor como si
          caminara entre departamentos de una misma tienda. Cada marca
          conserva su personalidad; el sistema conserva su coherencia.
          Checkout, cuenta y loyalty funcionan transversalmente.
        </p>
      </CaseSection>

      <CaseMedia
        layout="wide"
        items={[{ alt: 'showcase · las tres marcas en contexto · 21:9' }]}
        caption="Showcase · coexistencia visual de las tres marcas."
      />

      <CaseSection
        number="06"
        label="Impacto"
        title="Base para escalar la estrategia multi-marca."
      >
        <p>
          El sistema funcionó como base para integrar futuras extensiones de
          marca dentro del ecosistema sin tener que reconstruir
          infraestructura digital cada vez. Hoy sigue siendo el patrón de
          referencia interno.
        </p>
      </CaseSection>

      <CaseSection
        number="07"
        label="Aprendizaje"
        title="Los sistemas multi-marca son más AI que branding."
      >
        <p>
          La intuición inicial era un problema de identidad visual. Resultó
          ser un problema de arquitectura de información: qué comparten, qué
          separan, cómo transita el usuario. El branding vino después — y
          fue fácil una vez el esqueleto estaba resuelto.
        </p>
      </CaseSection>

      <CaseNav
        prev={{ href: '/work/homecenter', title: 'App Homecenter' }}
        next={{ href: '/work/kioscos-digitales', title: 'Kioscos Digitales' }}
      />

      <Footer />
    </>
  );
}
