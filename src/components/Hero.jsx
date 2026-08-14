import { useLanguage } from "../context/LanguageContext.jsx";
import { Icon } from "./icons.jsx";
import Counter from "./Counter.jsx";
import RotatingWord from "./RotatingWord.jsx";

export default function Hero() {
  const { t } = useLanguage();
  const { profile, hero } = t;

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__text">
          <span className="hero__badge">
            <Icon name="mapPin" size={14} />
            {profile.location} · {profile.role}
          </span>
          <h1>
            {hero.greeting} <span className="grad-text">{profile.name}</span>
          </h1>

          <p className="hero__tagline">
            {profile.taglineLead}{" "}
            <RotatingWord words={profile.rotatingWords} />
          </p>
          <p className="hero__sub">{profile.heroSub}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              {hero.workButton}
              <Icon name="arrowRight" size={16} />
            </a>
            {profile.resumeUrl ? (
              <a
                className="btn btn--ghost"
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="fileText" size={16} />
                {hero.resumeButton}
              </a>
            ) : (
              <a className="btn btn--ghost" href="#contact">
                <Icon name="mail" size={16} />
                {hero.contactButton}
              </a>
            )}
          </div>

          <div className="hero__stats">
            {hero.stats.map((s) => (
              <div className="stat" key={s.label}>
                <span className="stat__value">
                  <Counter value={s.value} />
                </span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__avatar">
            {profile.avatar ? (
              <img src={profile.avatar} alt={profile.name} />
            ) : (
              profile.initials
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
