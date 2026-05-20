import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { menu } from "@/lib/menu";
import { site, telHref } from "@/lib/site";
import { ArrowRight, Flame, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Menu — Syrian Cuisine in El Cajon",
  description:
    "The full Mal Al Sham menu — breakfast, salads, kibbeh, shawarma, mixed grill, weekend specials Mansaf & Ghouzi, and family platters serving 6 – 10.",
  alternates: { canonical: "/menu" },
  openGraph: {
    title: "The Mal Al Sham Menu",
    description:
      "Full menu: breakfast, kibbeh, shawarma, weekend Mansaf & Ghouzi, family platters.",
  },
};

export default function MenuPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative isolate pt-32 pb-16 sm:pt-40 sm:pb-20 grain bg-[hsl(25_15%_6%)] border-b border-[hsl(30_15%_18%)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <span
            className="font-[var(--font-arabic)] text-2xl text-[hsl(38_85%_52%)]"
            dir="rtl"
          >
            مال الشام
          </span>
          <h1 className="mt-3 font-[var(--font-display)] text-[clamp(2.4rem,6vw,5.2rem)] leading-[1.02]">
            Our Menu —{" "}
            <em className="italic text-[hsl(38_85%_52%)]">in full</em>.
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-[hsl(38_15%_93%/0.78)]">
            Everything we cook, written out. Skip ahead to the category you
            want — or scroll the whole story.
          </p>

          {/* Sticky category nav */}
          <nav
            aria-label="Menu categories"
            className="mt-10 flex flex-wrap gap-2"
          >
            {menu.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="inline-flex items-center rounded-full border border-[hsl(30_15%_18%)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[hsl(38_15%_93%/0.82)] transition-all hover:border-[hsl(38_60%_35%)] hover:text-[hsl(38_85%_62%)]"
              >
                {c.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Categories */}
      {menu.map((category) => {
        const isWeekend = category.id === "specials";
        return (
          <section
            key={category.id}
            id={category.id}
            className={`relative scroll-mt-24 py-20 sm:py-24 ${
              isWeekend
                ? "bg-[hsl(30_20%_13%)] border-y border-[hsl(38_60%_35%/0.3)]"
                : "bg-[hsl(25_15%_6%)] border-b border-[hsl(30_15%_18%)]"
            }`}
          >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="flex flex-col gap-3">
                <span className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.28em] text-[hsl(38_85%_52%)]">
                  {isWeekend ? <Flame size={13} aria-hidden /> : null}
                  {category.eyebrow}
                </span>
                <h2 className="font-[var(--font-display)] text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.04]">
                  {category.label}
                </h2>
                <p className="max-w-2xl text-base text-[hsl(38_15%_93%/0.78)] leading-relaxed">
                  {category.blurb}
                </p>
              </div>

              <div className="mt-12 grid gap-x-10 gap-y-12 lg:grid-cols-2">
                {category.items.map((item) => (
                  <article
                    key={item.name}
                    className="group flex gap-5 sm:gap-7"
                  >
                    {item.image ? (
                      <div className="relative aspect-square w-24 sm:w-32 shrink-0 overflow-hidden rounded-[10px]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(min-width: 640px) 128px, 96px"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                          style={{ borderRadius: 0 }}
                        />
                      </div>
                    ) : null}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-4 border-b border-dotted border-[hsl(30_15%_18%)] pb-2">
                        <h3 className="font-[var(--font-display)] text-xl sm:text-2xl text-[hsl(38_15%_93%)]">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          {item.servesNote ? (
                            <span className="hidden sm:inline-block text-[0.7rem] uppercase tracking-[0.22em] text-[hsl(38_60%_35%)]">
                              {item.servesNote}
                            </span>
                          ) : null}
                          {item.price ? (
                            <span className="tnum text-sm font-medium text-[hsl(38_85%_52%)]">
                              {item.price}
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-[hsl(35_10%_58%)]">
                        {item.description}
                      </p>
                      {item.servesNote ? (
                        <span className="mt-2 inline-block sm:hidden text-[0.7rem] uppercase tracking-[0.22em] text-[hsl(38_60%_35%)]">
                          {item.servesNote}
                        </span>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <section className="relative bg-[hsl(25_15%_6%)] py-24 sm:py-28 border-t border-[hsl(30_15%_18%)]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="font-[var(--font-display)] text-[clamp(1.75rem,3.6vw,2.6rem)] leading-[1.1]">
            Hungry yet?{" "}
            <em className="italic text-[hsl(38_85%_52%)]">
              We're open until 10 PM.
            </em>
          </h2>
          <p className="mt-5 text-base text-[hsl(35_10%_58%)] leading-relaxed">
            Pickup, delivery, or a table at 388 E Main — we'll have it ready.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={telHref}
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(38_85%_52%)] px-7 py-3.5 text-sm font-medium text-[hsl(25_15%_6%)] transition-all hover:bg-[hsl(38_90%_62%)]"
            >
              <Phone size={14} aria-hidden />
              <span className="tnum">{site.contact.phone}</span>
            </a>
            <Link
              href="/catering"
              className="inline-flex items-center gap-2 rounded-full border border-[hsl(38_60%_35%)] px-7 py-3.5 text-sm text-[hsl(38_15%_93%)] transition-all hover:border-[hsl(38_85%_52%)]"
            >
              Catering trays
              <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
