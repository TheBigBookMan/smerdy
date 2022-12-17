import { useParams } from "react-router-dom";
import { thumbnails } from "../utils/hobbiesData";
import { AiFillPlayCircle } from "react-icons/ai";

const HobbiesPage = () => {
  const { hobbietitle } = useParams();
  let selectedHobby;
  let needsLinks;

  selectedHobby = thumbnails.find((obj) => obj.category === hobbietitle);

  if (selectedHobby.category === "Guitar") {
    needsLinks = true;
  } else {
    needsLinks = false;
  }

  const showcase = selectedHobby.showcase;

  return (
    <div className="flex flex-col items-center gap-4 bg-gray-900 w-full min-h-screen  pt-20 p-4">
      <div className="max-w-[1000px] flex flex-col gap-4">
        <h1 className="text-3xl md:text-4xl text-green-400 font-bold text-center">
          {selectedHobby.category}
        </h1>
        <p className="text-zinc-50">{selectedHobby.mainDescription}</p>
        <ul className="flex flex-col items-center md:flex-row md:flex-wrap gap-4">
          {showcase.map((item) => (
            <li className="flex flex-col gap-2 max-w-[300px]">
              {!needsLinks ? (
                <img
                  src={item.imageShowcase}
                  alt={item.descriptionShowcase}
                  className="w-50 h-50 rounded-3xl "
                />
              ) : (
                <div className="relative group hover:cursor-pointer overflow-y-hidden">
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <img
                      src={item.imageShowcase}
                      alt={item.descriptionShowcase}
                      className="w-50 h-50 rounded-3xl relative group-hover:brightness-50 transition-all"
                    />
                    <AiFillPlayCircle className="transition-all text-green-500 text-8xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" />
                  </a>
                </div>
              )}
              <p className="text-zinc-50 text-sm">{item.descriptionShowcase}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HobbiesPage;
