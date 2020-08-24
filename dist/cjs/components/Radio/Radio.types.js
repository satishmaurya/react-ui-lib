"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioTypes = function RadioTypes() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "Radio");
};

RadioTypes.propTypes = {
  children: _propTypes.default.string,
  value: _propTypes.default.string,
  isDisabled: _propTypes.default.bool,
  isChecked: _propTypes.default.bool,
  label: _propTypes.default.string,
  onChange: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  id: _propTypes.default.string,
  isInvalid: _propTypes.default.bool,
  name: _propTypes.default.string
};
RadioTypes.defaultProps = {
  isDisabled: false,
  isInvalid: false
};
var _default = RadioTypes;
exports.default = _default;