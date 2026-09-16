import { Spinner } from "../ui/Spinner";

/**
 * Shown for a brief, fixed window while Layout stages a route change (see
 * Layout.tsx) - covers the outgoing page, then is unmounted right as the
 * new page's content starts its own fade-in, so the handoff between the
 * two reads as one continuous transition rather than a blink.
 *
 * Appears at full opacity immediately, with no fade-in of its own -
 * <main> underneath is already hidden instantly the moment this mounts
 * (see Layout.tsx's `instantHide`), but giving this its own gradual
 * fade-in would still open a brief window where whatever's behind it
 * (the header, the footer) shows through a semi-transparent overlay,
 * which is its own small version of the flicker this component exists to
 * prevent entirely.
 */
export function PageTransitionOverlay() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading page"
      className="fixed inset-0 z-[95] flex items-center justify-center bg-paper"
    >
      <Spinner size="md" />
    </div>
  );
}
