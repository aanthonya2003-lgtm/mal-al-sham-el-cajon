"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { menu } from "@/lib/menu";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";

const previewCategories = menu.filter(
  (c) => c.id !== "platters" && c.id !== "specials",
);

export function MenuPreview() {
  const [active, setActive] = useState(previewCategories[0].id);
  const current = previewCategories.find((c) => c.id === active)!;

  return (
    <section className="relative bg-[hsl(25_15%_6%)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="The Menu"
            title={
              <>
                A small look at{" "}
                <em className="italic text-[hsl(38_85%_52%)]">what we cook</em>.
              </>
            }
            description="Breakfast, mezze, kibbeh, and a long list of grills. Pick a category — the full menu is one click further."
          />
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 self-start text-sm uppercase tracking-[0.22em] text-[hsl(38_85%_52%)] hover:text-[hsl(38_90%_62%)]"
          >
            See the full menu
            <ArrowRight size={14} aria-hidden />
          </Link>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Menu categories"
          className="mt-12 flex flex-wrap gap-2 border-b border-[hsl(30_15%_18%)] pb-1"
        >
          {previewCategories.map((c) => {
            const isActive = c.id === active;
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(c.id)}
                className="relative px-4 py-3 text-sm uppercase tracking-[0.18em] transition-colors"
              >
                <span
                  className={
                    isActive
                      ? "text-[hsl(38_85%_52%)]"
                      : "text-[hsl(38_15%_93%/0.6)] hover:text-[hsl(38_15%_93%)]"
                  }
                >
                  {c.label}
                </span>
                {isActive ? (
                  <motion.span
                    layoutId="menu-underline"
                    className="absolute inset-x-2 -bottom-px h-px bg-[hsl(38_85%_52%)]"
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 30,
                    }}
                  />
                ) : null}
              </button>
            );
          })}
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid gap-6 md:grid-cols-2"
          >
            {current.items.slice(0, 6).map((item) => (
              <article
                key={item.name}
                className="group flex justify-between gap-6 border-b border-[hsl(30_15%_18%)] pb-6"
              >
                <div className="min-w-0">
                  <h3 className="font-[var(--font-display)] text-xl text-[hsl(38_15%_93%)]">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[hsl(35_10%_58%)]">
                    {item.description}
                  </p>
                </div>
                {item.price ? (
                  <span className="tnum shrink-0 self-start text-sm font-medium text-[hsl(38_85%_52%)]">
                    {item.price}
                  </span>
                ) : null}
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
