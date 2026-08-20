"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { storyMilestones } from "@/data/content";

// SVG world, vertical arc anchored to the right edge
const VBW = 560;
const VBH = 720;
const CX = 540;          // arc center sits near the right edge of the viewBox
const CY = VBH / 2;      // vertically centered → 3 o'clock is at (CX-R, CY)
const R = 470;
const THETA_MAX = 1.05;  // ~60° above and below 3 o'clock
const TICK_COUNT = 80;
const SLOT_STRIDE = 3; // one year label, then two empty slots before the next
const SCROLL_PER_STEP_VH = 14 * SLOT_STRIDE; // desktop: extra slot gaps slow the scrub
const COMPACT_MQ = "(max-width: 768px)";

type Point = { x: number; y: number };

function polar(theta: number, radius = R): Point {
  return {
    x: CX - radius * Math.cos(theta),
    y: CY - radius * Math.sin(theta),
  };
}

export default function InteractiveTimeline() {
  const items = storyMilestones;
  const last = items.length - 1;
  const [progress, setProgress] = useState(0); // 0..1, derived from scroll position
  const [compact, setCompact] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const step = ((2 * THETA_MAX) / Math.max(1, last)) * SLOT_STRIDE;

  // Continuous index tracks scroll smoothly; rounded `active` snaps to nearest for highlights.
  const continuous = progress * last;
  const active = Math.min(last, Math.max(0, Math.round(continuous)));

  const homeTheta = useCallback((i: number) => THETA_MAX - i * step, [step]);
  const screenTheta = useCallback((i: number) => (continuous - i) * step, [continuous, step]);
  const rotationDeg = ((THETA_MAX - continuous * step) * 180) / Math.PI;

  const focus = useMemo(() => polar(0), []);
  const arcStart = useMemo(() => polar(THETA_MAX + 0.2), []);
  const arcEnd = useMemo(() => polar(-(THETA_MAX + 0.2)), []);
  const arcPath = `M ${arcStart.x} ${arcStart.y} A ${R} ${R} 0 0 0 ${arcEnd.x} ${arcEnd.y}`;

  const ticks = useMemo(() => {
    const span = THETA_MAX + 0.15;
    const list: Array<{ key: number; inner: Point; outer: Point }> = [];
    for (let i = 0; i < TICK_COUNT; i++) {
      const t = -span + (i / (TICK_COUNT - 1)) * 2 * span;
      list.push({ key: i, inner: polar(t, R - 2), outer: polar(t, R + 10) });
    }
    return list;
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(COMPACT_MQ);
    const onChange = () => setCompact(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Bind scroll position within the section to `progress` (0..1).
  useEffect(() => {
    if (compact) {
      setProgress(0);
      return;
    }
    const update = () => {
      rafRef.current = null;
      const sec = sectionRef.current;
      if (!sec) return;
      const vh = window.innerHeight;
      const scrollable = sec.offsetHeight - vh;
      if (scrollable <= 0) return;
      // Only advance once the section has pinned (top reached viewport top).
      const start = sec.offsetTop;
      const p = (window.scrollY - start) / scrollable;
      const clamped = Math.max(0, Math.min(1, p));
      setProgress((prev) => (Math.abs(prev - clamped) < 0.0005 ? prev : clamped));
    };
    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [compact]);

  const jumpTo = useCallback(
    (idx: number) => {
      const sec = sectionRef.current;
      if (!sec) return;
      const total = sec.offsetHeight - window.innerHeight;
      if (total <= 0 || last <= 0) return;
      const clamped = Math.max(0, Math.min(last, idx));
      const targetTop = sec.offsetTop + (clamped / last) * total;
      window.scrollTo({ top: targetTop, behavior: "smooth" });
    },
    [last],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.defaultPrevented) return;
      const target = e.target as HTMLElement | null;
      if (target?.closest?.("input, textarea, [contenteditable='true']")) return;
      const sec = sectionRef.current;
      if (!sec) return;
      const r = sec.getBoundingClientRect();
      const inView = r.top < window.innerHeight * 0.5 && r.bottom > window.innerHeight * 0.5;
      if (!inView) return;
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        jumpTo(active - 1);
      } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        jumpTo(active + 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, jumpTo]);

  const activeItem = items[active];
  const sectionHeight = compact
    ? undefined
    : `calc(100vh + ${last * SCROLL_PER_STEP_VH}vh)`;

  return (
    <section
      ref={sectionRef}
      id="history"
      className={`arc-tl${compact ? " is-compact" : ""}`}
      aria-labelledby="arc-tl-heading"
      style={sectionHeight ? { height: sectionHeight } : undefined}
    >
      <div className="arc-tl-pin">
        <header className="arc-tl-head">
          <p className="arc-tl-kicker">Toyota Nepal · United Traders Syndicate · VOITH</p>
          <h2 id="arc-tl-heading" className="arc-tl-title">
            Our journey
            <span className="arc-tl-title-accent"> so far</span>
          </h2>
          <p className="arc-tl-intro">
            {items.length} milestones from <strong>1960</strong> to <strong>2025</strong> — scroll up
            and down to scrub the dial through six decades.
          </p>
        </header>

        <div className="arc-tl-stage">
          <article className="arc-tl-card" aria-live="polite">
            <p className="arc-tl-card-step">
              {String(active + 1).padStart(2, "0")}
              <span> / {String(items.length).padStart(2, "0")}</span>
            </p>
            <p className="arc-tl-card-year">{activeItem.year}</p>
            <h3 className="arc-tl-card-topic">{activeItem.topic.replace(/[:.]$/, "")}</h3>
            <p className="arc-tl-card-body">{activeItem.body}</p>
            <p className="arc-tl-card-hint">Scroll · ↑ ↓ to step</p>
          </article>

          <div className="arc-tl-wheel">
            <svg
              className="arc-tl-svg"
              viewBox={`0 0 ${VBW} ${VBH}`}
              preserveAspectRatio="xMidYMid meet"
              role="presentation"
            >
              <path className="arc-tl-bg" d={arcPath} />

              <g>
                {ticks.map((tk) => (
                  <line
                    key={tk.key}
                    className="arc-tl-tick"
                    x1={tk.inner.x}
                    y1={tk.inner.y}
                    x2={tk.outer.x}
                    y2={tk.outer.y}
                  />
                ))}
              </g>

              {/* Markers rotate continuously with scroll progress */}
              <g
                className="arc-tl-rot"
                style={{
                  transform: `translate(${CX}px, ${CY}px) rotate(${rotationDeg}deg) translate(${-CX}px, ${-CY}px)`,
                }}
              >
                {items.map((m, i) => {
                  const t = homeTheta(i);
                  const inner = polar(t, R - 4);
                  const outer = polar(t, R + 20);
                  const dot = polar(t, R);
                  const isActive = i === active;
                  return (
                    <g key={`mk-${i}`}>
                      <line
                        className={`arc-tl-notch${isActive ? " is-active" : ""}`}
                        x1={inner.x}
                        y1={inner.y}
                        x2={outer.x}
                        y2={outer.y}
                      />
                      <circle
                        className={`arc-tl-marker${isActive ? " is-active" : ""}`}
                        cx={dot.x}
                        cy={dot.y}
                        r={isActive ? 6 : 3.5}
                      />
                    </g>
                  );
                })}
              </g>

              {/* 3 o'clock pointer */}
              <g className="arc-tl-focus">
                <line x1={focus.x - 56} y1={focus.y} x2={focus.x - 22} y2={focus.y} />
                <polygon
                  points={`${focus.x - 14},${focus.y - 7} ${focus.x - 2},${focus.y} ${focus.x - 14},${focus.y + 7}`}
                />
              </g>

              {/* Active handle ring at 3 o'clock */}
              <circle className="arc-tl-handle-halo" cx={focus.x} cy={focus.y} r="22" />
              <circle className="arc-tl-handle-ring" cx={focus.x} cy={focus.y} r="14" />
              <circle className="arc-tl-handle" cx={focus.x} cy={focus.y} r="6" />
            </svg>

            <div className="arc-tl-years" aria-hidden="true">
              {items.map((m, i) => {
                const t = screenTheta(i);
                const labelPoint = polar(t, R + 44);
                const leftPct = (labelPoint.x / VBW) * 100;
                const topPct = (labelPoint.y / VBH) * 100;
                const isActive = i === active;
                const dist = Math.abs(continuous - i);
                const opacity = Math.max(0, 1 - dist * 0.22);
                return (
                  <span
                    key={`yr-${i}`}
                    className={`arc-tl-year-tag${isActive ? " is-active" : ""}`}
                    style={{
                      left: `${leftPct}%`,
                      top: `${topPct}%`,
                      opacity,
                    }}
                  >
                    {m.year}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
