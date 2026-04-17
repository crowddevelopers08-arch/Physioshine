import BookingForm from "./BookingForm";
import AnimatedSection from "./AnimatedSection";
import { FinalCTACard } from "./FinalCTA";
import PhoneLink from "./PhoneLink";
import TypingWords from "./TypingWords";

const uspPoints = [
  { icon: "neurology", label: "Advanced Rehabilitation Care" },
  { icon: "sports_martial_arts", label: "Expert Chiropractic Support" },
  { icon: "health_and_safety", label: "Personalised Treatment Plans" },
  { icon: "schedule", label: "Faster Recovery Guidance" },
];

export default function HeroSection() {
  const heroBackgroundImage =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBBf2gk1rXKJ0hJgy61iBkj901-hX-kLXybVqfLj-G-uXpY5e7cwVhT-x4RGf6Pp7xniwYKySf6b_EfNK0I53IooDcdLIWXCxqto5UwdNrTK5mHOuaQPoC0TVDtfvtPCNzKe1grc5Y53rBE4YQxF2Qpr3VqdF2tHXkyoD4ZFXRH3LCoEctMAukyViPCS-WIWic8LAxN2W5HEGVnDebYbick-l7yQ8PuEyCLnk1XpnCaNK4xsoVaJ9Ovdn0vzJYY1Z7wr-9cn637cLU";

  return (
    <>
      <AnimatedSection
        as="header"
        className="relative isolate flex items-start overflow-hidden scroll-mt-32 lg:items-center"
        id="home"
      >
        {/* Fixed background image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url("${heroBackgroundImage}")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-deeper/95 via-brand-deep/85 to-brand-deep/45 md:from-brand-deeper/92 md:via-brand-deep/76 md:to-brand-deep/35" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-6 px-4 pt-12 max-[470px]:pt-6 max-[470px]:pb-8 pb-16 sm:px-6 sm:pt-14 sm:pb-18 md:gap-8 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-16 xl:gap-12">
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
                #1 Chiropractor in Hyderabad
              </span>
            </div>

            <h1 className="font-headline text-2xl font-black leading-tight tracking-tight min-[475px]:text-2xl sm:text-3xl sm:leading-tight lg:text-4xl xl:text-5xl">
              Advanced{" "}
              <span className="text-secondary-fixed">
                <TypingWords
                  words={["Physiotherapy", "Chiropractic", "Rehabilitation"]}
                />
              </span>
              <span className="block">Care for all your pain</span>
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-white/80 min-[475px]:text-base sm:text-lg">
              Personalised, technology-driven treatments designed to help you
              recover faster, move better, and live pain-free.
            </p>

            <div
              data-reveal-item
              className="mx-auto aspect-video w-full max-w-[34rem] overflow-hidden rounded-[1.5rem] border border-white/30 shadow-2xl shadow-brand-deeper/30 lg:hidden"
            >
              <iframe
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed/D4qLEQRH4KY?autoplay=1&mute=1&loop=1&playlist=D4qLEQRH4KY&controls=1&modestbranding=1&playsinline=1&rel=0"
                title="Physioshine treatment video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            {/* USP pills - hidden on mobile for cleaner layout */}
            <div className="hidden sm:grid grid-cols-2 gap-2 lg:gap-3 pt-1">
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
            </div>

            <div className="flex flex-wrap justify-center gap-1.5 pt-1 sm:hidden lg:justify-start">
              <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm">
                <img
                  src="/google-g.svg"
                  alt="Google"
                  className="h-3.5 w-3.5 shrink-0"
                />
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
              <div className="group relative overflow-hidden rounded-2xl border border-secondary-fixed/45 bg-white/10 px-4 py-3 text-center shadow-xl shadow-brand-deeper/20 backdrop-blur-md min-[475px]:max-w-[22rem] sm:px-5 sm:py-3.5 lg:text-left">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-secondary-fixed lg:inset-x-auto lg:inset-y-0 lg:left-0 lg:h-auto lg:w-1.5" />
                <div className="grid justify-items-center gap-2 pl-1 lg:grid-cols-[2.5rem_1fr] lg:items-center lg:justify-items-start lg:gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-fixed text-on-secondary-fixed shadow-lg shadow-secondary-fixed/20">
                    <span
                      className="material-symbols-outlined text-[22px] leading-none"
                      data-weight="fill"
                    >
                      support_agent
                    </span>
                  </span>
                  <p className="min-w-0 text-sm font-black leading-snug text-white sm:text-base">
                    Get lifetime expert support{" "}
                    <span className="block text-xs font-bold text-secondary-fixed sm:text-sm">
                      with one-time consultation
                    </span>
                  </p>
                </div>
              </div>
              <PhoneLink
                className="btn-premium btn-mobile-only items-center justify-center gap-1.5 rounded-full bg-secondary-fixed px-4 py-1.5 text-[11px] font-bold text-on-secondary-fixed shadow-lg shadow-secondary-fixed/20 hover:brightness-105 min-[475px]:text-xs"
              >
                <span className="material-symbols-outlined text-sm sm:text-base">
                  call
                </span>
                <span className="whitespace-nowrap">8309-199733</span>
              </PhoneLink>
            </div>
          </div>

          <div
            data-reveal-item
            className="mx-auto mt-2 hidden aspect-video w-full max-w-[48rem] overflow-hidden rounded-[1.5rem] border border-white/30 shadow-2xl shadow-brand-deeper/30 lg:mt-0 lg:block lg:w-[110%]"
          >
            <iframe
              className="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/D4qLEQRH4KY?autoplay=1&mute=1&loop=1&playlist=D4qLEQRH4KY&controls=1&modestbranding=1&playsinline=1&rel=0"
              title="Physioshine treatment video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        className="relative scroll-mt-32 bg-surface px-4 py-10 sm:px-6 sm:py-12 max-[470px]:py-6 lg:px-8"
        id="book"
      >
        <div className="mx-auto grid w-full max-w-7xl items-stretch gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,34rem)] lg:gap-8">
          <FinalCTACard compact className="h-full" />

          <div
            className="w-full scroll-mt-32 self-center space-y-3 rounded-[1.5rem] border border-outline-variant/30 bg-white p-4 shadow-2xl shadow-brand-deeper/10 min-[475px]:p-5 sm:p-6"
            id="booking-form"
          >
            <div className="space-y-0.5 text-center">
              <h2 className="font-headline text-base font-black text-on-surface min-[475px]:text-lg sm:text-xl lg:text-2xl">
                Book a Quick Appointment
              </h2>
              <p className="text-[10px] font-medium text-on-surface-variant min-[475px]:text-[11px] sm:text-xs">
                Heal Better. Move Freely. Live Pain-Free.
              </p>
            </div>
            <BookingForm />
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
