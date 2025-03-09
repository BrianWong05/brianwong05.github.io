import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLinkIcon } from "lucide-react";
import { project } from "@/types";

interface IProjectCardProps {
  project: project;
  isSticky?: boolean;
  index?: number;
  gap?: number;
}

const ProjectCard: React.FunctionComponent<IProjectCardProps> = ({
  project,
  isSticky = false,
  index = 0,
  gap = 110,
}) => {
  return (
    <div className={`relative p-8 ${isSticky && "sticky"}`} style={{ top: `${index * gap + 50}px` }}>
      <div className="absolute -z-51 m-8 inset-0 bg-background rounded-2xl" />
      <Card className="p-8 bg-secondary/20 hover:bg-secondary/40 transition duration-200 curso-poi md:pt-12 md:px-10 lg:h-108 cursor-pointer group ">
        <a href={project.link} target="_blank">
          <CardHeader className="px-0">
            <CardDescription>
              <div className="gap-2 bg-gradient-to-r from-[#254a7b] to-[#5693d9] dark:bg-gradient-to-r dark:from-[#6496d8] dark:to-[#adc8e8] text-transparent bg-clip-text inline-flex font-bold uppercase tracking-widest text-sm">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
            </CardDescription>
            <CardTitle>
              <h3 className="text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0 w-full mt-8">
            <ul className="flex flex-col gap-4 md:mt-5">
              {project.results.map((result) => {
                return (
                  <li key={result.title} className="flex w-full gap-2 text-sm md:text-base text-foreground/70">
                    {result.title}
                  </li>
                );
              })}
            </ul>
            <Button className="h-12 w-full rounded-xl font-semibold inline-flex gap-2 mt-8 md:w-50 cursor-pointer transition-all duration-200">
              <span>View Live Site</span>
              <ExternalLinkIcon className="size-4" />
            </Button>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-50 opacity-30 w-full h-full overflow-clip p-8">
              <div className="absolute m-8 inset-0 bg-[#9cc8ef] dark:bg-[#102137] dark:group-hover:bg-[#143055] mix-blend-soft-light rounded-2xl" />
              <div className="relative w-full h-full ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-2xl grayscale-30 group-hover:grayscale-10 h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="hidden hover:text-ring">
              <ExternalLinkIcon className="size-6" />
            </div>
          </CardContent>
          {/* <CardFooter className="px-0">
                      <p>Card Footer</p>
                    </CardFooter> */}
        </a>
      </Card>
    </div>
  );
};

export default ProjectCard;
