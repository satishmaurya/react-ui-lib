"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AvatarTypes = function AvatarTypes() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "AvatarTypes");
};

AvatarTypes.propTypes = {
  src: _propTypes.default.string.isRequired,
  size: _propTypes.default.oneOf(['sm', 'md', 'lg']),
  alt: _propTypes.default.string,
  title: _propTypes.default.string,
  subTitle: _propTypes.default.string
};
AvatarTypes.defaultProps = {};
var _default = AvatarTypes;
exports.default = _default;