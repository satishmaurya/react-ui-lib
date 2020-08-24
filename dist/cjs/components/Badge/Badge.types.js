"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BadgeTypes = function BadgeTypes() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "BadgeTypes");
};

BadgeTypes.propTypes = {
  variant: _propTypes.default.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  pill: _propTypes.default.bool,
  children: _propTypes.default.node
};
BadgeTypes.defaultProps = {
  variant: 'primary',
  pill: false
};
var _default = BadgeTypes;
exports.default = _default;