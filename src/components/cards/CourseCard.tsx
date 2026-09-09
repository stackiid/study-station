import type { Course } from "../../types";
import { getCategoryById } from "../../data/categories";
import { formatRating } from "../../utils/helpers";
import { Badge } from "../ui/Badge";

const levelLabel: Record<Course["level"], string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  "all-levels": "All levels",
};

function RatingStars({ rating }: { rating: number }) {
  const rounded = Math.round(rating);
  return (
    <span className="flex items-center gap-1 text-coral-500" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <i
          key={index}
          className={
            index < rounded ? "fa-solid fa-star" : "fa-regular fa-star"
          }
        />
      ))}
    </span>
  );
}

export function CourseCard({ course }: { course: Course }) {
  const category = getCategoryById(course.category);

  return (
    <article
      id={course.id}
      data-reveal
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift scroll-mt-24"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-teal-50">
        <img
          src={course.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {course.comingSoon ? (
            <Badge tone="coral">Coming soon</Badge>
          ) : (
            category && <Badge tone="teal">{category.name}</Badge>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2 text-xs font-semibold text-ink-500">
          <span>{levelLabel[course.level]}</span>
          {!course.comingSoon && (
            <span className="flex items-center gap-1.5">
              <RatingStars rating={course.rating} />
              <span className="text-ink-700">
                {formatRating(course.rating)}
              </span>
            </span>
          )}
        </div>

        <h3 className="mt-2.5 font-display text-lg font-bold leading-snug text-teal-900">
          {course.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
          {course.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-ink-900/6 pt-4">
          <span className="truncate text-xs font-medium text-ink-500">
            By {course.provider}
          </span>
          <a
            href={course.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-teal-700/8 px-3.5 py-1.5 text-xs font-bold text-teal-800 transition-colors hover:bg-teal-700 hover:text-white"
          >
            {course.comingSoon ? "Notify me" : "View course"}
            <i
              className="fa-solid fa-arrow-right text-[0.65rem]"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </article>
  );
}
