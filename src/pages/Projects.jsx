import MainProjects from "../components/projectComponents/MainProjects";
import SideProjects from "../components/projectComponents/SideProjects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center gap-2 bg-gray-900 w-full h-full pt-20 p-4 "
    >
      <div className="z-20 relative flex flex-col xl:pr-12 lg:flex-row w-full items-center">
        <div className="flex flex-col gap-1 w-full h-full ">
          <h1 className="text-2xl md:text-4xl mx-auto text-green-400 font-bold">
            Main Projects
          </h1>
          <p className="text-zinc-50 mx-auto">
            Hover over the project and click on the project name to learn
            more...
          </p>
          <MainProjects />
        </div>
        <div className="relative flex flex-col gap-1 mt-2 w-full lg:w-2/6 h-full">
          <h1 className="text-2xl md:text-4xl mx-auto text-green-400 font-bold">
            Side Projects
          </h1>
          <p className="text-zinc-50 mx-auto">
            Click on the project name to learn more...
          </p>
          <SideProjects />
        </div>
      </div>
    </section>
  );
};

export default Projects;
