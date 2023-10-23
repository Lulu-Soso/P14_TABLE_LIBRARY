import React from "react";

/**
 * Composant de sélection de date.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.label - Libellé de la date.
 * @param {string} props.value - Valeur de la date.
 * @param {function} props.onChange - Fonction de rappel pour gérer les changements de date.
 */
const DateSelector = ({ type, label, value, onChange }) => {
  return (
    <div className="field">
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input
        className="date-selector"
        type={type}
        id={label.toLowerCase()}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default DateSelector;
