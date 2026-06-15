const ITEMS = ["Family", "Property & Conveyancing", "Wills & Estates", "Business & Commercial", "Debt Recovery"];

export default function TrustBand() {
  return (
    <div className="trust-band">
      <div className="container trust-band__inner">
        <span className="trust-band__lead">Trusted across Melbourne&apos;s inner north-west</span>
        {ITEMS.map((item, i) => (
          <span key={item} style={{ display: "inline-flex", gap: 22, alignItems: "center" }}>
            <span className="trust-band__sep" aria-hidden="true">•</span>
            <span className="trust-band__item">{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
