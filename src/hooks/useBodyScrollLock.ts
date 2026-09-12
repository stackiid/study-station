import { useEffect } from "react";

/**
 * Module-level, reference-counted scroll lock.
 *
 * More than one component can legitimately want scroll locked at the same
 * time (e.g. the search overlay opened via the "/" shortcut while the
 * mobile nav drawer is still open). A shared counter means the lock is
 * only applied on the very first caller (0 -> 1) and only released once
 * every caller has released (1 -> 0), regardless of order or how many
 * components call this hook.
 *
 * Implementation: `overflow: hidden` on the root element, not the
 * `position: fixed` + negative-top-offset + `window.scrollTo()` trick.
 * That older technique requires capturing and later restoring the real
 * scroll position, which is fragile in a very specific way: resetting
 * `position: fixed` back to normal makes the page visually snap to the
 * top for a frame (a fixed-position body doesn't contribute to the
 * document's scrollable height, so the browser has nowhere to keep the
 * "true" scroll position while it's active), and the follow-up
 * `window.scrollTo()` call to restore it then respects this site's global
 * `scroll-behavior: smooth`, animating the page from the top back down to
 * wherever it was - exactly the visible jump this hook exists to prevent.
 *
 * `overflow: hidden` sidesteps the whole problem: it never reads or
 * writes a scroll position at all, so there is nothing to restore and
 * nothing that can visibly animate. The page simply can't scroll while
 * locked, and is exactly where it was the instant it can again.
 *
 * The one thing this technique needs to handle itself is the layout shift
 * from the vertical scrollbar disappearing (page content would otherwise
 * shift a few pixels right while locked) - compensated for below by
 * padding the root element by the scrollbar's width for the duration of
 * the lock.
 */
let lockCount = 0;
let savedOverflow = "";
let savedPaddingRight = "";

function acquireLock() {
  if (lockCount === 0) {
    const root = document.documentElement;
    savedOverflow = root.style.overflow;
    savedPaddingRight = root.style.paddingRight;

    const scrollbarWidth = window.innerWidth - root.clientWidth;
    root.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      root.style.paddingRight = `${scrollbarWidth}px`;
    }
  }
  lockCount += 1;
}

function releaseLock() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    const root = document.documentElement;
    root.style.overflow = savedOverflow;
    root.style.paddingRight = savedPaddingRight;
  }
}

/**
 * Locks scroll while `locked` is true. Used by the mobile nav and the
 * search overlay so the page behind them can't scroll. Safe to call from
 * multiple components at once - see module comment above. Never moves or
 * touches the current scroll position.
 */
export function useBodyScrollLock(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;

    acquireLock();
    return () => releaseLock();
  }, [locked]);
}
