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
