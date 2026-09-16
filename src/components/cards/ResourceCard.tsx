import type { Resource } from "../../types";
import { Tag } from "../ui/Tag";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <a
      id={resource.id}
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      data-reveal
      className="group flex h-full flex-col rounded-[var(--radius-card)] bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift scroll-mt-24"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-coral-50 text-coral-600 text-lg">
          <i className="fa-solid fa-link" aria-hidden="true" />
        </span>
        <i
          className="mt-1 shrink-0 text-ink-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral-500 fa-solid fa-arrow-up-right-from-square"
          aria-hidden="true"
        />
      </div>

      <h3 className="mt-3.5 font-display text-base font-bold leading-snug text-teal-900">
        {resource.title}
      </h3>
      <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-coral-600">
        {resource.kind}
      </span>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-500">
        {resource.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {resource.tags.slice(0, 3).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </a>
  );
}
