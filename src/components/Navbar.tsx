"use client";

import { useState, useEffect } from "react";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "#" },
    { label: "Treatments", href: "#treatments" },
    { label: "Doctors", href: "#doctors" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-brand-deep text-white text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm">location_on</span>
            Hyderabad, Telangana, India
          </span>
          <div className="flex items-center gap-6">
            <a href="tel:8309199733" className="flex items-center gap-1.5 hover:text-secondary-fixed transition-colors">
              <span className="material-symbols-outlined text-sm">call</span>
              8309-199733
            </a>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">schedule</span>
              Mon – Sat: 9am – 7pm
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-xl shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 sm:px-8 sm:py-0">
          <div className="flex min-h-[4.25rem] items-center justify-between sm:h-16">
            {/* Logo */}
            <BrandLogo
              href="/"
              priority
              width={180}
              className="shrink-0"
              imageClassName="rounded-md"
            />

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-on-surface-variant hover:text-primary hover:bg-brand-soft transition-all"
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Right CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="tel:8309199733"
                className="btn-premium btn-mobile-hidden rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white lg:items-center lg:gap-2"
              >
                <span className="material-symbols-outlined text-base">call</span>
                <span className="hidden lg:inline">8309-199733</span>
              </a>
              <a
                href="#book"
                className="btn-premium btn-mobile-hidden rounded-full bg-primary px-4 py-2 text-sm font-bold text-white shadow-sm hover:brightness-110 lg:px-5"
              >
                Book Appointment
              </a>
              {/* Mobile hamburger */}
              <button
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-outline-variant/30 text-on-surface-variant lg:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span className="material-symbols-outlined text-xl">
                  {menuOpen ? "close" : "menu"}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {menuOpen && (
            <div className="lg:hidden border-t border-outline-variant/20 py-3 space-y-1">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-on-surface-variant hover:text-primary hover:bg-brand-soft transition-all"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="tel:8309199733"
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-primary"
              >
                <span className="material-symbols-outlined text-base">call</span>
                Call: 8309-199733
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
