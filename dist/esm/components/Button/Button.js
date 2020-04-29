function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import StyledButton from "./Button.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = props => {
  const {
    btnType,
    isDisabled,
    btnVariant,
    rounded,
    children,
    size,
    block,
    icon,
    iconVariant,
    onClick,
    borderRadius
  } = props;
  return React.createElement(StyledButton, _extends({
    rounded: rounded,
    color: btnType,
    disabled: isDisabled,
    variant: btnVariant
  }, props), icon && iconVariant === 'regular' ? React.createElement(FontAwesomeIcon, {
    icon: ['far', icon]
  }) : iconVariant === 'solid' ? React.createElement(FontAwesomeIcon, {
    icon: ['fas', icon]
  }) : React.createElement(FontAwesomeIcon, {
    icon: ['fas', icon]
  }), children);
};

export default Button;