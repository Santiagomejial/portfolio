import type { Lang } from './use-lang';

/**
 * Localized string — par ES/EN.
 * Usar dentro de content files o componentes para resolver
 * el texto activo según el idioma.
 */
export interface L {
  es: string;
  en: string;
}

/** Resolve a localized string into the active language. */
export function t(localized: L, lang: Lang): string {
  return localized[lang];
}

/** Localized HighlightTitle — { pre, highlight, post } */
export interface LHighlight {
  es: { pre: string; highlight: string; post?: string };
  en: { pre: string; highlight: string; post?: string };
}

/** Localized array of strings (chips, lists, etc.) */
export interface LArray {
  es: readonly string[];
  en: readonly string[];
}
