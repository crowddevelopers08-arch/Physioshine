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
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <BrandLogo href="/" width={180} priority imageClassName="rounded-md" />
          <Link
            href="/"
            className="btn-premium rounded-full bg-primary px-6 py-2.5 font-semibold text-on-primary"
          >
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-28 pb-24 px-8 max-w-4xl mx-auto">
        <div className="space-y-4 mb-12">
          <span className="text-primary font-black uppercase tracking-widest text-sm">
            Legal
          </span>
          <h1 className="text-5xl font-black font-headline leading-tight">
            Privacy Policy
          </h1>
          <p className="text-on-surface-variant">
            Last updated: January 1, 2024
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-10 text-on-surface-variant leading-relaxed">
          <section className="bg-white rounded-xl p-8 shadow-sm border border-outline-variant/10 space-y-4">
            <h2 className="text-2xl font-bold font-headline text-on-surface">
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

          <section className="bg-white rounded-xl p-8 shadow-sm border border-outline-variant/10 space-y-4">
            <h2 className="text-2xl font-bold font-headline text-on-surface">
              2. Information We Collect
            </h2>
            <p>
              We collect information that you voluntarily provide to us when you:
            </p>
            <ul className="space-y-2 ml-4">
              {[
                "Book an appointment via our website form",
                "Call us by phone",
                "Contact us via email or messaging platforms",
                "Register as a patient at our clinic",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 inline-block" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-semibold text-on-surface">
              Personal data we may collect includes:
            </p>
            <ul className="space-y-2 ml-4">
              {[
                "Full name",
                "Phone number and email address",
                "Date of birth and gender",
                "Medical history and health condition details",
                "Payment and billing information",
                "IP address and browser type (via cookies)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 inline-block" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-xl p-8 shadow-sm border border-outline-variant/10 space-y-4">
            <h2 className="text-2xl font-bold font-headline text-on-surface">
              3. How We Use Your Information
            </h2>
            <p>
              We use the information we collect or receive for the following
              purposes:
            </p>
            <ul className="space-y-2 ml-4">
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
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 inline-block" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-xl p-8 shadow-sm border border-outline-variant/10 space-y-4">
            <h2 className="text-2xl font-bold font-headline text-on-surface">
              4. Sharing Your Information
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information only in the following
              circumstances:
            </p>
            <ul className="space-y-2 ml-4">
              {[
                "With referring physicians or specialists involved in your care (with your consent)",
                "With insurance providers to process claims on your behalf",
                "With trusted service providers who assist in operating our website and practice management systems under strict confidentiality agreements",
                "When required by law, court order, or government authority",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 inline-block" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-xl p-8 shadow-sm border border-outline-variant/10 space-y-4">
            <h2 className="text-2xl font-bold font-headline text-on-surface">
              5. Cookies & Tracking Technologies
            </h2>
            <p>
              Our website may use cookies and similar tracking technologies to
              enhance your browsing experience and gather analytics data. You
              can control cookie settings through your browser preferences.
              Disabling cookies may affect some features of our website.
            </p>
            <p>We may use:</p>
            <ul className="space-y-2 ml-4">
              {[
                "Session cookies to operate our website",
                "Preference cookies to remember your settings",
                "Analytics cookies (e.g., Google Analytics) to understand traffic patterns",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 inline-block" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-xl p-8 shadow-sm border border-outline-variant/10 space-y-4">
            <h2 className="text-2xl font-bold font-headline text-on-surface">
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

          <section className="bg-white rounded-xl p-8 shadow-sm border border-outline-variant/10 space-y-4">
            <h2 className="text-2xl font-bold font-headline text-on-surface">
              7. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="space-y-2 ml-4">
              {[
                "Access the personal data we hold about you",
                "Request correction of inaccurate data",
                "Request deletion of your data (subject to legal retention requirements)",
                "Withdraw consent for marketing communications at any time",
                "Lodge a complaint with the relevant data protection authority",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 inline-block" />
                  {item}
                </li>
              ))}
            </ul>
            <p>
              To exercise any of these rights, please contact us at{" "}
              <a
                href="tel:8309199733"
                className="text-primary font-semibold hover:underline"
              >
                8309-199733
              </a>
              .
            </p>
          </section>

          <section className="bg-white rounded-xl p-8 shadow-sm border border-outline-variant/10 space-y-4">
            <h2 className="text-2xl font-bold font-headline text-on-surface">
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

          <section className="bg-white rounded-xl p-8 shadow-sm border border-outline-variant/10 space-y-4">
            <h2 className="text-2xl font-bold font-headline text-on-surface">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated &quot;Last
              updated&quot; date. We encourage you to review this policy
              periodically.
            </p>
          </section>

          <section className="bg-white rounded-xl p-8 shadow-sm border border-outline-variant/10 space-y-4">
            <h2 className="text-2xl font-bold font-headline text-on-surface">
              10. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className="bg-surface-container-low p-6 rounded-lg space-y-2">
              <p className="font-bold text-on-surface">Physio Shine</p>
              <p>Hyderabad, Telangana, India</p>
              <p>
                Phone:{" "}
                <a
                  href="tel:8309199733"
                  className="text-primary font-semibold hover:underline"
                >
                  8309-199733
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="btn-premium inline-flex items-center gap-3 rounded-full bg-primary px-10 py-4 text-lg font-bold text-white shadow-lg"
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
