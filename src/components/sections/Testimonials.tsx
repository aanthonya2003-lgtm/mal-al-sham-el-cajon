"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "@/lib/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/animations/Counter";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const selection = [
  testimonials[0],
  testimonials[2],
  testimonials[3],
  testimonials[4],
  testimonials[7],
  testimonials[8],
];

export function Testimonials() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce || !rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        y: 48,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
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
      className="relative bg-[hsl(25_15%_6%)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={
            <>
              <Counter to={3131} suffix="+" duration={1.8} /> reviews ·{" "}
              <Counter to={4.4} decimals={1} duration={1.3} />★ average
            </>
          }
          title={
            <>
              What our regulars{" "}
              <em className="italic text-[hsl(38_85%_52%)]">tell us</em>.
            </>
          }
          description="Verified reviews from Google, Yelp, Restaurantji, Eater San Diego, and Instagram tastemakers."
        />

        <div className="mt-14 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {selection.map((t, i) => (
            <figure
              key={`${t.author}-${i}`}
              className="testimonial-card group relative flex flex-col rounded-[14px] border border-[hsl(30_15%_18%)] bg-[hsl(25_12%_10%)] p-7 transition-all duration-500 hover:border-[hsl(38_60%_35%)] hover:-translate-y-[2px] hover:shadow-[0_18px_44px_-20px_hsl(38_85%_52%/0.4)]"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={13}
                    aria-hidden
                    fill="hsl(38 85% 52%)"
                    stroke="hsl(38 85% 52%)"
                  />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 font-[var(--font-display)] text-[1.1rem] sm:text-[1.2rem] leading-[1.4] text-[hsl(38_15%_93%)]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between text-xs text-[hsl(35_10%_58%)]">
                <cite className="not-italic text-[hsl(38_15%_93%/0.82)]">
                  {t.author}
                </cite>
                <span className="uppercase tracking-[0.22em]">{t.source}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-xs uppercase tracking-[0.22em] text-[hsl(35_10%_58%)]">
          <span>Google · 4.7</span>
          <span aria-hidden>·</span>
          <span>Yelp · 648 reviews · 780 photos</span>
          <span aria-hidden>·</span>
          <span>Facebook · 96% recommend</span>
          <span aria-hidden>·</span>
          <span>Restaurant Guru · 4.4</span>
        </div>
      </div>
    </section>
  );
}
