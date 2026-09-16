import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * Wraps a single card in a filterable/searchable grid (Courses, Resources,
 * Tutorials) so it fades + scales in when it starts matching the current
 * filter, and fades + scales out (instead of vanishing instantly) when it
 * stops matching. Pair with `<AnimatePresence mode="popLayout">` around
 * the list of these, keyed by each item's stable id, so Framer Motion can
 * tell additions from removals from just-repositioned survivors.
 *
 * The `layout` prop is what makes surviving siblings smoothly slide into
 * the gap a removed card leaves behind, instead of the grid reflowing
 * instantly - `mode="popLayout"` on the parent AnimatePresence is what
 * lets that reflow start immediately rather than waiting for the exiting
 * card's own animation to finish first.
 *
 * Framer Motion's own `MotionConfig reducedMotion="user"` (set once, app-
 * wide, in Root.tsx) only suppresses the *positional* part of `layout`
 * animations - it deliberately does not touch explicit `initial`/
 * `animate`/`exit` props like the fade+scale below, since those are
 * treated as intentional rather than incidental motion. So this still
 * checks our own `useReducedMotion()`, the same way every other animation
 * in the app does, to fully disable the transition (not just the reflow)
 * when the user has that preference set.
 */
export function AnimatedGridItem({ children, className }: { children: ReactNode; className?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      layout={!reducedMotion}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
