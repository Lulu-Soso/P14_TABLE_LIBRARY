import React, { useState } from "react";
import "./PaginatedTable.css"

const PaginatedTable = ({
  currentPage,
  pageNumbers,
  handlePreviousPage,
  handleNextPage,
  handlePageClick,
  customTextPrevious,
  customTextNext,
  customHoverBackgroundColor,
  customDarkBackgroundColor,
  customLightBackgroundColor
}) => {
  const [isHoveredPrevious, setIsHoveredPrevious] = useState(false);
  const [isHoveredNext, setIsHoveredNext] = useState(false);
  const [hoveredPageNumber, setHoveredPageNumber] = useState(null);

  const handleMouseEnterPrevious = () => {
    setIsHoveredPrevious(true);
  };

  const handleMouseLeavePrevious = () => {
    setIsHoveredPrevious(false);
  };

  const handleMouseEnterNext = () => {
    setIsHoveredNext(true);
  };

  const handleMouseLeaveNext = () => {
    setIsHoveredNext(false);
  };

  const handleMouseEnterPageNumber = (pageNumber) => {
    setHoveredPageNumber(pageNumber);
  };

  const handleMouseLeavePageNumber = () => {
    setHoveredPageNumber(null);
  };

  return (
    <div className="pagination">
      <button
        className="previous-next"
        onClick={handlePreviousPage}
        style={{
          backgroundColor: isHoveredPrevious
            ? customHoverBackgroundColor
            : customDarkBackgroundColor, // Utilise la couleur de fond personnalisée pour les boutons "Previous" et "Next"
        }}
        onMouseEnter={handleMouseEnterPrevious}
        onMouseLeave={handleMouseLeavePrevious}
      >
        {customTextPrevious}
      </button>

      {pageNumbers.map((number, index) => (
        <React.Fragment key={number}>
          {/* Vérifie s'il y a une discontinuité entre les numéros de page */}
          {/* index > 0 garantit que nous sommes au moins au deuxième élément de la liste pageNumbers (car il n'y a pas de numéro de page précédent pour le premier élément). */}
          {/* pageNumbers[index - 1] !== number - 1 compare le numéro de page précédent au numéro de page actuel. Si ces numéros ne sont pas consécutifs (c'est-à-dire que le numéro de page précédent n'est pas égal au numéro de page actuel moins un), alors cela signifie qu'il y a une discontinuité */}
          {index > 0 && pageNumbers[index - 1] !== number - 1 && (
            <span>...</span>
          )}

          {/* Génère un bouton de page */}
          <button
            className={number === currentPage ? "current-page" : ""}
            onClick={() => handlePageClick(number)}
            style={{
              backgroundColor:
                hoveredPageNumber === number
                  ? customHoverBackgroundColor
                  : number === currentPage
                  ? customDarkBackgroundColor // Utilise la couleur de fond personnalisée pour la page active
                  : customLightBackgroundColor,
            }}
            onMouseEnter={() => handleMouseEnterPageNumber(number)}
            onMouseLeave={handleMouseLeavePageNumber}
          >
            {number}
          </button>
        </React.Fragment>
      ))}

      <button
        className="previous-next"
        onClick={handleNextPage}
        style={{
          backgroundColor: isHoveredNext
            ? customHoverBackgroundColor
            : customDarkBackgroundColor, // Utilise la couleur de fond personnalisée pour les boutons "Previous" et "Next"
        }}
        onMouseEnter={handleMouseEnterNext}
        onMouseLeave={handleMouseLeaveNext}
      >
        {customTextNext}
      </button>
    </div>
  );
};

export default PaginatedTable;
