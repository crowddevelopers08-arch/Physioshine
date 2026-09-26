"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Users, Star, ClipboardList, MapPin, Phone, User, Mail } from "lucide-react"

/**
 * Manuthera — Advanced Manual Therapy banner. Pixel-mapped replica.
 *
 * TWO LAYOUTS:
 * 1. lg and up (>=1024px) — exact pixel-mapped replica of the 1916x821
 *    reference (left% = x/1916, top% = y/821), type in `cqw` + clamp().
 * 2. below lg — stacked flow: headline, paragraph, photo, stats, buttons, then form.
 *
 * lg+ layout:
 *   background video ........ muted looping YouTube embed (BG_VIDEO_ID) filling
 *                             the left section up to the gold arc; a pale wash
 *                             sits only behind the copy
 *   left copy block ......... x = 147 (7.67%), vertically centred: headline,
 *                             gold rule, subtext, stats row (cqw gaps)
 *   form card ............... 1363,120 -> 1871,701, title + 4 fields + button
 *                             spread evenly
 *
 * Colors sampled from the file:
 *   headline blue ........... #00329D
 *   gold ..................... #EFA400 / button #FBB402
 *   panel blue ............... #2363B1
 *   dark navy body text ...... #00123C
 *
 * Right side: a thick gold arc (ARC_PATH) with the blue panel beyond it; the
 * panel hides the video, so the video only shows left of the arc.
 *
 * IMAGE YOU SUPPLY (put in /public), used by the mobile layout:
 *   /manuthera-photo.png   - the therapist + patient photo
 */

const BLUE = "#00329D"
const PANEL_BLUE = "#2363B1"
const GOLD = "#EFA400"
const BTN_GOLD = "#FBB402"
const NAVY_TEXT = "#00123C"
const PHONE = "806-790-3688"
// Height of the consult Navbar (top bar + main nav) above the banner.
const HEADER_H = 140

// A box in the 1916x821 design space, sized from the stage height. It is its
// own container, so the % positions and cqw sizes inside stay design-exact.
const DESIGN_BOX = { aspectRatio: "1916 / 821", containerType: "inline-size" } as const

// Seam between the video and the blue panel (reference coords). Starts at the
// top edge, bulges right just short of the form card, exits the bottom edge.
const ARC_TOP = "1245,0"
const ARC_PATH = "C1300,120 1335,300 1330,430 C1325,560 1275,690 1145,821"

// Background video behind the left copy (desktop). Muted + looped YouTube
// embed with no controls; `playlist` = same id is what makes `loop` work.
const BG_VIDEO_ID = "D4qLEQRH4KY"
const BG_VIDEO_SRC =
  `https://www.youtube-nocookie.com/embed/${BG_VIDEO_ID}` +
  `?autoplay=1&mute=1&loop=1&playlist=${BG_VIDEO_ID}&controls=0&playsinline=1` +
  `&rel=0&modestbranding=1&disablekb=1&iv_load_policy=3&fs=0`

const stats = [
  { icon: Users, value: "40,000+", label: "Happy Patients" },
  { icon: Star, value: "4.8 ★", label: "Google Rating" },
  { icon: ClipboardList, value: "Personalized", label: "Treatment Plan" },
]

const fields = [
  { icon: User, name: "name", placeholder: "Name", type: "text", required: true },
  { icon: Phone, name: "phone", placeholder: "Phone", type: "tel", required: true },
  { icon: Mail, name: "email", placeholder: "Email", type: "email", required: false },
  { icon: MapPin, name: "city", placeholder: "City", type: "text", required: false },
]

// Posted to /api/leads (DB + TeleCRM).
const FORM_NAME = "manuthera-lp-leads"
const FORM_SOURCE = "manuthera leads"
const TREATMENT = "Manual Therapy"
const THANK_YOU_PATH = "/consult/thank-you"

type SubmitStatus = "idle" | "sending" | "success" | "error"

function useLeadSubmit() {
  const router = useRouter()
  const [status, setStatus] = useState<SubmitStatus>("idle")
  const [error, setError] = useState("")

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === "sending" || status === "success") return
    const form = e.currentTarget
    const data = new FormData(form)
    const value = (key: string) => String(data.get(key) ?? "").trim()

    const phone = value("phone").replace(/[\s\-()]/g, "").replace(/^\+91/, "")
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setStatus("error")
      setError("Please enter a valid 10-digit mobile number.")
      return
    }

    setStatus("sending")
    setError("")
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: value("name"),
          phone,
          email: value("email"),
          city: value("city"),
          treatment: TREATMENT,
          source: FORM_SOURCE,
          formName: FORM_NAME,
          pageUrl: window.location.href,
        }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(json?.error || "Something went wrong. Please try again.")
      setStatus("success")
      router.push(THANK_YOU_PATH)
    } catch (err) {
      setStatus("error")
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  const buttonLabel =
    status === "sending" ? "SUBMITTING..." : status === "success" ? "REDIRECTING..." : "CONSULT NOW"

  return { status, error, onSubmit, buttonLabel }
}

