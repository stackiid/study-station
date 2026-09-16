import { useEffect, useState } from "react";

/**
 * Reports whether the window is currently scrolled further than
 * `threshold` pixels from the top.
 *
 * Used by the Home hero's mobile "Scroll down" hint, which should only be
 * visible while the visitor is still parked at the top of the page. A
 * plain passive scroll listener is deliberately chosen over an
 * IntersectionObserver here: the thing being measured is "how far down the
 * page are we", not "is some element on screen", and expressing it
 * directly keeps the hint's behaviour independent of the hero's own
 * height (which varies with viewport size).
 *
 * The listener is passive (it never calls preventDefault) so it can't
 * block scrolling, and state is only updated when the boolean actually
 * flips - not on every scroll event - so this triggers at most two
 * re-renders per crossing of the threshold rather than dozens per swipe.
 */
export function useScrolledPast(threshold = 50): boolean {
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const next = window.scrollY > threshold;
      setScrolledPast((current) => (current === next ? current : next));
    }

    // Run once on mount so a restored scroll position (e.g. a back
    // navigation landing mid-page) is reflected immediately, rather than
    // waiting for the first scroll event.
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolledPast;
}
