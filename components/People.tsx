import { TEAM, initials, PHONE_HREF } from "@/lib/team";
import Icon from "@/components/icons";

export default function People() {
  return (
    <section className="people" id="people">
      <div className="container">
        <header className="section-head">
          <span className="kicker kicker--center">Our people</span>
          <h2>Real people you&apos;ll actually deal with.</h2>
          <p className="section-sub">
            Our strength is our team — approachable, knowledgeable and genuinely invested in
            getting you the best outcome.
          </p>
        </header>

        <div className="people-grid">
          {TEAM.map((p) => (
            <article className="person" key={p.name}>
              <div className="person__photo">
                {p.photo ? (
                  <img src={p.photo} alt={p.name} />
                ) : (
                  <span className="person__mono" aria-hidden="true">{initials(p.name)}</span>
                )}
              </div>
              <div className="person__body">
                <h3 className="person__name">{p.name}</h3>
                <p className="person__role">{p.role}</p>
                <div className="person__links">
                  <a href={PHONE_HREF} aria-label={`Call ${p.name}`}><Icon name="phone" size={15} /> Call</a>
                  <a href={`mailto:${p.email}`} aria-label={`Email ${p.name}`}><Icon name="mail" size={15} /> Email</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
