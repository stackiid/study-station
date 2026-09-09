import { useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PageHero } from "../components/ui/PageHero";
import { CategoryFilter } from "../components/ui/CategoryFilter";
import { SearchInput } from "../components/search/SearchInput";
import { CourseCard } from "../components/cards/CourseCard";
import { EmptyState } from "../components/ui/EmptyState";
import { courses } from "../data/courses";
import { normalizeSearchText } from "../utils/search";
import { useScrollReveal } from "../hooks/useScrollReveal";
import type { SkillLevel } from "../types";

const levels: { id: SkillLevel | "all"; label: string }[] = [
  { id: "all", label: "All levels" },
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
];

type SortOption = "featured" | "rating" | "title";

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<SkillLevel | "all">("all");
  const [sort, setSort] = useState<SortOption>("featured");
  const gridRef = useRef<HTMLDivElement>(null);

  const availableIds = useMemo(
    () => new Set(courses.map((c) => c.category)),
    [],
  );

  const filtered = useMemo(() => {
    const normalizedQuery = normalizeSearchText(query);
    let list = courses.filter((course) => {
      const matchesCategory = !category || course.category === category;
      const matchesLevel = level === "all" || course.level === level;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        normalizeSearchText(course.title).includes(normalizedQuery) ||
        normalizeSearchText(course.tags.join(" ")).includes(normalizedQuery) ||
        normalizeSearchText(course.provider).includes(normalizedQuery);
      return matchesCategory && matchesLevel && matchesQuery;
    });

    list = [...list].sort((a, b) => {
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "title") return a.title.localeCompare(b.title);
      return Number(b.featured ?? false) - Number(a.featured ?? false);
    });

    return list;
  }, [category, level, query, sort]);

  useScrollReveal(gridRef, { selector: "[data-reveal]" });

  return (
    <>
      <PageHero
        eyebrow={`${courses.length} courses`}
        title="Free courses worth finishing"
        description="Curated, rated, and organized by category and skill level - filter or search to find your next one."
      >
        <div className="mx-auto mt-8 max-w-xl">
          <SearchInput
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onClear={() => setQuery("")}
            placeholder="Search courses by title, tag, or instructor..."
            aria-label="Search courses"
          />
        </div>
      </PageHero>

      <section className="container-page py-12 sm:py-14">
        <CategoryFilter
          active={category}
          onChange={(id) => setSearchParams(id ? { category: id } : {})}
          availableIds={availableIds}
        />

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-y border-ink-900/8 py-4 sm:flex-row">
          <div className="flex flex-wrap items-center gap-2">
            {levels.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setLevel(option.id)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  level === option.id
                    ? "bg-coral-500 text-white"
                    : "bg-ink-900/[0.04] text-ink-700 hover:bg-ink-900/[0.08]"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-2 text-sm text-ink-500">
            Sort by
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as SortOption)}
              className="rounded-lg border border-ink-900/10 bg-white px-3 py-1.5 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
            >
              <option value="featured">Featured</option>
              <option value="rating">Highest rated</option>
              <option value="title">Title (A-Z)</option>
            </select>
          </label>
        </div>

        <div ref={gridRef} className="mt-10">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No courses match those filters"
              description="Try a different category, level, or search term."
              action={
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setLevel("all");
                    setSearchParams({});
                  }}
                  className="text-sm font-semibold text-teal-700 underline underline-offset-4 hover:text-teal-800"
                >
                  Reset all filters
                </button>
              }
            />
          )}
        </div>
      </section>
    </>
  );
}
