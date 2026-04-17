"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

const PHONE_CONVERSION_ID = "AW-16763988862/ZLzECOrK0p0cEP7W2Lk-";
const PHONE_CONVERSION_NUMBER = "8309199733";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type PhoneLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export default function PhoneLink({
  href = `tel:${PHONE_CONVERSION_NUMBER}`,
  onClick,
  children,
  ...props
}: PhoneLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtagFallback(...args: unknown[]) {
        window.dataLayer?.push(args);
      };

    window.gtag("config", PHONE_CONVERSION_ID, {
      phone_conversion_number: PHONE_CONVERSION_NUMBER,
    });

    onClick?.(event);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
