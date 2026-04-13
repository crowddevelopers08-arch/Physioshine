export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-end pb-4 px-6 md:hidden bg-white/80 backdrop-blur-lg border-t border-slate-200/20 shadow-[0_-10px_40px_rgba(0,0,0,0.06)] rounded-t-[2rem]">
      <a
        className="flex flex-col items-center justify-center bg-primary text-white rounded-full p-3 mb-4 shadow-lg shadow-primary/25 transition-all scale-110"
        href="#"
      >
        <span className="material-symbols-outlined">home</span>
      </a>
      <a
        className="flex flex-col items-center justify-center text-on-surface-variant p-2"
        href="tel:8309199733"
      >
        <span className="material-symbols-outlined">call</span>
        <span className="text-[10px] font-medium uppercase tracking-widest mt-1">
          Call
        </span>
      </a>
      <a
        className="flex flex-col items-center justify-center text-on-surface-variant p-2"
        href="#book"
      >
        <span className="material-symbols-outlined">calendar_month</span>
        <span className="text-[10px] font-medium uppercase tracking-widest mt-1">
          Book
        </span>
      </a>
    </nav>
  );
}
