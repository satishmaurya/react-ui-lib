"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = _interopRequireDefault(require("./ThemeProvider.styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ThemeProvider = function ThemeProvider(props) {
  var light = props.light,
      children = props.children;
  return /*#__PURE__*/_react["default"].createElement(_ThemeProvider["default"], {
    theme: light
  }, children);
};

var _default = ThemeProvider;
exports["default"] = _default;