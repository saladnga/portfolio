import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Awards from "./components/Awards";
import Contacts from "./components/Contact";
import "./App.css";
import "./index.css";
import { GitHubCalendar } from "react-github-calendar";
import { Link2 } from "lucide-react";

export default function App() {
  return (
    <div className="bg-background text-foreground min-h-screen transition-colors duration-300">
      <div
        className="text-center mx-auto h-screen overflow-y-scroll"
        id="scroll-container"
      >
        <Navigation />

        <div className="pt-20 pb-10 md:pt-30 snap-start flex flex-col justify-center px-4 md:px-0">
          <div className="mx-auto max-w-5xl w-full md:w-3/4 lg:w-1/2">
            <a href="https://www.linkedin.com/in/vuhoang1604/" target="_blank">
              <img
                src="/profile.jpg"
                className="rounded-full w-32 md:w-62 float-none md:float-right mx-auto md:mx-0 md:ml-10 mb-6 hover:scale-101 transition-all"
              />
            </a>

            <Intro />
          </div>

          <br />
          <br />
          <div className="w-full md:w-3/4 lg:w-1/2 mx-auto px-4 md:px-0">
            <div className="mb-5 text-base md:text-lg flex flex-row justify-between items-center">
              <p>My GitHub Contributions</p>
              <a
                href="https://github.com/saladnga"
                className="flex gap-2 hover:text-white hover:underline text-sm md:text-base"
              >
                <p>View on Github</p>
                <Link2 className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>

            <GitHubCalendar
              username="saladnga"
              colorScheme="dark"
              theme={{
                light: ["#ffedd5", "#fed7aa", "#fdba74", "#fb923c", "#ea580c"],
                dark: ["#1c1917", "#78350f", "#c2410c", "#ea580c", "#fb923c"],
              }}
            />
          </div>
        </div>

        <div
          className="py-10 md:py-10 snap-start flex flex-col justify-center"
          id="projects"
        >
          <Projects />
        </div>

        <div
          className="py-10 md:py-10 snap-start flex flex-col justify-center"
          id="skills"
        >
          <Skills />
        </div>

        <div
          className="py-10 md:py-10 snap-start flex flex-col justify-center"
          id="experience"
        >
          <Experiences />
        </div>

        <div
          className="py-10 md:py-10 snap-start flex flex-col justify-center"
          id="education"
        >
          <Education />
        </div>

        <div
          className="py-10 md:py-10 snap-start flex flex-col justify-center"
          id="awards"
        >
          <Awards />
        </div>

        <div
          className="py-10 md:py-10 snap-start flex flex-col justify-center"
          id="contact"
        >
          <Contacts />
        </div>

        <Footer />
      </div>
    </div>
  );
}
