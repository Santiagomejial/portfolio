import { cn } from '@/lib/utils';

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  /** Si true, pinta el círculo del marcador con gradiente (hito importante) */
  milestone?: boolean;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

/**
 * Timeline vertical de trayectoria.
 * Vive en /about. El año se renderiza en serif color blue,
 * con un marcador lineal a la izquierda.
 */
export function Timeline({ items, className }: TimelineProps) {
  return (
    <ol className={cn('relative', className)}>
      {/* Línea vertical */}
      <span
        className="absolute left-[70px] top-0 bottom-0 w-px bg-line md:left-[140px]"
        aria-hidden
      />

      {items.map((item, i) => (
        <li
          key={i}
          className="grid grid-cols-[80px_1fr] items-start gap-6 border-b border-line py-5 md:grid-cols-[160px_1fr] md:gap-8 md:py-6"
        >
          <div className="flex items-center gap-3">
            <span
              className={cn(
                'relative z-10 h-2.5 w-2.5 shrink-0 rounded-full border-2',
                item.milestone
                  ? 'border-transparent bg-brand-gradient'
                  : 'border-blue bg-bg'
              )}
              aria-hidden
            />
            <span className="font-serif text-[20px] leading-none text-blue">
              {item.year}
            </span>
          </div>
          <div className="space-y-1.5">
            <p className="text-body font-semibold text-ink">{item.title}</p>
            <p className="text-body-sm text-ink-soft">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
