function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { StyledRow } from "./Rows.styled";

const Rows = props => {
  const {
    children,
    justifyItems,
    justifyContent,
    alignItems
  } = props;
  return React.createElement(StyledRow, _extends({
    justifyItems: justifyItems,
    justifyContent: justifyContent,
    alignItems: alignItems
  }, props), children);
};

export default Rows;