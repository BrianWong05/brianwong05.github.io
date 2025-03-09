import { JSX } from "react";

export interface project {
  company: string;
  year: number;
  title: string;
  results: {
    title: string;
  }[];
  link: string;
  image: string;
}

export interface hobby {
  title: string;
  emoji: string | JSX.Element;
  top: string;
  left: string;
}
