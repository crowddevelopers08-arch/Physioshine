import Image from "next/image";

// Loaded as a plain stylesheet (React hoists it into <head>) rather than
// next/font, so a failed font download can't break the build.
const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Urbanist:wght@500;600&display=swap";
const INTER = "font-['Inter',ui-sans-serif,system-ui,sans-serif]";
const URBANIST = "font-['Urbanist',ui-sans-serif,system-ui,sans-serif]";

/**
 * Meet Your Physiotherapist section. Two equal columns: the doctor's photo
 * on the left, and the intro, "Our Approach" steps and booking CTA on the right.
 *
 *   container ............ 1636px, centred
 *   gap between columns .. 62px
 *   button ............... 54px tall pill, logo blue, .btn-fill sweep (as Footer)
 */

const IMAGES = {
  doctor: "/DSC07927.JPG",
};

const APPROACH = ["Assess", "Understand", "Treat", "Rehabilitate"];

const BOOKING_URL =
  "https://physioshine.zohobookings.in/445097000000275205/#/445097000000275205?bookedFrom=ShortenURL";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 shrink-0 text-[#4274D6]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function AboutSection() {
  return (
    <section className={`${INTER} w-full bg-white py-16 sm:py-20 lg:py-[100px]`}>
      <link rel="stylesheet" href={FONTS_HREF} precedence="default" />
      {/* Below lg the text wrapper uses `contents`, so its children join this
          flex column and `order` slots the photo in after the intro paragraph. */}
      <div className="mx-auto flex w-full max-w-[1636px] flex-col px-5 sm:px-8 lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-x-[62px] lg:px-8 2xl:px-0">
        {/* ---------------- image ----------------
            Equal-width column; on lg it stretches to the text column's height. */}
        <div className="relative order-1 mt-10 aspect-[4/5] w-full overflow-hidden rounded-[16px] sm:aspect-[4/3] sm:rounded-[24px] lg:order-none lg:mt-0 lg:aspect-auto lg:min-h-[520px]">
          <Image
            src={IMAGES.doctor}
            alt="Dr. Gajwel Sachin Raj, PT"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>

        {/* ---------------- text ---------------- */}
        <div className="contents lg:block lg:self-center">
          <p className="text-[15px] font-semibold uppercase leading-[28px] tracking-[0.12em] text-[#4274D6] sm:text-[16px]">
            Meet Your Physiotherapist
          </p>

          <h2
            className={`${URBANIST} mt-3 text-[34px] font-semibold leading-[1.15] tracking-[-0.01em] text-[#0E1A3C] sm:text-[44px] xl:text-[54px]`}
          >
            Dr. Gajwel Sachin Raj, PT
          </h2>

          <p className="mt-3 text-[17px] font-semibold leading-[1.5] text-[#1A2748] sm:text-[19px] xl:text-[21px]">
            Advanced Physiotherapy &amp; Rehabilitation Care in Hyderabad
          </p>

          <span aria-hidden="true" className="mt-5 sm:mt-3 block h-[3px] w-16 rounded-full bg-[#4274D6]" />

          <p className="mt-5 sm:mt-2 text-[16px] leading-[1.85] text-[#6B7489] sm:text-[17px] xl:text-[18px]">
            At PhysioShine PhysioRehab, Dr. Gajwel Sachin Raj, PT provides personalized physiotherapy and
            rehabilitation care with a focus on understanding the individual&apos;s condition and functional
            requirements.
          </p>

          {/* ---------- our approach ---------- */}
          <div className="order-2 lg:order-none mt-8 sm:mt-5 rounded-2xl border border-[#E3EAF7] bg-[#F5F8FE] p-2 sm:p-4">
            <h3 className={`${URBANIST} text-[20px] font-semibold text-[#0E1A3C] sm:text-[22px]`}>Our Approach</h3>

            <ol className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-3 sm:gap-x-3">
              {APPROACH.map((step, i) => (
                <li key={step} className="flex items-center gap-2 sm:gap-3">
                  <span className="rounded-full border border-[#D5E1F6] bg-white px-4 py-1.5 text-[14px] font-semibold text-[#1A2748] shadow-[0_1px_2px_rgba(14,26,60,0.06)] sm:text-[15px]">
                    {step}
                  </span>
                  {i < APPROACH.length - 1 && <ArrowIcon />}
                </li>
              ))}
            </ol>

            <p className="mt-4 sm:mt-2 text-[15px] leading-[1.8] text-[#6B7489] sm:text-[16px]">
              Rather than using the same approach for everyone, treatment is planned according to the
              individual&apos;s condition, movement limitations and rehabilitation goals.
            </p>
          </div>

          {/* ---------- CTA ---------- */}
          <div className="order-2 lg:order-none mt-8 sm:mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="booking"
              // Same fill-sweep as the Footer CTA (logo gold, then back to logo blue).
              className="btn-premium btn-fill btn-brand h-[54px] gap-2 self-start rounded-full px-7 text-[17px] font-bold sm:self-auto sm:text-[18px]"
            >
              <span>Book a Consultation</span>
              <span className="btn-cta-arrow material-symbols-outlined text-xl">arrow_forward</span>
            </a>
            <p className="text-[15px] leading-[1.5] text-[#6B7489] sm:max-w-[260px]">
              Talk to our physiotherapy team about your condition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
