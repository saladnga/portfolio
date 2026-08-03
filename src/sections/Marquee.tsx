// src/sections/Marquee.tsx
const techDesktop = [
  "Python",
  "TypeScript",
  "React · Next.js",
  "FastAPI · Django · NestJS",
  "LangChain · ChromaDB",
  "Supabase · PostgreSQL",
  "Full-stack Development",
  "Data Science",
  "Docker · AWS",
];
const techMobile = ["Python", "TypeScript", "React", "FastAPI", "LangChain"];

function Track({ items, className }: { items: string[]; className: string }) {
  const doubled = [...items, ...items];
  return (
    <div
      className={`w-max items-center whitespace-nowrap font-mono uppercase text-dim animate-marquee hover:[animation-play-state:paused] ${className}`}
    >
      {doubled.flatMap((item, i) => [
        <span key={`t-${i}`}>{item}</span>,
        <span key={`d-${i}`} className="text-accent">
          ◆
        </span>,
      ])}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="snap-start overflow-hidden border-b border-line bg-panel">
      <Track
        items={techMobile}
        className="flex gap-7 py-3 text-[11px] tracking-[0.14em] md:hidden"
      />
      <Track
        items={techDesktop}
        className="hidden gap-10 py-3.5 text-xs tracking-[0.16em] md:flex"
      />
    </div>
  );
}
