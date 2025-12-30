import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink } from "lucide-react";
import doctorai from "../assets/research/doctor-ai-2025.png";
import ComingSoonThumbnail from "./ui/comingsoon";

const data = [
  {
    title:
      "Efficient Multi-Agent Collaboration for Medical Question Answering with Quantized LLMs under Resource Constraints",
    description: "ICITE 2025, Ho Chi Minh City, Vietnam",
    link: "/public/DoctorAI_ICITE_2025.pdf",
    image: doctorai,
  },
];

export default function Research() {
  return (
    <Carousel
      className="md:w-full w-[80%] max-w-4xl mx-auto mt-10 md:mt-20"
      opts={{ align: "center" }}
    >
      <CarouselContent
        className={`${data.length === 1 ? "justify-center" : "-ml-4"}`}
      >
        {data.map((project, index) => (
          <CarouselItem key={index} className="basis-full md:basis-1/2 pl-4">
            <div className="h-full">
              <Card className="h-full">
                <CardContent className="flex items-center justify-center p-4 h-full">
                  <div className="flex flex-col gap-3 h-full">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="border rounded-lg h-60 md:h-80 w-full object-center shrink-0"
                      />
                    ) : (
                      <ComingSoonThumbnail className="border h-80 w-full shrink-0" />
                    )}

                    <div className="flex flex-col items-start w-full text-left gap-3 grow">
                      <div className="font-bold text-lg">{project.title}</div>
                      <div className="text-sm md:text-md grow">
                        {project.description}
                      </div>
                      <a
                        className="flex gap-3 justify-center items-center border border-foreground px-3 py-2 rounded-lg bg-foreground text-background font-bold cursor-pointer self-end hover:bg-background hover:text-foreground transition shadow-lg hover:shadow-xl text-sm"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Research Paper
                        <ExternalLink size={18} className="flex" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
