import Layout from "@/components/layout";
import AboutSection from "@/sections/about";
import ProjectSection from "@/sections/projects";
import * as React from "react";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <Layout>
      <div>Home</div>
      <ProjectSection />
      <AboutSection />
    </Layout>
  );
};

export default Home;
