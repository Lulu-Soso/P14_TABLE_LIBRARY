"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _usersData = _interopRequireDefault(require("../usersData.js"));
var _TableHeader = _interopRequireDefault(require("../components/TableHeader"));
var _EmployeeDataRow = _interopRequireDefault(require("../components/EmployeeDataRow"));
var _SearchField = _interopRequireDefault(require("../components/SearchField"));
var _EntriesInfo = _interopRequireDefault(require("../components/EntriesInfo"));
var _PaginatedTable = _interopRequireDefault(require("../components/PaginatedTable"));
var _FilterEntries = _interopRequireDefault(require("../components/FilterEntries"));
var _Modal = _interopRequireDefault(require("../components/Modal"));
require("./settings.css");
require("./SuperTable.css");
var _ViewItem = _interopRequireDefault(require("../components/ViewItem"));
var _fa = require("react-icons/fa6");
var _EditForm = _interopRequireDefault(require("../components/EditForm"));
var _DeleteItem = _interopRequireDefault(require("../components/DeleteItem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * @typedef {Object} Column - Définit une colonne dans la table.
 * @property {string} key - La clé unique de la colonne.
 * @property {string} label - Le libellé de la colonne.
 */
var columnsTableDefault = [{
  key: "firstName",
  label: "First Name",
  type: "text"
}, {
  key: "lastName",
  label: "Last Name",
  type: "text"
}, {
  key: "email",
  label: "Email",
  type: "email"
}, {
  key: "phoneNumber",
  label: "Phone Number",
  type: "tel"
}, {
  key: "dateOfBirth",
  label: "Date of Birth",
  type: "date"
}, {
  key: "address",
  label: "Address",
  type: "text"
}, {
  key: "zipCode",
  label: "Zip Code",
  type: "number"
}, {
  key: "country",
  label: "Country",
  type: "text"
}];
var SuperTable = function SuperTable(_ref) {
  var data = _ref.data,
    _ref$columnsTable = _ref.columnsTable,
    columnsTable = _ref$columnsTable === void 0 ? columnsTableDefault : _ref$columnsTable,
    _ref$customLabelFilte = _ref.customLabelFilter,
    customLabelFilter = _ref$customLabelFilte === void 0 ? "Number Of Entries" : _ref$customLabelFilte,
    _ref$customLabelSearc = _ref.customLabelSearch,
    customLabelSearch = _ref$customLabelSearc === void 0 ? "Search Bar" : _ref$customLabelSearc,
    _ref$customTextPrevio = _ref.customTextPrevious,
    customTextPrevious = _ref$customTextPrevio === void 0 ? "Previous Page" : _ref$customTextPrevio,
    _ref$customTextNext = _ref.customTextNext,
    customTextNext = _ref$customTextNext === void 0 ? "Next Page" : _ref$customTextNext,
    _ref$customEmptySearc = _ref.customEmptySearchMessage,
    customEmptySearchMessage = _ref$customEmptySearc === void 0 ? "No results found for your search." : _ref$customEmptySearc,
    _ref$customDeleteItem = _ref.customDeleteItemMessage,
    customDeleteItemMessage = _ref$customDeleteItem === void 0 ? "Are you sure you want to delete this item?" : _ref$customDeleteItem,
    _ref$customTextYesDel = _ref.customTextYesDeleteItemBtn,
    customTextYesDeleteItemBtn = _ref$customTextYesDel === void 0 ? "Yes" : _ref$customTextYesDel,
    _ref$customTextNoDele = _ref.customTextNoDeleteItemBtn,
    customTextNoDeleteItemBtn = _ref$customTextNoDele === void 0 ? "No" : _ref$customTextNoDele,
    _ref$customTextViewCl = _ref.customTextViewCloseBtn,
    customTextViewCloseBtn = _ref$customTextViewCl === void 0 ? "Close" : _ref$customTextViewCl,
    _ref$customTextEditVa = _ref.customTextEditValidationBtn,
    customTextEditValidationBtn = _ref$customTextEditVa === void 0 ? "Save" : _ref$customTextEditVa,
    _ref$customTextEditCa = _ref.customTextEditCancelBtn,
    customTextEditCancelBtn = _ref$customTextEditCa === void 0 ? "Cancel" : _ref$customTextEditCa,
    _ref$customSortedColu = _ref.customSortedColumnBackgroundColor,
    customSortedColumnBackgroundColor = _ref$customSortedColu === void 0 ? "#f6f6f6" : _ref$customSortedColu,
    _ref$customHoverBackg = _ref.customHoverBackgroundColor,
    customHoverBackgroundColor = _ref$customHoverBackg === void 0 ? "#aaaaaa" : _ref$customHoverBackg,
    _ref$customDarkBackgr = _ref.customDarkBackgroundColor,
    customDarkBackgroundColor = _ref$customDarkBackgr === void 0 ? "#929292" : _ref$customDarkBackgr,
    _ref$customEvenRowBac = _ref.customEvenRowBackgroundColor,
    customEvenRowBackgroundColor = _ref$customEvenRowBac === void 0 ? "#f0f0f0" : _ref$customEvenRowBac,
    _ref$customLightBackg = _ref.customLightBackgroundColor,
    customLightBackgroundColor = _ref$customLightBackg === void 0 ? "#d2d2d2" : _ref$customLightBackg,
    handleEditForm = _ref.handleEditForm,
    handleDeleteItem = _ref.handleDeleteItem,
    editButton = _ref.editButton,
    deleteButton = _ref.deleteButton;
  var initialData = data || _usersData["default"];

  // États pour gérer la page
  var _useState = (0, _react.useState)(initialData),
    _useState2 = _slicedToArray(_useState, 2),
    defaultData = _useState2[0],
    setDefaultData = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showEmptySearch = _useState4[0],
    setShowEmptySearch = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    sortBy = _useState6[0],
    setSortBy = _useState6[1];
  var _useState7 = (0, _react.useState)("asc"),
    _useState8 = _slicedToArray(_useState7, 2),
    sortOrder = _useState8[0],
    setSortOrder = _useState8[1];
  var _useState9 = (0, _react.useState)(10),
    _useState10 = _slicedToArray(_useState9, 2),
    entriesToShow = _useState10[0],
    setEntriesToShow = _useState10[1];
  var _useState11 = (0, _react.useState)(1),
    _useState12 = _slicedToArray(_useState11, 2),
    currentPage = _useState12[0],
    setCurrentPage = _useState12[1];
  var _useState13 = (0, _react.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    searchValue = _useState14[0],
    setSearchValue = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    selectedItem = _useState16[0],
    setSelectedItem = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    isModalOpen = _useState18[0],
    setIsModalOpen = _useState18[1];
  var _useState19 = (0, _react.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    selectedAction = _useState20[0],
    setSelectedAction = _useState20[1];
  var _useState21 = (0, _react.useState)(null),
    _useState22 = _slicedToArray(_useState21, 2),
    editedItem = _useState22[0],
    setEditedItem = _useState22[1]; // États pour gérer l'édition
  var _useState23 = (0, _react.useState)(true),
    _useState24 = _slicedToArray(_useState23, 2),
    isReversed = _useState24[0],
    setIsReversed = _useState24[1]; // Nouvel état pour l'ordre inverse
  var _useState25 = (0, _react.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    isArrowIconClicked = _useState26[0],
    setIsArrowIconClicked = _useState26[1];

  /**
   * Gère le changement de valeur d'un champ de l'objet édité.
   *
   * @param {string} fieldName - Le nom du champ qui change.
   * @param {string} value - La nouvelle valeur du champ.
   */
  var handleFieldChange = function handleFieldChange(fieldName, value) {
    // Supprime les espaces inutiles autour de la nouvelle valeur
    value = value.trim();

    // Met à jour l'objet édité en utilisant une fonction de mise à jour du précédent état
    setEditedItem(function (prevData) {
      return _objectSpread(_objectSpread({}, prevData), {}, _defineProperty({}, fieldName, value));
    });
  };
  var toggleReverseOrder = function toggleReverseOrder() {
    setIsReversed(!isReversed); // Inverser l'ordre d'affichage lorsque le bouton est cliqué
    setIsArrowIconClicked(!isArrowIconClicked);
  };

  /**
   * Inverse l'ordre de tri actuel.
   */
  var toggleSortOrder = function toggleSortOrder() {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  /**
   * Gère le clic sur l'en-tête de colonne pour changer le tri.
   * @param {string} columnName - La clé de la colonne sur laquelle l'utilisateur a cliqué.
   */
  var handleColumnClick = function handleColumnClick(columnName) {
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
  var sortedData = data ? data.slice() : defaultData.slice();
  if (isReversed) {
    sortedData.reverse(); // Inversez l'ordre des données
  } else {
    sortedData.sort(function (a, b) {
      if (sortBy === null) return 0;
      var aValue = a[sortBy];
      var bValue = b[sortBy];
      if (aValue == null || bValue == null) return 0;
      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortOrder === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      } else {
        return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
      }
    });
  }

  // Calcul du nombre total d'entrées et de pages
  var totalEntries = sortedData.length;
  var totalPages = Math.ceil(totalEntries / entriesToShow);

  /**
   * Gère le passage à la page précédente.
   */
  var handlePreviousPage = function handlePreviousPage() {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  /**
   * Gère le passage à la page suivante.
   */
  var handleNextPage = function handleNextPage() {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  /**
   * Gère le clic sur une page spécifique pour changer de page.
   * @param {number} page - Le numéro de page sur lequel l'utilisateur a cliqué.
   */
  var handlePageClick = function handlePageClick(page) {
    setCurrentPage(page);
    setEditedItem(null); // Fermez le formulaire d'édition en changeant de page
  };

  // Fonction pour générer les numéros de page à afficher
  var pageNumbers = getPageNumbers(totalPages, currentPage);

  /**
  * Génère les numéros de page à afficher en garantissant que cette liste contient un nombre spécifié de numéros de page consécutifs.
  *
  * @param {number} totalPages - Le nombre total de pages.
  * @param {number} currentPage - La page actuellement affichée.
  * @param {number} pagesToShow - Le nombre de pages à afficher.
  * @returns {Array} - Les numéros de page à afficher.
  */
  function getPageNumbers(totalPages, currentPage) {
    var pagesToShow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
    // Calcule la moitié du nombre de pages à afficher
    var halfWay = Math.ceil(pagesToShow / 2);

    // Calcule la première page à afficher
    var startPage = currentPage - halfWay + 1;

    // Calcule la dernière page à afficher
    var endPage = currentPage + halfWay - 1;

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
    var pages = [];

    // Génère la liste des numéros de page à afficher
    for (var i = startPage; i <= endPage; i++) {
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
  var paginatedData = sortedData.filter(function (item) {
    // Vérifie si la valeur de recherche est vide
    if (!searchValue) return true;

    // Convertit la valeur de recherche en minuscules pour une recherche insensible à la casse
    var searchLowerCase = searchValue.toLowerCase();

    // Vérifie si l'élément actuel correspond à la recherche dans les champs spécifiés
    return columnsTable.some(function (column) {
      var _item$column$key;
      // Récupère la valeur du champ et la convertit en chaîne de caractères en minuscules
      var fieldValue = ((_item$column$key = item[column.key]) !== null && _item$column$key !== void 0 ? _item$column$key : "").toString().toLowerCase();

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
  var handleSearchChange = function handleSearchChange(e) {
    setSearchValue(e.target.value);
    setCurrentPage(1);
  };

  /**
   * Gère le changement de valeur dans le champ de recherche.
   * @param {Object} e - L'événement de changement de valeur du champ de recherche.
   * @property {string} e.target.value - La valeur actuelle du champ de recherche.
   */
  var handleEntriesChange = function handleEntriesChange(e) {
    // Convertir la valeur du champ de recherche en nombre et la définir comme nouvelle valeur pour 'entriesToShow'
    setEntriesToShow(+e.target.value); // L'utilisation de + avant e.target.value convertit cette valeur en nombre
    setCurrentPage(1); // Réinitialiser la page actuelle à la première page lorsque le nombre d'entrées par page change
  };

  // Utilise useEffect pour afficher un message si la recherche est vide
  (0, _react.useEffect)(function () {
    setShowEmptySearch(paginatedData.length === 0);
  }, [paginatedData]);

  // Fonction pour ouvrir la modal et définir l'élément sélectionné
  var handleCellClick = function handleCellClick(item) {
    setSelectedItem(item);
    setSelectedAction(null); // Réinitialisez l'action sélectionnée
    setIsModalOpen(true);
  };

  // Fonction pour fermer la modal
  var closeModal = function closeModal() {
    setIsModalOpen(false);
  };

  // Fonction pour gérer l'action sélectionnée
  var handleActionClick = function handleActionClick(action) {
    setSelectedAction(action);
    if (action === "edit") {
      // Mettez à jour l'état editedItem avec les données de l'élément en cours d'édition
      setEditedItem(selectedItem);
    }
  };
  var handleEdit = function handleEdit() {
    if (handleEditForm) {
      handleEditForm(editedItem);
    } else {
      var updatedData = initialData.map(function (item) {
        return item.id === editedItem.id ? editedItem : item;
      });
      console.log(updatedData);
      setDefaultData(updatedData);
    }
    setIsModalOpen(false);
  };
  var handleDelete = function handleDelete(item) {
    if (handleDeleteItem) {
      // Appeler la fonction handleDeleteItem avec l'ID de l'élément à supprimer
      handleDeleteItem(item.id);
    } else {
      console.log("Deleting item with ID:", item.id);

      // Mettre à jour la copie des données (data) en supprimant l'élément
      var updatedData = initialData.filter(function (dataItem) {
        return dataItem.id !== item.id;
      });
      setDefaultData(updatedData); // Utilise setData pour mettre à jour les données // Mettre à jour la copie des données (data) en supprimant l'élément
    }

    setIsModalOpen(false);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "super-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "show-search"
  }, /*#__PURE__*/_react["default"].createElement(_FilterEntries["default"], {
    entriesToShow: entriesToShow,
    handleEntriesChange: handleEntriesChange,
    customLabelFilter: customLabelFilter
  }), /*#__PURE__*/_react["default"].createElement(_SearchField["default"], {
    searchValue: searchValue,
    handleSearchChange: handleSearchChange,
    customLabelSearch: customLabelSearch
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-container"
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: "employees-table"
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, columnsTable.map(function (column) {
    return /*#__PURE__*/_react["default"].createElement(_TableHeader["default"], {
      key: column.key,
      column: column,
      sortBy: sortBy,
      sortOrder: sortOrder,
      onClick: function onClick() {
        return handleColumnClick(column.key);
      },
      customSortedColumnBackgroundColor: customSortedColumnBackgroundColor,
      customHoverBackgroundColor: customHoverBackgroundColor
    });
  }))), /*#__PURE__*/_react["default"].createElement("tbody", null, paginatedData.map(function (employee, index) {
    return /*#__PURE__*/_react["default"].createElement(_EmployeeDataRow["default"], {
      key: employee.id,
      employee: employee,
      sortBy: sortBy,
      customSortedColumnBackgroundColor: customSortedColumnBackgroundColor,
      customEvenRowBackgroundColor: index % 2 !== 0 ? customEvenRowBackgroundColor : "",
      onCellClick: function onCellClick() {
        return handleCellClick(employee);
      },
      columnsTable: columnsTable
    });
  })))), showEmptySearch && /*#__PURE__*/_react["default"].createElement("div", {
    className: "error-message"
  }, /*#__PURE__*/_react["default"].createElement("p", null, customEmptySearchMessage)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-pagination"
  }, /*#__PURE__*/_react["default"].createElement(_EntriesInfo["default"], {
    currentPage: currentPage,
    entriesToShow: entriesToShow,
    totalEntries: totalEntries,
    customDarkBackgroundColor: customDarkBackgroundColor,
    customLightBackgroundColor: customLightBackgroundColor
  }), /*#__PURE__*/_react["default"].createElement(_PaginatedTable["default"], {
    handlePageClick: handlePageClick,
    handlePreviousPage: handlePreviousPage,
    handleNextPage: handleNextPage,
    pageNumbers: pageNumbers,
    currentPage: currentPage,
    customTextPrevious: customTextPrevious,
    customTextNext: customTextNext,
    customHoverBackgroundColor: customHoverBackgroundColor,
    customDarkBackgroundColor: customDarkBackgroundColor,
    customLightBackgroundColor: customLightBackgroundColor
  })), isModalOpen && /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
    isActiveModal: isModalOpen,
    closeModal: closeModal,
    customDarkBackgroundColor: customDarkBackgroundColor,
    customHoverBackgroundColor: customHoverBackgroundColor
  }, selectedAction === null && /*#__PURE__*/_react["default"].createElement("div", {
    className: "option-buttons"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: toggleReverseOrder,
    className: "rotation",
    style: {
      backgroundColor: isArrowIconClicked ? customLightBackgroundColor : ""
    }
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaArrowRightArrowLeft, null)), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return handleActionClick("view");
    }
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaEye, {
    className: "pen-trash-icons"
  })), editButton && /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return handleActionClick("edit");
    }
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaPen, {
    className: "pen-trash-icons"
  })), deleteButton && /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return handleActionClick("delete");
    }
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaTrashCan, {
    className: "pen-trash-icons"
  }))), selectedAction === "view" && selectedItem && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_ViewItem["default"], {
    item: selectedItem,
    columnsTable: columnsTable,
    customTextViewCloseBtn: customTextViewCloseBtn,
    setSelectedAction: setSelectedAction,
    customDarkBackgroundColor: customDarkBackgroundColor,
    customHoverBackgroundColor: customHoverBackgroundColor
  })), selectedAction === "edit" && editedItem && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_EditForm["default"], {
    item: editedItem,
    columnsTable: columnsTable,
    handleEdit: handleEdit,
    handleFieldChange: handleFieldChange,
    customDarkBackgroundColor: customDarkBackgroundColor,
    customHoverBackgroundColor: customHoverBackgroundColor,
    setSelectedAction: setSelectedAction,
    customTextEditValidationBtn: customTextEditValidationBtn,
    customTextEditCancelBtn: customTextEditCancelBtn,
    setEditedItem: setEditedItem
  })), selectedAction === "delete" && selectedItem && /*#__PURE__*/_react["default"].createElement(_DeleteItem["default"], {
    customDeleteItemMessage: customDeleteItemMessage,
    item: selectedItem,
    handleDelete: handleDelete,
    customTextYesDeleteItemBtn: customTextYesDeleteItemBtn,
    customTextNoDeleteItemBtn: customTextNoDeleteItemBtn,
    setSelectedAction: setSelectedAction,
    customDarkBackgroundColor: customDarkBackgroundColor,
    customHoverBackgroundColor: customHoverBackgroundColor
  })));
};
var _default = exports["default"] = SuperTable;