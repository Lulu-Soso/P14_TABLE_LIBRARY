import React, { useState } from "react";

const PaginatedTable = ({
  currentPage,
  pageNumbers,
  handlePreviousPage,
  handleNextPage,
  handlePageClick,
  customTextPrevious,
  customTextNext,
  customHoverBackgroundColor,
  customBackgroundColor,
}) => {
  const [isHoveredPrevious, setIsHoveredPrevious] = useState(false);
  const [isHoveredNext, setIsHoveredNext] = useState(false);
  const [hoveredPageNumber, setHoveredPageNumber] = useState(null);

  // const hoverColorPrevious = {
  //   backgroundColor: isHoveredPrevious ? customHoverBackgroundColor : "", // Utilisation de la couleur de fond au survol
  // };

  // const hoverColorNext = {
  //   backgroundColor: isHoveredNext ? customHoverBackgroundColor : "", // Utilisation de la couleur de fond au survol
  // };

  // const buttonBackgroundColor = {
  //   backgroundColor: customBtnColor, // Utilise la couleur de fond personnalisée pour les boutons "Previous" et "Next"
  // };

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
            : customBackgroundColor, // Utilise la couleur de fond personnalisée pour les boutons "Previous" et "Next"
        }}
        onMouseEnter={handleMouseEnterPrevious}
        onMouseLeave={handleMouseLeavePrevious}
      >
        {customTextPrevious}
      </button>

      {pageNumbers.map((number, index) => (
        <React.Fragment key={number}>
          {/* Vérifie s'il y a une discontinuité entre les numéros de page */}
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
                  ? customBackgroundColor // Utilise la couleur de fond personnalisée pour la page active
                  : "",
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
            : customBackgroundColor, // Utilise la couleur de fond personnalisée pour les boutons "Previous" et "Next"
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
