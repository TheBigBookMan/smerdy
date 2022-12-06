import PortraitCut from "../images/PortraitCut.png";
import { HashLink as Link } from "react-router-hash-link";
import Skills from "../components/Skills";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-gray-900 w-full h-[950px] flex justify-end pt-20 snap-center"
    >
      <div className="flex flex-col gap-3 p-4 font-mono w-full md:w-4/6 h-[34rem] md:mr-10">
        <div className="flex flex-wrap pb-3 border-b-solid border-b-gray-600 border-b-2">
          <img
            src={PortraitCut}
            alt="me"
            className="w-36 h-36 md:w-80 md:h-80 rounded-2xl"
          />
          <div className="flex flex-col gap-2 ml-2">
            <h1 className="text-2xl md:text-4xl text-green-400 font-bold font-mono">
              About Me
            </h1>
            <p className="text-zinc-50 height leading-6 md:leading-8">
              I am a 27 year old recent graduate from The University of Adelaide
              Coding Bootcamp. With an outgoing personality and curiosity to
              explore the vast amount of technologies in this space, I bring
              enthusiasm and eagerness with every project I work on. I also have
              a Masters of Criminology degree, which taught me the important
              skills of researching, communication, sticking to deadlines and
              the ability to work independently or collaboratively.
            </p>
            <small className="text-zinc-400 ">
              Click <span className="text-green-400">"Resume"</span> to learn
              more about me or <span className="text-green-400">"Contact"</span>{" "}
              if you're interested in talking!
            </small>
            <div className="flex gap-10 justify-center">
              <button className="text-cyan-100 border-solid border-2 border-green-400 p-2 rounded-2xl hover:bg-green-400 active:text-green-400 active:bg-cyan-100 active:transition-all hover:transition-all">
                Resume
              </button>
              <Link
                className="text-cyan-100 border-solid border-2 border-green-400 p-2 rounded-2xl hover:bg-green-400 active:text-green-400 active:bg-cyan-100 active:transition-all hover:transition-all"
                smooth
                to="#contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="h-full flex text-green-400 flex flex-col">
          <h3 className="text-2xl md:text-4xl text-green-400 font-bold font-mono mx-auto">
            Skills
          </h3>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
