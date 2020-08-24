"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTypes() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "Icon");
}

IconTypes.propTypes = {
  /** Name of an icon from Foundations > Iconography, to render. */
  icon: _propTypes.default.string.isRequired,

  /** Size of the icon, in pixels. */
  size: _propTypes.default.number,

  /** Color of icon. */
  color: _propTypes.default.string
};
IconTypes.defaultProps = {
  size: 16,
  color: 'currentColor'
};
var _default = IconTypes;
exports.default = _default;