"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Typography = _styledComponents["default"].div.withConfig({
  displayName: "Typographystyled__Typography",
  componentId: "sc-1fat070-0"
})(["{display:block;margin-left:0;margin-right:0;", " ", " ", " ", "}"], function (props) {
  return props.type === "heading" ? (0, _styledComponents.css)(["font-weight:bold;"]) : props.type === "subHeading" ? (0, _styledComponents.css)(["font-weight:600;"]) : props.type === "light" ? (0, _styledComponents.css)(["font-weight:300;"]) : (0, _styledComponents.css)(["font-weight:normal;"]);
}, function (props) {
  return props.isBold ? (0, _styledComponents.css)(["font-weight:bold;"]) : (0, _styledComponents.css)(["font-weight:normal;"]);
}, function (props) {
  return props.isItalic ? (0, _styledComponents.css)(["font-style:italic;"]) : (0, _styledComponents.css)(["font-style:normal;"]);
}, function (props) {
  return props.as === "h1" ? (0, _styledComponents.css)(["font-size:2em;margin-top:0.67em;margin-bottom:0.67em;"]) : props.as === "h2" ? (0, _styledComponents.css)(["font-size:1.5em;margin-top:0.83em;margin-bottom:0.83em;"]) : props.as === "h3" ? (0, _styledComponents.css)(["font-size:1.17em;margin-top:1em;margin-bottom:1em;"]) : props.as === "h4" ? (0, _styledComponents.css)(["font-size:1em;margin-top:1.33em;margin-bottom:1.33em;"]) : props.as === "h5" ? (0, _styledComponents.css)(["font-size:.83em;margin-top:1.67em;margin-bottom:1.67em;"]) : props.as === "h6" ? (0, _styledComponents.css)(["font-size:.67em;margin-top:2.33em;margin-bottom:2.33em;"]) : (0, _styledComponents.css)(["font-size:1em;"]);
});

var _default = Typography;
exports["default"] = _default;