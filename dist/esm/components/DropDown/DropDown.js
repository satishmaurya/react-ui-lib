function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import StyledDropDown from "./DropDown.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DropDown = props => {
  const {
    btnType,
    id,
    isDisabled,
    className,
    btnVariant,
    children,
    rounded,
    size,
    block,
    Iconsize,
    icon,
    iconVariant,
    options
  } = props;
  return React.createElement(StyledDropDown, null, React.createElement(StyledDropDown.Toggle, _extends({
    variant: btnType,
    className: className,
    type: btnVariant,
    size: size,
    disabled: isDisabled,
    rounded: rounded,
    block: block,
    id: id
  }, props), "DropDown", icon && iconVariant === 'regular' ? React.createElement(FontAwesomeIcon, {
    icon: ['far', icon],
    Iconsize: Iconsize
  }) : iconVariant === 'solid' ? React.createElement(FontAwesomeIcon, {
    icon: ['fas', icon],
    Iconsize: Iconsize
  }) : React.createElement(FontAwesomeIcon, {
    icon: ['fas', icon],
    Iconsize: Iconsize
  }), children), React.createElement(StyledDropDown.Menu, null, options.map((item, key) => React.createElement(StyledDropDown.Item, {
    href: item.link
  }, item.item))));
};

export default DropDown;