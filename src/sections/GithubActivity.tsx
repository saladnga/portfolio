import { GitHubCalendar } from "react-github-calendar";

const calendarTheme = {
  light: ["#e0f0fa", "#a8d4ef", "#5ab1e3", "#1a8fce", "#0970a4"],
  dark: ["#151a16", "#1e3f2a", "#2f7048", "#5cb679", "#8cd695"],
};

export default function GithubActivity({ isDark }: { isDark: boolean }) {
  return (
    <div className="snap-start mx-5.5 mt-14 rounded-sm border border-line bg-panel p-6 md:mx-16 md:mt-18 md:p-10">
      <div className="flex items-baseline justify-between">
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
          06 - GitHub contributions
        </div>
      </div>
      <div className="mt-5.5 flex justify-center overflow-x-auto text-dim font-mono">
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
