"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropDownTypes = function DropDownTypes() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "DropDownTypes");
};

DropDownTypes.propTypes = {
  id: _propTypes.default.string,
  className: _propTypes.default.string,
  value: _propTypes.default.string,
  options: _propTypes.default.arrayOf(_propTypes.default.shape({})),
  btnType: _propTypes.default.oneOf(['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'purple', 'light', 'dark']),
  btnVariant: _propTypes.default.oneOf(['contained', 'outlined']),
  isDisabled: _propTypes.default.bool,
  rounded: _propTypes.default.oneOf(['rounded', 'default']),
  size: _propTypes.default.oneOf(['sm', 'md', 'lg']),
  block: _propTypes.default.bool,
  Iconsize: _propTypes.default.oneOf(['sm', 'md', 'lg']),
  children: _propTypes.default.node,
  icon: _propTypes.default.string.isRequired
};
DropDownTypes.defaultProps = {
  btnType: 'default',
  btnVariant: 'contained',
  isDisabled: false,
  rounded: 'default',
  size: 'md',
  block: false,
  Iconsize: 'md',
  id: 'string',
  className: 'string',
  options: 'ArrayOf(object)'
};
var _default = DropDownTypes;
exports.default = _default;