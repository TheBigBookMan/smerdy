import KryptoHack from "../images/KryptoHack.png";

const Projects = () => {
  return (
    <section id="projects" className=" bg-gray-900 w-full h-screen pt-24">
      <div className="border-white border-solid border-2 flex flex-col gap-3 font-mono w-4/6 h-[34rem] ml-20">
        <h1 className="text-4xl text-green-400 font-bold">Projects page</h1>
        <ul className="flex flex-wrap gap-8">
          <li>
            <img src={KryptoHack} alt={`${KryptoHack}`} className="h-52" />
            <p className="text-green-500">CoinCharter</p>
          </li>
          <li>
            <img src={KryptoHack} alt={`${KryptoHack}`} className="h-52" />
            <p className="text-green-500">CoinCharter</p>
          </li>
          <li>
            <img src={KryptoHack} alt={`${KryptoHack}`} className="h-52" />
            <p className="text-green-500">CoinCharter</p>
          </li>
          <li>
            <img src={KryptoHack} alt={`${KryptoHack}`} className="h-52" />
            <p className="text-green-500">CoinCharter</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
