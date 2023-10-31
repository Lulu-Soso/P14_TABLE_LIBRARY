import React, { useEffect, useState } from "react";
import "./EmployeeDataRow.css"
import { formatLocalDate } from "../utils/formatLocalDate";

const EmployeeDataRow = ({
  item,
  sortBy,
  className,
  customSortedColumnBackgroundColor,
  customEvenRowBackgroundColor,
  customHoverRowBackgroundColor,
  onCellClick,
  columnsTable, 
  isModalOpen,
  selectedRowKey, // Utilisez la clé de la ligne sélectionnée
  setSelectedRowKey, // Fonction pour mettre à jour la clé de la ligne sélectionnée
}) => {
  const [hoveredColumn, setHoveredColumn] = useState(null);
  const [hoveredRow, setHoveredRow] = useState(null);

  useEffect(() => {
    if (!isModalOpen) {
      // Réinitialisez la clé de la ligne sélectionnée lorsque la modal est fermée
      setSelectedRowKey(null);
    }
  }, [isModalOpen, setSelectedRowKey]);

  const handleMouseEnter = (column) => {
    setHoveredColumn(column);
    setHoveredRow(true); // Met à true lorsque survolé
  };

  const handleMouseLeave = () => {
    setHoveredColumn(null);
    setHoveredRow(false); // Réinitialise à false lorsqu'il n'est plus survolé
  };

  return (
    <tr
      className={className}
      style={{
        backgroundColor: selectedRowKey === item.id ? customHoverRowBackgroundColor : 
                         hoveredRow ? customHoverRowBackgroundColor : customEvenRowBackgroundColor,
        ...(hoveredRow
          ? {
              filter: "saturate(0.9)",
              mixBlendMode: "multiply",
            }
          : {}),
      }}
      onMouseEnter={() => setHoveredRow(true)}
      onMouseLeave={() => setHoveredRow(false)}
      onClick={onCellClick} 
    >
      {columnsTable.map((column) => {
        const key = column.key;
        const value = item[key];
        const isSorted = sortBy === key;
        const isHovered = hoveredColumn === key;

        // Vérifiez si la colonne est de type "date" et si la valeur est une date valide
        if (column.type === "date" && value) {
          const formattedDate = formatLocalDate(value);
          return (
            <td
              key={key}
              className={isSorted ? customSortedColumnBackgroundColor : ""}
              style={{
                ...(isSorted && customSortedColumnBackgroundColor
                  ? {
                      backgroundColor: customSortedColumnBackgroundColor,
                      filter: "saturate(0.3)",
                      mixBlendMode: "multiply",
                    }
                  : {}),
                ...(isHovered && isSorted
                  ? {
                      backgroundColor: "#f0f0f0",
                      filter: "saturate(0.3)",
                      mixBlendMode: "multiply",
                    }
                  : {}),
              }}
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
              onClick={() => onCellClick(key, value)} // Gère le clic sur une cellule
            >
              {formattedDate}
            </td>
          );
        } else {
          return (
            <td
              key={key}
              className={isSorted ? customSortedColumnBackgroundColor : ""}
              style={{
                ...(isSorted && customSortedColumnBackgroundColor
                  ? {
                      backgroundColor: customSortedColumnBackgroundColor,
                      filter: "saturate(0.3)",
                      mixBlendMode: "multiply",
                    }
                  : {}),
                ...(isHovered && isSorted
                  ? {
                      backgroundColor: "#f0f0f0",
                      filter: "saturate(0.3)",
                      mixBlendMode: "multiply",
                    }
                  : {}),
              }}
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
              onClick={() => onCellClick(key, value)}
            >
              {value !== undefined ? value : ""}
            </td>
          );
        }
      })}
    </tr>
  );
};

export default EmployeeDataRow;
