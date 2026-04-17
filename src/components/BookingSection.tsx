export default function BookingSection() {
  return (
    <header className="relative h-[86dvh] min-h-[560px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <iframe
          className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[130vh] min-w-full -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube-nocookie.com/embed/D4qLEQRH4KY?autoplay=1&mute=1&loop=1&playlist=D4qLEQRH4KY&controls=0&modestbranding=1&playsinline=1&rel=0"
          title="Physioshine booking video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </header>
  );
}
