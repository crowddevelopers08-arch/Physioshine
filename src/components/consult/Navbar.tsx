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
        <div className="max-w-7xl mx-auto flex items-center gap-4 lg:gap-6">
          <span className="hidden md:flex shrink-0 items-center gap-1.5">
            <span className="material-symbols-outlined text-sm">location_on</span>
            LB Nagar, Hyderabad-500074
          </span>

          {/* Treatments ticker (centre) */}
          <div className="flex min-w-0 flex-1 items-center gap-4 lg:gap-6">
            <span className="hidden md:block h-4 w-px shrink-0 bg-white/20" aria-hidden="true" />
            <RunningTicker className="min-w-0 flex-1" />
            <span className="hidden md:block h-4 w-px shrink-0 bg-white/20" aria-hidden="true" />
          </div>

          <div className="hidden md:flex shrink-0 items-center gap-6">
            <PhoneLink className="flex items-center gap-1.5 hover:text-secondary-fixed transition-colors">
              <span className="material-symbols-outlined text-sm">call</span>
              8309-199733
            </PhoneLink>
            <span className="hidden lg:flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">schedule</span>
              Mon - Sat: 8am - 8pm
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
        <div className="mx-auto max-w-7xl px-4 py-2 sm:px-8 sm:py-3">
          <div className="flex min-h-[4.25rem] items-center justify-between sm:min-h-[4.75rem]">
            {/* Logo */}
            <BrandLogo
              href="/consult"
              priority
              width={180}
              className="shrink-0"
              imageClassName="rounded-md"
            />

            {/* Right CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              <PhoneLink
                className="btn-premium btn-mobile-hidden rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white lg:items-center lg:gap-2"
              >
                <span className="material-symbols-outlined text-base">call</span>
                <span className="hidden lg:inline">8309-199733</span>
              </PhoneLink>
              <a
                href="https://physioshine.zohobookings.in/445097000000275205/#/445097000000275205?bookedFrom=ShortenURL"
                target="_blank"
                rel="noopener noreferrer"
                data-cta="booking"
                className="btn-premium btn-mobile-hidden rounded-full bg-primary px-4 py-2 text-sm font-bold text-white shadow-sm hover:brightness-110 lg:px-5"
              >
                Book Appointment
              </a>
              {/* Mobile call */}
              <PhoneLink
                aria-label="Call 8309-199733"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-sm transition hover:brightness-110 lg:hidden"
              >
                <span className="material-symbols-outlined text-xl">call</span>
              </PhoneLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
