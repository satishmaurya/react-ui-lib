function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import StyledNavBar from "./NavBar.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const NavBar = props => {
  const {
    btnType,
    isDisabled,
    bg,
    rounded,
    children,
    size,
    block,
    icon,
    iconVariant,
    onClick
  } = props;
  return React.createElement(StyledNavBar, _extends({
    bg: bg,
    color: btnType,
    disabled: isDisabled
  }, props), children);
};
export const NavBarChild = StyledNavBar;