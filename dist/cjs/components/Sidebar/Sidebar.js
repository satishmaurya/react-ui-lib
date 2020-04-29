"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Sidebar = require("./Sidebar.styled");

var _Button = _interopRequireDefault(require("../Button/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sidebar = function Sidebar(props) {
  var children = props.children,
      id = props.id,
      isDrawer = props.isDrawer;

  var handleOpen = function handleOpen() {
    document.getElementById("Sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  };

  var handleClose = function handleClose() {
    document.getElementById("Sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  };

  if (isDrawer === true) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Sidebar.StyledSideBar, {
      id: id,
      isDrawer: true
    }, /*#__PURE__*/_react.default.createElement("a", {
      className: "closeIcon",
      onClick: handleClose
    }, "\xD7"), children), /*#__PURE__*/_react.default.createElement(_Sidebar.MainWrapper, {
      id: "main"
    }, /*#__PURE__*/_react.default.createElement("h2", null, "SideBar"), /*#__PURE__*/_react.default.createElement(_Button.default, {
      onClick: handleOpen,
      btnType: "success"
    }, "Open")));
  } else {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Sidebar.StyledSideBar, null, children));
  }
};

var _default = Sidebar;
exports.default = _default;