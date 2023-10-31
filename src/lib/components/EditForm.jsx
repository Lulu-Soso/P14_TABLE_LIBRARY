import React, { useState } from "react";
import "./EditForm.css";
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
  const [fieldErrors, setFieldErrors] = useState({});

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

  const isFieldValid = (column, value, validEmptyField = false) => {
    if (column.type === "tel") {
      if (validEmptyField && value === "") {
        return true; // Champ vide est autorisé
      }
      return isValidPhoneNumber(value);
    }
    if (column.type === "email") {
      if (validEmptyField && value === "") {
        return true; // Champ vide est autorisé
      }
      return isValidEmail(value);
    }

    // Si le champ n'est pas de type "tel" ou "email" et s'il est vide, retournez false
    if (column.noEmptyField && value.trim() === "") {
      return false;
    }

    return true; // Si le champ n'est pas de type "tel" ou "email" ou s'il n'est pas vide, on considère qu'il est valide
  };

  /**
   * Gère le changement de valeur d'un champ de l'objet édité.
   *
   * @param {string} fieldName - Le nom du champ qui change.
   * @param {string} value - La nouvelle valeur du champ.
   */
  const handleFieldChange = (fieldName, value) => {
    value = value.trim(); // Supprime les espaces inutiles autour de la nouvelle valeur
    const column = columnsTable.find((col) => col.key === fieldName);
    const newErrors = { ...fieldErrors };

    if (column.isRequired && value === "") {
      if (!column.optional) {
        newErrors[fieldName] = column.errorMessage || "The field cannot be empty.";
      } else {
        delete newErrors[fieldName]; // Supprime l'erreur si le champ est vide et validEmptyField est true
      }
    } else if (!isFieldValid(column, value, column.optional)) {
      newErrors[fieldName] = column.errorMessage || "Invalid field";
    } else {
      delete newErrors[fieldName]; // Supprime l'erreur si le champ est valide
    }
    setFieldErrors(newErrors);

    // Met à jour l'objet édité en utilisant une fonction de mise à jour du précédent état
    setEditedItem((prevData) => ({
      ...prevData, // Copie toutes les propriétés de l'objet édité précédent
      [fieldName]: value, // Met à jour la propriété spécifiée par le nom de champ avec la nouvelle valeur
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (Object.keys(fieldErrors).length === 0) {
          handleEdit(item);
        }
      }}
    >
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

          {/* ... Autres types de champs ici */}
          {fieldErrors[column.key] && (
            <span className="error-edit-message">
              {fieldErrors[column.key]}
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
          onClick={() => {
            if (Object.keys(fieldErrors).length === 0) {
              handleEdit(item);
            }
          }}
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
