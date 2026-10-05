const ITEMS = [
  "Joint Mobilization",
  "Spinal Decompression",
  "Spinal Mobility",
  "Movement Restoration",
];

// Each half of the track repeats the list so it always covers wide screens;
// the track holds two identical halves and `animate-scroll` slides it by -50%.
const HALF = [...ITEMS, ...ITEMS, ...ITEMS];

function Track({ hidden = false, compact = false }: { hidden?: boolean; compact?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {HALF.map((item, i) => (
        <li key={`${item}-${i}`} className="flex shrink-0 items-center">
          <span
            className={
              compact
                ? "whitespace-nowrap px-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90 sm:px-4 sm:text-xs"
                : "whitespace-nowrap px-4 font-headline text-sm font-bold uppercase tracking-[0.14em] text-white sm:px-6 sm:text-base lg:px-8 lg:text-lg"
            }
          >
            {item}
          </span>
          <span
            className={`shrink-0 rotate-45 bg-primary-fixed ${compact ? "h-1 w-1" : "h-1.5 w-1.5 sm:h-2 sm:w-2"}`}
            aria-hidden="true"
          />
        </li>
      ))}
    </ul>
  );
}

// Slim ticker that sits inside the dark top bar of the consult Navbar.
export function RunningTicker({ className = "" }: { className?: string }) {
  return (
    <div aria-label="Our treatments" className={`relative overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-linear-to-r from-brand-deep to-transparent sm:w-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-linear-to-l from-brand-deep to-transparent sm:w-10" />

      <div className="group flex">
        <div className="flex w-max animate-scroll [animation-duration:70s] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          <Track compact />
          <Track compact hidden />
        </div>
      </div>
    </div>
  );
}

export default function RunningBar() {
  return (
    <section
      aria-label="Our treatments"
      className="relative overflow-hidden border-y border-primary-fixed/30 bg-primary py-3 shadow-sm sm:py-4 lg:py-5"
    >
      {/* Soft edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-primary to-transparent sm:w-20 lg:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-primary to-transparent sm:w-20 lg:w-32" />

      <div className="group flex">
        <div className="flex w-max animate-scroll [animation-duration:30s] group-hover:[animation-play-state:paused] motion-reduce:animate-none sm:[animation-duration:40s]">
          <Track />
          <Track hidden />
        </div>
      </div>
    </section>
  );
}
