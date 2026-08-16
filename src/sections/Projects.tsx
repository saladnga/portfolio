import SectionHeader from "@/components/SectionHeader";
import Row from "@/components/Row";
import { projects } from "@/data/projects";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return (
    <section
      id="projects"
      className="snap-start scroll-mt-20 px-5.5 md:px-16"
    >
      <SectionHeader
        label="02 - Projects"
        metaLabel="github.com/saladnga ↗"
        metaHref="https://github.com/saladnga"
      />
      <div>
        {projects.map((project, i) => (
          <Reveal key={project.link} delay={i * 0.04}>
            <Row
              as="a"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="grid-cols-[28px_1fr] md:grid-cols-[52px_1fr_360px_40px] gap-3 md:gap-6 items-center py-4 md:py-7"
            >
              <span className="font-mono text-xs text-dim transition-colors group-hover:text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-2xl md:text-[38px] font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2.5">
                {project.title}
                <span className="mt-1 block text-[13px] font-light text-dim md:hidden">
                  {project.description}
                </span>
              </span>
              <div className="hidden md:flex md:flex-col md:items-baseline md:gap-2">
                <span className="font-mono text-[11px]">
                  {project.technologies.join(" · ")}
                </span>
                <span className="hidden text-[15px] font-light text-dim md:block">
                  {project.description}
                </span>
              </div>
              <span className="hidden md:flex justify-self-end text-[22px] opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                ↗
              </span>
            </Row>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
