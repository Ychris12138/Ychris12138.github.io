import { useLanguage } from "../context/LanguageContext.jsx";
import { Icon } from "./icons.jsx";
import Reveal from "./Reveal.jsx";

// 让卡片上的聚光跟随鼠标位置
function handleSpotlight(e) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
}

export default function Projects() {
  const { t } = useLanguage();
  const { projects, projectsSection } = t;

  return (
    <section id="projects">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-tag">{projectsSection.tag}</span>
            <h2>{projectsSection.title}</h2>
            <p>{projectsSection.intro}</p>
          </div>
        </Reveal>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 100}>
              <article className="card" onMouseMove={handleSpotlight}>
                <div className="card__head">
                  <div className="card__icon">
                    <Icon name="folder" size={20} />
                  </div>
                  <div className="card__links">
                    {p.repo && (
                      <a
                        className="icon-btn"
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.name} ${projectsSection.repoLabel}`}
                      >
                        <Icon name="github" size={18} />
                      </a>
                    )}
                    {p.demo && (
                      <a
                        className="icon-btn"
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.name} ${projectsSection.demoLabel}`}
                      >
                        <Icon name="external" size={17} />
                      </a>
                    )}
                  </div>
                </div>

                <h3>{p.name}</h3>
                <p>{p.description}</p>

                <div className="chips">
                  {p.tags.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
