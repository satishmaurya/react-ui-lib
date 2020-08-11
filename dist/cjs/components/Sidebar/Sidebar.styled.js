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
})(["padding-top:15px;border:1px solid red;"]);

exports.StyledSideBarWrap = StyledSideBarWrap;

var StyledSideBarBody = _styledComponents.default.div.withConfig({
  displayName: "Sidebarstyled__StyledSideBarBody",
  componentId: "sc-3ocxlf-1"
})(["padding-top:15px;margin-top:40px;"]);

exports.StyledSideBarBody = StyledSideBarBody;

var StyledSideBarTitle = _styledComponents.default.div.withConfig({
  displayName: "Sidebarstyled__StyledSideBarTitle",
  componentId: "sc-3ocxlf-2"
})(["padding-top:15px;", " ", ""], function (props) {
  return props.title ? (0, _styledComponents.css)([""]) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.titleBg ? (0, _styledComponents.css)(["background:#ccc;"]) : (0, _styledComponents.css)(["background-color:#5089de;color:#fff;font-weight:600;padding:40px 20px 40px;position:absolute;width:100%;top:0px;z-index:1;"]);
});

exports.StyledSideBarTitle = StyledSideBarTitle;

var StyledSideBar = _styledComponents.default.div.withConfig({
  displayName: "Sidebarstyled__StyledSideBar",
  componentId: "sc-3ocxlf-3"
})(["", ",", ","], function (props) {
  return props.isDrawer ? (0, _styledComponents.css)(["height:100%;width:0;color:#fff;position:fixed;z-index:1;top:0;left:0;background:#3d454e;overflow-x:hidden;transition:0.5s;padding-top:60px;.closeIcon{position:absolute;top:0;right:25px;font-size:36px;margin-left:50px;cursor:pointer;z-index:9;}"]) : (0, _styledComponents.css)(["width:250px;height:100%;background:#ffffff;color:#191818;position:relative;z-index:1;top:0;border:1px solid #e9e6e6;right:auto;left:auto;background-color:#ffffff;overflow-x:hidden;transition:0.5s;padding-top:60px;"]);
}, function (props) {
  return props.position === 'left' ? (0, _styledComponents.css)(["flex-wrap:nowrap"]) : props.position === 'right' ? (0, _styledComponents.css)(["height:100%;width:0;color:#302e2e;position:fixed;z-index:1;top:0;right:0;background:#ffffff;overflow-x:hidden;transition:0.5s;padding-top:60px;.closeIcon{position:absolute;top:0;right:25px;font-size:36px;margin-left:50px;cursor:pointer;}"]) : (0, _styledComponents.css)(["width:250px;height:100%;background:#3d454e;color:#fff;position:fixed;z-index:1;top:0;right:0;background-color:#3d454e;overflow-x:hidden;transition:0.5s;padding-top:60px;"]);
});

exports.StyledSideBar = StyledSideBar;

var MainWrapper = _styledComponents.default.div.withConfig({
  displayName: "Sidebarstyled__MainWrapper",
  componentId: "sc-3ocxlf-4"
})(["transition:margin-left .5s;padding:16px;height:600px;"]);

exports.MainWrapper = MainWrapper;