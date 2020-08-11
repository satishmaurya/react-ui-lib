"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Sidebar = require("./Sidebar.styled");

var _Button = _interopRequireDefault(require("../Button/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// import Typography from '../Typography/Typography';
var Sidebar = function Sidebar(props) {
  var children = props.children,
      id = props.id,
      isDrawer = props.isDrawer,
      title = props.title,
      titleBg = props.titleBg,
      position = props.position,
      onClose = props.onClose,
      isCloseButtonShown = props.isCloseButtonShown;
  console.log('propsss------', titleBg);

  var handleOpen = function handleOpen() {
    document.getElementById("Sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  };

  var handleClose = function handleClose() {
    document.getElementById("Sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  };

  if (isDrawer === true) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, title ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Sidebar.StyledSideBar, _extends({
      id: id,
      isDrawer: true
    }, props, {
      titleBg: titleBg
    }), /*#__PURE__*/_react["default"].createElement("a", {
      className: "closeIcon",
      onClick: handleClose
    }, "\xD7"), /*#__PURE__*/_react["default"].createElement(_Sidebar.StyledSideBarTitle, null, title), /*#__PURE__*/_react["default"].createElement(_Sidebar.StyledSideBarBody, null, children)), /*#__PURE__*/_react["default"].createElement(_Sidebar.MainWrapper, {
      id: "main"
    }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      onClick: handleOpen,
      btnType: "success"
    }, "Open"))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Sidebar.StyledSideBar, {
      id: id,
      isDrawer: true
    }, /*#__PURE__*/_react["default"].createElement("a", {
      className: "closeIcon",
      onClick: handleClose
    }, "\xD7"), children), /*#__PURE__*/_react["default"].createElement(_Sidebar.MainWrapper, {
      id: "main"
    }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      onClick: handleOpen,
      btnType: "success"
    }, "Open"))));
  } else {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Sidebar.StyledSideBar, _extends({}, props, {
      titleBg: titleBg,
      title: true
    }), /*#__PURE__*/_react["default"].createElement(_Sidebar.StyledSideBarTitle, null, title), /*#__PURE__*/_react["default"].createElement(_Sidebar.StyledSideBarBody, null, children)));
  }
};

var _default = Sidebar;
exports["default"] = _default;