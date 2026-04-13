import AnimatedSection from "./AnimatedSection";

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

export default function PathToRecovery() {
  return (
    <AnimatedSection className="py-14 sm:py-16 bg-surface-container-low">
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

        <div className="relative flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-8">
          {/* Connector line */}
          <div className="hidden sm:block absolute top-11 left-0 w-full h-0.5 bg-outline-variant/30 -z-10" />

          {steps.map((step, i) => (
            <div
              key={step.title}
              data-reveal-item
              className="flex-1 w-full flex flex-col items-center text-center space-y-3 group"
            >
              {/* Step circle */}
              <div className="relative w-22 h-22 rounded-full bg-surface-container-lowest shadow-xl flex items-center justify-center border-4 border-brand-soft ring-4 ring-primary/15 group-hover:scale-110 transition-transform">
                <span
                  className="material-symbols-outlined text-3xl text-primary"
                  data-weight="fill"
                >
                  {step.icon}
                </span>
                {/* Step number badge */}
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-black flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold font-headline leading-snug px-2">
                {step.title}
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
