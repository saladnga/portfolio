import { useRef } from "react";
import { profile } from "@/data/profile";
import MagneticButton from "@/components/MagneticButton";
import CursorGlow from "@/components/CursorGlow";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  return (
    <div>
      <section
        ref={heroRef}
        className="relative border-b border-line px-5.5 pt-8.5 md:px-16 md:pt-16 overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0 grid grid-cols-6">
          <span className="border-r border-faint" />
          <span className="border-r border-faint" />
          <span className="border-r border-faint" />
          <span className="border-r border-faint" />
          <span className="border-r border-faint" />
          <span />
        </div>
        {/* status chip + location/role rail */}
        <div className="flex items-center justify-between md:items-start">
          <div className="flex items-center gap-2.5 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.13em] md:tracking-[0.14em] text-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-blip" />
            {profile.availability}
          </div>
        </div>

        {/* avatar (mobile: above headline, stacked) */}
        <div className="mt-4.5 h-22 w-22 overflow-hidden rounded-full border border-line md:hidden">
          <img
            src="/profile.png"
            alt={profile.name}
            fetchPriority="high"
            className="h-full w-full object-cover opacity-90"
          />
        </div>

        {/* headline + desktop avatar, side by side on desktop */}
        <div className="mt-4.5 grid items-end gap-12 md:mt-9 md:grid-cols-[1fr_200px] md:gap-12">
          <h1
            className="m-0 text-[50px] leading-[0.94] tracking-[-0.045em] md:text-[124px] md:leading-[0.88] md:tracking-[-0.05em]"
            style={{ textWrap: "balance" }}
          >
            {profile.tagline.pre}
            <em className="typewriter font-normal italic text-accent">
              {profile.tagline.accent.split("").map((char, i, chars) => (
                <span
                  key={i}
                  className={
                    i === chars.length - 1
                      ? "typewriter-char typewriter-char-last"
                      : "typewriter-char"
                  }
                  style={{ animationDelay: `${0.4 + i * 0.09}s` }}
                >
                  {char}
                </span>
              ))}
            </em>
          </h1>
          <div className="relative hidden h-47.5 w-47.5 md:block">
            <CursorGlow boundsRef={heroRef} />
            <div className="relative h-full w-full overflow-hidden rounded-full border border-line">
              <img
                src="/profile.png"
                alt={profile.name}
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* blurb + CTAs */}
        <div className="mt-4.5 grid gap-8 md:mt-12 md:grid-cols-[1fr_320px] md:items-end md:gap-20">
          <p className="max-w-[52ch] text-[15px] leading-[1.55] text-dim md:text-xl font-mono">
            {profile.blurb}
          </p>
          <div className="flex flex-col gap-2.5">
            <MagneticButton
              href="#contact"
              className="group flex items-center justify-between overflow-visible rounded-sm bg-accent px-5 py-4.25 font-mono text-[11px] uppercase tracking-[0.08em] text-accent-foreground shadow-accent/0 transition-shadow duration-300 hover:shadow-lg hover:shadow-accent/30 hover:brightness-110 md:text-xs"
            >
              LET'S CONNECT
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </MagneticButton>
          </div>
        </div>

        <div className="mt-8 pt-4.5 md:mt-14 md:grid-cols-4 md:gap-8 md:py-5"></div>
      </section>
    </div>
  );
}
