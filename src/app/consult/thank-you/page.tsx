import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/consult/Navbar";
import Footer from "@/components/consult/Footer";
import PhoneLink from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "Thank You | Manuthera - Physio Shine",
  description:
    "Thank you for your Manuthera consultation request. Our team will contact you shortly.",
  robots: { index: false, follow: false },
};

const steps = [
  {
    icon: "call",
    step: "1. We Call You",
    desc: "Our team will call you within a few hours to understand your condition and confirm a slot.",
  },
  {
    icon: "clinical_notes",
    step: "2. Assessment",
    desc: "Your physiotherapist assesses your joints, spine and movement limitations.",
  },
  {
    icon: "healing",
    step: "3. Manual Therapy Plan",
    desc: "A personalised plan with joint mobilization, spinal decompression and guided movement.",
  },
  {
    icon: "sentiment_very_satisfied",
    step: "4. Begin Your Recovery",
    desc: "Start moving better and pain-free with ongoing rehabilitation support.",
  },
];

export default function ConsultThankYouPage() {
  return (
    <div className="relative bg-surface">
      <Navbar />

      {/* Sized to fit one screen below the consult Navbar (~140px tall). */}
      <main className="flex min-h-[calc(100svh-140px)] items-center justify-center bg-gradient-to-br from-background to-surface-container-low px-4 py-6 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl space-y-4 text-center sm:space-y-5">

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-secondary-fixed px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-on-secondary-container sm:text-xs">
              <span className="material-symbols-outlined text-xs">verified</span>
              Request Received
            </div>
            <h1 className="font-headline text-2xl font-black leading-tight text-on-surface sm:text-3xl lg:text-4xl">
              Thank You for{" "}
              <span className="text-primary">Choosing Manuthera!</span>
            </h1>
            <p className="mx-auto max-w-lg text-sm leading-relaxed text-on-surface-variant sm:text-base">
              Your consultation request has been received. Our team will call you
              shortly to confirm the details and answer any questions you may have.
            </p>
          </div>

          <div className="rounded-xl border border-outline-variant/10 bg-white p-4 text-left shadow-sm sm:p-5">
            <h2 className="text-center font-headline text-base font-bold sm:text-lg">
              What Happens Next?
            </h2>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-4">
              {steps.map((item) => (
                <div key={item.step} className="flex items-start gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:h-9 sm:w-9">
                    <span className="material-symbols-outlined text-[18px] text-primary">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-on-surface">{item.step}</h3>
                    <p className="text-xs leading-relaxed text-on-surface-variant sm:text-[13px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
            <p className="text-xs font-medium text-on-surface-variant sm:text-sm">
              Need to speak to someone urgently?
            </p>
            <PhoneLink className="btn-premium btn-fill btn-brand gap-2 rounded-full px-5 py-2 text-sm font-bold">
              <span className="btn-cta-ring material-symbols-outlined text-[18px]">call</span>
              <span>Call: 8309-199733</span>
            </PhoneLink>
          </div>

          <Link
            href="/consult"
            className="btn-premium btn-fill btn-brand-light gap-2 rounded-full px-5 py-2 text-sm font-bold"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>Back to Home</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
