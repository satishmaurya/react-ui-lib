"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardTypes = function CardTypes() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "StackCard");
};

CardTypes.propTypes = {
  cardTitle: _propTypes.default.string,
  subTitle: _propTypes.default.string,
  bgColor: _propTypes.default.oneOf(['white', 'primary', 'secondary', 'success', 'info', 'warning', 'danger']),
  isDisabled: _propTypes.default.bool,
  rounded: _propTypes.default.oneOf(['rounded', 'default']),
  imgPos: _propTypes.default.oneOf(['top', 'middle', 'bottom']),
  alignText: _propTypes.default.oneOf(['left', 'center', 'right']),
  border: _propTypes.default.oneOf(['light', 'dark']),
  imgUrl: _propTypes.default.string,
  color: _propTypes.default.string,
  children: _propTypes.default.node,
  width: _propTypes.default.string
};
CardTypes.defaultProps = {
  cardTitle: ' ',
  bgColor: 'white',
  isDisabled: false,
  rounded: 'default',
  alignText: 'left',
  imgPos: 'top'
};
var _default = CardTypes;
exports.default = _default;