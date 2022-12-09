import { HashLink as Link } from "react-router-hash-link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import Three from "../components/Three";

// TODO ADD IN A THREEJS ANIMATED CUBE TO THE RIGHT OR SOMETHING ANIMATED TO LOOK COOL
//TODO COULD ADD IN THOSE WAVEY DOTS AND THEN HAVE 3D OF MY NAME THAT CAN MOVE AROUND ON THE HOME PAGE, WOULD BE REALLY COOL

//TODO might need react router from Link for the open github/linkedin etc

//TODO might need to reduce the height of the pages so less gap between each one to look better-- MAYBE THOUGH

//TODO add the snapping scroll to Y axis movement

//TODO need to have the url change when scrolling--- will have to search how to do that

const Home = () => {
  return (
    <section id="#" className="  bg-gray-900 w-full h-full snap-center">
      {/* <Three /> */}
      {/* z-20 relative */}
      <div className="z-20 relative flex flex-col gap-3 font-mono h-full w-full pt-24 p-8 max-w-4/6 md:p-20 md:ml-40 md:pt-40">
        <small className="text-green-400">Hi, my name is</small>
        <h1 className="text-2xl md:text-8xl text-zinc-50 font-bold">
          Ben Smerd.
        </h1>
        <h2 className="text-green-500 text-2xl md:text-5xl">
          I am a full-stack web developer.
        </h2>
        <h3 className="text-zinc-50 leading-8 pb-3 border-b-solid border-b-gray-600 border-b-2">
          I like to build dynamic and creative front-end applications while
          integrating logical and smooth running back-end databases and APIs. I
          love to learn new technologies and apply them by building real-world
          applications. I am eager to learn more about IOT, Blockchain and AI.
        </h3>
        <div className="flex flex-col gap-6 md:flex-row md:gap-12 items-center  mt-3">
          <Link
            className="w-60 text-cyan-100 border-solid border-2 border-green-400 p-3 text-center rounded-2xl hover:bg-green-400 active:text-green-400 active:bg-cyan-100 transition-all"
            smooth
            to="#projects"
          >
            Check out my Projects!
          </Link>
          <ul className="flex gap-8 text-3xl md:gap-12 md:text-5xl text-green-500">
            <li>
              <a
                href="https://github.com/TheBigBookMan"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="hover:text-cyan-100 text-4xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/bensmerd/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin className="hover:text-cyan-100 text-4xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/smerdy/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram className="hover:text-cyan-100 text-4xl" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/BenSmerd"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineTwitter className="hover:text-cyan-100 text-4xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
