import React, { useState } from "react";
import "./TableHeader.css";
import Up from "../assets/Up.svg";
import UpActive from "../assets/UpActive.svg";
import Down from "../assets/Down.svg";
import DownActive from "../assets/DownActive.svg";

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
 * @param {string} props.hoverBackgroundColor - La couleur de fond au survol.
 * @param {string} props.customSortedColumnBackgroundColor - La classe CSS personnalisée pour la colonne triée.
 * @returns {JSX.Element} - Le composant d'en-tête de colonne.
 */
const TableHeader = ({
  column,
  sortBy,
  sortOrder,
  onClick,
  customHoverBackgroundColor,
  customSortedColumnBackgroundColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const columnHeaderStyle = {
    ...(sortBy === column.key && customSortedColumnBackgroundColor
      ? {
          backgroundColor: customSortedColumnBackgroundColor,
          filter: "saturate(0.3)",
          mixBlendMode: "multiply",
        }
      : {}),
    ...(isHovered
      ? {
          backgroundColor: customHoverBackgroundColor,
          filter: "none",
          mixBlendMode: "normal",
        }
      : {}),
  };

  return (
    <th
      onClick={onClick}
      className={sortBy === column.key ? customSortedColumnBackgroundColor : ""}
      style={columnHeaderStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="th-label">
        <p>{column.label}</p>

        <span className="up-down">
          <img
            src={sortBy === column.key && sortOrder === "asc" ? UpActive : Up}
            alt=""
            className={sortBy === column.key ? "sorted-icon" : "up-down-icon"}
          />
          <img
            src={
              sortBy === column.key && sortOrder === "desc" ? DownActive : Down
            }
            alt=""
            className={sortBy === column.key ? "sorted-icon" : "up-down-icon"}
          />
        </span>
      </div>
    </th>
  );
};

export default TableHeader;
