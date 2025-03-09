import * as React from "react";
import { projectList } from "@/assets/projectList";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import SectionHeader from "@/sections/header";
import { Link } from "react-router-dom";
import ProjectCard from "@/components/projectCard";
import { useTailwindBreakpoint } from "@/components/useTailwindBreakpoint";

const ProjectSection: React.FunctionComponent = () => {
  const breakpoint = useTailwindBreakpoint();
  return (
    <div className="pb-16 mt-30 lg:py-24 lg:relative">
      <div>
        <SectionHeader
          header="Projects launched online"
          title="Highlighted Work"
          description="Explore how I’ve turned ideas into captivating digital solutions."
        />
        {/* <div className="flex flex-col mt-10 gap-20 m-8 md:mt-20 md:mx-20 lg:mx-0 lg:w-full xl:max-w-330 xl:mx-auto lg:[&>div:nth-child(odd)>div]:left-30 lg:[&>div:nth-child(even)>div]:right-30 lg:[&>div:nth-child(odd)>div]:text-left lg:[&>div:nth-child(even)>div]:text-right lg:[&>div:nth-child(odd)>a>img]:right-30 lg:[&>div:nth-child(even)>a>img]:left-30 lg:[&>div:nth-child(even)>div>div>div>div>a]:right-8"> */}
        <div className="grid grid-cols-1 mt-10 gap-6 my-8 md:mt-20 md:mx-20 lg:mx-0 lg:w-full xl:max-w-330 xl:mx-auto">
          {projectList.slice(0, 3).map((project, index) => {
            let gap = 110;
            if (breakpoint === "md") gap = 150;
            else if (breakpoint === "lg") gap = 170;
            return <ProjectCard key={index} project={project} isSticky={true} index={index} gap={gap} />;
          })}
        </div>
      </div>
      <div className="px-8 md:flex md:justify-center lg:mt-25">
        <Link to="/projects">
          <Button className="h-12 w-full rounded-xl font-semibold inline-flex gap-2 mt-8 md:w-60 cursor-pointer transition-all duration-200">
            <span>Discover More</span>
            <MoveRight className="size-4" strokeWidth="3" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;
