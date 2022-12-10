import MainPage from "./pages/Main";
import Header from "./components//common/Header";
import ProjectPage from "./pages/ProjectPage";
import { Routes, Route } from "react-router-dom";

// ! https://www.youtube.com/watch?v=uRDLFXxihgc&t=280s
// TODO do something like this above in some space for cool looks

function App() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="project/:projecttitle" element={<ProjectPage />} />
      </Routes>
    </main>
  );
}

export default App;
