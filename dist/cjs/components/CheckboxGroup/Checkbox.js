"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Checkbox = require("./Checkbox.styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Checkbox = function Checkbox(props) {
  var label = props.label,
      disabled = props.disabled,
      error = props.error,
      onClick = props.onClick,
      id = props.id,
      name = props.name,
      value = props.value;
  return /*#__PURE__*/_react.default.createElement(_Checkbox.StyledCheckbox, props, /*#__PURE__*/_react.default.createElement("label", {
    class: "checklabel"
  }, label, /*#__PURE__*/_react.default.createElement("input", _extends({
    type: "checkbox",
    id: id,
    name: name,
    value: value,
    disabled: disabled
  }, props)), /*#__PURE__*/_react.default.createElement("span", {
    class: "checkmark"
  })));
};

var _default = Checkbox;
exports.default = _default;