import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "./useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  selector?: string;
  y?: number;
  stagger?: number;
  duration?: number;
  start?: string;
}

export function useScrollReveal<T extends HTMLElement>(
  containerRef: RefObject<T | null>,
  {
    selector = "[data-reveal]",
    y = 24,
    stagger = 0.08,
    duration = 0.6,
    start = "top 85%",
  }: ScrollRevealOptions = {},
) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = container.querySelectorAll<HTMLElement>(selector);
    if (targets.length === 0) return;

    if (reducedMotion) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(targets, { opacity: 0, y });

    const trigger = gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: "play none none none",
      },
    });

    return () => {
      trigger.scrollTrigger?.kill();
      trigger.kill();
    };
  }, [containerRef, selector, y, stagger, duration, start, reducedMotion]);
}
