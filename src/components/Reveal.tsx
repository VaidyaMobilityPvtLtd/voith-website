"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealProps = {
  as?: ElementType;
  delay?: 1 | 2 | 3 | 4;
  className?: string;
  children: ReactNode;
} & Record<string, unknown>;

export default function Reveal({
  as: Tag = "div",
  delay,
  className = "",
  children,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.07 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);


  const classes = ["rev", delay ? `d${delay}` : "", className].filter(Boolean).join(" ");

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
