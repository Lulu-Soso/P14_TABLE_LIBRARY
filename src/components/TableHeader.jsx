import React from 'react';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

/**
 * Composant pour afficher l'en-tête d'une colonne de tableau.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.column - Les informations sur la colonne.
 * @param {string} props.column.key - La clé unique de la colonne.
 * @param {string} props.column.label - Le libellé de la colonne.
 * @param {string} props.sortBy - La clé de la colonne selon laquelle trier.
 * @param {string} props.sortOrder - L'ordre de tri (ascendant ou descendant).
 * @param {function} props.onClick - La fonction de gestion du clic sur l'en-tête de colonne.
 * @returns {JSX.Element} - Le composant d'en-tête de colonne.
 */
const TableHeader = ({ column, sortBy, sortOrder, onClick }) => {
    return (
        <th
            onClick={onClick}
            className={`${sortBy === column.key ? "sorted-column" : ""}`}
        >
            <p className="flex-jcc-aic">
                {column.label} {/* Cette ligne a été modifiée. */}
                <span className="up-down">
                    <FaCaretUp
                        className={
                            sortBy === column.key && sortOrder === "asc"
                                ? "sorted-icon"
                                : ""
                        }
                    />
                    <FaCaretDown
                        className={
                            sortBy === column.key && sortOrder === "desc"
                                ? "sorted-icon"
                                : ""
                        }
                    />
                </span>
            </p>
        </th>
    );
};

export default TableHeader;
