import AnimatedSection from "./AnimatedSection";

export default function FinalCTA() {
  return (
    <AnimatedSection className="relative py-0 bg-surface overflow-hidden scroll-mt-32" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6">
        <div
          data-reveal-item
          className="relative bg-brand-deeper rounded-[1.75rem] sm:rounded-3xl px-5 sm:px-10 lg:px-14 py-10 sm:py-14 lg:py-20 overflow-hidden text-center"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-80 h-80 bg-primary/25 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-fixed/12 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-white/5 rounded-full" />
          </div>

          <div data-reveal-header className="relative space-y-5 sm:space-y-6 max-w-3xl mx-auto">
            <span className="inline-block text-secondary-fixed font-black uppercase tracking-widest text-xs sm:text-sm">
              Ready to Get Better?
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-headline text-white leading-tight">
              Start Your Pain-Free Life
              <span className="block text-secondary-fixed mt-1">Book Your Appointment Today</span>
            </h2>

            <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Take the first step towards recovery. Join 5000+ happy patients who trust Physio Shine for results that last.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 py-2 sm:py-4">
              {[
                { value: "5000+", label: "Happy Patients" },
                { value: "4.8", label: "Google Rating", star: true },
                { value: "150+", label: "Patients/Day" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <p className="flex items-center gap-1 text-2xl font-black text-secondary-fixed font-headline">
                      {s.value}
                      {s.star ? (
                        <span className="material-symbols-outlined text-xl" data-weight="fill">
                          star
                        </span>
                      ) : null}
                    </p>
                  </div>
                  <p className="text-white/50 text-xs uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href="#book"
                className="btn-premium inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-primary/30 hover:brightness-110 sm:px-9 sm:py-4 sm:text-base"
              >
                <span className="material-symbols-outlined text-base">calendar_month</span>
                Book Now Online
              </a>
              <a
                href="tel:8309199733"
                className="btn-premium btn-mobile-only items-center justify-center gap-2 rounded-full bg-secondary-fixed px-7 py-3.5 text-sm font-bold text-on-secondary-fixed shadow-lg hover:brightness-110"
              >
                <span className="material-symbols-outlined text-base">call</span>
                8309-199733
              </a>
            </div>

            <p className="text-white/30 text-xs">
              No waiting. No hidden charges. Same-day appointments available.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
