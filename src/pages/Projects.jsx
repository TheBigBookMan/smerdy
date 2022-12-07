import MainProjects from "../components/projectComponents/MainProjects";
import SideProjects from "../components/projectComponents/SideProjects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col gap-2 bg-gray-900 w-full h-full pt-20 p-4 "
    >
      <div className="flex flex-col gap-1 w-full md:w-4/6 h-full md:h-[38rem] md:ml-20">
        <h1 className="text-2xl md:text-4xl text-green-400 font-bold">
          Main Projects
        </h1>
        <p className="text-zinc-50">
          Hover over the project and click on the project name to learn more...
        </p>
        <MainProjects />
      </div>
      <div className="flex flex-col gap-1 mt-2 w-full md:w-[370px] h-full">
        <h1 className="text-2xl md:text-4xl text-green-400 font-bold">
          Side Projects
        </h1>
        <p className="text-zinc-50">
          Click on the project name to learn more...
        </p>
        <SideProjects />
      </div>
    </section>
  );
};

export default Projects;
