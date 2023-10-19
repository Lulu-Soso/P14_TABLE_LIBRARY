import React from "react";

/**
 * Composant pour afficher des informations sur les entrées affichées.
 *
 * @param {number} currentPage - Le numéro de la page actuelle.
 * @param {number} entriesToShow - Le nombre d'entrées à afficher par page.
 * @param {number} totalEntries - Le nombre total d'entrées.
 * @returns {JSX.Element} - Le composant d'informations sur les entrées.
 */
const EntriesInfo = ({ currentPage, entriesToShow, totalEntries, customDarkBackgroundColor, customLightBackgroundColor }) => {
  return (
    // <div className="entries-info">
    <div className="entries">
      {/* Showing {(currentPage - 1) * entriesToShow + 1} to{" "}
      {Math.min(currentPage * entriesToShow, totalEntries)} of {totalEntries}{" "}
      entries */}
      <span style={{ backgroundColor: customDarkBackgroundColor }}>
            {(currentPage - 1) * entriesToShow + 1} {"..."}{" "}
            {Math.min(currentPage * entriesToShow, totalEntries)}
          </span>
          <p style={{backgroundColor: customLightBackgroundColor}}>{totalEntries}</p>
    </div>
  );
};

export default EntriesInfo;
