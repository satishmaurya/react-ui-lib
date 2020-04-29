function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import StyledNav from "./NavBar.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = props => {
  const {
    fixed,
    isDisabled,
    btnVariant,
    rounded,
    children,
    size,
    block,
    icon,
    iconVariant
  } = props;
  return React.createElement(StyledNav, _extends({
    fixed: fixed
  }, props), children);
};

export default NavBar;