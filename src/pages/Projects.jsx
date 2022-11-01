import KryptoHack from "../images/KryptoHack.png";

const Projects = () => {
  return (
    <section id="projects" className=" bg-gray-900 w-full h-screen pt-24">
      <div className="border-white border-solid border-2 flex flex-col gap-3 font-mono w-4/6 h-[36rem] p-5 ml-20">
        <h1 className="text-4xl text-green-400 font-bold">Projects</h1>
        <ul className="flex flex-wrap gap-8">
          <li className="relative group">
            <img
              src={KryptoHack}
              alt={`KryptoHack`}
              className="h-52 relative rounded-2xl group-hover:h-56 group-hover:brightness-50 transition-all"
            />
            <div className="flex gap-5 absolute top-0 left-0 w-full h-0 justify-center items-center opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
              <p className="text-2xl font-bold text-zinc-50">KryptoHack</p>
              <a className="text-green-400" href="#">
                <i className="fa-brands fa-github fa-2xl"></i>
              </a>
            </div>
          </li>
          <li>
            <img src={KryptoHack} alt={`KryptoHack`} className="h-52" />
            <p className="text-lg text-zinc-400">CoinCharter</p>
          </li>
          <li>
            <img src={KryptoHack} alt={`KryptoHack`} className="h-52" />
            <p className="text-lg text-zinc-400">CoinCharter</p>
          </li>
          <li>
            <img src={KryptoHack} alt={`KryptoHack`} className="h-52" />
            <p className="text-lg text-zinc-400">CoinCharter</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
