import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Header from "./components/Header";

function App() {
  return (
    <body className="snap-y">
      <Header />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </body>
  );
}

export default App;
