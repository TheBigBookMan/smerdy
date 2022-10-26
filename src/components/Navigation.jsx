import { Link, useLocation } from "react-router-dom";
import React from "react";

const Navigation = () => {
  const location = useLocation();
  // const active = location.pathname.split("/")[1] === path.replace("/", "");
  return (
    <nav className="flex items-center">
      <ul className="flex gap-16 items-center">
        <Link
          className={
            location.pathname === "/"
              ? "text-green-400 text-lg"
              : "text-cyan-100"
          }
          to="/"
        >
          Home
        </Link>
        <Link
          className={
            location.pathname === "/about"
              ? "text-green-400 text-lg"
              : "text-cyan-100"
          }
          to="about"
        >
          About
        </Link>
        <Link
          className={
            location.pathname === "/projects"
              ? "text-green-400 text-lg"
              : "text-cyan-100"
          }
          to="projects"
        >
          Projects
        </Link>
        <Link
          className={
            location.pathname === "/contact"
              ? "text-green-400 text-lg"
              : "text-cyan-100"
          }
          to="contact"
        >
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
