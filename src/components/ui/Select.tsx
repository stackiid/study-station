import { useId, useRef, useState, type KeyboardEvent } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { cx } from "../../utils/helpers";

export interface SelectOption<T extends string> {
  value: T;
  label: string;
}

interface SelectProps<T extends string> {
  value: T;
  onChange: (value: T) => void;
  options: SelectOption<T>[];
  "aria-label": string;
  className?: string;
}

export function Select<T extends string>({
  value,
  onChange,
  options,
  className,
  ...rest
}: SelectProps<T>) {
  const ariaLabel = rest["aria-label"];
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  const selectedIndex = Math.max(
    0,
    options.findIndex((option) => option.value === value),
  );
  const selected = options[selectedIndex];

  useClickOutside(containerRef, () => setOpen(false), open);

  function openList() {
    setOpen(true);
    setActiveIndex(selectedIndex);
  }

  function commit(index: number) {
    const option = options[index];
    if (option) onChange(option.value);
    setOpen(false);
    buttonRef.current?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (!open) openList();
        else setActiveIndex((index) => Math.min(index + 1, options.length - 1));
        break;
      case "ArrowUp":
        event.preventDefault();
        if (!open) openList();
        else setActiveIndex((index) => Math.max(index - 1, 0));
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        if (!open) openList();
        else commit(activeIndex);
        break;
      case "Escape":
        if (open) {
          event.preventDefault();
          setOpen(false);
        }
        break;
      case "Tab":
        setOpen(false);
        break;
      default:
        break;
    }
  }

  return (
    <div ref={containerRef} className={cx("relative", className)}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        aria-activedescendant={open ? `${listId}-${activeIndex}` : undefined}
        className="select-field flex w-full items-center justify-between gap-2 rounded-lg border border-ink-900/10 bg-white py-1.5 pl-3 text-sm text-ink-900 transition-colors hover:border-teal-500/40 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
      >
        <span className="truncate">{selected?.label}</span>
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label={ariaLabel}
          className="absolute right-0 z-20 mt-2 w-full min-w-[11rem] overflow-hidden rounded-xl border border-ink-900/10 bg-white py-1.5 shadow-lift"
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              id={`${listId}-${index}`}
              role="option"
              aria-selected={option.value === value}
            >
              <button
                type="button"
                tabIndex={-1}
                onClick={() => commit(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className={cx(
                  "flex w-full items-center justify-between gap-2 px-3.5 py-2 text-left text-sm transition-colors",
                  index === activeIndex
                    ? "bg-teal-50 text-teal-800"
                    : "text-ink-700 hover:bg-teal-50/60",
                )}
              >
                {option.label}
                {option.value === value && (
                  <i
                    className="fa-solid fa-check text-xs text-teal-600"
                    aria-hidden="true"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
