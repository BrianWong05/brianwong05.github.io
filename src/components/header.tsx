import * as React from "react";
import { ModeToggle } from "./mode-toggle";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <>
      <div className="flex justify-center items-center fixed top-3 w-full gap-3 sm:justify-center z-50">
        <nav className="flex gap-1 p-0.5 border border-primary/15 rounded-full bg-primary/10 backdrop-blur">
          <a href="#" className="nav-item">
            Home
          </a>
          <a href="#" className="nav-item">
            Projects
          </a>
          <a href="#" className="nav-item">
            About
          </a>
          <a href="#" className="nav-item bg-primary ">
            Contact
          </a>
        </nav>
        <div className="sm:fixed sm:right-3">
          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default Header;
