import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import PhoneLink from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "Appointment Confirmed | Physio Shine",
  description:
    "Thank you for booking with Physio Shine. Our team will contact you shortly to confirm your appointment.",
};

export default function ThankYou() {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/25 bg-white/92 backdrop-blur-xl shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <BrandLogo href="/" width={160} priority imageClassName="rounded-md sm:w-auto" />
          <PhoneLink
            className="btn-premium inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-on-primary sm:px-6 sm:py-2.5 sm:text-base"
          >
            <span className="material-symbols-outlined text-sm">call</span>
            8309-199733
          </PhoneLink>
        </div>
      </nav>

      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-surface-container-low px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-30 lg:px-8">
        <div className="w-full max-w-2xl space-y-6 text-center sm:space-y-8">
          <div className="flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-green-100 bg-green-50 shadow-2xl sm:h-28 sm:w-28 lg:h-32 lg:w-32">
              <span className="material-symbols-outlined text-5xl text-green-500 sm:text-6xl lg:text-7xl">
                check_circle
              </span>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary-fixed px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-on-secondary-container sm:text-sm sm:tracking-widest">
              <span className="material-symbols-outlined text-sm">verified</span>
              Appointment Confirmed
            </div>
            <h1 className="font-headline text-3xl font-black leading-tight text-on-surface sm:text-4xl lg:text-5xl">
              Thank You for{" "}
              <span className="text-primary">Choosing Physio Shine!</span>
            </h1>
            <p className="mx-auto max-w-lg text-base leading-relaxed text-on-surface-variant sm:text-lg lg:text-xl">
              Your appointment request has been received. Our team will call you
              within the next few hours to confirm the details and answer any
              questions you may have.
            </p>
          </div>

          <div className="space-y-5 rounded-xl border border-outline-variant/10 bg-white p-5 text-left shadow-sm sm:space-y-6 sm:p-6 lg:p-8">
            <h2 className="text-center font-headline text-xl font-bold sm:text-2xl">
              What Happens Next?
            </h2>
            <div className="space-y-5">
              {[
                {
                  icon: "call",
                  step: "1. We Call You",
                  desc: "Our team will call you within a few hours to confirm your appointment slot.",
                },
                {
                  icon: "clinical_notes",
                  step: "2. Pre-Visit Preparation",
                  desc: "We may ask a few questions about your condition so our specialist is fully prepared.",
                },
                {
                  icon: "healing",
                  step: "3. Your Session",
                  desc: "Arrive at our clinic for your personalised consultation and treatment session.",
                },
                {
                  icon: "sentiment_very_satisfied",
                  step: "4. Begin Your Recovery",
                  desc: "Start your journey to a pain-free life with our expert care team.",
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:h-12 sm:w-12">
                    <span className="material-symbols-outlined text-primary">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface">{item.step}</h3>
                    <p className="text-sm leading-relaxed text-on-surface-variant">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-outline-variant/10 bg-surface-container-low p-5 sm:p-6">
            <p className="mb-4 text-sm font-medium text-on-surface-variant sm:text-base">
              Need to speak to someone urgently?
            </p>
            <PhoneLink
              className="btn-premium inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-base font-bold text-white shadow-lg sm:px-8 sm:py-4 sm:text-lg"
            >
              <span className="material-symbols-outlined">call</span>
              Call: 8309-199733
            </PhoneLink>
          </div>

          <div className="space-y-4 rounded-xl bg-primary p-5 text-white sm:p-6 lg:p-8">
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-secondary-fixed"
                  data-weight="fill"
                >
                  star
                </span>
              ))}
            </div>
            <p className="text-base italic leading-relaxed sm:text-lg">
              &quot;I was skeptical at first, but Physio Shine completely changed
              my life. 3 weeks in, my chronic back pain is almost gone!&quot;
            </p>
            <p className="font-bold text-secondary-fixed">&mdash; Meera T., Hyderabad</p>
          </div>

          <Link
            href="/"
            className="btn-premium inline-flex items-center gap-3 rounded-full px-5 py-3 text-base font-bold text-primary sm:text-lg"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Home
          </Link>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 px-4 py-6 text-center text-xs font-medium text-slate-500 sm:px-8 sm:py-8">
        &copy; 2024 Physio Shine. All rights reserved.
      </footer>
    </>
  );
}
