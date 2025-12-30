import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const Toggle = () => {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button onClick={() => setDark((v) => !v)}>
      <div
        className="border rounded-full bg-accent p-2 md:p-4 cursor-pointer hover:opacity-85 backdrop-blur-sm border-white/20 dark:border-white/10
        shadow-sm"
      >
        {dark ? (
          <Moon className="text-white" />
        ) : (
          <Sun className="text-white" />
        )}
      </div>
    </button>
  );
};

export default Toggle;
