"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { storyMilestones } from "@/data/content";

/** Strip a trailing ":", "," or "." used for sentence flow in the source data. */
const cleanTopic = (s: string) => s.replace(/[\s:.,]+$/, "");

export default function ImpactTimeline() {
  const items = storyMilestones;
  const last = items.length - 1;

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const colRefs = useRef<Array<HTMLDivElement | null>>([]);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [padX, setPadX] = useState(24);
  const [dragging, setDragging] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  // Width of the leading/trailing gutter so the first & last node can reach
  // the viewport centre. Recomputed from real measurements on mount/resize.
  const measurePad = useCallback(() => {
    const vp = viewportRef.current;
    const col = colRefs.current[0];
    if (!vp || !col) return;
    const pad = Math.max(24, (vp.clientWidth - col.offsetWidth) / 2);
    setPadX(pad);
  }, []);

  // Derive the centred (active) milestone and the scroll-edge flags.
  const recompute = useCallback(() => {
    rafRef.current = null;
    const vp = viewportRef.current;
    if (!vp) return;
    const center = vp.scrollLeft + vp.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    colRefs.current.forEach((c, i) => {
      if (!c) return;
      const cc = c.offsetLeft + c.offsetWidth / 2;
      const d = Math.abs(cc - center);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
    const max = vp.scrollWidth - vp.clientWidth;
    setAtStart(vp.scrollLeft <= 1);
    setAtEnd(vp.scrollLeft >= max - 1);
  }, []);

  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(recompute);
    };
    const onResize = () => {
      measurePad();
      recompute();
    };
    vp.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    measurePad();
    recompute();
    return () => {
      vp.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [measurePad, recompute]);

  // The leading gutter (padX) shifts every column; recompute the active index
  // once React has painted the new padding, otherwise it reads stale offsets.
  useEffect(() => {
    recompute();
  }, [padX, recompute]);

  const scrollToIndex = useCallback(
    (idx: number) => {
      const vp = viewportRef.current;
      const col = colRefs.current[Math.max(0, Math.min(last, idx))];
      if (!vp || !col) return;
      const target = col.offsetLeft + col.offsetWidth / 2 - vp.clientWidth / 2;
      vp.scrollTo({ left: target, behavior: "smooth" });
    },
    [last],
  );

  // ── Drag to scroll ────────────────────────────────────────────────
  const drag = useRef({ startX: 0, startLeft: 0 });
  const onPointerDown = (e: React.PointerEvent) => {
    const vp = viewportRef.current;
    if (!vp) return;
    // Touch / pen scroll natively (touch-action: pan-x); drag is mouse only.
    if (e.pointerType !== "mouse") return;
    // Let buttons / links handle their own clicks.
    if ((e.target as HTMLElement).closest("button, a")) return;
    drag.current = { startX: e.clientX, startLeft: vp.scrollLeft };
    setDragging(true);
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: PointerEvent) => {
      const vp = viewportRef.current;
      if (!vp) return;
      vp.scrollLeft = drag.current.startLeft - (e.clientX - drag.current.startX);
    };
    const onUp = () => setDragging(false);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [dragging]);

  // ── Vertical wheel → horizontal scroll (only while timeline is in view) ──
  useEffect(() => {
    const vp = viewportRef.current;
    const section = sectionRef.current;
    if (!vp || !section) return;

    const isEngaged = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const visible = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
      // Ignore wheel until the timeline has scrolled into view (not just peeking at the bottom).
      if (rect.top > vh * 0.42) return false;
      if (visible < Math.min(rect.height * 0.38, vh * 0.34)) return false;
      return true;
    };

    const onWheel = (e: WheelEvent) => {
      if (!isEngaged()) return;
      // Trackpads with horizontal delta scroll natively.
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      if (e.deltaY === 0) return;
      const max = vp.scrollWidth - vp.clientWidth;
      const room = e.deltaY > 0 ? vp.scrollLeft < max - 1 : vp.scrollLeft > 1;
      if (!room) return; // at an edge → let the page scroll
      e.preventDefault();
      vp.scrollLeft += e.deltaY * 0.85;
    };
    vp.addEventListener("wheel", onWheel, { passive: false });
    return () => vp.removeEventListener("wheel", onWheel);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollToIndex(active - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollToIndex(active + 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      scrollToIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      scrollToIndex(last);
    }
  };

  // ── "Read more" modal ─────────────────────────────────────────────
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (openIdx != null && !d.open) d.showModal();
    if (openIdx == null && d.open) d.close();
  }, [openIdx]);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const onClose = () => setOpenIdx(null);
    d.addEventListener("close", onClose);
    return () => d.removeEventListener("close", onClose);
  }, []);

  const activeItem = openIdx != null ? items[openIdx] : null;

  return (
    <section ref={sectionRef} className="imp-tl" aria-labelledby="imp-tl-heading">
      <div className="imp-tl-shell">
        <header className="imp-tl-head">
          <p className="imp-tl-kicker">Six decades of impact</p>
          <h2 id="imp-tl-heading" className="imp-tl-title">
            Moments that <span className="imp-tl-title-accent">shaped Nepal</span>
          </h2>
          <p className="imp-tl-intro">
            From the first Toyota on Kathmandu&rsquo;s roads to the journey to Kailash &mdash;
            scroll, drag or use the arrows to travel through the milestones that built our story.
          </p>
        </header>

        <div className="imp-tl-frame">
          <div
            ref={viewportRef}
            className={`imp-tl-viewport${dragging ? " is-dragging" : ""}`}
            tabIndex={0}
            role="group"
            aria-roledescription="timeline carousel"
            aria-label="VOITH milestones"
            onPointerDown={onPointerDown}
            onKeyDown={onKeyDown}
          >
            <div className="imp-tl-track" style={{ paddingInline: `${padX}px` }}>
              <span className="imp-tl-axis" aria-hidden="true" />

              {items.map((m, i) => {
                const side = i % 2 === 0 ? "above" : "below";
                const isActive = i === active;
                return (
                  <div
                    key={i}
                    ref={(el) => {
                      colRefs.current[i] = el;
                    }}
                    className={`imp-tl-col imp-tl-col--${side}${
                      isActive ? " is-active" : ""
                    }`}
                  >
                    <article className="imp-tl-card">
                      <div className="imp-tl-card-media">
                        <img
                          src={m.image}
                          alt=""
                          loading="lazy"
                          draggable={false}
                          style={m.imagePosition ? { objectPosition: m.imagePosition } : undefined}
                        />
                        <span className="imp-tl-chip">{m.chipLabel}</span>
                      </div>
                      <div className="imp-tl-card-text">
                        <h3 className="imp-tl-card-topic">{cleanTopic(m.topic)}</h3>
                        <p className="imp-tl-card-body">{m.body}</p>
                        <button
                          type="button"
                          className="imp-tl-readmore"
                          onClick={() => setOpenIdx(i)}
                        >
                          Read more <span aria-hidden="true">&rarr;</span>
                        </button>
                      </div>
                    </article>

                    <span className="imp-tl-stem" aria-hidden="true" />
                    <button
                      type="button"
                      className="imp-tl-node"
                      aria-label={`Jump to ${m.year}: ${cleanTopic(m.topic)}`}
                      aria-current={isActive ? "true" : undefined}
                      onClick={() => scrollToIndex(i)}
                    />
                    <span className="imp-tl-year">{m.year}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="imp-tl-nav">
            <button
              type="button"
              className="imp-tl-arrow"
              onClick={() => scrollToIndex(active - 1)}
              disabled={atStart}
              aria-label="Previous milestone"
            >
              &lsaquo;
            </button>
            <span className="imp-tl-nav-div" aria-hidden="true" />
            <button
              type="button"
              className="imp-tl-arrow"
              onClick={() => scrollToIndex(active + 1)}
              disabled={atEnd}
              aria-label="Next milestone"
            >
              &rsaquo;
            </button>
          </div>
        </div>

        <div className="imp-tl-foot">
          <p className="imp-tl-counter">
            <strong>{String(active + 1).padStart(2, "0")}</strong>
            <span> / {String(items.length).padStart(2, "0")}</span>
          </p>
          <div className="imp-tl-rail" aria-hidden="true">
            <span
              className="imp-tl-rail-fill"
              style={{ width: `${last === 0 ? 100 : (active / last) * 100}%` }}
            />
          </div>
          <p className="imp-tl-hint">Drag &middot; scroll &middot; &lsaquo;&nbsp;&rsaquo;</p>
        </div>
      </div>

      <dialog ref={dialogRef} className="imp-tl-dialog" aria-label="Milestone detail">
        {activeItem ? (
          <div className="imp-tl-dialog-inner">
            <button
              type="button"
              className="imp-tl-dialog-close"
              onClick={() => setOpenIdx(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <div
              className="imp-tl-dialog-media"
              style={{
                backgroundImage: `url(${activeItem.image})`,
                ...(activeItem.imagePosition
                  ? { backgroundPosition: activeItem.imagePosition }
                  : {}),
              }}
              aria-hidden="true"
            />
            <div className="imp-tl-dialog-body">
              <p className="imp-tl-dialog-year">{activeItem.year}</p>
              <h3 className="imp-tl-dialog-topic">{cleanTopic(activeItem.topic)}</h3>
              {activeItem.body.split(/\n+/).map((para, i) => (
                <p key={i} className="imp-tl-dialog-text">
                  {para}
                </p>
              ))}
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
