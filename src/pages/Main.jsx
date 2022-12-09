import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Three from "../components/Three";

const MainPage = () => {
  return (
    <div>
      <Three />
      <div className="absolute">
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default MainPage;
