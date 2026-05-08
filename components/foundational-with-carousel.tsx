'use client';

import { useState } from 'react';
import { WorkCard } from './work-card';
import { CarouselModal, type CarouselImage } from './carousel-modal';
import { useLang } from '@/lib/use-lang';

interface FoundationalProject {
  key: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  meta: { es: readonly string[]; en: readonly string[] };
  /** Cover de la card (16:9). Opcional por ahora — se irá llenando case a case. */
  cover?: { src: string; alt: { es: string; en: string } };
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
    title: { es: 'Portafolio de diseño web', en: 'Web Design Portfolio' },
    description: {
      es: 'Recopilación de proyectos de diseño, asesoría e implementación de páginas web para Frosch, TNR Life, Valssa Shop, entre otros.',
      en: 'Collection of design, consulting and implementation projects for websites — Frosch, TNR Life, Valssa Shop, among others.',
    },
    meta: {
      es: ['2021 → 2022', 'Freelance'],
      en: ['2021 → 2022', 'Freelance'],
    },
    cover: {
      src: '/work/portafolio-web.jpg',
      alt: {
        es: 'Portafolio de diseño web — recopilación de páginas web freelance.',
        en: 'Web design portfolio — collection of freelance websites.',
      },
    },
    images: carouselFromFolder('portafolio-web', 8, 'Portafolio web'),
  },
  {
    key: 'portafolio-diseno',
    title: { es: 'Portafolio de diseño', en: 'Design Portfolio' },
    description: {
      es: 'Recorrido por proyectos académicos, mis inicios como profesional y la asesoría en innovación.',
      en: 'A walkthrough of academic projects, my early professional work and innovation consulting.',
    },
    meta: {
      es: ['2022', 'Freelance · Asesor · Co-founder'],
      en: ['2022', 'Freelance · Consultant · Co-founder'],
    },
    cover: {
      src: '/work/portafolio-diseno.jpg',
      alt: {
        es: 'Portafolio de diseño — proyectos académicos y profesionales.',
        en: 'Design portfolio — academic and professional projects.',
      },
    },
    images: carouselFromFolder('portafolio-diseno', 24, 'Portafolio de diseño'),
  },
  {
    key: 'logofolio',
    title: { es: 'Logofolio', en: 'Logofolio' },
    description: {
      es: 'Recopilación de diseño gráfico y creación de marca para diversas industrias.',
      en: 'Collection of graphic design and brand creation across multiple industries.',
    },
    meta: {
      es: ['2018 → 2022', 'Freelance'],
      en: ['2018 → 2022', 'Freelance'],
    },
    cover: {
      src: '/work/logofolio.jpg',
      alt: {
        es: 'Logofolio — diseño gráfico y creación de marca.',
        en: 'Logofolio — graphic design and brand creation.',
      },
    },
    images: carouselFromFolder('logofolio', 14, 'Logofolio'),
  },
];

/**
 * 3 cards fundacionales del Cap 02 que abren un carrusel modal en lugar de navegar.
 * Cada card maneja su propio estado de apertura + índice activo del carrusel.
 */
export function FoundationalCardsWithCarousel() {
  const { lang } = useLang();
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
          meta={[...p.meta[lang]]}
          title={p.title[lang]}
          description={p.description[lang]}
          image={p.cover?.src}
          imageAlt={p.cover?.alt[lang]}
          onClick={() => open(p.key)}
        />
      ))}

      <CarouselModal
        open={openKey !== null}
        onClose={close}
        title={active?.title[lang]}
        images={active?.images ?? []}
        index={index}
        onIndexChange={setIndex}
      />
    </>
  );
}
