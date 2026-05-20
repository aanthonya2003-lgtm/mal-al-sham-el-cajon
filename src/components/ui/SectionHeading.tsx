import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-[0.72rem] uppercase tracking-[0.28em] text-[hsl(38_85%_52%)]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-[var(--font-display)] text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] text-[hsl(38_15%_93%)]">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-[hsl(35_10%_58%)] text-base sm:text-lg leading-relaxed",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
