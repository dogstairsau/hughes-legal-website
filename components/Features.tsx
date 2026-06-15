const FEATURES = [
  {
    icon: "📍",
    title: "Genuinely local",
    body: "On Keilor Road since 1983. We know Essendon, and the families and businesses who call it home.",
  },
  {
    icon: "⏱️",
    title: "Reply within one business day",
    body: "Tell us about your matter and you'll hear back from a real lawyer within one business day — guaranteed.",
  },
  {
    icon: "🤝",
    title: "Whole-of-firm support",
    body: "In-house accountants, financial planners and mortgage brokers, plus barristers and consultants when you need them.",
  },
];

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="feature-grid">
          {FEATURES.map((f) => (
            <div className="feature" key={f.title}>
              <span className="feature__icon" aria-hidden="true">{f.icon}</span>
              <div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
