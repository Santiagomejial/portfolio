'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * Botón flotante "volver arriba" — fixed en la esquina inferior derecha.
 * Aparece después de hacer ~400px de scroll. Click lleva al top con smooth scroll.
 */
export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Volver al inicio"
      className={cn(
        'fixed bottom-6 right-6 z-nav md:bottom-8 md:right-8',
        'flex h-11 w-11 items-center justify-center rounded-full',
        'border border-line shadow-sm backdrop-blur-xl',
        'text-ink-soft transition-base hover:border-blue hover:text-ink',
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-2 opacity-0'
      )}
      style={{ background: 'var(--blur-bg)' }}
    >
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
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
