"use client";

import React, { useState } from "react";
import Image from "next/image";

const ClientFeedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    suggestions: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (message.text) setMessage({ type: "", text: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Thank you! Your feedback has been submitted successfully.",
        });
        setFormData({ name: "", email: "", phone: "", suggestions: "" });
      } else {
        setMessage({
          type: "error",
          text: result.error || "Failed to submit feedback. Please try again.",
        });
      }
    } catch {
      setMessage({ type: "error", text: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
      `}</style>
      <div
        className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,#eef5ff_0%,#d3e4ff_30%,#10243d_100%)] p-3 sm:p-4 md:p-6"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        <div className="mx-auto my-4 w-full max-w-[95vw] rounded-[28px] border border-white/60 bg-white/95 p-4 shadow-[0_24px_80px_rgba(16,36,61,0.22)] backdrop-blur sm:max-w-md sm:p-6 md:max-w-lg md:p-8 lg:max-w-xl">

          {/* Logo */}
          <div className="mb-4 flex justify-center sm:mb-6 md:mb-8">
            <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-brand-soft px-4 py-2 ring-1 ring-primary-fixed-dim sm:px-6 sm:py-3">
              <Image
                src="/trans-phylogo.png"
                alt="Physio Shine"
                width={200}
                height={74}
                priority
                className="h-auto w-auto object-contain"
                style={{ maxWidth: "180px" }}
              />
            </div>
          </div>

          {/* Heading */}
          <div className="mb-4 text-center sm:mb-6 md:mb-8">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary sm:mb-3 sm:text-xs">
              We&apos;re Listening
            </p>
            <h2 className="mb-2 text-lg font-bold text-brand-deep sm:mb-3 sm:text-xl md:text-2xl lg:text-3xl">
              Help Us Improve!
            </h2>
            <p className="mx-auto max-w-md text-xs leading-relaxed text-on-surface-variant sm:text-sm md:text-base">
              Tell us what didn&apos;t meet your expectations. We genuinely value
              your feedback and will work on making things better.
            </p>
          </div>

          {/* Status message */}
          {message.text && (
            <div
              className={`mb-4 rounded-lg border p-3 text-center text-sm ${
                message.type === "success"
                  ? "border-primary-fixed-dim bg-brand-soft text-brand-deep"
                  : "border-error-container bg-error-container text-on-error-container"
              }`}
            >
              {message.text}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5">
            {/* Shared input classes extracted to a variable for DRYness */}
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-xs font-semibold text-brand-deep sm:mb-2 sm:text-sm"
              >
                Full Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full rounded-xl border border-primary-fixed bg-brand-soft px-3 py-2.5 text-sm text-brand-deep placeholder-primary-fixed-dim transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:bg-surface-container sm:text-sm md:text-base"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-xs font-semibold text-brand-deep sm:mb-2 sm:text-sm"
              >
                Email Address <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full rounded-xl border border-primary-fixed bg-brand-soft px-3 py-2.5 text-sm text-brand-deep placeholder-primary-fixed-dim transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:bg-surface-container sm:text-sm md:text-base"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-1 block text-xs font-semibold text-brand-deep sm:mb-2 sm:text-sm"
              >
                Phone Number <span className="text-primary">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full rounded-xl border border-primary-fixed bg-brand-soft px-3 py-2.5 text-sm text-brand-deep placeholder-primary-fixed-dim transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:bg-surface-container sm:text-sm md:text-base"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label
                htmlFor="suggestions"
                className="mb-1 block text-xs font-semibold text-brand-deep sm:mb-2 sm:text-sm"
              >
                Your Suggestions <span className="text-primary">*</span>
              </label>
              <textarea
                id="suggestions"
                name="suggestions"
                value={formData.suggestions}
                onChange={handleChange}
                required
                rows={4}
                disabled={isSubmitting}
                className="w-full resize-none rounded-xl border border-primary-fixed bg-brand-soft px-3 py-2.5 text-sm text-brand-deep placeholder-primary-fixed-dim transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:bg-surface-container sm:text-sm md:text-base"
                placeholder="Share your valuable suggestions and feedback..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-3 w-full cursor-pointer rounded-xl bg-primary py-2.5 text-sm font-semibold text-on-primary shadow-lg shadow-primary/25 transition-all duration-200 hover:scale-[1.02] hover:bg-on-primary-fixed-variant hover:shadow-xl disabled:cursor-not-allowed disabled:bg-surface-container-high sm:mt-4 sm:text-base md:py-3"
            >
              {isSubmitting ? "Submitting…" : "Submit Feedback"}
            </button>
          </form>

          <button
            onClick={() => window.history.back()}
            disabled={isSubmitting}
            className="mt-2 w-full cursor-pointer rounded-xl border-2 border-secondary-fixed bg-transparent py-2.5 text-sm font-semibold text-on-secondary-fixed-variant transition-all duration-200 hover:scale-[1.02] hover:bg-secondary-fixed hover:text-on-secondary-fixed disabled:border-outline-variant disabled:text-on-surface-variant disabled:hover:bg-transparent sm:mt-3 sm:text-base md:py-3"
          >
            Back to Home
          </button>

          <div className="mt-3 rounded-2xl bg-brand-soft px-4 py-3 text-center text-xs text-on-surface-variant sm:text-sm">
            Honest feedback helps us improve the care journey for every patient
            who visits Physio Shine.
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientFeedback;
