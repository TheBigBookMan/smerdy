import MainProjects from "../components/projectComponents/MainProjects";

const Projects = () => {
  return (
    <section
      id="projects"
      className=" bg-gray-900 w-full h-full pt-20 flex flex-wrap"
    >
      <div className="flex flex-col w-4/6 h-full md:h-[38rem] ml-20">
        <h1 className="text-4xl text-green-400 font-bold">Main Projects</h1>
        <ul className="flex flex-wrap gap-8">
          <MainProjects />
        </ul>
      </div>
      <div className="border-solid border-2 border-white w-[370px] h-[36rem]">
        <h1 className="text-4xl text-green-400 font-bold">Side Projects</h1>
      </div>
    </section>
  );
};

export default Projects;
