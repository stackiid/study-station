import { useEffect, useState } from "react";

export function useScrolledPast(threshold = 50): boolean {
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const next = window.scrollY > threshold;
      setScrolledPast((current) => (current === next ? current : next));
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolledPast;
}
