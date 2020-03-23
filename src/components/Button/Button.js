import React from "react";
import StyledButton from "./Button.styled";

const Button = (props) =>{
    const {btnType, isDisabled, btnVariant, rounded, children} = props;
    return(
        <StyledButton rounded={rounded} color={btnType} disabled={isDisabled} variant={btnVariant}>{children}</StyledButton>
    );
}

export default Button;