'use client';

import { useState } from 'react';
import { WorkCard } from './work-card';
import { CarouselModal, type CarouselImage } from './carousel-modal';

interface FoundationalProject {
  key: string;
  title: string;
  description: string;
  meta: readonly string[];
  /** Cover de la card (16:9). Opcional por ahora — se irá llenando case a case. */
  cover?: { src: string; alt: string };
  /** Imágenes del carrusel modal. Se completan después por proyecto. */
  images: readonly CarouselImage[];
}

/**
 * Helper: genera el array de imágenes del carrusel desde una carpeta.
 * Asume naming `01.jpg`, `02.jpg`, etc. dentro de `/work/<folder>/`.
 */
function carouselFromFolder(
  folder: string,
  count: number,
  label: string
): readonly CarouselImage[] {
  return Array.from({ length: count }, (_, i) => {
    const num = String(i + 1).padStart(2, '0');
    return {
      src: `/work/${folder}/${num}.jpg`,
      alt: `${label} · imagen ${num}`,
    };
  });
}

const PROJECTS: readonly FoundationalProject[] = [
  {
    key: 'portafolio-web',
    title: 'Portafolio de diseño web',
    description:
      'Recopilación de proyectos de diseño, asesoría e implementación de páginas web para Frosch, TNR Life, Valssa Shop, entre otros.',
    meta: ['2021 → 2022', 'Freelance'],
    cover: {
      src: '/work/portafolio-web.jpg',
      alt: 'Portafolio de diseño web — recopilación de páginas web freelance.',
    },
    images: carouselFromFolder('portafolio-web', 8, 'Portafolio web'),
  },
  {
    key: 'portafolio-diseno',
    title: 'Portafolio de diseño',
    description:
      'Recorrido por proyectos académicos, mis inicios como profesional y la asesoría en innovación.',
    meta: ['2022', 'Freelance · Asesor · Co-founder'],
    cover: {
      src: '/work/portafolio-diseno.jpg',
      alt: 'Portafolio de diseño — proyectos académicos y profesionales.',
    },
    images: carouselFromFolder('portafolio-diseno', 24, 'Portafolio de diseño'),
  },
  {
    key: 'logofolio',
    title: 'Logofolio',
    description:
      'Recopilación de diseño gráfico y creación de marca para diversas industrias.',
    meta: ['2018 → 2022', 'Freelance'],
    cover: {
      src: '/work/logofolio.jpg',
      alt: 'Logofolio — diseño gráfico y creación de marca.',
    },
    images: [], // TODO: cambiar por carouselFromFolder('logofolio', N, 'Logofolio') cuando estén las imágenes
  },
];

/**
 * 3 cards fundacionales del Cap 02 que abren un carrusel modal en lugar de navegar.
 * Cada card maneja su propio estado de apertura + índice activo del carrusel.
 */
export function FoundationalCardsWithCarousel() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [index, setIndex] = useState(0);

  const open = (key: string) => {
    setOpenKey(key);
    setIndex(0);
  };

  const close = () => setOpenKey(null);

  const active = PROJECTS.find((p) => p.key === openKey) ?? null;

  return (
    <>
      {PROJECTS.map((p) => (
        <WorkCard
          key={p.key}
          className="md:col-span-4"
          meta={p.meta}
          title={p.title}
          description={p.description}
          image={p.cover?.src}
          imageAlt={p.cover?.alt}
          onClick={() => open(p.key)}
        />
      ))}

      <CarouselModal
        open={openKey !== null}
        onClose={close}
        title={active?.title}
        images={active?.images ?? []}
        index={index}
        onIndexChange={setIndex}
      />
    </>
  );
}
