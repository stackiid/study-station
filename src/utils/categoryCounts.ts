import { courses } from "../data/courses";
import { resources } from "../data/resources";
import { tutorials } from "../data/tutorials";

export function getCategoryCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const item of [...courses, ...resources, ...tutorials]) {
    counts[item.category] = (counts[item.category] ?? 0) + 1;
  }
  return counts;
}
