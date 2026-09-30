import { Link } from "react-router-dom";
import type { SearchResult } from "../../types";
import { getCategoryById } from "../../data/categories";
import { cx } from "../../utils/helpers";

const typeIcon: Record<SearchResult["item"]["type"], string> = {
  course: "fa-solid fa-graduation-cap",
  resource: "fa-solid fa-link",
  tutorial: "fa-solid fa-clapperboard",
  youtuber: "fa-brands fa-youtube",
};

const typeLabel: Record<SearchResult["item"]["type"], string> = {
  course: "Course",
  resource: "Resource",
  tutorial: "Tutorial",
  youtuber: "Channel",
};

interface SearchResultItemProps {
  result: SearchResult;
  active?: boolean;
  onNavigate?: () => void;
}

export function SearchResultItem({
  result,
  active,
  onNavigate,
}: SearchResultItemProps) {
  const { item } = result;
  const categoryName =
    item.type === "youtuber"
      ? item.categories[0]
      : getCategoryById(item.category)?.name;
  const title = item.type === "youtuber" ? item.channelName : item.title;
  const href = item.type === "youtuber" ? item.channelUrl : item.url;
  const internalHref = `/${
    item.type === "course"
      ? "courses"
      : item.type === "resource"
        ? "resources"
        : item.type === "tutorial"
          ? "tutorials"
          : "youtubers"
  }#${item.id}`;

  const content = (
    <>
      <span
        className={cx(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-base",
          item.type === "course" && "bg-teal-50 text-teal-600",
          item.type === "resource" && "bg-coral-50 text-coral-600",
          item.type === "tutorial" && "bg-teal-900/5 text-teal-800",
          item.type === "youtuber" && "bg-coral-50 text-coral-600",
        )}
      >
        <i className={typeIcon[item.type]} aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2">
          <span className="truncate font-semibold text-ink-900">{title}</span>
        </span>
        <span className="mt-0.5 flex items-center gap-1.5 text-xs text-ink-500">
          <span>{typeLabel[item.type]}</span>
          {categoryName && (
            <>
              <span aria-hidden="true">&middot;</span>
              <span className="truncate">{categoryName}</span>
            </>
          )}
        </span>
      </span>
      <i
        className="fa-solid fa-arrow-up-right-from-square shrink-0 text-xs text-ink-300"
        aria-hidden="true"
      />
    </>
  );

  const rowClasses = cx(
    "flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors",
    active ? "bg-teal-50" : "hover:bg-ink-900/[0.03]",
  );

  if (item.type === "course" && item.comingSoon) {
    return (
      <Link
        to={internalHref}
        onClick={onNavigate}
        className={rowClasses}
        data-reveal
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onNavigate}
      className={rowClasses}
      data-reveal
    >
      {content}
    </a>
  );
}
