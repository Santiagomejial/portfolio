import { cn } from '@/lib/utils';

interface MetricCardProps {
  label: string;
  value: string;
  /** Sufijo pequeño a la derecha del valor, ej. 'MAU', '★', '%' */
  unit?: string;
  className?: string;
}

/**
 * Métrica clave: label pequeño + valor grande en serif.
 * Usada en strip de home y en /work/[slug] sección impacto.
 */
export function MetricCard({ label, value, unit, className }: MetricCardProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <div className="text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
        {label}
      </div>
      <div className="flex items-baseline gap-2">
        <span className="font-serif text-[clamp(32px,4vw,44px)] leading-none tracking-display text-blue">
          {value}
        </span>
        {unit && <span className="text-body-lg text-ink-mute">{unit}</span>}
      </div>
    </div>
  );
}
