import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Header from "./components//common/Header";

function App() {
  return (
    <main className="snap-y">
      <Header />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
