import Image from 'next/image';
import {
  Eyebrow,
  SectionHead,
  ChipRow,
  PageHero,
  CaseSection,
  Footer,
  Timeline,
  HighlightTitle,
  type TimelineItem,
} from '@/components';
import { HOME } from '@/content/home';

/**
 * ABOUT — /about
 * Página editorial: quién es Santiago, cómo trabaja, por qué este arco.
 * Copy final y foto portrait los reemplaza Santiago en la fase Claude Design.
 */

const RESUMEN_TEXT =
  'Product Owner y diseñador UX / UI con más de cuatro años impulsando transformación digital en retail y servicios. Diseñé y lideré el lanzamiento de la App Homecenter — canal móvil de la empresa líder en mejoramiento del hogar en Colombia. Esta doble perspectiva diseñador → PO me permite materializar productos que responden al usuario y al negocio simultáneamente, traduciendo necesidades complejas en soluciones rentables. Mi rol actual lidera la estrategia del canal digital con impacto directo en ventas y conversión.';

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

      {/* 01 — RESUMEN */}
      <section
        id="resumen"
        className="border-t border-line py-12 md:py-16"
      >
        <div className="container-portfolio">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-3">
              <div className="sticky top-28">
                <div className="text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
                  01 · Resumen
                </div>
              </div>
            </div>
            <div className="md:col-span-9">
              <p className="text-body-lg leading-relaxed text-ink-soft">
                {RESUMEN_TEXT}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="container-portfolio border-t border-line py-20 md:py-28"
      >
        <SectionHead
          label="02 · Skills"
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
            <Eyebrow className="mb-4">Habilidades</Eyebrow>
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

      {/* TRAYECTORIA — sincronizada con Home (single source of truth) */}
      <section
        id="trajectory"
        className="container-portfolio border-t border-line py-20 md:py-28"
      >
        <SectionHead
          label="03 · Trayectoria Profesional"
          title={<HighlightTitle {...HOME.timeline.title} />}
          className="mb-12"
        />
        <Timeline items={HOME.timeline.items as TimelineItem[]} />
      </section>

      {/* FUERA DEL PRODUCTO — toque personal */}
      <CaseSection
        number="04"
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
