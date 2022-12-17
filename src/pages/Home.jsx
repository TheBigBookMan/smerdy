import { HashLink as Link } from "react-router-hash-link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import ThreeBall from "../components/ThreeBall";
import { Text3D, Center } from "@react-three/drei";
import Roboto_Bold from "../files/Roboto_Bold.json";
import { Canvas } from "@react-three/fiber";

const Home = () => {
  const TextThree = () => {
    return (
      <Canvas>
        <Center center>
          <Text3D font={Roboto_Bold} size={5} letterSpacing={1.25}>
            Ben Smerd
            <meshBasicMaterial wireframe color="white" />
          </Text3D>
        </Center>
      </Canvas>
    );
  };

  return (
    <section id="#" className="  bg-gray-900 w-full h-full  pt-24  snap-center">
      <div className="z-20 relative h-full w-full flex flex-col gap-3 font-mono lg:flex-row md:items-center  p-8 lg:p-20 md:pt-20">
        <div className="lg:w-4/6">
          <small className="text-green-400">Hi, my name is</small>
          <div className="w-[240px] md:w-[480px] h-[40px] md:h-[80px]">
            <TextThree />
          </div>
          <h2 className="text-green-500 text-2xl md:text-5xl">
            I am a full-stack web developer.
          </h2>
          <h3 className="text-zinc-50 leading-8 pb-3 border-b-solid border-b-gray-600 border-b-2">
            I like to build dynamic and creative front-end applications while
            integrating logical and smooth running back-end databases and APIs.
            I love to learn new technologies and apply them by building
            real-world applications. I am eager to learn more about IOT,
            Blockchain and AI.
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
                  <AiFillGithub className="hover:text-cyan-100 text-4xl transition-all" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/bensmerd/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin className="hover:text-cyan-100 text-4xl transition-all" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/smerdy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram className="hover:text-cyan-100 text-4xl transition-all" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/BenSmerd"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineTwitter className="hover:text-cyan-100 text-4xl transition-all" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-[140px] lg:h-[400px] w-full hover:cursor-help p-2 lg:w-2/4">
          <ThreeBall />
        </div>
      </div>
    </section>
  );
};

export default Home;
