"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./EditForm.css");
var _validations = require("../utils/validations.js");
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
var EditForm = function EditForm(_ref) {
  var item = _ref.item,
    columnsTable = _ref.columnsTable,
    handleEdit = _ref.handleEdit,
    setEditedItem = _ref.setEditedItem,
    customDarkBackgroundColor = _ref.customDarkBackgroundColor,
    customHoverBackgroundColor = _ref.customHoverBackgroundColor,
    setSelectedAction = _ref.setSelectedAction,
    customTextEditValidationBtn = _ref.customTextEditValidationBtn,
    customTextEditCancelBtn = _ref.customTextEditCancelBtn;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isHoveredSave = _useState2[0],
    setIsHoveredSave = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isHoveredCancel = _useState4[0],
    setIsHoveredCancel = _useState4[1];
  var handleMouseEnterSave = function handleMouseEnterSave() {
    setIsHoveredSave(true);
  };
  var handleMouseLeaveSave = function handleMouseLeaveSave() {
    setIsHoveredSave(false);
  };
  var handleMouseEnterCancel = function handleMouseEnterCancel() {
    setIsHoveredCancel(true);
  };
  var handleMouseLeaveCancel = function handleMouseLeaveCancel() {
    setIsHoveredCancel(false);
  };

  /**
   * Gère le changement de valeur d'un champ de l'objet édité.
   *
   * @param {string} fieldName - Le nom du champ qui change.
   * @param {string} value - La nouvelle valeur du champ.
   */
  var handleFieldChange = function handleFieldChange(fieldName, value) {
    value = value.trim(); // Supprime les espaces inutiles autour de la nouvelle valeur

    // Met à jour l'objet édité en utilisant une fonction de mise à jour du précédent état
    setEditedItem(function (prevData) {
      return _objectSpread(_objectSpread({}, prevData), {}, _defineProperty({}, fieldName, value));
    });
  };
  var isFieldValid = function isFieldValid(column, value) {
    if (column.type === "tel") {
      return (0, _validations.isValidPhoneNumber)(value);
    }
    if (column.type === "email") {
      return (0, _validations.isValidEmail)(value);
    }
    return true; // Si le champ n'est pas de type "tel" ou "email", on considère qu'il est valide
  };

  return /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: function onSubmit(e) {
      return handleEdit(e, item);
    }
  }, columnsTable.map(function (column) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: column.key,
      className: "editField"
    }, /*#__PURE__*/_react["default"].createElement("label", {
      htmlFor: column.key
    }, column.label), column.type === "text" && /*#__PURE__*/_react["default"].createElement("input", {
      type: "text",
      id: column.key,
      name: column.key,
      value: item[column.key],
      onChange: function onChange(e) {
        return handleFieldChange(column.key, e.target.value);
      }
    }), column.type === "date" && /*#__PURE__*/_react["default"].createElement("input", {
      type: "date",
      id: column.key,
      name: column.key,
      value: item[column.key],
      onChange: function onChange(e) {
        return handleFieldChange(column.key, e.target.value);
      }
    }), column.type === "number" && /*#__PURE__*/_react["default"].createElement("input", {
      type: "number",
      id: column.key,
      name: column.key,
      value: item[column.key],
      onChange: function onChange(e) {
        return handleFieldChange(column.key, e.target.value);
      }
    }), column.type === "tel" && /*#__PURE__*/_react["default"].createElement("input", {
      type: "tel",
      id: column.key,
      name: column.key,
      value: item[column.key],
      onChange: function onChange(e) {
        return handleFieldChange(column.key, e.target.value);
      }
    }), column.type === "email" && /*#__PURE__*/_react["default"].createElement("input", {
      type: "email",
      id: column.key,
      name: column.key,
      value: item[column.key],
      onChange: function onChange(e) {
        return handleFieldChange(column.key, e.target.value);
      }
    }), column.type === "tel" && /*#__PURE__*/_react["default"].createElement("span", null, !isFieldValid(column, item[column.key]) && /*#__PURE__*/_react["default"].createElement("div", {
      className: "validation-message"
    }, /*#__PURE__*/_react["default"].createElement("p", null, "!"))), column.type === "email" && /*#__PURE__*/_react["default"].createElement("span", null, !isFieldValid(column, item[column.key]) && /*#__PURE__*/_react["default"].createElement("div", {
      className: "validation-message"
    }, /*#__PURE__*/_react["default"].createElement("p", null, "!"))));
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "buttons-container"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn-edit-form",
    style: {
      backgroundColor: isHoveredSave ? customHoverBackgroundColor : customDarkBackgroundColor
    },
    onMouseEnter: handleMouseEnterSave,
    onMouseLeave: handleMouseLeaveSave,
    onClick: handleEdit
  }, customTextEditValidationBtn), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn-edit-form",
    style: {
      backgroundColor: isHoveredCancel ? customHoverBackgroundColor : customDarkBackgroundColor
    },
    onMouseEnter: handleMouseEnterCancel,
    onMouseLeave: handleMouseLeaveCancel,
    onClick: function onClick() {
      return setSelectedAction(null);
    }
  }, customTextEditCancelBtn)));
};
var _default = exports["default"] = EditForm;