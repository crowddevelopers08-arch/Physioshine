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

    if (!element) {
      return;
    }

    const counter = { value: 0 };

    const tween = gsap.to(counter, {
      value: end,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        once: true,
      },
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

  return <div ref={valueRef} className={className} />;
}

export default function USPStrip() {
  return (
    <AnimatedSection className="bg-brand-soft py-8 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div
          data-reveal-header
          className="grid grid-cols-1 gap-5 text-center sm:grid-cols-3 sm:gap-6 lg:grid-cols-5 lg:items-center lg:text-left"
        >
          <div data-reveal-item className="flex flex-col items-center space-y-1 lg:items-start">
            <CounterValue
              end={1000}
              suffix="+"
              className="text-2xl sm:text-3xl font-black font-headline text-primary"
            />
            <div className="text-on-surface-variant uppercase text-xs tracking-widest font-bold">
              Google Reviews
            </div>
          </div>

          <div data-reveal-item className="flex flex-col items-center space-y-1 lg:items-start">
            <div className="mb-1 flex justify-center text-secondary-fixed-dim lg:justify-start">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-xl" data-weight="fill">
                  star
                </span>
              ))}
              <span className="material-symbols-outlined text-xl" data-weight="fill">
                star_half
              </span>
            </div>
            <CounterValue
              end={4.7}
              suffix="/5"
              decimals={1}
              className="text-2xl sm:text-3xl font-black font-headline text-brand-deep"
            />
            <div className="text-on-surface-variant uppercase text-xs tracking-widest font-bold">
              Google Rating
            </div>
          </div>

          <div data-reveal-item className="flex flex-col items-center space-y-1 lg:items-start">
            <CounterValue
              end={5000}
              suffix="+"
              className="text-2xl sm:text-3xl font-black font-headline text-primary"
            />
            <div className="text-on-surface-variant uppercase text-xs tracking-widest font-bold">
              Satisfied Clients
            </div>
          </div>

          <div data-reveal-item className="space-y-1 sm:col-span-3 lg:col-span-1">
            <div className="text-base sm:text-lg font-bold font-headline leading-snug text-brand-deep">
              High Quality Treatment at an Affordable Rate
            </div>
          </div>

          <div data-reveal-item className="sm:col-span-3 lg:col-span-1 lg:text-right">
            <a
              className="btn-premium inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white shadow-md"
              href="tel:8309199733"
            >
              <span className="material-symbols-outlined text-lg">call</span>
              Call: 8309-199733
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
