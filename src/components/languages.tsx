import * as React from "react";

interface ILanguagesProps {}

const languages = [
  {
    language: "English",
    example: "Hello, I am Brian Wong.",
  },
  {
    language: "廣東話",
    example: "你好，我係黃天佑。",
  },
  {
    language: "普通话",
    example: "你好，我叫黄天佑。",
  },
  {
    language: "日本語",
    example: "こんにちは、私はブライアンです。",
  },
];

const Languages: React.FunctionComponent<ILanguagesProps> = (props) => {
  const [display, setDisplay] = React.useState("Hello, I am Brian Wong.");
  return (
    <div>
      <nav className="flex justify-center items-center gap-4 lg:gap-6 w-full flex-wrap">
        {languages.map((item) => {
          return (
            <a
              key={item.language}
              onClick={() => {
                setDisplay(item.example);
              }}
              className="flex-none cursor-pointer font-semibold"
            >
              {item.language}
            </a>
          );
        })}
      </nav>
      <div className="p-6 flex">
        <span className="">{display}</span>
      </div>
    </div>
  );
};

export default Languages;
