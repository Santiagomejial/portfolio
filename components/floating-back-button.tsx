'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface FloatingBackButtonProps {
  /** Ruta de fallback si no hay history (ej. acceso directo por URL). */
  fallbackHref: string;
  /** Texto accesible (no se muestra visualmente — solo aria-label). */
  label?: string;
}

/**
 * Botón flotante "volver" — fixed en la esquina inferior izquierda.
 * Sólo aparece después de hacer scroll (cuando el breadcrumb del CaseHero
 * ya no es visible). Misma lógica de history-back que BackButton.
 */
export function FloatingBackButton({
  fallbackHref,
  label = 'Volver',
}: FloatingBackButtonProps) {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCanGoBack(window.history.length > 1);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleBack = useCallback(() => {
    if (canGoBack) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  }, [canGoBack, router, fallbackHref]);

  return (
    <button
      type="button"
      onClick={handleBack}
      aria-label={label}
      className={cn(
        'fixed bottom-6 left-6 z-nav md:bottom-8 md:left-8',
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
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
    </button>
  );
}
