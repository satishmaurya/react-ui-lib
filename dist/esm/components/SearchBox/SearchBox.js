"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SearchBox = _interopRequireDefault(require("./SearchBox.styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SearchBox = function SearchBox(props) {
  var placeholder = props.placeholder,
      size = props.size,
      bg = props.bg,
      borderRadius = props.borderRadius,
      value = props.value,
      id = props.id,
      name = props.name,
      border = props.border,
      onFocus = props.onFocus;
  return /*#__PURE__*/_react["default"].createElement(_SearchBox["default"], {
    borderRadius: borderRadius,
    bg: bg,
    border: border,
    size: size,
    onFocus: onFocus
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: placeholder,
    id: id,
    value: value,
    name: name
  }));
};

var _default = SearchBox;
exports["default"] = _default;