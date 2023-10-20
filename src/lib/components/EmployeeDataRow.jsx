import React, { useState } from "react";

const EmployeeDataRow = ({
  employee,
  sortBy,
  className,
  customSortedColumnBackgroundColor,
  customEvenRowBackgroundColor,
}) => {
  const [hoveredColumn, setHoveredColumn] = useState(null);

  const handleMouseEnter = (column) => {
    setHoveredColumn(column);
  };

  const handleMouseLeave = () => {
    setHoveredColumn(null);
  };

  const employeeEntries = Object.entries(employee);

  return (
    <tr
      className={className}
      style={{ backgroundColor: customEvenRowBackgroundColor }}
    >
      {employeeEntries.map(([key, value]) => {
        if (key !== "id") {
          const isSorted = sortBy === key;
          const isHovered = hoveredColumn === key;
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
            >
              {value}
            </td>
          );
        }
        return null; // Retourne null pour la clé 'id' afin qu'elle ne soit pas rendue
      })}
    </tr>
  );
};

export default EmployeeDataRow;
