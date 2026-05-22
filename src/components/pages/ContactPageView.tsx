import {
  contactChannels,
  contactOffices,
  contactTopics,
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
    >
      <section className="contact-channels">
        <header className="contact-section-head">
          <p className="contact-eyebrow">Direct channels</p>
          <h2 className="pg-section-title">Talk to the right team</h2>
          <p className="contact-lead">
            Every VOITH business has a dedicated point of contact. Pick the one
            closest to what you need — or write to general inquiries and we'll
            route you.
          </p>
        </header>

        <div className="contact-grid">
          {contactChannels.map((c) => (
            <article className="contact-card" key={c.label}>
              <h3>{c.label}</h3>
              <p className="contact-card-desc">{c.description}</p>
              <div className="contact-card-meta">
                <a
                  href={`mailto:${c.email}`}
                  className="contact-card-email"
                >
                  {c.email}
                </a>
                {c.phone ? (
                  <a
                    href={`tel:${c.phone.replace(/\s+/g, "")}`}
                    className="contact-card-phone"
                  >
                    {c.phone}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-grid">
          <div className="contact-form-intro">
            <p className="contact-eyebrow">Send a message</p>
            <h2 className="pg-section-title">Write to us directly</h2>
            <p className="contact-lead">
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
                Sun – Fri · 09:00 – 18:00 NPT
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
          </div>
          <ContactForm
            destinationEmail={footerContact.email}
            topics={contactTopics}
          />
        </div>
      </section>

      <section className="contact-offices">
        <header className="contact-section-head">
          <p className="contact-eyebrow contact-eyebrow--light">Visit us</p>
          <h2 className="pg-section-title pg-section-title--light">
            Where to find VOITH
          </h2>
        </header>
        <div className="contact-office-grid">
          {contactOffices.map((o) => (
            <article className="contact-office-card" key={o.city}>
              <span className="contact-office-tag">{o.role}</span>
              <h3>{o.city}</h3>
              <address>
                {o.addressLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
              <p className="contact-office-hours">{o.hours}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
