import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

/**
 * Composant pour afficher l'en-tête de la page.
 *
 * @returns {JSX.Element} - Le composant de l'en-tête.
 */
const Header = () => {
  return (
    <header>
      <div className="header">
        <Logo />
        <nav className="main-nav">
              <NavLink
                to="/"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                Home
              </NavLink>
              <NavLink
                to="/employees/create"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                Create Employee
              </NavLink>
              <NavLink
                to="/employees/list"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                Employees List
              </NavLink>
              <NavLink
                to="/library"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                Library
              </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
