import AnimatedSection from "./AnimatedSection";

const reviews = [
  {
    text: "I came to physioshine for my neck and low back pain. I'm feeling very much better now, the treatment is very good. I am feeling comfortable and relaxed now. I'm recovered by 99% now, thank you & respect for Dr Fathima Madam, and I thank everyone at physioshine.",
    author: "Google Reviewer",
    rating: 5,
  },
  {
    text: "My dad has had severe sciatic nerve pain and lower back pain for a long time. After taking physiotherapy sessions here, my father's pain has reduced a lot. The sessions included stretching, strengthening exercises, and posture guidance, which really helped improve my mobility.",
    author: "Google Reviewer",
    rating: 5,
  },
  {
    text: "I'm thoroughly impressed with the physiotherapy services at Physioshine - Advanced Neuro & Chiropractic Centre. The team is super professional, caring, and skilled. My experience was top-notch - from the warm welcome to the personalised treatment plan.",
    author: "Google Reviewer",
    rating: 5,
  },
  {
    text: "Treatment is good. Recovered from my back pain, very satisfied with the result. Thank you, Dr Sachin sir and team physioshine.",
    author: "Google Reviewer",
    rating: 5,
  },
  {
    text: "I was suffering from low back pain for 3 months, and nothing seemed to help until I visited PhysioShine PhysioRehab. Dr Sachin and Dr Anjali clearly explained my condition and treated the root cause instead of just giving temporary relief.",
    author: "Google Reviewer",
    rating: 5,
  },
  {
    text: "It was more effective therapy, compared to other clinics... I went with severe neck & lower back pain... in 12 sittings it was cleared. Now I can rate my pain - lower back zero % pain. Your demand is more... so increase your branches on all 4 sides of the city!",
    author: "Google Reviewer",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex text-secondary-fixed mb-3">
      {[...Array(count)].map((_, i) => (
        <span key={i} className="material-symbols-outlined text-lg" data-weight="fill">
          star
        </span>
      ))}
    </div>
  );
}

export default function ReviewsCarousel() {
  return (
    <AnimatedSection className="py-14 sm:py-16 bg-brand-deep text-white overflow-hidden" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-8 sm:mb-10">
        <div
          data-reveal-header
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <span className="text-secondary-fixed font-black uppercase tracking-widest text-xs sm:text-sm">
              Patient Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-headline mt-1">
              What Our Patients Say
            </h2>
          </div>
          <div
            data-reveal-item
            className="flex w-full sm:w-auto items-center justify-center sm:justify-start gap-3 bg-white/10 border border-white/15 rounded-xl px-4 py-3 shrink-0"
          >
            <div className="text-center">
              <p className="text-2xl font-black">4.7</p>
              <div className="flex text-secondary-fixed">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm" data-weight="fill">
                    {i < 4 ? "star" : "star_half"}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-l border-white/20 pl-3">
              <p className="font-bold text-sm">1000+</p>
              <p className="text-white/60 text-xs">Google Reviews</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex animate-scroll whitespace-nowrap gap-4 sm:gap-5 px-4">
        {[...reviews, ...reviews].map((r, i) => (
          <div
            key={i}
            data-reveal-item
            className="inline-block min-w-[18rem] sm:min-w-96 bg-white/8 p-5 sm:p-6 rounded-xl backdrop-blur-sm border border-white/15 align-top shadow-lg shadow-brand-deeper/10"
          >
            <Stars count={r.rating} />
            <p className="whitespace-normal italic text-sm leading-relaxed text-white/90 line-clamp-5">
              &quot;{r.text}&quot;
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-fixed text-base">person</span>
              </div>
              <div>
                <p className="font-bold text-secondary-fixed text-sm">{r.author}</p>
                <p className="text-white/50 text-xs">Verified Google Review</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
