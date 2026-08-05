import { awards } from "@/data/awards";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

export default function Awards() {
  return (
    <div id="awards" className="scroll-mt-20">
      <SectionHeader label="04 - Awards & honors" />
      <div>
        {awards.map((award, idx) => (
          <Reveal key={`${award.time} - ${award.title}`} delay={idx * 0.04}>
            <div className="group grid grid-cols-[1fr_auto] items-baseline gap-4 border-t border-line py-3.75 transition-colors duration-300 md:hover:bg-panel">
              <span className="text-lg font-medium tracking-tight transition-colors duration-300 group-hover:text-accent md:text-xl">
                {award.title}
              </span>
              <span
                className={`font-mono text-[11px] transition-colors duration-300 ${idx < 2 ? "text-accent" : "text-dim group-hover:text-foreground"}`}
              >
                {award.time}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
