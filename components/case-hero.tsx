import { cn } from '@/lib/utils';
import { Eyebrow } from './eyebrow';
import { BackButton } from './back-button';
import { FloatingBackButton } from './floating-back-button';

export interface CaseMeta {
  label: string;
  /** Texto del valor. Soporta '\n' para saltos de línea (white-space: pre-line). */
  value: string;
}

interface CaseHeroProps {
  /** Botón "Volver" con history-back y fallback. */
  breadcrumb?: { label: string; fallbackHref: string };
  /** "Caso 01 · Featured" */
  caseCounter?: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  /** 3-4 campos: Rol / Periodo / Equipo / Alcance */
  meta: CaseMeta[];
  /** Imagen hero. Si no se provee, se renderiza placeholder. */
  heroVisual?: React.ReactNode;
  className?: string;
}

export function CaseHero({
  breadcrumb,
  caseCounter,
  title,
  sub,
  meta,
  heroVisual,
  className,
}: CaseHeroProps) {
  // Grid responsivo: si hay 3 metas, 3 columnas en md+. Si hay 4, 4 columnas.
  const metaCols = meta.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4';

  return (
    <section className={cn('pt-28 md:pt-32', className)}>
      {breadcrumb && (
        <FloatingBackButton
          fallbackHref={breadcrumb.fallbackHref}
          label={breadcrumb.label}
        />
      )}
      <div className="container-portfolio">
        {breadcrumb && (
          <nav className="py-5 text-body-sm text-ink-mute">
            <BackButton fallbackHref={breadcrumb.fallbackHref}>
              {breadcrumb.label}
            </BackButton>
          </nav>
        )}

        <header className="pt-10 pb-8 md:pt-14 md:pb-12">
          {caseCounter && (
            <Eyebrow accent className="mb-5">
              {caseCounter}
            </Eyebrow>
          )}
          <h1 className="display-xl text-ink">{title}</h1>
          {sub && (
            <p className="text-body-lg mt-6 max-w-3xl text-ink-soft">{sub}</p>
          )}
        </header>

        {/* Meta grid */}
        <dl className={cn('grid grid-cols-2 gap-6 border-t border-line pt-6', metaCols)}>
          {meta.map((m) => (
            <div key={m.label}>
              <dt className="text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
                {m.label}
              </dt>
              <dd className="mt-1.5 whitespace-pre-line text-body text-ink">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Hero visual */}
        <div className="mt-10 md:mt-12">
          {heroVisual ?? (
            <div className="aspect-[21/9] rounded-xl border border-dashed border-line bg-bg-block" />
          )}
        </div>
      </div>
    </section>
  );
}
