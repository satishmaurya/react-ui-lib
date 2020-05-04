import React from "react";
import StyledBreadcum from "./Breadcum.styled";

const Breadcum = (props) =>{
    const{ children, bgColor, paginationType, size} =props;
    
    return(
        <StyledBreadcum bgColor={bgColor} size={size}  paginationType={paginationType}>
            {children}
        </StyledBreadcum>
    )
    
}

export {Breadcum,StyledBreadcum};