"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SearchBox = require("./SearchBox.styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SearchBox = function SearchBox(props) {
  var placeholder = props.placeholder,
      children = props.children,
      size = props.size,
      bg = props.bg,
      borderRadius = props.borderRadius,
      onFocus = props.onFocus;
  return /*#__PURE__*/_react["default"].createElement(_SearchBox.StyledForm, {
    inline: true
  }, /*#__PURE__*/_react["default"].createElement(_SearchBox.StyledSearchBox, {
    borderRadius: borderRadius,
    bg: bg,
    size: size,
    type: "text",
    placeholder: placeholder,
    onFocus: onFocus
  }), children);
};

var _default = SearchBox;
exports["default"] = _default;