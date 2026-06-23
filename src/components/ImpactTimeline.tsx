"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { storyMilestones } from "@/data/content";

const SCROLL_PER_STEP_VH = 14;

const cleanTopic = (s: string) => s.replace(/[\s:.,]+$/, "");

export default function ImpactTimeline() {
  const items = storyMilestones;
  const last = items.length - 1;

  const sectionRef = useRef<HTMLElement | null>(null);
  const headRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const colRefs = useRef<Array<HTMLDivElement | null>>([]);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [padX, setPadX] = useState(24);
  const [dragging, setDragging] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [sectionHeight, setSectionHeight] = useState<string | undefined>(undefined);

  const navHeight = () =>
    document.getElementById("nav")?.getBoundingClientRect().height ?? 72;

  const getMetrics = useCallback(() => {
    const sec = sectionRef.current;
    const head = headRef.current;
    const vp = viewportRef.current;
    const vh = window.innerHeight;
    const headerH = head?.offsetHeight ?? 0;
    const pinStart = sec
      ? sec.getBoundingClientRect().top + window.scrollY + headerH
      : 0;
    const scrollable = Math.max(1, (last * SCROLL_PER_STEP_VH / 100) * vh);
    const max = vp ? Math.max(0, vp.scrollWidth - vp.clientWidth) : 0;
    return { pinStart, scrollable, max, headerH };
  }, [last]);

  const measurePad = useCallback(() => {
    const vp = viewportRef.current;
    const col = colRefs.current[0];
    if (!vp || !col) return;
    setPadX(Math.max(24, (vp.clientWidth - col.offsetWidth) / 2));
  }, []);

  const applyProgress = useCallback(
    (progress: number) => {
      const vp = viewportRef.current;
      if (!vp) return;
      const max = Math.max(0, vp.scrollWidth - vp.clientWidth);
      const left = progress * max;
      if (Math.abs(vp.scrollLeft - left) > 0.5) vp.scrollLeft = left;

      const center = left + vp.clientWidth / 2;
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
      setAtStart(left <= 1);
      setAtEnd(left >= max - 1);
    },
    [],
  );

  const syncFromScroll = useCallback(() => {
    rafRef.current = null;
    const { pinStart, scrollable } = getMetrics();
    const progress = Math.max(0, Math.min(1, (window.scrollY - pinStart) / scrollable));
    applyProgress(progress);
  }, [applyProgress, getMetrics]);

  const updateSectionHeight = useCallback(() => {
    const head = headRef.current;
    const headerH = head?.offsetHeight ?? 0;
    const nav = navHeight();
    setSectionHeight(
      `calc(${headerH}px + (100dvh - ${nav}px) + ${last * SCROLL_PER_STEP_VH}vh)`,
    );
  }, [last]);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(syncFromScroll);
    };
    const onResize = () => {
      measurePad();
      updateSectionHeight();
      syncFromScroll();
    };

    measurePad();
    updateSectionHeight();
    syncFromScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [measurePad, syncFromScroll, updateSectionHeight]);

  useEffect(() => {
    syncFromScroll();
  }, [padX, syncFromScroll]);

  const jumpTo = useCallback(
    (idx: number) => {
      const { pinStart, scrollable } = getMetrics();
      if (last <= 0) return;
      const clamped = Math.max(0, Math.min(last, idx));
      window.scrollTo({
        top: pinStart + (clamped / last) * scrollable,
        behavior: "smooth",
      });
    },
    [getMetrics, last],
  );

  const drag = useRef({ startX: 0, startScrollY: 0 });
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    if ((e.target as HTMLElement).closest("button, a")) return;
    drag.current = { startX: e.clientX, startScrollY: window.scrollY };
    setDragging(true);
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: PointerEvent) => {
      const { scrollable, max } = getMetrics();
      if (max <= 0 || scrollable <= 0) return;
      const dx = e.clientX - drag.current.startX;
      window.scrollTo({
        top: drag.current.startScrollY + (-dx / max) * scrollable,
      });
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
  }, [dragging, getMetrics]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const pin = sectionRef.current?.querySelector(".imp-tl-pin");
    if (!pin) return;
    const r = pin.getBoundingClientRect();
    const nav = navHeight();
    if (r.top > nav + 8 || r.bottom < window.innerHeight - 8) return;

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      jumpTo(active - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      jumpTo(active + 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      jumpTo(0);
    } else if (e.key === "End") {
      e.preventDefault();
      jumpTo(last);
    }
  };

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
    <section
      ref={sectionRef}
      className="imp-tl"
      aria-labelledby="imp-tl-heading"
      style={sectionHeight ? { height: sectionHeight } : undefined}
    >
      <header ref={headRef} className="imp-tl-head">
        <p className="imp-tl-kicker">Six decades of impact</p>
        <h2 id="imp-tl-heading" className="imp-tl-title">
          Moments that <span className="imp-tl-title-accent">shaped Nepal</span>
        </h2>
        <p className="imp-tl-intro">
          From the first Toyota on Kathmandu&rsquo;s roads to the journey to Kailash &mdash;
          scroll, drag or use the arrows to travel through the milestones that built our story.
        </p>
      </header>

      <div className="imp-tl-pin">
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
                      onClick={() => jumpTo(i)}
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
              onClick={() => jumpTo(active - 1)}
              disabled={atStart}
              aria-label="Previous milestone"
            >
              &lsaquo;
            </button>
            <span className="imp-tl-nav-div" aria-hidden="true" />
            <button
              type="button"
              className="imp-tl-arrow"
              onClick={() => jumpTo(active + 1)}
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
          <p className="imp-tl-hint">Scroll &middot; drag &middot; &lsaquo;&nbsp;&rsaquo;</p>
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
