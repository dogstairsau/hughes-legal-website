import { IMG } from "@/lib/images";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/team";

export default function CtaBand() {
  return (
    <section className="cta-band">
      <img src={IMG.street} alt="" aria-hidden="true" />
      <div className="container cta-band__inner">
        <h2>Speak with a local lawyer in Essendon.</h2>
        <p>
          If you&apos;re looking for trusted, practical legal advice, we&apos;re ready to help —
          with a reply within one business day.
        </p>
        <div>
          <a href="#contact" className="btn btn--clay">Request a call back</a>
          <a href={PHONE_HREF} className="btn btn--ghost-light">Call {PHONE_DISPLAY}</a>
        </div>
      </div>
    </section>
  );
}
