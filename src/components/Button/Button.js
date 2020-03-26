import React from "react";
import StyledButton from "./Button.styled";

const Button = (props) =>{
    const {btnType, isDisabled, btnVariant, rounded, children, size, block, icon} = props;
    return(
        <StyledButton rounded={rounded} color={btnType} disabled={isDisabled} variant={btnVariant} size={size} block={block}>
            {children}
        </StyledButton>
    );
}

export default Button;