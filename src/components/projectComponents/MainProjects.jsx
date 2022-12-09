import { mainProjectData } from "../../utils/mainProjectsData";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

//TODO might need to dd in react router Link for the click to open new page with website-- not sure if react router can do that

const MainProjects = () => {
  return (
    <ul className="flex flex-col w-full gap-6 items-center ">
      {mainProjectData.map((project) => (
        <li
          key={project.title}
          className="relative group flex flex-col w-full lg:w-[470px] overflow-hidden"
        >
          <img
            src={project.img}
            alt={`${project.title}`}
            className="h-[200px] w-full relative rounded-2xl group-hover:brightness-50 transition-all"
          />
          <div className="flex flex-col p-2 gap-2 absolute top-0 left-0 w-full h-0 justify-center items-center opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <div className="flex gap-2 items-center">
              <Link
                className="text-xl font-bold text-zinc-50 hover:text-green-400  transition-all"
                to={`/project/${project.title}`}
              >
                {project.title}
              </Link>
              <a
                className="text-green-400"
                href={`${project.github}`}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="hover:text-cyan-100 text-4xl" />
              </a>
            </div>
            <p className="text-zinc-50">{project.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MainProjects;
