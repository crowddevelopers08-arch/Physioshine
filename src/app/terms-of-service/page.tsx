import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export const metadata: Metadata = {
  title: "Terms of Service | Physio Shine",
  description:
    "Read the terms and conditions governing the use of Physio Shine's website, bookings, and services.",
};

export default function TermsOfService() {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/25 bg-white/92 backdrop-blur-xl shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <BrandLogo href="/" width={160} priority imageClassName="rounded-md sm:w-auto" />
          <Link
            href="/"
            className="btn-premium rounded-full bg-primary px-4 py-2 text-sm font-semibold text-on-primary sm:px-6 sm:py-2.5 sm:text-base"
          >
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-4 pb-16 pt-24 text-on-surface sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pb-24">
        <div className="mb-10 space-y-3 sm:mb-12 sm:space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-primary sm:text-sm">
            Legal
          </span>
          <h1 className="font-headline text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Terms of Service
          </h1>
          <p className="text-sm font-medium text-on-surface-variant">
            Last updated: January 1, 2024
          </p>
        </div>

        <div className="max-w-none space-y-6 text-sm leading-relaxed text-on-surface-variant sm:space-y-8 sm:text-base lg:space-y-10">
          <section className="space-y-4 rounded-xl border border-outline-variant/10 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <h2 className="font-headline text-xl font-bold text-on-surface sm:text-2xl">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing this website, booking an appointment, or using any
              services offered by Physio Shine, you agree to be bound by these
              Terms of Service. If you do not agree with any part of these
              terms, please do not use our website or services.
            </p>
          </section>

          <section className="space-y-4 rounded-xl border border-outline-variant/10 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <h2 className="font-headline text-xl font-bold text-on-surface sm:text-2xl">
              2. Scope of Services
            </h2>
            <p>
              Physio Shine provides physiotherapy, chiropractic, rehabilitation,
              consultation, and related wellness services. Information on this
              website is provided for general guidance and does not replace
              professional medical advice, diagnosis, or treatment.
            </p>
            <p className="font-semibold text-on-surface">Our services may include:</p>
            <ul className="ml-2 space-y-2 sm:ml-4">
              {[
                "Appointment scheduling through our website or by phone",
                "In-clinic consultations and therapy sessions",
                "Post-treatment communication and follow-up support",
                "Educational content related to recovery and mobility",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4 rounded-xl border border-outline-variant/10 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <h2 className="font-headline text-xl font-bold text-on-surface sm:text-2xl">
              3. Appointments and Booking
            </h2>
            <p>
              When you book an appointment, you agree to provide accurate,
              complete, and up-to-date information. Appointment requests made
              online are subject to confirmation by our team and are not final
              until confirmed by phone, message, or email.
            </p>
            <ul className="ml-2 space-y-2 sm:ml-4">
              {[
                "Appointments are subject to therapist and clinic availability",
                "Please arrive on time for your scheduled appointment",
                "Late arrival may shorten your session duration",
                "Repeated missed appointments may affect future booking priority",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4 rounded-xl border border-outline-variant/10 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <h2 className="font-headline text-xl font-bold text-on-surface sm:text-2xl">
              4. Cancellations and Rescheduling
            </h2>
            <p>
              We understand plans can change. If you need to cancel or
              reschedule, we request reasonable advance notice so we can offer
              the slot to another patient.
            </p>
            <p>
              Physio Shine reserves the right to reschedule or cancel
              appointments in the event of emergencies, therapist unavailability,
              technical issues, or other operational reasons. In such cases, we
              will make reasonable efforts to inform you promptly.
            </p>
          </section>

          <section className="space-y-4 rounded-xl border border-outline-variant/10 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <h2 className="font-headline text-xl font-bold text-on-surface sm:text-2xl">
              5. Payments and Fees
            </h2>
            <p>
              Fees for consultations, therapy sessions, treatment packages, and
              related services will be communicated at the time of booking or
              consultation. By using our services, you agree to pay applicable
              charges in accordance with the clinic&apos;s payment policies.
            </p>
            <ul className="ml-2 space-y-2 sm:ml-4">
              {[
                "Prices may change from time to time without prior public notice",
                "Package validity and refund terms, if any, will be explained separately",
                "Some services may require advance payment or deposit confirmation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4 rounded-xl border border-outline-variant/10 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <h2 className="font-headline text-xl font-bold text-on-surface sm:text-2xl">
              6. Medical Disclaimer
            </h2>
            <p>
              Content on this website, including text, images, and treatment
              descriptions, is intended for informational purposes only. It is
              not a substitute for professional medical evaluation or
              personalised treatment advice.
            </p>
            <p>
              Treatment outcomes may vary depending on the patient&apos;s
              condition, medical history, adherence to advice, and other
              individual factors. Physio Shine does not guarantee specific
              clinical results.
            </p>
          </section>

          <section className="space-y-4 rounded-xl border border-outline-variant/10 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <h2 className="font-headline text-xl font-bold text-on-surface sm:text-2xl">
              7. Website Use
            </h2>
            <p>You agree not to misuse this website. Prohibited conduct includes:</p>
            <ul className="ml-2 space-y-2 sm:ml-4">
              {[
                "Submitting false, misleading, or incomplete information",
                "Attempting to interfere with website performance or security",
                "Copying, reproducing, or redistributing website content without permission",
                "Using the website for unlawful, fraudulent, or abusive purposes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4 rounded-xl border border-outline-variant/10 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <h2 className="font-headline text-xl font-bold text-on-surface sm:text-2xl">
              8. Intellectual Property
            </h2>
            <p>
              All content on this website, including branding, graphics,
              written material, layout, and service descriptions, is the
              property of Physio Shine or its licensors unless otherwise stated.
              Unauthorised use, copying, or distribution is prohibited.
            </p>
          </section>

          <section className="space-y-4 rounded-xl border border-outline-variant/10 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <h2 className="font-headline text-xl font-bold text-on-surface sm:text-2xl">
              9. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Physio Shine shall not be
              liable for any indirect, incidental, consequential, or special
              damages arising from the use of this website or our services.
              Nothing in these terms excludes liability where such exclusion is
              not permitted by applicable law.
            </p>
          </section>

          <section className="space-y-4 rounded-xl border border-outline-variant/10 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <h2 className="font-headline text-xl font-bold text-on-surface sm:text-2xl">
              10. Changes to These Terms
            </h2>
            <p>
              We may update these Terms of Service from time to time. Updated
              terms will be posted on this page with a revised effective date.
              Continued use of our website or services after such updates
              constitutes acceptance of the revised terms.
            </p>
          </section>

          <section className="space-y-4 rounded-xl border border-outline-variant/10 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <h2 className="font-headline text-xl font-bold text-on-surface sm:text-2xl">
              11. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 rounded-lg bg-surface-container-low p-4 sm:p-6">
              <p className="font-bold text-on-surface">Physio Shine</p>
              <p>Hyderabad, Telangana, India</p>
              <p>
                Phone:{" "}
                <a
                  href="tel:8309199733"
                  className="font-semibold text-primary hover:underline"
                >
                  8309-199733
                </a>
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center sm:mt-16">
          <Link
            href="/"
            className="btn-premium inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-base font-bold text-white shadow-lg sm:px-8 sm:py-3.5 sm:text-lg"
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
