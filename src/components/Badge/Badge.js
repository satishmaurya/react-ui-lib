import React from "react";
import BadgeWrapper from 'react-bootstrap/Badge'

const Badge = (props) => {
  const { children, pill, variant} = props;
  return (
    <BadgeWrapper pill={pill} variant={variant}>
      {children}
    </BadgeWrapper>
  );
}

export default Badge;