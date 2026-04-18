import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import troy from "../assets/education/troy.jpg";
import hust from "../assets/education/hust.png";
import vin from "../assets/education/vinschool.jpeg";

const education = [
  {
    school: "Troy University",
    degree: "B.S. in Computer Science",
    years: "2024 - 2026",
    logo: troy,
    url: "https://www.troy.edu/",
    imageClass: "h-15 w-15 rounded-full",
  },
  {
    school: "Hanoi University of Science and Technology",
    degree: "B.S. in Computer Science",
    years: "2022 - 2024",
    logo: hust,
    url: "https://hust.edu.vn/en/",
    imageClass: "h-15 w-10 ml-3 mr-2",
  },
  {
    school: "Vinschool",
    degree: "High School Diploma",
    years: "2019 - 2022",
    logo: vin,
    url: "https://vinschool.edu.vn/en/introduction/about-vinschool/",
    imageClass: "h-15 w-15 rounded-full",
  },
];

export default function Education() {
  return (
    <div>
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto px-4 md:px-0">
        <div className="text-2xl md:text-4xl font-semibold tracking-widest text-left mb-6 md:mb-10">
          EDUCATION
        </div>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full md:w-3/4 lg:w-1/2 text-left mx-auto px-4 md:px-0"
      >
        {education.map((edu, index) => (
          <a
            key={index}
            href={edu.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AccordionItem
              value={`item-${index + 1}`}
              className="hover:text-orange-600 dark:hover:text-white border-0"
            >
              <AccordionTrigger className="hover:no-underline cursor-pointer [&>svg]:hidden">
                <div className="flex items-center justify-between w-full gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={edu.logo}
                      alt={edu.school}
                      className={`${edu.imageClass} hover:scale-105 transition`}
                    />
                    <div className="flex flex-col text-xs md:text-sm">
                      <p className="font-bold">{edu.school}</p>
                      <p className="font-light">{edu.degree}</p>
                    </div>
                  </div>
                  <div className="ml-auto text-xs md:text-sm whitespace-nowrap font-light">
                    {edu.years}
                  </div>
                </div>
              </AccordionTrigger>
            </AccordionItem>
          </a>
        ))}
      </Accordion>
    </div>
  );
}
