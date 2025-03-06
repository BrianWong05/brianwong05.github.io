import * as React from "react";
import GithubIcon from "@/assets/icons/github.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";
import InstaIcon from "@/assets/icons/instagram.svg";

const footerLinks = [
  {
    title: "Github",
    icon: GithubIcon,
    href: "https://github.com/BrianWong05",
  },
  {
    title: "Instagram",
    icon: InstaIcon,
    href: "https://www.instagram.com/tiniao_brian/",
  },
  {
    title: "LinkedIn",
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/tiniaowong/",
  },
];

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div>
        <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-[#c1eaff] dark:bg-[#423652] [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
        <div className="border-t border-foreground/20 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8 mx-3 md:mx-8 lg:mx-24">
          <div className="text-foreground/50">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8 z-10">
            {footerLinks.map((item) => {
              return (
                <a href={item.href} target="_blank" key={item.title} className="inline-flex items-center gap-2">
                  <img src={item.icon} className="size-10" />
                  <span className="font-semibold">{item.title}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
