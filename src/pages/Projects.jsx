import MainProjects from "../components/projectComponents/MainProjects";

const Projects = () => {
  return (
    <section id="projects" className=" bg-gray-900 w-full h-screen pt-24">
      <div className="flex flex-col gap-3 font-mono w-4/6 h-[36rem] p-4 ml-20">
        <h1 className="text-4xl text-green-400 font-bold">Projects</h1>
        <ul className="flex flex-wrap gap-8">
          <MainProjects />
        </ul>
      </div>
    </section>
  );
};

export default Projects;
