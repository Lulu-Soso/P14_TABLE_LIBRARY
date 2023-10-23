import React from "react";
import { formatLocalDate } from "../../utils/formatLocalDate"; // Importez votre fonction de formatage

const ViewItem = ({ item, columnsTable }) => {
  return (
    <>
      {columnsTable.map((column) => (
        <div className="itemDetail" key={column.key}>
          <div className="key-item">
            <strong>{column.label}</strong>
          </div>
          <div className="value-item">
            {column.type === "date" && item[column.key]
              ? formatLocalDate(item[column.key])
              : item[column.key]}
          </div>
        </div>
      ))}
    </>
  );
};

export default ViewItem;
