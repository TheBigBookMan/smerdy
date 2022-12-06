import React, { useState } from "react";
import NavLinks from "./NavLinks";

const Navigation = () => {
  const [active, setActive] = useState("home");
  const [navOpen, setNavOpen] = useState(false);

  const handleActive = (att) => {
    const section = att;
    if (section === "home") {
      setActive("home");
    } else if (section === "about") {
      setActive("about");
    } else if (section === "projects") {
      setActive("projects");
    } else if (section === "contact") {
      setActive("contact");
    }
  };

  return (
    <nav className="flex items-center">
      <div
        onClick={() => setNavOpen(!navOpen)}
        class="md:hidden flex flex-col gap-2 items-center group hover:cursor-pointer transition-all "
      >
        <div
          class={`w-8 h-0.5 bg-zinc-200 group-hover:bg-green-400 transition-all ${
            navOpen
              ? "bg-green-400 origin-top-left rotate-45 group-hover:bg-zinc-200"
              : ""
          }`}
        ></div>
        <div
          class={`text-center w-6 h-0.5 bg-zinc-200 group-hover:bg-green-400 transition-all ${
            navOpen ? "hidden" : ""
          }`}
        ></div>
        <div
          class={`w-8 h-0.5 bg-zinc-200 group-hover:bg-green-400 transition-all ${
            navOpen
              ? "bg-green-400 origin-bottom-right rotate-45 group-hover:bg-zinc-200"
              : ""
          }`}
        ></div>
      </div>
      <ul
        className={`absolute top-16 transition-all ${
          navOpen
            ? "md:hidden flex flex-col gap-8 items-center absolute transition-all duration-700 right-0 h-[200px] w-[150px] bg-gray-900 rounded-bl-lg"
            : ""
        }`}
      >
        {navOpen && <NavLinks active={active} handleActive={handleActive} />}
      </ul>

      <ul className="hidden md:flex md:gap-8 lg:gap-16 items-center">
        <NavLinks active={active} handleActive={handleActive} />
        <button className="text-cyan-100 border-solid border-2 border-green-400 p-2 rounded-2xl hover:bg-green-400 active:text-green-400 active:bg-cyan-100 active:transition-all hover:transition-all">
          Resume
        </button>
      </ul>
    </nav>
  );
};

export default Navigation;
