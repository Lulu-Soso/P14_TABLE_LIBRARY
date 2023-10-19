import React from "react";

/**
 * Composant de formulaire déroulant.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.label - Libellé du formulaire déroulant.
 * @param {Array} props.options - Options du formulaire déroulant sous forme de tableau d'objets.
 * @param {string} props.value - Valeur sélectionnée dans le formulaire déroulant.
 * @param {function} props.onChange - Fonction de rappel pour gérer les changements de valeur du formulaire déroulant.
 */
const DropdownForm = ({ label, options, value, onChange }) => {
  return (
    <div className="field">
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <select
        id={label.toLowerCase()}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownForm;
