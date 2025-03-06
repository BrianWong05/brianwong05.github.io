import * as React from "react";
import SectionHeader from "@/sections/header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ToolboxItems from "@/components/toolboxItems";

const toolboxItems = [];

interface IAboutSectionProps {}

const AboutSection: React.FunctionComponent<IAboutSectionProps> = (props: IAboutSectionProps) => {
  return (
    <div className="py-16">
      <SectionHeader
        header="About Me"
        title="A Peek Into My Story"
        description="Discover my passion, my skills, and what excites me."
      />
      <div className="mt-16 m-8 flex flex-col gap-6">
        <Card className="h-[320px] p-0 bg-secondary/20">
          <CardHeader className="px-6 pt-6">
            <CardTitle>
              <h3>My Toolbox</h3>
            </CardTitle>
            <CardDescription className="text-foreground/80">
              <p>Discover the tools and technologies behind my digital creations.</p>
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div>
              <ToolboxItems className="mt-6" />
              <ToolboxItems className="mt-6" itemWrapperClassName="-translate-x-1/2" />
            </div>
          </CardContent>
        </Card>
        <Card className="h-[320px] p-0 bg-secondary/20">
          <CardHeader className="px-6 pt-6">
            <CardTitle>
              <h3>Beyond the Code</h3>
            </CardTitle>
            <CardDescription className="text-foreground/80">
              <p>Discover my passions outside the digital world.</p>
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div></div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutSection;
