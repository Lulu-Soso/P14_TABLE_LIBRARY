import React from 'react';

/**
 * Composant pour filtrer le nombre d'entrées à afficher par page.
 *
 * @param {number} entriesToShow - Le nombre d'entrées actuellement affichées par page.
 * @param {Function} handleEntriesChange - La fonction de gestion du changement du nombre d'entrées.
 * @returns {JSX.Element} - Le composant de filtre d'entrées.
 */
const FilterEntries = ({ entriesToShow, handleEntriesChange }) => {
    return (
        <div className="filter">
            <label htmlFor="show">Show</label>
            <select
                className="filter-select"
                name="state"
                id="show"
                value={entriesToShow}
                onChange={handleEntriesChange}
            >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            <p>entries</p>
        </div>
    );
};

export default FilterEntries;
