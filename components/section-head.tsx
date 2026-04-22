import { cn } from '@/lib/utils';
import { Eyebrow } from './eyebrow';

interface SectionHeadProps {
  label: string;
  title: React.ReactNode;
  className?: string;
  /** Alinear centrado (default: izquierda) */
  center?: boolean;
}

/**
 * Cabecera de sección: eyebrow + título en serif.
 * Usada dentro de cualquier página para abrir una sección.
 */
export function SectionHead({ label, title, className, center = false }: SectionHeadProps) {
  return (
    <header className={cn('space-y-4', center && 'text-center', className)}>
      <Eyebrow>{label}</Eyebrow>
      <h2 className="display-md text-ink">{title}</h2>
    </header>
  );
}
