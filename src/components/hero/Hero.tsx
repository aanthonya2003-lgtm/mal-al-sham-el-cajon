"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Star } from "lucide-react";
import { assets, site } from "@/lib/site";
import { Counter } from "@/components/animations/Counter";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

// Avoid useLayoutEffect SSR warning while still using it on the client
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce || !rootRef.current || !headlineRef.current) return;

    const headline = headlineRef.current;
    const split = new SplitType(headline, {
      types: "words,chars",
      tagName: "span",
    });

    const ctx = gsap.context(() => {
      // Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(
        ".hero-image",
        { opacity: 0, scale: 1.08, duration: 1.5 },
        0,
      )
        .from(
          ".hero-eyebrow",
          { opacity: 0, y: 16, duration: 0.7 },
          0.25,
        )
        .from(
          split.chars,
          {
            opacity: 0,
            y: 80,
            rotateX: -45,
            duration: 0.9,
            stagger: 0.025,
            ease: "power4.out",
            transformOrigin: "0% 50% -50",
          },
          0.35,
        )
        .from(
          ".hero-sub",
          { opacity: 0, y: 16, duration: 0.7 },
          "-=0.4",
        )
        .from(
          ".hero-cta",
          { opacity: 0, y: 14, duration: 0.6 },
          "-=0.3",
        )
        .from(
          ".hero-meta",
          { opacity: 0, y: 12, duration: 0.6 },
          "-=0.35",
        );

      // Parallax image — scrub, bidirectional automatically
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current!,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    }, rootRef);

    return () => {
      ctx.revert();
      split.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative isolate min-h-[100dvh] grain overflow-hidden"
      aria-label="Welcome to Mal Al Sham"
    >
      {/* Background image */}
      <div
        ref={imageRef}
        className="hero-image absolute inset-0 -z-10 will-change-transform"
      >
        <Image
          src={assets.interior}
          alt="Mal Al Sham — warm Damascene interior at dusk"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
          style={{ borderRadius: 0 }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(25 15% 6% / 0.55) 0%, hsl(25 15% 6% / 0.78) 55%, hsl(25 15% 6% / 0.96) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-end px-5 pt-32 pb-20 sm:px-8 sm:pb-28">
        <div className="max-w-4xl">
          <span className="hero-eyebrow inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.28em] text-[hsl(38_85%_52%)]">
            <span
              className="font-[var(--font-arabic)] text-base normal-case tracking-normal text-[hsl(38_85%_52%)]"
              dir="rtl"
            >
              {site.arabicName}
            </span>
            <span aria-hidden className="text-[hsl(38_60%_35%)]">
              ·
            </span>
            <span>Since 2018 · El Cajon, California</span>
          </span>

          <h1
            ref={headlineRef}
            className="hero-headline mt-6 font-[var(--font-display)] text-[clamp(2.6rem,7.2vw,6.2rem)] leading-[0.98] tracking-[-0.015em]"
          >
            The Taste of Damascus,
            <br />
            <em className="italic text-[hsl(38_85%_52%)]">served</em> in El Cajon.
          </h1>

          <p className="hero-sub mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-[hsl(38_15%_93%/0.78)]">
            100% Halal Syrian cuisine. Generations-old recipes brought here
            from Damascus by the Abu Ali family. Open seven days a week, the
            way home should be.
          </p>

          <div className="hero-cta mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(38_85%_52%)] px-7 py-3.5 text-sm font-medium text-[hsl(25_15%_6%)] transition-all hover:bg-[hsl(38_90%_62%)] hover:shadow-[0_16px_40px_-12px_hsl(38_85%_52%/0.65)]"
            >
              View the Menu
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link
              href="/catering"
              className="inline-flex items-center gap-2 rounded-full border border-[hsl(38_60%_35%)] px-7 py-3.5 text-sm font-medium text-[hsl(38_15%_93%)] transition-all hover:border-[hsl(38_85%_52%)] hover:bg-[hsl(38_85%_52%/0.08)]"
            >
              Order for a Crowd
            </Link>
          </div>

          <div className="hero-meta mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.22em] text-[hsl(38_15%_93%/0.72)]">
            <span className="inline-flex items-center gap-2">
              <Star
                size={13}
                aria-hidden
                fill="hsl(38 85% 52%)"
                stroke="hsl(38 85% 52%)"
              />
              <Counter to={1500} suffix="+" duration={1.6} delay={1.5} />
              <span>five-star reviews</span>
            </span>
            <span className="hidden sm:inline-block h-3 w-px bg-[hsl(30_15%_18%)]" />
            <span>100% Halal</span>
            <span className="hidden sm:inline-block h-3 w-px bg-[hsl(30_15%_18%)]" />
            <span>Open 9 AM – 10 PM</span>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.32em] text-[hsl(38_15%_93%/0.45)] hidden sm:block"
      >
        Scroll
      </div>
    </section>
  );
}
