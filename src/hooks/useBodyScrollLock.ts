import { useEffect } from "react";

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

export function useBodyScrollLock(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;

    acquireLock();
    return () => releaseLock();
  }, [locked]);
}
