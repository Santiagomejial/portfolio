import { cn } from '@/lib/utils';

interface CaseSectionProps {
  /** Número visible en el eyebrow, ej. '01', '02' */
  number: string;
  /** Label corto: Contexto / Problema / Proceso / etc. */
  label: string;
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  /** Si true, dibuja borde superior azul de separador de capítulo */
  chapterBreak?: boolean;
}

/**
 * Sección numerada dentro de un case study.
 * Se usa en /work/[slug] para las 7 secciones del template:
 * Contexto → Problema → Proceso → Decisiones → Solución → Impacto → Aprendizaje.
 */
export function CaseSection({
  number,
  label,
  title,
  children,
  className,
  chapterBreak = false,
}: CaseSectionProps) {
  return (
    <section
      className={cn(
        'py-12 md:py-16',
        'border-t',
        chapterBreak ? 'border-t-2 border-blue' : 'border-line',
        className
      )}
    >
      <div className="container-portfolio">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="sticky top-28 space-y-1.5">
              <div className="text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
                {number} · {label}
              </div>
            </div>
          </div>
          <div className="md:col-span-9">
            <h2 className="display-md mb-6 text-ink">{title}</h2>
            <div className="space-y-6 text-body-lg text-ink-soft">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
