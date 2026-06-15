import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/team";
import Icon from "@/components/icons";

const SUBURBS = ["Essendon", "Aberfeldie", "Ascot Vale", "Moonee Ponds", "Niddrie", "Strathmore", "Keilor", "Airport West"];
const MAPS_EMBED = "https://www.google.com/maps?q=333+Keilor+Road,+Essendon+VIC+3040&z=15&output=embed";
const MAPS_DIR = "https://www.google.com/maps/dir/?api=1&destination=Hughes+Legal+333+Keilor+Road+Essendon+VIC+3040";

export default function LocalMap() {
  return (
    <section className="local" id="visit">
      <div className="container">
        <header className="section-head">
          <span className="kicker kicker--center">Proudly local</span>
          <h2>Right here on Keilor Road.</h2>
          <p className="section-sub">
            We&apos;ve been part of Essendon since 1983 — we know these streets, and the families
            and businesses on them. Drop in, or book a time that suits you.
          </p>
        </header>

        <div className="local__inner">
          <div className="local__map">
            <iframe
              src={MAPS_EMBED}
              title="Map showing Hughes Legal at 333 Keilor Road, Essendon VIC 3040"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="local__info">
            <h3>Visit our Essendon office</h3>
            <p className="local__addr">Level 1, 333 Keilor Road<br />Essendon VIC 3040</p>
            <p className="local__hours"><Icon name="clock" size={18} /> Monday–Friday · 8:30am–5:00pm</p>
            <div className="local__actions">
              <a href={MAPS_DIR} target="_blank" rel="noopener" className="btn btn--teal">Get directions</a>
              <a href={PHONE_HREF} className="btn btn--ghost">Call {PHONE_DISPLAY}</a>
            </div>
            <h4 className="local__sub">Suburbs we serve</h4>
            <ul className="suburbs">
              {SUBURBS.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
