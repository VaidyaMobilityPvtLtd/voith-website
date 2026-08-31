import {
  contactDirect,
  footerContact,
  footerSocial,
  pageMeta,
} from "@/data/content";
import ContactForm from "./ContactForm";
import PageShell from "./PageShell";

const meta = pageMeta.contact;

export default function ContactPageView() {
  return (
    <PageShell
      theme="contact"
      eyebrow={meta.eyebrow}
      title={meta.title}
      description={meta.description}
      stat={meta.stat}
      statLabel={meta.statLabel}
      heroImage={meta.heroImage}
    >
      <section className="contact-channels">
        <header className="contact-section-head">
          <p className="contact-eyebrow">Direct channels</p>
          <h2 className="pg-section-title">Talk to the right team</h2>
          <p className="contact-lead">
            One point of contact for the whole group. Reach the desk closest
            to what you need, or call reception and we'll route you.
          </p>
        </header>

        <article className="contact-desk">
          <div className="contact-desk-body">
            <div className="contact-desk-block">
              <p className="contact-desk-label">Email</p>
              <ul className="contact-desk-list">
                {contactDirect.emails.map((e) => (
                  <li key={e.address}>
                    <span className="contact-desk-key">{e.label}</span>
                    <a
                      href={`mailto:${e.address}`}
                      className="contact-desk-email"
                    >
                      {e.address}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact-desk-block">
              <p className="contact-desk-label">Reception</p>
              <ul className="contact-desk-list">
                {contactDirect.phones.map((ph) => (
                  <li key={ph.number}>
                    {contactDirect.phones.length > 1 ? (
                      <span className="contact-desk-key">{ph.label}</span>
                    ) : null}
                    <a
                      href={`tel:${ph.number.replace(/[^+0-9]/g, "")}`}
                      className="contact-desk-phone"
                    >
                      {ph.number}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="contact-desk-hours">
                <span className="contact-desk-hours-days">
                  {contactDirect.hoursDays}
                </span>
                <span className="contact-desk-hours-time">
                  {contactDirect.hoursTime}
                </span>
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-shell">
          <aside className="contact-form-intro">
            <p className="contact-eyebrow contact-eyebrow--light">
              Send a message
            </p>
            <h2 className="contact-form-heading">Write to us directly</h2>
            <p className="contact-form-sub">
              Share a short note and we'll get back to you within one business
              day. For urgent matters please call the team listed above.
            </p>
            <ul className="contact-quick">
              <li>
                <span>Email</span>
                <a href={`mailto:${footerContact.email}`}>
                  {footerContact.email}
                </a>
              </li>
              <li>
                <span>Hours</span>
                <span className="contact-quick-val">
                  Sun – Fri · 9 am – 6 pm NPT
                </span>
              </li>
              <li>
                <span>Follow</span>
                <div className="contact-social">
                  {footerSocial.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </aside>
          <ContactForm destinationEmail={footerContact.email} />
        </div>
      </section>

      <section className="contact-map">
        <header className="contact-section-head">
          <p className="contact-eyebrow">Visit us</p>
          <h2 className="pg-section-title">Where to find VOITH</h2>
        </header>
        <div className="contact-map-frame">
          <iframe
            className="contact-map-embed"
            title="VOITH Complex, Dhumbarahi, Kathmandu"
            src="https://www.google.com/maps?q=VOITH%20Complex%2C%20Dhumbarahi%2C%20Kathmandu%2C%20Nepal&z=15&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </PageShell>
  );
}
