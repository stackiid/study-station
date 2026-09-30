/**
 * Shared content types for Study Station.
 *
 * These interfaces are intentionally flat and readable so a new contributor
 * can open a data file, see the shape of one object, and immediately know
 * how to add another. See docs/04-Content-and-Search-System.md for the full
 * contributor guide.
 */

export type ContentType = "course" | "resource" | "tutorial" | "youtuber";

export type SkillLevel =
  | "beginner"
  | "intermediate"
  | "advanced"
  | "all-levels";

export interface Category {
  /** URL-safe unique identifier, e.g. "web-development" */
  id: string;
  /** Display label, e.g. "Web Development" */
  name: string;
  /** Short one-line description shown on category cards */
  description: string;
  /** Font Awesome class, e.g. "fa-solid fa-code" */
  icon: string;
}

export interface Course {
  id: string;
  type: "course";
  title: string;
  description: string;
  /** Category id, must match a Category in categories.ts */
  category: string;
  level: SkillLevel;
  /** Instructor or creator name */
  provider: string;
  /** Where the course lives (YouTube, Drive, platform name) */
  source: string;
  /** External URL to the course */
  url: string;
  /** Path or remote URL for the card thumbnail */
  image: string;
  /** Community rating out of 5, one decimal place */
  rating: number;
  tags: string[];
  /** Featured courses surface first on Home and at the top of Courses */
  featured?: boolean;
  /** Marks a "coming soon" placeholder card with no live link */
  comingSoon?: boolean;
}

export interface Resource {
  id: string;
  type: "resource";
  title: string;
  /** Short category label shown as a badge, e.g. "Documentation" */
  kind: string;
  description: string;
  category: string;
  url: string;
  tags: string[];
  featured?: boolean;
}

export interface Tutorial {
  id: string;
  type: "tutorial";
  title: string;
  description: string;
  category: string;
  /** Channel or author name */
  channel: string;
  url: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export interface Youtuber {
  id: string;
  type: "youtuber";
  channelName: string;
  /** Public @handle, e.g. "@freecodecamp" */
  handle: string;
  description: string;
  /**
   * Free-form, human-readable category labels, e.g. ["Web Development", "Career"].
   * Unlike Course/Resource/Tutorial, these are NOT ids into a shared
   * categories.ts list - the YouTubers page derives its entire category
   * filter UI directly from whatever labels appear across this dataset
   * (see src/utils/youtuberCategories.ts). Add a brand-new label here and
   * it becomes a real, filterable, searchable category automatically -
   * no other file needs to change.
   */
  categories: string[];
  /** Optional short line on what the channel is best known for. */
  knownFor?: string;
  /**
   * Manually maintained snapshot values, e.g. "11.8M". These are NOT
   * fetched live and WILL drift out of date - update them by hand
   * whenever convenient. Leave undefined rather than guessing; the card
   * simply omits the stat row when both are missing.
   */
  subscribers?: string;
  videoCount?: string;
  /** Path or remote URL for the channel avatar/profile image. */
  image: string;
  /** Full URL to the YouTube channel. */
  channelUrl: string;
  tags: string[];
  /** Featured channels can be surfaced first, mirroring Course/Tutorial. */
  featured?: boolean;
}

export type SearchableItem = Course | Resource | Tutorial | Youtuber;

export interface SearchResult<T = SearchableItem> {
  item: T;
  score: number;
  /** Which field produced the strongest match, used for subtle result labeling */
  matchedOn: "title" | "tags" | "category" | "provider" | "description";
}

export interface NavLink {
  label: string;
  path: string;
}
