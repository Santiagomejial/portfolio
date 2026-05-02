import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface CaseMediaItem {
  /** Descripción del recurso (accesibilidad + placeholder visible). */
  alt: string;
  /** Aspect ratio opcional (ej. '16/9', '4/3', '1/1'). */
  aspect?: string;
  /** Ruta de la imagen (ej. '/work/homecenter/hero.jpg'). Si se omite, se pinta placeholder. */
  src?: string;
}

interface CaseMediaProps {
  /** Layout del bloque de recursos gráficos. */
  layout?: 'full' | 'wide' | 'duo' | 'trio';
  /** Items (máx 1 para full/wide, 2 para duo, 3 para trio). */
  items: readonly CaseMediaItem[];
  /** Caption editorial opcional debajo del bloque. */
  caption?: string;
  className?: string;
}

/**
 * CaseMedia — slot para recursos gráficos dentro de un case study.
 * Se intercala entre CaseSection blocks para enriquecer la narrativa.
 *
 * Si el item tiene `src`, se renderiza como <Image> de Next.
 * Si no, se renderiza un placeholder con el alt como texto guía.
 */
export function CaseMedia({
  layout = 'full',
  items,
  caption,
  className,
}: CaseMediaProps) {
  const gridClass = {
    full: 'grid-cols-1',
    wide: 'grid-cols-1',
    duo: 'grid-cols-1 md:grid-cols-2',
    trio: 'grid-cols-1 md:grid-cols-3',
  }[layout];

  const defaultAspect = {
    full: '16/9',
    wide: '21/9',
    duo: '4/3',
    trio: '4/3',
  }[layout];

  // Heurística de sizes para cada layout (ayuda a Next/Image a elegir tamaño correcto)
  const sizesFor = (lyt: typeof layout) =>
    lyt === 'duo'
      ? '(min-width: 768px) 50vw, 100vw'
      : lyt === 'trio'
        ? '(min-width: 768px) 33vw, 100vw'
        : '100vw';

  return (
    <section
      className={cn(
        'container-portfolio border-t border-line py-16 md:py-20',
        className
      )}
      aria-label="Recursos gráficos del case"
    >
      <div className={cn('grid gap-5', gridClass)}>
        {items.map((item, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg border border-line bg-bg-block"
            style={{ aspectRatio: item.aspect ?? defaultAspect }}
            role="img"
            aria-label={item.alt}
          >
            {item.src ? (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes={sizesFor(layout)}
              />
            ) : (
              <div className="flex h-full items-center justify-center px-4 text-center text-eyebrow uppercase tracking-eyebrow text-ink-mute">
                [ {item.alt} ]
              </div>
            )}
          </div>
        ))}
      </div>
      {caption && (
        <p className="mt-5 text-eyebrow uppercase tracking-eyebrow text-ink-mute">
          {caption}
        </p>
      )}
    </section>
  );
}
