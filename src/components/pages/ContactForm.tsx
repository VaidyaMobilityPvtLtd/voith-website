"use client";

import { useState, type FormEvent } from "react";

type Props = {
  destinationEmail: string;
};

export default function ContactForm({ destinationEmail }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fullName = [firstName, lastName].filter(Boolean).join(" ");
    const subject = `[VOITH Contact] ${fullName || "Web inquiry"}`;
    const body = [
      `Name: ${fullName}`,
      `Email / Phone: ${contact}`,
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
      <header className="cf-head">
        <h2 className="cf-title">Send Message</h2>
        <p className="cf-subtitle">
          Please fill out the form below with your details and message to
          contact with us.
        </p>
      </header>

      <div className="cf-row">
        <label className="cf-field">
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            aria-label="First name"
            autoComplete="given-name"
          />
        </label>
        <label className="cf-field">
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            aria-label="Last name"
            autoComplete="family-name"
          />
        </label>
      </div>

      <label className="cf-field cf-field--full">
        <input
          type="text"
          required
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Email or Phone Number"
          aria-label="Email or phone number"
          autoComplete="email"
        />
      </label>

      <label className="cf-field cf-field--full">
        <textarea
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write Message Here..."
          aria-label="Message"
        />
      </label>

      <div className="cf-actions">
        <button type="submit" className="cf-submit">
          Send Message
        </button>
        <p className="cf-note">
          Submitting opens your email client addressed to{" "}
          <a href={`mailto:${destinationEmail}`}>{destinationEmail}</a>.
        </p>
      </div>

      {sent ? (
        <p className="cf-confirm" role="status">
          Your email draft is ready, send it from your client and we'll reply
          within one business day.
        </p>
      ) : null}
    </form>
  );
}
