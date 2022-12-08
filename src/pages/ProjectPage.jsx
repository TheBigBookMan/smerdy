import { useParams } from "react-router-dom";
import { mainProjectData } from "../utils/mainProjectsData";
import { sideProjectData } from "../utils/sideProjectsData";

const ProjectPage = () => {
  const { projecttitle } = useParams();
  let selectedProject;

  selectedProject = mainProjectData.find((obj) => obj.title === projecttitle);
  if (!selectedProject) {
    selectedProject = sideProjectData.find((obj) => obj.title === projecttitle);
  }

  console.log(selectedProject);

  //TODO import the projects arrays and then sort throgh to find the one matching projecttile from params and then use that in the display
  return (
    <div className="bg-gray-900 w-full h-screen pt-20">
      <h1 className="text-2xl md:text-4xl text-green-400 font-bold">
        {selectedProject.title}
      </h1>
    </div>
  );
};

export default ProjectPage;
