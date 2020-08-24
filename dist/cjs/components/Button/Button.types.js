"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonTypes = function ButtonTypes() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "Button");
};

ButtonTypes.propTypes = {
  btnType: _propTypes.default.oneOf(['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'purple', 'light', 'dark']),
  btnVariant: _propTypes.default.oneOf(['contained', 'outlined']),
  isDisabled: _propTypes.default.bool,
  rounded: _propTypes.default.oneOf(['rounded', 'default']),
  size: _propTypes.default.oneOf(['sm', 'md', 'lg']),
  block: _propTypes.default.bool,
  children: _propTypes.default.node,
  borderRadius: _propTypes.default.string,
  color: _propTypes.default.string,
  onClick: _propTypes.default.func,
  icon: _propTypes.default.string.isRequired,
  iconVariant: _propTypes.default.oneOf(['regular', 'solid'])
};
ButtonTypes.defaultProps = {
  btnType: 'default',
  btnVariant: 'contained',
  isDisabled: false,
  rounded: 'default',
  size: 'md',
  block: false,
  color: 'currentColor'
};
var _default = ButtonTypes;
exports.default = _default;