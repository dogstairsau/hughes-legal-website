import { TEAM, PORTRAIT_BLOCKS, initials, PHONE_DISPLAY, PHONE_HREF } from "@/lib/team";

const STATS = [
  { n: "1983", l: "Established in Essendon" },
  { n: "40+ yrs", l: "Serving the local area" },
  { n: "7", l: "Lawyers & consultants" },
  { n: "1 day", l: "Reply, guaranteed" },
];

export default function Hero() {
  const portraits = TEAM.slice(0, 6);
  return (
    <section className="hero">
      <span id="top" />
      <div className="container hero__inner">
        <span className="pill">
          <span className="pill__b">Essendon</span> Trusted local lawyers since 1983
        </span>

        <h1>
          Essendon&apos;s local lawyers,
          <br />
          <span className="accent">trusted since 1983.</span>
        </h1>

        <p className="hero__lead">
          Practical legal advice for families, property and business — from a team
          that&apos;s been part of this community for more than 40 years.
        </p>

        <div className="hero__actions">
          <a href="#help" className="btn btn--dark btn--lg">
            Talk to a lawyer <span className="arrow" aria-hidden="true">→</span>
          </a>
          <a href={PHONE_HREF} className="btn btn--ghost btn--lg">
            <span aria-hidden="true">📞</span> Call {PHONE_DISPLAY}
          </a>
        </div>

        <ul className="stats">
          {STATS.map((s) => (
            <li key={s.l}>
              <strong>{s.n}</strong>
              <span>{s.l}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="container">
        <ul className="portrait-row" aria-label="The Hughes Legal team">
          {portraits.map((p, i) => (
            <li
              key={p.name}
              className="portrait"
              style={{ background: PORTRAIT_BLOCKS[i % PORTRAIT_BLOCKS.length] }}
            >
              <div
                className="portrait__img"
                style={p.photo ? { backgroundImage: `url(${p.photo})` } : undefined}
              >
                {!p.photo && <span aria-hidden="true">{initials(p.name)}</span>}
              </div>
              <div className="portrait__name">{p.name}</div>
              <div className="portrait__role">{p.role}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
