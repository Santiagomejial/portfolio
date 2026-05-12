import { cn } from '@/lib/utils';

interface ProcessHighlightCardProps {
  /** Número de orden, ej. "01" */
  number: string;
  /** Label corto, ej. "Discovery" */
  label: string;
  /** Título de la tarjeta */
  title: string;
  /** Descripción corta */
  description: string;
  /** Visual decorativo (SVG inline o composición). */
  visual: React.ReactNode;
  className?: string;
}

/**
 * Card decorativa para hitos de proceso dentro de un case study.
 * Reemplaza imágenes reales con composiciones gráficas que se adaptan
 * automáticamente al tema light/dark via tokens CSS.
 */
export function ProcessHighlightCard({
  number,
  label,
  title,
  description,
  visual,
  className,
}: ProcessHighlightCardProps) {
  return (
    <article
      className={cn(
        'group flex flex-col overflow-hidden rounded-xl border border-line bg-bg-elev',
        'transition-base hover:border-blue/40 hover:shadow-md',
        className
      )}
    >
      {/* Visual area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-line">
        {visual}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
          {number} · {label}
        </div>
        <h3 className="mt-3 font-sans text-[20px] font-semibold leading-tight tracking-tight text-ink">
          {title}
        </h3>
        <p className="mt-3 text-body-sm leading-relaxed text-ink-soft">
          {description}
        </p>
      </div>
    </article>
  );
}
