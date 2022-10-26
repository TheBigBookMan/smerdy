import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="">
      <ul className="">
        <Link className="" to="/">
          Home
        </Link>
        <Link to="about">About</Link>
        <Link to="projects">Projects</Link>
        <Link to="contact">Contact</Link>
      </ul>
    </nav>
  );
};

export default Navigation;
