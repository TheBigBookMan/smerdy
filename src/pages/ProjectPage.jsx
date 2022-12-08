import { useParams } from "react-router-dom";
import { mainProjectData } from "../utils/mainProjectsData";
import { sideProjectData } from "../utils/sideProjectsData";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const ProjectPage = () => {
  const { projecttitle } = useParams();
  let selectedProject;

  selectedProject = mainProjectData.find((obj) => obj.title === projecttitle);
  if (!selectedProject) {
    selectedProject = sideProjectData.find((obj) => obj.title === projecttitle);
  }

  return (
    <div className="flex flex-col gap-2 bg-gray-900 w-full min-h-screen pt-20 p-4">
      <h1 className="text-3xl md:text-4xl text-green-400 font-bold text-center">
        {selectedProject.title}
      </h1>
      <p className="text-zinc-50">{selectedProject.description}</p>
      <div>
        <h1 className="text-lg text-green-400">Technologies Used</h1>
        <p className="text-zinc-50 text-sm">{selectedProject.technologies}</p>
      </div>
      <div>
        <h1 className="text-lg text-green-400">Screenshot </h1>
        {selectedProject.img ? (
          <img
            className="h-[200px] w-full relative rounded-2xl"
            src={selectedProject.img}
            alt={selectedProject.title}
          />
        ) : (
          <p className="text-center text-green-500 text-4xl">Coming soon...</p>
        )}
      </div>
      <div className="flex flex-row gap-10 justify-center">
        <a href={`${selectedProject.github}`} target="_blank">
          <AiFillGithub className="hover:text-cyan-100 text-green-400 text-6xl" />
        </a>
        <div className={`${selectedProject.deployed ? "flex" : "hidden"}`}>
          <a href={`${selectedProject.deployed}`} target="_blank">
            <AiOutlineLink className="hover:text-cyan-100 text-green-400 text-6xl" />
          </a>
        </div>
      </div>
      <div>
        <h1 className="text-lg text-green-400">Description</h1>
        <p className="text-zinc-50">{selectedProject.mainDescription}</p>
      </div>
    </div>
  );
};

export default ProjectPage;
