import React from "react";
import StyledSpinner from 'react-bootstrap/Spinner';

const Spinner = props => {
  const {
    children,
    animation,
    as,
    size,
    variant
  } = props;
  return React.createElement(StyledSpinner, {
    size: size,
    animation: animation,
    as: as,
    variant: variant
  }, children);
};

export default Spinner;