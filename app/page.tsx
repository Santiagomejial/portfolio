import {
  Eyebrow,
  SectionHead,
  ChipRow,
  PullQuote,
  PageHero,
  WorkCard,
  MetricCard,
  CTABlock,
  Footer,
  Timeline,
  type TimelineItem,
} from '@/components';

/**
 * HOME — alta fidelidad (Paso 3).
 * Santiago Mejía · Product Designer + Product Owner.
 * Posicionamiento híbrido: el diseñador que ahora es dueño del producto que diseñó.
 */

const TIMELINE: TimelineItem[] = [
  {
    year: '2021',
    title: 'Proyectos fundacionales',
    description:
      'DartStation y LeClop. Primera inmersión en UX/UI aplicado — del background de Diseño Industrial al producto digital.',
  },
  {
    year: '2022',
    title: 'UX Lead retail · Sodimac',
    description:
      'Kioscos Digitales y Asistentes de Compra. Diseño de experiencias híbridas tienda–digital para el retail de mejoramiento del hogar más grande del país.',
  },
  {
    year: '2024',
    title: 'Store in Store',
    description:
      'Petcenter, Carcenter y Constructor. Sistema multi-marca que convive dentro de un mismo ecosistema digital.',
  },
  {
    year: 'Sep 2024',
    title: 'UX Lead · App Homecenter',
    description:
      'A cargo de un equipo de 5 diseñadores. Rediseño integral de la experiencia end-to-end de la app.',
  },
  {
    year: 'Abr 2025',
    title: 'Release Flutter',
    description:
      'Migración completa a Flutter con la experiencia rediseñada. Hito técnico y de producto para el equipo.',
    milestone: true,
  },
  {
    year: 'Jul 2025',
    title: 'BA / Product Owner',
    description:
      'Transición a PO del producto que diseñé. Lidero un equipo de 6 y la evolución del backlog con foco en KPIs de retail.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        eyebrow="Product Designer · Product Owner · Bogotá, CO"
        title={
          <>
            Diseño productos digitales y después los{' '}
            <span className="text-gradient">evoluciono como dueño</span> del
            producto.
          </>
        }
        sub="Hoy lidero la App Homecenter & Constructor, el retail de mejoramiento del hogar más grande de Colombia. Mi diferencial está en recorrer el ciclo completo: concebir, diseñar y después ser responsable de cómo crece."
      >
        <ChipRow
          items={[
            'Actualmente BA/PO @ Sodimac',
            'Background UX/UI · Diseño Industrial',
            'Bilingüe ES · EN',
            'Disponible remoto',
          ]}
        />
      </PageHero>

      {/* WORK */}
      <section id="work" className="container-portfolio py-20 md:py-28">
        <SectionHead
          label="01 · Selected Work"
          title={
            <>
              Seis cases que cuentan un arco claro:{' '}
              <span className="text-gradient">digital → retail → app → PO</span>.
            </>
          }
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Featured — Homecenter */}
          <WorkCard
            href="/work/homecenter"
            featured
            className="md:col-span-12"
            meta={['2024 → hoy', 'UX Lead → Product Owner', 'Sodimac', 'Featured']}
            title="App Homecenter & Constructor"
            description="Del diseño al manejo del producto. Rediseño integral, migración a Flutter y evolución del backlog como PO. El case principal del portafolio."
          />
          {/* Fila 2 — dos cards medianas */}
          <WorkCard
            href="/work/kioscos-digitales"
            className="md:col-span-6"
            meta={['2022 → 2024', 'UX Lead', 'Sodimac']}
            title="Kioscos Digitales"
            description="Autogestión en tienda física. Conecta el mundo digital con la experiencia en piso de venta para descongestionar puntos de atención."
          />
          <WorkCard
            href="/work/asistentes-compra"
            className="md:col-span-6"
            meta={['2022 → 2024', 'UX Lead', 'Sodimac']}
            title="Asistentes de Compra"
            description="Herramienta para asesores en tienda. Acelera la búsqueda de producto, cotización y cierre de venta asistida."
          />
          {/* Fila 3 — store-in-store full */}
          <WorkCard
            href="/work/store-in-store"
            className="md:col-span-12"
            meta={['2024', 'UX Lead', 'Sodimac']}
            title="Store in Store"
            description="Sistema multi-marca dentro de un mismo ecosistema digital. Petcenter, Carcenter y Constructor coexistiendo sin romper la coherencia."
          />
          {/* Fila 4 — dos cards fundacionales */}
          <WorkCard
            href="/work/dartstation"
            className="md:col-span-6"
            meta={['2021', 'UX/UI Designer']}
            title="DartStation"
            description="Proyecto fundacional. Transición desde Diseño Industrial al pensamiento de producto digital."
          />
          <WorkCard
            href="/work/leclop"
            className="md:col-span-6"
            meta={['2021', 'UX/UI Designer']}
            title="LeClop"
            description="Ejercicio temprano de diseño de experiencias digitales end-to-end."
          />
        </div>
      </section>

      {/* SNAPSHOT — facts verificables, no performance KPIs (pendiente de validar) */}
      <section
        id="snapshot"
        className="container-portfolio border-t border-line py-20 md:py-28"
      >
        <Eyebrow className="mb-10">02 · Snapshot</Eyebrow>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <MetricCard label="Años en retail digital" value="4+" />
          <MetricCard label="Personas lideradas" value="11" unit="ppl" />
          <MetricCard label="Cases documentados" value="6" />
          <MetricCard
            label="Roles en el ciclo"
            value="3"
            unit="UX → Lead → PO"
          />
        </div>
      </section>

      {/* PULL QUOTE — la tesis del portafolio */}
      <section className="container-portfolio border-t border-line py-20 md:py-28">
        <PullQuote
          highlight="cambia tu forma de pensar"
          attribution="— Tesis personal · case study App Homecenter"
        >
          Diseñar algo y después ser el dueño de su evolución cambia tu forma de
          pensar producto para siempre.
        </PullQuote>
      </section>

      {/* TIMELINE */}
      <section
        id="about-preview"
        className="container-portfolio border-t border-line py-20 md:py-28"
      >
        <SectionHead
          label="03 · Trayectoria"
          title="Un arco lineal: del diseño al producto."
          className="mb-12"
        />
        <Timeline items={TIMELINE} />
      </section>

      {/* CTA */}
      <CTABlock
        title={
          <>
            ¿Construimos algo <span className="text-gradient">juntos</span>?
          </>
        }
        sub="Abierto a conversar sobre roles senior híbridos Product Owner + Product Designer. Remoto o en Colombia."
      />

      {/* Footer */}
      <Footer />
    </>
  );
}
