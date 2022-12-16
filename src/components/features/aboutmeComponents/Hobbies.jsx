import DalorianBeach from "../../../images/hobbiesImages/AI/DalorianBeach.png";
import Drifting from "../../../images/hobbiesImages/guitar/Drifting.png";
import Big from "../../../images/hobbiesImages/hiking/Big.jpg";
import Surfing from "../../../images/hobbiesImages/sport/Surfing.png";
import Turkey from "../../../images/hobbiesImages/travel/Turkey.png";

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

const Hobbies = () => {
  return (
    <ul className="flex flex-col items-center gap-2 h-[360px] overflow-y-scroll scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-zinc-50 scrollbar-thumb-rounded scrollbar-track-rounded">
      {thumbnails.map((hobby) => (
        <li className="relative group hover:cursor-pointer">
          <img
            className="relative w-[280px] h-[260px] rounded-3xl group-hover:brightness-50 transition-all"
            alt={hobby.category}
            src={hobby.image}
          />
          <h1 className="transition-all opacity-0 group-hover:opacity-100 font-bold text-green-400 text-2xl absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {hobby.category}
          </h1>
        </li>
      ))}
    </ul>
  );
};

export default Hobbies;
