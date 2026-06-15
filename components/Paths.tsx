import Icon from "@/components/icons";

export default function Paths() {
  return (
    <section className="help" id="help">
      <div className="container">
        <header className="section-head">
          <span className="kicker kicker--center">Where can we help?</span>
          <h2>Start with what you need.</h2>
          <p className="section-sub">
            Tell us whether your matter is personal or for your business — we&apos;ll point
            you to the right part of the firm.
          </p>
        </header>

        <div className="paths">
          <a className="path path--personal" href="#personal">
            <span className="path__icon"><Icon name="home" size={34} /></span>
            <h3>Personal &amp; family</h3>
            <p>Life events, property, and protecting the people who matter most.</p>
            <ul className="path__list">
              <li>Family law &amp; separation</li>
              <li>Buying or selling a home</li>
              <li>Conveyancing</li>
              <li>Wills &amp; powers of attorney</li>
              <li>Probate &amp; estates</li>
            </ul>
            <span className="path__cta">Explore personal services <Icon name="arrow" size={15} className="arrow" /></span>
          </a>

          <a className="path path--commercial" href="#commercial">
            <span className="path__icon"><Icon name="trend" size={34} /></span>
            <h3>Business &amp; commercial</h3>
            <p>Protect what you&apos;ve built and move on opportunities with confidence.</p>
            <ul className="path__list">
              <li>Buying or selling a business</li>
              <li>Commercial &amp; contract advice</li>
              <li>Debt recovery</li>
              <li>Commercial property</li>
              <li>SMSF legal advice</li>
            </ul>
            <span className="path__cta">Explore business services <Icon name="arrow" size={15} className="arrow" /></span>
          </a>
        </div>
      </div>
    </section>
  );
}
