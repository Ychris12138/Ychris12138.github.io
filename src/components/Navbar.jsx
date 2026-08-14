import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import { Icon } from "./icons.jsx";

export default function Navbar() {
  const { language, t, toggleLanguage } = useLanguage();
  const { profile, nav } = t;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const links = [
    { href: "#about", label: nav.about },
    { href: "#projects", label: nav.projects },
    { href: "#research", label: nav.research },
    { href: "#contact", label: nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 24);
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <span
        className="nav__progress"
        style={{ width: `${progress * 100}%` }}
      />
      <nav className="nav__inner container">
        <a className="nav__logo" href="#top" onClick={() => setOpen(false)}>
          <span className="nav__logo-badge">{profile.initials}</span>
          {profile.name}
        </a>

        <button
          className="nav__toggle"
          onClick={() => setOpen(!open)}
          aria-label={nav.menuLabel}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav__links ${open ? "nav__links--open" : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <button
              className="nav__language"
              type="button"
              onClick={() => {
                toggleLanguage();
                setOpen(false);
              }}
              aria-label={nav.languageLabel}
              title={nav.languageLabel}
            >
              <span className={language === "zh" ? "is-active" : ""}>中</span>
              <span aria-hidden="true">/</span>
              <span className={language === "en" ? "is-active" : ""}>EN</span>
            </button>
          </li>
          <li>
            <a
              className="nav__cta"
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="github" size={15} />
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
