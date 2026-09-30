import type { YoutuberCategory } from "../../utils/youtuberCategories";
import { cx } from "../../utils/helpers";

interface YoutuberCategoryFilterProps {
  categories: YoutuberCategory[];
  active: string | null;
  onChange: (categoryId: string | null) => void;
  totalCount: number;
}

export function YoutuberCategoryFilter({
  categories,
  active,
  onChange,
  totalCount,
}: YoutuberCategoryFilterProps) {
  return (
    <div
      className="-mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
      role="group"
      aria-label="Filter channels by category"
    >
      <button
        type="button"
        onClick={() => onChange(null)}
        className={cx(
          "shrink-0 snap-start rounded-full px-4 py-2 text-sm font-semibold transition-colors",
          active === null
            ? "bg-teal-700 text-white"
            : "bg-white text-ink-700 shadow-soft hover:bg-teal-50",
        )}
      >
        All <span className="opacity-70">({totalCount})</span>
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => onChange(category.id)}
          className={cx(
            "shrink-0 snap-start rounded-full px-4 py-2 text-sm font-semibold transition-colors",
            active === category.id
              ? "bg-teal-700 text-white"
              : "bg-white text-ink-700 shadow-soft hover:bg-teal-50",
          )}
        >
          {category.name} <span className="opacity-70">({category.count})</span>
        </button>
      ))}
    </div>
  );
}
