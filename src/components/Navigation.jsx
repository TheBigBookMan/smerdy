import { HashLink as Link } from "react-router-hash-link";
import React, { useState } from "react";

const Navigation = () => {
  const [active, setActive] = useState("home");

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
      <ul className="flex gap-16 items-center">
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
