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
        className="absolute left-[110px] top-0 bottom-0 w-px bg-line md:left-[200px]"
        aria-hidden
      />

      {items.map((item, i) => (
        <li
          key={i}
          className="grid grid-cols-[120px_1fr] items-start gap-5 border-b border-line py-5 md:grid-cols-[210px_1fr] md:gap-8 md:py-6"
        >
          <div className="flex items-center gap-3 pr-3">
            <span
              className="relative z-10 inline-flex h-5 w-5 shrink-0 items-center justify-center"
              aria-hidden
            >
              <span
                className={cn(
                  'rounded-full bg-brand-gradient',
                  item.milestone ? 'h-4 w-4 ring-2 ring-rose/40' : 'h-2.5 w-2.5'
                )}
              />
            </span>
            <span className="font-sans text-[15px] font-semibold leading-tight text-ink">
              {item.year}
            </span>
          </div>
          <div className="space-y-1.5">
            <p
              className={cn(
                'text-body font-semibold',
                item.milestone
                  ? 'bg-brand-gradient bg-clip-text text-transparent'
                  : 'text-ink'
              )}
            >
              {item.title}
            </p>
            <p className="text-body-sm text-ink-soft">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
