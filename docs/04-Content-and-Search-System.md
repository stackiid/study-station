# 04 - Content & Search System

This is the guide for adding content. If you only ever touch one part of
this codebase, it should be `src/data/`.

## Adding a course

Open `src/data/courses.ts` and add a new object to the `courses` array:

```ts
{
  id: "unique-kebab-case-id",       // must be unique across all courses
  type: "course",
  title: "Course Title",
  description: "One to two sentences describing what the course covers.",
  category: "web-development",        // must match an id in categories.ts
  level: "beginner",                   // "beginner" | "intermediate" | "advanced" | "all-levels"
  provider: "Instructor or Org Name",
  source: "Google Drive",              // where it's hosted
  url: "https://...",
  image: assetPath("/images/courses/your-image.jpg"),
  rating: 4.5,
  tags: ["tag-one", "tag-two"],
  featured: false,                      // true surfaces it on Home + top of Courses
}
```

Note the `assetPath(...)` wrapper on `image` - always use it for
anything under `public/`. It prefixes the path with Vite's configured base
URL so the image resolves both locally (served from `/`) and on GitHub
Pages (served from a repo sub-path). A bare `"/images/..."` string would
404 on GitHub Pages. See `src/utils/assets.ts`.

Then drop the thumbnail into `public/images/courses/`. Keep thumbnails
reasonably sized (this repo's existing images are re-encoded to a max
900px edge, JPEG quality ~80, which keeps every course thumbnail under
~80KB - see the README for the exact ImageMagick command used).

That's it - no other file needs to change. The course will automatically
appear on `/courses`, on Home if `featured: true`, and in global search.

## Adding a resource

Same pattern in `src/data/resources.ts`. Resources don't have a
thumbnail - they're link-first cards keyed by `kind` (a short label like
"Documentation" or "Coding Practice") and `tags`.

## Adding a tutorial

Same pattern in `src/data/tutorials.ts`. Tutorials use `channel` instead
of `provider`, and their thumbnail renders inside a video-style card with
a play button overlay.

## Adding a YouTuber

Open `src/data/youtubers.ts` and add a new object to the `youtubers` array:

```ts
{
  id: "unique-kebab-case-id",         // must be unique across all channels
  type: "youtuber",
  channelName: "Channel Name",
  handle: "@channelhandle",
  description: "One to two sentences on what the channel teaches.",
  categories: ["Web Development", "Career"],   // see below - free text, not ids
  knownFor: "Optional one-line summary of what they're known for",
  subscribers: "1.2M",                 // optional, manually maintained snapshot - omit if unverified
  videoCount: "450",                   // optional, manually maintained snapshot - omit if unverified
  image: assetPath("/images/youtubers/channel-name.jpg"),
  channelUrl: "https://www.youtube.com/@channelhandle",
  tags: ["tag-one", "tag-two"],
  featured: false,                      // true surfaces it first on the YouTubers page
}
```

Then drop the channel's avatar image into `public/images/youtubers/` - keep
YouTuber images in this folder, separate from `public/images/courses/` and
`public/images/tutorials/`. Use `assetPath(...)` for the `image` field for
the same GitHub Pages base-path reason described above. Don't invent
`subscribers` or `videoCount` - if you can't verify the number, leave the
field out entirely; the card simply doesn't render that row.

That's it - no other file needs to change. The channel automatically
appears on `/youtubers`, in global search, and any category listed in its
`categories` array automatically appears as a filter pill.

### YouTuber categories are dynamic - not a shared list

Unlike Course/Resource/Tutorial, YouTuber categories are **not** ids into
`categories.ts`. Each channel's `categories` field is just an array of
plain, human-readable labels (e.g. `"Communication"`, `"AI & Machine
Learning"`). The `/youtubers` page and its filter pills are built by
scanning every channel's `categories` array at render time
(`src/utils/youtuberCategories.ts`), so:

- Adding a brand-new label to any channel makes it appear as a real,
  counted, filterable, searchable category immediately - no separate list
  to edit.
- Reuse an existing label's exact spelling and capitalization (e.g.
  always `"Web Development"`, never `"web dev"`) so channels group
  together correctly - the filter groups by a normalized (lowercased,
  hyphenated) version of the label, but displays whatever casing you
  typed first for that label.
- This is intentionally a separate system from the global
  `categories.ts` used by Courses/Resources/Tutorials, so adding
  YouTuber-specific categories (like "Motivation" or "Confidence
  Building") never affects those pages.

## Adding a category

Open `src/data/categories.ts` and add an entry with a unique `id`, `name`,
one-line `description`, and a Font Awesome class for `icon` (e.g.
`"fa-solid fa-cloud"` - browse available icons at
`https://fontawesome.com/search?o=r&m=free`). Reference the new category's
`id` from any course/resource/tutorial's `category` field.

## How search works

`src/utils/search.ts` builds one flat searchable index from all four data
files - courses, resources, tutorials, and youtubers
(`buildSearchIndex()`) - and `searchContent(query, options)` scores every
item against the query. You don't need to touch this file when adding
content - every new item is automatically searchable the moment it's
added to its data file, because the index is rebuilt from the data files
themselves rather than maintained separately. For a YouTuber, the
"title" tier matches on `channelName`, and the "category or kind" tier
matches on both its `categories` and its `handle`.

Scoring priority (highest to lowest):

1. Exact title match
2. Title contains the query (bonus if it starts with the query)
3. Tag match
4. Category or resource "kind" match
5. Provider/channel match
6. Description match

If you want a specific item to surface more easily for a term it doesn't
obviously contain, add that term to its `tags` array rather than trying to
work it into the title or description.

## Data quality checklist

When adding an item, aim for:

- A description that's genuinely useful on its own (not just a restated
  title) - one to two sentences, written for someone deciding whether to
  click.
- Three to five tags that a real person would actually search for
  (technology names, skill level, format), not generic filler.
- A category that a visitor would expect to find it under when browsing.