function LeadForm({ compact = false }: { compact?: boolean }) {
  const { status, error, onSubmit, buttonLabel } = useLeadSubmit()
  return (
    <form onSubmit={onSubmit} className={compact ? "space-y-3" : "space-y-4"}>
      {fields.map((f) => (
        <div key={f.placeholder} className="relative">
          <f.icon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#5B6B85]" />
          <input
            type={f.type}
            name={f.name}
            placeholder={f.placeholder}
            required={f.required}
            className="w-full rounded-xl border border-black/10 bg-[#F4F6FA] py-4 pl-12 pr-4 text-[15px] text-[#3A4258] placeholder:text-[#7B8AA3] focus:border-[#2363B1] focus:outline-none"
          />
        </div>
      ))}
      <button
        type="submit"
        disabled={status === "sending" || status === "success"}
        className="btn-premium btn-fill btn-brand w-full gap-2 rounded-full py-4 text-[15px] font-extrabold tracking-wide disabled:opacity-70"
      >
        <span>{buttonLabel}</span>
        <span className="btn-cta-arrow material-symbols-outlined text-lg">arrow_forward</span>
      </button>
      {status === "error" && <p className="text-center text-[13px] text-red-600">{error}</p>}
    </form>
  )
}

// lg+ form card: sized in cqw to match the design box. The error line is
// absolutely placed under the button so it never shifts the field layout.
function DesktopLeadForm() {
  const { status, error, onSubmit, buttonLabel } = useLeadSubmit()
  return (
    // title block on top, then fields + button spread with equal gaps below it
    <form onSubmit={onSubmit} className="relative flex h-full flex-col">
      <div className="flex shrink-0 flex-col items-center">
        <h2
          className="text-center font-serif font-bold leading-tight"
          style={{ fontSize: "clamp(16px, 1.55cqw, 28px)", color: BLUE }}
        >
          Book Your Consultation
        </h2>
        <span
          aria-hidden
          className="block rounded-full"
          style={{ marginTop: "0.6cqw", width: "4cqw", height: "3px", backgroundColor: GOLD }}
        />
      </div>
      <div className="flex min-h-0 flex-1 flex-col justify-between" style={{ marginTop: "1.4cqw" }}>
        {fields.map((f) => (
          <div key={f.placeholder} className="relative">
            <f.icon
              className="pointer-events-none absolute left-[1.2cqw] top-1/2 -translate-y-1/2 text-[#5B6B85]"
              style={{ width: "1.35cqw", height: "1.35cqw" }}
            />
            <input
              type={f.type}
              name={f.name}
              placeholder={f.placeholder}
              required={f.required}
              className="w-full rounded-[0.8cqw] border border-black/10 bg-[#F4F6FA] text-[#3A4258] placeholder:text-[#7B8AA3] focus:border-[#2363B1] focus:outline-none"
              style={{ padding: "1.2cqw 1cqw 1.2cqw 3.6cqw", fontSize: "clamp(12px, 1.1cqw, 20px)" }}
            />
          </div>
        ))}
        <button
          type="submit"
          disabled={status === "sending" || status === "success"}
          className="btn-premium btn-fill btn-brand w-full rounded-full font-extrabold tracking-wide disabled:opacity-70"
          // min sizes reset: .btn-premium's 3rem floor would break the cqw fit.
          style={{
            gap: "0.5cqw",
            minHeight: 0,
            minWidth: 0,
            padding: "1.2cqw 0",
            fontSize: "clamp(12px, 1.15cqw, 21px)",
          }}
        >
          <span>{buttonLabel}</span>
          <span className="btn-cta-arrow material-symbols-outlined" style={{ fontSize: "1.3em" }}>
            arrow_forward
          </span>
        </button>
      </div>
      {status === "error" && (
        <p
          className="absolute inset-x-0 top-full text-center leading-tight text-red-600"
          style={{ marginTop: "0.4cqw", fontSize: "clamp(11px, 0.8cqw, 14px)" }}
        >
          {error}
        </p>
      )}
    </form>
  )
}

