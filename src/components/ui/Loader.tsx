import { useEffect, useState } from "react";
import { LogoMark } from "./LogoMark";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const MIN_DISPLAY_MS = 1900;

/**
 * Shows immediately on first paint and holds for a controlled minimum
 * duration (not tied to any network request) before fading out, so the
 * brand always gets a brief, intentional moment on screen without making
 * the app feel slow.
 */
export function Loader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setFading(true), MIN_DISPLAY_MS);
    const removeTimer = window.setTimeout(
      () => setVisible(false),
      MIN_DISPLAY_MS + (reducedMotion ? 0 : 420),
    );
    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, [reducedMotion]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Study Station"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-paper transition-opacity duration-400 ease-out ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative">
        <LogoMark className="h-16 w-16 sm:h-20 sm:w-20 animate-[pulse_1.6s_ease-in-out_infinite]" />
        <span className="absolute -inset-3 rounded-full border-2 border-teal-700/15 border-t-coral-500 animate-spin motion-reduce:animate-none" />
      </div>
      <p className="font-display text-sm font-semibold tracking-[0.2em] uppercase text-teal-700">
        Study Station
      </p>
    </div>
  );
}
