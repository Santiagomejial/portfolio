import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface WorkCardProps {
  href: string;
  title: string;
  description: string;
  /** Chips arriba del título: año, rol, cliente, etc. */
  meta: readonly string[];
  /** Si true, expande el aspect-ratio a 21:9 tipo hero */
  featured?: boolean;
  /** URL o src de imagen. Si no se pasa, se pinta placeholder rayado */
  image?: string;
  /** Alt text de la imagen */
  imageAlt?: string;
  className?: string;
}

/**
 * Card de proyecto. Usada en Home featured y en /work listing.
 * Clickeable en toda el área. Hover state: borde azul + lift.
 */
export function WorkCard({
  href,
  title,
  description,
  meta,
  featured = false,
  image,
  imageAlt,
  className,
}: WorkCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group block overflow-hidden rounded-xl',
        'border border-line bg-bg-elev',
        'transition-base',
        'hover:-translate-y-0.5 hover:border-blue hover:shadow-lg',
        className
      )}
    >
      {/* Media */}
      <div
        className={cn(
          'relative overflow-hidden',
          featured ? 'aspect-[21/9]' : 'aspect-[16/9]'
        )}
      >
        {image ? (
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            className="object-cover transition-base group-hover:scale-[1.02]"
            sizes={featured ? '100vw' : '(min-width: 768px) 50vw, 100vw'}
          />
        ) : (
          <div
            className="h-full w-full"
            style={{
              background:
                'repeating-linear-gradient(135deg, var(--bg-elev) 0 8px, var(--bg-block) 8px 16px)',
            }}
            aria-hidden
          />
        )}
      </div>

      {/* Body */}
      <div className="p-5 md:p-6">
        <ul className="mb-3 flex flex-wrap gap-1.5">
          {meta.map((m) => (
            <li
              key={m}
              className="rounded-full border border-line px-2.5 py-1 text-[10px] font-medium uppercase tracking-eyebrow text-ink-mute"
            >
              {m}
            </li>
          ))}
        </ul>
        <h3 className={cn('font-serif font-normal tracking-display text-ink', featured ? 'text-[clamp(24px,3vw,32px)]' : 'text-[22px]')}>
          {title}
        </h3>
        <p className="mt-2 text-body-sm text-ink-soft">{description}</p>
      </div>
    </Link>
  );
}
