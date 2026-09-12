import AnimatedSection from "./AnimatedSection";
import type { CSSProperties } from "react";

const steps = [
  {
    icon: "calendar_add_on",
    title: "Make an Appointment",
    desc: "Take control of your health and book your physiotherapy session today!",
  },
  {
    icon: "clinical_notes",
    title: "Consultation",
    desc: "Unlock your full potential with PhysioShine's personalised consultations.",
  },
  {
    icon: "healing",
    title: "Advanced Physiotherapy & Chiropractic Care",
    desc: "Recover stronger, move better with advanced physiotherapy.",
  },
  {
    icon: "reviews",
    title: "Leave a Satisfied Review",
    desc: "Rehabilitation that shines! See what our satisfied clients have to say.",
  },
];

const sequenceSlotSeconds = 1.65;
const connectorDrawSeconds = 0.9;

export default function PathToRecovery() {
  return (
    <AnimatedSection className="py-14 sm:py-16 max-[470px]:py-6 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div data-reveal-header className="text-center mb-10 space-y-3">
          <span className="text-primary font-black uppercase tracking-widest text-xs sm:text-sm">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-headline">
            Your Path to Recovery
          </h2>
          <div className="w-20 h-1.5 bg-secondary-fixed mx-auto rounded-full shadow-sm shadow-secondary-fixed/30" />
        </div>

        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-4 sm:gap-8">

          {steps.map((step, i) => (
            <div
              key={step.title}
              data-reveal-item
              className="path-step group relative flex w-full flex-col items-center space-y-3 text-center"
              style={
                {
                  "--step-delay": `${i * sequenceSlotSeconds}s`,
                } as CSSProperties
              }
            >
              {i < steps.length - 1 ? (
                <>
                  <span
                    className="path-connector-fill hidden sm:block"
                    aria-hidden="true"
                  />
                  <span
                    className="path-connector-arrow hidden sm:block"
                    aria-hidden="true"
                  />
                </>
              ) : null}

              {/* Step circle */}
              <div
                className="path-step-circle relative z-10 w-22 h-22 rounded-full bg-surface-container-lowest shadow-xl flex items-center justify-center border-4 border-brand-soft ring-4 ring-primary/15"
                style={
                  {
                    "--step-pop-delay":
                      i === 0
                        ? "0s"
                        : `${
                            (i - 1) * sequenceSlotSeconds +
                            connectorDrawSeconds
                          }s`,
                  } as CSSProperties
                }
              >
                <span
                  className="material-symbols-outlined text-3xl text-primary"
                  data-weight="fill"
                >
                  {step.icon}
                </span>
              </div>
              <h4 className="flex items-start justify-center gap-2 px-2 text-base font-bold font-headline leading-snug sm:text-lg">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-fixed text-xs font-black leading-none text-on-secondary-fixed">
                  {i + 1}
                </span>
                <span>{step.title}</span>
              </h4>
              <p className="text-on-surface-variant text-xs sm:text-sm px-2 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
