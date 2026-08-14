import { useLanguage } from "../context/LanguageContext.jsx";
import { Icon } from "./icons.jsx";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  const { t } = useLanguage();
  const { contact, profile, socials } = t;

  return (
    <section id="contact">
      <div className="container">
        <Reveal y={34}>
          <div className="contact-card">
            <h2>{contact.title}</h2>
            <p>{contact.text}</p>
            <a
              className="btn btn--white"
              href={`mailto:${profile.email}`}
              aria-label={contact.emailLabel}
            >
              <Icon name="mail" size={16} />
              {profile.email}
            </a>

            <div className="contact__socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  className="social-btn"
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  title={s.label}
                >
                  <Icon name={s.icon} size={19} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
