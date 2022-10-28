import PortraitCut from "../images/PortraitCut.png";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-gray-900 w-full h-screen flex justify-end pt-32"
    >
      <div className="border-red border-solid border-2 flex gap-3 font-mono w-4/6 h-5/6 mr-10">
        <img src={PortraitCut} alt="me" className="w-80 h-80 rounded-2xl " />
        <div className="flex flex-col">
          <h1 className="text-4xl text-zinc-400 font-bold font-mono">
            About Me
          </h1>
          <p className="text-green-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ratione blanditiis ullam dolorem id repellendus. Illum
            nesciunt quas delectus fuga similique eaque! Ipsam, laborum
            corporis. Eligendi sint culpa mollitia nulla!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
