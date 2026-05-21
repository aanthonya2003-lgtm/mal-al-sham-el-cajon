"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { site, telHref } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Catering" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500 pad-safe-top",
          scrolled
            ? "backdrop-blur-md bg-[hsl(25_15%_6%/0.78)] border-b border-[hsl(30_15%_18%/0.6)]"
            : "bg-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"
        >
          <Logo height={32} priority className="shrink-0" />

          <ul className="hidden md:flex items-center gap-9 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="relative inline-flex items-center transition-colors text-[hsl(38_15%_93%/0.82)] hover:text-[hsl(38_85%_62%)]"
                >
                  <span>{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={telHref}
              className="inline-flex items-center gap-2 text-sm text-[hsl(38_15%_93%/0.82)] hover:text-[hsl(38_85%_62%)] transition-colors"
            >
              <Phone size={14} aria-hidden />
              <span className="tnum">{site.contact.phone}</span>
            </a>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-full bg-[hsl(38_85%_52%)] px-5 py-2.5 text-sm font-medium text-[hsl(25_15%_6%)] transition-all hover:bg-[hsl(38_90%_62%)] hover:shadow-[0_8px_28px_-8px_hsl(38_85%_52%/0.7)]"
            >
              View Menu
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-[hsl(30_15%_18%)] text-[hsl(38_15%_93%)]"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 md:hidden bg-[hsl(25_15%_6%)] flex flex-col pt-24 pad-safe-bottom px-6"
          >
            <ul className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 + i * 0.05,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-3xl font-[var(--font-display)] italic tracking-tight border-b border-[hsl(30_15%_18%)] text-[hsl(38_15%_93%)] hover:text-[hsl(38_85%_62%)]"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto py-8 flex flex-col gap-3 text-[hsl(35_10%_58%)]">
              <a
                href={telHref}
                className="inline-flex items-center gap-2 text-base text-[hsl(38_15%_93%)]"
              >
                <Phone size={16} aria-hidden />
                <span className="tnum">{site.contact.phone}</span>
              </a>
              <p className="text-sm">{site.address.full}</p>
              <p className="text-sm">{site.hours.label}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
