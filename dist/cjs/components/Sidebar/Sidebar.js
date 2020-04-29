import React from "react";
import { StyledSideBar, MainWrapper } from './Sidebar.styled';
import Button from '../Button/Button';

const Sidebar = props => {
  const {
    children,
    id,
    isDrawer
  } = props;

  const handleOpen = () => {
    document.getElementById("Sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  };

  const handleClose = () => {
    document.getElementById("Sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  };

  if (isDrawer === true) {
    return React.createElement(React.Fragment, null, React.createElement(StyledSideBar, {
      id: id,
      isDrawer: true
    }, React.createElement("a", {
      className: "closeIcon",
      onClick: handleClose
    }, "\xD7"), children), React.createElement(MainWrapper, {
      id: "main"
    }, React.createElement("h2", null, "SideBar"), React.createElement(Button, {
      onClick: handleOpen,
      btnType: "success"
    }, "Open")));
  } else {
    return React.createElement(React.Fragment, null, React.createElement(StyledSideBar, null, children));
  }
};

export default Sidebar;