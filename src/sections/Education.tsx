import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { education } from "@/data/education";

export default function Education() {
  return (
    <div id="education" className="scroll-mt-20">
      <SectionHeader label="03 - Education" />
      <div>
        {education.map((edu, i) => (
          <Reveal key={edu.school} delay={i * 0.04}>
            <div className="group border-t border-line py-5.5 transition-colors duration-300 md:hover:bg-panel">
              <div className="grid grid-cols-[1fr_auto] items-baseline gap-3 font-mono text-[11px] text-dim">
                <span>{edu.school.toUpperCase()}</span>
                <span className="whitespace-nowrap">{edu.years}</span>
              </div>
              <div className="mt-2.5 flex items-center gap-3">
                <a href={edu.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={edu.logo}
                    alt={edu.school}
                    loading="lazy"
                    className="h-12 w-12 shrink-0 rounded-sm border border-line bg-panel object-contain p-1 grayscale transition-all group-hover:grayscale-0"
                  />
                </a>
                <div className="text-2xl font-medium tracking-tight transition-colors duration-300 md:text-[26px]">
                  {edu.degree}
                </div>
              </div>
              {edu.honors && (
                <div className="mt-1.5 font-light text-dim">{edu.honors}</div>
              )}
              {edu.affiliations && edu.affiliations.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.75">
                  {edu.affiliations.map((aff) => (
                    <span
                      key={aff}
                      className="rounded-full border border-line px-2.5 py-1.5 font-mono text-[10px] text-dim transition-colors duration-300 hover:text-accent hover:border-accent hover:bg-accent/5 cursor-pointer"
                    >
                      {aff}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
