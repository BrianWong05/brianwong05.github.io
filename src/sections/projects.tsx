import * as React from "react";
import { projectList } from "@/assets/projectList";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import SectionHeader from "@/sections/header";
import { Link } from "react-router-dom";
import ProjectCard from "@/components/projectCard";
import { useTailwindBreakpoint } from "@/functions/useTailwindBreakpoint";

const ProjectSection: React.FunctionComponent = () => {
  const breakpoint = useTailwindBreakpoint();
  return (
    <div className="pb-16 mt-30 lg:py-20 lg:relative">
      <div>
        <SectionHeader
          header="Projects launched online"
          title="Highlighted Work"
          description="Explore how I’ve turned ideas into captivating digital solutions."
        />
        <div className="grid grid-cols-1 mt-10 gap-6 my-8 md:mt-20 md:mx-20 lg:mx-0 lg:px-15 lg:w-full xl:max-w-330 xl:mx-auto">
          {projectList.slice(0, 3).map((project, index) => {
            let gap = 0;
            if (breakpoint === "sm") gap = 110;
            else if (breakpoint === "md") gap = 145;
            else gap = 170;
            return <ProjectCard key={index} project={project} isSticky={true} index={index} gap={gap} />;
          })}
        </div>
      </div>
      <div className="px-8 md:flex md:justify-center lg:mt-16">
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
