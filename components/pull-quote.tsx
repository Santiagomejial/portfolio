import { cn } from '@/lib/utils';

interface PullQuoteProps {
  children: React.ReactNode;
  attribution?: string;
  className?: string;
  /** Si se provee, esa(s) palabra(s)/frase(s) dentro del quote se resalta(n) con gradiente */
  highlight?: string | readonly string[];
}

/**
 * Cita editorial grande en serif.
 * Usada entre secciones para respirar y marcar tono.
 */
export function PullQuote({ children, attribution, className, highlight }: PullQuoteProps) {
  const content =
    highlight && typeof children === 'string' ? (
      renderHighlight(children, Array.isArray(highlight) ? highlight : [highlight])
    ) : (
      children
    );

  return (
    <figure className={cn('max-w-4xl space-y-4', className)}>
      <blockquote className="font-serif text-[clamp(24px,3.5vw,36px)] font-normal leading-[1.25] tracking-display text-ink">
        {content}
      </blockquote>
      {attribution && (
        <figcaption className="text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
          — {attribution}
        </figcaption>
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
