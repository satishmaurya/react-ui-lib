"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Switch = require("./Switch.styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Switch = function Switch(props) {
  var onClick = props.onClick,
      size = props.size,
      id = props.id,
      name = props.name,
      label = props.label;
  return /*#__PURE__*/_react.default.createElement(_Switch.StyledSwitch, {
    label: label
  }, label && /*#__PURE__*/_react.default.createElement(_Switch.SwitchLabel, null, label), /*#__PURE__*/_react.default.createElement("label", {
    class: "switch"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: id,
    name: name,
    onClick: onClick,
    size: size
  }), /*#__PURE__*/_react.default.createElement("span", {
    class: "slider round"
  })));
};

var _default = Switch;
exports.default = _default;