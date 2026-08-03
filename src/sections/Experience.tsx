import SectionHeader from "@/components/SectionHeader";
import Row from "@/components/Row";
import { experiences } from "@/data/experiences";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="snap-start scroll-mt-20">
      <SectionHeader label="02 - Work Experience" />
      <div className="px-5.5 md:px-16">
        {experiences.map((experience, i) => {
          const isCurrent = experience.time.includes("Present");
          return (
            <Reveal key={experience.company_name} delay={i * 0.04}>
              <Row className="grid-cols-1 md:grid-cols-[170px_1fr_260px] gap-2 md:gap-8 py-4 md:py-6.5 transition-colors md:hover:bg-panel">
                <div className="font-mono text-[11px] leading-relaxed text-dim">
                  {experience.time.toUpperCase()}
                  {isCurrent && (
                    <>
                      <br />
                      <span className="text-accent">CURRENT</span>
                    </>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <img
                      src={experience.company_thumbnail}
                      alt={experience.company_name}
                      loading="lazy"
                      className="h-12 w-12 shrink-0 rounded-sm border border-line bg-panel object-contain p-1 grayscale transition-all group-hover:grayscale-0"
                    />
                    <div>
                      <div className="text-xl md:text-[25px] font-medium transition-colors md:group-hover:text-accent">
                        {experience.position}
                      </div>
                      <div className="mt-1 font-light text-dim">
                        {experience.company_name}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex items-start justify-between gap-4">
                    <ul className="space-y-1 text-[15px] font-light text-dim">
                      {(experience.bullets ?? []).map((bullet, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-accent">-</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    {experience.metric && (
                      <span className="shrink-0 text-right md:hidden">
                        <div className="font-mono text-lg font-bold text-accent">
                          {experience.metric.value}
                        </div>
                        <div className="text-[11px] text-dim">
                          {experience.metric.label}
                        </div>
                      </span>
                    )}
                  </div>
                </div>
                <div className="hidden flex-col items-end gap-3 self-start md:flex">
                  <div className="flex flex-wrap content-start items-start justify-end gap-1.75">
                    {(experience.tags ?? []).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-2.5 py-1.5 font-mono text-[10px] text-dim"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {experience.metric && (
                    <span className="text-right">
                      <div className="font-mono text-lg font-bold text-accent">
                        {experience.metric.value}
                      </div>
                      <div className="text-[11px] text-dim">
                        {experience.metric.label}
                      </div>
                    </span>
                  )}
                </div>
              </Row>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
