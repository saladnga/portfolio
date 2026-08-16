import Navigation from "./components/Navigation";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Awards from "./sections/Awards";
import Contact from "./sections/Contact";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import Hero from "./sections/Hero";
import Marquee from "./sections/Marquee";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Footer from "./components/Footer";
import GithubActivity from "./sections/GithubActivity";
import { useTheme } from "./context/useTheme";

export default function App() {
  const { isDark } = useTheme();
  return (
    <div className="bg-background text-foreground min-h-screen transition-colors duration-300">
      <Analytics />
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <Experience />
        <Projects />
        <div className="snap-start grid grid-cols-1 md:grid-cols-2 gap-16 px-5.5 pt-14 md:px-16">
          <Education />
          <Awards />
        </div>
        <Skills />
        <GithubActivity isDark={isDark} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
