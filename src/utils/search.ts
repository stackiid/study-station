import { courses } from "../data/courses";
import { resources } from "../data/resources";
import { tutorials } from "../data/tutorials";
import { getCategoryById } from "../data/categories";
import type { SearchableItem, SearchResult } from "../types";

export function buildSearchIndex(): SearchableItem[] {
  return [...courses, ...resources, ...tutorials];
}

const searchIndex = buildSearchIndex();

export function normalizeSearchText(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function fieldsFor(item: SearchableItem) {
  const category = getCategoryById(item.category)?.name ?? "";
  const provider =
    item.type === "course"
      ? item.provider
      : item.type === "tutorial"
        ? item.channel
        : "";
  const description = item.description;
  const title = item.title;
  const tags = item.tags.join(" ");
  const kind = item.type === "resource" ? item.kind : "";
  return { title, tags, category, provider, description, kind };
}

export function scoreSearchResult(
  item: SearchableItem,
  normalizedQuery: string,
): SearchResult | null {
  const { title, tags, category, provider, description, kind } =
    fieldsFor(item);
  const normTitle = normalizeSearchText(title);
  const normTags = normalizeSearchText(tags);
  const normCategory = normalizeSearchText(category);
  const normProvider = normalizeSearchText(provider);
  const normDescription = normalizeSearchText(description);
  const normKind = normalizeSearchText(kind);

  let score = 0;
  let matchedOn: SearchResult["matchedOn"] = "description";

  if (normTitle === normalizedQuery) {
    score = 100;
    matchedOn = "title";
  } else if (normTitle.includes(normalizedQuery)) {
    score = 70;
    matchedOn = "title";
    // Reward matches near the start of the title slightly.
    if (normTitle.startsWith(normalizedQuery)) score += 10;
  } else if (normTags.includes(normalizedQuery)) {
    score = 50;
    matchedOn = "tags";
  } else if (
    normCategory.includes(normalizedQuery) ||
    normKind.includes(normalizedQuery)
  ) {
    score = 35;
    matchedOn = "category";
  } else if (normProvider.includes(normalizedQuery)) {
    score = 25;
    matchedOn = "provider";
  } else if (normDescription.includes(normalizedQuery)) {
    score = 12;
    matchedOn = "description";
  }

  return score > 0 ? { item, score, matchedOn } : null;
}

export interface SearchOptions {
  /** Limit the number of results returned. */
  limit?: number;
  /** Restrict search to one content type. */
  type?: SearchableItem["type"];
}

export function searchContent(
  query: string,
  options: SearchOptions = {},
): SearchResult[] {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return [];

  const pool = options.type
    ? searchIndex.filter((item) => item.type === options.type)
    : searchIndex;

  const results = pool
    .map((item) => scoreSearchResult(item, normalizedQuery))
    .filter((result): result is SearchResult => result !== null)
    .sort((a, b) => b.score - a.score);

  return typeof options.limit === "number"
    ? results.slice(0, options.limit)
    : results;
}
