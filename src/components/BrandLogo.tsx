import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  width?: number;
};

export default function BrandLogo({
  href = "/",
  className = "",
  imageClassName = "",
  priority = false,
  width = 220,
}: BrandLogoProps) {
  const height = Math.round((width * 303) / 824);

  const image = (
    <Image
      src="/trans-phylogo.png"
      alt="Physio Shine"
      width={824}
      height={303}
      priority={priority}
      className={`h-auto w-full object-contain ${imageClassName}`.trim()}
      sizes={`${width}px`}
    />
  );

  return (
    <Link
      href={href}
      className={`block w-full max-w-fit ${className}`.trim()}
      aria-label="Physio Shine home"
    >
      <div style={{ width, height }}>{image}</div>
    </Link>
  );
}
