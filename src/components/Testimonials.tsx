"use client";

import { useCallback, useEffect, useState } from "react";
import Reveal from "./Reveal";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const count = testimonials.length;

  const goTo = useCallback(
    (i: number) => setActive(((i % count) + count) % count),
    [count],
  );
  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % count);
    }, 7000);
    return () => window.clearInterval(id);
  }, [count]);

  return (
    <section id="impact">
      <div className="test-wrap">
        <Reveal className="test-head">
          <span className="test-eyebrow">
            <span className="test-eyebrow-dot" aria-hidden="true" />
            Voices
          </span>
          <h2 className="test-title">What People Say</h2>
        </Reveal>

        <Reveal className="test-carousel" delay={2}>
          <div
            className="test-track"
            role="region"
            aria-roledescription="carousel"
            aria-label="Testimonials"
          >
            {testimonials.map((t, i) => (
              <article
                key={t.author}
                className={`test-slide${i === active ? " is-active" : ""}`}
                aria-hidden={i !== active}
              >
                <blockquote className="test-quote">
                  <p>{t.quote}</p>
                </blockquote>
                <footer className="test-cite">
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </footer>
              </article>
            ))}
          </div>

          <div className="test-controls">
            <button
              type="button"
              className="test-arrow"
              aria-label="Previous testimonial"
              onClick={prev}
            >
              <span aria-hidden="true">←</span>
            </button>
            <div className="test-dots" role="tablist" aria-label="Testimonial selector">
              {testimonials.map((t, i) => (
                <button
                  key={t.author}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`test-dot${i === active ? " is-active" : ""}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <button
              type="button"
              className="test-arrow"
              aria-label="Next testimonial"
              onClick={next}
            >
              <span aria-hidden="true">→</span>
            </button>
            <span className="test-count" aria-hidden="true">
              <span className="test-count-current">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="test-count-sep">/</span>
              {String(count).padStart(2, "0")}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
