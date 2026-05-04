import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CaseNavSlot {
  href: string;
  title: string;
}

interface CaseNavProps {
  prev?: CaseNavSlot;
  next?: CaseNavSlot;
  className?: string;
}

/**
 * Navegación prev/next al final de cada case study.
 * Conecta los 6 cases en un carrusel circular.
 */
export function CaseNav({ prev, next, className }: CaseNavProps) {
  return (
    <nav
      className={cn(
        'border-t border-line',
        'py-12 md:py-16',
        className
      )}
      aria-label="Navegación entre cases"
    >
      <div className="container-portfolio">
        <div className="grid gap-8 md:grid-cols-2">
          {prev ? (
            <Link
              href={prev.href}
              className="group block text-left transition-base hover:opacity-80"
            >
              <div className="text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
                ← Caso anterior
              </div>
              <div className="mt-2 font-serif text-[clamp(20px,2.5vw,28px)] text-ink transition-base group-hover:text-blue">
                {prev.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next && (
            <Link
              href={next.href}
              className="group block text-right transition-base hover:opacity-80 md:text-right"
            >
              <div className="text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
                Siguiente caso →
              </div>
              <div className="mt-2 font-serif text-[clamp(20px,2.5vw,28px)] text-ink transition-base group-hover:text-blue">
                {next.title}
              </div>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
