"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdvanceTableTypes = function AdvanceTableTypes() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "AdvanceTableTypes");
};

AdvanceTableTypes.propTypes = {
  size: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg']),
  responsive: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg']),
  variant: _propTypes.default.oneOf(['light', 'dark']),
  striped: _propTypes.default.bool,
  bordered: _propTypes.default.bool,
  hover: _propTypes.default.bool,
  children: _propTypes.default.node,
  bsPrefix: _propTypes.default.string
};
AdvanceTableTypes.defaultProps = {
  size: 'md',
  responsive: true,
  variant: 'light',
  striped: false,
  bordered: false,
  hover: false
};
var _default = AdvanceTableTypes;
exports.default = _default;