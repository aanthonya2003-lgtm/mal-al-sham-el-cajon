import type { Metadata } from "next";
import Image from "next/image";
import { menu } from "@/lib/menu";
import { assets, site, telHref, mailtoHref } from "@/lib/site";
import { Reveal } from "@/components/animations/Reveal";
import { Phone, Mail, ArrowUpRight, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Catering & Family Platters — Syrian Catering in El Cajon",
  description:
    "Family trays and party platters from Mal Al Sham — Basmati Chicken Tray (6), Mansaf Lamb Platter (10), Mega Combo (5 – 6). Call (619) 401-1055 to order ahead.",
  alternates: { canonical: "/catering" },
};

const platters = menu.find((c) => c.id === "platters")!;

const steps = [
  {
    n: "01",
    title: "Call or message",
    body: "Phone (619) 401-1055 or message us on WhatsApp. Tell us the headcount, the date, the dishes — we'll handle the math.",
  },
  {
    n: "02",
    title: "We cook the day-of",
    body: "Trays are prepared fresh — never reheated, never pre-portioned. We schedule against your pickup time.",
  },
  {
    n: "03",
    title: "Pickup or delivery",
    body: "Pickup at 388 E Main St, or local delivery to most of East County. Trays come hot, packed, and labeled.",
  },
];

export default function CateringPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[60dvh] grain pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 -z-10">
          <Image
            src={assets.kebab}
            alt="Mixed grill platter — beef kabob, chicken kabob, tikka, shawarma"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ borderRadius: 0 }}
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, hsl(25 15% 6% / 0.65), hsl(25 15% 6% / 0.96))",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <span className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.28em] text-[hsl(38_85%_52%)]">
            <Users size={13} aria-hidden /> Catering
          </span>
          <h1 className="mt-5 max-w-4xl font-[var(--font-display)] text-[clamp(2.4rem,6vw,5rem)] leading-[1.02]">
            Feed your crew —{" "}
            <em className="italic text-[hsl(38_85%_52%)]">Syrian style</em>.
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[hsl(38_15%_93%/0.78)]">
            Family trays for six. Whole-lamb platters for ten. Mega combos for
            the office. Wedding-tier feasts on twenty-four hours' notice.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={telHref}
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(38_85%_52%)] px-7 py-3.5 text-sm font-medium text-[hsl(25_15%_6%)] transition-all hover:bg-[hsl(38_90%_62%)]"
            >
              <Phone size={14} aria-hidden />
              <span className="tnum">Call {site.contact.phone}</span>
            </a>
            <a
              href={mailtoHref}
              className="inline-flex items-center gap-2 rounded-full border border-[hsl(38_60%_35%)] px-7 py-3.5 text-sm text-[hsl(38_15%_93%)] transition-all hover:border-[hsl(38_85%_52%)]"
            >
              <Mail size={14} aria-hidden />
              {site.contact.email}
            </a>
          </div>
        </div>
      </section>

      {/* Platters list */}
      <section className="bg-[hsl(25_15%_6%)] py-24 sm:py-32 border-b border-[hsl(30_15%_18%)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="text-[0.72rem] uppercase tracking-[0.28em] text-[hsl(38_85%_52%)]">
              The platters
            </span>
            <h2 className="mt-4 font-[var(--font-display)] text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.04]">
              Choose your <em className="italic text-[hsl(38_85%_52%)]">spread</em>.
            </h2>
            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-[hsl(38_15%_93%/0.78)]">
              Prices on request — quoted by the platter, not by the head.
              Tell us your headcount and we'll match it.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {platters.items.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 0.07}>
                <article className="h-full rounded-[14px] border border-[hsl(30_15%_18%)] bg-[hsl(25_12%_10%)] p-7 transition-all duration-500 hover:border-[hsl(38_60%_35%)]">
                  <span className="text-[0.7rem] uppercase tracking-[0.24em] text-[hsl(38_60%_35%)]">
                    {p.servesNote}
                  </span>
                  <h3 className="mt-3 font-[var(--font-display)] text-2xl text-[hsl(38_15%_93%)]">
                    {p.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[hsl(35_10%_58%)]">
                    {p.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[hsl(30_20%_13%)] py-24 sm:py-32 border-b border-[hsl(30_15%_18%)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="text-[0.72rem] uppercase tracking-[0.28em] text-[hsl(38_85%_52%)]">
              How it works
            </span>
            <h2 className="mt-4 font-[var(--font-display)] text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.04]">
              Three steps.{" "}
              <em className="italic text-[hsl(38_85%_52%)]">That's the whole thing.</em>
            </h2>
          </Reveal>

          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <li className="rounded-[14px] border border-[hsl(30_15%_18%)] bg-[hsl(25_15%_6%)] p-8">
                  <span className="tnum text-[0.7rem] uppercase tracking-[0.28em] text-[hsl(38_85%_52%)]">
                    {s.n}
                  </span>
                  <h3 className="mt-3 font-[var(--font-display)] text-2xl text-[hsl(38_15%_93%)]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[hsl(35_10%_58%)]">
                    {s.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[hsl(25_15%_6%)] py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="font-[var(--font-display)] text-[clamp(1.75rem,3.6vw,2.6rem)] leading-[1.1]">
            Ready to plan?{" "}
            <em className="italic text-[hsl(38_85%_52%)]">
              Let's put it together.
            </em>
          </h2>
          <p className="mt-5 text-base text-[hsl(35_10%_58%)] leading-relaxed">
            We respond to inquiries within the same business day.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={telHref}
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(38_85%_52%)] px-7 py-3.5 text-sm font-medium text-[hsl(25_15%_6%)] transition-all hover:bg-[hsl(38_90%_62%)]"
            >
              <Phone size={14} aria-hidden />
              <span className="tnum">{site.contact.phone}</span>
            </a>
            <a
              href={mailtoHref}
              className="inline-flex items-center gap-2 rounded-full border border-[hsl(38_60%_35%)] px-7 py-3.5 text-sm text-[hsl(38_15%_93%)] transition-all hover:border-[hsl(38_85%_52%)]"
            >
              <ArrowUpRight size={14} aria-hidden />
              {site.contact.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
