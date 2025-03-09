import * as React from "react";
import SectionHeader from "@/sections/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ToolboxItems from "@/components/toolboxItems";
import HobbyItems from "@/components/hobbyItems";
import Languages from "@/components/languages";

const AboutSection: React.FunctionComponent = () => {
  const constraintRef = React.useRef(null);
  return (
    <div className="py-16 lg:py-24">
      <SectionHeader
        header="About Me"
        title="A Peek Into My Story"
        description="Discover my passion, my skills, and what excites me."
      />
      <div className="mt-16 m-8 md:mx-12 flex flex-col gap-8 lg:mx-24">
        <div className="flex flex-col md:grid md:grid-cols-7 xl:grid-cols-3 gap-8">
          <Card className="h-[320px] p-0 bg-secondary/20 flex flex-col md:col-span-3 xl:col-span-1">
            <CardHeader className="px-8 pt-8">
              <CardTitle>
                <h3 className="text-3xl">Spoken Languages</h3>
              </CardTitle>
              <CardDescription className="text-foreground/80 mt-4">
                <p>I am multilingual and can communicate in multiple languages.</p>
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex-1 relative">
              <Languages />
            </CardContent>
          </Card>
          <Card className="h-[320px] p-0 bg-secondary/20 md:col-span-4 xl:col-span-2">
            <CardHeader className="px-8 pt-8">
              <CardTitle>
                <h3 className="text-3xl">My Toolbox</h3>
              </CardTitle>
              <CardDescription className="text-foreground/80 mt-4">
                <p>Discover the tools and technologies behind my digital creations.</p>
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 -mt-6">
              <div>
                <ToolboxItems
                  className="mt-6 overflow-x-clip"
                  itemWrapperClassName="animate-moveLeft [animation-duration:15s]"
                />
                <ToolboxItems
                  className="mt-6 overflow-x-clip"
                  itemWrapperClassName="animate-moveRight [animation-duration:20s]"
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-7 xl:grid-cols-3 gap-8">
          <Card className="h-[320px] p-0 bg-secondary/20 flex flex-col md:col-span-4 xl:col-span-2">
            <CardHeader className="px-8 pt-8">
              <CardTitle>
                <h3 className="text-3xl">Beyond the Code</h3>
              </CardTitle>
              <CardDescription className="text-foreground/80 mt-4">
                <p>Discover my passions outside the digital world.</p>
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex-1 relative" ref={constraintRef}>
              <HobbyItems constraintRef={constraintRef} />
            </CardContent>
          </Card>
          <Card className="h-[320px] p-0 bg-secondary/20 flex flex-col md:col-span-3 xl:col-span-1">
            <CardHeader className="px-8 pt-8">
              <CardTitle>
                <h3 className="text-3xl">Spoken Languages</h3>
              </CardTitle>
              <CardDescription className="text-foreground/80 mt-4">
                <p>I am multilingual and can communicate in multiple languages.</p>
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex-1 relative">
              <Languages />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
