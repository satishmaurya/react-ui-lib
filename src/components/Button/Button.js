import React from "react";
import {StyledButton,ButtonGroup} from "./Button.styled";

export const Button = (props) =>{
    const {btnType, isDisabled, btnVariant, rounded, children, size, block, icon, btnGroup} = props;
    
        return(
        <StyledButton rounded={rounded} color={btnType} disabled={isDisabled} variant={btnVariant} size={size} block={block}>
                {children}
        </StyledButton>
        );
    
    
};

export const ButtonGroups =(props)=>{
    const {btnType, isDisabled, btnVariant, rounded, children, size, block, icon, btnGroup} = props;
    if(btnGroup === "horizontal"){
        return(
            <ButtonGroup BtnGroup={btnGroup}>
                {children}
            </ButtonGroup>
        );
        
    }else if(btnGroup==="vertical"){
        return(
            <ButtonGroup BtnGroup={btnGroup}>
                {children}
            </ButtonGroup>
        );

    }
};