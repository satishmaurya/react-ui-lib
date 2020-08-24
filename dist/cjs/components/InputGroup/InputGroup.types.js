"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputGroupTypes = function InputGroupTypes() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "InputGroup");
};

InputGroupTypes.propTypes = {
  type: _propTypes.default.oneOf(['text', 'number', 'password', 'date', 'email', 'range', 'color']),
  as: _propTypes.default.oneOf(['textarea', 'select', 'multiselect']),
  disabled: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['sm', 'lg']),
  labelText: _propTypes.default.string,
  labelInline: _propTypes.default.bool,
  value: _propTypes.default.string,
  bsPrefix: _propTypes.default.string,
  children: _propTypes.default.node,
  labelBg: _propTypes.default.string,
  rounded: _propTypes.default.oneOf(['rounded', 'default']),
  icon: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  id: _propTypes.default.string,
  rows: _propTypes.default.string
};
InputGroupTypes.defaultProps = {
  type: 'text',
  as: '',
  disabled: false,
  size: 'default',
  labelText: '',
  labelInline: false,
  rounded: 'default',
  radioBtn: false
};
var _default = InputGroupTypes;
exports.default = _default;