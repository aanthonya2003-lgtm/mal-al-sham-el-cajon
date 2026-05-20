import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lost in the spice market",
};

export default function NotFound() {
  return (
    <section className="relative min-h-[80dvh] flex items-center justify-center bg-[hsl(25_15%_6%)] grain px-5 sm:px-8">
      <div className="max-w-2xl text-center">
        <span className="text-[0.72rem] uppercase tracking-[0.28em] text-[hsl(38_85%_52%)]">
          404 · Page not found
        </span>
        <h1 className="mt-5 font-[var(--font-display)] text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.05]">
          Lost in the <em className="italic text-[hsl(38_85%_52%)]">spice market</em>.
        </h1>
        <p className="mt-5 text-base sm:text-lg leading-relaxed text-[hsl(38_15%_93%/0.78)]">
          The page you were looking for isn't on the menu. The hummus is,
          though. Come back to the front and start again.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[hsl(38_85%_52%)] px-7 py-3.5 text-sm font-medium text-[hsl(25_15%_6%)] transition-all hover:bg-[hsl(38_90%_62%)]"
          >
            Back home
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-full border border-[hsl(38_60%_35%)] px-7 py-3.5 text-sm text-[hsl(38_15%_93%)] transition-all hover:border-[hsl(38_85%_52%)]"
          >
            Look at the menu
          </Link>
        </div>
      </div>
    </section>
  );
}
