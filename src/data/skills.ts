import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiDart,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiFastapi,
  SiFirebase,
  SiMysql,
  SiPostgresql,
  SiTensorflow,
  SiPytorch,
  SiLangchain,
  SiDocker,
  SiGithubactions,
  SiVercel,
  SiCplusplus,
  SiDjango,
  SiNestjs,
  SiNuxt,
  SiTailwindcss,
  SiSupabase,
  SiOpenaigym,
  SiGooglegemini,
  SiAnthropic,
  SiOllama,
  SiIcloud,
  SiMetabase,
  SiAntdesign,
  SiFlask,
  SiRender,
} from "@icons-pack/react-simple-icons";
import { type ComponentType } from "react";

export type Skill = {
  name: string;
  icon?: ComponentType<{ className?: string }>[];
};

export const skillCategories: Record<string, Skill[]> = {
  Languages: [
    { name: "Python", icon: [SiPython] },
    {
      name: "TypeScript",
      icon: [SiTypescript],
    },
    {
      name: "JavaScript",
      icon: [SiJavascript],
    },
    {
      name: "C++",
      icon: [SiCplusplus],
    },
    {
      name: "Dart",
      icon: [SiDart],
    },
  ],
  Frontend: [
    { name: "React", icon: [SiReact] },
    { name: "Next.js", icon: [SiNextdotjs] },
    { name: "Flutter", icon: [SiFlutter] },
    { name: "Nuxt", icon: [SiNuxt] },
    { name: "TailwindCSS", icon: [SiTailwindcss] },
    { name: "Ant Design", icon: [SiAntdesign] },
  ],
  Backend: [
    { name: "FastAPI", icon: [SiFastapi] },
    { name: "Firebase", icon: [SiFirebase] },
    { name: "Django", icon: [SiDjango] },
    { name: "NestJS", icon: [SiNestjs] },
    { name: "Flask", icon: [SiFlask] },
  ],
  Database: [
    { name: "Supabase", icon: [SiSupabase] },
    { name: "MySQL", icon: [SiMysql] },
    { name: "PostgreSQL", icon: [SiPostgresql] },
    { name: "ChromaDB", icon: [SiMetabase] },
  ],
  "AI/ML": [
    { name: "TensorFlow", icon: [SiTensorflow] },
    { name: "PyTorch", icon: [SiPytorch] },
    { name: "LangChain", icon: [SiLangchain] },
    {
      name: "LLMs",
      icon: [SiOpenaigym, SiGooglegemini, SiAnthropic, SiOllama],
    },
  ],
  DevOps: [
    { name: "AWS", icon: [SiIcloud] },
    { name: "Docker", icon: [SiDocker] },
    { name: "GitHub Actions", icon: [SiGithubactions] },
    { name: "Vercel", icon: [SiVercel] },
    { name: "Render", icon: [SiRender] },
  ],
};
