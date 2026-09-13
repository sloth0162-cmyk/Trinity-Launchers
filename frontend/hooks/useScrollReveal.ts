"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollReveal(
  ref: React.RefObject<HTMLElement | null>,
  threshold = 0.12
): boolean {
  const [revealed, setRevealed] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion — reveal immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observerRef.current?.disconnect();
          }
        });
      },
      { threshold }
    );

    observerRef.current.observe(el);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [ref, threshold]);

  return revealed;
}
