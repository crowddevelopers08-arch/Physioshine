"use client";

import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import PhoneLink from "./PhoneLink";

const teamDoctors = [
  {
    name: "Dr. Manisha.PT",
    qualification: "Neuro Rehabilitation Specialist",
    desc: "Expert in Stroke & Neuro Rehabilitation. Restoring mobility and independence with personalised recovery programs.",
    img: "/manisha.png",
  },
   {
    name: "Dr. Anjali.PT",
    qualification: "Manual & Rehab Therapy Expert",
    desc: "Hands-on physiotherapy focused on pain relief and mobility. Known for a patient-friendly treatment approach.",
    img: "/anjali.png",
  },
  {
    name: "Dr. Sufiyan.PT",
    qualification: "Sports Rehabilitation Specialist",
    desc: "Specialised in Sports Injury Recovery. Strength, flexibility & performance recovery trusted by athletes.",
    img: "/sufiyan.png",
  },
  {
    name: "Dr. Dhanush.PT",
    qualification: "Manual Therapy Expert",
    desc: "Hands-on physiotherapy focused on pain relief and mobility. Known for a patient-friendly treatment approach.",
    img: "/danush.png",
  },
];

const patientCarePoints = [
  { icon: "assignment", label: "Clear diagnosis & explanation" },
  { icon: "spa", label: "Comfortable treatment experience" },
  { icon: "monitor_heart", label: "Continuous monitoring & support" },
  { icon: "trending_up", label: "Faster recovery with long-term results" },
];

