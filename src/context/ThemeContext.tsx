import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext } from "./theme-context";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <ThemeContext.Provider
      value={{ isDark, toggleTheme: () => setIsDark((v) => !v) }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
