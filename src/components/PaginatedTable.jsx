import React from "react";

/**
 * Composant pour afficher la pagination de la table.
 *
 * @param {number} currentPage - Le numéro de page actuel.
 * @param {Array.<number>} pageNumbers - Les numéros de page à afficher.
 * @param {function} handlePreviousPage - La fonction pour gérer le passage à la page précédente.
 * @param {function} handleNextPage - La fonction pour gérer le passage à la page suivante.
 * @param {function} handlePageClick - La fonction pour gérer le clic sur une page spécifique.
 * @returns {JSX.Element} - Le composant de pagination de la table.
 */
const PaginatedTable = ({
  currentPage,
  pageNumbers,
  handlePreviousPage,
  handleNextPage,
  handlePageClick,
}) => {
  return (
    <div className="pagination">
      <button className="previous-next" onClick={handlePreviousPage}>
        Previous
      </button>

      {pageNumbers.map((number, index) => (
        <React.Fragment key={number}>
          {/* Vérifie s'il y a une discontinuité entre les numéros de page */}
          {index > 0 && pageNumbers[index - 1] !== number - 1 && (
            <span>...</span>
          )}

          {/* Génère un bouton de page */}
          <button
            // Applique une classe CSS spéciale si le numéro de page correspond à la page actuelle
            className={number === currentPage ? "current-page" : ""}
            // Appelle la fonction handlePageClick avec le numéro de page correspondant lorsque le bouton est cliqué
            onClick={() => handlePageClick(number)}
          >
            {number}
          </button>
        </React.Fragment>
      ))}

      <button className="previous-next" onClick={handleNextPage}>
        Next
      </button>
    </div>
  );
};

export default PaginatedTable;
