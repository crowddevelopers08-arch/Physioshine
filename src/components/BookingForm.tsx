"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

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
    <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
      <input
        className="w-full bg-white/85 border border-primary/10 rounded-lg p-4 focus:ring-2 focus:ring-primary text-on-surface outline-none"
        placeholder="Full Name"
        required
        type="text"
      />
      <input
        className="w-full bg-white/85 border border-primary/10 rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none"
        placeholder="Phone Number"
        required
        type="tel"
      />
      <input
        className="w-full bg-white/85 border border-primary/10 rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none"
        placeholder="Email Address"
        required
        type="email"
      />
      <select
        className="w-full bg-white/85 border border-primary/10 rounded-lg p-4 focus:ring-2 focus:ring-primary text-on-surface-variant outline-none"
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
      <div className="grid grid-cols-2 gap-4">
        <input
          className="bg-white/85 border border-primary/10 rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none"
          required
          type="date"
        />
        <input
          className="bg-white/85 border border-primary/10 rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none"
          required
          type="time"
        />
      </div>
      <button
        className="w-full bg-secondary-fixed text-on-secondary-fixed font-black text-lg py-5 rounded-lg uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all mt-4 cursor-pointer shadow-lg shadow-secondary-fixed/20"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
