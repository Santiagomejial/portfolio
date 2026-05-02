import { cn } from '@/lib/utils';

interface DownloadAppButtonsProps {
  android?: string;
  ios?: string;
  className?: string;
}

/**
 * Par de botones de descarga (Android · iOS) con íconos de cada plataforma.
 * Centrado horizontalmente. Renderiza solo los que tienen URL.
 */
export function DownloadAppButtons({
  android,
  ios,
  className,
}: DownloadAppButtonsProps) {
  if (!android && !ios) return null;

  return (
    <div
      className={cn(
        'container-portfolio flex flex-col items-center justify-center gap-3 pt-8 sm:flex-row md:pt-10',
        className
      )}
    >
      {android && (
        <a
          href={android}
          target="_blank"
          rel="noreferrer noopener"
          className={cn(
            'group inline-flex items-center justify-center gap-2.5',
            'w-full rounded-full px-5 py-3 sm:w-auto',
            'border border-line bg-bg-elev text-ink',
            'text-[13px] font-semibold uppercase tracking-eyebrow',
            'transition-base hover:border-blue hover:bg-bg-block'
          )}
        >
          <AndroidIcon />
          <span>Descargar para Android</span>
        </a>
      )}
      {ios && (
        <a
          href={ios}
          target="_blank"
          rel="noreferrer noopener"
          className={cn(
            'group inline-flex items-center justify-center gap-2.5',
            'w-full rounded-full px-5 py-3 sm:w-auto',
            'border border-line bg-bg-elev text-ink',
            'text-[13px] font-semibold uppercase tracking-eyebrow',
            'transition-base hover:border-blue hover:bg-bg-block'
          )}
        >
          <AppleIcon />
          <span>Descargar para iOS</span>
        </a>
      )}
    </div>
  );
}

function AndroidIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.523 15.341a1.06 1.06 0 1 1 0-2.12 1.06 1.06 0 0 1 0 2.12m-11.046 0a1.06 1.06 0 1 1 0-2.12 1.06 1.06 0 0 1 0 2.12m11.428-6.02 2.116-3.665a.44.44 0 0 0-.16-.6.44.44 0 0 0-.6.16l-2.144 3.713a13.32 13.32 0 0 0-10.234 0L4.74 5.216a.44.44 0 0 0-.6-.16.44.44 0 0 0-.16.6l2.117 3.666C2.435 11.295.099 14.99 0 19.252h24c-.099-4.262-2.435-7.957-6.095-9.93" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}
