import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageTransitionOverlay } from "./PageTransitionOverlay";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { cx } from "../../utils/helpers";

const TRANSITION_MS = 1000;

export function Layout() {
  const { pathname } = useLocation();
  const reducedMotion = useReducedMotion();

  const [settledPathname, setSettledPathname] = useState(pathname);
  const [transitioning, setTransitioning] = useState(false);
  const [revealed, setRevealed] = useState(true);

  const [instantHide, setInstantHide] = useState(false);
  const isNavigating = pathname !== settledPathname;

  if (isNavigating && reducedMotion) {
    setSettledPathname(pathname);
  } else if (isNavigating && !transitioning) {
    setTransitioning(true);
    setRevealed(false);
    setInstantHide(true);
  }

  useEffect(() => {
    if (!transitioning) return;

    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

    const hideTimer = window.setTimeout(() => {
      setTransitioning(false);
      setSettledPathname(pathname);
      setInstantHide(false);

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
          !reducedMotion &&
            !instantHide &&
            "transition-opacity duration-500 ease-out",
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
