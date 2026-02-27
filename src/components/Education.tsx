import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import troy from "../assets/education/troy.jpg";
import hust from "../assets/education/hust.png";
import vin from "../assets/education/vinschool.jpeg";

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
        <a href="https://www.troy.edu/" target="_blank">
          <AccordionItem
            value="item-1"
            className="hover:text-orange-600 dark:hover:text-white border-0"
          >
            <AccordionTrigger className="hover:no-underline cursor-pointer [&>svg]:hidden">
              <div className="flex items-center justify-between w-full gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={troy}
                    alt="Troy University"
                    className="h-15 w-15 rounded-full"
                  />
                  <div className="flex flex-col text-xs md:text-sm">
                    <p className="font-bold">Troy University</p>
                    <p className="font-light">B.S. in Computer Science</p>
                    <p className="font-light text-xs">2024 - 2026</p>
                  </div>
                </div>
              </div>
            </AccordionTrigger>
          </AccordionItem>
        </a>

        <a href="https://hust.edu.vn/en/" target="_blank">
          <AccordionItem
            value="item-2"
            className="hover:text-orange-600 dark:hover:text-white border-0"
          >
            <AccordionTrigger className="hover:no-underline cursor-pointer [&>svg]:hidden">
              <div className="flex items-center justify-between w-full gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={hust}
                    alt="Hanoi University of Science and Technology"
                    className="h-15 w-10 ml-3 mr-2"
                  />
                  <div className="flex flex-col text-xs md:text-sm">
                    <p className="font-bold">
                      Hanoi University of Science and Technology
                    </p>
                    <p className="font-light">B.S. in Computer Science</p>
                    <p className="font-light text-xs">2022 - 2024</p>
                  </div>
                </div>
              </div>
            </AccordionTrigger>
          </AccordionItem>
        </a>

        <a
          href="https://vinschool.edu.vn/en/introduction/about-vinschool/"
          target="_blank"
        >
          <AccordionItem
            value="item-3"
            className="hover:text-orange-600 dark:hover:text-white border-0"
          >
            <AccordionTrigger className="hover:no-underline cursor-pointer [&>svg]:hidden">
              <div className="flex items-center justify-between w-full gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={vin}
                    alt="Vinschool"
                    className="h-15 w-15 rounded-full"
                  />
                  <div className="flex flex-col text-xs md:text-sm">
                    <p className="font-bold">Vinschool</p>
                    <p className="font-light">High School Diploma</p>
                    <p className="font-light text-xs">2019 - 2022</p>
                  </div>
                </div>
              </div>
            </AccordionTrigger>
          </AccordionItem>
        </a>
      </Accordion>
    </div>
  );
}
