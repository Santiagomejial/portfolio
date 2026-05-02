'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface BackButtonProps {
  /** Ruta de fallback si no hay history (ej. acceso directo por URL). */
  fallbackHref: string;
  /** Texto del botón (sin la flecha — se agrega automáticamente). */
  children: React.ReactNode;
  className?: string;
}

/**
 * Botón "Volver" que respeta el history del navegador.
 * - Si hay historial dentro del sitio → router.back() (vuelve a donde estaba)
 * - Si entró directo por URL (sin historial) → navega a fallbackHref
 */
export function BackButton({
  fallbackHref,
  children,
  className,
}: BackButtonProps) {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    // history.length > 1 indica que hubo navegación previa en esta pestaña
    if (typeof window !== 'undefined') {
      setCanGoBack(window.history.length > 1);
    }
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
      className={cn('transition-base hover:text-ink', className)}
    >
      ← {children}
    </button>
  );
}
