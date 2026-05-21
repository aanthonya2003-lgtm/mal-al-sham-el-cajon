"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const items = [
  "1,500+ Five-Star Reviews",
  "100% Halal",
  "Family-Owned Since 2018",
  "Featured on Eater San Diego",
  "Best Arab Restaurant in America — Minnesota Tours",
  "Open 7 Days · 9 AM – 10 PM",
  "Free Hot Chai Tea",
  "Catering Available",
];

const dot = (
  <span
    aria-hidden
    className="mx-7 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(38_85%_52%)] align-middle"
  />
);

export function TrustBar() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce || !trackRef.current) return;

    const ctx = gsap.context(() => {
      tweenRef.current = gsap.to(trackRef.current!, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  const pause = () => tweenRef.current?.pause();
  const resume = () => tweenRef.current?.resume();

  // Duplicated track for seamless loop
  const track = (
    <div className="flex shrink-0 items-center whitespace-nowrap">
      {items.map((t, i) => (
        <span
          key={`${t}-${i}`}
          className="font-[var(--font-display)] italic text-[1.05rem] sm:text-[1.2rem] text-[hsl(38_15%_93%/0.88)]"
        >
          {t}
          {dot}
        </span>
      ))}
    </div>
  );

  return (
    <section
      aria-label="Trust signals"
      className="border-y border-[hsl(30_15%_18%)] bg-[hsl(25_12%_10%)] py-5 overflow-hidden"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
    >
      <div ref={trackRef} className="flex w-max">
        {track}
        {track}
      </div>
    </section>
  );
}
