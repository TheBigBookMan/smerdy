import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Three from "../components/Three";

import { getRepos } from "../utils/github";

const MainPage = () => {
  getRepos();
  return (
    <div className="relative">
      <Three />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
};

export default MainPage;
