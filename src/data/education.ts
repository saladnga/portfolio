import troy from "../assets/education/troy.jpg";
import hust from "../assets/education/hust.png";
import vin from "../assets/education/vinschool.jpeg";

export type EducationEntry = {
  school: string;
  degree: string;
  years: string;
  honors?: string;
  affiliations?: string[];
  logo: string;
  url: string;
};

export const education: EducationEntry[] = [
  {
    school: "Troy University",
    degree: "B.S. in Computer Science",
    years: "2024 - 2026",
    honors: "Magna Cum Laude",
    affiliations: ["CodePath", "Troy Hack (2024, 2025)"],
    logo: troy,
    url: "https://www.troy.edu/",
  },

  {
    school: "Hanoi University of Science and Technology",
    degree: "B.S. in Computer Science",
    years: "2022 - 2024",
    affiliations: ["Google Developer Group - HUST"],
    logo: hust,
    url: "https://hust.edu.vn/en/",
  },

  {
    school: "Vinschool",
    degree: "High School Diploma",
    years: "2019 - 2022",
    logo: vin,
    url: "https://vinschool.edu.vn/en/introduction/about-vinschool/",
  },
];
