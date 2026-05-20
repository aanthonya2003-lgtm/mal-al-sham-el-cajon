"use client";

import { Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/lib/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";

const selection = [
  testimonials[0],
  testimonials[2],
  testimonials[3],
  testimonials[4],
  testimonials[7],
  testimonials[8],
];

export function Testimonials() {
  const reduce = useReducedMotion();
  return (
    <section className="relative bg-[hsl(25_15%_6%)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="3,131+ reviews · 4.4★ average"
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
            <motion.figure
              key={`${t.author}-${i}`}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col rounded-[14px] border border-[hsl(30_15%_18%)] bg-[hsl(25_12%_10%)] p-7 transition-all duration-500 hover:border-[hsl(38_60%_35%)]"
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
            </motion.figure>
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
