"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Truck } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

type Platform = {
  name: string;
  tagline: string;
  href: string;
  /** Brand colour for the chip. */
  accent: string;
};

const platforms: Platform[] = [
  {
    name: "DoorDash",
    tagline: "Order Now",
    href: "https://www.doordash.com/en/store/mal-alsham-el-cajon-919486/",
    accent: "hsl(355 85% 55%)",
  },
  {
    name: "Uber Eats",
    tagline: "Order Now",
    href: "https://www.ubereats.com/store/mal-al-sham/28RIjDWaT9ObZxnNMquQEA",
    accent: "hsl(120 60% 45%)",
  },
  {
    name: "Grubhub",
    tagline: "Order Now",
    href: "https://www.grubhub.com/restaurant/mal-al-sham-388-e-main-st-el-cajon/2523922",
    accent: "hsl(15 90% 55%)",
  },
];

export function OrderOnline() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce || !rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".order-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current!,
          start: "top 82%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(".order-headline", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current!,
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="order-online"
      aria-label="Order Mal Al Sham online for delivery"
      className="relative bg-[hsl(25_15%_6%)] py-24 sm:py-32 overflow-hidden"
    >
      {/* Amber divider top */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(38_85%_52%/0.55)] to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="order-headline flex flex-col gap-4 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.28em] text-[hsl(38_85%_52%)]">
            <Truck size={13} aria-hidden /> Delivery & Pickup
          </span>
          <h2 className="font-[var(--font-display)] text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.04]">
            Order online —{" "}
            <em className="italic text-[hsl(38_85%_52%)]">we deliver</em>.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[hsl(38_15%_93%/0.78)]">
            Fresh Syrian cuisine delivered to your door across San Diego
            County. Pick your platform — your meal is twenty minutes out.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:gap-5 md:grid-cols-3">
          {platforms.map((p) => (
            <li key={p.name} className="order-card">
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col justify-between gap-6 rounded-[14px] border border-[hsl(30_15%_18%)] bg-[hsl(25_12%_10%)] p-7 transition-all duration-300 ease-out hover:-translate-y-[3px] hover:border-[hsl(38_60%_35%)] hover:shadow-[0_18px_44px_-12px_hsl(38_85%_52%/0.45)]"
                style={{ willChange: "transform" }}
              >
                <span
                  aria-hidden
                  className="absolute left-7 top-7 inline-block h-2 w-2 rounded-full"
                  style={{ background: p.accent }}
                />
                <div className="pt-10">
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[hsl(35_10%_58%)]">
                    Order via
                  </p>
                  <p className="mt-2 font-[var(--font-display)] text-3xl text-[hsl(38_15%_93%)]">
                    {p.name}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[hsl(38_85%_52%)] uppercase tracking-[0.18em]">
                    {p.tagline}
                  </span>
                  <ArrowUpRight
                    size={18}
                    aria-hidden
                    className="text-[hsl(38_15%_93%)] transition-transform duration-300 group-hover:rotate-[8deg] group-hover:scale-110"
                  />
                </div>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-xs uppercase tracking-[0.22em] text-[hsl(35_10%_58%)]">
          Or call <a href="tel:+16194011055" className="tnum text-[hsl(38_85%_52%)] hover:text-[hsl(38_90%_62%)]">(619) 401-1055</a> for direct pickup.
        </p>
      </div>

      {/* Amber divider bottom */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[hsl(38_85%_52%/0.55)] to-transparent"
      />
    </section>
  );
}
