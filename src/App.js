import { Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
  return (
    <body className="flex">
      <div className="h-screen w-4/6 bg-lime-300 max-xl:w-3/6">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
      <div className="flex flex-end bg-indigo-600 h-screen w-2/6 max-xl:w-3/6">
        <Navigation />
      </div>
    </body>
  );
}

export default App;
