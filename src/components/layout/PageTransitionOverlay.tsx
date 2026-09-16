import { Spinner } from "../ui/Spinner";

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
