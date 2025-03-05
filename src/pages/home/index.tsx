import Layout from "@/components/layout";
import ProjectSection from "@/components/project-section";
import * as React from "react";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <Layout>
      <div>Home</div>
      <ProjectSection />
    </Layout>
  );
};

export default Home;
