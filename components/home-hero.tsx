'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Eyebrow } from './eyebrow';

interface HomeHeroProps {
  /** Pre-título pequeño en caps */
  eyebrow: string;
  /**
   * Título descompuesto en partes.
   * El highlight se renderiza con gradient brand animado y entrada palabra por palabra.
   */
  title: { pre: string; highlight: string; post?: string };
  /** Párrafo descriptivo */
  sub: string;
  /** Slot para chips u otro contenido bajo el sub */
  children?: React.ReactNode;
  className?: string;
}

/**
 * Hero específico del HOME — visual generativo + tipografía bold animada.
 *
 * Capas (de fondo a frente):
 *   1. Dot grid sutil con máscara radial (más denso al centro).
 *   2. 3 blobs gradient (blue, rose, cyan) flotando en órbitas suaves.
 *   3. Spotlight radial que sigue el cursor (solo en pointer:fine).
 *   4. Contenido tipográfico con entrada palabra-por-palabra y highlight
 *      con gradient brand panning continuamente.
 *
 * Respeta prefers-reduced-motion (definido en globals.css).
 * Responsive: en touch desactiva el mouse tracking; el resto sigue vivo.
 */
export function HomeHero({ eyebrow, title, sub, children, className }: HomeHeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Skip mouse tracking on coarse pointers (touch). El spotlight queda
    // estático en el centro (default --mx/--my = 50%).
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine) return;

    let raf = 0;
    const handleMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        section.style.setProperty('--mx', `${x}%`);
        section.style.setProperty('--my', `${y}%`);
      });
    };

    section.addEventListener('mousemove', handleMove);
    return () => {
      section.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // ─── Stagger del titular ────────────────────────────────────
  // pre word delays + highlight word delays + post block delay + sub delay
  const preWords = title.pre.trim().split(/\s+/);
  const highlightWords = title.highlight.trim().split(/\s+/);

  const EYEBROW_DELAY = 0;
  const PRE_START = 200;
  const PRE_STEP = 70;
  const HIGHLIGHT_GAP = 120;
  const HIGHLIGHT_STEP = 110;
  const POST_GAP = 150;
  const SUB_GAP = 250;
  const CHIPS_GAP = 200;

  const preDelays = preWords.map((_, i) => PRE_START + i * PRE_STEP);
  const lastPreDelay = preDelays.length ? preDelays[preDelays.length - 1] : PRE_START;
  const highlightStart = lastPreDelay + PRE_STEP + HIGHLIGHT_GAP;
  const highlightDelays = highlightWords.map(
    (_, i) => highlightStart + i * HIGHLIGHT_STEP
  );
  const lastHighlightDelay = highlightDelays.length
    ? highlightDelays[highlightDelays.length - 1]
    : highlightStart;
  const postDelay = lastHighlightDelay + HIGHLIGHT_STEP + POST_GAP;
  const subDelay = postDelay + SUB_GAP;
  const chipsDelay = subDelay + CHIPS_GAP;

  return (
    <section
      ref={sectionRef}
      className={cn(
        'relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32',
        className
      )}
      style={
        {
          // Defaults para el spotlight: centro de la sección.
          '--mx': '50%',
          '--my': '40%',
        } as React.CSSProperties
      }
    >
      {/* ─── Capa 1: dot grid con máscara radial ─── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-30 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(color-mix(in oklab, var(--ink) 22%, transparent) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
          maskImage:
            'radial-gradient(ellipse 75% 65% at 50% 40%, black 35%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 75% 65% at 50% 40%, black 35%, transparent 100%)',
        }}
      />

      {/* ─── Capa 2: blobs gradient flotantes ─── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-40 overflow-hidden"
      >
        <div
          className="anim-blob-drift-a absolute -left-[10%] top-[-5%] h-[55vh] w-[55vh] rounded-full"
          style={{
            background:
              'radial-gradient(circle at center, color-mix(in oklab, var(--blue) 55%, transparent) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
        <div
          className="anim-blob-drift-b absolute -right-[8%] top-[10%] h-[50vh] w-[50vh] rounded-full"
          style={{
            background:
              'radial-gradient(circle at center, color-mix(in oklab, var(--rose) 50%, transparent) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="anim-blob-drift-c absolute left-[25%] bottom-[-15%] h-[45vh] w-[45vh] rounded-full"
          style={{
            background:
              'radial-gradient(circle at center, color-mix(in oklab, var(--cyan) 45%, transparent) 0%, transparent 70%)',
            filter: 'blur(85px)',
          }}
        />
      </div>

      {/* ─── Capa 3: spotlight que sigue el cursor ─── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            'radial-gradient(450px circle at var(--mx) var(--my), color-mix(in oklab, var(--blue) 18%, transparent) 0%, transparent 70%)',
        }}
      />

      {/* ─── Capa 3.5: fade-out vertical al borde inferior ───
          Funde las 3 capas de fondo hacia el color del page background.
          Sin esto se nota una línea dura donde termina el hero. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[35%]"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, color-mix(in oklab, var(--bg) 70%, transparent) 60%, var(--bg) 100%)',
        }}
      />

      {/* ─── Capa 4: contenido tipográfico ─── */}
      <div className="container-portfolio relative">
        <div
          className="anim-hero-fade-up"
          style={{ animationDelay: `${EYEBROW_DELAY}ms` }}
        >
          <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
        </div>

        <h1 className="display-xl text-ink">
          {/* Pre — palabra por palabra */}
          {preWords.map((word, i) => (
            <span
              key={`pre-${i}`}
              className="anim-hero-word-rise inline-block"
              style={{ animationDelay: `${preDelays[i]}ms` }}
            >
              {word}
              {i < preWords.length - 1 ? ' ' : ' '}
            </span>
          ))}

          {/* Highlight — palabra por palabra con gradient brand animado */}
          {highlightWords.map((word, i) => {
            const isLast = i === highlightWords.length - 1;
            return (
              <span
                key={`hl-${i}`}
                className="anim-hero-word-rise inline-block"
                style={{ animationDelay: `${highlightDelays[i]}ms` }}
              >
                <span
                  className="anim-gradient-pan inline-block bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, var(--blue), var(--rose), var(--cyan), var(--blue))',
                  }}
                >
                  {word}
                </span>
                {!isLast ? ' ' : ''}
              </span>
            );
          })}

          {/* Post — entra como bloque después del highlight */}
          {title.post && (
            <span
              className="anim-hero-fade-up inline"
              style={{ animationDelay: `${postDelay}ms` }}
            >
              {title.post}
            </span>
          )}
        </h1>

        {sub && (
          <p
            className="text-body-lg anim-hero-fade-up mt-6 max-w-2xl text-ink"
            style={{ animationDelay: `${subDelay}ms` }}
          >
            {sub}
          </p>
        )}

        {children && (
          <div
            className="anim-hero-fade-up mt-8"
            style={{ animationDelay: `${chipsDelay}ms` }}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
