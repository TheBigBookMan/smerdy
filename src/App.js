import MainPage from "./pages/Main";
import Header from "./components//common/Header";
import ProjectPage from "./pages/ProjectPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="snap-y">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="project" element={<ProjectPage />} />
      </Routes>
    </main>
  );
}

export default App;
