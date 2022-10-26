import close from "../images/close.jpg";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="">
      <div className="">
        <img src={close} alt="me" className="w-12 rounded-3xl" />
        <h1 className="">
          Ben Smerd <small>(Smerdy)</small>
        </h1>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
