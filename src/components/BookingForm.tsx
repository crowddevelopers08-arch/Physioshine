"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const inputClass =
  "h-9 w-full rounded-lg border border-outline-variant/70 bg-white px-3 text-sm font-semibold text-on-surface outline-none transition-all duration-200 placeholder:text-on-surface-variant/60 hover:border-primary/40 focus:border-primary focus:ring-3 focus:ring-primary/10 sm:h-10";

const iconClass =
  "material-symbols-outlined text-[17px] text-primary";

const compactFieldClass = "grid gap-1";

const labelClass =
  "flex items-center gap-1.5 text-xs font-black text-on-surface-variant sm:text-sm";

const requiredMark = <span className="text-error">*</span>;

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    preferredDate: "",
  });
  const router = useRouter();

  function updateField<K extends keyof typeof formData>(
    field: K,
    value: (typeof formData)[K]
  ) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "homepage-booking-form",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Failed to submit booking request");
      }

      setSubmitted(true);
      setTimeout(() => router.push("/thank-you"), 500);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-primary/10 bg-white/86 px-5 py-9 text-center shadow-xl shadow-brand-deep/10">
        <span className="material-symbols-outlined mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-fixed text-4xl text-primary animate-bounce">
          check_circle
        </span>
        <h3 className="font-headline text-2xl font-black text-on-surface">
          Appointment Booked
        </h3>
        <p className="mt-2 text-sm font-medium text-on-surface-variant">
          Our team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid grid-cols-1 gap-2.5 rounded-3xl bg-white p-0.5 sm:gap-3"
      onSubmit={handleSubmit}
    >
      <div className={compactFieldClass}>
        <label className={labelClass} htmlFor="booking-name">
          <span className={iconClass}>person</span>
          Full Name {requiredMark}
        </label>
        <input
          id="booking-name"
          value={formData.name}
          onChange={(event) => updateField("name", event.target.value)}
          className={inputClass}
          placeholder="Enter your full name"
          required
          type="text"
        />
      </div>

      <div className={compactFieldClass}>
        <label className={labelClass} htmlFor="booking-email">
          <span className={iconClass}>mail</span>
          Email Address
        </label>
        <input
          id="booking-email"
          value={formData.email}
          onChange={(event) => updateField("email", event.target.value)}
          className={inputClass}
          placeholder="Enter your email"
          type="email"
        />
      </div>

      <div className={compactFieldClass}>
        <label className={labelClass} htmlFor="booking-phone">
          <span className={iconClass}>call</span>
          Phone Number {requiredMark}
        </label>
        <input
          id="booking-phone"
          value={formData.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          className={inputClass}
          placeholder="+91 98765 43210"
          required
          type="tel"
        />
      </div>

      <div className={compactFieldClass}>
        <label className={labelClass} htmlFor="booking-treatment">
          Treatment Type {requiredMark}
        </label>
        <div className="relative">
          <select
            id="booking-treatment"
            value={formData.treatment}
            onChange={(event) => updateField("treatment", event.target.value)}
            className={`${inputClass} appearance-none pr-12`}
            required
          >
            <option value="" disabled>
              Select a treatment
            </option>
            <option>Back Pain</option>
            <option>Shoulder Pain</option>
            <option>Neck Pain</option>
            <option>Knee Pain</option>
            <option>Sport Injury Rehab</option>
            <option>Stroke Rehab</option>
            <option>Spine Compression</option>
            <option>Posture Correction</option>
          </select>
          <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[22px] text-on-surface">
            expand_more
          </span>
        </div>
      </div>

      <label className="flex items-start gap-2 text-[11px] font-medium leading-snug text-on-surface-variant sm:text-xs">
        <input
          className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded border-outline-variant text-primary accent-primary"
          required
          type="checkbox"
        />
        <span>
          I consent to being contacted via call, SMS, or WhatsApp regarding my
          appointment and treatment options. {requiredMark}
        </span>
      </label>

      <button
        disabled={isSubmitting}
        className="btn-premium mt-0.5 w-full cursor-pointer rounded-full bg-secondary-fixed px-4 py-3 text-sm font-black text-on-secondary-fixed shadow-xl shadow-secondary-fixed/25 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-65 sm:py-3.5"
        type="submit"
      >
        <span className="inline-flex items-center justify-center gap-2">
          {isSubmitting ? "Submitting..." : "Book Your Consultation"}
          <span className="material-symbols-outlined text-[20px]">
            arrow_forward
          </span>
        </span>
      </button>
      {errorMessage ? (
        <p className="rounded-xl border border-error/15 bg-error-container/60 px-3 py-2 text-sm font-semibold text-on-error-container">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
