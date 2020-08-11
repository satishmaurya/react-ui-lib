"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Header = _interopRequireDefault(require("./Header.styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  var mode = props.mode,
      fixed = props.fixed,
      children = props.children;
  return /*#__PURE__*/_react.default.createElement(_Header.default, {
    mode: mode,
    fixed: fixed
  }, children);
};

var _default = Header;
exports.default = _default;