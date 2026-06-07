import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import PageContainer from "./PageContainer";
import SectionTitle from "./SectionTitle";
import crawler from "../assets/projects/crawler.png";
import gdsc from "../assets/projects/gdsc-web.png";
import healthlink from "../assets/projects/healthlink.png";
import hillchart from "../assets/projects/hillchart.png";
import pitch from "../assets/projects/pitch.png";

type Project = {
  title: string;
  description: string;
  link: string;
  image: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    title: "Troy HealthBot - Intelligent Sexual Health Assistant",
    description:
      "A full-stack AI-powered health assistant designed to provide evidence-based sexual health information to students.",
    link: "https://github.com/saladnga/TroyHealthLink-STD-Information-and-Risk-Assistant-Chatbot",
    image: healthlink,
    technologies: [
      "React",
      "FastAPI",
      "Supabase",
      "RAG",
      "XGBoost",
      "ChromaDB",
    ],
  },
  {
    title: "PhapDien Crawler, Vector Database and Semantic Search Tools",
    description:
      "An end-to-end legal document retrieval system that crawls the PhapDien website, processes Vietnamese legal texts, converts into embeddings with LangChain and ChromaDB, and enables fast semantic search.",
    link: "https://github.com/saladnga/ISODS-PhapDien-Crawler-Semantic-Search",
    image: crawler,
    technologies: ["Python", "LangChain", "ChromaDB"],
  },
  {
    title: "LIFT Product - HillChart",
    description:
      "An interactive Hill Chart tool for confidence-based project tracking, supporting task movement, snapshot versioning, and clear visualization of progress over time.",
    link: "https://hillchart.naucode.io/",
    image: hillchart,
    technologies: ["React", "TypeScript", "NestJS", "Ant Design"],
  },
  {
    title: "LIFT Product - Solution Pitch",
    description:
      "A guided solution-pitching interface that helps teams structure problems and proposals clearly, accelerating alignment and decision-making.",
    link: "https://pitch.naucode.io/",
    image: pitch,
    technologies: ["React", "TypeScript", "NestJS", "Ant Design"],
  },
  {
    title: "GDGoC - HUST Website",
    description:
      "The official website of Google Developer Group on Campus – Hanoi University of Science and Technology.",
    link: "https://gdgoc.org/",
    image: gdsc,
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "Vercel"],
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.slice(0, 2);

  return (
    <div>
      <PageContainer className="mb-6 md:mb-10 text-left">
        <SectionTitle>PROJECTS</SectionTitle>
      </PageContainer>

      <div>
        <PageContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {displayed.map((project) => (
            <div key={project.link} className="h-full">
              <div className="border rounded-2xl border-theme hover-border-accent overflow-hidden transition-all hover:shadow-lg h-full flex flex-col text-left">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="h-40 md:h-48 w-full object-cover duration-300 hover:scale-110"
                  />
                </a>

                <div className="p-4 md:p-5 flex flex-col grow">
                  <p className="font-bold text-base md:text-lg mb-2 md:mb-3">
                    {project.title}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-2 md:mb-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-tag text-accent px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs md:text-sm mb-3 md:mb-4 text-foreground/80 grow">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 border border-theme hover-border-accent hover-bg-accent rounded-lg text-xs md:text-sm transition-all w-fit"
                  >
                    View Project
                    <ExternalLink size={14} className="md:w-4 md:h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </PageContainer>

        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 md:mt-10 px-4 md:px-6 py-2 border border-theme hover-border-accent hover-bg-accent rounded-lg transition-all text-sm md:text-base mx-auto block"
        >
          <div className="flex gap-2 justify-center items-center cursor-pointer">
            <p>{showAll ? "Hide Projects" : "Show All Projects"}</p>
            {showAll ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
}
