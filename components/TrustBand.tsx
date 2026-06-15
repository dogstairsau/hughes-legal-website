const ITEMS = ["Family", "Property", "Conveyancing", "Wills & Estates", "Business", "Debt Recovery"];

export default function TrustBand() {
  return (
    <div className="trust-band">
      <div className="container trust-band__inner">
        <span className="trust-band__lead">Trusted across Melbourne&apos;s inner north-west</span>
        {ITEMS.map((item) => (
          <span className="trust-band__item" key={item}>
            <span className="trust-band__sep" aria-hidden="true">·&nbsp;&nbsp;</span>{item}
          </span>
        ))}
      </div>
    </div>
  );
}
