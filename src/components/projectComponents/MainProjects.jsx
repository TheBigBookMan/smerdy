import { mainProjectData } from "../../utils/mainProjectsData";

const MainProjects = () => {
  return (
    <ul className="flex flex-wrap gap-8">
      {mainProjectData.map((project) => (
        <li className="relative group">
          <img
            src={project.img}
            alt={`${project.title}`}
            className="h-52 relative rounded-2xl group-hover:h-56 group-hover:brightness-50 transition-all"
          />
          <div className="flex gap-5 absolute top-0 left-0 w-full h-0 justify-center items-center opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <a
              className="text-2xl font-bold text-zinc-50 hover:text-cyan-100 hover:text-3xl transition-all"
              href={`${project.deployed}`}
              target="_blank"
            >
              {project.title}
            </a>
            <a
              className="text-green-400"
              href={`${project.github}`}
              target="_blank"
            >
              <i className="fa-brands fa-github fa-2xl hover:text-cyan-100"></i>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MainProjects;
