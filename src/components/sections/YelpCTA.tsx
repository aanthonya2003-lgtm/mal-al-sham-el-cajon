"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, ArrowUpRight } from "lucide-react";
import { Counter } from "@/components/animations/Counter";
import { site } from "@/lib/site";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export function YelpCTA() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce || !rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".yelp-block", {
        y: 28,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current!,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      aria-label="Read reviews on Yelp"
      className="relative bg-[hsl(25_15%_6%)] pb-16 sm:pb-20"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <a
          href={site.socials.yelp}
          target="_blank"
          rel="noopener noreferrer"
          className="yelp-block group flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between rounded-[14px] border border-[hsl(30_15%_18%)] bg-[hsl(25_12%_10%)] px-6 py-6 sm:px-9 sm:py-7 transition-all duration-300 hover:border-[hsl(38_60%_35%)] hover:bg-[hsl(25_12%_12%)]"
        >
          <div className="flex items-center gap-5">
            <span
              aria-hidden
              className="font-[var(--font-display)] italic font-bold text-[2.5rem] leading-none text-[hsl(38_85%_52%)]"
              style={{ letterSpacing: "-0.04em" }}
            >
              Y
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-[var(--font-display)] tnum text-2xl text-[hsl(38_15%_93%)]">
                  <Counter to={4.4} decimals={1} duration={1.2} />
                </span>
                <span className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      aria-hidden
                      fill="hsl(38 85% 52%)"
                      stroke="hsl(38 85% 52%)"
                    />
                  ))}
                </span>
              </div>
              <p className="mt-2 text-sm text-[hsl(38_15%_93%/0.85)]">
                Read our{" "}
                <Counter to={648} className="text-[hsl(38_85%_52%)]" />{" "}
                verified reviews · 780 photos
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-2 self-start text-sm uppercase tracking-[0.18em] text-[hsl(38_85%_52%)] transition-transform group-hover:translate-x-[2px]">
            Read on Yelp
            <ArrowUpRight size={16} aria-hidden />
          </span>
        </a>
      </div>
    </section>
  );
}
