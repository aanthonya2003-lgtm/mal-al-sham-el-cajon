import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-[hsl(38_85%_52%)] text-[hsl(25_15%_6%)] hover:bg-[hsl(38_90%_62%)] hover:shadow-[0_12px_32px_-10px_hsl(38_85%_52%/0.65)]",
  ghost:
    "bg-transparent text-[hsl(38_15%_93%)] hover:bg-[hsl(38_85%_52%/0.08)]",
  outline:
    "border border-[hsl(38_60%_35%)] text-[hsl(38_15%_93%)] hover:bg-[hsl(38_85%_52%/0.08)] hover:border-[hsl(38_85%_52%)]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 tap-target select-none";

type LinkProps = CommonProps & {
  href: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  external,
  variant = "primary",
  className,
  children,
}: LinkProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, variants[variant], className)}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
