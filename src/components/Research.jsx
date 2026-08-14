import { useLanguage } from "../context/LanguageContext.jsx";
import { Icon } from "./icons.jsx";
import Reveal from "./Reveal.jsx";

export default function Research() {
  const { t } = useLanguage();
  const { research } = t;

  return (
    <section id="research">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-tag">{research.tag}</span>
            <h2>{research.title}</h2>
            <p>
              {research.interestsLabel}: {research.interests.join(" · ")}
            </p>
          </div>
        </Reveal>

        <div className="pubs">
          {research.items.map((pub, i) => (
            <Reveal key={pub.title} delay={i * 110}>
              <article className="pub">
                <div className="pub__year">{pub.year}</div>
                <div className="pub__body">
                  {pub.kind && <span className="pub__kind">{pub.kind}</span>}
                  <h3>{pub.title}</h3>
                  <p className="pub__authors">{pub.authors}</p>
                  <p className="pub__venue">{pub.venue}</p>
                  {pub.links && pub.links.length > 0 && (
                    <div className="pub__links">
                      {pub.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.url}
                          target={l.url.startsWith("#") ? undefined : "_blank"}
                          rel="noreferrer"
                        >
                          <Icon name="fileText" size={14} />
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
