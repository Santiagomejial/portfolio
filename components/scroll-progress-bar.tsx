'use client';

import { useEffect, useState } from 'react';

/**
 * Barra de progreso del scroll vertical.
 * Vive fija arriba de todo (encima del FloatingNav).
 * Se rellena con el gradient brand a medida que se baja en la página.
 */
export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[200] h-[3px]"
      aria-hidden
    >
      <div
        className="h-full bg-brand-gradient"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
