'use client';

import { useEffect, useState, useCallback } from 'react';

export type Lang = 'es' | 'en';

const STORAGE_KEY = 'sml-lang';

/* ─── Store global (pub/sub) ─────────────────────────────────
 * useLang se usa en múltiples componentes (navbar, pages, sub-componentes).
 * Si cada uno guarda su propio useState, el toggle del navbar no propaga
 * al resto. Este store comparte un solo lang entre todos los consumidores
 * y notifica a cada listener cuando cambia.
 * ─────────────────────────────────────────────────────────── */

let currentLang: Lang = 'es';
const listeners = new Set<(next: Lang) => void>();

function broadcast(next: Lang) {
  listeners.forEach((listener) => listener(next));
}

function setLangGlobal(next: Lang) {
  if (next === currentLang) return;
  currentLang = next;
  if (typeof window !== 'undefined') {
    document.documentElement.lang = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Quota o modo privado — ignorar.
    }
  }
  broadcast(next);
}

/**
 * Hook de idioma client-side. No cambia URL, sólo estado.
 * Persiste en localStorage. Default: 'es'.
 *
 * El estado vive en un store global del módulo, así el toggle del
 * navbar también actualiza pages y sub-componentes que usen useLang.
 */
export function useLang() {
  // Empezamos siempre en 'es' para evitar hydration mismatch.
  // Después del mount leemos localStorage y propagamos al store global.
  const [lang, setLangLocal] = useState<Lang>(currentLang);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Suscribirse al store global — cualquier setLang en otro componente
    // dispara este listener y rehidrata el state local.
    const listener = (next: Lang) => setLangLocal(next);
    listeners.add(listener);

    // Sincronizar con localStorage en el primer mount.
    const stored = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (stored === 'es' || stored === 'en') {
      if (stored !== currentLang) {
        // Hay un valor distinto persistido — propagar a todos.
        setLangGlobal(stored);
      } else {
        // Ya estaba en el valor correcto — sincronizar el state local y el DOM.
        setLangLocal(stored);
        document.documentElement.lang = stored;
      }
    }

    return () => {
      listeners.delete(listener);
    };
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangGlobal(next);
  }, []);

  const toggle = useCallback(() => {
    setLangGlobal(currentLang === 'es' ? 'en' : 'es');
  }, []);

  return { lang, setLang, toggle, mounted };
}
