import { Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Header from "./components/Header";

function App() {
  return (
    <body className="bg-gray-900 h-screen">
      <Header />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </body>
  );
}

export default App;
