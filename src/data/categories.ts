import type { Category } from "../types";

/**
 * Categories are shared across courses, resources, and tutorials.
 * To add a category: add an entry here, then reference its `id` from the
 * `category` field of any content item in courses.ts, resources.ts, or
 * tutorials.ts.
 */
export const categories: Category[] = [
  {
    id: "web-development",
    name: "Web Development",
    description: "Front-end, back-end, and full-stack web engineering.",
    icon: "fa-solid fa-code",
  },
  {
    id: "data-science",
    name: "Data Science",
    description: "Analytics, statistics, and working with real-world data.",
    icon: "fa-solid fa-chart-line",
  },
  {
    id: "ai-and-ml",
    name: "AI & Machine Learning",
    description: "Applied AI, machine learning, and generative tools.",
    icon: "fa-solid fa-brain",
  },
  {
    id: "programming-fundamentals",
    name: "Programming Fundamentals",
    description: "Core languages, data structures, and algorithms.",
    icon: "fa-solid fa-terminal",
  },
  {
    id: "design",
    name: "Design",
    description: "UI/UX, branding, and visual design practice.",
    icon: "fa-solid fa-pen-nib",
  },
  {
    id: "career-and-growth",
    name: "Career & Growth",
    description: "Freelancing, monetization, and professional skills.",
    icon: "fa-solid fa-briefcase",
  },
  {
    id: "devops-and-cloud",
    name: "DevOps & Cloud",
    description: "Containers, cloud platforms, and infrastructure.",
    icon: "fa-solid fa-cloud",
  },
  {
    id: "community-and-news",
    name: "Community & News",
    description: "Forums, publications, and staying current.",
    icon: "fa-solid fa-users",
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((category) => category.id === id);
}
