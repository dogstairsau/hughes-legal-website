import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/team";
import { IMG } from "@/lib/images";
import Icon from "@/components/icons";

const STATS = [
  { n: "1983", l: "Established" },
  { n: "40+", l: "Years local" },
  { n: "7", l: "Lawyers" },
];

export default function Hero() {
  return (
    <section className="hero">
      <span id="top" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="kicker">Essendon · Since 1983</span>
          <h1>
            Essendon&apos;s local lawyers, <em>trusted since 1983.</em>
          </h1>
          <p className="hero__lead">
            Practical legal advice for families, property and business — from a team
            that&apos;s been part of this community for more than forty years.
          </p>
          <div className="hero__actions">
            <a href="#help" className="btn btn--teal">
              Talk to a lawyer <Icon name="arrow" size={16} className="arrow" />
            </a>
            <a href={PHONE_HREF} className="btn btn--ghost">Call {PHONE_DISPLAY}</a>
          </div>
          <div className="hero__stats">
            {STATS.map((s) => (
              <div key={s.l}>
                <strong>{s.n}</strong>
                <span>{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__media">
          {/* Replace /hero.jpg with the firm's real photography when available. */}
          <img
            src={IMG.hero}
            alt="A Hughes Legal lawyer meeting with a client in their Essendon office"
          />
          <div className="hero__media-tag">
            <strong>Est. 1983</strong>
            <span>Keilor Road, Essendon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
