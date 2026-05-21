"use client";

import Image from "next/image";
import Link from "next/link";
import { assets, site } from "@/lib/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Inner image height in px. Width auto-scales by aspect ratio. */
  height?: number;
  /** Force white version using filter (use on photo backgrounds). */
  forceWhite?: boolean;
  /** Disable the link wrapper (useful inside footers where a logo block is already linked). */
  noLink?: boolean;
  /** ARIA label override. */
  label?: string;
  /** Eagerly load — set true for above-fold (nav). */
  priority?: boolean;
};

/**
 * Mal Al Sham brand wordmark.
 * Source: malalsham.com — verified URL.
 * mix-blend-mode: screen eliminates white halo on dark surfaces.
 * filter: brightness(0) invert(1) is the hard-override for photo backgrounds.
 */
export function Logo({
  className,
  height = 36,
  forceWhite = false,
  noLink = false,
  label,
  priority = false,
}: LogoProps) {
  const width = Math.round(height * 6.56); // 768 / 117 aspect from w-logo@4x

  const img = (
    <Image
      src={assets.logoBanner}
      alt={`${site.name} — wordmark`}
      width={width}
      height={height}
      sizes={`${width}px`}
      priority={priority}
      className={cn(
        "logo-img select-none pointer-events-none",
        forceWhite ? "logo-forced-white" : "logo-screen",
      )}
      style={{
        height,
        width: "auto",
        borderRadius: 0,
      }}
    />
  );

  if (noLink) return <span className={cn("inline-flex items-center", className)}>{img}</span>;

  return (
    <Link
      href="/"
      aria-label={label ?? `${site.fullName} — home`}
      className={cn("inline-flex items-center group", className)}
    >
      {img}
    </Link>
  );
}
