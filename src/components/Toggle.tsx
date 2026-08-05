import { useTheme } from "@/context/useTheme";
import { Moon, Sun } from "lucide-react";

const Toggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex h-11 w-11 items-center justify-center hover:text-inherit transition-opacity hover:opacity-70 cursor-pointer text-dim"
    >
      <div className="relative h-6 w-6">
        <Sun
          className={`absolute inset-0 transition-all duration-300 ${
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <Moon
          className={`absolute inset-0 transition-all duration-300 ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
    </button>
  );
};

export default Toggle;
