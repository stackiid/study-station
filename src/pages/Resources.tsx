import { useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PageHero } from "../components/ui/PageHero";
import { CategoryFilter } from "../components/ui/CategoryFilter";
import { SearchInput } from "../components/search/SearchInput";
import { ResourceCard } from "../components/cards/ResourceCard";
import { EmptyState } from "../components/ui/EmptyState";
import { resources } from "../data/resources";
import { normalizeSearchText } from "../utils/search";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Resources() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [query, setQuery] = useState("");
  const gridRef = useRef<HTMLDivElement>(null);

  const availableIds = useMemo(() => new Set(resources.map((r) => r.category)), []);

  const filtered = useMemo(() => {
    const normalizedQuery = normalizeSearchText(query);
    return resources.filter((resource) => {
      const matchesCategory = !category || resource.category === category;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        normalizeSearchText(resource.title).includes(normalizedQuery) ||
        normalizeSearchText(resource.tags.join(" ")).includes(normalizedQuery) ||
        normalizeSearchText(resource.kind).includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  useScrollReveal(gridRef, { selector: "[data-reveal]" });

  return (
    <>
      <PageHero
        eyebrow={`${resources.length} resources`}
        title="Essential resources, organized"
        description="Documentation, practice platforms, design tools, and communities worth bookmarking - searchable and tagged by topic."
      >
        <div className="mx-auto mt-8 max-w-xl">
          <SearchInput
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onClear={() => setQuery("")}
            placeholder="Search resources by name, tag, or category..."
            aria-label="Search resources"
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
              {filtered.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No resources match those filters"
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
