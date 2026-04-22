'use client';

import { useEffect, useState, useCallback } from 'react';

export type Lang = 'es' | 'en';

const STORAGE_KEY = 'sml-lang';

/**
 * Hook de idioma client-side. No cambia URL, sólo estado.
 * Persiste en localStorage. Default: 'es'.
 */
export function useLang() {
  const [lang, setLangState] = useState<Lang>('es');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (stored === 'es' || stored === 'en') {
      setLangState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    document.documentElement.lang = next;
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggle = useCallback(() => {
    setLang(lang === 'es' ? 'en' : 'es');
  }, [lang, setLang]);

  return { lang, setLang, toggle, mounted };
}
