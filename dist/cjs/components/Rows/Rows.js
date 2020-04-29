"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Rows = require("./Rows.styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Rows = function Rows(props) {
  var children = props.children,
      justifyItems = props.justifyItems,
      justifyContent = props.justifyContent,
      alignItems = props.alignItems;
  return /*#__PURE__*/_react.default.createElement(_Rows.StyledRow, _extends({
    justifyItems: justifyItems,
    justifyContent: justifyContent,
    alignItems: alignItems
  }, props), children);
};

var _default = Rows;
exports.default = _default;