import React from "react";
import BadgeWrapper from 'react-bootstrap/Badge';
import StyledBadge from './Badge.styled';

const Badge = (props) => {
  const { children, pill, variant, bgColor, color} = props;
  return (
      <StyledBadge bgColor={bgColor} color={color}>
    <BadgeWrapper pill={pill} variant={variant}>
      {children}
    </BadgeWrapper>
    </StyledBadge>
  );
}

export default Badge;