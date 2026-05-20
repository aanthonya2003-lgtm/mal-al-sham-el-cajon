import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";
import { site, telHref, mailtoHref } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Catering" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const YelpMark = ({ size = 14 }: { size?: number }) => (
  <span
    aria-hidden
    className="font-[var(--font-display)] italic font-bold leading-none"
    style={{ fontSize: size, letterSpacing: "-0.02em" }}
  >
    Y
  </span>
);

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-[hsl(30_15%_18%)] bg-[hsl(25_15%_6%)] pad-safe-bottom">
      <div className="pattern-arabesque h-px opacity-60" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="inline-block">
            <span className="font-[var(--font-display)] italic text-[1.75rem] tracking-tight">
              Mal Al Sham
            </span>
            <span
              className="block font-[var(--font-arabic)] text-lg text-[hsl(38_85%_52%)] mt-1"
              dir="rtl"
            >
              {site.arabicName}
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-[hsl(35_10%_58%)]">
            Serving authentic Syrian &amp; Mediterranean cuisine in El Cajon
            since 2018. Built by the Abu Ali family — recipes brought from
            Damascus, plated for the people of San Diego County.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mal Al Sham on Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(30_15%_18%)] text-[hsl(38_15%_93%)] transition-all hover:text-[hsl(38_85%_62%)] hover:border-[hsl(38_60%_35%)]"
            >
              <Instagram size={16} aria-hidden />
            </a>
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mal Al Sham on Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(30_15%_18%)] text-[hsl(38_15%_93%)] transition-all hover:text-[hsl(38_85%_62%)] hover:border-[hsl(38_60%_35%)]"
            >
              <Facebook size={16} aria-hidden />
            </a>
            <a
              href={site.socials.yelp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mal Al Sham on Yelp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(30_15%_18%)] text-[hsl(38_15%_93%)] transition-all hover:text-[hsl(38_85%_62%)] hover:border-[hsl(38_60%_35%)]"
            >
              <YelpMark size={14} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[hsl(35_10%_58%)]">
            Visit
          </p>
          <ul className="mt-4 space-y-3 text-sm text-[hsl(38_15%_93%/0.85)]">
            <li className="flex gap-2.5">
              <MapPin
                size={15}
                aria-hidden
                className="mt-0.5 text-[hsl(38_60%_35%)] shrink-0"
              />
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(38_85%_62%)]"
              >
                {site.address.full}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Phone
                size={15}
                aria-hidden
                className="mt-0.5 text-[hsl(38_60%_35%)] shrink-0"
              />
              <a href={telHref} className="tnum hover:text-[hsl(38_85%_62%)]">
                {site.contact.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail
                size={15}
                aria-hidden
                className="mt-0.5 text-[hsl(38_60%_35%)] shrink-0"
              />
              <a
                href={mailtoHref}
                className="hover:text-[hsl(38_85%_62%)]"
              >
                {site.contact.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Clock
                size={15}
                aria-hidden
                className="mt-0.5 text-[hsl(38_60%_35%)] shrink-0"
              />
              <span>{site.hours.label}</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[hsl(35_10%_58%)]">
            Site
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-[hsl(38_15%_93%/0.85)]">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-[hsl(38_85%_62%)]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[hsl(35_10%_58%)]">
            Recognition
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-[hsl(38_15%_93%/0.85)]">
            {site.press.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-[hsl(35_10%_58%)]">
            We accept Apple Pay, Google Pay, Visa, Mastercard, Discover, JCB,
            PayPal. Wheelchair-accessible entrance, seating, parking, restroom.
          </p>
        </div>
      </div>

      <div className="border-t border-[hsl(30_15%_18%)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[hsl(35_10%_58%)]">
          <p>
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/menu" className="hover:text-[hsl(38_85%_62%)]">
              Menu
            </Link>
            <Link href="/about" className="hover:text-[hsl(38_85%_62%)]">
              About
            </Link>
            <Link href="/contact" className="hover:text-[hsl(38_85%_62%)]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
