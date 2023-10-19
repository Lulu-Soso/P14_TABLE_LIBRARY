"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * Composant pour afficher un champ de recherche.
 *
 * @param {string} searchValue - La valeur actuelle du champ de recherche.
 * @param {function} handleSearchChange - La fonction pour gérer le changement de valeur dans le champ de recherche.
 * @returns {JSX.Element} - Le composant du champ de recherche.
 */
var SearchField = function SearchField(_ref) {
  var searchValue = _ref.searchValue,
    handleSearchChange = _ref.handleSearchChange,
    customLabelSearch = _ref.customLabelSearch;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "search"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "search"
  }, customLabelSearch), /*#__PURE__*/_react["default"].createElement("input", {
    id: "search",
    type: "text",
    value: searchValue,
    onChange: handleSearchChange
  }));
};
var _default = exports["default"] = SearchField;