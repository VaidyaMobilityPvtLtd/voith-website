"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { storyMilestones, type StoryMilestone } from "@/data/content";

type TimelineBlockProps = {
  milestone: StoryMilestone;
  isVisible: boolean;
  isActive: boolean;
  onImageClick: () => void;
};

function TimelineBlock({ milestone, isVisible, isActive, onImageClick }: TimelineBlockProps) {
  const paragraphs = milestone.body
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <article className={`story-tl-block${isVisible ? " story-tl-block--in" : ""}`}>
      <button
        type="button"
        onClick={onImageClick}
        className={`story-tl-img-btn${isActive ? " story-tl-img-btn--active" : ""}`}
        aria-label={`View larger image: ${milestone.topic}`}
      >
        <Image
          src={milestone.image}
          alt=""
          width={960}
          height={540}
          className="story-tl-img"
          sizes="(max-width: 768px) 100vw, 520px"
        />
        <span className="story-tl-img-enlarge" aria-hidden="true">
          Enlarge
        </span>
      </button>
      <div className="story-tl-copy">
        <p className="story-tl-year">{milestone.year}</p>
        <h3 className={`story-tl-topic${isActive ? " story-tl-topic--active" : ""}`}>{milestone.topic}</h3>
        {paragraphs.length > 0 ? (
          <div className="story-tl-body">
            {paragraphs.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function InteractiveTimeline() {
  const [visible, setVisible] = useState(() => storyMilestones.map(() => false));
  const [activeIndex, setActiveIndex] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const targetProgressRef = useRef(0);
  const displayedProgressRef = useRef(0);
  const progressRafRef = useRef<number | null>(null);
  const lightboxOpenRef = useRef(false);

  useEffect(() => {
    lightboxOpenRef.current = !!lightbox;
  }, [lightbox]);

  const scrollToMilestone = useCallback((index: number) => {
    itemRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  const goPrevMilestone = useCallback(() => {
    scrollToMilestone(Math.max(0, activeIndex - 1));
  }, [activeIndex, scrollToMilestone]);

  const goNextMilestone = useCallback(() => {
    scrollToMilestone(Math.min(storyMilestones.length - 1, activeIndex + 1));
  }, [activeIndex, scrollToMilestone]);

  useEffect(() => {
    if (!lightbox) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxOpenRef.current) return;
      if (e.defaultPrevented) return;
      const target = e.target as HTMLElement | null;
      if (target?.closest?.("input, textarea, [contenteditable='true']")) return;
      if (!sectionRef.current) return;
      const r = sectionRef.current.getBoundingClientRect();
      const inView = r.top < window.innerHeight * 0.85 && r.bottom > window.innerHeight * 0.15;
      if (!inView) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrevMilestone();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNextMilestone();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrevMilestone, goNextMilestone]);

  useEffect(() => {
    const observers = itemRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            obs.disconnect();
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  useEffect(() => {
    const stepProgress = () => {
      const target = targetProgressRef.current;
      let current = displayedProgressRef.current;
      current += (target - current) * 0.16;
      displayedProgressRef.current = current;
      setLineProgress(current);
      if (Math.abs(target - current) > 0.001) {
        progressRafRef.current = requestAnimationFrame(stepProgress);
      } else {
        displayedProgressRef.current = target;
        setLineProgress(target);
        progressRafRef.current = null;
      }
    };

    const update = () => {
      const vh = window.innerHeight;
      const focal = vh * 0.42;
      let best = 0;
      let bestDist = Infinity;

      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.bottom < 80 || rect.top > vh - 80) return;
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - focal);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setActiveIndex(best);

      const wrap = trackRef.current;
      if (wrap) {
        const rect = wrap.getBoundingClientRect();
        const passed = focal - rect.top;
        const p = Math.max(0, Math.min(1, passed / Math.max(rect.height, 1)));
        targetProgressRef.current = Number.isFinite(p) ? p : 0;
        if (!progressRafRef.current) {
          progressRafRef.current = requestAnimationFrame(stepProgress);
        }
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      if (progressRafRef.current) cancelAnimationFrame(progressRafRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} id="history" className="story-tl" aria-labelledby="story-tl-heading">
      <div className="story-tl-inner">
        <header className="story-tl-head">
          <p className="story-tl-kicker">Toyota Nepal · United Traders Syndicate · VOITH</p>
          <p className="story-tl-label">
            <span aria-hidden="true">•</span> Our story <span aria-hidden="true">•</span>
          </p>
          <h2 id="story-tl-heading" className="story-tl-title">
            From foundation
            <span className="story-tl-title-accent">to today</span>
          </h2>
          <div className="story-tl-divider" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <p className="story-tl-intro">
            Seventeen milestones from <strong>1960</strong> to <strong>2025</strong>
          </p>
          <nav className="story-tl-chips" aria-label="Timeline quick navigation">
            {storyMilestones.map((m, i) => (
              <button
                key={`${m.chipLabel}-${i}`}
                type="button"
                onClick={() => scrollToMilestone(i)}
                className={`story-tl-chip${activeIndex === i ? " story-tl-chip--active" : ""}`}
              >
                {m.chipLabel}
              </button>
            ))}
          </nav>
        </header>

        <div className="story-tl-track" ref={trackRef}>
          <div className="story-tl-line story-tl-line--bg" aria-hidden="true" />
          <div
            className="story-tl-line story-tl-line--fill"
            aria-hidden="true"
            style={{ transform: `scaleY(${Math.max(0, Math.min(1, lineProgress))})` }}
          />

          <ul className="story-tl-list">
            {storyMilestones.map((m, i) => {
              const isRight = i % 2 === 0;
              const isActive = activeIndex === i;
              const isItemVisible = visible[i];

              return (
                <li
                  key={`${m.chipLabel}-${i}`}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className={`story-tl-item${isRight ? " story-tl-item--right" : ""}`}
                >
                  <button
                    type="button"
                    aria-label={`Jump to ${m.topic} ${m.year}`}
                    aria-current={isActive ? "step" : undefined}
                    onClick={() => scrollToMilestone(i)}
                    className={`story-tl-dot${isActive ? " story-tl-dot--active" : ""}`}
                  >
                    {i + 1}
                  </button>

                  <div className="story-tl-item-content">
                    <TimelineBlock
                      milestone={m}
                      isVisible={isItemVisible}
                      isActive={isActive}
                      onImageClick={() => setLightbox({ src: m.image, alt: m.topic })}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {lightbox ? (
        <div className="story-tl-lightbox" role="dialog" aria-modal="true" aria-label="Enlarged milestone photo">
          <button type="button" className="story-tl-lightbox-backdrop" aria-label="Close image" onClick={() => setLightbox(null)} />
          <div className="story-tl-lightbox-panel">
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={800}
              className="story-tl-lightbox-img"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="story-tl-lightbox-caption">{lightbox.alt}</p>
            <button type="button" className="story-tl-lightbox-close" onClick={() => setLightbox(null)}>
              Close <span>Esc</span>
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
