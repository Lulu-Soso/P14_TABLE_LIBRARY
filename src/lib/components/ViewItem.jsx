import React, { useState } from "react";
import "./ViewItem.css"
import { formatLocalDate } from "../utils/formatLocalDate"; // Importez votre fonction de formatage

const ViewItem = ({
  item,
  columnsTable,
  customTextViewCloseBtn,
  setSelectedAction,
  customDarkBackgroundColor,
  customHoverBackgroundColor,
}) => {
  const [isHoveredCancel, setIsHoveredCancel] = useState(false);

  const handleMouseEnterCancel = () => {
    setIsHoveredCancel(true);
  };

  const handleMouseLeaveCancel = () => {
    setIsHoveredCancel(false);
  };

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
      <div className="view-button">
        <button
          type="button"
          className="btn-edit-form"
          onClick={() => setSelectedAction(null)}
          style={{
            backgroundColor: isHoveredCancel
              ? customHoverBackgroundColor
              : customDarkBackgroundColor,
          }}
          onMouseEnter={handleMouseEnterCancel}
          onMouseLeave={handleMouseLeaveCancel}
        >
          {customTextViewCloseBtn}
        </button>
      </div>
    </>
  );
};

export default ViewItem;
