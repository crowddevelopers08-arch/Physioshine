"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Bookings: {
      inlineEmbed: (options: {
        url: string;
        parent: string;
        height: string;
      }) => void;
    };
  }
}

export default function BookingForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://bookings.nimbuspop.com/assets/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.Bookings) {
        window.Bookings.inlineEmbed({
          url: "https://physioshine.zohobookings.in/portal-embed#/445097000000034048",
          parent: "#inline-container",
          height: "600px",
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return <div id="inline-container" />;
}
