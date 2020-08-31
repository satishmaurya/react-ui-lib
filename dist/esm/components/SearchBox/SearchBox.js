"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SearchBox = require("./SearchBox.styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SearchBox = function SearchBox(props) {
  var placeholder = props.placeholder,
      children = props.children,
      size = props.size,
      bg = props.bg,
      borderRadius = props.borderRadius,
      value = props.value;
  return /*#__PURE__*/_react["default"].createElement(_SearchBox.StyledForm, {
    inline: true
  }, /*#__PURE__*/_react["default"].createElement(_SearchBox.StyledSearchBox, _extends({
    borderRadius: borderRadius,
    bg: bg,
    size: size,
    type: "text",
    placeholder: placeholder
  }, props)), children);
};

var _default = SearchBox;
exports["default"] = _default;