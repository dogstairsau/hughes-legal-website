import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/team";

const SUBURBS = ["Essendon", "Aberfeldie", "Ascot Vale", "Moonee Ponds", "Niddrie", "Strathmore", "Keilor", "Airport West"];
const MAPS_SEARCH = "https://www.google.com/maps/search/?api=1&query=Hughes+Legal+333+Keilor+Road+Essendon+VIC+3040";
const MAPS_DIR = "https://www.google.com/maps/dir/?api=1&destination=Hughes+Legal+333+Keilor+Road+Essendon+VIC+3040";

export default function LocalMap() {
  return (
    <section className="local" id="visit">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow eyebrow--center"><span className="dot" /> Proudly local</p>
          <h2>Right here on Keilor Road.</h2>
          <p className="section-sub">
            We&apos;ve been part of Essendon since 1983 — we know these streets, and the families
            and businesses on them. Drop in, or book a time that suits you.
          </p>
        </header>

        <div className="local__inner">
          <div className="local__map">
            {/* Google Maps MOCK. To go live, replace .map-mock with an <iframe> embed. */}
            <div className="map-mock" role="img" aria-label="Map showing Hughes Legal at Level 1, 333 Keilor Road, Essendon VIC 3040">
              <svg className="map-mock__roads" viewBox="0 0 600 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <defs>
                  <linearGradient id="land" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#eef4f3" />
                    <stop offset="1" stopColor="#e3edec" />
                  </linearGradient>
                </defs>
                <rect width="600" height="420" fill="url(#land)" />
                <rect x="40" y="250" width="150" height="120" rx="10" fill="#dcefe4" />
                <rect x="430" y="40" width="140" height="95" rx="10" fill="#dcefe4" />
                <path d="M0 60 C 120 30, 180 110, 320 80 C 460 50, 540 120, 600 90 L600 0 L0 0 Z" fill="#d4ecf7" />
                <g stroke="#ffffff" strokeLinecap="round" fill="none">
                  <path d="M-20 180 C 160 150, 360 230, 640 190" strokeWidth="22" />
                  <path d="M300 -20 C 270 140, 350 280, 320 460" strokeWidth="18" />
                  <path d="M-20 320 L 640 300" strokeWidth="12" />
                  <path d="M120 -20 L 150 460" strokeWidth="9" />
                  <path d="M480 -20 L 470 460" strokeWidth="9" />
                </g>
                <text x="120" y="172" fontFamily="Lato, sans-serif" fontSize="13" fontWeight="700" fill="#8a97a0">Keilor Rd</text>
              </svg>

              <div className="map-pin" aria-hidden="true">
                <span className="map-pin__pulse" />
                <svg width="36" height="46" viewBox="0 0 36 46"><path d="M18 0C8 0 0 8 0 18c0 13 18 28 18 28s18-15 18-28C36 8 28 0 18 0z" fill="#e8843c" /><circle cx="18" cy="18" r="7" fill="#fff" /></svg>
              </div>

              <div className="map-card">
                <span className="map-card__mark" aria-hidden="true">hl</span>
                <span>
                  <strong>Hughes Legal</strong>
                  Level 1, 333 Keilor Rd, Essendon
                </span>
              </div>

              <a className="map-open" href={MAPS_SEARCH} target="_blank" rel="noopener">
                <span aria-hidden="true">📍</span> Open in Google Maps
              </a>

              <span className="map-badge">Map preview · live Google Map embed goes here</span>
            </div>
          </div>

          <div className="local__info">
            <div className="local__card">
              <h3>Visit our Essendon office</h3>
              <p className="local__addr">Level 1, 333 Keilor Road<br />Essendon VIC 3040</p>
              <p className="local__hours"><span aria-hidden="true">🕑</span> Monday–Friday · 8:30am–5:00pm</p>
              <div className="local__actions">
                <a href={MAPS_DIR} target="_blank" rel="noopener" className="btn btn--primary">Get directions</a>
                <a href={PHONE_HREF} className="btn btn--ghost">Call {PHONE_DISPLAY}</a>
              </div>
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
