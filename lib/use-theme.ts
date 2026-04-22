'use client';

import { useEffect, useState, useCallback } from 'react';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'sml-theme';

/**
 * Hook de tema con soporte a:
 * - prefers-color-scheme del sistema (default)
 * - toggle manual persistido en localStorage
 * - Sin flash en primer render (ver script inline en layout.tsx)
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    const prefersDark = typeof window !== 'undefined'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : true;
    const initial: Theme = (stored as Theme) ?? (prefersDark ? 'dark' : 'light');
    setThemeState(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggle = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  return { theme, setTheme, toggle, mounted };
}
