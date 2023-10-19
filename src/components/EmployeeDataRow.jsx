import React from 'react';

/**
 * Composant représentant une ligne de données d'employé dans un tableau.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.employee - Les données de l'employé.
 * @param {string} props.sortBy - La clé de la colonne utilisée pour le tri.
 * @param {string} props.className - La classe CSS à appliquer à la ligne de données.
 */
const EmployeeDataRow = ({ employee, sortBy, className }) => {
    // Convertit l'objet employee en un tableau de tableaux (clé-valeur)
    const employeeEntries = Object.entries(employee);

    return (
        <tr className={className}>
            {employeeEntries.map(([key, value]) => {
                if (key !== "id") {
                    return (
                        <td key={key} className={sortBy === key ? "sorted-column" : ""}>
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