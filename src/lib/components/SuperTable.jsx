import React, { useEffect, useState } from "react";
import usersData from "../usersData.js";
import TableHeader from "../components/TableHeader";
import EmployeeDataRow from "../components/EmployeeDataRow";
import SearchField from "../components/SearchField";
import EntriesInfo from "../components/EntriesInfo";
import PaginatedTable from "../components/PaginatedTable";
import FilterEntries from "../components/FilterEntries";
import Modal from "../components/Modal";
import "./settings.css"
import "./SuperTable.css"
import ViewItem from "../components/ViewItem";
import {
  FaEye,
  FaPen,
  FaTrashCan,
  FaArrowRightArrowLeft,
} from "react-icons/fa6";
import EditForm from "../components/EditForm";
import DeleteItem from "../components/DeleteItem";

/**
 * @typedef {Object} Column - Définit une colonne dans la table.
 * @property {string} key - La clé unique de la colonne.
 * @property {string} label - Le libellé de la colonne.
 */
const columnsTableDefault = [
  { key: "firstName", label: "First Name", type: "text" },
  { key: "lastName", label: "Last Name", type: "text" },
  { key: "email", label: "Email", type: "email" },
  { key: "phoneNumber", label: "Phone Number", type: "tel" },
  { key: "dateOfBirth", label: "Date of Birth", type: "date" },
  { key: "address", label: "Address", type: "text" },
  { key: "zipCode", label: "Zip Code", type: "number" },
  { key: "country", label: "Country", type: "text" },
];

