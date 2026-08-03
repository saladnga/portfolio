import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <div className="hidden snap-start scroll-mt-20 md:block" id="skills">
      <SectionHeader label="05 - Skills" />
      <div className="grid grid-cols-2 gap-x-16 px-16">
        {Object.entries(skillCategories).map(([category, skills], i) => (
          <Reveal key={i} delay={i * 0.04}>
            <div className="grid grid-cols-[110px_1fr] items-start gap-5 border-t border-line py-4.5">
              <span className="pt-1.25 font-mono text-[11px] tracking-widest text-accent">
                {category.toUpperCase()}
              </span>
              <span className="flex flex-wrap  gap-5">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-full border border-line px-2.75 py-1.5 font-mono text-[11px] text-dim flex items-center gap-1.5"
                  >
                    {skill.icon?.map((Icon, i) => (
                      <Icon key={i} className="h-3 w-3" />
                    ))}
                    {skill.name}
                  </span>
                ))}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
