import { HashLink as Link } from "react-router-hash-link";
import React from "react";

const NavLinks = ({ active, handleActive }) => {
  return (
    <>
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
    </>
  );
};

export default NavLinks;
