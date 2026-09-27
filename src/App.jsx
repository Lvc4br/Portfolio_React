import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import LoadingScreen from "./components/ui/LoadingScreen.jsx";
import ProjectModal from "./components/ui/ProjectModal.jsx";
import Hero from "./components/sections/Hero.jsx";
import SelectedWork from "./components/sections/SelectedWork.jsx";
import ThreeD from "./components/sections/ThreeD.jsx";
import Code from "./components/sections/Code.jsx";
import ThreeDCode from "./components/sections/ThreeDCode.jsx";
import Lab from "./components/sections/Lab.jsx";
import Skills from "./components/sections/Skills.jsx";
import About from "./components/sections/About.jsx";
import Contact from "./components/sections/Contact.jsx";
import { projects } from "./data/projects.js";

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
        <Hero />
        <SelectedWork onOpenProject={setActiveProject} />
        <ThreeD />
        <Code />
        <ThreeDCode />
        <Lab />
        <Skills />
        <About />
        <Contact />
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

export { projects };
