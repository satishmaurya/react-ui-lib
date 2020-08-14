"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Sidebar = require("./Sidebar.styled");

var _Button = _interopRequireDefault(require("../Button/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Sidebar = function Sidebar(props) {
  var children = props.children,
      id = props.id,
      isDrawer = props.isDrawer,
      title = props.title,
      titleBg = props.titleBg,
      bgColor = props.bgColor,
      position = props.position,
      onClose = props.onClose,
      isCloseButtonShown = props.isCloseButtonShown; // {{'backgroundColor': status === 'approved' ? 'blue' : status === 'pending' ? 'black' : 'red'}}

  var handleOpen = function handleOpen() {
    document.getElementById("Sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  };

  var handleClose = function handleClose() {
    document.getElementById("Sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  };

  return /*#__PURE__*/_react.default.createElement(_Sidebar.StyledSideBar, _extends({
    id: id,
    title: title,
    position: position
  }, props), title ? /*#__PURE__*/_react.default.createElement(_Sidebar.StyledSideBar, null, /*#__PURE__*/_react.default.createElement(_Sidebar.StyledSideBarTitle, null, title), /*#__PURE__*/_react.default.createElement(_Sidebar.StyledSideBarBody, null, children)) : isDrawer === 'true' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Sidebar.StyledSideBar, {
    id: id,
    isDrawer: true
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "closeIcon",
    onClick: handleClose
  }, "\xD7"), children), /*#__PURE__*/_react.default.createElement(_Sidebar.MainWrapper, {
    id: "main"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: handleOpen,
    btnType: "success"
  }, "Open"))) : /*#__PURE__*/_react.default.createElement(_Sidebar.StyledSideBar, props, children));
};
/* ============As for now drawer functionality is on hold==============*/

/*const handleOpen = () => {
  document.getElementById("Sidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

const handleClose = () => {
  document.getElementById("Sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
  if(isDrawer===true){
    return(
        <>
           <StyledSideBar id={id} isDrawer>
            <a className="closeIcon" onClick={handleClose}>&times;</a>
            {children}
        </StyledSideBar>
        <MainWrapper id="main">
            <Button onClick={handleOpen} btnType="success">Open</Button>
        </MainWrapper>
        </>
    )}   */


var _default = Sidebar;
exports.default = _default;