"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavBarTypes = function NavBarTypes() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "NavBar");
};

NavBarTypes.propTypes = {
  isDisabled: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['sm', 'md', 'lg']),
  block: _propTypes.default.bool,
  children: _propTypes.default.node,
  fixed: _propTypes.default.bool
};
NavBarTypes.defaultProps = {
  btnType: 'default',
  btnVariant: 'contained',
  isDisabled: false,
  rounded: 'default',
  size: 'md',
  block: false
};
var _default = NavBarTypes;
exports.default = _default;