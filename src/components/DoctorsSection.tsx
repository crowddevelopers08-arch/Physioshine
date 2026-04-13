import AnimatedSection from "./AnimatedSection";

const teamDoctors = [
  {
    name: "Dr. Manisha",
    qualification: "Neuro Rehabilitation Specialist",
    desc: "Expert in Stroke & Neuro Rehabilitation. Restoring mobility and independence with personalised recovery programs.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2w4RDP41gAmWrwHWI4ptEVy8CsUkRqzElVihuj1DRBC9_tDHqEPan7YJhVGbvfIUNMhS9Wu0H-5pFetkAII6T0War87U3HoPybd-Tgg3o923j-hyWxjZKn63IKjbGafJiaApN3RQQxUqKwojiC9JdPTkUbhTGm2tf8UducMqKZlk-sYqcWgKU7txjO_NIn9EUoCqds7gD75YQ_DEDQxT5QVY9Yb6vPzTKnf6xshTcETlf_t9iz6SAR6G0KMh-ecJbw3giT-d1LBk",
  },
  {
    name: "Dr. Sufiyan",
    qualification: "Sports Rehabilitation Specialist",
    desc: "Specialised in Sports Injury Recovery. Strength, flexibility & performance recovery trusted by athletes.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD49JIUhYaiEH9AKrT1NCwDbg1WwNe9efrjI_HCjydSqeUfBfgBV9RR6TDwXIdEj3cfti0GA55PJ-jsHN6hsY6AMKjF_qGNFrxtWr0UzvkF38RXyAXMqKc7Yrl68QJ55teLzhcv4YGEAd1BZygIFAyPcD9kAMxr98x4fFN8T_vD5_npfyRvfheuZiEWnIvYQKUgk0xV8ffLQqOHs8Am9c9M0sBo4GpOSQwD_u2pa_EWvNvydb9p1mQBC4lQPXqeSHjDTcgDtNpm3-w",
  },
  {
    name: "Dr. Dhanush",
    qualification: "Manual Therapy Expert",
    desc: "Hands-on physiotherapy focused on pain relief and mobility. Known for a patient-friendly treatment approach.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9oslE4KrJDZeXlIgaehucvZmsH7b0Oot8NWVDrYLd6b5zPXSr1xjA8B_g9wifCvL1qgsnY30uO6fQre1S2ixAbPe73Oms3VYLptYRMUJIzdt7ZfXx2QooZHsCbqAKMeL03Pf7V6x39d8aOpoDIBwGN-HSSh8NSYggkn9u-DRCqHWBda_US7J0tm2vGc4drK3xTCB5aiLcEUt_cH2rNAw1C_to26uHgtYCvULjSz_ek64h4nDkWZZSbk0ZxKkUb-05Vr45WDmVMZ8",
  },
  {
    name: "Dr. Anjali",
    qualification: "Manual Therapy Expert",
    desc: "Hands-on physiotherapy focused on pain relief and mobility. Known for a patient-friendly treatment approach.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL9ca0k-8QXcsRY3vA8hgXZe2CksTmXp0oPeW5XjO4-A-7-uBsft_eLphaLoLSeVqVdIu9-FceB1VYL8J_DsiI9XlrHnaoB_om4NpylEIOydZwZ-lmmZzIIiApYoWYNrRe3mAsbLmWO1IJJVlJpmfl2t7cLALQPws35QG_CGFAi1YMrd9BHyu3qP0juCywjgpJwr17ldzrJSo9HtX25E3CweJvrmwzOq9iYHjrf3pWv0YcU2fzNUw2GnWTpxSXGJWGNzkZJUp0Kc4",
  },
];

const patientCarePoints = [
  { icon: "assignment", label: "Clear diagnosis & explanation" },
  { icon: "spa", label: "Comfortable treatment experience" },
  { icon: "monitor_heart", label: "Continuous monitoring & support" },
  { icon: "trending_up", label: "Faster recovery with long-term results" },
];

