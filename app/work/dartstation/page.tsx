import {
  CaseHero,
  CaseSection,
  CaseMedia,
  CaseNav,
  Footer,
  type CaseMeta,
} from '@/components';

/**
 * CASE — DartStation.
 * Fundacional · 2021 · primer proyecto digital end-to-end post Diseño Industrial.
 */

const META: CaseMeta[] = [
  { label: 'Rol', value: 'UX/UI Designer' },
  { label: 'Periodo', value: '2021' },
  { label: 'Equipo', value: 'Individual' },
  { label: 'Alcance', value: 'Digital end-to-end' },
];

export default function DartStationCase() {
  return (
    <>
      <CaseHero
        breadcrumb={{ href: '/work', label: '← Volver a Work' }}
        caseCounter="Case 05 · Fundacional · 2021"
        title={
          <>
            DartStation.{' '}
            <span className="text-gradient">El primer puente</span> del
            objeto físico al pixel.
          </>
        }
        sub="Proyecto fundacional. Aquí aterricé por primera vez el método del Diseño Industrial al producto digital: research, arquitectura, interfaz y prototipado en un mismo ejercicio contenido."
        meta={META}
        heroVisual={
          <div
            className="aspect-[21/9] w-full overflow-hidden rounded-lg border border-line bg-bg-block"
            role="img"
            aria-label="Hero visual"
          >
            <div className="flex h-full items-center justify-center text-eyebrow uppercase tracking-eyebrow text-ink-mute">
              [ hero visual · DartStation ]
            </div>
          </div>
        }
      />

      <CaseSection
        number="01"
        label="Contexto"
        title="Un proyecto como punto de transición de carrera."
      >
        <p>
          Acababa de terminar Diseño Industrial en la Javeriana. Sabía
          diseñar objetos físicos; no había diseñado un producto digital
          completo. DartStation fue el vehículo para probar si el método
          que aprendí en la universidad aplicaba a otro medio.
        </p>
      </CaseSection>

      <CaseSection
        number="02"
        label="Problema"
        title="Traducir método, no solo cambiar herramientas."
      >
        <p>
          Cambiar de Rhino a Figma es trivial. Cambiar de pensar en
          materiales, uso y contexto a pensar en flujos, estados y
          jerarquía es otra cosa. La pregunta era si el rigor metodológico
          se traducía o si tocaba aprender de cero.
        </p>
      </CaseSection>

      <CaseSection
        number="03"
        label="Proceso"
        title="Mismo método, nuevo medio."
      >
        <p>
          Apliqué lo que sabía: entender usuario y contexto, definir
          requerimientos, iterar en baja fidelidad antes de detalle, probar.
          El método industrial se sostuvo — cambiaron los outputs, no la
          lógica.
        </p>
      </CaseSection>

      <CaseMedia
        layout="trio"
        items={[
          { alt: 'research · brief inicial' },
          { alt: 'wireframes · iteración baja fidelidad' },
          { alt: 'UI final · pantallas clave' },
        ]}
        caption="Proceso · mismo método, nuevo medio."
      />

      <CaseSection
        number="04"
        label="Decisiones"
        title="Pocas pantallas, bien resueltas."
      >
        <p>
          Al ser un ejercicio contenido, el alcance era limitado. La
          decisión fue apostar por profundidad sobre amplitud: menos
          pantallas, cada una defendible hasta el último pixel.
        </p>
      </CaseSection>

      <CaseSection
        number="05"
        label="Solución"
        title="Un producto digital funcional, con método industrial detrás."
      >
        <p>
          El resultado fue un producto pequeño pero coherente. Más
          importante que el entregable: la confirmación de que el paso de
          Diseño Industrial a producto digital era viable sin tener que
          desaprender.
        </p>
      </CaseSection>

      <CaseMedia
        layout="full"
        items={[{ alt: 'solución final · DartStation showcase', aspect: '16/9' }]}
      />

      <CaseSection
        number="06"
        label="Impacto"
        title="El proyecto que abrió la puerta a retail."
      >
        <p>
          DartStation fue la muestra que me abrió las primeras puertas en
          producto digital. Sin este ejercicio, probablemente no habría
          llegado a UX Lead en Sodimac un año después.
        </p>
      </CaseSection>

      <CaseSection
        number="07"
        label="Aprendizaje"
        title="El método industrial se traduce — y aporta algo distinto."
      >
        <p>
          La forma de pensar desde objeto, uso y contexto no se cancela en
          digital: le da a las decisiones de UX una base física que a
          muchos productos digitales les falta. Esa diferencia se sigue
          notando hoy.
        </p>
      </CaseSection>

      <CaseNav
        prev={{ href: '/work/asistentes-compra', title: 'Asistentes de Compra' }}
        next={{ href: '/work/leclop', title: 'LeClop' }}
      />

      <Footer />
    </>
  );
}
