import { redirect } from 'next/navigation';

/**
 * Slug legacy — el case se renombró a /work/pantallas-tienda.
 * Esta ruta redirige al nuevo slug para preservar links externos / SEO.
 */
export default function KioscosLegacyRedirect() {
  redirect('/work/pantallas-tienda');
}
