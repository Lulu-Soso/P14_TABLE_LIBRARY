import React, { useState } from "react";
import { formatLocalDate } from "../utils/formatLocalDate";

const EmployeeDataRow = ({
  employee,
  sortBy,
  className,
  customSortedColumnBackgroundColor,
  customEvenRowBackgroundColor,
  onCellClick, // Ajoutez cette prop pour gérer le clic sur une cellule
  columnsTable, // Ajoutez la liste des colonnes
}) => {
  const [hoveredColumn, setHoveredColumn] = useState(null);

  const handleMouseEnter = (column) => {
    setHoveredColumn(column);
  };

  const handleMouseLeave = () => {
    setHoveredColumn(null);
  };

  return (
    <tr
      className={className}
      style={{ backgroundColor: customEvenRowBackgroundColor }}
    >
      {columnsTable.map((column) => {
        const key = column.key;
        const value = employee[key];
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
