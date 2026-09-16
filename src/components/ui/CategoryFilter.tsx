import { categories } from "../../data/categories";
import { cx } from "../../utils/helpers";

interface CategoryFilterProps {
  active: string | null;
  onChange: (categoryId: string | null) => void;
  availableIds?: Set<string>;
}

export function CategoryFilter({
  active,
  onChange,
  availableIds,
}: CategoryFilterProps) {
  const visibleCategories = availableIds
    ? categories.filter((c) => availableIds.has(c.id))
    : categories;

  return (
    <div
      className="flex flex-wrap items-center justify-center gap-2"
      role="group"
      aria-label="Filter by category"
    >
      <button
        type="button"
        onClick={() => onChange(null)}
        className={cx(
          "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
          active === null
            ? "bg-teal-700 text-white"
            : "bg-white text-ink-700 shadow-soft hover:bg-teal-50",
        )}
      >
        All
      </button>
      {visibleCategories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => onChange(category.id)}
          className={cx(
            "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
            active === category.id
              ? "bg-teal-700 text-white"
              : "bg-white text-ink-700 shadow-soft hover:bg-teal-50",
          )}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
