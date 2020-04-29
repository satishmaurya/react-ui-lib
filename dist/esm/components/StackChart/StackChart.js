function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import StyledChart from "./StackChart.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StackChart = props => {
  const {
    children,
    size,
    options,
    series,
    type,
    width,
    height,
    labels
  } = props;
  return React.createElement(StyledChart, _extends({
    options: options,
    series: series,
    type: type,
    width: width,
    height: height
  }, props), children);
};

export default StackChart;