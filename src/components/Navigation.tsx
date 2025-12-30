import {
  CircleUser,
  BriefcaseBusiness,
  Package,
  Microscope,
} from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;

    const sections = ["about", "experience", "projects", "research"];

    const handleScroll = () => {
      const scrollPosition = container.scrollTop + container.clientHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (!element) continue;

        const top = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const container = document.getElementById("scroll-container");
    const section = document.getElementById(sectionId);

    if (container && section) {
      container.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="
        fixed bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 z-50
        flex justify-between items-center px-6 md:px-5 py-3 md:py-3 w-auto rounded-xl
        backdrop-blur-sm
        bg-white/10 dark:bg-white/5
        border border-white/20 dark:border-white/10
        shadow-sm
      "
    >
      <div className="flex-1" />
      <div className="flex justify-center gap-3 md:gap-5">
        <button
          onClick={() => scrollToSection("about")}
          className={`flex flex-col justify-center items-center py-1 px-2 rounded-lg font-semibold cursor-pointer transition-all ${
            activeSection === "about"
              ? "text-accent scale-105"
              : "text-foreground hover:text-accent"
          }`}
        >
          <CircleUser className="w-6 h-6" />
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className={`flex flex-col justify-center items-center py-1 px-2 rounded-lg font-semibold cursor-pointer transition-all ${
            activeSection === "experience"
              ? "text-accent scale-105"
              : "text-foreground hover:text-accent"
          }`}
        >
          <BriefcaseBusiness className="w-6 h-6" />
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className={`flex flex-col justify-center items-center py-1 px-2 rounded-lg font-semibold cursor-pointer transition-all ${
            activeSection === "projects"
              ? "text-accent scale-105"
              : "text-foreground hover:text-accent"
          }`}
        >
          <Package className="w-6 h-6" />
        </button>
        <button
          onClick={() => scrollToSection("research")}
          className={`flex flex-col justify-center items-center py-1 px-2 rounded-lg font-semibold cursor-pointer transition-all ${
            activeSection === "research"
              ? "text-accent scale-105"
              : "text-foreground hover:text-accent"
          }`}
        >
          <Microscope className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
