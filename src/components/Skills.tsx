const skills = [
  "Python",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "TensorFlow",
  "PyTorch",
  "Pandas",
  "Numpy",
  "FastAPI",
  "MySQL",
  "Supabase",
  "PostgreSQL",
  "LangChain",
  "LLMs",
  "C/C++",
  "Flutter",
  "Dart",
  "AWS",
  "Airflow",
  "ChromaDB",
  "Docker",
  "GitHub Actions",
  "Vercel",
  "Render",
  "Figma",
  "HTML/CSS",
];

import { Badge } from "@/components/ui/badge";
export default function Skills() {
  return (
    <div>
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto px-4 md:px-0">
        <div className="text-2xl md:text-4xl font-semibold tracking-widest text-left mb-6 md:mb-10">
          SKILLS
        </div>
        <div className="flex w-full flex-wrap justify-start gap-2">
          {skills.map((skill) => (
            <Badge
              className="text-xs md:text-sm cursor-pointer transition-all duration-100 border-b-4 border-r-4 border-orange-600 dark:border-orange-700 active:border-b-2 active:border-r-2 hover:scale-105"
              key={skill}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
