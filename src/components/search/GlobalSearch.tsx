import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";
import { SearchEmptyState } from "./SearchEmptyState";
import { searchContent } from "../../utils/search";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useRecentSearches } from "../../hooks/useRecentSearches";
import { cx } from "../../utils/helpers";

const OVERLAY_RESULT_LIMIT = 8;

/**
 * Renders both the desktop and mobile search triggers plus the shared
 * overlay, as a single component instance. This is deliberate: mounting
 * two separate <GlobalSearch> instances (one per breakpoint) would give
 * each its own `open` state, its own global keydown listener, and its own
 * body-scroll lock - which can desync (e.g. the "/" shortcut opening both
 * at once) and leave the page scroll-locked after closing just one. One
 * instance, two trigger buttons shown/hidden by CSS, guarantees exactly
 * one source of truth.
 */
export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const reducedMotion = useReducedMotion();
  const { recent, addSearch, clearSearches } = useRecentSearches();

  const results = searchContent(query, { limit: OVERLAY_RESULT_LIMIT });

  // Three-piece animation state, so the overlay gets a real fade in both
  // directions instead of popping in and hard-unmounting on close:
  //  - `open`: the logical/requested state (what keyboard-nav cares about)
  //  - `mounted`: whether the overlay's DOM node exists at all
  //  - `shown`: whether it's showing its "visible" transition classes
  // Both transitions are triggered synchronously from the event that
  // causes them (openOverlay / close below) - the only thing that
  // actually needs an effect is delaying the *unmount* until the
  // fade-out's CSS transition has finished playing, which is genuine
  // synchronization with an external timer.
  const EXIT_MS = reducedMotion ? 0 : 200;
  const [mounted, setMounted] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (open || !mounted) return;

    const id = window.setTimeout(() => {
      setMounted(false);
      // Reset content only once fully hidden, so the fade-out plays over
      // the last thing the user saw instead of an emptied panel.
      setQuery("");
      setActiveIndex(-1);
    }, EXIT_MS);
    return () => window.clearTimeout(id);
  }, [open, mounted, EXIT_MS]);

  useEffect(() => {
    if (mounted && open) {
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }
  }, [mounted, open]);

  // Locked for the overlay's entire visible lifetime, including the
  // fade-out - not just while `open` is strictly true - so the page can't
  // be scrolled interactively behind a still-fading panel.
  useBodyScrollLock(mounted);

  const setQueryAndReset = useCallback((value: string) => {
    setQuery(value);
    setActiveIndex(-1);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    // Start the fade-out immediately (synchronous, event-driven) - the
    // effect above only handles the delayed *unmount* once it finishes.
    setShown(false);
  }, []);

  const openOverlay = useCallback(() => {
    setOpen(true);
    setMounted(true);
  }, []);

  // Focus the input as soon as the overlay mounts.
  useEffect(() => {
    if (open) {
      const id = window.setTimeout(() => inputRef.current?.focus(), reducedMotion ? 0 : 60);
      return () => window.clearTimeout(id);
    }
  }, [open, reducedMotion]);

  // Keydown handling reads from a ref rather than closing over state
  // directly, so the effect below can attach its document-level listener
  // exactly once (on mount) instead of tearing it down and re-adding it on
  // every render. That matters here specifically: `results` is a fresh
  // array on every render, so if it were a dependency of this effect, the
  // listener would churn constantly, opening a window where it can miss
  // events that a sibling component's own listener (e.g. the mobile nav's
  // Escape handler) fires in the same tick - which is exactly what caused
  // scroll to stay locked after closing the overlay in some situations.
  const latest = useRef({ open, results, activeIndex, query });
  useLayoutEffect(() => {
    latest.current = { open, results, activeIndex, query };
  });

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const { open, results, activeIndex, query } = latest.current;
      const target = event.target as HTMLElement | null;
      const isTyping = target && ["INPUT", "TEXTAREA"].includes(target.tagName);

      if (event.key === "/" && !isTyping && !open) {
        event.preventDefault();
        openOverlay();
        return;
      }

      if (!open) return;

      if (event.key === "Escape") {
        close();
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((previous) => Math.min(previous + 1, results.length - 1));
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((previous) => Math.max(previous - 1, -1));
      } else if (event.key === "Enter") {
        if (activeIndex >= 0 && results[activeIndex]) {
          event.preventDefault();
          const item = results[activeIndex].item;
          addSearch(query);
          if (item.type === "course" && item.comingSoon) {
            navigate(`/courses#${item.id}`);
          } else {
            window.open(item.url, "_blank", "noopener,noreferrer");
          }
          close();
        } else if (query.trim().length > 0) {
          addSearch(query);
          navigate(`/search?q=${encodeURIComponent(query.trim())}`);
          close();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    // Deliberately excludes `open`/`results`/`activeIndex`/`query` - those
    // are read from the `latest` ref above so this effect (and the native
    // listener it attaches) only ever runs once, on mount. `close`,
    // `openOverlay`, and `addSearch` are stable (useCallback/useCallback
    // internally with empty deps); `navigate` is stable per React Router.
  }, [close, openOverlay, navigate, addSearch]);

  return (
    <>
      {/* Desktop trigger: visible md and up */}
      <button
        type="button"
        onClick={openOverlay}
        className="hidden md:flex items-center gap-3 w-56 lg:w-64 rounded-full border border-ink-900/10 bg-white/70 px-4 py-2 text-sm text-ink-300 shadow-soft hover:border-teal-500/40 hover:text-ink-500 transition-colors"
      >
        <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
        <span className="flex-1 text-left">Search courses, tools...</span>
        <kbd className="rounded-md border border-ink-900/10 bg-ink-900/5 px-1.5 py-0.5 text-[0.65rem] font-semibold">
          /
        </kbd>
      </button>

      {/* Mobile trigger: visible below md */}
      <button
        type="button"
        onClick={openOverlay}
        aria-label="Open search"
        className="flex h-10 w-10 items-center justify-center rounded-full text-teal-800 hover:bg-teal-700/8 transition-colors md:hidden"
      >
        <i className="fa-solid fa-magnifying-glass text-lg" aria-hidden="true" />
      </button>

      {mounted &&
        createPortal(
          <div
            className={cx(
              "fixed inset-0 z-[90] flex items-start justify-center bg-teal-900/40 backdrop-blur-sm px-4 pt-20 sm:pt-28",
              "transition-opacity duration-200 ease-out",
              shown ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
            onClick={(event) => {
              if (event.target === event.currentTarget) close();
            }}
          >
            <div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Site search"
              className={cx(
                "w-full max-w-xl surface-card p-4 sm:p-5 max-h-[75vh] flex flex-col",
                "transition-[opacity,transform] duration-200 ease-out",
                shown ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-[0.97] -translate-y-1",
              )}
            >
              <div className="flex items-center gap-2">
                <SearchInput
                  ref={inputRef}
                  size="lg"
                  value={query}
                  onChange={(event) => setQueryAndReset(event.target.value)}
                  onClear={() => setQueryAndReset("")}
                  placeholder="Search courses, resources, tutorials..."
                  aria-label="Search Study Station"
                />
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close search"
                  className="shrink-0 rounded-full p-2.5 text-sm font-medium text-ink-500 hover:bg-ink-900/5 sm:px-3 sm:py-2"
                >
                  <i className="fa-solid fa-xmark text-base sm:hidden" aria-hidden="true" />
                  <span className="hidden sm:inline">Esc</span>
                </button>
              </div>

              <div className="mt-4 overflow-y-auto no-scrollbar">
                {query.trim().length === 0 ? (
                  recent.length > 0 ? (
                    <div>
                      <div className="flex items-center justify-between px-1 pb-2">
                        <p className="text-xs font-semibold uppercase tracking-wide text-ink-300">Recent searches</p>
                        <button
                          type="button"
                          onClick={clearSearches}
                          className="text-xs font-medium text-ink-300 hover:text-ink-500"
                        >
                          Clear
                        </button>
                      </div>
                      <ul className="flex flex-wrap gap-2 px-1">
                        {recent.map((term) => (
                          <li key={term}>
                            <button
                              type="button"
                              onClick={() => setQueryAndReset(term)}
                              className="rounded-full bg-ink-900/[0.04] px-3 py-1.5 text-sm text-ink-700 hover:bg-ink-900/[0.08]"
                            >
                              {term}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="px-1 py-6 text-center text-sm text-ink-300">
                      Start typing to search across every course, resource, and tutorial.
                    </p>
                  )
                ) : results.length > 0 ? (
                  <SearchResults
                    results={results}
                    activeIndex={activeIndex}
                    onNavigate={() => {
                      addSearch(query);
                      close();
                    }}
                  />
                ) : (
                  <SearchEmptyState query={query} onReset={() => setQueryAndReset("")} />
                )}
              </div>

              {query.trim().length > 0 && results.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    addSearch(query);
                    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
                    close();
                  }}
                  className="mt-3 shrink-0 rounded-xl border border-teal-700/10 bg-teal-50 px-4 py-2.5 text-sm font-semibold text-teal-700 hover:bg-teal-100 transition-colors"
                >
                  See all results for &ldquo;{query}&rdquo;
                </button>
              )}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
