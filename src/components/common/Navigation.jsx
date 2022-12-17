import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { useSpring, animated, config, useTransition } from "@react-spring/web";

//TODO add in resume file for the click resume
// https://reactgo.com/react-download-file-on-button-click/
// TODO will complete this after completed resume, for now just link to google docs

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

  const HamburgerMenu = () => {
    const [props, api] = useSpring(
      () => ({
        from: { x: 50 },
        to: { x: -70 },
        config: {
          mass: 2,
          friction: 6,
          tension: 60,
        },
      }),
      []
    );

    return (
      <animated.ul
        style={props}
        className={`absolute top-20 transition-all md:hidden flex flex-col gap-8 items-center absolute transition-all h-[220px] w-[150px] bg-gray-900 rounded-bl-lg`}
      >
        <NavLinks active={active} handleActive={handleActive} />
      </animated.ul>
    );
  };

  return (
    <nav className="flex items-center">
      <div
        onClick={() => setNavOpen(!navOpen)}
        className="md:hidden flex flex-col gap-2 items-center group hover:cursor-pointer "
      >
        <div
          className={`w-8 h-0.5 bg-zinc-200 group-hover:bg-green-400  duration-700 ${
            navOpen
              ? "bg-green-400 origin-top-left rotate-45 group-hover:bg-zinc-200"
              : ""
          }`}
        ></div>
        <div
          className={`text-center w-6 h-0.5 bg-zinc-200 group-hover:bg-green-400 duration-700 ${
            navOpen ? "opacity-0 rotate-45" : ""
          }`}
        ></div>
        <div
          className={`w-8 h-0.5 bg-zinc-200 group-hover:bg-green-400  duration-700 ${
            navOpen
              ? "bg-green-400 origin-bottom-right rotate-45 group-hover:bg-zinc-200"
              : ""
          }`}
        ></div>
      </div>
      {navOpen && <HamburgerMenu />}

      <ul className="hidden md:flex md:gap-8 lg:gap-16 items-center">
        <NavLinks active={active} handleActive={handleActive} />
        <a
          href="https://docs.google.com/document/d/1_vrk3fhXfnX-9CUk1hRl5cFi8O4moaVieW22z6Y1gdU/edit"
          target="_blank"
          rel="noreferrer"
        >
          <button className="text-cyan-100 border-solid border-2 border-green-400 p-2 rounded-2xl hover:bg-green-400 active:text-green-400 active:bg-cyan-100 active:transition-all hover:transition-all">
            Resume
          </button>
        </a>
      </ul>
    </nav>
  );
};

export default Navigation;
