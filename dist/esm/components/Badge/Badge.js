import React from "react";
import BadgeWrapper from 'react-bootstrap/Badge';

const Badge = props => {
  const {
    children,
    pill,
    variant
  } = props;
  return React.createElement(BadgeWrapper, {
    pill: pill,
    variant: variant
  }, children);
};

export default Badge;