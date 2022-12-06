import { HashLink as Link } from "react-router-hash-link";
import React, { useState } from "react";

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

  //!!!
  //!! PUT THE LINKS IN A SEPERATE COMPONENT AND THEN CAN DYANIMCALLY PUT THEM INTO THE HAMBURGER AND REGULAR NAV
  //!!

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
        className={`absolute top-0 transition-all ${
          navOpen
            ? "absolute transition-all duration-500 top-16 h-[400px] w-[200px] bg-gray-700 rounded-bl-lg"
            : "duration-500 top-0"
        }`}
      ></ul>

      <ul className="hidden md:flex md:gap-8 lg:gap-16 items-center">
        <Link
          onClick={() => handleActive("home")}
          className={
            active === "home"
              ? "text-green-400 text-lg transition-all"
              : "text-cyan-100 transition-all"
          }
          smooth
          to="#"
        >
          Home
        </Link>
        <Link
          onClick={() => handleActive("about")}
          className={
            active === "about"
              ? "text-green-400 text-lg transition-all"
              : "text-cyan-100 transition-all"
          }
          smooth
          to="#about"
        >
          About
        </Link>
        <Link
          onClick={() => handleActive("projects")}
          className={
            active === "projects"
              ? "text-green-400 text-lg transition-all"
              : "text-cyan-100 transition-all"
          }
          smooth
          to="#projects"
        >
          Projects
        </Link>
        <Link
          onClick={() => handleActive("contact")}
          className={
            active === "contact"
              ? "text-green-400 text-lg transition-all"
              : "text-cyan-100 transition-all"
          }
          smooth
          to="#contact"
        >
          Contact
        </Link>
        <button className="text-cyan-100 border-solid border-2 border-green-400 p-2 rounded-2xl hover:bg-green-400 active:text-green-400 active:bg-cyan-100 active:transition-all hover:transition-all">
          Resume
        </button>
      </ul>
    </nav>
  );
};

export default Navigation;
