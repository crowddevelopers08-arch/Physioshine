import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export const metadata: Metadata = {
  title: "Privacy Policy | Physio Shine",
  description:
    "Learn how Physio Shine collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-sm font-medium text-on-surface-variant">
            Last updated: January 1, 2024
          </p>
        </div>

        <div className="max-w-none space-y-6 text-sm leading-relaxed text-on-surface-variant sm:space-y-8 sm:text-base lg:space-y-10">
          <section className="space-y-4 rounded-xl border border-outline-variant/10 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <h2 className="font-headline text-xl font-bold text-on-surface sm:text-2xl">
              1. Introduction
            </h2>
            <p>
              Welcome to Physio Shine (&quot;we&quot;, &quot;our&quot;, or
              &quot;us&quot;). We are committed to protecting your personal
              information and your right to privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website or book an appointment with
              us.
            </p>
            <p>
              Please read this policy carefully. If you disagree with its terms,
              please discontinue use of our site and services.
            </p>
          </section>

          <section className="space-y-4 rounded-xl border border-outline-variant/10 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <h2 className="font-headline text-xl font-bold text-on-surface sm:text-2xl">
              2. Information We Collect
            </h2>
            <p>We collect information that you voluntarily provide to us when you:</p>
            <ul className="ml-2 space-y-2 sm:ml-4">
              {[
                "Book an appointment via our website form",
                "Call us by phone",
                "Contact us via email or messaging platforms",
                "Register as a patient at our clinic",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-semibold text-on-surface">
              Personal data we may collect includes:
            </p>
            <ul className="ml-2 space-y-2 sm:ml-4">
              {[
                "Full name",
                "Phone number and email address",
                "Date of birth and gender",
                "Medical history and health condition details",
                "Payment and billing information",
                "IP address and browser type (via cookies)",
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
              3. How We Use Your Information
            </h2>
            <p>We use the information we collect or receive for the following purposes:</p>
            <ul className="ml-2 space-y-2 sm:ml-4">
              {[
                "To schedule and manage your appointments",
                "To provide clinical care and physiotherapy treatment",
                "To send appointment reminders and follow-up communications",
                "To process payments and maintain billing records",
                "To improve our services and patient experience",
                "To comply with legal and regulatory obligations",
                "To send promotional communications (only with your consent)",
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
              4. Sharing Your Information
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information only in the following
              circumstances:
            </p>
            <ul className="ml-2 space-y-2 sm:ml-4">
              {[
                "With referring physicians or specialists involved in your care (with your consent)",
                "With insurance providers to process claims on your behalf",
                "With trusted service providers who assist in operating our website and practice management systems under strict confidentiality agreements",
                "When required by law, court order, or government authority",
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
              5. Cookies & Tracking Technologies
            </h2>
            <p>
              Our website may use cookies and similar tracking technologies to
              enhance your browsing experience and gather analytics data. You
              can control cookie settings through your browser preferences.
              Disabling cookies may affect some features of our website.
            </p>
            <p className="font-semibold text-on-surface">We may use:</p>
            <ul className="ml-2 space-y-2 sm:ml-4">
              {[
                "Session cookies to operate our website",
                "Preference cookies to remember your settings",
                "Analytics cookies (e.g., Google Analytics) to understand traffic patterns",
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
              6. Data Retention
            </h2>
            <p>
              We retain your personal and medical information for as long as
              necessary to provide services to you and comply with our legal
              obligations. Clinical records are retained for a minimum of 7
              years as per Indian Medical Council regulations. Marketing data is
              retained until you opt out.
            </p>
          </section>

          <section className="space-y-4 rounded-xl border border-outline-variant/10 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <h2 className="font-headline text-xl font-bold text-on-surface sm:text-2xl">
              7. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="ml-2 space-y-2 sm:ml-4">
              {[
                "Access the personal data we hold about you",
                "Request correction of inaccurate data",
                "Request deletion of your data (subject to legal retention requirements)",
                "Withdraw consent for marketing communications at any time",
                "Lodge a complaint with the relevant data protection authority",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <p>
              To exercise any of these rights, please contact us at{" "}
              <a
                href="tel:8309199733"
                className="font-semibold text-primary hover:underline"
              >
                8309-199733
              </a>
              .
            </p>
          </section>

          <section className="space-y-4 rounded-xl border border-outline-variant/10 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <h2 className="font-headline text-xl font-bold text-on-surface sm:text-2xl">
              8. Security
            </h2>
            <p>
              We implement appropriate technical and organisational measures to
              protect your personal information against unauthorised access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4 rounded-xl border border-outline-variant/10 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <h2 className="font-headline text-xl font-bold text-on-surface sm:text-2xl">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated &quot;Last
              updated&quot; date. We encourage you to review this policy
              periodically.
            </p>
          </section>

          <section className="space-y-4 rounded-xl border border-outline-variant/10 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <h2 className="font-headline text-xl font-bold text-on-surface sm:text-2xl">
              10. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className="space-y-2 rounded-lg bg-surface-container-low p-4 sm:p-6">
              <p className="font-bold text-on-surface">Physio Shine</p>
              <p>MNR complex, SBH road, opposite SBI bank, near metro station, Lb Nagar, Hyderabad-500074</p>
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
