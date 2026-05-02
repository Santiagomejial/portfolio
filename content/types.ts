/**
 * Tipos compartidos del contenido del sitio.
 * Todo el copy vive en /content/*.ts y se consume desde las páginas (app/**).
 * Mantener estos tipos sincronizados con los props de los componentes.
 */

/**
 * Título con segmento resaltado en gradiente.
 * Ej: { pre: "Construyamos algo ", highlight: "juntos", post: "?" }
 * El componente lo renderiza como: {pre}<span className="text-gradient">{highlight}</span>{post}
 */
export interface HighlightTitle {
  pre: string;
  highlight: string;
  post?: string;
}

/** Card de trabajo tal como lo espera <WorkCard /> */
export interface WorkCardContent {
  href: string;
  title: string;
  description: string;
  meta: readonly string[];
  featured?: boolean;
  /** Ancho en columnas del grid de 12 */
  span?: 6 | 12;
  /** Ruta de la imagen en /public (ej. "/work/homecenter.jpg") */
  image?: string;
  /** Alt text de la imagen (descripción para accesibilidad y SEO) */
  imageAlt?: string;
}

/** Métrica del snapshot */
export interface MetricContent {
  label: string;
  value: string;
  unit?: string;
}

/** Item de la línea de tiempo */
export interface TimelineItemContent {
  year: string;
  title: string;
  description: string;
  milestone?: boolean;
}

/* ─── Tipos para case studies (/work/[slug]) ──────────────────────── */

import type { ReactNode } from 'react';

export interface CaseHeroContent {
  /** Breadcrumb back link, ej. { href: '/work', label: 'Volver a Work' } */
  breadcrumb: { href: string; label: string };
  /** "Case 01 · Featured" */
  caseCounter: string;
  /** String simple o HighlightTitle para gradient en parte del título */
  title: string | HighlightTitle;
  /** Sub-texto descriptivo */
  sub: string;
  /** Meta tipo {label: 'Rol', value: 'UX Lead'} — máx 4 ítems */
  meta: readonly { label: string; value: string }[];
  /** Imagen del hero (21:9 recomendado). Si se omite, placeholder. */
  heroImage?: { src: string; alt: string };
}

export interface CaseMediaContent {
  layout: 'full' | 'wide' | 'duo' | 'trio';
  items: readonly { alt: string; aspect?: string; src?: string }[];
  caption?: string;
}

export interface CaseQuoteContent {
  body: string;
  /** Una palabra/frase o varias para resaltar en gradiente */
  highlight: string | readonly string[];
  attribution: string;
}

export interface CaseSectionContent {
  number: string;
  label: string;
  /** Si true, dibuja borde superior azul como separador de capítulo */
  chapterBreak?: boolean;
  /** String simple o HighlightTitle para gradient en parte del título */
  title: string | HighlightTitle;
  /** Cuerpo de la sección — array de párrafos (ReactNode soporta <strong>, <em>, etc.) */
  body: readonly ReactNode[];
  /** Bloque de media que aparece DESPUÉS de esta sección. Opcional. */
  mediaAfter?: CaseMediaContent;
  /** Pull quote que aparece DESPUÉS de esta sección (típico para transición de capítulo). */
  quoteAfter?: CaseQuoteContent;
}

export interface CaseNavContent {
  prev?: { href: string; title: string };
  next?: { href: string; title: string };
}

/** Estructura completa de un case study. */
export interface CaseContent {
  hero: CaseHeroContent;
  /** Media establishing que aparece ANTES de la sección 01 (opcional). */
  establishing?: CaseMediaContent;
  sections: readonly CaseSectionContent[];
  nav: CaseNavContent;
}
