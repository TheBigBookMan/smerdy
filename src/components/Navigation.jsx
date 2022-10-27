import { HashLink as Link } from "react-router-hash-link";
import React from "react";

//"text-green-400 text-lg transition-all"

const Navigation = () => {
  return (
    <nav className="flex items-center">
      <ul className="flex gap-16 items-center">
        <Link className={"text-cyan-100"} smooth to="#">
          Home
        </Link>
        <Link className={"text-cyan-100"} smooth to="#about">
          About
        </Link>
        <Link className={"text-cyan-100"} smooth to="#projects">
          Projects
        </Link>
        <Link className={"text-cyan-100"} smooth to="#contact">
          Contact
        </Link>
        <button className="text-cyan-100 border-solid border-2 border-green-400 p-2 rounded-2xl hover:bg-green-400 active:text-green-400 active:bg-cyan-100">
          Resume
        </button>
      </ul>
    </nav>
  );
};

export default Navigation;
