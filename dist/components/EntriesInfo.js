"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./EntriesInfo.css");
var _Component_ = _interopRequireDefault(require("../assets/Component_9-1.svg"));
var _Component_2 = _interopRequireDefault(require("../assets/Component_1-9.svg"));
var _ComponentAZ = _interopRequireDefault(require("../assets/Component-A-z.svg"));
var _Component_ZA = _interopRequireDefault(require("../assets/Component_Z-a.svg"));
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
    customLightBackgroundColor = _ref.customLightBackgroundColor,
    toggleReverseOrder = _ref.toggleReverseOrder,
    isReversed = _ref.isReversed,
    handleColumnClick = _ref.handleColumnClick,
    sortOrder = _ref.sortOrder,
    orderAlpha = _ref.orderAlpha;
  return (
    /*#__PURE__*/
    // <div className="entries-info">
    _react["default"].createElement("div", {
      className: "entries"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        backgroundColor: customDarkBackgroundColor
      }
    }, (currentPage - 1) * entriesToShow + 1, "...", Math.min(currentPage * entriesToShow, totalEntries)), /*#__PURE__*/_react["default"].createElement("p", {
      style: {
        backgroundColor: customLightBackgroundColor
      }
    }, totalEntries), /*#__PURE__*/_react["default"].createElement("div", {
      className: "btn-info"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: isReversed ? _Component_["default"] : _Component_2["default"],
      alt: "",
      className: "curser",
      onClick: toggleReverseOrder
    }), orderAlpha && (sortOrder === "asc" ? /*#__PURE__*/_react["default"].createElement("img", {
      src: _ComponentAZ["default"],
      alt: ""
    }) : /*#__PURE__*/_react["default"].createElement("img", {
      src: _Component_ZA["default"],
      alt: ""
    }))))
  );
};
var _default = exports["default"] = EntriesInfo;