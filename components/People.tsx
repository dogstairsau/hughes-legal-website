import { TEAM, AVATAR_GRADIENTS, initials, PHONE_HREF } from "@/lib/team";

export default function People() {
  return (
    <section className="people" id="people">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow eyebrow--center"><span className="dot" /> Our people</p>
          <h2>Real people you&apos;ll actually deal with.</h2>
          <p className="section-sub">
            Our strength is our team — approachable, knowledgeable, and genuinely invested in
            getting you the best outcome. The same person who starts your matter stands by your
            side to the end.
          </p>
        </header>

        <div className="people-grid">
          {TEAM.map((p, i) => (
            <article className="person" key={p.name}>
              <div
                className="person__avatar"
                style={
                  p.photo
                    ? { backgroundImage: `url(${p.photo})` }
                    : { background: AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length] }
                }
                aria-hidden={p.photo ? undefined : true}
              >
                {!p.photo && initials(p.name)}
              </div>
              <h3 className="person__name">{p.name}</h3>
              <p className="person__role">{p.role}</p>
              <div className="person__links">
                <a href={PHONE_HREF} aria-label={`Call ${p.name}`}>Call</a>
                <a href={`mailto:${p.email}`} aria-label={`Email ${p.name}`}>Email</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
