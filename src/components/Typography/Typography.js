import React from 'react';
import StyledTypography from './Typography.styled';

const Typography = (props) => {
  const { children, type, as, isBold, isItalic } = props;

    return (
      <StyledTypography type={type} as={as} isBold={isBold} isItalic={isItalic}>
        {children}
      </StyledTypography>
    );
}

export default Typography;
