"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainWrapper = exports.StyledSideBar = exports.StyledSideBarTitle = exports.StyledSideBarBody = exports.StyledSideBarWrap = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledSideBarWrap = _styledComponents.default.div.withConfig({
  displayName: "Sidebarstyled__StyledSideBarWrap",
  componentId: "sc-3ocxlf-0"
})(["padding-top:15px;"]);

exports.StyledSideBarWrap = StyledSideBarWrap;

var StyledSideBarBody = _styledComponents.default.div.withConfig({
  displayName: "Sidebarstyled__StyledSideBarBody",
  componentId: "sc-3ocxlf-1"
})([""]);

exports.StyledSideBarBody = StyledSideBarBody;

var StyledSideBarTitle = _styledComponents.default.div.withConfig({
  displayName: "Sidebarstyled__StyledSideBarTitle",
  componentId: "sc-3ocxlf-2"
})(["", ","], function (props) {
  return props.title ? (0, _styledComponents.css)(["border:1px solid pink;"]) : (0, _styledComponents.css)(["background:#03A9F4;color:#ffffff;font-weight:600;padding:20px;"]);
});

exports.StyledSideBarTitle = StyledSideBarTitle;

var StyledSideBar = _styledComponents.default.div.withConfig({
  displayName: "Sidebarstyled__StyledSideBar",
  componentId: "sc-3ocxlf-3"
})(["width:250px;height:auto;position:fixed;z-index:1;top:0;left:auto;", " ", ""], function (props) {
  return props.position === 'right' ? (0, _styledComponents.css)(["left:auto;right:0;"]) : props.position === 'left' ? (0, _styledComponents.css)(["left:0;"]) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.bgColor === 'dark' ? (0, _styledComponents.css)(["background:#3d454e;color:#fff;"]) : props.bgColor === 'light' ? (0, _styledComponents.css)(["background:#fff;color:#322f2f;"]) : (0, _styledComponents.css)([""]);
});

exports.StyledSideBar = StyledSideBar;

var MainWrapper = _styledComponents.default.div.withConfig({
  displayName: "Sidebarstyled__MainWrapper",
  componentId: "sc-3ocxlf-4"
})(["transition:margin-left .5s;padding:16px;height:600px;"]);

exports.MainWrapper = MainWrapper;