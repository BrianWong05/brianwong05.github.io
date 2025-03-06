import * as React from "react";

interface ISectionHeaderProps {
  header: string;
  title: string;
  description: string;
}

const SectionHeader: React.FunctionComponent<ISectionHeaderProps> = (props: ISectionHeaderProps) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest text-center bg-gradient-to-r from-[#254a7b] to-[#5693d9] dark:from-[#6496d8] dark:to-[#adc8e8] text-transparent bg-clip-text">
          {props.header}
        </p>
      </div>
      <h2 className="text-3xl text-center mt-5 md:text-5xl">{props.title}</h2>
      <p className="text-center text-foreground/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">{props.description}</p>
    </>
  );
};

export default SectionHeader;
