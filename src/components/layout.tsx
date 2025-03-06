import * as React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
