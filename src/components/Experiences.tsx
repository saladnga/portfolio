import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import naucode from "../assets/experiences/naucode.webp";
import isods from "../assets/experiences/isods_small_logo.png";
import gdsc from "../assets/experiences/icon.ico";
import codepath from "../assets/experiences/CodePath-Logo-Circle.webp";

export default function Experiences() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full md:w-3/4 lg:w-1/2 text-left mx-auto mt-10 md:mt-20 px-4 md:px-0"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex justify-center items-center gap-3 cursor-pointer">
            <img src={isods} alt="ISODS" className="h-20 w-20" />
            <div className="flex flex-col md:text-lg text-md">
              <div className="font-bold">
                The International Society of Data Scientists (ISODS)
              </div>
              <div>Software Engineering Intern</div>
              <div>Mar. 2025 - Present</div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-md md:text-lg cursor-pointer">
          <p>
            • Optimized an AI-powered chatbot using JavaScript/TypeScript
            frontend and FastAPI and LangChain backend, improving UI
            responsiveness by <span className="font-bold">20%</span>.
          </p>
          <p>
            • Implemented{" "}
            <span className="font-bold">advanced chatbot features</span>{" "}
            including chat interruption handling, multi-format file ingestion,
            and multi-LLM support (OpenAI, Gemini, Anthropic) with user-provided
            API keys.
          </p>
          <p>
            • Built automated Vietnamese legal document extraction and semantic
            search using Selenium, BeautifulSoup, ChromaDB, and BKAI Vietnamese
            Bi Encoder, <span className="font-bold">saving 100+ hours</span> of
            manual work.
          </p>
          <p>
            • Contributed to research on the paper{" "}
            <span className="font-bold">
              “Efficient Multi-Agent Collaboration for Medical Question
              Answering with Quantized LLMs under Resource Constraints”
            </span>
            , cited in ICITE 2025.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <div className="flex justify-center items-center gap-3 cursor-pointer">
            <img src={naucode} alt="NAUCode" className="h-20 w-20" />
            <div className="flex flex-col  md:text-lg text-md">
              <div className="font-bold">NAUCode</div>
              <div>Software Engineering Intern</div>
              <div>May. 2025 - Oct. 2025</div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4  md:text-lg text-md">
          <p>
            • Developed reusable, component-driven UIs for two
            productivity-focused products using React, TypeScript, TailwindCSS,
            and Ant Design, reducing UI development time by{" "}
            <span className="font-bold">30%</span>.
          </p>
          <p>
            •Built{" "}
            <span className="font-bold">interactive frontend experiences</span>{" "}
            for HillChart and Solution Pitch, including confidence-based task
            visualization, snapshot history, and guided problem-to-solution
            workflows.
          </p>
          <p>
            • Contributed to backend development using NestJS and Prisma,
            integrating APIs and Swagger documentation, supporting
            authentication flows, ensuring{" "}
            <span className="font-bold">
              smooth client-server data exchange
            </span>
            .
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <div className="flex justify-center items-center gap-3  md:text-lg text-md cursor-pointer">
            <img src={codepath} alt="CodePath" className="h-20 w-20" />
            <div className="flex flex-col">
              <div className="font-bold">CodePath</div>
              <div>Student Fellow (WEB102 and TIP102)</div>
              <div>May. 2025 - Aug. 2025</div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4  md:text-lg text-md">
          <p>
            • Built full-stack web applications using React, TypeScript, Flask,
            Tailwind CSS, and Supabase.
          </p>
          <p>
            •{" "}
            <span className="font-bold">
              Implemented data structures and algorithms
            </span>{" "}
            in Python through weekly coding challenges and mock interviews.
          </p>
          <p>
            •{" "}
            <span className="font-bold">
              Strengthened frontend and problem-solving skills
            </span>{" "}
            through weekly labs, pair programming, and mentorship.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          <div className="flex justify-center items-center gap-3  md:text-lg text-md cursor-pointer">
            <img
              src={gdsc}
              alt="Google Developer Group - Hanoi University of Science and
                Technology"
              className="h-20 w-20"
            />
            <div className="flex flex-col">
              <div className="font-bold">
                Google Developer Group - Hanoi University of Science and
                Technology{" "}
              </div>
              <div>Software Engineer</div>
              <div>Sep. 2023 - Aug. 2024</div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4  md:text-lg text-md">
          <p>
            • Co-developed the official homepage for a{" "}
            <span className="font-bold">100+ member academic community</span>{" "}
            using Next.js, TypeScript and TailwindCSS, resulting in a{" "}
            <span className="font-bold">20%</span> increase in online engagement
            and visibility.
          </p>
          <p>
            • Collaborated with a cross-functional team to design wireframes and
            interactive prototypes in Figma, laying the foundation for a
            scalable platform to expand educational access.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
