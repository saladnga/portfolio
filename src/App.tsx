import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Gundam from "./components/Gundam";
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

  const [hours, minutes] = formattedTime.split(":");

  return (
    <div className="bg-background text-foreground min-h-screen transition-colors duration-300">
      <div className="text-center mx-auto h-screen overflow-y-scroll snap-y snap-mandatory">
        <Navigation />

        <div
          ref={containerRef as React.RefObject<HTMLDivElement>}
          style={{ position: "relative" }}
          className="grid grid-cols-3 w-full px-8 snap-start items-center"
        >
          <div className="flex flex-row justify-start items-center rounded-lg text-slate-800 font-semibold  mt-10">
            <div className="mr-2">
              <span>{hours}</span>
              <span className="mx-0.5 animate-blink">:</span>
              <span>{minutes}</span>
            </div>
            <div>Alabama, US</div>
          </div>
          <div className="flex justify-center">
            <VariableProximity
              label={"hi, the name's Vu Hoang"}
              className={"variable-proximity-demo text-5xl mt-10"}
              fromFontVariationSettings="'wght' 800, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </div>
          <div className="flex justify-end  mt-10">
            <Toggle />
          </div>
        </div>

        <div className="py-20 snap-start flex flex-col justify-center">
          <div className="text-2xl font-bold mb-10">about</div>
          <div className="flex justify-center items-center mx-auto max-w-5xl">
            <Gundam />
            <div className="flex-1 pr-30 ">
              <Intro />
            </div>
          </div>

          <div className="w-1/2 mx-auto">
            <Separator className="my-8 bg-slate-400" />
          </div>

          <div className="py-20 snap-start flex flex-col justify-center">
            <div className="text-2xl font-bold">experience</div>
            <Experiences />
          </div>

          <div className="w-1/2 mx-auto">
            <Separator className="my-8 bg-slate-400" />
          </div>

          <div className="py-20 snap-start flex flex-col justify-center">
            <div className="text-2xl font-bold">projects</div>
            <Projects />
          </div>

          <div className="w-1/2 mx-auto">
            <Separator className="my-8 bg-slate-400" />
          </div>

          <div className="py-20 snap-start flex flex-col justify-center">
            <div className="text-2xl font-bold">research contribution</div>
            <Research />
          </div>

          <div className="w-1/2 mx-auto">
            <Separator className="my-8 bg-slate-400" />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
