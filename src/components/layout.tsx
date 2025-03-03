import * as React from "react";
import Header from "@/components/header";

interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
