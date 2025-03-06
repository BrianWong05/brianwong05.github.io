import * as React from "react";
import { hobbyList } from "@/assets/hobbyList";
import { motion } from "motion/react";

interface IHobbyItemsProps {
  constraintRef: React.RefObject<null>;
}

const HobbyItems: React.FunctionComponent<IHobbyItemsProps> = (props) => {
  return (
    <>
      {hobbyList.map((hobby) => {
        return (
          <motion.div
            key={hobby.title}
            className={
              "inline-flex items-center gap-2 px-6 bg-gradient-to-r dark:from-[#5693d9] dark:to-[#7638db] from-[#7a79e2] to-[#a7d0e6] rounded-full py-1.5 absolute"
            }
            style={{ left: hobby.left, top: hobby.top }}
            drag
            dragConstraints={props.constraintRef}
          >
            <span className="font-medium text-foreground/80">{hobby.title}</span>
            <span className="">{hobby.emoji}</span>
          </motion.div>
        );
      })}
    </>
  );
};

export default HobbyItems;
