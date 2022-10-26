// TODO ADD IN A THREEJS ANIMATED CUBE TO THE RIGHT OR SOMETHING ANIMATED TO LOOK COOL
const Home = () => {
  return (
    <div className="flex flex-col gap-3 font-mono w-3/6 h-5/6 p-20 ml-40">
      <small className="text-green-400">Hi, my name is</small>
      <h1 className="text-8xl text-zinc-400 font-bold">Ben Smerd.</h1>
      <h2 className="text-zinc-50 text-5xl">
        I am a full-stack web developer.
      </h2>
      <h3 className="text-zinc-400">
        I like to build dynamic and creative front-end applications while
        integrating logical and smooth back-end servers and APIs.
      </h3>
      <button className="w-60 mt-5 text-cyan-100 border-solid border-2 border-green-400 p-2 rounded-2xl hover:bg-green-400 active:text-green-400 active:bg-cyan-100">
        Check out my Projects!
      </button>
    </div>
  );
};

export default Home;
