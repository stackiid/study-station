import { useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PageHero } from "../components/ui/PageHero";
import { CategoryFilter } from "../components/ui/CategoryFilter";
import { SearchInput } from "../components/search/SearchInput";
import { TutorialCard } from "../components/cards/TutorialCard";
import { EmptyState } from "../components/ui/EmptyState";
import { tutorials } from "../data/tutorials";
import { normalizeSearchText } from "../utils/search";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Tutorials() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [query, setQuery] = useState("");
  const gridRef = useRef<HTMLDivElement>(null);

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

  useScrollReveal(gridRef, { selector: "[data-reveal]" });

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

        <div ref={gridRef} className="mt-10">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((tutorial) => (
                <TutorialCard key={tutorial.id} tutorial={tutorial} />
              ))}
            </div>
          ) : (
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
          )}
        </div>
      </section>
    </>
  );
}
