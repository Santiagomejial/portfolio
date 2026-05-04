'use client';

import { useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface CarouselImage {
  src: string;
  alt: string;
  /** Caption opcional debajo de la imagen */
  caption?: string;
}

interface CarouselModalProps {
  open: boolean;
  onClose: () => void;
  /** Título del proyecto que se muestra en el header del modal */
  title?: string;
  /** Lista de imágenes a mostrar. Si está vacía, el modal muestra un placeholder. */
  images: readonly CarouselImage[];
  /** Índice de la imagen activa */
  index: number;
  /** Handler para cambiar la imagen activa (next/prev) */
  onIndexChange: (i: number) => void;
}

// Distancia mínima en px para reconocer swipe horizontal (mobile).
const SWIPE_THRESHOLD = 50;

/**
 * Modal con carrusel de imágenes.
 * - Backdrop oscuro con blur (click fuera cierra).
 * - Navegación con flechas en pantalla y teclado (← →).
 * - Swipe lateral en mobile (← derecha = anterior, ← izquierda = siguiente).
 * - ESC cierra. Bloquea scroll del body mientras está abierto.
 */
export function CarouselModal({
  open,
  onClose,
  title,
  images,
  index,
  onIndexChange,
}: CarouselModalProps) {
  const total = images.length;
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const goNext = useCallback(() => {
    if (total === 0) return;
    onIndexChange((index + 1) % total);
  }, [index, total, onIndexChange]);

  const goPrev = useCallback(() => {
    if (total === 0) return;
    onIndexChange((index - 1 + total) % total);
  }, [index, total, onIndexChange]);

  // Keyboard navigation + lock body scroll
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    document.addEventListener('keydown', handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, goNext, goPrev]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    if (distance > SWIPE_THRESHOLD) {
      goNext(); // swipe izquierda → siguiente
    } else if (distance < -SWIPE_THRESHOLD) {
      goPrev(); // swipe derecha → anterior
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  if (!open) return null;

  const current = total > 0 ? images[index] : null;

  // Solo cerrar si el click es directamente sobre el backdrop (no en hijos).
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title ?? 'Carrusel de imágenes'}
      onClick={handleBackdropClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="fixed inset-0 z-modal flex items-center justify-center bg-black/85 backdrop-blur-md"
    >
      {/* Header: título + counter + botón cerrar */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4 md:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-eyebrow font-medium uppercase tracking-eyebrow text-white/60">
          {title}
          {total > 0 && (
            <span className="ml-2 text-white/40">
              {index + 1} / {total}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className={cn(
            'pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full',
            'text-white/80 transition-base hover:bg-white/10 hover:text-white',
            'active:bg-white/15'
          )}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
      </div>

      {/* Contenido (imagen) */}
      {current ? (
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex h-full w-full max-w-6xl flex-col items-center justify-center px-6 py-20 md:px-16 md:py-24"
        >
          <div className="relative h-full max-h-[75vh] w-full">
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          {current.caption && (
            <div className="mt-4 max-w-2xl text-center text-body-sm text-white/70">
              {current.caption}
            </div>
          )}
        </div>
      ) : (
        // Placeholder cuando no hay imágenes aún
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center gap-3 text-center"
        >
          <div className="text-eyebrow font-medium uppercase tracking-eyebrow text-white/40">
            Próximamente
          </div>
          <p className="font-serif text-[clamp(20px,2.4vw,28px)] text-white">
            Las imágenes se subirán en una siguiente iteración.
          </p>
        </div>
      )}

      {/* Nav lateral (botones) */}
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Imagen anterior"
            className={cn(
              'absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full md:left-6',
              'bg-white/5 text-white transition-base hover:bg-white/15',
              'active:bg-white/25'
            )}
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
              aria-hidden
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Imagen siguiente"
            className={cn(
              'absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full md:right-6',
              'bg-white/5 text-white transition-base hover:bg-white/15',
              'active:bg-white/25'
            )}
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
              aria-hidden
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
