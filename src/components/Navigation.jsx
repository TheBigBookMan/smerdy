import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="about">About Me</Link>
        <Link to="projects">Projects</Link>
        <Link to="contact">Contact</Link>
      </ul>
    </nav>
  );
};

export default Navigation;
