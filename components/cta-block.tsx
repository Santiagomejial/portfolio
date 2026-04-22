import { cn } from '@/lib/utils';

interface CTABlockProps {
  /** Título grande — puede incluir <span> con gradiente */
  title: React.ReactNode;
  /** Sub-texto opcional (descripción corta o email) */
  sub?: React.ReactNode;
  /** Email para el mailto link. Default: santiagomejial.sml@gmail.com */
  email?: string;
  /** Texto del link. Default: el email */
  emailLabel?: string;
  className?: string;
}

/**
 * Bloque grande de llamada al contacto.
 * Cierra Home, About, Work listing y cada case study.
 */
export function CTABlock({
  title,
  sub,
  email = 'santiagomejial.sml@gmail.com',
  emailLabel,
  className,
}: CTABlockProps) {
  return (
    <section className={cn('py-20 md:py-24', className)}>
      <div className="container-portfolio">
        <h2 className="display-lg text-ink">{title}</h2>
        {sub && (
          <p className="text-body-lg mt-4 max-w-2xl text-ink-soft">{sub}</p>
        )}
        <div className="mt-8">
          <a
            href={`mailto:${email}`}
            className={cn(
              'inline-flex items-center gap-2',
              'text-body-lg font-medium text-ink',
              'border-b border-line pb-1',
              'transition-base hover:border-blue hover:text-blue'
            )}
          >
            {emailLabel ?? email} →
          </a>
        </div>
      </div>
    </section>
  );
}
