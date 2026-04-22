import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combinador de classes Tailwind (patrón shadcn/ui).
 * Evita conflictos al mezclar clases condicionales.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
