import MainProjects from "../components/projectComponents/MainProjects";
import SideProjects from "../components/projectComponents/SideProjects";

const Projects = () => {
  return (
    <section
      id="projects"
      className=" bg-gray-900 w-full h-full pt-20 p-4 flex flex-col"
    >
      <div className="flex flex-col w-full md:w-4/6 h-full md:h-[38rem] md:ml-20">
        <h1 className="text-2xl md:text-4xl text-green-400 font-bold">
          Main Projects
        </h1>
        <MainProjects />
      </div>
      <div className=" mt-2 w-full md:w-[370px] h-[300px]">
        <h1 className="text-2xl md:text-4xl text-green-400 font-bold mb-2">
          Side Projects
        </h1>
        <SideProjects />
      </div>
    </section>
  );
};

export default Projects;
