"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledForm = exports.StyledSearchBox = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var variable = _interopRequireWildcard(require("../../variable"));

var _FormControl = _interopRequireDefault(require("react-bootstrap/FormControl"));

var _Form = _interopRequireDefault(require("react-bootstrap/Form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledSearchBox = (0, _styledComponents.default)(_FormControl.default).withConfig({
  displayName: "SearchBoxstyled__StyledSearchBox",
  componentId: "sc-1cgeyrw-0"
})(["", " ", ""], function (props) {
  return props.bg ? (0, _styledComponents.css)(["background-color:", ";border:0;"], props.bg) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.borderRadius ? (0, _styledComponents.css)(["border-radius:", ";"], props.borderRadius) : (0, _styledComponents.css)([""]);
});
exports.StyledSearchBox = StyledSearchBox;
var StyledForm = (0, _styledComponents.default)(_Form.default).withConfig({
  displayName: "SearchBoxstyled__StyledForm",
  componentId: "sc-1cgeyrw-1"
})([""]);
exports.StyledForm = StyledForm;