import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Toggle from "./Toggle";
import { profile } from "@/data/profile";
import { Menu, X } from "lucide-react";
import { useTheme } from "@/context/useTheme";
import logoLight from "../assets/logo/logo-light.png";
import logoDark from "../assets/logo/logo-dark.png";

const timeOptions: Intl.DateTimeFormatOptions = {
  timeZone: "America/Chicago",
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
};

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const { isDark } = useTheme();
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const formattedTime = time.toLocaleTimeString("en-US", timeOptions);
  const [hours, minutes] = formattedTime.split(":");

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileLinks = navLinks.filter((link) => link.href !== "#skills");

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-background px-5.5 md:px-16 py-5.5 transition-colors ${scrolled ? "border-line" : "border-transparent"}`}
    >
      <div className="flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2.75 hover:opacity-90 transition-all"
        >
          <img
            src={isDark ? logoDark : logoLight}
            alt={profile.name}
            className="h-7 w-7 rounded-full object-cover"
          />
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 font-mono text-[11px] font-medium uppercase tracking-widest md:flex">
          <span className="text-dim">
            CT {hours}
            <span className="animate-blink">:</span>
            {minutes}
          </span>
          <span className="h-3.5 w-px bg-line" />
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className={`text-dim transition-colors hover:text-foreground ${activeId === link.href.slice(1) ? "text-foreground" : "text-dim"}`}
            >
              {link.label}
            </a>
          ))}
          <span className="h-3.5 w-px bg-line" />
          <Toggle />
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <Toggle />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-dim transition-colors hover:border-foreground hover:text-foreground cursor-pointer"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
            className="mt-4 overflow-hidden border-t border-line md:hidden"
          >
            <div className="mt-4 flex flex-col gap-1 pb-1">
              {mobileLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-11 items-center font-mono text-xs uppercase tracking-widest text-dim transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
