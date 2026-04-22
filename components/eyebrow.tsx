import { cn } from '@/lib/utils';

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  /** Si true, usa el color azul acento en vez de ink-mute */
  accent?: boolean;
  /** Si true, muestra la línea '—' prefijo editorial */
  dashed?: boolean;
}

/**
 * Label pequeño en caps con tracking amplio.
 * Usado para labels de sección, categorías, "Case 01/04", etc.
 */
export function Eyebrow({
  children,
  className,
  accent = false,
  dashed = true,
}: EyebrowProps) {
  return (
    <div
      className={cn(
        'text-eyebrow font-medium uppercase tracking-eyebrow',
        accent ? 'text-blue' : 'text-ink-mute',
        className
      )}
    >
      {dashed && <span aria-hidden>— </span>}
      {children}
    </div>
  );
}
