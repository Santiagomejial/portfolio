import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Eyebrow } from './eyebrow';

export interface CaseMeta {
  label: string;
  value: string;
}

interface CaseHeroProps {
  /** Breadcrumb back link, ej. { href: '/work', label: 'Work' } */
  breadcrumb?: { href: string; label: string };
  /** "Case 01 / 04" */
  caseCounter?: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  /** 4 campos: Año / Rol / Cliente / Equipo */
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
  return (
    <section className={cn('pt-28 md:pt-32', className)}>
      <div className="container-portfolio">
        {breadcrumb && (
          <nav className="py-5 text-body-sm text-ink-mute">
            <Link href={breadcrumb.href} className="transition-base hover:text-ink">
              ← {breadcrumb.label}
            </Link>
          </nav>
        )}

        <header className="pt-10 pb-8 md:pt-14 md:pb-12">
          {caseCounter && <Eyebrow accent className="mb-5">{caseCounter}</Eyebrow>}
          <h1 className="display-xl text-ink">{title}</h1>
          {sub && (
            <p className="text-body-lg mt-6 max-w-3xl text-ink-soft">
              {sub}
            </p>
          )}
        </header>

        {/* Meta grid */}
        <dl className="grid grid-cols-2 gap-6 border-y border-line py-6 md:grid-cols-4">
          {meta.map((m) => (
            <div key={m.label}>
              <dt className="text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
                {m.label}
              </dt>
              <dd className="mt-1.5 text-body text-ink">{m.value}</dd>
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
