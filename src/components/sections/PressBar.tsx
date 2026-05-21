"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

type Press = {
  publication: string;
  detail: string;
  href?: string;
};

const press: Press[] = [
  {
    publication: "Eater San Diego",
    detail: "Featured twice",
    href: "https://sandiego.eater.com/maps/best-affordable-cheap-food-restaurants-san-diego",
  },
  {
    publication: "San Diego Magazine",
    detail: "El Cajon Guide 2024",
    href: "https://sandiegomagazine.com/food-drink/neighborhood-guide-el-cajon-2-2/",
  },
  {
    publication: "East County Magazine",
    detail: "Dining feature, May 2024",
    href: "https://www.eastcountymagazine.org/mal-al-sham-mediterranean-food",
  },
  {
    publication: "San Diego Reader",
    detail: "Verified listing",
    href: "https://www.sandiegoreader.com/places/mal-al-sham/",
  },
  {
    publication: "The Gourmet Guru",
    detail: "Instagram feature",
    href: "https://www.instagram.com/p/C-jTqIiPZZ5/",
  },
  {
    publication: "Foodie Bravo",
    detail: "Mansaf & Ghouzi feature",
  },
];

export function PressBar() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce || !rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".press-item", {
        y: 18,
        opacity: 0,
        duration: 0.65,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current!,
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(".press-eyebrow", {
        y: 12,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current!,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(".press-badge", {
        scale: 0.9,
        opacity: 0,
        duration: 0.7,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: rootRef.current!,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      aria-label="As seen in"
      className="relative bg-[hsl(25_12%_10%)] border-y border-[hsl(30_15%_18%)] py-14 sm:py-18"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div>
            <span className="press-eyebrow text-[0.72rem] uppercase tracking-[0.28em] text-[hsl(38_85%_52%)]">
              As Seen In
            </span>
            <h2 className="mt-3 font-[var(--font-display)] text-[clamp(1.5rem,2.6vw,2.1rem)] leading-[1.15] text-[hsl(38_15%_93%)] max-w-2xl">
              Recognised by the people who write about{" "}
              <em className="italic text-[hsl(38_85%_52%)]">food in San Diego</em>.
            </h2>
          </div>
          <a
            href="https://www.eastcountymagazine.org/mal-al-sham-mediterranean-food"
            target="_blank"
            rel="noopener noreferrer"
            className="press-badge inline-flex items-center gap-2 self-start rounded-full border border-[hsl(38_85%_52%)] bg-[hsl(38_85%_52%/0.1)] px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.22em] text-[hsl(38_85%_52%)] transition-all hover:bg-[hsl(38_85%_52%/0.16)]"
          >
            <Award size={13} aria-hidden />
            “Best Arab Restaurant in America” — Minnesota Tours
          </a>
        </div>

        {/* Horizontal scrolling publication row */}
        <div className="press-track mt-10 -mx-5 sm:-mx-8 overflow-x-auto pb-2">
          <ul className="flex w-max items-baseline gap-8 sm:gap-10 px-5 sm:px-8">
            {press.map((p, i) => {
              const dot = i > 0 && (
                <span
                  aria-hidden
                  className="press-item h-1 w-1 shrink-0 rounded-full bg-[hsl(38_60%_35%)] self-center"
                />
              );
              const body = (
                <span className="flex flex-col items-start gap-1.5">
                  <span className="font-[var(--font-display)] italic text-[1.25rem] sm:text-[1.55rem] tracking-tight text-[hsl(38_15%_93%)] underline decoration-[hsl(38_85%_52%)] decoration-1 underline-offset-[6px]">
                    {p.publication}
                  </span>
                  <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[hsl(35_10%_58%)]">
                    {p.detail}
                  </span>
                </span>
              );
              return (
                <li
                  key={p.publication}
                  className="press-item flex shrink-0 items-baseline gap-8 sm:gap-10"
                >
                  {dot}
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group transition-colors hover:text-[hsl(38_85%_62%)]"
                    >
                      {body}
                    </a>
                  ) : (
                    body
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
