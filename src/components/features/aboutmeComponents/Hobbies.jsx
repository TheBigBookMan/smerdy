import DalorianBeach from "../../../images/hobbiesImages/AI/DalorianBeach.png";
import Drifting from "../../../images/hobbiesImages/guitar/Drifting.png";
import Big from "../../../images/hobbiesImages/hiking/Big.jpg";
import Surfing from "../../../images/hobbiesImages/sport/Surfing.png";
import Turkey from "../../../images/hobbiesImages/travel/Turkey.png";
import { Link } from "react-router-dom";
import { usePageContext } from "../../context/PageContext";
import {
  FaGuitar,
  FaHiking,
  FaMapMarkerAlt,
  FaRunning,
  FaRobot,
} from "react-icons/fa";

const reactIcons = [FaRobot, FaGuitar, FaHiking, FaMapMarkerAlt, FaRunning];
const thumbnails = [
  {
    image: DalorianBeach,
    category: "Technology",
  },
  {
    image: Drifting,
    category: "Guitar",
  },
  {
    image: Big,
    category: "Hiking",
  },
  {
    image: Turkey,
    category: "Travel",
  },
  {
    image: Surfing,
    category: "Sport",
  },
];

//!
//! DO RESPONSIVENESS
//!

const Hobbies = () => {
  const { setIsHomePage } = usePageContext();

  return (
    <ul className="flex flex-col items-center gap-2 h-[400px] overflow-y-scroll scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-zinc-50 scrollbar-thumb-rounded scrollbar-track-rounded">
      {thumbnails.map((hobby, idx) => {
        const Icon = reactIcons[idx];
        return (
          <Link
            onClick={() => setIsHomePage(false)}
            to={`/hobbie/${hobby.category}`}
            className="relative group hover:cursor-pointer"
          >
            <img
              className="relative w-[280px] h-[260px] rounded-3xl group-hover:brightness-50 transition-all"
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
