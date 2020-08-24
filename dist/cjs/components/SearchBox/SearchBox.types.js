"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchBoxTypes = function SearchBoxTypes() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "SearchBox");
};

SearchBoxTypes.propTypes = {
  size: _propTypes.default.oneOf(['sm', 'md', 'lg']),
  placeholder: _propTypes.default.string,
  bg: _propTypes.default.string,
  borderRadius: _propTypes.default.string,
  children: _propTypes.default.node,
  onFocus: _propTypes.default.string
};
SearchBoxTypes.defaultProps = {
  size: 'md',
  placeholder: 'Search',
  bg: '',
  borderRadius: '',
  onFocus: ''
};
var _default = SearchBoxTypes;
exports.default = _default;