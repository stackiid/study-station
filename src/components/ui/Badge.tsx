import type { ReactNode } from "react";
import { cx } from "../../utils/helpers";

type BadgeTone = "teal" | "coral" | "neutral";

const tones: Record<BadgeTone, string> = {
  teal: "bg-teal-50 text-teal-700 border border-teal-100",
  coral: "bg-coral-50 text-coral-700 border border-coral-100",
  neutral: "bg-ink-900/5 text-ink-700 border border-ink-900/10",
};

export function Badge({
  children,
  tone = "teal",
  className,
}: {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
