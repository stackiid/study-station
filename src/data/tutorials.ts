import type { Tutorial } from "../types";

/**
 * To add a new tutorial: copy any object below, give it a unique `id`,
 * fill in the fields, and drop its thumbnail into
 * public/images/tutorials/.
 */
export const tutorials: Tutorial[] = [
  {
    id: "python-tutorial-for-beginners",
    type: "tutorial",
    title: "Python Tutorial for Beginners",
    description:
      "A complete beginner-friendly walkthrough of Python: syntax, data types, control flow, and writing your first real programs.",
    category: "programming-fundamentals",
    channel: "Code with Harry",
    url: "https://youtu.be/UrsmFxEIp5k?si=8xrFRAg1dYTwsp5u",
    image: "/images/tutorials/python-tutorial.jpg",
    tags: ["python", "beginner", "programming basics"],
    featured: true,
  },
  {
    id: "react-js-19-full-course",
    type: "tutorial",
    title: "React JS 19 Full Course",
    description:
      "A full-length React course covering components, hooks, state, and the newest React 19 features from the ground up.",
    category: "web-development",
    channel: "JavaScript Mastery",
    url: "https://youtu.be/dCLhUialKPQ?si=Qmt4PFoP9r1Vb6Zi",
    image: "/images/tutorials/react-js.jpg",
    tags: ["react", "javascript", "frontend", "hooks"],
    featured: true,
  },
  {
    id: "javascript-tutorial-full-course",
    type: "tutorial",
    title: "JavaScript Tutorial Full Course",
    description:
      "A comprehensive JavaScript course from fundamentals through modern ES6+ features, DOM manipulation, and asynchronous code.",
    category: "web-development",
    channel: "SuperSimpleDev",
    url: "https://youtu.be/EerdGm-ehJQ?si=D_SATvS3ibURd6vq",
    image: "/images/tutorials/javascript-full-course.jpg",
    tags: ["javascript", "web development", "beginner", "es6"],
    featured: true,
  },
  {
    id: "become-a-fullstack-dev",
    type: "tutorial",
    title: "Become a Full-Stack Developer from Scratch",
    description:
      "A long-form roadmap-style course connecting front-end, back-end, and databases into one complete full-stack skill set.",
    category: "web-development",
    channel: "freeCodeCamp",
    url: "https://youtu.be/LzMnsfqjzkA?si=4RSlj71o8W3hgUro",
    image: "/images/tutorials/become-a-full-stack-dev.jpg",
    tags: ["full stack", "web development", "roadmap", "databases"],
  },
];

export function getFeaturedTutorials(limit?: number): Tutorial[] {
  const featured = tutorials.filter((tutorial) => tutorial.featured);
  return typeof limit === "number" ? featured.slice(0, limit) : featured;
}
