import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImageSlot {
  src?: string;
  alt: string;
  /** Caption corto encima de la imagen, ej. "Antes" / "Después" */
  label?: string;
}

interface BeforeAfterComparisonProps {
  before: ImageSlot;
  after: ImageSlot;
  /** Caption editorial debajo del par */
  caption?: string;
  /** Aspect ratio de cada imagen (ej. '16/9', '4/3'). Default: '16/9' */
  aspect?: string;
  /** Línea divisoria arriba del bloque. Default: true. */
  dividerTop?: boolean;
  /** Borde alrededor de cada imagen. Default: true. */
  imageBorder?: boolean;
  className?: string;
}

/**
 * Comparativo "antes / después" — dos imágenes con una flecha en medio.
 * Mobile: vertical (apilado, flecha apuntando abajo).
 * Desktop: horizontal (lado a lado, flecha apuntando derecha).
 *
 * Si una imagen no tiene `src`, se renderiza placeholder con el alt como hint.
 */
export function BeforeAfterComparison({
  before,
  after,
  caption,
  aspect = '16/9',
  dividerTop = true,
  imageBorder = true,
  className,
}: BeforeAfterComparisonProps) {
  return (
    <section
      className={cn(
        'container-portfolio py-16 md:py-20',
        dividerTop && 'border-t border-line',
        className
      )}
      aria-label="Comparativo antes y después"
    >
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
        <ImageHalf
          slot={before}
          fallbackLabel="Antes"
          aspect={aspect}
          bordered={imageBorder}
        />
        <ArrowDivider />
        <ImageHalf
          slot={after}
          fallbackLabel="Después"
          aspect={aspect}
          bordered={imageBorder}
        />
      </div>
      {caption && (
        <p className="mt-5 text-center text-eyebrow uppercase tracking-eyebrow text-ink-mute">
          {caption}
        </p>
      )}
    </section>
  );
}

function ImageHalf({
  slot,
  fallbackLabel,
  aspect,
  bordered,
}: {
  slot: ImageSlot;
  fallbackLabel: string;
  aspect: string;
  bordered: boolean;
}) {
  const label = slot.label ?? fallbackLabel;
  return (
    <div className="flex-1 w-full">
      <div className="mb-3 text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
        {label}
      </div>
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-lg bg-bg-block',
          bordered && 'border border-line'
        )}
        style={{ aspectRatio: aspect }}
        role="img"
        aria-label={slot.alt}
      >
        {slot.src ? (
          <Image
            src={slot.src}
            alt={slot.alt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-4 text-center text-eyebrow uppercase tracking-eyebrow text-ink-mute">
            [ {slot.alt} ]
          </div>
        )}
      </div>
    </div>
  );
}

/** Divisor con flecha — apunta a la derecha en desktop, abajo en mobile. */
function ArrowDivider() {
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line"
      style={{ background: 'var(--bg-elev)' }}
      aria-hidden
    >
      {/* Flecha abajo en mobile, derecha en desktop (rotación con clase) */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-ink rotate-90 md:rotate-0"
      >
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </div>
  );
}
