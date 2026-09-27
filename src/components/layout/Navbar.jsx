import { useState } from "react";

const links = [
  ["Work", "work"], ["3D", "three-d"], ["Code", "code"], ["Lab", "lab"], ["About", "about"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const go = (id) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  return (
    <header className="nav">
      <div className="container nav__inner">
        <button className="nav__brand" onClick={() => go("home")} aria-label="Go home">LT<span>.</span></button>
        <nav className={open ? "nav__links is-open" : "nav__links"}>
          {links.map(([label, id]) => <button key={id} onClick={() => go(id)}>{label}</button>)}
        </nav>
        <button className="nav__menu" onClick={() => setOpen(!open)} 
        aria-label="Toggle navigation">
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}
