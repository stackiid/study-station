import type { Tutorial } from "../../types";

export function TutorialCard({ tutorial }: { tutorial: Tutorial }) {
  return (
    <a
      id={tutorial.id}
      href={tutorial.url}
      target="_blank"
      rel="noopener noreferrer"
      data-reveal
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift scroll-mt-24"
    >
      <div className="relative aspect-video overflow-hidden bg-teal-900">
        <img
          src={tutorial.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-teal-900/25 transition-colors group-hover:bg-teal-900/35">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-coral-600 shadow-lift transition-transform duration-300 group-hover:scale-110">
            <i className="fa-solid fa-play ml-1 text-lg" aria-hidden="true" />
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-bold leading-snug text-teal-900">
          {tutorial.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
          {tutorial.description}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-ink-900/6 pt-4 text-xs font-semibold text-ink-500">
          <span className="flex items-center gap-1.5">
            <i
              className="fa-brands fa-youtube text-coral-500"
              aria-hidden="true"
            />
            {tutorial.channel}
          </span>
          <span className="text-teal-700 group-hover:text-teal-900">
            Watch now
          </span>
        </div>
      </div>
    </a>
  );
}
