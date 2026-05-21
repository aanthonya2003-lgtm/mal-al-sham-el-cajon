"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export function InstagramCTA() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce || !rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".ig-block", {
        y: 36,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current!,
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      aria-label="Follow on Instagram"
      className="relative bg-[hsl(25_15%_6%)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="ig-block relative overflow-hidden rounded-[18px] border border-[hsl(38_60%_35%/0.6)] bg-[hsl(25_12%_10%)] p-8 sm:p-12 grain">
          <div className="relative z-10 flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-5">
              <span
                aria-hidden
                className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] bg-[hsl(38_85%_52%)] text-[hsl(25_15%_6%)]"
              >
                <Instagram size={24} />
              </span>
              <div>
                <span className="text-[0.72rem] uppercase tracking-[0.28em] text-[hsl(38_85%_52%)]">
                  @malalsham.usa
                </span>
                <h2 className="mt-2 font-[var(--font-display)] text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.1] text-[hsl(38_15%_93%)]">
                  Follow our kitchen,{" "}
                  <em className="italic text-[hsl(38_85%_52%)]">
                    daily.
                  </em>
                </h2>
                <p className="mt-3 max-w-md text-sm sm:text-base text-[hsl(38_15%_93%/0.78)] leading-relaxed">
                  12K followers. 837+ posts. Daily specials, behind-the-scenes,
                  and the weekend Mansaf when it hits the table.
                </p>
              </div>
            </div>

            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[hsl(38_85%_52%)] px-7 py-3.5 text-sm font-medium text-[hsl(25_15%_6%)] transition-all hover:bg-[hsl(38_90%_62%)] hover:shadow-[0_12px_32px_-8px_hsl(38_85%_52%/0.6)]"
            >
              Follow on Instagram
              <ArrowUpRight size={16} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
