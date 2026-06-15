"use client";

import { useEffect, useState } from "react";
import { PHONE_DISPLAY, PHONE_HREF, EMAIL } from "@/lib/team";

const LINKS = [
  { href: "#help", label: "How we help" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why us" },
  { href: "#people", label: "Our people" },
  { href: "#visit", label: "Visit" },
  { href: "#contact", label: "Contact" },
];

function BrandMark() {
  return (
    <a className="brand" href="#top" aria-label="Hughes Legal — home">
      <span className="brand__mark" aria-hidden="true">HL</span>
      <span className="brand__words">
        <span className="brand__name">Hughes Legal</span>
        <span className="brand__tag">Lawyers &amp; Consultants</span>
      </span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      <div className="utility">
        <div className="container utility__inner">
          <div className="utility__left">
            <a href={`mailto:${EMAIL}`} className="utility__item">{EMAIL}</a>
            <span className="utility__item utility__item--hours">Mon–Fri · 8:30am–5:00pm</span>
          </div>
          <a href={PHONE_HREF} className="utility__phone">{PHONE_DISPLAY}</a>
        </div>
      </div>

      <header className={`header${scrolled ? " is-scrolled" : ""}`}>
        <div className="container header__inner">
          <BrandMark />

          <nav className={`nav${open ? " is-open" : ""}`} aria-label="Primary">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
          </nav>

          <div className="header__cta">
            <a href="#contact" className="btn btn--teal">Enquire online</a>
          </div>

          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>
    </>
  );
}
