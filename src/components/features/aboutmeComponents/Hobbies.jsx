import { Link } from "react-router-dom";
import { usePageContext } from "../../context/PageContext";
import { thumbnails, reactIcons } from "./../../../utils/hobbiesData";

const Hobbies = () => {
  const { setIsHomePage } = usePageContext();

  return (
    <ul className="flex flex-col md:flex-row md:justify-center md:flex-wrap items-center gap-2 h-[400px] lg:h-[540px] overflow-y-scroll scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-zinc-50 scrollbar-thumb-rounded scrollbar-track-rounded">
      {thumbnails.map((hobby, idx) => {
        const Icon = reactIcons[idx];
        return (
          <Link
            onClick={() => setIsHomePage(false)}
            to={`/hobbie/${hobby.category}`}
            className="relative group hover:cursor-pointer"
          >
            <img
              className="relative w-full h-[260px] rounded-3xl group-hover:brightness-50 transition-all"
              alt={hobby.category}
              src={hobby.image}
            />
            <div className="flex gap-2 items-center transition-all opacity-0 group-hover:opacity-100 absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="font-bold text-green-400 text-2xl">
                {hobby.category}
              </h1>
              <Icon className="text-cyan-500 text-3xl" />
            </div>
          </Link>
        );
      })}
    </ul>
  );
};

export default Hobbies;
