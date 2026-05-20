import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Users } from "lucide-react";
import { assets, site, telHref } from "@/lib/site";
import { Reveal } from "@/components/animations/Reveal";

export function CateringCTA() {
  return (
    <section className="relative bg-[hsl(30_20%_13%)] border-y border-[hsl(30_15%_18%)] overflow-hidden">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 items-stretch">
        <div className="relative min-h-[320px] lg:min-h-[520px]">
          <Image
            src={assets.kebab}
            alt="Mixed grill platter at Mal Al Sham — beef kabob, chicken kabob, tikka skewers, rice"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            style={{ borderRadius: 0 }}
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent 40%, hsl(30 20% 13%) 100%)",
            }}
          />
        </div>

        <div className="px-5 sm:px-10 py-16 lg:py-24 flex flex-col justify-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.28em] text-[hsl(38_85%_52%)]">
              <Users size={13} aria-hidden />
              Catering & Family Trays
            </span>
            <h2 className="mt-5 font-[var(--font-display)] text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.04]">
              Feeding a crowd?{" "}
              <em className="italic text-[hsl(38_85%_52%)]">
                We feed it the Damascene way.
              </em>
            </h2>
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[hsl(38_15%_93%/0.82)]">
              From a Basmati Chicken Tray for six to a full Mansaf Lamb Platter
              for ten — our family-size platters feed your table for the price
              two would pay at the restaurant next door.
            </p>
            <ul className="mt-7 space-y-2.5 text-sm text-[hsl(38_15%_93%/0.85)]">
              <li className="flex gap-2">
                <span
                  className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[hsl(38_85%_52%)]"
                  aria-hidden
                />
                Basmati Chicken Tray — serves 6
              </li>
              <li className="flex gap-2">
                <span
                  className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[hsl(38_85%_52%)]"
                  aria-hidden
                />
                Mansaf Lamb Platter — serves 10
              </li>
              <li className="flex gap-2">
                <span
                  className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[hsl(38_85%_52%)]"
                  aria-hidden
                />
                Mega Combo for 5 – 6, fully loaded
              </li>
            </ul>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/catering"
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(38_85%_52%)] px-7 py-3.5 text-sm font-medium text-[hsl(25_15%_6%)] transition-all hover:bg-[hsl(38_90%_62%)]"
              >
                Plan your event
                <ArrowRight size={16} aria-hidden />
              </Link>
              <a
                href={telHref}
                className="inline-flex items-center gap-2 rounded-full border border-[hsl(38_60%_35%)] px-7 py-3.5 text-sm text-[hsl(38_15%_93%)] transition-all hover:border-[hsl(38_85%_52%)]"
              >
                <Phone size={14} aria-hidden />
                <span className="tnum">{site.contact.phone}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
