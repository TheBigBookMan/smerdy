import close from "../../images/close.jpg";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { usePageContext } from "../context/PageContext";

const Header = () => {
  const { isHomePage, setIsHomePage } = usePageContext();
  return (
    <header className="bg-gray-900 flex justify-between h-20 p-10 font-mono fixed z-40 w-full top-0">
      <div className="flex gap-5 items-center">
        <img src={close} alt="me" className="w-12 h-12 rounded-3xl" />
        <h1 className="text-green-400 text-lg">Smerdy</h1>
      </div>
      {isHomePage ? (
        <Navigation />
      ) : (
        <Link
          className="flex justify-center items-center"
          to="/"
          onClick={() => setIsHomePage(true)}
        >
          <p className="text-green-400 text-lg hover:cursor-pointer">Back</p>
        </Link>
      )}
    </header>
  );
};

export default Header;
