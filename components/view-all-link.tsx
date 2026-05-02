import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ViewAllLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Link "ver todos los X" con flecha animada.
 * Estilo eyebrow (uppercase, tracking ancho) para no competir con titles.
 */
export function ViewAllLink({ href, children, className }: ViewAllLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex items-center gap-2',
        'text-eyebrow font-medium uppercase tracking-eyebrow text-ink-soft',
        'transition-base hover:text-ink',
        className
      )}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className="inline-block transition-transform group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
