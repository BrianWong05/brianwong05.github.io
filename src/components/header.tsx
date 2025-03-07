import * as React from "react";
import { ModeToggle } from "./mode-toggle";
import { Link, useLocation } from "react-router-dom";

const Header: React.FunctionComponent = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <>
      <div className="flex justify-center items-center fixed top-3 w-full gap-3 sm:justify-center z-50">
        <nav className="flex gap-1 p-0.5 border border-primary/15 rounded-full bg-primary/10 backdrop-blur">
          <div className={`nav-item ${pathname === "/" && "bg-primary"}`}>
            <Link to="/">Home</Link>
          </div>
          <div className={`nav-item ${pathname === "/projects" && "bg-primary"}`}>
            <Link to="/projects">Projects</Link>
          </div>
          <div className={`nav-item ${pathname === "/about" && "bg-primary"}`}>
            <Link to="/">About</Link>
          </div>
          <div className={`nav-item ${pathname === "/contact" && "bg-primary"}`}>
            <Link to="/">Contact</Link>
          </div>
        </nav>
        <div className="sm:fixed sm:right-3">
          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default Header;
