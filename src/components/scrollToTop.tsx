import { useWindowScroll } from "@/functions/useWindowScroll";
import * as React from "react";
import { Button } from "./ui/button";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [hiddenButton, setHiddenButton] = React.useState(true);
  const scrollY = useWindowScroll();

  React.useEffect(() => {
    if (scrollY > 100) setHiddenButton(false);
    else setHiddenButton(true);
  }, [scrollY]);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      className={`cursor-pointer ${hiddenButton && "hidden"} z-100 fixed bottom-8 right-3 rounded-full size-10 drop-shadow-sm`}
      onClick={handleScrollUp}
    >
      <ChevronUp size={4} />
    </Button>
  );
};

export default ScrollToTop;
