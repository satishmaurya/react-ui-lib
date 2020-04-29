"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Accordian = _interopRequireDefault(require("./Accordian.styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Accordian = function Accordian(props) {
  var color = props.color,
      bgColor = props.bgColor,
      children = props.children,
      cardTitle = props.cardTitle,
      width = props.width,
      alignText = props.alignText,
      alignCard = props.alignCard,
      imgUrl = props.imgUrl,
      subTitle = props.subTitle,
      imgPos = props.imgPos,
      border = props.border;
  return /*#__PURE__*/_react.default.createElement(_Accordian.default, _extends({
    imgUrl: imgUrl,
    color: color,
    bgColor: bgColor
  }, props), children);
};

var _default = Accordian;
exports.default = _default;