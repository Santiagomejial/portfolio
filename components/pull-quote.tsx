import { cn } from '@/lib/utils';

interface PullQuoteProps {
  children: React.ReactNode;
  attribution?: string;
  className?: string;
  /** Si se provee, esa(s) palabra(s)/frase(s) dentro del quote se resalta(n) con gradiente */
  highlight?: string | readonly string[];
}

/**
 * Cita editorial centrada con comillas decorativas.
 * Usada entre secciones para respirar y marcar tono.
 * El texto va contenido dentro de un wrapper centrado con max-width
 * y comillas grandes en gradiente arriba como ancla visual.
 */
export function PullQuote({ children, attribution, className, highlight }: PullQuoteProps) {
  const content =
    highlight && typeof children === 'string' ? (
      renderHighlight(children, Array.isArray(highlight) ? highlight : [highlight])
    ) : (
      children
    );

  return (
    <figure
      className={cn(
        'mx-auto flex max-w-3xl flex-col items-center text-center',
        className
      )}
    >
      {/* Comilla decorativa en gradiente */}
      <span
        aria-hidden
        className="bg-brand-gradient bg-clip-text font-serif text-[64px] leading-none text-transparent md:text-[80px]"
      >
        “
      </span>

      <blockquote className="mt-2 font-serif text-[clamp(20px,2.4vw,28px)] font-normal leading-[1.35] tracking-display text-ink">
        {content}
      </blockquote>

      {attribution && (
        <>
          {/* Divisor sutil con gradiente */}
          <span
            aria-hidden
            className="mt-8 h-px w-12 bg-brand-gradient opacity-60"
          />
          <figcaption className="mt-4 text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
            {attribution}
          </figcaption>
        </>
      )}
    </figure>
  );
}

function renderHighlight(text: string, highlights: readonly string[]) {
  const cleaned = highlights.filter((h) => h.length > 0);
  if (cleaned.length === 0) return text;
  const pattern = new RegExp(`(${cleaned.map(escapeRegex).join('|')})`, 'gi');
  const parts = text.split(pattern);
  const lowerSet = new Set(cleaned.map((h) => h.toLowerCase()));
  return parts.map((part, i) =>
    lowerSet.has(part.toLowerCase()) ? (
      <span key={i} className="bg-brand-gradient bg-clip-text text-transparent">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
