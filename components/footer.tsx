import Link from 'next/link';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/santiagomejial',
    hoverColor: 'hover:text-blue',
    Icon: LinkedInIcon,
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/santiagomejial6',
    hoverColor: 'hover:text-rose',
    Icon: BehanceIcon,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/santiagomejia6/',
    hoverColor: 'hover:text-rose-soft',
    Icon: InstagramIcon,
  },
  {
    label: 'Email',
    href: 'mailto:santiagomejial.sml@gmail.com',
    hoverColor: 'hover:text-cyan',
    Icon: MailIcon,
  },
] as const;

const EMAIL = 'santiagomejial.sml@gmail.com';
const YEAR = new Date().getFullYear();

/**
 * Footer global tipo manifiesto.
 * Vive al final de cada página y absorbe el rol del antiguo CTABlock —
 * es la única zona de cierre. Vertical, con respiración.
 */
export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('relative pb-8 pt-12 md:pt-14', className)}>
      {/* Línea superior con gradiente — cose el footer con el resto del sitio */}
      <span
        className="absolute inset-x-0 top-0 h-px bg-brand-gradient"
        aria-hidden
      />

      <div className="container-portfolio">
        {/* Marca */}
        <h2 className="font-serif text-[clamp(24px,3vw,36px)] leading-[1.05] tracking-display text-ink">
          <span>Santiago</span>{' '}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Mejía
          </span>{' '}
          <span>L</span>
          <span className="text-blue">.</span>
        </h2>

        <p className="mt-2 max-w-xl text-body text-ink-soft">Colombia</p>

        {/* Contacto + Redes en grid horizontal en desktop */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Contacto */}
          <div>
            <div className="text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
              Contacto
            </div>
            <a
              href={`mailto:${EMAIL}`}
              className={cn(
                'mt-2 inline-block font-serif text-[clamp(16px,1.6vw,20px)] leading-tight tracking-display text-ink',
                'transition-base',
                'hover:bg-brand-gradient hover:bg-clip-text hover:text-transparent'
              )}
            >
              {EMAIL}
            </a>
          </div>

          {/* En la web — iconos sociales */}
          <div>
            <div className="text-eyebrow font-medium uppercase tracking-eyebrow text-ink-mute">
              En la web
            </div>
            <ul className="mt-2 flex items-center gap-2.5">
              {SOCIAL_LINKS.map(({ label, href, hoverColor, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={
                      href.startsWith('mailto:') ? undefined : 'noreferrer noopener'
                    }
                    aria-label={label}
                    className={cn(
                      'flex h-9 w-9 items-center justify-center rounded-full',
                      'border border-line text-ink-soft',
                      'transition-base hover:border-current',
                      hoverColor
                    )}
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-line pt-5 text-body-sm text-ink-mute md:flex-row md:items-center">
          <div>© {YEAR} Santiago Mejía L. · Bogotá, Colombia</div>
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

/* ─── Iconos SVG inline ─── */

function LinkedInIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.07a2.07 2.07 0 1 1 2.06 2.07zm1.78 13.02H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function BehanceIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M22 7h-7V5.5h7V7zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
