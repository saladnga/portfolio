export type Project = {
  title: string;
  description: string;
  link: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    title: "STD Risk Assistant Chatbot ",
    description:
      "A full-stack AI-powered health assistant designed to provide evidence-based sexual health information to students.",
    link: "https://github.com/saladnga/TroyHealthLink-STD-Information-and-Risk-Assistant-Chatbot",
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
    technologies: ["Python", "LangChain", "ChromaDB"],
  },

  {
    title: "LIFT Product - HillChart",
    description:
      "An interactive Hill Chart tool for confidence-based project tracking, supporting task movement, snapshot versioning, and clear visualization of progress over time.",
    link: "https://hillchart.naucode.io/",
    technologies: ["React", "NestJS", "Ant Design"],
  },

  {
    title: "LIFT Product - Solution Pitch",
    description:
      "A guided solution-pitching interface that helps teams structure problems and proposals clearly, accelerating alignment and decision-making.",
    link: "https://pitch.naucode.io/",
    technologies: ["React", "NestJS", "Ant Design"],
  },

  {
    title: "GDGoC - HUST Website",
    description:
      "The official website of Google Developer Group on Campus – Hanoi University of Science and Technology.",
    link: "https://gdgoc.org/",
    technologies: ["Next.js", "TailwindCSS"],
  },
];
