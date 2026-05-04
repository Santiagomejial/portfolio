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
    images: [
      { src: '/work/portafolio-web/01.jpg', alt: 'Portafolio web · imagen 01' },
      { src: '/work/portafolio-web/02.jpg', alt: 'Portafolio web · imagen 02' },
      { src: '/work/portafolio-web/03.jpg', alt: 'Portafolio web · imagen 03' },
      { src: '/work/portafolio-web/04.jpg', alt: 'Portafolio web · imagen 04' },
      { src: '/work/portafolio-web/05.jpg', alt: 'Portafolio web · imagen 05' },
      { src: '/work/portafolio-web/06.jpg', alt: 'Portafolio web · imagen 06' },
      { src: '/work/portafolio-web/07.jpg', alt: 'Portafolio web · imagen 07' },
      { src: '/work/portafolio-web/08.jpg', alt: 'Portafolio web · imagen 08' },
    ],
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
    images: [], // TODO: agregar imágenes del portafolio de diseño
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
    images: [], // TODO: agregar imágenes del logofolio
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
