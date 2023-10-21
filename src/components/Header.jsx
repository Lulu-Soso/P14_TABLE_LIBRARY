import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fonction pour fermer le menu automatiquement après avoir cliqué sur un élément
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="header">
        <Logo />
        <nav className="main-nav">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            onClick={closeMenu} // Appel à la fonction closeMenu lors du clic
          >
            Home
          </NavLink>
          <NavLink
            to="/employees/create"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            onClick={closeMenu} // Appel à la fonction closeMenu lors du clic
          >
            Create Employee
          </NavLink>
          <NavLink
            to="/employees/list"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            onClick={closeMenu} // Appel à la fonction closeMenu lors du clic
          >
            Employees List
          </NavLink>
          <NavLink
            to="/library"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            onClick={closeMenu} // Appel à la fonction closeMenu lors du clic
          >
            Library
          </NavLink>
        </nav>
  
      </div>
      <button className="burger-button" onClick={toggleMenu}>
        ☰ 
      </button>
      <ul className={`burger-menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/employees/create" onClick={closeMenu}>Create Employee</NavLink>
        </li>
        <li>
          <NavLink to="/employees/list" onClick={closeMenu}>Employees List</NavLink>
        </li>
        <li>
          <NavLink to="/library" onClick={closeMenu}>Library</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
