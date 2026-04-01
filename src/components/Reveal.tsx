"use client";

import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  className,
  as: Component = "div",
  once = true,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return (
    <Component
      // React doesn't love generic refs on ElementType; this works well enough in practice.
      ref={(node: HTMLElement | null) => {
        ref.current = node;
      }}
      className={["te-reveal", visible ? "is-visible" : "", className ?? ""].join(
        " ",
      )}
    >
      {children}
    </Component>
  );
}

