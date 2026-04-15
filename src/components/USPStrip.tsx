"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedSection from "./AnimatedSection";

gsap.registerPlugin(ScrollTrigger);

function CounterValue({
  end,
  suffix = "",
  decimals = 0,
  className,
}: {
  end: number;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const valueRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = valueRef.current;
    if (!element) return;

    const counter = { value: 0 };

    const tween = gsap.to(counter, {
      value: end,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: { trigger: element, start: "top 85%", once: true },
      onUpdate: () => {
        element.textContent = `${counter.value.toFixed(decimals)}${suffix}`;
      },
    });

    element.textContent = `${(0).toFixed(decimals)}${suffix}`;

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [decimals, end, suffix]);

  return <span ref={valueRef} className={className} />;
}

export default function USPStrip() {
  return (
    <AnimatedSection className="bg-brand-deep py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div
          data-reveal-header
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-[1fr_1fr_1fr_auto_auto] lg:items-center lg:gap-5"
        >

          {/* Google Reviews */}
          <div
            data-reveal-item
            className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center backdrop-blur-sm sm:flex-row sm:gap-4 sm:px-5 sm:text-left"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/20">
              <img src="/google-g.svg" alt="Google" className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-black font-headline text-white leading-none">
                <CounterValue end={1000} suffix="+" />
              </p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-white/50">
                Google Reviews
              </p>
            </div>
          </div>

          {/* Google Rating */}
          <div
            data-reveal-item
            className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center backdrop-blur-sm sm:flex-row sm:gap-4 sm:px-5 sm:text-left"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary-fixed/20">
              <img src="/google-g.svg" alt="Google" className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 leading-none sm:justify-start">
                <p className="text-2xl font-black font-headline text-white">
                  <CounterValue end={4.8} decimals={1} />
                </p>
                <div className="flex text-secondary-fixed">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm" data-weight="fill">star</span>
                  ))}
                  <span className="material-symbols-outlined text-sm" data-weight="fill">star_half</span>
                </div>
              </div>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-white/50">
                Google Rating
              </p>
            </div>
          </div>

          {/* Happy Clients */}
          <div
            data-reveal-item
            className="col-span-2 flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center backdrop-blur-sm sm:col-span-1 sm:flex-row sm:gap-4 sm:px-5 sm:text-left"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/20">
              <span className="material-symbols-outlined text-xl text-primary">group</span>
            </div>
            <div>
              <p className="text-2xl font-black font-headline text-white leading-none">
                <CounterValue end={5000} suffix="+" />
              </p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-white/50">
                Happy Clients
              </p>
            </div>
          </div>

          {/* Separator */}
          <div className="hidden lg:block lg:mx-6 lg:h-12 lg:w-px lg:bg-white/15" />

          {/* CTA */}
          <div
            data-reveal-item
            className="col-span-2 flex flex-col items-center gap-3 text-center sm:col-span-3 lg:col-span-1 lg:items-start lg:text-left"
          >
            <p className="text-center text-sm font-semibold text-white/70 lg:text-left">
              High Quality Treatment<br className="hidden lg:block" /> at an Affordable Rate
            </p>
            {/* <a
              href="tel:8309199733"
              className="btn-premium hidden items-center gap-2 rounded-full bg-secondary-fixed px-5 py-2.5 text-sm font-bold text-on-secondary-fixed shadow-lg hover:brightness-110 max-[639px]:inline-flex"
            >
              <span className="material-symbols-outlined text-base">call</span>
              8309-199733
            </a> */}
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
