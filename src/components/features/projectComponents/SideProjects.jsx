import { sideProjectData } from "../../../utils/sideProjectsData";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { Link } from "react-router-dom";
import { usePageContext } from "../../context/PageContext";

const SideProjects = () => {
    const { setIsHomePage } = usePageContext();
    return (
        <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-around lg:w-full lg:flex-col lg:pt-60 lg:flex-nowrap  gap-2 pr-5 h-[170px] lg:h-[500px] lg:mr-10 overflow-y-auto scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-zinc-50 scrollbar-thumb-rounded scrollbar-track-rounded">
            {sideProjectData.map((project) => (
                <li key={project.title}>
                    <Link
                        className="border-green-400 border-2 border-solid flex items-center justify-between p-1 pl-2 pr-2 rounded-xl h-[40px] lg:h-[45px] hover:bg-green-400 hover:cursor-pointer transition-all"
                        to={`/project/${project.title}`}
                        onClick={() => setIsHomePage(false)}
                    >
                        <h1 className="text-zinc-50 pr-2">{project.title}</h1>
                        <div className="flex flex-row gap-1 items-center">
                            <AiFillGithub className="text-zinc-50 text-2xl" />
                            <AiOutlineLink className="text-zinc-50 text-2xl" />
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SideProjects;
