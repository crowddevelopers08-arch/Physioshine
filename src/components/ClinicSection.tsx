import AnimatedSection from "./AnimatedSection";

const differentiators = [
  { icon: "self_improvement", text: "Holistic Treatment Approach" },
  { icon: "biotech", text: "Manual Therapy + Advanced Technology" },
  { icon: "science", text: "Evidence-Based Treatment Protocols" },
  { icon: "person_check", text: "Personalised Care for each Patient" },
  { icon: "flash_on", text: "Fast, Safe & Non-Invasive Recovery" },
];

const uspStats = [
  { icon: "groups", value: "150+", label: "Patients Per Day", color: "bg-primary text-white" },
  { icon: "biotech", value: "Grade A", label: "Medical Equipment", color: "bg-secondary-fixed text-on-secondary-fixed" },
  { icon: "hand_gesture", value: "Expert", label: "Hands-On Therapy", color: "bg-brand-deep text-white" },
];

export default function ClinicSection() {
  return (
    <AnimatedSection className="py-14 sm:py-16 lg:py-20 max-[470px]:py-6 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Two-column: text + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* Text side */}
          <div data-reveal-header className="space-y-6 sm:space-y-7 order-2 lg:order-1 text-center lg:text-left">
            <div>
              <span className="text-primary font-black uppercase tracking-widest text-xs sm:text-sm">
                About Physio Shine
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-headline leading-tight mt-2">
                Hyderabad&apos;s Leading{" "}
                <span className="text-primary">
                  Physio &amp; Rehab Centre
                </span>
              </h2>
            </div>

            <p className="text-on-surface-variant leading-relaxed">
              At Physio Shine, we are committed to delivering advanced, holistic physiotherapy
              and chiropractic care that focuses on{" "}
              <strong className="text-on-surface">long-term recovery</strong> — not just temporary relief.
              With <strong className="text-on-surface">5+ years of experience</strong>, our clinic has
              become the most trusted name for effective, non-surgical pain management.
            </p>

            {/* Differentiators */}
            <ul className="space-y-3">
              {differentiators.map((item) => (
                <li key={item.text} className="flex items-center justify-center lg:justify-start gap-3 text-left">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-base" data-weight="fill">
                      {item.icon}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-on-surface">{item.text}</span>
                </li>
              ))}
            </ul>

            <a
              href="#book"
              className="mx-auto lg:mx-0 inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined text-base">directions_walk</span>
              Schedule A Visit
            </a>
          </div>

          {/* Image side */}
          <div data-reveal-item className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-72 sm:h-96 lg:h-120 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfXj1bpHmQCrZG2jQQiKYWR5x9vFTrsQhCedMJVV5oIONHYWnTIJTW2EGm2i5-ejHVkg26q4vAdWNPriG4g7xq6gj8GQLHQvU1KAmCXyrDN804FKsxnbuSP-C3Oj9uftneBZASBBQaD-k3cjo395KXjjLtpkV0VAFLOhQevpkWMp2lWmj3lZjw99USfsMwLfvWqVdXOipiASe8v8eq2jLD0P9pVIayJ91oFF8TvXhDkmIra41wt7JBhD1Y2WgxTmoy7l2pEZLpI6k"
                alt="Physio Shine Clinic"
              />
              {/* Quote overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-brand-deeper/90 via-brand-deep/50 to-transparent p-6 pt-12">
                <p className="font-bold text-white italic text-sm sm:text-base leading-relaxed">
                  &ldquo;Setting a new benchmark in clinical excellence across Hyderabad.&rdquo;
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-secondary-fixed text-on-secondary-fixed rounded-xl px-4 py-3 shadow-xl font-black text-sm text-center hidden sm:block">
              <p className="text-lg font-black leading-none">5+</p>
              <p className="text-xs font-bold">Years of</p>
              <p className="text-xs font-bold">Excellence</p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {uspStats.map((s) => (
            <div
              key={s.label}
              data-reveal-item
              className={`flex items-center gap-5 rounded-2xl px-5 sm:px-7 py-5 ${s.color} shadow-md`}
            >
              <span className="material-symbols-outlined text-3xl opacity-80 shrink-0">{s.icon}</span>
              <div>
                <p className="text-2xl font-black font-headline leading-none">{s.value}</p>
                <p className="text-sm font-medium opacity-80 mt-0.5">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission strip */}
        <div
          data-reveal-item
          className="mt-5 bg-brand-soft border border-primary/15 rounded-2xl px-5 sm:px-7 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5"
        >
          <p className="font-bold text-on-surface text-sm sm:text-base text-center sm:text-left">
            Our mission: help every patient achieve{" "}
            <span className="text-primary">Faster Recovery</span>,{" "}
            <span className="text-primary">Free Movement</span> &amp;{" "}
            <span className="text-primary">a Pain-Free Life</span>.
          </p>
          <a
            href="tel:8309199733"
            className="shrink-0 flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:brightness-110 transition-all whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-base">call</span>
            Call Us Now
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
