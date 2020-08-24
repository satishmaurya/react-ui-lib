"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBarTypes = function ProgressBarTypes() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "ProgressBar");
};

ProgressBarTypes.propTypes = {
  now: _propTypes.default.number,
  size: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg']),
  label: _propTypes.default.string,
  variant: _propTypes.default.oneOf(['primary', 'info', 'danger']),
  striped: _propTypes.default.bool,
  animated: _propTypes.default.bool,
  children: _propTypes.default.node,
  icon: _propTypes.default.string
};
ProgressBarTypes.defaultProps = {
  now: 'default',
  size: 'md',
  label: '50%',
  variant: 'primary',
  striped: false,
  animated: false
};
var _default = ProgressBarTypes;
exports.default = _default;