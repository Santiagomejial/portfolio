import Image from 'next/image';
import {
  Eyebrow,
  SectionHead,
  ChipRow,
  PageHero,
  CaseSection,
  Footer,
  Timeline,
  type TimelineItem,
} from '@/components';

/**
 * ABOUT — /about
 * Página editorial: quién es Santiago, cómo trabaja, por qué este arco.
 * Copy final y foto portrait los reemplaza Santiago en la fase Claude Design.
 */

const TIMELINE: TimelineItem[] = [
  {
    year: '2016 — 2020',
    title: 'Diseño Industrial · Pontificia Universidad Javeriana',
    description:
      'Formación en producto físico, ergonomía, materiales y procesos. La base para pensar el producto digital desde objeto, uso y contexto.',
  },
  {
    year: '2021',
    title: 'Transición al producto digital',
    description:
      'DartStation y LeClop. Primeros proyectos UX/UI aplicando el método de producto industrial a interfaces.',
  },
  {
    year: '2022 — 2024',
    title: 'UX Lead retail · Sodimac',
    description:
      'Kioscos Digitales, Asistentes de Compra y Store in Store. Diseño de experiencias híbridas tienda–digital.',
  },
  {
    year: 'Sep 2024',
    title: 'UX Lead App Homecenter',
    description:
      'A cargo de un equipo de 5 diseñadores. Rediseño integral de la app de retail más grande de Colombia.',
  },
  {
    year: 'Abr 2025',
    title: 'Release Flutter',
    description:
      'Migración completa a Flutter con la experiencia rediseñada. Cierre del ciclo de diseño.',
    milestone: true,
  },
  {
    year: 'Jul 2025 — hoy',
    title: 'BA / Product Owner',
    description:
      'Paso al rol de dueño del producto que diseñé. Lidero un equipo de 6 y la evolución del backlog.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO con media slot para portrait */}
      <PageHero
        eyebrow="Sobre mí"
        titleClassName="display-lg"
        title={
          <>
            Soy Santiago,{' '}
            <span className="text-gradient">Diseñador industrial</span>,{' '}
            <span className="text-gradient">UX/UI</span> y{' '}
            <span className="text-gradient">BA/Product Owner</span>.
          </>
        }
        media={
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-line">
            <Image
              src="/portrait.jpg"
              alt="Santiago Mejía L. — retrato"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 33vw, 100vw"
              priority
            />
            {/* Overlay sutil con gradient brand (azul → rosa) */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-brand-gradient opacity-25 mix-blend-overlay"
            />
            {/* Viñeta inferior tenue para integrar con el bg de la página */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg/40 to-transparent"
            />
          </div>
        }
      >
        <ChipRow
          items={[
            'Colombiano',
            'Diseñador UX/UI',
            'Digital Product Owner',
            'Investigación UX',
            'Design systems',
            'Gestión de proyectos',
          ]}
        />
      </PageHero>

      {/* 01 — ORIGEN */}
      <CaseSection
        number="01"
        label="Origen"
        title="Del objeto físico al producto digital."
      >
        <p>
          Estudié Diseño Industrial en la Pontificia Universidad Javeriana. Ahí
          aprendí a pensar el producto desde el objeto, el uso y el contexto —
          no solo desde la pantalla. Entendí que un buen diseño empieza mucho
          antes del pixel: en cómo la gente se relaciona con lo que usa.
        </p>
        <p>
          Esa manera de pensar me acompañó cuando hice la transición al
          producto digital. Trato cada feature como si fuera un objeto físico:
          con un propósito claro, materiales, tolerancias y una forma que debe
          resolver un problema real antes que verse bien.
        </p>
      </CaseSection>

      {/* 02 — FORMA DE TRABAJAR */}
      <CaseSection
        number="02"
        label="Forma de trabajar"
        title="Cómo abordo un problema de producto."
        chapterBreak
      >
        <p>
          Prefiero empezar por el problema antes que por la solución. Entiendo
          el negocio, hablo con el usuario, mapeo el flujo, y solo entonces
          abro Figma. En retail esto importa especialmente: un cambio en la PDP
          o en el checkout se traduce directamente en pesos.
        </p>
        <p>
          Como PO priorizo por impacto real sobre KPIs, no por volumen de
          requerimientos. Como designer defiendo el porqué de cada decisión
          hasta que pueda defenderlo solo con el diseño. Ambas disciplinas se
          alimentan: diseñar me hace mejor PO, y ser PO me vuelve más
          disciplinado como designer.
        </p>
      </CaseSection>

      {/* 03 — POR QUÉ ESTE ARCO */}
      <CaseSection
        number="03"
        label="Hipótesis"
        title="Por qué este arco diseño → PO es un diferencial."
      >
        <p>
          La mayoría de POs llegan desde negocio o desde ingeniería. Yo llegué
          desde el lado en que se define cómo se ve, cómo se siente y cómo se
          usa el producto. Eso cambia las conversaciones de refinamiento: no
          discuto solo alcance y esfuerzo, también hablo de coherencia,
          deudas de experiencia y oportunidades que no están en el backlog.
        </p>
        <p>
          Al mismo tiempo, haber diseñado el producto que hoy manejo me da un
          punto de vista muy específico: conozco las decisiones que tomamos y
          por qué. Eso me permite evolucionarlo sin romper lo que sí
          funcionaba.
        </p>
      </CaseSection>

      {/* SKILLS */}
      <section
        id="skills"
        className="container-portfolio border-t border-line py-20 md:py-28"
      >
        <SectionHead
          label="04 · Skills"
          title="Herramientas y ámbitos donde me muevo bien."
          className="mb-12"
        />
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Eyebrow className="mb-4">Product Owner / BA</Eyebrow>
            <ul className="space-y-2 text-body-lg text-ink-soft">
              <li>Gestión de backlog y priorización</li>
              <li>Definición y escritura de historias de usuario</li>
              <li>KPIs de retail y análisis de métricas</li>
              <li>Refinamiento y sprint planning</li>
              <li>Stakeholder management</li>
            </ul>
          </div>
          <div>
            <Eyebrow className="mb-4">Product Design / UX · UI</Eyebrow>
            <ul className="space-y-2 text-body-lg text-ink-soft">
              <li>Research y síntesis</li>
              <li>Arquitectura de información</li>
              <li>Design systems y componentes</li>
              <li>Prototipado e interacción</li>
              <li>UX writing y micro-copy</li>
            </ul>
          </div>
          <div>
            <Eyebrow className="mb-4">Herramientas</Eyebrow>
            <ul className="space-y-2 text-body-lg text-ink-soft">
              <li>Figma · FigJam</li>
              <li>Jira · Confluence</li>
              <li>Adobe Creative Suite</li>
              <li>Notion · Miro</li>
              <li>Basics de Flutter / Git</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TIMELINE extendido con educación */}
      <section
        id="trajectory"
        className="container-portfolio border-t border-line py-20 md:py-28"
      >
        <SectionHead
          label="05 · Trayectoria"
          title="De Javeriana a Product Owner."
          className="mb-12"
        />
        <Timeline items={TIMELINE} />
      </section>

      {/* FUERA DEL PRODUCTO — toque personal */}
      <CaseSection
        number="06"
        label="Fuera del producto"
        title="Lo que me mantiene curioso."
      >
        <p>
          Diseño industrial no se me quitó: sigo prototipando cosas físicas en
          mis ratos libres. Me interesa la tipografía editorial, el diseño de
          herramientas análogas, y la relación entre objeto y ritual.
        </p>
        <p>
          También soy un usuario obsesivo de apps — probablemente conozca más
          de un patrón de interacción de algún app que uso de seguido. Esa
          curiosidad sobre cómo la gente construye producto es, probablemente,
          el motor de todo lo demás.
        </p>
      </CaseSection>

      <Footer />
    </>
  );
}
