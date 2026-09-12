import { useEffect, useRef } from "react";
import gsap from "gsap";
import type { SearchResult } from "../../types";
import { SearchResultItem } from "./SearchResultItem";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface SearchResultsProps {
  results: SearchResult[];
  activeIndex: number;
  onNavigate?: () => void;
}

export function SearchResults({ results, activeIndex, onNavigate }: SearchResultsProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const list = listRef.current;
    if (!list || reducedMotion) return;
    const items = list.querySelectorAll("[data-reveal]");
    gsap.fromTo(
      items,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.28, stagger: 0.035, ease: "power2.out" },
    );
  }, [results, reducedMotion]);

  return (
    <div>
      <p className="px-1 pb-2 text-xs font-semibold uppercase tracking-wide text-ink-300">
        {results.length} {results.length === 1 ? "result" : "results"} found
      </p>
      <ul ref={listRef} role="listbox" className="flex flex-col gap-0.5">
        {results.map((result, index) => (
          <li key={`${result.item.type}-${result.item.id}`} role="option" aria-selected={index === activeIndex}>
            <SearchResultItem result={result} active={index === activeIndex} onNavigate={onNavigate} />
          </li>
        ))}
      </ul>
    </div>
  );
}
