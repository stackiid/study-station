import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="brand-mesh border-b border-ink-900/6 pb-12 pt-12 sm:pb-14 sm:pt-16">
      <div className="container-page text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-teal-700/15 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-teal-700">
          <span className="h-1.5 w-1.5 rounded-full bg-coral-500" aria-hidden="true" />
          {eyebrow}
        </span>
        <h1 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-extrabold text-teal-900 text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}
