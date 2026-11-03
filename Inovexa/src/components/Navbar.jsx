import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo__mark" aria-hidden="true">I</span> Inovexa
        </Link>
        <button className="navbar__toggle" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
        <nav className={`navbar__links ${open ? "is-open" : ""}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}>
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
