import { cn } from '@/lib/utils';

interface ChipRowProps {
  items: readonly string[];
  className?: string;
  /** Variante visual: 'ghost' outline suave (default), 'solid' fondo bg-block */
  variant?: 'ghost' | 'solid';
}

/**
 * Fila horizontal de chips. Usado para metadata de case,
 * skills, tools, fechas, etc.
 */
export function ChipRow({ items, className, variant = 'ghost' }: ChipRowProps) {
  return (
    <ul className={cn('flex flex-wrap gap-2', className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            'rounded-full px-3 py-1',
            'text-[10px] font-medium uppercase tracking-eyebrow',
            variant === 'ghost' && 'border border-line text-ink-mute',
            variant === 'solid' && 'bg-bg-block text-ink-soft'
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
