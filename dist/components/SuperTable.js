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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
  label: "First Name"
}, {
  key: "lastName",
  label: "Last Name"
}, {
  key: "email",
  label: "Email"
}, {
  key: "phoneNumber",
  label: "Phone Number"
}, {
  key: "dateOfBirth",
  label: "Date of Birth"
}, {
  key: "address",
  label: "Address"
}, {
  key: "zipCode",
  label: "Zip Code"
}, {
  key: "country",
  label: "Country"
}];
var SuperTable = function SuperTable(_ref) {
  var _ref$data = _ref.data,
    data = _ref$data === void 0 ? _usersData["default"] : _ref$data,
    _ref$columnsTable = _ref.columnsTable,
    columnsTable = _ref$columnsTable === void 0 ? columnsTableDefault : _ref$columnsTable,
    _ref$customLabelFilte = _ref.customLabelFilter,
    customLabelFilter = _ref$customLabelFilte === void 0 ? "Display By Page Number" : _ref$customLabelFilte,
    _ref$customLabelSearc = _ref.customLabelSearch,
    customLabelSearch = _ref$customLabelSearc === void 0 ? "Search Bar" : _ref$customLabelSearc,
    _ref$customTextPrevio = _ref.customTextPrevious,
    customTextPrevious = _ref$customTextPrevio === void 0 ? "Previous Page" : _ref$customTextPrevio,
    _ref$customTextNext = _ref.customTextNext,
    customTextNext = _ref$customTextNext === void 0 ? "Next Page" : _ref$customTextNext,
    _ref$customEmptySearc = _ref.customEmptySearchMessage,
    customEmptySearchMessage = _ref$customEmptySearc === void 0 ? "No results found for your search." : _ref$customEmptySearc,
    _ref$customSortedColu = _ref.customSortedColumnBackgroundColor,
    customSortedColumnBackgroundColor = _ref$customSortedColu === void 0 ? "#f6f6f6" : _ref$customSortedColu,
    _ref$customHoverBackg = _ref.customHoverBackgroundColor,
    customHoverBackgroundColor = _ref$customHoverBackg === void 0 ? "#aaaaaa" : _ref$customHoverBackg,
    _ref$customDarkBackgr = _ref.customDarkBackgroundColor,
    customDarkBackgroundColor = _ref$customDarkBackgr === void 0 ? "#929292" : _ref$customDarkBackgr,
    _ref$customEvenRowBac = _ref.customEvenRowBackgroundColor,
    customEvenRowBackgroundColor = _ref$customEvenRowBac === void 0 ? "#f0f0f0" : _ref$customEvenRowBac,
    _ref$customLightBackg = _ref.customLightBackgroundColor,
    customLightBackgroundColor = _ref$customLightBackg === void 0 ? "#d2d2d2" : _ref$customLightBackg;
  // États pour gérer la page
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showEmptySearch = _useState2[0],
    setShowEmptySearch = _useState2[1];
  var _useState3 = (0, _react.useState)("firstName"),
    _useState4 = _slicedToArray(_useState3, 2),
    sortBy = _useState4[0],
    setSortBy = _useState4[1];
  var _useState5 = (0, _react.useState)("asc"),
    _useState6 = _slicedToArray(_useState5, 2),
    sortOrder = _useState6[0],
    setSortOrder = _useState6[1];
  var _useState7 = (0, _react.useState)(10),
    _useState8 = _slicedToArray(_useState7, 2),
    entriesToShow = _useState8[0],
    setEntriesToShow = _useState8[1];
  var _useState9 = (0, _react.useState)(1),
    _useState10 = _slicedToArray(_useState9, 2),
    currentPage = _useState10[0],
    setCurrentPage = _useState10[1];
  var _useState11 = (0, _react.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    searchValue = _useState12[0],
    setSearchValue = _useState12[1];

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
  };

  // Fonction pour trier les données des employés
  var sortedData = data.slice().sort(function (a, b) {
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
  };

  // Fonction pour générer les numéros de page à afficher
  var pageNumbers = getPageNumbers(totalPages, currentPage);

  /**
   * Génère les numéros de page à afficher.
   * @param {number} totalPages - Le nombre total de pages.
   * @param {number} currentPage - La page actuellement affichée.
   * @param {number} pagesToShow - Le nombre de pages à afficher.
   * @returns {Array} - Les numéros de page à afficher.
   */
  function getPageNumbers(totalPages, currentPage) {
    var pagesToShow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
    var halfWay = Math.ceil(pagesToShow / 2);
    var startPage = currentPage - halfWay + 1;
    var endPage = currentPage + halfWay - 1;
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
    var pages = [];
    for (var i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    if (startPage !== 1) pages.unshift(1);
    if (endPage !== totalPages && totalPages !== 1) pages.push(totalPages);
    return pages;
  }

  // Fonction pour filtrer les données des employés en fonction de la recherche
  var paginatedData = sortedData.filter(function (employee) {
    var _employee$firstName, _employee$lastName, _employee$birthDate, _employee$startDate, _employee$street, _employee$city, _employee$state, _employee$zipCode, _employee$department;
    // Vérifie si la valeur de recherche est vide
    if (!searchValue) return true;

    // Convertit la valeur de recherche en minuscules pour une recherche insensible à la casse
    var searchLowerCase = searchValue.toLowerCase();

    // Vérifie si l'employé actuel correspond à la recherche dans plusieurs champs
    return (
      // opérateur de coalescence nulle (??), nous attribuons une chaîne vide "" à chaque champ de l'objet employee s'il est null ou undefined, puis nous appliquons toLowerCase() sur chaque champ en toute sécurité sans risquer de provoquer une erreur "Cannot read properties of undefined".
      ((_employee$firstName = employee.firstName) !== null && _employee$firstName !== void 0 ? _employee$firstName : "").toLowerCase().includes(searchLowerCase) ||
      // Vérifie le prénom
      ((_employee$lastName = employee.lastName) !== null && _employee$lastName !== void 0 ? _employee$lastName : "").toLowerCase().includes(searchLowerCase) || ((_employee$birthDate = employee.birthDate) !== null && _employee$birthDate !== void 0 ? _employee$birthDate : "").toLowerCase().includes(searchLowerCase) || ((_employee$startDate = employee.startDate) !== null && _employee$startDate !== void 0 ? _employee$startDate : "").toLowerCase().includes(searchLowerCase) || ((_employee$street = employee.street) !== null && _employee$street !== void 0 ? _employee$street : "").toLowerCase().includes(searchLowerCase) || ((_employee$city = employee.city) !== null && _employee$city !== void 0 ? _employee$city : "").toLowerCase().includes(searchLowerCase) || ((_employee$state = employee.state) !== null && _employee$state !== void 0 ? _employee$state : "").toLowerCase().includes(searchLowerCase) || ((_employee$zipCode = employee.zipCode) !== null && _employee$zipCode !== void 0 ? _employee$zipCode : "").toLowerCase().includes(searchLowerCase) || ((_employee$department = employee.department) !== null && _employee$department !== void 0 ? _employee$department : "").toLowerCase().includes(searchLowerCase)
    );
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
    // dispatch(setSearch(e.target.value));
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
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "app-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "employees-header"
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
  }))), /*#__PURE__*/_react["default"].createElement("table", {
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
      customEvenRowBackgroundColor: index % 2 !== 0 ? customEvenRowBackgroundColor : ""
    });
  }))), showEmptySearch && /*#__PURE__*/_react["default"].createElement("div", {
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
  })));
};
var _default = exports["default"] = SuperTable;