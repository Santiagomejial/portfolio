import type { Metadata } from 'next';
import { Inter, Young_Serif } from 'next/font/google';
import { FloatingNav } from '@/components/floating-nav';
import { ScrollProgressBar } from '@/components/scroll-progress-bar';
import { BackToTopButton } from '@/components/back-to-top-button';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

const youngSerif = Young_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-young-serif',
  weight: '400',
});

export const metadata: Metadata = {
  title: {
    default: 'Santiago Mejía L. — Product Designer & Product Owner',
    template: '%s — Santiago Mejía L.',
  },
  description:
    'Diseñador de productos digitales y Product Owner. Acompaño el ciclo completo, desde la concepción hasta la evolución. Hoy lidero el producto de Homecenter & Constructor.',
  metadataBase: new URL('https://santiagomejia.design'),
  authors: [{ name: 'Santiago Mejía L.' }],
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://santiagomejia.design',
    siteName: 'Santiago Mejía L.',
  },
};

/**
 * Script inline para aplicar el tema correcto ANTES del primer paint.
 * Evita el flash blanco → negro en dark por defecto.
 */
const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('sml-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" data-theme="dark" className={`${inter.variable} ${youngSerif.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ScrollProgressBar />
        <FloatingNav />
        <main>{children}</main>
        <BackToTopButton />
      </body>
    </html>
  );
}
