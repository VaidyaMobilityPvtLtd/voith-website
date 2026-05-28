import { futureItems, pageMeta } from "@/data/content";
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
        {futureItems.map((item, i) => (
          <article className="pg-initiative" key={item.title}>
            <span className="pg-initiative-index">{String(i + 1).padStart(2, "0")}</span>
            <div className="pg-initiative-body">
              <span className="pg-initiative-pill">{item.pill}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
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
