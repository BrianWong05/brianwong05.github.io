import { projectList } from "@/assets/projectList";
import Layout from "@/components/layout";
import ProjectCard from "@/components/projectCard";
import SectionHeader from "@/sections/header";
import * as React from "react";

const Projects: React.FunctionComponent = () => {
  return (
    <Layout>
      <div className="mt-28">
        <SectionHeader
          header="A Collection of My Best Work"
          title="Signature Creations"
          description="Check out how I create engaging digital solutions from concepts."
        />
        <div className="md:mx-8 lg:mx-16">
          <div className="mb-100 grid grid-cols-1 lg:grid-cols-2">
            {projectList.map((project) => {
              return <ProjectCard project={project} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
