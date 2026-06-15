import Icon, { type IconName } from "@/components/icons";

const PERSONAL: { icon: IconName; title: string; body: string }[] = [
  { icon: "scales", title: "Family law", body: "Separation, divorce, parenting and property settlements handled with care, clarity and a focus on resolving things efficiently." },
  { icon: "key", title: "Conveyancing & property", body: "Buying or selling in Melbourne's inner north-west? We manage contracts, due diligence and settlement so nothing slips through." },
  { icon: "scroll", title: "Wills & powers of attorney", body: "Make sure your wishes are clear and your family protected, with documents that hold up when they matter most." },
  { icon: "estate", title: "Probate & estates", body: "Sensitive, step-by-step guidance through estate administration so you can focus on family, not paperwork." },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <span className="anchor" id="personal" />
        <header className="section-head section-head--left">
          <span className="kicker">Personal &amp; family</span>
          <h2>Looking after you and your family.</h2>
        </header>
        <div className="service-grid">
          {PERSONAL.map((s) => (
            <article className="service-card" key={s.title}>
              <span className="service-card__icon"><Icon name={s.icon} size={30} /></span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>

        <span className="anchor" id="commercial" />
        <header className="section-head section-head--left section-head--spaced">
          <span className="kicker">Business &amp; commercial</span>
          <h2>Protecting what you&apos;ve built.</h2>
        </header>
        <div className="service-grid">
          <article className="service-card">
            <span className="service-card__icon"><Icon name="briefcase" size={30} /></span>
            <h3>Buying &amp; selling a business</h3>
            <p>From contracts to due diligence, we protect your interests through the whole transaction so you can complete the deal with confidence.</p>
          </article>
          <article className="service-card service-card--feature">
            <span className="service-card__icon"><Icon name="banknote" size={30} /></span>
            <h3>Debt recovery</h3>
            <p><strong>Turn unpaid invoices back into cash flow.</strong> We pursue overdue debts firmly and commercially — recovering what you&apos;re owed quickly, often without the cost and delay of court.</p>
          </article>
          <article className="service-card">
            <span className="service-card__icon"><Icon name="filecheck" size={30} /></span>
            <h3>Commercial &amp; contracts</h3>
            <p>Clear, straightforward advice on contracts, transactions, disputes and compliance — practical guidance that keeps your business moving.</p>
          </article>
          <article className="service-card">
            <span className="service-card__icon"><Icon name="shield" size={30} /></span>
            <h3>SMSF legal advice</h3>
            <p>Stay on the right side of compliance. We help self-managed super funds manage legal exposure and document decisions correctly.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