const SuperTable = ({
  data,
  columnsTable = columnsTableDefault,
  customLabelFilter = "Number Of Entries",
  customLabelSearch = "Search Bar",
  customTextPrevious = "Previous Page",
  customTextNext = "Next Page",
  customEmptySearchMessage = "No results found for your search.",
  customDeleteItemMessage = "Are you sure you want to delete this item?",
  customTextYesDeleteItemBtn = "Yes",
  customTextNoDeleteItemBtn = "No",
  customTextViewCloseBtn = "Close",
  customTextEditValidationBtn = "Save",
  customTextEditCancelBtn = "Cancel",
  customSortedColumnBackgroundColor = "#f6f6f6",
  customHoverBackgroundColor = "#aaaaaa",
  customDarkBackgroundColor = "#929292",
  customEvenRowBackgroundColor = "#f0f0f0",
  customLightBackgroundColor = "#d2d2d2",
  handleEditForm,
  handleDeleteItem,
  editButton,
  deleteButton,
}) => {
  const initialData = data || usersData;

  // États pour gérer la page
  const [defaultData, setDefaultData] = useState(initialData);
  const [showEmptySearch, setShowEmptySearch] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [entriesToShow, setEntriesToShow] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);
  const [editedItem, setEditedItem] = useState(null); // États pour gérer l'édition
  const [isReversed, setIsReversed] = useState(true); // Nouvel état pour l'ordre inverse
  const [isArrowIconClicked, setIsArrowIconClicked] = useState(false);

  /**
   * Gère le changement de valeur d'un champ de l'objet édité.
   *
   * @param {string} fieldName - Le nom du champ qui change.
   * @param {string} value - La nouvelle valeur du champ.
   */
  const handleFieldChange = (fieldName, value) => {
    // Supprime les espaces inutiles autour de la nouvelle valeur
    value = value.trim();

    // Met à jour l'objet édité en utilisant une fonction de mise à jour du précédent état
    setEditedItem((prevData) => ({
      ...prevData, // Copie toutes les propriétés de l'objet édité précédent
      [fieldName]: value, // Met à jour la propriété spécifiée par le nom de champ avec la nouvelle valeur
    }));
  };

  const toggleReverseOrder = () => {
    setIsReversed(!isReversed); // Inverser l'ordre d'affichage lorsque le bouton est cliqué
    setIsArrowIconClicked(!isArrowIconClicked);
  };

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
    setIsReversed(false); // Réinitialisez l'ordre inverse lorsque l'utilisateur clique sur une colonne
  };

  // const sortedData = data.slice();
  // const sortedData = userData.slice();
  const sortedData = data ? data.slice() : defaultData.slice();

  if (isReversed) {
    sortedData.reverse(); // Inversez l'ordre des données
  } else {
    sortedData.sort((a, b) => {
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
  }

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
    setEditedItem(null); // Fermez le formulaire d'édition en changeant de page
  };

  // Fonction pour générer les numéros de page à afficher
  const pageNumbers = getPageNumbers(totalPages, currentPage);

 /**
 * Génère les numéros de page à afficher en garantissant que cette liste contient un nombre spécifié de numéros de page consécutifs.
 *
 * @param {number} totalPages - Le nombre total de pages.
 * @param {number} currentPage - La page actuellement affichée.
 * @param {number} pagesToShow - Le nombre de pages à afficher.
 * @returns {Array} - Les numéros de page à afficher.
 */
function getPageNumbers(totalPages, currentPage, pagesToShow = 5) {
  // Calcule la moitié du nombre de pages à afficher
  const halfWay = Math.ceil(pagesToShow / 2);

  // Calcule la première page à afficher
  let startPage = currentPage - halfWay + 1;

  // Calcule la dernière page à afficher
  let endPage = currentPage + halfWay - 1;

  // Gère les cas où startPage ou endPage sont en dehors des limites
  if (startPage <= 0) {
    endPage -= startPage - 1;
    startPage = 1;
  }

  if (endPage > totalPages) {
    endPage = totalPages;
  }

  // Gère les cas où il y a une discontinuité dans les numéros de page
  // Supposons que pagesToShow (le nombre de numéros de page à afficher) soit défini sur 5 et que la currentPage (page actuellement affichée) soit 8. Sans ce code, la plage de numéros de page serait générée comme suit : 6, 7, 8, 9, 10. Cela signifie qu'il y aurait une discontinuité car la première page affichée dans la liste n'est pas "1".
  if (endPage - pagesToShow + 1 > 0) {
    startPage = endPage - pagesToShow + 1;
  }

  const pages = [];

  // Génère la liste des numéros de page à afficher
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  // Ajoute les boutons "1" et "dernière page" si nécessaire
  if (startPage !== 1) pages.unshift(1);
  if (endPage !== totalPages && totalPages !== 1) pages.push(totalPages);

  return pages;
}


  /**
   * Filtrage et pagination des données des éléments en fonction de la recherche.
   *
   * @param {Array.<Object>} sortedData - Les données des éléments triées.
   * @param {string} searchValue - La valeur de recherche.
   * @param {Array.<Object>} columnsTable - Les colonnes de la table contenant les données des éléments.
   * @param {number} currentPage - Le numéro de la page actuelle.
   * @param {number} entriesToShow - Le nombre d'entrées à afficher par page.
   * @returns {Array.<Object>} - Les données filtrées et paginées des éléments.
   */
  const paginatedData = sortedData
    .filter((item) => {
      // Vérifie si la valeur de recherche est vide
      if (!searchValue) return true;

      // Convertit la valeur de recherche en minuscules pour une recherche insensible à la casse
      const searchLowerCase = searchValue.toLowerCase();

      // Vérifie si l'élément actuel correspond à la recherche dans les champs spécifiés
      return columnsTable.some((column) => {
        // Récupère la valeur du champ et la convertit en chaîne de caractères en minuscules
        const fieldValue = (item[column.key] ?? "").toString().toLowerCase();

        // Vérifie si la valeur du champ inclut la valeur de recherche
        return fieldValue.includes(searchLowerCase);
      });
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

  // Fonction pour ouvrir la modal et définir l'élément sélectionné
  const handleCellClick = (item) => {
    setSelectedItem(item);
    setSelectedAction(null); // Réinitialisez l'action sélectionnée
    setIsModalOpen(true);
  };

  // Fonction pour fermer la modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Fonction pour gérer l'action sélectionnée
  const handleActionClick = (action) => {
    setSelectedAction(action);
    if (action === "edit") {
      // Mettez à jour l'état editedItem avec les données de l'élément en cours d'édition
      setEditedItem(selectedItem);
    }
  };

  const handleEdit = () => {
    if (handleEditForm) {
      handleEditForm(editedItem);
    } else {
      const updatedData = initialData.map((item) =>
        item.id === editedItem.id ? editedItem : item
      );
      console.log(updatedData);
      setDefaultData(updatedData);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (item) => {
    if (handleDeleteItem) {
      // Appeler la fonction handleDeleteItem avec l'ID de l'élément à supprimer
      handleDeleteItem(item.id);
    } else {
      console.log("Deleting item with ID:", item.id);

      // Mettre à jour la copie des données (data) en supprimant l'élément
      const updatedData = initialData.filter(
        (dataItem) => dataItem.id !== item.id
      );
      setDefaultData(updatedData); // Utilise setData pour mettre à jour les données // Mettre à jour la copie des données (data) en supprimant l'élément
    }
    setIsModalOpen(false);
  };

  return (
    <div className="super-container">
      {/* <div className="employees-header"> */}
        <div className="show-search">
          <FilterEntries
            entriesToShow={entriesToShow}
            handleEntriesChange={handleEntriesChange}
            customLabelFilter={customLabelFilter}
          />

          <SearchField
            searchValue={searchValue}
            handleSearchChange={handleSearchChange}
            customLabelSearch={customLabelSearch}
          />
        </div>
      {/* </div> */}

      <div className="table-container">
        <table className="employees-table">
          <thead>
            <tr>
              {columnsTable.map((column) => (
                <TableHeader
                  key={column.key}
                  column={column}
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                  onClick={() => handleColumnClick(column.key)}
                  customSortedColumnBackgroundColor={
                    customSortedColumnBackgroundColor
                  }
                  customHoverBackgroundColor={customHoverBackgroundColor}
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
                customSortedColumnBackgroundColor={
                  customSortedColumnBackgroundColor
                }
                customEvenRowBackgroundColor={
                  index % 2 !== 0 ? customEvenRowBackgroundColor : ""
                }
                onCellClick={() => handleCellClick(employee)}
                columnsTable={columnsTable}
              />
            ))}
          </tbody>
        </table>
      </div>

      {showEmptySearch && (
        <div className="error-message">
          <p>{customEmptySearchMessage}</p>
        </div>
      )}

      <div className="flex-pagination">
        <EntriesInfo
          currentPage={currentPage}
          entriesToShow={entriesToShow}
          totalEntries={totalEntries}
          customDarkBackgroundColor={customDarkBackgroundColor}
          customLightBackgroundColor={customLightBackgroundColor}
        />

        <PaginatedTable
          handlePageClick={handlePageClick}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
          pageNumbers={pageNumbers}
          currentPage={currentPage}
          customTextPrevious={customTextPrevious}
          customTextNext={customTextNext}
          customHoverBackgroundColor={customHoverBackgroundColor}
          customDarkBackgroundColor={customDarkBackgroundColor}
          customLightBackgroundColor={customLightBackgroundColor}
        />
      </div>

      {isModalOpen && (
        <Modal
          isActiveModal={isModalOpen}
          closeModal={closeModal}
          customDarkBackgroundColor={customDarkBackgroundColor}
          customHoverBackgroundColor={customHoverBackgroundColor}
        >
          {/* Afficher la liste de boutons d'action si aucune action n'est sélectionnée */}
          {selectedAction === null && (
            <div className="option-buttons">
              <button onClick={toggleReverseOrder} className="rotation" style={{ backgroundColor: isArrowIconClicked ? customLightBackgroundColor : "" }}>
                <FaArrowRightArrowLeft />
              </button>
              <button onClick={() => handleActionClick("view")}>
                <FaEye className="pen-trash-icons" />
              </button>
              {editButton && (
                <button onClick={() => handleActionClick("edit")}>
                  <FaPen className="pen-trash-icons" />
                </button>
              )}
              {deleteButton && (
                <button onClick={() => handleActionClick("delete")}>
                  <FaTrashCan className="pen-trash-icons" />
                </button>
              )}
            </div>
          )}

          {/* Afficher les détails de l'élément sélectionné si l'action est "Aperçu" */}
          {selectedAction === "view" && selectedItem && (
            <div>
              <ViewItem
                item={selectedItem}
                columnsTable={columnsTable}
                customTextViewCloseBtn={customTextViewCloseBtn}
                setSelectedAction={setSelectedAction}
                customDarkBackgroundColor={customDarkBackgroundColor}
                customHoverBackgroundColor={customHoverBackgroundColor}
              />
            </div>
          )}

          {selectedAction === "edit" && editedItem && (
            <div>
              <EditForm
                item={editedItem}
                columnsTable={columnsTable}
                handleEdit={handleEdit}
                handleFieldChange={handleFieldChange}
                customDarkBackgroundColor={customDarkBackgroundColor}
                customHoverBackgroundColor={customHoverBackgroundColor}
                setSelectedAction={setSelectedAction}
                customTextEditValidationBtn={customTextEditValidationBtn}
                customTextEditCancelBtn={customTextEditCancelBtn}
                setEditedItem={setEditedItem}
              />
            </div>
          )}
          {selectedAction === "delete" && selectedItem && (
            <DeleteItem
              customDeleteItemMessage={customDeleteItemMessage}
              item={selectedItem}
              handleDelete={handleDelete}
              customTextYesDeleteItemBtn={customTextYesDeleteItemBtn}
              customTextNoDeleteItemBtn={customTextNoDeleteItemBtn}
              setSelectedAction={setSelectedAction}
              customDarkBackgroundColor={customDarkBackgroundColor}
              customHoverBackgroundColor={customHoverBackgroundColor}
            />
          )}
        </Modal>
      )}
    </div>
  );
};

export default SuperTable;
