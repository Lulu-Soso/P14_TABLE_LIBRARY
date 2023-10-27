import React, { useState } from "react";
import "./EditForm.css"
import { isValidPhoneNumber, isValidEmail } from "../utils/validations.js";

const EditForm = ({
  item,
  columnsTable,
  handleEdit,
  setEditedItem,
  customDarkBackgroundColor,
  customHoverBackgroundColor,
  setSelectedAction,
  customTextEditValidationBtn,
  customTextEditCancelBtn,
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

  /**
   * Gère le changement de valeur d'un champ de l'objet édité.
   *
   * @param {string} fieldName - Le nom du champ qui change.
   * @param {string} value - La nouvelle valeur du champ.
   */
  const handleFieldChange = (fieldName, value) => {
    value = value.trim(); // Supprime les espaces inutiles autour de la nouvelle valeur

    // Met à jour l'objet édité en utilisant une fonction de mise à jour du précédent état
    setEditedItem((prevData) => ({
      ...prevData, // Copie toutes les propriétés de l'objet édité précédent
      [fieldName]: value, // Met à jour la propriété spécifiée par le nom de champ avec la nouvelle valeur
    }));
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
            <span>
              {!isFieldValid(column, item[column.key]) && (
            <div className="validation-message">
              <p>!</p>
            </div>
          )}
            </span>
          )}
          {column.type === "email" && (
            <span>
              {!isFieldValid(column, item[column.key]) && (
            <div className="validation-message">
              <p>!</p>
            </div>
          )}
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
              : customDarkBackgroundColor,
          }}
          onMouseEnter={handleMouseEnterSave}
          onMouseLeave={handleMouseLeaveSave}
          onClick={handleEdit}
        >
          {customTextEditValidationBtn}
        </button>
        <button
          type="button"
          className="btn-edit-form"
          style={{
            backgroundColor: isHoveredCancel
              ? customHoverBackgroundColor
              : customDarkBackgroundColor,
          }}
          onMouseEnter={handleMouseEnterCancel}
          onMouseLeave={handleMouseLeaveCancel}
          onClick={() => setSelectedAction(null)}
        >
          {customTextEditCancelBtn}
        </button>
      </div>
    </form>
  );
};

export default EditForm;
