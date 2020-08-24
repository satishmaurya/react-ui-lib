"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageTypes = function ImageTypes() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "ImageTypes");
};

ImageTypes.propTypes = {
  src: _propTypes.default.string.isRequired,
  fluid: _propTypes.default.bool,
  alt: _propTypes.default.string,
  title: _propTypes.default.string,
  rounded: _propTypes.default.bool,
  roundedCircle: _propTypes.default.bool,
  thumbnail: _propTypes.default.bool,
  filter: _propTypes.default.string,
  width: _propTypes.default.string,
  height: _propTypes.default.string
};
ImageTypes.defaultProps = {};
var _default = ImageTypes;
exports.default = _default;