"use client";

import { useState, type FormEvent } from "react";

type Props = {
  destinationEmail: string;
  topics: readonly string[];
};

export default function ContactForm({ destinationEmail, topics }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [topic, setTopic] = useState(topics[0] ?? "");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = `[VOITH Contact] ${topic} — ${name || "Web inquiry"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      organisation ? `Organisation: ${organisation}` : null,
      `Topic: ${topic}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");
    const href = `mailto:${destinationEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="cf-row">
        <label className="cf-field">
          <span>Your name</span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            autoComplete="name"
          />
        </label>
        <label className="cf-field">
          <span>Email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>
      </div>

      <div className="cf-row">
        <label className="cf-field">
          <span>Organisation</span>
          <input
            type="text"
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
            placeholder="Company or institution (optional)"
            autoComplete="organization"
          />
        </label>
        <label className="cf-field">
          <span>Topic</span>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          >
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="cf-field cf-field--full">
        <span>How can we help?</span>
        <textarea
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us a bit about what you're looking for…"
        />
      </label>

      <div className="cf-actions">
        <button type="submit" className="cf-submit">
          Send message
        </button>
        <p className="cf-note">
          Submitting opens your email client addressed to{" "}
          <a href={`mailto:${destinationEmail}`}>{destinationEmail}</a>.
        </p>
      </div>

      {sent ? (
        <p className="cf-confirm" role="status">
          Your email draft is ready — send it from your client and we'll reply
          within one business day.
        </p>
      ) : null}
    </form>
  );
}
