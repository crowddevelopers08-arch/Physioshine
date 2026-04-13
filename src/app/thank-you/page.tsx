import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export const metadata: Metadata = {
  title: "Appointment Confirmed | Physio Shine",
  description:
    "Thank you for booking with Physio Shine. Our team will contact you shortly to confirm your appointment.",
};

export default function ThankYou() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <BrandLogo href="/" width={180} priority imageClassName="rounded-md" />
          <a
            href="tel:8309199733"
            className="btn-premium inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 font-semibold text-on-primary"
          >
            <span className="material-symbols-outlined text-sm">call</span>
            8309-199733
          </a>
        </div>
      </nav>

      {/* Main */}
      <main className="min-h-screen flex items-center justify-center pt-20 pb-16 px-8 bg-gradient-to-br from-background to-surface-container-low">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* Success icon */}
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full bg-green-50 border-4 border-green-100 flex items-center justify-center shadow-2xl">
              <span className="material-symbols-outlined text-7xl text-green-500">
                check_circle
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-fixed text-on-secondary-container text-sm font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">verified</span>
              Appointment Confirmed
            </div>
            <h1 className="text-5xl font-black font-headline leading-tight text-on-surface">
              Thank You for{" "}
              <span className="text-primary">Choosing Physio Shine!</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-lg mx-auto">
              Your appointment request has been received. Our team will call you
              within the next few hours to confirm the details and answer any
              questions you may have.
            </p>
          </div>

          {/* What happens next */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-outline-variant/10 text-left space-y-6">
            <h2 className="text-2xl font-bold font-headline text-center">
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
                <div key={item.step} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface">{item.step}</h3>
                    <p className="text-sm text-on-surface-variant">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Urgent / Call */}
          <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/10">
            <p className="text-on-surface-variant mb-4 font-medium">
              Need to speak to someone urgently?
            </p>
            <a
              href="tel:8309199733"
              className="btn-premium inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-bold text-white shadow-lg"
            >
              <span className="material-symbols-outlined">call</span>
              Call: 8309-199733
            </a>
          </div>

          {/* Testimonial */}
          <div className="bg-primary text-white rounded-xl p-8 space-y-4">
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
            <p className="italic text-lg leading-relaxed">
              &quot;I was skeptical at first, but Physio Shine completely changed
              my life. 3 weeks in, my chronic back pain is almost gone!&quot;
            </p>
            <p className="font-bold text-secondary-fixed">— Meera T., Hyderabad</p>
          </div>

          {/* Back home */}
          <Link
            href="/"
            className="btn-premium inline-flex items-center gap-3 rounded-full px-5 py-3 text-lg font-bold text-primary"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 py-8 px-8 border-t border-slate-200 text-center text-slate-400 text-xs">
        © 2024 Physio Shine. All rights reserved.
      </footer>
    </>
  );
}
