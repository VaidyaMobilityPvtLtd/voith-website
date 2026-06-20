"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { ChildBrand } from "@/data/content";
import CardMedia from "./CardMedia";

type Props = {
  title: string;
  children: ChildBrand[];
  companyBase: string;
  color: string;
  fallbackImage?: string;
};

export default function BrandChildrenCarousel({
  title,
  children,
  companyBase,
  color,
  fallbackImage,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft >= max - 1);
  }, []);

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollByCard = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".brand-child-card");
    const step = card ? card.offsetWidth + 18 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  return (
    <section className="brand-children">
      <div className="brand-children-head">
        <h2 className="brand-section-title">{title}</h2>
        <div className="brand-children-nav">
          <button
            type="button"
            className="brand-children-arrow"
            aria-label="Previous brands"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            className="brand-children-arrow"
            aria-label="Next brands"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <div className="brand-children-track" ref={trackRef}>
        {children.map((c) => (
          <Link
            key={c.slug}
            href={`${companyBase}/${c.slug}`}
            className="brand-child-card"
          >
            <CardMedia
              image={c.image ?? fallbackImage}
              logo={c.logo}
              mark={c.mark}
              name={c.name}
              color={color}
            />
            <div className="brand-child-body">
              <h3>{c.name}</h3>
              <p className="brand-child-role">{c.role}</p>
              <span className="brand-child-cta" aria-hidden="true">
                View brand <span className="brand-child-cta-arrow">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
