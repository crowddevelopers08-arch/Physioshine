import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "What conditions do you treat?",
    a: "We treat a wide range of conditions, including: Back pain, Neck pain, Knee & shoulder pain, Sports injuries, Stroke rehabilitation, Spine compression issues, and Posture-related problems.",
  },
  {
    q: "Is physiotherapy treatment painful?",
    a: "No. Most treatments are safe and comfortable. Some techniques may cause mild discomfort initially, but they are designed to reduce pain and improve mobility quickly.",
  },
  {
    q: "How many sessions will I need?",
    a: "The number of sessions depends on your condition. After your consultation, our experts will create a personalised treatment plan for faster recovery.",
  },
  {
    q: "Are your clinic's doctors experienced?",
    a: "Absolutely. Our team includes highly qualified physiotherapists and specialists (MPT, BPT, certified experts) with years of experience.",
  },
  {
    q: "Do you treat sports injuries and stroke patients?",
    a: "Yes. We offer specialised rehabilitation programs for both sports injuries and stroke recovery.",
  },
  {
    q: "What makes Physio Shine different from other clinics?",
    a: "We stand out because of our holistic treatment approach, advanced medical-grade equipment, expert hands-on therapy, and a high success rate with thousands of satisfied patients.",
  },
];

export default function FAQSection() {
  return (
    <AnimatedSection className="py-14 sm:py-16 max-[470px]:py-6 px-4 sm:px-8 bg-brand-soft">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div data-reveal-header className="text-center mb-10 space-y-2">
          <span className="text-primary font-black uppercase tracking-widest text-xs sm:text-sm">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-headline">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1.5 bg-secondary-fixed mx-auto rounded-full" />
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={faq.q}
              data-reveal-item
              className="group bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 open:shadow-md transition-all"
            >
              <summary className="flex justify-between items-center gap-3 sm:gap-4 px-4 sm:px-5 py-4 cursor-pointer select-none list-none">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-black flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="font-bold text-sm sm:text-base text-on-surface">{faq.q}</span>
                </div>
                <span className="material-symbols-outlined shrink-0 group-open:rotate-180 transition-transform text-on-surface-variant text-xl">
                  expand_more
                </span>
              </summary>
              <div className="px-4 sm:px-5 pb-5 pt-1 text-sm sm:text-base text-on-surface-variant leading-relaxed border-t border-outline-variant/10 ml-0 sm:ml-10">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        {/* Still have questions */}
        <div
          data-reveal-item
          className="mt-8 bg-surface-container-lowest border border-primary/15 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div>
            <p className="font-bold text-on-surface">Still have questions?</p>
            <p className="text-sm text-on-surface-variant mt-0.5">
              Call us and our team will be happy to assist you.
            </p>
          </div>
          <a
            href="tel:8309199733"
            className="shrink-0 flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:brightness-110 transition-all"
          >
            <span className="material-symbols-outlined text-base">call</span>
            Call: 8309-199733
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
