import type { ReactNode } from "react";
import { cx } from "../../utils/helpers";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "center", className }: SectionHeadingProps) {
  return (
    <div className={cx(align === "center" ? "text-center mx-auto" : "text-left", "max-w-2xl", className)}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-coral-600 mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-coral-500" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-teal-900 text-balance">{title}</h2>
      {description && <p className="mt-4 text-ink-500 text-base sm:text-lg leading-relaxed text-balance">{description}</p>}
    </div>
  );
}
