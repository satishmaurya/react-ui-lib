"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BoxTypes = function BoxTypes() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "Box");
};

BoxTypes.propTypes = {
  justifyItems: _propTypes.default.oneOf(['flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'start' | 'end' | 'baseline' | 'first baseline' | 'last baseline']),
  justifyContent: _propTypes.default.oneOf(['flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'start' | 'end' | 'left' | 'right']),
  alignItems: _propTypes.default.oneOf(['stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'first baseline' | 'last baseline' | 'start' | 'end' | 'self-start' | 'self-end']),
  flexWrap: _propTypes.default.oneOf(['nowrap' | 'wrap' | 'wrap-reverse']),
  flexDirection: _propTypes.default.string,
  alignSelf: _propTypes.default.oneOf(['auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch']),
  display: _propTypes.default.oneOf(['flex' | 'inline' | 'inline-block' | 'none']),
  p: _propTypes.default.string,
  m: _propTypes.default.string,
  pt: _propTypes.default.string,
  pb: _propTypes.default.string,
  pl: _propTypes.default.string,
  pr: _propTypes.default.string,
  pm: _propTypes.default.string,
  mt: _propTypes.default.string,
  mb: _propTypes.default.string,
  ml: _propTypes.default.string,
  mr: _propTypes.default.string,
  mp: _propTypes.default.string,
  children: _propTypes.default.node,
  border: _propTypes.default.string,
  borderRight: _propTypes.default.string,
  borderLeft: _propTypes.default.string,
  borderTop: _propTypes.default.string,
  borderBottom: _propTypes.default.string,
  borderRadius: _propTypes.default.string,
  bgColor: _propTypes.default.string,
  opacity: _propTypes.default.string,
  width: _propTypes.default.string,
  textAlign: _propTypes.default.string
};
BoxTypes.defaultProps = {
  justifyItems: ' ',
  justifyContent: ' ',
  alignItems: '',
  flexWrap: '',
  flexDirection: '',
  display: 'block',
  p: '0px',
  m: '0px',
  width: '100%',
  textAlign: 'default'
};
var _default = BoxTypes;
exports.default = _default;