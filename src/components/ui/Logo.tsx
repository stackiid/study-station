import { Link } from "react-router-dom";
import { LogoMark } from "./LogoMark";
import { site } from "../../data/site";
import { cx } from "../../utils/helpers";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className }: LogoProps) {
  return (
    <Link
      to="/"
      className={cx("flex items-center gap-2.5 shrink-0 group", className)}
      aria-label={`${site.name} home`}
    >
      <LogoMark className="h-10 w-auto sm:h-11 object-contain transition-transform duration-300 group-hover:-rotate-3" />
      <span
        className={cx(
          "font-display font-bold text-lg sm:text-xl tracking-tight leading-none",
          variant === "dark" ? "text-teal-900" : "text-white",
        )}
      >
        {site.name}
      </span>
    </Link>
  );
}
