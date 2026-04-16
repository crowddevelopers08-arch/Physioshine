"use client";

import { useEffect, useRef, useState } from "react";

const createAutoplayVideoUrl = (videoId: string) =>
  `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${videoId}&rel=0&modestbranding=1`;

const cards = [
  {
    id: 1,
    name: "Patient Recovery Story 1",
    video: createAutoplayVideoUrl("P5J-LlKB3I8"),
  },
  {
    id: 2,
    name: "Patient Recovery Story 2",
    video: createAutoplayVideoUrl("cWlQ6rZ3z3E"),
  },
  {
    id: 3,
    name: "Patient Recovery Story 3",
    video: createAutoplayVideoUrl("IkkORvrZCfo"),
  },
  {
    id: 4,
    name: "Patient Recovery Story 4",
    video: createAutoplayVideoUrl("imwH1EKCxkg"),
  },
  {
    id: 5,
    name: "Patient Recovery Story 5",
    video: createAutoplayVideoUrl("RyJnNAPFRQM"),
  },
];

export default function BeforeAfterVideoCarousel() {
  const [current, setCurrent] = useState(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = cards.length;

  const startAutoScroll = () => {
    if (autoRef.current) {
      clearInterval(autoRef.current);
    }

    const isMobile = window.innerWidth <= 580;
    const delay = isMobile ? 15 * 60 * 1000 : 10000;

    autoRef.current = setInterval(() => {
      setCurrent((previous) => (previous + 1) % total);
    }, delay);
  };

  useEffect(() => {
    startAutoScroll();

    return () => {
      if (autoRef.current) {
        clearInterval(autoRef.current);
      }
    };
  }, []);

  const go = (index: number) => {
    setCurrent((index + total) % total);
  };

  const prev = () => go(current - 1);
  const next = () => go(current + 1);

  const visible = [
    (current - 1 + total) % total,
    current,
    (current + 1) % total,
  ];

  return (
    <div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous video"
          className="ba-arrow-side btn-premium btn-icon hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white sm:inline-flex"
        >
          <span className="material-symbols-outlined text-xl">chevron_left</span>
        </button>

        <div className="ba-cards-container flex min-h-[28.75rem] flex-1 items-center justify-center gap-5 [perspective:1200px] sm:min-h-[33.75rem]">
          {visible.map((cardIndex, position) => {
            const card = cards[cardIndex];
            const isCenter = position === 1;

            return (
              <button
                key={`${card.id}-${position}`}
                type="button"
                onClick={() => {
                  if (!isCenter) {
                    go(cardIndex);
                  }
                }}
                aria-label={`Show ${card.name}`}
                className={`ba-card-anim relative shrink-0 cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 ${
                  isCenter
                    ? "ba-center z-20 h-[28.75rem] w-[calc(100vw-3rem)] max-w-[22.5rem] border border-primary/40 shadow-2xl shadow-primary/20 sm:h-[33.75rem] sm:w-[26.25rem]"
                    : "ba-side z-10 hidden h-[28.75rem] w-[20.5rem] scale-[0.92] border border-white/10 opacity-55 shadow-xl shadow-brand-deeper/30 lg:block"
                }`}
              >
                <iframe
                  src={card.video}
                  title={card.name}
                  className="h-full w-full bg-black"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-brand-deeper/50 to-transparent" />
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next video"
          className="ba-arrow-side btn-premium btn-icon hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white sm:inline-flex"
        >
          <span className="material-symbols-outlined text-xl">chevron_right</span>
        </button>
      </div>

      <div className="ba-bottom-nav mt-5 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous video"
          className="btn-premium btn-icon inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white sm:hidden"
        >
          <span className="material-symbols-outlined text-lg">chevron_left</span>
        </button>

        {cards.map((card, index) => (
          <button
            key={card.id}
            type="button"
            onClick={() => go(index)}
            aria-label={`Slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "w-7 bg-secondary-fixed shadow-sm shadow-secondary-fixed/40"
                : "w-2 bg-white/25"
            }`}
          />
        ))}

        <button
          type="button"
          onClick={next}
          aria-label="Next video"
          className="btn-premium btn-icon inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white sm:hidden"
        >
          <span className="material-symbols-outlined text-lg">chevron_right</span>
        </button>
      </div>
    </div>
  );
}
