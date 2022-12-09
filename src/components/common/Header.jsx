import close from "../../images/close.jpg";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 flex justify-between h-20 p-10 font-mono fixed z-40 w-full top-0">
      <Link className="flex gap-5 items-center" to="/">
        <img src={close} alt="me" className="w-12 h-12 rounded-3xl" />
        <h1 className="text-green-400 text-lg">Smerdy</h1>
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
