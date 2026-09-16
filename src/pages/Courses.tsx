import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { PageHero } from "../components/ui/PageHero";
import { CategoryFilter } from "../components/ui/CategoryFilter";
import { Select } from "../components/ui/Select";
import { AnimatedGridItem } from "../components/ui/AnimatedGridItem";
import { SearchInput } from "../components/search/SearchInput";
import { CourseCard } from "../components/cards/CourseCard";
import { EmptyState } from "../components/ui/EmptyState";
import { courses } from "../data/courses";
import { normalizeSearchText } from "../utils/search";
import { useReducedMotion } from "../hooks/useReducedMotion";
import type { SkillLevel } from "../types";

const levels: { id: SkillLevel | "all"; label: string }[] = [
  { id: "all", label: "All levels" },
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
];

type SortOption = "featured" | "rating" | "title";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "rating", label: "Highest rated" },
  { value: "title", label: "Title (A-Z)" },
];

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<SkillLevel | "all">("all");
  const [sort, setSort] = useState<SortOption>("featured");
  const reducedMotion = useReducedMotion();

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

          <div className="flex items-center gap-2 text-sm text-ink-500">
            <span className="shrink-0">Sort by</span>
            <Select
              value={sort}
              onChange={setSort}
              options={sortOptions}
              aria-label="Sort courses by"
              className="w-40"
            />
          </div>
        </div>

        <div className="mt-10">
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <motion.div
                key="grid"
                layout
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                <AnimatePresence mode="popLayout">
                  {filtered.map((course) => (
                    <AnimatedGridItem key={course.id}>
                      <CourseCard course={course} />
                    </AnimatedGridItem>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: reducedMotion ? 0 : 0.2 }}
              >
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
