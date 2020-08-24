"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BreadcumTypes = function BreadcumTypes() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "StackCard");
};

BreadcumTypes.propTypes = {
  bgColor: _propTypes.default.oneOf(['white', 'primary', 'secondary', 'success', 'info', 'warning', 'danger']),
  paginationType: _propTypes.default.oneOf(['rounded', 'default']),
  size: _propTypes.default.oneOf(['lg', 'sm']),
  children: _propTypes.default.node
};
BreadcumTypes.defaultProps = {
  bgColor: 'white',
  paginationType: 'default',
  size: ''
};
var _default = BreadcumTypes;
exports.default = _default;