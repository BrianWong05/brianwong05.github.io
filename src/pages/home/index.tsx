import Layout from "@/components/layout";
import { ModeToggle } from "@/components/mode-toggle";
import * as React from "react";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <Layout>
      <div>Home</div>
      <ModeToggle></ModeToggle>
    </Layout>
  );
};

export default Home;
