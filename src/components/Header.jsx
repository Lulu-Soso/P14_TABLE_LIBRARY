import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fonction pour fermer le menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Ajoute un gestionnaire d'événements pour fermer le menu lorsque l'utilisateur clique en dehors du menu
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest(".burger-menu") && !e.target.closest(".burger-button")) {
        closeMenu();
      }
    };

    // Écoute les clics sur l'ensemble de la page
    document.addEventListener("click", handleClickOutside);

    // Nettoie le gestionnaire d'événements lors du démontage du composant
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header>
      <div className="header">
        <Logo />
        <nav className="main-nav">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/employees/create"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            onClick={closeMenu}
          >
            Create Employee
          </NavLink>
          <NavLink
            to="/employees/list"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            onClick={closeMenu}
          >
            Employees List
          </NavLink>
          <NavLink
            to="/library"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            onClick={closeMenu}
          >
            Library
          </NavLink>
        </nav>

        <button className="burger-button" onClick={toggleMenu}>
          ☰
        </button>
      

      <ul className={`burger-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="close-button">
          <button onClick={toggleMenu}>X</button>
        </div>
        <li>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/employees/create"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            onClick={closeMenu}
          >
            Create Employee
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/employees/list"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            onClick={closeMenu}
          >
            Employees List
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/library"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            onClick={closeMenu}
          >
            Library
          </NavLink>
        </li>
      </ul>
      </div>
    </header>
  );
};

export default Header;
