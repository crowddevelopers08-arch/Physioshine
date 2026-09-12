"use client";

import { useLayoutEffect, useRef, type ElementType, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimatedSectionProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function AnimatedSection({
  as: Tag = "section",
  children,
  className,
  id,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const header = section.querySelector<HTMLElement>("[data-reveal-header]");
      const items = gsap.utils.toArray<HTMLElement>("[data-reveal-item]", section);

      if (header) {
        gsap.set(header, {
          willChange: "transform, opacity",
          force3D: true,
        });

        gsap.fromTo(
          header,
          {
            y: 32,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: "power2.out",
            clearProps: "willChange",
            scrollTrigger: {
              trigger: header,
              start: "top 82%",
              once: true,
              fastScrollEnd: true,
              invalidateOnRefresh: true,
            },
          }
        );
      }

      if (items.length > 0) {
        gsap.set(items, {
          willChange: "transform, opacity",
          force3D: true,
        });

        ScrollTrigger.batch(items, {
          start: "top 88%",
          once: true,
          fastScrollEnd: true,
          onEnter: (batch) => {
            gsap.fromTo(
              batch,
              {
                y: 36,
                autoAlpha: 0,
                scale: 0.985,
              },
              {
                y: 0,
                autoAlpha: 1,
                scale: 1,
                duration: 0.65,
                stagger: 0.08,
                ease: "power2.out",
                clearProps: "willChange",
              }
            );
          },
        });
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <Tag
      ref={sectionRef}
      className={className}
      id={id}
    >
      {children}
    </Tag>
  );
}
