import AnimatedSection from "./AnimatedSection";
import BeforeAfterVideoCarousel from "./BeforeAfterVideoCarousel";
import InstagramTestimonialsCarousel from "./InstagramTestimonialsCarousel";

export default function VideoTestimonials() {
  return (
    <AnimatedSection className="bg-brand-deeper py-16 text-white max-[470px]:py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div data-reveal-header className="mx-auto mb-10 max-w-3xl space-y-3 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-14 bg-linear-to-r from-transparent to-secondary-fixed/80" />
            <span className="text-xs font-black uppercase tracking-widest text-secondary-fixed sm:text-sm">
              Real Results
            </span>
            <span className="h-px w-14 bg-linear-to-r from-secondary-fixed/80 to-transparent" />
          </div>
          <h2 className="font-headline text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Patient Testimonials
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
            Watch real recovery stories and patient experiences from Physio
            Shine.
          </p>
        </div>

          <InstagramTestimonialsCarousel />


        <div data-reveal-item className="mt-14 border-t border-white/10 pt-10">
          <div className="mb-8 space-y-2 text-center">
            <span className="text-xs font-black uppercase tracking-widest text-secondary-fixed sm:text-sm">
              Social Proof
            </span>
            <h3 className="font-headline text-2xl font-black text-white sm:text-3xl">
              Our Treatment Videos
            </h3>
          </div>
          <BeforeAfterVideoCarousel />
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
