import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import "./App.css";
import { GitHubCalendar } from "react-github-calendar";
import { Link2 } from "lucide-react";

const calendarTheme = {
  light: ["#e0f0fa", "#a8d4ef", "#5ab1e3", "#1a8fce", "#0970a4"],
  dark: ["#1c1917", "#78350f", "#c2410c", "#ea580c", "#fb923c"],
};

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen transition-colors duration-300">
      <div
        className="text-center mx-auto h-screen overflow-y-scroll"
        id="scroll-container"
      >
        <Navigation />

        <div className="pt-20 pb-10 md:pt-30 snap-start flex flex-col justify-center px-4 md:px-0">
          <div className="mx-auto max-w-5xl w-full md:w-3/4 lg:w-1/2">
            <a
              href="https://www.linkedin.com/in/vuhoang1604/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/profile.png"
                alt="Vu Hoang profile photo"
                loading="lazy"
                className="rounded-full w-32 md:w-62 float-none md:float-right mx-auto md:mx-0 md:ml-10 mb-6 hover:scale-101 transition-all opacity-95 hover:opacity-100"
              />
            </a>
            <Intro />
          </div>

          <div className="w-full md:w-3/4 lg:w-1/2 mx-auto px-4 md:px-0 mt-12">
            <div className="mb-5 text-base md:text-lg flex flex-row justify-between items-center">
              <p>My GitHub Contributions</p>
              <a
                href="https://github.com/saladnga"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 hover:underline text-sm md:text-base"
              >
                <p>View on Github</p>
                <Link2 className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
            <GitHubCalendar
              username="saladnga"
              colorScheme={isDark ? "dark" : "light"}
              theme={calendarTheme}
            />
          </div>
        </div>

        <div
          className="py-10 snap-start flex flex-col justify-center"
          id="projects"
        >
          <Projects />
        </div>

        <div
          className="py-10 snap-start flex flex-col justify-center"
          id="skills"
        >
          <Skills />
        </div>

        <div
          className="py-10 snap-start flex flex-col justify-center"
          id="experience"
        >
          <Experiences />
        </div>

        <div
          className="py-10 snap-start flex flex-col justify-center"
          id="education"
        >
          <Education />
        </div>

        <div
          className="py-10 snap-start flex flex-col justify-center"
          id="awards"
        >
          <Awards />
        </div>

        <div
          className="py-10 snap-start flex flex-col justify-center"
          id="contact"
        >
          <Contact />
        </div>

        <Footer />
      </div>
    </div>
  );
}
