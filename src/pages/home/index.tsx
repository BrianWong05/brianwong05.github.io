import Layout from "@/components/layout";
import * as React from "react";
import Projects from "@/pages/projects";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <Layout>
      <div>Home</div>
      <Projects />
    </Layout>
  );
};

export default Home;
