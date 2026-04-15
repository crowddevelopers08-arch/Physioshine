import AnimatedSection from "./AnimatedSection";

const treatments = [
  {
    image: "/Internal.png",
    title: "Pain Management",
    items: ["Back Pain", "Neck Pain", "Shoulder Pain", "Knee Pain"],
    result: "Effective relief from acute and chronic pain conditions with targeted, personalised care.",
    cta: "Get Relief",
  },
  {
    image: "/Joint-Injections.png",
    title: "Complete Rehab",
    items: ["Sport Injury Rehab", "Stroke Rehab"],
    result: "Structured recovery plans to regain strength, mobility, and daily function with confidence.",
    cta: "Start Rehab",
  },
  {
    image: "/spine-pain.png",
    title: "Spine Compression",
    items: ["Disc Issues", "Nerve Compression", "Chronic Back Pain"],
    result: "Focused non-surgical care designed to ease pressure, reduce pain, and restore movement.",
    cta: "Learn More",
  },
  {
    image: "/physio.jpg",
    title: "Physiotherapy Treatments",
    items: ["Exercise Therapy", "Strength Training", "Pain Relief"],
    result: "Customised treatment plans that support faster recovery, better mobility, and lasting results.",
    cta: "Book Now",
  },
  {
    image: "/neckpain3.jpg",
    title: "Chiropractic Treatment",
    items: ["Spine Alignment", "Pain Relief", "Mobility Support"],
    result: "Advanced spinal care that improves alignment, reduces discomfort, and supports better posture.",
    cta: "Get Adjusted",
  },
  {
    image: "/adva.avif",
    title: "Advanced Therapy Treatments",
    items: ["Laser Therapy", "Manual Therapy", "Shockwave Therapy"],
    result: "Technology-driven therapies that accelerate healing and improve long-term recovery outcomes.",
    cta: "Explore Tech",
  },
];

export default function TreatmentGrid() {
  return (
    <AnimatedSection
      as="section"
      className="relative py-12 sm:py-16 max-[470px]:py-6 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-surface-container-low scroll-mt-32"
      id="treatments"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand-soft via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <div
          data-reveal-header
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl min-[475px]:text-3xl sm:text-4xl lg:text-5xl font-black font-headline leading-tight mb-4">
            Advanced Physiotherapy &{" "}
            <span className="text-primary">Rehabilitation Treatment</span>
          </h2>
          <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed">
            At Physio Shine, we offer Advanced Physiotherapy & Rehabilitation
            Treatment, with a wide range of specialised treatments designed to
            target the root cause of pain and deliver long-lasting results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {treatments.map((treatment) => (
            <div
              key={treatment.title}
              data-reveal-item
              className="group flex h-full flex-col sm:flex-row gap-4 sm:gap-5 p-5 sm:p-6 bg-surface-container-lowest rounded-xl border border-primary/12 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-brand-soft shadow-md">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="image-softened h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col text-on-surface">
                <h3 className="text-xl sm:text-2xl font-bold font-headline mb-3 leading-snug text-brand-deep min-h-[3.5rem]">
                  {treatment.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4 min-h-[4.5rem] content-start">
                  {treatment.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm sm:text-[15px] bg-brand-soft text-brand-deep border border-primary/15 px-3 py-1.5 rounded-full font-semibold leading-snug shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="text-base sm:text-[17px] text-on-surface-variant mb-4 leading-relaxed min-h-[5.5rem]">
                  {treatment.result}
                </p>

                <a
                  href="#book"
                  className="mt-auto inline-flex items-center gap-2 text-primary font-bold text-base sm:text-lg hover:gap-3 transition-all group/link"
                >
                  <span>{treatment.cta}</span>
                  <span className="group-hover/link:translate-x-1 transition-transform">
                    -&gt;
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
