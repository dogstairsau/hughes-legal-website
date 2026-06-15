const PERSONAL = [
  { icon: "⚖️", title: "Family law", body: "Separation, divorce, parenting and property settlements handled with care, clarity and a focus on resolving things efficiently." },
  { icon: "🔑", title: "Conveyancing & property", body: "Buying or selling in Melbourne's inner north-west? We manage contracts, due diligence and settlement so nothing slips through." },
  { icon: "📜", title: "Wills & powers of attorney", body: "Make sure your wishes are clear and your family is protected, with documents that hold up when they matter most." },
  { icon: "🕊️", title: "Probate & estates", body: "Sensitive, step-by-step guidance through estate administration so you can focus on family, not paperwork." },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <span className="anchor" id="personal" />
        <header className="section-head section-head--left">
          <p className="eyebrow"><span className="dot" /> Personal &amp; family</p>
          <h2>Looking after you and your family.</h2>
        </header>
        <div className="service-grid">
          {PERSONAL.map((s) => (
            <article className="service-card" key={s.title}>
              <span className="service-card__icon" aria-hidden="true">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>

        <span className="anchor" id="commercial" />
        <header className="section-head section-head--left section-head--spaced">
          <p className="eyebrow"><span className="dot" /> Business &amp; commercial</p>
          <h2>Protecting what you&apos;ve built.</h2>
        </header>
        <div className="service-grid">
          <article className="service-card">
            <span className="service-card__icon" aria-hidden="true">🤝</span>
            <h3>Buying &amp; selling a business</h3>
            <p>From contracts to due diligence, we protect your interests through the whole transaction so you can complete the deal with confidence.</p>
          </article>
          <article className="service-card service-card--feature">
            <span className="service-card__icon" aria-hidden="true">💰</span>
            <h3>Debt recovery</h3>
            <p><strong>Turn unpaid invoices back into cash flow.</strong> We pursue overdue debts firmly and commercially — recovering what you&apos;re owed quickly, often without the cost and delay of going to court.</p>
          </article>
          <article className="service-card">
            <span className="service-card__icon" aria-hidden="true">📑</span>
            <h3>Commercial &amp; contracts</h3>
            <p>Clear, straightforward advice on contracts, transactions, disputes and compliance — practical guidance that keeps your business moving.</p>
          </article>
          <article className="service-card">
            <span className="service-card__icon" aria-hidden="true">🛡️</span>
            <h3>SMSF legal advice</h3>
            <p>Stay on the right side of compliance. We help self-managed super funds manage legal exposure and document decisions correctly.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
