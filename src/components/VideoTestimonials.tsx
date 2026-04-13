"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import AnimatedSection from "./AnimatedSection";

const videos = [
  {
    id: 1,
    permalink: "https://www.instagram.com/reel/REPLACE_WITH_REEL_1/",
    title: "Back Pain Recovery",
  },
  {
    id: 2,
    permalink: "https://www.instagram.com/reel/REPLACE_WITH_REEL_2/",
    title: "Stroke Rehab Progress",
  },
  {
    id: 3,
    permalink: "https://www.instagram.com/reel/REPLACE_WITH_REEL_3/",
    title: "Sports Injury Comeback",
  },
  {
    id: 4,
    permalink: "https://www.instagram.com/reel/REPLACE_WITH_REEL_4/",
    title: "Spine Compression Relief",
  },
];

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

function InstagramEmbed({
  permalink,
  title,
}: {
  permalink: string;
  title: string;
}) {
  const isPlaceholder = permalink.includes("REPLACE_WITH_REEL");

  if (isPlaceholder) {
    return (
      <div className="mx-auto flex aspect-[9/16] w-full max-w-[21rem] flex-col items-center justify-center rounded-[2rem] border border-dashed border-white/20 bg-white/6 p-6 text-center text-white/75">
        <span className="material-symbols-outlined mb-4 text-5xl text-secondary-fixed">
          smart_display
        </span>
        <h3 className="font-headline text-lg font-bold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed">
          Replace this placeholder with an Instagram Reel URL in
          <span className="mx-1 rounded bg-white/10 px-2 py-1 font-mono text-xs text-white">
            `videos`
          </span>
          to render the real embed here.
        </p>
      </div>
    );
  }

  return (
    <blockquote
      className="instagram-media !m-0 !min-w-0 !w-full !max-w-[21rem] !rounded-[2rem] !border !border-white/10 !bg-white !shadow-xl"
      data-instgrm-captioned
      data-instgrm-permalink={permalink}
      data-instgrm-version="14"
    >
      <a href={permalink} target="_blank" rel="noreferrer">
        View this post on Instagram
      </a>
    </blockquote>
  );
}

export default function VideoTestimonials() {
  const videosCarouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.instgrm?.Embeds?.process();
  }, []);

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
    <AnimatedSection className="bg-brand-deeper py-16 max-[470px]:py-6 text-white">
      <Script
        async
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={() => window.instgrm?.Embeds?.process()}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div data-reveal-header className="mb-10 space-y-2 text-center">
          <span className="text-xs font-black uppercase tracking-widest text-secondary-fixed sm:text-sm">
            Real Results
          </span>
          <h2 className="font-headline text-3xl font-black sm:text-4xl">
            Patient Instagram Video Testimonials
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-white/60 sm:text-base">
            Add your Instagram Reel links below and this section will render the
            real Instagram video embeds directly on the page.
          </p>
        </div>

        <div className="sm:hidden">
          <div className="overflow-hidden">
            <div
              ref={videosCarouselRef}
              className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {videos.map((video) => (
                <div
                  key={video.id}
                  data-reveal-item
                  className="flex min-w-full shrink-0 snap-center justify-center"
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
              aria-label="Previous testimonial video"
            >
              <span className="material-symbols-outlined text-xl">chevron_left</span>
            </button>
            <button
              type="button"
              onClick={() => scrollVideos("next")}
              className="btn-premium btn-icon inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm"
              aria-label="Next testimonial video"
            >
              <span className="material-symbols-outlined text-xl">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="hidden items-start justify-items-center gap-5 sm:grid sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
          {videos.map((video) => (
            <div key={video.id} data-reveal-item className="flex w-full justify-center">
              <InstagramEmbed permalink={video.permalink} title={video.title} />
            </div>
          ))}
        </div>

        <div data-reveal-item className="mt-10 text-center">
          <a
            href="#book"
            className="btn-premium inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-bold text-white shadow-lg hover:brightness-110"
          >
            <span className="material-symbols-outlined text-base">calendar_month</span>
            Start Your Recovery Journey
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
