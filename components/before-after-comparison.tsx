'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { CarouselModal, type CarouselImage } from './carousel-modal';

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
 * Si una imagen tiene `src`, es clickeable y abre el CarouselModal con las
 * dos imágenes navegables (swipe + flechas + ESC).
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Solo las imágenes con src real se incluyen en el modal
  const modalImages: CarouselImage[] = [];
  if (before.src) {
    modalImages.push({
      src: before.src,
      alt: before.alt,
      caption: before.label ?? 'Antes',
    });
  }
  if (after.src) {
    modalImages.push({
      src: after.src,
      alt: after.alt,
      caption: after.label ?? 'Después',
    });
  }

  // Helper para abrir el modal en la imagen correcta (before o after)
  const openModalAt = (slotKey: 'before' | 'after') => {
    if (modalImages.length === 0) return;
    if (slotKey === 'before') {
      setOpenIndex(0);
    } else {
      setOpenIndex(modalImages.length === 2 ? 1 : 0);
    }
  };

  return (
    <>
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
            onClick={() => openModalAt('before')}
          />
          <ArrowDivider />
          <ImageHalf
            slot={after}
            fallbackLabel="Después"
            aspect={aspect}
            bordered={imageBorder}
            onClick={() => openModalAt('after')}
          />
        </div>
        {caption && (
          <p className="mt-5 text-center text-eyebrow uppercase tracking-eyebrow text-ink-mute">
            {caption}
          </p>
        )}
      </section>

      <CarouselModal
        open={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        title="Antes / Después"
        images={modalImages}
        index={openIndex ?? 0}
        onIndexChange={setOpenIndex}
      />
    </>
  );
}

function ImageHalf({
  slot,
  fallbackLabel,
  aspect,
  bordered,
  onClick,
}: {
  slot: ImageSlot;
  fallbackLabel: string;
  aspect: string;
  bordered: boolean;
  onClick: () => void;
}) {
  const label = slot.label ?? fallbackLabel;
  const isClickable = Boolean(slot.src);

  const innerImage = slot.src ? (
    <Image
      src={slot.src}
      alt={slot.alt}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
      sizes="(min-width: 768px) 50vw, 100vw"
    />
  ) : (
    <div className="flex h-full items-center justify-center px-4 text-center text-eyebrow uppercase tracking-eyebrow text-ink-mute">
      [ {slot.alt} ]
    </div>
  );

  return (
    <div className="flex-1 w-full">
      <div className="mb-3 text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
        {label}
      </div>
      {isClickable ? (
        <button
          type="button"
          onClick={onClick}
          aria-label={`Abrir imagen: ${slot.alt}`}
          className={cn(
            'group relative w-full overflow-hidden rounded-lg bg-bg-block',
            bordered && 'border border-line',
            'cursor-zoom-in transition-base hover:opacity-95'
          )}
          style={{ aspectRatio: aspect }}
        >
          {innerImage}
        </button>
      ) : (
        <div
          className={cn(
            'relative w-full overflow-hidden rounded-lg bg-bg-block',
            bordered && 'border border-line'
          )}
          style={{ aspectRatio: aspect }}
          role="img"
          aria-label={slot.alt}
        >
          {innerImage}
        </div>
      )}
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
