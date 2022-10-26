import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex items-center">
      <ul className="flex">
        <Link className="text-green-400" to="/">
          Home
        </Link>
        <Link className="text-cyan-100" to="about">
          About
        </Link>
        <Link className="text-cyan-100" to="projects">
          Projects
        </Link>
        <Link className="text-cyan-100" to="contact">
          Contact
        </Link>
        <button className="text-cyan-100">Resume</button>
      </ul>
    </nav>
  );
};

export default Navigation;
