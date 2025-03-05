import * as React from "react";
import projects from "@/assets/projects.json";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface IProjectSectionProps {}

const ProjectSection: React.FunctionComponent<IProjectSectionProps> = (props) => {
  return (
    <div className="pb-16 mt-30 lg:py-24 lg:relative">
      <div>
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest text-center bg-gradient-to-r from-[#254a7b] to-[#5693d9] dark:bg-gradient-to-r dark:from-[#6496d8] dark:to-[#adc8e8] text-transparent bg-clip-text">
            Projects launched online
          </p>
        </div>
        <h2 className="text-3xl text-center mt-5 md:text-5xl">Highlighted Work</h2>
        <p className="text-center text-foreground/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
          Explore how I’ve turned ideas into captivating digital solutions.
        </p>

        <div className="flex flex-col mt-10 gap-20 m-8 md:mt-20 lg:w-full lg:[&>div:nth-child(odd)>div]:left-20 lg:[&>div:nth-child(even)>div]:right-20 lg:[&>div:nth-child(odd)>div]:text-left lg:[&>div:nth-child(even)>div]:text-right lg:[&>div:nth-child(odd)>img]:right-20 lg:[&>div:nth-child(even)>img]:left-20">
          {projects.slice(0, 3).map((project) => {
            return (
              <div key={project.title} className="relative bg-background lg:flex lg:mb-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="hidden absolute lg:block max-w-lg top-10 opacity-70 hover:opacity-100 transition-all duration-300"
                />
                <div className="lg:absolute lg:w-xl bg-background rounded-xl lg:mt-25">
                  <Card className="relative p-8 bg-secondary/20 md:pt-12 md:px-10 md:pb-0">
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
                        <Button className="h-12 w-full rounded-xl font-semibold inline-flex gap-2 mt-8 md:w-50">
                          <span>View Live Site</span>
                          <ExternalLinkIcon className="size-4" />
                        </Button>
                      </a>
                      <div className="mt-8 lg:hidden">
                        <img src={project.image} alt={project.title} className="" />
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