export default function DoctorsSection() {
  const doctorsCarouselRef = useRef<HTMLDivElement | null>(null);

  const scrollDoctors = (direction: "prev" | "next") => {
    const container = doctorsCarouselRef.current;

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
    <AnimatedSection className="bg-surface py-20 max-[470px]:py-6 scroll-mt-32" id="doctors">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div data-reveal-header className="mb-14 max-[470px]:mb-6 space-y-3 text-center">
          <span className="text-xs font-black uppercase tracking-widest text-primary sm:text-sm">
            Our Medical Team
          </span>
          <h2 className="font-headline text-3xl font-black sm:text-4xl lg:text-5xl">
            Meet Our Doctors
          </h2>
          <p className="mx-auto max-w-xl text-sm text-on-surface-variant sm:text-base">
            World-class experts dedicated to your physical well-being and long-lasting recovery.
          </p>
          <div className="mx-auto h-1 w-16 rounded-full bg-secondary-fixed" />
        </div>

        <div
          data-reveal-item
          className="mb-10 flex flex-col overflow-hidden rounded-3xl border border-outline-variant/10 bg-surface-container-lowest shadow-xl lg:flex-row"
        >
          <div className="relative shrink-0 lg:w-[420px]">
            <img
              className="image-softened h-72 w-full object-cover object-top sm:h-96 lg:h-full"
              src="/sachinnew.png"
              alt="Dr. Gajwel Sachin Raj"
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-brand-deep/60 to-transparent lg:hidden" />
          </div>

          <div className="flex flex-1 flex-col justify-center gap-5 p-8 sm:p-10">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-secondary-fixed px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-on-secondary-container">
                Founder &amp; Lead Specialist
              </span>
              <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                8+ Years Experience
              </span>
            </div>

            <div>
              <h3 className="font-headline text-2xl font-black leading-tight text-on-surface sm:text-3xl lg:text-4xl">
                Dr. Gajwel Sachin Raj.PT
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Chiropractic Specialist", "Spine Alignment Expert"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-outline-variant/20 bg-surface-container px-3 py-1 text-xs font-semibold text-on-surface-variant"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <blockquote className="rounded-r-xl border-l-4 border-secondary-fixed bg-secondary-fixed/5 py-1 pl-5 pr-4 text-sm italic leading-relaxed text-on-surface-variant sm:text-base">
              &ldquo;Expert Chiropractor with 8+ years of industry experience. My mission is to bring global standards of rehabilitation to every patient, ensuring that recovery is not just a process, but a lifestyle transformation.&rdquo;
            </blockquote>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#booking-form"
                className="btn-premium inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-md shadow-primary/20 hover:brightness-110"
              >
                <span className="material-symbols-outlined text-base">calendar_month</span>
                Book with Dr. Sachin.PT
              </a>
              <PhoneLink
                className="btn-premium btn-mobile-only items-center gap-2 rounded-full border-2 border-primary/30 px-6 py-3 text-sm font-bold text-primary hover:border-primary hover:bg-primary/5"
              >
                <span className="material-symbols-outlined text-base">call</span>
                Call Now
              </PhoneLink>
            </div>
          </div>
        </div>

       

        <div>
          <h3 className="mb-7 text-center font-headline text-xl font-bold sm:text-2xl">
            Our Specialist Team
          </h3>

          <div className="sm:hidden">
            <div className="overflow-hidden">
              <div
                ref={doctorsCarouselRef}
                className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {teamDoctors.map((doc) => (
                  <div key={doc.name} className="min-w-full shrink-0 snap-center">
                    <div
                      data-reveal-item
                      className="mx-auto w-full max-w-sm rounded-2xl border border-outline-variant/10 bg-surface-container-lowest shadow-sm transition-all duration-300"
                    >
                      <div className="flex flex-col items-center p-5 text-center">
                        <div className="mb-4">
                          <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-brand-soft shadow-lg">
                            <img
                              className="image-softened h-full w-full object-cover object-top transition-transform duration-500"
                              src={doc.img}
                              alt={doc.name}
                            />
                          </div>
                        </div>
                        <div className="w-full">
                          <h4 className="font-headline text-base font-bold text-on-surface">
                            {doc.name}
                          </h4>
                          <p className="mb-2 mt-1 text-xs font-bold uppercase tracking-wide leading-tight text-primary">
                            {doc.qualification}
                          </p>
                          <p className="text-sm leading-relaxed text-on-surface-variant">
                            {doc.desc}
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
                onClick={() => scrollDoctors("prev")}
                className="btn-premium btn-icon inline-flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/30 bg-white text-brand-deep shadow-sm"
                aria-label="Previous doctor"
              >
                <span className="material-symbols-outlined text-xl">chevron_left</span>
              </button>
              <button
                type="button"
                onClick={() => scrollDoctors("next")}
                className="btn-premium btn-icon inline-flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/30 bg-white text-brand-deep shadow-sm"
                aria-label="Next doctor"
              >
                <span className="material-symbols-outlined text-xl">chevron_right</span>
              </button>
            </div>
          </div>

          <div className="hidden gap-4 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {teamDoctors.map((doc) => (
              <div
                key={doc.name}
                data-reveal-item
                className="group rounded-2xl border border-outline-variant/10 bg-surface-container-lowest shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex flex-col items-center p-4 text-center sm:p-5">
                  <div className="mb-4">
                    <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-brand-soft shadow-lg sm:h-32 sm:w-32">
                      <img
                        className="image-softened h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        src={doc.img}
                        alt={doc.name}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <h4 className="font-headline text-sm font-bold text-on-surface sm:text-base">
                      {doc.name}
                    </h4>
                    <p className="mb-2 mt-1 text-xs font-bold uppercase tracking-wide leading-tight text-primary">
                      {doc.qualification}
                    </p>
                    <p className="line-clamp-3 text-xs leading-relaxed text-on-surface-variant sm:text-sm">
                      {doc.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

         <div
          data-reveal-item
          className="relative mt-10 overflow-hidden rounded-2xl bg-brand-deep p-7 sm:p-9"
        >
          <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 -translate-y-1/3 translate-x-1/3 rounded-full bg-primary/15" />
          <div className="relative grid grid-cols-1 items-center gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="mb-2 text-xs font-black uppercase tracking-widest text-secondary-fixed">Our Commitment</p>
              <h3 className="font-headline text-xl font-bold text-white sm:text-2xl">
                Patient Centric Care
              </h3>
              <p className="mt-2 text-sm text-white/60">Our doctors ensure every patient gets:</p>
            </div>
            <div className="grid grid-cols-2 gap-3 lg:col-span-3">
              {patientCarePoints.map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/8 p-3">
                  <span className="material-symbols-outlined shrink-0 text-xl text-secondary-fixed" data-weight="fill">
                    {item.icon}
                  </span>
                  <span className="text-xs font-medium leading-snug text-white sm:text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
