"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { assets } from "@/lib/site";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Story() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".story-image", {
        scrollTrigger: {
          trigger: rootRef.current!,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1.1,
        ease: "power4.out",
      });

      gsap.from(".story-line", {
        scrollTrigger: {
          trigger: rootRef.current!,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="story"
      className="relative bg-[hsl(25_15%_6%)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20 items-center">
        <div className="order-2 lg:order-1">
          <span className="story-line text-[0.72rem] uppercase tracking-[0.28em] text-[hsl(38_85%_52%)]">
            Our Story
          </span>
          <h2 className="story-line mt-5 font-[var(--font-display)] text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05]">
            From Damascus to El Cajon — <br />
            <em className="italic text-[hsl(38_85%_52%)]">
              one family, one table.
            </em>
          </h2>
          <div className="story-line mt-7 space-y-5 text-[hsl(38_15%_93%/0.82)] text-base sm:text-lg leading-relaxed">
            <p>
              In 2016, the Abu Ali family arrived in California from Syria,
              carrying nothing but suitcases, decades of wholesale-trade
              experience, and a kitchen full of recipes too good to leave
              behind.
            </p>
            <p>
              Two years later, on East Main Street in El Cajon, Mr. Ahmed Abu
              Ali opened the doors of <em>Mal Al Sham</em> — a restaurant
              built on a single conviction: that the food of Damascus belongs
              wherever Damascene hands can cook it.
            </p>
            <p>
              Today, our regulars drive in from Chula Vista, La Jolla, and
              San Diego proper for what they will tell you, unprompted, is the
              most generous Halal cooking in Southern California.
            </p>
          </div>

          <blockquote className="story-line mt-9 border-l-2 border-[hsl(38_85%_52%)] pl-5">
            <p className="font-[var(--font-display)] italic text-[1.25rem] sm:text-[1.5rem] leading-[1.25] text-[hsl(38_15%_93%)]">
              “We serve more than just meals. We offer a taste of home —
              for every family that walks through our door.”
            </p>
            <footer className="mt-3 text-sm text-[hsl(35_10%_58%)]">
              — Ahmed Abu Ali, Founder
            </footer>
          </blockquote>

          <div className="story-line mt-9">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-[hsl(38_85%_52%)] hover:text-[hsl(38_90%_62%)]"
            >
              Read the full story
              <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="story-image relative aspect-[4/5] overflow-hidden rounded-[14px] grain">
            <Image
              src={assets.interior}
              alt="The dining room of Mal Al Sham in El Cajon, California — warm low lighting, family tables."
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
              style={{ borderRadius: 0 }}
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, hsl(25 15% 6% / 0) 50%, hsl(25 15% 6% / 0.55) 100%)",
              }}
            />
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.22em] text-[hsl(35_10%_58%)]">
            388 E Main St · El Cajon · CA 92020
          </p>
        </div>
      </div>
    </section>
  );
}
