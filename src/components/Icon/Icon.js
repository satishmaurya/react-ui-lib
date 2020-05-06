import React from "react";
import StyledIcon from "./Icon.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = (props) =>{
    const { isDisabled, iconVariant, rounded, children, name, size, onClick, borderRadius, color, bg, animation, rotation} = props;
    return(
        <StyledIcon rounded={rounded} disabled={isDisabled} variant={iconVariant} {...props}>
            {iconVariant==='regular' ? <FontAwesomeIcon icon={['far',name]} size={size} rotation={rotation} color={color} animation /> 
            : iconVariant==='solid' ? <FontAwesomeIcon icon={['fas',name]} size={size} rotation={rotation} color={color} animation /> 
            : <FontAwesomeIcon icon={['fas',name]} size={size} rotation={rotation} color={color} animation /> }
            {children}
        </StyledIcon>
    );
}

export default Icon;