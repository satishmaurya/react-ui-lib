import React from "react";
import {StyledSearchBox,StyledForm} from "./SearchBox.styled";

const SearchBox = (props) =>{
    const { placeholder,children, size, bg, borderRadius, value } = props;
    return(
            <StyledForm inline>
                <StyledSearchBox borderRadius={borderRadius} bg={bg} size={size} type="text" placeholder={placeholder} {...props} />
                {children}
            </StyledForm>
    );
}

export default SearchBox;