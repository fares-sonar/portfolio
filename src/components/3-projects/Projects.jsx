import Cards from "./Cards";
import data from "./data";
import { useState } from "react";
export default function Projects() {
  const [active, setActive] = useState("all");
  const [array, setArray] = useState(data);

  const handleCategory = (category) => {
    setActive(category);
    setArray(data.filter((item) => item.category === category));
  };
  return (
    <section id="projects" className="mt-12 px-9">
      <ul className="flex flex-wrap gap-4 w-fit mx-auto">
        <li
          onClick={() => {
            setActive("all");
            setArray(data);
          }}
          className={`bg-[rgba(36,37,46,1)] py-3 md:w-32 w-full text-center rounded-md cursor-pointer transition-all opacity-50 hover:opacity-100 ${
            active === "all" ? "active" : null
          }`}
        >
          All projects
        </li>
        <li
          onClick={() => {
            handleCategory("html");
          }}
          className={`bg-[rgba(36,37,46,1)] py-3 md:w-32 w-full text-center rounded-md cursor-pointer transition-all opacity-50 hover:opacity-100 ${
            active === "html" ? "active" : null
          }`}
        >
          HTML & CSS
        </li>
        <li
          onClick={() => {
            handleCategory("javascript");
          }}
          className={`bg-[rgba(36,37,46,1)] py-3 md:w-32 w-full text-center rounded-md cursor-pointer transition-all opacity-50 hover:opacity-100 ${
            active === "javascript" ? "active" : null
          }`}
        >
          Javascript
        </li>
        <li
          onClick={() => {
            handleCategory("react");
          }}
          className={`bg-[rgba(36,37,46,1)] py-3 md:w-32 w-full text-center rounded-md cursor-pointer transition-all opacity-50 hover:opacity-100 ${
            active === "react" ? "active" : null
          }`}
        >
          React & MUL
        </li>
      </ul>

      <div className=" flex flex-wrap justify-center gap-x-4 gap-y-6 mt-12">
        <Cards arr={array} />
      </div>
    </section>
  );
}
