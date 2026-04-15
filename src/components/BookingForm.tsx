"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [dateInputType, setDateInputType] = useState<"text" | "date">("text");
  const dateInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function openDatePicker() {
    const input = dateInputRef.current;
    if (!input) return;

    setDateInputType("date");
    input.focus();
    input.showPicker?.();
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => router.push("/thank-you"), 1500);
  }

  if (submitted) {
    return (
      <div className="py-10 text-center">
        <span className="material-symbols-outlined text-6xl text-primary block mb-4 animate-bounce">
          check_circle
        </span>
        <h3 className="text-2xl font-bold">Appointment Booked</h3>
        <p className="text-on-surface-variant">
          Our Team will contact you shortly
        </p>
      </div>
    );
  }

  return (
    <form className="grid grid-cols-1 gap-3" onSubmit={handleSubmit}>
      <input
        className="w-full rounded-lg border border-primary/10 bg-white/85 p-3.5 text-on-surface placeholder:text-on-surface-variant outline-none focus:ring-2 focus:ring-primary"
        placeholder="Full Name"
        required
        type="text"
      />
      <input
        className="w-full rounded-lg border border-primary/10 bg-white/85 p-3.5 text-on-surface placeholder:text-on-surface-variant outline-none focus:ring-2 focus:ring-primary"
        placeholder="Phone Number"
        required
        type="tel"
      />
      <input
        className="w-full rounded-lg border border-primary/10 bg-white/85 p-3.5 text-on-surface placeholder:text-on-surface-variant outline-none focus:ring-2 focus:ring-primary"
        placeholder="Email Address"
        required
        type="email"
      />
      <div className="relative">
        <select
          className="w-full appearance-none rounded-lg border border-primary/10 bg-white/85 p-3.5 pr-12 text-on-surface outline-none focus:ring-2 focus:ring-primary"
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select Treatment
          </option>
          <option>Back pain</option>
          <option>Shoulder pain</option>
          <option>neck pain</option>
          <option>knee pain</option>
          <option>Sport Injury Rehab</option>
          <option>Stroke Rehab</option>
          <option>Spine Compression</option>
          <option>Posture Correction</option>
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-on-surface">
          <span className="material-symbols-outlined text-[20px]">expand_more</span>
        </span>
      </div>
      <div className="relative">
        <input
          ref={dateInputRef}
          className="w-full rounded-lg border border-primary/10 bg-white/85 p-3.5 pr-12 text-on-surface placeholder:text-on-surface-variant outline-none [color-scheme:light] [&::-webkit-calendar-picker-indicator]:hidden focus:ring-2 focus:ring-primary"
          required
          type={dateInputType}
          placeholder="dd-mm-yyyy"
          onFocus={() => setDateInputType("date")}
          onBlur={(event) => {
            if (!event.currentTarget.value) {
              setDateInputType("text");
            }
          }}
        />
        <button
          type="button"
          onClick={openDatePicker}
          aria-label="Open calendar"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface"
        >
          <span className="material-symbols-outlined text-[20px]">calendar_month</span>
        </button>
      </div>
      <button
        className="mt-2 w-full cursor-pointer rounded-lg bg-secondary-fixed py-4 text-base font-black uppercase tracking-widest text-on-secondary-fixed shadow-lg shadow-secondary-fixed/20 transition-all hover:brightness-110 active:scale-95"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
