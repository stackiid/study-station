import { cx } from "../../utils/helpers";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97]";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-coral-500 text-white shadow-soft hover:bg-coral-600 hover:shadow-lift focus-visible:outline-coral-600",
  secondary:
    "bg-teal-700 text-white shadow-soft hover:bg-teal-800 hover:shadow-lift focus-visible:outline-teal-700",
  outline:
    "border-2 border-teal-700/20 text-teal-800 bg-white hover:border-teal-700/40 hover:bg-teal-50 focus-visible:outline-teal-700",
  ghost: "text-teal-800 hover:bg-teal-700/8 focus-visible:outline-teal-700",
};

const sizes: Record<ButtonSize, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-[0.95rem] px-5 py-2.5",
  lg: "text-base px-7 py-3.5",
};

export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
): string {
  return cx(base, variants[variant], sizes[size], className);
}
