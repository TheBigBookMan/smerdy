import { sideProjectData } from "../../utils/sideProjectsData";
import { AiFillGithub } from "react-icons/ai";

const SideProjects = () => {
  return (
    <ul className="flex flex-col gap-2 h-full">
      {sideProjectData.map((project) => (
        <li
          key={project.title}
          className="border-green-400 border-2 border-solid flex items-center justify-between p-1 pl-2 pr-2 rounded-xl h-[40px] hover:bg-green-400 hover:cursor-pointer transition-all"
        >
          <h1 className="text-zinc-50">{project.title}</h1>
          <a
            className="text-green-400"
            href={`${project.github}`}
            target="_blank"
          >
            <AiFillGithub className="text-zinc-50 text-2xl hover:text-gray-900" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SideProjects;
