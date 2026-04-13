"use client";

import { useEffect } from "react";
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
        <h3 className="text-lg font-bold font-headline text-white">{title}</h3>
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
  useEffect(() => {
    window.instgrm?.Embeds?.process();
  }, []);

  return (
    <AnimatedSection className="py-16 bg-brand-deeper text-white">
      <Script
        async
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={() => window.instgrm?.Embeds?.process()}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div data-reveal-header className="text-center mb-10 space-y-2">
          <span className="text-secondary-fixed font-black uppercase tracking-widest text-xs sm:text-sm">
            Real Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-headline">
            Patient Instagram Video Testimonials
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto">
            Add your Instagram Reel links below and this section will render the
            real Instagram video embeds directly on the page.
          </p>
        </div>

        <div className="sm:hidden -mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {videos.map((video) => (
            <div
              key={video.id}
              data-reveal-item
              className="min-w-[88%] snap-center flex justify-center"
            >
              <InstagramEmbed permalink={video.permalink} title={video.title} />
            </div>
          ))}
        </div>

        <div className="hidden sm:grid grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 items-start justify-items-center">
          {videos.map((video) => (
            <div key={video.id} data-reveal-item className="w-full flex justify-center">
              <InstagramEmbed permalink={video.permalink} title={video.title} />
            </div>
          ))}
        </div>

        <div data-reveal-item className="mt-10 text-center">
          <a
            href="#book"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-bold hover:brightness-110 transition-all shadow-lg"
          >
            <span className="material-symbols-outlined text-base">calendar_month</span>
            Start Your Recovery Journey
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
