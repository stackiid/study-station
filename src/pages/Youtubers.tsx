import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { PageHero } from "../components/ui/PageHero";
import { YoutuberCategoryFilter } from "../components/ui/YoutuberCategoryFilter";
import { AnimatedGridItem } from "../components/ui/AnimatedGridItem";
import { SearchInput } from "../components/search/SearchInput";
import { YoutuberCard } from "../components/cards/YoutuberCard";
import { EmptyState } from "../components/ui/EmptyState";
import { youtubers } from "../data/youtubers";
import {
  getYoutuberCategories,
  channelMatchesCategory,
} from "../utils/youtuberCategories";
import { normalizeSearchText } from "../utils/search";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function Youtubers() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [query, setQuery] = useState("");
  const reducedMotion = useReducedMotion();

  const availableCategories = useMemo(() => getYoutuberCategories(), []);

  const filtered = useMemo(() => {
    const normalizedQuery = normalizeSearchText(query);

    return youtubers.filter((channel) => {
      const matchesCategory = channelMatchesCategory(channel, category);
      if (!matchesCategory) return false;
      if (normalizedQuery.length === 0) return true;

      const haystack = normalizeSearchText(
        [
          channel.channelName,
          channel.handle,
          channel.description,
          channel.knownFor ?? "",
          channel.categories.join(" "),
          channel.tags.join(" "),
        ].join(" "),
      );
      return haystack.includes(normalizedQuery);
    });
  }, [category, query]);

  const sorted = useMemo(
    () =>
      [...filtered].sort(
        (a, b) => Number(b.featured ?? false) - Number(a.featured ?? false),
      ),
    [filtered],
  );

  return (
    <>
      <PageHero
        eyebrow="Curated YouTube channels"
        title="Learn from creators worth following"
        description="Educational YouTube channels covering coding, software engineering, AI, career growth, communication, and more - hand-picked, organized by category, and searchable."
      >
        <div className="mx-auto mt-8 max-w-xl">
          <SearchInput
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onClear={() => setQuery("")}
            placeholder="Search channels by name, topic, or category..."
            aria-label="Search YouTube channels"
          />
        </div>
      </PageHero>

      <section className="container-page py-12 sm:py-14">
        <YoutuberCategoryFilter
          categories={availableCategories}
          active={category}
          onChange={(id) => setSearchParams(id ? { category: id } : {})}
          totalCount={youtubers.length}
        />

        <p className="mt-6 text-center text-sm font-medium text-ink-500 sm:text-left">
          {sorted.length} {sorted.length === 1 ? "channel" : "channels"}{" "}
          {category || query ? "match your filters" : "curated so far"}
        </p>

        <div className="mt-6">
          <AnimatePresence mode="popLayout">
            {sorted.length > 0 ? (
              <motion.div
                key="grid"
                layout
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                <AnimatePresence mode="popLayout">
                  {sorted.map((channel) => (
                    <AnimatedGridItem key={channel.id}>
                      <YoutuberCard channel={channel} />
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
                  title="No channels match those filters"
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
