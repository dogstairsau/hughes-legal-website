export default function Paths() {
  return (
    <section className="help" id="help">
      <span className="anchor" id="help-anchor" />
      <div className="container">
        <header className="section-head">
          <p className="eyebrow eyebrow--center"><span className="dot" /> Where can we help?</p>
          <h2>Start with what you need.</h2>
          <p className="section-sub">
            Tell us whether your matter is personal or for your business — we&apos;ll point
            you to the right part of the firm.
          </p>
        </header>

        <div className="paths">
          <a className="path path--personal" href="#personal">
            <span className="path__icon" aria-hidden="true">🏡</span>
            <h3>Personal &amp; family</h3>
            <p>Life events, property and protecting the people who matter most.</p>
            <ul className="path__list">
              <li>Family law &amp; separation</li>
              <li>Buying or selling a home</li>
              <li>Conveyancing</li>
              <li>Wills &amp; powers of attorney</li>
              <li>Probate &amp; estates</li>
            </ul>
            <span className="path__cta">Explore personal services <span className="arrow" aria-hidden="true">→</span></span>
          </a>

          <a className="path path--commercial" href="#commercial">
            <span className="path__icon" aria-hidden="true">📈</span>
            <h3>Business &amp; commercial</h3>
            <p>Protect what you&apos;ve built and move on opportunities with confidence.</p>
            <ul className="path__list">
              <li>Buying or selling a business</li>
              <li>Commercial &amp; contract advice</li>
              <li>Debt recovery</li>
              <li>Commercial property</li>
              <li>SMSF legal advice</li>
            </ul>
            <span className="path__cta">Explore business services <span className="arrow" aria-hidden="true">→</span></span>
          </a>
        </div>
      </div>
    </section>
  );
}
