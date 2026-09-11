import { useEffect } from "react";

let lockCount = 0;
let savedScrollY = 0;
let savedPosition = "";
let savedTop = "";
let savedWidth = "";

function acquireLock() {
  if (lockCount === 0) {
    savedScrollY = window.scrollY;
    const { body } = document;
    savedPosition = body.style.position;
    savedTop = body.style.top;
    savedWidth = body.style.width;

    body.style.position = "fixed";
    body.style.top = `-${savedScrollY}px`;
    body.style.width = "100%";
  }
  lockCount += 1;
}

function releaseLock() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    const { body } = document;
    body.style.position = savedPosition;
    body.style.top = savedTop;
    body.style.width = savedWidth;
    window.scrollTo(0, savedScrollY);
  }
}

export function useBodyScrollLock(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;

    acquireLock();
    return () => releaseLock();
  }, [locked]);
}
