import {
  CaseHero,
  CaseSection,
  CaseMedia,
  CaseNav,
  Footer,
  type CaseMeta,
} from '@/components';

/**
 * CASE — Kioscos Digitales.
 * Retail Sodimac · 2022–2024 · autogestión en tienda física.
 */

const META: CaseMeta[] = [
  { label: 'Rol', value: 'UX Lead' },
  { label: 'Periodo', value: '2022 — 2024' },
  { label: 'Equipo', value: 'UX + Retail + Hardware' },
  { label: 'Alcance', value: 'Experiencia tienda–digital' },
];

export default function KioscosCase() {
  return (
    <>
      <CaseHero
        breadcrumb={{ href: '/work', label: '← Volver a Work' }}
        caseCounter="Case 03 · Retail Sodimac"
        title={
          <>
            Kioscos Digitales.{' '}
            <span className="text-gradient">Autogestión</span> en tienda
            física.
          </>
        }
        sub="Sistema de kioscos interactivos dentro de las tiendas Homecenter para que los clientes puedan consultar stock, comparar productos y resolver dudas sin depender del asesor."
        meta={META}
        heroVisual={
          <div
            className="aspect-[21/9] w-full overflow-hidden rounded-lg border border-line bg-bg-block"
            role="img"
            aria-label="Hero visual"
          >
            <div className="flex h-full items-center justify-center text-eyebrow uppercase tracking-eyebrow text-ink-mute">
              [ hero visual · Kioscos Digitales ]
            </div>
          </div>
        }
      />

      <CaseSection
        number="01"
        label="Contexto"
        title="La tienda física como canal saturado."
      >
        <p>
          Homecenter tiene tiendas de gran superficie con miles de SKUs. En
          los picos de demanda, los asesores no dan abasto: clientes
          esperan, venta se cae, experiencia se deteriora. La pregunta era
          cómo liberar al asesor para que se enfoque en lo que aporta valor
          real.
        </p>
      </CaseSection>

      <CaseSection
        number="02"
        label="Problema"
        title="El cliente llega sabiendo poco — y necesita respuestas rápidas."
      >
        <p>
          Consultas tipo: ¿este producto está disponible en esta tienda?,
          ¿cuál es la diferencia entre estos dos?, ¿dónde lo encuentro en
          el piso? Son preguntas que no requieren experto, pero que hoy
          consumen tiempo de asesor.
        </p>
      </CaseSection>

      <CaseSection
        number="03"
        label="Proceso"
        title="Observación en tienda, no solo research en oficina."
      >
        <p>
          Pasamos horas en tienda observando cómo la gente pregunta, se
          mueve y decide. Mapeamos los puntos donde el cliente se detiene,
          los flujos más comunes y las rutas que hacen antes de contactar
          a un asesor. El kiosco tenía que insertarse en ese recorrido
          natural, no forzar uno nuevo.
        </p>
      </CaseSection>

      <CaseMedia
        layout="trio"
        items={[
          { alt: 'observación en tienda · mapping del recorrido' },
          { alt: 'flujos críticos · stock / comparación / ubicación' },
          { alt: 'prototipado hardware + software' },
        ]}
        caption="Proceso · del piso de venta al prototipo funcional."
      />

      <CaseSection
        number="04"
        label="Decisiones"
        title="UI pensada para uso semi-público y eventual."
      >
        <p>
          Tipografía grande, contraste alto, jerarquía muy marcada. Flujos
          cortos — el cliente no se va a sentar frente al kiosco 10 minutos.
          Touch targets grandes (dedos limpios, sucios, con guantes). Reset
          automático después de inactividad para proteger la privacidad del
          siguiente usuario.
        </p>
      </CaseSection>

      <CaseSection
        number="05"
        label="Solución"
        title="Kioscos como puente entre el asesor y el autoservicio."
      >
        <p>
          El kiosco cubre el 80% de las consultas rápidas. El 20% que
          requiere asesor queda mejor preparado: el cliente llega con
          información, el asesor aporta juicio experto. Ambos salen
          ganando.
        </p>
      </CaseSection>

      <CaseMedia
        layout="duo"
        items={[
          { alt: 'kiosco en tienda · uso real' },
          { alt: 'flujo de consulta · interacción' },
        ]}
        caption="Solución · kiosco en contexto y flujos principales."
      />

      <CaseSection
        number="06"
        label="Impacto"
        title="Liberación del asesor y mejor experiencia en piso."
      >
        <p>
          El despliegue redujo presión sobre los puntos de atención y
          mejoró el tiempo de resolución de dudas frecuentes. Convirtió
          al kiosco en un punto de contacto digital legítimo dentro del
          recorrido físico.
        </p>
      </CaseSection>

      <CaseSection
        number="07"
        label="Aprendizaje"
        title="Diseñar para contextos semi-públicos cambia las reglas."
      >
        <p>
          El usuario no te conoce, no te vuelve a ver, usa el producto una
          sola vez. No hay curva de aprendizaje: cada interacción tiene que
          ser obvia al primer segundo. Es otro deporte comparado con
          diseñar apps que se usan a diario.
        </p>
      </CaseSection>

      <CaseNav
        prev={{ href: '/work/store-in-store', title: 'Store in Store' }}
        next={{ href: '/work/asistentes-compra', title: 'Asistentes de Compra' }}
      />

      <Footer />
    </>
  );
}
