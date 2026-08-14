import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Research from "./components/Research.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Research />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
