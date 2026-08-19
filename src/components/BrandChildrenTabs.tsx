"use client";

import { useState } from "react";
import Link from "next/link";
import type { ChildBrand } from "@/data/content";
import CardMedia from "./CardMedia";

type Props = {
  title: string;
  children: ChildBrand[];
  /** Category tabs in display order, e.g. ["Four Wheelers", "Two Wheelers"]. */
  groupOrder: string[];
  companyBase: string;
  color: string;
  fallbackImage?: string;
};

const ALL = "All";
const OTHER = "Other";

export default function BrandChildrenTabs({
  title,
  children,
  groupOrder,
  companyBase,
  color,
  fallbackImage,
}: Props) {
  // Only show tabs for categories that actually have brands.
  const present = groupOrder.filter((g) =>
    children.some((c) => c.category === g),
  );
  const hasUncategorised = children.some(
    (c) => !c.category || !groupOrder.includes(c.category),
  );
  const tabs = [ALL, ...present, ...(hasUncategorised ? [OTHER] : [])];

  const [active, setActive] = useState(ALL);

  const visible =
    active === ALL
      ? children
      : active === OTHER
        ? children.filter(
            (c) => !c.category || !groupOrder.includes(c.category),
          )
        : children.filter((c) => c.category === active);

  return (
    <section className="brand-tabs">
      <div className="brand-tabs-head">
        <h2 className="brand-section-title">{title}</h2>
      </div>

      <div className="brand-tabs-bar" role="tablist" aria-label="Filter brands by type">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={active === t}
            className={`brand-tab${active === t ? " is-active" : ""}`}
            onClick={() => setActive(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="brand-tabs-meta">
        <p className="brand-tabs-cat">{active === ALL ? "All brands" : active}</p>
        <p className="brand-tabs-shown">
          {visible.length} {visible.length === 1 ? "brand" : "brands"} shown
        </p>
      </div>

      <div className="brand-tabs-grid" key={active}>
        {visible.map((c) => (
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
