import React from "react";
import {StyledRow} from "./Rows.styled";

const Rows = (props) =>{
    const {children, justifyItems, justifyContent, alignItems} = props;
    return(
        <StyledRow justifyItems={justifyItems} justifyContent={justifyContent} alignItems={alignItems} {...props}>
            {children}
        </StyledRow>
    );
}

export default Rows;