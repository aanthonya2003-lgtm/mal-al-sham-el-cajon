import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";
import { menu } from "@/lib/menu";
import { Reveal } from "@/components/animations/Reveal";

const specials = menu.find((c) => c.id === "specials")!;

export function WeekendSpecials() {
  return (
    <section className="relative bg-[hsl(30_20%_13%)] py-24 sm:py-32 border-y border-[hsl(30_15%_18%)] overflow-hidden">
      <div
        aria-hidden
        className="pattern-arabesque absolute inset-0 opacity-[0.07]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.28em] text-[hsl(38_85%_52%)]">
            <Flame size={14} aria-hidden />
            <span>Friday – Sunday & holidays only</span>
          </div>
          <h2 className="mt-5 max-w-3xl font-[var(--font-display)] text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.04]">
            The dishes our regulars{" "}
            <em className="italic text-[hsl(38_85%_52%)]">
              plan their week around
            </em>
            .
          </h2>
          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-[hsl(38_15%_93%/0.78)]">
            We slow-cook Mansaf and roast whole-lamb Ghouzi only at the weekend.
            They go fast. Worth showing up early for.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {specials.items.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08}>
              <article className="group relative h-full rounded-[14px] border border-[hsl(38_60%_35%/0.5)] bg-[hsl(25_15%_6%/0.65)] backdrop-blur-sm p-8 transition-all duration-500 hover:border-[hsl(38_85%_52%)] hover:bg-[hsl(25_15%_6%/0.85)]">
                <span className="text-[0.7rem] uppercase tracking-[0.24em] text-[hsl(38_85%_52%)]">
                  Weekend only
                </span>
                <h3 className="mt-3 font-[var(--font-display)] text-3xl sm:text-4xl">
                  {s.name}
                </h3>
                <p className="mt-4 text-[hsl(38_15%_93%/0.82)] leading-relaxed">
                  {s.description}
                </p>
                <div
                  aria-hidden
                  className="mt-6 h-px w-12 bg-[hsl(38_85%_52%)]"
                />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/menu#specials"
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(38_85%_52%)] px-7 py-3.5 text-sm font-medium text-[hsl(25_15%_6%)] transition-all hover:bg-[hsl(38_90%_62%)]"
            >
              See weekend menu
              <ArrowRight size={16} aria-hidden />
            </Link>
            <span className="text-sm text-[hsl(35_10%_58%)]">
              Only while they last.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
