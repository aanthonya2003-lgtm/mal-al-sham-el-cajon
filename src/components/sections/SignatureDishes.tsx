"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { featuredDishes } from "@/lib/menu";
import { SectionHeading } from "@/components/ui/SectionHeading";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export function SignatureDishes() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce || !rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".dish-card", {
        scale: 0.92,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: rootRef.current!,
          start: "top 78%",
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
      className="relative bg-[hsl(25_12%_10%)] py-24 sm:py-32 border-y border-[hsl(30_15%_18%)]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="House Specials"
          title={
            <>
              Three plates that built{" "}
              <em className="italic text-[hsl(38_85%_52%)]">our reputation</em>.
            </>
          }
          description="Marinated overnight, grilled to order, plated generously. Each one is a reason our regulars drive across the county."
        />

        <div className="mt-14 grid gap-5 sm:gap-6 md:grid-cols-3">
          {featuredDishes.map((dish) => (
            <article
              key={dish.name}
              className="dish-card group relative flex flex-col overflow-hidden rounded-[14px] bg-[hsl(30_20%_13%)] border border-[hsl(30_15%_18%)] transition-all duration-500 ease-out hover:scale-[1.03] hover:border-[hsl(38_60%_35%)] hover:shadow-[0_24px_56px_-20px_hsl(38_85%_52%/0.4)]"
              style={{ willChange: "transform" }}
            >
              {dish.image ? (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    style={{ borderRadius: 0 }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 55%, hsl(25 15% 6% / 0.5) 100%)",
                    }}
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] bg-[hsl(25_15%_6%)]" />
              )}

              <div className="flex flex-1 flex-col gap-3 p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-[var(--font-display)] text-2xl leading-tight">
                    {dish.name}
                  </h3>
                  {dish.price ? (
                    <span className="tnum shrink-0 text-sm font-medium text-[hsl(38_85%_52%)]">
                      {dish.price}
                    </span>
                  ) : null}
                </div>
                <p className="text-sm leading-relaxed text-[hsl(35_10%_58%)]">
                  {dish.description}
                </p>
                {dish.servesNote ? (
                  <span className="mt-1 text-[0.7rem] uppercase tracking-[0.24em] text-[hsl(38_60%_35%)]">
                    {dish.servesNote}
                  </span>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-full border border-[hsl(38_60%_35%)] px-7 py-3.5 text-sm font-medium text-[hsl(38_15%_93%)] transition-all hover:border-[hsl(38_85%_52%)] hover:bg-[hsl(38_85%_52%/0.08)]"
          >
            See the full menu
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
