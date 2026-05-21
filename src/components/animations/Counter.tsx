"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

type Props = {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  delay?: number;
  className?: string;
};

const format = (val: number, decimals: number) =>
  val.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

/**
 * Number that animates from 0 to `to` when scrolled into view.
 * Bidirectional — reverses back to 0 when scrolled out.
 * SSR-safe: renders the final value on the server.
 */
export function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.6,
  delay = 0,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    const obj = { val: 0 };
    const node = ref.current;

    const ctx = gsap.context(() => {
      const tween = gsap.fromTo(
        obj,
        { val: 0 },
        {
          val: to,
          duration,
          delay,
          ease: "power2.out",
          snap: decimals === 0 ? { val: 1 } : undefined,
          onUpdate: () => {
            node.textContent = `${prefix}${format(obj.val, decimals)}${suffix}`;
          },
          scrollTrigger: {
            trigger: node,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Initial state: zero
      node.textContent = `${prefix}${format(0, decimals)}${suffix}`;
      return tween;
    });

    return () => ctx.revert();
  }, [to, prefix, suffix, decimals, duration, delay]);

  return (
    <span ref={ref} className={cn("tnum", className)}>
      {prefix}
      {format(to, decimals)}
      {suffix}
    </span>
  );
}
