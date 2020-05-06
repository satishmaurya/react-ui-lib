"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("./Icon.styled"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Icon = function Icon(props) {
  var isDisabled = props.isDisabled,
      iconVariant = props.iconVariant,
      rounded = props.rounded,
      children = props.children,
      name = props.name,
      size = props.size,
      onClick = props.onClick,
      borderRadius = props.borderRadius,
      color = props.color,
      bg = props.bg,
      animation = props.animation,
      rotation = props.rotation;
  return /*#__PURE__*/_react["default"].createElement(_Icon["default"], _extends({
    rounded: rounded,
    disabled: isDisabled,
    variant: iconVariant
  }, props), iconVariant === 'regular' ? /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['far', name],
    size: size,
    rotation: rotation,
    color: color,
    animation: true
  }) : iconVariant === 'solid' ? /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fas', name],
    size: size,
    rotation: rotation,
    color: color,
    animation: true
  }) : /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fas', name],
    size: size,
    rotation: rotation,
    color: color,
    animation: true
  }), children);
};

var _default = Icon;
exports["default"] = _default;