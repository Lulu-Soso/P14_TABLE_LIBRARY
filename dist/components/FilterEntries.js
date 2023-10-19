"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * Composant pour filtrer le nombre d'entrées à afficher par page.
 *
 * @param {number} entriesToShow - Le nombre d'entrées actuellement affichées par page.
 * @param {Function} handleEntriesChange - La fonction de gestion du changement du nombre d'entrées.
 * @returns {JSX.Element} - Le composant de filtre d'entrées.
 */
var FilterEntries = function FilterEntries(_ref) {
  var entriesToShow = _ref.entriesToShow,
    handleEntriesChange = _ref.handleEntriesChange,
    customLabelFilter = _ref.customLabelFilter;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "filter"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "show"
  }, customLabelFilter), /*#__PURE__*/_react["default"].createElement("select", {
    className: "filter-select",
    name: "state",
    id: "show",
    value: entriesToShow,
    onChange: handleEntriesChange
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "100"
  }, "100")));
};
var _default = exports["default"] = FilterEntries;