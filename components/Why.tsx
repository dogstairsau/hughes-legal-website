const POINTS = [
  "Experienced, results-driven legal team",
  "Deep understanding of local needs",
  "Absolute respect for your privacy and confidentiality",
  "Strong ties to the Essendon community since 1983",
  "Access to in-house accountants, financial planners & mortgage brokers",
];

export default function Why() {
  return (
    <section className="why" id="why">
      <div className="container why__inner">
        <div className="why__media">
          {/* Drop the real team group photo at /public/team-group.jpg and set it as the background. */}
          <div className="why__photo" role="img" aria-label="The Hughes Legal team in their Essendon boardroom">
            <span className="why__photo-note">Team photo — /public/team-group.jpg</span>
          </div>
        </div>
        <div className="why__copy">
          <p className="eyebrow"><span className="dot" /> Why choose Hughes Legal</p>
          <h2>The right lawyer makes all the difference.</h2>
          <p className="section-sub">
            We combine genuine care for our clients with deep knowledge of our community.
            As a proudly local practice in Essendon, we&apos;ve built long-standing relationships
            based on trust, respect and results.
          </p>
          <ul className="checklist">
            {POINTS.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <a href="#contact" className="btn btn--primary">Get in touch</a>
        </div>
      </div>
    </section>
  );
}
