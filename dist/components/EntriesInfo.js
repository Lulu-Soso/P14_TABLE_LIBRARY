"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./EntriesInfo.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * Composant pour afficher des informations sur les entrées affichées.
 *
 * @param {number} currentPage - Le numéro de la page actuelle.
 * @param {number} entriesToShow - Le nombre d'entrées à afficher par page.
 * @param {number} totalEntries - Le nombre total d'entrées.
 * @returns {JSX.Element} - Le composant d'informations sur les entrées.
 */
var EntriesInfo = function EntriesInfo(_ref) {
  var currentPage = _ref.currentPage,
    entriesToShow = _ref.entriesToShow,
    totalEntries = _ref.totalEntries,
    customDarkBackgroundColor = _ref.customDarkBackgroundColor,
    customLightBackgroundColor = _ref.customLightBackgroundColor;
  return (
    /*#__PURE__*/
    // <div className="entries-info">
    _react["default"].createElement("div", {
      className: "entries"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        backgroundColor: customDarkBackgroundColor
      }
    }, (currentPage - 1) * entriesToShow + 1, "...", " ", Math.min(currentPage * entriesToShow, totalEntries)), /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        backgroundColor: customLightBackgroundColor
      }
    }, totalEntries))
  );
};
var _default = exports["default"] = EntriesInfo;