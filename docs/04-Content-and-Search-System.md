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
  image: "/images/courses/your-image.jpg",
  rating: 4.5,
  tags: ["tag-one", "tag-two"],
  featured: false,                      // true surfaces it on Home + top of Courses
}
```

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

## Adding a category

Open `src/data/categories.ts` and add an entry with a unique `id`, `name`,
one-line `description`, and a Font Awesome class for `icon` (e.g.
`"fa-solid fa-cloud"` - browse available icons at
`https://fontawesome.com/search?o=r&m=free`). Reference the new category's
`id` from any course/resource/tutorial's `category` field.

## How search works

`src/utils/search.ts` builds one flat searchable index from all three data
files (`buildSearchIndex()`), and `searchContent(query, options)` scores
every item against the query. You don't need to touch this file when
adding content - every new item is automatically searchable the moment
it's added to its data file, because the index is rebuilt from the data
files themselves rather than maintained separately.

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
