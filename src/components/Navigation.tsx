import { useState, useEffect } from "react";
import Toggle from "./Toggle";
import { FileUserIcon, HomeIcon } from "lucide-react";

const Navigation = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const scrollToTop = () => {
    const container = document.getElementById("scroll-container");
    if (container) {
      container.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const formattedTime = time.toLocaleTimeString("en-US", {
    timeZone: "America/Chicago",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  const [hours, minutes] = formattedTime.split(":");

  return (
    <div
      className="
        fixed top-3 left-1/2 -translate-x-1/2 z-50
        flex justify-between items-center px-6 md:px-5 py-1 w-auto rounded-xl
        backdrop-blur-sm
        bg-white/10 dark:bg-white/5
        border border-white/20 dark:border-white/10
        shadow-sm
      "
    >
      <div className="flex-1" />
      <div className="flex justify-center gap-3 md:gap-5">
        <div className="flex flex-col justify-center items-center px-2 rounded-lg font-semibold pointer-events-none">
          <p className="text-sm text-orange-500 font-['Doto',sans-serif] font-extrabold">
            CT
          </p>
          <div className="flex flex-col justify-center items-center rounded-lg font-semibold">
            <div className="flex items-center justify-center gap-1">
              <span className="text-xs text-orange-500 font-['Doto',sans-serif] font-extrabold">
                {hours}
              </span>
              <span className="text-xs text-orange-500 font-['Doto',sans-serif] font-extrabold animate-blink">
                :
              </span>
              <span className="text-xs text-orange-500 font-['Doto',sans-serif] font-extrabold">
                {minutes}
              </span>
            </div>
          </div>
        </div>

        <div className="h-10 w-px bg-white/20 dark:bg-white/10 my-auto"></div>

        <button
          onClick={scrollToTop}
          className="flex flex-col justify-center items-center py-1 px-2 rounded-lg cursor-pointer transition-all text-orange-500 hover:bg-white/20 dark:hover:bg-white/10 hover:backdrop-blur-md"
        >
          <HomeIcon className="w-6 h-6" />
          <p className="text-xs text-orange-500 font-['Doto',sans-serif] font-extrabold">
            Home
          </p>
        </button>

        <a
          href="https://drive.google.com/file/d/1UI7F4Ry4hGppl725mrZsw5AIu0m4-qU6/view?usp=sharing"
          target="_blank"
        >
          <button className="flex flex-col justify-center items-center py-1 px-2 rounded-lg cursor-pointer transition-all text-orange-500 hover:bg-white/20 dark:hover:bg-white/10 hover:backdrop-blur-md">
            <FileUserIcon className="w-6 h-6" />
            <p className="text-xs text-orange-500 font-['Doto',sans-serif] font-extrabold">
              Resume
            </p>
          </button>
        </a>

        <div className="h-10 w-px bg-white/20 dark:bg-white/10 my-auto"></div>

        <button className="flex flex-col justify-center items-center py-1 px-2 rounded-lg cursor-pointer transition-all text-orange-500 hover:bg-white/20 dark:hover:bg-white/10 hover:backdrop-blur-md">
          <Toggle />
          <p className="text-xs text-orange-500 font-['Doto',sans-serif] font-extrabold">
            Theme
          </p>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