export default function DoctorsSection() {
  return (
    <AnimatedSection className="py-20 bg-surface" id="doctors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div data-reveal-header className="text-center mb-14 space-y-3">
          <span className="text-primary font-black uppercase tracking-widest text-xs sm:text-sm">
            Our Medical Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-headline">
            Meet Our Doctors
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base max-w-xl mx-auto">
            World-class experts dedicated to your physical well-being and long-lasting recovery.
          </p>
          <div className="w-16 h-1 bg-secondary-fixed mx-auto rounded-full" />
        </div>

        <div
          data-reveal-item
          className="bg-surface-container-lowest rounded-3xl shadow-xl overflow-hidden mb-10 flex flex-col lg:flex-row border border-outline-variant/10"
        >
          <div className="lg:w-[420px] shrink-0 relative">
            <img
              className="w-full h-72 sm:h-96 lg:h-full object-cover object-top"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdAdovoR_NJJwrLstcWkbMnXY7C8DMma19DH1jJEkIHKoYQv5GupKFUddI0z9wmOrFlaMOdQHPYTe2EE2bvWBI9GNx029IpiNRmSBOubJfcYvNSe0nzQlbfu7foSScXKc4oj3WA_aILLE7vpWx_rHzLTOJQZJx1PB8NdDm-d3_IKf4EaM9FOVnHKylCzXqJtJ6GJXHSayqwafv_YMAKjHKe6dOMXXDNwQf1KU6jPt3aPeA4Lfp3t7VaqafNDKDTeaR8IXykSXxcug"
              alt="Dr. Gahwal Sachin Raj"
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-brand-deep/60 to-transparent lg:hidden" />
          </div>

          <div className="flex-1 p-8 sm:p-10 flex flex-col justify-center gap-5">
            <div className="flex flex-wrap gap-2">
              <span className="bg-secondary-fixed text-on-secondary-container px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider">
                Founder &amp; Lead Specialist
              </span>
              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider">
                5+ Years Experience
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-headline leading-tight text-on-surface">
                Dr. Gahwal Sachin Raj
              </h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Chiropractic Specialist", "Spine Alignment Expert"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs font-semibold rounded-full border border-outline-variant/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <blockquote className="border-l-4 border-secondary-fixed pl-5 py-1 text-on-surface-variant italic text-sm sm:text-base leading-relaxed bg-secondary-fixed/5 rounded-r-xl pr-4">
              &ldquo;Expert Chiropractor with 5+ years of industry experience. My mission is to bring global standards of rehabilitation to every patient, ensuring that recovery is not just a process, but a lifestyle transformation.&rdquo;
            </blockquote>

            <div className="flex flex-wrap gap-3 pt-1">
              <a href="#book" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:brightness-110 transition-all shadow-md shadow-primary/20">
                <span className="material-symbols-outlined text-base">calendar_month</span>
                Book with Dr. Raj
              </a>
              <a href="tel:8309199733" className="inline-flex items-center gap-2 border-2 border-primary/30 text-primary px-6 py-3 rounded-full font-bold text-sm hover:border-primary hover:bg-primary/5 transition-all">
                <span className="material-symbols-outlined text-base">call</span>
                Call Now
              </a>
            </div>
          </div>
        </div>

        <div
          data-reveal-item
          className="bg-brand-deep rounded-2xl p-7 sm:p-9 mb-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/15 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
            <div className="lg:col-span-2">
              <p className="text-secondary-fixed font-black uppercase tracking-widest text-xs mb-2">Our Commitment</p>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-white">
                Patient Centric Care
              </h3>
              <p className="text-white/60 text-sm mt-2">Our doctors ensure every patient gets:</p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-2 gap-3">
              {patientCarePoints.map((item) => (
                <div key={item.label} className="flex items-center gap-3 bg-white/8 border border-white/15 rounded-xl p-3">
                  <span className="material-symbols-outlined text-secondary-fixed text-xl shrink-0" data-weight="fill">{item.icon}</span>
                  <span className="text-white text-xs sm:text-sm font-medium leading-snug">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-bold font-headline text-center mb-7">
            Our Specialist Team
          </h3>
          <div className="sm:hidden -mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {teamDoctors.map((doc) => (
              <div
                key={doc.name}
                data-reveal-item
                className="group min-w-[82%] snap-center bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center p-5">
                  <div className="mb-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-brand-soft shadow-lg">
                      <img
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        src={doc.img}
                        alt={doc.name}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <h4 className="font-bold text-on-surface text-base font-headline">
                      {doc.name}
                    </h4>
                    <p className="text-primary text-xs font-bold uppercase tracking-wide mt-1 mb-2 leading-tight">
                      {doc.qualification}
                    </p>
                    <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-3">
                      {doc.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {teamDoctors.map((doc) => (
              <div
                key={doc.name}
                data-reveal-item
                className="group bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center p-4 sm:p-5">
                  <div className="mb-4">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-brand-soft shadow-lg">
                      <img
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        src={doc.img}
                        alt={doc.name}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <h4 className="font-bold text-on-surface text-sm sm:text-base font-headline">
                      {doc.name}
                    </h4>
                    <p className="text-primary text-xs font-bold uppercase tracking-wide mt-1 mb-2 leading-tight">
                      {doc.qualification}
                    </p>
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed line-clamp-3">
                      {doc.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
