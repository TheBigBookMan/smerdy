import close from "../images/close.jpg";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="bg-gray-900 flex justify-between h-20 p-10 font-mono fixed w-full top-0">
      <div className="flex gap-5 items-center">
        <img src={close} alt="me" className="w-12 h-12 rounded-3xl" />
        <h1 className="text-green-400 text-lg">Ben Smerd</h1>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
