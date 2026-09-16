import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { cx } from "../../utils/helpers";

interface SearchInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  onClear?: () => void;
  size?: "md" | "lg";
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ value, onClear, size = "md", className, ...rest }, ref) => {
    return (
      <div className={cx("relative flex items-center w-full", className)}>
        <i
          className="fa-solid fa-magnifying-glass absolute left-4 sm:left-5 text-ink-300 pointer-events-none"
          aria-hidden="true"
        />
        <input
          ref={ref}
          type="text"
          value={value}
          autoComplete="off"
          spellCheck={false}
          className={cx(
            "w-full rounded-full border border-ink-900/10 bg-white text-ink-900 placeholder:text-ink-300 shadow-soft transition-all",
            "focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/12",
            size === "lg"
              ? "pl-11 sm:pl-13 pr-11 py-4 text-base"
              : "pl-10 sm:pl-11 pr-10 py-2.5 text-sm",
          )}
          {...rest}
        />
        {typeof value === "string" && value.length > 0 && onClear && (
          <button
            type="button"
            onClick={onClear}
            aria-label="Clear search"
            className="absolute right-3.5 sm:right-4 text-ink-300 hover:text-ink-700 transition-colors p-1.5 rounded-full hover:bg-ink-900/5"
          >
            <i className="fa-solid fa-xmark" aria-hidden="true" />
          </button>
        )}
      </div>
    );
  },
);

SearchInput.displayName = "SearchInput";
