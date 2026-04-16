import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import BrandLogo from "./BrandLogo";

const treatments = [
  "Back Pain",
  "Neck Pain",
  "Knee & Shoulder Pain",
  "Sports Injury Rehab",
  "Stroke Rehabilitation",
  "Spine Compression",
  "Posture Correction",
];

export default function Footer() {
  return (
    <AnimatedSection as="footer" className="bg-brand-deeper text-slate-300">
      <div className="bg-primary px-4 py-8 sm:px-8">
        <div
          data-reveal-header
          className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <div>
            <p className="font-headline text-xl max-[470px]:text-center font-black text-white sm:text-2xl">
              Ready to Live Pain-Free?
            </p>
            <p className="mt-1 text-sm text-white/80">
              Join 5000+ satisfied patients. Book your slot today.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href="#book"
              className="btn-premium rounded-full bg-white px-6 py-3 text-center text-sm font-bold text-primary"
            >
              Book Appointment
            </a>
            <a
              href="tel:8309199733"
              className="btn-premium btn-mobile-only items-center justify-center gap-2 rounded-full bg-secondary-fixed px-6 py-3 text-sm font-bold text-on-secondary-fixed"
            >
              <span className="material-symbols-outlined text-base">call</span>
              8309-199733
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            data-reveal-item
            className="space-y-4 sm:col-span-2 lg:col-span-1"
          >
            <BrandLogo href="/" width={240} className="shrink-0" />
            {/* <p className="text-sm leading-relaxed text-white/68">
              Advanced Physiotherapy, Chiropractic & Rehabilitation Centre in
              Hyderabad. Delivering holistic, evidence-based care since 2018.
            </p> */}
            <div className="space-y-2 text-sm text-white/68">
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-primary">
                  location_on
                </span>
                MNR complex, SBH road, opposite SBI bank, near metro station, Lb Nagar, Hyderabad-500074
              </p>
              <a
                href="tel:8309199733"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <span className="material-symbols-outlined text-base text-primary">
                  call
                </span>
                8309-199733
              </a>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-primary">
                  schedule
                </span>
                Mon - Sat: 9am - 7pm
              </p>
            </div>
          </div>

          <div data-reveal-item>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Our Treatments
            </h4>
            <ul className="space-y-2">
              {treatments.map((treatment) => (
                <li key={treatment}>
                  <a
                    href="#treatments"
                    className="flex items-center gap-2 text-sm text-white/68 transition-colors hover:text-secondary-fixed"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {treatment}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal-item>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "About Clinic", href: "#clinic" },
                { label: "Meet Our Doctors", href: "#doctors" },
                { label: "Patient Reviews", href: "#reviews" },
                { label: "Book Appointment", href: "#book" },
                { label: "FAQs", href: "#faqs" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-white/68 transition-colors hover:text-secondary-fixed"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal-item>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Why Choose Us
            </h4>
            <ul className="space-y-2.5">
              {[
                "1000+ Google Reviews",
                "4.8 / 5 Google Rating",
                "5000+ Satisfied Clients",
                "150+ Patients Per Day Capacity",
                "Medical Grade Equipment",
                "Non-Surgical Solutions",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-white/68"
                >
                  <span className="material-symbols-outlined mt-0.5 shrink-0 text-base text-primary">
                    check_circle
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-2 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
          <p>&copy; 2026 Physio Shine. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-white/25">Legal</span>
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white/75"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="transition-colors hover:text-white/75"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
