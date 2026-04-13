"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
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

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const header = section.querySelector<HTMLElement>("[data-reveal-header]");
    const items = gsap.utils.toArray<HTMLElement>("[data-reveal-item]", section);

    if (header) {
      gsap.fromTo(
        header,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          y: 60,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (section.contains(trigger.trigger as Node)) {
          trigger.kill();
        }
      });
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
