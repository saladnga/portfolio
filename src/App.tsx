import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Mascot from "./components/Mascot";
import { Separator } from "@/components/ui/separator";
import Research from "./components/Research";
import Experiences from "./components/Experiences";
import VariableProximity from "./components/ui/VariableProximity";
import { useRef } from "react";
import { useState, useEffect } from "react";
import Toggle from "./components/Toggle";
import "./App.css";
import "./index.css";

export default function App() {
  const containerRef = useRef<HTMLElement>(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    timeZone: "America/Chicago",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedDate = time.toLocaleDateString("en-US", {
    timeZone: "America/Chicago",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const [hours, minutes] = formattedTime.split(":");

  return (
    <div className="bg-background text-foreground min-h-screen transition-colors duration-300">
      <div
        className="text-center mx-auto h-screen overflow-y-scroll snap-y snap-mandatory"
        id="scroll-container"
      >
        <Navigation />

        <div
          ref={containerRef as React.RefObject<HTMLDivElement>}
          style={{ position: "relative" }}
          className="w-full px-4 md:px-10 py-6 md:py-0 snap-start"
        >
          {/* TITLE */}
          <div className="flex justify-center w-full">
            <VariableProximity
              label={"VU'S PORTFOLIO"}
              className="
        variable-proximity-demo
        text-4xl md:text-7xl
        mt-4 md:mt-10
        font-extrabold
        w-full
        text-center
        md:whitespace-nowrap
      "
              fromFontVariationSettings="'wght' 800, 'opsz' 9"
              toFontVariationSettings="'wght' 1500, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </div>

          {/* MOBILE: time ↔ toggle */}
          <div className="flex md:hidden justify-between items-center mt-4">
            <div className="flex flex-col text-xs">
              <div className="flex items-center">
                <span>{hours}</span>
                <span className="mx-0.5 animate-blink">:</span>
                <span>{minutes}</span>
                <span className="ml-2">ALABAMA, USA</span>
              </div>
              <div className="opacity-80">{formattedDate}</div>
            </div>

            <Toggle />
          </div>

          {/* DESKTOP GRID */}
          <div className="hidden md:grid grid-cols-3 items-center mt-6">
            {/* TIME */}
            <div className="flex flex-col text-lg">
              <div className="flex items-center">
                <span>{hours}</span>
                <span className="mx-0.5 animate-blink">:</span>
                <span>{minutes}</span>
                <span className="ml-2">ALABAMA, USA</span>
              </div>
              <div className="text-sm opacity-80 flex items-center">
                {formattedDate}
              </div>
            </div>
            <div /> {/* spacer */}
            {/* TOGGLE */}
            <div className="flex justify-end">
              <Toggle />
            </div>
          </div>
        </div>

        <div
          className="md:py-20 snap-start flex flex-col justify-center"
          id="about"
        >
          <div className="text-4xl font-semibold mb-20 tracking-widest">
            ABOUT
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mx-auto max-w-5xl gap-10">
            <Mascot />
            <div className="flex-1 md:pr-30 ">
              <Intro />
            </div>
          </div>
        </div>

        <div className="w-1/2 mx-auto">
          <Separator className="my-8 bg-foreground" />
        </div>

        <div
          className="md:py-20 snap-start flex flex-col justify-center"
          id="experience"
        >
          <div className="text-4xl font-semibold mb-10 tracking-widest">
            EXPERIENCE
          </div>
          <Experiences />
        </div>

        <div className="w-1/2 mx-auto">
          <Separator className="my-8 bg-foreground" />
        </div>

        <div
          className="md:py-20 snap-start flex flex-col justify-center"
          id="projects"
        >
          <div className="text-4xl font-semibold mb-10 tracking-widest">
            PROJECTS
          </div>
          <Projects />
        </div>

        <div className="w-1/2 mx-auto">
          <Separator className="my-8 bg-foreground" />
        </div>

        <div
          className="md:py-20 snap-start flex flex-col justify-center"
          id="research"
        >
          <div className="text-4xl font-semibold mb-10 tracking-widest">
            RESEARCH
          </div>
          <Research />

          <div className="pt-20 w-1/2 mx-auto">
            <Separator className="my-8 bg-foreground" />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
