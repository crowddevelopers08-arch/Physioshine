"use client";

import { useState, useEffect } from "react";
import BrandLogo from "../BrandLogo";
import PhoneLink from "../PhoneLink";
import { RunningTicker } from "./runningbar";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-deep text-white text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center">
          {/* Treatments ticker (full width) */}
          <RunningTicker className="min-w-0 flex-1" />
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-xl shadow-sm"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-2 sm:px-8 sm:py-3">
          <div className="flex min-h-[3.05rem] items-center justify-between sm:min-h-[4.75rem]">
            {/* Logo */}
            <BrandLogo
              href="/consult"
              priority
              width={180}
              // BrandLogo sizes its box inline; shrink it on mobile only.
              className="shrink-0 max-sm:[&>div]:w-[130px]! max-sm:[&>div]:h-auto!"
              imageClassName="rounded-md"
            />

            {/* Right CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              <PhoneLink
                className="btn-premium btn-fill btn-brand-light btn-mobile-hidden gap-2 rounded-full px-4 py-2 text-sm font-bold"
              >
                <span className="btn-cta-ring material-symbols-outlined text-base">call</span>
                <span className="hidden lg:inline">8309-199733</span>
              </PhoneLink>
              <a
                href=""
                rel="noopener noreferrer"
                data-cta="booking"
                className="btn-premium btn-fill btn-brand btn-mobile-hidden gap-2 rounded-full px-5 py-2 text-sm font-bold"
              >
                <span>Book Appointment</span>
                <span className="btn-cta-arrow material-symbols-outlined text-base">arrow_forward</span>
              </a>
              {/* Mobile call — wrapper hides it on lg (.btn-premium's display
                  would override a lg:hidden placed on the link itself). */}
              <span className="lg:hidden">
                <PhoneLink
                  aria-label="Call 8309-199733"
                  className="btn-premium btn-fill btn-brand btn-icon h-10 w-10 rounded-full"
                >
                  <span className="btn-cta-ring material-symbols-outlined text-xl">call</span>
                </PhoneLink>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
