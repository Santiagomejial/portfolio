'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/use-theme';

/**
 * Floating Nav — pill flotante con blur.
 * Reemplaza el header tradicional del sitio.
 * Vive en todas las rutas. Integrada con tokens del DS.
 *
 * NOTA: el toggle EN/ES se removió en v1 porque los copies del sitio
 * aún no están traducidos. El hook useLang() sigue disponible en
 * lib/use-lang.ts para cuando se implemente la versión bilingüe.
 */

const LINKS = [
  { href: '/about', label: 'Sobre mí' },
  { href: '/work', label: 'Proyectos' },
] as const;

export function FloatingNav() {
  const pathname = usePathname();
  const { theme, toggle: toggleTheme, mounted: themeMounted } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');

  return (
    <nav
      aria-label="Navegación principal"
      className={cn(
        'fixed left-1/2 top-4 z-nav -translate-x-1/2',
        'flex items-center gap-1 p-1.5',
        'rounded-full border border-line',
        'backdrop-blur-xl transition-base',
        scrolled ? 'shadow-lg' : 'shadow-sm'
      )}
      style={{ background: 'var(--blur-bg)' }}
    >
      {/* Logo */}
      <Link
        href="/"
        className={cn(
          'flex items-center gap-0 pl-4 pr-3 py-2',
          'text-body-sm font-semibold tracking-tight',
          'text-ink transition-base hover:text-ink'
        )}
        aria-label="Santiago Mejía L. — Home"
      >
        <span>Santiago</span>
        <span className="bg-brand-gradient bg-clip-text text-transparent">Mejía</span>
        <span>L</span>
        <span className="text-blue">.</span>
      </Link>

      <span className="h-5 w-px bg-line" aria-hidden />

      {/* Links */}
      <ul className="flex items-center gap-0.5">
        {LINKS.map((link) => {
          const active = isActive(link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'block rounded-full px-3.5 py-2',
                  'text-[12px] font-medium uppercase tracking-eyebrow',
                  'transition-base',
                  active
                    ? 'bg-bg-block text-ink'
                    : 'text-ink-soft hover:bg-bg-block hover:text-ink'
                )}
                aria-current={active ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <span className="h-5 w-px bg-line" aria-hidden />

      {/* Theme toggle */}
      <button
        type="button"
        onClick={toggleTheme}
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded-full',
          'text-ink-soft transition-base hover:bg-bg-block hover:text-ink'
        )}
        aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
      >
        {themeMounted && theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </button>

      {/* Contact CTA */}
      <a
        href="mailto:santiagomejial.sml@gmail.com"
        className={cn(
          'ml-1 rounded-full px-4 py-2',
          'bg-ink text-[12px] font-semibold uppercase tracking-eyebrow text-bg',
          'transition-base hover:opacity-80'
        )}
      >
        Contacto
      </a>
    </nav>
  );
}

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
