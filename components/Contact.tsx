"use client";

import { useState } from "react";
import { PHONE_DISPLAY, PHONE_HREF, EMAIL } from "@/lib/team";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [invalid, setInvalid] = useState<Record<string, boolean>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const next: Record<string, boolean> = {};
    (["name", "phone", "email", "matter"] as const).forEach((id) => {
      const el = form.elements.namedItem(id) as HTMLInputElement | HTMLSelectElement | null;
      const val = el?.value.trim() ?? "";
      const ok = val !== "" && (id !== "email" || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(val));
      if (!ok) next[id] = true;
    });
    setInvalid(next);
    if (Object.keys(next).length) return;
    // No backend yet — wire to Formspree / Netlify Forms / your endpoint here.
    setSent(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        <div className="contact__intro">
          <p className="eyebrow"><span className="dot" /> Speak with a local lawyer</p>
          <h2>Tell us about your matter.</h2>
          <p className="section-sub">No jargon, no pressure — just clear advice on where you stand and what comes next.</p>

          <p className="contact__promise"><span aria-hidden="true">✓</span> We&apos;ll be in touch within <strong>one business day</strong>.</p>

          <ul className="contact__details">
            <li><span className="contact__label">Call</span><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></li>
            <li><span className="contact__label">Email</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><span className="contact__label">Visit</span><span>Level 1, 333 Keilor Road,<br />Essendon VIC 3040</span></li>
            <li><span className="contact__label">Hours</span><span>Monday–Friday, 8:30am–5:00pm</span></li>
          </ul>
        </div>

        <form className="enquiry" onSubmit={onSubmit} noValidate>
          <div className="enquiry__row">
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input className={invalid.name ? "invalid" : ""} type="text" id="name" name="name" autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input className={invalid.phone ? "invalid" : ""} type="tel" id="phone" name="phone" autoComplete="tel" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input className={invalid.email ? "invalid" : ""} type="email" id="email" name="email" autoComplete="email" />
          </div>
          <div className="field">
            <label htmlFor="matter">What do you need help with?</label>
            <select className={invalid.matter ? "invalid" : ""} id="matter" name="matter" defaultValue="">
              <option value="" disabled>Choose a service…</option>
              <optgroup label="Personal & family">
                <option>Family law &amp; separation</option>
                <option>Conveyancing / buying or selling a home</option>
                <option>Wills &amp; powers of attorney</option>
                <option>Probate &amp; estates</option>
              </optgroup>
              <optgroup label="Business & commercial">
                <option>Buying or selling a business</option>
                <option>Commercial &amp; contracts</option>
                <option>Debt recovery</option>
                <option>SMSF legal advice</option>
              </optgroup>
              <option>Something else</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="message">A few details <span className="field__opt">(optional)</span></label>
            <textarea id="message" name="message" rows={3} />
          </div>
          <button type="submit" className="btn btn--accent btn--block btn--lg">Request a call back</button>
          <p className="enquiry__fineprint">Your enquiry is confidential. By submitting you agree to be contacted about your matter.</p>
          {sent && (
            <p className="enquiry__success">
              Thanks — we&apos;ve received your enquiry and a lawyer will be in touch within one business day.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
