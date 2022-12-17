import MainPage from "./pages/Main";
import Header from "./components//common/Header";
import ProjectPage from "./pages/ProjectPage";
import HobbiesPage from "./pages/HobbiesPage";
import { Routes, Route } from "react-router-dom";
import { PageProvider } from "./components/context/PageContext";

function App() {
  return (
    <main className="overflow-x-hidden">
      <PageProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="project/:projecttitle" element={<ProjectPage />} />
          <Route path="hobbie/:hobbietitle" element={<HobbiesPage />} />
        </Routes>
      </PageProvider>
    </main>
  );
}

export default App;
