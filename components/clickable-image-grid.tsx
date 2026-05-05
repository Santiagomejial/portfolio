'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { CarouselModal, type CarouselImage } from './carousel-modal';

interface ClickableImageGridProps {
  /** Imágenes del grid. Se pasan al modal con navegación. */
  items: readonly CarouselImage[];
  /** Título que se muestra en el header del modal. */
  title?: string;
  /** Aspect ratio por imagen (ej. '4/3', '16/9', '1/1'). Default '4/3'. */
  aspect?: string;
  /** Columnas en desktop md+. Default 2. Mobile siempre 1. */
  columns?: 1 | 2 | 3 | 4;
  /** Sin border (las imágenes se integran con el fondo). Default false. */
  borderless?: boolean;
  /** Caption editorial debajo del grid. */
  caption?: string;
  className?: string;
}

/**
 * Grid de imágenes clickeables — al click abre el CarouselModal
 * con navegación lateral, swipe en mobile, ESC para cerrar.
 *
 * Reusa la misma UX que los carruseles de los portafolios fundacionales.
 */
export function ClickableImageGrid({
  items,
  title,
  aspect = '4/3',
  columns = 2,
  borderless = false,
  caption,
  className,
}: ClickableImageGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const colsClass =
    columns === 1
      ? ''
      : columns === 2
        ? 'md:grid-cols-2'
        : columns === 3
          ? 'md:grid-cols-3'
          : 'md:grid-cols-4';

  return (
    <section
      className={cn(
        'container-portfolio border-t border-line py-16 md:py-20',
        className
      )}
    >
      <div className={cn('grid grid-cols-1 gap-5', colsClass)}>
        {items.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`Abrir imagen ${i + 1} de ${items.length}: ${item.alt}`}
            className={cn(
              'group relative w-full overflow-hidden rounded-lg',
              !borderless && 'border border-line bg-bg-block',
              'cursor-zoom-in transition-base hover:opacity-90'
            )}
            style={{ aspectRatio: aspect }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes={
                columns === 1
                  ? '100vw'
                  : columns === 2
                    ? '(min-width: 768px) 50vw, 100vw'
                    : columns === 3
                      ? '(min-width: 768px) 33vw, 100vw'
                      : '(min-width: 768px) 25vw, 100vw'
              }
            />
          </button>
        ))}
      </div>
      {caption && (
        <p className="mt-5 text-eyebrow uppercase tracking-eyebrow text-ink-mute">
          {caption}
        </p>
      )}

      <CarouselModal
        open={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        title={title}
        images={items}
        index={openIndex ?? 0}
        onIndexChange={setOpenIndex}
      />
    </section>
  );
}
