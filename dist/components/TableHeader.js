"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
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
 * Composant pour afficher l'en-tête d'une colonne de tableau.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.column - Les informations sur la colonne.
 * @param {string} props.column.key - La clé unique de la colonne.
 * @param {string} props.column.label - Le libellé de la colonne.
 * @param {string} props.sortBy - La clé de la colonne selon laquelle trier.
 * @param {string} props.sortOrder - L'ordre de tri (ascendant ou descendant).
 * @param {function} props.onClick - La fonction de gestion du clic sur l'en-tête de colonne.
 * @param {string} props.hoverBackgroundColor - La couleur de fond au survol.
 * @param {string} props.customSortedColumnBackgroundColor - La classe CSS personnalisée pour la colonne triée.
 * @returns {JSX.Element} - Le composant d'en-tête de colonne.
 */
var TableHeader = function TableHeader(_ref) {
  var column = _ref.column,
    sortBy = _ref.sortBy,
    sortOrder = _ref.sortOrder,
    onClick = _ref.onClick,
    customHoverBackgroundColor = _ref.customHoverBackgroundColor,
    customSortedColumnBackgroundColor = _ref.customSortedColumnBackgroundColor;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isHovered = _useState2[0],
    setIsHovered = _useState2[1];
  var handleMouseEnter = function handleMouseEnter() {
    setIsHovered(true);
  };
  var handleMouseLeave = function handleMouseLeave() {
    setIsHovered(false);
  };
  var columnHeaderStyle = _objectSpread(_objectSpread({}, sortBy === column.key && customSortedColumnBackgroundColor ? {
    backgroundColor: customSortedColumnBackgroundColor,
    filter: "saturate(0.3)",
    mixBlendMode: "multiply"
  } : {}), isHovered ? {
    backgroundColor: customHoverBackgroundColor,
    filter: "none",
    mixBlendMode: "normal"
  } : {});
  return /*#__PURE__*/_react["default"].createElement("th", {
    onClick: onClick,
    className: "".concat(sortBy === column.key ? customSortedColumnBackgroundColor : ""),
    style: columnHeaderStyle,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "flex-jcc-aic"
  }, column.label, /*#__PURE__*/_react["default"].createElement("span", {
    className: "up-down"
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaCaretUp, {
    className: sortBy === column.key && sortOrder === "asc" ? "sorted-icon" : ""
  }), /*#__PURE__*/_react["default"].createElement(_fa.FaCaretDown, {
    className: sortBy === column.key && sortOrder === "desc" ? "sorted-icon" : ""
  }))));
};
var _default = exports["default"] = TableHeader;