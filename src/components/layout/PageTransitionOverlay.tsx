import { Spinner } from "../ui/Spinner";

/**
 * Shown for a brief, fixed window while Layout stages a route change (see
 * Layout.tsx) - covers the outgoing page, then is unmounted right as the
 * new page's content starts its own fade-in, so the handoff between the
 * two reads as one continuous transition rather than a blink.
 */
export function PageTransitionOverlay() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading page"
      className="fixed inset-0 z-[95] flex items-center justify-center bg-paper animate-[fadeIn_0.15s_ease-out]"
    >
      <Spinner size="md" />
    </div>
  );
}
