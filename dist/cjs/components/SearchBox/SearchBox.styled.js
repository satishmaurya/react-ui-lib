"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledSearchBox = _styledComponents.default.div.withConfig({
  displayName: "SearchBoxstyled__StyledSearchBox",
  componentId: "sc-1cgeyrw-0"
})(["input{padding:6px;}", "  ", "  ", " ", ""], function (props) {
  return props.border ? (0, _styledComponents.css)(["& input{border:", ";}"], props.border) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.onFocus ? (0, _styledComponents.css)(["& input{& focus{box-shadow:", ";}}"], props.onFocus) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.bg ? (0, _styledComponents.css)(["& input{background-color:", ";}"], props.bg) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.borderRadius ? (0, _styledComponents.css)(["& input{border-radius:", ";}"], props.borderRadius) : (0, _styledComponents.css)([""]);
});

var _default = StyledSearchBox;
exports.default = _default;