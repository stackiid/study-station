import { youtubers } from "../data/youtubers";
import type { Youtuber } from "../types";

export interface YoutuberCategory {
  /** URL-safe id derived from the label, e.g. "web-development". Used in the ?category= query param. */
  id: string;
  /** Original display label as written in youtubers.ts, e.g. "Web Development". */
  name: string;
  /** Number of channels currently tagged with this category. */
  count: number;
}

export function slugifyCategory(label: string): string {
  return label
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Derives the full set of YouTuber categories directly from the current
 * dataset, with a live count per category. There is no separate list to
 * keep in sync - adding a new `categories` label to any channel in
 * youtubers.ts makes it appear here automatically, sorted by how many
 * channels use it (most first), then alphabetically.
 */
export function getYoutuberCategories(
  source: Youtuber[] = youtubers,
): YoutuberCategory[] {
  const counts = new Map<string, YoutuberCategory>();

  for (const channel of source) {
    for (const label of channel.categories) {
      const id = slugifyCategory(label);
      const existing = counts.get(id);
      if (existing) {
        existing.count += 1;
      } else {
        counts.set(id, { id, name: label, count: 1 });
      }
    }
  }

  return Array.from(counts.values()).sort((a, b) => {
    if (b.count !== a.count) return b.count - a.count;
    return a.name.localeCompare(b.name);
  });
}

export function channelMatchesCategory(
  channel: Youtuber,
  categoryId: string | null,
): boolean {
  if (!categoryId) return true;
  return channel.categories.some(
    (label) => slugifyCategory(label) === categoryId,
  );
}
