import * as React from "react";

export function useWindowScroll() {
  const [scrollY, setscrollY] = React.useState<number>(0);

  React.useEffect(() => {
    const handleScrollPosition = () => {
      setscrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScrollPosition);
    return () => window.removeEventListener("scroll", handleScrollPosition);
  }, []);

  return scrollY;
}
