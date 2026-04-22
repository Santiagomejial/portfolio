import Link from 'next/link';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/santiagomejial' },
  { label: 'Behance', href: 'https://www.behance.net/santiagomejial6' },
  { label: 'Read.cv', href: '#' },
] as const;

const EMAIL = 'santiagomejial.sml@gmail.com';
const YEAR = new Date().getFullYear();

/**
 * Footer global. Vive al final de cada página.
 * Contiene: email, redes, download CV, copyright.
 */
export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        'border-t border-line',
        'py-10 md:py-12',
        className
      )}
    >
      <div className="container-portfolio">
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          {/* Contacto */}
          <div className="md:col-span-5">
            <div className="text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
              — Contacto
            </div>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-3 block text-body-lg text-ink transition-base hover:text-blue"
            >
              {EMAIL}
            </a>
          </div>

          {/* Redes */}
          <div className="md:col-span-4">
            <div className="text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
              — En la web
            </div>
            <ul className="mt-3 space-y-2">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-body text-ink-soft transition-base hover:text-blue"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CV */}
          <div className="md:col-span-3">
            <div className="text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
              — CV
            </div>
            <a
              href="/cv.pdf"
              download
              className="mt-3 inline-flex items-center gap-2 text-body text-ink-soft transition-base hover:text-blue"
            >
              ↓ Descargar PDF
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-line pt-6 text-body-sm text-ink-mute md:flex-row md:items-center">
          <div>Bogotá, Colombia · © {YEAR} Santiago Mejía L.</div>
          <div>
            <Link href="/" className="transition-base hover:text-ink">
              Volver al inicio ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