function Artwork() {
  return (
    <svg aria-hidden className="absolute inset-0 h-full w-full" viewBox="0 0 1916 821" preserveAspectRatio="none">
      {/* blue panel, right of the arc (covers the video on that side) */}
      <path d={`M${ARC_TOP} ${ARC_PATH} L1916,821 L1916,0 Z`} fill={PANEL_BLUE} />
      {/* lighter wave inside the panel, bottom right */}
      <path d="M1470,821 C1600,720 1760,670 1916,650 L1916,821 Z" fill="#fff" opacity="0.07" />
      <path d="M1560,0 C1640,60 1760,90 1916,95 L1916,0 Z" fill="#fff" opacity="0.05" />

      {/* gold arc on the video / panel seam */}
      <path d={`M${ARC_TOP} ${ARC_PATH}`} fill="none" stroke={BTN_GOLD} strokeWidth="46" />

      {/* 3x3 dotted grid, top right */}
      {[0, 1, 2].flatMap((r) =>
        [0, 1, 2].map((c) => (
          <circle key={`${r}-${c}`} cx={1826 + c * 30} cy={38 + r * 32} r="7" fill="#fff" opacity="0.28" />
        )),
      )}
    </svg>
  )
}

export default function ManutheraBanner() {
  return (
    <section className="w-full" style={{ backgroundColor: "#EFF4FC" }}>
      {/* ================================================================
          MOBILE / TABLET (< lg) — stacked flow layout
      ================================================================= */}
      <div className="relative overflow-hidden px-5 py-10 lg:hidden">
        <h1 className="font-serif text-[34px] font-bold leading-[1.15] sm:text-[42px]" style={{ color: BLUE }}>
          Manuthera -{" "}
          <span style={{ color: GOLD }}>Advanced Manual Therapy</span> in Hyderabad
        </h1>
        <span className="mt-3 block h-[3px] w-28" style={{ backgroundColor: GOLD }} />

        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: NAVY_TEXT }}>
          Advanced joint mobilization, spinal decompression, controlled spinal
          movement and manual therapy
        </p>

        <div className="relative mt-6 w-full overflow-hidden rounded-3xl" style={{ aspectRatio: "4 / 3" }}>
          <Image src="/manuthera-photo.png" alt="Therapist performing manual therapy on a patient" fill className="object-cover" />
        </div>

        <div className="mt-7 grid grid-cols-3 gap-2">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <span
                className="flex h-14 w-14 items-center justify-center rounded-full"
                style={{ backgroundColor: GOLD }}
              >
                <s.icon className="h-6 w-6 text-white" fill={s.icon === Star ? "white" : "none"} strokeWidth={2} />
              </span>
              <span className="mt-2 text-[16px] font-extrabold" style={{ color: BLUE }}>
                {s.value}
              </span>
              <span className="text-[12px]" style={{ color: NAVY_TEXT }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>


        <div className="mt-6 rounded-3xl bg-white p-5 shadow-lg">
          <h2 className="text-center font-serif text-[22px] font-bold" style={{ color: BLUE }}>
            Book Your Consultation
          </h2>
          <span aria-hidden className="mx-auto mb-5 mt-2 block h-[3px] w-14 rounded-full" style={{ backgroundColor: GOLD }} />
          <LeadForm compact />
        </div>
      </div>

      {/* ================================================================
          DESKTOP (>= lg) — exact pixel-mapped replica
      ================================================================= */}
      {/* Stage: full width, height capped so the whole banner fits on screen
          below the header (top bar + nav). Inside, two 1916:821 "design
          boxes" at the same scale: text pinned left, artwork + form pinned
          right. On wide screens the extra width opens up between them. */}
      <div className="hidden lg:block" style={{ containerType: "inline-size" }}>
      <div
        className="relative isolate w-full overflow-hidden"
        style={{
          height: `min(calc(100cqw * 821 / 1916), max(428px, calc(100svh - ${HEADER_H}px)))`,
          backgroundColor: "#EFF4FC",
        }}
      >
        {/* ---------- background video (behind everything) ----------
            The wrapper is a size container so the iframe can "cover" it:
            16:9 box sized to whichever of width/height is larger, centred,
            then scaled up a little to crop YouTube's edge UI. The blue panel
            on the right covers it, so it only shows left of the gold arc. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          style={{ containerType: "size" }}
        >
          {/* Video box = visible left section only. The right design box is
              233.4cqh wide (1916/821 × height); the arc sits ~70% across it,
              so everything past (100cqw − 70cqh) is behind the blue panel.
              The box runs slightly under the arc so no gap shows. */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: "calc(100cqw - 70cqh)", containerType: "size" }}
          >
            <iframe
              src={BG_VIDEO_SRC}
              title="Manuthera manual therapy background video"
              tabIndex={-1}
              allow="autoplay; encrypted-media; picture-in-picture"
              className="absolute left-1/2 top-1/2 border-0"
              style={{
                width: "max(100cqw, 177.78cqh)",
                height: "max(100cqh, 56.25cqw)",
                transform: "translate(-50%, -50%) scale(1.18)",
              }}
            />
          </div>
          {/* Pale wash only behind the copy: pinned to the left design box
              (same scale as the text), solid under the text column (which
              ends ~42% across), then gone by ~58% so the rest of the video
              up to the gold arc shows clearly. */}
          <div
            className="absolute left-0 top-0 h-full"
            style={{
              aspectRatio: "1916 / 821",
              background:
                "linear-gradient(90deg, rgba(239,244,252,0.84) 0%, rgba(239,244,252,0.78) 38%, rgba(239,244,252,0.38) 48%, rgba(239,244,252,0) 58%)",
            }}
          />
        </div>

        {/* ================= LEFT design box: text =================
            Sits above the video and artwork; only its buttons/links take
            clicks so the form stays
            usable where the two boxes overlap. */}
        <div
          className="pointer-events-none absolute left-0 top-0 z-20 h-full [&_a]:pointer-events-auto [&_button]:pointer-events-auto"
          style={DESIGN_BOX}
        >

        {/* Headline, rule, paragraph and stats flow as one block, centred
            vertically with even gaps (all in cqw so it scales as one). */}
        <div
          className="absolute inset-y-0 z-10 flex flex-col justify-center"
          style={{ left: "7.67%", width: "34cqw" }}
        >
          {/* ---------- headline ---------- */}
          <div
            className="whitespace-nowrap font-serif font-bold"
            style={{ fontSize: "clamp(28px, 3.15cqw, 58px)", lineHeight: 1.18 }}
          >
            <div style={{ color: BLUE }}>Manuthera - Advanced</div>
            <div style={{ color: GOLD }}>Manual Therapy in</div>
            <div style={{ color: BLUE }}>Hyderabad</div>
          </div>

          <span className="block" style={{ marginTop: "1.8cqw", width: "24cqw", height: "3px", backgroundColor: GOLD }} />

          <p
            className="leading-[1.45]"
            style={{ marginTop: "1.5cqw", width: "28cqw", fontSize: "clamp(13px, 1.4cqw, 21px)", color: NAVY_TEXT }}
          >
            Advanced joint mobilization, spinal decompression, controlled spinal
            movement and manual therapy
          </p>

          {/* ---------- stats ---------- */}
          <div className="flex" style={{ marginTop: "2.8cqw" }}>
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center text-center ${i > 0 ? "border-l border-black/15" : ""}`}
                style={{ width: "10cqw" }}
              >
                <span
                  className="flex aspect-square items-center justify-center rounded-full"
                  style={{ width: "3.6cqw", backgroundColor: GOLD }}
                >
                  <s.icon style={{ width: "48%", height: "48%" }} className="text-white" fill={s.icon === Star ? "white" : "none"} strokeWidth={2} />
                </span>
                <span
                  className="whitespace-nowrap font-extrabold"
                  style={{ marginTop: "0.8cqw", fontSize: "clamp(15px, 1.35cqw, 25px)", color: BLUE }}
                >
                  {s.value}
                </span>
                <span
                  className="whitespace-nowrap"
                  style={{ fontSize: "clamp(12px, 1cqw, 18px)", color: NAVY_TEXT }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        </div>

        {/* ================ RIGHT design box: artwork + form ================
            pointer-events-none so its empty left area never blocks the
            left box's buttons; the form card turns them back on. */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full" style={DESIGN_BOX}>
        <Artwork />

        {/* ---------- form card ---------- */}
        <div
          className="pointer-events-auto absolute z-10 rounded-[1.5cqw] bg-white shadow-2xl"
          // 1401,120 -> 1871,701 (470 x 581): ~45px either side (arc / edge),
          // 120px above and below.
          style={{ left: "71.12%", top: "14.62%", width: "26.53%", height: "70.77%", padding: "1.6cqw" }}
        >
          <DesktopLeadForm />
        </div>
        </div>
      </div>
      </div>
    </section>
  )
}