import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink } from "lucide-react";
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
    tech: [
      "React.js",
      "TypeScript",
      "TailwindCSS",
      "FastAPI",
      "ChromaDB",
      "XGBoost",
      "OCR",
    ],
    link: "https://github.com/saladnga/TroyHealthLink-STD-Information-and-Risk-Assistant-Chatbot",
    image: healthlink,
  },
  {
    title: "PhapDien Crawler, Vector Database and Semantic Search Tools",
    description:
      "A project that builds an end-to-end legal document retrieval system by crawling the PhapDien (Vietnamese legal laws) website, organizing official legal texts, converting them into vector embeddings using LangChain and ChromaDB, and enabling fast, accurate semantic search for relevant documents.",
    tech: ["Python", "LangChain", "ChromaDB"],
    link: "https://github.com/saladnga/ISODS-PhapDien-Crawler-Semantic-Search",
    image: crawler,
  },
  {
    title: "LIFT Product - HillChart",
    description:
      "An interactive Hill Chart tool for confidence-based project tracking, supporting task movement, snapshot versioning, and clear visualization of progress over time.",
    tech: ["React.js", "TypeScript", "TailwindCSS", "Nest.js"],
    link: "https://hillchart.naucode.io/",
    image: hillchart,
  },
  {
    title: "LIFT Product - Solution Pitch",
    description:
      "A guided solution-pitching interface that helps teams structure problems and proposals clearly, accelerating alignment and decision-making.",
    tech: ["React.js", "TypeScript", "TailwindCSS", "Nest.js"],
    link: "https://pitch.naucode.io/",
    image: pitch,
  },
  {
    title: "GDGoC - HUST Website",
    description:
      "The official website of Google Developer Group on Campus – Hanoi University of Science and Technology, serving as a central platform for showcasing community activities, events, and resources with a responsive, user-friendly, and high-performance experience.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "Vercel"],
    link: "https://gdgoc.org/",
    image: gdsc,
  },
];

export default function Projects() {
  return (
    <Carousel
      className="md:w-full w-[80%] max-w-4xl mx-auto mt-10 md:mt-20"
      opts={{ align: "center" }}
    >
      <CarouselContent className="-ml-4">
        {data.map((project, index) => (
          <CarouselItem key={index} className="basis-full md:basis-1/2 pl-4">
            <div className="h-full">
              <Card className="h-full ">
                <CardContent className="flex items-center justify-center p-4 h-full">
                  <div className="flex flex-col gap-3 h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="border backdrop-blur-sm border-white/20 dark:border-white/10 rounded-lg h-48 w-full object-cover shrink-0"
                    />
                    <div className="flex flex-col items-start w-full text-left gap-5 md:gap-2 grow">
                      <div className="font-bold text-xl">{project.title}</div>
                      <div className="flex gap-1 flex-wrap">
                        {project.tech.map((tech, i) => (
                          <div
                            key={i}
                            className="border-2 rounded-md px-1 border-foreground bg-foreground text-background text-xs font-semibold shadow-md"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                      <div className="text-sm md:text-md grow">
                        {project.description}
                      </div>
                      <a
                        className="flex gap-2 justify-center items-center border-2 border-foreground px-3 py-2 rounded-lg bg-foreground text-background font-bold cursor-pointer self-end hover:bg-background hover:text-foreground transition shadow-lg hover:shadow-xl text-sm"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                        <ExternalLink size={18} className="flex" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
