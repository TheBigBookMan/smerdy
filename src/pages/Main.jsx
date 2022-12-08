import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

const MainPage = ({ setProjectInfo }) => {
  return (
    <div>
      <Home />
      <AboutMe />
      <Projects setProjectInfo={setProjectInfo} />
      <Contact />
    </div>
  );
};

export default MainPage;
