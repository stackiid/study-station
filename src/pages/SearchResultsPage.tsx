import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PageHero } from "../components/ui/PageHero";
import { SearchInput } from "../components/search/SearchInput";
import { SearchResults } from "../components/search/SearchResults";
import { SearchEmptyState } from "../components/search/SearchEmptyState";
import { searchContent } from "../utils/search";

export default function SearchResultsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => searchContent(query), [query]);

  function handleChange(value: string) {
    setQuery(value);
    setSearchParams(value ? { q: value } : {});
  }

  return (
    <>
      <PageHero eyebrow="Site search" title="Search Study Station" description="Search across every course, resource, and tutorial at once.">
        <div className="mx-auto mt-8 max-w-xl">
          <SearchInput
            size="lg"
            value={query}
            onChange={(event) => handleChange(event.target.value)}
            onClear={() => handleChange("")}
            placeholder="Search courses, resources, tutorials..."
            aria-label="Search Study Station"
            autoFocus
          />
        </div>
      </PageHero>

      <section className="container-page py-12 sm:py-14">
        <div className="mx-auto max-w-2xl">
          {query.trim().length === 0 ? (
            <p className="py-10 text-center text-ink-300">Start typing above to search the whole site.</p>
          ) : results.length > 0 ? (
            <SearchResults results={results} activeIndex={-1} />
          ) : (
            <SearchEmptyState query={query} onReset={() => handleChange("")} />
          )}
        </div>
      </section>
    </>
  );
}
