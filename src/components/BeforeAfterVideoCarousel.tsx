"use client";

import { useEffect, useRef, useState } from "react";

const createAutoplayVideoUrl = (videoId: string) =>
  `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${videoId}&rel=0&modestbranding=1`;

const createThumbnailUrl = (videoId: string) =>
  `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

const cards = [
  {
    id: 1,
    name: "Patient Recovery Story 1",
    videoId: "P5J-LlKB3I8",
  },
  {
    id: 2,
    name: "Patient Recovery Story 2",
    videoId: "cWlQ6rZ3z3E",
  },
  {
    id: 3,
    name: "Patient Recovery Story 3",
    videoId: "IkkORvrZCfo",
  },
  {
    id: 4,
    name: "Patient Recovery Story 4",
    videoId: "imwH1EKCxkg",
  },
  {
    id: 5,
    name: "Patient Recovery Story 5",
    videoId: "RyJnNAPFRQM",
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
    <div className="mx-auto w-full max-w-6xl">
      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous video"
          className="ba-arrow-side btn-premium btn-icon hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white xl:inline-flex"
        >
          <span className="material-symbols-outlined text-xl">chevron_left</span>
        </button>

        <div className="ba-cards-container flex w-full min-w-0 flex-1 items-center justify-center gap-0 overflow-hidden [perspective:1200px] sm:gap-4 lg:gap-5">
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
                className={`ba-card-anim relative aspect-[4/5] shrink-0 cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 sm:aspect-[9/16] sm:rounded-3xl ${
                  isCenter
                    ? "ba-center z-20 w-[calc(100vw-0.25rem)] border border-primary/40 shadow-2xl shadow-primary/20 sm:w-[calc(100vw-1rem)] lg:w-[21rem]"
                    : "ba-side z-10 hidden w-[14.5rem] scale-[0.9] border border-white/10 opacity-55 shadow-xl shadow-brand-deeper/30 xl:block"
                }`}
              >
                {isCenter ? (
                  <iframe
                    key={card.videoId}
                    src={createAutoplayVideoUrl(card.videoId)}
                    title={card.name}
                    className="h-full w-full bg-black"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    loading="lazy"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={createThumbnailUrl(card.videoId)}
                      alt={card.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute inset-0 bg-brand-deeper/35" />
                    <span className="material-symbols-outlined absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-primary shadow-lg">
                      play_arrow
                    </span>
                  </>
                )}
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-brand-deeper/50 to-transparent" />
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next video"
          className="ba-arrow-side btn-premium btn-icon hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white xl:inline-flex"
        >
          <span className="material-symbols-outlined text-xl">chevron_right</span>
        </button>
      </div>

      <div className="ba-bottom-nav mt-5 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous video"
          className="btn-premium btn-icon inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white xl:hidden"
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
          className="btn-premium btn-icon inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white xl:hidden"
        >
          <span className="material-symbols-outlined text-lg">chevron_right</span>
        </button>
      </div>
    </div>
  );
}
