"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _InputGroup = _interopRequireDefault(require("./InputGroup.styled"));

var _InputGroup2 = _interopRequireDefault(require("react-bootstrap/InputGroup"));

var _Form = _interopRequireDefault(require("react-bootstrap/Form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StackInputGroup = function StackInputGroup(props) {
  var type = props.type,
      as = props.as,
      rows = props.rows,
      bsPrefix = props.bsPrefix,
      disabled = props.disabled,
      value = props.value,
      rounded = props.rounded,
      children = props.children,
      size = props.size,
      labelBg = props.labelBg,
      icon = props.icon,
      placeholder = props.placeholder,
      id = props.id,
      labelText = props.labelText,
      labelInline = props.labelInline;
  return /*#__PURE__*/_react["default"].createElement(_InputGroup["default"], null, labelInline ? /*#__PURE__*/_react["default"].createElement(_InputGroup2["default"], {
    size: size
  }, /*#__PURE__*/_react["default"].createElement(_InputGroup2["default"].Prepend, null, /*#__PURE__*/_react["default"].createElement(_InputGroup2["default"].Text, {
    id: id
  }, labelText)), /*#__PURE__*/_react["default"].createElement(_Form["default"].Control, _extends({
    as: as,
    rows: rows,
    bsPrefix: bsPrefix,
    size: size
  }, props))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Form["default"].Label, null, labelText), " ", /*#__PURE__*/_react["default"].createElement(_Form["default"].Control, _extends({
    as: as,
    rows: rows,
    bsPrefix: bsPrefix,
    size: size
  }, props)), " "));
};

var _default = StackInputGroup;
exports["default"] = _default;