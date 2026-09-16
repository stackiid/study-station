import { cx } from "../../utils/helpers";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "h-6 w-6 border-2",
  md: "h-11 w-11 border-[3px]",
  lg: "h-14 w-14 border-4",
};

export function Spinner({ size = "md", className }: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={cx(
        "inline-block rounded-full border-teal-700/15 border-t-coral-500 animate-spin motion-reduce:animate-none",
        sizes[size],
        className,
      )}
    />
  );
}
