import { mainProjectData } from "../../utils/mainProjectsData";

//TODO might need to dd in react router Link for the click to open new page with website-- not sure if react router can do that

const MainProjects = () => {
  return (
    <ul className="flex flex-wrap gap-4 items-center ">
      {mainProjectData.map((project) => (
        <li className="relative group mt-5 flex flex-col w-[470px] overflow-hidden">
          <img
            src={project.img}
            alt={`${project.title}`}
            className="h-56 relative rounded-2xl group-hover:brightness-50 transition-all"
          />
          <div className="flex p-2 gap-5 absolute top-0 left-0 w-full h-0 justify-center items-center opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <a
              className="text-2xl font-bold text-zinc-50 hover:text-green-400 hover:text-3xl transition-all"
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
            <p className="text-zinc-50">{project.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MainProjects;
