'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { CarouselModal, type CarouselImage } from './carousel-modal';

interface ClickableImageProps {
  src: string;
  alt: string;
  /** Aspect ratio (ej. '21/9', '16/9'). Default '21/9'. */
  aspect?: string;
  /** Título que se muestra en el header del modal. */
  title?: string;
  /** Sin border (la imagen se integra con el fondo). Default true. */
  borderless?: boolean;
  /** Imágenes adicionales del mismo grupo (opcional). Si solo hay 1, modal sin nav. */
  groupImages?: readonly CarouselImage[];
  className?: string;
}

/**
 * Imagen única clickeable — al click abre el CarouselModal.
 * Si no se pasa `groupImages`, el modal muestra solo esta imagen.
 * Si se pasa un grupo, esta imagen es la inicial y se navega entre todas.
 */
export function ClickableImage({
  src,
  alt,
  aspect = '21/9',
  title,
  borderless = true,
  groupImages,
  className,
}: ClickableImageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Construir la lista de imágenes del modal
  const modalImages: readonly CarouselImage[] = groupImages ?? [{ src, alt }];

  // Encontrar el índice de esta imagen dentro del grupo (o 0 si es única)
  const startIndex =
    groupImages?.findIndex((img) => img.src === src) ?? 0;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpenIndex(startIndex >= 0 ? startIndex : 0)}
        aria-label={`Abrir imagen: ${alt}`}
        className={cn(
          'group relative block w-full overflow-hidden rounded-lg',
          !borderless && 'border border-line',
          'cursor-zoom-in transition-base hover:opacity-95',
          className
        )}
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
          sizes="100vw"
          priority
        />
      </button>

      <CarouselModal
        open={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        title={title}
        images={modalImages}
        index={openIndex ?? 0}
        onIndexChange={setOpenIndex}
      />
    </>
  );
}
