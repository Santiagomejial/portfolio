import {
  SectionHead,
  ChipRow,
  PageHero,
  WorkCard,
  Footer,
  FoundationalCardsWithCarousel,
} from '@/components';

/**
 * WORK listing — /work
 * Seis cases agrupados por capítulo: Sodimac (retail) y Fundacionales (2021).
 * Copy final y hero images los ajusta Santiago en la fase Claude Design.
 */

export default function WorkPage() {
  return (
    <>
      {/* HERO simple, sin media — foco en el mensaje */}
      <PageHero
        eyebrow="6 casos, de 2019 a hoy."
        titleClassName="display-lg"
        title={
          <>
            Proyectos que cuentan un mismo caso:{' '}
            <span className="text-gradient">del diseño al producto</span>.
          </>
        }
        sub="En 3 capítulos que cuentan mi historia laboral."
      >
        <ChipRow
          items={[
            'Fundacionales 2019',
            'UX/UI Homecenter',
            'App Homecenter',
          ]}
        />
      </PageHero>

      {/* CAPÍTULO 1 — HOMECENTER SODIMAC */}
      <section
        id="retail"
        className="container-portfolio border-t border-line py-20 md:py-28"
      >
        <SectionHead
          label="Capítulo 01 · Homecenter Sodimac"
          title={
            <>
              Cuatro productos dentro del retail de{' '}
              <span className="text-gradient">mejoramiento del hogar</span> más
              grande de Colombia.
            </>
          }
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Featured: Homecenter */}
          <WorkCard
            href="/work/homecenter"
            featured
            className="md:col-span-12"
            meta={['2024 → Hoy', 'UX Lead → BA/Product Owner', 'Sodimac']}
            title="App Homecenter y Constructor"
            description="Del diseño al manejo del producto. Rediseño completo y estructurado, nueva construcción front y su evolución e iteración como PO."
            image="/work/homecenter.jpg"
            imageAlt="App Homecenter y Constructor — pantallas rediseñadas en Flutter."
          />
          {/* Store in Store full */}
          <WorkCard
            href="/work/store-in-store"
            className="md:col-span-12"
            meta={['2022 → 2024', 'UX/UI Designer', 'Sodimac']}
            title="Store in Store Web"
            description="Conceptualización, ideación y construcción multimarca bajo experiencia Web de Homecenter y Constructor."
            image="/work/store-in-store.jpg"
            imageAlt="Store in Store — sistema multimarca dentro del ecosistema digital de Homecenter."
          />
          {/* Pantallas + Asistentes en pareja */}
          <WorkCard
            href="/work/kioscos-digitales"
            className="md:col-span-6"
            meta={['2022 → 2024', 'UX/UI Designer', 'Sodimac']}
            title="Pantallas digitales en tienda"
            description="Evolución UX del canal de venta digital en las tiendas Homecenter y Constructor."
            image="/work/pantallas-tienda.jpg"
            imageAlt="Pantallas digitales de venta dentro de las tiendas Homecenter y Constructor."
          />
          <WorkCard
            href="/work/asistentes-compra"
            className="md:col-span-6"
            meta={['2022 → 2024', 'UX/UI Designer', 'Sodimac']}
            title="Asistentes de compra digital"
            description="Creación de flujos de asistencia a compras de productos complejos o proyectos de hogar y construcción."
            image="/work/asistentes-compra.jpg"
            imageAlt="Asistentes de compra digital — flujos de acompañamiento para proyectos complejos."
          />
        </div>
      </section>

      {/* CAPÍTULO 2 — FUNDACIONALES */}
      <section
        id="foundational"
        className="container-portfolio border-t border-line py-20 md:py-28"
      >
        <SectionHead
          label="Capítulo 02 · Fundacionales"
          title={
            <>
              <span className="text-gradient">Primeros pasos</span> y
              recopilación de otros proyectos…
            </>
          }
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* 2 cards principales (con página interna) */}
          <WorkCard
            href="/work/leclop"
            className="md:col-span-6"
            meta={['2021', 'Diseño gráfico', 'UX/UI Designer', 'Co founder']}
            title="LeClop"
            description="Ejercicio temprano de diseño de experiencias digitales. Research, arquitectura y UI en un mismo proyecto contenido."
            image="/work/leclop.jpg"
            imageAlt="LeClop — identidad y experiencia digital de la marca de eventos."
          />
          <WorkCard
            href="/work/dartstation"
            className="md:col-span-6"
            meta={['2021', 'UX/UI Designer']}
            title="DartStation"
            description="Construcción de página web para marquetería y cuadros en la ciudad de Barranquilla, Colombia."
            image="/work/dartstation.jpg"
            imageAlt="DartStation — primer proyecto UX/UI end-to-end después de Diseño Industrial."
          />
          {/* 3 cards de recopilación que abren un carrusel modal */}
          <FoundationalCardsWithCarousel />
        </div>
      </section>

      <Footer />
    </>
  );
}
