import React, { useState } from "react";
import { isValidPhoneNumber, isValidEmail } from "../utils/validations.js";

const EditForm = ({
  item,
  columnsTable,
  handleEdit,
  handleFieldChange,
  customDarkBackgroundColor,
  customHoverBackgroundColor,
  setSelectedAction
}) => {
  const [isHoveredSave, setIsHoveredSave] = useState(false);
  const [isHoveredCancel, setIsHoveredCancel] = useState(false);

  const handleMouseEnterSave = () => {
    setIsHoveredSave(true);
  };

  const handleMouseLeaveSave = () => {
    setIsHoveredSave(false);
  };

  const handleMouseEnterCancel = () => {
    setIsHoveredCancel(true);
  };

  const handleMouseLeaveCancel = () => {
    setIsHoveredCancel(false);
  };

  const isFieldValid = (column, value) => {
    if (column.type === "tel") {
      return isValidPhoneNumber(value);
    }
    if (column.type === "email") {
      return isValidEmail(value);
    }
    return true; // Si le champ n'est pas de type "tel" ou "email", on considère qu'il est valide
  };

  return (
    <form onSubmit={(e) => handleEdit(e, item)}>
      {columnsTable.map((column) => (
        <div key={column.key} className="editField">
          <label htmlFor={column.key}>{column.label}</label>
          {column.type === "text" && (
            <input
              type="text"
              id={column.key}
              name={column.key}
              value={item[column.key]}
              onChange={(e) => handleFieldChange(column.key, e.target.value)}
            />
          )}
          {column.type === "date" && (
            <input
              type="date"
              id={column.key}
              name={column.key}
              value={item[column.key]}
              onChange={(e) => handleFieldChange(column.key, e.target.value)}
            />
          )}
          {column.type === "number" && (
            <input
              type="number"
              id={column.key}
              name={column.key}
              value={item[column.key]}
              onChange={(e) => handleFieldChange(column.key, e.target.value)}
            />
          )}
          {column.type === "tel" && (
            <input
              type="tel"
              id={column.key}
              name={column.key}
              value={item[column.key]}
              onChange={(e) => handleFieldChange(column.key, e.target.value)}
            />
          )}
          {column.type === "email" && (
            <input
              type="email"
              id={column.key}
              name={column.key}
              value={item[column.key]}
              onChange={(e) => handleFieldChange(column.key, e.target.value)}
            />
          )}
          {column.type === "tel" && (
            <span className="validation-message">
              {!isFieldValid(column, item[column.key]) &&
                "Invalid phone number"}
            </span>
          )}
          {column.type === "email" && (
            <span className="validation-message">
              {!isFieldValid(column, item[column.key]) &&
                "Invalid email address"}
            </span>
          )}
        </div>
      ))}
      <div className="buttons-container">
        <button
          type="button"
          className="btn-edit-form"
          style={{
            backgroundColor: isHoveredSave
              ? customHoverBackgroundColor
              : customDarkBackgroundColor
          }}
          onMouseEnter={handleMouseEnterSave}
          onMouseLeave={handleMouseLeaveSave}
          onClick={handleEdit}
        >
          Save
        </button>
        <button
          type="button"
          className="btn-edit-form"
          style={{
            backgroundColor: isHoveredCancel
              ? customHoverBackgroundColor
              : customDarkBackgroundColor
          }}
          onMouseEnter={handleMouseEnterCancel}
          onMouseLeave={handleMouseLeaveCancel}
          onClick={() => setSelectedAction(null)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditForm;
