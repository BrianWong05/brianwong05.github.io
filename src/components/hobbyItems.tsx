import * as React from "react";
import { hobbyList } from "@/assets/hobbyList";

interface IHobbyItemsProps {}

const HobbyItems: React.FunctionComponent<IHobbyItemsProps> = (props) => {
  return (
    <>
      {hobbyList.map((hobby) => {
        return (
          <div
            key={hobby.title}
            className={
              "inline-flex items-center gap-2 px-6 bg-gradient-to-r dark:from-[#5693d9] dark:to-[#2663b4] from-[#5c9bee] to-[#adc8e8] rounded-full py-1.5 absolute"
            }
            style={{ left: hobby.left, top: hobby.top }}
          >
            <span className="font-medium text-foreground/80">{hobby.title}</span>
            <span className="">{hobby.emoji}</span>
          </div>
        );
      })}
    </>
  );
};

export default HobbyItems;
