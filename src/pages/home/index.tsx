import Layout from "@/components/layout";
import AboutSection from "@/sections/about";
import ContactSection from "@/sections/contact";
import ProjectSection from "@/sections/projects";
import * as React from "react";

const Home: React.FunctionComponent = () => {
  return (
    <Layout>
      {/* <div>Home</div> */}
      <ProjectSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
};

export default Home;
