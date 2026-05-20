"use client";

import { useEffect, useState } from "react";
import { whatsappHref } from "@/lib/site";

const WhatsAppIcon = ({ size = 22 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.48 1.34 5L2 22l5.13-1.35c1.46.8 3.1 1.23 4.79 1.23 5.52 0 10-4.48 10-10s-4.36-9.88-9.88-9.88Zm5.84 14.13c-.25.7-1.46 1.34-2.02 1.4-.55.07-1.07.32-3.6-.75-3.03-1.27-4.94-4.4-5.09-4.6-.15-.2-1.2-1.6-1.2-3.06s.77-2.17 1.04-2.47c.27-.3.6-.37.8-.37s.4 0 .57.01c.18.01.43-.07.67.51.25.6.86 2.1.94 2.25.07.15.13.32.02.52-.1.2-.16.32-.3.5-.16.18-.33.4-.47.53-.16.16-.33.34-.14.66.18.32.82 1.36 1.78 2.2 1.22 1.08 2.27 1.4 2.6 1.55.32.16.5.13.7-.07.18-.2.78-.91 1-1.22.2-.32.42-.27.7-.16.27.1 1.74.82 2.04.97.3.15.5.22.57.35.07.12.07.7-.18 1.4Z" />
  </svg>
);

export function WhatsAppFAB() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order via WhatsApp"
      className="group fixed bottom-5 right-5 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(38_85%_52%)] text-[hsl(25_15%_6%)] shadow-[0_12px_32px_-10px_hsl(38_85%_52%/0.65)] transition-all hover:bg-[hsl(38_90%_62%)] hover:scale-[1.04] sm:bottom-7 sm:right-7"
      style={{
        animation: "softPulse 2.4s cubic-bezier(0.22, 1, 0.36, 1) infinite",
      }}
    >
      <WhatsAppIcon size={22} />
      <span className="sr-only">Message us on WhatsApp</span>
    </a>
  );
}
