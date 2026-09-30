import { assetPath } from "../utils/assets";
import type { Youtuber } from "../types";

/**
 * To add a channel: copy any object below, give it a unique `id`, fill in
 * the fields, and drop its avatar image into public/images/youtubers/.
 * That's it - no other file needs to change. See
 * docs/04-Content-and-Search-System.md for the full contributor guide.
 */
export const youtubers: Youtuber[] = [
  {
    id: "freecodecamp",
    type: "youtuber",
    channelName: "freeCodeCamp.org",
    handle: "@freecodecamp",
    description:
      "Long-form, full-length courses on programming languages, computer science fundamentals, and web development, taught by volunteer instructors and released for free.",
    categories: ["Programming", "Web Development", "Software Engineering"],
    knownFor:
      "Multi-hour full courses, from beginner HTML to full-stack projects",
    image: assetPath("/images/youtubers/freecodecamp.svg"),
    channelUrl: "https://www.youtube.com/@freecodecamp",
    tags: [
      "python",
      "javascript",
      "html",
      "css",
      "full courses",
      "computer science",
    ],
    featured: true,
  },
  {
    id: "fireship",
    type: "youtuber",
    channelName: "Fireship",
    handle: "@Fireship",
    description:
      "Fast-paced, high-density videos on modern web development, cloud platforms, and software engineering trends, aimed at developers who want to stay current quickly.",
    categories: ["Software Engineering", "Web Development", "DevOps"],
    knownFor: 'The "100 Seconds of Code" series and quick tech explainers',
    image: assetPath("/images/youtubers/fireship.svg"),
    channelUrl: "https://www.youtube.com/@Fireship",
    tags: [
      "web development",
      "typescript",
      "firebase",
      "cloud",
      "quick tutorials",
    ],
    featured: true,
  },
  {
    id: "statquest",
    type: "youtuber",
    channelName: "StatQuest with Josh Starmer",
    handle: "@statquest",
    description:
      "Statistics and machine learning concepts explained step by step with simple visuals, built for people who found their stats or ML class confusing the first time around.",
    categories: ["AI & Machine Learning", "Data Science"],
    knownFor:
      "Breaking down statistics and ML math into plain-language, visual walkthroughs",
    image: assetPath("/images/youtubers/statquest.svg"),
    channelUrl: "https://www.youtube.com/@statquest",
    tags: ["machine learning", "statistics", "neural networks", "data science"],
    featured: true,
  },
  {
    id: "ali-abdaal",
    type: "youtuber",
    channelName: "Ali Abdaal",
    handle: "@aliabdaal",
    description:
      "A former doctor turned full-time creator sharing evidence-based productivity systems, study techniques, and career advice for people building a life around meaningful work.",
    categories: ["Productivity", "Career", "Personal Development"],
    knownFor:
      "Practical productivity systems and study techniques backed by research",
    image: assetPath("/images/youtubers/ali-abdaal.svg"),
    channelUrl: "https://www.youtube.com/@aliabdaal",
    tags: [
      "productivity",
      "study tips",
      "career growth",
      "habits",
      "time management",
    ],
    featured: false,
  },
  {
    id: "charisma-on-command",
    type: "youtuber",
    channelName: "Charisma on Command",
    handle: "@CharismaOnCommand",
    description:
      "Video breakdowns of real conversations and speeches that teach communication, confidence, and social skills - useful for interviews, networking, and everyday conversation.",
    categories: [
      "Communication",
      "Confidence Building",
      "Personal Development",
    ],
    knownFor:
      "Analyzing real footage to teach body language, charisma, and confident speaking",
    image: assetPath("/images/youtubers/charisma-on-command.svg"),
    channelUrl: "https://www.youtube.com/@CharismaOnCommand",
    tags: [
      "communication",
      "confidence",
      "public speaking",
      "social skills",
      "interviews",
    ],
    featured: false,
  },
];

export function getFeaturedYoutubers(limit?: number): Youtuber[] {
  const featured = youtubers.filter((channel) => channel.featured);
  return typeof limit === "number" ? featured.slice(0, limit) : featured;
}
