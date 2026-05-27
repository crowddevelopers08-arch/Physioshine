"use client";

import Image from "next/image";

const Review = () => {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
      `}</style>
      <div
        className="flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(circle_at_top,#eef5ff_0%,#d3e4ff_32%,#10243d_100%)] p-4 sm:p-6 lg:p-8"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        {/* Card */}
        <div className="mx-auto w-full max-w-xs rounded-[28px] border border-white/60 bg-white/95 p-6 shadow-[0_24px_80px_rgba(16,36,61,0.22)] backdrop-blur sm:max-w-sm sm:p-8 md:max-w-md lg:max-w-lg lg:p-10 xl:max-w-xl">

          {/* Logo */}
          <div className="mb-4 flex justify-center sm:mb-6 lg:mb-8">
            <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-brand-soft px-5 py-3 ring-1 ring-primary-fixed-dim sm:px-7 sm:py-4">
              <Image
                src="/trans-phylogo.png"
                alt="Physio Shine"
                width={220}
                height={81}
                priority
                className="h-auto w-auto object-contain"
                style={{ maxWidth: "200px" }}
              />
            </div>
          </div>

          {/* Heading */}
          <div className="mb-6 text-center sm:mb-8 lg:mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary sm:mb-4">
              Share Your Experience
            </p>
            <h2 className="mb-3 text-xl font-bold text-brand-deep sm:mb-4 sm:text-2xl md:text-3xl lg:text-4xl">
              Click &amp; Review
            </h2>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-on-surface-variant sm:text-base md:text-lg">
              We&apos;d love to hear your feedback!
              <br />
              Please click any one of the buttons below to share your review.
              <br />
              A short review of 4 to 5 lines would be greatly appreciated.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
            <a
              href="https://g.page/r/CecwYXDXqAJ9EBM/review"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full cursor-pointer rounded-xl bg-primary py-2.5 text-base font-semibold text-on-primary shadow-lg shadow-primary/25 transition-all duration-200 hover:scale-105 hover:bg-on-primary-fixed-variant hover:shadow-xl sm:py-3 sm:text-lg lg:py-4 lg:text-xl">
                Client Review
              </button>
            </a>
            <a href="/client-feedback">
              <button className="w-full cursor-pointer rounded-xl border-2 border-secondary-fixed bg-transparent py-2.5 text-base font-semibold text-on-secondary-fixed-variant transition-all duration-200 hover:scale-105 hover:bg-secondary-fixed hover:text-on-secondary-fixed sm:py-3 sm:text-lg lg:py-4 lg:text-xl">
                Client Feedback
              </button>
            </a>
          </div>

          <div className="mt-6 rounded-2xl bg-brand-soft px-4 py-3 text-center text-sm text-on-surface-variant sm:mt-8">
            Your review helps more patients discover trusted physiotherapy care
            with Physio Shine.
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
