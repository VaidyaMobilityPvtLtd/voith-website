"use client";

import { useMemo, useState } from "react";
import {
  mapBrands,
  mapDots,
  type MapBrand,
  type MapBrandKey,
} from "@/data/content";

const MAP_IMG = "/nepal.svg";
/** Base dot width as % of the map image (source markers are ~16px of 1341). */
const DOT_SIZE_PCT = 1.6;

export default function NepalFootprintMap() {
  const [hovered, setHovered] = useState<MapBrandKey | null>(null);
  const [pinned, setPinned] = useState<MapBrandKey | null>(null);
  const active = pinned ?? hovered;

  const brandByKey = useMemo(
    () => new Map(mapBrands.map((b) => [b.key, b])),
    []
  );
  const dotCounts = useMemo(() => {
    const counts = new Map<MapBrandKey, number>();
    for (const d of mapDots) {
      counts.set(d.brand, (counts.get(d.brand) ?? 0) + 1);
    }
    return counts;
  }, []);

  const automotive = mapBrands.filter((b) => b.group === "automotive");
  const others = mapBrands.filter((b) => b.group === "others");

  const legendProps = {
    counts: dotCounts,
    pinned,
    onHover: setHovered,
    onToggle: (key: MapBrandKey) => {
      // A deliberate click supersedes hover intent. Clearing `hovered` here
      // also prevents a stuck filter on touch devices, where a tap fires
      // mouseenter (setting hovered) but the re-tap that unpins never fires
      // mouseleave/blur — leaving `active` pinned to the emulated hover.
      setHovered(null);
      setPinned((prev) => (prev === key ? null : key));
    },
  };

  return (
    <div className="nm-wrap">
      <div className="nm-layout">
        <div className="nm-frame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={MAP_IMG}
            alt="VOITH sales and service footprint across Nepal"
            className="nm-map-img"
            loading="lazy"
          />
          <div className="nm-dots">
            {mapDots.map((dot) => {
              const brand = brandByKey.get(dot.brand);
              if (!brand) return null;
              const dimmed = active !== null && active !== dot.brand;
              const edgeRight = dot.x > 88;
              // A dot is only an interactive/focusable control once it carries
              // its own detail (city/label). Until then it's a decorative
              // marker — the legend already conveys the brands to keyboard and
              // screen-reader users, so we don't add 52 empty tab stops.
              const detailed = Boolean(dot.city || dot.label);
              const className = `nm-dot${dimmed ? " nm-dot--dim" : ""}${
                edgeRight ? " nm-dot--edge-r" : ""
              }`;
              const style = {
                left: `${dot.x}%`,
                top: `${dot.y}%`,
                width: `${DOT_SIZE_PCT * (dot.size ?? 1)}%`,
                background: brand.color,
              };
              const tip = (
                <span className="nm-dot-tip" role="tooltip">
                  <strong>{brand.name}</strong>
                  {dot.city ? <span>{dot.city}</span> : null}
                  {dot.label ? <span>{dot.label}</span> : null}
                </span>
              );

              if (detailed) {
                return (
                  <button
                    key={dot.id}
                    type="button"
                    className={className}
                    style={style}
                    aria-label={[brand.name, dot.city, dot.label]
                      .filter(Boolean)
                      .join(" — ")}
                  >
                    {tip}
                  </button>
                );
              }
              return (
                <span
                  key={dot.id}
                  className={className}
                  style={style}
                  aria-hidden="true"
                >
                  {tip}
                </span>
              );
            })}
          </div>
        </div>

        <aside className="nm-legend" aria-label="Map legend">
          <p className="nm-legend-title">On the map</p>
          <LegendGroup label="Automotive" brands={automotive} {...legendProps} />
          <LegendGroup label="Others" brands={others} {...legendProps} />
        </aside>
      </div>

      <p className="nm-caption">
        Sales, service &amp; experience points across all seven provinces of Nepal
      </p>
    </div>
  );
}

function LegendGroup({
  label,
  brands,
  counts,
  pinned,
  onHover,
  onToggle,
}: {
  label: string;
  brands: MapBrand[];
  counts: Map<MapBrandKey, number>;
  pinned: MapBrandKey | null;
  onHover: (key: MapBrandKey | null) => void;
  onToggle: (key: MapBrandKey) => void;
}) {
  return (
    <>
      <p className="nm-legend-group">{label}</p>
      <ul className="nm-legend-list">
        {brands.map((b) => {
          const count = counts.get(b.key) ?? 0;
          return (
            <li key={b.key} className="nm-legend-item">
              <button
                type="button"
                className={`nm-legend-btn${
                  pinned === b.key ? " nm-legend-btn--pinned" : ""
                }`}
                onMouseEnter={() => onHover(b.key)}
                onMouseLeave={() => onHover(null)}
                onFocus={() => onHover(b.key)}
                onBlur={() => onHover(null)}
                onClick={() => onToggle(b.key)}
                aria-pressed={pinned === b.key}
              >
                <span
                  className="nm-legend-dot"
                  style={{ background: b.color }}
                  aria-hidden="true"
                />
                <span className="nm-legend-text">
                  <span className="nm-legend-name">{b.name}</span>
                  {count > 0 ? (
                    <span className="nm-legend-count">
                      {count} on map
                    </span>
                  ) : null}
                  {b.note ? (
                    <span className="nm-legend-note">{b.note}</span>
                  ) : null}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
