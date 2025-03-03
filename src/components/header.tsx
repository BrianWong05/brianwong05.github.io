import * as React from "react";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className="flex justify-center items-center relative top-3">
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
        <a href="#" className="nav-item">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Header;
