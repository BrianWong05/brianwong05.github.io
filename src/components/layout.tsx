import * as React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useLocation } from "react-router-dom";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  const pathname = useLocation().pathname;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
