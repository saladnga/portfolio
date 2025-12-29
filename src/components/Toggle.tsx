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
      {dark ? (
        <div className="border rounded-lg bg-purple-500 border-purple-500 cursor-pointer hover:opacity-80 py-3 px-3">
          <Moon className="text-white" size={18} />
        </div>
      ) : (
        <div className="border rounded-lg bg-yellow-500 border-yellow-500 cursor-pointer hover:opacity-80 py-3 px-3">
          <Sun className="text-white" size={18} />
        </div>
      )}
    </button>
  );
};

export default Toggle;
