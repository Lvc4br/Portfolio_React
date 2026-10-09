import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import LoadingScreen from "./components/ui/LoadingScreen.jsx";
import ProjectModal from "./components/ui/ProjectModal.jsx";

// Páginas
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import Gallery3D from "./pages/Gallery3D.jsx";
import Programming from "./pages/Programming.jsx";
// import TccEtec from "./pages/TccEtec.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    document.body.classList.toggle("is-loading", loading);
    return () => document.body.classList.remove("is-loading");
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home onOpenProject={setActiveProject} />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/3d" element={<Gallery3D onOpenProject={setActiveProject} />} />
          <Route path="/work/code" element={<Programming onOpenProject={setActiveProject} />} />
          {/* Legacy URLs kept working after the hierarchy change. */}
          <Route path="/3d" element={<Navigate to="/work/3d" replace />} />
          <Route path="/programacao" element={<Navigate to="/work/code" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}
