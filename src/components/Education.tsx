import PageContainer from "./PageContainer";
import SectionTitle from "./SectionTitle";
import troy from "../assets/education/troy.jpg";
import hust from "../assets/education/hust.png";
import vin from "../assets/education/vinschool.jpeg";

type EducationEntry = {
  school: string;
  degree: string;
  years: string;
  logo: string;
  url: string;
  imageClass: string;
};

const education: EducationEntry[] = [
  {
    school: "Troy University",
    degree: "B.S. in Computer Science",
    years: "2024 - 2026",
    logo: troy,
    url: "https://www.troy.edu/",
    imageClass:
      "h-12 w-12 md:h-14 md:w-14 min-w-12 min-h-12 object-cover rounded-full shrink-0",
  },
  {
    school: "Hanoi University of Science and Technology",
    degree: "B.S. in Computer Science",
    years: "2022 - 2024",
    logo: hust,
    url: "https://hust.edu.vn/en/",
    imageClass:
      "h-12 w-8 md:h-14 md:w-10 md:ml-3 md:mr-2 ml-2 object-cover shrink-0",
  },
  {
    school: "Vinschool",
    degree: "High School Diploma",
    years: "2019 - 2022",
    logo: vin,
    url: "https://vinschool.edu.vn/en/introduction/about-vinschool/",
    imageClass:
      "h-12 w-12 md:h-14 md:w-14 min-w-12 min-h-12 object-cover rounded-full shrink-0",
  },
];

export default function Education() {
  return (
    <div>
      <PageContainer>
        <SectionTitle>EDUCATION</SectionTitle>
        <div className="flex flex-col divide-y divide-foreground/10">
          {education.map((edu) => (
            <a
              key={edu.school}
              href={edu.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 py-4 hover-bg-accent rounded-lg px-2 transition-all"
            >
              <div className="flex items-center gap-3">
                <img
                  src={edu.logo}
                  alt={edu.school}
                  loading="lazy"
                  className={`${edu.imageClass} hover:scale-105 transition`}
                />
                <div className="flex flex-col text-xs md:text-sm text-left">
                  <p className="font-bold">{edu.school}</p>
                  <p className="font-light">{edu.degree}</p>
                </div>
              </div>
              <div className="ml-auto text-xs md:text-sm whitespace-nowrap font-light">
                {edu.years}
              </div>
            </a>
          ))}
        </div>
      </PageContainer>
    </div>
  );
}
