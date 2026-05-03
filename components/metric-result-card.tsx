import { cn } from '@/lib/utils';

interface MetricResultCardProps {
  /** Cifra principal, ej. "+10%" / "4.8" / "+74%" */
  value: string;
  /** Label corto debajo del valor, ej. "Visitas" */
  label: string;
  /** Descripción complementaria opcional. */
  description?: string;
  /** Visual decorativo (SVG inline o composición). */
  visual: React.ReactNode;
  className?: string;
}

/**
 * Card de resultado/métrica para casos de estudio.
 * Visual decorativo arriba + cifra grande en serif + label + descripción opcional.
 * Pensado para grids de 2-4 cards mostrando KPIs.
 */
export function MetricResultCard({
  value,
  label,
  description,
  visual,
  className,
}: MetricResultCardProps) {
  return (
    <article
      className={cn(
        'group flex flex-col overflow-hidden rounded-xl border border-line bg-bg-elev',
        'transition-base hover:border-blue/40 hover:shadow-md',
        className
      )}
    >
      {/* Visual decorativo */}
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-line">
        {visual}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2 p-5 md:p-6">
        <div className="bg-brand-gradient bg-clip-text font-serif text-[clamp(28px,3.5vw,40px)] leading-none tracking-display text-transparent">
          {value}
        </div>
        <div className="text-eyebrow font-medium uppercase tracking-eyebrow text-ink">
          {label}
        </div>
        {description && (
          <div className="mt-1 text-body-sm leading-snug text-ink-soft">
            {description}
          </div>
        )}
      </div>
    </article>
  );
}
