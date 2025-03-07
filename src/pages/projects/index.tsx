import { projectList } from "@/assets/projectList";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "@/sections/header";
import { ExternalLinkIcon } from "lucide-react";
import * as React from "react";

const Projects: React.FunctionComponent = () => {
  return (
    <Layout>
      <div className="mt-20">
        <SectionHeader
          header="A Collection of My Best Work"
          title="Signature Creations"
          description="Check out how I create engaging digital solutions from concepts."
        />
        <div>
          <div className="mb-100 grid grid-cols-1 lg:grid-cols-2">
            {projectList.map((project) => {
              return (
                <div className="relative">
                  <Card className="m-8 p-8 bg-secondary/20 md:pt-12 md:px-10 lg:h-100">
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
                    <CardContent className="px-0 w-full mt-0">
                      <ul className="flex flex-col gap-4 md:mt-5">
                        {project.results.map((result) => {
                          return (
                            <li
                              key={result.title}
                              className="flex w-full gap-2 text-sm md:text-base text-foreground/70"
                            >
                              {result.title}
                            </li>
                          );
                        })}
                      </ul>
                      <a href={project.link} target="_blank">
                        <Button className="h-12 w-full rounded-xl font-semibold inline-flex gap-2 mt-8 md:w-50 cursor-pointer transition-all duration-200">
                          <span>View Live Site</span>
                          <ExternalLinkIcon className="size-4" />
                        </Button>
                      </a>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-50 opacity-30 w-full h-full overflow-clip p-8">
                        <div className="relative w-full h-full after:absolute after:inset-0 after:bg-[#9cc8ef] dark:after:bg-[#102137] after:mix-blend-soft-light after:rounded-2xl">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="rounded-2xl grayscale h-full w-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="hidden hover:text-ring">
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
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
