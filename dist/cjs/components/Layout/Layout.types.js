"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerTypes = exports.ColTypes = exports.RowTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RowTypes = function RowTypes() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "Row");
};

exports.RowTypes = RowTypes;

var ColTypes = function ColTypes() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "Col");
};

exports.ColTypes = ColTypes;

var ContainerTypes = function ContainerTypes() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "Container");
};

exports.ContainerTypes = ContainerTypes;
RowTypes.propTypes = {
  as: _propTypes.default.string,
  cardTitle: _propTypes.default.string,
  lg: _propTypes.default.number,
  md: _propTypes.default.number,
  sm: _propTypes.default.number,
  xl: _propTypes.default.number,
  noGutters: _propTypes.default.bool,
  bsPrefix: _propTypes.default.oneOf(['Row'])
};
RowTypes.defaultProps = {
  btnType: '<div>',
  lg: '',
  md: '',
  sm: '',
  xl: '',
  noGutters: false,
  bsPrefix: 'Row'
};
ColTypes.propTypes = {
  as: _propTypes.default.elementType,
  lg: _propTypes.default.number,
  md: _propTypes.default.number,
  sm: _propTypes.default.number,
  xl: _propTypes.default.number,
  noGutters: _propTypes.default.bool,
  bsPrefix: _propTypes.default.oneOf(['Row'])
};
ColTypes.defaultProps = {
  btnType: '<div>',
  lg: '',
  md: '',
  sm: '',
  xl: '',
  noGutters: false,
  bsPrefix: 'Row'
};
ContainerTypes.propTypes = {
  as: _propTypes.default.elementType,
  lg: _propTypes.default.number,
  md: _propTypes.default.number,
  sm: _propTypes.default.number,
  xl: _propTypes.default.number,
  noGutters: _propTypes.default.bool,
  bsPrefix: _propTypes.default.oneOf(['Row']),
  fluid: _propTypes.default.bool,
  children: _propTypes.default.node
};
ContainerTypes.defaultProps = {
  btnType: '<div>',
  lg: '',
  md: '',
  sm: '',
  xl: '',
  noGutters: false,
  bsPrefix: 'Row'
};