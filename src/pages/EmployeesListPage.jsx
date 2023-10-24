import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmployeesData,
  setError,
  setSearch,
} from "../feature/employees.slice";
import TableHeader from "../components/TableHeader";
import EmployeeDataRow from "../components/EmployeeDataRow";
import FilterEntries from "../components/FilterEntries";
import SearchField from "../components/SearchField";
import EntriesInfo from "../components/EntriesInfo";
import PaginatedTable from "../components/PaginatedTable";
import { formatLocalDate } from "../utils/formatLocalDate";


/**
 * @typedef {Object} Column - Définit une colonne dans la table.
 * @property {string} key - La clé unique de la colonne.
 * @property {string} label - Le libellé de la colonne.
 */
const columns = [
  { key: "firstName", label: "First Name" },
  { key: "lastName", label: "Last Name" },
  { key: "birthDate", label: "Date of Birth" },
  { key: "startDate", label: "Start Date" },
  { key: "street", label: "Street" },
  { key: "city", label: "City" },
  { key: "state", label: "State" },
  { key: "zipCode", label: "Zip Code" },
  { key: "department", label: "Department" },
];

/**
 * Composant de la page de liste des employés.
 * @component
 */
const EmployeesListPage = () => {
  // États pour gérer la page
  const [showEmptySearch, setShowEmptySearch] = useState(false);
  const [sortBy, setSortBy] = useState("firstName");
  const [sortOrder, setSortOrder] = useState("asc");
  const [entriesToShow, setEntriesToShow] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  // Sélectionner les données des employés depuis le Redux store
  const employeesData = useSelector((state) => state.employees.employeesData);
  const dispatch = useDispatch();

  /**
   * Utilise useEffect pour récupérer les données des employés depuis l'API.
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/employees");
        dispatch(setEmployeesData(response.data));
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
        dispatch(setError(error.message));
      }
    };

    fetchData();
  }, [dispatch]);

  /**
   * Inverse l'ordre de tri actuel.
   */
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  /**
   * Gère le clic sur l'en-tête de colonne pour changer le tri.
   * @param {string} columnName - La clé de la colonne sur laquelle l'utilisateur a cliqué.
   */
  const handleColumnClick = (columnName) => {
    if (sortBy === columnName) {
      toggleSortOrder();
    } else {
      setSortBy(columnName);
      setSortOrder("asc");
    }
  };

  // Fonction pour trier les données des employés
  const sortedData = employeesData.slice().sort((a, b) => {
    if (sortBy === null) return 0;

    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (aValue == null || bValue == null) return 0;

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortOrder === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    } else {
      return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    }
  });

  // Calcul du nombre total d'entrées et de pages
  const totalEntries = sortedData.length;
  const totalPages = Math.ceil(totalEntries / entriesToShow);

  /**
   * Gère le passage à la page précédente.
   */
  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  /**
   * Gère le passage à la page suivante.
   */
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  /**
   * Gère le clic sur une page spécifique pour changer de page.
   * @param {number} page - Le numéro de page sur lequel l'utilisateur a cliqué.
   */
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // Fonction pour générer les numéros de page à afficher
  const pageNumbers = getPageNumbers(totalPages, currentPage);

  /**
   * Génère les numéros de page à afficher.
   * @param {number} totalPages - Le nombre total de pages.
   * @param {number} currentPage - La page actuellement affichée.
   * @param {number} pagesToShow - Le nombre de pages à afficher.
   * @returns {Array} - Les numéros de page à afficher.
   */
  function getPageNumbers(totalPages, currentPage, pagesToShow = 5) {
    const halfWay = Math.ceil(pagesToShow / 2);
    let startPage = currentPage - halfWay + 1;
    let endPage = currentPage + halfWay - 1;

    if (startPage <= 0) {
      endPage -= startPage - 1;
      startPage = 1;
    }

    if (endPage > totalPages) {
      endPage = totalPages;
    }

    if (endPage - pagesToShow + 1 > 0) {
      startPage = endPage - pagesToShow + 1;
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (startPage !== 1) pages.unshift(1);
    if (endPage !== totalPages && totalPages !== 1) pages.push(totalPages);

    return pages;
  }

  // Fonction pour filtrer les données des employés en fonction de la recherche
  const paginatedData = sortedData
    .filter((employee) => {
      // Vérifie si la valeur de recherche est vide
      if (!searchValue) return true;

      // Convertit la valeur de recherche en minuscules pour une recherche insensible à la casse
      const searchLowerCase = searchValue.toLowerCase();

      // Vérifie si l'employé actuel correspond à la recherche dans plusieurs champs
      return (
        // opérateur de coalescence nulle (??), nous attribuons une chaîne vide "" à chaque champ de l'objet employee s'il est null ou undefined, puis nous appliquons toLowerCase() sur chaque champ en toute sécurité sans risquer de provoquer une erreur "Cannot read properties of undefined".
        (employee.firstName ?? "").toLowerCase().includes(searchLowerCase) || // Vérifie le prénom
        (employee.lastName ?? "").toLowerCase().includes(searchLowerCase) ||
        (employee.birthDate ?? "").toLowerCase().includes(searchLowerCase) ||
        (employee.startDate ?? "").toLowerCase().includes(searchLowerCase) ||
        (employee.street ?? "").toLowerCase().includes(searchLowerCase) ||
        (employee.city ?? "").toLowerCase().includes(searchLowerCase) ||
        (employee.state ?? "").toLowerCase().includes(searchLowerCase) ||
        (employee.zipCode ?? "").toLowerCase().includes(searchLowerCase) ||
        (employee.department ?? "").toLowerCase().includes(searchLowerCase)
      );
    })
    // Effectue une pagination en tranchant les données filtrées en fonction de la page actuelle et du nombre d'entrées à afficher par page
    .slice((currentPage - 1) * entriesToShow, currentPage * entriesToShow);

  /**
   * Gère le changement de valeur dans le champ de recherche.
   * @param {Object} e - L'événement de changement de valeur du champ de recherche.
   */
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    setCurrentPage(1);
    dispatch(setSearch(e.target.value));
  };

  /**
   * Gère le changement de valeur dans le champ de recherche.
   * @param {Object} e - L'événement de changement de valeur du champ de recherche.
   * @property {string} e.target.value - La valeur actuelle du champ de recherche.
   */
  const handleEntriesChange = (e) => {
    // Convertir la valeur du champ de recherche en nombre et la définir comme nouvelle valeur pour 'entriesToShow'
    setEntriesToShow(+e.target.value); // L'utilisation de + avant e.target.value convertit cette valeur en nombre
    setCurrentPage(1); // Réinitialiser la page actuelle à la première page lorsque le nombre d'entrées par page change
  };

  // Utilise useEffect pour afficher un message si la recherche est vide
  useEffect(() => {
    setShowEmptySearch(paginatedData.length === 0);
  }, [paginatedData]);

  return (
    <>
      <div className="employees-header">
        <h2>Current Employees</h2>
        <div className="show-search">
          <FilterEntries
            entriesToShow={entriesToShow}
            handleEntriesChange={handleEntriesChange}
          />

          <SearchField
            searchValue={searchValue}
            handleSearchChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="table-container">
        <table className="employees-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <TableHeader
                  key={column.key}
                  column={column}
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                  onClick={() => handleColumnClick(column.key)}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((employee, index) => (
              <EmployeeDataRow
                key={employee.id}
                employee={employee}
                sortBy={sortBy}
                className={index % 2 === 0 ? "table-row-odd" : "table-row-even"}
                formatLocalDate={formatLocalDate} // Passe la fonction de formatage de date
              />
            ))}
          </tbody>
        </table>
      </div>

      {showEmptySearch && (
        <div className="error-message">
          <p>No results found for your search.</p>
        </div>
      )}

      <div className="flex-pagination">
        <EntriesInfo
          currentPage={currentPage}
          entriesToShow={entriesToShow}
          totalEntries={totalEntries}
        />

        <PaginatedTable
          handlePageClick={handlePageClick}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
          pageNumbers={pageNumbers}
          currentPage={currentPage}
        />
      </div>
      <div className="link-employee">
        <Link to="/employees/create">Create Employee</Link>
      </div>
    </>
  );
};

export default EmployeesListPage;
