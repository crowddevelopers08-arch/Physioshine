import AnimatedSection from "./AnimatedSection";

const treatments = [
  {
    image: "/Internal.png",
    title: "Pain Management",
    items: ["Back Pain", "Neck Pain", "Shoulder Pain", "Knee Pain"],
    result: "Effective relief from acute and chronic pain conditions with targeted, personalised care.",
  },
  {
    image: "/Joint-Injections.png",
    title: "Complete Rehab",
    items: ["Sport Injury Rehab", "Stroke Rehab"],
    result: "Structured recovery plans to regain strength, mobility, and daily function with confidence.",
    layeredFill: true,
  },
  {
    image: "/spine-pain.png",
    title: "Spine Compression",
    items: ["Disc Issues", "Nerve Compression", "Chronic Back Pain"],
    result: "Focused non-surgical care designed to ease pressure, reduce pain, and restore movement.",
  },
  {
    image: "/physio.jpg",
    title: "Physiotherapy Treatments",
    items: ["Exercise Therapy", "Strength Training", "Pain Relief"],
    result: "Customised treatment plans that support faster recovery, better mobility, and lasting results.",
  },
  {
    image: "/neckpain3.jpg",
    title: "Chiropractic Treatment",
    items: ["Spine Alignment", "Pain Relief", "Mobility Support"],
    result: "Advanced spinal care that improves alignment, reduces discomfort, and supports better posture.",
  },
  {
    image: "/adva.avif",
    title: "Advanced Therapy Treatments",
    items: ["Laser Therapy", "Manual Therapy", "Shockwave Therapy"],
    result: "Technology-driven therapies that accelerate healing and improve long-term recovery outcomes.",
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

        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2 max-w-7xl mx-auto">
          {treatments.map((treatment) => (
            <div
              key={treatment.title}
              data-reveal-item
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-primary/12 bg-surface-container-lowest hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 sm:flex-row"
            >
              <div
                className="relative h-72 w-full shrink-0 overflow-hidden bg-brand-soft sm:h-auto sm:w-52 lg:w-56"
                style={{ backgroundImage: `url(${treatment.image})` }}
              >
                {treatment.layeredFill ? (
                  <div
                    className="absolute inset-0 scale-115 bg-cover bg-center blur-sm brightness-90"
                    style={{ backgroundImage: `url(${treatment.image})` }}
                  />
                ) : null}
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="image-softened relative z-10 h-full w-full object-cover object-[center_35%] transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-4 text-on-surface sm:p-5">
                <h3 className="mb-2.5 min-h-[3.25rem] text-xl font-bold leading-snug text-brand-deep sm:text-2xl font-headline">
                  {treatment.title}
                </h3>

                <div className="mb-3.5 flex min-h-[4rem] flex-wrap content-start gap-2">
                  {treatment.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm sm:text-[15px] bg-brand-soft text-brand-deep border border-primary/15 px-3 py-1.5 rounded-full font-semibold leading-snug shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="min-h-[4.75rem] text-base leading-relaxed text-on-surface-variant sm:text-[17px]">
                  {treatment.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
