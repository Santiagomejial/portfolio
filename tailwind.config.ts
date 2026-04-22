import type { Config } from 'tailwindcss';

/**
 * Los tokens viven en /styles/tokens.css como CSS Custom Properties.
 * Aquí los mapeamos a Tailwind para poder usarlos como clases utilitarias.
 * Cambiar un token → cambia en todo el sitio automáticamente.
 */
const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: 'var(--container-gutter)',
      screens: {
        '2xl': 'var(--container-max)',
      },
    },
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-elev': 'var(--bg-elev)',
        'bg-block': 'var(--bg-block)',
        'bg-hover': 'var(--bg-hover)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        'ink-mute': 'var(--ink-mute)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
        blue: 'var(--blue)',
        'blue-soft': 'var(--blue-soft)',
        rose: 'var(--rose)',
        'rose-soft': 'var(--rose-soft)',
        cyan: 'var(--cyan)',
      },
      fontFamily: {
        serif: 'var(--font-serif)',
        sans: 'var(--font-sans)',
      },
      backgroundImage: {
        'brand-gradient': 'var(--gradient)',
        'brand-gradient-soft': 'var(--gradient-soft)',
      },
      fontSize: {
        'display-xl': ['var(--fs-display-xl)', { lineHeight: 'var(--lh-display)', letterSpacing: 'var(--ls-display)' }],
        'display-lg': ['var(--fs-display-lg)', { lineHeight: 'var(--lh-display)', letterSpacing: 'var(--ls-display)' }],
        'display-md': ['var(--fs-display-md)', { lineHeight: 'var(--lh-heading)', letterSpacing: 'var(--ls-display)' }],
        'body-xl': ['var(--fs-body-xl)', { lineHeight: 'var(--lh-body)' }],
        'body-lg': ['var(--fs-body-lg)', { lineHeight: 'var(--lh-body)' }],
        body: ['var(--fs-body)', { lineHeight: 'var(--lh-body)' }],
        'body-sm': ['var(--fs-body-sm)', { lineHeight: 'var(--lh-body)' }],
        eyebrow: ['var(--fs-eyebrow)', { lineHeight: '1.4', letterSpacing: 'var(--ls-eyebrow)' }],
      },
      letterSpacing: {
        display: 'var(--ls-display)',
        eyebrow: 'var(--ls-eyebrow)',
        caps: 'var(--ls-caps)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
      spacing: {
        gutter: 'var(--container-gutter)',
      },
      transitionDuration: {
        fast: 'var(--duration-fast)',
        base: 'var(--duration-base)',
        slow: 'var(--duration-slow)',
        slower: 'var(--duration-slower)',
      },
      transitionTimingFunction: {
        'ease-out-brand': 'var(--ease-out)',
      },
      zIndex: {
        nav: 'var(--z-nav)',
        overlay: 'var(--z-overlay)',
        modal: 'var(--z-modal)',
      },
    },
  },
  plugins: [],
};

export default config;
