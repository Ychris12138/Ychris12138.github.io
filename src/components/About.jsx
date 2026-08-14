import { useLanguage } from "../context/LanguageContext.jsx";
import { Icon } from "./icons.jsx";
import Reveal from "./Reveal.jsx";

export default function About() {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <section id="about">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-tag">{about.tag}</span>
            <h2>{about.title}</h2>
          </div>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__text" delay={80}>
            {about.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <div className="skills">
            {about.skillGroups.map((g, i) => (
              <Reveal key={g.title} delay={120 + i * 90}>
                <div className="skill-group">
                  <h3>
                    <Icon name={g.icon} size={16} />
                    {g.title}
                  </h3>
                  <div className="chips">
                    {g.items.map((s) => (
                      <span className="chip" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
