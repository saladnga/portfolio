import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageContainer from "./PageContainer";
import SectionTitle from "./SectionTitle";
import isods from "../assets/experiences/isods_small_logo.png";
import nau from "../assets/experiences/naucode.webp";
import gdsc from "../assets/experiences/icon.ico";
import cbi from "../assets/experiences/cbi-logo.jpg";

type Experience = {
  company_thumbnail: string;
  position: string;
  company_name: string;
  time: string;
  participation: string;
  url: string;
};

const experiences: Experience[] = [
  {
    company_thumbnail: cbi,
    position: "Research Software Engineer",
    company_name: "Conrad Blucher Institute for Surveying and Science",
    time: "Jun. 2026 - Present",
    participation: "Data Quality Team.",
    url: "https://www.conradblucherinstitute.org/",
  },
  {
    company_thumbnail: isods,
    position: "Software Engineer Intern",
    company_name: "The George Washington Institute at ISODS",
    time: "Mar. 2025 - May. 2026",
    participation:
      "Built and optimized an AI-powered chatbot (JS/TS, FastAPI, LangChain), developed automated Vietnamese legal document extraction and semantic search, and contributed to ICITE 2025 research on multi-agent medical QA with quantized LLMs.",
    url: "https://ai.isods.org/",
  },
  {
    company_thumbnail: nau,
    position: "Software Engineer Intern",
    company_name: "NAUCode",
    time: "May. 2025 - Oct. 2025",
    participation:
      "Developed reusable component-driven UIs and interactive frontend experiences for HillChart and Solution Pitch using React, TypeScript, TailwindCSS, and Ant Design, while contributing to backend development with NestJS and Prisma to support APIs, authentication, and seamless client-server integration.",
    url: "https://naucode.io/",
  },
  {
    company_thumbnail: gdsc,
    position: "Software Engineer",
    company_name: "Google Developer Group",
    time: "Sep. 2023 - Aug. 2024",
    participation:
      "Co-developed the official homepage for a 100+ member academic community using Next.js, TypeScript, and TailwindCSS to enhance online presence and engagement.",
    url: "https://gdgoc.org/",
  },
];

export default function Experiences() {
  return (
    <div>
      <PageContainer>
        <SectionTitle>WORK EXPERIENCE</SectionTitle>
      </PageContainer>

      <Accordion
        type="single"
        collapsible
        className="w-full md:w-3/4 lg:w-1/2 text-left mx-auto px-4 md:px-0"
      >
        {experiences.map((experience) => (
          <AccordionItem
            value={experience.company_name}
            key={experience.company_name}
            className="border-0"
          >
            <AccordionTrigger className="hover:no-underline cursor-pointer">
              <div className="flex items-center justify-between w-full gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={experience.company_thumbnail}
                    alt={experience.company_name}
                    className="h-12 w-12 md:h-14 md:w-14 min-w-12 min-h-12 object-cover rounded-full shrink-0 hover:scale-105 transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(
                        experience.url,
                        "_blank",
                        "noopener,noreferrer",
                      );
                    }}
                  />
                  <div className="flex flex-col text-xs md:text-sm">
                    <p className="font-bold">{experience.position}</p>
                    <p className="font-light">{experience.company_name}</p>
                  </div>
                </div>
                <div className="ml-auto text-xs md:text-sm whitespace-nowrap font-light">
                  {experience.time}
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-sm pl-16 pr-2">
              <p>{experience.participation}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
