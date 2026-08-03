import { GitHubCalendar } from "react-github-calendar";

const calendarTheme = {
  light: ["#e0f0fa", "#a8d4ef", "#5ab1e3", "#1a8fce", "#0970a4"],
  dark: ["#1c1917", "#78350f", "#c2410c", "#ea580c", "#fb923c"],
};

export default function GithubActivity({ isDark }: { isDark: boolean }) {
  return (
    <div className="snap-start mx-5.5 mt-14 rounded-[3px] border border-line bg-panel p-6 md:mx-16 md:mt-18 md:p-10">
      <div className="flex items-baseline justify-between">
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
          06 - GitHub contributions
        </div>
      </div>
      <div className="mt-5.5 flex justify-center overflow-x-auto">
        <GitHubCalendar
          username="saladnga"
          colorScheme={isDark ? "dark" : "light"}
          theme={calendarTheme}
          blockSize={14}
          blockMargin={20}
        />
      </div>
    </div>
  );
}
