import * as React from "react";
import { projectList } from "@/assets/projectList";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "@/sections/header";

interface IProjectSectionProps {}

const ProjectSection: React.FunctionComponent<IProjectSectionProps> = (props) => {
  return (
    <div className="pb-16 mt-30 lg:py-24 lg:relative">
      <div>
        <SectionHeader
          header="Projects launched online"
          title="Highlighted Work"
          description="Explore how I’ve turned ideas into captivating digital solutions."
        />
        <div className="flex flex-col mt-10 gap-20 m-8 md:mt-20 lg:w-full xl:w-330 xl:mx-auto lg:[&>div:nth-child(odd)>div]:left-30 lg:[&>div:nth-child(even)>div]:right-30 lg:[&>div:nth-child(odd)>div]:text-left lg:[&>div:nth-child(even)>div]:text-right lg:[&>div:nth-child(odd)>a>img]:right-30 lg:[&>div:nth-child(even)>a>img]:left-30 lg:[&>div:nth-child(even)>div>div>div>div>a]:right-8">
          {projectList.slice(0, 3).map((project) => {
            return (
              <div key={project.title} className="relative bg-background lg:flex lg:mb-90">
                <a href={project.link} target="_blank">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="hidden absolute rounded-xl drop-shadow-2xl cursor-pointer lg:block max-w-lg xl:max-w-xl top-22 xl:top-10 opacity-70 lg:fill-accent hover:opacity-100 transition-all duration-300"
                  />
                </a>
                <div className="lg:absolute lg:w-xl bg-background rounded-xl lg:mt-25 drop-shadow-2xl">
                  <Card className="lg:relative p-8 bg-secondary/20 md:pt-12 md:px-10 md:pb-0 lg:pt-0 lg:pb-4">
                    <CardHeader className="px-0 lg:absolute lg:-top-20 lg:block lg:w-full lg:pr-20">
                      <CardDescription>
                        <div className="gap-2 bg-gradient-to-r from-[#254a7b] to-[#5693d9] dark:bg-gradient-to-r dark:from-[#6496d8] dark:to-[#adc8e8] text-transparent bg-clip-text inline-flex font-bold uppercase tracking-widest text-sm">
                          <span>{project.company}</span>
                          <span>&bull;</span>
                          <span>{project.year}</span>
                        </div>
                      </CardDescription>
                      <CardTitle>
                        <h3 className="text-2xl md:text-4xl mt-2 md:mt-5 lg:mt-2">{project.title}</h3>
                      </CardTitle>
                    </CardHeader>
                    <hr className="border-t-2 mt-4 md:mt-5 lg:hidden" />
                    <CardContent className="px-0 w-full">
                      <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                        {project.results.map((result) => {
                          return (
                            <li className="flex w-full gap-2 text-sm md:text-base text-foreground/70 lg:block">
                              {result.title}
                            </li>
                          );
                        })}
                      </ul>
                      <a href={project.link} target="_blank">
                        <Button className="h-12 w-full rounded-xl font-semibold inline-flex gap-2 mt-8 md:w-50 lg:hidden cursor-pointer transition-all duration-200">
                          <span>View Live Site</span>
                          <ExternalLinkIcon className="size-4" />
                        </Button>
                      </a>
                      <div className="mt-8 lg:hidden">
                        <img src={project.image} alt={project.title} className="rounded-2xl" />
                      </div>
                      <div className="hidden lg:flex hover:text-ring">
                        <a href={project.link} target="_blank" className="absolute -bottom-10">
                          <ExternalLinkIcon className="size-6" />
                        </a>
                      </div>
                    </CardContent>
                    {/* <CardFooter className="px-0">
                      <p>Card Footer</p>
                    </CardFooter> */}
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
