import {
  SectionHead,
  ChipRow,
  PageHero,
  WorkCard,
  CTABlock,
  Footer,
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
        eyebrow="Work · 6 cases · 2021 → hoy"
        title={
          <>
            Seis proyectos que cuentan un{' '}
            <span className="text-gradient">mismo arco</span>: del diseño al
            producto.
          </>
        }
        sub="Organizo los cases por capítulo, no por orden cronológico, para que se lea el recorrido: primero los años fundacionales, después el bloque retail en Sodimac, y en el centro el case principal — la App Homecenter, donde el arco se completa."
      >
        <ChipRow
          items={[
            'Todos los cases',
            'Retail Sodimac (4)',
            'Fundacionales 2021 (2)',
            'Featured: Homecenter',
          ]}
        />
      </PageHero>

      {/* CAPÍTULO 1 — RETAIL SODIMAC */}
      <section
        id="retail"
        className="container-portfolio border-t border-line py-20 md:py-28"
      >
        <SectionHead
          label="Capítulo 01 · Retail Sodimac"
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
            meta={[
              '2024 → hoy',
              'UX Lead → Product Owner',
              'Sodimac',
              'Featured',
            ]}
            title="App Homecenter & Constructor"
            description="Case principal del portafolio. Rediseño integral de la app, migración a Flutter y evolución del backlog como Product Owner del mismo producto que diseñé."
          />
          {/* Store in Store full */}
          <WorkCard
            href="/work/store-in-store"
            className="md:col-span-12"
            meta={['2024', 'UX Lead', 'Sodimac']}
            title="Store in Store"
            description="Sistema multi-marca dentro de un mismo ecosistema digital. Petcenter, Carcenter y Constructor coexistiendo sin romper la coherencia del producto principal."
          />
          {/* Kioscos + Asistentes en pareja */}
          <WorkCard
            href="/work/kioscos-digitales"
            className="md:col-span-6"
            meta={['2022 → 2024', 'UX Lead', 'Sodimac']}
            title="Kioscos Digitales"
            description="Autogestión en tienda física. Conecta el mundo digital con el piso de venta para descongestionar puntos de atención."
          />
          <WorkCard
            href="/work/asistentes-compra"
            className="md:col-span-6"
            meta={['2022 → 2024', 'UX Lead', 'Sodimac']}
            title="Asistentes de Compra"
            description="Herramienta interna para asesores en tienda. Acelera búsqueda de producto, cotización y cierre de venta asistida."
          />
        </div>
      </section>

      {/* CAPÍTULO 2 — FUNDACIONALES */}
      <section
        id="foundational"
        className="container-portfolio border-t border-line py-20 md:py-28"
      >
        <SectionHead
          label="Capítulo 02 · Fundacionales · 2021"
          title={
            <>
              Los dos primeros proyectos donde aterricé el{' '}
              <span className="text-gradient">método industrial</span> al
              producto digital.
            </>
          }
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          <WorkCard
            href="/work/dartstation"
            className="md:col-span-6"
            meta={['2021', 'UX/UI Designer']}
            title="DartStation"
            description="Primer proyecto digital end-to-end después de Diseño Industrial. La transición del objeto físico al pixel, con el mismo rigor de método."
          />
          <WorkCard
            href="/work/leclop"
            className="md:col-span-6"
            meta={['2021', 'UX/UI Designer']}
            title="LeClop"
            description="Ejercicio temprano de diseño de experiencias digitales. Research, arquitectura y UI en un mismo proyecto contenido."
          />
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        title={
          <>
            ¿Te interesa un case{' '}
            <span className="text-gradient">en particular</span>?
          </>
        }
        sub="Puedo profundizar en cualquiera de los seis — decisiones, trade-offs, aprendizajes — en una conversación 1:1."
      />

      <Footer />
    </>
  );
}
