import { cn } from '@/lib/utils';
import { Eyebrow } from './eyebrow';

interface PageHeroProps {
  /** Pre-título pequeño encima del h1 */
  eyebrow?: string;
  /** Título principal — string o ReactNode para poder incluir <span> con gradiente */
  title: React.ReactNode;
  /** Override del tamaño del título. Default: 'display-xl'. Útil para heroes más sobrios. */
  titleClassName?: string;
  /** Párrafo descriptivo debajo del título */
  sub?: React.ReactNode;
  /** CTAs, meta strip u otro contenido custom debajo del sub */
  children?: React.ReactNode;
  /** Slot opcional para media a la derecha (retrato en /about) */
  media?: React.ReactNode;
  className?: string;
}

/**
 * Hero genérico para /, /about, /work.
 * Para case studies usar <CaseHero /> que tiene estructura diferente.
 */
export function PageHero({
  eyebrow,
  title,
  titleClassName,
  sub,
  children,
  media,
  className,
}: PageHeroProps) {
  const hasMedia = Boolean(media);

  return (
    <section className={cn('pt-32 pb-20 md:pt-40 md:pb-24', className)}>
      <div
        className={cn(
          'container-portfolio',
          hasMedia && 'grid gap-12 md:grid-cols-12 md:items-center'
        )}
      >
        <div className={hasMedia ? 'md:col-span-8' : ''}>
          {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
          <h1 className={cn(titleClassName ?? 'display-xl', 'text-ink')}>
            {title}
          </h1>
          {sub && (
            <p className="text-body-lg mt-6 max-w-2xl text-ink">
              {sub}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
        {hasMedia && <div className="md:col-span-4">{media}</div>}
      </div>
    </section>
  );
}
