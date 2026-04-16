"use client";

import { useRef } from "react";

const videos = [
  {
    id: 1,
    permalink: "https://www.instagram.com/p/DWWx33SETar/",
    title: "Patient Recovery Story 1",
  },
  {
    id: 2,
    permalink: "https://www.instagram.com/p/DV8kebVkudX/",
    title: "Patient Recovery Story 2",
  },
  {
    id: 3,
    permalink: "https://www.instagram.com/p/DTKpu51Dpi1/",
    title: "Patient Recovery Story 3",
  },
  {
    id: 4,
    permalink: "https://www.instagram.com/p/DTcTKhjkzLL/",
    title: "Patient Recovery Story 4",
  },
  {
    id: 5,
    permalink: "https://www.instagram.com/p/DTcZxjmCfQK/",
    title: "Patient Recovery Story 5",
  },
  {
    id: 6,
    permalink: "https://www.instagram.com/p/DRhLG_EDoRx/",
    title: "Patient Recovery Story 6",
  },
];

function InstagramEmbed({
  permalink,
  title,
}: {
  permalink: string;
  title: string;
}) {
  const embedUrl = permalink.endsWith("/")
    ? `${permalink}embed/`
    : `${permalink}/embed/`;

  return (
    <div className="w-full max-w-[21rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-xl">
      <iframe
        title={title}
        src={embedUrl}
        className="h-[42rem] w-full bg-white sm:h-[44rem]"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        loading="lazy"
        scrolling="no"
      />
    </div>
  );
}

export default function InstagramTestimonialsCarousel() {
  const videosCarouselRef = useRef<HTMLDivElement | null>(null);

  const scrollVideos = (direction: "prev" | "next") => {
    const container = videosCarouselRef.current;

    if (!container) {
      return;
    }

    const amount = container.clientWidth;
    container.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="overflow-hidden">
        <div
          ref={videosCarouselRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex min-w-full shrink-0 snap-center justify-center sm:min-w-[50%] xl:min-w-[33.333%]"
            >
              <InstagramEmbed permalink={video.permalink} title={video.title} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollVideos("prev")}
          className="btn-premium btn-icon inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm"
          aria-label="Previous Instagram testimonial video"
        >
          <span className="material-symbols-outlined text-xl">chevron_left</span>
        </button>
        <button
          type="button"
          onClick={() => scrollVideos("next")}
          className="btn-premium btn-icon inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm"
          aria-label="Next Instagram testimonial video"
        >
          <span className="material-symbols-outlined text-xl">chevron_right</span>
        </button>
      </div>
    </div>
  );
}
