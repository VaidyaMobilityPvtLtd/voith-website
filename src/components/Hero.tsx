import { heroItems } from "@/data/content";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hl">
        <div className="hl-eyebrow">Nepal&apos;s Leading Business Group</div>
        <h1>VOITH Builds Nepal&apos;s Industries Across Seven Sectors</h1>
        <div className="hl-badge">★&nbsp;Vaidya&apos;s Organization · Founded 1962</div>
        <p>
          From Toyota to Ather Energy, from Himalayan tea to cement production — VOITH has been
          pioneering Nepal&apos;s industrial and economic growth for over six decades.
        </p>
        <a href="#businesses" className="btn-red">
          Explore Our Group &nbsp;→
        </a>
      </div>
      <div className="hr-panel">
        <div className="hr-stat">
          <div className="hr-big">
            62<span>+</span>
          </div>
          <div className="hr-sub">
            Years pioneering Nepal&apos;s economy
            <br />
            across seven industries
          </div>
        </div>
        <div className="hr-items">
          {heroItems.map((item) => (
            <a key={item.title} href={item.href} className="hr-item">
              <div>
                <div className="hr-item-title">{item.title}</div>
                <div className="hr-item-sub">{item.sub}</div>
              </div>
              <div className="hr-arrow">→</div>
            </a>
          ))}
        </div>
        <div className="hr-contact">
          <div className="hr-contact-icon">✉</div>
          <div className="hr-contact-text">
            <strong>Contact VOITH</strong>
            <span>Explore partnership &amp; investment</span>
          </div>
        </div>
      </div>
    </section>
  );
}
