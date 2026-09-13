import { useEffect, useState } from "react";
import { Spinner } from "./Spinner";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const MIN_DISPLAY_MS = 1400;

/**
 * Shows immediately on first paint and holds for a controlled minimum
 * duration (not tied to any network request) before fading out. Kept
 * intentionally minimal - a single spinner, nothing else - so it reads as
 * a quick loading beat rather than a splash screen.
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
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-paper transition-opacity duration-350 ease-out ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <Spinner size="md" />
    </div>
  );
}
