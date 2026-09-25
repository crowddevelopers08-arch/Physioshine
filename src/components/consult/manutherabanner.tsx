"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import Image, { getImageProps } from "next/image"
import { Users, Star, ClipboardList, MapPin, Phone, User, Mail } from "lucide-react"

/**
 * Manuthera — Advanced Manual Therapy banner. Pixel-mapped replica.
 *
 * TWO LAYOUTS:
 * 1. lg and up (>=1024px) — exact pixel-mapped replica of the 1916x821
 *    reference (left% = x/1916, top% = y/821), type in `cqw` + clamp().
 * 2. below lg — stacked flow: headline, paragraph, photo, stats, buttons, then form.
 *
 * Traced measurements (lg+ layout):
 *   headline left margin ... x = 147           (7.67%)
 *   headline lines ......... y 105 / 174 / 240 / 312  (serif bold)
 *   gold divider rule ...... y 389, width to x 609
 *   subtext (3 lines) ...... y 409 / 437 / 467
 *   stat circles ........... 69px dia, centers x 225/416/610, y 503-568
 *   stat number/label ...... y 583 / 611
 *   primary button .......... 157,653 -> 649,719  (492 x 66, pill)
 *   location row ............ y ~746-778
 *   form card ............... 1401,192 -> 1843,683 (442 x 491, r28)
 *   form fields ............. 4x, ~68px tall, 89px pitch, starting y 224
 *   consult button ........... 1433,589 -> 1812,652
 *
 * Colors sampled from the file:
 *   headline blue ........... #00329D
 *   gold ..................... #EFA400 / button #FBB402
 *   panel blue ............... #2363B1
 *   dark navy body text ...... #00123C
 *
 * Photo section: the photo sits on the pale background with a feathered
 * curved left edge, cut on the right by a thick gold arc (ARC_PATH) with
 * the blue panel beyond it. Tweak ARC_PATH / PHOTO to fine-tune.
 *
 * IMAGE YOU SUPPLY (put in /public):
 *   /manuthera-photo.jpg   - the therapist + patient photo
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

// Seam between photo and blue panel (reference coords). Starts at the top
// edge, bulges right just short of the form card, exits the bottom edge.
const ARC_TOP = "1245,0"
const ARC_PATH = "C1300,120 1335,300 1330,430 C1325,560 1275,690 1145,821"

// Photo placement in reference coords: full banner height (no top edge),
// therapist's head around x~1130, right side tucked under the gold arc.
const PHOTO = { x: 440, y: 0, w: 886, h: 821 }

const { props: photoProps } = getImageProps({
  src: "/manuthera-photo.png",
  alt: "",
  width: 1303,
  height: 1207,
})
const photoSrc = photoProps.src

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
        className="w-full rounded-full py-4 text-[15px] font-extrabold tracking-wide text-[#00123C] transition hover:brightness-105 disabled:opacity-70"
        style={{ backgroundColor: BTN_GOLD }}
      >
        {buttonLabel}
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
    // fields + button spread with equal gaps
    <form onSubmit={onSubmit} className="relative flex h-full flex-col justify-between">
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
            style={{ padding: "1.3cqw 1cqw 1.3cqw 3.6cqw", fontSize: "clamp(12px, 1.1cqw, 20px)" }}
          />
        </div>
      ))}
      <button
        type="submit"
        disabled={status === "sending" || status === "success"}
        className="w-full rounded-full font-extrabold tracking-wide transition hover:brightness-105 disabled:opacity-70"
        style={{
          backgroundColor: BTN_GOLD,
          color: NAVY_TEXT,
          padding: "1.3cqw 0",
          fontSize: "clamp(12px, 1.15cqw, 21px)",
        }}
      >
        {buttonLabel}
      </button>
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
      <defs>
        {/* photo sits left of the arc */}
        <clipPath id="mt-photo-clip" clipPathUnits="userSpaceOnUse">
          <path d={`M0,0 L${ARC_TOP} ${ARC_PATH} L0,821 Z`} />
        </clipPath>

        {/* soft, curved left edge that melts into the pale background */}
        <filter id="mt-feather" x="-200" y="-200" width="2400" height="1300" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="42" />
        </filter>
        <mask id="mt-photo-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="1916" height="821">
          <path
            d="M950,-80 C780,50 620,250 580,450 C550,600 590,760 660,900 L1916,900 L1916,-80 Z"
            fill="#fff"
            filter="url(#mt-feather)"
          />
        </mask>
      </defs>

      {/* blue panel, right of the arc */}
      <path d={`M${ARC_TOP} ${ARC_PATH} L1916,821 L1916,0 Z`} fill={PANEL_BLUE} />
      {/* lighter wave inside the panel, bottom right */}
      <path d="M1470,821 C1600,720 1760,670 1916,650 L1916,821 Z" fill="#fff" opacity="0.07" />
      <path d="M1560,0 C1640,60 1760,90 1916,95 L1916,0 Z" fill="#fff" opacity="0.05" />

      {/* photo */}
      <g clipPath="url(#mt-photo-clip)" mask="url(#mt-photo-mask)">
        <image
          href={photoSrc}
          x={PHOTO.x}
          y={PHOTO.y}
          width={PHOTO.w}
          height={PHOTO.h}
          preserveAspectRatio="xMidYMax slice"
        />
      </g>

      {/* gold arc on the photo / panel seam */}
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

        <button
          type="button"
          className="mt-7 w-full rounded-full py-4 text-[16px] font-extrabold tracking-wide"
          style={{ backgroundColor: BTN_GOLD, color: NAVY_TEXT }}
        >
          BOOK YOUR CONSULTATION
        </button>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-[15px] font-bold" style={{ color: NAVY_TEXT }}>
          <span className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full" style={{ backgroundColor: GOLD }}>
              <MapPin className="h-4 w-4 text-white" fill="white" strokeWidth={1} />
            </span>
            Hyderabad
          </span>
          <span className="h-5 w-px bg-black/20" />
          <span className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full" style={{ backgroundColor: GOLD }}>
              <Phone className="h-3.5 w-3.5 text-white" fill="white" strokeWidth={0} />
            </span>
            {PHONE}
          </span>
        </div>

        <div className="mt-6 rounded-3xl bg-white p-5 shadow-lg">
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
        {/* background swooshes, pinned left, behind everything */}
        <div aria-hidden className="absolute left-0 top-0 z-0 h-full" style={{ aspectRatio: "1916 / 821" }}>
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1916 821" preserveAspectRatio="none">
            <path d="M0,70 C260,20 520,40 760,0 L0,0 Z" fill="#fff" opacity="0.7" />
            <path d="M0,300 C180,420 330,640 560,821 L0,821 Z" fill="#fff" opacity="0.45" />
            <path d="M0,560 C160,640 300,730 380,821 L0,821 Z" fill="#fff" opacity="0.55" />
          </svg>
        </div>

        {/* ================= LEFT design box: text =================
            Sits above the artwork so the photo's faded edge never covers
            the copy; only its buttons/links take clicks so the form stays
            usable where the two boxes overlap. */}
        <div
          className="pointer-events-none absolute left-0 top-0 z-20 h-full [&_a]:pointer-events-auto [&_button]:pointer-events-auto"
          style={DESIGN_BOX}
        >

        {/* ---------- headline ---------- */}
        <div
          className="absolute z-10 font-serif font-bold"
          style={{ left: "7.67%", top: "10.8%", width: "58%", lineHeight: 1.18 }}
        >
          <div style={{ fontSize: "clamp(28px, 3.15cqw, 58px)", color: BLUE }}>Manuthera - Advanced</div>
          <div style={{ fontSize: "clamp(28px, 3.15cqw, 58px)", color: GOLD }}> Manual Therapy in</div>
          <div style={{ fontSize: "clamp(28px, 3.15cqw, 58px)", color: GOLD }}></div>
          <div style={{ fontSize: "clamp(28px, 3.15cqw, 58px)", color: BLUE }}> Hyderabad</div>
        </div>

        <span
          className="absolute z-10 block"
          style={{ left: "7.67%", top: "40.4%", width: "24.1%", height: "3px", backgroundColor: GOLD }}
        />

        <p
          className="absolute z-10 leading-[1.45]"
          style={{ left: "7.67%", top: "44.8%", width: "28%", fontSize: "clamp(13px, 1.4cqw, 21px)", color: NAVY_TEXT }}
        >
          Advanced joint mobilization, spinal decompression, controlled spinal
          movement and manual therapy
        </p>

        {/* ---------- stats ---------- */}
        {stats.map((s, i) => {
          const centerLeft = [11.74, 21.71, 31.84][i]
          return (
            <div key={s.label} className="absolute inset-0 z-10">
              <span
                className="absolute flex aspect-square -translate-x-1/2 items-center justify-center rounded-full"
                style={{ left: `${centerLeft}%`, top: "61.3%", width: "3.6cqw", backgroundColor: GOLD }}
              >
                <s.icon style={{ width: "48%", height: "48%" }} className="text-white" fill={s.icon === Star ? "white" : "none"} strokeWidth={2} />
              </span>
              <span
                className="absolute -translate-x-1/2 whitespace-nowrap font-extrabold"
                style={{ left: `${centerLeft}%`, top: "71%", fontSize: "clamp(15px, 1.35cqw, 25px)", color: BLUE }}
              >
                {s.value}
              </span>
              <span
                className="absolute -translate-x-1/2 whitespace-nowrap"
                style={{ left: `${centerLeft}%`, top: "74.4%", fontSize: "clamp(12px, 1cqw, 18px)", color: NAVY_TEXT }}
              >
                {s.label}
              </span>
            </div>
          )
        })}
        {[16.76, 26.78].map((l) => (
          <span key={l} aria-hidden className="absolute z-[5] w-px bg-black/15" style={{ left: `${l}%`, top: "61.5%", height: "14.5%" }} />
        ))}

        {/* ---------- primary button ---------- */}
        <button
          type="button"
          className="absolute z-10 flex items-center justify-center rounded-full font-extrabold tracking-wide transition hover:brightness-105"
          style={{
            left: "8.19%",
            top: "79.5%",
            width: "25.68%",
            height: "8.04%",
            fontSize: "clamp(14px, 1.35cqw, 24px)",
            backgroundColor: BTN_GOLD,
            color: NAVY_TEXT,
          }}
        >
          BOOK YOUR CONSULTATION
        </button>

        {/* ---------- location / phone row ---------- */}
        <div className="absolute z-10 flex items-center" style={{ left: "8.61%", top: "90.9%", gap: "1cqw" }}>
          <span className="flex aspect-square items-center justify-center rounded-full" style={{ width: "1.7cqw", backgroundColor: GOLD }}>
            <MapPin style={{ width: "60%", height: "60%" }} className="text-white" fill="white" strokeWidth={1} />
          </span>
          <span className="font-bold" style={{ fontSize: "clamp(14px, 1.2cqw, 22px)", color: NAVY_TEXT }}>
            Hyderabad
          </span>
          <span className="mx-1 h-5 w-px bg-black/25" />
          <span className="flex aspect-square items-center justify-center rounded-full" style={{ width: "1.7cqw", backgroundColor: GOLD }}>
            <Phone style={{ width: "52%", height: "52%" }} className="text-white" fill="white" strokeWidth={0} />
          </span>
          <span className="font-bold" style={{ fontSize: "clamp(14px, 1.2cqw, 22px)", color: NAVY_TEXT }}>
            {PHONE}
          </span>
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