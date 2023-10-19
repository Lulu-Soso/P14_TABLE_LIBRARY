import React from 'react';

/**
 * Composant pour afficher un champ de recherche.
 *
 * @param {string} searchValue - La valeur actuelle du champ de recherche.
 * @param {function} handleSearchChange - La fonction pour gérer le changement de valeur dans le champ de recherche.
 * @returns {JSX.Element} - Le composant du champ de recherche.
 */
const SearchField = ({ searchValue, handleSearchChange }) => {
    return (
        <div className="search">
            <label htmlFor="search">Search:</label>
            <input
                id="search"
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
            />
        </div>
    );
};

export default SearchField;
