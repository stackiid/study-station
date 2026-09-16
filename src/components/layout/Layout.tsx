import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageTransitionOverlay } from "./PageTransitionOverlay";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { cx } from "../../utils/helpers";

const TRANSITION_MS = 1000;

/**
 * App shell: floating header, routed page content, footer, plus the
 * in-app navigation transition (brief loading overlay -> fade-in) so
 * switching pages never reads as an instant, jarring pop-in.
 */
export function Layout() {
  const { pathname } = useLocation();
  const reducedMotion = useReducedMotion();

  const [settledPathname, setSettledPathname] = useState(pathname);
  const [transitioning, setTransitioning] = useState(false);
  const [revealed, setRevealed] = useState(true);
  // Whether the NEXT opacity change on <main> should apply with no CSS
  // transition at all - true for the split second navigation starts
  // (hiding must be instant: <Outlet/> has already swapped in the new
  // page's DOM by this point, so animating opacity down from 1 would mean
  // that new page's content is visible, fading, for the first ~100-200ms -
  // which is exactly the flicker this exists to prevent), false once it's
  // time for the smooth reveal fade-in.
  const [instantHide, setInstantHide] = useState(false);
  const isNavigating = pathname !== settledPathname;

  // Detecting the navigation and starting the transition is a state
  // adjustment in response to a prop change (`pathname`) - React's own
  // documented pattern for this is to do it directly during render, not in
  // an effect, so it takes effect in the very same render instead of one
  // tick later - and specifically before <Outlet/> below ever gets a
  // chance to paint the new page at visible opacity. Reduced-motion
  // settles immediately with no staged transition at all.
  if (isNavigating && reducedMotion) {
    setSettledPathname(pathname);
  } else if (isNavigating && !transitioning) {
    setTransitioning(true);
    setRevealed(false);
    setInstantHide(true);
  }

  // The timer and the scroll reset are genuine external-system work
  // (an actual timer, an actual browser API), so - unlike the state
  // adjustment above - these belong in an effect.
  useEffect(() => {
    if (!transitioning) return;

    // Jump to the top while the overlay covers the screen, so the new
    // page is never visible mid-scroll when it's revealed.
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

    const hideTimer = window.setTimeout(() => {
      setTransitioning(false);
      setSettledPathname(pathname);
      setInstantHide(false);
      // One frame later, so the browser registers "transition is now
      // active, still at opacity 0" as a separate paint from "opacity is
      // now 1" - the same reasoning as any enter-transition that needs a
      // frame between mount and its target state to actually animate.
      requestAnimationFrame(() => setRevealed(true));
    }, TRANSITION_MS);

    return () => window.clearTimeout(hideTimer);
  }, [transitioning, pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main
        className={cx(
          "flex-1 pt-[5.25rem] sm:pt-[5.75rem]",
          !reducedMotion && !instantHide && "transition-opacity duration-500 ease-out",
          revealed ? "opacity-100" : "opacity-0",
        )}
      >
        <Outlet />
      </main>
      <Footer />
      {transitioning && <PageTransitionOverlay />}
    </div>
  );
}
