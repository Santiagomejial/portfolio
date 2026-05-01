import type { HighlightTitle as HighlightTitleType } from '@/content/types';

/**
 * Renderiza un título con un segmento resaltado en gradiente.
 * Usado por PageHero, SectionHead, CTABlock cuando el copy
 * viene desde /content como { pre, highlight, post }.
 */
export function HighlightTitle({ pre, highlight, post }: HighlightTitleType) {
  return (
    <>
      {pre}
      <span className="text-gradient">{highlight}</span>
      {post}
    </>
  );
}
