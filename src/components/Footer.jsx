import { useLanguage } from "../context/LanguageContext.jsx";

export default function Footer() {
  const { t } = useLanguage();
  const { footer, profile } = t;

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {new Date().getFullYear()} {profile.name}. {footer.rights}
        </span>
        <span>
          {footer.built}{" "}
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            React
          </a>{" "}
          {" · "}{footer.deployed}{" "}
          <a href="https://pages.github.com" target="_blank" rel="noreferrer">
            GitHub Pages
          </a>
        </span>
      </div>
    </footer>
  );
}
