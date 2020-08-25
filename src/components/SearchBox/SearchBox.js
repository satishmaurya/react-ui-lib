import React from "react";
import {StyledSearchBox,StyledForm} from "./SearchBox.styled";

const SearchBox = (props) =>{
<<<<<<< HEAD
    const { placeholder,children, size, bg, borderRadius, value } = props;
    return(
            <StyledForm inline>
                <StyledSearchBox borderRadius={borderRadius} bg={bg} size={size} type="text" placeholder={placeholder} {...props} />
=======
    const { placeholder,children, size, bg, borderRadius, onFocus } = props;
    return(
            <StyledForm inline>
                <StyledSearchBox borderRadius={borderRadius} bg={bg} size={size} type="text" placeholder={placeholder}
                onFocus={onFocus} />
>>>>>>> 0dea991634887a54c95ff77738402f0488d00a27
                {children}
            </StyledForm>
    );
}

export default SearchBox;