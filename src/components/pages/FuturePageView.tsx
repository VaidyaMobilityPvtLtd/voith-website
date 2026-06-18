import { futureItems, pageMeta } from "@/data/content";
import Reveal from "../Reveal";
import PageShell from "./PageShell";

const meta = pageMeta.future;

export default function FuturePageView() {
  return (
    <PageShell
      theme="future"
      eyebrow={meta.eyebrow}
      title={meta.title}
      description={meta.description}
      stat={meta.stat}
      statLabel={meta.statLabel}
      heroImage={meta.heroImage}
    >
      <section className="pg-initiatives">
        <Reveal className="pg-init-intro">
          <span className="pg-init-eyebrow">What&apos;s next</span>
          <h2 className="pg-init-heading">Initiatives in motion</h2>
        </Reveal>

        <div className="pg-init-rows">
          {futureItems.map((item, i) => {
            const [category, status] = item.pill.split(" — ");
            return (
              <Reveal
                as="article"
                key={item.title}
                className={`pg-init-row${i % 2 === 1 ? " pg-init-row--flip" : ""}`}
              >
                <div className="pg-init-figure">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span className="pg-init-index" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="pg-init-copy">
                  <div className="pg-init-tags">
                    <span className="pg-init-cat">{category}</span>
                    {status ? (
                      <span className="pg-init-status">
                        <span className="pg-init-status-dot" aria-hidden="true" />
                        {status}
                      </span>
                    ) : null}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <aside className="pg-future-cta">
        <p>Building Nepal&apos;s next chapter — mobility, wellness, and manufacturing at scale.</p>
        <a href="mailto:info@voith.com.np" className="pg-cta-btn">
          Partner with VOITH
        </a>
      </aside>
    </PageShell>
  );
}
