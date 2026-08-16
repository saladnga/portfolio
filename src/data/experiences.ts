import isods from "../assets/experiences/isods_small_logo.png";
import nau from "../assets/experiences/naucode.webp";
import gdsc from "../assets/experiences/icon.ico";
import cbi from "../assets/experiences/cbi-logo.jpg";

export type Experience = {
  company_thumbnail: string;
  position: string;
  company_name: string;
  url: string;
  time: string;
  bullets?: string[];
  tags?: string[];
  metric?: { value: string; label: string };
};

export const experiences: Experience[] = [
  {
    company_thumbnail: cbi,
    position: "Research Software Engineer",
    company_name: "Conrad Blucher Institute for Surveying and Science",
    url: "https://www.conradblucherinstitute.org/",
    time: "Jun. 2026 - Present",
    bullets: [
      "Engineered an automated Python time-series pipeline (Pandas, NumPy, Scikit-learn) to synchronize dual-sensor data across 19 Texas tide stations.",
      "Validated high-precision data reliability (RMSE < 0.020m) on approximately 1M rows of historical data across 4 primary stations and 3 sample periods (2011–12, 2013–14, 2023–24), using a QA/QC framework built on 1,000-trial simulations.",
      "Resolved historical sensor data gaps (6 mins up to 150 hrs) by developing a dynamic imputation algorithm utilizing 30-day calibration windows and 4th-order polynomial regression.",
      "Optimized repository maintainability by developing GitHub Actions workflows to enforce code standardization and automatically strip Jupyter Notebook outputs.",
    ],
    tags: [
      "PYTHON",
      "PANDAS",
      "NUMPY",
      "PLOTLY",
      "SCIKIT-LEARN",
      "JUPYTER NOTEBOOK",
    ],
  },

  {
    company_thumbnail: isods,
    position: "Software Engineer Intern",
    company_name: "The George Washington Institute at ISODS",
    url: "https://portal.isods.org/",
    time: "Mar. 2025 - May. 2026",
    bullets: [
      "Engineered an AI-powered chatbot, implementing multi-format document ingestion and a chat interruption feature allowing users to redirect the model mid-response instead of waiting for generation to finish.",
      "Reduced API latency and operational costs by architecting a dynamic multi-LLM routing engine (OpenAI, Gemini, Anthropic) that matches each task to the most cost-and-latency-appropriate model for 20+ active researchers.",
      "Engineered a vector database pipeline to process 6,000+ Vietnamese legal documents for applied research, supporting retrieval-augmented research workflows.",
    ],
    tags: ["LANGCHAIN", "FASTAPI", "NUXT"],
  },

  {
    company_thumbnail: nau,
    position: "Software Engineer Intern",
    url: "https://naucode.io/",
    company_name: "NAUCode",
    time: "May. 2025 - Oct. 2025",
    bullets: [
      "Built reusable, component-driven UIs using React and TypeScript for internal productivity platforms; the initial version shipped to production and was used by company leadership for external presentations.",
      "Designed and implemented RESTful APIs from scratch using NestJS and Prisma with OAuth authentication, defining the core data schema and auth flow that the frontend was built against — reducing integration friction as the rest of the application was developed in parallel.",
    ],
    tags: ["REACT", "NESTJS", "PRISMA"],
  },

  {
    company_thumbnail: gdsc,
    position: "Software Engineer",
    company_name: "Google Developer Group",
    url: "https://gdgoc.org/",
    time: "Sep. 2023 - Aug. 2024",
    tags: ["NEXT.JS", "TAILWIND"],
    bullets: [
      "Developed and deployed the official community homepage using Next.js and TypeScript for GDG HUST, optimizing site architecture and SEO to improve search visibility and establish a digital presence for a 100+ member academic organization.",
    ],
  },
];
