import PortraitCut from "../images/PortraitCut.png";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-gray-900 w-full h-screen flex justify-end pt-32"
    >
      <div className="border-red border-solid border-2 flex gap-3 font-mono w-4/6 h-5/6 mr-10">
        <img src={PortraitCut} alt="me" className="w-80 h-80 rounded-2xl" />
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl text-green-400 font-bold font-mono">
            About Me
          </h1>
          <p className="text-zinc-50 height leading-8">
            I am a 27 year old recent graduate from The University of Adelaide
            Coding Bootcamp. With an outgoing personality and curiosity to
            explore the vast amount of technologies in this space, I bring
            enthusiasm and eagerness with every project I work on. I also have a
            Masters of Criminology degree, which taught me the important skills
            of researching, communication, sticking to deadlines and the ability
            to work independently or collaboratively.
          </p>
          <small className="text-zinc-400 ">
            Click on <span className="text-green-400">"Resume"</span> in the
            navbar to learn more about me!
          </small>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
