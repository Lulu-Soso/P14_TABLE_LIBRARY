import React from "react";
import "./EntriesInfo.css"

/**
 * Composant pour afficher des informations sur les entrées affichées.
 *
 * @param {number} currentPage - Le numéro de la page actuelle.
 * @param {number} entriesToShow - Le nombre d'entrées à afficher par page.
 * @param {number} totalEntries - Le nombre total d'entrées.
 * @returns {JSX.Element} - Le composant d'informations sur les entrées.
 */
const EntriesInfo = ({
  currentPage,
  entriesToShow,
  totalEntries,
  customDarkBackgroundColor,
  customLightBackgroundColor,
}) => {
  return (
    // <div className="entries-info">
    <div className="entries">
      {/* Cette section affiche l'indice de la première entrée affichée et de la dernière entrée affichée sur la page actuelle */}
      <span style={{ backgroundColor: customDarkBackgroundColor }}>
        {/* Calcul de l'indice de la première entrée affichée */}
        {/* currentPage : C'est le numéro de la page actuelle dans la pagination.
            entriesToShow : C'est le nombre d'entrées affichées par page.
            (currentPage - 1) * entriesToShow : Ceci calcule l'indice de la première entrée sur la page précédente. Par exemple, si currentPage est 2 et entriesToShow est 10, cela donnera 10, car la première entrée sur la deuxième page commence à l'indice 10.
            + 1 : Cela ajoute 1 à l'indice calculé pour obtenir l'indice de la première entrée sur la page actuelle. */}
        {(currentPage - 1) * entriesToShow + 1}
        {"..."} {/* Points de suspension pour indiquer une plage d'indices */}
        {/* Calcul de l'indice de la dernière entrée affichée */}
        {Math.min(currentPage * entriesToShow, totalEntries)}
      </span>

      <span style={{ backgroundColor: customLightBackgroundColor }}>
        {totalEntries}
      </span>
    </div>
  );
};

export default EntriesInfo;
