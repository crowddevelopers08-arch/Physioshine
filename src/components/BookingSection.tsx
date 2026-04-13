export default function HeroSection() {
  return (
    <header className="relative min-h-dvh flex items-center overflow-hidden">
      {/* ── Video background with mobile fallback ── */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Video */}
        <video
          className="hidden md:block w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero-desktop.mp4" type="video/mp4" />
        </video>
        
        {/* Mobile Video */}
        <video
          className="block md:hidden w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero-mobile.mp4" type="video/mp4" />
        </video>
      </div>
    </header>
  );
}