import { PHONE_DISPLAY, PHONE_HREF, EMAIL } from "@/lib/team";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="brand__words">
            <span className="brand__name brand__name--light">hughes legal</span>
            <span className="brand__tag brand__tag--light">lawyers + consultants</span>
          </span>
          <p>
            Trusted local lawyers serving Essendon, Aberfeldie, Ascot Vale, Moonee Ponds,
            Niddrie, Strathmore, Keilor and Airport West since 1983.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <h4>Services</h4>
          <a href="#personal">Family law</a>
          <a href="#personal">Conveyancing &amp; property</a>
          <a href="#personal">Wills &amp; estates</a>
          <a href="#commercial">Business &amp; commercial</a>
          <a href="#commercial">Debt recovery</a>
        </nav>

        <div className="footer__contact">
          <h4>Contact</h4>
          <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <p>Level 1, 333 Keilor Road,<br />Essendon VIC 3040</p>
          <p>Mon–Fri · 8:30am–5:00pm</p>
        </div>
      </div>

      <div className="footer__watermark" aria-hidden="true">hughes legal</div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p>© {new Date().getFullYear()} Hughes Legal Pty Ltd. All rights reserved.</p>
          <p>Essendon, Victoria · Established 1983</p>
        </div>
      </div>
    </footer>
  );
}
