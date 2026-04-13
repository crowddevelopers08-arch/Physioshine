import BookingForm from "./BookingForm";
import AnimatedSection from "./AnimatedSection";

export default function HeroSection() {
  const heroBackgroundImage =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBBf2gk1rXKJ0hJgy61iBkj901-hX-kLXybVqfLj-G-uXpY5e7cwVhT-x4RGf6Pp7xniwYKySf6b_EfNK0I53IooDcdLIWXCxqto5UwdNrTK5mHOuaQPoC0TVDtfvtPCNzKe1grc5Y53rBE4YQxF2Qpr3VqdF2tHXkyoD4ZFXRH3LCoEctMAukyViPCS-WIWic8LAxN2W5HEGVnDebYbick-l7yQ8PuEyCLnk1XpnCaNK4xsoVaJ9Ovdn0vzJYY1Z7wr-9cn637cLU";

  return (
    <AnimatedSection
      as="header"
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden md:min-h-screen"
    >
      {/* Fixed background image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url("${heroBackgroundImage}")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deeper/95 via-brand-deep/85 to-brand-deep/45 md:from-brand-deeper/92 md:via-brand-deep/76 md:to-brand-deep/35" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-6 px-4 py-8 sm:px-6 sm:py-10 md:gap-8 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-12 xl:gap-12">
        <div
          data-reveal-header
          className="space-y-4 text-center text-white sm:space-y-5 lg:text-left lg:space-y-6"
        >
          <div className="mx-auto inline-flex items-center gap-1.5 rounded-full bg-secondary-fixed px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-on-secondary-container sm:gap-2 sm:px-3 sm:py-1.5 sm:text-sm sm:tracking-widest lg:mx-0 min-[475px]:text-xs">
            <span
              className="material-symbols-outlined text-xs sm:text-sm md:text-base"
              data-weight="fill"
            >
              verified
            </span>
            <span className="whitespace-nowrap">
              #1 Chiropractor Care in Hyderabad
            </span>
          </div>

          <h1 className="font-headline text-2xl font-black leading-tight tracking-tight min-[475px]:text-2xl sm:text-3xl sm:leading-tight lg:text-4xl xl:text-5xl">
            Advanced / Holistic{" "}
            <span className="text-secondary-fixed">
              Physiotherapy, Chiropractic
            </span>{" "}
            &amp; Rehabilitation Care for all your pain
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-white/80 min-[475px]:text-base sm:text-lg">
            Personalised, technology-driven treatments designed to help you
            recover faster, move better, and live pain-free.
          </p>

          {/* USP pills - hidden on mobile for cleaner layout */}
          {/* <div className="hidden sm:grid grid-cols-2 gap-2 lg:gap-3 pt-1">
            {uspPoints.map((u) => (
              <div
                key={u.label}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-2.5 lg:px-3 py-1.5 lg:py-2"
              >
                <span className="material-symbols-outlined text-secondary-fixed text-base lg:text-lg shrink-0" data-weight="fill">
                  {u.icon}
                </span>
                <span className="text-xs lg:text-sm font-semibold text-white leading-tight">
                  {u.label}
                </span>
              </div>
            ))}
          </div> */}

          <div className="flex flex-wrap justify-center gap-1.5 pt-1 sm:hidden lg:justify-start">
            <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm">
              <span
                className="material-symbols-outlined shrink-0 text-sm text-secondary-fixed"
                data-weight="fill"
              >
                star
              </span>
              <span className="text-[11px] font-semibold text-white">
                1000+ Reviews
              </span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm">
              <span
                className="material-symbols-outlined shrink-0 text-sm text-secondary-fixed"
                data-weight="fill"
              >
                verified
              </span>
              <span className="text-[11px] font-semibold text-white">
                #1 in Hyderabad
              </span>
            </div>
          </div>

          <div className="flex flex-col flex-wrap justify-center gap-2 pt-2 min-[475px]:flex-row sm:gap-3 lg:justify-start">
            <a
              href="#book"
              className="btn-premium rounded-full bg-primary px-5 py-2 text-center text-xs font-bold text-white shadow-lg shadow-primary/25 hover:brightness-110 min-[475px]:text-sm sm:px-6 sm:py-2.5 sm:text-base"
            >
              Start Your Recovery
            </a>
            <a
              href="tel:8309199733"
              className="btn-premium flex items-center justify-center gap-1.5 rounded-full bg-secondary-fixed px-5 py-2 text-xs font-bold text-on-secondary-fixed shadow-lg shadow-secondary-fixed/20 hover:brightness-105 min-[475px]:text-sm sm:gap-2 sm:px-6 sm:py-2.5 sm:text-base"
            >
              <span className="material-symbols-outlined text-sm sm:text-base">
                call
              </span>
              <span className="whitespace-nowrap">8309-199733</span>
            </a>
          </div>
        </div>

        <div
          data-reveal-item
          className="glass-effect mx-auto mt-2 w-full max-w-xl space-y-2 rounded-xl border border-white/45 p-4 shadow-2xl shadow-brand-deeper/20 min-[475px]:p-5 sm:space-y-3 sm:p-6 lg:mt-0 lg:p-7"
          id="book"
        >
          <div className="space-y-0.5 text-center sm:space-y-1">
            <h2 className="font-headline text-lg font-black text-on-surface min-[475px]:text-xl sm:text-2xl lg:text-3xl">
              Book an Appointment Now
            </h2>
            <p className="text-[11px] font-medium text-on-surface-variant min-[475px]:text-xs sm:text-sm">
              Heal Better. Move Freely. Live Pain-Free.
            </p>
          </div>
          <BookingForm />
        </div>
      </div>
    </AnimatedSection>
  );
}
