import React from "react";
import LogoWH from "../assets/logo.png";
import { Link } from "react-router-dom";

/**
 * Composant pour afficher le logo Wealth Health avec un lien vers la page d'accueil.
 *
 * @returns {JSX.Element} - Le composant du logo.
 */
const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={LogoWH} alt="Logo Wealth Health" />
        Wealth Health
      </Link>
    </div>
  );
};

export default Logo;
