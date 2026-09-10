import { useEffect, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const MIN_DISPLAY_MS = 1400;

/**
 * Shows immediately on first paint and holds for a controlled minimum
 * duration (not tied to any network request) before fading out. Kept
 * intentionally minimal - a single spinner, no brand mark - so it reads
 * as a quick loading beat rather than a splash screen.
 */
export function Loader({ onFinished }: { onFinished?: () => void }) {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setFading(true), MIN_DISPLAY_MS);
    const removeTimer = window.setTimeout(
      () => {
        setVisible(false);
        onFinished?.();
      },
      MIN_DISPLAY_MS + (reducedMotion ? 0 : 380),
    );
    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, [reducedMotion, onFinished]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Study Station"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-paper transition-opacity duration-350 ease-out ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <span
        className="h-11 w-11 rounded-full border-[3px] border-teal-700/15 border-t-coral-500 animate-spin motion-reduce:animate-none"
        aria-hidden="true"
      />
      <p className="font-display text-xs font-semibold tracking-[0.24em] uppercase text-teal-700/70">
        Study Station
      </p>
    </div>
  );
}
