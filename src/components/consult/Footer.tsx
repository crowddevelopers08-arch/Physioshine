import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-primary bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-5 text-center text-sm text-brand-deep sm:px-8 md:flex-row md:justify-between md:gap-6 md:text-left lg:text-[15px]">
        <p className="flex flex-col items-center gap-1 sm:flex-row sm:gap-0">
          <span>© {new Date().getFullYear()} PhysioShine PhysioRehab. All rights reserved</span>
          <span aria-hidden="true" className="mx-3 hidden text-primary/40 sm:inline">
            |
          </span>
          <span>
            Powered By{" "}
            <span className="font-semibold text-primary">GrowMedico Developers</span>
          </span>
        </p>

        <Link
          href="consult/privacy-policy"
          className="font-semibold text-primary transition-colors hover:text-secondary"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
