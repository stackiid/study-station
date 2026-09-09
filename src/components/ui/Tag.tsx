import { cx } from "../../utils/helpers";

export function Tag({
  children,
  className,
  as: Component = "span",
}: {
  children: string;
  className?: string;
  as?: "span" | "button";
}) {
  return (
    <Component
      className={cx(
        "inline-flex items-center rounded-full bg-ink-900/[0.04] px-2.5 py-1 text-[0.72rem] font-medium text-ink-700 hover:bg-ink-900/[0.08] transition-colors",
        className,
      )}
    >
      {children}
    </Component>
  );
}
