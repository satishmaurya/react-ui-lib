"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var variable = _interopRequireWildcard(require("../../variable"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledHeader = _styledComponents["default"].div.withConfig({
  displayName: "Headerstyled__StyledHeader",
  componentId: "sc-1dlz0wk-0"
})(["background-color:#fff;padding:0 10px 0 0;left:0;right:0;height:70px;z-index:100;-webkit-box-shadow:0 0 35px 0 rgba(61,69,78,.15);box-shadow:0 0 35px 0 rgba(61,69,78,.15);padding:6px 16px;border-radius:4px;color:", ";", " ", ""], variable.white, function (props) {
  return props.mode === "light" ? (0, _styledComponents.css)(["background:", ";"], variable.white) : props.mode === "dark" ? (0, _styledComponents.css)(["background:", ";"], variable.dark) : (0, _styledComponents.css)(["display:none;"]);
}, function (props) {
  return props.fixed === true ? (0, _styledComponents.css)(["position:fixed"]) : (0, _styledComponents.css)(["position:relative"]);
});

var _default = StyledHeader;
exports["default"] = _default;