import { toolboxItems } from "@/assets/toolboxItemList";
import { cn } from "@/lib/utils";
import * as React from "react";

interface IToolboxItemProps {
  className?: string;
  itemWrapperClassName?: string;
}

const ToolboxItems: React.FunctionComponent<IToolboxItemProps> = (props: IToolboxItemProps) => {
  return (
    <div
      className={cn(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        props.className,
      )}
    >
      <div className={cn("flex flex-none gap-6 py-0.5 pr-6", props.itemWrapperClassName)}>
        {[...new Array(2)].fill(0).map((_, index) => {
          return (
            <React.Fragment key={index}>
              {toolboxItems.map((item) => {
                return (
                  <div
                    key={item.title}
                    className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-foreground/30 rounded-lg"
                  >
                    <img src={item.icon} alt={item.title} className="size-10" />
                    <span className="font-semibold">{item.title}</span>
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ToolboxItems;
