import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { assets, site } from "@/lib/site";
import { Reveal } from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Our Story — From Damascus to El Cajon",
  description:
    "The Abu Ali family brought their generations-old Syrian recipes to El Cajon in 2016 and opened Mal Al Sham in 2018. This is their story.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    eyebrow: "Authentic",
    title: "Recipes from Damascus",
    body: "The blends, the bulgur, the bread — every dish on our menu is a recipe carried by the Abu Ali family across continents.",
  },
  {
    eyebrow: "Halal",
    title: "100% certified",
    body: "Every cut of meat, every stock, every sauce. Halal isn't a feature here — it's the floor we built the kitchen on.",
  },
  {
    eyebrow: "Family",
    title: "Owned, run, served by the family",
    body: "When the owner — dad — is on the floor, food gets out hotter and welcomes get warmer. That's not a marketing line.",
  },
  {
    eyebrow: "Community",
    title: "Free hot chai, every visit",
    body: "An old Damascene habit we don't intend to break. Hospitality is a verb here.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[hsl(25_15%_6%)] pt-32 sm:pt-40 pb-20 border-b border-[hsl(30_15%_18%)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-end">
          <div>
            <span className="text-[0.72rem] uppercase tracking-[0.28em] text-[hsl(38_85%_52%)]">
              Our Story
            </span>
            <h1 className="mt-5 font-[var(--font-display)] text-[clamp(2.4rem,6vw,5.2rem)] leading-[1.02]">
              From Damascus to El Cajon,{" "}
              <em className="italic text-[hsl(38_85%_52%)]">
                with our recipes intact.
              </em>
            </h1>
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-[hsl(38_15%_93%/0.82)]">
            In 2016, the Abu Ali family left Syria for California. In 2018, on
            East Main Street, they opened the restaurant they'd been
            rehearsing for a lifetime.
          </p>
        </div>
      </section>

      {/* Narrative */}
      <section className="bg-[hsl(25_15%_6%)] py-24 sm:py-32 border-b border-[hsl(30_15%_18%)]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 grid gap-12">
          <Reveal>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] grain">
              <Image
                src={assets.interior}
                alt="The dining room at Mal Al Sham — warm lighting, family seating, Damascene patterns on the wall."
                fill
                sizes="(min-width: 768px) 70vw, 100vw"
                className="object-cover"
                style={{ borderRadius: 0 }}
              />
            </div>
          </Reveal>

          <article className="prose prose-invert max-w-none space-y-7 text-[hsl(38_15%_93%/0.86)] text-lg leading-relaxed">
            <Reveal>
              <p className="font-[var(--font-display)] italic text-2xl sm:text-3xl leading-[1.3] text-[hsl(38_15%_93%)]">
                Before there was a restaurant on East Main Street, there were
                three generations of Syrian cooks, and a wholesale business
                back home that the war finally took.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                Mr. <strong className="text-[hsl(38_85%_52%)]">Ahmed Abu Ali</strong>{" "}
                arrived in California in 2016 with his family, the way most
                Syrian families had arrived in the years before — without much
                more than what they could carry. What he carried in his head,
                though, was specific: the spice ratios for kibbeh; the
                temperature for a shawarma rotisserie that's been doing its
                job long enough to know how to do its job; the rhythm of a
                Damascene Sunday lunch.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Two years of saving and looking later, the family signed the
                lease on a small storefront at 388 E Main St. They opened the
                doors of <em>Mal Al Sham — The Taste of Damascus</em>{" "}
                in 2018, with a printed menu, a hot kettle of chai for every
                guest who walked in, and one belief: that the food of
                Damascus belongs wherever Damascene hands can cook it.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Seven years on, the kettle is still on. The chai is still
                free. Our regulars drive in from Chula Vista, La Jolla, and
                San Diego proper — some of them so often that the staff know
                the order before the door closes behind them.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <blockquote className="border-l-2 border-[hsl(38_85%_52%)] pl-6 not-italic">
                <p className="font-[var(--font-display)] italic text-2xl leading-[1.3] text-[hsl(38_15%_93%)]">
                  “We serve more than just meals. We offer a taste of home —
                  for every family that walks through our door.”
                </p>
                <footer className="mt-3 text-sm text-[hsl(35_10%_58%)] uppercase tracking-[0.2em]">
                  — Ahmed Abu Ali · Founder
                </footer>
              </blockquote>
            </Reveal>
          </article>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[hsl(25_12%_10%)] py-24 sm:py-32 border-b border-[hsl(30_15%_18%)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="text-[0.72rem] uppercase tracking-[0.28em] text-[hsl(38_85%_52%)]">
              What we believe
            </span>
            <h2 className="mt-4 font-[var(--font-display)] text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.04]">
              Four things we won't{" "}
              <em className="italic text-[hsl(38_85%_52%)]">compromise on</em>.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:gap-6 md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 0.08}>
                <article className="rounded-[14px] border border-[hsl(30_15%_18%)] bg-[hsl(25_15%_6%)] p-8 h-full">
                  <span className="text-[0.7rem] uppercase tracking-[0.24em] text-[hsl(38_85%_52%)]">
                    {v.eyebrow}
                  </span>
                  <h3 className="mt-3 font-[var(--font-display)] text-2xl text-[hsl(38_15%_93%)]">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[hsl(35_10%_58%)]">
                    {v.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="bg-[hsl(25_15%_6%)] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="text-[0.72rem] uppercase tracking-[0.28em] text-[hsl(38_85%_52%)]">
              As featured in
            </span>
            <h2 className="mt-4 font-[var(--font-display)] text-[clamp(2rem,4.2vw,3rem)] leading-[1.04] max-w-3xl">
              People who tasted the food, and{" "}
              <em className="italic text-[hsl(38_85%_52%)]">wrote it down</em>.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {site.press.map((p) => (
              <div
                key={p}
                className="rounded-[10px] border border-[hsl(30_15%_18%)] bg-[hsl(25_12%_10%)] p-6"
              >
                <p className="font-[var(--font-display)] text-lg text-[hsl(38_15%_93%)]">
                  {p}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(38_85%_52%)] px-7 py-3.5 text-sm font-medium text-[hsl(25_15%_6%)] transition-all hover:bg-[hsl(38_90%_62%)]"
            >
              See the menu
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
