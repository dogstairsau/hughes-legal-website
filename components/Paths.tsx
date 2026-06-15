import Icon from "@/components/icons";
import { IMG } from "@/lib/images";

export default function Paths() {
  return (
    <section className="help" id="help">
      <div className="container">
        <header className="section-head">
          <span className="kicker kicker--center">Where can we help?</span>
          <h2>Start with what you need.</h2>
          <p className="section-sub">
            Personal matter or business matter — choose your path and we&apos;ll take you
            straight to the right part of the firm.
          </p>
        </header>

        <div className="paths">
          <a className="path path--personal" href="#personal">
            <div className="path__img">
              <img src={IMG.personal} alt="A couple reviewing their legal matters at home" />
              <span className="path__tag"><Icon name="home" size={18} /> Personal &amp; family</span>
            </div>
            <div className="path__content">
              <p className="path__intro">Life events, property, and protecting the people who matter most.</p>
              <ul className="path__list">
                <li>Family law &amp; separation</li>
                <li>Buying or selling a home</li>
                <li>Conveyancing</li>
                <li>Wills &amp; powers of attorney</li>
                <li>Probate &amp; estates</li>
              </ul>
              <span className="path__cta">Explore personal services <Icon name="arrow" size={15} className="arrow" /></span>
            </div>
          </a>

          <a className="path path--commercial" href="#commercial">
            <div className="path__img">
              <img src={IMG.boardroom} alt="A business owner meeting with an advisor" />
              <span className="path__tag"><Icon name="trend" size={18} /> Business &amp; commercial</span>
            </div>
            <div className="path__content">
              <p className="path__intro">Protect what you&apos;ve built and move on opportunities with confidence.</p>
              <ul className="path__list">
                <li>Buying or selling a business</li>
                <li>Commercial &amp; contract advice</li>
                <li>Debt recovery</li>
                <li>Commercial property</li>
                <li>SMSF legal advice</li>
              </ul>
              <span className="path__cta">Explore business services <Icon name="arrow" size={15} className="arrow" /></span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
