import { Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Header from "./components/Header";

function App() {
  return (
    <body className="bg-violet-900 h-screen">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </body>
  );
}

export default App;
