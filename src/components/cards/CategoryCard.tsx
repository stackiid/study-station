import { Link } from "react-router-dom";
import type { Category } from "../../types";

export function CategoryCard({
  category,
  count,
}: {
  category: Category;
  count: number;
}) {
  return (
    <Link
      to={`/courses?category=${category.id}`}
      data-reveal
      className="group flex flex-col items-start gap-3 rounded-[var(--radius-card)] bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:bg-teal-700 h-full"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 text-lg transition-colors group-hover:bg-white/15 group-hover:text-white">
        <i className={category.icon} aria-hidden="true" />
      </span>
      <div>
        <h3 className="font-display text-base font-bold text-teal-900 transition-colors group-hover:text-white">
          {category.name}
        </h3>
        <p className="mt-1 text-sm text-ink-500 transition-colors group-hover:text-teal-50/80">
          {category.description}
        </p>
      </div>
      <span className="mt-auto text-xs font-semibold text-teal-700 transition-colors group-hover:text-coral-300">
        {count} {count === 1 ? "item" : "items"}
      </span>
    </Link>
  );
}
