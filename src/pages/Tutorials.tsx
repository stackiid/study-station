import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { PageHero } from "../components/ui/PageHero";
import { CategoryFilter } from "../components/ui/CategoryFilter";
import { AnimatedGridItem } from "../components/ui/AnimatedGridItem";
import { SearchInput } from "../components/search/SearchInput";
import { TutorialCard } from "../components/cards/TutorialCard";
import { EmptyState } from "../components/ui/EmptyState";
import { tutorials } from "../data/tutorials";
import { normalizeSearchText } from "../utils/search";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function Tutorials() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [query, setQuery] = useState("");
  const reducedMotion = useReducedMotion();

  const availableIds = useMemo(
    () => new Set(tutorials.map((t) => t.category)),
    [],
  );

  const filtered = useMemo(() => {
    const normalizedQuery = normalizeSearchText(query);
    return tutorials.filter((tutorial) => {
      const matchesCategory = !category || tutorial.category === category;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        normalizeSearchText(tutorial.title).includes(normalizedQuery) ||
        normalizeSearchText(tutorial.tags.join(" ")).includes(
          normalizedQuery,
        ) ||
        normalizeSearchText(tutorial.channel).includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <PageHero
        eyebrow={`${tutorials.length} tutorials`}
        title="Watch, follow along, build"
        description="Long-form video tutorials from creators we trust - the kind you actually finish."
      >
        <div className="mx-auto mt-8 max-w-xl">
          <SearchInput
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onClear={() => setQuery("")}
            placeholder="Search tutorials by title, channel, or topic..."
            aria-label="Search tutorials"
          />
        </div>
      </PageHero>

      <section className="container-page py-12 sm:py-14">
        <CategoryFilter
          active={category}
          onChange={(id) => setSearchParams(id ? { category: id } : {})}
          availableIds={availableIds}
        />

        <div className="mt-10">
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <motion.div
                key="grid"
                layout
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                <AnimatePresence mode="popLayout">
                  {filtered.map((tutorial) => (
                    <AnimatedGridItem key={tutorial.id}>
                      <TutorialCard tutorial={tutorial} />
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
                  title="No tutorials match those filters"
                  description="Try a different category or search term."
                  action={
                    <button
                      type="button"
                      onClick={() => {
                        setQuery("");
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
