import {
  CaseHero,
  CaseSection,
  CaseMedia,
  CaseNav,
  Footer,
  type CaseMeta,
} from '@/components';

/**
 * CASE — LeClop.
 * Fundacional · 2021 · segundo proyecto digital end-to-end.
 */

const META: CaseMeta[] = [
  { label: 'Rol', value: 'UX/UI Designer' },
  { label: 'Periodo', value: '2021' },
  { label: 'Equipo', value: 'Individual' },
  { label: 'Alcance', value: 'Research → UI' },
];

export default function LeClopCase() {
  return (
    <>
      <CaseHero
        breadcrumb={{ href: '/work', label: '← Volver a Work' }}
        caseCounter="Case 06 · Fundacional · 2021"
        title={
          <>
            LeClop.{' '}
            <span className="text-gradient">Refinando el método</span> antes
            de entrar a retail.
          </>
        }
        sub="Segundo proyecto fundacional. Ejercicio contenido de research, arquitectura de información y UI en un solo flujo — la consolidación del método digital antes del salto profesional a Sodimac."
        meta={META}
        heroVisual={
          <div
            className="aspect-[21/9] w-full overflow-hidden rounded-lg border border-line bg-bg-block"
            role="img"
            aria-label="Hero visual"
          >
            <div className="flex h-full items-center justify-center text-eyebrow uppercase tracking-eyebrow text-ink-mute">
              [ hero visual · LeClop ]
            </div>
          </div>
        }
      />

      <CaseSection
        number="01"
        label="Contexto"
        title="Después de DartStation, tocaba consolidar."
      >
        <p>
          DartStation demostró que el método funcionaba. LeClop fue el
          siguiente paso: aplicar el mismo rigor en un contexto distinto,
          con más autonomía y menos andamio académico.
        </p>
      </CaseSection>

      <CaseSection
        number="02"
        label="Problema"
        title="Un ejercicio completo en pocas semanas."
      >
        <p>
          El alcance era un producto digital end-to-end: research,
          arquitectura, UI y prototipado — en un timeline corto. El reto
          era mantener la disciplina sin saltar pasos.
        </p>
      </CaseSection>

      <CaseSection
        number="03"
        label="Proceso"
        title="Research contenido, decisiones documentadas."
      >
        <p>
          Cada decisión quedó documentada con su razón: qué problema
          resolvía, qué alternativa se evaluó, por qué se eligió esa. Es un
          hábito que mantengo desde entonces — sigue siendo la forma más
          rápida de detectar cuándo una decisión no está bien fundamentada.
        </p>
      </CaseSection>

      <CaseMedia
        layout="duo"
        items={[
          { alt: 'research + arquitectura de información' },
          { alt: 'UI final · flujos principales' },
        ]}
        caption="Proceso · de research a UI con decisiones documentadas."
      />

      <CaseSection
        number="04"
        label="Decisiones"
        title="Priorizar claridad sobre sofisticación."
      >
        <p>
          Al ser un proyecto de formación, la tentación era demostrar
          destreza visual. La decisión fue al contrario: pantallas simples,
          defensibles, sin recursos decorativos. Lo que se aprende aquí se
          sostiene; lo decorativo envejece en meses.
        </p>
      </CaseSection>

      <CaseSection
        number="05"
        label="Solución"
        title="Un producto digital defensible, decisión por decisión."
      >
        <p>
          El entregable final fue un producto digital completo — pero lo
          valioso fue el expediente de decisiones detrás. Ese es el
          artefacto que me llevé al siguiente proyecto profesional.
        </p>
      </CaseSection>

      <CaseMedia
        layout="wide"
        items={[{ alt: 'showcase final · LeClop · 21:9' }]}
      />

      <CaseSection
        number="06"
        label="Impacto"
        title="El puente a Sodimac."
      >
        <p>
          Con DartStation y LeClop como evidencia del método, entré como
          UX/UI a Sodimac en 2022. Los dos proyectos fundacionales
          funcionaron como portafolio mínimo viable — pequeños, pero con
          suficiente profundidad para sostener una conversación de hiring.
        </p>
      </CaseSection>

      <CaseSection
        number="07"
        label="Aprendizaje"
        title="Documentar decisiones es el mejor hábito que desarrollé."
      >
        <p>
          La fatiga y la prisa son lo que corrompe el método. Documentar
          decisiones es el antídoto: te obliga a justificar, detecta
          decisiones apresuradas, y deja un rastro que alguien más puede
          revisar. Lo sigo haciendo hoy como PO, con backlog en vez de
          frames.
        </p>
      </CaseSection>

      <CaseNav
        prev={{ href: '/work/dartstation', title: 'DartStation' }}
        next={{ href: '/work/homecenter', title: 'App Homecenter — volver al inicio' }}
      />

      <Footer />
    </>
  );
}
