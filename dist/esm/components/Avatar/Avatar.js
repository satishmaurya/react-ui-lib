"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Avatar = require("./Avatar.styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Avatar = function Avatar(props) {
  var size = props.size,
      src = props.src,
      alt = props.alt;
  return /*#__PURE__*/_react["default"].createElement(_Avatar.StyledAvatar, {
    size: size,
    src: src,
    alt: alt
  });
};

var _default = Avatar;
exports["default"] = _default;