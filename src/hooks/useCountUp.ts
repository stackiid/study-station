import { useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

interface UseCountUpOptions {
  /** How long the count-up itself takes, in ms. */
  duration?: number;
  /** Delay before the count-up starts, in ms. */
  delay?: number;
}

export function useCountUp(
  target: number,
  { duration = 1200, delay = 0 }: UseCountUpOptions = {},
): number {
  const reducedMotion = useReducedMotion();
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;

    let rafId: number;
    let startTime: number | null = null;

    function tick(now: number) {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3; // ease-out cubic
      setAnimatedValue(Math.round(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    }

    const timeoutId = window.setTimeout(() => {
      rafId = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [target, duration, delay, reducedMotion]);

  return reducedMotion ? target : animatedValue;
}
