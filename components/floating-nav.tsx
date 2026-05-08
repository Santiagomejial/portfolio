'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/use-theme';
import { useLang } from '@/lib/use-lang';

/**
 * Floating Nav — pill flotante con blur.
 * Reemplaza el header tradicional del sitio.
 * Vive en todas las rutas. Integrada con tokens del DS.
 *
 * Mobile: la pill se reduce a logo + theme + hamburguesa.
 * Al tap se despliega un drawer con los links y el CTA Contacto.
 *
 * NOTA: el toggle EN/ES se removió en v1 porque los copies del sitio
 * aún no están traducidos. El hook useLang() sigue disponible en
 * lib/use-lang.ts para cuando se implemente la versión bilingüe.
 */

const LINKS = [
  {
    href: '/about',
    label: { es: 'Sobre mí', en: 'About' },
  },
  {
    href: '/work',
    label: { es: 'Proyectos', en: 'Work' },
  },
] as const;

const I18N = {
  contact: { es: 'Contacto', en: 'Contact' },
  themeOnDark: {
    es: 'Activar modo claro',
    en: 'Switch to light mode',
  },
  themeOnLight: {
    es: 'Activar modo oscuro',
    en: 'Switch to dark mode',
  },
  langSwitch: {
    es: 'Cambiar a inglés',
    en: 'Cambiar a español',
  },
  navAria: {
    es: 'Navegación principal',
    en: 'Main navigation',
  },
  openMenu: { es: 'Abrir menú', en: 'Open menu' },
  closeMenu: { es: 'Cerrar menú', en: 'Close menu' },
} as const;

const EMAIL = 'santiagomejial.sml@gmail.com';

export function FloatingNav() {
  const pathname = usePathname();
  const { theme, toggle: toggleTheme, mounted: themeMounted } = useTheme();
  const { lang, toggle: toggleLang, mounted: langMounted } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cerrar drawer al cambiar de ruta
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Cerrar drawer con ESC
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === '/'
      ? pathname === '/'
      : pathname === href || pathname.startsWith(href + '/');

  return (
    <div className="fixed left-1/2 top-4 z-nav -translate-x-1/2">
      <nav
        aria-label={I18N.navAria[lang]}
        className={cn(
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
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Mejía
          </span>
          <span>L</span>
          <span className="text-blue">.</span>
        </Link>

        {/* ─── Desktop: links + theme + CTA ─── */}
        <span className="hidden h-5 w-px bg-line md:block" aria-hidden />

        <ul className="hidden items-center gap-0.5 md:flex">
          {LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'block whitespace-nowrap rounded-full px-3.5 py-2',
                    'text-[12px] font-medium uppercase tracking-eyebrow',
                    'transition-base',
                    active
                      ? 'bg-bg-block text-ink'
                      : 'text-ink-soft hover:bg-bg-block hover:text-ink'
                  )}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label[lang]}
                </Link>
              </li>
            );
          })}
        </ul>

        <span className="hidden h-5 w-px bg-line md:block" aria-hidden />

        {/* Lang toggle ES / EN */}
        <button
          type="button"
          onClick={toggleLang}
          className={cn(
            'flex h-8 items-center justify-center rounded-full px-2.5',
            'text-[11px] font-semibold uppercase tracking-eyebrow',
            'text-ink-soft transition-base hover:bg-bg-block hover:text-ink'
          )}
          aria-label={I18N.langSwitch[lang]}
        >
          {langMounted ? (lang === 'es' ? 'EN' : 'ES') : 'EN'}
        </button>

        {/* Theme toggle (siempre visible) */}
        <button
          type="button"
          onClick={toggleTheme}
          className={cn(
            'flex h-8 w-8 items-center justify-center rounded-full',
            'text-ink-soft transition-base hover:bg-bg-block hover:text-ink'
          )}
          aria-label={
            theme === 'dark' ? I18N.themeOnDark[lang] : I18N.themeOnLight[lang]
          }
        >
          {themeMounted && theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>

        {/* Contact CTA — sólo desktop */}
        <a
          href={`mailto:${EMAIL}`}
          className={cn(
            'ml-1 hidden whitespace-nowrap rounded-full px-4 py-2 md:inline-flex',
            'bg-ink text-[12px] font-semibold uppercase tracking-eyebrow text-bg',
            'transition-base hover:opacity-80'
          )}
        >
          {I18N.contact[lang]}
        </a>

        {/* ─── Mobile: hamburguesa ─── */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? I18N.closeMenu[lang] : I18N.openMenu[lang]}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-drawer"
          className={cn(
            'flex h-8 w-8 items-center justify-center rounded-full md:hidden',
            'text-ink-soft transition-base hover:bg-bg-block hover:text-ink'
          )}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Drawer mobile */}
      {mobileOpen && (
        <>
          {/* Backdrop suave para cerrar al tap fuera */}
          <button
            type="button"
            aria-label={I18N.closeMenu[lang]}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 -z-10 cursor-default bg-bg/40 backdrop-blur-sm md:hidden"
          />
          <div
            id="mobile-nav-drawer"
            className={cn(
              'absolute left-1/2 top-full mt-3 w-[min(280px,90vw)] -translate-x-1/2',
              'rounded-2xl border border-line p-2',
              'backdrop-blur-xl shadow-lg md:hidden'
            )}
            style={{ background: 'var(--blur-bg)' }}
          >
            <ul className="flex flex-col gap-0.5">
              {LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'block rounded-xl px-4 py-3',
                        'text-[13px] font-medium uppercase tracking-eyebrow',
                        'transition-base',
                        active
                          ? 'bg-bg-block text-ink'
                          : 'text-ink-soft hover:bg-bg-block hover:text-ink'
                      )}
                      aria-current={active ? 'page' : undefined}
                    >
                      {link.label[lang]}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <a
              href={`mailto:${EMAIL}`}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'mt-2 block rounded-xl px-4 py-3 text-center',
                'bg-ink text-[13px] font-semibold uppercase tracking-eyebrow text-bg',
                'transition-base hover:opacity-80'
              )}
            >
              {I18N.contact[lang]}
            </a>
          </div>
        </>
      )}
    </div>
  );
}

/* ─── Iconos ─── */

function SunIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M6 6l12 12M6 18L18 6" />
    </svg>
  );
}
