import { IMG } from "@/lib/images";

const POINTS = [
  "Experienced, results-driven legal team",
  "Deep understanding of local needs",
  "Absolute respect for your privacy and confidentiality",
  "Strong ties to the Essendon community since 1983",
  "In-house accountants, financial planners & mortgage brokers",
];

export default function Why() {
  return (
    <section className="why" id="why">
      <div className="container why__inner">
        <div className="why__media">
          <img src={IMG.boardroom} alt="The Hughes Legal boardroom in their Essendon office" />
          <div className="why__media-quote">
            <p>&ldquo;The same lawyer who starts your matter sees it through to the end.&rdquo;</p>
            <span>How we work</span>
          </div>
        </div>
        <div className="why__copy">
          <span className="kicker">Why Hughes Legal</span>
          <h2>The right lawyer makes all the difference.</h2>
          <p className="section-sub">
            We combine genuine care for our clients with deep knowledge of our community.
            As a proudly local practice in Essendon, we&apos;ve built long-standing relationships
            based on trust, respect and results.
          </p>
          <ul className="checklist">
            {POINTS.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <a href="#contact" className="btn btn--teal">Get in touch</a>
        </div>
      </div>
    </section>
  );
}
