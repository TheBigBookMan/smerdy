import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex justify-end ">
      <ul className="font-mono flex gap-12 text-lg text-lime-300 p-10 mx-auto">
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
