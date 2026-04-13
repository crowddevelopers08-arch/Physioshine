"use client";

import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const reviews = [
  {
    text: "I came to physioshine for my neck and low back pain. I'm feeling very much better now, the treatment is very good. I am feeling comfortable and relaxed now. I'm recovered by 99% now, thank you & respect for Dr Fathima Madam, and I thank everyone at physioshine.",
    author: "Google Reviewer",
    rating: 5,
  },
  {
    text: "My dad has had severe sciatic nerve pain and lower back pain for a long time. After taking physiotherapy sessions here, my father's pain has reduced a lot. The sessions included stretching, strengthening exercises, and posture guidance, which really helped improve my mobility.",
    author: "Google Reviewer",
    rating: 5,
  },
  {
    text: "I'm thoroughly impressed with the physiotherapy services at Physioshine - Advanced Neuro & Chiropractic Centre. The team is super professional, caring, and skilled. My experience was top-notch - from the warm welcome to the personalised treatment plan.",
    author: "Google Reviewer",
    rating: 5,
  },
  {
    text: "Treatment is good. Recovered from my back pain, very satisfied with the result. Thank you, Dr Sachin sir and team physioshine.",
    author: "Google Reviewer",
    rating: 5,
  },
  {
    text: "I was suffering from low back pain for 3 months, and nothing seemed to help until I visited PhysioShine PhysioRehab. Dr Sachin and Dr Anjali clearly explained my condition and treated the root cause instead of just giving temporary relief.",
    author: "Google Reviewer",
    rating: 5,
  },
  {
    text: "It was more effective therapy, compared to other clinics... I went with severe neck & lower back pain... in 12 sittings it was cleared. Now I can rate my pain - lower back zero % pain. Your demand is more... so increase your branches on all 4 sides of the city!",
    author: "Google Reviewer",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="mb-3 flex text-secondary-fixed">
      {[...Array(count)].map((_, i) => (
        <span key={i} className="material-symbols-outlined text-lg" data-weight="fill">
          star
        </span>
      ))}
    </div>
  );
}

export default function ReviewsCarousel() {
  const reviewsCarouselRef = useRef<HTMLDivElement | null>(null);

  const scrollReviews = (direction: "prev" | "next") => {
    const container = reviewsCarouselRef.current;

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
    <AnimatedSection
      className="max-[470px]:py-6 overflow-hidden bg-brand-deep py-14 text-white sm:py-16"
      id="reviews"
    >
      <div className="mx-auto mb-8 max-w-7xl px-4 sm:mb-10 sm:px-8">
        <div
          data-reveal-header
          className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div className="max-[470px]:text-center">
            <span className="text-xs font-black uppercase tracking-widest text-secondary-fixed sm:text-sm">
              Patient Stories
            </span>
            <h2 className="mt-1 font-headline text-3xl font-black sm:text-4xl">
              What Our Patients Say
            </h2>
          </div>
          <div
            data-reveal-item
            className="flex w-full shrink-0 items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 sm:w-auto sm:justify-start"
          >
            <div className="text-center">
              <p className="text-2xl font-black">4.7</p>
              <div className="flex text-secondary-fixed">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm" data-weight="fill">
                    {i < 4 ? "star" : "star_half"}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-l border-white/20 pl-3">
              <p className="text-sm font-bold">1000+</p>
              <p className="text-xs text-white/60">Google Reviews</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden">
        <div className="overflow-hidden px-4">
          <div
            ref={reviewsCarouselRef}
            className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((review, index) => (
              <div key={index} className="min-w-full shrink-0 snap-center">
                <div
                  data-reveal-item
                  className="mx-auto w-full max-w-sm rounded-xl border border-white/15 bg-white/8 p-5 shadow-lg shadow-brand-deeper/10 backdrop-blur-sm"
                >
                  <Stars count={review.rating} />
                  <p className="text-sm italic leading-relaxed whitespace-normal text-white/90">
                    &quot;{review.text}&quot;
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-fixed">
                      <span className="material-symbols-outlined text-base text-on-secondary-fixed">
                        person
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-secondary-fixed">
                        {review.author}
                      </p>
                      <p className="text-xs text-white/50">
                        Verified Google Review
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollReviews("prev")}
            className="btn-premium btn-icon inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm"
            aria-label="Previous review"
          >
            <span className="material-symbols-outlined text-xl">chevron_left</span>
          </button>
          <button
            type="button"
            onClick={() => scrollReviews("next")}
            className="btn-premium btn-icon inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm"
            aria-label="Next review"
          >
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>
        </div>
      </div>

      <div className="hidden gap-4 px-4 sm:flex sm:animate-scroll sm:whitespace-nowrap sm:gap-5">
        {[...reviews, ...reviews].map((review, index) => (
          <div
            key={index}
            data-reveal-item
            className="inline-block min-w-[18rem] rounded-xl border border-white/15 bg-white/8 p-5 align-top shadow-lg shadow-brand-deeper/10 backdrop-blur-sm sm:min-w-96 sm:p-6"
          >
            <Stars count={review.rating} />
            <p className="line-clamp-5 whitespace-normal text-sm italic leading-relaxed text-white/90">
              &quot;{review.text}&quot;
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-fixed">
                <span className="material-symbols-outlined text-base text-on-secondary-fixed">
                  person
                </span>
              </div>
              <div>
                <p className="text-sm font-bold text-secondary-fixed">
                  {review.author}
                </p>
                <p className="text-xs text-white/50">Verified Google Review</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
