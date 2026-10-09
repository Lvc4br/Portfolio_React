import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // "Work", "Lab" e "About" são seções que só existem na Home.
  // Se já estiver na Home, só rola até lá; se não, navega pra Home
  // e avisa (via state) qual seção rolar até assim que ela montar.
  const goToAnchor = (id) => {
    setOpen(false);
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  const goToPage = (path) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <header className="nav">
      <div className="container nav__inner">
        <button className="nav__brand" onClick={() => goToAnchor("home")} aria-label="LT. — Home">LT<span>.</span></button>
        <nav id="primary-navigation" className={open ? "nav__links is-open" : "nav__links"}>
          <button onClick={() => goToPage("/work")}>Work</button>
          <button onClick={() => goToPage("/3d")}>3D</button>
          <button onClick={() => goToPage("/programacao")}>Code</button>
          <button onClick={() => goToAnchor("lab")}>Lab</button>
          <button onClick={() => goToAnchor("about")}>About</button>
        </nav>
        <button
          className="nav__menu"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}