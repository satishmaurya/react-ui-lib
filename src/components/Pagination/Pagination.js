import React from "react";
import StyledPagination from "./Pagination.styled";
// import Pagination from 'react-bootstrap/Pagination';

const StackPagination = (props) =>{
    const{ children, bgColor, paginationType, size} =props;
    
    return(
        <StyledPagination bgColor={bgColor} size={size}  paginationType={paginationType}>
            {children}
        </StyledPagination>
    )
    
}

export default StackPagination;