/**
 * Shared content types for Study Station.
 *
 * These interfaces are intentionally flat and readable so a new contributor
 * can open a data file, see the shape of one object, and immediately know
 * how to add another. See docs/04-Content-and-Search-System.md for the full
 * contributor guide.
 */

export type ContentType = "course" | "resource" | "tutorial";

export type SkillLevel = "beginner" | "intermediate" | "advanced" | "all-levels";

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

export type SearchableItem = Course | Resource | Tutorial;

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
