import React from "react";

/**
 * Composant pour afficher un indicateur de chargement.
 *
 * @returns {JSX.Element} - Le composant de l'indicateur de chargement.
 */
const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-circle"></div>
    </div>
  );
};

export default Loader;
