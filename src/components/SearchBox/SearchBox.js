import React from "react";
import {StyledSearchBox,StyledForm} from "./SearchBox.styled";

const SearchBox = (props) =>{
    const { placeholder,children, size, bg, borderRadius, onFocus } = props;
    return(
            <StyledForm inline>
                <StyledSearchBox borderRadius={borderRadius} bg={bg} size={size} type="text" placeholder={placeholder}
                onFocus={onFocus} />
                {children}
            </StyledForm>
    );
}

export default SearchBox;