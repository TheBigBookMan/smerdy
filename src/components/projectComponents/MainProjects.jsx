import { mainProjectData } from "../../utils/mainProjectsData";

//TODO might need to dd in react router Link for the click to open new page with website-- not sure if react router can do that

const MainProjects = () => {
  return (
    <ul className="flex flex-col w-full gap-6 items-center ">
      {mainProjectData.map((project) => (
        <li className="relative group flex flex-col w-[350px] lg:w-[470px] overflow-hidden">
          <img
            src={project.img}
            alt={`${project.title}`}
            className="h-[200px] w-[340px] relative rounded-2xl group-hover:brightness-50 transition-all"
          />
          <div className="flex flex-col p-2 gap-2 absolute top-0 left-0 w-full h-0 justify-center items-center opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <div className="flex gap-2 items-center">
              <a
                className="text-xl font-bold text-zinc-50 hover:text-green-400 hover:text-2xl transition-all"
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
            <p className="text-zinc-50">{project.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MainProjects;
