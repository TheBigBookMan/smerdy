import close from "../images/close.jpg";

const Header = () => {
  return (
    <header className="flex justify-between p-10">
      <div className="flex items-center gap-5 bg-lime-300 h-">
        <img src={close} alt="me" className="w-12 rounded-3xl" />
        <h1 className="text-3xl font-extrabold font-mono text-indigo-600">
          Ben Smerd <small>(Smerdy)</small>
        </h1>
      </div>
    </header>
  );
};

export default Header;
