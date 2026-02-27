import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import crawler from "../assets/projects/crawler.png";
import gdsc from "../assets/projects/gdsc-web.png";
import healthlink from "../assets/projects/healthlink.png";
import hillchart from "../assets/projects/hillchart.png";
import pitch from "../assets/projects/pitch.png";

const data = [
  {
    title: "Troy HealthBot - Intelligent Sexual Health Assistant",
    description:
      "A full-stack AI-powered health assistant designed to provide evidence-based sexual health information to students.",
    link: "https://github.com/saladnga/TroyHealthLink-STD-Information-and-Risk-Assistant-Chatbot",
    image: healthlink,
  },
  {
    title: "PhapDien Crawler, Vector Database and Semantic Search Tools",
    description:
      "An end-to-end legal document retrieval system that crawls the PhapDien website, processes Vietnamese legal texts, converts into embeddings with LangChain and ChromaDB, and enables fast semantic search.",
    link: "https://github.com/saladnga/ISODS-PhapDien-Crawler-Semantic-Search",
    image: crawler,
  },
  {
    title: "LIFT Product - HillChart",
    description:
      "An interactive Hill Chart tool for confidence-based project tracking, supporting task movement, snapshot versioning, and clear visualization of progress over time.",
    link: "https://hillchart.naucode.io/",
    image: hillchart,
  },
  {
    title: "LIFT Product - Solution Pitch",
    description:
      "A guided solution-pitching interface that helps teams structure problems and proposals clearly, accelerating alignment and decision-making.",
    link: "https://pitch.naucode.io/",
    image: pitch,
  },
  {
    title: "GDGoC - HUST Website",
    description:
      "The official website of Google Developer Group on Campus – Hanoi University of Science and Technology, serving as a central platform for showcasing community activities, events, and resources with a responsive, user-friendly, and high-performance experience.",
    link: "https://gdgoc.org/",
    image: gdsc,
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? data : data.slice(0, 2);

  return (
    <div>
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto px-4 md:px-0 text-2xl md:text-4xl font-semibold mb-6 md:mb-10 tracking-widest text-left">
        PROJECTS
      </div>

      <div>
        <div className="w-full md:w-3/4 lg:w-1/2 mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {displayedProjects.map((project, index) => (
            <div key={index} className="h-full">
              <div className="border rounded-2xl border-white/20 dark:border-white/10 overflow-hidden transition-all hover:shadow-lg h-full flex flex-col text-left">
                <a href={project.link} target="_blank">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-40 md:h-48 w-full object-cover duration-300 hover:scale-110"
                  />
                </a>

                <div className="p-4 md:p-5 flex flex-col grow">
                  <div className="font-bold text-base md:text-lg mb-2 md:mb-3">{project.title}</div>
                  <div className="text-xs md:text-sm mb-3 md:mb-4 text-foreground/80 grow">
                    {project.description}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 dark:border-white/10 rounded-lg text-xs md:text-sm hover:bg-orange-500/10 hover:border-orange-500/50 transition-all w-fit"
                  >
                    View Project
                    <ExternalLink size={14} className="md:w-4 md:h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 md:mt-10 px-4 md:px-6 py-2 border border-white/20 dark:border-white/10 rounded-lg hover:bg-orange-500/10 hover:border-orange-500/50 transition-all text-sm md:text-base"
        >
          <div className="flex gap-2 justify-center items-center cursor-pointer transition-all">
            <p>{showAll ? "Hide Projects" : "Show All Projects"}</p>
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </button>
      </div>
    </div>
  );
}